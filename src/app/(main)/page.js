import LeftSidebar from "@/components/homepage/news/LeftSidebar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const newRes = await res.json();
  const data = newRes.data;
  return data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto my-15">
      <div className="font-semibold  col-span-3">
        <LeftSidebar categories={categories} activeId={null} />
      </div>
      <div className="font-bold text-3xl bg-green-400 col-span-6">All news</div>
      <div className="font-bold text-3xl bg-blue-400 col-span-3">
        All social
      </div>
    </div>
  );
}
