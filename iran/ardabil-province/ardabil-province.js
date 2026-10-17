// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ardabil-province","repository":"asia","path":"iran/ardabil-province","depth":2,"parent":"iran","children":["ardabil","germi","khalkhal","meshgin-shahr","parsabad"]});
export const childModules = Object.freeze({"ardabil":"./ardabil/ardabil.js","germi":"./germi/germi.js","khalkhal":"./khalkhal/khalkhal.js","meshgin-shahr":"./meshgin-shahr/meshgin-shahr.js","parsabad":"./parsabad/parsabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
