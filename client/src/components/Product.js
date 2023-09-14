import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Product() {
  const [product, setProduct] = useState({ productname: '', price: '', quantity: '', _id: '', img: '' })
  const location = useLocation()
  const el = location.state
  useEffect(() => {
    setProduct({ _id: el._id, productname: el.productname, price: el.price, quantity: el.quantity, img: el.img })
  }, [])
  return (
    <div>
      <section >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img src={product.img}
                    className="img-fluid"
                    alt={product.productname} />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p><a href="#!" className="text-dark">{product.productname}</a></p>
                      <p className="small text-muted">Laptops</p>
                    </div>
                    <div>
                      <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="small text-muted">Rated 4.0/5</p>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <p><a href="#!" className="text-dark">{product.price}</a></p>
                    <p className="text-dark">#### 8787</p>
                  </div>
                  <p className="small text-muted">VISA Platinum</p>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <a href="#!" className="text-dark fw-bold">Cancel</a>
                    <button type="button" className="btn btn-primary">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product