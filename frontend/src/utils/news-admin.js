export function getAllNewsItems() {
  let data = [];
  try {
    data = JSON.parse(localStorage.getItem("newsData") || "[]");
    if (!Array.isArray(data)) throw new Error();
  } catch {
    data = [];
  }
  return data;
}

export function saveNewsItem(item) {
  const data = getAllNewsItems();
  data.push(item);
  localStorage.setItem("newsData", JSON.stringify(data));
}

export function deleteNewsItem(index) {
  const data = getAllNewsItems();
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    localStorage.setItem("newsData", JSON.stringify(data));
  }
}
