// event #001
// changing the color of the navigation bar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
});

//event #002
// filtering the rules and formats page
// hide and display content

const formats = document.getElementById('formatsFilter');
const rules = document.getElementById('rulesFilter');
const formatsContent = document.getElementById('theFormatsContent');
const rulesContent = document.getElementById('theRulesContent');
const partsContent = document.getElementById('thePartsContent');

formatsFilter.addEventListener('click', () => {
    theFormatsContent.classList.add('active');
    formatsFilter.classList.add('active-button');
    theRulesContent.classList.remove('active');
    rulesFilter.classList.remove('active-button');
    thePartsContent.classList.remove('active');
});

rulesFilter.addEventListener('click', () => {
    theRulesContent.classList.add('active');
    rulesFilter.classList.add('active-button');
    theFormatsContent.classList.remove('active');
    formatsFilter.classList.remove('active-button');
    thePartsContent.classList.add('active');
});