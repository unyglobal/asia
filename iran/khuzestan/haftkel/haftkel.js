// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haftkel","repository":"asia","path":"iran/khuzestan/haftkel","depth":3,"parent":"iran/khuzestan","children":["eslamabad","kuy-e-hezbollah","kuy-e-shahid-bahonar","kuy-e-shahid-raja-i"]});
export const childModules = Object.freeze({"eslamabad":"./eslamabad/eslamabad.js","kuy-e-hezbollah":"./kuy-e-hezbollah/kuy-e-hezbollah.js","kuy-e-shahid-bahonar":"./kuy-e-shahid-bahonar/kuy-e-shahid-bahonar.js","kuy-e-shahid-raja-i":"./kuy-e-shahid-raja-i/kuy-e-shahid-raja-i.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
