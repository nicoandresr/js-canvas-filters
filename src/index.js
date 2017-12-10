// This is a modified version of https://github.com/kig/canvasfilters
// And https://github.com/andrevenancio/eye-blinking-detection/blob/master/lib/canvasfilters.js
// @authors: nicoandres.rodriguez@gmail.com
// @date: 10 December 2017
export const greyScaleFilter = (canvasCtx, contrast, brightness) => {
  const pixels = canvasCtx.getImageData(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
  const d = pixels.data;
  let i = 0;
  for (i = 0; i < d.length; i += 4) {
    const r = d[i + 0];
    const g = d[i + 1];
    const b = d[i + 2];
    const a = d[i + 3];
    let v = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);

    if (contrast && brightness) {
      v /= a;

      // Apply contrast.
      v = ((v - 0.5) * Math.max(contrast, 0)) + 0.5;

      // Apply brightness.
      v += brightness;

      // Return final pixel color.
      v *= a;
    }

    d[i + 0] = v;
    d[i + 1] = v;
    d[i + 2] = v;
  }
  return pixels;
};

export const thresholdFilter = (canvasCtx, threshold) => {
  const pixels = canvasCtx.getImageData(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
  const d = pixels.data;
  let i = 0;
  for (i = 0; i < d.length; i += 4) {
    const r = d[i + 0];
    const g = d[i + 1];
    const b = d[i + 2];
    let v = 0;
    if ((r + g + b) > threshold) {
      v = 255;
    }
    d[i + 0] = v;
    d[i + 1] = v;
    d[i + 2] = v;
  }
  return pixels;
};

