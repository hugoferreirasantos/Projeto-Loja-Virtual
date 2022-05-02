const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Grand",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/grand.png",
            },
            {
                code: "white",
                img: "./img/GrandBranco.png",
            },
        ],
    },
    {
        id: 2,
        title: "UPATH RUN",
        price: 229,
        colors: [
            {
                code: "black",
                img: "./img/Path_runCortado.png",
            },
            {
                code: "blanchedalmond",
                img: "./img/UPath_Rose-Cortado.png",
            },
        ],
    },
    {
        id: 3,
        title: "EX-LEGO",
        price: 400,
        colors: [
            {
                code: "black",
                img: "./img/Ex-LegoCortado.png",
            },
            {
                code: "yellow",
                img: "./img/Ex-LegoAmarelo-cortado.png",
            },
        ],
    },
    {
        id: 4,
        title: "D-ROSE",
        price: 500,
        colors: [
            {
                code: "black",
                img: "./img/D_RoseCortado.png",
            },
            {
                code: "white",
                img: "./img/D_RoseBranco-cortado.png",
            },
        ],
    },
    {
        id: 5,
        title: "GKPB",
        price: 550,
        colors: [
            {
                code: "black",
                img: "./img/GKPB_Cortado.png",
            },
            {
                code: "blue",
                img: "./img/GKPB_Azul-cortado.png",
            },
        ],
    }, 
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //current slide
       wrapper.style.transform= `translateX(${ -100 * index}vw)`;

       // choosen products

       choosenProduct = products[index];

       // currentProduct

       currentProductTitle.textContent = choosenProduct.title;
       currentProductPrice.textContent = "$" + choosenProduct.price;
       currentProductImg.src =  choosenProduct.colors[0].img;

        // assing new colors

       currentProductColors.forEach((color, index)=> {
           color.style.backgroundColor = choosenProduct.colors[index].code;
       });
    });
})

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index)=> {
      size.addEventListener("click", () =>{
          currentProductSizes.forEach(size =>{
            size.style.backgroundColor = "white";
            size.style.color = "black";

          })
          size.style.backgroundColor = "black";
          size.style.color = "white";
      })
  })