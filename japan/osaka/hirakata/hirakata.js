// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hirakata","repository":"asia","path":"japan/osaka/hirakata","depth":3,"parent":"japan/osaka","children":["higashitamiya","miyanosaka","nishikinya","ogaitocho","shimmachi"]});
export const childModules = Object.freeze({"higashitamiya":"./higashitamiya/higashitamiya.js","miyanosaka":"./miyanosaka/miyanosaka.js","nishikinya":"./nishikinya/nishikinya.js","ogaitocho":"./ogaitocho/ogaitocho.js","shimmachi":"./shimmachi/shimmachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
