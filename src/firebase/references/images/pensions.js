import { storageRef } from "../../storage/storage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const getDownloadURLPension = (imagesPensionRef) => {
    let urlGet = getDownloadURL(imagesPensionRef)
        .then((url) => {
            console.log("Url pension: ", url);
            return url;
        })
        .catch((error) => {
            console.log("Error url pension: ", error);
            return error.code;
        });

    return urlGet;
}

export const LoadFilePension = async (file, userId) => {

    if (file) {
        const imagesRef = ref(storageRef, `images/pensions/${userId}/${file.name}`);
        await uploadBytes(imagesRef, file).then((snapshot) => {
            console.log('Archivo cargado: ', snapshot);
        });
        let urlGet = getDownloadURLPension(imagesRef);
        return urlGet;
    }
}