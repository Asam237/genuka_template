import { atom } from "recoil"
import axios from "axios"
import { navigate } from "../navigations/auth.navigation";

const data = {
    firstname: "firstname",
    lastname: "lastname",
    email: "email",
    tel: "tel",
    sex: "sex",
    birth_date: "birth_date",
    other: "other"
};


export const signupState = atom({
    key: "signup-state",
    default: axios.post("https://docs.genuka.com/docs/customers/register", data)
        .then(r => {
            if (r.status === 201) {
                return r.data && navigate("home")
            }
        })
        .catch((e: any) => console.log(e))

})