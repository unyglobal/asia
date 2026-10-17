// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"otake","repository":"asia","path":"japan/hiroshima/otake","depth":3,"parent":"japan/hiroshima","children":["hommachi","minamisakae","shimmachi","shiraishi"]});
export const childModules = Object.freeze({"hommachi":"./hommachi/hommachi.js","minamisakae":"./minamisakae/minamisakae.js","shimmachi":"./shimmachi/shimmachi.js","shiraishi":"./shiraishi/shiraishi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
