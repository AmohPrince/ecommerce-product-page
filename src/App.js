import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Shoe1 from "./images/image-product-1.jpg";
import Shoe2 from "./images/image-product-2.jpg";
import Shoe3 from "./images/image-product-3.jpg";
import Shoe4 from "./images/image-product-4.jpg";
import Thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "./images/image-product-4-thumbnail.jpg";
import AddIcon from "./images/icon-plus.svg";
import MinusIcon from "./images/icon-minus.svg";
import CartIcon from "./images/icon-cart2.svg";

/**
 *
 * @returns Two components. Main App and Cart. I need a third - Navbar
 */

function App() {
  const products = [Shoe1, Shoe2, Shoe3, Shoe4];
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeClass, setActiveClass] = useState("image1-active");
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      {overlay === true ? (
        <div
          className="overlay"
          onClick={() => {
            setOverlay((prevState) => !prevState);
          }}
        ></div>
      ) : null}
      <div className="App">
        <Navbar />
        <div className="body flex__container">
          <div className={`body-left ${overlay}`}>
            <img
              src={activeProduct}
              alt="Shoe"
              onClick={() => {
                setOverlay((prevState) => !prevState);
              }}
            />
            <div className="thumbnails flex__container">
              <img
                src={Thumbnail1}
                alt="Shoe"
                className={`image1 ${activeClass}`}
                onClick={() => {
                  setActiveProduct(products[0]);
                  setActiveClass("image1-active");
                }}
              />
              <img
                src={Thumbnail2}
                alt="Shoe"
                className={`image2 ${activeClass}`}
                onClick={() => {
                  setActiveProduct(products[1]);
                  setActiveClass("image2-active");
                }}
              />
              <img
                src={Thumbnail3}
                alt="Shoe"
                className={`image3 ${activeClass}`}
                onClick={() => {
                  setActiveProduct(products[2]);
                  setActiveClass("image3-active");
                }}
              />
              <img
                src={Thumbnail4}
                alt="Shoe"
                className={`image4 ${activeClass}`}
                onClick={() => {
                  setActiveProduct(products[3]);
                  setActiveClass("image4-active");
                }}
              />
            </div>
          </div>
          <div className="body-right">
            <h3>SNEAKER COMPANY</h3>
            <p>Fall Limited Edition Sneakers</p>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole , they`ll withstand
              everything the weather can offer.
            </p>
            <div className="flex__container">
              <p>$125.00</p>
              <p>50%</p>
            </div>
            <p className="two-fifty">$250.00</p>
            <div className="left-bottom flex__container">
              <div className="plus-minus-icons flex__container">
                <img
                  src={MinusIcon}
                  alt="Plus icon"
                  onClick={() => {
                    setNumberOfProducts((prevProduct) => prevProduct - 1);
                  }}
                />
                <p>{numberOfProducts}</p>
                <img
                  src={AddIcon}
                  alt="Minus icon"
                  onClick={() => {
                    setNumberOfProducts((prevProduct) => prevProduct + 1);
                  }}
                />
              </div>
              <div className="add-to-cart flex__container">
                <div className="flex__container">
                  <img src={CartIcon} alt="Cart" className="cart-icon" />
                  <p className="add-to-cart-text">Add to cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
