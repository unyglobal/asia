// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"calamba","repository":"asia","path":"philippines/calabarzon/calamba","depth":3,"parent":"philippines/calabarzon","children":["borja-subdivision","chipeco-subdivision","dennis-first-subdivision","dennis-second-subdivision","hillside-subdivision","llamas-subdivision","villa-zenaida"]});
export const childModules = Object.freeze({"borja-subdivision":"./borja-subdivision/borja-subdivision.js","chipeco-subdivision":"./chipeco-subdivision/chipeco-subdivision.js","dennis-first-subdivision":"./dennis-first-subdivision/dennis-first-subdivision.js","dennis-second-subdivision":"./dennis-second-subdivision/dennis-second-subdivision.js","hillside-subdivision":"./hillside-subdivision/hillside-subdivision.js","llamas-subdivision":"./llamas-subdivision/llamas-subdivision.js","villa-zenaida":"./villa-zenaida/villa-zenaida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
