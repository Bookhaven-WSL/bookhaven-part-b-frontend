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

    const response = await axios.post(`${URL}/user/update`, userDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

//USER

export async function userUpdate(userDetails) {

    const response = await axios.patch(`${URL}/auth/login`, userDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function userDelete(userDetails) {

    const response = await axios.delete(`${URL}/user/delete`, userDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

//BOOKS

export async function addBook(bookDetails) {

    const response = await axios.post(`${URL}/book`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function addBookRead(bookDetails) {

    const response = await axios.post(`${URL}/book/read`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function addBookToBeRead(bookDetails) {

    const response = await axios.post(`${URL}/book/to-be-read`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function addBookRecommended(bookDetails) {

    const response = await axios.post(`${URL}/book/recommended`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function findBookNew(bookDetails) {
    
    const response = await axios.post(`${URL}/book/search-new`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function findBookPersonal(bookDetails) {
    
    const response = await axios.post(`${URL}/book/search-personal`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function getBookRead() {

    const response = await axios.get(`${URL}/book/read`, { 
        headers: {
            Authorization: "JWT " + localStorage.getItem('token')
        }
    })

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function getBookToBeRead(bookDetails) {

    const response = await axios.get(`${URL}/book/to-be-read`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function getBookRecommended(bookDetails) {

    const response = await axios.get(`${URL}/book/recommended`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function updateBook(bookDetails) {

    const response = await axios.patch(`${URL}/book/update`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}

export async function deleteBook(bookDetails) {

    const response = await axios.delete(`${URL}/book/delete`, bookDetails)

    if (response.status === 200) {
        return response.data
    }
    else {
        return
    }
}