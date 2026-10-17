// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takaishi","repository":"asia","path":"japan/osaka/takaishi","depth":3,"parent":"japan/osaka","children":["ayazono","chiyoda","takashinohama"]});
export const childModules = Object.freeze({"ayazono":"./ayazono/ayazono.js","chiyoda":"./chiyoda/chiyoda.js","takashinohama":"./takashinohama/takashinohama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
