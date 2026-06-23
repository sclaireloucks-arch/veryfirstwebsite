var biggestIndex = 1;

function updateClock() {
    var TimeClock= new Date().toLocaleString();
    document.querySelector('#clock').innerText=TimeClock;
  }
  setInterval(updateClock, 1000);

// Make the DIV element draggable:
window.addEventListener("DOMContentLoaded", function () {
  dragElement(document.getElementById("welcome"));
  dragElement(document.getElementById("goatfacts"));
  dragElement(document.getElementById("goatgallery"));
});
// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = function (e) {
  bringToFront(element);
  startDragging(e);
};
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = function (e) {
  bringToFront(element);
  startDragging(e);
};
  }
  

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let isMinimized = false;

var welcomeScreen = document.querySelector("#welcome");

function closeWindow(windowToClose) {
    windowToClose.style.display = "none";
}

function openWindow() {
    welcomeScreen.style.display = "flex";

    if (isMinimized) {
        welcomeScreen.style.height = "350px";
        welcomeScreen.style.width = "1000px";
        welcomeScreen.style.overflow = "visible";
        isMinimized = false;
    }
}

function minimizeWindow() {
    welcomeScreen.style.height = "60px";
    welcomeScreen.style.width = "300px";
    welcomeScreen.style.overflow = "hidden";
    isMinimized = true;
}

var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");
var welcomeScreenMinimize = document.querySelector("#welcomeminimize");
var goatFactsWindow = document.querySelector("#goatfacts");
var goatFactsClose = document.querySelector("#goatfactsclose");
var goatFactsIcon = document.querySelector("#goatFactsIcon");
var goatGalleryWindow = document.querySelector("#goatgallery");
var goatGalleryClose = document.querySelector("#goatgalleryclose");
var goatGalleryIcon = document.querySelector("#goatGalleryIcon");

welcomeScreenClose.addEventListener("click", () =>
  closeWindow(welcomeScreen));
welcomeScreenOpen.addEventListener("click", openWindow);
welcomeScreenMinimize.addEventListener("click", minimizeWindow);
goatFactsClose.addEventListener("click",()=>
closeWindow(goatFactsWindow));

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element){
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
  } else {
    selectIcon(element)
  }
}

function bringToFront(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
}

goatFactsIcon.addEventListener("click", () => {
  goatFactsWindow.style.display = "flex";
  bringToFront(goatFactsWindow);
});

var goatFacts = [
{
title: "Diet",
content: `
<ul style="line-height:25px; ">
<li>Goats are very picky eaters.</li>
<li>Many plants are toxic to goats, including common ones like poppies.</li>
<li>Goats have a four-chambered stomach similar to cows in order to digest the cellulose in plants.</li>
<li>They are very preferential about their water quality, choosing to not drink dirty water.</li>
<li>Goats are browsers, mainly eating tree leaves and shrubs over traditionally grazing grass.</li>
<li>It's easy for goats to get mineral deficiencies in the diet they're fed. Caretakers supplement them with minerals like selenium and copper to counteract this problem.</li>
</ul>
`
},

{
title: "Goat Society",
content: `
<ul style="line-height:25px; ">
<li>Goats prefer to live in herds, as they are prey animals and find safety in numbers. Human companionship is not enough, and goats need at least one goat companion to be well adjusted.</li>
<li>Herds establish dominance hierarchies, commonly called a pecking order, and the top female goat is unofficially called the "herd queen".</li>
<li>Mother goats and kids know each other's scent and vocal calls only days after birth.</li>
<li>Goats also form friendships within their herd and will eat, sleep, and play with a certain group they formed every day.</li>
<li>Goats communicate using different vocal calls, body language, and even scents they release.</li>
<li>They experience stress when alone and separated from their herd.</li>
</ul>
`
},

{
title: "Physiology",
content: `
<ul style="line-height:25px;">
<li>Goats have rectangular pupils, but when light is dim they change to be more circular.</li>
<li>Due to where their eyes are positioned on their head they can see up to 340 degrees without moving their position.</li>
<li>When mature, goats have 32 teeth, and no upper front teeth.</li>
<li>Goats grow beards regardless of sex, many female goats sport a beard more impressive than their male counterparts!</li>
<li>Goats horns grow for their entire life and they connect to their frontal sinuses, which is why if a goat needs to have no horns for whatever purpose, it 
should be done when they are young, through a process called disbudding. This is because their sinuses and horns have not formed yet, and it will not generally cause a major infection risk like dehorning does.</li>
<li>Some goats are born hornless, which is called polled and is a dominant gene.</li>
<li>Goats are incredibly competent climbers but domesticated goats do not possess nearly the same amount of skill as wild goats.</li>
</ul>
`
},

{
  title: "Intelligence",
  content:`
  <ul style="line-height:25px;">
  <li>Goats have proven to have intelligence that rivals that of many species, including dogs.</li>
  <li>They have incredible spatial memory, remembering where food sources are and favorite spots even after long periods.</li>
  <li>Goats remember solutions to problems for months or even years.</li>
  <li>They also utilise facial recognition and remember individual faces of goats and humans.</li>
  <li>A study which provided an unsolvable problem showed that goats looked toward a human and back to the problem in a way that's similar to dogs. They also 
  only looked towards humans who were turned towards them, not away.</li>
  <li>Goats show high flexibility and are known as neophilic, which means that they can adapt to unfamiliar situations easier than other animals.</li>
  <li>Sadly, goats intelligence is either disregarded or not believed because of their stubborn and independent nature. But with the right motivation, goats are highly trainable.</li>
  </ul>
  `
},

{
  title: "History",
  content:`
  <ul style="line-height:25px;">
  <li>Goats were domesticated over 10,000 years ago in the fertile crescent. They were one of the very first domesticated animals due to their sociable nature</li>
  <li>Modern goats are descended mostly from the wild Bezoar ibex, a species that still exists today but is threatened because
  of poaching and excess predation in their small herds.</li>
  <li>Early farming societies valued goats because of their ability to survive on sparse vegetation and rough terrain.</li>
  <li>Goats have been used for meat, milk, hides, and fiber. Angora goats and Cashmere goats produce soft fibers from their coats.</li>
  <li>Today there are over 300 recognized goat breeds across the world.</li>
  <li>Goats are found on every continent except Antarctica.</li>
  <li>Goats are depicted in many myths, religons, and ancient artwork.</li>
  </ul>
  `
}
];

