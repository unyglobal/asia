// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"higashinozoe","repository":"asia","path":"japan/hyogo/higashinozoe","depth":3,"parent":"japan/hyogo","children":["kaminozoe","kitanozoe","minaminozoe","nishinozoe"]});
export const childModules = Object.freeze({"kaminozoe":"./kaminozoe/kaminozoe.js","kitanozoe":"./kitanozoe/kitanozoe.js","minaminozoe":"./minaminozoe/minaminozoe.js","nishinozoe":"./nishinozoe/nishinozoe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
