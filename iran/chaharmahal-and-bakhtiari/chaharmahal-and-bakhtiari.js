// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chaharmahal-and-bakhtiari","repository":"asia","path":"iran/chaharmahal-and-bakhtiari","depth":2,"parent":"iran","children":["borujen","farrokh-shahr","farsan","hafshejan","lordegan","shahr-e-kord"]});
export const childModules = Object.freeze({"borujen":"./borujen/borujen.js","farrokh-shahr":"./farrokh-shahr/farrokh-shahr.js","farsan":"./farsan/farsan.js","hafshejan":"./hafshejan/hafshejan.js","lordegan":"./lordegan/lordegan.js","shahr-e-kord":"./shahr-e-kord/shahr-e-kord.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