function showFact(index){
  document.querySelector("#goatContent").innerHTML = 
  goatFacts[index].content;
}

function addToSidebar(index){

  var item = document.createElement("div");
  item.innerHTML = goatFacts[index].title;
  item.style.color = "white";
  item.style.padding = "10px";
  item.style.cursor = "pointer";
  item.style.marginBottom = "8px";
  item.addEventListener("click", function(){
    showFact(index);
  });

  document.querySelector("#goatSidebar")
  .appendChild(item);
}
for(let i = 0; i < goatFacts.length; i++){
addToSidebar(i);
}

showFact(0);

goatGalleryIcon.addEventListener("click", ()=>{
  goatGalleryWindow.style.display = "flex";
  bringToFront(goatGalleryWindow);
});

goatGalleryClose.addEventListener("click", () =>
closeWindow(goatGalleryWindow)
);

const goats=[
  {
    breed: "Boer",
    image: "https://farmhouseguide.com/wp-content/uploads/2020/08/boer-goats-ee220511.jpg",
    description:"South-African orgin, meat breed"
  },
  {
    breed: "Saanen",
    image: "https://images.squarespace-cdn.com/content/v1/6064235391d45851b181005d/1619198207645-0QALH22QBS1Z868YMMRX/DSC00496.JPG",
    description:"Swiss orgin, milk breed"
  },
  {
    breed: "Alpine",
    image: "https://tse1.mm.bing.net/th/id/OIP.LFxNjkbs7ZUCqwg8i9AxJwHaE8?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"French Alps orgin, milk breed"
  },
  {
    breed:"Nubian",
    image:"https://a-z-animals.com/media/2021/07/Nubian-Goat-baby.jpg",
    description:"Great Britain orgin, milk and meat breed"
  },
  {
    breed:"Fainting/Mytonic",
    image:"https://tse2.mm.bing.net/th/id/OIP.Wqt4w9JM6a9PJIDWUJJYtQHaE5?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"United States orgin, meat and pet breed"
  },
  {
    breed:"Nigerian Dwarf",
    image:"https://www.breedslist.com/wp-content/uploads/2022/02/Photos-of-Nigerian-Dwarf-Goats.jpg",
    description:"West-African orgin, milk and fiber breed"
  },
  {
    breed:"Australian Cashmere",
    image:"https://tse4.mm.bing.net/th/id/OIP.bE6iTOhP05nKeBgqGKkL6AHaJN?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Australian orgin, fiber breed"
  },
  {
    breed:"Jamnapari",
    image:"https://5.imimg.com/data5/ANDROID/Default/2021/6/QO/WZ/EB/24030155/1623660101830-jpg-1000x1000.jpg",
    description:"Indian orgin, milk and meat breed"
  },
  {
    breed:"Kiko",
    image:"https://tse2.mm.bing.net/th/id/OIP.8o6gli19fiV_jr6RhH-u9wHaJM?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"New Zealand orgin, meat breed"
  },
  {
    breed:"Kri-Kri",
    image:"https://thfvnext.bing.com/th/id/R.3de16c11961463a5d6493c54319d5a47?rik=YK2u8bn4X9iLwA&pid=ImgRaw&r=0",
    description:"Eastern Mediterranean orgin, meat breed. Currently endangered"
  },
  {
    breed:"Messinese",
    image:"https://thfvnext.bing.com/th/id/R.87f48f5bea71b75e95d1e84dc6e47595?rik=WQh3YHW0PUG9tQ&riu=http%3a%2f%2feng.agraria.org%2fgoat%2fmessinese1.JPG&ehk=8o8nT0el0LjTsHyLdutfhOZ0UPAlo%2f6q8LG2tjKpdjo%3d&risl=&pid=ImgRaw&r=0",
    description:"Province of Messina orgin, milk breed"
  },
  {
    breed:"Sokoto Red",
    image:"https://cdn.legit.ng/images/720/vllkyt238r5ah67au.webp?v=1",
    description:"Nigeria and Niger Republic orgins, used for meat, skin, and milk"
  },
  {
    breed:"Spanish",
    image:"https://breedslist.com/wp-content/uploads/2021/11/Pictures-of-Spanish-Goats.jpg",
    description:"Spain orgin, meat breed"
  },
  {
    breed:"Tauernscheck",
    image:"https://thfvnext.bing.com/th/id/R.a8fe2154abba5262e9d3b1d54f553ac5?rik=V9cg26looReXlQ&pid=ImgRaw&r=0",
    description:"Austria orgin, milk breed"
  },
  {
    breed:"Xinjiang",
    image:"https://thumbs.dreamstime.com/b/one-goat-many-kashgar-animal-market-white-goats-sale-xinjiang-province-china-186101252.jpg?w=992",
    description:"Xinjiang, China orgin, used for fiber, meat, and milk"
  },
  {
    breed:"Valdostana",
    image:"https://alchetron.com/cdn/valdostana-dbac31ed-9b26-4cb9-8312-a76858d7734-resize-750.jpg",
    description:"Italy orgin, meat and milk breed"
  },
  {
    breed:"San Clemente Island",
    image:"https://tse2.mm.bing.net/th/id/OIP.4IzlNB5cZjjDPpqv3XprKQHaHA?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"San Clemente orgin, critically endangered species with only about 1,700 members left"
  },
  {
    breed:"Pyrenean",
    image:"https://farmow.com/article-image/1602059370.jpg",
    description:"France and Spain orgins, meat and milk breed"
  },
  {
    breed:"Pygmy",
    image:"https://www.monkparkfarm.co.uk/wp-content/uploads/2022/08/Pygmy-Goats.jpg",
    description:"Cameroon orgin, meat and milk breed but also used as a pet"
  },
  {
    breed:"Markhoz",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/%D8%A8%D8%B2_%D9%85%D8%B1%D8%AE%D8%B2_%D9%88_%D8%B1%D9%86%DA%AF_%D8%A8%D9%86%D8%AF%DB%8C_%D8%A7%D9%84%DB%8C%D8%A7%D9%81%D8%AA.jpg/250px-%D8%A8%D8%B2_%D9%85%D8%B1%D8%AE%D8%B2_%D9%88_%D8%B1%D9%86%DA%AF_%D8%A8%D9%86%D8%AF%DB%8C_%D8%A7%D9%84%DB%8C%D8%A7%D9%81%D8%AA.jpg",
    description:"Kurdistan orgin, used for mohair and milk"
  },
    {
    breed:"Savanna",
    image:"https://tse4.mm.bing.net/th/id/OIP.zUyEE2jA4r-GTSWNjF2_0gHaDo?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"South-African orgins, meat breed"
  },

]

let currentGoat = 0;

function showGoat(index) {
  document.querySelector("#goatImage").src =
  goats[index].image;
  
  document.querySelector("#goatBreed").innerText =
  goats[index].breed;

  document.querySelector("#goatDescription").innerText =
  goats[index].description;
}

document.querySelector("#nextGoat").addEventListener("click", function(){
  currentGoat++;

  if (currentGoat >= goats.length){
    currentGoat=0;
  }
  showGoat(currentGoat);
})

document.querySelector("#prevGoat").addEventListener("click", function(){
  currentGoat--;

  if(currentGoat < 0){
    currentGoat = goats.length-1;
  }
  showGoat(currentGoat);
});

showGoat(0);