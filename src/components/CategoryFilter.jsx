import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="mb-5 text-xs">
            <strong className="mr-2 text-sm">Filter:</strong>
            <button
                className={`px-2 py-1 mr-2 rounded-md transition ease-in-out duration-200 hover:shadow-lg capitalize ${
                    selectedCategory === 'all'
                        ? 'bg-gray-300 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => onSelectCategory('all')}
            >
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    className={`px-2 py-1 mr-2 rounded-md transition ease-in-out duration-200 hover:shadow-lg capitalize ${
                        selectedCategory === category
                            ? 'bg-gray-300 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => onSelectCategory(category)}
                >
                    {category.replace(/_/g, ' ')}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
