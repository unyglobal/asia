// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bao-an-centre","repository":"asia","path":"china/guangdong/bao-an-centre","depth":3,"parent":"china/guangdong","children":["shangzi"]});
export const childModules = Object.freeze({"shangzi":"./shangzi/shangzi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
