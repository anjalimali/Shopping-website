import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProduct } from '../slice/Productslice';
import { useNavigate } from 'react-router-dom';


function Home() {
  const data = useSelector(state => state.product.data)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [])

  function viewproduct(el) {
    navigate('/product', { state: el })
  }
  return (
    <div>
      {/* Slider */}
      <Carousel>
        <div>
          <img src="1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>

      <div className="container">

        <div className="row">
          <h1>Latest Products</h1>
        </div>

        <div className="row">
          {
            data.map(el => (
              <div key={el._id} className='col-md-3'>
                <div class="card">
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Combo Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    >
                      <p className="text-white mb-0 small">x4</p>
                    </div>
                  </div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                    className="card-img-top" alt="Laptop" />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
                      <p className="small text-danger"><s>$1099</s></p>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{el.productname}</h5>
                      <h5 className="text-dark mb-0">{el.price}</h5>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <button className="btn" onClick={() => { dispatch(addToCart(el)) }}>AddToCart</button>
                      <button className="btn" onClick={() => { viewproduct(el) }}>View Product</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Home