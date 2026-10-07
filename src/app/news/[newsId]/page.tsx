import React from 'react';

const catagoryNewsPage = async({params}:{params:{newsId:string}}) => {
    const {newsId} = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news =  data.data
    console.log(news?.body[3])
    return (
        <div className='max-w-180 mx-auto mt-5'>
            <h2 className='text-4xl font-bold'>{news?.title}</h2>
            <p>{news?.body[3]?.text}</p>
        </div>
    );
};

export default catagoryNewsPage;