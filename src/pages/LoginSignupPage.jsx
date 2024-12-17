export default function LoginSignupPage(props) {
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