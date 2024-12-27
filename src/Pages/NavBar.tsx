import {Link} from "react-router-dom";


const NavBar = () => {
    return (
    <>
        <header>
        <nav
            className={"navBar"}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbarContainer">
                <ul className="navbarMenu">
                    <li className="navbarItem">
                        <a className="navbarLinkOne" href="/">
                            Home
                        </a>
                    </li>
                    <li className="navbarItem">
                        <a className="navbarLinkTwo" href="/blogs">
                            BLOGS
                        </a>
                    </li>
                    <li className="navbarItem">
                        <Link className="navbarLinkThree" to="/newblog">
                            Write a Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
        </>

    )}


export default NavBar;