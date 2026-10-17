// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adjara","repository":"asia","path":"georgia/adjara","depth":2,"parent":"georgia","children":["batumi","kobuleti"]});
export const childModules = Object.freeze({"batumi":"./batumi/batumi.js","kobuleti":"./kobuleti/kobuleti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
