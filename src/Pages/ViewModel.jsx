import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../Compo/ModelCard';

const ViewModel = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1 className=' font-bold text-center'>Our Popular AI Models</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                {
                    data.map(model => <ModelCard key={model.id} model={model}> </ModelCard>)
                }

            </div>
        </div>
    );
};

export default ViewModel;