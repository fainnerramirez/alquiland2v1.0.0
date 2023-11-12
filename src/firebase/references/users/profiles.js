import { storageRef } from "../../storage/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { errorManagment } from "../../errors/errorManagmentUser";

export const LoadFileProfileUser = async (file, userId) => {

    if (file) {
        const auth = getAuth();
        const profilesRef = ref(storageRef, `images/profiles/${userId}`);
        await uploadBytes(profilesRef, file);

        getDownloadURL(profilesRef)
            .then(async (url) => {

                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
                await UpdatePhotoUrlProfileUser(auth, url);
            })
            .catch((error) => {
                // Handle any errors
                errorManagment(error.code)
            });
    }
}

export const UpdatePhotoUrlProfileUser = async (auth, url) => {
    await updateProfile(auth.currentUser, {
        photoURL: url
    });
}