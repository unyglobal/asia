// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-hwanghae","repository":"asia","path":"north-korea/north-hwanghae","depth":2,"parent":"north-korea","children":["anak","hukkyo-ri","hwangju-up","sariwon-si","sinmak","songnim-ni"]});
export const childModules = Object.freeze({"anak":"./anak/anak.js","hukkyo-ri":"./hukkyo-ri/hukkyo-ri.js","hwangju-up":"./hwangju-up/hwangju-up.js","sariwon-si":"./sariwon-si/sariwon-si.js","sinmak":"./sinmak/sinmak.js","songnim-ni":"./songnim-ni/songnim-ni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
