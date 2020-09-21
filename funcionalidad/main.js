let profesor;

window.onload = init;

function botonesNav(){

/*
    let titulo = document.getElementById("tituloH4");

    if(titulo.childNodes[0].nodeValue === "Expulsiones"){
        navDivExpu.class="active";
        navDiv.removeAttribute("class");

    }else if(titulo.childNodes[0].nodeValue === "Amonestaciones"){
        navDiv.class="active";
        navDivExpu.removeAttribute("class");

    }

        
    if(testigo == true){    

        navDiv.setAttribute("onclick","createAmonesta()"); */

       let nav = document.getElementsByTagName("nav");

        let navDivInit = nav[0].childNodes[1];

        let navDivAmonesta = nav[0].childNodes[3];

        let navDivExpu = nav[0].childNodes[5];


        navDivInit.setAttribute("onclick","init()");

        navDivExpu.setAttribute("onclick","createExpulsiones()");

        navDivAmonesta.setAttribute("onclick","newAmonesta()");

        

    /*
        navDiv.classList.add('active');
    } */
}

function init(){

    clearDOM();

    let nav = document.getElementsByTagName("nav");

        let initDiv = nav[0].childNodes[1];

            initDiv.classList.add('active');

            let navDivAmonesta = nav[0].childNodes[3];

            let navDivExpu = nav[0].childNodes[5];
    
            navDivExpu.setAttribute("onclick","");
    
            navDivAmonesta.setAttribute("onclick","");

    let main = document.getElementsByTagName("main");

        let sectionInfo = document.createElement("section");

            sectionInfo.setAttribute("id","info");
        
            let h4 = document.createElement("h4");

                h4.appendChild(document.createTextNode("Por favor, identifiquese."));

            let parraf = document.createElement("p");

                parraf.appendChild(document.createTextNode(" Cualquier problema, contacte con un administrador. "));

            let loginContainer = document.createElement("article");

                loginContainer.setAttribute("style","displa:flex; flex-direction:row; margin-top:20px");

                    let divUser = document.createElement("div");

                        divUser.setAttribute("style","display:flex; flex-direction:column");

                    let spanUser = document.createElement("span");

                        spanUser.setAttribute("style","margin-bottom:10px");

                        spanUser.appendChild(document.createTextNode("Introduzca su nombre y su apellido"));

                    let inputUser = document.createElement("input");

                        inputUser.setAttribute("id","inputUser");

                    let buttonLogin = document.createElement("button");

                        buttonLogin.setAttribute("style","margin-top:10px; padding:10px");

                        buttonLogin.setAttribute("onclick","loginProfesor()");

                        buttonLogin.appendChild(document.createTextNode("Iniciar Sesión"));

                    divUser.appendChild(spanUser);

                    divUser.appendChild(inputUser);
                
                loginContainer.appendChild(divUser);

                loginContainer.appendChild(buttonLogin);

            sectionInfo.appendChild(h4);

            sectionInfo.appendChild(parraf);

            sectionInfo.appendChild(loginContainer);

        main[0].appendChild(sectionInfo);

}

function clearDOM(padre = 'main'){

    let main;
    if(padre == 'main'){
        main = document.getElementsByTagName("main")[0];
    }else{
        main = padre;
    }

    for(let i = 0; i < main.childNodes.length; i = 0){
        let myChild = main.childNodes[0];
        myChild.parentNode.removeChild(myChild);
    }

    let nav = document.getElementsByTagName("nav");

    for(let i=0; i< nav[0].childNodes.length; i++){
1
        try{

            nav[0].childNodes[i].classList.remove("active");

        }catch(Exception){}
    }
}     

