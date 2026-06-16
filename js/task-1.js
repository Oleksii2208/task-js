const refs = {
  categories: document.querySelectorAll("#categories .item"),
};

function showInfo() {
  const totalCategories = `Number of categories: ${refs.categories.length}`;
  console.log(totalCategories);
  refs.categories.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    console.log(`Category: ${title}`);
    const elem = `Elements: ${item.querySelectorAll("ul li").length}`;
    console.log(elem);
  });
}
showInfo();
