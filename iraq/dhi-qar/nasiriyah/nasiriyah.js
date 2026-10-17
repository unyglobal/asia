// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nasiriyah","repository":"asia","path":"iraq/dhi-qar/nasiriyah","depth":3,"parent":"iraq/dhi-qar","children":["as-salihiyah","sumir"]});
export const childModules = Object.freeze({"as-salihiyah":"./as-salihiyah/as-salihiyah.js","sumir":"./sumir/sumir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
