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
                                    <img src="https://s3-alpha-sig.figma.com/img/c7d5/7ddb/0cce11f75d37450988cb174c61b28518?Expires=1695600000&Signature=LmbEsVvXkfTmU8S83ZEPBzblsvSd0UOzAJXIRH7ckqCfCsxHOsD0nZlvWHzd1VFGe3vl3D3PVF9gK972OaxbFwG1DW-QcyOsM494oOVm1bd~Yy30MEZ911qgrFVCceQEpcDkLKA4kiEOz00V4DzuQWsayw9Ok7PtkRPpjZoWxLxAIoysGa3~9dnuAdqyQFGI6keqYF9wrWfyvNrfu6mh2Bhauhi76MVZ5GL79ANpLhBey329Cmk6gU-59sQYUKnqjrWwG4EwSQaGKjc5n7PT7OgYxplJXCAeXxyLbssbtx5m6xD3X4HLYmXRo-jn8qc81gDLECgFoBLFkYbxzFMEhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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