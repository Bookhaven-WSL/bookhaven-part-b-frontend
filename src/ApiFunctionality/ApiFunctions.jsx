import axios from "axios"

const URL = "http://localhost:8080"

//AUTHENTICATION

export async function userSignup(userDetails) {

    const response = await axios.post(`${URL}/auth/signup`, userDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function userLogin(userDetails) {

    const response = await axios.post(`${URL}/auth/login`, userDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

//USER


//BOOKS