// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suita","repository":"asia","path":"japan/osaka/suita","depth":3,"parent":"japan/osaka","children":["izumicho","yamatecho"]});
export const childModules = Object.freeze({"izumicho":"./izumicho/izumicho.js","yamatecho":"./yamatecho/yamatecho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
