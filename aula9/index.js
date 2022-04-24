// IMPORTACIÓN DE CLASES ---------------------->
// movimientos de cuenta Laura ----------->

import { cliente } from "./Cliente.js";
import { Director } from "./Empleados/Director.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";
// import { cuentaAhorro } from "./Cuentas/CuentaAhorro.js";
// import { cuentaCorriente } from "./Cuentas/CuentaCorriente.js";
// import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
// import { cuenta } from "./Cuenta.js";


// variables *** //
const usuario = new cliente("Laura", "850690845005", "2115");
usuario.asignarClave("algunafechaa");
console.log(SistemaAutenticacion.login(usuario, "algunafecha"));

// const usuario2 = new cliente("Dana", "099433671834", "5593");

const empleado = new Empleado("Laisa Mora", "699382890149", 8000);
empleado.asignarClave("ño");
console.log(SistemaAutenticacion.login(empleado, "ño"));

const gerente = new Gerente("Indiana Mora", "716754489281", 12000);
gerente.asignarClave("password");
console.log(SistemaAutenticacion.login(gerente, "password"));

const director = new Director("Horacio Mora", "331575759356", 20000);
gerente.asignarClave("jamon");
console.log(SistemaAutenticacion.login(gerente, "jamon"));

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());



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