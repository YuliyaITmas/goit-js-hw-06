const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryEl = document.querySelector("ul");

// const makeGalleryItem = ({ url, alt }) => {
//   const itemEl = document.createElement("li");

//   const pictureEl = document.createElement("img");

//   pictureEl.src = url;
//   pictureEl.alt = alt;
//   pictureEl.width = 640;

//   itemEl.appendChild(pictureEl);

//   return itemEl;
// };
// const galleryItems = images.map(makeGalleryItem);
// galleryEl.append(...galleryItems);
// console.log(galleryItems);

const makeGalleryItem = ({ url, alt }) => 
  `<li><img src="${url}" alt="${alt}"></li>`;

const galleryEl = document.querySelector(".gallery");
const markup = images.map(makeGalleryItem).join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);


console.log(markup);
