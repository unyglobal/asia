// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"katanawa","repository":"asia","path":"japan/fukuoka/katanawa","depth":3,"parent":"japan/fukuoka","children":["katanawahigashi","katanawakita"]});
export const childModules = Object.freeze({"katanawahigashi":"./katanawahigashi/katanawahigashi.js","katanawakita":"./katanawakita/katanawakita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
