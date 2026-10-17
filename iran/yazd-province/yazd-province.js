// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yazd-province","repository":"asia","path":"iran/yazd-province","depth":2,"parent":"iran","children":["abarkuh","ardakan","ashkezar","bafq","mahriz","meybod","tabas","taft","yazd"]});
export const childModules = Object.freeze({"abarkuh":"./abarkuh/abarkuh.js","ardakan":"./ardakan/ardakan.js","ashkezar":"./ashkezar/ashkezar.js","bafq":"./bafq/bafq.js","mahriz":"./mahriz/mahriz.js","meybod":"./meybod/meybod.js","tabas":"./tabas/tabas.js","taft":"./taft/taft.js","yazd":"./yazd/yazd.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
