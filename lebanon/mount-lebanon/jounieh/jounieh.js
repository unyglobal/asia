// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jounieh","repository":"asia","path":"lebanon/mount-lebanon/jounieh","depth":3,"parent":"lebanon/mount-lebanon","children":["kasslik"]});
export const childModules = Object.freeze({"kasslik":"./kasslik/kasslik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
