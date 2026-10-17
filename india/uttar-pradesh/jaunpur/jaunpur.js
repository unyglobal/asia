// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaunpur","repository":"asia","path":"india/uttar-pradesh/jaunpur","depth":3,"parent":"india/uttar-pradesh","children":["bhaurajipur","isapur","khasanpur","sadallipur","yahyapur"]});
export const childModules = Object.freeze({"bhaurajipur":"./bhaurajipur/bhaurajipur.js","isapur":"./isapur/isapur.js","khasanpur":"./khasanpur/khasanpur.js","sadallipur":"./sadallipur/sadallipur.js","yahyapur":"./yahyapur/yahyapur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
