// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"virugambakkam","repository":"asia","path":"india/tamil-nadu/virugambakkam","depth":3,"parent":"india/tamil-nadu","children":["nesapakkam"]});
export const childModules = Object.freeze({"nesapakkam":"./nesapakkam/nesapakkam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
