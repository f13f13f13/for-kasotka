let phrases = [
  { text: 'поцеловать касотку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'купить касотке конфеток', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'предложить касотке водички', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'сказать касотке, как ее любишь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'сделать касотке массаж', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'подарить новую игру касотке в стиме', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'поиграть с касоткой в фазмофобию', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'покакать', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть с касоткой фильм', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'поиграть с касоткой в нарды', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
