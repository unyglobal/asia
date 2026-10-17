// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yylanly","repository":"asia","path":"turkmenistan/dasoguz/yylanly","depth":3,"parent":"turkmenistan/dasoguz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
