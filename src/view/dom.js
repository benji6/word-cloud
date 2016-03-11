import {curry, identity, partial} from 'ramda'

const setStylePropertyWithUnits = curry(
  (transform, prop, val, el) => (el.style[prop] = transform(val), el)
)

const translateXRegEx = /(translateX\()(\d+.*)(px\))/
const translateYRegEx = /(translateY\()(\d+.*)(px\))/

const setStyleProperty = setStylePropertyWithUnits(identity)

const setProperty = curry((prop, x, el) => (el[prop] = x, el))

const translateY = (x, el) => (el.style.transform = translateYRegEx.test(el.style.transform)
  ? el.style.transform.replace(translateYRegEx, `$1${x}$3`)
  : el.style.transform + ` translateY(${x}px)`, el)
const translateX = (x, el) => (el.style.transform = translateXRegEx.test(el.style.transform)
  ? el.style.transform.replace(translateXRegEx, `$1${x}$3`)
  : el.style.transform + ` translateX(${x}px)`, el)

export const createDocumentFragment = document.createDocumentFragment.bind(document)
export const createElement = document.createElement.bind(document)
export const querySelector = document.querySelector.bind(document)

export const addClass = curry((x, el) => (el.className += ` ${x}`, el))
export const animateBottom = curry((from, to, el) => (
  setTimeout(partial(translateY, [to, el])),
  translateY(from, el)
))
export const animateLeft = curry((from, to, el) => (
  setTimeout(partial(translateX, [to, el])),
  translateX(from, el)
))
export const setOnClick = setProperty('onclick')
export const setPosition = setStyleProperty('position')
export const setVisibility = setStyleProperty('visibility')
export const textContent = curry((str, el) => (el.textContent = str, el))
