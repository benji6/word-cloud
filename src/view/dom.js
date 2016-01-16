import {curry, identity} from 'ramda'

const px = x => `${x}px`

const setStylePropertyWithUnits = curry(
  (transform, prop, val, el) => (el.style[prop] = transform(val), el)
)

const setStylePropertyInPx = setStylePropertyWithUnits(px)
const setStyleProperty = setStylePropertyWithUnits(identity)

const setProperty = curry((prop, x, el) => (el[prop] = x, el))

export const createDocumentFragment = document.createDocumentFragment.bind(document)
export const createElement = document.createElement.bind(document)
export const querySelector = document.querySelector.bind(document)

export const addClass = curry((x, el) => (el.className += ` ${x}`, el))
export const setBottom = setStylePropertyInPx('bottom')
export const setLeft = setStylePropertyInPx('left')
export const setOnClick = setProperty('onclick')
export const setPosition = setStyleProperty('position')
export const setVisibility = setStyleProperty('visibility')
export const textContent = curry((str, el) => (el.textContent = str, el))
