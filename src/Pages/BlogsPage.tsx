import "../App.css"
import TestBlogs from "../Data/TestBloggs.tsx";
import Blog from "../Data/Blog.tsx";
import NavBar from "./NavBar.tsx";


const BlogsPage = () => {
  return (
      <>
        <NavBar/>
    <body>
      <main>
        <section className={"hero"}>
          <div className="heroContainer">
            <div className="heroContent">
              {TestBlogs.map((blog: Blog, index: number) => (
                <div key={index}>
                  <div>
                    <h1> {blog.title} </h1>
                    <p> Publish Date: {blog.publishDate}</p>
                    <p> Authored by {blog.author}</p>
                    <h2> {blog.body}</h2>
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
};

export default BlogsPage;
