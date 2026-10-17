// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kostanay","repository":"asia","path":"kazakhstan/kostanay","depth":2,"parent":"kazakhstan","children":["arkalyk","lisakovsk","rudnyy","zhitikara"]});
export const childModules = Object.freeze({"arkalyk":"./arkalyk/arkalyk.js","lisakovsk":"./lisakovsk/lisakovsk.js","rudnyy":"./rudnyy/rudnyy.js","zhitikara":"./zhitikara/zhitikara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
