// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canakkale","repository":"asia","path":"turkiye/canakkale","depth":2,"parent":"turkiye","children":["biga","can","ezine","gelibolu"]});
export const childModules = Object.freeze({"biga":"./biga/biga.js","can":"./can/can.js","ezine":"./ezine/ezine.js","gelibolu":"./gelibolu/gelibolu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
