// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itami","repository":"asia","path":"japan/hyogo/itami","depth":3,"parent":"japan/hyogo","children":["funahara","koyahigashi","koyaizumicho","koyakita","sakuragaoka"]});
export const childModules = Object.freeze({"funahara":"./funahara/funahara.js","koyahigashi":"./koyahigashi/koyahigashi.js","koyaizumicho":"./koyaizumicho/koyaizumicho.js","koyakita":"./koyakita/koyakita.js","sakuragaoka":"./sakuragaoka/sakuragaoka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
