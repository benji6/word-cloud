import {curry} from 'ramda'
export const createElement = document.createElement.bind(document)
export const getElementById = document.getElementById.bind(document)
export const innerText = curry((str, el) => (el.innerText = str, el))
