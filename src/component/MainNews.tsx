import { NewsType } from '@/type/type';
import Image from 'next/image';
import React from 'react';

interface NewsProps {
    news: NewsType[]
}

const MainNews = ({ news }: NewsProps) => {
    // console.log(news)
    const [firstNews, ...restNews] = news;
    // console.log(firstNews, restNews, "news")
    return (
        <div className='grid grid-cols-2 gap-4 m-4'>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image className='hover:scale-110 transition-transform'
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt} width={900} height={400} />
                </figure>
                <div className="card-body">
                    <span className='text-red-700'>{firstNews.category}</span>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description.slice(0, 200)}...</p>
                </div>
            </div>
            <div className='grid card grid-cols-1'>
                {
                    restNews.slice(0, 4).map(otherNews=>
                        <div className='border first:rounded-t-lg last:rounded-b-lg p-2 border-gray-300 bg-base-100 hover:scale-101  transition-transform'>
                            <span className='text-red-700'>{otherNews.category}</span>
                            <h2>{otherNews.title}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MainNews;