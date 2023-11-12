import { db } from '../../firestore/database';
import { collection, query, where, limit, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { errorManagment } from '../../errors/errorManagmentUser';
import { showSuccessAlert, showWarningAlert, showWarningAlertConfirm } from '../../../utils/SwalAlert';
import moment from 'moment';
import 'moment/locale/es'
import { deleteFilePensionAnfitrion } from './pensions';
moment.locale('es');

export const createAnfitrion = async (options) => {
    return await addDoc(collection(db, "anfitriones"), options);
}

export const getAnfitrionByUserId = async (userId) => {
    try {
        console.log("Entro getAnfitrionByUserId: ", userId)
        const q = query(collection(db, 'anfitriones'), where('userId', '==', userId), limit(1));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        return null;
    }
}

export const getAdvertsAnfitrionByUserId = async (userId) => {

    if (userId) {
        try {
            const q = query(collection(db, 'anunciosPorAnfitrion'), where('userId', '==', userId), limit(1));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error al buscar el los anuncios por usuario:', error);
            return null;
        }
    }
}

export const getAllAdvertsAnfitrionByUserId = async (userId, limite) => {

    if (userId) {
        try {
            const q = query(collection(db, 'anunciosPorAnfitrion'), where('userId', '==', userId), limit(limite));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                let docs = [];
                querySnapshot.docs.forEach((doc, i) => {
                    docs.push({ id: doc.id, ...doc.data() })
                });
                return docs;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error al buscar el los anuncios por usuario:', error);
            return null;
        }
    }
}

export const createAdvertForAnfitrion = async (userId, options) => {

    try {

        const response = await showWarningAlert("¿Revisastes todos los datos del anuncio antes de publicarlo?, No prodrás modificarlos después");

        if (response.isConfirmed) {

            const nuevaPublicacionRef = await addDoc(collection(db, "anunciosPorAnfitrion"), {
                userId: userId,
                urlPhoto: options.urlFotoAnuncio,
                title: options.titulo,
                description: options.descripcion,
                country: options.pais,
                city: options.ciudad,
                zone: options.barrio,
                direction: options.direccion,
                typeSpace: options.tipoEspacio,
                typeDomicile: options.tipoAlojamiento,
                typeQuota: options.tipoCupo,
                services: options.Servicios,
                price: options.precio,
                dateCreatedAt: moment().format('LL')
            });

            const responsePublicado = await showSuccessAlert("Genial! Tu anuncio ha sido publicado correctamente");

            if (responsePublicado.isConfirmed) {
                window.location.href = "/user/" + userId;
            }

            return nuevaPublicacionRef.id;
        }
        else {
            console.log("Operación de publicación cancelada!");
            return null;
        }
    } catch (error) {
        console.error(error);
        errorManagment(error.code);
    }
}

export const deleteAnfitrion = async (IdDocument) => {
    return await deleteDoc(doc(db, "anfitriones", IdDocument));
}

export const deleteAdvertAnfitrion = async (userId, namefile, IdDocument) => {
    let confirm = await showWarningAlertConfirm("¿Estas seguro de eliminar el anuncio? Esta acción no se podrá revertir");
    if (confirm.isConfirmed) {
        await deleteDoc(doc(db, "anunciosPorAnfitrion", IdDocument));
        await deleteFilePensionAnfitrion(userId, namefile);
        let confirmSuccess = await showSuccessAlert("Tu anuncio ha sido eliminnado");
        if (confirmSuccess.isConfirmed || confirmSuccess.isDismissed) {
            window.location.reload();
        }
    }
}