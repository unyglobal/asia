// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shadegan","repository":"asia","path":"iran/khuzestan/shadegan","depth":3,"parent":"iran/khuzestan","children":["abudi"]});
export const childModules = Object.freeze({"abudi":"./abudi/abudi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
