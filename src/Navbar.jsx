import React, { useState} from 'react';
import { FaSearch, FaShoppingCart ,FaPlus} from 'react-icons/fa';
import './Navbar.css';
import images from './assets/shopping.jpeg';
import assured from './assets/f1.jpg';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isRatingDropdownVisible, setIsRatingDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleRatingDropdown = () => {
    setIsRatingDropdownVisible(!isRatingDropdownVisible);
  };

  return (
    <div>
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <h2>Flipkart</h2>
          <span className="explore-plus">
            Explore <span className="plus">Plus</span>
            <FaPlus />
          </span>
          
        </div>
      </div>
      <div className="navbar-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands and more" />
          <button><FaSearch /></button>
        </div>
        <div className="login"><button id="login-button">Login</button></div>
        <h3>Become a Seller</h3>
        <div className="dropdown-container" onClick={toggleDropdown}>
          <h3>More</h3>
          <span className="dropdown-symbol">{isDropdownVisible ? '∧' : '∨'}</span>
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <a href="#notifications">Notifications</a>
              <a href="#customer-service">Customer Service</a>
              <a href="#advertising">Advertise</a>
            </div>
          )}
        </div>
        <FaShoppingCart className="icon" />
        <h4>Cart</h4>
      </div>
    </nav>


    <div className="right">
          <div className="green-box">
            <label>
              <input type="checkbox" />Add to Compare
            </label>
          <div className="product">
            <div>
            <span>
            <img src={images} alt="" /></span><br/>
            <label>
              <input type="checkbox" />Add to Compare
            </label>
            </div>
            <div className='redmi'>
            <h2>REDMI NOTE 11 PRO(Stealth Black,128GB)</h2>
            <span className='star'>4.2 star</span> &nbsp;
            1585 Ratings & 108 Reviews
            <ul>
              <li>6GB RAM | 128 ROM</li>
              <li>16.94 Display</li>
              <li>108MB Rear Camera</li>
              <li>5000mAh Battery</li>
              <li>12months</li>
            </ul>
            </div>
            <div className='price'>
              <h1>₹20,000  <img src={assured} alt="" /> </h1>
              <span id='cut'>₹22,000</span>&nbsp;&nbsp;
              <span id='discount'>29% off</span>
              <p>Free delivery</p>
              <p id='green'>save extra with combo offers</p>
              <p id='red'>Only 1 left</p>
            </div>
          </div>


          <label>
              <input type="checkbox" />Add to Compare
            </label>
          <div className="product">
            <div>
            <span>
            <img src={images} alt="" /></span><br/>
            <label>
              <input type="checkbox" />Add to Compare
            </label>
            </div>
            <div className='redmi'>
            <h2>REDMI NOTE 11 PRO(Stealth Black,128GB)</h2>
            <span className='star'>4.2 star</span> &nbsp;
            1585 Ratings & 108 Reviews
            <ul>
              <li>6GB RAM | 128 ROM</li>
              <li>16.94 Display</li>
              <li>108MB Rear Camera</li>
              <li>5000mAh Battery</li>
              <li>12months</li>
            </ul>
            </div>
            <div className='price'>
              <h1>₹20,000 <img src={assured} alt="" /></h1>
              <span id='cut'>₹22,000</span>&nbsp;&nbsp;
              <span id='discount'>29% off</span>
              <p>Free delivery</p>
              <p id='green'>save extra with combo offers</p>
              <p id='red'>Only 1 left</p>
            </div>
          </div>



          </div>
        </div>




    <div className='left'>
    <div className="dropdown-container" onClick={toggleRatingDropdown}>
    <h3>Customer Ratings</h3>
    <span className="dropdown-symbol-rate">{isRatingDropdownVisible ? '∧' : '∨'}</span>
    {isRatingDropdownVisible && (
      <div className="dropdown-menu">
        <label>
          <input type="checkbox" name="4stars" />
          4 Stars & Above
        </label>
        <label>
          <input type="checkbox" name="3stars" />
          3 Stars & Above
        </label>
      </div>
    )}
  </div>

     <div className='Invoice'>
      <div className="invoice-header"><h3>GST Invoice Available</h3>
    <span className='dropdown-symbol'>^</span></div>
    <label >
    <input type="checkbox" /> Invoice1
    </label>
    <label >
    <input type="checkbox" /> Invoice2
    </label>
    </div>
    
      <div className="storage">
      <div className="storage-header"><h3>RAM</h3>
    <span className='dropdown-symbol'>^</span></div>
    <label >
    <input type="checkbox" />4GB
    </label>
    <label >
    <input type="checkbox" /> 3GB
    </label>
    <label >
    <input type="checkbox" /> 2GB
    </label>
    <label >
    <input type="checkbox" /> 6GB
    </label>
    <label >
    <input type="checkbox" /> 8GB & Above
    </label>
    <label >
    <input type="checkbox" /> 1GB & Below
    </label>
      </div>

    <div className="internal-storage">
    <div className="internal-storage-header"><h3>Internal Storage</h3>
    <span className='dropdown-symbol'>^</span></div>
    <div className="battery"><h3>BATTERY CAPACITY</h3>
    <span className='dropdown-symbol'>^</span></div>
    <div className="screen"><h3>SCREEN SIZE</h3>
    <span className='dropdown-symbol'>^</span></div>
    </div>

   



</div>
  </div>
  );
};

export default Navbar;
