// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beruwala","repository":"asia","path":"sri-lanka/western-province/beruwala","depth":3,"parent":"sri-lanka/western-province","children":["andigoda","deenagoda","katukurunda","massalgoda","polkotuwa","walawatta"]});
export const childModules = Object.freeze({"andigoda":"./andigoda/andigoda.js","deenagoda":"./deenagoda/deenagoda.js","katukurunda":"./katukurunda/katukurunda.js","massalgoda":"./massalgoda/massalgoda.js","polkotuwa":"./polkotuwa/polkotuwa.js","walawatta":"./walawatta/walawatta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
