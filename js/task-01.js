
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`); 
for (let category of categories) {
    const nameCategory = category.firstElementChild;
    console.log(`Category: ${nameCategory.textContent}
    `);
    console.log(`Elements: ${nameCategory.nextElementSibling.children.length}`)
}