//Показывает процент на сколько прокручена страница!
let cssForBar = document.createElement('style');
cssForBar.innerHTML = `
.percent__scroll {
  will-change: transform;
  position: fixed;
  bottom: 0;
left: 0;
  height: 30px;
  width: 100%;
  font-family: '2', sans-serif;
  line-height: 70px;
  text-align: center;
  color: #00aeef;
  z-index: 20;
}

.percent__scroll__text {
  position: absolute;
  bottom: 0;
  height: 50px;
  left: 0;
  font-size: 24px;
}

.percent__scroll__line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 0%;
  background: #00aeef;
}
`

document.body.appendChild(cssForBar)


document.body.insertAdjacentHTML('beforeend', `<div class="percent__scroll">
<div class="percent__scroll__text">0%</div>
<div class="percent__scroll__line"></div>
</div>`)

const updateScrollPercentage = function() { 
const heightOfWindow = window.innerHeight,
contentScrolled = window.pageYOffset,
bodyHeight = document.body.offsetHeight

if(bodyHeight - contentScrolled <= heightOfWindow) {

  $('.percent__scroll__text').textContent =  $('.percent__scroll__line').style.width = "100%"
}
else {
    const total = bodyHeight - heightOfWindow,
    got = contentScrolled,
    percent = parseInt((got/total) * 100)

    $('.percent__scroll__text').textContent = $('.percent__scroll__line').style.width =  `${percent}%`

    
}
}
window.addEventListener('scroll', updateScrollPercentage)
