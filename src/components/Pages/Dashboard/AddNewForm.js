import axios from 'axios';
import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const AddNewForm = () => {
    const { isAdmin } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = React.useState();

    const onSubmit = (data) => {
        console.log(data);
        data["rating"] = 0;

        if (isAdmin) {
            data["status"] = "approved";
        } else {
            data["status"] = "pending";
        }
        axios
            .post("https://dry-journey-24779.herokuapp.com/blogs", data)
            .then((res) => {
                if (res.data.acknowledged) {
                    swal("Good job!", "Blog Added", "success");
                }
                reset();
            })
            .catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error");
            });
    };

    return (
        <div className="py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <div className="flex flex-col space-y-4">
                    {/* title  */}
                    <input type="text" className="input-primary" placeholder="Title" {...register("title", { required: true })} />
                    {/* description  */}
                    <textarea cols="30" rows="9" className="input-primary resize-none" placeholder="Description" {...register("description", { required: true })}></textarea>
                    {/* category  */}
                    <input className="input-primary" type="time" placeholder="Time" {...register("time", { required: true })} />
                </div>

                <div className="flex flex-col space-y-4">
                    {/* Image URL  */}
                    <input type="text" className="input-primary" placeholder="Image Link" {...register("image", { required: true })} />
                    {/* date  */}
                    <input type="date" className="input-primary" placeholder="Date" {...register("date", { required: true })} />
                    {/* category  */}
                    <input className="input-primary" placeholder="Category" {...register("category", { required: true })} />
                    {/* location  */}
                    <input type="text" className="input-primary" placeholder="location" {...register("location", { required: true })} />
                    {/* expense  */}
                    <input type="number" className="input-primary" placeholder="Cost" {...register("cost", { required: true })} />
                    {/* info  */}
                    <input type="text" className="input-primary" placeholder="Traveler Info" {...register("info", { required: true })} />
                    {/*    
                    <p className="text-gray-600 font-primary">
                              Give a rating*
                            </p>
                            <Rating
                              onChange={(rate) => setRating(rate)}
                              emptySymbol={<FaRegStar />}
                              fullSymbol={<FaStar />}
                            /> */}
                    <button className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-4 border border-transparent hover:border-teal-400 rounded mb-4">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewForm