// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lam-dong","repository":"asia","path":"vietnam/lam-dong","depth":2,"parent":"vietnam","children":["a-lat","bao-loc","ea-t-ling","gia-nghia","huyen-lam-ha","inh-van","la-gi","mui-ne","phan-thiet","phu-quy","uc-trong"]});
export const childModules = Object.freeze({"a-lat":"./a-lat/a-lat.js","bao-loc":"./bao-loc/bao-loc.js","ea-t-ling":"./ea-t-ling/ea-t-ling.js","gia-nghia":"./gia-nghia/gia-nghia.js","huyen-lam-ha":"./huyen-lam-ha/huyen-lam-ha.js","inh-van":"./inh-van/inh-van.js","la-gi":"./la-gi/la-gi.js","mui-ne":"./mui-ne/mui-ne.js","phan-thiet":"./phan-thiet/phan-thiet.js","phu-quy":"./phu-quy/phu-quy.js","uc-trong":"./uc-trong/uc-trong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
