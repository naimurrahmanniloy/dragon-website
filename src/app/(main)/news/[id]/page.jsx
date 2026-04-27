import { getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await getNewsById(id);

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden ">
        <div className="p-4">
          <Image
            src={newsDetails?.image_url}
            alt="Image not found"
            width={800}
            height={400}
          />
        </div>

        <div className="px-6 pb-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {newsDetails?.title}
          </h2>

          <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
            <p className="font-medium text-gray-400">
              {newsDetails?.author?.name} | Published on:{" "}
              {newsDetails?.author?.published_date}
            </p>

            <p>{newsDetails?.details}</p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <Link href={`/`}>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#D81B60] hover:bg-[#AD1457] text-white font-semibold rounded-md transition-colors duration-200">
              <span className="text-xl">←</span>
              All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
