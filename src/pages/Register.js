import { useState } from "react";

const Register = () => {

    const [signup, setsignup] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
    })

    const [error, seterror] = useState({})

    const handleupdatesignup = (e) => {
        const name = e.target.name;
        setsignup({
            ...signup, [name]: e.target.value
        })
        // console.log(signup)
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        const validationErrors = {}

        if (!signup.name.length > 0) {
            validationErrors.name = "enter a name"
        }

        if (signup.lastname == "") {
            validationErrors.lastname = "enter last name"
        }

        if (!signup.email.length > 0) {
            validationErrors.email = "email is requred"
        } else if (!/\S+@\S+\.\S+/.test(signup.email)) {
            validationErrors.email = "email is not valid"
        }

        if (!signup.password.length > 0) {
            validationErrors.password = "enter password"

        } else if (!signup.password.length >= 6) {
            validationErrors.password = "password should be at least 6 charactor"

        }

        if (signup.confirmpassword !== signup.password) {
            validationErrors.confirmpassword = " password not matched"
        }

        seterror(validationErrors)
    }


    return (
        <>
            <div className="Register">
                <div className="sign-form">
                    <h1> Sign-Up</h1>
                    <form onSubmit={handlesubmit}>
                        <div className="inputs-group">
                            <div className="input-field">
                                <i class="bi bi-person-circle"></i>
                                <input type="text" placeholder="name"
                                    name="name" value={signup.name} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.name}</span>

                            <div className="input-field">
                                <i class="bi bi-person-circle"></i>
                                <input type="text" placeholder=" Last name"
                                    name="lname" value={signup.lastname} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.lastname}</span>
                            <div className="input-field">
                                <i class="bi bi-envelope-at-fill"></i>
                                <input type="email" placeholder="email"
                                    name="email" value={signup.email} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.email}</span>

                            <div className="input-field">
                                <i class="bi bi-file-earmark-lock2"></i>
                                <input type="password" placeholder="password"
                                    name="password" value={signup.password} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.password}</span>

                            <div className="input-field">
                                <i class="bi bi-file-earmark-lock2"></i>
                                <input type="password" placeholder="Confirm password"
                                    name="confirm password" value={signup.confirmpassword} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.confirmpassword}</span>


                        </div>
                        <button type="submit" className="btn">SUBMIT</button>
                    </form>
                    <p className="part1"> By Clicking the signup button you agree to <br />our
                        <a href="#"> Terms and Condition</a>
                        and <a href="#"> Policy Privacy</a>
                    </p>

                    <p className="part2"> Already have an account?<a href="/log-in"> Loginhere</a> </p>


                </div>

            </div>
        </>
    )
}
export default Register;