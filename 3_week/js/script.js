alert("Я оцениваю свою работу на 100 баллов");

body.style.fontSize = "18px";
body.style.backgroundColor = "hsl(217, 54%, 11%)";
body.style.fontFamily = "Outfit";
body.style.margin = "0";

// wrapper 
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.display = "fiex";
wrapper.style.justifyContent = "center";
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440px";
wrapper.style.marginBottom = "100px";

// card 
const card = document.createElement("div");
card.className = "card";
card.style.borderRadius = "15px";
card.style.padding = "20px 20px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.boxshadow = "5px 10px 40px  rgba(0, 0, 1, .30) , 3px 15px 30px  rgba(0, 0, 5, .25)";

// imge_bg
const imge = document.createElement("img");
imge.className = "image";
imge.src = "./images/image-equilibrium-bg.jpg";
imge.style.maxWidth = "300px";
imge.style.borderRadius = "15px";
imge.style.marginBottom = "10px";
imge.style.backgroundPosition = "50% 50%";

// main_title
const mainTitle = document.createElement("h3");
mainTitle.className = "card_title";
mainTitle.innerText = "Equilibrium #3429";
mainTitle.style.color = "hsl(0, 0%, 100%)";
mainTitle.style.marginBottom = "15px";

// sub_title
const subtitle = document.createElement("p");
subtitle.className = "card_subtitle";
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.style.maxWidth = "250px";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "250";
subtitle.style.lineHeight = "25px";
subtitle.style.marginBottom = "15px";


const items = document.createElement("div");
items.style.display = "flex";
items.style.justifyContent = "space-evenly";


const value = document.createElement("div");
value.className = "card-value";

// diamond))
const elemItem = document.createElement("img");
elemItem = "value_icon";
elemItem.src = "./images/icon-ethereum.svg";
elemItem.style.marginRight = "5px";

const valueText = document.createElement("p");
valueText.className = "value-text";
valueText.innerText = "0.041 ETH";
valueText.style.display = "inline-block";
valueText.style.color = "hsl(178, 100%, 80%)";
valueText.style.fontWeight = "bold";

const timeItems = document.createElement("div");
timeItems.className = "time";
timeItems.style.display = "flex";
timeItems.style.alignItems = "center";
timeItems.style.marginBottom = "15px";

const timeItem = document.createElement("time");
timeItem.className = "time-item";
timeItem.innerText = "3 days left";
timeItem.style.color = "hsl(215, 55%, 80%)";

const line = document.createElement("hr");
line.style.borderColor = "hsl(215, 32%, 27%";

const user = document.createElement("div");
user.className = "user";
user.style.marginTop = "25px";
user.style.display = "flex";
user.style.alignItems = "center";

const userImg = document.createElement("img");
userImg.className = "avatar";
userImg.src = "./images/image-avatar.png";
// userImg.style.maxWidth = "45px";
userImg.style.marginRight = "15px";
userImg.style.border = "3px solid white";
userImg.style.borderRadius = "50%";

const userText = document.createElement("span");
userText.className = "user-txt";
userText.innerText = "Creation of";
userText.style.color = "hsl(215, 55%, 80%)";
userText.style.textAlign = "center";

const userName = document.createElement("span");
userName.className = "userName";
userName.innerText = " Jules Wyvern";
userName.style.color = "#ffff";


document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(card);
card.appendChild(mainTitle);
card.appendChild(subtitle);
card.appendChild(items);
items.appendChild(value);
value.appendChild(elemItem);
value.appendChild(valueText);
items.appendChild(timeItems);
timeItems.appendChild(timeImage);
timeItems.appendChild(timeItem);
card.appendChild(line);
card.appendChild(user);
user.appendChild(userImg);
user.appendChild(userText);
userText.appendChild(userName);

