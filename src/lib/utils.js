export function filterFalsy(obj) {
  return Object.keys(obj)
    .filter((k) => obj[k])
    .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
}

const hasOwn = Object.prototype.hasOwnProperty;
export function mergeObject(target, source) {
  const obj = { ...target };
  Object.keys(obj).forEach((key) => {
    if (hasOwn.call(source, key)) {
      if (obj[key] && typeof obj[key] === 'object') {
        obj[key] = mergeObject(obj[key], source[key]);
      } else {
        obj[key] = source[key];
      }
    }
  });
  return obj;
}

export async function rejectionsFromPromises(promises) {
  const rejections = [];
  const results = await Promise.allSettled(promises);
  results.forEach((result) => {
    if (result.status === 'rejected') {
      if (Array.isArray(result.reason)) {
        rejections.push(...result.reason);
      } else if (result.reason instanceof Error) {
        rejections.push(result.reason);
      } else {
        rejections.push(new Error(result.reason));
      }
    }
  });
  return rejections;
}
