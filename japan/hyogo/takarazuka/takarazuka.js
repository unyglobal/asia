// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takarazuka","repository":"asia","path":"japan/hyogo/takarazuka","depth":3,"parent":"japan/hyogo","children":["minamiguchi","miza","nakasu","sakasegawa"]});
export const childModules = Object.freeze({"minamiguchi":"./minamiguchi/minamiguchi.js","miza":"./miza/miza.js","nakasu":"./nakasu/nakasu.js","sakasegawa":"./sakasegawa/sakasegawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
