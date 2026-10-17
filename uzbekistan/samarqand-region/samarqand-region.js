// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samarqand-region","repository":"asia","path":"uzbekistan/samarqand-region","depth":2,"parent":"uzbekistan","children":["bulung-ur-shahri","chelak","juma-shahri","kattaqo-rg-on-shahri","oqtosh","payshamba-shahri","samarkand","urgut-shahri"]});
export const childModules = Object.freeze({"bulung-ur-shahri":"./bulung-ur-shahri/bulung-ur-shahri.js","chelak":"./chelak/chelak.js","juma-shahri":"./juma-shahri/juma-shahri.js","kattaqo-rg-on-shahri":"./kattaqo-rg-on-shahri/kattaqo-rg-on-shahri.js","oqtosh":"./oqtosh/oqtosh.js","payshamba-shahri":"./payshamba-shahri/payshamba-shahri.js","samarkand":"./samarkand/samarkand.js","urgut-shahri":"./urgut-shahri/urgut-shahri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
