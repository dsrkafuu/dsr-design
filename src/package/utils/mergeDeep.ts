/* eslint-disable @typescript-eslint/no-explicit-any */

interface ObjectLike {
  [key: string]: any;
  length?: never;
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

function isObject(obj: any) {
  if (typeof obj === 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf === 'function') {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  return false;
}

/**
 * object and array deep merge
 */
function mergeDeep<T extends ObjectLike[]>(
  ...objects: T
): UnionToIntersection<T[number]> {
  return objects.reduce((result, current) => {
    Object.keys(current).forEach((key) => {
      if (Array.isArray(result[key]) && Array.isArray(current[key])) {
        result[key] = current[key];
      } else if (isObject(result[key]) && isObject(current[key])) {
        result[key] = mergeDeep(
          result[key] as ObjectLike,
          current[key] as ObjectLike
        );
      } else {
        result[key] = current[key];
      }
    });
    return result;
  }, {}) as any;
}

export default mergeDeep;
