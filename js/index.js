// Your code goes here
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = "#000000";
        e.target.style.color = "#FFFFFF";
        e.target.style.borderColor = "#91B54D";
        e.target.style.borderWidth = "4px";
        e.target.style.borderStyle = "solid";
        e.target.style.padding = "10px";
    });
    link.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = "#FFFFFF";
        e.target.style.color = "#000000";
        e.target.style.borderColor = "#000000";
        e.target.style.borderWidth = "0px";
        e.target.style.borderStyle = "none";
        e.target.style.padding = "0px";
    });
});

const headerImg = document.querySelector('img');
headerImg.addEventListener('dblclick', e => alert('Vroom Vroom, Fun Bus Ready to go! Pick a destination!'));

const destinations = document.querySelectorAll('h4');
destinations.forEach(destn => {
    destn.addEventListener('mousemove', e => {
        e.target.style.color = "#17A2B8";
        e.target.style.textDecoration = "underline";
    });
    destn.addEventListener('mouseout', e => {
        e.target.style.color = "#212529";
        e.target.style.textDecoration = "none";
    });
});

const pickBtns = document.querySelectorAll('.btn');
pickBtns.forEach(btn => {
    btn.addEventListener('mouseenter', e => {
        e.target.style.fontWeight = "bolder";
        e.target.style.fontColor = "white";
    });
    btn.addEventListener('mouseout', e => {
        e.target.style.fontWeight = "normal";
    });
    btn.addEventListener('click', e => e.preventDefault());
});

const destnPickParagraph1 = document.querySelectorAll('p')[6];
destnPickParagraph1.addEventListener('mousemove', e => {
    e.target.style.color = "#17A2B8";
});
destnPickParagraph1.addEventListener('mouseout', e => {
    e.target.style.color = "#212529";
});

const destnPickParagraph2 = document.querySelectorAll('p')[7];
destnPickParagraph2.addEventListener('mousemove', e => {
    e.target.style.color = "#17A2B8";
});
destnPickParagraph2.addEventListener('mouseout', e => {
    e.target.style.color = "#212529";
});

const destnPickParagraph3 = document.querySelectorAll('p')[8];
destnPickParagraph3.addEventListener('mousemove', e => {
    e.target.style.color = "#17A2B8";
});
destnPickParagraph3.addEventListener('mouseout', e => {
    e.target.style.color = "#212529";
});


const welcome = document.querySelector('h2');

welcome.addEventListener('click', e => {
    e.target.style.visibility = "hidden";
});
welcome.addEventListener('mouseout', e => {
    e.target.style.visibility = "visible";
});

const welcomeParagraph = document.querySelectorAll('p')[0];
welcomeParagraph.addEventListener('click', e => {
    e.target.style.visibility = "hidden";
});
welcomeParagraph.addEventListener('mouseout', e => {
    e.target.style.visibility = "visible";
});
