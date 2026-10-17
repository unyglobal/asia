// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paktia","repository":"asia","path":"afghanistan/paktia","depth":2,"parent":"afghanistan","children":["gardez"]});
export const childModules = Object.freeze({"gardez":"./gardez/gardez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
