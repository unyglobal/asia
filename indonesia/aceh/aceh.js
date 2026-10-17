// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aceh","repository":"asia","path":"indonesia/aceh","depth":2,"parent":"indonesia","children":["banda-aceh","bireun","blangpidie","langsa","lhokseumawe","meulaboh","reuleuet","sabang","sigli","singkil","subulussalam"]});
export const childModules = Object.freeze({"banda-aceh":"./banda-aceh/banda-aceh.js","bireun":"./bireun/bireun.js","blangpidie":"./blangpidie/blangpidie.js","langsa":"./langsa/langsa.js","lhokseumawe":"./lhokseumawe/lhokseumawe.js","meulaboh":"./meulaboh/meulaboh.js","reuleuet":"./reuleuet/reuleuet.js","sabang":"./sabang/sabang.js","sigli":"./sigli/sigli.js","singkil":"./singkil/singkil.js","subulussalam":"./subulussalam/subulussalam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
