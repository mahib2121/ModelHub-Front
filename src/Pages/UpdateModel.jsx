import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router'; // Changed to react-router-dom
import { toast } from 'react-toastify';

const UpdateModel = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        framework: '',
        useCase: '',
        dataset: '',
        description: '',
        image: ''
    });
    const [loading, setLoading] = useState(true); // Added loading state
    const navigate = useNavigate();


    useEffect(() => {
        const fetchModel = async () => {
            try {
                const res = await fetch(`https://ai-server-hazel.vercel.app/models/${id}`);


                if (!res.ok) {
                    throw new Error('Model not found');
                }

                const data = await res.json();


                if (data && data.result) {
                    const model = data.result;
                    setFormData({
                        name: model.name || '',
                        framework: model.framework || '',
                        useCase: model.useCase || '',
                        dataset: model.dataset || '',
                        description: model.description || '',
                        image: model.image || ''
                    });
                } else {
                    toast.error('Model data is in an unexpected format.');
                }
            } catch (error) {
                console.error(error);
                toast.error(error.message || 'Failed to load model data.');
                navigate('/models'); // Go back if we can't load
            } finally {
                setLoading(false); // Stop loading
            }
        };
        fetchModel();
    }, [id, navigate]); // Added navigate to dependency array

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://ai-server-hazel.vercel.app/models/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                toast.success('Model updated successfully!');
                navigate(`/models/${id}`);
            } else {
                toast.error(data.message || 'Failed to update model.');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while updating the model.');
        }
    };


    if (loading) {
        return <div className="text-center py-10 text-lg font-semibold">Loading model data...</div>;
    }

    return (
        <div className="max-w-xl mx-auto p-6 bg-base-100 rounded-2xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold text-center mb-6">Update AI Model</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Model Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="framework"
                    placeholder="Framework"
                    value={formData.framework}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="useCase"
                    placeholder="Use Case"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="dataset"
                    placeholder="Dataset"
                    value={formData.dataset}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    rows="3"
                    required
                ></textarea>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />

                <button
                    type="submit"
                    className="btn btn-success w-full"
                >
                    Save Changes
                </button>
            </form>

            {formData.image && (
                <div className="mt-6 text-center">
                    <p className="text-sm font-medium mb-2">Image Preview:</p>
                    <img
                        src={formData.image}
                        alt="Model Preview"
                        className="mx-auto w-48 h-48 object-cover rounded-lg shadow"
                    />
                </div>
            )}
        </div>
    );
};

export default UpdateModel;