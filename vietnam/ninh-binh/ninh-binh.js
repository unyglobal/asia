// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ninh-binh","repository":"asia","path":"vietnam/ninh-binh","depth":2,"parent":"vietnam","children":["hoa-lu","nam-inh","phu-ly"]});
export const childModules = Object.freeze({"hoa-lu":"./hoa-lu/hoa-lu.js","nam-inh":"./nam-inh/nam-inh.js","phu-ly":"./phu-ly/phu-ly.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
