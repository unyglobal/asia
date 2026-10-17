// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hyderabad","repository":"asia","path":"india/telangana/hyderabad","depth":3,"parent":"india/telangana","children":["bazarghat","dattadri-gutta"]});
export const childModules = Object.freeze({"bazarghat":"./bazarghat/bazarghat.js","dattadri-gutta":"./dattadri-gutta/dattadri-gutta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
