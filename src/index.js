import anime from 'animejs';
import './styles/index.css'

let bubbles = document.body.querySelectorAll("svg path.bubble")

bubbles.forEach((bubble, index)=> anime({
    targets: bubble,
    translateY: -210 - index,
    opacity: 0,
    duration: 2000,
    delay: function() {
        return index * 70;
    },
    easing: 'easeInOutSine',
    loop: true
  }));