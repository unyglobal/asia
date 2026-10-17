// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kesennuma","repository":"asia","path":"japan/miyagi/kesennuma","depth":3,"parent":"japan/miyagi","children":["kawarada","minamigaoka","nakamachi","yokamachi"]});
export const childModules = Object.freeze({"kawarada":"./kawarada/kawarada.js","minamigaoka":"./minamigaoka/minamigaoka.js","nakamachi":"./nakamachi/nakamachi.js","yokamachi":"./yokamachi/yokamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
