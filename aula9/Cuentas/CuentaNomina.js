// clase cuenta de nómina ------------------>

import { cuenta } from "./Cuenta.js";

export class CuentaNomina extends cuenta {

    // constuctor cuenta ahorros ***
  constructor(usuario, numero, agencia, saldo) {
    super(usuario, numero, agencia, saldo);
  };

  retiro(importe) {
    // importe = importe * 1.02;
    super._retiro(importe, 1);
  };

};