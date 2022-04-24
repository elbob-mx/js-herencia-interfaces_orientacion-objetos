export class SistemaAutenticacion {
    static login(usuario, clave) {
        // console.log(clave);
        // console.log(empleado.clave);
        return usuario.clave == clave;
    };
};