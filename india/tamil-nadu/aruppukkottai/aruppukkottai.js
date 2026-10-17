// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aruppukkottai","repository":"asia","path":"india/tamil-nadu/aruppukkottai","depth":3,"parent":"india/tamil-nadu","children":["chinna-puliyampatti","chokkalingapuram"]});
export const childModules = Object.freeze({"chinna-puliyampatti":"./chinna-puliyampatti/chinna-puliyampatti.js","chokkalingapuram":"./chokkalingapuram/chokkalingapuram.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
