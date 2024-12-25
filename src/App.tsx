import "./App.css";
import TestBlogs from "./Data/TestBloggs";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
