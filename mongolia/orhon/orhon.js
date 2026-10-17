// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orhon","repository":"asia","path":"mongolia/orhon","depth":2,"parent":"mongolia","children":["erdenet"]});
export const childModules = Object.freeze({"erdenet":"./erdenet/erdenet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
