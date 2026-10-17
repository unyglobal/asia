// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"igdir","repository":"asia","path":"turkiye/igdir","depth":2,"parent":"turkiye","children":["baglar-mahallesi","igd-r"]});
export const childModules = Object.freeze({"baglar-mahallesi":"./baglar-mahallesi/baglar-mahallesi.js","igd-r":"./igd-r/igd-r.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
