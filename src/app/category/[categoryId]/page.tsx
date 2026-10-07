import NewsCard from '@/component/NewsCard';
import React from 'react';

const CategoryNewsPage = async ({ params }: { params: { categoryId: string } }) => {
    const { categoryId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const categoryNews = data.data
    console.log(categoryNews)
    return (
        <div className='container mx-auto'>
            <div className='p-10 grid grid-cols-3 gap-3'>
                {
                    categoryNews.map(eachNews => <NewsCard key={eachNews.id} news={eachNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNewsPage;