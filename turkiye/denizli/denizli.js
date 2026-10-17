// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"denizli","repository":"asia","path":"turkiye/denizli","depth":2,"parent":"turkiye","children":["merkezefendi","saraykoy","serinhisar"]});
export const childModules = Object.freeze({"merkezefendi":"./merkezefendi/merkezefendi.js","saraykoy":"./saraykoy/saraykoy.js","serinhisar":"./serinhisar/serinhisar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
