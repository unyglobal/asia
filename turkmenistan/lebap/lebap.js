// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lebap","repository":"asia","path":"turkmenistan/lebap","depth":2,"parent":"turkmenistan","children":["gazojak","halac","kerki","magdanly","sayat","turkmenabat"]});
export const childModules = Object.freeze({"gazojak":"./gazojak/gazojak.js","halac":"./halac/halac.js","kerki":"./kerki/kerki.js","magdanly":"./magdanly/magdanly.js","sayat":"./sayat/sayat.js","turkmenabat":"./turkmenabat/turkmenabat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
