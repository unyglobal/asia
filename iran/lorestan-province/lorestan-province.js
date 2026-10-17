// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lorestan-province","repository":"asia","path":"iran/lorestan-province","depth":2,"parent":"iran","children":["aleshtar","aligudarz","borujerd","dorud","khorramabad","kuhdasht","poldokhtar"]});
export const childModules = Object.freeze({"aleshtar":"./aleshtar/aleshtar.js","aligudarz":"./aligudarz/aligudarz.js","borujerd":"./borujerd/borujerd.js","dorud":"./dorud/dorud.js","khorramabad":"./khorramabad/khorramabad.js","kuhdasht":"./kuhdasht/kuhdasht.js","poldokhtar":"./poldokhtar/poldokhtar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
