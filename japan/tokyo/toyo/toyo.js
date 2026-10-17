// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toyo","repository":"asia","path":"japan/tokyo/toyo","depth":3,"parent":"japan/tokyo","children":["fukagawa-hiraicho","fukagawa-kazakicho","fukagawa-shiozakicho","fukagawa-susakibentencho","kiba"]});
export const childModules = Object.freeze({"fukagawa-hiraicho":"./fukagawa-hiraicho/fukagawa-hiraicho.js","fukagawa-kazakicho":"./fukagawa-kazakicho/fukagawa-kazakicho.js","fukagawa-shiozakicho":"./fukagawa-shiozakicho/fukagawa-shiozakicho.js","fukagawa-susakibentencho":"./fukagawa-susakibentencho/fukagawa-susakibentencho.js","kiba":"./kiba/kiba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
