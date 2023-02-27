


const categoryListEl = document.querySelector("ul#categories").children;

const numberEl = categoryListEl.length;

console.log(`Number of categories: ${numberEl}`);


Array.from(categoryListEl).forEach((itemEl) => {
  const titleEl = itemEl.querySelector("h2").textContent;
  const numberElementsEl = itemEl.querySelectorAll("li").length;

  console.log(` Category: ${titleEl}`);

  console.log(` Elements: ${numberElementsEl} `);
});


















// for (let itemEl of categoryListEl) {

//   const titleEl = itemEl.querySelector("h2").textContent;
//   const numberElementsEl = itemEl.querySelectorAll("li").length;

//   console.log(` Category: ${titleEl}`);

//   console.log(` Elements: ${numberElementsEl} `);
// }


// const categoriesEl = document.querySelectorAll(".item");
// categoriesEl.forEach((itemEl) => {
//   const titleEl = itemEl.querySelector("h2").textContent;
//   const numberElementsEl = itemEl.querySelectorAll("li").length;

//   console.log(` Category: ${titleEl}`);

//   console.log(` Elements: ${numberElementsEl} `);
// });


// console.log(categoryListEl);
// console.log(Array.from(categoryListEl));
// const categoriesEl = document.querySelectorAll(".item");
// console.log(categoriesEl);
// console.log(Array.from(categoriesEl));