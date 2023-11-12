import { app } from "../configuration/config";
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);