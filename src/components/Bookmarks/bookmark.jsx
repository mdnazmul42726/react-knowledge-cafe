
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="p-5 bg-[#fff] mb-4 rounded">
           <h3 className="font-bold">{title}</h3>
        </div>
    );
};

export default Bookmark;