function loginProfesor(){
 

    let datos = document.getElementById("inputUser").value;

    let posi = datos.search(" ");

    let nombre = datos.substring(0,posi);

    let apellido = datos.substring(posi+1,datos.length);

    fetch(`./logica/loginProfesor.php?nombre=${nombre}&apellido=${apellido}`)
        .then(response => {
            datos = response.json();
            return datos;
        })
        .then(myJson=>{

            profesor = myJson;

            clearDOM();

            let main = document.getElementsByTagName("main");

            let nav = document.getElementsByTagName("nav");

            let initDiv = nav[0].childNodes[1];
    
                initDiv.classList.add('active');

            let sectionInfo = document.createElement("section");
    
                sectionInfo.setAttribute("id","info");
            
                let h4 = document.createElement("h4");
    
                    h4.appendChild(document.createTextNode(`Buenas ${profesor[0].nombreProfesor} ${profesor[0].apellidosProfesor}`));
    
                let parraf = document.createElement("p");

                    parraf.style.marginTop="20px";
    
                    parraf.appendChild(document.createTextNode(" Seleccione la opción que desea realizar. "));
    
                let loginContainer = document.createElement("article");
    
                    loginContainer.setAttribute("style","displa:flex; flex-direction:row; margin-top:20px");
    
                        let divUser = document.createElement("div");
    
                            divUser.setAttribute("style","display:flex; flex-direction:column");
    
                        let spanUser = document.createElement("span");
    
                            spanUser.setAttribute("style","margin-bottom:10px");
    
                            spanUser.appendChild(document.createTextNode("Cualquier problema, contacte con un administrador."));
    
                        divUser.appendChild(spanUser);  
                    
                    loginContainer.appendChild(divUser);

                sectionInfo.appendChild(h4);
    
                sectionInfo.appendChild(parraf);
    
                sectionInfo.appendChild(loginContainer);
    
            main[0].appendChild(sectionInfo);

           botonesNav();   

        })
        .catch(()=>{
            alert("El profesor no existe.");
            document.getElementById("inputUser").value = "";
        
        });
}

function newAmonesta(){

    clearDOM();

    let nav = document.getElementsByTagName("nav");

    let main = document.getElementsByTagName("main");

        let initDiv = nav[0].childNodes[3];

            initDiv.setAttribute("class","active");

        let divPadre = document.createElement("div");

            divPadre.style.display="flex";

            divPadre.style.flexDirection="column";

            divPadre.style.width="206px";

            divPadre.style.maxHeight="150px";

            divPadre.style.marginRight="207px";

            let divContainer = document.createElement("div");

                divContainer.style.display="flex";

                divContainer.style.flexDirection="row";

                divContainer.style.justifyContent="center";

                divContainer.style.marginRight="207px";

                divContainer.style.width="206px";

                divContainer.style.color="#FFF"

                divContainer.style.paddingTop="20px";

                divContainer.style.paddingBottom="20px";

                divContainer.style.maxHeight="60px";

                divContainer.style.transition="all 1s";

                divContainer.setAttribute("id","divNav");

                divContainer.setAttribute("class","active");

                divContainer.appendChild(document.createTextNode("Amonestar"));

                divContainer.onclick=()=>{
                    amonestar('amonestarTotal');
                    initDiv.setAttribute("class","active");
                };

        divPadre.appendChild(divContainer);

            if(profesor[0].perfilProfesor === "Jefe de estudios"){

            let divContainerTwo = document.createElement("div");

                divContainerTwo.style.display="flex";

                divContainerTwo.style.borderTop="solid 2px";

                divContainerTwo.style.color="#FFF";

                divContainerTwo.style.flexDirection="row";

                divContainerTwo.style.justifyContent="center";

                divContainerTwo.style.marginRight="207px";

                divContainerTwo.style.width="206px";

                divContainerTwo.style.color="#FFF"

                divContainerTwo.style.paddingTop="20px";

                divContainerTwo.style.paddingBottom="20px";

                divContainerTwo.style.maxHeight="60px";

                divContainerTwo.style.transition="all 1s";

                divContainerTwo.setAttribute("id","divNavTwo");

                divContainerTwo.setAttribute("class","active");

                divContainerTwo.appendChild(document.createTextNode("Listar"));

                divContainerTwo.onclick=()=>{
                    amonestar('listarAmonesta');
                    initDiv.setAttribute("class","active");
                };


        divPadre.appendChild(divContainerTwo);

        }

    main[0].appendChild(divPadre);

}

