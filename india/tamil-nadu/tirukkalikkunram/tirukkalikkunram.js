// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tirukkalikkunram","repository":"asia","path":"india/tamil-nadu/tirukkalikkunram","depth":3,"parent":"india/tamil-nadu","children":["pakshitirtham"]});
export const childModules = Object.freeze({"pakshitirtham":"./pakshitirtham/pakshitirtham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
