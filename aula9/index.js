// IMPORTACIÓN DE CLASES ---------------------->
// movimientos de cuenta Laura ----------->

import { cliente } from "./Cliente.js";
import { cuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { cuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
// import { cuenta } from "./Cuenta.js";


// variables *** //
const usuario = new cliente("Laura", "850690845005", "2115");
const usuario2 = new cliente("Dana", "099433671834", "5593");

const empleado = new Empleado("Chema", "699382890149");


// const cuentaDeLaura = new cuentaCorriente(usuario, "58280270", "022");
// const cuentaDeDana = new cuentaCorriente(usuario2, "84250304", "028");

// const cuentaAhorroLaura = new cuentaAhorro(usuario, "764946", "022", 10000.829);
// const cuentaAhorroDana = new cuentaAhorro(usuario2, "407356", "028", 835.5);

// const cuentaNominaLaura = new CuentaNomina(usuario, "654961", "022", 100);

// cuentaNominaLaura.deposito(4500);
// console.log(cuentaNominaLaura.verSaldo());
// cuentaNominaLaura.retiro(3000);
// console.log(cuentaNominaLaura.verSaldo());


// // cliente usuario Laura ----------------------->
// let saldo = cuentaDeLaura.verSaldo();
// saldo = cuentaDeLaura.deposito(1000);


// // nuevo cliente 2 ------------------------->
// saldo = cuentaDeDana.deposito(2350.756);
// saldo = cuentaDeDana.retiro(800);
// saldo = cuentaAhorroDana.retiro(30);
// saldo = cuentaAhorroLaura.retiro(10);


// // resumen cuentas ----------------------------------------------->
// let paramValor = 100;
// cuentaDeLaura.transferirParaCuenta(paramValor, cuentaDeDana);

// console.log(cuentaDeLaura);
// console.log(cuentaAhorroLaura);
// console.log(cuentaDeDana);
// console.log(cuentaAhorroDana);