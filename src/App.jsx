import Blogs from "./components/Blog/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <div className="mx-10 my-10">
        <Header />
        <div className="md:flex">
          <Blogs />
          <Bookmarks />
        </div>
      </div>
    </>
  )
}

export default App
