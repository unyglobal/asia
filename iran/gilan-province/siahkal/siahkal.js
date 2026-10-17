// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"siahkal","repository":"asia","path":"iran/gilan-province/siahkal","depth":3,"parent":"iran/gilan-province","children":["chalaksara","elyas-mahalleh"]});
export const childModules = Object.freeze({"chalaksara":"./chalaksara/chalaksara.js","elyas-mahalleh":"./elyas-mahalleh/elyas-mahalleh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