function amonestar(destino){

    clearDOM();
    
    let main = document.getElementsByTagName("main");

    let nav = document.getElementsByTagName("nav");
   
    let navDiv = nav[0].childNodes[3];

        navDiv.classList.add('active');    
        
    // select del grupo
    let yaExiste = [];
    let select = document.createElement("select");
    for(let i = 0; i < profesor.length; i++){
 
        if(yaExiste.indexOf(profesor[i].id_grupo) === -1 ){
            let option = document.createElement("option");
                option.id = `option-${i}`;
                option.appendChild(document.createTextNode(profesor[i].nombreGrupos));
                option.value = profesor[i].id_grupo;
            select.appendChild(option);
            yaExiste.push(profesor[i].id_grupo);
        }


    }


    // select del alumno
    let select2 = document.createElement("select");

        select2.setAttribute("id","destino");

        select2.style.marginLeft="20px";

    let sectionInfo = document.createElement("section");

        sectionInfo.setAttribute("id","infoAmonesta");

        sectionInfo.appendChild(select);

    let h3 =  document.createElement("h3");

        h3.appendChild(document.createTextNode("Seleccione el grupo y el alumno"));

        h3.style.marginBottom="10px";

        sectionInfo.appendChild(h3);
    
        let divInfo = document.createElement("div");

            divInfo.appendChild(select);

            divInfo.appendChild(select2);

            divInfo.style.justifyContent="space-around";

            divInfo.style.marginTop="15px";

            divInfo.style.display="flex";

            sectionInfo.appendChild(divInfo);

        main[0].appendChild(sectionInfo);

        //Cargar grupos
        for(let j=0; j < profesor.length; j++){

            let optionAlumno = document.createElement("option");

            if(select.value == profesor[j].id_grupo){

                optionAlumno.appendChild(document.createTextNode(profesor[j].nombreAlumno));

                optionAlumno.setAttribute("value",profesor[j].id); 

                select2.appendChild(optionAlumno);

            }
            
        }

        //Cargar alumnos segun grupo
        select.onchange = () =>{

            let hijos = select2.childNodes;

            for(let k=0; k < hijos.length+1; k++){

                hijos[0].parentNode.removeChild(hijos[0]);
            }


            for(let j=0; j < profesor.length; j++){

                let optionAlumno = document.createElement("option");
    
                if(select.value == profesor[j].id_grupo){
    
                    optionAlumno.appendChild(document.createTextNode(profesor[j].nombreAlumno));
    
                    optionAlumno.setAttribute("value",profesor[j].id); 
    
                    select2.appendChild(optionAlumno);
    
                }
                
            }
        };
         

    if(destino === "amonestarTotal"){

    let divInfo = document.createElement("div");

        divInfo.style.display="flex";

        divInfo.style.flexDirection="row";

        divInfo.style.justifyContent="space-around";

        let divCausa = document.createElement("div");

            divCausa.style.display="flex";

            divCausa.style.flexDirection="column";

                let h3 =  document.createElement("h3");

                    h3.appendChild(document.createTextNode("Seleccione la causa"));

                    h3.style.marginBottom="10px";

                    h3.style.marginTop="30px";

                    divCausa.appendChild(h3);

                let select = document.createElement("select");

                    select.id="destinoCausa";

                    select.style.textAlign="center";

                    select.style.width="50%";
                
                    select.style.margin="auto"; 

                    divCausa.appendChild(select);

                    let tabla = "causamonestacion";

                    loadCausas(tabla);
                    let otraCausa = document.createElement("div");
                    divCausa.appendChild(otraCausa);

                    select.onchange = () => {
                        clearDOM(otraCausa);
                        if(select.value == 'otra'){
                            let otraCausaTextarea = document.createElement("textarea");
                                otraCausaTextarea.style.marginTop = "10px";
                                otraCausaTextarea.id="otraCausa";
                                otraCausa.appendChild(otraCausaTextarea);
                            
                        }
                    }

            divInfo.appendChild(divCausa);
                
                let divFecha = document.createElement("div");

                divFecha.style.display="flex";

                divFecha.style.flexDirection="column";

                    let h3Fecha =  document.createElement("h3");

                        h3Fecha.appendChild(document.createTextNode("Seleccione la fecha"));

                        h3Fecha.style.marginBottom="10px";

                        h3Fecha.style.marginTop="30px";

                divFecha.appendChild(h3Fecha);

                    let inputFecha = document.createElement("input");

                        inputFecha.style.textAlign="center";

                        inputFecha.style.width="50%";
                        
                        inputFecha.style.margin="auto"; 

                        inputFecha.style.marginLeft="20px";

                        inputFecha.type="date"; 

                        inputFecha.value="";

                divFecha.appendChild(inputFecha);

            divInfo.appendChild(divFecha);
            
            sectionInfo.appendChild(divInfo);

            let infoFecha = document.createElement("p");

                infoFecha.style.marginTop="20px";

                infoFecha.appendChild(document.createTextNode("Si no selecciona ninguna fecha se escogerá la actual."));

            sectionInfo.appendChild(infoFecha);
                            
            let buttonSumit = document.createElement("button");

                buttonSumit.appendChild(document.createTextNode("Amonestar"));

                buttonSumit.style.width="30%";

                buttonSumit.style.marginTop="20px";

                buttonSumit.style.marginLeft="auto"; 
                buttonSumit.style.marginRight="auto"; 

                sectionInfo.appendChild(buttonSumit);

            buttonSumit.onclick = () => {

            let alumno = {
    
                grupo: select.value,
    
                id: select2.value,

                alumnoNombre: select2.childNodes[0].childNodes[0].nodeValue,
    
                profesor : profesor[0].id_profesor
    
            };

            let asignatura;
        
            for(let y=0; y < profesor.length; y++){
    
               if(profesor[y].id == alumno.id){
    
                  asignatura  = profesor[y].id_asignatura;
               }
    
            }

            let idAlumno = alumno.id;

            let idProfesor = alumno.profesor;
 
            let idAsignatura = asignatura;
 
            let idCausa = select.value;

            let fecha;

            if(inputFecha.value != ""){

                fecha = inputFecha.value;

            }else{

                let formatter = new Date();
                let anno = formatter.getUTCFullYear();
                let mes = formatter.getUTCMonth() + 1;
                let dia = formatter.getUTCDate();
                if(mes < 10){ mes = `0${mes}`; }
                if(dia < 10){ dia = `0${dia}`; }
    
            fecha = `${anno}-${mes}-${dia}`;

            } 

            
           insert(idAlumno, idProfesor, idAsignatura, fecha, idCausa);

           alert("Se ha registrado la amonestación.");

        }  


        }else if(destino === "listarAmonesta"){

            let buttonSumit = document.createElement("button");
        
                buttonSumit.appendChild(document.createTextNode("Listar"));
        
                buttonSumit.style.width="30%";
        
                buttonSumit.style.marginTop="20px";
        
                buttonSumit.style.marginLeft="auto"; 
                buttonSumit.style.marginRight="auto"; 
        
                sectionInfo.appendChild(buttonSumit);
        
                
                buttonSumit.onclick = () => {
        
                    let alumno = {
            
                        grupo: select.value,
            
                        id: select2.value,
        
                        alumnoNombre: select2.childNodes[0].childNodes[0].nodeValue,
            
                        profesor : profesor[0].id_profesor
            
                    };
        
                    
                   listarAmonesta(alumno);
        
                }      
        }

        navDiv.classList.add('active');   
}

