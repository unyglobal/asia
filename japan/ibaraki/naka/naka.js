// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naka","repository":"asia","path":"japan/ibaraki/naka","depth":3,"parent":"japan/ibaraki","children":["nakamurahigashi","nakamuraminami","nishineminami"]});
export const childModules = Object.freeze({"nakamurahigashi":"./nakamurahigashi/nakamurahigashi.js","nakamuraminami":"./nakamuraminami/nakamuraminami.js","nishineminami":"./nishineminami/nishineminami.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
