import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/ProductActions';
import Loadingbox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product'

export default function Homescreen(props) {
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    const dispatch = useDispatch();

    useEffect(() => { // this function will run after the component is mount 
        dispatch(listProducts());
    }, []);

    return (
        <div>
            {loading 
            ? (<Loadingbox/>)
            : error 
            ? (<MessageBox variant="danger">{error}</MessageBox>)
            : (<div className="row center">
                {products.map(product =>(
                    <Product key={product._id} product={product}/>
                ))}
            </div>)
            }
        </div>
    )
}
