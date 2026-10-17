// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mansehra","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/mansehra","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["channar","dab-number-two"]});
export const childModules = Object.freeze({"channar":"./channar/channar.js","dab-number-two":"./dab-number-two/dab-number-two.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
