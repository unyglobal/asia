// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nineveh","repository":"asia","path":"iraq/nineveh","depth":2,"parent":"iraq","children":["akra","al-hamdaniya","al-mawsil-al-jadidah","aqrah","mosul","sinjar","tallkayf"]});
export const childModules = Object.freeze({"akra":"./akra/akra.js","al-hamdaniya":"./al-hamdaniya/al-hamdaniya.js","al-mawsil-al-jadidah":"./al-mawsil-al-jadidah/al-mawsil-al-jadidah.js","aqrah":"./aqrah/aqrah.js","mosul":"./mosul/mosul.js","sinjar":"./sinjar/sinjar.js","tallkayf":"./tallkayf/tallkayf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
