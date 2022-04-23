// clase cuenta corriente ------------------>

import { cuenta } from "./Cuenta.js";

export class cuentaCorriente extends cuenta {
  static cantidadCuentas = 0;
  
  // constructor cuenta corriente ***
  constructor(usuario, numero, agencia) {
    super(usuario, numero, agencia, 0);
    cuentaCorriente.cantidadCuentas++;
  };

  retiro(importe) {
    // importe = importe * 1.05;
    super._retiro(importe, 5);
  };
};
