// import {createElement} from './createElement.js'
// const {createElement} = require('./createElement.js')
const vertualDom = createElement('ul', {class: 'list'},[
    createElement('li', {class: 'item'}, ['a']),
    createElement('li', {class: 'item'}, ['b']),
    createElement('li', {class: 'item'}, ['c']),
])

const vertualDom1 = createElement('ul', {class: 'aaa'},[
  createElement('li', {class: 'item'}, ['a']),
  createElement('li', {class: 'item'}, ['5']),
  createElement('li', {class: 'item'}, ['c']),
])


const el = render(vertualDom)

renderDom(el,document.getElementById('root'))
let patches = diff(vertualDom, vertualDom1)
console.log(patches)
patch(el, patches)
console.log(el)
console.log(vertualDom)