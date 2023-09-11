import React from 'react';
import profilePic from '../images/headshot.png';

const HeadShot = () => {
    return (
        <div className="w-40 h-40 mx-auto mb-5 rounded-full border border-gray-300 overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img
                src={profilePic}
                alt="Robin"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default HeadShot;
