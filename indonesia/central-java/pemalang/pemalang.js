// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pemalang","repository":"asia","path":"indonesia/central-java/pemalang","depth":3,"parent":"indonesia/central-java","children":["cokrah","jetis","kademangan-wetan","kebondalem-dua","kebondalem-empat","kebondalem-lima","kebondalem-tiga","ketandan","pakuncen-timur","pakuncenpoyahan","payaman","pegantungan","pelutan-barat","pelutan-timur"]});
export const childModules = Object.freeze({"cokrah":"./cokrah/cokrah.js","jetis":"./jetis/jetis.js","kademangan-wetan":"./kademangan-wetan/kademangan-wetan.js","kebondalem-dua":"./kebondalem-dua/kebondalem-dua.js","kebondalem-empat":"./kebondalem-empat/kebondalem-empat.js","kebondalem-lima":"./kebondalem-lima/kebondalem-lima.js","kebondalem-tiga":"./kebondalem-tiga/kebondalem-tiga.js","ketandan":"./ketandan/ketandan.js","pakuncen-timur":"./pakuncen-timur/pakuncen-timur.js","pakuncenpoyahan":"./pakuncenpoyahan/pakuncenpoyahan.js","payaman":"./payaman/payaman.js","pegantungan":"./pegantungan/pegantungan.js","pelutan-barat":"./pelutan-barat/pelutan-barat.js","pelutan-timur":"./pelutan-timur/pelutan-timur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
