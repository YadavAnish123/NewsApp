import React from 'react'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid bg-dark text-white">
                    <a className="navbar-brand text-white" href="#">AnishNews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/">general</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link text-white" href="business">business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="entertainment">entertainment</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="health">health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="science">science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="sports">sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="technology">technology</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )

}

export default Navbar