function listarAmonesta(alumno){

    clearDOM();
    
    let nav = document.getElementsByTagName("nav");

    let navDiv = nav[0].childNodes[3];

    navDiv.setAttribute("class","active");

    let main = document.getElementsByTagName("main");

        let sectionInfo = document.createElement("section");

        sectionInfo.setAttribute("id","infoAmonestaListado");

        sectionInfo.style.display="flex";

        sectionInfo.style.flexDirection="column";

        let cabecera = document.createElement("div");

            cabecera.style.display="flex";

            cabecera.style.marginTop="10px";

            cabecera.style.borderTopLeftRadius="10px"

            cabecera.style.borderTopRightRadius="10px"

            cabecera.style.flexDirection="row";

            cabecera.style.justifyContent="space-around";

            cabecera.style.backgroundColor="#333";

            cabecera.style.padding="20px";

            cabecera.id = "cabeceraListado"

            let spanCausa = document.createElement("span");

                spanCausa.appendChild(document.createTextNode("Causa"));

                spanCausa.style.marginLeft="50px";

            let spanProfesor = document.createElement("span");

                spanProfesor.appendChild(document.createTextNode("Profesor"));

                spanProfesor.style.marginLeft="40px";

            let spanFecha = document.createElement("span");

                spanFecha.appendChild(document.createTextNode("Fecha"));

                spanFecha.style.marginLeft="120px";

            let spanSancionado = document.createElement("span");

                spanSancionado.appendChild(document.createTextNode("Sancionado"));

                spanSancionado.style.marginLeft="70px";
                
            let spanAsignatura = document.createElement("span");

                spanAsignatura.appendChild(document.createTextNode("Asignatura"));

                spanAsignatura.style.marginLeft="30px";

            let spanJefatura = document.createElement("span");

                spanJefatura.appendChild(document.createTextNode("Firma Jefatura"));

            cabecera.appendChild(spanAsignatura);

            cabecera.appendChild(spanProfesor);

            cabecera.appendChild(spanCausa);

            cabecera.appendChild(spanFecha);

            cabecera.appendChild(spanSancionado);

            cabecera.appendChild(spanJefatura);

        sectionInfo.appendChild(cabecera);
            
            
    fetch(`./logica/listarAmonesta.php?idAlumno=${alumno.id}`)
    .then(response => {
        datos = response.json();
        return datos;
    })
    .then(listado=>{

        console.log(listado);

        for(let i=0; i < listado.length; i++){

            fetch(`./logica/comprobar.php?idProfesor=${listado[i].id_profesor}&idAsignatura=${listado[i].id_asignatura}`)
            .then(response => {
                datos = response.json()
                return datos
            })
            .then(profesorC=>{

            let filaData = {}
    
                filaData = {
    
                    asignatura: profesorC[0].asignatura,
    
                    profesor: `${profesorC[0].nombreProfesor} ${profesorC[0].apellidosProfesor}`,
    
                    causa: listado[i].causa,
    
                    fecha: listado[i].fecha,
    
                    sancionado: "No",
    
                    firma: "Ninguna"
                }
        
            let cabeceraC = document.createElement("div");
    
                cabeceraC.style.display="flex";
    
                cabeceraC.style.flexDirection="row";
    
                cabeceraC.style.justifyContent="space-around";
    
                cabeceraC.style.backgroundColor="#FFF";
    
                cabeceraC.style.borderLeft="solid 2px"
    
                cabeceraC.style.borderRight="solid 2px"
    
                cabeceraC.style.borderBottom="solid 2px"
    
                cabeceraC.style.padding="20px";
    
                cabeceraC.setAttribute("class","cabeceraListadoContenido");
    
                cabeceraC.removeAttribute("id");
    
                let spanAsignaturaF = document.createElement("span");
    
                    spanAsignaturaF.appendChild(document.createTextNode(filaData.asignatura));

                let spanProfesorF = document.createElement("span");
    
                    spanProfesorF.appendChild(document.createTextNode(filaData.profesor));
                    
                let spanCausaF = document.createElement("span");
    
                    spanCausaF.appendChild(document.createTextNode(filaData.causa));

                let spanFechaF = document.createElement("span");
    
                    spanFechaF.appendChild(document.createTextNode(filaData.fecha));
                    
                let spanSancionadoF = document.createElement("span");
    
                    spanSancionadoF.appendChild(document.createTextNode(filaData.sancionado));

                let spanJefaturaF = document.createElement("span");
    
                    spanJefaturaF.appendChild(document.createTextNode(filaData.firma));

    
                cabeceraC.appendChild(spanAsignaturaF);
    
                cabeceraC.appendChild(spanProfesorF);
    
                cabeceraC.appendChild(spanCausaF);
    
                cabeceraC.appendChild(spanFechaF);
    
                cabeceraC.appendChild(spanSancionadoF);
    
                cabeceraC.appendChild(spanJefaturaF);
    
                sectionInfo.appendChild(cabeceraC);

            })
            .catch((error)=>{
                alert("Ha ocurrido un error inesperado, contacte con un administrador.");
                init();
            })

        }
    
    })
    .catch((error)=>{
      alert("El alumno no tiene amonestaciones.");
       amonestar("listarAmonesta");
    
    });

    main[0].appendChild(sectionInfo);

}
    
