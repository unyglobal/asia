// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fukuyama","repository":"asia","path":"japan/hiroshima/fukuyama","depth":3,"parent":"japan/hiroshima","children":["hanazonocho","higashimachi","irifunecho","konancho","matsuhamacho","mifunecho","mikadocho","shiromicho"]});
export const childModules = Object.freeze({"hanazonocho":"./hanazonocho/hanazonocho.js","higashimachi":"./higashimachi/higashimachi.js","irifunecho":"./irifunecho/irifunecho.js","konancho":"./konancho/konancho.js","matsuhamacho":"./matsuhamacho/matsuhamacho.js","mifunecho":"./mifunecho/mifunecho.js","mikadocho":"./mikadocho/mikadocho.js","shiromicho":"./shiromicho/shiromicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
