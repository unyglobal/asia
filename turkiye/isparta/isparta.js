// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"isparta","repository":"asia","path":"turkiye/isparta","depth":2,"parent":"turkiye","children":["egirdir","sarkikaraagac","senirkent","yalvac"]});
export const childModules = Object.freeze({"egirdir":"./egirdir/egirdir.js","sarkikaraagac":"./sarkikaraagac/sarkikaraagac.js","senirkent":"./senirkent/senirkent.js","yalvac":"./yalvac/yalvac.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
