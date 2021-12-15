import axios from "axios";

export class AuthService {
  static register = async (
    email: string,
    tel: string,
    firstname: string,
    lastname: string,
    password: string,
    company_id: string,
    fromApi: boolean
  ) => {
    const data = {
      email,
      tel,
      firstname,
      lastname,
      password,
      company_id,
      fromApi
    }
    try {
      const result = await axios({
        url: "",
        data,
        method: "POST"
      })
      return result.data
    } catch (e: any) {
      console.log(e)
    }
  }
  static login = async (email: string, password: string) => {
    const data = {
      email,
      password
    }
    try {
      const result = await axios({
        url: "",
        data,
        method: "POST"
      })
      return result.data
    } catch (e: any) {
      console.log(e)
    }
  }
}
