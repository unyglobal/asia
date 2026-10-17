// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taipei","repository":"asia","path":"taiwan/taiwan/taipei","depth":3,"parent":"taiwan/taiwan","children":["banqiao","danshui","new-taipei-city","sanxia","sanzhi","shulin"]});
export const childModules = Object.freeze({"banqiao":"./banqiao/banqiao.js","danshui":"./danshui/danshui.js","new-taipei-city":"./new-taipei-city/new-taipei-city.js","sanxia":"./sanxia/sanxia.js","sanzhi":"./sanzhi/sanzhi.js","shulin":"./shulin/shulin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
