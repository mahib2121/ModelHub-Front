import React from 'react';
import Banner from '../Compo/Banner';
import { useLoaderData } from 'react-router';
import ModelCard from '../Compo/ModelCard';
import GetStartedSection from '../Compo/GetStartedSection';
import AboutSection from '../Compo/AboutSection';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="text-center text-xl font-bold mt-10">Latest Model</div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                {
                    data.map(model => <ModelCard key={model.id} model={model}> </ModelCard>)
                }

            </div>
            <AboutSection></AboutSection>
            <GetStartedSection></GetStartedSection>

        </div>
    );
};

export default Home;
