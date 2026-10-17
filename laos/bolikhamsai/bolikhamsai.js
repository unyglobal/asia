// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bolikhamsai","repository":"asia","path":"laos/bolikhamsai","depth":2,"parent":"laos","children":["borikhan","pakxan"]});
export const childModules = Object.freeze({"borikhan":"./borikhan/borikhan.js","pakxan":"./pakxan/pakxan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
