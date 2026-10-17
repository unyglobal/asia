// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-jose-del-monte","repository":"asia","path":"philippines/central-luzon/san-jose-del-monte","depth":3,"parent":"philippines/central-luzon","children":["avancena-subdivision","morning-glory-subdivision"]});
export const childModules = Object.freeze({"avancena-subdivision":"./avancena-subdivision/avancena-subdivision.js","morning-glory-subdivision":"./morning-glory-subdivision/morning-glory-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
