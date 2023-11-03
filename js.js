let contentArea = document.querySelector('.content-area');

const contentButtons = document.querySelectorAll('.content-buttons');
const contentBoxes = document.querySelectorAll('.content-boxes');

let frontend = document.querySelectorAll('.frontend');
let backend = document.querySelectorAll('.backend');
let senior = document.querySelectorAll('.senior');
let junior = document.querySelectorAll('.junior');
let html = document.querySelectorAll('.html');
let css = document.querySelectorAll('.css');
let javascript = document.querySelectorAll('.javascript');
let fullstack = document.querySelectorAll('.fullstack');
let midweight = document.querySelectorAll('.midweight');
let python = document.querySelectorAll('.python');
let react = document.querySelectorAll('.react');
let sass = document.querySelectorAll('.sass');
let ror = document.querySelectorAll('.ror');
let ruby = document.querySelectorAll('.ruby');

let clear = document.querySelector('#clear-button')

let contentBox = document.querySelectorAll('.content-boxes');

for(let a = 0; a < contentBox.length; a++){
    let clicked = contentBox[a]

    clicked.addEventListener('click', (event)=>{
        event.preventDefault();
    })

}


//clearing box
clear.addEventListener('click', ()=> {
    window.location.reload();
})

//For deleting boxes
let x = document.querySelectorAll('.small-boxes-x');
for(let a = 0; a < x.length; a++){
    let exis = x[a];

    exis.addEventListener('click', (event) =>{
        event.preventDefault();

        let box = exis.closest('.small-boxes');
        box.remove();
    })
}

//filtering
for (let i = 0; i < contentButtons.length; i++) {
    contentButtons[i].addEventListener('click', filterContent);
}

function filterContent(event) {
    const category = event.target.classList[1];

    for (let i = 0; i < contentBoxes.length; i++) {
        const box = contentBoxes[i];
        const boxCategories = Array.from(box.querySelector('.content-box-right-button').querySelectorAll('.content-buttons'));
        const isAllSelected = category === 'all';

        let shouldDisplay = isAllSelected || boxCategories.some(boxCategory => boxCategory.classList.contains(category));

        box.style.display = shouldDisplay ? 'block' : 'none';
    }
}

//for adding frontend in content area
let frontendAdded = false; 
for (let a = 0; a < frontend.length; a++) {
    let front = frontend[a];
    front.addEventListener('click', (event) => {
        event.preventDefault();

        if (!frontendAdded) { // Check if the box is not added
            let smallbox = document.createElement('div');
            smallbox.style.width = '10%';
            smallbox.style.height = '40%';
            smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
            smallbox.style.position = 'relative';
            smallbox.style.fontSize = '20px';
            smallbox.style.borderRadius = '10px';

            let smallBoxesX = document.createElement('div');
            let anchor = document.createElement('a');
            anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
            anchor.appendChild(smallBoxesX);

            smallBoxesX.style.position = 'absolute';
            smallBoxesX.style.top = '0%';
            smallBoxesX.style.right = '0%';
            smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
            smallBoxesX.style.width = '30%';
            smallBoxesX.style.height = '100%';
            smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
            smallBoxesX.style.backgroundRepeat = "no-repeat";
            smallBoxesX.style.backgroundPosition = "center";
            smallBoxesX.style.backgroundSize = "50%";
            smallBoxesX.style.borderTopRightRadius = '10px';
            smallBoxesX.style.borderBottomRightRadius = '10px';
            smallBoxesX.style.transition = '300ms';

            smallBoxesX.addEventListener('click', () => {
                smallbox.remove();
            });

            let smallBoxesName = document.createElement('p');
            smallBoxesName.style.backgroundColor = 'transparent';
            smallBoxesName.style.width = '70%';
            smallBoxesName.style.height = '100%';
            smallBoxesName.style.display = 'flex';
            smallBoxesName.style.alignItems = 'center';
            smallBoxesName.style.justifyContent = 'center';
            smallBoxesName.style.fontWeight = '700';
            smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
            smallBoxesName.style.fontSize = '100%';
            smallBoxesName.style.position = 'relative';

            smallBoxesName.textContent = 'Frontend';

            smallbox.appendChild(smallBoxesX);
            smallbox.appendChild(smallBoxesName);

            contentArea.appendChild(smallbox);
            frontendAdded = true; // Set the flag to true when the box is added
        }
    });
}


//adding backend in content area
let backAdded = false;
for (let a = 0; a < backend.length; a++) {
    let back = backend[a];
    back.addEventListener('click', (event) => {
        event.preventDefault();
        if(!backAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Frontend'
        smallBoxesName.textContent = 'Backend';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        backAdded=true
    }
    });
}
let senAdded = false;
for (let a = 0; a < senior.length; a++) {
    let sen = senior[a];
    sen.addEventListener('click', (event) => {
        event.preventDefault();
        if(!senAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Senior'
        smallBoxesName.textContent = 'Senior';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        senAdded=true;
        }
    });
}

