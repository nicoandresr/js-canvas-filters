# js-canvas-filters
This is a basic package for apply filters a canvas image

# Using
install from npm.
```js
npm i js-canvas-filters
```
import the filters
```js
import { thresholdFilter, greyScaleFilter } from 'js-canvas-filters';
```
And use the filters from a original canvas to a target canvas, into a [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) loop.
```js
const greyScaleImg = greyScaleFilter(originalCtx, constrast, brightness);
greyScaleCtx.putImageData(greyScaleImg, 0, 0);

const thresholdImg = thresholdFilter(originalCtx, threshold);
thresholdCtx.putImageData(thresholdImg, 0, 0);
```
# greyScaleFilter
Info about the filter using can be founded here https://en.wikipedia.org/wiki/Relative_luminance
# thresholdFilter
Info about the filter can be founded here https://en.wikipedia.org/wiki/Thresholding_(image_processing)
