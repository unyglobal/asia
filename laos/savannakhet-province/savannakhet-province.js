// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"savannakhet-province","repository":"asia","path":"laos/savannakhet-province","depth":2,"parent":"laos","children":["ban-kengkok","ban-xeno","savannakhet"]});
export const childModules = Object.freeze({"ban-kengkok":"./ban-kengkok/ban-kengkok.js","ban-xeno":"./ban-xeno/ban-xeno.js","savannakhet":"./savannakhet/savannakhet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
