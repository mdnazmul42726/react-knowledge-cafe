const Blog = ({ blog, bookmarkBtnHandleClick, readBtnHandleClick }) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;


    return (
        <div>
            <div className="my-10 bg-base-100">
                <figure><img src={cover} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex gap-5">
                        <div className="">
                            <img className="w-10" src={author_img} alt="" />
                        </div>
                        <div className="">
                            <p className=" font-bold">{author}</p>
                            <div className="flex gap-10 md:gap-72 justify-between">
                                <p>{posted_date}</p>
                                <div className="flex">
                                    <p>{reading_time} min read &nbsp;</p>
                                    <button title="Add to bookmark!" onClick={() => bookmarkBtnHandleClick(blog)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold mt-5">{title}</h1>
                </div>
                <div className="flex gap-3 ml-8">
                    <p>#{hashtags[0]} </p>
                    <p>#{hashtags[1]} </p>
                </div>
                <button className="text-[#6047EC] mt-3 ml-8" onClick={() => readBtnHandleClick(id, reading_time)}><u>Mark as read</u></button>
            </div>
        </div>
    );
};

export default Blog;