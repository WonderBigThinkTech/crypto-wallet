// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Layout, Menu } from 'antd';

// const { Header } = Layout;

// function AppHeader() {
//   return (
//     <Header>
//       <div className="logo" />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//         <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
//         <Menu.Item key="2"><Link to="/signin">Sign In</Link></Menu.Item>
//         <Menu.Item key="3"><Link to="/signup">Sign Up</Link></Menu.Item>
//       </Menu>
      
//     </Header>
//   );
// }

// export default AppHeader;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMagnifyingGlass, faBell, faDownload, faGlobe, faClone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Header.css";

const AppHeader = ({ user, currentUrl }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  return (
    <header className="hd">
      <div className="hd-left">
        <div className="nav-logo border">
          <div className="logo"></div>
        </div>

        <div className="nav-block border">
          <div className="hd-switch">
            <a href="#" className="hd-switch1">Exchange</a>
            <a href="#" className="hd-switch1"> Web3 </a>
          </div>
          <div style={{ height: '20px', width: '1px', background: 'rgb(64, 67, 71)', marginRight: '8px' }}></div>
        </div>

        <div className="nav-menu border">
          <div className="hd-square">
            <div className="hd-menu">
              <div className="Square-img"></div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>

          <div className="hd-square">
            <div className="hd-menu">
              <div className="Buy-Crypto">Buy Crypto
                <div className="menu-buy">
                  <div className="menu-buy1">
                    <div className="menu-buy1-1">One-Click Buy</div>
                    <div className="menu-buy1-2">Buy Crypto Within Seconds</div>
                  </div>
                  <div className="menu-buy1">
                    <div className="menu-buy1-1">P2P Trading (0 Fees)</div>
                    <div className="menu-buy1-2">60+ Fiat Currencies and Various popular local payment methods with Best Prices</div>
                  </div>
                  <div className="menu-buy1">
                    <div className="menu-buy1-1">Fiat Deposit</div>
                    <div className="menu-buy1-2">Top up Balance via Bank Transfer or a Bank Card</div>
                  </div>
                  <div className="menu-buy1">
                    <div className="menu-buy1-1">Crypto Deposit</div>
                    <div className="menu-buy1-2">Instant Crypto Deposits to Your Account</div>
                  </div>
                </div>
              </div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} id="cartel-arrow" />
          </div>
          <div className="hd-square">
            <div className="hd-menu">
              <div className="Markets">Markets</div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} id="cartel-arrow" />
          </div>
          <div className="hd-square">
            <div className="hd-menu">
              <div className="Trade">Trade</div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} id="cartel-arrow" />
          </div>
          <div className="hd-square">
            <div className="hd-menu">
              <div className="Derivatives">Derivatives</div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} id="cartel-arrow" />
          </div>
          <div className="hd-square">
            <div className="hd-menu">
              <div className="Tools">Tools</div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} id="cartel-arrow" />
          </div>
          <div className="hd-square">
            <div className="hd-menu">
              <div className="Finance">Finance</div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} id="cartel-arrow" />
          </div>
        </div>

        <div className="nav-search border">
          <span className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <div className="search-coin">
            <input placeholder="Search Coin" className="search-input" />
          </div>
        </div>
      </div>

      <div className="hd-right">
        {isLoggedIn ? (
          <div className="right-menu zzz">
            <div className="profile">
              <div className="profile-menu-allbox">
                <div className="pro-1box">
                  <div className="profile-menu1">
                    <div className="pro-profile"></div>
                    <div className="pro-mail-main-uid">
                      <div className="pro-mail-mainac">
                        <div className="pro-mail">tip***@****</div>
                        <div className="pro-main-ac">Main Account</div>
                      </div>
                      <div className="pro-uid">
                        UID: 44440000 <FontAwesomeIcon icon={faClone} />
                      </div>
                    </div>
                  </div>
                  <div className="pro-veri-id">
                    <span className="pro-veri-id1">Complete Identity Verification</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="pro-swich-ac">
                    <span className="pro-veri-id1">Now Switch/Create Account</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="pro-depos-with">
                    <button className="pro-deposit">Deposit</button>
                    <button className="pro-withdraw">Withdraw</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-menu">
              <div className="noti-icon">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>
        ) : (
          currentUrl !== "/user/signin" && currentUrl !== "/user/signup" && (
            <div className="right-menu">
              <div className="noti-icon">
                <form action="/user/signin" method="GET">
                  <button type="submit" className="login-btn">Login</button>
                </form>
              </div>
            </div>
          )
        )}

        <div className="right-menu">
          <div className="download-icon">
            <FontAwesomeIcon icon={faDownload} />
          </div>
        </div>
        <div className="right-menu">
          <div className="world-icon">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;



