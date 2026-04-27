import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategories } from "@/lib/data";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();

  const news = await getNewsByCategories(id);
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 container mx-auto my-15">
        <div className="font-semibold  col-span-3">
          <LeftSidebar categories={categories} activeId={id} />
        </div>
        <div className="col-span-6">
          <h1 className="text-xl font-semibold">Dragon News Home</h1>
          <div className="space-y-4">
            {news.map((singleNews) => (
              <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
            ))}
          </div>
        </div>
        <div className="font-bold text-3xl col-span-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
