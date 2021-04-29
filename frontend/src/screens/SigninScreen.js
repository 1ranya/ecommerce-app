import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export function Signinscreen(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault() // to prevent the default action: refresh the form 
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email"> Email Adress </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                    >
                    </input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit"> Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                        New Customer ? <Link to="/register"> Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Signinscreen;