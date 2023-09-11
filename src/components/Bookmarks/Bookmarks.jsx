import Bookmark from "./bookmark";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 md:h-[1000px] bg-[#eee] p-10">
            <p className="font-bold mb-5 text-xl">Bookmarked Blogs: {bookmarks.length}</p>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)
            }
        </div>
    );
};

export default Bookmarks;