import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <div className="my-10 mx-10">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <p className="font-bold normal-case md:text-xl">Knowledge Cafe</p>
                    </div>
                    <div className="flex-none gap-2">

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={Profile}/>
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Header;