// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tondabayashicho","repository":"asia","path":"japan/osaka/tondabayashicho","depth":3,"parent":"japan/osaka","children":["kotobukicho","showacho","wakamatsucho"]});
export const childModules = Object.freeze({"kotobukicho":"./kotobukicho/kotobukicho.js","showacho":"./showacho/showacho.js","wakamatsucho":"./wakamatsucho/wakamatsucho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
