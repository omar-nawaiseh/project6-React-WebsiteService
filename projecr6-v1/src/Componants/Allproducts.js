import React, { Component } from 'react'
import '../Css/Allproducts.css';

export class Allproducts extends Component {
    render() {

        const {product} = this.props;
        const theproduct = product.map((pro) =>  {
            return (

             
                <figure className="snip1171">
                <img src={pro.image} alt="sample71"/>
                <div className="price">{pro.price}</div>
                <figcaption>
                    <h3>{pro.name}</h3>
                    <p>
                    {pro.desc}
                    </p><a href="#">Add to Cart</a>
                </figcaption>
                </figure>
            )
        })

        

        return (
            <div className="container">
                {theproduct}
            </div>
        )
    }
}

export default Allproducts
