// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"robertsonpet","repository":"asia","path":"india/karnataka/robertsonpet","depth":3,"parent":"india/karnataka","children":["nachakapalli","sonnakoppa"]});
export const childModules = Object.freeze({"nachakapalli":"./nachakapalli/nachakapalli.js","sonnakoppa":"./sonnakoppa/sonnakoppa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
