// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hatay","repository":"asia","path":"turkiye/hatay","depth":2,"parent":"turkiye","children":["antakya","arsuz","belen","denizciler","dortyol","erzin","h-d-rbey","iskenderun","k-r-khan","narl-ca","reyhanl","samandag","serinyol"]});
export const childModules = Object.freeze({"antakya":"./antakya/antakya.js","arsuz":"./arsuz/arsuz.js","belen":"./belen/belen.js","denizciler":"./denizciler/denizciler.js","dortyol":"./dortyol/dortyol.js","erzin":"./erzin/erzin.js","h-d-rbey":"./h-d-rbey/h-d-rbey.js","iskenderun":"./iskenderun/iskenderun.js","k-r-khan":"./k-r-khan/k-r-khan.js","narl-ca":"./narl-ca/narl-ca.js","reyhanl":"./reyhanl/reyhanl.js","samandag":"./samandag/samandag.js","serinyol":"./serinyol/serinyol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
