// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aran-bidgol","repository":"asia","path":"iran/isfahan/aran-bidgol","depth":3,"parent":"iran/isfahan","children":["bid-gol"]});
export const childModules = Object.freeze({"bid-gol":"./bid-gol/bid-gol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
