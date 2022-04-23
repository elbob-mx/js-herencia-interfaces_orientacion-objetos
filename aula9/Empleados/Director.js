// clase director ------------------>

import { Empleado } from "./Empleado.js";

export class Director extends Empleado {
  // constructor cuenta ahorros ***
  constructor(nombre, ocr) {
    super(nombre, ocr);
  };
};