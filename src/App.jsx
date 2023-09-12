import { useState } from "react"
import Blogs from "./components/Blog/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"



function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0)

  const bookmarkBtnHandleClick = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const readBtnHandleClick = (id, time) => {
    setReadTime(readTime + time);
    const reamingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(reamingBookmarks);
  }

  return (
    <>
      <div className="mx-10 my-10">
        <Header />
        <div className="md:flex gap-10">
          <Blogs bookmarkBtnHandleClick={bookmarkBtnHandleClick} readBtnHandleClick={readBtnHandleClick} />
          <Bookmarks bookmarks={bookmarks} readTime={readTime} />
        </div>
      </div>
    </>
  )
}

export default App
