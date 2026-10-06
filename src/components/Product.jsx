

function Product({ title , des , price , img , soldout}) {
  return (
<div className="product">
            <img
            className={soldout ? "soldout" : ""}
              src={img}
              alt="Adobe After Effects"
            />

            <div className="product-info">
              <h2>{title}</h2>

              <p>
                {des}
              </p>
              <span>{soldout ? "Sold Out" :`$${price}`}</span>
            </div>
          </div>
  )
}

export default Product
