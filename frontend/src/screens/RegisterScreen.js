import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { register } from '../actions/userActions'
import Loadingbox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export function RegisterScreen(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const redirection = props.location.search 
        ? props.location.search.split('=')[1] 
        : '/';
    const userRegister = useSelector((state)=> state.userRegister);
    const {userInfo, error, loading} = userRegister;

    const submitHandler = (e) =>{
        e.preventDefault(); // to prevent the default action: refresh the form 
        if(password !== confirmPassword) 
            alert("Password and Confirm Password are not match!")
        else 
            dispatch(register(name, email, password));
    } 

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirection);
        }
    }, [props.history, userInfo, redirection]);
    console.log("location", props.location.search)
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Register</h1>
                </div>
                {loading && <Loadingbox></Loadingbox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name"> Name </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        onChange={e => setName(e.target.value)}
                        required
                    >
                    </input>
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
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter Confirm Password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    >
                    </input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit"> Register</button>
                </div>
                <div>
                    <label/>
                    <div>
                        Already have an account ? <Link to={`/signin?redirect=${redirection}`}> Sign In </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default RegisterScreen;