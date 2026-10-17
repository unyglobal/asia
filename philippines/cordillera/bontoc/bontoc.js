// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bontoc","repository":"asia","path":"philippines/cordillera/bontoc","depth":3,"parent":"philippines/cordillera","children":["caluttit","omfeg","samoki"]});
export const childModules = Object.freeze({"caluttit":"./caluttit/caluttit.js","omfeg":"./omfeg/omfeg.js","samoki":"./samoki/samoki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
