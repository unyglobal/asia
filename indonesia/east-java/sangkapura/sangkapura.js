// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sangkapura","repository":"asia","path":"indonesia/east-java/sangkapura","depth":3,"parent":"indonesia/east-java","children":["sawahlaut"]});
export const childModules = Object.freeze({"sawahlaut":"./sawahlaut/sawahlaut.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
