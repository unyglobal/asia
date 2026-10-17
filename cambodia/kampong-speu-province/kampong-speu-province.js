// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kampong-speu-province","repository":"asia","path":"cambodia/kampong-speu-province","depth":2,"parent":"cambodia","children":["kampong-speu","phumi-veal-tonsay"]});
export const childModules = Object.freeze({"kampong-speu":"./kampong-speu/kampong-speu.js","phumi-veal-tonsay":"./phumi-veal-tonsay/phumi-veal-tonsay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
