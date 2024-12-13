import "./App.css";
import TestBlogs from "./Data/TestBloggs";

function App() {
  return (
    <>
      <div>
        {TestBlogs.map((blog, index) => (
          <div key={index}>{blog.title} </div>
        ))}
      </div>
    </>
  );
}

export default App;
