// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"homs","repository":"asia","path":"syria/homs","depth":2,"parent":"syria","children":["al-qaryatayn","al-qusayr","ar-rastan","kafr-laha","tadmur","tallbisah","tallkalakh"]});
export const childModules = Object.freeze({"al-qaryatayn":"./al-qaryatayn/al-qaryatayn.js","al-qusayr":"./al-qusayr/al-qusayr.js","ar-rastan":"./ar-rastan/ar-rastan.js","kafr-laha":"./kafr-laha/kafr-laha.js","tadmur":"./tadmur/tadmur.js","tallbisah":"./tallbisah/tallbisah.js","tallkalakh":"./tallkalakh/tallkalakh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
