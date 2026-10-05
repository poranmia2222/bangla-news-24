import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-DB", {
        dateStyle: "full",
    })
    return (
        <div>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <div></div>
            <div className='flex items-center gap-2'>
                <Image src={"/logo.webp"} alt='Logo' width={50} height={50}></Image>
                <div>
                    <h2 className='font-bold text-2xl text-red-700'>Bangla News 24</h2>
                    <p>{date}</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className='btn bg-white border-0 shadow-none'>সাইন ইন </button>
                <button className='btn bg-red-700 text-white'>সাইন আপ</button>
            </div>
            </div>
            <NavLinks></NavLinks>
        </div>
    );
};

export default Header;