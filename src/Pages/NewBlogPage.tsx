import "../App.css"
import NavBar from "./NavBar.tsx";

const NewBlogPage = () => {
  return (
      <>
        <NavBar/>
        <section className={"hero"}>
          <div className="heroContainer">
            <div className="heroContent">
              <h1>Captain's Log</h1>
              <textarea placeholder={"Enter new log here..."} />
            </div>
          </div>
        </section>
            </>
            )
            }
            //
            export default NewBlogPage;