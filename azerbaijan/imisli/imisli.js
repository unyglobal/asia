// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imisli","repository":"asia","path":"azerbaijan/imisli","depth":2,"parent":"azerbaijan","children":["imishli"]});
export const childModules = Object.freeze({"imishli":"./imishli/imishli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
