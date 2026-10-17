// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"binh-minh","repository":"asia","path":"vietnam/vinh-long/binh-minh","depth":3,"parent":"vietnam/vinh-long","children":["khom-hai"]});
export const childModules = Object.freeze({"khom-hai":"./khom-hai/khom-hai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
