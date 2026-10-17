// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"murree","repository":"asia","path":"pakistan/punjab/murree","depth":3,"parent":"pakistan/punjab","children":["apula","shiwala","tahsn"]});
export const childModules = Object.freeze({"apula":"./apula/apula.js","shiwala":"./shiwala/shiwala.js","tahsn":"./tahsn/tahsn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
