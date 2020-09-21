function newAjax(){
    if(window.XMLHttpRequest) {
      objetoAjax = new XMLHttpRequest();
    } else{
      objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
      return objetoAjax;
}

function loadCausas(tabla){
  let objetoAjax = newAjax();
  objetoAjax.open("GET", `logica/cargarRecursosConvi.php?tabla=${tabla}`, true);
  objetoAjax.send();

  objetoAjax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let json = JSON.parse(this.responseText);
      
      let destino  = document.getElementById("destinoCausa");
        
      clearDOM(destino);


      for (let i in json){

        let option = document.createElement("option");

            option.value=json[i].id;

            option.appendChild(document.createTextNode(json[i].denominacion));

          destino.appendChild(option); 
    }
    
    let otro = document.createElement("option");
    otro.value = 'otra';
    otro.appendChild(document.createTextNode("-- Quiero introducir otra causa --"));
    destino.appendChild(otro);
  };
}
}

function insert(idAlumno,idProfesor,idAsignatura,fecha,idCausa) {

    if(idCausa == "otra"){
      let tabla = "causamonestacion";
        insertCausa(document.getElementById("otraCausa").value,tabla);
    }

  let objetoAjax = newAjax();
    objetoAjax.open("GET", `logica/insertAmonesta.php?idAlumno=${idAlumno}&idProfesor=${idProfesor}&idAsignatura=${idAsignatura}&fecha=${fecha}&idCausa=${idCausa}`, true);
    objetoAjax.send();

    objetoAjax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //let json = JSON.parse(this.responseText);
      }
    };
}

function insertCausa(causa,tabla) {
  let objetoAjax = newAjax();
    objetoAjax.open("GET", `logica/insertCausa.php?causa=${causa}&tabla=${tabla}`, true);
    objetoAjax.send();

    objetoAjax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       // let json = JSON.parse(this.responseText);
      }
    };
}

function insertExpulsion(idAlumno,idProfesor,idAsignatura,fecha,idCausa) {

  if(idCausa == "otra"){
    let tabla = "causaexpulsion";
      insertCausa(document.getElementById("otraCausa").value,tabla);
  }

let objetoAjax = newAjax();
  objetoAjax.open("GET", `logica/insertExpulsion.php?idAlumno=${idAlumno}&idProfesor=${idProfesor}&idAsignatura=${idAsignatura}&fecha=${fecha}&idCausa=${idCausa}`, true);
  objetoAjax.send();

  objetoAjax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //let json = JSON.parse(this.responseText);
    }
  };
}