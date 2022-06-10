/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * function throttler, default delay is 300ms
 */
function throttle<F extends (...args: any[]) => any>(func: F, delay = 300) {
  let timer: number | null = null;
  const ret = (...args: any) => {
    if (!timer) {
      timer = window.setTimeout(() => {
        func(...args);
        timer = null;
      }, delay);
    }
  };
  return ret as (...args: Parameters<F>) => void;
}

export default throttle;
