// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"antalya","repository":"asia","path":"turkiye/antalya","depth":2,"parent":"turkiye","children":["alanya","belek","beykonak","cikcilli","elmal","gazipasa","kemer","konakl","korkuteli","mahmutlar","manavgat","muratpasa","oba","serik"]});
export const childModules = Object.freeze({"alanya":"./alanya/alanya.js","belek":"./belek/belek.js","beykonak":"./beykonak/beykonak.js","cikcilli":"./cikcilli/cikcilli.js","elmal":"./elmal/elmal.js","gazipasa":"./gazipasa/gazipasa.js","kemer":"./kemer/kemer.js","konakl":"./konakl/konakl.js","korkuteli":"./korkuteli/korkuteli.js","mahmutlar":"./mahmutlar/mahmutlar.js","manavgat":"./manavgat/manavgat.js","muratpasa":"./muratpasa/muratpasa.js","oba":"./oba/oba.js","serik":"./serik/serik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
