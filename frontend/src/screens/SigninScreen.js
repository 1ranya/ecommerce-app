import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import signin from '../actions/userActions'
import Loadingbox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export function Signinscreen(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const redirection = props.location.search ? props.location.search.split('=')[1] : '/';
    const userSignin = useSelector((state)=> state.userSignin);
    const {userInfo, error, loading} = userSignin;

    const submitHandler = (e) =>{
        e.preventDefault(); // to prevent the default action: refresh the form 
        dispatch(signin(email, password));
    } 

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirection);
        }
    }, [props.history, userInfo, redirection]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <Loadingbox></Loadingbox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
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