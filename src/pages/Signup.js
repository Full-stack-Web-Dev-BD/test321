import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cPassword, setCPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        var info = {
            name, email, password, password2: cPassword
        }

        axios.post('http://localhost:5000/api/users/register', info)
            .then(res => {
                window.location.href = "/login"
            })
            .catch(err => {
                console.log(err.response?.data)
                if (err.response?.data?.name) {
                    toast.error(err.response?.data?.name)
                }
                if (err.response?.data?.email) {
                    toast.error(err.response?.data?.email)
                }
                if (err.response?.data?.password) {
                    toast.error(err.response?.data?.password)
                }
                if (err.response?.data?.password2) {
                    toast.error(err.response?.data?.password2)
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
                                <h3 className="form-title" >Sign up</h3>
                            </div>
                            <form onSubmit={e => submitHandler(e)} className="card p-3">
                                <div className="input-box">
                                    <div className=" mt-3 single-input">
                                        <input required onChange={e => setName(e.target.value)} className="form-control form-control-lg" type="text" placeholder="Full Name" />
                                    </div>
                                    <div className=" mt-3 single-input">
                                        <input required onChange={e => setEmail(e.target.value)} className="form-control form-control-lg" type="email" placeholder="Email" />
                                    </div>
                                    <div className=" mt-3 single-input">
                                        <input required onChange={e => setPassword(e.target.value)} className="form-control form-control-lg" type="password" placeholder="Password" />
                                    </div>
                                    <div className=" mt-3 single-input">
                                        <input required onChange={e => setCPassword(e.target.value)} className="form-control form-control-lg" type="password" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn submit-btn mt-4">Sign Up </button>
                                </div>
                                <div className=" p-5 pt-3 redirect">
                                    <p>
                                        <span className="mr-2">Already have an account?</span>
                                        <Link to="/login" >Login </Link>
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

export default Signup
