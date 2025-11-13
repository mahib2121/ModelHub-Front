// import React from 'react';
// import BanPic from '../assets/BannerPhoto.png';

// const Banner = () => {
//     return (

//         <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
//             <div className="container mx-auto px-6 md:px-16 py-16">

//                 <div className="flex flex-col md:flex-row items-center md:gap-12">


//                     <div className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-12 md:mb-0">
//                         <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white">
//                             ModelHub
//                         </h1>


//                         <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
//                             AI Model Inventory Manager
//                         </h2>


//                         <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 max-w-lg mx-auto md:mx-0">
//                             Effortlessly organize, version, and deploy your AI models—all in one place.
//                         </p>


//                         <button className="mt-8 px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-xl transition-all duration-300
//                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
//                             Get Started
//                         </button>
//                     </div>


//                     <div className="md:w-1/2 lg:w-2/5 w-full">
//                         <img
//                             src={BanPic}
//                             alt="Banner Illustration of AI models and data"
//                             className="w-full h-80 md:h-auto md:max-h-[500px] object-cover rounded-2xl shadow-lg"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;



import React from 'react';
import BanPic from '../assets/BannerPhoto.png';

const Banner = () => {
    return (
        // The section is the main container
        <section className="relative rounded-2xl shadow-xl overflow-hidden">

            {/* --- Background Image --- */}
            {/* Stretches to fill the parent, object-cover ensures it scales nicely */}
            <img
                src={BanPic}
                alt="AI models and data"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* --- Dark Overlay --- */}
            {/* This sits on top of the image (z-10) to add contrast for the text */}
            <div className="absolute inset-0 bg-slate-900/70 z-10" aria-hidden="true"></div>

            {/* --- Text Content --- */}
            {/* Sits on top of the overlay (z-20) and is centered */}
            <div className="relative z-20 container mx-auto px-6 md:px-16 py-24 md:py-36">
                <div className="flex flex-col items-center text-center">

                    <h1 className="text-5xl md:text-7xl font-bold text-white">
                        ModelHub
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-indigo-300 mt-2">
                        AI Model Inventory Manager
                    </h2>

                    <p className="text-lg text-slate-200 mt-6 max-w-lg">
                        Effortlessly organize, version, and deploy your AI models—all in one place.
                    </p>

                    {/* Button is "reversed" (white bg) to pop against the dark background */}
                    <button className="mt-8 px-8 py-3 bg-white text-indigo-700 text-lg font-bold rounded-lg shadow-lg
                                     hover:bg-slate-100 transition-all duration-300
                                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;