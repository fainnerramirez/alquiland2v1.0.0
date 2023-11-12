import { app } from "../configuration/config";
import { getAuth } from "firebase/auth";

export const auth = getAuth(app);