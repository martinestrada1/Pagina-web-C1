import React from 'react';
import database from '../../store/database';

function RelevantProducts() {
  const relevantProducts = database.relevantProducts;

  return (
    <div className="relevant-products">
      <h2 style={h2}>Productos Relevantes</h2>
      <div className="product-list" style={productListStyle}>
        {relevantProducts.map((product) => (
          <div key={product.id} style={productStyle} className="product">
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} style={imageStyle} />
            </div>
            <h3 style={h3Style}>{product.name}</h3>
            <p style={pStyle}>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const productListStyle = {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center', 
  };

  const h2 ={
    textAlign:'center'
  }
 
  const productStyle = {
    width: '250px',
    padding: '15px',
    margin: '10px', 
    backgroundColor: 'white', 
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  };
  
  const imageStyle = {
    width: '100%', 
    height: 'auto',
    borderRadius: '5px 5px 0 0', 
  };
  
  const h3Style = {
    fontSize: '20px', 
    margin: '10px 0', 
  };
  
  const pStyle = {
    fontSize: '16px',
    margin: '10px 0', 
  };
 
  export default RelevantProducts;