// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"okegawa","repository":"asia","path":"japan/saitama/okegawa","depth":3,"parent":"japan/saitama","children":["izumi","kita","kotobuki","nishi"]});
export const childModules = Object.freeze({"izumi":"./izumi/izumi.js","kita":"./kita/kita.js","kotobuki":"./kotobuki/kotobuki.js","nishi":"./nishi/nishi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
