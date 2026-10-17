// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ta-izz","repository":"asia","path":"yemen/ta-izz","depth":2,"parent":"yemen","children":["mocha","taiz"]});
export const childModules = Object.freeze({"mocha":"./mocha/mocha.js","taiz":"./taiz/taiz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
