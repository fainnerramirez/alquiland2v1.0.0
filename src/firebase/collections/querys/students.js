import { db } from '../../firestore/database';
import { collection, query, where, limit, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { errorManagment } from '../../errors/errorManagmentUser';
import { showSuccessAlert, showWarningAlert, showWarningAlertConfirm } from '../../../utils/SwalAlert';
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');

export const createStudent = async (options) => {
    return await addDoc(collection(db, "estudiantes"), options);
}

// export const getAnfitrionByUserId = async (userId) => {
//     try {
//         const q = query(collection(db, 'estudiantes'), where('userId', '==', userId), limit(1));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//             return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
//         } else {
//             return null;
//         }
//     } catch (error) {
//         console.error('Error al buscar el usuario:', error);
//         return null;
//     }
// }