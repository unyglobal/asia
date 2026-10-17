// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chaozhou","repository":"asia","path":"taiwan/taiwan/chaozhou","depth":3,"parent":"taiwan/taiwan","children":["beishitou","datie","neizhuang"]});
export const childModules = Object.freeze({"beishitou":"./beishitou/beishitou.js","datie":"./datie/datie.js","neizhuang":"./neizhuang/neizhuang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
