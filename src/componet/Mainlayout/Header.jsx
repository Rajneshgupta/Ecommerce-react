import { Container } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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
            <ul className="unstyled navbar-menu mb-0">
              <li className="menu-item">
                <Link className="menu-link" to={"/"}>
                  Mobile
                </Link>
                <div className="mega-dropdown-menu">
                  <div className="d-flex gap-5">
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
                      <div className="dropdown-menu-list pt-3">
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
                      <div className="dropdown-menu-list pt-3">
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
          <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input
              type="search"
              class="header-search-input"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="menu-icons">
            <Link to="/profile" className="icon-with-label">
              <PersonOutlineIcon className="material-icon" />
              <span className="menu-label">Profile</span>
            </Link>

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
