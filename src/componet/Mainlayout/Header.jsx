import { Container, Badge } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div>
      <header class="menu-header">
        <div className="menu-list">
          <div class="menu-logo">
            <Link to={"/"}>
              <span>E-commerces</span>
            </Link>
          </div>
          <nav class="menu-nav">
            <ul className="mb-0 unstyled navbar-menu">
              <li className="menu-item">
                <Link className="menu-link" to={"/"}>
                  Mobile
                </Link>
                <div className="mega-dropdown-menu">
                  <div className="gap-5 d-flex">
                    <div className="dropdown-column">
                      <div className="dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-3 dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <div className="dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-3 dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <div className="dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-3 dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <div className="dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-3 dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <div className="dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-3 dropdown-menu-list">
                        <div className="dropdown-menu-title">
                          <h4>Topwear</h4>
                        </div>
                        <ul className="dropdown-menu-nav">
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              T-Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Casual Shirts
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link to="#" className="dropdown-menu-link">
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Repeat for more columns */}
                  </div>
                </div>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to={"/about"}>
                  Electronics
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to={"/contact"}>
                  Computer{" "}
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to={"/services"}>
                  Headphone
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to={"/product"}>
                  LED/Smart TVs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="user-info">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input
              type="search"
              className="header-search-input"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="menu-icons">
            <div className="profile-hover-dropdown">
              <Link to="/profile" className="icon-with-label">
                <PersonOutlineIcon className="material-icon" />
                <span className="menu-label">Profile</span>
              </Link>

              <div className="profile-dropdown-content">
                <div className="profile-header d-none">
                  <strong>Hello Rajnish Gupta</strong>
                  <div className="profile-phone">8839029696</div>
                </div>
                <div className="profile-header">
                  <strong>Welcome</strong>
                  <div className="profile-phone">To access account and manage orders</div>
                  <div className="mt-3">
                    <Link to="/login" className="btn btn-outline-primary">Login</Link>
                  </div>
                </div>
                <hr className="p-0 my-2" />
                <Link to="/orders">Orders</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/gift-cards">Gift Cards</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/ecommerce-insider" className="with-badge">
                  Ecommerce Insider{" "}
                  <Badge bg="primary" pill>
                    New
                  </Badge>
                </Link>
                <hr className="p-0 my-2" />
                <Link to="/ecommerce-credit">Ecommerce Credit</Link>
                <Link to="/coupons">Coupons</Link>
                <Link to="/saved-cards">Saved Cards</Link>
                <Link to="/saved-addresses">Saved Addresses</Link>
                <hr className="p-0 my-2" />
                <Link to="/edit-profile">Edit Profile</Link>
                <Link to="/logout">Logout</Link>
              </div>
            </div>

            <Link to="/wishlist" className="icon-with-label">
              <div className="icon">
                <FavoriteBorderIcon className="material-icon" />
                <span className="number-badge">7</span>
              </div>
              <span className="menu-label">Wishlist</span>
            </Link>

            <Link to="/cart" className="icon-with-label">
              <div className="icon">
                <ShoppingCartOutlinedIcon className="material-icon" />
                <span className="number-badge">5</span>
              </div>
              <span className="menu-label">Bag</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
