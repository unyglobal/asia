// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"na-in","repository":"asia","path":"iran/isfahan/na-in","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-chehel-dokhtaran"]});
export const childModules = Object.freeze({"mahalleh-ye-chehel-dokhtaran":"./mahalleh-ye-chehel-dokhtaran/mahalleh-ye-chehel-dokhtaran.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
