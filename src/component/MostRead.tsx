import React from 'react';

interface MostReadType{
    title: string,
    id: string
}

const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const mostReadNews:MostReadType[] = data.data
    console.log(mostReadNews)
    return (
        <div className='card border p-2 border-gray-200'>
            <h1 className="font-bold text-xl p-4">সর্বাধিক পঠিত</h1>
            <div className='p-2'>
                {
                    mostReadNews.map((n, idx) =>(<div key={idx} className='flex gap-3 items-center hover:text-red-700 text-xl'>
                        <p className='text-2xl'>{idx+1}</p>
                         <h2 className='p-2 '>{n.title}</h2>
                    </div>))
                }
            </div>
        </div>
    )
};

export default MostRead;