// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"issyk-kul","repository":"asia","path":"kyrgyzstan/issyk-kul","depth":2,"parent":"kyrgyzstan","children":["balykchy","karakol","kyzyl-suu"]});
export const childModules = Object.freeze({"balykchy":"./balykchy/balykchy.js","karakol":"./karakol/karakol.js","kyzyl-suu":"./kyzyl-suu/kyzyl-suu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
