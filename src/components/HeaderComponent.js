import React, { useState } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import ClamClub from '../clamclub_logo.png'
// import axios from "axios";

function Header() {
    return (
        <Container fluid className="reactstrap5jumbotronclone">
            <div className="">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <img src={ClamClub} className="site-logo"></img>
                </div>
                <div className="col header-bar">
                    <Link className="header-links" to="/"> Home </Link>
                    <Link className="header-links" to="/posts"> Posts </Link>
                    <Link className="header-links" to="/upload"> Upload </Link>
                    <Link className="header-links" to="/tags"> Tags </Link>
                    <Link className="header-links" to="/discord"> Discord </Link>
                </div>

            </div>
        </div>
    </Container>
    )
    
}
export default Header;