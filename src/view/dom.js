import {curry, identity} from 'ramda'

const px = x => `${x}px`

const setStylePropertyWithUnits = curry(
  (transform, prop, val, el) => (el.style[prop] = transform(val), el)
)

const setStylePropertyInPx = setStylePropertyWithUnits(px)
const setStyleProperty = setStylePropertyWithUnits(identity)

export const createDocumentFragment = document.createDocumentFragment.bind(document)
export const createElement = document.createElement.bind(document)
export const textContent = curry((str, el) => (el.textContent = str, el))
export const querySelector = document.querySelector.bind(document)

export const setBottom = setStylePropertyInPx('bottom')
export const setColor = setStyleProperty('color')
export const setFontSize = setStylePropertyInPx('fontSize')
export const setLeft = setStylePropertyInPx('left')
export const setPosition = setStyleProperty('position')
export const setVisibility = setStyleProperty('visibility')
