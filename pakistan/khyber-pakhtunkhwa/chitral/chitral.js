// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chitral","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/chitral","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["harran-kot","muldeh","noghor","zargaran-deh"]});
export const childModules = Object.freeze({"harran-kot":"./harran-kot/harran-kot.js","muldeh":"./muldeh/muldeh.js","noghor":"./noghor/noghor.js","zargaran-deh":"./zargaran-deh/zargaran-deh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
