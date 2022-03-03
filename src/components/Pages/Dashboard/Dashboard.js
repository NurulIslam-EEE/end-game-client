import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// import AddNewBlog from "./AddNewBlog";
// import SideMenu from "./SideMenu";

const Dashboard = () => {
    const { user, logout, isAdmin } = useAuth();
    const [sidenav, setSidenav] = useState(true);

    //toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    };

    // auto hide
    window.addEventListener("resize", () => {
        if (window.innerWidth < 1098) {
            setSidenav(false);
        } else {
            setSidenav(true);
        }
    });

    // const [control, setControl] = useState("addBlog");
    return (
        <>

            <main className="w-screen h-screen grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6">

                <div className="col-span-1 bg-gray-300">
                    <div>
                        {sidenav && (
                            <>
                                <nav className="flex fixed flex-col items-center w-60 bg-white h-screen px-2">
                                    <div className="mt-5 flex flex-col items-center justify-center space-y-3">
                                        <Link to="/home">
                                            <button className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-10 border border-transparent hover:border-teal-400 rounded mb-4">Home</button>
                                        </Link>
                                        {/* image  */}
                                        <img
                                            src="https://muslimmirror.com/eng/wp-content/uploads/2016/07/81460363127_freesize1.jpg"
                                            className="w-20 h-20 rounded-full object-center mx-auto"
                                            alt={user.displayName}
                                        />
                                        {/* user info  */}
                                        <div>
                                            <h5 className="text-center font-primary text-gray-700">
                                                {user.displayName}
                                            </h5>
                                            <p className="text-center font-primary text-gray-500 text-sm">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10 mb-4">
                                        <ul className="flex flex-col space-y-2">
                                            <li className=" text-white flex items-center mb-3 rounded-md  cursor-pointer px-2">
                                                <Link to={`/dashboard/addNewBlog`}>
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-4 border border-transparent hover:border-teal-400 rounded mb-4">Add New Blog</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                        {(isAdmin && user?.email) && <ul className="flex flex-col space-y-2">
                                            <li className="text-white flex items-center mb-3  rounded-md  cursor-pointer px-2">
                                                <Link to={`/dashboard/makeAdmin`}>
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-4 border border-transparent hover:border-teal-400 rounded mb-4">Make Admin</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="text-white flex items-center mb-3  rounded-md cursor-pointer px-2">
                                                <Link to={`/dashboard/allBlogs`}>
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-4 border border-transparent hover:border-teal-400 rounded mb-4">Manage Blogs</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className=" text-white flex items-center mb-3  rounded-md  cursor-pointer px-2">
                                                <Link to={`/dashboard/reviews`}>
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-2 border border-transparent hover:border-teal-400 rounded mb-4">Manage Review</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>}
                                        <button className="" onClick={logout}>
                                            <div className="flex items-center space-x-3">
                                                <span className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-10 border border-transparent hover:border-teal-400 rounded mb-4">Log Out</span>
                                            </div>
                                        </button>
                                    </div>
                                </nav>
                            </>
                        )}

                        {/* //menu icons  */}
                        <div
                            className=" block fixed bottom-10 left-10 bg-white p-2 rounded-full cursor-pointer shadow-xl border border-primary"
                            onClick={handlenav}
                        >
                            <MdOutlineArrowForwardIos className="text-2xl text-primary" />
                        </div>
                    </div>

                </div>
                <div className="col-span-5 pt-24 bg-gray-300">
                    <div className="">
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;