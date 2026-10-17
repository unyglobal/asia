// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jolo","repository":"asia","path":"philippines/autonomous-region-in-muslim-mindanao/jolo","depth":3,"parent":"philippines/autonomous-region-in-muslim-mindanao","children":["intramuros","laud","tulay"]});
export const childModules = Object.freeze({"intramuros":"./intramuros/intramuros.js","laud":"./laud/laud.js","tulay":"./tulay/tulay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
