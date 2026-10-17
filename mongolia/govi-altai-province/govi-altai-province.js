// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"govi-altai-province","repository":"asia","path":"mongolia/govi-altai-province","depth":2,"parent":"mongolia","children":["altai"]});
export const childModules = Object.freeze({"altai":"./altai/altai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
