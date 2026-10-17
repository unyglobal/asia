// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maluku","repository":"asia","path":"indonesia/maluku","depth":2,"parent":"indonesia","children":["amahai","ambon","dobo","masohi","namlea","namrole","tual"]});
export const childModules = Object.freeze({"amahai":"./amahai/amahai.js","ambon":"./ambon/ambon.js","dobo":"./dobo/dobo.js","masohi":"./masohi/masohi.js","namlea":"./namlea/namlea.js","namrole":"./namrole/namrole.js","tual":"./tual/tual.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
