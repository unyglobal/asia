// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thua-thien-hue-province","repository":"asia","path":"vietnam/thua-thien-hue-province","depth":2,"parent":"vietnam","children":["hue","huong-thuy","huong-tra"]});
export const childModules = Object.freeze({"hue":"./hue/hue.js","huong-thuy":"./huong-thuy/huong-thuy.js","huong-tra":"./huong-tra/huong-tra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
