// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayama","repository":"asia","path":"japan/kanagawa/hayama","depth":3,"parent":"japan/kanagawa","children":["itsutsuai","morito","shimokoji","ushigayato"]});
export const childModules = Object.freeze({"itsutsuai":"./itsutsuai/itsutsuai.js","morito":"./morito/morito.js","shimokoji":"./shimokoji/shimokoji.js","ushigayato":"./ushigayato/ushigayato.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
