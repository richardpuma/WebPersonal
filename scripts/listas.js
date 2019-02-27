var jSon2={
	"servicios":
	[
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"01",
			"servicio_desc":"Internet Inalambrico"			
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"02",
			"servicio_desc":"Internet Fijo"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"03",
			"servicio_desc":"Cable Satelital"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"04",
			"servicio_desc":"Bloqueo de Numeros"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"02",
			"paquete_desc":"Bitel Basicos",
			"servicio_cod":"05",
			"servicio_desc":"Llamadas de emergencia"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"02",
			"paquete_desc":"Bitel Basicos",
			"servicio_cod":"04",
			"servicio_desc":"Bloqueo de Numeros"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"03",
			"paquete_desc":"Claro SMS",
			"servicio_cod":"06",
			"servicio_desc":"Mensajes Gratis"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"03",
			"paquete_desc":"Claro SMS",
			"servicio_cod":"07",
			"servicio_desc":"300 Mensajes"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"03",
			"paquete_desc":"Claro SMS",
			"servicio_cod":"08",
			"servicio_desc":"Mensajes Audio"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"04",
			"paquete_desc":"Movistar SMS",
			"servicio_cod":"07",
			"servicio_desc":"300 Mensajes"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"04",
			"paquete_desc":"Movistar SMS",
			"servicio_cod":"08",
			"servicio_desc":"Mensajes Audio"
		},
		{
			"clasificacion_id":"3",
			"clasificacion_desc":"GPRS",
			"paquete_id":"05",
			"paquete_desc":"Claro GPRS",
			"servicio_cod":"09",
			"servicio_desc":"GPRS Gratis"
		}
	]
};

var jSon3={
	"servicios":
	[
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"01",
			"servicio_desc":"Internet Inalambrico"			
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"02",
			"servicio_desc":"Internet Fijo"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"03",
			"servicio_desc":"Cable Satelital"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"01",
			"paquete_desc":"Claro Basicos",
			"servicio_cod":"04",
			"servicio_desc":"Bloqueo de Numeros"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"02",
			"paquete_desc":"Bitel Basicos",
			"servicio_cod":"05",
			"servicio_desc":"Llamadas de emergencia"
		},
		{
			"clasificacion_id":"1",
			"clasificacion_desc":"Basicos",
			"paquete_id":"02",
			"paquete_desc":"Bitel Basicos",
			"servicio_cod":"04",
			"servicio_desc":"Bloqueo de Numeros"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"03",
			"paquete_desc":"Claro SMS",
			"servicio_cod":"06",
			"servicio_desc":"Mensajes Gratis"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"03",
			"paquete_desc":"Claro SMS",
			"servicio_cod":"07",
			"servicio_desc":"300 Mensajes"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"03",
			"paquete_desc":"Claro SMS",
			"servicio_cod":"08",
			"servicio_desc":"Mensajes Audio"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"04",
			"paquete_desc":"Movistar SMS",
			"servicio_cod":"07",
			"servicio_desc":"300 Mensajes"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"04",
			"paquete_desc":"Movistar SMS",
			"servicio_cod":"08",
			"servicio_desc":"Mensajes Audio"
		}
	]
};
var JsonGrabados2={};
var jsonAgregadosGrabados2={};
var codPlan="";
var clasificacionesIdCreadas=[];

