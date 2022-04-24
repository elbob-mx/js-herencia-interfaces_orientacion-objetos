// clase director ------------------>

import { Empleado } from "./Empleado.js";

export class Director extends Empleado {
  // constructor cuenta ahorros ***
  constructor(nombre, ocr, salario) {
    super(nombre, ocr, salario);
  };

  verBonificacion(){
    const bono = 10;
    return super._verBonificacion(bono);
  };
};