let matrizVendas = [

    [100, 200, 300], //loja a indice 0
    [400, 500, 50],  //loja b indice 1
    [700,400, 450],  //loja c indice 2
]
 
// LOJA A
 
//matrizVendas[0][0] = 800;

//console.log(matrizVendas[0]);
//--------------------------------------------------------------------------------------------------------------
// LOJA B
matrizVendas[1][1] = 1000;

//console.log(matrizVendas[1]);
//---------------------------------------------------------------------------------------------------------------
// LOJA C
//matrizVendas[2][2] = 1200;

//console.log(matrizVendas[2]);

//-------------------------------------------------------------------------------------------------------------

let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];

console.log(resultadoLojaB);