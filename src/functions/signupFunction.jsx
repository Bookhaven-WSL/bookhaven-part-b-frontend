import { useState } from "react"
import { userSignup } from "../ApiFunctionality/ApiFunctions"

const [jwt, setJwt] = useState("")
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")


export async function callSignup (event) {

    event.preventDefault();

    let username = document.getElementById("usernameSignup").value
    let email = document.getElementById("emailSignup").value
    let password = document.getElementById("passwordSignup").value


    let userDetails = {
        "username": username,
        "email": email,
        "password": password
    }
    console.log(userDetails)

    const result = await userSignup(userDetails)


    if (result && result.jwt) {
        setJwt(result.jwt)
        setUsername(result.user.username)
        setEmail(result.user.email)
        setPassword(result.user.password)
        localStorage.setItem("token", result.jwt)

        console.log(result)
        return (
            <>
                <h2>Welcome {username}!</h2>
                <h3>JWT: {jwt}</h3>
                <h3>email: {email}</h3>
            </>
        )
    }
    else {
        setError(true)

        if (error) {
            return (
                <>
                    <h1>ERROR</h1>
                </>
            )
        }
    }
}


