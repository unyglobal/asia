// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ararat","repository":"asia","path":"armenia/ararat","depth":2,"parent":"armenia","children":["artashat","masis"]});
export const childModules = Object.freeze({"artashat":"./artashat/artashat.js","masis":"./masis/masis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
