import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaClock,
    FaMapMarkerAlt
} from "react-icons/fa";

const Blog = ({ data }) => {
    const navigate = useNavigate();
    //data
    const { destination, cost, location, time, image, _id, description } = data
    // functionality for clicking
    const handleClick = () => {
        navigate(`/blogs/${_id}`)
    }

    return (
        <div className="card">
            <div>
                <img alt="" className="w-full h-40" src={image} />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-bold">{destination}</h2>
                <p className="text-gray-600 my-1"><span className="text-xl font-bold text-teal-400">$ {cost}</span> / per person</p>
                <div className="my-5 flex p-2 bg-gray-100 rounded-lg text-gray-500 font-medium justify-around">
                    <div className="flex">

                        <FaClock className="mr-2" />{time} days
                    </div>
                    <div>
                        |
                    </div>
                    <div className="flex">
                        <FaMapMarkerAlt className="mr-2" />
                        {location}
                    </div>
                </div>
                <p className="text-gray-600">{description.slice(0, 80)}</p>
                <div className="text-center "><button className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-4 border border-transparent hover:border-teal-400 rounded mb-4 " onClick={handleClick}>Details</button></div>
            </div>
        </div>
    );
};

export default Blog;