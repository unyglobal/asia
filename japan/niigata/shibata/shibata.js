// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shibata","repository":"asia","path":"japan/niigata/shibata","depth":3,"parent":"japan/niigata","children":["chuocho","daieicho","honcho","midoricho","otemachi","shintomicho","suwacho","yutakacho"]});
export const childModules = Object.freeze({"chuocho":"./chuocho/chuocho.js","daieicho":"./daieicho/daieicho.js","honcho":"./honcho/honcho.js","midoricho":"./midoricho/midoricho.js","otemachi":"./otemachi/otemachi.js","shintomicho":"./shintomicho/shintomicho.js","suwacho":"./suwacho/suwacho.js","yutakacho":"./yutakacho/yutakacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
