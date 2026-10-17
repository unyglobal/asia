// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sarat-abidah","repository":"asia","path":"saudi-arabia/asir-region/sarat-abidah","depth":3,"parent":"saudi-arabia/asir-region","children":["al-fahd","ar-rabwah"]});
export const childModules = Object.freeze({"al-fahd":"./al-fahd/al-fahd.js","ar-rabwah":"./ar-rabwah/ar-rabwah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
