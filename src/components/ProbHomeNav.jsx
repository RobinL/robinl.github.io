import React from 'react';
import { Link } from 'gatsby';

const ProbHomeNav = () => {
    return (
        <div className="bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs">
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <span>
                        This article is part of the&nbsp;
                        <Link
                            to="/probabilistic_linkage"
                            className="text-blue-500 hover:underline"
                        >
                            probabilistic linkage training materials
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProbHomeNav;
