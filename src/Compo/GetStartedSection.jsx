import React from 'react';

const GetStartedSection = () => {
    return (
        <section className="max-w-3xl mx-auto text-center p-8">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Get Started</h2>
            <p className="text-gray-700 mb-5">
                Register or log in to manage, explore, and monitor your AI models easily through ModelHub.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition font-medium">
                Register / Log In
            </button>
        </section>
    );
};

export default GetStartedSection;
