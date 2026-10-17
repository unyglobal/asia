// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jiangxi","repository":"asia","path":"china/jiangxi","depth":2,"parent":"china","children":["jinfeng","jingdezhen","jiujiang","nanchang","pengze","poyang","qincheng","shangrao","xinyu","xiugu","xujiang","yingtan"]});
export const childModules = Object.freeze({"jinfeng":"./jinfeng/jinfeng.js","jingdezhen":"./jingdezhen/jingdezhen.js","jiujiang":"./jiujiang/jiujiang.js","nanchang":"./nanchang/nanchang.js","pengze":"./pengze/pengze.js","poyang":"./poyang/poyang.js","qincheng":"./qincheng/qincheng.js","shangrao":"./shangrao/shangrao.js","xinyu":"./xinyu/xinyu.js","xiugu":"./xiugu/xiugu.js","xujiang":"./xujiang/xujiang.js","yingtan":"./yingtan/yingtan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
