var jSon={
	"servicios":
	[
		{
			"categoria":"01",
			"codigo":"vClaro",
			"descripcion":"Claro"
		},
		{
			"categoria":"01",
			"codigo":"vMovistar",
			"descripcion":"Movistar"
		},
		{
			"categoria":"01",
			"codigo":"vBitel",
			"descripcion":"Bitel"
		},
		{
			"categoria":"01",
			"codigo":"vEntel",
			"descripcion":"Entel"
		},
		{
			"categoria":"01",
			"codigo":"vVirgin",
			"descripcion":"Virgin"
		},
		{
			"categoria":"02",
			"codigo":"vClarotv",
			"descripcion":"Claro TV"
		},
		{
			"categoria":"02",
			"codigo":"vMovistartv",
			"descripcion":"MovistarTV"
		}
	]
};

var jSonServAdicionales={
	"servicios":[]
};
function f_inicio(){		
	f_OdenarData(jSon);	
	f_llenarCombo(jSon,"cmbServPendientes");
	
}

function f_llenarCombo(data,nombCombo){
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

function f_verServicios(){
	window.open("./listas.html",)
}