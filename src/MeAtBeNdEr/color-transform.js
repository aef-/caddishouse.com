export default (from, to, step) => {
  step = Math.abs(step);
  step = step > 0 ? step : 1;
  const deltas = {
    r: (to.red() - from.red()) * step,
    g: (to.green() - from.green()) * step,
    b: (to.blue() - from.blue()) * step,
    a: (to.alpha() - from.alpha()) * step
  };

  return from.clone().rgb({
    r: from.red() + deltas.r,
    g: from.green() + deltas.g,
    b: from.blue() + deltas.b,
    a: from.alpha() + deltas.a
  });
};
