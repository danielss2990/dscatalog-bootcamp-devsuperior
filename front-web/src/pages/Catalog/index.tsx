import React, { useEffect, useState } from 'react';
import './styles.scss';
import ProductCard from './components/ProductCard';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/types/Product';


const Catalog = () => {

    /*
    useEffect(() =>{
        //limitações
        //muito verboso
        //não tem supirte nativo para ler o progresso de upload de arquivos
        //não tem suporte nativo para query strings
        fetch('http://localhost:3000/products')
        .then(response => response.json()).then(response => console.log(response));
    },[]);*/

    //quando o component iniciar, buscar a lista de produtos
    //quando a lista de produtos estiver disponível,
    //popular um estado no componente, e listar os produtos dinamicamente

    const [productsResponse, setProductsResponse] =  useState<ProductsResponse>();
    console.log(productsResponse);

    useEffect(() =>{
        const params = {
            page: 0,
            linesPerPage:12
        }
        makeRequest({url:'/products', params})
        .then(response => setProductsResponse(response.data));
    },[]);
    return (
        <div className="catalog-container">
            <h1 className="catalog-title">Catálogo de produtos</h1>
            <div className="catalog-products">
               {productsResponse?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product}/>
                    </Link>
               ))}
            </div>
        </div>
    );
}

export default Catalog;