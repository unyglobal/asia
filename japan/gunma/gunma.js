// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gunma","repository":"asia","path":"japan/gunma","depth":2,"parent":"japan","children":["annaka","isesaki","kamikoizumi","kanekomachi","kiryu","maebashi","midori","minakami","nakanojo","numata","ogura","omamacho-omama","owa","sakai-nakajima","shibukawa","takasaki","tamamura","tatebayashi","tomioka","yoshii"]});
export const childModules = Object.freeze({"annaka":"./annaka/annaka.js","isesaki":"./isesaki/isesaki.js","kamikoizumi":"./kamikoizumi/kamikoizumi.js","kanekomachi":"./kanekomachi/kanekomachi.js","kiryu":"./kiryu/kiryu.js","maebashi":"./maebashi/maebashi.js","midori":"./midori/midori.js","minakami":"./minakami/minakami.js","nakanojo":"./nakanojo/nakanojo.js","numata":"./numata/numata.js","ogura":"./ogura/ogura.js","omamacho-omama":"./omamacho-omama/omamacho-omama.js","owa":"./owa/owa.js","sakai-nakajima":"./sakai-nakajima/sakai-nakajima.js","shibukawa":"./shibukawa/shibukawa.js","takasaki":"./takasaki/takasaki.js","tamamura":"./tamamura/tamamura.js","tatebayashi":"./tatebayashi/tatebayashi.js","tomioka":"./tomioka/tomioka.js","yoshii":"./yoshii/yoshii.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
