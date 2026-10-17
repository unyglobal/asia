// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takhar","repository":"asia","path":"afghanistan/takhar","depth":2,"parent":"afghanistan","children":["art-khwajah","rustaq","taloqan"]});
export const childModules = Object.freeze({"art-khwajah":"./art-khwajah/art-khwajah.js","rustaq":"./rustaq/rustaq.js","taloqan":"./taloqan/taloqan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
