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
                      <h1> {blog.title} </h1>
                      <h2> {blog.body}</h2>
                      <p> {blog.publishDate}</p>
                      <p> {blog.author}</p>
                    </div>
                  </div>
                ))}
              </div>
              <img
                src="src/assets/images/ufplogo.webp"
                alt="UFP Logo"
                id="heroIMG"
              />
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
