// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dilijan","repository":"asia","path":"armenia/tavush/dilijan","depth":3,"parent":"armenia/tavush","children":["andranik","shahumyan"]});
export const childModules = Object.freeze({"andranik":"./andranik/andranik.js","shahumyan":"./shahumyan/shahumyan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
