// clase generalizada 'cuenta' ------------->

export class cuenta {
  // atributos secretos:
  #usuario;
  #saldo;

  // cuenta que transfiere, deposita y retira ***
  constructor(/*tipo,*/ usuario, numero, agencia, saldo) {
    // error al instanciar cuenta ***:
    if(this.constructor == cuenta) {
      throw new Error(" *** PROHIBIDO instanciar objetos de la clase 'cuenta' *** ");
    };
    // atributos públicos:
    this.numero = numero;
    this.agencia = agencia;
    this.#usuario = usuario;
    this.#saldo = saldo;
  }

    /**
   * @param {import("../Cliente").cliente} valor
   */
     set usuario(valor) {
      if (valor instanceof cliente) this.#usuario = valor;
    }
  
    get usuario() {
      return this.#usuario;
    }

  deposito(importe) {
    if (importe > 0) {
      this.#saldo += importe;
      parseFloat(this.#saldo).toFixed(2);
      console.log("** Depósito realizado con éxito por: $" + parseFloat(importe).toFixed(2) + " **");
      console.log( "** " + this.#usuario.nombreCliente + ", tu nuevo saldo es de: $" + parseFloat(this.#saldo).toFixed(2) + " MXN **");
      return parseFloat(this.#saldo).toFixed(2);
    } else {
      console.log(`Operación no válida.`);
      parseFloat(this.#saldo).toFixed(2);
      return parseFloat(this.#saldo).toFixed(2);
    }
  }

  retiro(importe) {
    // método abstracto
    throw new Error ("Implementar método 'retiro' en su clase");
    // this._retiro(importe, 0);
  }

  _retiro(importe, comision) {
    importe = importe * (1 + comision / 100);
    if (importe <= this.#saldo) {
    this.#saldo -= importe;
    parseFloat(this.#saldo).toFixed(2);
    console.log("** Retiro realizado con éxito por: $" + importe.toFixed(2) + " **");
    console.log( "** " + this.#usuario.nombreCliente + ", tu nuevo saldo es de: $" + parseFloat(this.#saldo).toFixed(2) + " MXN **");
    return parseFloat(this.#saldo).toFixed(2);
      } else {
        console.log(`Operación no válida.`);
        parseFloat(this.#saldo).toFixed(2);
        return parseFloat(this.#saldo).toFixed(2);
      }
  }

  verSaldo() {
    return (this.#usuario.nombreCliente + ", el saldo en tu cuenta es de: $ " + parseFloat(this.#saldo).toFixed(2) + " MXN");
  }

  transferirParaCuenta(importe, cuentaDestino) {
    this.retiro(importe);
    cuentaDestino.deposito(importe);
    console.log("** Transferencia realizada con éxito por: $" + (this.#saldo).toFixed(2) + " **");
    console.log( "** " + this.#usuario.nombreCliente + ", tu nuevo saldo es de: $" + parseFloat(this.#saldo).toFixed(2) + " MXN **");
  };
};