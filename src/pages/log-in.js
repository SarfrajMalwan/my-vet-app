
const login = () => {
    return (
        <>

            <div className="Register2">
                <div className="login-form">
                    <h1> Log-in </h1>
                    <form >
                        <div className="inputs-group">
                            <div className="input-field">
                                <i class="bi bi-envelope-at-fill"></i>
                                <input type="email" placeholder="email" />
                            </div>
                            <div className="input-field">
                                <i class="bi bi-file-earmark-lock2"></i>
                                <input type="password" placeholder="password" />
                            </div>
                        </div>
                        <button className="btn">SUBMIT</button>
                    </form>
                    <p className="part3"> not have an accounta <a href="/Register">Sign-up</a></p>
                </div>

            </div>
        </>
    )
}
export default login;