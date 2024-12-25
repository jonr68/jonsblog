import "./App.css";
import TestBlogs from "./Data/TestBloggs";
import blog from "./Data/Blog.tsx";

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
        <main>
          <section className={"hero"}>
            <div className="heroContainer">
              <div className="heroContent">
                {TestBlogs.map((blog: blog, index: number) => (
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
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
