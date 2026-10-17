// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adiyaman-province","repository":"asia","path":"turkiye/adiyaman-province","depth":2,"parent":"turkiye","children":["ad-yaman","alt-nsehir","besni","kahta"]});
export const childModules = Object.freeze({"ad-yaman":"./ad-yaman/ad-yaman.js","alt-nsehir":"./alt-nsehir/alt-nsehir.js","besni":"./besni/besni.js","kahta":"./kahta/kahta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
