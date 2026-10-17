// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tboung-khmum","repository":"asia","path":"cambodia/tboung-khmum","depth":2,"parent":"cambodia","children":["dar","memot","suong"]});
export const childModules = Object.freeze({"dar":"./dar/dar.js","memot":"./memot/memot.js","suong":"./suong/suong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
