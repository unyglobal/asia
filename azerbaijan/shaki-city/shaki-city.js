// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shaki-city","repository":"asia","path":"azerbaijan/shaki-city","depth":2,"parent":"azerbaijan","children":["sheki"]});
export const childModules = Object.freeze({"sheki":"./sheki/sheki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
