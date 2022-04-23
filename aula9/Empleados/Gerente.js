// clase gerente ------------------>

import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado {
  // constructor cuenta ahorros ***
  constructor(nombre, ocr, salario) {
    super(nombre, ocr, salario);
  };
};