function createExpulsiones(){

    clearDOM();

    let nav = document.getElementsByTagName("nav");

    let main = document.getElementsByTagName("main");

        let initDiv = nav[0].childNodes[5];

            initDiv.setAttribute("class","active");

            console.log(nav[0].childNodes);

        let divPadre = document.createElement("div");

            divPadre.style.display="flex";

            divPadre.style.flexDirection="column";

            divPadre.style.width="206px";

            divPadre.style.maxHeight="150px";

            divPadre.style.marginRight="207px";

            let divContainer = document.createElement("div");

                divContainer.style.display="flex";

                divContainer.style.flexDirection="row";

                divContainer.style.justifyContent="center";

                divContainer.style.marginLeft="207px";

                divContainer.style.width="175px";

                divContainer.style.color="#FFF"

                divContainer.style.paddingTop="20px";

                divContainer.style.paddingBottom="20px";

                divContainer.style.maxHeight="60px";

                divContainer.style.transition="all 1s";

                divContainer.setAttribute("id","divNav");

                divContainer.setAttribute("class","active");

                divContainer.appendChild(document.createTextNode("Expulsar"));

                divContainer.onclick=()=>{expulsar('amonestarTotal')}

        divPadre.appendChild(divContainer);

            if(profesor[0].perfilProfesor === "Jefe de estudios"){

            let divContainerTwo = document.createElement("div");

                divContainerTwo.style.display="flex";

                divContainerTwo.style.borderTop="solid 2px";

                divContainerTwo.style.color="#FFF";

                divContainerTwo.style.flexDirection="row";

                divContainerTwo.style.justifyContent="center";

                divContainerTwo.style.marginLeft="207px";

                divContainerTwo.style.width="175px";

                divContainerTwo.style.color="#FFF"

                divContainerTwo.style.paddingTop="20px";

                divContainerTwo.style.paddingBottom="20px";

                divContainerTwo.style.maxHeight="60px";

                divContainerTwo.style.transition="all 1s";

                divContainerTwo.setAttribute("id","divNavTwo");

                divContainerTwo.setAttribute("class","active");

                divContainerTwo.appendChild(document.createTextNode("Listar"));

                divContainerTwo.onclick=()=>{expulsar('listarAmonesta')}

            divPadre.appendChild(divContainerTwo);

            let divContainerThree = document.createElement("div");

            divContainerThree.style.display="flex";

            divContainerThree.style.borderTop="solid 2px";

            divContainerThree.style.color="#FFF";

            divContainerThree.style.flexDirection="row";

            divContainerThree.style.justifyContent="center";

            divContainerThree.style.marginLeft="207px";

            divContainerThree.style.width="175px";

            divContainerThree.style.color="#FFF"

            divContainerThree.style.paddingTop="20px";

            divContainerThree.style.paddingBottom="20px";

            divContainerThree.style.maxHeight="60px";

            divContainerThree.style.transition="all 1s";

            divContainerThree.setAttribute("id","divNavTwo");

            divContainerThree.setAttribute("class","active");

            divContainerThree.appendChild(document.createTextNode("Gestionar"));

            divContainerThree.onclick=()=>{expulsar('gestionarExpulsiones')}

        divPadre.appendChild(divContainerThree);

        }

    main[0].appendChild(divPadre);

}

