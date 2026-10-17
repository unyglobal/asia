// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dusit","repository":"asia","path":"thailand/bangkok/dusit","depth":3,"parent":"thailand/bangkok","children":["sam-sen"]});
export const childModules = Object.freeze({"sam-sen":"./sam-sen/sam-sen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
