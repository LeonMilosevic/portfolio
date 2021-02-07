// import images
import clothifyImg from "../images/clothify-img.png";
import shopping from "../images/shopping.jpg";
import recipeApp from "../images/recipe-app.png";
import recipeCard from "../images/recipe.jpg";

export const projectsApi = [
  {
    id: 0,
    title: "Covid-19 EDA",
    titleDescription: "Covid-19 EDA",
    techStack: ["React", "Sass", "Materialize css", "Firebase", "Gsap"],
    linkCodeFront: "https://github.com/LeonMilosevic/recipe-app",
    linkCodeBack: "no",
    linkWebsite: "https://recipe-app-2b6c0.web.app",
    backgroundImg: recipeApp,
    cardImg: recipeCard,
    bgColor: "#bf271f",
    description: `Recipe app where you can create an account and choose an ingridient and diet choices,
    which then makes an API call to edamam recipe api, and shows the top choices based on your picks.
     Choices are saved in Firebase db and you can
    always change your choices.
    `,
  },
  {
    id: 1,
    title: "Phone Evaluator",
    titleDescription: "Phone Evaluator",
    techStack: ["Python", "Flask"],
    linkCodeFront: "https://github.com/LeonMilosevic/ecommerce-front",
    linkCodeBack: "https://github.com/LeonMilosevic/ecommerce-back",
    backgroundImg: clothifyImg,
    cardImg: shopping,
    bgColor: "#289FFD",
    description: `An e-commerce app with authentiaction register/login with forgot password feature.
     Admin management page with create, delete and update operations on products, categories, 
     shippments, and users. Email notification when a new order is created. 
     There are filters for searching on clients shopping page with cart and wishlist. 
     Buying option only when signed in with credit card or paypal system`,
  },
];
