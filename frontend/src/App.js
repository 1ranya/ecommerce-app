
import React from 'react';
import Product from "./components/Product"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import Productscreen from './screens/ProductScreen';
import Cartscreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import Signinscreen from './screens/SigninScreen';
import { sign } from 'jsonwebtoken';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';

function App() {

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const userSignin = useSelector((state) => state.userSignin)
	const { userInfo } = userSignin;

	const dispatch = useDispatch();

	const signoutHandler = () => {
		dispatch(signout())
	}
  return (
	<BrowserRouter>
		<div className="grid-container">
			<header className="row">
				<div>
					<Link className="brand" to="/">She Can Code</Link>
				</div>
				<div>
					<Link to="/cart">
					Cart
					{cartItems.length > 0 && (
						<span className="badge">{cartItems.length}</span>
					)}
					</Link>
					{ userInfo
					? (
						<div className="dropdown">
							<Link to="#">
								{ userInfo.name } <i className="fa fa-caret-down"></i>
							</Link>
							<ul className="dropdown-content">
								<Link to="#signout" onClick={signoutHandler}>
									Sign Out
								</Link>
							</ul>
						</div>
						) 
					: (<Link to="/signin">Sign In</Link>)
					}			
				</div>
			</header>
			<main>
				<Route path="/cart/:id?" component={Cartscreen}></Route>
				<Route path="/product/:id" component={Productscreen}></Route>
				<Route path="/" component={Homescreen} exact></Route>
				<Route path="/signin" component={Signinscreen}></Route>
				<Route path="/register" component={RegisterScreen}></Route>
			</main>
			<footer className="row center">
					All rights reserved!
			</footer>
		</div>
	</BrowserRouter>
  );
}

export default App;
