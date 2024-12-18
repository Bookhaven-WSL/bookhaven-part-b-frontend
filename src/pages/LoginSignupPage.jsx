import { useState } from "react"
import { userSignup } from "../ApiFunctionality/ApiFunctions"
import ReadPage from "./Read"
import { handleLogin } from "../functions/loginFunction"

export default function LoginSignupPage(props) {
    const [jwt, setJwt] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const callSignup = async (event) => {

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
            // setToken(result.jwt);
            console.log(result)
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
    

    else if (jwt) {
        return (
            <>
                <h3>JWT: {jwt}</h3>
                <h3>username: {username}</h3>
                <h3>email: {email}</h3>
            </>
        )
        
    } else {
        return (
            <>
                <h1>SIGNUP</h1>
                <form>
                    <label htmlFor="usernameSignup">Username:</label>
                    <input type="text" id="usernameSignup" name="usernameSignup"></input>
                    <label htmlFor="emailSignup">Email:</label>
                    <input type="text" id="emailSignup" name="emailSignup"></input>
                    <label htmlFor="passwordSignup">Password:</label>
                    <input type="text" id="passwordSignup" name="passwordSignup"></input>
                    <button onClick={callSignup}>
                        Signup
                    </button>
                </form>
    
                <h1>LOGIN</h1>
                <form>
                    <label htmlFor="emailLogin">Email:</label>
                    <input type="text" id="emailLogin" name="emailLogin"></input>
                    <label htmlFor="passwordLogin">Password:</label>
                    <input type="text" id="passwordLogin" name="passwordLogin"></input>
                    <button onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </>
        )
    }
}