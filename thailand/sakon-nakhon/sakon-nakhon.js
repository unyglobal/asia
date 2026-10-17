// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sakon-nakhon","repository":"asia","path":"thailand/sakon-nakhon","depth":2,"parent":"thailand","children":["sawang-daen-din","warichaphum"]});
export const childModules = Object.freeze({"sawang-daen-din":"./sawang-daen-din/sawang-daen-din.js","warichaphum":"./warichaphum/warichaphum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
