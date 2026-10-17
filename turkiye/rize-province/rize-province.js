// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rize-province","repository":"asia","path":"turkiye/rize-province","depth":2,"parent":"turkiye","children":["ardesen","cayeli","rize"]});
export const childModules = Object.freeze({"ardesen":"./ardesen/ardesen.js","cayeli":"./cayeli/cayeli.js","rize":"./rize/rize.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
