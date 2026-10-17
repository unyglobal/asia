// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dzabkhan","repository":"asia","path":"mongolia/dzabkhan","depth":2,"parent":"mongolia","children":["uliastay"]});
export const childModules = Object.freeze({"uliastay":"./uliastay/uliastay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
