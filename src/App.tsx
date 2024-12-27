import "./App.css";
import {Routes, Route, HashRouter} from "react-router-dom";
import BlogsPage from "./Pages/BlogsPage.tsx";
import NewBlogPage from "./Pages/NewBlogPage.tsx";


function App() {
  return (
      <>

          <HashRouter>
              <Routes>
                  <Route path="/" element={<BlogsPage/>}/>
                  <Route path="/newblog" element={<NewBlogPage/>}/>
              </Routes>
          </HashRouter>
      </>
  );
}

export default App;
