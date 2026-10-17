// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keelung","repository":"asia","path":"taiwan/taiwan/keelung","depth":3,"parent":"taiwan/taiwan","children":["shaochuantou","tianliaogang"]});
export const childModules = Object.freeze({"shaochuantou":"./shaochuantou/shaochuantou.js","tianliaogang":"./tianliaogang/tianliaogang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
