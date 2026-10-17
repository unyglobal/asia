// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hadera","repository":"asia","path":"israel/haifa/hadera","depth":3,"parent":"israel/haifa","children":["neve-hayyim","shkhunat-weizmann"]});
export const childModules = Object.freeze({"neve-hayyim":"./neve-hayyim/neve-hayyim.js","shkhunat-weizmann":"./shkhunat-weizmann/shkhunat-weizmann.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
