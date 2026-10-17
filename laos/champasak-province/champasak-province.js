// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"champasak-province","repository":"asia","path":"laos/champasak-province","depth":2,"parent":"laos","children":["pakse"]});
export const childModules = Object.freeze({"pakse":"./pakse/pakse.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
