import React from 'react';

import Meme from './Meme';

export default function Home() {
    return(
        <div>
            <h1 className='text-center font-comic mt-[20px] text-4xl sm:text-4xl md:text-5xl lg:text-6xl'>Meme of the Day</h1>
            <div className='flex flex-col'>
                <Meme />
                <footer className='flex-end mb-[20px] bottom-0'>
                    <p className='text-center font-comic'>created by newtinn 2024</p>
                </footer>
            </div>
        </div>
    );
}