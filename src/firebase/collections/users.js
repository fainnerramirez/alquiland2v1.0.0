import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firestore/database";

// Función para obtener las publicaciones de un usuario específico
export const obtenerPublicacionesDeUsuario = async (userId) => {
    try {
        const userPostsCollectionRef = collection(doc(db, "anfitriones", userId), "PromotionsAnfitrion");
        const querySnapshot = await getDocs(userPostsCollectionRef);

        return querySnapshot;
    } catch (error) {
        throw error;
    }
}