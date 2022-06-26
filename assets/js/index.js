'use strict'

const btns = document.querySelectorAll('.btn');
const containerWrap = document.querySelector('.container-wrap');

for (const btn of btns) {
  btn.addEventListener('click', ({ target: { dataset: { flex } }, target }) => {
    containerWrap.style.flexDirection = flex;
    activeButton(target);
  })
}

function activeButton(target) {
  for (const btn of btns) {
    btn.classList.remove('btn-active');
    if (btn === target) {
      btn.classList.add('btn-active');
    }
  }
}











