import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import ProductList from './ProductList';


export default class App extends React.Component {
    render(){
        return (
           
        <div id="page">

            <Header />

        <div id="main">
            <Search />

            <ProductList />

        </div>

            <Footer />

    </div>
    
        )
    }
}