// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prachin-buri","repository":"asia","path":"thailand/prachin-buri","depth":2,"parent":"thailand","children":["ban-phra","ban-sang","kabin-buri","na-di","prachantakham","prachin-buri-town","si-maha-phot","si-mahosot","thambon-na-mueang"]});
export const childModules = Object.freeze({"ban-phra":"./ban-phra/ban-phra.js","ban-sang":"./ban-sang/ban-sang.js","kabin-buri":"./kabin-buri/kabin-buri.js","na-di":"./na-di/na-di.js","prachantakham":"./prachantakham/prachantakham.js","prachin-buri-town":"./prachin-buri-town/prachin-buri-town.js","si-maha-phot":"./si-maha-phot/si-maha-phot.js","si-mahosot":"./si-mahosot/si-mahosot.js","thambon-na-mueang":"./thambon-na-mueang/thambon-na-mueang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
