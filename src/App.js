
import React from 'react';
import data from "./data"
import Product from "./components/Product"
import { BrowserRouter, Route } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import Productscreen from './screens/ProductScreen';
function App() {
	console.log(data)
  return (
	<BrowserRouter>
		<div className="grid-container">
			<header className="row">
				<div>
					<a className="brand" href="/">She Can Code</a>
				</div>
				<div>
					<a href="/cart">Cart</a>
					<a href="/signin">Sign In </a>
				</div>
			</header>
			<main>
				<Route path="/" component={Homescreen} exact></Route>
				<Route path="/product/:id" component={Productscreen}></Route>
			</main>
			<footer className="row center">
					All rights reserved!
			</footer>
		</div>
	</BrowserRouter>
  );
}

export default App;
