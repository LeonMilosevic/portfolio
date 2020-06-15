// import images
import clothifyImg from "../images/clothify-img.png";
import poolmeImg from "../images/poolme-img.png";
import domasImg from "../images/domas-img.png";
import eeetwellImg from "../images/eeetwell-img.png";
import travel from "../images/travel.jpg";
import calculator from "../images/calculator.jpg";
import shopping from "../images/shopping.jpg";
import work from "../images/work.jpg";
import recipeApp from "../images/recipe-app.png";
import recipeCard from "../images/recipe.jpg";

export const projectsApi = [
  {
    id: 0,
    title: "Recipe app",
    titleDescription: "Recipe-app",
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
    title: "Car-share",
    titleDescription: "Connect app",
    techStack: [
      "React",
      "Node",
      "Javascript",
      "Sass",
      "MongoDB",
      "Socket-IO",
      "Google geolocation API",
      "material design",
    ],
    linkCodeFront: "https://github.com/LeonMilosevic/poolme-front",
    linkCodeBack: "https://github.com/LeonMilosevic/poolme-back",
    linkWebsite: "http://167.172.178.229/",
    backgroundImg: poolmeImg,
    cardImg: travel,
    bgColor: "#12B890",
    description: `App was designed for mobile usage rather than desktop. The app
      has a real-time chat feature. Users can search and pick a
      location from Google geolocation auto-suggest service. They can
      chose different type of rules they would like other passengers
      to follow, as well as any adittional text they would like to
      share. App also tracks peoples distance travaled, and combines
      it to display how much has the person traveled using this app.
      In order to share a ride or join as a passanger, users need to
      create an account and be logged in.`,
  },
  {
    id: 2,
    title: "Clothify",
    titleDescription: "E-commerce",
    techStack: ["React", "Node", "Javascript", "Sass", "MongoDB", "Bootstrap"],
    linkCodeFront: "https://github.com/LeonMilosevic/ecommerce-front",
    linkCodeBack: "https://github.com/LeonMilosevic/ecommerce-back",
    linkWebsite: "https://clothify.online/",
    backgroundImg: clothifyImg,
    cardImg: shopping,
    bgColor: "#289FFD",
    description: `An e-commerce app with authentiaction register/login with forgot password feature.
     Admin management page with create, delete and update operations on products, categories, 
     shippments, and users. Email notification when a new order is created. 
     There are filters for searching on clients shopping page with cart and wishlist. 
     Buying option only when signed in with credit card or paypal system`,
  },
  {
    id: 3,
    title: "Eeetwell app",
    titleDescription: "Calculator",
    techStack: ["Javascript", "Sass", "Materialize css"],
    linkCodeFront: "https://github.com/LeonMilosevic/eeetwell-diet-calculator",
    linkCodeBack: "no",
    linkWebsite: "https://eeetwell-calories.herokuapp.com/",
    backgroundImg: eeetwellImg,
    cardImg: calculator,
    bgColor: "#c2ab16",
    description: `While I was working in Eeetwell company, a lot of people were
    interested in knowing how much calories they are taking with
    their meal. I have decided to build a calculator app that would
    let them easily check that.`,
  },
  {
    id: 4,
    title: "Animations",
    titleDescription: "Practice",
    techStack: ["React", "Javascript", "Sass", "Gsap", "Material-UI"],
    linkCodeFront: "https://github.com/LeonMilosevic/animations",
    linkCodeBack: "no",
    linkWebsite: "https://trusting-hugle-827790.netlify.app/",
    backgroundImg: domasImg,
    cardImg: work,
    bgColor: "#C529D4",
    description: `Worked on animations to practice with GSAP library and transition from page to page
    `,
  },
];
