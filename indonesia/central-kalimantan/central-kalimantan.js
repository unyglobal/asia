// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-kalimantan","repository":"asia","path":"indonesia/central-kalimantan","depth":2,"parent":"indonesia","children":["kualakapuas","muara-teweh","palangkaraya","pangkalanbuun","sampit"]});
export const childModules = Object.freeze({"kualakapuas":"./kualakapuas/kualakapuas.js","muara-teweh":"./muara-teweh/muara-teweh.js","palangkaraya":"./palangkaraya/palangkaraya.js","pangkalanbuun":"./pangkalanbuun/pangkalanbuun.js","sampit":"./sampit/sampit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
