import React from 'react';

const Header = ({slogan}) => {
    return (
         <div class="container flex justify-center mx-auto p-6">
                     <div className="gallery-head mx-auto mt-8">
                <h2 className='text-3xl font-bold text-center'>{slogan}</h2>
                <div className="divider before:bg-gray-900 after:bg-gray-900 mb-10"></div>
                </div>
                </div>
    );
};

export default Header;