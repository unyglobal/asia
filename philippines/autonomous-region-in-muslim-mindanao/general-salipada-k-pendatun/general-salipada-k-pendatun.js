// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"general-salipada-k-pendatun","repository":"asia","path":"philippines/autonomous-region-in-muslim-mindanao/general-salipada-k-pendatun","depth":3,"parent":"philippines/autonomous-region-in-muslim-mindanao","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
