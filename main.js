const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-element" , marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}