function expulsar(destino){


    clearDOM();

    botonesNav();
    
    let nav = document.getElementsByTagName("nav");

    let navDiv = nav[0].childNodes[5];

    let main = document.getElementsByTagName("main");

    navDiv.class="active";

       // select del grupo
       let yaExiste = [];
       let selectGrupo = document.createElement("select");
       for(let i = 0; i < profesor.length; i++){
    
           if(yaExiste.indexOf(profesor[i].id_grupo) === -1 ){
               let option = document.createElement("option");
                   option.id = `option-${i}`;
                   option.appendChild(document.createTextNode(profesor[i].nombreGrupos));
                   option.value = profesor[i].id_grupo;
                   selectGrupo.appendChild(option);
               yaExiste.push(profesor[i].id_grupo);
           }
   
   
       }
   
   
       // select del alumno
       let select2 = document.createElement("select");
   
           select2.setAttribute("id","destino");
   
           select2.style.marginLeft="20px";
   
       let sectionInfo = document.createElement("section");
   
           sectionInfo.setAttribute("id","infoAmonesta");
   
           sectionInfo.appendChild(selectGrupo);
   
       let h3 =  document.createElement("h3");
   
           h3.appendChild(document.createTextNode("Seleccione el grupo y el alumno"));
   
           h3.style.marginBottom="10px";
   
           sectionInfo.appendChild(h3);
       
           let divInfo = document.createElement("div");
   
               divInfo.appendChild(selectGrupo);
   
               divInfo.appendChild(select2);
   
               divInfo.style.justifyContent="space-around";
   
               divInfo.style.marginTop="15px";
   
               divInfo.style.display="flex";
   
               sectionInfo.appendChild(divInfo);
   
           main[0].appendChild(sectionInfo);
   
           //Cargar grupos
           for(let j=0; j < profesor.length; j++){
   
               let optionAlumno = document.createElement("option");
   
               if(selectGrupo.value == profesor[j].id_grupo){
   
                   optionAlumno.appendChild(document.createTextNode(profesor[j].nombreAlumno));
   
                   optionAlumno.setAttribute("value",profesor[j].id); 
   
                   select2.appendChild(optionAlumno);
   
               }
               
           }
   
           //Cargar alumnos segun grupo
           selectGrupo.onchange = () =>{
   
               let hijos = select2.childNodes;
   
               for(let k=0; k < hijos.length+1; k++){
   
                   hijos[0].parentNode.removeChild(hijos[0]);
               }
   
   
               for(let j=0; j < profesor.length; j++){
   
                   let optionAlumno = document.createElement("option");
       
                   if(select.value == profesor[j].id_grupo){
       
                       optionAlumno.appendChild(document.createTextNode(profesor[j].nombreAlumno));
       
                       optionAlumno.setAttribute("value",profesor[j].id); 
       
                       select2.appendChild(optionAlumno);
       
                   }
                   
               }
           };

        sectionInfo.style.display="flex";

        sectionInfo.style.flexDirection="column";

    if(destino == "amonestarTotal"){

            let h3Causa =  document.createElement("h3");

                h3Causa.appendChild(document.createTextNode("Seleccione la causa"));

                h3Causa.style.marginBottom="10px";

                h3Causa.style.marginTop="20px";

            sectionInfo.appendChild(h3Causa);

        main[0].appendChild(sectionInfo);

        let select = document.createElement("select");

            select.id="destinoCausa";

            select.style.textAlign="center";

            select.style.width="50%";
        
            select.style.margin="auto"; 

            sectionInfo.appendChild(select);

            let tabla = "causaexpulsion";

            loadCausas(tabla);
            let otraCausa = document.createElement("div");
        sectionInfo.appendChild(otraCausa);

            select.onchange = () => {
                clearDOM(otraCausa);
                if(select.value == 'otra'){
                    let otraCausaTextarea = document.createElement("textarea");
                        otraCausaTextarea.style.marginTop = "10px";
                        otraCausaTextarea.id="otraCausa";
                        otraCausa.appendChild(otraCausaTextarea);
                    
                }
            }
        
        


    let buttonSumit = document.createElement("button");

        buttonSumit.appendChild(document.createTextNode("Enviar"));

        buttonSumit.style.width="30%";

        buttonSumit.style.marginTop="20px";

        buttonSumit.style.marginLeft="auto"; 
        buttonSumit.style.marginRight="auto"; 
        
        sectionInfo.appendChild(buttonSumit);

        buttonSumit.onclick = () => {

            let alumno = {
    
                grupo: select.value,
    
                id: select2.value,

                alumnoNombre: select2.childNodes[0].childNodes[0].nodeValue,
    
                profesor : profesor[0].id_profesor
    
            };

            let asignatura;
        
            for(let y=0; y < profesor.length; y++){
    
               if(profesor[y].id == alumno.id){
    
                  asignatura  = profesor[y].id_asignatura;
               }
    
            }

            let idAlumno = alumno.id;

            let idProfesor = alumno.profesor;
 
            let idAsignatura = asignatura;
 
            let idCausa = select.value;

                let formatter = new Date();
                let anno = formatter.getUTCFullYear();
                let mes = formatter.getUTCMonth() + 1;
                let dia = formatter.getUTCDate();
                if(mes < 10){ mes = `0${mes}`; }
                if(dia < 10){ dia = `0${dia}`; }
    
            let fecha = `${anno}-${mes}-${dia}`;


           insertExpulsion(idAlumno, idProfesor, idAsignatura, fecha, idCausa);

           alert("Se ha registrado la expulsión.");

        }  

    }else if(destino === "listarAmonesta"){

        let buttonSumit = document.createElement("button");
    
            buttonSumit.appendChild(document.createTextNode("Listar"));
    
            buttonSumit.style.width="30%";
    
            buttonSumit.style.marginTop="20px";
    
            buttonSumit.style.marginLeft="auto"; 
            buttonSumit.style.marginRight="auto"; 
    
            sectionInfo.appendChild(buttonSumit);
    
            
            buttonSumit.onclick = () => {
    
                let alumno = {
        
                    grupo: selectGrupo.value,
        
                    id: select2.value,
    
                    alumnoNombre: select2.childNodes[0].childNodes[0].nodeValue,
        
                    profesor : profesor[0].id_profesor
        
                };
    
               listarExpulsiones(alumno);
    
            }      
    }

}

