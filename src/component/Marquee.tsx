import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface HeadLineType {
    id:string,
    title:string
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json()
    const headLines:HeadLineType[] = data.data
    return (
        <div className='bg-red-700 text-white'>
            <div className='container mx-auto flex items-center'>
                <div className='bg-red-900 p-3'>সর্বশেষ</div>
                <MarqueeText direction='right' duration={15}>
                {
                    headLines.map(h => <span key={h.id}> 
                        <span>{h.title}</span>
                        <span className='mx-3'>•</span>
                    </span>)
                }
            </MarqueeText>
            </div>
        </div>
    );
};
export default Marquee;