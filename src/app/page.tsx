import MainNews from "@/component/MainNews";
import Marquee from "@/component/Marquee";
import MostRead from "@/component/MostRead";
import NewsCard from "@/component/NewsCard";
import Image from "next/image";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string
}

interface OtherNewsType {
  articles: News[];
  count: number;
  curationId: string;
  curationType: string;
  link: string | null;
  title: string;
}

export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const section = data.data
  const mainNews = section[0].articles
  const othersNews: OtherNewsType[] = section.slice(1)
  // console.log(othersNews)

  return (
    <div>
      
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {/* news section */}
        <div className=" col-span-2">
          <MainNews news={mainNews}></MainNews>
          <div className="my-6">
            {
              othersNews.map(news => (<div key={news.curationId}>
                <h2 className="pb-2 text-xl font-bold">{news.title}</h2>
                <hr className="border-red-700 border" />
                <div className="my-4 grid grid-cols-3 gap-3">
                  {
                    news.
                      articles.map(eachNews => <NewsCard key={eachNews.id} news={eachNews}></NewsCard>)
                  }
                </div>
              </div>))
            }
          </div>
        </div>

        <div className="my-4">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
