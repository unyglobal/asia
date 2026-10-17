// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phrae","repository":"asia","path":"thailand/phrae","depth":2,"parent":"thailand","children":["den-chai"]});
export const childModules = Object.freeze({"den-chai":"./den-chai/den-chai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
