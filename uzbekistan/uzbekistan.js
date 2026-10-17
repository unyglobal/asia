// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uzbekistan","repository":"asia","path":"uzbekistan","depth":1,"parent":"","children":["andijan-region","bukhara","fergana","jizzakh-region","karakalpakstan","namangan","navoiy-region","qashqadaryo","samarqand-region","sirdaryo-region","surxondaryo-region","tashkent","tashkent-region","xorazm-region"]});
export const childModules = Object.freeze({"andijan-region":"./andijan-region/andijan-region.js","bukhara":"./bukhara/bukhara.js","fergana":"./fergana/fergana.js","jizzakh-region":"./jizzakh-region/jizzakh-region.js","karakalpakstan":"./karakalpakstan/karakalpakstan.js","namangan":"./namangan/namangan.js","navoiy-region":"./navoiy-region/navoiy-region.js","qashqadaryo":"./qashqadaryo/qashqadaryo.js","samarqand-region":"./samarqand-region/samarqand-region.js","sirdaryo-region":"./sirdaryo-region/sirdaryo-region.js","surxondaryo-region":"./surxondaryo-region/surxondaryo-region.js","tashkent":"./tashkent/tashkent.js","tashkent-region":"./tashkent-region/tashkent-region.js","xorazm-region":"./xorazm-region/xorazm-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
