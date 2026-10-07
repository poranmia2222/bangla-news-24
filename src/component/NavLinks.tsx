import Link from 'next/link';
import React from 'react';
interface NavLinksType {
    slug: string,
    title: string,
    topicId: null | string,
    url: string,
    scrapable: boolean
}

const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()
    const navs:NavLinksType[] = data.data
    // console.log(navs)
    const filteredNavs = navs.filter(n => n.scrapable)
    return (
        <div className='flex gap-5 justify-center my-5'>
            <Link href='/'>হোম</Link>
            {
                filteredNavs.map((n, idx) => <Link href={`/category/${n.slug}`} key={idx}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;