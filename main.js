function createBlock(){

    let teamGallery = document.querySelector('.team__gallery');
    let galleryBlock = document.createElement('div');
    galleryBlock.classList.add('gallery__block');
    galleryBlock.classList.add('gallery');
    teamGallery.appendChild(galleryBlock);

    let galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__img');
    galleryImage.classList.add('team__img');
    galleryBlock.appendChild(galleryImage);

    let galleryHidden = document.createElement('div');
    galleryHidden.classList.add('gallery__hidden');
    galleryHidden.classList.add('hidden');
    galleryBlock.appendChild(galleryHidden);

    let hiddenName = document.createElement('span');
    hiddenName.classList.add('hidden__name');
    galleryHidden.appendChild(hiddenName);
    let hiddenDirection = document.createElement('span');
    hiddenDirection.classList.add('hidden__direction');
    galleryHidden.appendChild(hiddenDirection);
    let hiddenText = document.createElement('p');
    hiddenText.classList.add('hidden__text');
    galleryHidden.appendChild(hiddenText);

}

let person1 = {
    name:"Jane",
    direction: " / Web",
    text: "Lorem Ipsum is not simply is  an action designer random text It has roots in a piece",
    image: "img/team1.png"
}
let person2 = {
    name:"Brad",
    direction: " / UI",
    text: "Lorem Ipsum is not simply is  an action designer random text It has roots in a piece",
    image: "img/team2.png"
}
let person3 = {
    name:"David",
    direction: " / Java",
    text: "Lorem Ipsum is not simply is  an action designer random text It has roots in a piece",
    image: "img/team3.png"
}
let person4 = {
    name:"John",
    direction: " / C++",
    text: "Lorem Ipsum is not simply is  an action designer random text It has roots in a piece",
    image: "img/team4.png"
}
let person5 = {
    name:"Jennifer",
    direction: " / HR",
    text: "Lorem Ipsum is not simply is  an action designer random text It has roots in a piece",
    image: "img/team5.png"
}
let teamData = [person1, person2, person3, person4, person5, person1];
console.log(teamData);
for(let i=0; i<teamData.length; i++) {
    createBlock();
    let name = document.querySelectorAll('.hidden__name');
    name[i].textContent = teamData[i].name;
    let direction = document.querySelectorAll('.hidden__direction');
    direction[i].textContent = teamData[i].direction;
    let text = document.querySelectorAll('.hidden__text');
    text[i].textContent = teamData[i].text;
    let image = document.querySelectorAll('.team__img');
    image[i].src = teamData[i].image;
}
