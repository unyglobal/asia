// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kodaikanal","repository":"asia","path":"india/tamil-nadu/kodaikanal","depth":3,"parent":"india/tamil-nadu","children":["bryant-park","kacheri"]});
export const childModules = Object.freeze({"bryant-park":"./bryant-park/bryant-park.js","kacheri":"./kacheri/kacheri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
