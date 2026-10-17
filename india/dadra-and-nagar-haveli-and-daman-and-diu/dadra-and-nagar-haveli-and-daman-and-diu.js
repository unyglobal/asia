// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dadra-and-nagar-haveli-and-daman-and-diu","repository":"asia","path":"india/dadra-and-nagar-haveli-and-daman-and-diu","depth":2,"parent":"india","children":["amli","dabhel","daman","diu","khali-kachigam","nani-daman","naroli","silvassa"]});
export const childModules = Object.freeze({"amli":"./amli/amli.js","dabhel":"./dabhel/dabhel.js","daman":"./daman/daman.js","diu":"./diu/diu.js","khali-kachigam":"./khali-kachigam/khali-kachigam.js","nani-daman":"./nani-daman/nani-daman.js","naroli":"./naroli/naroli.js","silvassa":"./silvassa/silvassa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
