// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karnali-pradesh","repository":"asia","path":"nepal/karnali-pradesh","depth":2,"parent":"nepal","children":["birendranagar","dailekh"]});
export const childModules = Object.freeze({"birendranagar":"./birendranagar/birendranagar.js","dailekh":"./dailekh/dailekh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
