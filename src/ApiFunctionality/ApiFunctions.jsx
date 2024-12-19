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

export async function userUpdate(userDetails) {

    const response = await axios.patch(`${URL}/user/update`, userDetails)

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

export async function addBookRead(olid) {
    try {
        const token = localStorage.getItem('token')
        if (!token) {
            console.error('JWT token not found, please log in.');
            return;
        }
        const response = await axios.post(`${URL}/book/read`, olid, {
            headers: {
                'jwt': token,
            }
        });
        console.log("Adding book to Read shelf")

        return response.data
    } catch (error) {
        throw error;
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
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(`${URL}/book/recommended`, params={bookDetails}, {
            headers: {
                'jwt': token,
            }
        });

        return response.data
    } catch (error) {
        throw error;
    }
}

export async function findBookNew(bookDetails) {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(`${URL}/book/search-new`, params={bookDetails}, {
        headers: {
            'jwt': token,
        },
        });
        return response.data
    } catch (error) {
        throw error;
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


export async function findBookRecommended() {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(`${URL}/book/recommended-new`, {genre: genre}, {
        headers: {
            'jwt': token,
        },
        });
        return response.data
    } catch (error) {
        throw error;
    }
}

export async function getBookRead() {
    try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:8080/book/read', {
        headers: {
            'jwt': token,
        },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export async function getBookToBeRead() {
    try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:8080/book/to-be-read', {
        headers: {
            'jwt': token,
        },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export async function getBookRecommended() {

    try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:8080/book/recommended', {
        headers: {
            'jwt': token,
        },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
   

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