let junAdded = false;
for (let a = 0; a < junior.length; a++) {
    let jun = junior[a];
    jun.addEventListener('click', (event) => {
        event.preventDefault();
        if(!junAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Junior'
        smallBoxesName.textContent = 'Junior';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        junAdded=true;
    }
    });
}

let htmlAdded = false;
for (let a = 0; a < html.length; a++) {
    let htmlElement = html[a];
    htmlElement.addEventListener('click', (event) => {
        event.preventDefault();
        if(!htmlAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'HTML'
        smallBoxesName.textContent = 'HTML';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        htmlAdded=true;
    }
    });
}

let cssAdded = false;
for (let a = 0; a < css.length; a++) {
    let cssElement = css[a];
    cssElement.addEventListener('click', (event) => {
        event.preventDefault();
        if(!cssAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'CSS'
        smallBoxesName.textContent = 'CSS';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        cssAdded=true
    }
    });
}

let jsAdded = false;
for (let a = 0; a < javascript.length; a++) {
    let jsElement = javascript[a];
    jsElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!jsAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'JavaScript'
        smallBoxesName.textContent = 'JavaScript';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        jsAdded=true;
    }
    });
}

let fullAdded = false;
for (let a = 0; a < fullstack.length; a++) {
    let fullstackElement = fullstack[a];
    fullstackElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!fullAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Fullstack'
        smallBoxesName.textContent = 'Fullstack';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        fullAdded=true;
    }
    });
}

let midAdded = false;
for (let a = 0; a < midweight.length; a++) {
    let midweightElement = midweight[a];
    midweightElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!midAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Midweight'
        smallBoxesName.textContent = 'Midweight';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        midAdded=true
    }
    });
}

let pythonAdded = false;
for (let a = 0; a < python.length; a++) {
    let pythonElement = python[a];

     pythonElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!pythonAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Midweight'
        smallBoxesName.textContent = 'Python';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        pythonAdded=true;
    }
    });
}

let reactAdded = false;
for (let a = 0; a < react.length; a++) {
    let reactElement = react[a];
    reactElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!reactAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'React'
        smallBoxesName.textContent = 'React';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        reactAdded=true
    }
    });
}

let sassAdded = false;
for (let a = 0; a < sass.length; a++) {
    let sassElement = sass[a];
    sassElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!sassAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Sass'
        smallBoxesName.textContent = 'Sass';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        sassAdded=true;
    }
    });
}

let rorAdded = false;
for (let a = 0; a < ror.length; a++) {
    let rorElement = ror[a];
    rorElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!rorAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'RoR'
        smallBoxesName.textContent = 'RoR';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        rorAdded=true
    }
    });
}

let rubyAdded = false;
for (let a = 0; a < ruby.length; a++) {
    let rubyElement = ruby[a];
    rubyElement.addEventListener('click', (event) => {
        event.preventDefault();

        if(!rubyAdded){
        let smallbox = document.createElement('div');
        smallbox.style.width = '10%';
        smallbox.style.height = '40%';
        smallbox.style.backgroundColor = 'hsl(180, 14%, 88%)';
        smallbox.style.position = 'relative';
        smallbox.style.fontSize = '20px';
        smallbox.style.borderRadius = '10px';

        let smallBoxesX = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.classList.add('smallBoxesXAnchor'); // Add the class for hover effect
        anchor.appendChild(smallBoxesX);

        smallBoxesX.style.position = 'absolute';
        smallBoxesX.style.top = '0%';
        smallBoxesX.style.right = '0%';
        smallBoxesX.style.backgroundColor = 'hsl(180, 29%, 50%)';
        smallBoxesX.style.width = '30%';
        smallBoxesX.style.height = '100%';
        smallBoxesX.style.backgroundImage = "url(images/icon-remove.svg)";
        smallBoxesX.style.backgroundRepeat = "no-repeat";
        smallBoxesX.style.backgroundPosition = "center";
        smallBoxesX.style.backgroundSize = "50%";
        smallBoxesX.style.borderTopRightRadius = "10px";
        smallBoxesX.style.borderBottomRightRadius = "10px";
        smallBoxesX.style.transition = "300ms";

        smallBoxesX.addEventListener('click', () => {
            smallbox.remove(); 
        });

        let smallBoxesName = document.createElement('p');
        smallBoxesName.style.backgroundColor = 'transparent';
        smallBoxesName.style.width = '70%';
        smallBoxesName.style.height = '100%';
        smallBoxesName.style.display = 'flex';
        smallBoxesName.style.alignItems = 'center';
        smallBoxesName.style.justifyContent = 'center';
        smallBoxesName.style.fontWeight = '700';
        smallBoxesName.style.color = 'hsl(180, 29%, 50%)';
        smallBoxesName.style.fontSize = '100%';
        smallBoxesName.style.position = 'relative';

        // Set the text content of the <p> element to 'Ruby'
        smallBoxesName.textContent = 'Ruby';

        smallbox.appendChild(smallBoxesX);
        smallbox.appendChild(smallBoxesName);

        contentArea.appendChild(smallbox);
        rubyAdded=true
    }
    });
}

