// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chichibu","repository":"asia","path":"japan/saitama/chichibu","depth":3,"parent":"japan/saitama","children":["hinodamachi","kamimachi","nakamuramachi","nosakamachi"]});
export const childModules = Object.freeze({"hinodamachi":"./hinodamachi/hinodamachi.js","kamimachi":"./kamimachi/kamimachi.js","nakamuramachi":"./nakamuramachi/nakamuramachi.js","nosakamachi":"./nosakamachi/nosakamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
