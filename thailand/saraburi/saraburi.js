// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saraburi","repository":"asia","path":"thailand/saraburi","depth":2,"parent":"thailand","children":["ban-mo","kaeng-khoi","nong-khae","phra-phutthabat"]});
export const childModules = Object.freeze({"ban-mo":"./ban-mo/ban-mo.js","kaeng-khoi":"./kaeng-khoi/kaeng-khoi.js","nong-khae":"./nong-khae/nong-khae.js","phra-phutthabat":"./phra-phutthabat/phra-phutthabat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
