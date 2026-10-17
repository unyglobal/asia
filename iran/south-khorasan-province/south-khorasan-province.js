// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-khorasan-province","repository":"asia","path":"iran/south-khorasan-province","depth":2,"parent":"iran","children":["birjand","boshruyeh","ferdows","nehbandan","qa-en"]});
export const childModules = Object.freeze({"birjand":"./birjand/birjand.js","boshruyeh":"./boshruyeh/boshruyeh.js","ferdows":"./ferdows/ferdows.js","nehbandan":"./nehbandan/nehbandan.js","qa-en":"./qa-en/qa-en.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
