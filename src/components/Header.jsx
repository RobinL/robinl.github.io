import React from 'react';
import { Link } from 'gatsby';
import {
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaHome,
    FaInfoCircle,
} from 'react-icons/fa';
import { RiBlueskyFill } from "react-icons/ri";
import { SlLink } from 'react-icons/sl';
import ResponsiveLink from './ResponsiveIcon';

import '../styles/shimmer.css';

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                    <div className="text-base font-mono font-semibold shimmer-text">
                        <Link
                            to="/"
                            className="text-base font-mono font-bold shimmer-text"
                        >
                            &gt;robinlinacre
                        </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <ResponsiveLink
                        text="Home"
                        IconComponent={FaHome}
                        route="/"
                    />
                    <ResponsiveLink
                        text="About"
                        IconComponent={FaInfoCircle}
                        route="/about"
                    />

                    <Link
                        to="/probabilistic_linkage"
                        className="text-gray-600 hover:text-blue-700 transition ease-in duration-200 "
                    >
                        <SlLink
                            style={{
                                transform: 'scaleY(-1)',
                            }}
                            className="w-4.5 h-4.5 "
                        />
                    </Link>

                    <a
                        href="https://twitter.com/robinlinacre"
                        className="text-gray-600 hover:text-blue-700 transition ease-in duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="w-4.5 h-4.5" />
                    </a>

                    <a
                        href="https://github.com/robinl"
                        className="text-gray-600 hover:text-blue-700 transition ease-in duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-4.5 h-4.5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/robinlinacre/"
                        className="text-gray-600 hover:text-blue-700 transition ease-in duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="w-4.5 h-4.5" />
                    </a>
                    <a
                        href="https://bsky.app/profile/robinlinacre.bsky.social"
                        className="text-gray-600 hover:text-blue-700 transition ease-in duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RiBlueskyFill className="w-4.5 h-4.5" />
                    </a>
                </div>
            </div>
            <hr className="border-gray-300 mb-4" />
        </div>
    );
};

export default Header;
