// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yonezawa","repository":"asia","path":"japan/yamagata/yonezawa","depth":3,"parent":"japan/yamagata","children":["marunochi","omachi"]});
export const childModules = Object.freeze({"marunochi":"./marunochi/marunochi.js","omachi":"./omachi/omachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
