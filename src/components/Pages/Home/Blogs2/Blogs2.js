import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import {
    FaClock,
    FaMapMarkerAlt
} from "react-icons/fa";

const Blogs2 = () => {
    const [blogs, setBlogs] = useState([]);
    const [topBlogs, setTopBlogs] = useState([]);
    useEffect(() => {
        fetch('https://dry-journey-24779.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                data.sort((a, b) => b.rating - a.rating)
                setTopBlogs(data)
            });
    }, [])
    console.log(topBlogs, blogs)
    return (
        <section className="container my-20" id="tours">
            <h1>All Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    blogs.map(blog => <Blog key={blog._id} data={blog} />)
                }
                <div className="">
                    <h2>Top rated Spots</h2>
                    {topBlogs.map(blog => (
                        <div className="card">
                            <div>
                                <img alt="" className="w-full h-60" src={blog.image} />
                            </div>
                            <div className="p-10">
                                <h2 className="text-2xl font-bold">destination</h2>
                                <p className="text-gray-600 my-3"><span className="text-xl font-bold text-tomato">Star Rating {blog.rating}</span> </p>


                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Blogs2;