import { useState } from "react"
import Blogs from "./components/Blog/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const bookmarkBtnHandleClick = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div className="mx-10 my-10">
        <Header></Header>
        <div className="md:flex gap-10">
          <Blogs bookmarkBtnHandleClick={bookmarkBtnHandleClick}></Blogs>
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </div>
    </>
  )
}

export default App
