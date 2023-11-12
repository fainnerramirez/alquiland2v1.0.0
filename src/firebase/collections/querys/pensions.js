import { ref, deleteObject } from "firebase/storage";
import { storageRef } from "../../storage/storage";

export const deleteFilePensionAnfitrion = async (userId, filename) => {
    const imageRef = ref(storageRef, `images/pensions/${userId}/${filename}`);
    return await deleteObject(imageRef);
}