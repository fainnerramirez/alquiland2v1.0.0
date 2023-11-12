import { toast } from "react-toastify";

export const errorManagment = (error) => {
    switch (error) {
        case 'auth/invalid-login-credentials':
            toast.error("Credenciales Incorrectas. ¡Verifica nuevamente!", {
                theme: "colored",
                position: "top-center"
            })
            break;

        case 'auth/invalid-email':
            toast.error("Correo Inválido. Escribe un correo válido", {
                theme: "colored",
                position: "top-center"
            })
            break;

        case 'auth/email-already-in-use':
            toast.error("Este correo ya existe!. Inicia Sesión", {
                theme: "colored",
                position: "top-center"
            })
            break;
        default:
            toast.error("Ha ocurrido un error desconocido. Comunicate con el equipo de Uninpensiones", {
                theme: "colored",
                position: "top-center"
            })
            break;
    }
}