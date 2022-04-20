// IMPORTACIÓN DE CLASES ---------------------->
// movimientos de cuenta Laura ----------->

import { cliente } from "./Cliente.js";
import { cuenta } from "./Cuenta.js";
// import { cuentaCorriente } from "./CuentaCorriente.js";
// import { cuentaAhorro } from "./CuentaAhorro.js";

// variables *** //

const usuario = new cliente("Laura", "850690845005", "2115");
const usuario2 = new cliente("Dana", "099433671834", "5593");

const cuentaDeLaura = new cuenta(usuario, "58280270", "022", 0);
const cuentaDeDana = new cuenta(usuario2, "84250304", "028", 0);

const cuentaAhorroLaura = new cuenta(usuario, "764946", "022", 0);

// cliente usuario Laura ----------------------->
let saldo = cuentaDeLaura.verSaldo();
console.log("El saldo actual es: $ " + saldo + " MXN");

saldo = cuentaDeLaura.deposito(1000);
console.log("El saldo actual es: $ " + saldo + " MXN");
// saldo = cuentaDeLaura.verSaldo();
// console.log(
//   "El saldo actual de " +
//     usuario.nombreCliente +
//     " es de: " +
//     "$" +
//     cuentaDeLaura.verSaldo() +
//     "MXN"
// );

// nuevo cliente 2 ------------------------->
// if(cuentaDeDana.cliente) {
//     console.log(cuentaDeDana.cliente)
// } else {
//     console.log(cuentaDeDana);
// };

saldo = cuentaDeDana.deposito(103475.756);
// saldo = cuentaDeDana.retiro(3475.756);
// saldo = cuentaDeDana.retiro(99999.99);

// resumen cuentas ------------------------------->
// console.log("Cuenta de Laura: ", cuentaDeLaura);
// console.log("Cuenta de Laura: ", cuentaDeLaura.verSaldo());
// console.log("Cuenta de Dana: ", cuentaDeDana);
// console.log("Cuenta de Dana: ", cuentaDeDana.verSaldo());

// let paramValor = 100;

// console.log("Parámetro 'Valor'", paramValor);
// cuentaDeLaura.transferirParaCuenta(paramValor, cuentaDeDana);
// console.log("Parámetro 'Valor'", paramValor);

console.log("el saldo actual de " + usuario2.nombreCliente + " es de: " + "$" + cuentaDeDana.verSaldo() + "MXN");
console.log("El saldo actual de " + usuario.nombreCliente + " es de: " + "$" + cuentaDeLaura.verSaldo() + "MXN");

// console.log(cuentaDeLaura.usuario);
// console.log(cuentaDeDana.usuario);
// console.log("CANTIDAD DE CUENTAS CORRIENTES TOTALES: " + cuentaCorriente.cantidadCuentas);
console.log(cuentaDeLaura);
console.log(cuentaAhorroLaura);
console.log(cuentaDeDana);