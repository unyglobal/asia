// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phetchaburi","repository":"asia","path":"thailand/phetchaburi","depth":2,"parent":"thailand","children":["cha-am","khao-yoi","tha-yang"]});
export const childModules = Object.freeze({"cha-am":"./cha-am/cha-am.js","khao-yoi":"./khao-yoi/khao-yoi.js","tha-yang":"./tha-yang/tha-yang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
