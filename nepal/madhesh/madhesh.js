// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"madhesh","repository":"asia","path":"nepal/madhesh","depth":2,"parent":"nepal","children":["birganj","gaur","jaleshwar","janakpur","lahan","malangawa","rajbiraj","siraha"]});
export const childModules = Object.freeze({"birganj":"./birganj/birganj.js","gaur":"./gaur/gaur.js","jaleshwar":"./jaleshwar/jaleshwar.js","janakpur":"./janakpur/janakpur.js","lahan":"./lahan/lahan.js","malangawa":"./malangawa/malangawa.js","rajbiraj":"./rajbiraj/rajbiraj.js","siraha":"./siraha/siraha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
