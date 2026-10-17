// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-majaz","repository":"asia","path":"united-arab-emirates/sharjah/al-majaz","depth":3,"parent":"united-arab-emirates/sharjah","children":["king-faisal-square"]});
export const childModules = Object.freeze({"king-faisal-square":"./king-faisal-square/king-faisal-square.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
