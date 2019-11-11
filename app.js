import greetings from './greet';

const text = greetings();

console.log(text);

import catImage from './cat.jpeg';
import dogImage from './dog.png';
import content from './content.html';

document.addEventListener('DOMContentLoaded', () => {
    // FILE-LOADER
    const img = document.createElement('img');
    img.src = catImage;
    document.body.appendChild(img);

    // URL-LOADER
    const div = document.createElement('div');
    div.style = `width: 100px; height: 75px; background-image: url('${dogImage}')`;
    document.body.appendChild(div);

    // HTML-LOADER
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = content;
    document.body.appendChild(contentDiv);
});

// TS-LOADER
import greeter from './greeter';
console.log(greeter(1));

// CSS-LOADER
import style from './style.css';
console.log(style);

// SASS-LOADER
import './content.scss';

// DEFINE-PLUGIN
console.log(ENV);