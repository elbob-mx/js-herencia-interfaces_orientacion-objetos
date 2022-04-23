// clase cuenta de ahorros ------------------>

import { cuenta } from "./Cuenta.js";

export class cuentaAhorro extends cuenta {
  // constructor cuenta ahorros ***
  constructor(usuario, numero, agencia, saldo) {
    super(usuario, numero, agencia, saldo);
  };

  retiro(importe) {
    // importe = importe * 1.02;
    super._retiro(importe, 2);
  };
};
