import { atom } from "recoil"
import axios from "axios"

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
    default: axios.post("https://docs.genuka.com/docs/customers/register",data)
        .then(r => r.data)
        .catch((e: any) => console.log(e))
})