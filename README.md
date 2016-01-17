# Word Cloud

[![Build Status](https://travis-ci.org/benji6/word-cloud.svg?branch=master)](https://travis-ci.org/benji6/word-cloud)

## Instructions

I'm using node 5, but I think this should work for any sensible version of node

- install with `npm i`
- test with `npm t`
- dev with `npm start`
- build with `npm run build`

See `package.json` for comprehensive list of scripts

## Improvements

### Page weight

The entire Ramda library is imported and bundled but a lot of it is never used. Possible solutions:

- Investigate tree-shaking tools like [Rollup](https://github.com/rollup/rollup)
- Use a partial build of Ramda
- Download Ramda over a CDN
- Manually implement and factor out functions so dependency no longer necessary

Of course, if the app grows this may no longer be such a concern

### Tests

The view is not currently covered by unit tests. Possible solutions:

- Use [jsdom](https://github.com/tmpvar/jsdom) to test view
- If the app became more complex could use a small view library like [virtual-dom](https://github.com/Matt-Esch/virtual-dom) which lends itself very well to unit testing

### Optimizations

The collision detection I've used is naive and has a complexity of O(n^2). This may not be that important for a small number of words, but it is worth considering using a different technique (e.g. a Quadtree), or possibly changing the placing algorithm so collision does not need to be tested so many times

It is also worth considering methods of keeping the main thread clear while the model is being generated, as it could be quite a long and intensive process for large numbers of words. It wouldn't be too difficult to split the task up so it could be executed in stages, or to put it into a web worker (although the browser compatibility requirements may preclude this)

### Responsiveness & aesthetics

This would involve working with design to figure out what the best experience for the user is and how it should be implemented

It should be fairly simple to tweak the word cloud algorithm to compare different effects like elongation and word separation
