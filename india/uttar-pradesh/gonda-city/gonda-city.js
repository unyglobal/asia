// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gonda-city","repository":"asia","path":"india/uttar-pradesh/gonda-city","depth":3,"parent":"india/uttar-pradesh","children":["koran-purwa","parsan-purwa","purwa-rani","tiwari-purwa"]});
export const childModules = Object.freeze({"koran-purwa":"./koran-purwa/koran-purwa.js","parsan-purwa":"./parsan-purwa/parsan-purwa.js","purwa-rani":"./purwa-rani/purwa-rani.js","tiwari-purwa":"./tiwari-purwa/tiwari-purwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
