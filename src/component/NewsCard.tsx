import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string
}

const NewsCard = ({ news }: { news: News }) => {
    // console.log(news)
    return (
        <Link href={`/news/${news.id}`}>
            <div className="card bg-base-100 shadow-sm ">
                <figure>
                    <Image className='hover:scale-110 transition-transform'
                        src={news.imageUrl}
                        alt={news.imageAlt} width={500} height={100} />
                </figure>
                <div className="card-body">
                    <span className='text-red-700'>{news.category}</span>
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.description?.slice(0, 100)}...</p>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;