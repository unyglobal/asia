// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yazd","repository":"asia","path":"iran/yazd-province/yazd","depth":3,"parent":"iran/yazd-province","children":["dar-osh-shafa","do-manar","fahadan","gazorgah","khandaq","khvajeh-khezr"]});
export const childModules = Object.freeze({"dar-osh-shafa":"./dar-osh-shafa/dar-osh-shafa.js","do-manar":"./do-manar/do-manar.js","fahadan":"./fahadan/fahadan.js","gazorgah":"./gazorgah/gazorgah.js","khandaq":"./khandaq/khandaq.js","khvajeh-khezr":"./khvajeh-khezr/khvajeh-khezr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
