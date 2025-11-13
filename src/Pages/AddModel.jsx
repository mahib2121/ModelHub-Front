import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const AddModel = () => {
    const [formData, setFormData] = useState({
        name: '',
        framework: '',
        useCase: '',
        dataset: '',
        description: '',
        image: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/models', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.insertedId || data.success) {
                toast.success('Model added successfully!');
                navigate('/viewModel');
            } else {
                toast.error('Failed to add model.');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while adding the model.');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold text-center mb-6">Add New AI Model</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Model Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-md"
                    required
                />
                <input
                    type="text"
                    name="framework"
                    placeholder="Framework (e.g., TensorFlow, PyTorch)"
                    value={formData.framework}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-md"
                    required
                />
                <input
                    type="text"
                    name="useCase"
                    placeholder="Use Case"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-md"
                    required
                />
                <input
                    type="text"
                    name="dataset"
                    placeholder="Dataset"
                    value={formData.dataset}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-md"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-md"
                    rows="3"
                    required
                ></textarea>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-md"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                    Add Model
                </button>
            </form>
        </div>
    );
};

export default AddModel;
