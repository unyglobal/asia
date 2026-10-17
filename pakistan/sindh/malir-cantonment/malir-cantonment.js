// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malir-cantonment","repository":"asia","path":"pakistan/sindh/malir-cantonment","depth":3,"parent":"pakistan/sindh","children":["abbottabad-lines","comilla-lines","dacca-lines","jhelum-lines","multan-lines","quetta-lines","ziarat-lines"]});
export const childModules = Object.freeze({"abbottabad-lines":"./abbottabad-lines/abbottabad-lines.js","comilla-lines":"./comilla-lines/comilla-lines.js","dacca-lines":"./dacca-lines/dacca-lines.js","jhelum-lines":"./jhelum-lines/jhelum-lines.js","multan-lines":"./multan-lines/multan-lines.js","quetta-lines":"./quetta-lines/quetta-lines.js","ziarat-lines":"./ziarat-lines/ziarat-lines.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
