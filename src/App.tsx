import "./App.css";
import TestBlogs from "./Data/TestBloggs";
import "bulma/css/bulma.css";

function App() {
  return (
    <>
      <div>
        {TestBlogs.map((blog, index) => (
          <div key={index}>
            <div className="card">
              <div className="title is-4"> {blog.title} </div>
              <div className="content"> {blog.body}</div>
              <div className="subtitle is-6"> {blog.publishDate}</div>
              <div className="subtitle is-6"> {blog.author}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
