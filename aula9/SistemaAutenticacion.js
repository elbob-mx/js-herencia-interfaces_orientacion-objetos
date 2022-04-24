// sistema de autenticacipn para clientes / empleados ***

export class SistemaAutenticacion {
    static login(usuario, clave) {
        if ("autenticable" in usuario && usuario.autenticable instanceof Function) {
        return usuario.autenticable(clave); /*true o false*/
    } else {
        return false; /*resultado invariable de lo que aqui se defina, falso o verdadero*/
        };
    };
};