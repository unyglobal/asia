// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jeju-do","repository":"asia","path":"south-korea/jeju-do","depth":2,"parent":"south-korea","children":["ara-dong","gaigeturi","ido-dong","jeju-city","ora-dong","seodong","seogwipo","tallang-dong"]});
export const childModules = Object.freeze({"ara-dong":"./ara-dong/ara-dong.js","gaigeturi":"./gaigeturi/gaigeturi.js","ido-dong":"./ido-dong/ido-dong.js","jeju-city":"./jeju-city/jeju-city.js","ora-dong":"./ora-dong/ora-dong.js","seodong":"./seodong/seodong.js","seogwipo":"./seogwipo/seogwipo.js","tallang-dong":"./tallang-dong/tallang-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
