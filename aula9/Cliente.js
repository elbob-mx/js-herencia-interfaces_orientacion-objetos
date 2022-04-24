// clase cliente ----------------->

export class cliente {
    nombreCliente;
    ocrCliente;
    nipCliente;
    #clave;

    constructor(nombreCliente, ocrCliente, nipCliente) {
      this.nombreCliente = nombreCliente;
      this.ocrCliente = ocrCliente;
      this.nipCliente = nipCliente;
      this.#clave = "";
    };

    asignarClave(clave) {
      this.#clave = clave;
    };

    autenticable(clave) {
      return true;
    };

  };