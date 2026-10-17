// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"osh-region","repository":"asia","path":"kyrgyzstan/osh-region","depth":2,"parent":"kyrgyzstan","children":["kara-kulja","kara-suu","nookat","osh","uzgen"]});
export const childModules = Object.freeze({"kara-kulja":"./kara-kulja/kara-kulja.js","kara-suu":"./kara-suu/kara-suu.js","nookat":"./nookat/nookat.js","osh":"./osh/osh.js","uzgen":"./uzgen/uzgen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
