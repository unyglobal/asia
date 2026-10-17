// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"narathiwat","repository":"asia","path":"thailand/narathiwat","depth":2,"parent":"thailand","children":["ra-ngae","su-ngai-kolok","tak-bai"]});
export const childModules = Object.freeze({"ra-ngae":"./ra-ngae/ra-ngae.js","su-ngai-kolok":"./su-ngai-kolok/su-ngai-kolok.js","tak-bai":"./tak-bai/tak-bai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
