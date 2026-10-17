// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"falavarjan","repository":"asia","path":"iran/isfahan/falavarjan","depth":3,"parent":"iran/isfahan","children":["jamalabad"]});
export const childModules = Object.freeze({"jamalabad":"./jamalabad/jamalabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
