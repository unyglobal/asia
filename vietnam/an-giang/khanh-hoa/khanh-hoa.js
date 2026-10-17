// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khanh-hoa","repository":"asia","path":"vietnam/an-giang/khanh-hoa","depth":3,"parent":"vietnam/an-giang","children":["cam-ranh","khanh-hai"]});
export const childModules = Object.freeze({"cam-ranh":"./cam-ranh/cam-ranh.js","khanh-hai":"./khanh-hai/khanh-hai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
