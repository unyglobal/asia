// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tochigi","repository":"asia","path":"japan/tochigi","depth":2,"parent":"japan","children":["ashikaga","hoshakuji","imaichi","kaminokawa","kanuma","karasuyama","kuroiso","mashiko","mibu","mooka","nasu","nasukarasuyama","nasushiobara","nikko","nogi","otawara","sano","shimotsuke","tanuma","ujiie","utsunomiya","yaita"]});
export const childModules = Object.freeze({"ashikaga":"./ashikaga/ashikaga.js","hoshakuji":"./hoshakuji/hoshakuji.js","imaichi":"./imaichi/imaichi.js","kaminokawa":"./kaminokawa/kaminokawa.js","kanuma":"./kanuma/kanuma.js","karasuyama":"./karasuyama/karasuyama.js","kuroiso":"./kuroiso/kuroiso.js","mashiko":"./mashiko/mashiko.js","mibu":"./mibu/mibu.js","mooka":"./mooka/mooka.js","nasu":"./nasu/nasu.js","nasukarasuyama":"./nasukarasuyama/nasukarasuyama.js","nasushiobara":"./nasushiobara/nasushiobara.js","nikko":"./nikko/nikko.js","nogi":"./nogi/nogi.js","otawara":"./otawara/otawara.js","sano":"./sano/sano.js","shimotsuke":"./shimotsuke/shimotsuke.js","tanuma":"./tanuma/tanuma.js","ujiie":"./ujiie/ujiie.js","utsunomiya":"./utsunomiya/utsunomiya.js","yaita":"./yaita/yaita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
