import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false)
    useEffect(() => {
        fetch('https://dry-journey-24779.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setIsUpdated(false)
                setReviews(data)
            })
    }, [isUpdated])

    // functionality for  update status
    const handleUpdateStatus = (id, reviews) => {
        console.log(id, reviews)
        const updatedStatus = {
            ...reviews,
            status: 'Approved'
        }
        console.log(updatedStatus)
        fetch(`https://dry-journey-24779.herokuapp.com/review/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                setIsUpdated(true)
            })
    }

    return (
        <div>
            <table className="max-w-screen-xl mx-auto">
                <thead className="hidden lg:block bg-teal-400  font-primary">
                    <tr className="grid grid-cols-1 lg:grid-cols-6 place-items-center">
                        <th
                            scope="col"
                            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                        >
                            Title
                        </th>
                        <th
                            scope="col"
                            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                        >
                            Rating
                        </th>
                        <th
                            scope="col"
                            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                        >
                            Cost
                        </th>
                        <th
                            scope="col"
                            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(review =>
                        <tr key={review._id} className="bg-white border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-6 place-items-center">
                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{review.title}</td>
                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{review.rating}</td>
                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{review.cost}</td>
                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{review.status}</td>
                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleUpdateStatus(review._id, review)} className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-4 border border-transparent hover:border-teal-400 rounded mb-4">Update</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Review;