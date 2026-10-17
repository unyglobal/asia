// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marawi-city","repository":"asia","path":"philippines/autonomous-region-in-muslim-mindanao/marawi-city","depth":3,"parent":"philippines/autonomous-region-in-muslim-mindanao","children":["camp-keithley","new-marahui"]});
export const childModules = Object.freeze({"camp-keithley":"./camp-keithley/camp-keithley.js","new-marahui":"./new-marahui/new-marahui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
