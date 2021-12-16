import axios from "axios";

const BASE_URL = "https://dashboard.genuka.com/api/2021-05/"

const headers = {
  'Content-Type': 'application/json',
};

export const registerService = async (
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
  console.log("Hello data !", data)
  try {
    const result = await axios({
      url: `${BASE_URL}/clients/register`,
      data,
      headers,
      method: "POST"
    })
    return result.data
  } catch (e: any) {
    console.log("Error !", e)
  }
}
export const loginService = async (email: string, password: string) => {
  const data = {
    email,
    password
  }
  try {
    const result = await axios({
      url: `${BASE_URL}/clients/login`,
      data,
      headers,
      method: "POST"
    })
    return result.data
  } catch (e: any) {
    console.log(e)
  }
}
