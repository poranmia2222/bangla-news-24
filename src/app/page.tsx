import MainNews from "@/component/MainNews";
import Marquee from "@/component/Marquee";
import Image from "next/image";

export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const section = data.data
  const mainNews = section[0].articles
  console.log(mainNews)

  return (
    <div>
      <Marquee></Marquee>
      <div className="grid grid-cols-3 container mx-auto">
        {/* news section */}
        <div className=" col-span-2">
          <MainNews news={mainNews}></MainNews>
        </div>

        <div className="bg-red-600 h-2"></div>
      </div>
    </div>
  );
}
