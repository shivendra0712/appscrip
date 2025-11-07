import React from "react";
import Link from "next/link";
import Image from "next/image";



const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Left - Logo */}
                <div className="logo-section">
                    <span> <i class="ri-menu-line" ></i></span>
                    <Image src="/images/logo.png" alt="site logo" width={40} height={30} />

                </div>

                {/* Center - Navigation */}
                <h1 className="logo-text">LOGO</h1>

                {/* Right - Icons + Language */}
                <div className="icon-section">
                    <Image src="/images/nav-image-search.png" alt="search" width={34} height={34} />
                    <Image src="/images/nav-image-heart.png" alt="heart" width={34} height={34} />
                    <Image src="/images/nav-image-bag.png" alt="bag" width={34} height={34} /> 
                    <span>  <Image src="/images/nav-image-user.png" alt="user" width={34} height={34} /></span>
                    <select className="lang-select">
                        <option value="ENG">ENG</option>
                        <option value="HIN">HIN</option>
                    </select>
                </div>
            </div>
            <div className="options-container">
                <nav className="options">
                    <Link className="option-link" href="#">SHOP</Link>
                    <Link className="option-link" href="#">SKILLS</Link>
                    <Link className="option-link" href="#">STORIES</Link>
                    <Link className="option-link" href="#">ABOUT</Link>
                    <Link className="option-link" href="#">CONTACT US</Link>
                </nav>
            </div>
            <div className="header-text">
                   <div className="header-text-container">
                    <h1>Discover Our Products</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit and Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                   </div>
            </div>
        </header>
    );
};

export default Header;
