export async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const newRes = await res.json();
  const data = newRes.data;
  return data;
}

export async function getNewsByCategories(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}
export async function getNewsById(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const data = await res.json();
  return data.data;
}
