// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yamagata","repository":"asia","path":"japan/yamagata","depth":2,"parent":"japan","children":["higashine","kaminoyama","murayama","nagai","nanyo","obanazawa","sagae","sakata","shinjo","shonai","takahata","tendo","tsuruoka","yachi","yonezawa"]});
export const childModules = Object.freeze({"higashine":"./higashine/higashine.js","kaminoyama":"./kaminoyama/kaminoyama.js","murayama":"./murayama/murayama.js","nagai":"./nagai/nagai.js","nanyo":"./nanyo/nanyo.js","obanazawa":"./obanazawa/obanazawa.js","sagae":"./sagae/sagae.js","sakata":"./sakata/sakata.js","shinjo":"./shinjo/shinjo.js","shonai":"./shonai/shonai.js","takahata":"./takahata/takahata.js","tendo":"./tendo/tendo.js","tsuruoka":"./tsuruoka/tsuruoka.js","yachi":"./yachi/yachi.js","yonezawa":"./yonezawa/yonezawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
