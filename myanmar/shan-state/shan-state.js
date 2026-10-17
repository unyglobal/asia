// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shan-state","repository":"asia","path":"myanmar/shan-state","depth":2,"parent":"myanmar","children":["aungban","heho","hsipaw","kalaw","keng-tung","kutkai","kyaukme","lashio","laukkai","lawksawk","mong-la","mong-yang","mong-yawng","mu-se","namhkam","nansang","pangkham","panglong","pangtara","pekon","tachilek","tangyan","taunggyi","yawnghwe"]});
export const childModules = Object.freeze({"aungban":"./aungban/aungban.js","heho":"./heho/heho.js","hsipaw":"./hsipaw/hsipaw.js","kalaw":"./kalaw/kalaw.js","keng-tung":"./keng-tung/keng-tung.js","kutkai":"./kutkai/kutkai.js","kyaukme":"./kyaukme/kyaukme.js","lashio":"./lashio/lashio.js","laukkai":"./laukkai/laukkai.js","lawksawk":"./lawksawk/lawksawk.js","mong-la":"./mong-la/mong-la.js","mong-yang":"./mong-yang/mong-yang.js","mong-yawng":"./mong-yawng/mong-yawng.js","mu-se":"./mu-se/mu-se.js","namhkam":"./namhkam/namhkam.js","nansang":"./nansang/nansang.js","pangkham":"./pangkham/pangkham.js","panglong":"./panglong/panglong.js","pangtara":"./pangtara/pangtara.js","pekon":"./pekon/pekon.js","tachilek":"./tachilek/tachilek.js","tangyan":"./tangyan/tangyan.js","taunggyi":"./taunggyi/taunggyi.js","yawnghwe":"./yawnghwe/yawnghwe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
