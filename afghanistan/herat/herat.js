// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"herat","repository":"asia","path":"afghanistan/herat","depth":2,"parent":"afghanistan","children":["eslam-qaleh","karukh","kushk","shindand"]});
export const childModules = Object.freeze({"eslam-qaleh":"./eslam-qaleh/eslam-qaleh.js","karukh":"./karukh/karukh.js","kushk":"./kushk/kushk.js","shindand":"./shindand/shindand.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
