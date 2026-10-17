// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kukichuo","repository":"asia","path":"japan/saitama/kukichuo","depth":3,"parent":"japan/saitama","children":["kukikita","minami"]});
export const childModules = Object.freeze({"kukikita":"./kukikita/kukikita.js","minami":"./minami/minami.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
