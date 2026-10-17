// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sa-kaeo","repository":"asia","path":"thailand/sa-kaeo","depth":2,"parent":"thailand","children":["aranyaprathet","wang-nam-yen"]});
export const childModules = Object.freeze({"aranyaprathet":"./aranyaprathet/aranyaprathet.js","wang-nam-yen":"./wang-nam-yen/wang-nam-yen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
