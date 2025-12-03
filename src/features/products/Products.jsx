import React from 'react';
import { useGetAllproductsQuery } from '../../services/productsApi';

function Products() {
  const { isLoading, data } = useGetAllproductsQuery();

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center text-dark">Products</h1>

      {isLoading && <h5 className="text-center">Products Loading...</h5>}

      {!isLoading && (
        <div className="row g-4">
          {data?.products.map((prod, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <div 
                className="card h-100 shadow-sm product-card"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              >
                <img 
                  src={prod.thumbnail} 
                  className="card-img-top" 
                  alt={prod.title} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text text-truncate">{prod.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="badge bg-success fs-6"> Price${prod.price}</span>
                    <span className="text-warning">
                      {Array.from({ length: 5 }, (_, i) => (
                        <i 
                          key={i} 
                          className={`bi bi-star${i < Math.round(prod.rating) ? '-fill' : ''}`}
                        ></i>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default Products;
