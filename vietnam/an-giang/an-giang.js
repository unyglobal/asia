// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"an-giang","repository":"asia","path":"vietnam/an-giang","depth":2,"parent":"vietnam","children":["ap-long-thanh","chau-oc","chau-phong","co-to","ha-tien","ham-ninh","khanh-hoa","kien-hai","long-xuyen","nui-sap","oc-eo","rach-gia","tan-chau","tinh-bien","xom-cai-nuoc"]});
export const childModules = Object.freeze({"ap-long-thanh":"./ap-long-thanh/ap-long-thanh.js","chau-oc":"./chau-oc/chau-oc.js","chau-phong":"./chau-phong/chau-phong.js","co-to":"./co-to/co-to.js","ha-tien":"./ha-tien/ha-tien.js","ham-ninh":"./ham-ninh/ham-ninh.js","khanh-hoa":"./khanh-hoa/khanh-hoa.js","kien-hai":"./kien-hai/kien-hai.js","long-xuyen":"./long-xuyen/long-xuyen.js","nui-sap":"./nui-sap/nui-sap.js","oc-eo":"./oc-eo/oc-eo.js","rach-gia":"./rach-gia/rach-gia.js","tan-chau":"./tan-chau/tan-chau.js","tinh-bien":"./tinh-bien/tinh-bien.js","xom-cai-nuoc":"./xom-cai-nuoc/xom-cai-nuoc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
