import React from "react";

function NavBar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Alejandro Sanchez</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="/">About Me <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="./pages/contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="./pages/portfolio.html">Portfolio</a>
                        </li>
                    </ul>
                    </div>
            </nav>

        </div>
    );
};

export default NavBar;