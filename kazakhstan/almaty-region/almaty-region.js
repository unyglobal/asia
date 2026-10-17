// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"almaty-region","repository":"asia","path":"kazakhstan/almaty-region","depth":2,"parent":"kazakhstan","children":["burunday","esik","konayev","otegen-batyra","shelek","talghar"]});
export const childModules = Object.freeze({"burunday":"./burunday/burunday.js","esik":"./esik/esik.js","konayev":"./konayev/konayev.js","otegen-batyra":"./otegen-batyra/otegen-batyra.js","shelek":"./shelek/shelek.js","talghar":"./talghar/talghar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
