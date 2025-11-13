import React from 'react';

const AboutSection = () => {
    return (
        <section className="max-w-3xl mx-auto text-center p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">About AI Models</h1>
            <p className="text-gray-700 leading-relaxed text-base">
                AI models are algorithms trained on large datasets to recognize patterns, make predictions,
                and generate intelligent responses. They power modern technologies such as chatbots,
                recommendation systems, self-driving cars, and image recognition software.
                Neural networks, especially deep learning architectures, form the backbone of most
                state-of-the-art AI systems today.
            </p>
        </section>
    );
};

export default AboutSection;
