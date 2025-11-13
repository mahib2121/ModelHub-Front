// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';
// import Swal from 'sweetalert2';

// const ModelDetail = () => {
//     const { id } = useParams();
//     const [model, setModel] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchModel = async () => {
//             try {
//                 const res = await fetch(`http://localhost:3000/models/${id}`);
//                 const data = await res.json();
//                 setModel(data.result);
//             } catch (err) {
//                 setError('Failed to fetch model data');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchModel();
//     }, [id]);



//     if (loading) return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
//     if (error) return <div className="text-center text-red-600 py-10">{error}</div>;
//     if (!model) return <div className="text-center py-10">No data found</div>;
//     const handleDelete = () => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:3000/models/${model._id}`, {
//                     method: "DELETE",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.success) {
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your model has been deleted.",
//                                 icon: "success"
//                             });
//                             navigate("/models");
//                         } else {
//                             Swal.fire({
//                                 title: "Error!",
//                                 text: "Failed to delete the model.",
//                                 icon: "error"
//                             });
//                         }
//                     })
//                     .catch(() => {
//                         Swal.fire({
//                             title: "Error!",
//                             text: "Something went wrong while deleting.",
//                             icon: "error"
//                         });
//                     });
//             }
//         });
//     };
//     return (
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
//             <img
//                 src={model.image}
//                 alt={model.name}
//                 className="w-full h-80 object-cover rounded-xl mb-6"
//             />

//             <h1 className="text-3xl font-bold mb-2">{model.name}</h1>
//             <p className="text-gray-600 mb-4">{model.description}</p>

//             <div className="grid grid-cols-2 gap-4 text-gray-800">
//                 <p><strong>Framework:</strong> {model.framework}</p>
//                 <p><strong>Use Case:</strong> {model.useCase}</p>
//                 <p><strong>Dataset:</strong> {model.dataset}</p>
//                 <p><strong>Purchased:</strong> {model.purchased}</p>
//                 <p><strong>Created By:</strong> {model.createdBy}</p>
//                 <p><strong>Created At:</strong> {new Date(model.createdAt).toLocaleDateString()}</p>
//                 <div className='flex gap-4 '>
//                     <Link to={`/updatemodel/${model._id}`}
//                         className="text-blue-600 font-medium hover:underline">
//                         Update Informaton
//                     </Link>
//                     <button onClick={handleDelete} className="btn btn-soft btn-secondary rounded-2xl">Delele Model</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ModelDetail;



import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const ModelDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const res = await fetch(`http://localhost:3000/models/${id}`);


                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();


                if (data && data.result) {
                    setModel(data.result);
                } else {
                    setError('Model data not found in response');
                }

            } catch (err) {
                console.error("Fetch error:", err);
                setError('Failed to fetch model data');
            } finally {
                setLoading(false);
            }
        };
        fetchModel();
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const deleteModel = async () => {
                    try {
                        const res = await fetch(`http://localhost:3000/models/${model._id}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });

                        const data = await res.json();

                        if (data.success) {
                            await Swal.fire({
                                title: "Deleted!",
                                text: "Your model has been deleted.",
                                icon: "success"
                            });
                            navigate("/viewModel");
                        } else {
                            throw new Error(data.message || "Failed to delete");
                        }
                    } catch (err) {
                        Swal.fire({
                            title: "Error!",
                            text: err.message || "Something went wrong while deleting.",
                            icon: "error"
                        });
                    }
                };
                deleteModel();
            }
        });
    };

    if (loading) return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
    if (error) return <div className="text-center text-red-600 py-10">{error}</div>;
    if (!model) return <div className="text-center py-10">No data found</div>;

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
            <img
                src={model.image}
                alt={model.name}
                className="w-full h-80 object-cover rounded-xl mb-6"
            />

            <h1 className="text-3xl font-bold mb-2">{model.name}</h1>
            <p className="text-gray-600 mb-4">{model.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
                <p><strong>Framework:</strong> {model.framework}</p>
                <p><strong>Use Case:</strong> {model.useCase}</p>
                <p><strong>Dataset:</strong> {model.dataset}</p>
                <p><strong>Purchased:</strong> {model.purchased}</p>
                <p><strong>Created By:</strong> {model.createdBy}</p>
                <p><strong>Created At:</strong> {new Date(model.createdAt).toLocaleDateString()}</p>


                <div className='flex gap-4 col-span-1 md:col-span-2 mt-6'>
                    <Link
                        to={`/updatemodel/${model._id}`}
                        className="btn btn-primary rounded-2xl"
                    >
                        Update Information
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="btn btn-error rounded-2xl"
                    >
                        Delete Model
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModelDetail;