const quotes = [
    {
        quote: "늦었다고 생각할 때가 진짜 늦었다. 그러니 당장 시작해라.",
        author: "박명수"
    },
    {
        quote: "즐길 수 없으면 피하라.",
        author: "- 박명수"
    },
    {
        quote: "성공은 1% 재능과 99%의 빽",
        author: "- 박명수"
    },
    {
        quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다.",
        author: "- 박명수"
    },
    {
        quote: "가는 말이 고우면 얕본다.",
        author: "- 박명수"
    },
    {
        quote: "고생 끝에 골병 난다.",
        author: "- 박명수"
    },
    {
        quote: "참을 인 세 번이면 호구다.",
        author: "- 박명수"
    },
    {
        quote: "티끌 모아 티끌이다.",
        author: "- 박명수"
    },
    {
        quote: "세상은 넓고 할일은 많지 않다.",
        author: "- 박명수"
    },
    {
        quote: "꿈은 없고요, 그냥 놀고 싶습니다.",
        author: "- 박명수"
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;