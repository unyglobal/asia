// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zanjan","repository":"asia","path":"iran/zanjan","depth":2,"parent":"iran","children":["abhar","khorramdarreh","qidar"]});
export const childModules = Object.freeze({"abhar":"./abhar/abhar.js","khorramdarreh":"./khorramdarreh/khorramdarreh.js","qidar":"./qidar/qidar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
