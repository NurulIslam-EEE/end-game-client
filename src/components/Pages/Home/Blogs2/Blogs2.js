import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Pagination from "./Pagination";
import {
    FaClock,
    FaMapMarkerAlt
} from "react-icons/fa";

const Blogs2 = () => {
    const [blogs, setBlogs] = useState([]);
    const [topBlogs, setTopBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(10);
    useEffect(() => {
        fetch('https://dry-journey-24779.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter((d) => d.status === "approved");
                setBlogs(filterData);

                data.sort((a, b) => b.rating - a.rating)
                setTopBlogs(data.slice(0, 5));
            });
    }, [])
    console.log(topBlogs, blogs)
    const indexOfLastPage = currentPage * blogsPerPage;
    const indexOfFirstPage = indexOfLastPage - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstPage, indexOfLastPage);
    return (
        <section className="container my-20" id="tours">
            <h1>All Blog</h1>
            <div className="md:flex">
                <div className="flex-auto">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {currentBlogs.map((blog) => (
                            <Blog key={blog._id} data={blog} />
                        ))}
                    </div>
                </div>
                <div className="flex-auto ml-2 min-w-fit " >
                    <h2 className="text-4xl mb-4">Top rated Spots</h2>
                    {topBlogs.map((blog) => (
                        <div className="top-blog border mb-4">
                            <div>
                                <img alt="" className="w-full h-40" src={blog.image} />
                            </div>
                            <div className="p-2">
                                <h2 className=" font-bold">{blog.title}</h2>
                                <p className="text-gray-600 my-3">
                                    <span className="text-xl font-bold teal-400">
                                        Total stars: {blog.rating}
                                    </span>{" "}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <Pagination
                    postsPerPage={blogsPerPage}
                    totalPosts={blogs.length}
                    setCurrentPage={setCurrentPage}
                />
            </div>

        </section>
    );
};

export default Blogs2;