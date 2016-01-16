import {curry} from 'ramda'

export const createDocumentFragment = document.createDocumentFragment.bind(document)
export const createElement = document.createElement.bind(document)
export const innerText = curry((str, el) => (el.innerText = str, el))
export const querySelector = document.querySelector.bind(document)
