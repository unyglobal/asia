// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"giridih","repository":"asia","path":"india/jharkhand/giridih","depth":3,"parent":"india/jharkhand","children":["baramasia","makatpur"]});
export const childModules = Object.freeze({"baramasia":"./baramasia/baramasia.js","makatpur":"./makatpur/makatpur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
