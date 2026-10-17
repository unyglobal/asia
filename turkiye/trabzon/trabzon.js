// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trabzon","repository":"asia","path":"turkiye/trabzon","depth":2,"parent":"turkiye","children":["akcaabat","arakl","arsin","besikduzu","of","surmene","vakf-kebir","yomra"]});
export const childModules = Object.freeze({"akcaabat":"./akcaabat/akcaabat.js","arakl":"./arakl/arakl.js","arsin":"./arsin/arsin.js","besikduzu":"./besikduzu/besikduzu.js","of":"./of/of.js","surmene":"./surmene/surmene.js","vakf-kebir":"./vakf-kebir/vakf-kebir.js","yomra":"./yomra/yomra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
