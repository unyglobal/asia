// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pavlodar-region","repository":"asia","path":"kazakhstan/pavlodar-region","depth":2,"parent":"kazakhstan","children":["ekibastuz","pavlodar"]});
export const childModules = Object.freeze({"ekibastuz":"./ekibastuz/ekibastuz.js","pavlodar":"./pavlodar/pavlodar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
