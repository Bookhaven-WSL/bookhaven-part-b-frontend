import { userLogin } from "../ApiFunctionality/ApiFunctions";
import ReadPage from "../pages/Read";

export async function handleLogin (event) {
    event.preventDefault();
    let email = document.getElementById("emailLogin").value
    let password = document.getElementById("passwordLogin").value

    let userDetails = {
        "email": email,
        "password": password
    }
    console.log(userDetails)
    try {
        const result = await userLogin(userDetails)

        if (result && result.jwt) {
            localStorage.setItem("token", result.jwt);
            console.log(result)
        } else {
            console.log("Failed Login, jwt token not found")
        }
    } catch (error) {
        console.error("Error logging in:", error)
    }

    if (error) {
        return (
            <h1>Error Logging In</h1>
        )
    } else {
        return (
            <h1>Welcome back {result.username}</h1>
        )
    }
}

