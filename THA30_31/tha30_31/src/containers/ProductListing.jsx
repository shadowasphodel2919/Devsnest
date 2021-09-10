import {useDispatch, useSelector} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions';
import { useEffect } from 'react';
const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Error", err);
        });
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log(products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};
export default ProductListing;