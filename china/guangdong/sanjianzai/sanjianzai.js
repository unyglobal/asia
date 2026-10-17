// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanjianzai","repository":"asia","path":"china/guangdong/sanjianzai","depth":3,"parent":"china/guangdong","children":["minzhucun"]});
export const childModules = Object.freeze({"minzhucun":"./minzhucun/minzhucun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
