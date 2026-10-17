// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quang-ninh","repository":"asia","path":"vietnam/quang-ninh","depth":2,"parent":"vietnam","children":["cam-pha","cam-pha-mines","ha-long","mong-cai","thanh-pho-uong-bi","thi-tran-am-ha","thi-tran-ba-che","thi-tran-mao-khe","thi-tran-ong-trieu","thi-tran-tien-yen"]});
export const childModules = Object.freeze({"cam-pha":"./cam-pha/cam-pha.js","cam-pha-mines":"./cam-pha-mines/cam-pha-mines.js","ha-long":"./ha-long/ha-long.js","mong-cai":"./mong-cai/mong-cai.js","thanh-pho-uong-bi":"./thanh-pho-uong-bi/thanh-pho-uong-bi.js","thi-tran-am-ha":"./thi-tran-am-ha/thi-tran-am-ha.js","thi-tran-ba-che":"./thi-tran-ba-che/thi-tran-ba-che.js","thi-tran-mao-khe":"./thi-tran-mao-khe/thi-tran-mao-khe.js","thi-tran-ong-trieu":"./thi-tran-ong-trieu/thi-tran-ong-trieu.js","thi-tran-tien-yen":"./thi-tran-tien-yen/thi-tran-tien-yen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
