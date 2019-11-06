import greetings from './greet';

const text = greetings();

console.log(text);

import catImage from './cat.jpeg';
import dogImage from './dog.png';

document.addEventListener('DOMContentLoaded', () => {
    const img = document.createElement('img');
    img.src = catImage;
    document.body.appendChild(img);

    const div = document.createElement('div');
    div.style = `width: 100px; height: 75px; background-image: url('${dogImage}')`;
    document.body.appendChild(div);
});

// import greeter from './greeter';
// console.log(greeter(1));