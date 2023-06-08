import React from 'react';

const Banner = ({title}) => {
    return (
        <div class="w-full bg-gray-100 px-10 pt-10 mx-auto">
                            <div class="container mx-auto mb-8">
                        <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-center sm:justify-center lg:justify-center">
                            <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div class="rounded overflow-hidden shadow-md bg-white">
                                    <div class="px-6 py-6">
                            <h1 class="font-bold text-3xl text-center mb-1">{title }</h1>
                                    </div>
                                </div>
                                </div>
                                
                        </div>
            </div>
            </div>
    );
};

export default Banner;