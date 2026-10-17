// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"inazawa","repository":"asia","path":"japan/aichi/inazawa","depth":3,"parent":"japan/aichi","children":["inaba","nishimachi","sakuragi"]});
export const childModules = Object.freeze({"inaba":"./inaba/inaba.js","nishimachi":"./nishimachi/nishimachi.js","sakuragi":"./sakuragi/sakuragi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
