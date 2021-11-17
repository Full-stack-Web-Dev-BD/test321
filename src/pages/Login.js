import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = (e) => {
        e.preventDefault()
        var info = {
            email, password
        }

        axios.post('http://localhost:5000/api/users/login', info)
            .then(res => {
                toast("login success")
                setTimeout(() => {
                    window.location.href = "/"

                }, 2000);
            })
            .catch(err => {
                console.log(err.response?.data)
                if (err.response?.data?.email) {
                    toast.error(err.response?.data?.email)
                }
                if (err.response?.data?.passwordincorrect) {
                    toast.error(err.response?.data?.passwordincorrect)
                }
                if (err.response?.data?.emailnotfound) {
                    toast.error(err.response?.data?.emailnotfound)
                }

            })
    }

    return (
        <div className="container">
            <div className="signup">
                <div className="signup-box">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 ">
                            <div className="text-center ">
                                <h3 className="form-title" >Login</h3>
                            </div>
                            <form onSubmit={e => submitHandler(e)} className="card p-3">
                                <div className="input-box">
                                    <div className=" mt-3 single-input">
                                        <input required onChange={e => setEmail(e.target.value)} className="form-control form-control-lg" type="email" placeholder="Email" />
                                    </div>
                                    <div className=" mt-3 single-input">
                                        <input required onChange={e => setPassword(e.target.value)} className="form-control form-control-lg" type="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn submit-btn mt-4">Login </button>
                                </div>
                                <div className=" p-5 pt-3 redirect">
                                    <p>
                                        <span className="mr-2">Not have an account?</span>
                                        <Link to="/signup" >Sign Up </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
