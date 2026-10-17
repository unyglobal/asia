// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guemueshane-province","repository":"asia","path":"turkiye/guemueshane-province","depth":2,"parent":"turkiye","children":["gumushane","kelkit"]});
export const childModules = Object.freeze({"gumushane":"./gumushane/gumushane.js","kelkit":"./kelkit/kelkit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
