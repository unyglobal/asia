// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niitsu-honcho","repository":"asia","path":"japan/niigata/niitsu-honcho","depth":3,"parent":"japan/niigata","children":["niitsu","shimmachi","yamayacho","zendocho"]});
export const childModules = Object.freeze({"niitsu":"./niitsu/niitsu.js","shimmachi":"./shimmachi/shimmachi.js","yamayacho":"./yamayacho/yamayacho.js","zendocho":"./zendocho/zendocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
