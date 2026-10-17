// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gangwon-do","repository":"asia","path":"south-korea/gangwon-do","depth":2,"parent":"south-korea","children":["cheorwon","chuncheon","donghae-city","gangneung","hongch-on","hwacheon","jumunjin","kosong","neietsu","santyoku","sokcho","t-aebaek","wonju","yanggu"]});
export const childModules = Object.freeze({"cheorwon":"./cheorwon/cheorwon.js","chuncheon":"./chuncheon/chuncheon.js","donghae-city":"./donghae-city/donghae-city.js","gangneung":"./gangneung/gangneung.js","hongch-on":"./hongch-on/hongch-on.js","hwacheon":"./hwacheon/hwacheon.js","jumunjin":"./jumunjin/jumunjin.js","kosong":"./kosong/kosong.js","neietsu":"./neietsu/neietsu.js","santyoku":"./santyoku/santyoku.js","sokcho":"./sokcho/sokcho.js","t-aebaek":"./t-aebaek/t-aebaek.js","wonju":"./wonju/wonju.js","yanggu":"./yanggu/yanggu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
