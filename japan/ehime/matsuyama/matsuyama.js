// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matsuyama","repository":"asia","path":"japan/ehime/matsuyama","depth":3,"parent":"japan/ehime","children":["horinouchi","muromachi","sanbancho"]});
export const childModules = Object.freeze({"horinouchi":"./horinouchi/horinouchi.js","muromachi":"./muromachi/muromachi.js","sanbancho":"./sanbancho/sanbancho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
