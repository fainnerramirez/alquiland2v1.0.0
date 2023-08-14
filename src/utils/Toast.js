import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Toast = (type, message) => {

    switch(type){
        case "success": 
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
            });
        break;
        case "error": 
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
        break;
        case "info": 
            toast.info(message, {
                position: toast.POSITION.TOP_CENTER
            });
        break;
        case "warn": 
            toast.warn(message, {
                position: toast.POSITION.TOP_CENTER
            });
        break;
    }
}