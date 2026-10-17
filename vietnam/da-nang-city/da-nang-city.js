// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"da-nang-city","repository":"asia","path":"vietnam/da-nang-city","depth":2,"parent":"vietnam","children":["ai-loc","an-hai","ba-na","cam-le","da-nang","hai-chau","hoa-cuong","hoi-an","ien-ban","nui-thanh","ong-phu","son-tra","tam-ky","thanh-khe"]});
export const childModules = Object.freeze({"ai-loc":"./ai-loc/ai-loc.js","an-hai":"./an-hai/an-hai.js","ba-na":"./ba-na/ba-na.js","cam-le":"./cam-le/cam-le.js","da-nang":"./da-nang/da-nang.js","hai-chau":"./hai-chau/hai-chau.js","hoa-cuong":"./hoa-cuong/hoa-cuong.js","hoi-an":"./hoi-an/hoi-an.js","ien-ban":"./ien-ban/ien-ban.js","nui-thanh":"./nui-thanh/nui-thanh.js","ong-phu":"./ong-phu/ong-phu.js","son-tra":"./son-tra/son-tra.js","tam-ky":"./tam-ky/tam-ky.js","thanh-khe":"./thanh-khe/thanh-khe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
