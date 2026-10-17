// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nepal","repository":"asia","path":"nepal","depth":1,"parent":"","children":["bagmati-province","gandaki-pradesh","karnali-pradesh","koshi","lumbini-province","madhesh","panauti","panauti-a","sudurpashchim-pradesh"]});
export const childModules = Object.freeze({"bagmati-province":"./bagmati-province/bagmati-province.js","gandaki-pradesh":"./gandaki-pradesh/gandaki-pradesh.js","karnali-pradesh":"./karnali-pradesh/karnali-pradesh.js","koshi":"./koshi/koshi.js","lumbini-province":"./lumbini-province/lumbini-province.js","madhesh":"./madhesh/madhesh.js","panauti":"./panauti/panauti.js","panauti-a":"./panauti-a/panauti-a.js","sudurpashchim-pradesh":"./sudurpashchim-pradesh/sudurpashchim-pradesh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
