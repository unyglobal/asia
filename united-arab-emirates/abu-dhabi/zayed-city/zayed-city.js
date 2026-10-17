// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zayed-city","repository":"asia","path":"united-arab-emirates/abu-dhabi/zayed-city","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":["mze1-01","mze1-02","mze1-04","mze1-05","mze6","mzw11","mzw2"]});
export const childModules = Object.freeze({"mze1-01":"./mze1-01/mze1-01.js","mze1-02":"./mze1-02/mze1-02.js","mze1-04":"./mze1-04/mze1-04.js","mze1-05":"./mze1-05/mze1-05.js","mze6":"./mze6/mze6.js","mzw11":"./mzw11/mzw11.js","mzw2":"./mzw2/mzw2.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
