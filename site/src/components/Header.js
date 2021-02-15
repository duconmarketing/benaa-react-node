import {
	BrowserRouter as Router,
	Link,
  } from "react-router-dom";
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../img/Benaa_Logo.png'
import {arrowRoundedDown9x6vg} from '../svg';

function Header() {
  return (
	<React.Fragment>
		<HelmetProvider>
			<Helmet>
				<title>800Benaa</title>
			</Helmet>
		</HelmetProvider>

		<header className="site__header d-lg-none">
			<div className="mobile-header mobile-header--sticky" data-sticky-mode="pullToShow">
				<div className="mobile-header__panel">
					<div className="container">
						<div className="mobile-header__body">
							<button className="mobile-header__menu-button">
								<svg width="18px" height="14px">
									<use xlinkHref=""></use>
								</svg>
							</button>
							<a className="mobile-header__logo" href="">
							</a>
							<div className="search search--location--mobile-header mobile-header__search">
								<div className="search__body">
									<form className="search__form" action="" method="GET">
										<input className="search__input" name="searchKey" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autoComplete="off" />
										<button className="search__button search__button--type--submit" type="submit">
											<svg width="20px" height="20px">
												<use xlinkHref="/sprite.svg#cross-20"></use>
											</svg>
										</button>
										<button className="search__button search__button--type--close" type="button">
											<svg width="20px" height="20px">
												<use xlinkHref="/sprite.svg#cross-20"></use>
											</svg>
										</button>
										<div className="search__border"></div>
									</form>
									<div className="search__suggestions suggestions suggestions--location--mobile-header"></div>
								</div>
							</div>
							<div className="mobile-header__indicators">
								<div className="indicator indicator--mobile-search indicator--mobile d-md-none">
									<button className="indicator__button">
										<span className="indicator__area">
											<svg width="20px" height="20px">
												<use xlinkHref=" "></use>
											</svg>
										</span>
									</button>
								</div>
								<div className="indicator indicator--mobile">
									<a href="{{URL::to('/cart')}}" className="indicator__button">
										<span className="indicator__area">
											<svg width="20px" height="20px">
												<use xlinkHref=""></use>
											</svg>
											<span className="indicator__value"></span>
										</span>
									</a>
								</div>
								<div>
									<ul>
										<li><Link to={"/"} style={{color:"white"}}>Home</Link></li>
									</ul>									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<header className="site__header d-lg-block d-none">
            <div className="site-header">
                <div className="site-header__topbar topbar">
                    <div className="topbar__container container">
                        <div className="topbar__row">
                            <div className="topbar__item topbar__item--link">
                                <a className="topbar-link">About Us</a>
                            </div>
                            <div className="topbar__item topbar__item--link">
                                <a className="topbar-link">Contact Us</a>
                            </div>
                            <div className="topbar__spring"></div>
                            <div className="topbar__item">
                                <div className="topbar-dropdown">
                                    <button className="topbar-dropdown__btn" type="button">
                                    <a className="menu__item-link" href="https://dev-800ducon.cs100.force.com/800Benaa/" target="_blank" style={{color:'#ffffff'}}>
                                        My Account
                                    </a>
                                    </button>
                                </div>
                            </div>
                            <div className="topbar__item">
                                <div className="topbar-dropdown">
                                    <button className="topbar-dropdown__btn" type="button">
                                        Currency: <span className="topbar__item-value" style={{color:'#ffffff'}}>AED</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-header__middle container">
                    <div className="site-header__logo mr-0">
						<Link to={"/"} style={{color:"white"}}><img src={Logo} alt="800Benaa" /></Link>                            
                    </div>
                    <div className="site-header__search" style={{background: '#fff'}}>
                        <div className="search search--location--header ">
                            <div className="search__body">
                                <form className="search__form" action="{{ url('search')}}" method="GET">
                                    <select className="search__categories" aria-label="Category" id="categorySearchList" style={{textTransform: 'capitalize'}}>
                                    </select>
                                    <input className="search__input" name="searchKey" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autocomplete="off" />
                                    <button className="search__button search__button--type--submit" type="submit">
                                    </button>
                                    <div className="search__border"></div>
                                </form>
                                <div className="search__suggestions suggestions suggestions--location--header"></div>
                            </div>
                        </div>
                    </div>
                    <div className="site-header__phone">
                        <div className="site-header__phone-title">Toll-Free</div>
                        <div className="site-header__phone-number">800-23622</div>
                    </div>
                </div>
                <div className="site-header__nav-panel">
                    <div className="nav-panel nav-panel--sticky" data-sticky-mode="pullToShow">
                        <div className="nav-panel__container container">
                            <div className="nav-panel__row">
                                <div className="nav-panel__nav-links nav-links" id="main-menu-div" style={{marginLeft: '-10px'}}>
                                    <ul className="nav-links__list">
                                        <li className="nav-links__item nav-links__item--has-submenu">
                                            <Link to={"/"} style={{color:"white"}} className="nav-links__item-link">
                                                <div className="nav-links__item-body">
                                                    Home
                                                    {/* <svg className="nav-links__item-arrow" width="9px" height="6px">
                                                        <use xlinkHref='./svg/arrow-rounded-down-9x6.svg'></use>
                                                    </svg> */}
                                                    <span>
                                                        <arrowRoundedDown9x6vg className="nav-links__arrow"/>
                                                    </span>                                                    
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-panel__indicators">
                                    <div className="indicator indicator--trigger--click">
                                        <a href="{{URL::to('/cart')}}" className="indicator__button">
                                            <span className="indicator__area">
                                                <span className="indicator__value">111</span>
                                            </span>
                                        </a>
                                        <div className="indicator__dropdown">
                                            <div className="dropcart dropcart--style--dropdown">
                                                <div className="dropcart__body">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
	</React.Fragment>	  
  );
}

export default Header;
