// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yaizu","repository":"asia","path":"japan/shizuoka/yaizu","depth":3,"parent":"japan/shizuoka","children":["daieicho","ekikita","hommachi","nakaminato","sakaemachi"]});
export const childModules = Object.freeze({"daieicho":"./daieicho/daieicho.js","ekikita":"./ekikita/ekikita.js","hommachi":"./hommachi/hommachi.js","nakaminato":"./nakaminato/nakaminato.js","sakaemachi":"./sakaemachi/sakaemachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
