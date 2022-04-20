// IMPORTACIÓN DE CLASES ---------------------->
// movimientos de cuenta Laura ----------->

import { cliente } from "./Cliente.js";
import { cuenta } from "./Cuenta.js";
// import { cuentaCorriente } from "./CuentaCorriente.js";
// import { cuentaAhorro } from "./CuentaAhorro.js";

// variables *** //

const usuario = new cliente("Laura", "850690845005", "2115");
const usuario2 = new cliente("Dana", "099433671834", "5593");

const cuentaDeLaura = new cuenta(usuario, "58280270", "022", 500);
const cuentaDeDana = new cuenta(usuario2, "84250304", "028", 0);

const cuentaAhorroLaura = new cuenta(usuario, "764946", "022", 10000.829);

// cliente usuario Laura ----------------------->
let saldo = cuentaDeLaura.verSaldo();
console.log(cuentaDeLaura.verSaldo());

saldo = cuentaDeLaura.deposito(1000);
console.log("El saldo actual es: $ " + saldo + " MXN");

// nuevo cliente 2 ------------------------->
// if(cuentaDeDana.cliente) {
//     console.log(cuentaDeDana.cliente)
// } else {
//     console.log(cuentaDeDana);
// };

saldo = cuentaDeDana.deposito(103475.756);

// resumen cuentas ----------------------------------------------->

let paramValor = 100;
cuentaDeLaura.transferirParaCuenta(paramValor, cuentaDeDana);

console.log(cuentaDeDana.verSaldo());
console.log(cuentaDeLaura.verSaldo());

// console.log("CANTIDAD DE CUENTAS CORRIENTES TOTALES: " + cuentaCorriente.cantidadCuentas);

saldo = cuentaAhorroLaura.retiro(100);
console.log(cuentaAhorroLaura.verSaldo());
saldo = cuentaAhorroLaura.retiro(1000.766);