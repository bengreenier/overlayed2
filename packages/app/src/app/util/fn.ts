/**
 * Create a function that limits a value by constraints
 *
 * @template TValue Value type - must be lt,gt comparable
 * @param min minimum value
 * @param max maximum value
 */
export function createValueLimiter<TValue>(min: TValue, max: TValue) {
  return function limiter(val: TValue) {
    let limited = val
    if (val > max) {
      limited = max
    } else if (val < min) {
      limited = min
    }

    return limited
  }
}
