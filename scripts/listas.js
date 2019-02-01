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
			"paquete_desc":"Movistar MSM",
			"servicio_cod":"07",
			"servicio_desc":"300 Mensajes"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"04",
			"paquete_desc":"Movistar MSM",
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
		},
		{
			"clasificacion_id":"3",
			"clasificacion_desc":"GPRS",
			"paquete_id":"05",
			"paquete_desc":"Claro GPRS",
			"servicio_cod":"10",
			"servicio_desc":"GPRS Premium"
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
			"paquete_desc":"Movistar MSM",
			"servicio_cod":"07",
			"servicio_desc":"300 Mensajes"
		},
		{
			"clasificacion_id":"2",
			"clasificacion_desc":"SMS",
			"paquete_id":"04",
			"paquete_desc":"Movistar MSM",
			"servicio_cod":"08",
			"servicio_desc":"Mensajes Audio"
		}
	]
};
var JsonGrabados2={};
var jsonAgregadosGrabados2={};
var codPlan="";
var contenidoBtn="";

function f_inicio(){		
	//f_OdenarData(jSon);	
	codPlan=getParameterByName("codPlan");
	var strJSonGrabados = window.opener.jsonGrabados;
	 var strJsonAgregadosGrabados=window.opener.jsonAgregadosGrabados;
	 var codPlanGrabado=window.opener.codPlanGrabado;
	 	 
	if(strJsonAgregadosGrabados=="" ){ //primera vez
		if(codPlan=="codPlan1"){
			JsonGrabados2=jSon2;
		}
		else{
			JsonGrabados2=jSon3;
		}		
		jsonAgregadosGrabados2={
						"servicios":[]
						};
		
		f_CrearBotones(JsonGrabados2);
	}
	else{//n veces
		
		if(codPlan!=codPlanGrabado){//cambio de plan
			if(codPlan=="codPlan1"){
				JsonGrabados2=jSon2;
				f_CrearBotones(JsonGrabados2);
			}
			else{
				JsonGrabados2=jSon3;
				f_CrearBotones(JsonGrabados2);
			}
			
			jsonAgregadosGrabados2={
							"servicios":[]
							};
		}
		else{//no cambio de plan
			JsonGrabados2=JSON.parse(strJSonGrabados);
			jsonAgregadosGrabados2=JSON.parse(strJsonAgregadosGrabados);
			f_formarEstructuraGrabada();
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

function f_CrearBotones(data){
	var tamData=data["servicios"].length;
	var clasificacionesIdCreadas=[];
	for(var i=0;i<tamData;i++){
		var clasificacion_id=data["servicios"][i].clasificacion_id;		
		if(clasificacionesIdCreadas.indexOf(clasificacion_id)==-1){
			contenidoBtn+="<input type='button' id='btn";
			contenidoBtn+=data["servicios"][i].clasificacion_desc;
			contenidoBtn+="' value='";
			contenidoBtn+=data["servicios"][i].clasificacion_desc;
			contenidoBtn+="' onclick='f_opcionSeleccionada(this)'>";
			clasificacionesIdCreadas.push(clasificacion_id);
		}
		
	}	
	document.getElementById("divBotones").innerHTML=contenidoBtn;
}

function f_formarEstructuraGrabada(){
	document.getElementById("divBotones").innerHTML=window.opener.botonesGrabados;
}


function f_llenarLista(data,nombCombo){
	var comboGeneral=document.getElementById(nombCombo);	
	
	var contenido="";
	for(var i=0;i<data["servicios"].length;i++){
		contenido+="<option value=";
		contenido+=data["servicios"][i].codigo;
		contenido+=">";
		contenido+=data["servicios"][i].descripcion;
		contenido+="</option>";
	}
	comboGeneral.innerHTML=contenido;
}

function f_MovIzquierda(){
	//debugger;
	var cmbServPendientes=document.getElementById("cmbServPendientes");
	if(cmbServPendientes.selectedIndex==-1){
		alert("Seleccione un servicio.");
		return;
	}
	var optSeleccionada=cmbServPendientes.options[cmbServPendientes.selectedIndex];
	var CodServicio=[optSeleccionada.value];	
	var dataSerAdicionales="";
	var objTemporal={};	
	var servicios=jSon["servicios"];	
	var i=servicios.length;
	var tamjSonServAdicionales=jSonServAdicionales["servicios"].length;
	while(i--){
		if(CodServicio.indexOf(servicios[i].codigo)!=-1){
			dataSerAdicionales+='{';
			dataSerAdicionales+='"categoria":"';
			dataSerAdicionales+=servicios[i].categoria;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"codigo":"';
			dataSerAdicionales+=servicios[i].codigo;
			dataSerAdicionales+='",';
			dataSerAdicionales+='"descripcion":"';
			dataSerAdicionales+=servicios[i].descripcion;
			dataSerAdicionales+='"}';
			objTemporal=JSON.parse(dataSerAdicionales);
			jSonServAdicionales["servicios"].splice(tamjSonServAdicionales+1,0,objTemporal);
			servicios.splice(i,1);
			dataSerAdicionales="";
		}
	}
	f_OdenarData(jSon);
	f_llenarCombo(jSon,"cmbServPendientes");
	f_OdenarData(jSonServAdicionales);
	f_llenarCombo(jSonServAdicionales,"cmdServAgregados");
	
} 

function f_MovDerecha(){
	var cmdServAgregados=document.getElementById("cmdServAgregados");
	if(cmdServAgregados.selectedIndex==-1){
		alert("Seleccione un servicio Adicional.");
		return;
	}
	var optSeleccionada=cmdServAgregados.options[cmdServAgregados.selectedIndex];
	var CodServicio=[optSeleccionada.value];
	var dataServiciosTemporal="";
	var objTemporal={};	
	var servicios=jSonServAdicionales["servicios"];	
	var i=servicios.length;
	var tamjSon=jSon["servicios"].length;
	while(i--){
		if(CodServicio.indexOf(servicios[i].codigo)!=-1){
			dataServiciosTemporal+='{';
			dataServiciosTemporal+='"categoria":"';
			dataServiciosTemporal+=servicios[i].categoria;
			dataServiciosTemporal+='",';
			dataServiciosTemporal+='"codigo":"';
			dataServiciosTemporal+=servicios[i].codigo;
			dataServiciosTemporal+='",';
			dataServiciosTemporal+='"descripcion":"';
			dataServiciosTemporal+=servicios[i].descripcion;
			dataServiciosTemporal+='"}';
			objTemporal=JSON.parse(dataServiciosTemporal);
			jSon["servicios"].splice(tamjSon+1,0,objTemporal);
			servicios.splice(i,1);
			dataServiciosTemporal="";
		}
	}
	f_OdenarData(jSon);
	f_llenarCombo(jSon,"cmbServPendientes");
	f_OdenarData(jSonServAdicionales);
	f_llenarCombo(jSonServAdicionales,"cmdServAgregados");
}

function f_OdenarData(data){
	data["servicios"].sort(function(a,b){
			if(a.descripcion == b.descripcion) return 0;
			if(a.descripcion < b.descripcion) return -1;
			if(a.descripcion > b.descripcion) return 1;
	});
}

function f_btnCerrar(){
	window.opener.jsonGrabados=JSON.stringify(JsonGrabados2);
	 window.opener.jsonAgregadosGrabados=JSON.stringify(jsonAgregadosGrabados2);	
	 window.opener.codPlanGrabado=codPlan;
	 window.opener.botonesGrabados=contenidoBtn;
	window.close();
}

var jSonServAdicionales={
	"servicios":[]
};


