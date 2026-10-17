// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bhalwal","repository":"asia","path":"pakistan/punjab/bhalwal","depth":3,"parent":"pakistan/punjab","children":["faruq-colony","sultanabad","sultanpur-colony","zahur-hayat-colony"]});
export const childModules = Object.freeze({"faruq-colony":"./faruq-colony/faruq-colony.js","sultanabad":"./sultanabad/sultanabad.js","sultanpur-colony":"./sultanpur-colony/sultanpur-colony.js","zahur-hayat-colony":"./zahur-hayat-colony/zahur-hayat-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
