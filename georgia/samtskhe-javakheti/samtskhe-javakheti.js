// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samtskhe-javakheti","repository":"asia","path":"georgia/samtskhe-javakheti","depth":2,"parent":"georgia","children":["akhaltsikhe"]});
export const childModules = Object.freeze({"akhaltsikhe":"./akhaltsikhe/akhaltsikhe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
