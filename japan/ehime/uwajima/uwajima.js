// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uwajima","repository":"asia","path":"japan/ehime/uwajima","depth":3,"parent":"japan/ehime","children":["asahimachi","bentencho","chuocho","ebisumachi","kotobukicho","marunochi","masugatacho","meirincho","miyukimachi","sakaemachiminato","shimmachi","sumiyoshicho","tsukijicho","wareimotomachi"]});
export const childModules = Object.freeze({"asahimachi":"./asahimachi/asahimachi.js","bentencho":"./bentencho/bentencho.js","chuocho":"./chuocho/chuocho.js","ebisumachi":"./ebisumachi/ebisumachi.js","kotobukicho":"./kotobukicho/kotobukicho.js","marunochi":"./marunochi/marunochi.js","masugatacho":"./masugatacho/masugatacho.js","meirincho":"./meirincho/meirincho.js","miyukimachi":"./miyukimachi/miyukimachi.js","sakaemachiminato":"./sakaemachiminato/sakaemachiminato.js","shimmachi":"./shimmachi/shimmachi.js","sumiyoshicho":"./sumiyoshicho/sumiyoshicho.js","tsukijicho":"./tsukijicho/tsukijicho.js","wareimotomachi":"./wareimotomachi/wareimotomachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
