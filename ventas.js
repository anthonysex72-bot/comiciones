const VENTAS_BASEE=5;


function calcularComision(numeroVentas ,precioProducto){
    let comision=0;
    if(numeroVentas > VENTAS_BASEE){
        let ventasExtras=numeroVentas-VENTAS_BASEE;
        comision=ventasExtras * (precioProducto*0.10);
    }
    return comision;
}


function calcular(){
    //recuperamos propiedades de la caja de texto
    //let componenteSueldoBase=document.getElementById("txtSueldoBase");
    //let componenteVenta=document.getElementById("txtVentas");
    //let componentePrecio=document.getElementById("txtPrecio");

    //recuperamos el valor con numero,mediante value
    //let sueldoBaseStr=componenteSueldoBase.value;

    //let sueldoBaseStr=recuperarTexto("txtSueldoBase");
    //let numeroDeVentasStr=recuperarTexto("txtVentas");
    //let precioProductoStr=recuperarTexto("txtPrecio");
    
    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroDeVentas=recuperarFloat("txtVentas");
    let precioProducto=recuperarFloat("txtPrecio");
    
    
    //let numeroDeVentasStr=componenteVenta.value;
   // let precioProductoStr=componentePrecio.value;

    //comvertimos el texto a numero y guardamos en variables diferentes cada proceso
    //let sueldoBase=parseFloat(sueldoBaseStr);
    //let numeroDeVentas=parseFloat(numeroDeVentasStr);
    //let precioProducto=parseFloat(precioProductoStr);

    let comision=calcularComision(numeroDeVentas,precioProducto);

    let total=sueldoBase + comision;

    //let spSueldoBase=document.getElementById("spSueldoBase");
    //let spComicion=document.getElementById("spComision");
    //let spTotal=document.getElementById("spTotal");

    //spSueldoBase.textContent=sueldoBase;
    //spComicion.textContent=comision;
    //spTotal.textContent=total;


    mostrarEnSpan("spSueldoBase",sueldoBase);
    mostrarEnSpan("spComision",comision);
    mostrarEnSpan("spTotal",total);

}


