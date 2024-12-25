import "./App.css";
import TestBlogs from "./Data/TestBloggs";

function App() {
  return (
    <>
      <body>
        <header>
          <nav
            className={"navBar"}
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbarContainer">
              <ul className="navbarMenu">
                <li className="navbarItem">
                  <a className="navbarLink" href="/">
                    Home
                  </a>
                </li>
                <li className="navbarItem">
                  <a className="navbarLink" href="/blogs">
                    BLOGS
                  </a>
                </li>
                <li className="navbarItem">
                  <a className="navbarLink" href="/newblog">
                    Write a Blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div>
          {TestBlogs.map((blog, index) => (
            <div key={index}>
              <div>
                <div> {blog.title} </div>
                <div> {blog.body}</div>
                <div> {blog.publishDate}</div>
                <div> {blog.author}</div>
              </div>
            </div>
          ))}
        </div>
      </body>
    </>
  );
}

export default App;
