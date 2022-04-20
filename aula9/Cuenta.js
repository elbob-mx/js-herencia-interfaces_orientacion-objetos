// clase generalizada 'cuenta' ------------->

export class cuenta {
    // atributos secretos:
  #usuario;
  #saldo;

  // cuenta que transfiere, deposita, retira ***
  constructor(tipo, usuario, numero, agencia, saldo) {
    // atributos públicos:
    this.tipo = tipo;
    this.numero = numero;
    this.agencia = agencia;
    this.#usuario = usuario;
    this.#saldo = saldo;
  }

  deposito(importe) {
    if (importe > 0) {
      this.#saldo += importe;
      parseFloat(this.#saldo).toFixed(2);
      console.log("** Depósito realizado con éxito por: $" + parseFloat(importe).toFixed(2) + " **");
      console.log("** " + this.#usuario.nombreCliente + ", tu nuevo saldo es de: $" + parseFloat(this.#saldo).toFixed(2) + " MXN **");
      return parseFloat(this.#saldo).toFixed(2);
    } else {
      console.log(`Operación no válida.`);
      parseFloat(this.#saldo).toFixed(2);
      return parseFloat(this.#saldo).toFixed(2);
    }
  }

  retiro(importe) {
    if(this.tipo == "Corriente") {
    importe = importe * 1.05;
    } else if (this.tipo == "Ahorros") {
      importe = importe * 1.02;
    };
      if (importe <= this.#saldo) {
        this.#saldo -= importe;
        parseFloat(this.#saldo).toFixed(2);
        console.log("** Depósito realizado con éxito por: $" + importe + " **");
        console.log("** " + this.#usuario.nombreCliente + ", tu nuevo saldo es de: $" + parseFloat(this.#saldo).toFixed(2) + " MXN **");
        return parseFloat(this.#saldo).toFixed(2);
      } else {
        console.log(`Operación no válida.`);
        parseFloat(this.#saldo).toFixed(2);
        return parseFloat(this.#saldo).toFixed(2);
      };
  };

  verSaldo() {
    return (this.#usuario.nombreCliente + ", el saldo en tu cuenta es de: $ " + parseFloat(this.#saldo).toFixed(2) + " MXN");
  }

  transferirParaCuenta(importe, cuentaDestino) {
    this.retiro(importe);
    cuentaDestino.deposito(importe);
    console.log(
      "** Transferencia realizada con éxito por: $" + this.#saldo + " **");
    console.log("** " + this.#usuario.nombreCliente + ", tu nuevo saldo es de: $" + parseFloat(this.#saldo).toFixed(2) + " MXN **");
  }
};