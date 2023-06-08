import React from 'react';

const Header = ({slogan}) => {
    return (
         <div class="container flex justify-center mx-auto ">
                     <div className="gallery-head mx-auto mt-8">
                <h2 className='text-3xl font-bold '>{slogan}</h2>
                <div className="divider"></div>
                </div>
                </div>
    );
};

export default Header;