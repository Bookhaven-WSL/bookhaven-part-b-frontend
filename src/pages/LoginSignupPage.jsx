import { useState } from "react"
import { userSignup } from "../ApiFunctionality/ApiFunctions"

export default function LoginSignupPage(props) {

    const [jwt, setJwt] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const callSignup = async () => {
        let username = documents.getElementById("usernameSignup")
        let email = documents.getElementById("emailSignup")
        let password = documents.getElementById("passwordSignup")

        let userDetails = {
            "username": username,
            "email": email,
            "password": password
        }

        const response = await userSignup(userDetails)

        if (response) {
            setJwt(response.jwt)
            setUsername(response.username)
            setEmail(response.email)
            setPassword(response.password)
        }
        else {
            setError(true)
        }
    }

    if (error) {
        return (
            <>
                <h1>ERROR</h1>
            </>
        )
    }
    else if (jwt !== "") {
        return (
            <>
                <h3>${jwt}</h3>
                <h3>${username}</h3>
                <h3>${email}</h3>
                <h3>${password}</h3>
            </>
        )
    }
    else {
        return (
            <>
                <h1>SIGNUP</h1>
                <form>
                    <label for="usernameSignup">Username:</label>
                    <input type="text" id="usernameSignup" name="usernameSignup"></input>
                    <label for="emailSignup">Email:</label>
                    <input type="text" id="emailSignup" name="emailSignup"></input>
                    <label for="passwordSignup">Password:</label>
                    <input type="text" id="passwordSignup" name="passwordSignup"></input>
                    <button onClick={callSignup}>
                        Signup
                    </button>
                </form>
    
                <h1>LOGIN</h1>
                <form>
                    <label for="emailLogin">Email:</label>
                    <input type="text" id="emailLogin" name="emailLogin"></input>
                    <label for="passwordLogin">Password:</label>
                    <input type="text" id="passwordLogin" name="passwordLogin"></input>
                </form>
            </>
        )
    }
}