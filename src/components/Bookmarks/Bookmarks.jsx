import Bookmark from "./bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
    console.log(readTime);
    return (
        <div className="md:w-1/3">
            <div className="p-5 border border-[#6047EC]">
                <h1 className="font-bold">Spent time on read : <span className="text-red-500"> {readTime} min</span> </h1>
            </div>
            <div className=" bg-[#eee] p-10 mt-4">
                <p className="font-bold mb-5 text-xl">Bookmarked Blogs: {bookmarks.length}</p>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
                }
            </div>
        </div>
    );
};

export default Bookmarks;