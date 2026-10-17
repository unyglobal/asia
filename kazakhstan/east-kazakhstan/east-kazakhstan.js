// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-kazakhstan","repository":"asia","path":"kazakhstan/east-kazakhstan","depth":2,"parent":"kazakhstan","children":["altay","ridder","shemonaikha","ust-kamenogorsk","zaysan"]});
export const childModules = Object.freeze({"altay":"./altay/altay.js","ridder":"./ridder/ridder.js","shemonaikha":"./shemonaikha/shemonaikha.js","ust-kamenogorsk":"./ust-kamenogorsk/ust-kamenogorsk.js","zaysan":"./zaysan/zaysan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
