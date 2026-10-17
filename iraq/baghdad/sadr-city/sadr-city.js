// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sadr-city","repository":"asia","path":"iraq/baghdad/sadr-city","depth":3,"parent":"iraq/baghdad","children":["madinat-as-sadr","sector-22","sector-23","sector-24","sector-25","sector-28","sector-29","sector-30","sector-31","sector-32","sector-34","sector-40","sector-41","sector-42","sector-43"]});
export const childModules = Object.freeze({"madinat-as-sadr":"./madinat-as-sadr/madinat-as-sadr.js","sector-22":"./sector-22/sector-22.js","sector-23":"./sector-23/sector-23.js","sector-24":"./sector-24/sector-24.js","sector-25":"./sector-25/sector-25.js","sector-28":"./sector-28/sector-28.js","sector-29":"./sector-29/sector-29.js","sector-30":"./sector-30/sector-30.js","sector-31":"./sector-31/sector-31.js","sector-32":"./sector-32/sector-32.js","sector-34":"./sector-34/sector-34.js","sector-40":"./sector-40/sector-40.js","sector-41":"./sector-41/sector-41.js","sector-42":"./sector-42/sector-42.js","sector-43":"./sector-43/sector-43.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
