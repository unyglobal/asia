// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sumqayit","repository":"asia","path":"azerbaijan/sumqayit","depth":2,"parent":"azerbaijan","children":["haji-zeynalabdin","jorat","sumgayit"]});
export const childModules = Object.freeze({"haji-zeynalabdin":"./haji-zeynalabdin/haji-zeynalabdin.js","jorat":"./jorat/jorat.js","sumgayit":"./sumgayit/sumgayit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
