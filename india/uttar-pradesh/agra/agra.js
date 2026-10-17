// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agra","repository":"asia","path":"india/uttar-pradesh/agra","depth":3,"parent":"india/uttar-pradesh","children":["kotwali","maithan","pipal-mandi"]});
export const childModules = Object.freeze({"kotwali":"./kotwali/kotwali.js","maithan":"./maithan/maithan.js","pipal-mandi":"./pipal-mandi/pipal-mandi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
