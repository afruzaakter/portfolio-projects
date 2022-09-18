import React from 'react';

const Section = () => {
    return (
        <div>
            <h1 className='text-5xl text-secondary text-center font-bold'>ABOUT</h1>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center mt-2'>
                    <div className=' border border-primary  w-16 '>
                    </div>
                </div>
                <div className='flex justify-center mt-2'>
                    <div className=' border border-secondary h-4 rounded bg-secondary  w-16 '>
                    </div>
                </div>
                <div className='flex justify-center mt-2'>
                    <div className=' border border-primary  w-16 '>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;