import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const ModelCard = ({ model }) => {



    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">{model.name}</h2>

            <div className="inline-flex items-center bg-amber-400 text-white px-3 py-1 rounded-md font-semibold mb-4">
                <Star size={16} className="mr-1" /> {model.purchased}
            </div>

            <p className="text-gray-700 text-sm mb-4">
                {model.description}
            </p>

            <div className="flex justify-center gap-3 mt-3">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-md text-sm font-medium">
                    {model.framework}
                </span>
                <span className="bg-teal-600 text-white px-4 py-1 rounded-md text-sm font-medium">
                    {model.useCase}
                </span>

            </div>
            <Link to={`/models/${model._id}`}
                className="text-blue-600 font-medium hover:underline">
                View Details
            </Link>
        </div>
    );
};

export default ModelCard;