function f_inicio(){			
	codPlan=getParameterByName("codPlan");
	var strJSonGrabados = window.opener.jsonGrabados;
	 var strJsonAgregadosGrabados=window.opener.jsonAgregadosGrabados;
	 var codPlanGrabado=window.opener.codPlanGrabado;
	 	 
	if(strJsonAgregadosGrabados=="" ){ //primera vez
		if(codPlan=="CodPlan1"){
			JsonGrabados2=jSon2;
		}
		else{
			JsonGrabados2=jSon3;
		}		
		jsonAgregadosGrabados2={
						"servicios":[]
						};
		
		f_CrearBotones(JsonGrabados2,jsonAgregadosGrabados2);	
		f_OdenarDataPaquete(JsonGrabados2);	
		f_CrearLista(JsonGrabados2,"divServPendientes","Basicos");//harcodeo
		f_OdenarDataPaquete(jsonAgregadosGrabados2);
		f_CrearLista(jsonAgregadosGrabados2,"divServAgregados","Basicos");//har
	}
	else{//n veces
		
		if(codPlan!=codPlanGrabado){//cambio de plan
			if(codPlan=="CodPlan1"){
				JsonGrabados2=jSon2;
			}
			else{
				JsonGrabados2=jSon3;				
			}
			
			jsonAgregadosGrabados2={
							"servicios":[]
							};
			f_CrearBotones(JsonGrabados2,jsonAgregadosGrabados2);
			f_OdenarDataPaquete(JsonGrabados2);		
			f_CrearLista(JsonGrabados2,"divServPendientes","Basicos");//harcodeo
			f_OdenarDataPaquete(jsonAgregadosGrabados2);	
			f_CrearLista(jsonAgregadosGrabados2,"divServAgregados","Basicos");//har
		}
		else{//no cambio de plan
			//debugger;
			JsonGrabados2=JSON.parse(strJSonGrabados);
			jsonAgregadosGrabados2=JSON.parse(strJsonAgregadosGrabados);
			f_CrearBotones(JsonGrabados2,jsonAgregadosGrabados2);
			f_OdenarDataPaquete(JsonGrabados2);	
			f_CrearLista(JsonGrabados2,"divServPendientes","Basicos");//harcodeo
			f_OdenarDataPaquete(jsonAgregadosGrabados2);
			f_CrearLista(jsonAgregadosGrabados2,"divServAgregados","Basicos");//har
		}
		
	}
	//f_llenarLista(jSon,"cmbServPendientes");
	
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function f_CrearBotones(dataIzquierda,dataDerecha){
	var tamDataIzqui=dataIzquierda["servicios"].length;
	var tamDataDerecha=dataDerecha["servicios"].length;	
	var contenidoBtn="";
	for(var i=0;i<tamDataIzqui;i++){
		var clasificacion_id=dataIzquierda["servicios"][i].clasificacion_id;		
		if(clasificacionesIdCreadas.indexOf(clasificacion_id)==-1){
			contenidoBtn+="<input type='button' id='btn-";
			contenidoBtn+=dataIzquierda["servicios"][i].clasificacion_desc;
			contenidoBtn+="' value='";
			contenidoBtn+=dataIzquierda["servicios"][i].clasificacion_desc;
			contenidoBtn+="' onclick='f_opcionSeleccionada(this)'>";
			clasificacionesIdCreadas.push(clasificacion_id);
		}		
	}
	for(var i=0;i<tamDataDerecha;i++){
		var clasificacion_id=dataDerecha["servicios"][i].clasificacion_id;		
		if(clasificacionesIdCreadas.indexOf(clasificacion_id)==-1){
			contenidoBtn+="<input type='button' id='btn-";
			contenidoBtn+=dataDerecha["servicios"][i].clasificacion_desc;
			contenidoBtn+="' value='";
			contenidoBtn+=dataDerecha["servicios"][i].clasificacion_desc;
			contenidoBtn+="' onclick='f_opcionSeleccionada(this)'>";
			clasificacionesIdCreadas.push(clasificacion_id);
		}		
	}		
	document.getElementById("divBotones").innerHTML=contenidoBtn;
}

function f_opcionSeleccionada(btnSeleccionado){
	var valueBtn=btnSeleccionado.value;
	f_cambiarEstilo(btnSeleccionado);
	f_CrearLista(JsonGrabados2,"divServPendientes",valueBtn);
	f_CrearLista(jsonAgregadosGrabados2,"divServAgregados",valueBtn);
}

function f_cambiarEstilo(btnSeleccionado){
	btnSeleccionado.style.background="#F7D358"
}
function f_CrearLista(data,divContenedor,clasificacion_desc){
	var listaEstilo="";
	if(divContenedor=="divServPendientes")
	{
		listaEstilo="ddlistaIzquierda";
	}
	else{
		listaEstilo="ddlistaDerecha";
	}
	var contenidoLista="<dl>";
	var tamDataList=data["servicios"].length;
	var paquete_id_creadas=[];
	for(var i=0;i<tamDataList;i++){
		if(clasificacion_desc==data["servicios"][i].clasificacion_desc){
			var paquete_id=data["servicios"][i].paquete_id;		
			if(paquete_id_creadas.indexOf(paquete_id)==-1){
				contenidoLista+="<dt>";
				contenidoLista+=data["servicios"][i].paquete_desc;
				contenidoLista+="</dt>";
				paquete_id_creadas.push(paquete_id);
			}
			contenidoLista+="<dd class='"
			contenidoLista+=listaEstilo;
			contenidoLista+="'>";
			contenidoLista+="<input type='checkbox' id='";
			contenidoLista+=data["servicios"][i].clasificacion_id+"-";
			contenidoLista+=data["servicios"][i].paquete_id+"-";
			contenidoLista+=data["servicios"][i].servicio_cod;
			contenidoLista+="' value='";
			contenidoLista+=data["servicios"][i].clasificacion_id+"-";
			contenidoLista+=data["servicios"][i].paquete_id+"-";
			contenidoLista+=data["servicios"][i].servicio_cod;
			contenidoLista+="'>";
			contenidoLista+="<label for='";
			contenidoLista+=data["servicios"][i].clasificacion_id+"-";
			contenidoLista+=data["servicios"][i].paquete_id+"-";
			contenidoLista+=data["servicios"][i].servicio_cod;
			contenidoLista+="'>";
			contenidoLista+=data["servicios"][i].servicio_desc;
			contenidoLista+="</label>";
			contenidoLista+="</dd>";
		}		
	}
	contenidoLista+="</dl>";
	document.getElementById(divContenedor).innerHTML=contenidoLista;
}

function f_MovIzquierda(){
	//debugger;
	var listaIzquierda=document.getElementsByClassName("ddlistaIzquierda");	
	if(!(f_validarCheck(listaIzquierda))){
		alert("Seleccione un elemento");
		return;
	}
	var listPaqCodServSelect=f_obtenerPaqCodServSelect(listaIzquierda);
	//var idPaquete=listPaqCodServSelect.split("-")[0];
	//var CodServicio=listPaqCodServSelect.split("-")[1];
	var tipoClasificacionDesc="";	
	var dataSerAdicionales="";
	var objTemporal={};	
	var servicios=JsonGrabados2["servicios"];	
	var i=servicios.length;
	var tamjsonAgregadosGrabados2=jsonAgregadosGrabados2["servicios"].length;
	while(i--){
		if(listPaqCodServSelect.indexOf(servicios[i].clasificacion_id+"-"+servicios[i].paquete_id+"-"+servicios[i].servicio_cod)!=-1){	
			tipoClasificacionDesc=servicios[i].clasificacion_desc;		
			dataSerAdicionales+='{';
			dataSerAdicionales+='"clasificacion_id":"';
			dataSerAdicionales+=servicios[i].clasificacion_id;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"clasificacion_desc":"';
			dataSerAdicionales+=servicios[i].clasificacion_desc;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"paquete_id":"';
			dataSerAdicionales+=servicios[i].paquete_id;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"paquete_desc":"';
			dataSerAdicionales+=servicios[i].paquete_desc;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"servicio_cod":"';
			dataSerAdicionales+=servicios[i].servicio_cod;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"servicio_desc":"';
			dataSerAdicionales+=servicios[i].servicio_desc;
			dataSerAdicionales+='"}';
			objTemporal=JSON.parse(dataSerAdicionales);
			jsonAgregadosGrabados2["servicios"].splice(tamjsonAgregadosGrabados2+1,0,objTemporal);
			servicios.splice(i,1);
			dataSerAdicionales="";			
		}
	}
	f_OdenarDataPaquete(JsonGrabados2);	
	f_CrearLista(JsonGrabados2,"divServPendientes",tipoClasificacionDesc);
	f_OdenarDataPaquete(jsonAgregadosGrabados2);	
	f_CrearLista(jsonAgregadosGrabados2,"divServAgregados",tipoClasificacionDesc);
	
} 

function f_validarCheck(lista){
	var valor=false;
	if(lista!="" || lista != null){
		for(var i=0;i<lista.length;i++){
			if(lista[i].childNodes[0].checked){
				valor=true;
			}
		}	
	}
	return valor;
}

function f_obtenerPaqCodServSelect(lista){
	var listPaqCodSelec=[];
	if(lista!="" || lista != null){
		for(var i=0;i<lista.length;i++){
			if(lista[i].childNodes[0].checked){
				listPaqCodSelec.push(lista[i].childNodes[0].value);
			}
		}	
	}
	return listPaqCodSelec;
}

function f_MovDerecha(){
	debugger;
	var listaDerecha=document.getElementsByClassName("ddlistaDerecha");	
	if(!(f_validarCheck(listaDerecha))){
		alert("Seleccione un elemento");
		return;
	}
	var listPaqCodServSelect=f_obtenerPaqCodServSelect(listaDerecha);
	//var idPaquete=listPaqCodServSelect.split("-")[0];
	//var CodServicio=listPaqCodServSelect.split("-")[1];
	var tipoClasificacionDesc="";	
	var dataSerAdicionales="";
	var objTemporal={};	
	var servicios=jsonAgregadosGrabados2["servicios"];	
	var i=servicios.length;
	var tamjsonGrabados2=JsonGrabados2["servicios"].length;
	while(i--){
		if(listPaqCodServSelect.indexOf(servicios[i].clasificacion_id+"-"+servicios[i].paquete_id+"-"+servicios[i].servicio_cod)!=-1){	
			tipoClasificacionDesc=servicios[i].clasificacion_desc;		
			dataSerAdicionales+='{';
			dataSerAdicionales+='"clasificacion_id":"';
			dataSerAdicionales+=servicios[i].clasificacion_id;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"clasificacion_desc":"';
			dataSerAdicionales+=servicios[i].clasificacion_desc;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"paquete_id":"';
			dataSerAdicionales+=servicios[i].paquete_id;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"paquete_desc":"';
			dataSerAdicionales+=servicios[i].paquete_desc;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"servicio_cod":"';
			dataSerAdicionales+=servicios[i].servicio_cod;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"servicio_desc":"';
			dataSerAdicionales+=servicios[i].servicio_desc;
			dataSerAdicionales+='"}';
			objTemporal=JSON.parse(dataSerAdicionales);
			JsonGrabados2["servicios"].splice(tamjsonGrabados2+1,0,objTemporal);
			servicios.splice(i,1);
			dataSerAdicionales="";			
		}
	}
	//f_OdenarData(jSon);
	//f_llenarCombo(jSon,"cmbServPendientes");
	//f_OdenarData(jSonServAdicionales);
	//f_llenarCombo(jSonServAdicionales,"cmdServAgregados");
	//debugger;
	//f_OdenarData(JsonGrabados2);
	f_CrearLista(JsonGrabados2,"divServPendientes",tipoClasificacionDesc);
	f_CrearLista(jsonAgregadosGrabados2,"divServAgregados",tipoClasificacionDesc);
}

function f_OdenarDataPaquete(data){	
	debugger;
	var tamData=data["servicios"].length;
	//var tamDataDerecha=dataDerecha["servicios"].length;	
	//for(var i=0;i<tamData;i++){
		//var clasificacion_id=data["servicios"][i].clasificacion_id
		//if(clasificacionesIdCreadas.indexOf(clasificacion_id)!=-1){
			data["servicios"].sort(function(a,b){
				if(a.paquete_desc == b.paquete_desc) return 0;
				if(a.paquete_desc < b.paquete_desc) return -1;
				if(a.paquete_desc > b.paquete_desc) return 1;
			});
		//}
	//}
	
}

function f_btnCerrar(){
	//debugger;
	window.opener.jsonGrabados=JSON.stringify(JsonGrabados2);
	 window.opener.jsonAgregadosGrabados=JSON.stringify(jsonAgregadosGrabados2);	
	 window.opener.codPlanGrabado=codPlan;
	window.close();
}

var jSonServAdicionales={
	"servicios":[]
};