function listarExpulsiones(alumno){

    clearDOM();
    
    let nav = document.getElementsByTagName("nav");

    let navDiv = nav[0].childNodes[3];

    navDiv.setAttribute("class","active");

    let main = document.getElementsByTagName("main");

        let sectionInfo = document.createElement("section");

        sectionInfo.setAttribute("id","infoAmonestaListado");

        sectionInfo.style.display="flex";

        sectionInfo.style.flexDirection="column";

        let cabecera = document.createElement("div");

            cabecera.style.display="flex";

            cabecera.style.marginTop="10px";

            cabecera.style.borderTopLeftRadius="10px"

            cabecera.style.borderTopRightRadius="10px"

            cabecera.style.flexDirection="row";

            cabecera.style.justifyContent="space-around";

            cabecera.style.backgroundColor="#333";

            cabecera.style.padding="20px";

            cabecera.id = "cabeceraListado"

            let spanCausa = document.createElement("span");

                spanCausa.appendChild(document.createTextNode("Causa"));

                spanCausa.style.marginLeft="120px";

            let spanProfesor = document.createElement("span");

                spanProfesor.appendChild(document.createTextNode("Profesor"));

                spanProfesor.style.marginLeft="40px";

            let spanFecha = document.createElement("span");

                spanFecha.appendChild(document.createTextNode("Fecha"));

                spanFecha.style.marginLeft="120px";

            let spanSancionado = document.createElement("span");

                spanSancionado.appendChild(document.createTextNode("Sancionado"));

                spanSancionado.style.marginLeft="70px";
                
            let spanAsignatura = document.createElement("span");

                spanAsignatura.appendChild(document.createTextNode("Asignatura"));

                spanAsignatura.style.marginLeft="30px";

            let spanJefatura = document.createElement("span");

                spanJefatura.appendChild(document.createTextNode("Firma Jefatura"));

            cabecera.appendChild(spanAsignatura);

            cabecera.appendChild(spanProfesor);

            cabecera.appendChild(spanCausa);

            cabecera.appendChild(spanFecha);

            cabecera.appendChild(spanSancionado);

            cabecera.appendChild(spanJefatura);

        sectionInfo.appendChild(cabecera);
            
            
    fetch(`./logica/listarExpulsion.php?idAlumno=${alumno.id}`)
    .then(response => {
        datos = response.json();
        return datos;
    })
    .then(listado=>{

        console.log(listado);

        for(let i=0; i < listado.length; i++){

            fetch(`./logica/comprobar.php?idProfesor=${listado[i].id_profesor}&idAsignatura=${listado[i].id_asignatura}`)
            .then(response => {
                datos = response.json()
                return datos
            })
            .then(profesorC=>{

            let filaData = {}
    
                filaData = {
    
                    asignatura: profesorC[0].asignatura,
    
                    profesor: `${profesorC[0].nombreProfesor} ${profesorC[0].apellidosProfesor}`,
    
                    causa: listado[i].causa,
    
                    fecha: listado[i].fecha,
    
                    sancionado: "No",
    
                    firma: "Ninguna"
                }
        
            let cabeceraC = document.createElement("div");
    
                cabeceraC.style.display="flex";
    
                cabeceraC.style.flexDirection="row";
    
                cabeceraC.style.justifyContent="space-around";
    
                cabeceraC.style.backgroundColor="#FFF";
    
                cabeceraC.style.borderLeft="solid 2px"
    
                cabeceraC.style.borderRight="solid 2px"
    
                cabeceraC.style.borderBottom="solid 2px"
    
                cabeceraC.style.padding="20px";
    
                cabeceraC.setAttribute("class","cabeceraListadoContenido");
    
                cabeceraC.removeAttribute("id");
    
                let spanAsignaturaF = document.createElement("span");
    
                    spanAsignaturaF.appendChild(document.createTextNode(filaData.asignatura));

                let spanProfesorF = document.createElement("span");
    
                    spanProfesorF.appendChild(document.createTextNode(filaData.profesor));
                    
                let spanCausaF = document.createElement("span");
    
                    spanCausaF.appendChild(document.createTextNode(filaData.causa));

                let spanFechaF = document.createElement("span");
    
                    spanFechaF.appendChild(document.createTextNode(filaData.fecha));
                    
                let spanSancionadoF = document.createElement("span");
    
                    spanSancionadoF.appendChild(document.createTextNode(filaData.sancionado));

                let spanJefaturaF = document.createElement("span");
    
                    spanJefaturaF.appendChild(document.createTextNode(filaData.firma));

    
                cabeceraC.appendChild(spanAsignaturaF);
    
                cabeceraC.appendChild(spanProfesorF);
    
                cabeceraC.appendChild(spanCausaF);
    
                cabeceraC.appendChild(spanFechaF);
    
                cabeceraC.appendChild(spanSancionadoF);
    
                cabeceraC.appendChild(spanJefaturaF);
    
                sectionInfo.appendChild(cabeceraC);

            })
            .catch((error)=>{
                alert("Ha ocurrido un error inesperado, contacte con un administrador.");
                init();
            })

        }
    
    })
    .catch((error)=>{
      alert("El alumno no tiene expulsiones.");
       expulsar("listarAmonesta");
    
    });

    main[0].appendChild(sectionInfo);

}