// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hachioji","repository":"asia","path":"japan/tokyo/hachioji","depth":3,"parent":"japan/tokyo","children":["daimachi","hiraokacho","hongocho","minamicho","oiwakecho","yagicho","yokamachi"]});
export const childModules = Object.freeze({"daimachi":"./daimachi/daimachi.js","hiraokacho":"./hiraokacho/hiraokacho.js","hongocho":"./hongocho/hongocho.js","minamicho":"./minamicho/minamicho.js","oiwakecho":"./oiwakecho/oiwakecho.js","yagicho":"./yagicho/yagicho.js","yokamachi":"./yokamachi/yokamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
