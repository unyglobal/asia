// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tindivanam","repository":"asia","path":"india/tamil-nadu/tindivanam","depth":3,"parent":"india/tamil-nadu","children":["kaveripakkam","tirumailapuram"]});
export const childModules = Object.freeze({"kaveripakkam":"./kaveripakkam/kaveripakkam.js","tirumailapuram":"./tirumailapuram/tirumailapuram.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
