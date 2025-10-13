(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/slugify/slugify.js
  var require_slugify = __commonJS({
    "node_modules/slugify/slugify.js"(exports, module) {
      (function(name, root, factory) {
        if (typeof exports === "object") {
          module.exports = factory();
          module.exports["default"] = factory();
        } else if (typeof define === "function" && define.amd) {
          define(factory);
        } else {
          root[name] = factory();
        }
      })("slugify", exports, function() {
        var charMap = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`);
        var locales = JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');
        function replace3(string, options) {
          if (typeof string !== "string") {
            throw new Error("slugify: string argument expected");
          }
          options = typeof options === "string" ? { replacement: options } : options || {};
          var locale = locales[options.locale] || {};
          var replacement = options.replacement === void 0 ? "-" : options.replacement;
          var trim = options.trim === void 0 ? true : options.trim;
          var slug = string.normalize().split("").reduce(function(result, ch) {
            var appendChar = locale[ch];
            if (appendChar === void 0)
              appendChar = charMap[ch];
            if (appendChar === void 0)
              appendChar = ch;
            if (appendChar === replacement)
              appendChar = " ";
            return result + appendChar.replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
          }, "");
          if (options.strict) {
            slug = slug.replace(/[^A-Za-z0-9\s]/g, "");
          }
          if (trim) {
            slug = slug.trim();
          }
          slug = slug.replace(/\s+/g, replacement);
          if (options.lower) {
            slug = slug.toLowerCase();
          }
          return slug;
        }
        replace3.extend = function(customMap) {
          Object.assign(charMap, customMap);
        };
        return replace3;
      });
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/entities/lib/maps/entities.json
  var require_entities = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/entities/lib/maps/entities.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/entities.js
  var require_entities2 = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/entities.js"(exports, module) {
      "use strict";
      module.exports = require_entities();
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/P/regex.js
  var require_regex = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/P/regex.js"(exports, module) {
      module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/mdurl/encode.js
  var require_encode = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/mdurl/encode.js"(exports, module) {
      "use strict";
      var encodeCache = {};
      function getEncodeCache(exclude) {
        var i, ch, cache = encodeCache[exclude];
        if (cache) {
          return cache;
        }
        cache = encodeCache[exclude] = [];
        for (i = 0; i < 128; i++) {
          ch = String.fromCharCode(i);
          if (/^[0-9a-z]$/i.test(ch)) {
            cache.push(ch);
          } else {
            cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
          }
        }
        for (i = 0; i < exclude.length; i++) {
          cache[exclude.charCodeAt(i)] = exclude[i];
        }
        return cache;
      }
      function encode(string, exclude, keepEscaped) {
        var i, l, code, nextCode, cache, result = "";
        if (typeof exclude !== "string") {
          keepEscaped = exclude;
          exclude = encode.defaultChars;
        }
        if (typeof keepEscaped === "undefined") {
          keepEscaped = true;
        }
        cache = getEncodeCache(exclude);
        for (i = 0, l = string.length; i < l; i++) {
          code = string.charCodeAt(i);
          if (keepEscaped && code === 37 && i + 2 < l) {
            if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
              result += string.slice(i, i + 3);
              i += 2;
              continue;
            }
          }
          if (code < 128) {
            result += cache[code];
            continue;
          }
          if (code >= 55296 && code <= 57343) {
            if (code >= 55296 && code <= 56319 && i + 1 < l) {
              nextCode = string.charCodeAt(i + 1);
              if (nextCode >= 56320 && nextCode <= 57343) {
                result += encodeURIComponent(string[i] + string[i + 1]);
                i++;
                continue;
              }
            }
            result += "%EF%BF%BD";
            continue;
          }
          result += encodeURIComponent(string[i]);
        }
        return result;
      }
      encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
      encode.componentChars = "-_.!~*'()";
      module.exports = encode;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/mdurl/decode.js
  var require_decode = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/mdurl/decode.js"(exports, module) {
      "use strict";
      var decodeCache = {};
      function getDecodeCache(exclude) {
        var i, ch, cache = decodeCache[exclude];
        if (cache) {
          return cache;
        }
        cache = decodeCache[exclude] = [];
        for (i = 0; i < 128; i++) {
          ch = String.fromCharCode(i);
          cache.push(ch);
        }
        for (i = 0; i < exclude.length; i++) {
          ch = exclude.charCodeAt(i);
          cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
        }
        return cache;
      }
      function decode(string, exclude) {
        var cache;
        if (typeof exclude !== "string") {
          exclude = decode.defaultChars;
        }
        cache = getDecodeCache(exclude);
        return string.replace(/(%[a-f0-9]{2})+/gi, function(seq2) {
          var i, l, b1, b2, b3, b4, chr, result = "";
          for (i = 0, l = seq2.length; i < l; i += 3) {
            b1 = parseInt(seq2.slice(i + 1, i + 3), 16);
            if (b1 < 128) {
              result += cache[b1];
              continue;
            }
            if ((b1 & 224) === 192 && i + 3 < l) {
              b2 = parseInt(seq2.slice(i + 4, i + 6), 16);
              if ((b2 & 192) === 128) {
                chr = b1 << 6 & 1984 | b2 & 63;
                if (chr < 128) {
                  result += "\uFFFD\uFFFD";
                } else {
                  result += String.fromCharCode(chr);
                }
                i += 3;
                continue;
              }
            }
            if ((b1 & 240) === 224 && i + 6 < l) {
              b2 = parseInt(seq2.slice(i + 4, i + 6), 16);
              b3 = parseInt(seq2.slice(i + 7, i + 9), 16);
              if ((b2 & 192) === 128 && (b3 & 192) === 128) {
                chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
                if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                  result += "\uFFFD\uFFFD\uFFFD";
                } else {
                  result += String.fromCharCode(chr);
                }
                i += 6;
                continue;
              }
            }
            if ((b1 & 248) === 240 && i + 9 < l) {
              b2 = parseInt(seq2.slice(i + 4, i + 6), 16);
              b3 = parseInt(seq2.slice(i + 7, i + 9), 16);
              b4 = parseInt(seq2.slice(i + 10, i + 12), 16);
              if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
                chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
                if (chr < 65536 || chr > 1114111) {
                  result += "\uFFFD\uFFFD\uFFFD\uFFFD";
                } else {
                  chr -= 65536;
                  result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
                }
                i += 9;
                continue;
              }
            }
            result += "\uFFFD";
          }
          return result;
        });
      }
      decode.defaultChars = ";/?:@&=+$,#";
      decode.componentChars = "";
      module.exports = decode;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/mdurl/format.js
  var require_format = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/mdurl/format.js"(exports, module) {
      "use strict";
      module.exports = function format3(url) {
        var result = "";
        result += url.protocol || "";
        result += url.slashes ? "//" : "";
        result += url.auth ? url.auth + "@" : "";
        if (url.hostname && url.hostname.indexOf(":") !== -1) {
          result += "[" + url.hostname + "]";
        } else {
          result += url.hostname || "";
        }
        result += url.port ? ":" + url.port : "";
        result += url.pathname || "";
        result += url.search || "";
        result += url.hash || "";
        return result;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/mdurl/parse.js
  var require_parse = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/mdurl/parse.js"(exports, module) {
      "use strict";
      function Url() {
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.pathname = null;
      }
      var protocolPattern = /^([a-z0-9.+-]+:)/i;
      var portPattern = /:[0-9]*$/;
      var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
      var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
      var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
      var autoEscape = ["'"].concat(unwise);
      var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
      var hostEndingChars = ["/", "?", "#"];
      var hostnameMaxLen = 255;
      var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
      var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
      var hostlessProtocol = {
        "javascript": true,
        "javascript:": true
      };
      var slashedProtocol = {
        "http": true,
        "https": true,
        "ftp": true,
        "gopher": true,
        "file": true,
        "http:": true,
        "https:": true,
        "ftp:": true,
        "gopher:": true,
        "file:": true
      };
      function urlParse(url, slashesDenoteHost) {
        if (url && url instanceof Url) {
          return url;
        }
        var u = new Url();
        u.parse(url, slashesDenoteHost);
        return u;
      }
      Url.prototype.parse = function(url, slashesDenoteHost) {
        var i, l, lowerProto, hec, slashes, rest = url;
        rest = rest.trim();
        if (!slashesDenoteHost && url.split("#").length === 1) {
          var simplePath = simplePathPattern.exec(rest);
          if (simplePath) {
            this.pathname = simplePath[1];
            if (simplePath[2]) {
              this.search = simplePath[2];
            }
            return this;
          }
        }
        var proto = protocolPattern.exec(rest);
        if (proto) {
          proto = proto[0];
          lowerProto = proto.toLowerCase();
          this.protocol = proto;
          rest = rest.substr(proto.length);
        }
        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          slashes = rest.substr(0, 2) === "//";
          if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
          }
        }
        if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
          var hostEnd = -1;
          for (i = 0; i < hostEndingChars.length; i++) {
            hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
              hostEnd = hec;
            }
          }
          var auth, atSign;
          if (hostEnd === -1) {
            atSign = rest.lastIndexOf("@");
          } else {
            atSign = rest.lastIndexOf("@", hostEnd);
          }
          if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = auth;
          }
          hostEnd = -1;
          for (i = 0; i < nonHostChars.length; i++) {
            hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
              hostEnd = hec;
            }
          }
          if (hostEnd === -1) {
            hostEnd = rest.length;
          }
          if (rest[hostEnd - 1] === ":") {
            hostEnd--;
          }
          var host = rest.slice(0, hostEnd);
          rest = rest.slice(hostEnd);
          this.parseHost(host);
          this.hostname = this.hostname || "";
          var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
          if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for (i = 0, l = hostparts.length; i < l; i++) {
              var part = hostparts[i];
              if (!part) {
                continue;
              }
              if (!part.match(hostnamePartPattern)) {
                var newpart = "";
                for (var j = 0, k = part.length; j < k; j++) {
                  if (part.charCodeAt(j) > 127) {
                    newpart += "x";
                  } else {
                    newpart += part[j];
                  }
                }
                if (!newpart.match(hostnamePartPattern)) {
                  var validParts = hostparts.slice(0, i);
                  var notHost = hostparts.slice(i + 1);
                  var bit = part.match(hostnamePartStart);
                  if (bit) {
                    validParts.push(bit[1]);
                    notHost.unshift(bit[2]);
                  }
                  if (notHost.length) {
                    rest = notHost.join(".") + rest;
                  }
                  this.hostname = validParts.join(".");
                  break;
                }
              }
            }
          }
          if (this.hostname.length > hostnameMaxLen) {
            this.hostname = "";
          }
          if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
          }
        }
        var hash = rest.indexOf("#");
        if (hash !== -1) {
          this.hash = rest.substr(hash);
          rest = rest.slice(0, hash);
        }
        var qm = rest.indexOf("?");
        if (qm !== -1) {
          this.search = rest.substr(qm);
          rest = rest.slice(0, qm);
        }
        if (rest) {
          this.pathname = rest;
        }
        if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
          this.pathname = "";
        }
        return this;
      };
      Url.prototype.parseHost = function(host) {
        var port = portPattern.exec(host);
        if (port) {
          port = port[0];
          if (port !== ":") {
            this.port = port.substr(1);
          }
          host = host.substr(0, host.length - port.length);
        }
        if (host) {
          this.hostname = host;
        }
      };
      module.exports = urlParse;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/mdurl/index.js
  var require_mdurl = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/mdurl/index.js"(exports, module) {
      "use strict";
      module.exports.encode = require_encode();
      module.exports.decode = require_decode();
      module.exports.format = require_format();
      module.exports.parse = require_parse();
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/properties/Any/regex.js
  var require_regex2 = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
      module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/Cc/regex.js
  var require_regex3 = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
      module.exports = /[\0-\x1F\x7F-\x9F]/;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/Cf/regex.js
  var require_regex4 = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
      module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/Z/regex.js
  var require_regex5 = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
      module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/index.js
  var require_uc = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/uc.micro/index.js"(exports) {
      "use strict";
      exports.Any = require_regex2();
      exports.Cc = require_regex3();
      exports.Cf = require_regex4();
      exports.P = require_regex();
      exports.Z = require_regex5();
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/utils.js
  var require_utils = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/utils.js"(exports) {
      "use strict";
      function _class2(obj) {
        return Object.prototype.toString.call(obj);
      }
      function isString3(obj) {
        return _class2(obj) === "[object String]";
      }
      var _hasOwnProperty2 = Object.prototype.hasOwnProperty;
      function has(object, key) {
        return _hasOwnProperty2.call(object, key);
      }
      function assign(obj) {
        var sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function(source) {
          if (!source) {
            return;
          }
          if (typeof source !== "object") {
            throw new TypeError(source + "must be object");
          }
          Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
          });
        });
        return obj;
      }
      function arrayReplaceAt(src, pos, newElements) {
        return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
      }
      function isValidEntityCode(c) {
        if (c >= 55296 && c <= 57343) {
          return false;
        }
        if (c >= 64976 && c <= 65007) {
          return false;
        }
        if ((c & 65535) === 65535 || (c & 65535) === 65534) {
          return false;
        }
        if (c >= 0 && c <= 8) {
          return false;
        }
        if (c === 11) {
          return false;
        }
        if (c >= 14 && c <= 31) {
          return false;
        }
        if (c >= 127 && c <= 159) {
          return false;
        }
        if (c > 1114111) {
          return false;
        }
        return true;
      }
      function fromCodePoint(c) {
        if (c > 65535) {
          c -= 65536;
          var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        }
        return String.fromCharCode(c);
      }
      var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
      var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
      var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
      var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
      var entities = require_entities2();
      function replaceEntityPattern(match, name) {
        var code;
        if (has(entities, name)) {
          return entities[name];
        }
        if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
          code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
          if (isValidEntityCode(code)) {
            return fromCodePoint(code);
          }
        }
        return match;
      }
      function unescapeMd(str2) {
        if (str2.indexOf("\\") < 0) {
          return str2;
        }
        return str2.replace(UNESCAPE_MD_RE, "$1");
      }
      function unescapeAll(str2) {
        if (str2.indexOf("\\") < 0 && str2.indexOf("&") < 0) {
          return str2;
        }
        return str2.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
          if (escaped) {
            return escaped;
          }
          return replaceEntityPattern(match, entity);
        });
      }
      var HTML_ESCAPE_TEST_RE = /[&<>"]/;
      var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
      var HTML_REPLACEMENTS = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      function replaceUnsafeChar(ch) {
        return HTML_REPLACEMENTS[ch];
      }
      function escapeHtml(str2) {
        if (HTML_ESCAPE_TEST_RE.test(str2)) {
          return str2.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
        }
        return str2;
      }
      var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
      function escapeRE(str2) {
        return str2.replace(REGEXP_ESCAPE_RE, "\\$&");
      }
      function isSpace(code) {
        switch (code) {
          case 9:
          case 32:
            return true;
        }
        return false;
      }
      function isWhiteSpace(code) {
        if (code >= 8192 && code <= 8202) {
          return true;
        }
        switch (code) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 160:
          case 5760:
          case 8239:
          case 8287:
          case 12288:
            return true;
        }
        return false;
      }
      var UNICODE_PUNCT_RE = require_regex();
      function isPunctChar(ch) {
        return UNICODE_PUNCT_RE.test(ch);
      }
      function isMdAsciiPunct(ch) {
        switch (ch) {
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 124:
          case 125:
          case 126:
            return true;
          default:
            return false;
        }
      }
      function normalizeReference(str2) {
        str2 = str2.trim().replace(/\s+/g, " ");
        if ("\u1E9E".toLowerCase() === "\u1E7E") {
          str2 = str2.replace(/ẞ/g, "\xDF");
        }
        return str2.toLowerCase().toUpperCase();
      }
      exports.lib = {};
      exports.lib.mdurl = require_mdurl();
      exports.lib.ucmicro = require_uc();
      exports.assign = assign;
      exports.isString = isString3;
      exports.has = has;
      exports.unescapeMd = unescapeMd;
      exports.unescapeAll = unescapeAll;
      exports.isValidEntityCode = isValidEntityCode;
      exports.fromCodePoint = fromCodePoint;
      exports.escapeHtml = escapeHtml;
      exports.arrayReplaceAt = arrayReplaceAt;
      exports.isSpace = isSpace;
      exports.isWhiteSpace = isWhiteSpace;
      exports.isMdAsciiPunct = isMdAsciiPunct;
      exports.isPunctChar = isPunctChar;
      exports.escapeRE = escapeRE;
      exports.normalizeReference = normalizeReference;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/parse_link_label.js
  var require_parse_link_label = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {
      "use strict";
      module.exports = function parseLinkLabel(state, start, disableNested) {
        var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
        state.pos = start + 1;
        level = 1;
        while (state.pos < max) {
          marker = state.src.charCodeAt(state.pos);
          if (marker === 93) {
            level--;
            if (level === 0) {
              found = true;
              break;
            }
          }
          prevPos = state.pos;
          state.md.inline.skipToken(state);
          if (marker === 91) {
            if (prevPos === state.pos - 1) {
              level++;
            } else if (disableNested) {
              state.pos = oldPos;
              return -1;
            }
          }
        }
        if (found) {
          labelEnd = state.pos;
        }
        state.pos = oldPos;
        return labelEnd;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/parse_link_destination.js
  var require_parse_link_destination = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {
      "use strict";
      var unescapeAll = require_utils().unescapeAll;
      module.exports = function parseLinkDestination(str2, start, max) {
        var code, level, pos = start, result = {
          ok: false,
          pos: 0,
          lines: 0,
          str: ""
        };
        if (str2.charCodeAt(pos) === 60) {
          pos++;
          while (pos < max) {
            code = str2.charCodeAt(pos);
            if (code === 10) {
              return result;
            }
            if (code === 60) {
              return result;
            }
            if (code === 62) {
              result.pos = pos + 1;
              result.str = unescapeAll(str2.slice(start + 1, pos));
              result.ok = true;
              return result;
            }
            if (code === 92 && pos + 1 < max) {
              pos += 2;
              continue;
            }
            pos++;
          }
          return result;
        }
        level = 0;
        while (pos < max) {
          code = str2.charCodeAt(pos);
          if (code === 32) {
            break;
          }
          if (code < 32 || code === 127) {
            break;
          }
          if (code === 92 && pos + 1 < max) {
            if (str2.charCodeAt(pos + 1) === 32) {
              break;
            }
            pos += 2;
            continue;
          }
          if (code === 40) {
            level++;
            if (level > 32) {
              return result;
            }
          }
          if (code === 41) {
            if (level === 0) {
              break;
            }
            level--;
          }
          pos++;
        }
        if (start === pos) {
          return result;
        }
        if (level !== 0) {
          return result;
        }
        result.str = unescapeAll(str2.slice(start, pos));
        result.pos = pos;
        result.ok = true;
        return result;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/parse_link_title.js
  var require_parse_link_title = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {
      "use strict";
      var unescapeAll = require_utils().unescapeAll;
      module.exports = function parseLinkTitle(str2, start, max) {
        var code, marker, lines = 0, pos = start, result = {
          ok: false,
          pos: 0,
          lines: 0,
          str: ""
        };
        if (pos >= max) {
          return result;
        }
        marker = str2.charCodeAt(pos);
        if (marker !== 34 && marker !== 39 && marker !== 40) {
          return result;
        }
        pos++;
        if (marker === 40) {
          marker = 41;
        }
        while (pos < max) {
          code = str2.charCodeAt(pos);
          if (code === marker) {
            result.pos = pos + 1;
            result.lines = lines;
            result.str = unescapeAll(str2.slice(start + 1, pos));
            result.ok = true;
            return result;
          } else if (code === 40 && marker === 41) {
            return result;
          } else if (code === 10) {
            lines++;
          } else if (code === 92 && pos + 1 < max) {
            pos++;
            if (str2.charCodeAt(pos) === 10) {
              lines++;
            }
          }
          pos++;
        }
        return result;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/index.js
  var require_helpers = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/helpers/index.js"(exports) {
      "use strict";
      exports.parseLinkLabel = require_parse_link_label();
      exports.parseLinkDestination = require_parse_link_destination();
      exports.parseLinkTitle = require_parse_link_title();
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/renderer.js
  var require_renderer = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/renderer.js"(exports, module) {
      "use strict";
      var assign = require_utils().assign;
      var unescapeAll = require_utils().unescapeAll;
      var escapeHtml = require_utils().escapeHtml;
      var default_rules = {};
      default_rules.code_inline = function(tokens, idx, options, env, slf) {
        var token = tokens[idx];
        return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(token.content) + "</code>";
      };
      default_rules.code_block = function(tokens, idx, options, env, slf) {
        var token = tokens[idx];
        return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
      };
      default_rules.fence = function(tokens, idx, options, env, slf) {
        var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
        if (info) {
          arr = info.split(/(\s+)/g);
          langName = arr[0];
          langAttrs = arr.slice(2).join("");
        }
        if (options.highlight) {
          highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
        } else {
          highlighted = escapeHtml(token.content);
        }
        if (highlighted.indexOf("<pre") === 0) {
          return highlighted + "\n";
        }
        if (info) {
          i = token.attrIndex("class");
          tmpAttrs = token.attrs ? token.attrs.slice() : [];
          if (i < 0) {
            tmpAttrs.push(["class", options.langPrefix + langName]);
          } else {
            tmpAttrs[i] = tmpAttrs[i].slice();
            tmpAttrs[i][1] += " " + options.langPrefix + langName;
          }
          tmpToken = {
            attrs: tmpAttrs
          };
          return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
        }
        return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
      };
      default_rules.image = function(tokens, idx, options, env, slf) {
        var token = tokens[idx];
        token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
        return slf.renderToken(tokens, idx, options);
      };
      default_rules.hardbreak = function(tokens, idx, options) {
        return options.xhtmlOut ? "<br />\n" : "<br>\n";
      };
      default_rules.softbreak = function(tokens, idx, options) {
        return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
      };
      default_rules.text = function(tokens, idx) {
        return escapeHtml(tokens[idx].content);
      };
      default_rules.html_block = function(tokens, idx) {
        return tokens[idx].content;
      };
      default_rules.html_inline = function(tokens, idx) {
        return tokens[idx].content;
      };
      function Renderer() {
        this.rules = assign({}, default_rules);
      }
      Renderer.prototype.renderAttrs = function renderAttrs(token) {
        var i, l, result;
        if (!token.attrs) {
          return "";
        }
        result = "";
        for (i = 0, l = token.attrs.length; i < l; i++) {
          result += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
        }
        return result;
      };
      Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
        var nextToken, result = "", needLf = false, token = tokens[idx];
        if (token.hidden) {
          return "";
        }
        if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
          result += "\n";
        }
        result += (token.nesting === -1 ? "</" : "<") + token.tag;
        result += this.renderAttrs(token);
        if (token.nesting === 0 && options.xhtmlOut) {
          result += " /";
        }
        if (token.block) {
          needLf = true;
          if (token.nesting === 1) {
            if (idx + 1 < tokens.length) {
              nextToken = tokens[idx + 1];
              if (nextToken.type === "inline" || nextToken.hidden) {
                needLf = false;
              } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
                needLf = false;
              }
            }
          }
        }
        result += needLf ? ">\n" : ">";
        return result;
      };
      Renderer.prototype.renderInline = function(tokens, options, env) {
        var type2, result = "", rules = this.rules;
        for (var i = 0, len = tokens.length; i < len; i++) {
          type2 = tokens[i].type;
          if (typeof rules[type2] !== "undefined") {
            result += rules[type2](tokens, i, options, env, this);
          } else {
            result += this.renderToken(tokens, i, options);
          }
        }
        return result;
      };
      Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
        var result = "";
        for (var i = 0, len = tokens.length; i < len; i++) {
          if (tokens[i].type === "text") {
            result += tokens[i].content;
          } else if (tokens[i].type === "image") {
            result += this.renderInlineAsText(tokens[i].children, options, env);
          } else if (tokens[i].type === "softbreak") {
            result += "\n";
          }
        }
        return result;
      };
      Renderer.prototype.render = function(tokens, options, env) {
        var i, len, type2, result = "", rules = this.rules;
        for (i = 0, len = tokens.length; i < len; i++) {
          type2 = tokens[i].type;
          if (type2 === "inline") {
            result += this.renderInline(tokens[i].children, options, env);
          } else if (typeof rules[type2] !== "undefined") {
            result += rules[type2](tokens, i, options, env, this);
          } else {
            result += this.renderToken(tokens, i, options, env);
          }
        }
        return result;
      };
      module.exports = Renderer;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/ruler.js
  var require_ruler = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/ruler.js"(exports, module) {
      "use strict";
      function Ruler() {
        this.__rules__ = [];
        this.__cache__ = null;
      }
      Ruler.prototype.__find__ = function(name) {
        for (var i = 0; i < this.__rules__.length; i++) {
          if (this.__rules__[i].name === name) {
            return i;
          }
        }
        return -1;
      };
      Ruler.prototype.__compile__ = function() {
        var self = this;
        var chains = [""];
        self.__rules__.forEach(function(rule) {
          if (!rule.enabled) {
            return;
          }
          rule.alt.forEach(function(altName) {
            if (chains.indexOf(altName) < 0) {
              chains.push(altName);
            }
          });
        });
        self.__cache__ = {};
        chains.forEach(function(chain) {
          self.__cache__[chain] = [];
          self.__rules__.forEach(function(rule) {
            if (!rule.enabled) {
              return;
            }
            if (chain && rule.alt.indexOf(chain) < 0) {
              return;
            }
            self.__cache__[chain].push(rule.fn);
          });
        });
      };
      Ruler.prototype.at = function(name, fn, options) {
        var index = this.__find__(name);
        var opt = options || {};
        if (index === -1) {
          throw new Error("Parser rule not found: " + name);
        }
        this.__rules__[index].fn = fn;
        this.__rules__[index].alt = opt.alt || [];
        this.__cache__ = null;
      };
      Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
        var index = this.__find__(beforeName);
        var opt = options || {};
        if (index === -1) {
          throw new Error("Parser rule not found: " + beforeName);
        }
        this.__rules__.splice(index, 0, {
          name: ruleName,
          enabled: true,
          fn,
          alt: opt.alt || []
        });
        this.__cache__ = null;
      };
      Ruler.prototype.after = function(afterName, ruleName, fn, options) {
        var index = this.__find__(afterName);
        var opt = options || {};
        if (index === -1) {
          throw new Error("Parser rule not found: " + afterName);
        }
        this.__rules__.splice(index + 1, 0, {
          name: ruleName,
          enabled: true,
          fn,
          alt: opt.alt || []
        });
        this.__cache__ = null;
      };
      Ruler.prototype.push = function(ruleName, fn, options) {
        var opt = options || {};
        this.__rules__.push({
          name: ruleName,
          enabled: true,
          fn,
          alt: opt.alt || []
        });
        this.__cache__ = null;
      };
      Ruler.prototype.enable = function(list, ignoreInvalid) {
        if (!Array.isArray(list)) {
          list = [list];
        }
        var result = [];
        list.forEach(function(name) {
          var idx = this.__find__(name);
          if (idx < 0) {
            if (ignoreInvalid) {
              return;
            }
            throw new Error("Rules manager: invalid rule name " + name);
          }
          this.__rules__[idx].enabled = true;
          result.push(name);
        }, this);
        this.__cache__ = null;
        return result;
      };
      Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
        if (!Array.isArray(list)) {
          list = [list];
        }
        this.__rules__.forEach(function(rule) {
          rule.enabled = false;
        });
        this.enable(list, ignoreInvalid);
      };
      Ruler.prototype.disable = function(list, ignoreInvalid) {
        if (!Array.isArray(list)) {
          list = [list];
        }
        var result = [];
        list.forEach(function(name) {
          var idx = this.__find__(name);
          if (idx < 0) {
            if (ignoreInvalid) {
              return;
            }
            throw new Error("Rules manager: invalid rule name " + name);
          }
          this.__rules__[idx].enabled = false;
          result.push(name);
        }, this);
        this.__cache__ = null;
        return result;
      };
      Ruler.prototype.getRules = function(chainName) {
        if (this.__cache__ === null) {
          this.__compile__();
        }
        return this.__cache__[chainName] || [];
      };
      module.exports = Ruler;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/normalize.js
  var require_normalize = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {
      "use strict";
      var NEWLINES_RE = /\r\n?|\n/g;
      var NULL_RE = /\0/g;
      module.exports = function normalize2(state) {
        var str2;
        str2 = state.src.replace(NEWLINES_RE, "\n");
        str2 = str2.replace(NULL_RE, "\uFFFD");
        state.src = str2;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/block.js
  var require_block = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {
      "use strict";
      module.exports = function block(state) {
        var token;
        if (state.inlineMode) {
          token = new state.Token("inline", "", 0);
          token.content = state.src;
          token.map = [0, 1];
          token.children = [];
          state.tokens.push(token);
        } else {
          state.md.block.parse(state.src, state.md, state.env, state.tokens);
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/inline.js
  var require_inline = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {
      "use strict";
      module.exports = function inline(state) {
        var tokens = state.tokens, tok, i, l;
        for (i = 0, l = tokens.length; i < l; i++) {
          tok = tokens[i];
          if (tok.type === "inline") {
            state.md.inline.parse(tok.content, state.md, state.env, tok.children);
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/linkify.js
  var require_linkify = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {
      "use strict";
      var arrayReplaceAt = require_utils().arrayReplaceAt;
      function isLinkOpen(str2) {
        return /^<a[>\s]/i.test(str2);
      }
      function isLinkClose(str2) {
        return /^<\/a\s*>/i.test(str2);
      }
      module.exports = function linkify(state) {
        var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
        if (!state.md.options.linkify) {
          return;
        }
        for (j = 0, l = blockTokens.length; j < l; j++) {
          if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
            continue;
          }
          tokens = blockTokens[j].children;
          htmlLinkLevel = 0;
          for (i = tokens.length - 1; i >= 0; i--) {
            currentToken = tokens[i];
            if (currentToken.type === "link_close") {
              i--;
              while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
                i--;
              }
              continue;
            }
            if (currentToken.type === "html_inline") {
              if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
                htmlLinkLevel--;
              }
              if (isLinkClose(currentToken.content)) {
                htmlLinkLevel++;
              }
            }
            if (htmlLinkLevel > 0) {
              continue;
            }
            if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
              text = currentToken.content;
              links = state.md.linkify.match(text);
              nodes = [];
              level = currentToken.level;
              lastPos = 0;
              if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") {
                links = links.slice(1);
              }
              for (ln = 0; ln < links.length; ln++) {
                url = links[ln].url;
                fullUrl = state.md.normalizeLink(url);
                if (!state.md.validateLink(fullUrl)) {
                  continue;
                }
                urlText = links[ln].text;
                if (!links[ln].schema) {
                  urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
                } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                  urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
                } else {
                  urlText = state.md.normalizeLinkText(urlText);
                }
                pos = links[ln].index;
                if (pos > lastPos) {
                  token = new state.Token("text", "", 0);
                  token.content = text.slice(lastPos, pos);
                  token.level = level;
                  nodes.push(token);
                }
                token = new state.Token("link_open", "a", 1);
                token.attrs = [["href", fullUrl]];
                token.level = level++;
                token.markup = "linkify";
                token.info = "auto";
                nodes.push(token);
                token = new state.Token("text", "", 0);
                token.content = urlText;
                token.level = level;
                nodes.push(token);
                token = new state.Token("link_close", "a", -1);
                token.level = --level;
                token.markup = "linkify";
                token.info = "auto";
                nodes.push(token);
                lastPos = links[ln].lastIndex;
              }
              if (lastPos < text.length) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(lastPos);
                token.level = level;
                nodes.push(token);
              }
              blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
            }
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/replacements.js
  var require_replacements = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {
      "use strict";
      var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
      var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
      var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
      var SCOPED_ABBR = {
        c: "\xA9",
        r: "\xAE",
        tm: "\u2122"
      };
      function replaceFn(match, name) {
        return SCOPED_ABBR[name.toLowerCase()];
      }
      function replace_scoped(inlineTokens) {
        var i, token, inside_autolink = 0;
        for (i = inlineTokens.length - 1; i >= 0; i--) {
          token = inlineTokens[i];
          if (token.type === "text" && !inside_autolink) {
            token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
          }
          if (token.type === "link_open" && token.info === "auto") {
            inside_autolink--;
          }
          if (token.type === "link_close" && token.info === "auto") {
            inside_autolink++;
          }
        }
      }
      function replace_rare(inlineTokens) {
        var i, token, inside_autolink = 0;
        for (i = inlineTokens.length - 1; i >= 0; i--) {
          token = inlineTokens[i];
          if (token.type === "text" && !inside_autolink) {
            if (RARE_RE.test(token.content)) {
              token.content = token.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
            }
          }
          if (token.type === "link_open" && token.info === "auto") {
            inside_autolink--;
          }
          if (token.type === "link_close" && token.info === "auto") {
            inside_autolink++;
          }
        }
      }
      module.exports = function replace3(state) {
        var blkIdx;
        if (!state.md.options.typographer) {
          return;
        }
        for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
          if (state.tokens[blkIdx].type !== "inline") {
            continue;
          }
          if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
            replace_scoped(state.tokens[blkIdx].children);
          }
          if (RARE_RE.test(state.tokens[blkIdx].content)) {
            replace_rare(state.tokens[blkIdx].children);
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/smartquotes.js
  var require_smartquotes = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {
      "use strict";
      var isWhiteSpace = require_utils().isWhiteSpace;
      var isPunctChar = require_utils().isPunctChar;
      var isMdAsciiPunct = require_utils().isMdAsciiPunct;
      var QUOTE_TEST_RE = /['"]/;
      var QUOTE_RE = /['"]/g;
      var APOSTROPHE = "\u2019";
      function replaceAt(str2, index, ch) {
        return str2.slice(0, index) + ch + str2.slice(index + 1);
      }
      function process_inlines(tokens, state) {
        var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
        stack = [];
        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          thisLevel = tokens[i].level;
          for (j = stack.length - 1; j >= 0; j--) {
            if (stack[j].level <= thisLevel) {
              break;
            }
          }
          stack.length = j + 1;
          if (token.type !== "text") {
            continue;
          }
          text = token.content;
          pos = 0;
          max = text.length;
          OUTER:
            while (pos < max) {
              QUOTE_RE.lastIndex = pos;
              t = QUOTE_RE.exec(text);
              if (!t) {
                break;
              }
              canOpen = canClose = true;
              pos = t.index + 1;
              isSingle = t[0] === "'";
              lastChar = 32;
              if (t.index - 1 >= 0) {
                lastChar = text.charCodeAt(t.index - 1);
              } else {
                for (j = i - 1; j >= 0; j--) {
                  if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                    break;
                  if (!tokens[j].content)
                    continue;
                  lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                  break;
                }
              }
              nextChar = 32;
              if (pos < max) {
                nextChar = text.charCodeAt(pos);
              } else {
                for (j = i + 1; j < tokens.length; j++) {
                  if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                    break;
                  if (!tokens[j].content)
                    continue;
                  nextChar = tokens[j].content.charCodeAt(0);
                  break;
                }
              }
              isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
              isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
              isLastWhiteSpace = isWhiteSpace(lastChar);
              isNextWhiteSpace = isWhiteSpace(nextChar);
              if (isNextWhiteSpace) {
                canOpen = false;
              } else if (isNextPunctChar) {
                if (!(isLastWhiteSpace || isLastPunctChar)) {
                  canOpen = false;
                }
              }
              if (isLastWhiteSpace) {
                canClose = false;
              } else if (isLastPunctChar) {
                if (!(isNextWhiteSpace || isNextPunctChar)) {
                  canClose = false;
                }
              }
              if (nextChar === 34 && t[0] === '"') {
                if (lastChar >= 48 && lastChar <= 57) {
                  canClose = canOpen = false;
                }
              }
              if (canOpen && canClose) {
                canOpen = isLastPunctChar;
                canClose = isNextPunctChar;
              }
              if (!canOpen && !canClose) {
                if (isSingle) {
                  token.content = replaceAt(token.content, t.index, APOSTROPHE);
                }
                continue;
              }
              if (canClose) {
                for (j = stack.length - 1; j >= 0; j--) {
                  item = stack[j];
                  if (stack[j].level < thisLevel) {
                    break;
                  }
                  if (item.single === isSingle && stack[j].level === thisLevel) {
                    item = stack[j];
                    if (isSingle) {
                      openQuote = state.md.options.quotes[2];
                      closeQuote = state.md.options.quotes[3];
                    } else {
                      openQuote = state.md.options.quotes[0];
                      closeQuote = state.md.options.quotes[1];
                    }
                    token.content = replaceAt(token.content, t.index, closeQuote);
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
                    pos += closeQuote.length - 1;
                    if (item.token === i) {
                      pos += openQuote.length - 1;
                    }
                    text = token.content;
                    max = text.length;
                    stack.length = j;
                    continue OUTER;
                  }
                }
              }
              if (canOpen) {
                stack.push({
                  token: i,
                  pos: t.index,
                  single: isSingle,
                  level: thisLevel
                });
              } else if (canClose && isSingle) {
                token.content = replaceAt(token.content, t.index, APOSTROPHE);
              }
            }
        }
      }
      module.exports = function smartquotes(state) {
        var blkIdx;
        if (!state.md.options.typographer) {
          return;
        }
        for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
          if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
            continue;
          }
          process_inlines(state.tokens[blkIdx].children, state);
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/text_join.js
  var require_text_join = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/text_join.js"(exports, module) {
      "use strict";
      module.exports = function text_join(state) {
        var j, l, tokens, curr, max, last3, blockTokens = state.tokens;
        for (j = 0, l = blockTokens.length; j < l; j++) {
          if (blockTokens[j].type !== "inline")
            continue;
          tokens = blockTokens[j].children;
          max = tokens.length;
          for (curr = 0; curr < max; curr++) {
            if (tokens[curr].type === "text_special") {
              tokens[curr].type = "text";
            }
          }
          for (curr = last3 = 0; curr < max; curr++) {
            if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
              tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
            } else {
              if (curr !== last3) {
                tokens[last3] = tokens[curr];
              }
              last3++;
            }
          }
          if (curr !== last3) {
            tokens.length = last3;
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/token.js
  var require_token = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/token.js"(exports, module) {
      "use strict";
      function Token3(type2, tag, nesting) {
        this.type = type2;
        this.tag = tag;
        this.attrs = null;
        this.map = null;
        this.nesting = nesting;
        this.level = 0;
        this.children = null;
        this.content = "";
        this.markup = "";
        this.info = "";
        this.meta = null;
        this.block = false;
        this.hidden = false;
      }
      Token3.prototype.attrIndex = function attrIndex(name) {
        var attrs, i, len;
        if (!this.attrs) {
          return -1;
        }
        attrs = this.attrs;
        for (i = 0, len = attrs.length; i < len; i++) {
          if (attrs[i][0] === name) {
            return i;
          }
        }
        return -1;
      };
      Token3.prototype.attrPush = function attrPush(attrData) {
        if (this.attrs) {
          this.attrs.push(attrData);
        } else {
          this.attrs = [attrData];
        }
      };
      Token3.prototype.attrSet = function attrSet(name, value) {
        var idx = this.attrIndex(name), attrData = [name, value];
        if (idx < 0) {
          this.attrPush(attrData);
        } else {
          this.attrs[idx] = attrData;
        }
      };
      Token3.prototype.attrGet = function attrGet(name) {
        var idx = this.attrIndex(name), value = null;
        if (idx >= 0) {
          value = this.attrs[idx][1];
        }
        return value;
      };
      Token3.prototype.attrJoin = function attrJoin(name, value) {
        var idx = this.attrIndex(name);
        if (idx < 0) {
          this.attrPush([name, value]);
        } else {
          this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
        }
      };
      module.exports = Token3;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/state_core.js
  var require_state_core = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {
      "use strict";
      var Token3 = require_token();
      function StateCore(src, md2, env) {
        this.src = src;
        this.env = env;
        this.tokens = [];
        this.inlineMode = false;
        this.md = md2;
      }
      StateCore.prototype.Token = Token3;
      module.exports = StateCore;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/parser_core.js
  var require_parser_core = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/parser_core.js"(exports, module) {
      "use strict";
      var Ruler = require_ruler();
      var _rules = [
        ["normalize", require_normalize()],
        ["block", require_block()],
        ["inline", require_inline()],
        ["linkify", require_linkify()],
        ["replacements", require_replacements()],
        ["smartquotes", require_smartquotes()],
        ["text_join", require_text_join()]
      ];
      function Core() {
        this.ruler = new Ruler();
        for (var i = 0; i < _rules.length; i++) {
          this.ruler.push(_rules[i][0], _rules[i][1]);
        }
      }
      Core.prototype.process = function(state) {
        var i, l, rules;
        rules = this.ruler.getRules("");
        for (i = 0, l = rules.length; i < l; i++) {
          rules[i](state);
        }
      };
      Core.prototype.State = require_state_core();
      module.exports = Core;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/table.js
  var require_table = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      function getLine2(state, line) {
        var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
        return state.src.slice(pos, max);
      }
      function escapedSplit(str2) {
        var result = [], pos = 0, max = str2.length, ch, isEscaped = false, lastPos = 0, current = "";
        ch = str2.charCodeAt(pos);
        while (pos < max) {
          if (ch === 124) {
            if (!isEscaped) {
              result.push(current + str2.substring(lastPos, pos));
              current = "";
              lastPos = pos + 1;
            } else {
              current += str2.substring(lastPos, pos - 1);
              lastPos = pos;
            }
          }
          isEscaped = ch === 92;
          pos++;
          ch = str2.charCodeAt(pos);
        }
        result.push(current + str2.substring(lastPos));
        return result;
      }
      module.exports = function table(state, startLine, endLine, silent) {
        var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
        if (startLine + 2 > endLine) {
          return false;
        }
        nextLine = startLine + 1;
        if (state.sCount[nextLine] < state.blkIndent) {
          return false;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          return false;
        }
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        if (pos >= state.eMarks[nextLine]) {
          return false;
        }
        firstCh = state.src.charCodeAt(pos++);
        if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
          return false;
        }
        if (pos >= state.eMarks[nextLine]) {
          return false;
        }
        secondCh = state.src.charCodeAt(pos++);
        if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
          return false;
        }
        if (firstCh === 45 && isSpace(secondCh)) {
          return false;
        }
        while (pos < state.eMarks[nextLine]) {
          ch = state.src.charCodeAt(pos);
          if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
            return false;
          }
          pos++;
        }
        lineText = getLine2(state, startLine + 1);
        columns = lineText.split("|");
        aligns = [];
        for (i = 0; i < columns.length; i++) {
          t = columns[i].trim();
          if (!t) {
            if (i === 0 || i === columns.length - 1) {
              continue;
            } else {
              return false;
            }
          }
          if (!/^:?-+:?$/.test(t)) {
            return false;
          }
          if (t.charCodeAt(t.length - 1) === 58) {
            aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
          } else if (t.charCodeAt(0) === 58) {
            aligns.push("left");
          } else {
            aligns.push("");
          }
        }
        lineText = getLine2(state, startLine).trim();
        if (lineText.indexOf("|") === -1) {
          return false;
        }
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        columns = escapedSplit(lineText);
        if (columns.length && columns[0] === "")
          columns.shift();
        if (columns.length && columns[columns.length - 1] === "")
          columns.pop();
        columnCount = columns.length;
        if (columnCount === 0 || columnCount !== aligns.length) {
          return false;
        }
        if (silent) {
          return true;
        }
        oldParentType = state.parentType;
        state.parentType = "table";
        terminatorRules = state.md.block.ruler.getRules("blockquote");
        token = state.push("table_open", "table", 1);
        token.map = tableLines = [startLine, 0];
        token = state.push("thead_open", "thead", 1);
        token.map = [startLine, startLine + 1];
        token = state.push("tr_open", "tr", 1);
        token.map = [startLine, startLine + 1];
        for (i = 0; i < columns.length; i++) {
          token = state.push("th_open", "th", 1);
          if (aligns[i]) {
            token.attrs = [["style", "text-align:" + aligns[i]]];
          }
          token = state.push("inline", "", 0);
          token.content = columns[i].trim();
          token.children = [];
          token = state.push("th_close", "th", -1);
        }
        token = state.push("tr_close", "tr", -1);
        token = state.push("thead_close", "thead", -1);
        for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
          lineText = getLine2(state, nextLine).trim();
          if (!lineText) {
            break;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            break;
          }
          columns = escapedSplit(lineText);
          if (columns.length && columns[0] === "")
            columns.shift();
          if (columns.length && columns[columns.length - 1] === "")
            columns.pop();
          if (nextLine === startLine + 2) {
            token = state.push("tbody_open", "tbody", 1);
            token.map = tbodyLines = [startLine + 2, 0];
          }
          token = state.push("tr_open", "tr", 1);
          token.map = [nextLine, nextLine + 1];
          for (i = 0; i < columnCount; i++) {
            token = state.push("td_open", "td", 1);
            if (aligns[i]) {
              token.attrs = [["style", "text-align:" + aligns[i]]];
            }
            token = state.push("inline", "", 0);
            token.content = columns[i] ? columns[i].trim() : "";
            token.children = [];
            token = state.push("td_close", "td", -1);
          }
          token = state.push("tr_close", "tr", -1);
        }
        if (tbodyLines) {
          token = state.push("tbody_close", "tbody", -1);
          tbodyLines[1] = nextLine;
        }
        token = state.push("table_close", "table", -1);
        tableLines[1] = nextLine;
        state.parentType = oldParentType;
        state.line = nextLine;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/code.js
  var require_code = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {
      "use strict";
      module.exports = function code(state, startLine, endLine) {
        var nextLine, last3, token;
        if (state.sCount[startLine] - state.blkIndent < 4) {
          return false;
        }
        last3 = nextLine = startLine + 1;
        while (nextLine < endLine) {
          if (state.isEmpty(nextLine)) {
            nextLine++;
            continue;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            nextLine++;
            last3 = nextLine;
            continue;
          }
          break;
        }
        state.line = last3;
        token = state.push("code_block", "code", 0);
        token.content = state.getLines(startLine, last3, 4 + state.blkIndent, false) + "\n";
        token.map = [startLine, state.line];
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/fence.js
  var require_fence = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {
      "use strict";
      module.exports = function fence(state, startLine, endLine, silent) {
        var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (pos + 3 > max) {
          return false;
        }
        marker = state.src.charCodeAt(pos);
        if (marker !== 126 && marker !== 96) {
          return false;
        }
        mem = pos;
        pos = state.skipChars(pos, marker);
        len = pos - mem;
        if (len < 3) {
          return false;
        }
        markup = state.src.slice(mem, pos);
        params = state.src.slice(pos, max);
        if (marker === 96) {
          if (params.indexOf(String.fromCharCode(marker)) >= 0) {
            return false;
          }
        }
        if (silent) {
          return true;
        }
        nextLine = startLine;
        for (; ; ) {
          nextLine++;
          if (nextLine >= endLine) {
            break;
          }
          pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (pos < max && state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          if (state.src.charCodeAt(pos) !== marker) {
            continue;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            continue;
          }
          pos = state.skipChars(pos, marker);
          if (pos - mem < len) {
            continue;
          }
          pos = state.skipSpaces(pos);
          if (pos < max) {
            continue;
          }
          haveEndMarker = true;
          break;
        }
        len = state.sCount[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);
        token = state.push("fence", "code", 0);
        token.info = params;
        token.content = state.getLines(startLine + 1, nextLine, len, true);
        token.markup = markup;
        token.map = [startLine, state.line];
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/blockquote.js
  var require_blockquote = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function blockquote(state, startLine, endLine, silent) {
        var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset2, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (state.src.charCodeAt(pos) !== 62) {
          return false;
        }
        if (silent) {
          return true;
        }
        oldBMarks = [];
        oldBSCount = [];
        oldSCount = [];
        oldTShift = [];
        terminatorRules = state.md.block.ruler.getRules("blockquote");
        oldParentType = state.parentType;
        state.parentType = "blockquote";
        for (nextLine = startLine; nextLine < endLine; nextLine++) {
          isOutdented = state.sCount[nextLine] < state.blkIndent;
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (pos >= max) {
            break;
          }
          if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
            initial = state.sCount[nextLine] + 1;
            if (state.src.charCodeAt(pos) === 32) {
              pos++;
              initial++;
              adjustTab = false;
              spaceAfterMarker = true;
            } else if (state.src.charCodeAt(pos) === 9) {
              spaceAfterMarker = true;
              if ((state.bsCount[nextLine] + initial) % 4 === 3) {
                pos++;
                initial++;
                adjustTab = false;
              } else {
                adjustTab = true;
              }
            } else {
              spaceAfterMarker = false;
            }
            offset2 = initial;
            oldBMarks.push(state.bMarks[nextLine]);
            state.bMarks[nextLine] = pos;
            while (pos < max) {
              ch = state.src.charCodeAt(pos);
              if (isSpace(ch)) {
                if (ch === 9) {
                  offset2 += 4 - (offset2 + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
                } else {
                  offset2++;
                }
              } else {
                break;
              }
              pos++;
            }
            lastLineEmpty = pos >= max;
            oldBSCount.push(state.bsCount[nextLine]);
            state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] = offset2 - initial;
            oldTShift.push(state.tShift[nextLine]);
            state.tShift[nextLine] = pos - state.bMarks[nextLine];
            continue;
          }
          if (lastLineEmpty) {
            break;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            state.lineMax = nextLine;
            if (state.blkIndent !== 0) {
              oldBMarks.push(state.bMarks[nextLine]);
              oldBSCount.push(state.bsCount[nextLine]);
              oldTShift.push(state.tShift[nextLine]);
              oldSCount.push(state.sCount[nextLine]);
              state.sCount[nextLine] -= state.blkIndent;
            }
            break;
          }
          oldBMarks.push(state.bMarks[nextLine]);
          oldBSCount.push(state.bsCount[nextLine]);
          oldTShift.push(state.tShift[nextLine]);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] = -1;
        }
        oldIndent = state.blkIndent;
        state.blkIndent = 0;
        token = state.push("blockquote_open", "blockquote", 1);
        token.markup = ">";
        token.map = lines = [startLine, 0];
        state.md.block.tokenize(state, startLine, nextLine);
        token = state.push("blockquote_close", "blockquote", -1);
        token.markup = ">";
        state.lineMax = oldLineMax;
        state.parentType = oldParentType;
        lines[1] = state.line;
        for (i = 0; i < oldTShift.length; i++) {
          state.bMarks[i + startLine] = oldBMarks[i];
          state.tShift[i + startLine] = oldTShift[i];
          state.sCount[i + startLine] = oldSCount[i];
          state.bsCount[i + startLine] = oldBSCount[i];
        }
        state.blkIndent = oldIndent;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/hr.js
  var require_hr = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function hr(state, startLine, endLine, silent) {
        var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        marker = state.src.charCodeAt(pos++);
        if (marker !== 42 && marker !== 45 && marker !== 95) {
          return false;
        }
        cnt = 1;
        while (pos < max) {
          ch = state.src.charCodeAt(pos++);
          if (ch !== marker && !isSpace(ch)) {
            return false;
          }
          if (ch === marker) {
            cnt++;
          }
        }
        if (cnt < 3) {
          return false;
        }
        if (silent) {
          return true;
        }
        state.line = startLine + 1;
        token = state.push("hr", "hr", 0);
        token.map = [startLine, state.line];
        token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/list.js
  var require_list = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      function skipBulletListMarker(state, startLine) {
        var marker, pos, max, ch;
        pos = state.bMarks[startLine] + state.tShift[startLine];
        max = state.eMarks[startLine];
        marker = state.src.charCodeAt(pos++);
        if (marker !== 42 && marker !== 45 && marker !== 43) {
          return -1;
        }
        if (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (!isSpace(ch)) {
            return -1;
          }
        }
        return pos;
      }
      function skipOrderedListMarker(state, startLine) {
        var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
        if (pos + 1 >= max) {
          return -1;
        }
        ch = state.src.charCodeAt(pos++);
        if (ch < 48 || ch > 57) {
          return -1;
        }
        for (; ; ) {
          if (pos >= max) {
            return -1;
          }
          ch = state.src.charCodeAt(pos++);
          if (ch >= 48 && ch <= 57) {
            if (pos - start >= 10) {
              return -1;
            }
            continue;
          }
          if (ch === 41 || ch === 46) {
            break;
          }
          return -1;
        }
        if (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (!isSpace(ch)) {
            return -1;
          }
        }
        return pos;
      }
      function markTightParagraphs(state, idx) {
        var i, l, level = state.level + 2;
        for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
          if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
            state.tokens[i + 2].hidden = true;
            state.tokens[i].hidden = true;
            i += 2;
          }
        }
      }
      module.exports = function list(state, startLine, endLine, silent) {
        var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, offset2, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, nextLine = startLine, isTerminatingParagraph = false, tight = true;
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          return false;
        }
        if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) {
          return false;
        }
        if (silent && state.parentType === "paragraph") {
          if (state.sCount[nextLine] >= state.blkIndent) {
            isTerminatingParagraph = true;
          }
        }
        if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
          isOrdered = true;
          start = state.bMarks[nextLine] + state.tShift[nextLine];
          markerValue = Number(state.src.slice(start, posAfterMarker - 1));
          if (isTerminatingParagraph && markerValue !== 1)
            return false;
        } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
          isOrdered = false;
        } else {
          return false;
        }
        if (isTerminatingParagraph) {
          if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine])
            return false;
        }
        if (silent) {
          return true;
        }
        markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
        listTokIdx = state.tokens.length;
        if (isOrdered) {
          token = state.push("ordered_list_open", "ol", 1);
          if (markerValue !== 1) {
            token.attrs = [["start", markerValue]];
          }
        } else {
          token = state.push("bullet_list_open", "ul", 1);
        }
        token.map = listLines = [nextLine, 0];
        token.markup = String.fromCharCode(markerCharCode);
        prevEmptyEnd = false;
        terminatorRules = state.md.block.ruler.getRules("list");
        oldParentType = state.parentType;
        state.parentType = "list";
        while (nextLine < endLine) {
          pos = posAfterMarker;
          max = state.eMarks[nextLine];
          initial = offset2 = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
          while (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (ch === 9) {
              offset2 += 4 - (offset2 + state.bsCount[nextLine]) % 4;
            } else if (ch === 32) {
              offset2++;
            } else {
              break;
            }
            pos++;
          }
          contentStart = pos;
          if (contentStart >= max) {
            indentAfterMarker = 1;
          } else {
            indentAfterMarker = offset2 - initial;
          }
          if (indentAfterMarker > 4) {
            indentAfterMarker = 1;
          }
          indent = initial + indentAfterMarker;
          token = state.push("list_item_open", "li", 1);
          token.markup = String.fromCharCode(markerCharCode);
          token.map = itemLines = [nextLine, 0];
          if (isOrdered) {
            token.info = state.src.slice(start, posAfterMarker - 1);
          }
          oldTight = state.tight;
          oldTShift = state.tShift[nextLine];
          oldSCount = state.sCount[nextLine];
          oldListIndent = state.listIndent;
          state.listIndent = state.blkIndent;
          state.blkIndent = indent;
          state.tight = true;
          state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
          state.sCount[nextLine] = offset2;
          if (contentStart >= max && state.isEmpty(nextLine + 1)) {
            state.line = Math.min(state.line + 2, endLine);
          } else {
            state.md.block.tokenize(state, nextLine, endLine, true);
          }
          if (!state.tight || prevEmptyEnd) {
            tight = false;
          }
          prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
          state.blkIndent = state.listIndent;
          state.listIndent = oldListIndent;
          state.tShift[nextLine] = oldTShift;
          state.sCount[nextLine] = oldSCount;
          state.tight = oldTight;
          token = state.push("list_item_close", "li", -1);
          token.markup = String.fromCharCode(markerCharCode);
          nextLine = state.line;
          itemLines[1] = nextLine;
          if (nextLine >= endLine) {
            break;
          }
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            break;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
          if (isOrdered) {
            posAfterMarker = skipOrderedListMarker(state, nextLine);
            if (posAfterMarker < 0) {
              break;
            }
            start = state.bMarks[nextLine] + state.tShift[nextLine];
          } else {
            posAfterMarker = skipBulletListMarker(state, nextLine);
            if (posAfterMarker < 0) {
              break;
            }
          }
          if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
            break;
          }
        }
        if (isOrdered) {
          token = state.push("ordered_list_close", "ol", -1);
        } else {
          token = state.push("bullet_list_close", "ul", -1);
        }
        token.markup = String.fromCharCode(markerCharCode);
        listLines[1] = nextLine;
        state.line = nextLine;
        state.parentType = oldParentType;
        if (tight) {
          markTightParagraphs(state, listTokIdx);
        }
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/reference.js
  var require_reference = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {
      "use strict";
      var normalizeReference = require_utils().normalizeReference;
      var isSpace = require_utils().isSpace;
      module.exports = function reference(state, startLine, _endLine, silent) {
        var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str2, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (state.src.charCodeAt(pos) !== 91) {
          return false;
        }
        while (++pos < max) {
          if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
            if (pos + 1 === max) {
              return false;
            }
            if (state.src.charCodeAt(pos + 1) !== 58) {
              return false;
            }
            break;
          }
        }
        endLine = state.lineMax;
        terminatorRules = state.md.block.ruler.getRules("reference");
        oldParentType = state.parentType;
        state.parentType = "reference";
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
          if (state.sCount[nextLine] - state.blkIndent > 3) {
            continue;
          }
          if (state.sCount[nextLine] < 0) {
            continue;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
        }
        str2 = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        max = str2.length;
        for (pos = 1; pos < max; pos++) {
          ch = str2.charCodeAt(pos);
          if (ch === 91) {
            return false;
          } else if (ch === 93) {
            labelEnd = pos;
            break;
          } else if (ch === 10) {
            lines++;
          } else if (ch === 92) {
            pos++;
            if (pos < max && str2.charCodeAt(pos) === 10) {
              lines++;
            }
          }
        }
        if (labelEnd < 0 || str2.charCodeAt(labelEnd + 1) !== 58) {
          return false;
        }
        for (pos = labelEnd + 2; pos < max; pos++) {
          ch = str2.charCodeAt(pos);
          if (ch === 10) {
            lines++;
          } else if (isSpace(ch)) {
          } else {
            break;
          }
        }
        res = state.md.helpers.parseLinkDestination(str2, pos, max);
        if (!res.ok) {
          return false;
        }
        href = state.md.normalizeLink(res.str);
        if (!state.md.validateLink(href)) {
          return false;
        }
        pos = res.pos;
        lines += res.lines;
        destEndPos = pos;
        destEndLineNo = lines;
        start = pos;
        for (; pos < max; pos++) {
          ch = str2.charCodeAt(pos);
          if (ch === 10) {
            lines++;
          } else if (isSpace(ch)) {
          } else {
            break;
          }
        }
        res = state.md.helpers.parseLinkTitle(str2, pos, max);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          lines += res.lines;
        } else {
          title = "";
          pos = destEndPos;
          lines = destEndLineNo;
        }
        while (pos < max) {
          ch = str2.charCodeAt(pos);
          if (!isSpace(ch)) {
            break;
          }
          pos++;
        }
        if (pos < max && str2.charCodeAt(pos) !== 10) {
          if (title) {
            title = "";
            pos = destEndPos;
            lines = destEndLineNo;
            while (pos < max) {
              ch = str2.charCodeAt(pos);
              if (!isSpace(ch)) {
                break;
              }
              pos++;
            }
          }
        }
        if (pos < max && str2.charCodeAt(pos) !== 10) {
          return false;
        }
        label = normalizeReference(str2.slice(1, labelEnd));
        if (!label) {
          return false;
        }
        if (silent) {
          return true;
        }
        if (typeof state.env.references === "undefined") {
          state.env.references = {};
        }
        if (typeof state.env.references[label] === "undefined") {
          state.env.references[label] = { title, href };
        }
        state.parentType = oldParentType;
        state.line = startLine + lines + 1;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/html_blocks.js
  var require_html_blocks = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {
      "use strict";
      module.exports = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "section",
        "source",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul"
      ];
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/html_re.js
  var require_html_re = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/common/html_re.js"(exports, module) {
      "use strict";
      var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
      var unquoted = "[^\"'=<>`\\x00-\\x20]+";
      var single_quoted = "'[^']*'";
      var double_quoted = '"[^"]*"';
      var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
      var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
      var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
      var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
      var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
      var processing = "<[?][\\s\\S]*?[?]>";
      var declaration = "<![A-Z]+\\s+[^>]*>";
      var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
      var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
      var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
      module.exports.HTML_TAG_RE = HTML_TAG_RE;
      module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/html_block.js
  var require_html_block = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {
      "use strict";
      var block_names = require_html_blocks();
      var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
      var HTML_SEQUENCES = [
        [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
        [/^<!--/, /-->/, true],
        [/^<\?/, /\?>/, true],
        [/^<![A-Z]/, />/, true],
        [/^<!\[CDATA\[/, /\]\]>/, true],
        [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
        [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
      ];
      module.exports = function html_block(state, startLine, endLine, silent) {
        var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (!state.md.options.html) {
          return false;
        }
        if (state.src.charCodeAt(pos) !== 60) {
          return false;
        }
        lineText = state.src.slice(pos, max);
        for (i = 0; i < HTML_SEQUENCES.length; i++) {
          if (HTML_SEQUENCES[i][0].test(lineText)) {
            break;
          }
        }
        if (i === HTML_SEQUENCES.length) {
          return false;
        }
        if (silent) {
          return HTML_SEQUENCES[i][2];
        }
        nextLine = startLine + 1;
        if (!HTML_SEQUENCES[i][1].test(lineText)) {
          for (; nextLine < endLine; nextLine++) {
            if (state.sCount[nextLine] < state.blkIndent) {
              break;
            }
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            lineText = state.src.slice(pos, max);
            if (HTML_SEQUENCES[i][1].test(lineText)) {
              if (lineText.length !== 0) {
                nextLine++;
              }
              break;
            }
          }
        }
        state.line = nextLine;
        token = state.push("html_block", "", 0);
        token.map = [startLine, nextLine];
        token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/heading.js
  var require_heading = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function heading(state, startLine, endLine, silent) {
        var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        ch = state.src.charCodeAt(pos);
        if (ch !== 35 || pos >= max) {
          return false;
        }
        level = 1;
        ch = state.src.charCodeAt(++pos);
        while (ch === 35 && pos < max && level <= 6) {
          level++;
          ch = state.src.charCodeAt(++pos);
        }
        if (level > 6 || pos < max && !isSpace(ch)) {
          return false;
        }
        if (silent) {
          return true;
        }
        max = state.skipSpacesBack(max, pos);
        tmp = state.skipCharsBack(max, 35, pos);
        if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
          max = tmp;
        }
        state.line = startLine + 1;
        token = state.push("heading_open", "h" + String(level), 1);
        token.markup = "########".slice(0, level);
        token.map = [startLine, state.line];
        token = state.push("inline", "", 0);
        token.content = state.src.slice(pos, max).trim();
        token.map = [startLine, state.line];
        token.children = [];
        token = state.push("heading_close", "h" + String(level), -1);
        token.markup = "########".slice(0, level);
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/lheading.js
  var require_lheading = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {
      "use strict";
      module.exports = function lheading(state, startLine, endLine) {
        var content, terminate, i, l, token, pos, max, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        oldParentType = state.parentType;
        state.parentType = "paragraph";
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
          if (state.sCount[nextLine] - state.blkIndent > 3) {
            continue;
          }
          if (state.sCount[nextLine] >= state.blkIndent) {
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            if (pos < max) {
              marker = state.src.charCodeAt(pos);
              if (marker === 45 || marker === 61) {
                pos = state.skipChars(pos, marker);
                pos = state.skipSpaces(pos);
                if (pos >= max) {
                  level = marker === 61 ? 1 : 2;
                  break;
                }
              }
            }
          }
          if (state.sCount[nextLine] < 0) {
            continue;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
        }
        if (!level) {
          return false;
        }
        content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        state.line = nextLine + 1;
        token = state.push("heading_open", "h" + String(level), 1);
        token.markup = String.fromCharCode(marker);
        token.map = [startLine, state.line];
        token = state.push("inline", "", 0);
        token.content = content;
        token.map = [startLine, state.line - 1];
        token.children = [];
        token = state.push("heading_close", "h" + String(level), -1);
        token.markup = String.fromCharCode(marker);
        state.parentType = oldParentType;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/paragraph.js
  var require_paragraph = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {
      "use strict";
      module.exports = function paragraph(state, startLine, endLine) {
        var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph");
        oldParentType = state.parentType;
        state.parentType = "paragraph";
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
          if (state.sCount[nextLine] - state.blkIndent > 3) {
            continue;
          }
          if (state.sCount[nextLine] < 0) {
            continue;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
        }
        content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        state.line = nextLine;
        token = state.push("paragraph_open", "p", 1);
        token.map = [startLine, state.line];
        token = state.push("inline", "", 0);
        token.content = content;
        token.map = [startLine, state.line];
        token.children = [];
        token = state.push("paragraph_close", "p", -1);
        state.parentType = oldParentType;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/state_block.js
  var require_state_block = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {
      "use strict";
      var Token3 = require_token();
      var isSpace = require_utils().isSpace;
      function StateBlock(src, md2, env, tokens) {
        var ch, s, start, pos, len, indent, offset2, indent_found;
        this.src = src;
        this.md = md2;
        this.env = env;
        this.tokens = tokens;
        this.bMarks = [];
        this.eMarks = [];
        this.tShift = [];
        this.sCount = [];
        this.bsCount = [];
        this.blkIndent = 0;
        this.line = 0;
        this.lineMax = 0;
        this.tight = false;
        this.ddIndent = -1;
        this.listIndent = -1;
        this.parentType = "root";
        this.level = 0;
        this.result = "";
        s = this.src;
        indent_found = false;
        for (start = pos = indent = offset2 = 0, len = s.length; pos < len; pos++) {
          ch = s.charCodeAt(pos);
          if (!indent_found) {
            if (isSpace(ch)) {
              indent++;
              if (ch === 9) {
                offset2 += 4 - offset2 % 4;
              } else {
                offset2++;
              }
              continue;
            } else {
              indent_found = true;
            }
          }
          if (ch === 10 || pos === len - 1) {
            if (ch !== 10) {
              pos++;
            }
            this.bMarks.push(start);
            this.eMarks.push(pos);
            this.tShift.push(indent);
            this.sCount.push(offset2);
            this.bsCount.push(0);
            indent_found = false;
            indent = 0;
            offset2 = 0;
            start = pos + 1;
          }
        }
        this.bMarks.push(s.length);
        this.eMarks.push(s.length);
        this.tShift.push(0);
        this.sCount.push(0);
        this.bsCount.push(0);
        this.lineMax = this.bMarks.length - 1;
      }
      StateBlock.prototype.push = function(type2, tag, nesting) {
        var token = new Token3(type2, tag, nesting);
        token.block = true;
        if (nesting < 0)
          this.level--;
        token.level = this.level;
        if (nesting > 0)
          this.level++;
        this.tokens.push(token);
        return token;
      };
      StateBlock.prototype.isEmpty = function isEmpty(line) {
        return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
      };
      StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
        for (var max = this.lineMax; from < max; from++) {
          if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
            break;
          }
        }
        return from;
      };
      StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
        var ch;
        for (var max = this.src.length; pos < max; pos++) {
          ch = this.src.charCodeAt(pos);
          if (!isSpace(ch)) {
            break;
          }
        }
        return pos;
      };
      StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
        if (pos <= min) {
          return pos;
        }
        while (pos > min) {
          if (!isSpace(this.src.charCodeAt(--pos))) {
            return pos + 1;
          }
        }
        return pos;
      };
      StateBlock.prototype.skipChars = function skipChars(pos, code) {
        for (var max = this.src.length; pos < max; pos++) {
          if (this.src.charCodeAt(pos) !== code) {
            break;
          }
        }
        return pos;
      };
      StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
        if (pos <= min) {
          return pos;
        }
        while (pos > min) {
          if (code !== this.src.charCodeAt(--pos)) {
            return pos + 1;
          }
        }
        return pos;
      };
      StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
        var i, lineIndent, ch, first3, last3, queue, lineStart, line = begin;
        if (begin >= end) {
          return "";
        }
        queue = new Array(end - begin);
        for (i = 0; line < end; line++, i++) {
          lineIndent = 0;
          lineStart = first3 = this.bMarks[line];
          if (line + 1 < end || keepLastLF) {
            last3 = this.eMarks[line] + 1;
          } else {
            last3 = this.eMarks[line];
          }
          while (first3 < last3 && lineIndent < indent) {
            ch = this.src.charCodeAt(first3);
            if (isSpace(ch)) {
              if (ch === 9) {
                lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
              } else {
                lineIndent++;
              }
            } else if (first3 - lineStart < this.tShift[line]) {
              lineIndent++;
            } else {
              break;
            }
            first3++;
          }
          if (lineIndent > indent) {
            queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first3, last3);
          } else {
            queue[i] = this.src.slice(first3, last3);
          }
        }
        return queue.join("");
      };
      StateBlock.prototype.Token = Token3;
      module.exports = StateBlock;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/parser_block.js
  var require_parser_block = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/parser_block.js"(exports, module) {
      "use strict";
      var Ruler = require_ruler();
      var _rules = [
        ["table", require_table(), ["paragraph", "reference"]],
        ["code", require_code()],
        ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]],
        ["blockquote", require_blockquote(), ["paragraph", "reference", "blockquote", "list"]],
        ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]],
        ["list", require_list(), ["paragraph", "reference", "blockquote"]],
        ["reference", require_reference()],
        ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]],
        ["heading", require_heading(), ["paragraph", "reference", "blockquote"]],
        ["lheading", require_lheading()],
        ["paragraph", require_paragraph()]
      ];
      function ParserBlock() {
        this.ruler = new Ruler();
        for (var i = 0; i < _rules.length; i++) {
          this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
        }
      }
      ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
        var ok, i, prevLine, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
        while (line < endLine) {
          state.line = line = state.skipEmptyLines(line);
          if (line >= endLine) {
            break;
          }
          if (state.sCount[line] < state.blkIndent) {
            break;
          }
          if (state.level >= maxNesting) {
            state.line = endLine;
            break;
          }
          prevLine = state.line;
          for (i = 0; i < len; i++) {
            ok = rules[i](state, line, endLine, false);
            if (ok) {
              if (prevLine >= state.line) {
                throw new Error("block rule didn't increment state.line");
              }
              break;
            }
          }
          if (!ok)
            throw new Error("none of the block rules matched");
          state.tight = !hasEmptyLines;
          if (state.isEmpty(state.line - 1)) {
            hasEmptyLines = true;
          }
          line = state.line;
          if (line < endLine && state.isEmpty(line)) {
            hasEmptyLines = true;
            line++;
            state.line = line;
          }
        }
      };
      ParserBlock.prototype.parse = function(src, md2, env, outTokens) {
        var state;
        if (!src) {
          return;
        }
        state = new this.State(src, md2, env, outTokens);
        this.tokenize(state, state.line, state.lineMax);
      };
      ParserBlock.prototype.State = require_state_block();
      module.exports = ParserBlock;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/text.js
  var require_text = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {
      "use strict";
      function isTerminatorChar(ch) {
        switch (ch) {
          case 10:
          case 33:
          case 35:
          case 36:
          case 37:
          case 38:
          case 42:
          case 43:
          case 45:
          case 58:
          case 60:
          case 61:
          case 62:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 125:
          case 126:
            return true;
          default:
            return false;
        }
      }
      module.exports = function text(state, silent) {
        var pos = state.pos;
        while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
          pos++;
        }
        if (pos === state.pos) {
          return false;
        }
        if (!silent) {
          state.pending += state.src.slice(state.pos, pos);
        }
        state.pos = pos;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/linkify.js
  var require_linkify2 = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/linkify.js"(exports, module) {
      "use strict";
      var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
      module.exports = function linkify(state, silent) {
        var pos, max, match, proto, link, url, fullUrl, token;
        if (!state.md.options.linkify)
          return false;
        if (state.linkLevel > 0)
          return false;
        pos = state.pos;
        max = state.posMax;
        if (pos + 3 > max)
          return false;
        if (state.src.charCodeAt(pos) !== 58)
          return false;
        if (state.src.charCodeAt(pos + 1) !== 47)
          return false;
        if (state.src.charCodeAt(pos + 2) !== 47)
          return false;
        match = state.pending.match(SCHEME_RE);
        if (!match)
          return false;
        proto = match[1];
        link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
        if (!link)
          return false;
        url = link.url;
        if (url.length <= proto.length)
          return false;
        url = url.replace(/\*+$/, "");
        fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl))
          return false;
        if (!silent) {
          state.pending = state.pending.slice(0, -proto.length);
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "linkify";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "linkify";
          token.info = "auto";
        }
        state.pos += url.length - proto.length;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/newline.js
  var require_newline = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function newline(state, silent) {
        var pmax, max, ws, pos = state.pos;
        if (state.src.charCodeAt(pos) !== 10) {
          return false;
        }
        pmax = state.pending.length - 1;
        max = state.posMax;
        if (!silent) {
          if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
            if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
              ws = pmax - 1;
              while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
                ws--;
              state.pending = state.pending.slice(0, ws);
              state.push("hardbreak", "br", 0);
            } else {
              state.pending = state.pending.slice(0, -1);
              state.push("softbreak", "br", 0);
            }
          } else {
            state.push("softbreak", "br", 0);
          }
        }
        pos++;
        while (pos < max && isSpace(state.src.charCodeAt(pos))) {
          pos++;
        }
        state.pos = pos;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/escape.js
  var require_escape = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      var ESCAPED = [];
      for (i = 0; i < 256; i++) {
        ESCAPED.push(0);
      }
      var i;
      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
        ESCAPED[ch.charCodeAt(0)] = 1;
      });
      module.exports = function escape3(state, silent) {
        var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;
        if (state.src.charCodeAt(pos) !== 92)
          return false;
        pos++;
        if (pos >= max)
          return false;
        ch1 = state.src.charCodeAt(pos);
        if (ch1 === 10) {
          if (!silent) {
            state.push("hardbreak", "br", 0);
          }
          pos++;
          while (pos < max) {
            ch1 = state.src.charCodeAt(pos);
            if (!isSpace(ch1))
              break;
            pos++;
          }
          state.pos = pos;
          return true;
        }
        escapedStr = state.src[pos];
        if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
          ch2 = state.src.charCodeAt(pos + 1);
          if (ch2 >= 56320 && ch2 <= 57343) {
            escapedStr += state.src[pos + 1];
            pos++;
          }
        }
        origStr = "\\" + escapedStr;
        if (!silent) {
          token = state.push("text_special", "", 0);
          if (ch1 < 256 && ESCAPED[ch1] !== 0) {
            token.content = escapedStr;
          } else {
            token.content = origStr;
          }
          token.markup = origStr;
          token.info = "escape";
        }
        state.pos = pos + 1;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/backticks.js
  var require_backticks = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {
      "use strict";
      module.exports = function backtick(state, silent) {
        var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
        if (ch !== 96) {
          return false;
        }
        start = pos;
        pos++;
        max = state.posMax;
        while (pos < max && state.src.charCodeAt(pos) === 96) {
          pos++;
        }
        marker = state.src.slice(start, pos);
        openerLength = marker.length;
        if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
          if (!silent)
            state.pending += marker;
          state.pos += openerLength;
          return true;
        }
        matchEnd = pos;
        while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
          matchEnd = matchStart + 1;
          while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
            matchEnd++;
          }
          closerLength = matchEnd - matchStart;
          if (closerLength === openerLength) {
            if (!silent) {
              token = state.push("code_inline", "code", 0);
              token.markup = marker;
              token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
            }
            state.pos = matchEnd;
            return true;
          }
          state.backticks[closerLength] = matchStart;
        }
        state.backticksScanned = true;
        if (!silent)
          state.pending += marker;
        state.pos += openerLength;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/strikethrough.js
  var require_strikethrough = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {
      "use strict";
      module.exports.tokenize = function strikethrough(state, silent) {
        var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
        if (silent) {
          return false;
        }
        if (marker !== 126) {
          return false;
        }
        scanned = state.scanDelims(state.pos, true);
        len = scanned.length;
        ch = String.fromCharCode(marker);
        if (len < 2) {
          return false;
        }
        if (len % 2) {
          token = state.push("text", "", 0);
          token.content = ch;
          len--;
        }
        for (i = 0; i < len; i += 2) {
          token = state.push("text", "", 0);
          token.content = ch + ch;
          state.delimiters.push({
            marker,
            length: 0,
            token: state.tokens.length - 1,
            end: -1,
            open: scanned.can_open,
            close: scanned.can_close
          });
        }
        state.pos += scanned.length;
        return true;
      };
      function postProcess(state, delimiters) {
        var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
        for (i = 0; i < max; i++) {
          startDelim = delimiters[i];
          if (startDelim.marker !== 126) {
            continue;
          }
          if (startDelim.end === -1) {
            continue;
          }
          endDelim = delimiters[startDelim.end];
          token = state.tokens[startDelim.token];
          token.type = "s_open";
          token.tag = "s";
          token.nesting = 1;
          token.markup = "~~";
          token.content = "";
          token = state.tokens[endDelim.token];
          token.type = "s_close";
          token.tag = "s";
          token.nesting = -1;
          token.markup = "~~";
          token.content = "";
          if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
            loneMarkers.push(endDelim.token - 1);
          }
        }
        while (loneMarkers.length) {
          i = loneMarkers.pop();
          j = i + 1;
          while (j < state.tokens.length && state.tokens[j].type === "s_close") {
            j++;
          }
          j--;
          if (i !== j) {
            token = state.tokens[j];
            state.tokens[j] = state.tokens[i];
            state.tokens[i] = token;
          }
        }
      }
      module.exports.postProcess = function strikethrough(state) {
        var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
        postProcess(state, state.delimiters);
        for (curr = 0; curr < max; curr++) {
          if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
            postProcess(state, tokens_meta[curr].delimiters);
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/emphasis.js
  var require_emphasis = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {
      "use strict";
      module.exports.tokenize = function emphasis(state, silent) {
        var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
        if (silent) {
          return false;
        }
        if (marker !== 95 && marker !== 42) {
          return false;
        }
        scanned = state.scanDelims(state.pos, marker === 42);
        for (i = 0; i < scanned.length; i++) {
          token = state.push("text", "", 0);
          token.content = String.fromCharCode(marker);
          state.delimiters.push({
            marker,
            length: scanned.length,
            token: state.tokens.length - 1,
            end: -1,
            open: scanned.can_open,
            close: scanned.can_close
          });
        }
        state.pos += scanned.length;
        return true;
      };
      function postProcess(state, delimiters) {
        var i, startDelim, endDelim, token, ch, isStrong, max = delimiters.length;
        for (i = max - 1; i >= 0; i--) {
          startDelim = delimiters[i];
          if (startDelim.marker !== 95 && startDelim.marker !== 42) {
            continue;
          }
          if (startDelim.end === -1) {
            continue;
          }
          endDelim = delimiters[startDelim.end];
          isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
          ch = String.fromCharCode(startDelim.marker);
          token = state.tokens[startDelim.token];
          token.type = isStrong ? "strong_open" : "em_open";
          token.tag = isStrong ? "strong" : "em";
          token.nesting = 1;
          token.markup = isStrong ? ch + ch : ch;
          token.content = "";
          token = state.tokens[endDelim.token];
          token.type = isStrong ? "strong_close" : "em_close";
          token.tag = isStrong ? "strong" : "em";
          token.nesting = -1;
          token.markup = isStrong ? ch + ch : ch;
          token.content = "";
          if (isStrong) {
            state.tokens[delimiters[i - 1].token].content = "";
            state.tokens[delimiters[startDelim.end + 1].token].content = "";
            i--;
          }
        }
      }
      module.exports.postProcess = function emphasis(state) {
        var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
        postProcess(state, state.delimiters);
        for (curr = 0; curr < max; curr++) {
          if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
            postProcess(state, tokens_meta[curr].delimiters);
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/link.js
  var require_link = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {
      "use strict";
      var normalizeReference = require_utils().normalizeReference;
      var isSpace = require_utils().isSpace;
      module.exports = function link(state, silent) {
        var attrs, code, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
        if (state.src.charCodeAt(state.pos) !== 91) {
          return false;
        }
        labelStart = state.pos + 1;
        labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
        if (labelEnd < 0) {
          return false;
        }
        pos = labelEnd + 1;
        if (pos < max && state.src.charCodeAt(pos) === 40) {
          parseReference = false;
          pos++;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          if (pos >= max) {
            return false;
          }
          start = pos;
          res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
          if (res.ok) {
            href = state.md.normalizeLink(res.str);
            if (state.md.validateLink(href)) {
              pos = res.pos;
            } else {
              href = "";
            }
            start = pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10) {
                break;
              }
            }
            res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
            if (pos < max && start !== pos && res.ok) {
              title = res.str;
              pos = res.pos;
              for (; pos < max; pos++) {
                code = state.src.charCodeAt(pos);
                if (!isSpace(code) && code !== 10) {
                  break;
                }
              }
            }
          }
          if (pos >= max || state.src.charCodeAt(pos) !== 41) {
            parseReference = true;
          }
          pos++;
        }
        if (parseReference) {
          if (typeof state.env.references === "undefined") {
            return false;
          }
          if (pos < max && state.src.charCodeAt(pos) === 91) {
            start = pos + 1;
            pos = state.md.helpers.parseLinkLabel(state, pos);
            if (pos >= 0) {
              label = state.src.slice(start, pos++);
            } else {
              pos = labelEnd + 1;
            }
          } else {
            pos = labelEnd + 1;
          }
          if (!label) {
            label = state.src.slice(labelStart, labelEnd);
          }
          ref = state.env.references[normalizeReference(label)];
          if (!ref) {
            state.pos = oldPos;
            return false;
          }
          href = ref.href;
          title = ref.title;
        }
        if (!silent) {
          state.pos = labelStart;
          state.posMax = labelEnd;
          token = state.push("link_open", "a", 1);
          token.attrs = attrs = [["href", href]];
          if (title) {
            attrs.push(["title", title]);
          }
          state.linkLevel++;
          state.md.inline.tokenize(state);
          state.linkLevel--;
          token = state.push("link_close", "a", -1);
        }
        state.pos = pos;
        state.posMax = max;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/image.js
  var require_image = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {
      "use strict";
      var normalizeReference = require_utils().normalizeReference;
      var isSpace = require_utils().isSpace;
      module.exports = function image(state, silent) {
        var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
        if (state.src.charCodeAt(state.pos) !== 33) {
          return false;
        }
        if (state.src.charCodeAt(state.pos + 1) !== 91) {
          return false;
        }
        labelStart = state.pos + 2;
        labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
        if (labelEnd < 0) {
          return false;
        }
        pos = labelEnd + 1;
        if (pos < max && state.src.charCodeAt(pos) === 40) {
          pos++;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          if (pos >= max) {
            return false;
          }
          start = pos;
          res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
          if (res.ok) {
            href = state.md.normalizeLink(res.str);
            if (state.md.validateLink(href)) {
              pos = res.pos;
            } else {
              href = "";
            }
          }
          start = pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10) {
                break;
              }
            }
          } else {
            title = "";
          }
          if (pos >= max || state.src.charCodeAt(pos) !== 41) {
            state.pos = oldPos;
            return false;
          }
          pos++;
        } else {
          if (typeof state.env.references === "undefined") {
            return false;
          }
          if (pos < max && state.src.charCodeAt(pos) === 91) {
            start = pos + 1;
            pos = state.md.helpers.parseLinkLabel(state, pos);
            if (pos >= 0) {
              label = state.src.slice(start, pos++);
            } else {
              pos = labelEnd + 1;
            }
          } else {
            pos = labelEnd + 1;
          }
          if (!label) {
            label = state.src.slice(labelStart, labelEnd);
          }
          ref = state.env.references[normalizeReference(label)];
          if (!ref) {
            state.pos = oldPos;
            return false;
          }
          href = ref.href;
          title = ref.title;
        }
        if (!silent) {
          content = state.src.slice(labelStart, labelEnd);
          state.md.inline.parse(content, state.md, state.env, tokens = []);
          token = state.push("image", "img", 0);
          token.attrs = attrs = [["src", href], ["alt", ""]];
          token.children = tokens;
          token.content = content;
          if (title) {
            attrs.push(["title", title]);
          }
        }
        state.pos = pos;
        state.posMax = max;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/autolink.js
  var require_autolink = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {
      "use strict";
      var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
      var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
      module.exports = function autolink(state, silent) {
        var url, fullUrl, token, ch, start, max, pos = state.pos;
        if (state.src.charCodeAt(pos) !== 60) {
          return false;
        }
        start = state.pos;
        max = state.posMax;
        for (; ; ) {
          if (++pos >= max)
            return false;
          ch = state.src.charCodeAt(pos);
          if (ch === 60)
            return false;
          if (ch === 62)
            break;
        }
        url = state.src.slice(start + 1, pos);
        if (AUTOLINK_RE.test(url)) {
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) {
            return false;
          }
          if (!silent) {
            token = state.push("link_open", "a", 1);
            token.attrs = [["href", fullUrl]];
            token.markup = "autolink";
            token.info = "auto";
            token = state.push("text", "", 0);
            token.content = state.md.normalizeLinkText(url);
            token = state.push("link_close", "a", -1);
            token.markup = "autolink";
            token.info = "auto";
          }
          state.pos += url.length + 2;
          return true;
        }
        if (EMAIL_RE.test(url)) {
          fullUrl = state.md.normalizeLink("mailto:" + url);
          if (!state.md.validateLink(fullUrl)) {
            return false;
          }
          if (!silent) {
            token = state.push("link_open", "a", 1);
            token.attrs = [["href", fullUrl]];
            token.markup = "autolink";
            token.info = "auto";
            token = state.push("text", "", 0);
            token.content = state.md.normalizeLinkText(url);
            token = state.push("link_close", "a", -1);
            token.markup = "autolink";
            token.info = "auto";
          }
          state.pos += url.length + 2;
          return true;
        }
        return false;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/html_inline.js
  var require_html_inline = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {
      "use strict";
      var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
      function isLinkOpen(str2) {
        return /^<a[>\s]/i.test(str2);
      }
      function isLinkClose(str2) {
        return /^<\/a\s*>/i.test(str2);
      }
      function isLetter(ch) {
        var lc = ch | 32;
        return lc >= 97 && lc <= 122;
      }
      module.exports = function html_inline(state, silent) {
        var ch, match, max, token, pos = state.pos;
        if (!state.md.options.html) {
          return false;
        }
        max = state.posMax;
        if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
          return false;
        }
        ch = state.src.charCodeAt(pos + 1);
        if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
          return false;
        }
        match = state.src.slice(pos).match(HTML_TAG_RE);
        if (!match) {
          return false;
        }
        if (!silent) {
          token = state.push("html_inline", "", 0);
          token.content = match[0];
          if (isLinkOpen(token.content))
            state.linkLevel++;
          if (isLinkClose(token.content))
            state.linkLevel--;
        }
        state.pos += match[0].length;
        return true;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/entity.js
  var require_entity = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {
      "use strict";
      var entities = require_entities2();
      var has = require_utils().has;
      var isValidEntityCode = require_utils().isValidEntityCode;
      var fromCodePoint = require_utils().fromCodePoint;
      var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
      var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
      module.exports = function entity(state, silent) {
        var ch, code, match, token, pos = state.pos, max = state.posMax;
        if (state.src.charCodeAt(pos) !== 38)
          return false;
        if (pos + 1 >= max)
          return false;
        ch = state.src.charCodeAt(pos + 1);
        if (ch === 35) {
          match = state.src.slice(pos).match(DIGITAL_RE);
          if (match) {
            if (!silent) {
              code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
              token = state.push("text_special", "", 0);
              token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
              token.markup = match[0];
              token.info = "entity";
            }
            state.pos += match[0].length;
            return true;
          }
        } else {
          match = state.src.slice(pos).match(NAMED_RE);
          if (match) {
            if (has(entities, match[1])) {
              if (!silent) {
                token = state.push("text_special", "", 0);
                token.content = entities[match[1]];
                token.markup = match[0];
                token.info = "entity";
              }
              state.pos += match[0].length;
              return true;
            }
          }
        }
        return false;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/balance_pairs.js
  var require_balance_pairs = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {
      "use strict";
      function processDelimiters(delimiters) {
        var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
        if (!max)
          return;
        var headerIdx = 0;
        var lastTokenIdx = -2;
        var jumps = [];
        for (closerIdx = 0; closerIdx < max; closerIdx++) {
          closer = delimiters[closerIdx];
          jumps.push(0);
          if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
            headerIdx = closerIdx;
          }
          lastTokenIdx = closer.token;
          closer.length = closer.length || 0;
          if (!closer.close)
            continue;
          if (!openersBottom.hasOwnProperty(closer.marker)) {
            openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
          }
          minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
          openerIdx = headerIdx - jumps[headerIdx] - 1;
          newMinOpenerIdx = openerIdx;
          for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
            opener = delimiters[openerIdx];
            if (opener.marker !== closer.marker)
              continue;
            if (opener.open && opener.end < 0) {
              isOddMatch = false;
              if (opener.close || closer.open) {
                if ((opener.length + closer.length) % 3 === 0) {
                  if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                    isOddMatch = true;
                  }
                }
              }
              if (!isOddMatch) {
                lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
                jumps[closerIdx] = closerIdx - openerIdx + lastJump;
                jumps[openerIdx] = lastJump;
                closer.open = false;
                opener.end = closerIdx;
                opener.close = false;
                newMinOpenerIdx = -1;
                lastTokenIdx = -2;
                break;
              }
            }
          }
          if (newMinOpenerIdx !== -1) {
            openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
          }
        }
      }
      module.exports = function link_pairs(state) {
        var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
        processDelimiters(state.delimiters);
        for (curr = 0; curr < max; curr++) {
          if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
            processDelimiters(tokens_meta[curr].delimiters);
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/fragments_join.js
  var require_fragments_join = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/fragments_join.js"(exports, module) {
      "use strict";
      module.exports = function fragments_join(state) {
        var curr, last3, level = 0, tokens = state.tokens, max = state.tokens.length;
        for (curr = last3 = 0; curr < max; curr++) {
          if (tokens[curr].nesting < 0)
            level--;
          tokens[curr].level = level;
          if (tokens[curr].nesting > 0)
            level++;
          if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
            tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
          } else {
            if (curr !== last3) {
              tokens[last3] = tokens[curr];
            }
            last3++;
          }
        }
        if (curr !== last3) {
          tokens.length = last3;
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/state_inline.js
  var require_state_inline = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {
      "use strict";
      var Token3 = require_token();
      var isWhiteSpace = require_utils().isWhiteSpace;
      var isPunctChar = require_utils().isPunctChar;
      var isMdAsciiPunct = require_utils().isMdAsciiPunct;
      function StateInline(src, md2, env, outTokens) {
        this.src = src;
        this.env = env;
        this.md = md2;
        this.tokens = outTokens;
        this.tokens_meta = Array(outTokens.length);
        this.pos = 0;
        this.posMax = this.src.length;
        this.level = 0;
        this.pending = "";
        this.pendingLevel = 0;
        this.cache = {};
        this.delimiters = [];
        this._prev_delimiters = [];
        this.backticks = {};
        this.backticksScanned = false;
        this.linkLevel = 0;
      }
      StateInline.prototype.pushPending = function() {
        var token = new Token3("text", "", 0);
        token.content = this.pending;
        token.level = this.pendingLevel;
        this.tokens.push(token);
        this.pending = "";
        return token;
      };
      StateInline.prototype.push = function(type2, tag, nesting) {
        if (this.pending) {
          this.pushPending();
        }
        var token = new Token3(type2, tag, nesting);
        var token_meta = null;
        if (nesting < 0) {
          this.level--;
          this.delimiters = this._prev_delimiters.pop();
        }
        token.level = this.level;
        if (nesting > 0) {
          this.level++;
          this._prev_delimiters.push(this.delimiters);
          this.delimiters = [];
          token_meta = { delimiters: this.delimiters };
        }
        this.pendingLevel = this.level;
        this.tokens.push(token);
        this.tokens_meta.push(token_meta);
        return token;
      };
      StateInline.prototype.scanDelims = function(start, canSplitWord) {
        var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker = this.src.charCodeAt(start);
        lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
        while (pos < max && this.src.charCodeAt(pos) === marker) {
          pos++;
        }
        count = pos - start;
        nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
        isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace(lastChar);
        isNextWhiteSpace = isWhiteSpace(nextChar);
        if (isNextWhiteSpace) {
          left_flanking = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            left_flanking = false;
          }
        }
        if (isLastWhiteSpace) {
          right_flanking = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            right_flanking = false;
          }
        }
        if (!canSplitWord) {
          can_open = left_flanking && (!right_flanking || isLastPunctChar);
          can_close = right_flanking && (!left_flanking || isNextPunctChar);
        } else {
          can_open = left_flanking;
          can_close = right_flanking;
        }
        return {
          can_open,
          can_close,
          length: count
        };
      };
      StateInline.prototype.Token = Token3;
      module.exports = StateInline;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/parser_inline.js
  var require_parser_inline = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/parser_inline.js"(exports, module) {
      "use strict";
      var Ruler = require_ruler();
      var _rules = [
        ["text", require_text()],
        ["linkify", require_linkify2()],
        ["newline", require_newline()],
        ["escape", require_escape()],
        ["backticks", require_backticks()],
        ["strikethrough", require_strikethrough().tokenize],
        ["emphasis", require_emphasis().tokenize],
        ["link", require_link()],
        ["image", require_image()],
        ["autolink", require_autolink()],
        ["html_inline", require_html_inline()],
        ["entity", require_entity()]
      ];
      var _rules2 = [
        ["balance_pairs", require_balance_pairs()],
        ["strikethrough", require_strikethrough().postProcess],
        ["emphasis", require_emphasis().postProcess],
        ["fragments_join", require_fragments_join()]
      ];
      function ParserInline() {
        var i;
        this.ruler = new Ruler();
        for (i = 0; i < _rules.length; i++) {
          this.ruler.push(_rules[i][0], _rules[i][1]);
        }
        this.ruler2 = new Ruler();
        for (i = 0; i < _rules2.length; i++) {
          this.ruler2.push(_rules2[i][0], _rules2[i][1]);
        }
      }
      ParserInline.prototype.skipToken = function(state) {
        var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
        if (typeof cache[pos] !== "undefined") {
          state.pos = cache[pos];
          return;
        }
        if (state.level < maxNesting) {
          for (i = 0; i < len; i++) {
            state.level++;
            ok = rules[i](state, true);
            state.level--;
            if (ok) {
              if (pos >= state.pos) {
                throw new Error("inline rule didn't increment state.pos");
              }
              break;
            }
          }
        } else {
          state.pos = state.posMax;
        }
        if (!ok) {
          state.pos++;
        }
        cache[pos] = state.pos;
      };
      ParserInline.prototype.tokenize = function(state) {
        var ok, i, prevPos, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
        while (state.pos < end) {
          prevPos = state.pos;
          if (state.level < maxNesting) {
            for (i = 0; i < len; i++) {
              ok = rules[i](state, false);
              if (ok) {
                if (prevPos >= state.pos) {
                  throw new Error("inline rule didn't increment state.pos");
                }
                break;
              }
            }
          }
          if (ok) {
            if (state.pos >= end) {
              break;
            }
            continue;
          }
          state.pending += state.src[state.pos++];
        }
        if (state.pending) {
          state.pushPending();
        }
      };
      ParserInline.prototype.parse = function(str2, md2, env, outTokens) {
        var i, rules, len;
        var state = new this.State(str2, md2, env, outTokens);
        this.tokenize(state);
        rules = this.ruler2.getRules("");
        len = rules.length;
        for (i = 0; i < len; i++) {
          rules[i](state);
        }
      };
      ParserInline.prototype.State = require_state_inline();
      module.exports = ParserInline;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/linkify-it/lib/re.js
  var require_re = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/linkify-it/lib/re.js"(exports, module) {
      "use strict";
      module.exports = function(opts) {
        var re = {};
        opts = opts || {};
        re.src_Any = require_regex2().source;
        re.src_Cc = require_regex3().source;
        re.src_Z = require_regex5().source;
        re.src_P = require_regex().source;
        re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
        re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
        var text_separators = "[><\uFF5C]";
        re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
        re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
        re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
        re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
        re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
        re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + "|$)|;(?!" + re.src_ZCc + "|$)|\\!+(?!" + re.src_ZCc + "|[!]|$)|\\?(?!" + re.src_ZCc + "|[?]|$))+|\\/)?";
        re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
        re.src_xn = "xn--[a-z0-9\\-]{1,59}";
        re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
        re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
        re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
        re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
        re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
        re.src_host_strict = re.src_host + re.src_host_terminator;
        re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
        re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
        re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
        re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
        re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
        re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
        return re;
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/linkify-it/index.js
  var require_linkify_it = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/linkify-it/index.js"(exports, module) {
      "use strict";
      function assign(obj) {
        var sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function(source) {
          if (!source) {
            return;
          }
          Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
          });
        });
        return obj;
      }
      function _class2(obj) {
        return Object.prototype.toString.call(obj);
      }
      function isString3(obj) {
        return _class2(obj) === "[object String]";
      }
      function isObject4(obj) {
        return _class2(obj) === "[object Object]";
      }
      function isRegExp(obj) {
        return _class2(obj) === "[object RegExp]";
      }
      function isFunction3(obj) {
        return _class2(obj) === "[object Function]";
      }
      function escapeRE(str2) {
        return str2.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      var defaultOptions3 = {
        fuzzyLink: true,
        fuzzyEmail: true,
        fuzzyIP: false
      };
      function isOptionsObj(obj) {
        return Object.keys(obj || {}).reduce(function(acc, k) {
          return acc || defaultOptions3.hasOwnProperty(k);
        }, false);
      }
      var defaultSchemas = {
        "http:": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.http) {
              self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
            }
            if (self.re.http.test(tail)) {
              return tail.match(self.re.http)[0].length;
            }
            return 0;
          }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.no_http) {
              self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
            }
            if (self.re.no_http.test(tail)) {
              if (pos >= 3 && text[pos - 3] === ":") {
                return 0;
              }
              if (pos >= 3 && text[pos - 3] === "/") {
                return 0;
              }
              return tail.match(self.re.no_http)[0].length;
            }
            return 0;
          }
        },
        "mailto:": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.mailto) {
              self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
            }
            if (self.re.mailto.test(tail)) {
              return tail.match(self.re.mailto)[0].length;
            }
            return 0;
          }
        }
      };
      var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
      var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
      function resetScanCache(self) {
        self.__index__ = -1;
        self.__text_cache__ = "";
      }
      function createValidator(re) {
        return function(text, pos) {
          var tail = text.slice(pos);
          if (re.test(tail)) {
            return tail.match(re)[0].length;
          }
          return 0;
        };
      }
      function createNormalizer() {
        return function(match, self) {
          self.normalize(match);
        };
      }
      function compile(self) {
        var re = self.re = require_re()(self.__opts__);
        var tlds = self.__tlds__.slice();
        self.onCompile();
        if (!self.__tlds_replaced__) {
          tlds.push(tlds_2ch_src_re);
        }
        tlds.push(re.src_xn);
        re.src_tlds = tlds.join("|");
        function untpl(tpl) {
          return tpl.replace("%TLDS%", re.src_tlds);
        }
        re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
        re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
        re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
        re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
        var aliases = [];
        self.__compiled__ = {};
        function schemaError(name, val) {
          throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
        }
        Object.keys(self.__schemas__).forEach(function(name) {
          var val = self.__schemas__[name];
          if (val === null) {
            return;
          }
          var compiled = { validate: null, link: null };
          self.__compiled__[name] = compiled;
          if (isObject4(val)) {
            if (isRegExp(val.validate)) {
              compiled.validate = createValidator(val.validate);
            } else if (isFunction3(val.validate)) {
              compiled.validate = val.validate;
            } else {
              schemaError(name, val);
            }
            if (isFunction3(val.normalize)) {
              compiled.normalize = val.normalize;
            } else if (!val.normalize) {
              compiled.normalize = createNormalizer();
            } else {
              schemaError(name, val);
            }
            return;
          }
          if (isString3(val)) {
            aliases.push(name);
            return;
          }
          schemaError(name, val);
        });
        aliases.forEach(function(alias) {
          if (!self.__compiled__[self.__schemas__[alias]]) {
            return;
          }
          self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
          self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
        });
        self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
        var slist = Object.keys(self.__compiled__).filter(function(name) {
          return name.length > 0 && self.__compiled__[name];
        }).map(escapeRE).join("|");
        self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
        self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
        self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
        self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
        resetScanCache(self);
      }
      function Match(self, shift3) {
        var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
        this.schema = self.__schema__.toLowerCase();
        this.index = start + shift3;
        this.lastIndex = end + shift3;
        this.raw = text;
        this.text = text;
        this.url = text;
      }
      function createMatch(self, shift3) {
        var match = new Match(self, shift3);
        self.__compiled__[match.schema].normalize(match, self);
        return match;
      }
      function LinkifyIt(schemas, options) {
        if (!(this instanceof LinkifyIt)) {
          return new LinkifyIt(schemas, options);
        }
        if (!options) {
          if (isOptionsObj(schemas)) {
            options = schemas;
            schemas = {};
          }
        }
        this.__opts__ = assign({}, defaultOptions3, options);
        this.__index__ = -1;
        this.__last_index__ = -1;
        this.__schema__ = "";
        this.__text_cache__ = "";
        this.__schemas__ = assign({}, defaultSchemas, schemas);
        this.__compiled__ = {};
        this.__tlds__ = tlds_default;
        this.__tlds_replaced__ = false;
        this.re = {};
        compile(this);
      }
      LinkifyIt.prototype.add = function add(schema2, definition) {
        this.__schemas__[schema2] = definition;
        compile(this);
        return this;
      };
      LinkifyIt.prototype.set = function set2(options) {
        this.__opts__ = assign(this.__opts__, options);
        return this;
      };
      LinkifyIt.prototype.test = function test(text) {
        this.__text_cache__ = text;
        this.__index__ = -1;
        if (!text.length) {
          return false;
        }
        var m, ml, me, len, shift3, next, re, tld_pos, at_pos;
        if (this.re.schema_test.test(text)) {
          re = this.re.schema_search;
          re.lastIndex = 0;
          while ((m = re.exec(text)) !== null) {
            len = this.testSchemaAt(text, m[2], re.lastIndex);
            if (len) {
              this.__schema__ = m[2];
              this.__index__ = m.index + m[1].length;
              this.__last_index__ = m.index + m[0].length + len;
              break;
            }
          }
        }
        if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
          tld_pos = text.search(this.re.host_fuzzy_test);
          if (tld_pos >= 0) {
            if (this.__index__ < 0 || tld_pos < this.__index__) {
              if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
                shift3 = ml.index + ml[1].length;
                if (this.__index__ < 0 || shift3 < this.__index__) {
                  this.__schema__ = "";
                  this.__index__ = shift3;
                  this.__last_index__ = ml.index + ml[0].length;
                }
              }
            }
          }
        }
        if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
          at_pos = text.indexOf("@");
          if (at_pos >= 0) {
            if ((me = text.match(this.re.email_fuzzy)) !== null) {
              shift3 = me.index + me[1].length;
              next = me.index + me[0].length;
              if (this.__index__ < 0 || shift3 < this.__index__ || shift3 === this.__index__ && next > this.__last_index__) {
                this.__schema__ = "mailto:";
                this.__index__ = shift3;
                this.__last_index__ = next;
              }
            }
          }
        }
        return this.__index__ >= 0;
      };
      LinkifyIt.prototype.pretest = function pretest(text) {
        return this.re.pretest.test(text);
      };
      LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema2, pos) {
        if (!this.__compiled__[schema2.toLowerCase()]) {
          return 0;
        }
        return this.__compiled__[schema2.toLowerCase()].validate(text, pos, this);
      };
      LinkifyIt.prototype.match = function match(text) {
        var shift3 = 0, result = [];
        if (this.__index__ >= 0 && this.__text_cache__ === text) {
          result.push(createMatch(this, shift3));
          shift3 = this.__last_index__;
        }
        var tail = shift3 ? text.slice(shift3) : text;
        while (this.test(tail)) {
          result.push(createMatch(this, shift3));
          tail = tail.slice(this.__last_index__);
          shift3 += this.__last_index__;
        }
        if (result.length) {
          return result;
        }
        return null;
      };
      LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
        this.__text_cache__ = text;
        this.__index__ = -1;
        if (!text.length)
          return null;
        var m = this.re.schema_at_start.exec(text);
        if (!m)
          return null;
        var len = this.testSchemaAt(text, m[2], m[0].length);
        if (!len)
          return null;
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        return createMatch(this, 0);
      };
      LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
        list = Array.isArray(list) ? list : [list];
        if (!keepOld) {
          this.__tlds__ = list.slice();
          this.__tlds_replaced__ = true;
          compile(this);
          return this;
        }
        this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
          return el !== arr[idx - 1];
        }).reverse();
        compile(this);
        return this;
      };
      LinkifyIt.prototype.normalize = function normalize2(match) {
        if (!match.schema) {
          match.url = "http://" + match.url;
        }
        if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
          match.url = "mailto:" + match.url;
        }
      };
      LinkifyIt.prototype.onCompile = function onCompile() {
      };
      module.exports = LinkifyIt;
    }
  });

  // node_modules/punycode/punycode.js
  var require_punycode = __commonJS({
    "node_modules/punycode/punycode.js"(exports, module) {
      "use strict";
      var maxInt = 2147483647;
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128;
      var delimiter = "-";
      var regexPunycode = /^xn--/;
      var regexNonASCII = /[^\0-\x7F]/;
      var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
      var errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      };
      var baseMinusTMin = base - tMin;
      var floor3 = Math.floor;
      var stringFromCharCode = String.fromCharCode;
      function error(type2) {
        throw new RangeError(errors[type2]);
      }
      function map4(array, callback) {
        const result = [];
        let length = array.length;
        while (length--) {
          result[length] = callback(array[length]);
        }
        return result;
      }
      function mapDomain(domain, callback) {
        const parts = domain.split("@");
        let result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          domain = parts[1];
        }
        domain = domain.replace(regexSeparators, ".");
        const labels = domain.split(".");
        const encoded = map4(labels, callback).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        const output = [];
        let counter = 0;
        const length = string.length;
        while (counter < length) {
          const value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            const extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      var ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
      var basicToDigit = function(codePoint) {
        if (codePoint >= 48 && codePoint < 58) {
          return 26 + (codePoint - 48);
        }
        if (codePoint >= 65 && codePoint < 91) {
          return codePoint - 65;
        }
        if (codePoint >= 97 && codePoint < 123) {
          return codePoint - 97;
        }
        return base;
      };
      var digitToBasic = function(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      };
      var adapt = function(delta, numPoints, firstTime) {
        let k = 0;
        delta = firstTime ? floor3(delta / damp) : delta >> 1;
        delta += floor3(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor3(delta / baseMinusTMin);
        }
        return floor3(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };
      var decode = function(input) {
        const output = [];
        const inputLength = input.length;
        let i = 0;
        let n = initialN;
        let bias = initialBias;
        let basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (let j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          const oldi = i;
          for (let w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error("invalid-input");
            }
            const digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base) {
              error("invalid-input");
            }
            if (digit > floor3((maxInt - i) / w)) {
              error("overflow");
            }
            i += digit * w;
            const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            const baseMinusT = base - t;
            if (w > floor3(maxInt / baseMinusT)) {
              error("overflow");
            }
            w *= baseMinusT;
          }
          const out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor3(i / out) > maxInt - n) {
            error("overflow");
          }
          n += floor3(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return String.fromCodePoint(...output);
      };
      var encode = function(input) {
        const output = [];
        input = ucs2decode(input);
        const inputLength = input.length;
        let n = initialN;
        let delta = 0;
        let bias = initialBias;
        for (const currentValue of input) {
          if (currentValue < 128) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        const basicLength = output.length;
        let handledCPCount = basicLength;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          let m = maxInt;
          for (const currentValue of input) {
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          const handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor3((maxInt - delta) / handledCPCountPlusOne)) {
            error("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (const currentValue of input) {
            if (currentValue < n && ++delta > maxInt) {
              error("overflow");
            }
            if (currentValue === n) {
              let q = delta;
              for (let k = base; ; k += base) {
                const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                const qMinusT = q - t;
                const baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor3(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      };
      var toUnicode = function(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      };
      var toASCII = function(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
      };
      var punycode = {
        "version": "2.3.1",
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      module.exports = punycode;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/presets/default.js
  var require_default = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/presets/default.js"(exports, module) {
      "use strict";
      module.exports = {
        options: {
          html: false,
          xhtmlOut: false,
          breaks: false,
          langPrefix: "language-",
          linkify: false,
          typographer: false,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 100
        },
        components: {
          core: {},
          block: {},
          inline: {}
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/presets/zero.js
  var require_zero = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/presets/zero.js"(exports, module) {
      "use strict";
      module.exports = {
        options: {
          html: false,
          xhtmlOut: false,
          breaks: false,
          langPrefix: "language-",
          linkify: false,
          typographer: false,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: [
              "normalize",
              "block",
              "inline",
              "text_join"
            ]
          },
          block: {
            rules: [
              "paragraph"
            ]
          },
          inline: {
            rules: [
              "text"
            ],
            rules2: [
              "balance_pairs",
              "fragments_join"
            ]
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/presets/commonmark.js
  var require_commonmark = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {
      "use strict";
      module.exports = {
        options: {
          html: true,
          xhtmlOut: true,
          breaks: false,
          langPrefix: "language-",
          linkify: false,
          typographer: false,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: [
              "normalize",
              "block",
              "inline",
              "text_join"
            ]
          },
          block: {
            rules: [
              "blockquote",
              "code",
              "fence",
              "heading",
              "hr",
              "html_block",
              "lheading",
              "list",
              "reference",
              "paragraph"
            ]
          },
          inline: {
            rules: [
              "autolink",
              "backticks",
              "emphasis",
              "entity",
              "escape",
              "html_inline",
              "image",
              "link",
              "newline",
              "text"
            ],
            rules2: [
              "balance_pairs",
              "emphasis",
              "fragments_join"
            ]
          }
        }
      };
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/lib/index.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var helpers = require_helpers();
      var Renderer = require_renderer();
      var ParserCore = require_parser_core();
      var ParserBlock = require_parser_block();
      var ParserInline = require_parser_inline();
      var LinkifyIt = require_linkify_it();
      var mdurl = require_mdurl();
      var punycode = require_punycode();
      var config = {
        default: require_default(),
        zero: require_zero(),
        commonmark: require_commonmark()
      };
      var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
      var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
      function validateLink(url) {
        var str2 = url.trim().toLowerCase();
        return BAD_PROTO_RE.test(str2) ? GOOD_DATA_RE.test(str2) ? true : false : true;
      }
      var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
      function normalizeLink(url) {
        var parsed = mdurl.parse(url, true);
        if (parsed.hostname) {
          if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
            try {
              parsed.hostname = punycode.toASCII(parsed.hostname);
            } catch (er) {
            }
          }
        }
        return mdurl.encode(mdurl.format(parsed));
      }
      function normalizeLinkText(url) {
        var parsed = mdurl.parse(url, true);
        if (parsed.hostname) {
          if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
            try {
              parsed.hostname = punycode.toUnicode(parsed.hostname);
            } catch (er) {
            }
          }
        }
        return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
      }
      function MarkdownIt2(presetName, options) {
        if (!(this instanceof MarkdownIt2)) {
          return new MarkdownIt2(presetName, options);
        }
        if (!options) {
          if (!utils.isString(presetName)) {
            options = presetName || {};
            presetName = "default";
          }
        }
        this.inline = new ParserInline();
        this.block = new ParserBlock();
        this.core = new ParserCore();
        this.renderer = new Renderer();
        this.linkify = new LinkifyIt();
        this.validateLink = validateLink;
        this.normalizeLink = normalizeLink;
        this.normalizeLinkText = normalizeLinkText;
        this.utils = utils;
        this.helpers = utils.assign({}, helpers);
        this.options = {};
        this.configure(presetName);
        if (options) {
          this.set(options);
        }
      }
      MarkdownIt2.prototype.set = function(options) {
        utils.assign(this.options, options);
        return this;
      };
      MarkdownIt2.prototype.configure = function(presets) {
        var self = this, presetName;
        if (utils.isString(presets)) {
          presetName = presets;
          presets = config[presetName];
          if (!presets) {
            throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
          }
        }
        if (!presets) {
          throw new Error("Wrong `markdown-it` preset, can't be empty");
        }
        if (presets.options) {
          self.set(presets.options);
        }
        if (presets.components) {
          Object.keys(presets.components).forEach(function(name) {
            if (presets.components[name].rules) {
              self[name].ruler.enableOnly(presets.components[name].rules);
            }
            if (presets.components[name].rules2) {
              self[name].ruler2.enableOnly(presets.components[name].rules2);
            }
          });
        }
        return this;
      };
      MarkdownIt2.prototype.enable = function(list, ignoreInvalid) {
        var result = [];
        if (!Array.isArray(list)) {
          list = [list];
        }
        ["core", "block", "inline"].forEach(function(chain) {
          result = result.concat(this[chain].ruler.enable(list, true));
        }, this);
        result = result.concat(this.inline.ruler2.enable(list, true));
        var missed = list.filter(function(name) {
          return result.indexOf(name) < 0;
        });
        if (missed.length && !ignoreInvalid) {
          throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
        }
        return this;
      };
      MarkdownIt2.prototype.disable = function(list, ignoreInvalid) {
        var result = [];
        if (!Array.isArray(list)) {
          list = [list];
        }
        ["core", "block", "inline"].forEach(function(chain) {
          result = result.concat(this[chain].ruler.disable(list, true));
        }, this);
        result = result.concat(this.inline.ruler2.disable(list, true));
        var missed = list.filter(function(name) {
          return result.indexOf(name) < 0;
        });
        if (missed.length && !ignoreInvalid) {
          throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
        }
        return this;
      };
      MarkdownIt2.prototype.use = function(plugin) {
        var args = [this].concat(Array.prototype.slice.call(arguments, 1));
        plugin.apply(plugin, args);
        return this;
      };
      MarkdownIt2.prototype.parse = function(src, env) {
        if (typeof src !== "string") {
          throw new Error("Input data should be a String");
        }
        var state = new this.core.State(src, this, env);
        this.core.process(state);
        return state.tokens;
      };
      MarkdownIt2.prototype.render = function(src, env) {
        env = env || {};
        return this.renderer.render(this.parse(src, env), this.options, env);
      };
      MarkdownIt2.prototype.parseInline = function(src, env) {
        var state = new this.core.State(src, this, env);
        state.inlineMode = true;
        this.core.process(state);
        return state.tokens;
      };
      MarkdownIt2.prototype.renderInline = function(src, env) {
        env = env || {};
        return this.renderer.render(this.parseInline(src, env), this.options, env);
      };
      module.exports = MarkdownIt2;
    }
  });

  // node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/index.js
  var require_markdown_it = __commonJS({
    "node_modules/@bookshop/eleventy-engine/node_modules/markdown-it/index.js"(exports, module) {
      "use strict";
      module.exports = require_lib();
    }
  });

  // node_modules/@bookshop/live/lib/app/parsers/params-parser.js
  var TOKENS = {
    ASSIGN: /:|=/,
    DELIM: /"|'|`/,
    ESCAPE: /\\/,
    SPACE: /\s|\r|\n/,
    INSCOPE: /\(/,
    OUTSCOPE: /\)/,
    INDEX: /\[/,
    OUTDEX: /\]/
  };
  var ParamsParser = class {
    constructor(input) {
      this.input = input;
      this.stream = input.split("");
      this.state = `IDENT`;
      this.deps = {};
      this.output = [];
    }
    build() {
      while (this.stream.length) {
        this.process(this.stream.shift());
      }
      this.process(" ");
      return this.output;
    }
    process(t) {
      switch (this.state) {
        case `IDENT`:
          return this.processIDENT(t);
        case `VALUE`:
          return this.processVALUE(t);
      }
    }
    processIDENT(t) {
      if (TOKENS.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.identifier = this.deps.identifier || "";
      this.deps.started = true;
      if (TOKENS.ASSIGN.test(t) && !this.deps.escape) {
        if (!this.deps.identifier) {
          throw new Error("No identifier provided");
        }
        this.state = "VALUE";
        this.deps = { identifier: this.deps.identifier };
        return;
      }
      if (TOKENS.ESCAPE.test(t) && !this.deps.escape) {
        return this.deps.escape = true;
      }
      this.deps.identifier += t;
      this.deps.escape = false;
    }
    processVALUE(t) {
      if (TOKENS.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.value = this.deps.value || "";
      this.deps.started = true;
      if (this.deps.escape) {
        this.deps.value += t;
        this.deps.escape = false;
        return;
      }
      if (TOKENS.ESCAPE.test(t)) {
        this.deps.escape = true;
        return;
      }
      this.deps.value += t;
      if (!this.deps.delim) {
        if (TOKENS.DELIM.test(t)) {
          return this.deps.delim = new RegExp(t);
        }
        if (TOKENS.INSCOPE.test(t)) {
          return this.deps.delim = TOKENS.OUTSCOPE;
        }
        if (TOKENS.INDEX.test(t)) {
          return this.deps.delim = TOKENS.OUTDEX;
        }
        this.deps.delim = TOKENS.SPACE;
        if (!TOKENS.SPACE.test(t)) {
          return;
        }
      }
      if (this.deps.delimDepth && this.deps.delim.test(t)) {
        return this.deps.delimDepth -= 1;
      }
      if (this.deps.delim === TOKENS.SPACE && this.deps.delim.test(t)) {
        this.deps.value = this.deps.value.replace(/.$/, "");
        this.deps.value = this.deps.value.replace(/^\(\(+(.+)\)+\)$/, "($1)");
        this.deps.value = this.deps.value.replace(/^\((\S+)\)$/, "$1");
        this.output.push([this.deps.identifier, this.deps.value]);
        this.state = "IDENT";
        this.deps = {};
        return;
      }
      if (this.deps.delim.test(t)) {
        this.deps.delim = null;
        return;
      }
      if (this.deps.delim === TOKENS.OUTSCOPE && TOKENS.INSCOPE.test(t)) {
        this.deps.delimDepth = this.deps.delimDepth || 0;
        this.deps.delimDepth += 1;
      }
    }
  };

  // node_modules/@bookshop/live/lib/app/parsers/comment-parser.js
  var TOKENS2 = {
    ESCAPE: /\\/,
    SPACE: /\s|\r|\n/,
    INSCOPE: /\(/,
    OUTSCOPE: /\)/,
    END: /END/
  };
  var CommentParser = class {
    constructor(input) {
      this.input = input;
      this.stream = input.split("");
      this.state = `IDENT`;
      this.deps = {};
      this.output = {};
    }
    build() {
      while (this.stream.length) {
        this.process(this.stream.shift());
      }
      this.process("END");
      return this.output;
    }
    process(t) {
      switch (this.state) {
        case `IDENT`:
          return this.processIDENT(t);
        case `VALUE`:
          return this.processVALUE(t);
      }
    }
    processIDENT(t) {
      if (TOKENS2.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.identifier = this.deps.identifier || "";
      this.deps.started = true;
      if (TOKENS2.END.test(t)) {
        if (this.deps.identifier) {
          this.output[this.deps.identifier] = true;
        }
        return;
      }
      if (TOKENS2.INSCOPE.test(t) && !this.deps.escape) {
        if (!this.deps.identifier) {
          throw new Error("No identifier provided");
        }
        this.state = "VALUE";
        this.deps = { identifier: this.deps.identifier };
        return;
      }
      if (TOKENS2.ESCAPE.test(t) && !this.deps.escape) {
        return this.deps.escape = true;
      }
      this.deps.identifier += t;
      this.deps.escape = false;
    }
    processVALUE(t) {
      if (TOKENS2.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.value = this.deps.value || "";
      this.deps.started = true;
      if (this.deps.escape) {
        this.deps.value += t;
        this.deps.escape = false;
        return;
      }
      if (TOKENS2.OUTSCOPE.test(t) && !this.deps.delimDepth) {
        this.output[this.deps.identifier] = this.deps.value;
        this.state = "IDENT";
        this.deps = {};
        return;
      }
      if (TOKENS2.ESCAPE.test(t)) {
        this.deps.escape = true;
        return;
      }
      this.deps.value += t;
      if (TOKENS2.INSCOPE.test(t)) {
        this.deps.delimDepth = this.deps.delimDepth || 0;
        this.deps.delimDepth += 1;
      }
      if (TOKENS2.OUTSCOPE.test(t) && this.deps.delimDepth) {
        this.deps.delimDepth -= 1;
      }
    }
  };

  // node_modules/@bookshop/live/lib/app/core.js
  var normalizeName = (name) => name.replace(/\/[\w-]+\..+$/, "").replace(/\..+$/, "");
  var parseParams = (params) => params ? new ParamsParser(params).build() : [];
  var getTemplateCommentIterator = (node) => {
    const documentNode = node.ownerDocument ?? document;
    return documentNode.evaluate("//comment()[contains(.,'bookshop-live')]", node, null, XPathResult.ANY_TYPE, null);
  };
  var parseComment = (node) => {
    return new CommentParser(node.textContent.replace(/^bookshop-live /, "")).build();
  };
  var nodeIsBefore = (a, b) => {
    return a && (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
  };
  var bookshop_version = null;
  if (true) {
    bookshop_version = "3.12.0";
  }
  var storeResolvedPath = (name, identifier, pathStack, logger) => {
    if (typeof identifier !== "string")
      return;
    const splitIdentifier = identifier.replace(/^include\./, "").replace(/\[(\d+)]/g, ".$1").split(".");
    logger?.log?.(`Split ${identifier} info ${JSON.stringify(splitIdentifier)}`);
    const baseIdentifier = splitIdentifier.shift();
    logger?.log?.(`Using base identifier ${baseIdentifier}`);
    if (baseIdentifier) {
      const existingPath = findInStack(baseIdentifier, pathStack);
      logger?.log?.(`Found the existing path ${existingPath}`);
      const prefix = existingPath ?? baseIdentifier;
      logger?.log?.(`Using the prefix ${prefix}`);
      pathStack[pathStack.length - 1][name] = `${[prefix, ...splitIdentifier].join(".")}`;
    } else {
      const existingPath = findInStack(identifier, pathStack);
      logger?.log?.(`Found the existing path ${existingPath}`);
      const path = existingPath ?? identifier;
      logger?.log?.(`Using the path ${path}`);
      pathStack[pathStack.length - 1][name] = path;
    }
    logger?.log?.(`Stored ${name}: ${pathStack[pathStack.length - 1][name]}`);
  };
  var findInStack = (key, stack) => {
    const [baseIdentifier, ...rest] = key?.split?.(".");
    if (baseIdentifier) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i][baseIdentifier]) {
          if (rest.length)
            return `${stack[i][baseIdentifier]}.${rest.join(".")}`;
          return `${stack[i][baseIdentifier]}`;
        }
        if (stack[i]["."] && stack[i]["."] !== "." && !/^(\$|Params)/.test(key)) {
          return `${stack[i]["."]}.${key}`;
        }
      }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i][key]) {
        return `${stack[i][key]}`;
      }
    }
    return null;
  };
  var dig = (obj, path) => {
    if (typeof path === "string" && /^\s*['"`]/.test(path))
      return false;
    if (typeof path === "string")
      path = path.replace(/\[(\d+)]/g, ".$1").split(".");
    obj = obj[path.shift()];
    if (obj && path.length)
      return dig(obj, path);
    return obj;
  };
  var replaceHTMLRegion = (startNode, endNode, outputElement) => {
    let node = startNode.nextSibling;
    while (node && (node.compareDocumentPosition(endNode) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
      const next = node.nextSibling;
      node.remove();
      node = next;
    }
    while (outputElement.childNodes.length) {
      endNode.parentNode.insertBefore(outputElement.childNodes[0], endNode);
    }
  };
  var evaluateTemplate = async (opts) => {
    const {
      liveInstance,
      documentNode,
      parentPathStack,
      templateBlockHandler,
      isRetry,
      logger,
      processDeepComponents = true
    } = opts;
    const stack = [{ scope: {} }];
    const pathStack = parentPathStack || [{}];
    let stashedNodes = [];
    let stashedParams = [];
    let meta = {};
    const combinedScope = () => [liveInstance.data, ...stack.map((s) => s.scope)];
    const currentScope = () => stack[stack.length - 1];
    const iterator = getTemplateCommentIterator(documentNode);
    let currentNode = iterator.iterateNext();
    while (currentNode) {
      logger?.log?.(`Parsing the comment:`);
      logger?.log?.(currentNode.textContent);
      const liveTag = parseComment(currentNode);
      if (!liveInstance.storedMeta) {
        for (const [name, identifier] of parseParams(liveTag?.meta)) {
          meta[name] = identifier;
          logger?.log?.(`Registered metadata ${name} as ${identifier}`);
          if (name === "version" && bookshop_version) {
            const expected_version = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
            if (expected_version !== bookshop_version) {
              console.error([
                `Your Bookshop SSG plugin is running version ${expected_version}, but @bookshop/live is running version ${bookshop_version}.`,
                `Bookshop follows semantic versioning with regard to your site and components,`,
                `but this does not extend to Bookshop packages being compatible with each other across any version jump.`,
                `
Run %cnpx @bookshop/up@latest%c in your root directory to upgrade all Bookshop dependencies.`
              ].join("\n"), `color: #FF4C29; font-family: monospace; font-weight: bold;`, `color: unset; font-family: unset; font-weight: unset;`);
            }
          }
          liveInstance.storedMeta = true;
        }
        await liveInstance.storeMeta(meta);
      }
      for (const [name, identifier] of parseParams(liveTag?.context)) {
        const componentDepth = stack.length - 1;
        if (componentDepth == 0 || processDeepComponents === true) {
          logger?.log?.(`Parsing context ${name}: ${identifier}`);
          currentScope().scope[name] = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
          const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
          if (typeof normalizedIdentifier === "object" && !Array.isArray(normalizedIdentifier)) {
            Object.values(normalizedIdentifier).forEach((value) => {
              return storeResolvedPath(name, value, pathStack, logger?.nested?.());
            });
          } else {
            storeResolvedPath(name, normalizedIdentifier, pathStack, logger?.nested?.());
          }
        } else {
          logger?.log?.(`Skipping deep context of ${name}: ${identifier}`);
        }
      }
      for (const [name, identifier] of parseParams(liveTag?.reassign)) {
        const componentDepth = stack.length - 1;
        if (componentDepth == 0 || processDeepComponents === true) {
          logger?.log?.(`Reassigning ${name} to ${identifier}`);
          for (let i = stack.length - 1; i >= 0; i -= 1) {
            if (stack[i].scope[name] !== void 0) {
              stack[i].scope[name] = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
              break;
            }
          }
          for (let i = pathStack.length - 1; i >= 0; i -= 1) {
            if (pathStack[i][name] !== void 0) {
              const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
              if (typeof normalizedIdentifier === "object" && !Array.isArray(normalizedIdentifier)) {
                Object.values(normalizedIdentifier).forEach((value) => {
                  return storeResolvedPath(name, value, [pathStack[i]]);
                });
              } else {
                storeResolvedPath(name, normalizedIdentifier, [pathStack[i]]);
              }
              break;
            }
          }
        } else {
          logger?.log?.(`Skipping deep reassignment of ${name} to ${identifier}`);
        }
      }
      if (liveTag?.end) {
        logger?.log?.(`Reached the end of a block, handing off to the handler function`);
        currentScope().endNode = currentNode;
        await templateBlockHandler(stack.pop(), logger?.nested?.());
        pathStack.pop();
      } else if (liveTag.stack) {
        logger?.log?.(`Stacking a new context`);
        let scope = {};
        pathStack.push({});
        stack.push({
          pathStack: JSON.parse(JSON.stringify(pathStack)),
          scope
        });
      } else if (liveTag.unstack) {
        logger?.log?.(`Unstacking a context`);
        stack.pop();
        pathStack.pop();
      } else if (liveTag && liveTag?.name === "__bookshop__subsequent") {
        logger?.log?.(`Stashing parameters for the next bookshop tag`);
        stashedNodes.push(currentNode);
        stashedParams = [...stashedParams, ...parseParams(liveTag?.params)];
      } else if (liveTag?.name) {
        const componentDepth = stack.length - 1;
        if (componentDepth == 0 || processDeepComponents === true) {
          logger?.log?.(`Rendering a new component ${liveTag.name}`);
          let scope = {};
          const params = [...stashedParams, ...parseParams(liveTag?.params)];
          pathStack.push({});
          for (const [name, identifier] of params) {
            if (name === "bind") {
              const bindVals = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
              if (bindVals && typeof bindVals === "object") {
                scope = { ...scope, ...bindVals };
                Object.keys(bindVals).forEach((key) => storeResolvedPath(key, `${identifier}.${key}`, pathStack));
              }
            } else if (name === ".") {
              const bindVals = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
              if (bindVals && typeof bindVals === "object" && !Array.isArray(bindVals)) {
                scope = { ...scope, ...bindVals };
              } else {
                scope[name] = bindVals;
              }
              const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
              if (typeof normalizedIdentifier === "object" && !Array.isArray(normalizedIdentifier)) {
                Object.entries(normalizedIdentifier).forEach(([key, value]) => {
                  return storeResolvedPath(key, value, pathStack);
                });
              } else {
                storeResolvedPath(name, normalizedIdentifier, pathStack);
              }
            } else {
              scope[name] = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
              storeResolvedPath(name, identifier, pathStack);
            }
          }
          ;
          stack.push({
            startNode: currentNode,
            name: normalizeName(liveTag?.name),
            pathStack: JSON.parse(JSON.stringify(pathStack)),
            scope,
            params,
            stashedNodes,
            depth: componentDepth
          });
        } else {
          logger?.log?.(`Skipping deep render of ${liveTag.name}`);
          pathStack.push({});
          stack.push({
            startNode: currentNode,
            name: normalizeName(liveTag?.name),
            depth: componentDepth
          });
        }
        stashedParams = [];
        stashedNodes = [];
      }
      try {
        currentNode = iterator.iterateNext();
      } catch (e) {
        logger?.log?.(`Failed to iterate to the next node.`);
        if (!isRetry) {
          logger?.log?.(`Trying to start again...`);
          return await evaluateTemplate(opts);
        }
      }
    }
  };
  var renderComponentUpdates = async (liveInstance, documentNode, logger) => {
    const vDom = document.implementation.createHTMLDocument();
    const updates = [];
    const templateBlockHandler = async ({ startNode, endNode, name, scope, pathStack, depth, stashedNodes }, logger2) => {
      logger2?.log?.(`Received a template block to render for ${name}`);
      if (depth) {
        logger2?.log?.(`Skipping render for nested component ${name}`);
        return;
      }
      ;
      const liveRenderFlag = scope?.live_render ?? scope?.liveRender ?? scope?._live_render ?? scope?._liveRender ?? true;
      if (!liveRenderFlag) {
        logger2?.log?.(`Skipping render for ${name} due to false liverender flag`);
        return;
      }
      ;
      const output = vDom.createElement("div");
      await liveInstance.renderElement(name, scope, output, logger2?.nested?.());
      logger2?.log?.(`Rendered ${name} block into an update`);
      updates.push({ startNode, endNode, output, pathStack, scope, name, stashedNodes });
    };
    logger?.log?.(`Evaluating templates found in a document`);
    await evaluateTemplate({
      liveInstance,
      documentNode,
      templateBlockHandler,
      isRetry: false,
      logger: logger?.nested?.(),
      processDeepComponents: false
    });
    logger?.log?.(`Completed evaluating the document`);
    return updates;
  };
  var findDataBinding = (identifier, liveInstance, pathStack, logger) => {
    logger?.log?.(`Finding the data binding for ${identifier}`);
    const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
    if (typeof normalizedIdentifier === "object") {
      for (const innerIdentifier of Object.values(normalizedIdentifier)) {
        logger?.log?.(`'twas an object \u2014 finding the data binding for ${innerIdentifier}'`);
        let dataBinding = findDataBinding(innerIdentifier, liveInstance, pathStack, logger?.nested?.());
        if (dataBinding)
          return dataBinding;
      }
      return null;
    }
    let path = findInStack(normalizedIdentifier, pathStack) ?? normalizedIdentifier;
    let pathResolves = dig(liveInstance.data, path);
    logger?.log?.(`Found the path ${path}, which ${pathResolves ? `does resolve` : `does not resolve`}`);
    if (pathResolves) {
      let dataBinding = path.replace(/^page(\.|$)/, "");
      dataBinding = dataBinding.replace(/^Params(\.|$)/, "");
      return dataBinding;
    }
  };
  var hydrateDataBindings = async (liveInstance, documentNode, pathsInScope, preComment, postComment, stashedNodes, logger) => {
    logger?.log?.(`Hydrating data bindings`);
    const vDom = documentNode.ownerDocument;
    const components = [];
    documentNode.prepend(preComment);
    for (let node of stashedNodes.reverse()) {
      logger?.log?.(`Adding a stashed node to the top of our document node`);
      documentNode.prepend(node);
    }
    documentNode.append(postComment);
    vDom.body.appendChild(documentNode);
    const templateBlockHandler = async (component, logger2) => {
      logger2?.log?.(`Storing an update for ${component.name}`);
      components.push(component);
    };
    logger?.log?.(`Evaluating template...`);
    await evaluateTemplate({
      liveInstance,
      documentNode,
      pathStack: [{}],
      templateBlockHandler,
      isRetry: false,
      logger: logger?.nested?.()
    });
    for (let { startNode, endNode, params, pathStack, scope, name } of components) {
      const isStandardComponent = liveInstance.resolveComponentType(name) === "component";
      const dataBindingFlag = scope?.editorLink ?? scope?.editor_link ?? scope?._editorLink ?? scope?._editor_link ?? scope?.dataBinding ?? scope?.data_binding ?? scope?._dataBinding ?? scope?._data_binding ?? isStandardComponent;
      if (dataBindingFlag) {
        let dataBinding = null;
        for (const [, identifier] of params) {
          dataBinding = findDataBinding(identifier, liveInstance, pathStack, logger?.nested?.());
          if (dataBinding)
            break;
        }
        if (dataBinding) {
          logger?.log?.(`Found the data binding ${dataBinding} for ${name}`);
          let node = startNode.nextElementSibling;
          while (node && (node.compareDocumentPosition(endNode) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
            logger?.log?.(`Setting data-cms-bind on an element`);
            node.dataset.cmsBind = `#${dataBinding}`;
            node = node.nextElementSibling;
          }
        } else {
          logger?.log?.(`Couldn't find a data binding for ${name}`);
        }
      } else {
        logger?.log?.(`${name} opted out of getting a data binding`);
      }
    }
    preComment.remove();
    postComment.remove();
    for (let node of stashedNodes) {
      node.remove();
    }
    documentNode.remove();
  };
  var graftTrees = (DOMStart, DOMEnd, vDOMObject, logger) => {
    let existingNodes = [], incomingNodes = [...vDOMObject.childNodes];
    let existingNode = DOMStart.nextSibling;
    while (nodeIsBefore(existingNode, DOMEnd)) {
      existingNodes.push(existingNode);
      existingNode = existingNode.nextSibling;
    }
    if (existingNodes.length !== incomingNodes.length) {
      logger?.log?.(`Trees are different lengths, replacing the entire region en-masse`);
      replaceHTMLRegion(DOMStart, DOMEnd, vDOMObject);
      return;
    }
    logger?.log?.(`Updating the tree...`);
    for (let i = 0; i < existingNodes.length; i++) {
      diffAndUpdateNode(existingNodes[i], incomingNodes[i]);
    }
  };
  var diffAndUpdateNode = (existingNode, incomingNode) => {
    if (existingNode.isEqualNode(incomingNode)) {
      return;
    }
    if (!existingNode.cloneNode(false).isEqualNode(incomingNode.cloneNode(false))) {
      existingNode.replaceWith(incomingNode);
      return;
    }
    if (existingNode.childNodes.length !== incomingNode.childNodes.length) {
      existingNode.replaceWith(incomingNode);
      return;
    }
    const existingChildren = [...existingNode.childNodes];
    const incomingChildren = [...incomingNode.childNodes];
    for (let i = 0; i < existingChildren.length; i++) {
      diffAndUpdateNode(existingChildren[i], incomingChildren[i]);
    }
  };

  // node_modules/@bookshop/live/lib/app/live.js
  var sleep = (ms = 0) => {
    return new Promise((r) => setTimeout(r, ms));
  };
  var getLive = (engines2) => class BookshopLive {
    constructor(options) {
      this.engines = engines2;
      this.elements = [];
      this.globalData = {};
      this.data = {};
      this.cloudcannonInfo = {};
      this.renderOptions = {};
      this.renderCount = 0;
      this.renderedAt = 0;
      this.shouldRenderAt = null;
      this.renderFrequency = 1e3;
      this.renderTimeout = null;
      this.verbose = false;
      this.lastLog = Date.now();
      this.storedMeta = false;
      this.memo = {};
      this.logFn = this.logger();
      this.loadedFn = options?.loadedFn;
      const remoteGlobals = options?.remoteGlobals?.length || 0;
      this.awaitingDataFetches = remoteGlobals + 1;
      options?.remoteGlobals?.forEach(this.fetchGlobalData.bind(this));
      this.fetchInfo();
    }
    completeRender() {
      if (typeof this.loadedFn === "function") {
        this.loadedFn();
        this.loadedFn = null;
      }
      this.renderCount += 1;
    }
    logger(depth = 0) {
      return {
        log: (str2) => {
          if (this.verbose || typeof window !== "undefined" && window?.bookshopLiveVerbose) {
            console.log(`+${Date.now() - this.lastLog}ms : ${"|  ".repeat(depth)}${str2}`);
          }
          this.lastLog = Date.now();
        },
        nested: () => this.logger(depth + 1)
      };
    }
    async fetchInfo() {
      try {
        this.logFn.log(`Trying to load /_cloudcannon/info.json`);
        const dataReq = await fetch(`/_cloudcannon/info.json`);
        this.cloudcannonInfo = await dataReq.json();
        await this.engines[0].storeInfo?.(this.cloudcannonInfo);
        this.awaitingDataFetches -= 1;
        this.logFn.log(`Loaded /_cloudcannon/info.json`);
      } catch (e) {
        this.awaitingDataFetches -= 1;
        this.logFn.log(`\u274C Failed to load /_cloudcannon/info.json`);
      }
    }
    async fetchGlobalData(path) {
      try {
        const dataReq = await fetch(path);
        const data = await dataReq.json();
        Object.assign(this.globalData, data);
        this.awaitingDataFetches -= 1;
      } catch (e) {
        this.awaitingDataFetches -= 1;
      }
    }
    readElement(el) {
      return {
        dom: el,
        originalHTML: el.innerHTML,
        componentName: el.dataset.bookshopLive,
        componentPropSource: el.dataset.bookshopProps
      };
    }
    resolveComponentType(componentName) {
      return this.engines[0].resolveComponentType(componentName);
    }
    async storeMeta(meta) {
      await this.engines[0].storeMeta?.(meta);
    }
    async renderElement(componentName, scope, dom, logger) {
      try {
        logger?.log?.(`Rendering ${componentName}`);
        await this.engines[0].render(dom, componentName, scope, { ...this.globalData }, logger?.nested?.());
        logger?.log?.(`Rendered ${componentName}`);
      } catch (e) {
        logger?.log?.(`Error rendering ${componentName}`);
        console.warn(`Error rendering bookshop component ${componentName}`, e.toString());
        console.warn(`This is expected in certain cases, and may not be an issue, especially when deleting or re-ordering components.`);
      }
    }
    async eval(identifier, scope, logger) {
      logger?.log?.(`Evaluating ${identifier} in ${JSON.stringify(scope)}`);
      const result = await this.engines[0].eval(identifier, scope, logger);
      logger?.log?.(`Evaluated to ${JSON.stringify(result)}`);
      return result;
    }
    normalize(identifier, logger) {
      const key = `Normalizing ${identifier}`;
      logger?.log?.(key);
      if (typeof this.engines[0].normalize === "function") {
        if (!this.memo[key]) {
          identifier = this.engines[0].normalize(identifier);
          this.memo[key] = identifier;
        } else {
          identifier = this.memo[key];
        }
        logger?.log?.(`Normalized to ${typeof identifier === "object" ? "json: " + JSON.stringify(identifier) : identifier}`);
      }
      return identifier;
    }
    async update(data, options) {
      this.logFn.log(`Received new data to update the page with`);
      const now = Date.now();
      if (typeof this.engines[0].transformData === "function" && options?.transformData !== false) {
        this.data = this.engines[0].transformData(data);
        this.logFn.log(`Transformed the data using the engine's transform function`);
      } else {
        this.data = data;
      }
      this.renderOptions = options;
      while (this.awaitingDataFetches > 0) {
        this.logFn.log(`Still fetching remote data, waiting for all fetches to complete...`);
        await sleep(100);
      }
      if (now - this.renderedAt < this.renderFrequency) {
        const shouldRenderAt = this.renderedAt + this.renderFrequency;
        this.shouldRenderAt = shouldRenderAt;
        this.logFn.log(`Throttling this render \u2014 will try to render again in ${shouldRenderAt - now}ms`);
        await sleep(shouldRenderAt - now);
        if (shouldRenderAt !== this.shouldRenderAt) {
          this.logFn.log(`A newer render has schedule itself \u2014 throwing away this render attempt`);
          return false;
        }
        this.logFn.log(`Now running previously throttled render`);
      }
      const realNow = Date.now();
      this.shouldRenderAt = null;
      this.renderedAt = Date.now();
      this.logFn.log(`Rendering the update`);
      await this.render();
      this.logFn.log(`Done rendering in ${Date.now() - realNow}ms (${Date.now() - now}ms throttled)`);
      return true;
    }
    async render() {
      const CCEditorPanelSupport = typeof window === "undefined" || typeof window !== "undefined" && window.CloudCannon?.refreshInterface;
      this.logFn.log(CCEditorPanelSupport ? `Editor panels are supported` : `Editor panels are not supported`);
      const options = {
        dataBindings: CCEditorPanelSupport,
        ...this.renderOptions
      };
      if (typeof window !== "undefined" && (window.bookshopEditorLinks === false || window.bookshopDataBindings === false)) {
        options.dataBindings = false;
      }
      if (options.editorLinks === false) {
        options.dataBindings = false;
      }
      this.logFn.log(options.dataBindings ? `Data bindings are enabled` : `Data bindings are disabled`);
      this.logFn.log(`Rendering component updates...`);
      const componentUpdates = await renderComponentUpdates(this, document, this.logFn.nested());
      this.logFn.log(`Individual component updates have been rendered`);
      for (let {
        startNode,
        endNode,
        output,
        pathStack,
        stashedNodes,
        name
      } of componentUpdates) {
        this.logFn.log(`Processing a component update for ${name}`);
        if (options.dataBindings) {
          this.logFn.log(`Hydrating the data bindings for ${name}`);
          await hydrateDataBindings(this, output, pathStack, startNode.cloneNode(), endNode.cloneNode(), stashedNodes.map((n) => n.cloneNode()), this.logFn.nested());
        }
        this.logFn.log(`Grafting ${name}'s update to the DOM tree`);
        graftTrees(startNode, endNode, output, this.logFn.nested());
        this.logFn.log(`Completed grafting ${name}'s update to the DOM tree`);
      }
      this.completeRender();
      this.logFn.log(`Finished rendering`);
    }
  };

  // node_modules/@bookshop/eleventy-engine/node_modules/liquidjs/dist/liquid.browser.mjs
  var Token = class {
    constructor(kind, input, begin, end, file) {
      this.kind = kind;
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
    getText() {
      return this.input.slice(this.begin, this.end);
    }
    getPosition() {
      let [row, col] = [1, 1];
      for (let i = 0; i < this.begin; i++) {
        if (this.input[i] === "\n") {
          row++;
          col = 1;
        } else
          col++;
      }
      return [row, col];
    }
    size() {
      return this.end - this.begin;
    }
  };
  var Drop = class {
    liquidMethodMissing(key) {
      return void 0;
    }
  };
  var toString$1 = Object.prototype.toString;
  var toLowerCase = String.prototype.toLowerCase;
  var hasOwnProperty = Object.hasOwnProperty;
  function isString(value) {
    return typeof value === "string";
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isPromise(val) {
    return val && isFunction(val.then);
  }
  function isIterator(val) {
    return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
  }
  function escapeRegex(str2) {
    return str2.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function stringify(value) {
    value = toValue(value);
    if (isString(value))
      return value;
    if (isNil(value))
      return "";
    if (isArray(value))
      return value.map((x) => stringify(x)).join("");
    return String(value);
  }
  function toEnumerable(val) {
    val = toValue(val);
    if (isArray(val))
      return val;
    if (isString(val) && val.length > 0)
      return [val];
    if (isIterable(val))
      return Array.from(val);
    if (isObject(val))
      return Object.keys(val).map((key) => [key, val[key]]);
    return [];
  }
  function toArray(val) {
    val = toValue(val);
    if (isNil(val))
      return [];
    if (isArray(val))
      return val;
    return [val];
  }
  function toValue(value) {
    return value instanceof Drop && isFunction(value.valueOf) ? value.valueOf() : value;
  }
  function toNumber(value) {
    value = Number(value);
    return isNaN(value) ? 0 : value;
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function toLiquid(value) {
    if (value && isFunction(value.toLiquid))
      return toLiquid(value.toLiquid());
    return value;
  }
  function isNil(value) {
    return value == null;
  }
  function isUndefined(value) {
    return value === void 0;
  }
  function isArray(value) {
    return toString$1.call(value) === "[object Array]";
  }
  function isIterable(value) {
    return isObject(value) && Symbol.iterator in value;
  }
  function forOwn(obj, iteratee) {
    obj = obj || {};
    for (const k in obj) {
      if (hasOwnProperty.call(obj, k)) {
        if (iteratee(obj[k], k, obj) === false)
          break;
      }
    }
    return obj;
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  function isObject(value) {
    const type2 = typeof value;
    return value !== null && (type2 === "object" || type2 === "function");
  }
  function range(start, stop, step = 1) {
    const arr = [];
    for (let i = start; i < stop; i += step) {
      arr.push(i);
    }
    return arr;
  }
  function padStart(str2, length, ch = " ") {
    return pad(str2, length, ch, (str3, ch2) => ch2 + str3);
  }
  function padEnd(str2, length, ch = " ") {
    return pad(str2, length, ch, (str3, ch2) => str3 + ch2);
  }
  function pad(str2, length, ch, add) {
    str2 = String(str2);
    let n = length - str2.length;
    while (n-- > 0)
      str2 = add(str2, ch);
    return str2;
  }
  function identify(val) {
    return val;
  }
  function changeCase(str2) {
    const hasLowerCase = [...str2].some((ch) => ch >= "a" && ch <= "z");
    return hasLowerCase ? str2.toUpperCase() : str2.toLowerCase();
  }
  function ellipsis(str2, N) {
    return str2.length > N ? str2.slice(0, N - 3) + "..." : str2;
  }
  function caseInsensitiveCompare(a, b) {
    if (a == null && b == null)
      return 0;
    if (a == null)
      return 1;
    if (b == null)
      return -1;
    a = toLowerCase.call(a);
    b = toLowerCase.call(b);
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  }
  function argumentsToValue(fn) {
    return function(...args) {
      return fn.call(this, ...args.map(toValue));
    };
  }
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  var TRAIT = "__liquidClass__";
  var LiquidError = class extends Error {
    constructor(err, token) {
      super(typeof err === "string" ? err : err.message);
      this.context = "";
      if (typeof err !== "string")
        Object.defineProperty(this, "originalError", { value: err, enumerable: false });
      Object.defineProperty(this, "token", { value: token, enumerable: false });
      Object.defineProperty(this, TRAIT, { value: "LiquidError", enumerable: false });
    }
    update() {
      Object.defineProperty(this, "context", { value: mkContext(this.token), enumerable: false });
      this.message = mkMessage(this.message, this.token);
      this.stack = this.message + "\n" + this.context + "\n" + this.stack;
      if (this.originalError)
        this.stack += "\nFrom " + this.originalError.stack;
    }
    static is(obj) {
      return (obj === null || obj === void 0 ? void 0 : obj[TRAIT]) === "LiquidError";
    }
  };
  var TokenizationError = class extends LiquidError {
    constructor(message, token) {
      super(message, token);
      this.name = "TokenizationError";
      super.update();
    }
  };
  var ParseError = class extends LiquidError {
    constructor(err, token) {
      super(err, token);
      this.name = "ParseError";
      this.message = err.message;
      super.update();
    }
  };
  var RenderError = class extends LiquidError {
    constructor(err, tpl) {
      super(err, tpl.token);
      this.name = "RenderError";
      this.message = err.message;
      super.update();
    }
    static is(obj) {
      return obj.name === "RenderError";
    }
  };
  var LiquidErrors = class extends LiquidError {
    constructor(errors) {
      super(errors[0], errors[0].token);
      this.errors = errors;
      this.name = "LiquidErrors";
      const s = errors.length > 1 ? "s" : "";
      this.message = `${errors.length} error${s} found`;
      super.update();
    }
    static is(obj) {
      return obj.name === "LiquidErrors";
    }
  };
  var UndefinedVariableError = class extends LiquidError {
    constructor(err, token) {
      super(err, token);
      this.name = "UndefinedVariableError";
      this.message = err.message;
      super.update();
    }
  };
  var InternalUndefinedVariableError = class extends Error {
    constructor(variableName) {
      super(`undefined variable: ${variableName}`);
      this.name = "InternalUndefinedVariableError";
      this.variableName = variableName;
    }
  };
  var AssertionError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "AssertionError";
      this.message = message + "";
    }
  };
  function mkContext(token) {
    const [line, col] = token.getPosition();
    const lines = token.input.split("\n");
    const begin = Math.max(line - 2, 1);
    const end = Math.min(line + 3, lines.length);
    const context = range(begin, end + 1).map((lineNumber) => {
      const rowIndicator = lineNumber === line ? ">> " : "   ";
      const num = padStart(String(lineNumber), String(end).length);
      let text = `${rowIndicator}${num}| `;
      const colIndicator = lineNumber === line ? "\n" + padStart("^", col + text.length) : "";
      text += lines[lineNumber - 1];
      text += colIndicator;
      return text;
    }).join("\n");
    return context;
  }
  function mkMessage(msg, token) {
    if (token.file)
      msg += `, file:${token.file}`;
    const [line, col] = token.getPosition();
    msg += `, line:${line}, col:${col}`;
    return msg;
  }
  var TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  var WORD = 1;
  var BLANK = 4;
  var QUOTE = 8;
  var INLINE_BLANK = 16;
  var NUMBER = 32;
  var SIGN = 64;
  var PUNCTUATION = 128;
  function isWord(char) {
    const code = char.charCodeAt(0);
    return code >= 128 ? !TYPES[code] : !!(TYPES[code] & WORD);
  }
  TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;
  TYPES[8220] = TYPES[8221] = PUNCTUATION;
  function assert(predicate, message) {
    if (!predicate) {
      const msg = typeof message === "function" ? message() : message || `expect ${predicate} to be true`;
      throw new AssertionError(msg);
    }
  }
  function assertEmpty(predicate, message = `unexpected ${JSON.stringify(predicate)}`) {
    assert(!predicate, message);
  }
  var NullDrop = class extends Drop {
    equals(value) {
      return isNil(toValue(value));
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return null;
    }
  };
  var EmptyDrop = class extends Drop {
    equals(value) {
      if (value instanceof EmptyDrop)
        return false;
      value = toValue(value);
      if (isString(value) || isArray(value))
        return value.length === 0;
      if (isObject(value))
        return Object.keys(value).length === 0;
      return false;
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return "";
    }
  };
  var BlankDrop = class extends EmptyDrop {
    equals(value) {
      if (value === false)
        return true;
      if (isNil(toValue(value)))
        return true;
      if (isString(value))
        return /^\s*$/.test(value);
      return super.equals(value);
    }
  };
  var ForloopDrop = class extends Drop {
    constructor(length, collection, variable) {
      super();
      this.i = 0;
      this.length = length;
      this.name = `${variable}-${collection}`;
    }
    next() {
      this.i++;
    }
    index0() {
      return this.i;
    }
    index() {
      return this.i + 1;
    }
    first() {
      return this.i === 0;
    }
    last() {
      return this.i === this.length - 1;
    }
    rindex() {
      return this.length - this.i;
    }
    rindex0() {
      return this.length - this.i - 1;
    }
    valueOf() {
      return JSON.stringify(this);
    }
  };
  var BlockDrop = class extends Drop {
    constructor(superBlockRender = () => "") {
      super();
      this.superBlockRender = superBlockRender;
    }
    super() {
      return this.superBlockRender();
    }
  };
  function isComparable(arg) {
    return arg && isFunction(arg.equals) && isFunction(arg.gt) && isFunction(arg.geq) && isFunction(arg.lt) && isFunction(arg.leq);
  }
  var nil = new NullDrop();
  var literalValues = {
    "true": true,
    "false": false,
    "nil": nil,
    "null": nil,
    "empty": new EmptyDrop(),
    "blank": new BlankDrop()
  };
  function createTrie(input) {
    const trie = {};
    for (const [name, data] of Object.entries(input)) {
      let node = trie;
      for (let i = 0; i < name.length; i++) {
        const c = name[i];
        node[c] = node[c] || {};
        if (i === name.length - 1 && isWord(name[i])) {
          node[c].needBoundary = true;
        }
        node = node[c];
      }
      node.data = data;
      node.end = true;
    }
    return trie;
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve3) {
        resolve3(value);
      });
    }
    return new (P || (P = Promise))(function(resolve3, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function toPromise(val) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!isIterator(val))
        return val;
      let value;
      let done = false;
      let next = "next";
      do {
        const state = val[next](value);
        done = state.done;
        value = state.value;
        next = "next";
        try {
          if (isIterator(value))
            value = toPromise(value);
          if (isPromise(value))
            value = yield value;
        } catch (err) {
          next = "throw";
          value = err;
        }
      } while (!done);
      return value;
    });
  }
  function toValueSync(val) {
    if (!isIterator(val))
      return val;
    let value;
    let done = false;
    let next = "next";
    do {
      const state = val[next](value);
      done = state.done;
      value = state.value;
      next = "next";
      if (isIterator(value)) {
        try {
          value = toValueSync(value);
        } catch (err) {
          next = "throw";
          value = err;
        }
      }
    } while (!done);
    return value;
  }
  var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
  function daysInMonth(d) {
    const feb = isLeapYear(d) ? 29 : 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  function getDayOfYear(d) {
    let num = 0;
    for (let i = 0; i < d.getMonth(); ++i) {
      num += daysInMonth(d)[i];
    }
    return num + d.getDate();
  }
  function getWeekOfYear(d, startDay) {
    const now = getDayOfYear(d) + (startDay - d.getDay());
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const then = 7 - jan1.getDay() + startDay;
    return String(Math.floor((now - then) / 7) + 1);
  }
  function isLeapYear(d) {
    const year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
  }
  function ordinal(d) {
    const date3 = d.getDate();
    if ([11, 12, 13].includes(date3))
      return "th";
    switch (date3 % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  function century(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
  }
  var padWidths = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
  };
  var padSpaceChars = new Set("aAbBceklpP");
  function getTimezoneOffset(d, opts) {
    const nOffset = Math.abs(d.getTimezoneOffset());
    const h = Math.floor(nOffset / 60);
    const m = nOffset % 60;
    return (d.getTimezoneOffset() > 0 ? "-" : "+") + padStart(h, 2, "0") + (opts.flags[":"] ? ":" : "") + padStart(m, 2, "0");
  }
  var formatCodes = {
    a: (d) => d.getShortWeekdayName(),
    A: (d) => d.getLongWeekdayName(),
    b: (d) => d.getShortMonthName(),
    B: (d) => d.getLongMonthName(),
    c: (d) => d.toLocaleString(),
    C: (d) => century(d),
    d: (d) => d.getDate(),
    e: (d) => d.getDate(),
    H: (d) => d.getHours(),
    I: (d) => String(d.getHours() % 12 || 12),
    j: (d) => getDayOfYear(d),
    k: (d) => d.getHours(),
    l: (d) => String(d.getHours() % 12 || 12),
    L: (d) => d.getMilliseconds(),
    m: (d) => d.getMonth() + 1,
    M: (d) => d.getMinutes(),
    N: (d, opts) => {
      const width = Number(opts.width) || 9;
      const str2 = String(d.getMilliseconds()).slice(0, width);
      return padEnd(str2, width, "0");
    },
    p: (d) => d.getHours() < 12 ? "AM" : "PM",
    P: (d) => d.getHours() < 12 ? "am" : "pm",
    q: (d) => ordinal(d),
    s: (d) => Math.round(d.getTime() / 1e3),
    S: (d) => d.getSeconds(),
    u: (d) => d.getDay() || 7,
    U: (d) => getWeekOfYear(d, 0),
    w: (d) => d.getDay(),
    W: (d) => getWeekOfYear(d, 1),
    x: (d) => d.toLocaleDateString(),
    X: (d) => d.toLocaleTimeString(),
    y: (d) => d.getFullYear().toString().slice(2, 4),
    Y: (d) => d.getFullYear(),
    z: getTimezoneOffset,
    Z: (d, opts) => d.getTimeZoneName() || getTimezoneOffset(d, opts),
    "t": () => "	",
    "n": () => "\n",
    "%": () => "%"
  };
  formatCodes.h = formatCodes.b;
  function strftime(d, formatStr) {
    let output = "";
    let remaining = formatStr;
    let match;
    while (match = rFormat.exec(remaining)) {
      output += remaining.slice(0, match.index);
      remaining = remaining.slice(match.index + match[0].length);
      output += format(d, match);
    }
    return output + remaining;
  }
  function format(d, match) {
    const [input, flagStr = "", width, modifier, conversion] = match;
    const convert = formatCodes[conversion];
    if (!convert)
      return input;
    const flags = {};
    for (const flag of flagStr)
      flags[flag] = true;
    let ret = String(convert(d, { flags, width, modifier }));
    let padChar = padSpaceChars.has(conversion) ? " " : "0";
    let padWidth = width || padWidths[conversion] || 0;
    if (flags["^"])
      ret = ret.toUpperCase();
    else if (flags["#"])
      ret = changeCase(ret);
    if (flags["_"])
      padChar = " ";
    else if (flags["0"])
      padChar = "0";
    if (flags["-"])
      padWidth = 0;
    return padStart(ret, padWidth, padChar);
  }
  function getDateTimeFormat() {
    return typeof Intl !== "undefined" ? Intl.DateTimeFormat : void 0;
  }
  var OneMinute = 6e4;
  var ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var monthNamesShort = monthNames.map((name) => name.slice(0, 3));
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var dayNamesShort = dayNames.map((name) => name.slice(0, 3));
  var LiquidDate = class {
    constructor(init, locale, timezone) {
      this.locale = locale;
      this.DateTimeFormat = getDateTimeFormat();
      this.date = new Date(init);
      this.timezoneFixed = timezone !== void 0;
      if (timezone === void 0) {
        timezone = this.date.getTimezoneOffset();
      }
      this.timezoneOffset = isString(timezone) ? LiquidDate.getTimezoneOffset(timezone, this.date) : timezone;
      this.timezoneName = isString(timezone) ? timezone : "";
      const diff = (this.date.getTimezoneOffset() - this.timezoneOffset) * OneMinute;
      const time = this.date.getTime() + diff;
      this.displayDate = new Date(time);
    }
    getTime() {
      return this.displayDate.getTime();
    }
    getMilliseconds() {
      return this.displayDate.getMilliseconds();
    }
    getSeconds() {
      return this.displayDate.getSeconds();
    }
    getMinutes() {
      return this.displayDate.getMinutes();
    }
    getHours() {
      return this.displayDate.getHours();
    }
    getDay() {
      return this.displayDate.getDay();
    }
    getDate() {
      return this.displayDate.getDate();
    }
    getMonth() {
      return this.displayDate.getMonth();
    }
    getFullYear() {
      return this.displayDate.getFullYear();
    }
    toLocaleString(locale, init) {
      if (init === null || init === void 0 ? void 0 : init.timeZone) {
        return this.date.toLocaleString(locale, init);
      }
      return this.displayDate.toLocaleString(locale, init);
    }
    toLocaleTimeString(locale) {
      return this.displayDate.toLocaleTimeString(locale);
    }
    toLocaleDateString(locale) {
      return this.displayDate.toLocaleDateString(locale);
    }
    getTimezoneOffset() {
      return this.timezoneOffset;
    }
    getTimeZoneName() {
      if (this.timezoneFixed)
        return this.timezoneName;
      if (!this.DateTimeFormat)
        return;
      return this.DateTimeFormat().resolvedOptions().timeZone;
    }
    getLongMonthName() {
      var _a;
      return (_a = this.format({ month: "long" })) !== null && _a !== void 0 ? _a : monthNames[this.getMonth()];
    }
    getShortMonthName() {
      var _a;
      return (_a = this.format({ month: "short" })) !== null && _a !== void 0 ? _a : monthNamesShort[this.getMonth()];
    }
    getLongWeekdayName() {
      var _a;
      return (_a = this.format({ weekday: "long" })) !== null && _a !== void 0 ? _a : dayNames[this.displayDate.getDay()];
    }
    getShortWeekdayName() {
      var _a;
      return (_a = this.format({ weekday: "short" })) !== null && _a !== void 0 ? _a : dayNamesShort[this.displayDate.getDay()];
    }
    valid() {
      return !isNaN(this.getTime());
    }
    format(options) {
      return this.DateTimeFormat && this.DateTimeFormat(this.locale, options).format(this.displayDate);
    }
    static createDateFixedToTimezone(dateString, locale) {
      const m = dateString.match(ISO8601_TIMEZONE_PATTERN);
      if (m && m[1] === "Z") {
        return new LiquidDate(+new Date(dateString), locale, 0);
      }
      if (m && m[2] && m[3] && m[4]) {
        const [, , sign, hours, minutes] = m;
        const offset2 = (sign === "+" ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
        return new LiquidDate(+new Date(dateString), locale, offset2);
      }
      return new LiquidDate(dateString, locale);
    }
    static getTimezoneOffset(timezoneName, date3) {
      const localDateString = date3.toLocaleString("en-US", { timeZone: timezoneName });
      const utcDateString = date3.toLocaleString("en-US", { timeZone: "UTC" });
      const localDate = new Date(localDateString);
      const utcDate = new Date(utcDateString);
      return (+utcDate - +localDate) / (60 * 1e3);
    }
  };
  var Limiter = class {
    constructor(resource, limit2) {
      this.base = 0;
      this.message = `${resource} limit exceeded`;
      this.limit = limit2;
    }
    use(count) {
      count = toNumber(count);
      assert(this.base + count <= this.limit, this.message);
      this.base += count;
    }
    check(count) {
      count = toNumber(count);
      assert(count <= this.limit, this.message);
    }
  };
  var DelimitedToken = class extends Token {
    constructor(kind, [contentBegin, contentEnd], input, begin, end, trimLeft3, trimRight3, file) {
      super(kind, input, begin, end, file);
      this.trimLeft = false;
      this.trimRight = false;
      const tl = input[contentBegin] === "-";
      const tr = input[contentEnd - 1] === "-";
      let l = tl ? contentBegin + 1 : contentBegin;
      let r = tr ? contentEnd - 1 : contentEnd;
      while (l < r && TYPES[input.charCodeAt(l)] & BLANK)
        l++;
      while (r > l && TYPES[input.charCodeAt(r - 1)] & BLANK)
        r--;
      this.contentRange = [l, r];
      this.trimLeft = tl || trimLeft3;
      this.trimRight = tr || trimRight3;
    }
    get content() {
      return this.input.slice(this.contentRange[0], this.contentRange[1]);
    }
  };
  var TagToken = class extends DelimitedToken {
    constructor(input, begin, end, options, file) {
      const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options;
      const [valueBegin, valueEnd] = [begin + tagDelimiterLeft.length, end - tagDelimiterRight.length];
      super(TokenKind.Tag, [valueBegin, valueEnd], input, begin, end, trimTagLeft, trimTagRight, file);
      this.tokenizer = new Tokenizer(input, options.operators, file, this.contentRange);
      this.name = this.tokenizer.readTagName();
      this.tokenizer.assert(this.name, `illegal tag syntax, tag name expected`);
      this.tokenizer.skipBlank();
    }
    get args() {
      return this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
    }
  };
  var OutputToken = class extends DelimitedToken {
    constructor(input, begin, end, options, file) {
      const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options;
      const valueRange = [begin + outputDelimiterLeft.length, end - outputDelimiterRight.length];
      super(TokenKind.Output, valueRange, input, begin, end, trimOutputLeft, trimOutputRight, file);
    }
  };
  var HTMLToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.HTML, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.trimLeft = 0;
      this.trimRight = 0;
    }
    getContent() {
      return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    }
  };
  var NumberToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Number, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = Number(this.getText());
    }
  };
  var IdentifierToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Word, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = this.getText();
    }
  };
  var LiteralToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Literal, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.literal = this.getText();
      this.content = literalValues[this.literal];
    }
  };
  var operatorPrecedences = {
    "==": 2,
    "!=": 2,
    ">": 2,
    "<": 2,
    ">=": 2,
    "<=": 2,
    "contains": 2,
    "not": 1,
    "and": 0,
    "or": 0
  };
  var operatorTypes = {
    "==": 0,
    "!=": 0,
    ">": 0,
    "<": 0,
    ">=": 0,
    "<=": 0,
    "contains": 0,
    "not": 1,
    "and": 0,
    "or": 0
  };
  var OperatorToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Operator, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.operator = this.getText();
    }
    getPrecedence() {
      const key = this.getText();
      return key in operatorPrecedences ? operatorPrecedences[key] : 1;
    }
  };
  var PropertyAccessToken = class extends Token {
    constructor(variable, props, input, begin, end, file) {
      super(TokenKind.PropertyAccess, input, begin, end, file);
      this.variable = variable;
      this.props = props;
    }
  };
  var FilterToken = class extends Token {
    constructor(name, args, input, begin, end, file) {
      super(TokenKind.Filter, input, begin, end, file);
      this.name = name;
      this.args = args;
    }
  };
  var HashToken = class extends Token {
    constructor(input, begin, end, name, value, file) {
      super(TokenKind.Hash, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.name = name;
      this.value = value;
      this.file = file;
    }
  };
  var rHex = /[\da-fA-F]/;
  var rOct = /[0-7]/;
  var escapeChar = {
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	",
    v: "\v"
  };
  function hexVal(c) {
    const code = c.charCodeAt(0);
    if (code >= 97)
      return code - 87;
    if (code >= 65)
      return code - 55;
    return code - 48;
  }
  function parseStringLiteral(str2) {
    let ret = "";
    for (let i = 1; i < str2.length - 1; i++) {
      if (str2[i] !== "\\") {
        ret += str2[i];
        continue;
      }
      if (escapeChar[str2[i + 1]] !== void 0) {
        ret += escapeChar[str2[++i]];
      } else if (str2[i + 1] === "u") {
        let val = 0;
        let j = i + 2;
        while (j <= i + 5 && rHex.test(str2[j])) {
          val = val * 16 + hexVal(str2[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      } else if (!rOct.test(str2[i + 1])) {
        ret += str2[++i];
      } else {
        let j = i + 1;
        let val = 0;
        while (j <= i + 3 && rOct.test(str2[j])) {
          val = val * 8 + hexVal(str2[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      }
    }
    return ret;
  }
  var QuotedToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Quoted, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = parseStringLiteral(this.getText());
    }
  };
  var RangeToken = class extends Token {
    constructor(input, begin, end, lhs, rhs, file) {
      super(TokenKind.Range, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.lhs = lhs;
      this.rhs = rhs;
      this.file = file;
    }
  };
  var LiquidTagToken = class extends DelimitedToken {
    constructor(input, begin, end, options, file) {
      super(TokenKind.Tag, [begin, end], input, begin, end, false, false, file);
      this.tokenizer = new Tokenizer(input, options.operators, file, this.contentRange);
      this.name = this.tokenizer.readTagName();
      this.tokenizer.assert(this.name, "illegal liquid tag syntax");
      this.tokenizer.skipBlank();
      this.args = this.tokenizer.remaining();
    }
  };
  var FilteredValueToken = class extends Token {
    constructor(initial, filters3, input, begin, end, file) {
      super(TokenKind.FilteredValue, input, begin, end, file);
      this.initial = initial;
      this.filters = filters3;
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
  };
  var polyfill = {
    now: () => Date.now()
  };
  function getPerformance() {
    return typeof global === "object" && global.performance || typeof window === "object" && window.performance || polyfill;
  }
  var SimpleEmitter = class {
    constructor() {
      this.buffer = "";
    }
    write(html) {
      this.buffer += stringify(html);
    }
  };
  var StreamedEmitter = class {
    constructor() {
      this.buffer = "";
      this.stream = null;
      throw new Error("streaming not supported in browser");
    }
  };
  var KeepingTypeEmitter = class {
    constructor() {
      this.buffer = "";
    }
    write(html) {
      html = toValue(html);
      if (typeof html !== "string" && this.buffer === "") {
        this.buffer = html;
      } else {
        this.buffer = stringify(this.buffer) + stringify(html);
      }
    }
  };
  var Render = class {
    renderTemplatesToNodeStream(templates, ctx) {
      const emitter = new StreamedEmitter();
      Promise.resolve().then(() => toPromise(this.renderTemplates(templates, ctx, emitter))).then(() => emitter.end(), (err) => emitter.error(err));
      return emitter.stream;
    }
    *renderTemplates(templates, ctx, emitter) {
      if (!emitter) {
        emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
      }
      const errors = [];
      for (const tpl of templates) {
        ctx.renderLimit.check(getPerformance().now());
        try {
          const html = yield tpl.render(ctx, emitter);
          html && emitter.write(html);
          if (emitter["break"] || emitter["continue"])
            break;
        } catch (e) {
          const err = LiquidError.is(e) ? e : new RenderError(e, tpl);
          if (ctx.opts.catchAllErrors)
            errors.push(err);
          else
            throw err;
        }
      }
      if (errors.length) {
        throw new LiquidErrors(errors);
      }
      return emitter.buffer;
    }
  };
  var Expression = class {
    constructor(tokens) {
      this.postfix = [...toPostfix(tokens)];
    }
    *evaluate(ctx, lenient) {
      assert(ctx, "unable to evaluate: context not defined");
      const operands = [];
      for (const token of this.postfix) {
        if (isOperatorToken(token)) {
          const r = operands.pop();
          let result;
          if (operatorTypes[token.operator] === 1) {
            result = yield ctx.opts.operators[token.operator](r, ctx);
          } else {
            const l = operands.pop();
            result = yield ctx.opts.operators[token.operator](l, r, ctx);
          }
          operands.push(result);
        } else {
          operands.push(yield evalToken(token, ctx, lenient));
        }
      }
      return operands[0];
    }
    valid() {
      return !!this.postfix.length;
    }
  };
  function* evalToken(token, ctx, lenient = false) {
    if (!token)
      return;
    if ("content" in token)
      return token.content;
    if (isPropertyAccessToken(token))
      return yield evalPropertyAccessToken(token, ctx, lenient);
    if (isRangeToken(token))
      return yield evalRangeToken(token, ctx);
  }
  function* evalPropertyAccessToken(token, ctx, lenient) {
    const props = [];
    for (const prop of token.props) {
      props.push(yield evalToken(prop, ctx, false));
    }
    try {
      if (token.variable) {
        const variable = yield evalToken(token.variable, ctx, lenient);
        return yield ctx._getFromScope(variable, props);
      } else {
        return yield ctx._get(props);
      }
    } catch (e) {
      if (lenient && e.name === "InternalUndefinedVariableError")
        return null;
      throw new UndefinedVariableError(e, token);
    }
  }
  function evalQuotedToken(token) {
    return token.content;
  }
  function* evalRangeToken(token, ctx) {
    const low = yield evalToken(token.lhs, ctx);
    const high = yield evalToken(token.rhs, ctx);
    return range(+low, +high + 1);
  }
  function* toPostfix(tokens) {
    const ops = [];
    for (const token of tokens) {
      if (isOperatorToken(token)) {
        while (ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence()) {
          yield ops.pop();
        }
        ops.push(token);
      } else
        yield token;
    }
    while (ops.length) {
      yield ops.pop();
    }
  }
  function isTruthy(val, ctx) {
    return !isFalsy(val, ctx);
  }
  function isFalsy(val, ctx) {
    val = toValue(val);
    if (ctx.opts.jsTruthy) {
      return !val;
    } else {
      return val === false || val === void 0 || val === null;
    }
  }
  var defaultOperators = {
    "==": equals,
    "!=": (l, r) => !equals(l, r),
    ">": (l, r) => {
      if (isComparable(l))
        return l.gt(r);
      if (isComparable(r))
        return r.lt(l);
      return toValue(l) > toValue(r);
    },
    "<": (l, r) => {
      if (isComparable(l))
        return l.lt(r);
      if (isComparable(r))
        return r.gt(l);
      return toValue(l) < toValue(r);
    },
    ">=": (l, r) => {
      if (isComparable(l))
        return l.geq(r);
      if (isComparable(r))
        return r.leq(l);
      return toValue(l) >= toValue(r);
    },
    "<=": (l, r) => {
      if (isComparable(l))
        return l.leq(r);
      if (isComparable(r))
        return r.geq(l);
      return toValue(l) <= toValue(r);
    },
    "contains": (l, r) => {
      l = toValue(l);
      if (isArray(l))
        return l.some((i) => equals(i, r));
      if (isFunction(l === null || l === void 0 ? void 0 : l.indexOf))
        return l.indexOf(toValue(r)) > -1;
      return false;
    },
    "not": (v, ctx) => isFalsy(toValue(v), ctx),
    "and": (l, r, ctx) => isTruthy(toValue(l), ctx) && isTruthy(toValue(r), ctx),
    "or": (l, r, ctx) => isTruthy(toValue(l), ctx) || isTruthy(toValue(r), ctx)
  };
  function equals(lhs, rhs) {
    if (isComparable(lhs))
      return lhs.equals(rhs);
    if (isComparable(rhs))
      return rhs.equals(lhs);
    lhs = toValue(lhs);
    rhs = toValue(rhs);
    if (isArray(lhs)) {
      return isArray(rhs) && arrayEquals(lhs, rhs);
    }
    return lhs === rhs;
  }
  function arrayEquals(lhs, rhs) {
    if (lhs.length !== rhs.length)
      return false;
    return !lhs.some((value, i) => !equals(value, rhs[i]));
  }
  var Node2 = class {
    constructor(key, value, next, prev) {
      this.key = key;
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  };
  var LRU = class {
    constructor(limit2, size3 = 0) {
      this.limit = limit2;
      this.size = size3;
      this.cache = {};
      this.head = new Node2("HEAD", null, null, null);
      this.tail = new Node2("TAIL", null, null, null);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
    write(key, value) {
      if (this.cache[key]) {
        this.cache[key].value = value;
      } else {
        const node = new Node2(key, value, this.head.next, this.head);
        this.head.next.prev = node;
        this.head.next = node;
        this.cache[key] = node;
        this.size++;
        this.ensureLimit();
      }
    }
    read(key) {
      if (!this.cache[key])
        return;
      const { value } = this.cache[key];
      this.remove(key);
      this.write(key, value);
      return value;
    }
    remove(key) {
      const node = this.cache[key];
      node.prev.next = node.next;
      node.next.prev = node.prev;
      delete this.cache[key];
      this.size--;
    }
    clear() {
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.size = 0;
      this.cache = {};
    }
    ensureLimit() {
      if (this.size > this.limit)
        this.remove(this.tail.prev.key);
    }
  };
  function domResolve(root, path) {
    const base = document.createElement("base");
    base.href = root;
    const head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    const a = document.createElement("a");
    a.href = path;
    const resolved = a.href;
    head.removeChild(base);
    return resolved;
  }
  function resolve(root, filepath, ext) {
    if (root.length && last(root) !== "/")
      root += "/";
    const url = domResolve(root, filepath);
    return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (str2, origin, path) => {
      const last3 = path.split("/").pop();
      if (/\.\w+$/.test(last3))
        return str2;
      return origin + path + ext;
    });
  }
  function readFile(url) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve3, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve3(xhr.responseText);
          } else {
            reject(new Error(xhr.statusText));
          }
        };
        xhr.onerror = () => {
          reject(new Error("An error occurred whilst receiving the response."));
        };
        xhr.open("GET", url);
        xhr.send();
      });
    });
  }
  function readFileSync(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status < 200 || xhr.status >= 300) {
      throw new Error(xhr.statusText);
    }
    return xhr.responseText;
  }
  function exists(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
      return true;
    });
  }
  function existsSync(filepath) {
    return true;
  }
  function dirname(filepath) {
    return domResolve(filepath, ".");
  }
  var sep = "/";
  var fs = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    resolve,
    readFile,
    readFileSync,
    exists,
    existsSync,
    dirname,
    sep
  });
  function defaultFilter(value, defaultValue, ...args) {
    value = toValue(value);
    if (isArray(value) || isString(value))
      return value.length ? value : defaultValue;
    if (value === false && new Map(args).get("allow_false"))
      return false;
    return isFalsy(value, this.context) ? defaultValue : value;
  }
  function json(value, space = 0) {
    return JSON.stringify(value, null, space);
  }
  function inspect(value, space = 0) {
    const ancestors = [];
    return JSON.stringify(value, function(_key, value2) {
      if (typeof value2 !== "object" || value2 === null)
        return value2;
      while (ancestors.length > 0 && ancestors[ancestors.length - 1] !== this)
        ancestors.pop();
      if (ancestors.includes(value2))
        return "[Circular]";
      ancestors.push(value2);
      return value2;
    }, space);
  }
  function to_integer(value) {
    return Number(value);
  }
  var raw = {
    raw: true,
    handler: identify
  };
  var misc = {
    default: defaultFilter,
    raw,
    jsonify: json,
    to_integer,
    json,
    inspect
  };
  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  };
  var unescapeMap = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#34;": '"',
    "&#39;": "'"
  };
  function escape(str2) {
    str2 = stringify(str2);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/&|<|>|"|'/g, (m) => escapeMap[m]);
  }
  function xml_escape(str2) {
    return escape.call(this, str2);
  }
  function unescape(str2) {
    str2 = stringify(str2);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/&(amp|lt|gt|#34|#39);/g, (m) => unescapeMap[m]);
  }
  function escape_once(str2) {
    return escape.call(this, unescape.call(this, str2));
  }
  function newline_to_br(v) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/\r?\n/gm, "<br />\n");
  }
  function strip_html(v) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<.*?>|<!--[\s\S]*?-->/g, "");
  }
  var htmlFilters = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    escape,
    xml_escape,
    escape_once,
    newline_to_br,
    strip_html
  });
  var MapFS = class {
    constructor(mapping) {
      this.mapping = mapping;
      this.sep = "/";
    }
    exists(filepath) {
      return __awaiter(this, void 0, void 0, function* () {
        return this.existsSync(filepath);
      });
    }
    existsSync(filepath) {
      return !isNil(this.mapping[filepath]);
    }
    readFile(filepath) {
      return __awaiter(this, void 0, void 0, function* () {
        return this.readFileSync(filepath);
      });
    }
    readFileSync(filepath) {
      const content = this.mapping[filepath];
      if (isNil(content))
        throw new Error(`ENOENT: ${filepath}`);
      return content;
    }
    dirname(filepath) {
      const segments = filepath.split(this.sep);
      segments.pop();
      return segments.join(this.sep);
    }
    resolve(dir, file, ext) {
      file += ext;
      if (dir === ".")
        return file;
      const segments = dir.split(/\/+/);
      for (const segment of file.split(this.sep)) {
        if (segment === "." || segment === "")
          continue;
        else if (segment === "..") {
          if (segments.length > 1 || segments[0] !== "")
            segments.pop();
        } else
          segments.push(segment);
      }
      return segments.join(this.sep);
    }
  };
  var defaultOptions = {
    root: ["."],
    layouts: ["."],
    partials: ["."],
    relativeReference: true,
    jekyllInclude: false,
    keyValueSeparator: ":",
    cache: void 0,
    extname: "",
    fs,
    dynamicPartials: true,
    jsTruthy: false,
    dateFormat: "%A, %B %-e, %Y at %-l:%M %P %z",
    locale: "",
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: "{%",
    tagDelimiterRight: "%}",
    outputDelimiterLeft: "{{",
    outputDelimiterRight: "}}",
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    ownPropertyOnly: true,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators,
    memoryLimit: Infinity,
    parseLimit: Infinity,
    renderLimit: Infinity
  };
  function normalize(options) {
    var _a, _b;
    if (options.hasOwnProperty("root")) {
      if (!options.hasOwnProperty("partials"))
        options.partials = options.root;
      if (!options.hasOwnProperty("layouts"))
        options.layouts = options.root;
    }
    if (options.hasOwnProperty("cache")) {
      let cache;
      if (typeof options.cache === "number")
        cache = options.cache > 0 ? new LRU(options.cache) : void 0;
      else if (typeof options.cache === "object")
        cache = options.cache;
      else
        cache = options.cache ? new LRU(1024) : void 0;
      options.cache = cache;
    }
    options = Object.assign(Object.assign(Object.assign({}, defaultOptions), options.jekyllInclude ? { dynamicPartials: false } : {}), options);
    if ((!options.fs.dirname || !options.fs.sep) && options.relativeReference) {
      console.warn("[LiquidJS] `fs.dirname` and `fs.sep` are required for relativeReference, set relativeReference to `false` to suppress this warning");
      options.relativeReference = false;
    }
    options.root = normalizeDirectoryList(options.root);
    options.partials = normalizeDirectoryList(options.partials);
    options.layouts = normalizeDirectoryList(options.layouts);
    options.outputEscape = options.outputEscape && getOutputEscapeFunction(options.outputEscape);
    if (!options.locale) {
      options.locale = (_b = (_a = getDateTimeFormat()) === null || _a === void 0 ? void 0 : _a().resolvedOptions().locale) !== null && _b !== void 0 ? _b : "en-US";
    }
    if (options.templates) {
      options.fs = new MapFS(options.templates);
      options.relativeReference = true;
      options.root = options.partials = options.layouts = ".";
    }
    return options;
  }
  function getOutputEscapeFunction(nameOrFunction) {
    if (nameOrFunction === "escape")
      return escape;
    if (nameOrFunction === "json")
      return misc.json;
    assert(isFunction(nameOrFunction), "`outputEscape` need to be of type string or function");
    return nameOrFunction;
  }
  function normalizeDirectoryList(value) {
    let list = [];
    if (isArray(value))
      list = value;
    if (isString(value))
      list = [value];
    return list;
  }
  function whiteSpaceCtrl(tokens, options) {
    let inRaw = false;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!isDelimitedToken(token))
        continue;
      if (!inRaw && token.trimLeft) {
        trimLeft(tokens[i - 1], options.greedy);
      }
      if (isTagToken(token)) {
        if (token.name === "raw")
          inRaw = true;
        else if (token.name === "endraw")
          inRaw = false;
      }
      if (!inRaw && token.trimRight) {
        trimRight(tokens[i + 1], options.greedy);
      }
    }
  }
  function trimLeft(token, greedy) {
    if (!token || !isHTMLToken(token))
      return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
      token.trimRight++;
  }
  function trimRight(token, greedy) {
    if (!token || !isHTMLToken(token))
      return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
      token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === "\n")
      token.trimLeft++;
  }
  var Tokenizer = class {
    constructor(input, operators = defaultOptions.operators, file, range3) {
      this.input = input;
      this.file = file;
      this.rawBeginAt = -1;
      this.p = range3 ? range3[0] : 0;
      this.N = range3 ? range3[1] : input.length;
      this.opTrie = createTrie(operators);
      this.literalTrie = createTrie(literalValues);
    }
    readExpression() {
      return new Expression(this.readExpressionTokens());
    }
    *readExpressionTokens() {
      while (this.p < this.N) {
        const operator = this.readOperator();
        if (operator) {
          yield operator;
          continue;
        }
        const operand = this.readValue();
        if (operand) {
          yield operand;
          continue;
        }
        return;
      }
    }
    readOperator() {
      this.skipBlank();
      const end = this.matchTrie(this.opTrie);
      if (end === -1)
        return;
      return new OperatorToken(this.input, this.p, this.p = end, this.file);
    }
    matchTrie(trie) {
      let node = trie;
      let i = this.p;
      let info;
      while (node[this.input[i]] && i < this.N) {
        node = node[this.input[i++]];
        if (node["end"])
          info = node;
      }
      if (!info)
        return -1;
      if (info["needBoundary"] && isWord(this.peek(i - this.p)))
        return -1;
      return i;
    }
    readFilteredValue() {
      const begin = this.p;
      const initial = this.readExpression();
      this.assert(initial.valid(), `invalid value expression: ${this.snapshot()}`);
      const filters3 = this.readFilters();
      return new FilteredValueToken(initial, filters3, this.input, begin, this.p, this.file);
    }
    readFilters() {
      const filters3 = [];
      while (true) {
        const filter = this.readFilter();
        if (!filter)
          return filters3;
        filters3.push(filter);
      }
    }
    readFilter() {
      this.skipBlank();
      if (this.end())
        return null;
      this.assert(this.peek() === "|", `expected "|" before filter`);
      this.p++;
      const begin = this.p;
      const name = this.readIdentifier();
      if (!name.size()) {
        this.assert(this.end(), `expected filter name`);
        return null;
      }
      const args = [];
      this.skipBlank();
      if (this.peek() === ":") {
        do {
          ++this.p;
          const arg = this.readFilterArg();
          arg && args.push(arg);
          this.skipBlank();
          this.assert(this.end() || this.peek() === "," || this.peek() === "|", () => `unexpected character ${this.snapshot()}`);
        } while (this.peek() === ",");
      } else if (this.peek() === "|" || this.end())
        ;
      else {
        throw this.error('expected ":" after filter name');
      }
      return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
    }
    readFilterArg() {
      const key = this.readValue();
      if (!key)
        return;
      this.skipBlank();
      if (this.peek() !== ":")
        return key;
      ++this.p;
      const value = this.readValue();
      return [key.getText(), value];
    }
    readTopLevelTokens(options = defaultOptions) {
      const tokens = [];
      while (this.p < this.N) {
        const token = this.readTopLevelToken(options);
        tokens.push(token);
      }
      whiteSpaceCtrl(tokens, options);
      return tokens;
    }
    readTopLevelToken(options) {
      const { tagDelimiterLeft, outputDelimiterLeft } = options;
      if (this.rawBeginAt > -1)
        return this.readEndrawOrRawContent(options);
      if (this.match(tagDelimiterLeft))
        return this.readTagToken(options);
      if (this.match(outputDelimiterLeft))
        return this.readOutputToken(options);
      return this.readHTMLToken([tagDelimiterLeft, outputDelimiterLeft]);
    }
    readHTMLToken(stopStrings) {
      const begin = this.p;
      while (this.p < this.N) {
        if (stopStrings.some((str2) => this.match(str2)))
          break;
        ++this.p;
      }
      return new HTMLToken(this.input, begin, this.p, this.file);
    }
    readTagToken(options) {
      const { file, input } = this;
      const begin = this.p;
      if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
        throw this.error(`tag ${this.snapshot(begin)} not closed`, begin);
      }
      const token = new TagToken(input, begin, this.p, options, file);
      if (token.name === "raw")
        this.rawBeginAt = begin;
      return token;
    }
    readToDelimiter(delimiter, respectQuoted = false) {
      this.skipBlank();
      while (this.p < this.N) {
        if (respectQuoted && this.peekType() & QUOTE) {
          this.readQuoted();
          continue;
        }
        ++this.p;
        if (this.rmatch(delimiter))
          return this.p;
      }
      return -1;
    }
    readOutputToken(options = defaultOptions) {
      const { file, input } = this;
      const { outputDelimiterRight } = options;
      const begin = this.p;
      if (this.readToDelimiter(outputDelimiterRight, true) === -1) {
        throw this.error(`output ${this.snapshot(begin)} not closed`, begin);
      }
      return new OutputToken(input, begin, this.p, options, file);
    }
    readEndrawOrRawContent(options) {
      const { tagDelimiterLeft, tagDelimiterRight } = options;
      const begin = this.p;
      let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
      while (this.p < this.N) {
        if (this.readIdentifier().getText() !== "endraw") {
          leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
          continue;
        }
        while (this.p <= this.N) {
          if (this.rmatch(tagDelimiterRight)) {
            const end = this.p;
            if (begin === leftPos) {
              this.rawBeginAt = -1;
              return new TagToken(this.input, begin, end, options, this.file);
            } else {
              this.p = leftPos;
              return new HTMLToken(this.input, begin, leftPos, this.file);
            }
          }
          if (this.rmatch(tagDelimiterLeft))
            break;
          this.p++;
        }
      }
      throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
    }
    readLiquidTagTokens(options = defaultOptions) {
      const tokens = [];
      while (this.p < this.N) {
        const token = this.readLiquidTagToken(options);
        token && tokens.push(token);
      }
      return tokens;
    }
    readLiquidTagToken(options) {
      this.skipBlank();
      if (this.end())
        return;
      const begin = this.p;
      this.readToDelimiter("\n");
      const end = this.p;
      return new LiquidTagToken(this.input, begin, end, options, this.file);
    }
    error(msg, pos = this.p) {
      return new TokenizationError(msg, new IdentifierToken(this.input, pos, this.N, this.file));
    }
    assert(pred, msg, pos) {
      if (!pred)
        throw this.error(typeof msg === "function" ? msg() : msg, pos);
    }
    snapshot(begin = this.p) {
      return JSON.stringify(ellipsis(this.input.slice(begin, this.N), 32));
    }
    readWord() {
      return this.readIdentifier();
    }
    readIdentifier() {
      this.skipBlank();
      const begin = this.p;
      while (!this.end() && isWord(this.peek()))
        ++this.p;
      return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    readNonEmptyIdentifier() {
      const id = this.readIdentifier();
      return id.size() ? id : void 0;
    }
    readTagName() {
      this.skipBlank();
      if (this.input[this.p] === "#")
        return this.input.slice(this.p, ++this.p);
      return this.readIdentifier().getText();
    }
    readHashes(jekyllStyle) {
      const hashes = [];
      while (true) {
        const hash = this.readHash(jekyllStyle);
        if (!hash)
          return hashes;
        hashes.push(hash);
      }
    }
    readHash(jekyllStyle) {
      this.skipBlank();
      if (this.peek() === ",")
        ++this.p;
      const begin = this.p;
      const name = this.readNonEmptyIdentifier();
      if (!name)
        return;
      let value;
      this.skipBlank();
      const sep3 = isString(jekyllStyle) ? jekyllStyle : jekyllStyle ? "=" : ":";
      if (this.peek() === sep3) {
        ++this.p;
        value = this.readValue();
      }
      return new HashToken(this.input, begin, this.p, name, value, this.file);
    }
    remaining() {
      return this.input.slice(this.p, this.N);
    }
    advance(step = 1) {
      this.p += step;
    }
    end() {
      return this.p >= this.N;
    }
    readTo(end) {
      while (this.p < this.N) {
        ++this.p;
        if (this.rmatch(end))
          return this.p;
      }
      return -1;
    }
    readValue() {
      this.skipBlank();
      const begin = this.p;
      const variable = this.readLiteral() || this.readQuoted() || this.readRange() || this.readNumber();
      const props = this.readProperties(!variable);
      if (!props.length)
        return variable;
      return new PropertyAccessToken(variable, props, this.input, begin, this.p);
    }
    readScopeValue() {
      this.skipBlank();
      const begin = this.p;
      const props = this.readProperties();
      if (!props.length)
        return void 0;
      return new PropertyAccessToken(void 0, props, this.input, begin, this.p);
    }
    readProperties(isBegin = true) {
      const props = [];
      while (true) {
        if (this.peek() === "[") {
          this.p++;
          const prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
          this.assert(this.readTo("]") !== -1, "[ not closed");
          props.push(prop);
          continue;
        }
        if (isBegin && !props.length) {
          const prop = this.readNonEmptyIdentifier();
          if (prop) {
            props.push(prop);
            continue;
          }
        }
        if (this.peek() === "." && this.peek(1) !== ".") {
          this.p++;
          const prop = this.readNonEmptyIdentifier();
          if (!prop)
            break;
          props.push(prop);
          continue;
        }
        break;
      }
      return props;
    }
    readNumber() {
      this.skipBlank();
      let decimalFound = false;
      let digitFound = false;
      let n = 0;
      if (this.peekType() & SIGN)
        n++;
      while (this.p + n <= this.N) {
        if (this.peekType(n) & NUMBER) {
          digitFound = true;
          n++;
        } else if (this.peek(n) === "." && this.peek(n + 1) !== ".") {
          if (decimalFound || !digitFound)
            return;
          decimalFound = true;
          n++;
        } else
          break;
      }
      if (digitFound && !isWord(this.peek(n))) {
        const num = new NumberToken(this.input, this.p, this.p + n, this.file);
        this.advance(n);
        return num;
      }
    }
    readLiteral() {
      this.skipBlank();
      const end = this.matchTrie(this.literalTrie);
      if (end === -1)
        return;
      const literal = new LiteralToken(this.input, this.p, end, this.file);
      this.p = end;
      return literal;
    }
    readRange() {
      this.skipBlank();
      const begin = this.p;
      if (this.peek() !== "(")
        return;
      ++this.p;
      const lhs = this.readValueOrThrow();
      this.p += 2;
      const rhs = this.readValueOrThrow();
      ++this.p;
      return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
    }
    readValueOrThrow() {
      const value = this.readValue();
      this.assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
      return value;
    }
    readQuoted() {
      this.skipBlank();
      const begin = this.p;
      if (!(this.peekType() & QUOTE))
        return;
      ++this.p;
      let escaped = false;
      while (this.p < this.N) {
        ++this.p;
        if (this.input[this.p - 1] === this.input[begin] && !escaped)
          break;
        if (escaped)
          escaped = false;
        else if (this.input[this.p - 1] === "\\")
          escaped = true;
      }
      return new QuotedToken(this.input, begin, this.p, this.file);
    }
    *readFileNameTemplate(options) {
      const { outputDelimiterLeft } = options;
      const htmlStopStrings = [",", " ", outputDelimiterLeft];
      const htmlStopStringSet = new Set(htmlStopStrings);
      while (this.p < this.N && !htmlStopStringSet.has(this.peek())) {
        yield this.match(outputDelimiterLeft) ? this.readOutputToken(options) : this.readHTMLToken(htmlStopStrings);
      }
    }
    match(word) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== this.input[this.p + i])
          return false;
      }
      return true;
    }
    rmatch(pattern) {
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
          return false;
      }
      return true;
    }
    peekType(n = 0) {
      return this.p + n >= this.N ? 0 : TYPES[this.input.charCodeAt(this.p + n)];
    }
    peek(n = 0) {
      return this.p + n >= this.N ? "" : this.input[this.p + n];
    }
    skipBlank() {
      while (this.peekType() & BLANK)
        ++this.p;
    }
  };
  var ParseStream = class {
    constructor(tokens, parseToken) {
      this.handlers = {};
      this.stopRequested = false;
      this.tokens = tokens;
      this.parseToken = parseToken;
    }
    on(name, cb) {
      this.handlers[name] = cb;
      return this;
    }
    trigger(event, arg) {
      const h = this.handlers[event];
      return h ? (h.call(this, arg), true) : false;
    }
    start() {
      this.trigger("start");
      let token;
      while (!this.stopRequested && (token = this.tokens.shift())) {
        if (this.trigger("token", token))
          continue;
        if (isTagToken(token) && this.trigger(`tag:${token.name}`, token)) {
          continue;
        }
        const template = this.parseToken(token, this.tokens);
        this.trigger("template", template);
      }
      if (!this.stopRequested)
        this.trigger("end");
      return this;
    }
    stop() {
      this.stopRequested = true;
      return this;
    }
  };
  var TemplateImpl = class {
    constructor(token) {
      this.token = token;
    }
  };
  var Tag = class extends TemplateImpl {
    constructor(token, remainTokens, liquid) {
      super(token);
      this.name = token.name;
      this.liquid = liquid;
      this.tokenizer = token.tokenizer;
    }
  };
  var Hash = class {
    constructor(markup, jekyllStyle) {
      this.hash = {};
      const tokenizer = new Tokenizer(markup, {});
      for (const hash of tokenizer.readHashes(jekyllStyle)) {
        this.hash[hash.name.content] = hash.value;
      }
    }
    *render(ctx) {
      const hash = {};
      for (const key of Object.keys(this.hash)) {
        hash[key] = this.hash[key] === void 0 ? true : yield evalToken(this.hash[key], ctx);
      }
      return hash;
    }
  };
  function createTagClass(options) {
    return class extends Tag {
      constructor(token, tokens, liquid) {
        super(token, tokens, liquid);
        if (isFunction(options.parse)) {
          options.parse.call(this, token, tokens);
        }
      }
      *render(ctx, emitter) {
        const hash = yield new Hash(this.token.args, ctx.opts.keyValueSeparator).render(ctx);
        return yield options.render.call(this, ctx, emitter, hash);
      }
    };
  }
  function isKeyValuePair(arr) {
    return isArray(arr);
  }
  var Filter = class {
    constructor(name, options, args, liquid) {
      this.name = name;
      this.handler = isFunction(options) ? options : isFunction(options === null || options === void 0 ? void 0 : options.handler) ? options.handler : identify;
      this.raw = !isFunction(options) && !!(options === null || options === void 0 ? void 0 : options.raw);
      this.args = args;
      this.liquid = liquid;
    }
    *render(value, context) {
      const argv = [];
      for (const arg of this.args) {
        if (isKeyValuePair(arg))
          argv.push([arg[0], yield evalToken(arg[1], context)]);
        else
          argv.push(yield evalToken(arg, context));
      }
      return yield this.handler.apply({ context, liquid: this.liquid }, [value, ...argv]);
    }
  };
  var Value = class {
    constructor(input, liquid) {
      this.filters = [];
      const token = typeof input === "string" ? new Tokenizer(input, liquid.options.operators).readFilteredValue() : input;
      this.initial = token.initial;
      this.filters = token.filters.map(({ name, args }) => new Filter(name, this.getFilter(liquid, name), args, liquid));
    }
    *value(ctx, lenient) {
      lenient = lenient || ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === "default";
      let val = yield this.initial.evaluate(ctx, lenient);
      for (const filter of this.filters) {
        val = yield filter.render(val, ctx);
      }
      return val;
    }
    getFilter(liquid, name) {
      const impl = liquid.filters[name];
      assert(impl || !liquid.options.strictFilters, () => `undefined filter: ${name}`);
      return impl;
    }
  };
  var Output = class extends TemplateImpl {
    constructor(token, liquid) {
      var _a;
      super(token);
      const tokenizer = new Tokenizer(token.input, liquid.options.operators, token.file, token.contentRange);
      this.value = new Value(tokenizer.readFilteredValue(), liquid);
      const filters3 = this.value.filters;
      const outputEscape = liquid.options.outputEscape;
      if (!((_a = filters3[filters3.length - 1]) === null || _a === void 0 ? void 0 : _a.raw) && outputEscape) {
        filters3.push(new Filter(toString.call(outputEscape), outputEscape, [], liquid));
      }
    }
    *render(ctx, emitter) {
      const val = yield this.value.value(ctx, false);
      emitter.write(val);
    }
  };
  var HTML = class extends TemplateImpl {
    constructor(token) {
      super(token);
      this.str = token.getContent();
    }
    *render(ctx, emitter) {
      emitter.write(this.str);
    }
  };
  var LookupType;
  (function(LookupType3) {
    LookupType3["Partials"] = "partials";
    LookupType3["Layouts"] = "layouts";
    LookupType3["Root"] = "root";
  })(LookupType || (LookupType = {}));
  var Loader = class {
    constructor(options) {
      this.options = options;
      if (options.relativeReference) {
        const sep3 = options.fs.sep;
        assert(sep3, "`fs.sep` is required for relative reference");
        const rRelativePath = new RegExp(["." + sep3, ".." + sep3, "./", "../"].map((prefix) => escapeRegex(prefix)).join("|"));
        this.shouldLoadRelative = (referencedFile) => rRelativePath.test(referencedFile);
      } else {
        this.shouldLoadRelative = (_referencedFile) => false;
      }
      this.contains = this.options.fs.contains || (() => true);
    }
    *lookup(file, type2, sync, currentFile) {
      const { fs: fs3 } = this.options;
      const dirs = this.options[type2];
      for (const filepath of this.candidates(file, dirs, currentFile, type2 !== LookupType.Root)) {
        if (sync ? fs3.existsSync(filepath) : yield fs3.exists(filepath))
          return filepath;
      }
      throw this.lookupError(file, dirs);
    }
    *candidates(file, dirs, currentFile, enforceRoot) {
      const { fs: fs3, extname } = this.options;
      if (this.shouldLoadRelative(file) && currentFile) {
        const referenced = fs3.resolve(this.dirname(currentFile), file, extname);
        for (const dir of dirs) {
          if (!enforceRoot || this.contains(dir, referenced)) {
            yield referenced;
            break;
          }
        }
      }
      for (const dir of dirs) {
        const referenced = fs3.resolve(dir, file, extname);
        if (!enforceRoot || this.contains(dir, referenced)) {
          yield referenced;
        }
      }
      if (fs3.fallback !== void 0) {
        const filepath = fs3.fallback(file);
        if (filepath !== void 0)
          yield filepath;
      }
    }
    dirname(path) {
      const fs3 = this.options.fs;
      assert(fs3.dirname, "`fs.dirname` is required for relative reference");
      return fs3.dirname(path);
    }
    lookupError(file, roots) {
      const err = new Error("ENOENT");
      err.message = `ENOENT: Failed to lookup "${file}" in "${roots}"`;
      err.code = "ENOENT";
      return err;
    }
  };
  var Parser = class {
    constructor(liquid) {
      this.liquid = liquid;
      this.cache = this.liquid.options.cache;
      this.fs = this.liquid.options.fs;
      this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
      this.loader = new Loader(this.liquid.options);
      this.parseLimit = new Limiter("parse length", liquid.options.parseLimit);
    }
    parse(html, filepath) {
      html = String(html);
      this.parseLimit.use(html.length);
      const tokenizer = new Tokenizer(html, this.liquid.options.operators, filepath);
      const tokens = tokenizer.readTopLevelTokens(this.liquid.options);
      return this.parseTokens(tokens);
    }
    parseTokens(tokens) {
      let token;
      const templates = [];
      const errors = [];
      while (token = tokens.shift()) {
        try {
          templates.push(this.parseToken(token, tokens));
        } catch (err) {
          if (this.liquid.options.catchAllErrors)
            errors.push(err);
          else
            throw err;
        }
      }
      if (errors.length)
        throw new LiquidErrors(errors);
      return templates;
    }
    parseToken(token, remainTokens) {
      try {
        if (isTagToken(token)) {
          const TagClass = this.liquid.tags[token.name];
          assert(TagClass, `tag "${token.name}" not found`);
          return new TagClass(token, remainTokens, this.liquid, this);
        }
        if (isOutputToken(token)) {
          return new Output(token, this.liquid);
        }
        return new HTML(token);
      } catch (e) {
        if (LiquidError.is(e))
          throw e;
        throw new ParseError(e, token);
      }
    }
    parseStream(tokens) {
      return new ParseStream(tokens, (token, tokens2) => this.parseToken(token, tokens2));
    }
    *_parseFileCached(file, sync, type2 = LookupType.Root, currentFile) {
      const cache = this.cache;
      const key = this.loader.shouldLoadRelative(file) ? currentFile + "," + file : type2 + ":" + file;
      const tpls = yield cache.read(key);
      if (tpls)
        return tpls;
      const task = this._parseFile(file, sync, type2, currentFile);
      const taskOrTpl = sync ? yield task : toPromise(task);
      cache.write(key, taskOrTpl);
      try {
        return yield taskOrTpl;
      } catch (err) {
        cache.remove(key);
        throw err;
      }
    }
    *_parseFile(file, sync, type2 = LookupType.Root, currentFile) {
      const filepath = yield this.loader.lookup(file, type2, sync, currentFile);
      return this.parse(sync ? this.fs.readFileSync(filepath) : yield this.fs.readFile(filepath), filepath);
    }
  };
  var TokenKind;
  (function(TokenKind3) {
    TokenKind3[TokenKind3["Number"] = 1] = "Number";
    TokenKind3[TokenKind3["Literal"] = 2] = "Literal";
    TokenKind3[TokenKind3["Tag"] = 4] = "Tag";
    TokenKind3[TokenKind3["Output"] = 8] = "Output";
    TokenKind3[TokenKind3["HTML"] = 16] = "HTML";
    TokenKind3[TokenKind3["Filter"] = 32] = "Filter";
    TokenKind3[TokenKind3["Hash"] = 64] = "Hash";
    TokenKind3[TokenKind3["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind3[TokenKind3["Word"] = 256] = "Word";
    TokenKind3[TokenKind3["Range"] = 512] = "Range";
    TokenKind3[TokenKind3["Quoted"] = 1024] = "Quoted";
    TokenKind3[TokenKind3["Operator"] = 2048] = "Operator";
    TokenKind3[TokenKind3["FilteredValue"] = 4096] = "FilteredValue";
    TokenKind3[TokenKind3["Delimited"] = 12] = "Delimited";
  })(TokenKind || (TokenKind = {}));
  function isDelimitedToken(val) {
    return !!(getKind(val) & TokenKind.Delimited);
  }
  function isOperatorToken(val) {
    return getKind(val) === TokenKind.Operator;
  }
  function isHTMLToken(val) {
    return getKind(val) === TokenKind.HTML;
  }
  function isOutputToken(val) {
    return getKind(val) === TokenKind.Output;
  }
  function isTagToken(val) {
    return getKind(val) === TokenKind.Tag;
  }
  function isQuotedToken(val) {
    return getKind(val) === TokenKind.Quoted;
  }
  function isPropertyAccessToken(val) {
    return getKind(val) === TokenKind.PropertyAccess;
  }
  function isRangeToken(val) {
    return getKind(val) === TokenKind.Range;
  }
  function getKind(val) {
    return val ? val.kind : -1;
  }
  var Context = class {
    constructor(env = {}, opts = defaultOptions, renderOptions = {}, { memoryLimit, renderLimit } = {}) {
      var _a, _b, _c, _d, _e;
      this.scopes = [{}];
      this.registers = {};
      this.sync = !!renderOptions.sync;
      this.opts = opts;
      this.globals = (_a = renderOptions.globals) !== null && _a !== void 0 ? _a : opts.globals;
      this.environments = isObject(env) ? env : Object(env);
      this.strictVariables = (_b = renderOptions.strictVariables) !== null && _b !== void 0 ? _b : this.opts.strictVariables;
      this.ownPropertyOnly = (_c = renderOptions.ownPropertyOnly) !== null && _c !== void 0 ? _c : opts.ownPropertyOnly;
      this.memoryLimit = memoryLimit !== null && memoryLimit !== void 0 ? memoryLimit : new Limiter("memory alloc", (_d = renderOptions.memoryLimit) !== null && _d !== void 0 ? _d : opts.memoryLimit);
      this.renderLimit = renderLimit !== null && renderLimit !== void 0 ? renderLimit : new Limiter("template render", getPerformance().now() + ((_e = renderOptions.renderLimit) !== null && _e !== void 0 ? _e : opts.renderLimit));
    }
    getRegister(key) {
      return this.registers[key] = this.registers[key] || {};
    }
    setRegister(key, value) {
      return this.registers[key] = value;
    }
    saveRegister(...keys) {
      return keys.map((key) => [key, this.getRegister(key)]);
    }
    restoreRegister(keyValues) {
      return keyValues.forEach(([key, value]) => this.setRegister(key, value));
    }
    getAll() {
      return [this.globals, this.environments, ...this.scopes].reduce((ctx, val) => __assign(ctx, val), {});
    }
    get(paths) {
      return this.getSync(paths);
    }
    getSync(paths) {
      return toValueSync(this._get(paths));
    }
    *_get(paths) {
      const scope = this.findScope(paths[0]);
      return yield this._getFromScope(scope, paths);
    }
    getFromScope(scope, paths) {
      return toValueSync(this._getFromScope(scope, paths));
    }
    *_getFromScope(scope, paths, strictVariables = this.strictVariables) {
      if (isString(paths))
        paths = paths.split(".");
      for (let i = 0; i < paths.length; i++) {
        scope = yield readProperty(scope, paths[i], this.ownPropertyOnly);
        if (strictVariables && isUndefined(scope)) {
          throw new InternalUndefinedVariableError(paths.slice(0, i + 1).join("."));
        }
      }
      return scope;
    }
    push(ctx) {
      return this.scopes.push(ctx);
    }
    pop() {
      return this.scopes.pop();
    }
    bottom() {
      return this.scopes[0];
    }
    spawn(scope = {}) {
      return new Context(scope, this.opts, {
        sync: this.sync,
        globals: this.globals,
        strictVariables: this.strictVariables
      }, {
        renderLimit: this.renderLimit,
        memoryLimit: this.memoryLimit
      });
    }
    findScope(key) {
      for (let i = this.scopes.length - 1; i >= 0; i--) {
        const candidate = this.scopes[i];
        if (key in candidate)
          return candidate;
      }
      if (key in this.environments)
        return this.environments;
      return this.globals;
    }
  };
  function readProperty(obj, key, ownPropertyOnly) {
    obj = toLiquid(obj);
    if (isNil(obj))
      return obj;
    if (isArray(obj) && key < 0)
      return obj[obj.length + +key];
    const value = readJSProperty(obj, key, ownPropertyOnly);
    if (value === void 0 && obj instanceof Drop)
      return obj.liquidMethodMissing(key);
    if (isFunction(value))
      return value.call(obj);
    if (key === "size")
      return readSize(obj);
    else if (key === "first")
      return readFirst(obj);
    else if (key === "last")
      return readLast(obj);
    return value;
  }
  function readJSProperty(obj, key, ownPropertyOnly) {
    if (ownPropertyOnly && !hasOwnProperty.call(obj, key) && !(obj instanceof Drop))
      return void 0;
    return obj[key];
  }
  function readFirst(obj) {
    if (isArray(obj))
      return obj[0];
    return obj["first"];
  }
  function readLast(obj) {
    if (isArray(obj))
      return obj[obj.length - 1];
    return obj["last"];
  }
  function readSize(obj) {
    if (hasOwnProperty.call(obj, "size") || obj["size"] !== void 0)
      return obj["size"];
    if (isArray(obj) || isString(obj))
      return obj.length;
    if (typeof obj === "object")
      return Object.keys(obj).length;
  }
  var BlockMode;
  (function(BlockMode3) {
    BlockMode3[BlockMode3["OUTPUT"] = 0] = "OUTPUT";
    BlockMode3[BlockMode3["STORE"] = 1] = "STORE";
  })(BlockMode || (BlockMode = {}));
  var abs = argumentsToValue(Math.abs);
  var at_least = argumentsToValue(Math.max);
  var at_most = argumentsToValue(Math.min);
  var ceil = argumentsToValue(Math.ceil);
  var divided_by = argumentsToValue((dividend, divisor, integerArithmetic = false) => integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor);
  var floor = argumentsToValue(Math.floor);
  var minus = argumentsToValue((v, arg) => v - arg);
  var modulo = argumentsToValue((v, arg) => v % arg);
  var times = argumentsToValue((v, arg) => v * arg);
  function round(v, arg = 0) {
    v = toValue(v);
    arg = toValue(arg);
    const amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
  }
  function plus(v, arg) {
    v = toValue(v);
    arg = toValue(arg);
    return Number(v) + Number(arg);
  }
  var mathFilters = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    abs,
    at_least,
    at_most,
    ceil,
    divided_by,
    floor,
    minus,
    modulo,
    times,
    round,
    plus
  });
  var url_decode = (x) => decodeURIComponent(stringify(x)).replace(/\+/g, " ");
  var url_encode = (x) => encodeURIComponent(stringify(x)).replace(/%20/g, "+");
  var cgi_escape = (x) => encodeURIComponent(stringify(x)).replace(/%20/g, "+").replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
  var uri_escape = (x) => encodeURI(stringify(x)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  var rSlugifyDefault = /[^\p{M}\p{L}\p{Nd}]+/ug;
  var rSlugifyReplacers = {
    "raw": /\s+/g,
    "default": rSlugifyDefault,
    "pretty": /[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/ug,
    "ascii": /[^A-Za-z0-9]+/g,
    "latin": rSlugifyDefault,
    "none": null
  };
  function slugify(str2, mode = "default", cased = false) {
    str2 = stringify(str2);
    const replacer = rSlugifyReplacers[mode];
    if (replacer) {
      if (mode === "latin")
        str2 = removeAccents(str2);
      str2 = str2.replace(replacer, "-").replace(/^-|-$/g, "");
    }
    return cased ? str2 : str2.toLowerCase();
  }
  function removeAccents(str2) {
    return str2.replace(/[àáâãäå]/g, "a").replace(/[æ]/g, "ae").replace(/[ç]/g, "c").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[ð]/g, "d").replace(/[ñ]/g, "n").replace(/[òóôõöø]/g, "o").replace(/[ùúûü]/g, "u").replace(/[ýÿ]/g, "y").replace(/[ß]/g, "ss").replace(/[œ]/g, "oe").replace(/[þ]/g, "th").replace(/[ẞ]/g, "SS").replace(/[Œ]/g, "OE").replace(/[Þ]/g, "TH");
  }
  var urlFilters = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    url_decode,
    url_encode,
    cgi_escape,
    uri_escape,
    slugify
  });
  var join = argumentsToValue(function(v, arg) {
    const array = toArray(v);
    const sep3 = isNil(arg) ? " " : stringify(arg);
    const complexity = array.length * (1 + sep3.length);
    this.context.memoryLimit.use(complexity);
    return array.join(sep3);
  });
  var last$1 = argumentsToValue((v) => isArray(v) ? last(v) : "");
  var first = argumentsToValue((v) => isArray(v) ? v[0] : "");
  var reverse = argumentsToValue(function(v) {
    const array = toArray(v);
    this.context.memoryLimit.use(array.length);
    return [...array].reverse();
  });
  function* sort(arr, property) {
    const values = [];
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
      values.push([
        item,
        property ? yield this.context._getFromScope(item, stringify(property).split("."), false) : item
      ]);
    }
    return values.sort((lhs, rhs) => {
      const lvalue = lhs[1];
      const rvalue = rhs[1];
      return lvalue < rvalue ? -1 : lvalue > rvalue ? 1 : 0;
    }).map((tuple) => tuple[0]);
  }
  function sort_natural(input, property) {
    const propertyString = stringify(property);
    const compare = property === void 0 ? caseInsensitiveCompare : (lhs, rhs) => caseInsensitiveCompare(lhs[propertyString], rhs[propertyString]);
    const array = toArray(input);
    this.context.memoryLimit.use(array.length);
    return [...array].sort(compare);
  }
  var size = (v) => v && v.length || 0;
  function* map(arr, property) {
    const results = [];
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
      results.push(yield this.context._getFromScope(item, stringify(property), false));
    }
    return results;
  }
  function* sum(arr, property) {
    let sum3 = 0;
    const array = toArray(arr);
    for (const item of array) {
      const data = Number(property ? yield this.context._getFromScope(item, stringify(property), false) : item);
      sum3 += Number.isNaN(data) ? 0 : data;
    }
    return sum3;
  }
  function compact(arr) {
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    return array.filter((x) => !isNil(toValue(x)));
  }
  function concat(v, arg = []) {
    const lhs = toArray(v);
    const rhs = toArray(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return lhs.concat(rhs);
  }
  function push(v, arg) {
    return concat.call(this, v, [arg]);
  }
  function unshift(v, arg) {
    const array = toArray(v);
    this.context.memoryLimit.use(array.length);
    const clone = [...array];
    clone.unshift(arg);
    return clone;
  }
  function pop(v) {
    const clone = [...toArray(v)];
    clone.pop();
    return clone;
  }
  function shift(v) {
    const array = toArray(v);
    this.context.memoryLimit.use(array.length);
    const clone = [...array];
    clone.shift();
    return clone;
  }
  function slice(v, begin, length = 1) {
    v = toValue(v);
    if (isNil(v))
      return [];
    if (!isArray(v))
      v = stringify(v);
    begin = begin < 0 ? v.length + begin : begin;
    this.context.memoryLimit.use(length);
    return v.slice(begin, begin + length);
  }
  function* where(arr, property, expected) {
    const values = [];
    arr = toArray(arr);
    this.context.memoryLimit.use(arr.length);
    const token = new Tokenizer(stringify(property)).readScopeValue();
    for (const item of arr) {
      values.push(yield evalToken(token, this.context.spawn(item)));
    }
    return arr.filter((_, i) => {
      if (expected === void 0)
        return isTruthy(values[i], this.context);
      return equals(values[i], expected);
    });
  }
  function* where_exp(arr, itemName, exp) {
    const filtered = [];
    const keyTemplate = new Value(stringify(exp), this.liquid);
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
      const value = yield keyTemplate.value(this.context.spawn({ [itemName]: item }));
      if (value)
        filtered.push(item);
    }
    return filtered;
  }
  function* group_by(arr, property) {
    const map4 = new Map();
    arr = toArray(arr);
    const token = new Tokenizer(stringify(property)).readScopeValue();
    this.context.memoryLimit.use(arr.length);
    for (const item of arr) {
      const key = yield evalToken(token, this.context.spawn(item));
      if (!map4.has(key))
        map4.set(key, []);
      map4.get(key).push(item);
    }
    return [...map4.entries()].map(([name, items]) => ({ name, items }));
  }
  function* group_by_exp(arr, itemName, exp) {
    const map4 = new Map();
    const keyTemplate = new Value(stringify(exp), this.liquid);
    arr = toArray(arr);
    this.context.memoryLimit.use(arr.length);
    for (const item of arr) {
      const key = yield keyTemplate.value(this.context.spawn({ [itemName]: item }));
      if (!map4.has(key))
        map4.set(key, []);
      map4.get(key).push(item);
    }
    return [...map4.entries()].map(([name, items]) => ({ name, items }));
  }
  function* find(arr, property, expected) {
    const token = new Tokenizer(stringify(property)).readScopeValue();
    const array = toArray(arr);
    for (const item of array) {
      const value = yield evalToken(token, this.context.spawn(item));
      if (equals(value, expected))
        return item;
    }
  }
  function* find_exp(arr, itemName, exp) {
    const predicate = new Value(stringify(exp), this.liquid);
    const array = toArray(arr);
    for (const item of array) {
      const value = yield predicate.value(this.context.spawn({ [itemName]: item }));
      if (value)
        return item;
    }
  }
  function uniq(arr) {
    arr = toArray(arr);
    this.context.memoryLimit.use(arr.length);
    return [...new Set(arr)];
  }
  function sample(v, count = 1) {
    v = toValue(v);
    if (isNil(v))
      return [];
    if (!isArray(v))
      v = stringify(v);
    this.context.memoryLimit.use(count);
    const shuffled = [...v].sort(() => Math.random() - 0.5);
    if (count === 1)
      return shuffled[0];
    return shuffled.slice(0, count);
  }
  var arrayFilters = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    join,
    last: last$1,
    first,
    reverse,
    sort,
    sort_natural,
    size,
    map,
    sum,
    compact,
    concat,
    push,
    unshift,
    pop,
    shift,
    slice,
    where,
    where_exp,
    group_by,
    group_by_exp,
    find,
    find_exp,
    uniq,
    sample
  });
  function date(v, format3, timezoneOffset) {
    var _a, _b, _c;
    const size3 = ((_a = v === null || v === void 0 ? void 0 : v.length) !== null && _a !== void 0 ? _a : 0) + ((_b = format3 === null || format3 === void 0 ? void 0 : format3.length) !== null && _b !== void 0 ? _b : 0) + ((_c = timezoneOffset === null || timezoneOffset === void 0 ? void 0 : timezoneOffset.length) !== null && _c !== void 0 ? _c : 0);
    this.context.memoryLimit.use(size3);
    const date3 = parseDate(v, this.context.opts, timezoneOffset);
    if (!date3)
      return v;
    format3 = toValue(format3);
    format3 = isNil(format3) ? this.context.opts.dateFormat : stringify(format3);
    return strftime(date3, format3);
  }
  function date_to_xmlschema(v) {
    return date.call(this, v, "%Y-%m-%dT%H:%M:%S%:z");
  }
  function date_to_rfc822(v) {
    return date.call(this, v, "%a, %d %b %Y %H:%M:%S %z");
  }
  function date_to_string(v, type2, style) {
    return stringify_date.call(this, v, "%b", type2, style);
  }
  function date_to_long_string(v, type2, style) {
    return stringify_date.call(this, v, "%B", type2, style);
  }
  function stringify_date(v, month_type, type2, style) {
    const date3 = parseDate(v, this.context.opts);
    if (!date3)
      return v;
    if (type2 === "ordinal") {
      const d = date3.getDate();
      return style === "US" ? strftime(date3, `${month_type} ${d}%q, %Y`) : strftime(date3, `${d}%q ${month_type} %Y`);
    }
    return strftime(date3, `%d ${month_type} %Y`);
  }
  function parseDate(v, opts, timezoneOffset) {
    let date3;
    const defaultTimezoneOffset = timezoneOffset !== null && timezoneOffset !== void 0 ? timezoneOffset : opts.timezoneOffset;
    const locale = opts.locale;
    v = toValue(v);
    if (v === "now" || v === "today") {
      date3 = new LiquidDate(Date.now(), locale, defaultTimezoneOffset);
    } else if (isNumber(v)) {
      date3 = new LiquidDate(v * 1e3, locale, defaultTimezoneOffset);
    } else if (isString(v)) {
      if (/^\d+$/.test(v)) {
        date3 = new LiquidDate(+v * 1e3, locale, defaultTimezoneOffset);
      } else if (opts.preserveTimezones && timezoneOffset === void 0) {
        date3 = LiquidDate.createDateFixedToTimezone(v, locale);
      } else {
        date3 = new LiquidDate(v, locale, defaultTimezoneOffset);
      }
    } else {
      date3 = new LiquidDate(v, locale, defaultTimezoneOffset);
    }
    return date3.valid() ? date3 : void 0;
  }
  var dateFilters = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    date,
    date_to_xmlschema,
    date_to_rfc822,
    date_to_string,
    date_to_long_string
  });
  var rCJKWord = /[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu;
  var rNonCJKWord = /[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;
  function append(v, arg) {
    assert(arguments.length === 2, "append expect 2 arguments");
    const lhs = stringify(v);
    const rhs = stringify(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return lhs + rhs;
  }
  function prepend(v, arg) {
    assert(arguments.length === 2, "prepend expect 2 arguments");
    const lhs = stringify(v);
    const rhs = stringify(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return rhs + lhs;
  }
  function lstrip(v, chars) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    if (chars) {
      chars = escapeRegExp(stringify(chars));
      return str2.replace(new RegExp(`^[${chars}]+`, "g"), "");
    }
    return str2.replace(/^\s+/, "");
  }
  function downcase(v) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.toLowerCase();
  }
  function upcase(v) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return stringify(str2).toUpperCase();
  }
  function remove(v, arg) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.split(stringify(arg)).join("");
  }
  function remove_first(v, l) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(stringify(l), "");
  }
  function remove_last(v, l) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    const pattern = stringify(l);
    const index = str2.lastIndexOf(pattern);
    if (index === -1)
      return str2;
    return str2.substring(0, index) + str2.substring(index + pattern.length);
  }
  function rstrip(str2, chars) {
    str2 = stringify(str2);
    this.context.memoryLimit.use(str2.length);
    if (chars) {
      chars = escapeRegExp(stringify(chars));
      return str2.replace(new RegExp(`[${chars}]+$`, "g"), "");
    }
    return str2.replace(/\s+$/, "");
  }
  function split(v, arg) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    const arr = str2.split(stringify(arg));
    while (arr.length && arr[arr.length - 1] === "")
      arr.pop();
    return arr;
  }
  function strip(v, chars) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    if (chars) {
      chars = escapeRegExp(stringify(chars));
      return str2.replace(new RegExp(`^[${chars}]+`, "g"), "").replace(new RegExp(`[${chars}]+$`, "g"), "");
    }
    return str2.trim();
  }
  function strip_newlines(v) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/\r?\n/gm, "");
  }
  function capitalize(str2) {
    str2 = stringify(str2);
    this.context.memoryLimit.use(str2.length);
    return str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase();
  }
  function replace(v, pattern, replacement) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.split(stringify(pattern)).join(replacement);
  }
  function replace_first(v, arg1, arg2) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(stringify(arg1), arg2);
  }
  function replace_last(v, arg1, arg2) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    const pattern = stringify(arg1);
    const index = str2.lastIndexOf(pattern);
    if (index === -1)
      return str2;
    const replacement = stringify(arg2);
    return str2.substring(0, index) + replacement + str2.substring(index + pattern.length);
  }
  function truncate(v, l = 50, o = "...") {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    if (str2.length <= l)
      return v;
    return str2.substring(0, l - o.length) + o;
  }
  function truncatewords(v, words = 15, o = "...") {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    const arr = str2.split(/\s+/);
    if (words <= 0)
      words = 1;
    let ret = arr.slice(0, words).join(" ");
    if (arr.length >= words)
      ret += o;
    return ret;
  }
  function normalize_whitespace(v) {
    const str2 = stringify(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/\s+/g, " ");
  }
  function number_of_words(input, mode) {
    const str2 = stringify(input);
    this.context.memoryLimit.use(str2.length);
    input = str2.trim();
    if (!input)
      return 0;
    switch (mode) {
      case "cjk":
        return (input.match(rCJKWord) || []).length + (input.match(rNonCJKWord) || []).length;
      case "auto":
        return rCJKWord.test(input) ? input.match(rCJKWord).length + (input.match(rNonCJKWord) || []).length : input.split(/\s+/).length;
      default:
        return input.split(/\s+/).length;
    }
  }
  function array_to_sentence_string(array, connector = "and") {
    this.context.memoryLimit.use(array.length);
    switch (array.length) {
      case 0:
        return "";
      case 1:
        return array[0];
      case 2:
        return `${array[0]} ${connector} ${array[1]}`;
      default:
        return `${array.slice(0, -1).join(", ")}, ${connector} ${array[array.length - 1]}`;
    }
  }
  var stringFilters = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    append,
    prepend,
    lstrip,
    downcase,
    upcase,
    remove,
    remove_first,
    remove_last,
    rstrip,
    split,
    strip,
    strip_newlines,
    capitalize,
    replace,
    replace_first,
    replace_last,
    truncate,
    truncatewords,
    normalize_whitespace,
    number_of_words,
    array_to_sentence_string
  });
  var filters = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, htmlFilters), mathFilters), urlFilters), arrayFilters), dateFilters), stringFilters), misc);
  var AssignTag = class extends Tag {
    constructor(token, remainTokens, liquid) {
      super(token, remainTokens, liquid);
      this.key = this.tokenizer.readIdentifier().content;
      this.tokenizer.assert(this.key, "expected variable name");
      this.tokenizer.skipBlank();
      this.tokenizer.assert(this.tokenizer.peek() === "=", 'expected "="');
      this.tokenizer.advance();
      this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
    }
    *render(ctx) {
      ctx.bottom()[this.key] = yield this.value.value(ctx, this.liquid.options.lenientIf);
    }
  };
  var MODIFIERS = ["offset", "limit", "reversed"];
  var ForTag = class extends Tag {
    constructor(token, remainTokens, liquid, parser) {
      super(token, remainTokens, liquid);
      const variable = this.tokenizer.readIdentifier();
      const inStr = this.tokenizer.readIdentifier();
      const collection = this.tokenizer.readValue();
      if (!variable.size() || inStr.content !== "in" || !collection) {
        throw new Error(`illegal tag: ${token.getText()}`);
      }
      this.variable = variable.content;
      this.collection = collection;
      this.hash = new Hash(this.tokenizer.remaining(), liquid.options.keyValueSeparator);
      this.templates = [];
      this.elseTemplates = [];
      let p;
      const stream = parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:else", (tag) => {
        assertEmpty(tag.args);
        p = this.elseTemplates;
      }).on("tag:endfor", (tag) => {
        assertEmpty(tag.args);
        stream.stop();
      }).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${token.getText()} not closed`);
      });
      stream.start();
    }
    *render(ctx, emitter) {
      const r = this.liquid.renderer;
      let collection = toEnumerable(yield evalToken(this.collection, ctx));
      if (!collection.length) {
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
        return;
      }
      const continueKey = "continue-" + this.variable + "-" + this.collection.getText();
      ctx.push({ continue: ctx.getRegister(continueKey) });
      const hash = yield this.hash.render(ctx);
      ctx.pop();
      const modifiers = this.liquid.options.orderedFilterParameters ? Object.keys(hash).filter((x) => MODIFIERS.includes(x)) : MODIFIERS.filter((x) => hash[x] !== void 0);
      collection = modifiers.reduce((collection2, modifier) => {
        if (modifier === "offset")
          return offset(collection2, hash["offset"]);
        if (modifier === "limit")
          return limit(collection2, hash["limit"]);
        return reversed(collection2);
      }, collection);
      ctx.setRegister(continueKey, (hash["offset"] || 0) + collection.length);
      const scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
      ctx.push(scope);
      for (const item of collection) {
        scope[this.variable] = item;
        yield r.renderTemplates(this.templates, ctx, emitter);
        if (emitter["break"]) {
          emitter["break"] = false;
          break;
        }
        emitter["continue"] = false;
        scope.forloop.next();
      }
      ctx.pop();
    }
  };
  function reversed(arr) {
    return [...arr].reverse();
  }
  function offset(arr, count) {
    return arr.slice(count);
  }
  function limit(arr, count) {
    return arr.slice(0, count);
  }
  var CaptureTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
      super(tagToken, remainTokens, liquid);
      this.templates = [];
      this.variable = this.readVariableName();
      while (remainTokens.length) {
        const token = remainTokens.shift();
        if (isTagToken(token) && token.name === "endcapture")
          return;
        this.templates.push(parser.parseToken(token, remainTokens));
      }
      throw new Error(`tag ${tagToken.getText()} not closed`);
    }
    *render(ctx) {
      const r = this.liquid.renderer;
      const html = yield r.renderTemplates(this.templates, ctx);
      ctx.bottom()[this.variable] = html;
    }
    readVariableName() {
      const word = this.tokenizer.readIdentifier().content;
      if (word)
        return word;
      const quoted = this.tokenizer.readQuoted();
      if (quoted)
        return evalQuotedToken(quoted);
      throw this.tokenizer.error("invalid capture name");
    }
  };
  var CaseTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
      super(tagToken, remainTokens, liquid);
      this.branches = [];
      this.elseTemplates = [];
      this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
      this.elseTemplates = [];
      let p = [];
      let elseCount = 0;
      const stream = parser.parseStream(remainTokens).on("tag:when", (token) => {
        if (elseCount > 0) {
          return;
        }
        p = [];
        const values = [];
        while (!token.tokenizer.end()) {
          values.push(token.tokenizer.readValueOrThrow());
          token.tokenizer.skipBlank();
          if (token.tokenizer.peek() === ",") {
            token.tokenizer.readTo(",");
          } else {
            token.tokenizer.readTo("or");
          }
        }
        this.branches.push({
          values,
          templates: p
        });
      }).on("tag:else", () => {
        elseCount++;
        p = this.elseTemplates;
      }).on("tag:endcase", () => stream.stop()).on("template", (tpl) => {
        if (p !== this.elseTemplates || elseCount === 1) {
          p.push(tpl);
        }
      }).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    }
    *render(ctx, emitter) {
      const r = this.liquid.renderer;
      const target = toValue(yield this.value.value(ctx, ctx.opts.lenientIf));
      let branchHit = false;
      for (const branch of this.branches) {
        for (const valueToken of branch.values) {
          const value = yield evalToken(valueToken, ctx, ctx.opts.lenientIf);
          if (equals(target, value)) {
            yield r.renderTemplates(branch.templates, ctx, emitter);
            branchHit = true;
            break;
          }
        }
      }
      if (!branchHit) {
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
      }
    }
  };
  var CommentTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid) {
      super(tagToken, remainTokens, liquid);
      while (remainTokens.length) {
        const token = remainTokens.shift();
        if (isTagToken(token) && token.name === "endcomment")
          return;
      }
      throw new Error(`tag ${tagToken.getText()} not closed`);
    }
    render() {
    }
  };
  var RenderTag = class extends Tag {
    constructor(token, remainTokens, liquid, parser) {
      super(token, remainTokens, liquid);
      const tokenizer = this.tokenizer;
      this.file = parseFilePath(tokenizer, this.liquid, parser);
      this.currentFile = token.file;
      while (!tokenizer.end()) {
        tokenizer.skipBlank();
        const begin = tokenizer.p;
        const keyword = tokenizer.readIdentifier();
        if (keyword.content === "with" || keyword.content === "for") {
          tokenizer.skipBlank();
          if (tokenizer.peek() !== ":") {
            const value = tokenizer.readValue();
            if (value) {
              const beforeAs = tokenizer.p;
              const asStr = tokenizer.readIdentifier();
              let alias;
              if (asStr.content === "as")
                alias = tokenizer.readIdentifier();
              else
                tokenizer.p = beforeAs;
              this[keyword.content] = { value, alias: alias && alias.content };
              tokenizer.skipBlank();
              if (tokenizer.peek() === ",")
                tokenizer.advance();
              continue;
            }
          }
        }
        tokenizer.p = begin;
        break;
      }
      this.hash = new Hash(tokenizer.remaining(), liquid.options.keyValueSeparator);
    }
    *render(ctx, emitter) {
      const { liquid, hash } = this;
      const filepath = yield renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal file path "${filepath}"`);
      const childCtx = ctx.spawn();
      const scope = childCtx.bottom();
      __assign(scope, yield hash.render(ctx));
      if (this["with"]) {
        const { value, alias } = this["with"];
        scope[alias || filepath] = yield evalToken(value, ctx);
      }
      if (this["for"]) {
        const { value, alias } = this["for"];
        const collection = toEnumerable(yield evalToken(value, ctx));
        scope["forloop"] = new ForloopDrop(collection.length, value.getText(), alias);
        for (const item of collection) {
          scope[alias] = item;
          const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
          yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
          scope["forloop"].next();
        }
      } else {
        const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
        yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
      }
    }
  };
  function parseFilePath(tokenizer, liquid, parser) {
    if (liquid.options.dynamicPartials) {
      const file = tokenizer.readValue();
      tokenizer.assert(file, "illegal file path");
      if (file.getText() === "none")
        return;
      if (isQuotedToken(file)) {
        const templates2 = parser.parse(evalQuotedToken(file));
        return optimize(templates2);
      }
      return file;
    }
    const tokens = [...tokenizer.readFileNameTemplate(liquid.options)];
    const templates = optimize(parser.parseTokens(tokens));
    return templates === "none" ? void 0 : templates;
  }
  function optimize(templates) {
    if (templates.length === 1 && isHTMLToken(templates[0].token))
      return templates[0].token.getContent();
    return templates;
  }
  function* renderFilePath(file, ctx, liquid) {
    if (typeof file === "string")
      return file;
    if (Array.isArray(file))
      return liquid.renderer.renderTemplates(file, ctx);
    return yield evalToken(file, ctx);
  }
  var IncludeTag = class extends Tag {
    constructor(token, remainTokens, liquid, parser) {
      super(token, remainTokens, liquid);
      const { tokenizer } = token;
      this["file"] = parseFilePath(tokenizer, this.liquid, parser);
      this["currentFile"] = token.file;
      const begin = tokenizer.p;
      const withStr = tokenizer.readIdentifier();
      if (withStr.content === "with") {
        tokenizer.skipBlank();
        if (tokenizer.peek() !== ":") {
          this.withVar = tokenizer.readValue();
        } else
          tokenizer.p = begin;
      } else
        tokenizer.p = begin;
      this.hash = new Hash(tokenizer.remaining(), liquid.options.jekyllInclude || liquid.options.keyValueSeparator);
    }
    *render(ctx, emitter) {
      const { liquid, hash, withVar } = this;
      const { renderer } = liquid;
      const filepath = yield renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal file path "${filepath}"`);
      const saved = ctx.saveRegister("blocks", "blockMode");
      ctx.setRegister("blocks", {});
      ctx.setRegister("blockMode", BlockMode.OUTPUT);
      const scope = yield hash.render(ctx);
      if (withVar)
        scope[filepath] = yield evalToken(withVar, ctx);
      const templates = yield liquid._parsePartialFile(filepath, ctx.sync, this["currentFile"]);
      ctx.push(ctx.opts.jekyllInclude ? { include: scope } : scope);
      yield renderer.renderTemplates(templates, ctx, emitter);
      ctx.pop();
      ctx.restoreRegister(saved);
    }
  };
  var DecrementTag = class extends Tag {
    constructor(token, remainTokens, liquid) {
      super(token, remainTokens, liquid);
      this.variable = this.tokenizer.readIdentifier().content;
    }
    render(context, emitter) {
      const scope = context.environments;
      if (!isNumber(scope[this.variable])) {
        scope[this.variable] = 0;
      }
      emitter.write(stringify(--scope[this.variable]));
    }
  };
  var CycleTag = class extends Tag {
    constructor(token, remainTokens, liquid) {
      super(token, remainTokens, liquid);
      this.candidates = [];
      const group = this.tokenizer.readValue();
      this.tokenizer.skipBlank();
      if (group) {
        if (this.tokenizer.peek() === ":") {
          this.group = group;
          this.tokenizer.advance();
        } else
          this.candidates.push(group);
      }
      while (!this.tokenizer.end()) {
        const value = this.tokenizer.readValue();
        if (value)
          this.candidates.push(value);
        this.tokenizer.readTo(",");
      }
      this.tokenizer.assert(this.candidates.length, () => `empty candidates: "${token.getText()}"`);
    }
    *render(ctx, emitter) {
      const group = yield evalToken(this.group, ctx);
      const fingerprint = `cycle:${group}:` + this.candidates.join(",");
      const groups = ctx.getRegister("cycle");
      let idx = groups[fingerprint];
      if (idx === void 0) {
        idx = groups[fingerprint] = 0;
      }
      const candidate = this.candidates[idx];
      idx = (idx + 1) % this.candidates.length;
      groups[fingerprint] = idx;
      return yield evalToken(candidate, ctx);
    }
  };
  var IfTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
      super(tagToken, remainTokens, liquid);
      this.branches = [];
      let p = [];
      parser.parseStream(remainTokens).on("start", () => this.branches.push({
        value: new Value(tagToken.args, this.liquid),
        templates: p = []
      })).on("tag:elsif", (token) => {
        assert(!this.elseTemplates, "unexpected elsif after else");
        this.branches.push({
          value: new Value(token.args, this.liquid),
          templates: p = []
        });
      }).on("tag:else", (tag) => {
        assertEmpty(tag.args);
        assert(!this.elseTemplates, "duplicated else");
        p = this.elseTemplates = [];
      }).on("tag:endif", function(tag) {
        assertEmpty(tag.args);
        this.stop();
      }).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      }).start();
    }
    *render(ctx, emitter) {
      const r = this.liquid.renderer;
      for (const { value, templates } of this.branches) {
        const v = yield value.value(ctx, ctx.opts.lenientIf);
        if (isTruthy(v, ctx)) {
          yield r.renderTemplates(templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates || [], ctx, emitter);
    }
  };
  var IncrementTag = class extends Tag {
    constructor(token, remainTokens, liquid) {
      super(token, remainTokens, liquid);
      this.variable = this.tokenizer.readIdentifier().content;
    }
    render(context, emitter) {
      const scope = context.environments;
      if (!isNumber(scope[this.variable])) {
        scope[this.variable] = 0;
      }
      const val = scope[this.variable];
      scope[this.variable]++;
      emitter.write(stringify(val));
    }
  };
  var LayoutTag = class extends Tag {
    constructor(token, remainTokens, liquid, parser) {
      super(token, remainTokens, liquid);
      this.file = parseFilePath(this.tokenizer, this.liquid, parser);
      this["currentFile"] = token.file;
      this.args = new Hash(this.tokenizer.remaining(), liquid.options.keyValueSeparator);
      this.templates = parser.parseTokens(remainTokens);
    }
    *render(ctx, emitter) {
      const { liquid, args, file } = this;
      const { renderer } = liquid;
      if (file === void 0) {
        ctx.setRegister("blockMode", BlockMode.OUTPUT);
        yield renderer.renderTemplates(this.templates, ctx, emitter);
        return;
      }
      const filepath = yield renderFilePath(this.file, ctx, liquid);
      assert(filepath, () => `illegal file path "${filepath}"`);
      const templates = yield liquid._parseLayoutFile(filepath, ctx.sync, this["currentFile"]);
      ctx.setRegister("blockMode", BlockMode.STORE);
      const html = yield renderer.renderTemplates(this.templates, ctx);
      const blocks = ctx.getRegister("blocks");
      if (blocks[""] === void 0)
        blocks[""] = (parent, emitter2) => emitter2.write(html);
      ctx.setRegister("blockMode", BlockMode.OUTPUT);
      ctx.push(yield args.render(ctx));
      yield renderer.renderTemplates(templates, ctx, emitter);
      ctx.pop();
    }
  };
  var BlockTag = class extends Tag {
    constructor(token, remainTokens, liquid, parser) {
      super(token, remainTokens, liquid);
      this.templates = [];
      const match = /\w+/.exec(token.args);
      this.block = match ? match[0] : "";
      while (remainTokens.length) {
        const token2 = remainTokens.shift();
        if (isTagToken(token2) && token2.name === "endblock")
          return;
        const template = parser.parseToken(token2, remainTokens);
        this.templates.push(template);
      }
      throw new Error(`tag ${token.getText()} not closed`);
    }
    *render(ctx, emitter) {
      const blockRender = this.getBlockRender(ctx);
      if (ctx.getRegister("blockMode") === BlockMode.STORE) {
        ctx.getRegister("blocks")[this.block] = blockRender;
      } else {
        yield blockRender(new BlockDrop(), emitter);
      }
    }
    getBlockRender(ctx) {
      const { liquid, templates } = this;
      const renderChild = ctx.getRegister("blocks")[this.block];
      const renderCurrent = function* (superBlock, emitter) {
        ctx.push({ block: superBlock });
        yield liquid.renderer.renderTemplates(templates, ctx, emitter);
        ctx.pop();
      };
      return renderChild ? (superBlock, emitter) => renderChild(new BlockDrop(() => renderCurrent(superBlock, emitter)), emitter) : renderCurrent;
    }
  };
  var RawTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid) {
      super(tagToken, remainTokens, liquid);
      this.tokens = [];
      while (remainTokens.length) {
        const token = remainTokens.shift();
        if (isTagToken(token) && token.name === "endraw")
          return;
        this.tokens.push(token);
      }
      throw new Error(`tag ${tagToken.getText()} not closed`);
    }
    render() {
      return this.tokens.map((token) => token.getText()).join("");
    }
  };
  var TablerowloopDrop = class extends ForloopDrop {
    constructor(length, cols, collection, variable) {
      super(length, collection, variable);
      this.length = length;
      this.cols = cols;
    }
    row() {
      return Math.floor(this.i / this.cols) + 1;
    }
    col0() {
      return this.i % this.cols;
    }
    col() {
      return this.col0() + 1;
    }
    col_first() {
      return this.col0() === 0;
    }
    col_last() {
      return this.col() === this.cols;
    }
  };
  var TablerowTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
      super(tagToken, remainTokens, liquid);
      const variable = this.tokenizer.readIdentifier();
      this.tokenizer.skipBlank();
      const predicate = this.tokenizer.readIdentifier();
      const collectionToken = this.tokenizer.readValue();
      if (predicate.content !== "in" || !collectionToken) {
        throw new Error(`illegal tag: ${tagToken.getText()}`);
      }
      this.variable = variable.content;
      this.collection = collectionToken;
      this.args = new Hash(this.tokenizer.remaining(), liquid.options.keyValueSeparator);
      this.templates = [];
      let p;
      const stream = parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:endtablerow", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    }
    *render(ctx, emitter) {
      let collection = toEnumerable(yield evalToken(this.collection, ctx));
      const args = yield this.args.render(ctx);
      const offset2 = args.offset || 0;
      const limit2 = args.limit === void 0 ? collection.length : args.limit;
      collection = collection.slice(offset2, offset2 + limit2);
      const cols = args.cols || collection.length;
      const r = this.liquid.renderer;
      const tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
      const scope = { tablerowloop };
      ctx.push(scope);
      for (let idx = 0; idx < collection.length; idx++, tablerowloop.next()) {
        scope[this.variable] = collection[idx];
        if (tablerowloop.col0() === 0) {
          if (tablerowloop.row() !== 1)
            emitter.write("</tr>");
          emitter.write(`<tr class="row${tablerowloop.row()}">`);
        }
        emitter.write(`<td class="col${tablerowloop.col()}">`);
        yield r.renderTemplates(this.templates, ctx, emitter);
        emitter.write("</td>");
      }
      if (collection.length)
        emitter.write("</tr>");
      ctx.pop();
    }
  };
  var UnlessTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
      super(tagToken, remainTokens, liquid);
      this.branches = [];
      this.elseTemplates = [];
      let p = [];
      let elseCount = 0;
      parser.parseStream(remainTokens).on("start", () => this.branches.push({
        value: new Value(tagToken.args, this.liquid),
        test: isFalsy,
        templates: p = []
      })).on("tag:elsif", (token) => {
        if (elseCount > 0) {
          p = [];
          return;
        }
        this.branches.push({
          value: new Value(token.args, this.liquid),
          test: isTruthy,
          templates: p = []
        });
      }).on("tag:else", () => {
        elseCount++;
        p = this.elseTemplates;
      }).on("tag:endunless", function() {
        this.stop();
      }).on("template", (tpl) => {
        if (p !== this.elseTemplates || elseCount === 1) {
          p.push(tpl);
        }
      }).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      }).start();
    }
    *render(ctx, emitter) {
      const r = this.liquid.renderer;
      for (const { value, test, templates } of this.branches) {
        const v = yield value.value(ctx, ctx.opts.lenientIf);
        if (test(v, ctx)) {
          yield r.renderTemplates(templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  };
  var BreakTag = class extends Tag {
    render(ctx, emitter) {
      emitter["break"] = true;
    }
  };
  var ContinueTag = class extends Tag {
    render(ctx, emitter) {
      emitter["continue"] = true;
    }
  };
  var EchoTag = class extends Tag {
    constructor(token, remainTokens, liquid) {
      super(token, remainTokens, liquid);
      this.tokenizer.skipBlank();
      if (!this.tokenizer.end()) {
        this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
      }
    }
    *render(ctx, emitter) {
      if (!this.value)
        return;
      const val = yield this.value.value(ctx, false);
      emitter.write(val);
    }
  };
  var LiquidTag = class extends Tag {
    constructor(token, remainTokens, liquid, parser) {
      super(token, remainTokens, liquid);
      const tokens = this.tokenizer.readLiquidTagTokens(this.liquid.options);
      this.templates = parser.parseTokens(tokens);
    }
    *render(ctx, emitter) {
      yield this.liquid.renderer.renderTemplates(this.templates, ctx, emitter);
    }
  };
  var InlineCommentTag = class extends Tag {
    constructor(tagToken, remainTokens, liquid) {
      super(tagToken, remainTokens, liquid);
      if (tagToken.args.search(/\n\s*[^#\s]/g) !== -1) {
        throw new Error("every line of an inline comment must start with a '#' character");
      }
    }
    render() {
    }
  };
  var tags = {
    assign: AssignTag,
    "for": ForTag,
    capture: CaptureTag,
    "case": CaseTag,
    comment: CommentTag,
    include: IncludeTag,
    render: RenderTag,
    decrement: DecrementTag,
    increment: IncrementTag,
    cycle: CycleTag,
    "if": IfTag,
    layout: LayoutTag,
    block: BlockTag,
    raw: RawTag,
    tablerow: TablerowTag,
    unless: UnlessTag,
    "break": BreakTag,
    "continue": ContinueTag,
    echo: EchoTag,
    liquid: LiquidTag,
    "#": InlineCommentTag
  };
  var Liquid = class {
    constructor(opts = {}) {
      this.renderer = new Render();
      this.filters = {};
      this.tags = {};
      this.options = normalize(opts);
      this.parser = new Parser(this);
      forOwn(tags, (conf, name) => this.registerTag(name, conf));
      forOwn(filters, (handler, name) => this.registerFilter(name, handler));
    }
    parse(html, filepath) {
      const parser = new Parser(this);
      return parser.parse(html, filepath);
    }
    _render(tpl, scope, renderOptions) {
      const ctx = scope instanceof Context ? scope : new Context(scope, this.options, renderOptions);
      return this.renderer.renderTemplates(tpl, ctx);
    }
    render(tpl, scope, renderOptions) {
      return __awaiter(this, void 0, void 0, function* () {
        return toPromise(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
      });
    }
    renderSync(tpl, scope, renderOptions) {
      return toValueSync(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
    }
    renderToNodeStream(tpl, scope, renderOptions = {}) {
      const ctx = new Context(scope, this.options, renderOptions);
      return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
    }
    _parseAndRender(html, scope, renderOptions) {
      const tpl = this.parse(html);
      return this._render(tpl, scope, renderOptions);
    }
    parseAndRender(html, scope, renderOptions) {
      return __awaiter(this, void 0, void 0, function* () {
        return toPromise(this._parseAndRender(html, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
      });
    }
    parseAndRenderSync(html, scope, renderOptions) {
      return toValueSync(this._parseAndRender(html, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
    }
    _parsePartialFile(file, sync, currentFile) {
      return new Parser(this).parseFile(file, sync, LookupType.Partials, currentFile);
    }
    _parseLayoutFile(file, sync, currentFile) {
      return new Parser(this).parseFile(file, sync, LookupType.Layouts, currentFile);
    }
    _parseFile(file, sync, lookupType, currentFile) {
      return new Parser(this).parseFile(file, sync, lookupType, currentFile);
    }
    parseFile(file, lookupType) {
      return __awaiter(this, void 0, void 0, function* () {
        return toPromise(new Parser(this).parseFile(file, false, lookupType));
      });
    }
    parseFileSync(file, lookupType) {
      return toValueSync(new Parser(this).parseFile(file, true, lookupType));
    }
    *_renderFile(file, ctx, renderFileOptions) {
      const templates = yield this._parseFile(file, renderFileOptions.sync, renderFileOptions.lookupType);
      return yield this._render(templates, ctx, renderFileOptions);
    }
    renderFile(file, ctx, renderFileOptions) {
      return __awaiter(this, void 0, void 0, function* () {
        return toPromise(this._renderFile(file, ctx, Object.assign(Object.assign({}, renderFileOptions), { sync: false })));
      });
    }
    renderFileSync(file, ctx, renderFileOptions) {
      return toValueSync(this._renderFile(file, ctx, Object.assign(Object.assign({}, renderFileOptions), { sync: true })));
    }
    renderFileToNodeStream(file, scope, renderOptions) {
      return __awaiter(this, void 0, void 0, function* () {
        const templates = yield this.parseFile(file);
        return this.renderToNodeStream(templates, scope, renderOptions);
      });
    }
    _evalValue(str2, scope) {
      const value = new Value(str2, this);
      const ctx = scope instanceof Context ? scope : new Context(scope, this.options);
      return value.value(ctx);
    }
    evalValue(str2, scope) {
      return __awaiter(this, void 0, void 0, function* () {
        return toPromise(this._evalValue(str2, scope));
      });
    }
    evalValueSync(str2, scope) {
      return toValueSync(this._evalValue(str2, scope));
    }
    registerFilter(name, filter) {
      this.filters[name] = filter;
    }
    registerTag(name, tag) {
      this.tags[name] = isFunction(tag) ? tag : createTagClass(tag);
    }
    plugin(plugin) {
      return plugin.call(this, Liquid);
    }
    express() {
      const self = this;
      let firstCall = true;
      return function(filePath, ctx, callback) {
        if (firstCall) {
          firstCall = false;
          const dirs = normalizeDirectoryList(this.root);
          self.options.root.unshift(...dirs);
          self.options.layouts.unshift(...dirs);
          self.options.partials.unshift(...dirs);
        }
        self.renderFile(filePath, ctx).then((html) => callback(null, html), callback);
      };
    }
  };

  // node_modules/@bookshop/eleventy-engine/lib/translateLiquid.js
  var quoteDynamicNames = (raw3) => {
    return raw3.replace(/\s_bookshop_(include_)?{{(.+)}}\s/, (_, include, innards) => {
      return ` "_bookshop_${include || ""}{{${innards}}}" `;
    });
  };
  var rewriteTag = function(token, src, liveMarkup) {
    let raw3 = token.getText();
    if (token.kind === 16)
      return src;
    if (token.name && token.name.match(/^end/))
      return src;
    if (liveMarkup && token.name && token.name === "for") {
      raw3 = `${raw3}{% loop_context ${token.args} %}`;
    }
    if (liveMarkup && token.name && (token.name === "assign" || token.name === "local")) {
      let [, identifier, value] = token.args.match(/^[\r\n\s]*([^=]+?)[\r\n\s]*=[\r\n\s]*([\s\S]+?)[\r\n\s]*$/);
      raw3 = `${raw3}<!--bookshop-live context(${identifier}: (${value}))-->`;
    }
    if (token.name && token.name === "bookshop_include") {
      let componentName;
      token.name = "include";
      raw3 = raw3.replace(/bookshop_include[\r\n\s]+('|")?(\S+)/, (_, quote, component) => {
        componentName = component.replace(/('|")$/, "");
        return `include ${quote || ""}_bookshop_include_${component}`;
      });
      raw3 = quoteDynamicNames(raw3);
      if (liveMarkup) {
        let params = token.args.split(" ");
        params.shift();
        raw3 = `<!--bookshop-live name(${componentName}) params(${params.join(" ")})-->${raw3}<!--bookshop-live end-->`;
      }
    }
    if (token.name && token.name === "bookshop") {
      let componentName;
      token.name = "include";
      raw3 = raw3.replace(/bookshop[\r\n\s]+('|")?(\S+)/, (_, quote, component) => {
        componentName = component.replace(/('|")$/, "");
        return `include ${quote || ""}_bookshop_${component}`;
      });
      raw3 = quoteDynamicNames(raw3);
      if (liveMarkup) {
        let params = token.args.split(" ");
        params.shift();
        raw3 = `<!--bookshop-live name(${componentName}) params(${params.join(" ")})-->${raw3}<!--bookshop-live end-->`;
      }
    }
    return [
      src.substr(0, token.begin),
      raw3,
      src.substr(token.end)
    ].join("");
  };
  function translateLiquid_default(text, opts) {
    opts = {
      expandBindSyntax: true,
      liveMarkup: true,
      ...opts
    };
    text = text.toString();
    if (!/bookshop/.test(text)) {
      opts.liveMarkup = false;
    }
    const tokenizer = new Tokenizer(text);
    const output = tokenizer.readTopLevelTokens();
    output.reverse().forEach((tag) => {
      text = rewriteTag(tag, text, opts.liveMarkup);
    });
    const unbind = opts.expandBindSyntax ? "{% unbind %}" : "";
    return `${unbind}${text}`;
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/unbind.js
  function unbind_default(Liquid2) {
    this.registerTag("unbind", {
      parse: function(token) {
      },
      render: function(ctx, hash) {
        const lastScope = ctx.scopes.length - 1;
        if (typeof ctx.scopes[lastScope].bind === "object") {
          ctx.scopes[lastScope] = {
            ...ctx.scopes[lastScope].bind,
            ...ctx.scopes[lastScope],
            bind: null
          };
        }
        return ``;
      }
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/slug-plugin.js
  var import_slugify = __toModule(require_slugify());
  function slug_plugin_default(Liquid2) {
    this.registerFilter("slug", (text) => {
      if (text && typeof text === "string")
        return (0, import_slugify.default)(text).toLowerCase();
      return text;
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/markdownify.js
  var import_markdown_it = __toModule(require_markdown_it());
  var md = new import_markdown_it.default({
    html: true
  });
  function markdownify_default(Liquid2) {
    this.registerFilter("markdownify", (input) => {
      return md.render(input ?? "");
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/loop_context.js
  function loop_context_default(Liquid2) {
    this.registerTag("loop_context", {
      parse: function(token) {
        this.args = token.args;
      },
      render: function(ctx, hash) {
        const argsString = this.args.replace(/\s+in\s+/, "=").split(" ")[0];
        return `<!--bookshop-live context(${argsString}[${ctx.get(["forloop", "index0"])}])-->`;
      }
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/url.js
  var url_default = (meta) => function(Liquid2) {
    this.registerFilter("url", (url) => {
      url = url || "";
      if (url.startsWith("/") && !url.startsWith("//")) {
        if (meta.pathPrefix === void 0 || typeof meta.pathPrefix !== "string") {
          console.error([
            `The Eleventy Bookshop plugin needs to be supplied a pathPrefix in order to use the url filter.`,
            `e.g. in .eleventy.js:`,
            ``,
            `eleventyConfig.addPlugin(pluginBookshop({`,
            `    bookshopLocations: <. . .>,`,
            `    pathPrefix: "/documentation/"`,
            `  }));`
          ].join("\n"));
          throw new Error("pathPrefix (String) is required in the `url` filter. This should be supplied ");
        }
        const baseurl = meta.pathPrefix || "";
        return `${baseurl}${url}`.replace(/\/\//g, "/");
      }
      return url;
    });
  };

  // node_modules/@bookshop/eleventy-engine/lib/engine.js
  var Engine = class {
    constructor(options) {
      options = {
        name: "Eleventy",
        files: {},
        ...options
      };
      this.key = "eleventy";
      this.name = options.name;
      this.files = options.files;
      this.plugins = options.plugins || [];
      this.plugins.push(unbind_default, slug_plugin_default, loop_context_default, markdownify_default);
      this.meta = {};
      this.info = {};
      this.plugins.push(url_default(this.meta));
      this.initializeLiquid();
      this.applyLiquidPlugins();
    }
    initializeLiquid() {
      const eleventyEngine = this;
      this.liquid = new Liquid({
        fs: {
          readFileSync(file) {
            return "LiquidJS readFileSync unimplemented";
          },
          async readFile(file) {
            return await eleventyEngine.retrieveInclude(file);
          },
          existsSync() {
            return true;
          },
          async exists() {
            return true;
          },
          dirname(file) {
            return file.replace(/\/[^\/]+$/, "");
          },
          resolve(root, file, ext) {
            return `${root}${file}`;
          },
          sep: "/"
        }
      });
    }
    async retrieveInclude(file) {
      let not_found = (name) => {
        return [
          `<div class="bookshop_error" style="padding: 10px; background-color: lightcoral; color: black; font-weight: bold;">`,
          `Failed to find component ${name}`,
          `</div>`
        ].join("\n");
      };
      let content;
      if (/_bookshop_include_/.test(file)) {
        content = this.getShared(file.replace(/^.*_bookshop_include_/, ""));
        if (!content && content !== "") {
          content = not_found(file);
        }
      } else if (/_bookshop_/.test(file)) {
        content = this.getComponent(file.replace(/^.*_bookshop_/, ""));
        if (!content && content !== "") {
          content = not_found(file);
        }
      } else {
        content = this.files?.[file];
        if (!content && content !== "") {
          content = not_found(file);
        }
      }
      if (!content && content !== "") {
        console.warn(`[eleventy-engine] No file found for ${file}`);
        return "";
      }
      return translateLiquid_default(content);
    }
    applyLiquidPlugins() {
      this.plugins.forEach((plugin) => {
        this.liquid.plugin(plugin);
      });
    }
    getShared(name) {
      const key = `shared/eleventy/${name}.eleventy.liquid`;
      return this.files?.[key];
    }
    getComponentKey(name) {
      const base = name.split("/").reverse()[0];
      return `components/${name}/${base}.eleventy.liquid`;
    }
    getFlatComponentKey(name) {
      return `components/${name}.eleventy.liquid`;
    }
    getComponent(name) {
      const key = this.getComponentKey(name);
      const flatKey = this.getFlatComponentKey(name);
      return this.files?.[key] ?? this.files?.[flatKey];
    }
    hasComponent(name) {
      const key = this.getComponentKey(name);
      const flatKey = this.getFlatComponentKey(name);
      return !!(this.files?.[key] ?? this.files?.[flatKey]);
    }
    resolveComponentType(name) {
      if (this.getComponent(name))
        return "component";
      if (this.getShared(name))
        return "shared";
      return false;
    }
    injectInfo(props) {
      return {
        collections: this.precomputed_collections,
        ...this.info.data || {},
        ...props,
        env_bookshop_live: true
      };
    }
    async storeMeta(meta = {}) {
      this.meta.pathPrefix = meta.pathPrefix ? await this.eval(meta.pathPrefix) : void 0;
    }
    async storeInfo(info = {}) {
      this.info = info;
      const collections = this.info.collections || {};
      collections["all"] = [];
      for (const [key, val] of Object.entries(collections)) {
        collections[key] = val.map((item) => {
          return {
            inputPath: item.path,
            outputPath: item.path,
            fileSlug: item.url.replace(/(\/|\.[^\/]+)$/, "").replace(/^.+([^\/]+)$/, "").toLowerCase(),
            url: item.url,
            date: item.date ? new Date(item.date) : new Date(),
            templateContent: "Content is not available when live editing",
            data: item
          };
        });
        collections["all"] = [...collections["all"], ...collections[key]];
      }
      this.precomputed_collections = collections;
    }
    async componentQuack(error_string = "") {
      try {
        const component_regex = /file:._bookshop_([^,]+),/ig;
        let file_stack = [...error_string.matchAll(component_regex)];
        if (file_stack.length) {
          const deepest_errored_component = file_stack[file_stack.length - 1];
          const component_key = this.getComponentKey(deepest_errored_component[1]);
          this.files = this.files || {};
          this.files[component_key] = [
            `<div style="padding: 10px; background-color: lightcoral; color: black; font-weight: bold;">`,
            `Failed to render ${deepest_errored_component[1]}. <br/>`,
            `<pre style="margin-top: 10px; background-color: lightcoral; border: solid 1px black; white-space: pre-line;">`,
            `<code style="font-family: monospace; color: black;">${error_string.replace(/</, "&lt;")}</code></pre>`,
            `</div>`
          ].join("\n");
          return deepest_errored_component;
        }
      } catch (e) {
      }
      return null;
    }
    async render(target, name, props, globals, logger) {
      let source = this.getComponent(name);
      if (!source)
        source = this.getShared(name);
      if (!source) {
        console.warn(`[eleventy-engine] No component found for ${name}`);
        return "";
      }
      logger?.log?.(`Going to render ${name}, with source:`);
      logger?.log?.(source);
      source = translateLiquid_default(source);
      logger?.log?.(`Rewritten the template for ${name} to:`);
      logger?.log?.(source);
      if (!globals || typeof globals !== "object")
        globals = {};
      props = this.injectInfo({ ...globals, ...props });
      let rendered = false, render_attempts = 1, max_renders = 5;
      while (!rendered && render_attempts < max_renders) {
        try {
          target.innerHTML = await this.liquid.parseAndRender(source || "", props);
          rendered = true;
        } catch (e) {
          if (!this.componentQuack(e.toString())) {
            max_renders = render_attempts;
            target.innerHTML = `<code>Bookshop failed to render: ${e.toString()}</code>`;
          }
        }
        render_attempts += 1;
      }
      logger?.log?.(`Rendered ${name} as:`);
      logger?.log?.(target.innerHTML);
    }
    async eval(str2, props = {}) {
      try {
        if (/^\([\s\S]+\)$/.test(str2)) {
          str2 = str2.replace(/^\(|\)$/g, "");
        }
        str2 = str2.replace(/\n/g, "");
        const ctx = new Context();
        ctx.push(this.injectInfo({}));
        if (Array.isArray(props)) {
          props.forEach((p) => ctx.push(p));
        } else {
          ctx.push(props);
        }
        const [, value, index] = str2.match(/^(.*?)(?:\[(\d+)\])?$/);
        let result = await this.liquid.evalValue(value, ctx);
        if (index && typeof result === "object" && !Array.isArray(result)) {
          result = Object.entries(result);
        }
        return index ? result?.[index] : result;
      } catch (e) {
        console.warn(`Error evaluating \`${str2}\` in the Eleventy engine`, e.toString());
        return "";
      }
    }
    loader() {
    }
  };

  // component-library/components/generic/button/button.eleventy.liquid
  var button_eleventy_default = `{% assign_local c = "c-button" %}
{% assign_local arrow_type = "arrow-" | append: arrow %}

{% if url and url!=''%}
    <a href="{{ url }}" class="{{c}} {{c}}--{{ variant }} {{ c }}--{{ arrow_type }}" {% if open_in_new_tab %}target="_blank" rel="noopener noreferrer"{% endif %} {% if onclick %}onclick="{{ onclick }}"{% endif %}>
        {{ text }}
        {% if arrow %}
            {% bookshop "generic/hero-library-icon" hero_library_icon_name:arrow_type icon_type:"solid" icon_size:'extra-small'  color:'transparent' %}
        {% endif %}
    </a>
{% else %}
    <button class="{{c}} {{c}}--{{ variant }} {{ c }}--{{ arrow_type }}" {% if onclick %}onclick="{{ onclick }}"{% endif %}>
        {{ text }}
        {% if arrow %}
            {% bookshop "generic/hero-library-icon" hero_library_icon_name:arrow_type icon_type:"solid" icon_size:'extra-small'  color:'transparent' %}
        {% endif %}
    </button>
{% endif %}
`;

  // bookshop-import-file:components/generic/button/button.eleventy.liquid__bookshop_file__
  var button_eleventy_default2 = button_eleventy_default;

  // component-library/components/generic/card-grid/card-grid.eleventy.liquid
  var card_grid_eleventy_default = `{% assign_local c = "c-card-grid" %}
<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{c}} 
            {% if _bookshop_name contains 'grid--image-cards' %}
              {{c}}--image-cards
            {% endif %}
            {{ c }}--content-align-{{ styles.content_alignment }} 
            component 
            component--{{ styles.color_group }}">

    {% if content.heading or content.description %}
        <div class="component__heading {{ c }}__heading">
            {% if content.heading %}{% bookshop "generic/heading" bind:content.heading %}{% endif %}
            {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}
        </div>
    {% endif %}

    {% if content.grid_items %}
      <div class="{{c}}__grid">
        {% for item in content.grid_items %}          
          {% bookshop "generic/card" bind:item card_color_group:styles.card_color_group %}
        {% endfor %}
      </div>
    {% endif %}

    {% if content.buttons %}
      <div class="{{c}}__buttons">
        {% for button in content.buttons %}
          {% bookshop "generic/button" bind:button disabled:false arrow:button.arrow %}
        {% endfor %}
      </div>
    {% endif %}
</section>
`;

  // bookshop-import-file:components/generic/card-grid/card-grid.eleventy.liquid__bookshop_file__
  var card_grid_eleventy_default2 = card_grid_eleventy_default;

  // component-library/components/generic/card/card.eleventy.liquid
  var card_eleventy_default = `{%  assign_local c = 'c-card' %}
<div class="{{c}} component component--full-height
    {% if content.imagery._bookshop_name == 'generic/image' %} 
        {{ c }}--image 
    {% elsif content.imagery._bookshop_name == 'generic/hero-library-icon' or content.imagery._bookshop_name == 'generic/custom-icon' %} 
        {{ c }}--icon 
    {% endif %}
    component--{{ card_color_group }}">

    {% if content.imagery %}
        <div class="{{ c }}__imagery">
            {% bookshop "{{content.imagery._bookshop_name}}" bind:content.imagery %}
        </div>
    {% endif %}

    <div class="{{ c }}__content-wrapper">
        {% if content.heading %}
            {% bookshop "generic/heading" bind:content.heading %}
        {% endif %}

        {% if content.description %}<div class="{{c}}__content">{% bookshop "generic/text-block" text:content.description %}</div>{% endif %}
        {% if content.buttons and content.buttons.size > 0 %}
            {% for button in content.buttons %}
                <div class="{{ c }}__button">
                    {% bookshop "generic/button" bind:button %}
                </div>
            {% endfor %}            
        {% endif %}
    </div>
</div>`;

  // bookshop-import-file:components/generic/card/card.eleventy.liquid__bookshop_file__
  var card_eleventy_default2 = card_eleventy_default;

  // component-library/components/generic/custom-embed/custom-embed.eleventy.liquid
  var custom_embed_eleventy_default = '{% assign_local c = "c-custom-embed" %}\n<div class="{{ c }}" style="--{{ c }}-ratio: {{ ratio }};">\n    {{ embed }}\n</div>';

  // bookshop-import-file:components/generic/custom-embed/custom-embed.eleventy.liquid__bookshop_file__
  var custom_embed_eleventy_default2 = custom_embed_eleventy_default;

  // component-library/components/generic/custom-icon/custom-icon.eleventy.liquid
  var custom_icon_eleventy_default = `{% assign_local c = "c-hero-library-icon" %}
{% assign_local this_c = "c-custom-icon" %}

<span class="{{ this_c }} {{ c }} {{ c }}--{{ icon_size }} 
    {% if default_color %}
        {{this_c}}--icon-default-color 
    {% else %}
        {{ c }}--{{ icon_type }}
    {% endif %} 

    {% if rounded_border %}
        {{c}}--round
    {% endif %}
    
    {% if no_border %}
        {{c}}--no-border
    {% endif %}" 
    
    style="--c-hero-library-icon-color: {% if theme_color %}var(--main-text-color, #F9F9FB){% elsif color %}{{ color }}{% else %}var(--dynamic-fill-color, #F9F9FB);{% endif %}">
    {% if icon_path contains '.svg' and env_bookshop_live %}
        <span class="{{ c }}__image {{ this_c }}__image" style="--url: url('{{ icon_path }}')"></span>
    {% elsif icon_path contains '.svg' %}
         {{ '/src' | append: icon_path  | svgContents: "c-hero-library-icon__svg" }}
    {% else %}
        {% bookshop "generic/image" image_path:icon_path image_alt:'' %}
    {% endif %}
</span>
`;

  // bookshop-import-file:components/generic/custom-icon/custom-icon.eleventy.liquid__bookshop_file__
  var custom_icon_eleventy_default2 = custom_icon_eleventy_default;

  // component-library/components/generic/form/checkbox-group/checkbox-group.eleventy.liquid
  var checkbox_group_eleventy_default = `{% assign_local c = "c-checkbox-group" %}
<div class="{{ c }}">
    <fieldset class="{{ c }}__group" onClick="validateInputGroup(this)" {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>
        {% if label and label != '' %}
            <legend class="{{ c }}__group__label">{{ label }}</legend>
        {% endif %}
        <div class="{{ c }}__group__inputs {{ c }}__group__inputs--arrangement-{{ arrangement }}">
            {% assign_local group_name = label | append: "-" | append: id %}
            {% for item in checkboxes %}
                {% bookshop "generic/form/checkbox-input" bind:item group_name:group_name %}
            {% endfor %}
        </div>
    </fieldset>

    {% if helper_text %}
        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}
    {% endif %}

    {% bookshop "generic/form/error-message" id={{ id }} %}
</div>`;

  // bookshop-import-file:components/generic/form/checkbox-group/checkbox-group.eleventy.liquid__bookshop_file__
  var checkbox_group_eleventy_default2 = checkbox_group_eleventy_default;

  // component-library/components/generic/form/checkbox-input/checkbox-input.eleventy.liquid
  var checkbox_input_eleventy_default = '{% assign_local c = "c-checkbox-input" %}\n<div class="{{ c }}">\n  <input class="{{ c }}__input" \n      type="checkbox" \n      id="{{ id }}" \n      name="{{ group_name }}" \n      value="{{ label }}"\n      {% if checked %}checked{% endif %} \n      {% if required %}required{% endif %} />\n  <label class="{{ c }}__label" for="{{ id }}">{{ label }}{% if required %} *{% endif %}</label>\n</div>';

  // bookshop-import-file:components/generic/form/checkbox-input/checkbox-input.eleventy.liquid__bookshop_file__
  var checkbox_input_eleventy_default2 = checkbox_input_eleventy_default;

  // component-library/components/generic/form/country-select-input/country-select-input.eleventy.liquid
  var country_select_input_eleventy_default = `{% assign_local c = "c-country-select-input" %}
<div class="{{ c }}">
  <label class="{{ c }}__label" for="{{ id }}">{{ label }}</label>
  <select class="{{ c }}__input"
    name="{{ label }}"
    id="{{ id }}"
    {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>
    <option value="USA" selected>USA</option>
    <option value="Aaland Islands">Aaland Islands</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antigua And Barbuda">Antigua And Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bonaire, Saint Eustatius and Saba">Bonaire, Saint Eustatius and Saba</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Bouvet Island">Bouvet Island</option>
    <option value="Brazil">Brazil</option>
    <option value="Brunei Darussalam">Brunei Darussalam</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote D'Ivoire">Cote D'Ivoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Curacao">Curacao</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands">Falkland Islands</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guernsey">Guernsey</option>
    <option value="Guinea">Guinea</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jersey (Channel Islands)">Jersey (Channel Islands)</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macau">Macau</option>
    <option value="Macedonia">Macedonia</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Moldova, Republic of">Moldova, Republic of</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Namibia">Namibia</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Netherlands Antilles">Netherlands Antilles</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="North Korea">North Korea</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Palestine">Palestine</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Pitcairn">Pitcairn</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Qatar">Qatar</option>
    <option value="Republic of Kosovo">Republic of Kosovo</option>
    <option value="Reunion">Reunion</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
    <option value="Saint Lucia">Saint Lucia</option>
    <option value="Saint Martin">Saint Martin</option>
    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
    <option value="Samoa (Independent)">Samoa (Independent)</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Sint Maarten">Sint Maarten</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
    <option value="South Korea">South Korea</option>
    <option value="South Sudan">South Sudan</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
    <option value="Swaziland">Swaziland</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syria">Syria</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-Leste">Timor-Leste</option>
    <option value="Togo">Togo</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks &amp; Caicos Islands">Turks &amp; Caicos Islands</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
    <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
    <option value="Western Sahara">Western Sahara</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
  </select>
  <div class="{{ c }}__dropdown-arrow">{% bookshop "generic/hero-library-icon" hero_library_icon_name:"chevron-down" icon_type:"solid" icon_size:'extra-small' rounded_border:false color:'white' %}</div>

    {% if helper_text %}
      {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}
    {% endif %}
</div>
`;

  // bookshop-import-file:components/generic/form/country-select-input/country-select-input.eleventy.liquid__bookshop_file__
  var country_select_input_eleventy_default2 = country_select_input_eleventy_default;

  // component-library/components/generic/form/date-input/date-input.eleventy.liquid
  var date_input_eleventy_default = `{% assign_local c = "c-date-input" %}
<div class="{{ c }}">
    <label class="{{ c }}__label" for="{{ id }}">{{ label }}{% if required %} *{% endif %}</label>
    <input class="{{ c }}__input {% if min_today %}{{ c }}__input--min-today{% endif %} {% if max_today %}{{ c }}__input--max-today{% endif %}"
        type="date"
        id="{{ id }}" 
        name="{{ label }}" 
        {% if min_today %}min="{{ 'now' | date: '%Y-%m-%d' }}"{% elsif min_today %}min="{{ min | date: '%Y-%m-%d' }}"{% endif %}
        {% if max_today %}max="{{ 'now' | date: '%Y-%m-%d' }}"{% elsif max_today %}max="{{ max | date: '%Y-%m-%d' }}"{% endif %}
        onfocus="setMinMaxDateToday(this)"
        onblur="validateInput(this)"
        {% if required %}required{% endif %}
        {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>
    <div class="{{ c }}__icon">{% bookshop "generic/hero-library-icon" hero_library_icon_name:"calendar-days" icon_type:"outline" icon_size:'extra-small' rounded_border:false color:'white' %}</div>
    <div class="{{ c }}__dropdown-arrow">{% bookshop "generic/hero-library-icon" hero_library_icon_name:"chevron-down" icon_type:"solid" icon_size:'extra-small' rounded_border:false color:'white' %}</div>

    {% if helper_text %}
        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}
    {% endif %}

    {% bookshop "generic/form/error-message" id={{ id }} %}
</div>`;

  // bookshop-import-file:components/generic/form/date-input/date-input.eleventy.liquid__bookshop_file__
  var date_input_eleventy_default2 = date_input_eleventy_default;

  // component-library/components/generic/form/email-input/email-input.eleventy.liquid
  var email_input_eleventy_default = '{% assign_local c = "c-email-input" %}\n<div class="{{ c }}">\n    <label class="{{ c }}__label" for="{{ id }}">{{ label }}{% if required %} *{% endif %}</label>\n    <input class="{{ c }}__input"\n        type="email" \n        id="{{ id }}" \n        name="_replyto" \n        placeholder="{{ placeholder }}"\n        {% if required %}required{% endif %}\n        onblur="validateInput(this)"\n        oninput="validateInputTyping(this)"\n        {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>\n\n    {% if helper_text %}\n        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}\n    {% endif %}\n\n    {% bookshop "generic/form/error-message" id={{ id }} %}\n</div>';

  // bookshop-import-file:components/generic/form/email-input/email-input.eleventy.liquid__bookshop_file__
  var email_input_eleventy_default2 = email_input_eleventy_default;

  // component-library/components/generic/form/error-message/error-message.eleventy.liquid
  var error_message_eleventy_default = `{% assign_local c = "c-error-message" %}

<div class="{{ c }} error">
    {% bookshop "generic/hero-library-icon" hero_library_icon_name:"x-circle" icon_type:"outline" icon_size:'extra-small' rounded_border:false color:'var(--error-color, #BF2323)' %}
    <p class="{{ c }}__error__text error__text" id="{{ id }}--error">{{ error_message }}</p>
</div>`;

  // bookshop-import-file:components/generic/form/error-message/error-message.eleventy.liquid__bookshop_file__
  var error_message_eleventy_default2 = error_message_eleventy_default;

  // component-library/components/generic/form/helper-text/helper-text.eleventy.liquid
  var helper_text_eleventy_default = `{% assign_local c = "c-helper-text" %}

<div class="{{ c }}">
    {% bookshop "generic/hero-library-icon" hero_library_icon_name:"information-circle" icon_type:"outline" icon_size:'extra-small' rounded_border:false color:'var(--primary-foreground-color, #F9F9FB)' %}
    <p class="{{ c }}__helper__text" id="{{ id }}--helper" role="tooltip">{{ helper_text }}</p>
</div>
`;

  // bookshop-import-file:components/generic/form/helper-text/helper-text.eleventy.liquid__bookshop_file__
  var helper_text_eleventy_default2 = helper_text_eleventy_default;

  // component-library/components/generic/form/phone-input/phone-input.eleventy.liquid
  var phone_input_eleventy_default = '{% assign_local c = "c-phone-input" %}\n<div class="{{ c }}">\n    <label class="{{ c }}__label" for="{{ id }}">{{ label }}{% if required %} *{% endif %}</label>\n    <input class="{{ c }}__input"\n        type="tel" id="{{ id }}" \n        name="{{ label }}" \n        placeholder="{{ placeholder }}"\n        {% if required %}required{% endif %}\n        onblur="validateInput(this)"\n        oninput="validateInputTyping(this)"        \n        {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>\n\n    {% if helper_text %}\n        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}\n    {% endif %}\n\n    {% bookshop "generic/form/error-message" id={{ id }} %}\n</div>';

  // bookshop-import-file:components/generic/form/phone-input/phone-input.eleventy.liquid__bookshop_file__
  var phone_input_eleventy_default2 = phone_input_eleventy_default;

  // component-library/components/generic/form/radio-button-group/radio-button-group.eleventy.liquid
  var radio_button_group_eleventy_default = `{% assign_local c = "c-radio-button-group" %}
<div class="{{ c }}">
    <fieldset class="{{ c }}__group" onClick="validateInputGroup(this)" {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>
        {% if label and label != '' %}
            <legend class="{{ c }}__group__label">{{ label }}{% if required %} *{% endif %}</legend>
        {% endif %}
        <div class="{{ c }}__group__inputs {{ c }}__group__inputs--arrangement-{{ arrangement }}">
            {% assign_local group_name = label | append: "-" | append: id %}
            {% for item in radio_buttons %}
                {% bookshop "generic/form/radio-input" bind:item required:required group_name:group_name id:radio_id %}
            {% endfor %}
        </div>

    </fieldset>

    {% if helper_text %}
        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}
    {% endif %}

    {% bookshop "generic/form/error-message" id={{ id }} %}

</div>`;

  // bookshop-import-file:components/generic/form/radio-button-group/radio-button-group.eleventy.liquid__bookshop_file__
  var radio_button_group_eleventy_default2 = radio_button_group_eleventy_default;

  // component-library/components/generic/form/radio-input/radio-input.eleventy.liquid
  var radio_input_eleventy_default = '{% assign_local c = "c-radio-input" %}\n<div class="{{ c }}">\n    <input class="{{ c }}__input" \n        type="radio" \n        id="{{ id }}" \n        name="{{ group_name }}"\n        value="{{ label }}"\n        {% if checked %}checked{% endif %} \n        {% if required %}required{% endif %}>\n    <label class="{{ c }}__label" for="{{ id }}">{{ label }}</label>\n</div>';

  // bookshop-import-file:components/generic/form/radio-input/radio-input.eleventy.liquid__bookshop_file__
  var radio_input_eleventy_default2 = radio_input_eleventy_default;

  // component-library/components/generic/form/section-break/section-break.eleventy.liquid
  var section_break_eleventy_default = '{% assign_local c = "c-form-section-break" %}\n\n<div class="{{ c }}">\n    <hr class="{{ c }}__divider {%if line %}{{ c }}__divider--line{% endif %}">\n</div>';

  // bookshop-import-file:components/generic/form/section-break/section-break.eleventy.liquid__bookshop_file__
  var section_break_eleventy_default2 = section_break_eleventy_default;

  // component-library/components/generic/form/section-heading/section-heading.eleventy.liquid
  var section_heading_eleventy_default = '{% assign_local c = "c-form-section-heading" %}\n\n<div class="{{ c }}">\n    {{ text }}\n</div>';

  // bookshop-import-file:components/generic/form/section-heading/section-heading.eleventy.liquid__bookshop_file__
  var section_heading_eleventy_default2 = section_heading_eleventy_default;

  // component-library/components/generic/form/select-input/select-input.eleventy.liquid
  var select_input_eleventy_default = `{% assign_local c = "c-select-input" %}
<div class="{{ c }}">
  <label class="{{ c }}__label" for="{{ id }}">{{ label }}</label>
  <select class="{{ c }}__input"
    name="{{ label }}"
    id="{{ id }}"
    {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>
    {% for option in options %}
        <option value="{{ option.name }}">{{ option.name }}</option>
    {% endfor %}
  </select>
  <div class="{{ c }}__dropdown-arrow">{% bookshop "generic/hero-library-icon" hero_library_icon_name:"chevron-down" icon_type:"solid" icon_size:'extra-small' rounded_border:false color:'white' %}</div>

  {% if helper_text %}
    {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}
  {% endif %}

</div>
`;

  // bookshop-import-file:components/generic/form/select-input/select-input.eleventy.liquid__bookshop_file__
  var select_input_eleventy_default2 = select_input_eleventy_default;

  // component-library/components/generic/form/simple-text/simple-text.eleventy.liquid
  var simple_text_eleventy_default = '{% assign_local c = "c-form-simple-text" %}\n\n<div class="{{ c }}">\n    {{ text }}\n</div>';

  // bookshop-import-file:components/generic/form/simple-text/simple-text.eleventy.liquid__bookshop_file__
  var simple_text_eleventy_default2 = simple_text_eleventy_default;

  // component-library/components/generic/form/text-area-input/text-area-input.eleventy.liquid
  var text_area_input_eleventy_default = '{% assign_local c = "c-text-area-input" %}\n<div class="{{ c }}">\n    <label class="{{ c }}__label" for="{{ id }}">{{ label }}{% if required %} *{% endif %}</label>\n    <textarea class="{{ c }}__input"\n        id="{{ id }}" \n        name="{{ label }}" \n        placeholder="{{ placeholder }}"\n        {% if required %}required{% endif %}\n        rows="{{ rows }}"\n        onblur="validateInput(this)"\n        oninput="validateInputTyping(this)"\n        {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}></textarea>\n\n    {% if helper_text %}\n        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}\n    {% endif %}\n\n    {% bookshop "generic/form/error-message" id={{ id }} %}\n\n</div>';

  // bookshop-import-file:components/generic/form/text-area-input/text-area-input.eleventy.liquid__bookshop_file__
  var text_area_input_eleventy_default2 = text_area_input_eleventy_default;

  // component-library/components/generic/form/text-input/text-input.eleventy.liquid
  var text_input_eleventy_default = '{% assign_local c = "c-text-input" %}\n<div class="{{ c }}">\n    <label class="{{ c }}__label" for="{{ id }}">{{ label }}{% if required %} *{% endif %}</label>\n    <input class="{{ c }}__input"\n        onblur="validateInput(this)"\n        oninput="validateInputTyping(this)"\n        type="text" id="{{ id }}" \n        name="{{ label }}" \n        placeholder="{{ placeholder }}"\n        {% if required %}required{% endif %}\n        {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>\n\n    {% if helper_text %}\n        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}\n    {% endif %}\n\n    {% bookshop "generic/form/error-message" id={{ id }} %}\n</div>';

  // bookshop-import-file:components/generic/form/text-input/text-input.eleventy.liquid__bookshop_file__
  var text_input_eleventy_default2 = text_input_eleventy_default;

  // component-library/components/generic/form/time-input/time-input.eleventy.liquid
  var time_input_eleventy_default = `{% assign_local c = "c-time-input" %}
<div class="{{ c }}">
    <label class="{{ c }}__label" for="{{ id }}">{{ label }}</label>
    <input class="{{ c }}__input"
        type="time" id="{{ id }}" 
        name="{{ label }}" 
        value="{{ placeholder }}"
        {% if min %}min="{{ min | militaryTime }}"{% endif %}
        {% if max %}max="{{ max | militaryTime }}"{% endif %}
        onblur="validateInput(this)"
        oninput="validateInputTyping(this)"
        {% if helper_text %}aria-describedby="{{ id }}--helper"{% endif %}>
    <div class="{{ c }}__icon">{% bookshop "generic/hero-library-icon" hero_library_icon_name:"clock" icon_type:"outline" icon_size:'extra-small' rounded_border:false color:'white' %}</div>
    <div class="{{ c }}__dropdown-arrow">{% bookshop "generic/hero-library-icon" hero_library_icon_name:"chevron-down" icon_type:"outline" icon_size:'extra-small' rounded_border:false color:'white' %}</div>

    {% if helper_text %}
        {% bookshop "generic/form/helper-text" id={{ id }} helper_text={{ helper_text }} %}
    {% endif %}

    {% bookshop "generic/form/error-message" id={{ id }} %}
</div>`;

  // bookshop-import-file:components/generic/form/time-input/time-input.eleventy.liquid__bookshop_file__
  var time_input_eleventy_default2 = time_input_eleventy_default;

  // component-library/components/generic/heading/heading.eleventy.liquid
  var heading_eleventy_default = '{% assign_local c = "c-heading" %}\n\n<header class="{{ c }}">\n  {% if primary_heading %}\n    <{{primary_heading_hierarchy | default: "h2"}} class="{{ c }}__primary_heading">\n      {{ primary_heading }}\n    </{{primary_heading_hierarchy | default: "h2"}}>\n  {% endif %}\n\n  {% if eyebrow_headline and primary_heading %}\n    <{{eyebrow_headline_hierarchy | default: "h3"}} class="{{ c }}__eyebrow_heading">\n      {{ eyebrow_headline }}\n    </{{eyebrow_headline_hierarchy | default: "h3"}}>\n  {% elsif eyebrow_headline %}\n    <{{primary_heading_hierarchy | default: "h2"}} class="{{ c }}__eyebrow_heading">\n      {{ eyebrow_headline }}\n    </{{primary_heading_hierarchy | default: "h2"}}>\n  {% endif %}\n</header>';

  // bookshop-import-file:components/generic/heading/heading.eleventy.liquid__bookshop_file__
  var heading_eleventy_default2 = heading_eleventy_default;

  // component-library/components/generic/hero-library-icon/hero-library-icon.eleventy.liquid
  var hero_library_icon_eleventy_default = `{% assign_local c = "c-hero-library-icon" %}

{% assign_local icon_path = "/assets/images/icons/" | append: icon_type | append: "/" | append: hero_library_icon_name  | append: '.svg' %}

<span class="{{ c }} {{ c }}--{{ icon_size }} {{ c }}--{{ icon_type }} {% if rounded_border %}{{c}}--round{% endif %}" style="--c-hero-library-icon-color: {% if theme_color %}var(--main-text-color){% else %}{{ color }}{% endif %}">
    {% if env_bookshop_live %}
        <span class="{{ c }}__image" style="--url: url('{{ icon_path }}')"></span>
    {% else %}
        {{ '/src' | append: icon_path  | svgContents: "c-hero-library-icon__svg" }}
    {% endif %}
</span>
`;

  // bookshop-import-file:components/generic/hero-library-icon/hero-library-icon.eleventy.liquid__bookshop_file__
  var hero_library_icon_eleventy_default2 = hero_library_icon_eleventy_default;

  // component-library/components/generic/image/image.eleventy.liquid
  var image_eleventy_default = `{% if env_bookshop_live %}

    <img class="c-image c-image--live-editing" src="{{ image_path }}" alt="{{ image_alt }}">

{% elsif image_path contains 'http://' or image_path contains 'https://' %}

    <img class="c-image" src="{{ image_path }}" alt="{{ image_alt }}">

{% else %}

    {% image image_path, image_alt, 'c-image', image_sizes, true %}

{% endif %}`;

  // bookshop-import-file:components/generic/image/image.eleventy.liquid__bookshop_file__
  var image_eleventy_default2 = image_eleventy_default;

  // component-library/components/generic/labelled-icon/labelled-icon.eleventy.liquid
  var labelled_icon_eleventy_default = `{% assign_local c = 'c-labelled-icon' %}

<div class="{{ c }} {{ c }}--{{ arrangement }}">
    {% if icon %}        
      {% bookshop "{{icon._bookshop_name}}" bind:icon %}
    {% endif %}
    {% bookshop "generic/text-block" bind:text %}
</div>
`;

  // bookshop-import-file:components/generic/labelled-icon/labelled-icon.eleventy.liquid__bookshop_file__
  var labelled_icon_eleventy_default2 = labelled_icon_eleventy_default;

  // component-library/components/generic/left-right-block/left-right-block.eleventy.liquid
  var left_right_block_eleventy_default = '{% assign_local c = "c-left-right-block" %}\n\n{% capture social_icon_styles %}\n  icon_background_hover_color: "var(--main-text-color)"\n  icon_color: "var(--main-text-color)"\n  icon_hover_color: "var(--main-background-color)"\n{% endcapture %}\n{% assign_local social_icons_style = social_icon_styles | ymlify %}\n\n<div class="{{ c }} component {% if image_padding != true %}component--full-height{% endif %} {{ c }}--{{ image_alignment }}\n  component--{{ color_group }}">\n\n  <div class="{{ c }}__content">\n    <div class="{{ c }}__content-wrapper">\n      {% if display_social_icons %}\n        {% bookshop "generic/social-icons" social_media_links:site.social_media_links style:social_icons_style %}\n      {% endif %}\n      {% if heading %}\n        {% bookshop "generic/heading" bind:heading %}\n      {% endif %}\n      {% if text %}\n        <div class="{{ c }}__content-text">\n          {% bookshop "generic/text-block" bind:description %}\n        </div>\n      {% endif %}\n      {% if icons %}\n        <div class="{{ c }}__icons">\n          {% for icon in icons %}\n            {% bookshop "generic/labelled-icon" bind:icon %}\n          {% endfor %}\n        </div>\n      {% endif %}\n      {% if buttons and buttons.size > 0 %}\n        <div class="{{ c }}__buttons">\n          {% for button in buttons %}\n            {% bookshop "generic/button" bind:button %}\n          {% endfor %}\n        </div>\n      {% endif %}\n    </div>\n  </div>\n  <div class="{{ c }}__media {% if image_padding %}{{ c }}__media--auto-height{% endif %}">\n    {% if image %}\n      {% bookshop "generic/image" bind:image image_sizes:"(min-width: 769px) 700px, 100vw" %}\n    {% endif %}\n    {% if map %}\n      {% bookshop "simple/map" bind:map %}\n    {% endif %}\n  </div>\n</div>\n';

  // bookshop-import-file:components/generic/left-right-block/left-right-block.eleventy.liquid__bookshop_file__
  var left_right_block_eleventy_default2 = left_right_block_eleventy_default;

  // component-library/components/generic/notification/notification.eleventy.liquid
  var notification_eleventy_default = '<div class="c-notification">\n    {% bookshop "generic/hero-library-icon" hero_library_icon_name:"information-circle" icon_type:"solid" icon_size:"small" rounded_border:false color:"var(--notification-text-color, #163D91)" %}\n    <div class="c-notification__text">\n        {% if heading %}<p class="c-notification__text__heading">{{ heading }}</p>{% endif %}\n        {% if text %}<p>{{ text }}</p>{% endif %}\n    </div>\n</div>';

  // bookshop-import-file:components/generic/notification/notification.eleventy.liquid__bookshop_file__
  var notification_eleventy_default2 = notification_eleventy_default;

  // component-library/components/generic/social-icons/social-icons.eleventy.liquid
  var social_icons_eleventy_default = `<div class="c-social-icons" style="
	{% if style.icon_background_hover_color %}
		--hover-color: {{ style.icon_background_hover_color }};
	{% else %}
		--hover-color: var(--main-text-color, #F9F9FB);
	{% endif %}

	{% if style.icon_color and style.icon_color != '' %}
		--fill-color: {{ style.icon_color }};
	{% else %}
		--fill-color: var(--main-text-color, #F9F9FB);
	{% endif %}

	{% if style.icon_hover_color %}
		--fill-color-hover: {{ style.icon_hover_color }};
	{% else %}
		--fill-color-hover: var(--main-background-color, #3B3B3D);
	{% endif %}
">
	{% for item in social_media_links %}
		<a
			class="c-social-icons__icon"
			href="{{ item.link_url }}"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="{{ item.label | default: 'social media link' }}"
		>
			{% bookshop "generic/custom-icon" icon_path:item.icon_path icon_size:'small' icon_type:'solid' rounded_border:true no_border:true color:style.icon_color %}
		</a>
	{% endfor %}
</div>
`;

  // bookshop-import-file:components/generic/social-icons/social-icons.eleventy.liquid__bookshop_file__
  var social_icons_eleventy_default2 = social_icons_eleventy_default;

  // component-library/components/generic/text-block/text-block.eleventy.liquid
  var text_block_eleventy_default = '{% assign_local c = "c-text-block" %}\n\n{% if text %}\n    <div class="{{ c }}">    \n        {{ text | markdownify }}\n    </div>\n{% endif %}';

  // bookshop-import-file:components/generic/text-block/text-block.eleventy.liquid__bookshop_file__
  var text_block_eleventy_default2 = text_block_eleventy_default;

  // component-library/components/generic/video/video.eleventy.liquid
  var video_eleventy_default = `{% assign_local c = "c-video" %}
<div class="{{ c }}__video-aspect-wrapper">
  <div class="{{ c }}__video">
    {% if fallback_image.image_path %}
      {% bookshop "generic/image" image_path:fallback_image.image_path image_alt:fallback_image.image_alt image_sizes:image_sizes  %}
    {% endif %}

    {% if video_url %}
      {% if video_source == "Vimeo" %}
        {% assign_local url = video_url | remove: 'https://vimeo.com/' %}
            <iframe class="{{ c }}__vimeo" src="https://player.vimeo.com/video/{{ url }}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      {% elsif video_source == "YouTube" %}
        {% if video_url contains 'youtu.be' %}
          {% assign_local url = video_url | replace: 'https://youtu.be/', 'https://www.youtube.com/embed/' %}
        {% else %}
          {% assign_local url = video_url | replace: 'watch?v=', 'embed/' | replace: 'watch?time_continue=1&v=', 'embed/' | remove: '&feature=emb_logo' | remove: '&feature=youtu.be' %}
        {% endif %}
            <iframe class="{{ c }}__youtube" src="{{ url }}" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      {% endif %}
    {% endif %}

    </div>
</div>`;

  // bookshop-import-file:components/generic/video/video.eleventy.liquid__bookshop_file__
  var video_eleventy_default2 = video_eleventy_default;

  // component-library/components/sections/centered-large-asset/centered-large-asset.eleventy.liquid
  var centered_large_asset_eleventy_default = '{% assign_local c = "c-centered-large-asset" %}\n<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }} component component--{{ styles.color_group }}">\n    \n    {% if content.heading or content.description %}\n        <div class="component__heading {{ c }}__heading">\n            {% if content.heading %}{% bookshop "generic/heading" bind:content.heading %}{% endif %}\n            {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}\n        </div>\n    {% endif %}\n\n    {% if content.asset %}\n        <div class="{{ c }}__asset">\n            {% bookshop "{{content.asset._bookshop_name}}" bind:content.asset image_sizes:"(min-width: 769px) 960px, 91vw" %}\n        </div>\n    {% endif %}\n\n    {% if content.button %}\n        <div class="{{ c }}__button">{% bookshop "generic/button" bind:content.button %}</div>\n    {% endif %}\n</section>';

  // bookshop-import-file:components/sections/centered-large-asset/centered-large-asset.eleventy.liquid__bookshop_file__
  var centered_large_asset_eleventy_default2 = centered_large_asset_eleventy_default;

  // component-library/components/sections/embed/embed.eleventy.liquid
  var embed_eleventy_default = '{% assign_local c = "c-embed" %}\n<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }} {{ c }}--content-align-{{ styles.content_alignment }} component component--{{ styles.color_group }}">\n\n    {% if content.heading or content.description %}\n        <div class="component__heading {{ c }}__heading">\n            {% if content.heading %}{% bookshop "generic/heading" bind:content.heading %}{% endif %}\n            {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}\n        </div>\n    {% endif %}\n\n    {% if env_bookshop_live and content.show_note %}\n        <div class="{{ c }}__note">\n            {% bookshop "generic/notification" heading:"Embed Display" text:"If your embed contains a script tag, it will not show in live editing <br> This note only will only show in live editing" %}\n        </div>\n    {% endif %}\n    <div class="{{ c }}__embed">\n        {% bookshop "generic/custom-embed" bind:content.embed %}\n    </div>\n\n    {% if content.button %}\n        <div class="{{ c }}__button">{% bookshop "generic/button" bind:content.button %}</div>\n    {% endif %}\n</section>';

  // bookshop-import-file:components/sections/embed/embed.eleventy.liquid__bookshop_file__
  var embed_eleventy_default2 = embed_eleventy_default;

  // component-library/components/sections/form/form.eleventy.liquid
  var form_eleventy_default = '{% assign_local c = "c-form" %}\n<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }} {{ c }}--content-align-{{ styles.content_alignment }} component component--{{ styles.color_group }}" >\n\n    {% if content.heading or content.description %}\n        <div class="component__heading {{ c }}__heading">\n            {% if content.heading %}{% bookshop "generic/heading" bind:content.heading %}{% endif %}\n            {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}\n        </div>\n    {% endif %}\n\n    <div class="{{ c }}__form">\n        {% bookshop "simple/form-builder" bind:content.form %}\n    </div>\n</section>';

  // bookshop-import-file:components/sections/form/form.eleventy.liquid__bookshop_file__
  var form_eleventy_default2 = form_eleventy_default;

  // component-library/components/sections/gallery/gallery.eleventy.liquid
  var gallery_eleventy_default = '{% assign_local c = "c-grid--gallery-images" %}\n<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }} {{ c }}--content-align-{{ styles.content_alignment }} component component--{{ styles.color_group }}">\n    \n    {% if content.heading or content.description %}\n        <div class="component__heading {{ c }}__heading">\n            {% if content.heading %}{% bookshop "generic/heading" bind:content.heading %}{% endif %}\n            {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}\n        </div>\n    {% endif %}\n\n    <div class="{{ c }}__gallery">\n        {% bookshop "simple/image-gallery" bind:content.gallery show_note:content.show_note image_sizes:"(min-width: 769px) 368px, (min-width: 480px) 46vw, 78vw" %}\n    </div>\n</section>';

  // bookshop-import-file:components/sections/gallery/gallery.eleventy.liquid__bookshop_file__
  var gallery_eleventy_default2 = gallery_eleventy_default;

  // component-library/components/sections/hero--simple/hero--simple.eleventy.liquid
  var hero_simple_eleventy_default = '{% assign_local c = "c-hero--simple" %}\n<section class="{{ c }} {{ c }}--content-align-{{ styles.content_alignment }} component component--{{ styles.color_group }}">\n        {% capture heading %}\n            eyebrow_headline: {{content.heading.eyebrow_headline}}\n            eyebrow_headline_hierarchy: "h2"\n            primary_heading: {{content.heading.primary_heading}}\n            primary_heading_hierarchy: "h1"\n        {% endcapture %}\n        {% assign_local heading = heading | ymlify %}\n        <div class="component__heading {{ c }}__heading">\n            {% if content.heading %}{% bookshop "generic/heading" bind:heading %}{% endif %}\n            {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}\n        </div>\n</section>';

  // bookshop-import-file:components/sections/hero--simple/hero--simple.eleventy.liquid__bookshop_file__
  var hero_simple_eleventy_default2 = hero_simple_eleventy_default;

  // component-library/components/sections/hero/hero.eleventy.liquid
  var hero_eleventy_default = `{% assign_local c = "c-hero" %}
<section class="{{ c }} component component--{{ styles.color_group }} {% if styles.image_alignment =='left' %}{{ c }}--left-right-variant {{ c }}--image-left{% elsif styles.image_alignment =='right' %}{{ c }}--left-right-variant {{ c }}--image-right{% endif %} ">
    {% if content.image.image_path %}
        {% bookshop "generic/image" bind:content.image %}
    {% endif %}
    <div class="{{ c }}__cover"></div>
    <div class="{{ c }}__content">
        {% capture heading %}
            eyebrow_headline: {{content.heading.eyebrow_headline}}
            eyebrow_headline_hierarchy: "h2"
            primary_heading: {{content.heading.primary_heading}}
            primary_heading_hierarchy: "h1"
        {% endcapture %}
        {% assign_local heading = heading | ymlify %}
        {% if content.heading or content.description or content.button %}
            <div class="component__heading {{ c }}__heading">
                {% if content.heading %}{% bookshop "generic/heading" bind:heading %}{% endif %}
                {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}
            </div>
            {% if content.button %}
                <div class="{{ c }}__content__button">
                    {% bookshop "generic/button" bind:content.button %}
                </div>
            {% endif %}
        {% endif %}
    </div>
</section>`;

  // bookshop-import-file:components/sections/hero/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default2 = hero_eleventy_default;

  // component-library/components/sections/icon-cards/icon-cards.eleventy.liquid
  var icon_cards_eleventy_default = '{% assign grid_items = "" %} \n{% assign card_primary_heading_hierarchy = "h2" %}\n{% assign card_eyebrow_headline_hierarchy = "h3" %}\n{% if content.heading.primary_heading and content.heading.eyebrow_headline %}\n    {% assign card_primary_heading_hierarchy = "h4" %}\n    {% assign card_eyebrow_headline_hierarchy = "h5" %}\n{% elsif content.heading.primary_heading or content.heading.eyebrow_headline %}\n    {% assign card_primary_heading_hierarchy = "h3" %}\n    {% assign card_eyebrow_headline_hierarchy = "h4" %}\n{% endif %}\n\n{% for item in content.grid_items %}\n    {% if item.icon.hero_library_icon_name %}\n        {% capture imagery %}\n            _bookshop_name: generic/hero-library-icon\n            hero_library_icon_name: {{ item.icon.hero_library_icon_name }}\n            icon_size: small\n            icon_type: {{ item.icon.icon_type }}\n            rounded_border: false\n            theme_color: true\n        {% endcapture %}\n    {% else %}\n        {% capture imagery %}\n            _bookshop_name: generic/custom-icon\n            icon_path: {{ item.icon.icon_path }}\n            icon_size: small\n            icon_type: {{ item.icon.icon_type }}\n            rounded_border: false\n            theme_color: true\n        {% endcapture %}\n    {% endif %}\n    {% assign imagery = imagery | ymlify %}\n    {% capture card %}\n        - content:\n            id: {{ content.id }}\n            imagery: {{ imagery | json }}\n            heading: \n                eyebrow_headline: {{item.heading.eyebrow_headline}}\n                eyebrow_headline_hierarchy: {{ card_eyebrow_headline_hierarchy }}\n                primary_heading: {{item.heading.primary_heading}}\n                primary_heading_hierarchy: {{ card_primary_heading_hierarchy }}\n            description: "{{ item.description }}"\n            buttons: {{ item.buttons | json }}\n    {% endcapture %}\n    {% assign grid_items = grid_items | append: card %}\n{% endfor %}\n\n{% capture card_grid_content %}\n    id: {{ content.id }}\n    heading: {{ content.heading | json }}\n    description: "{{ content.description }}"\n    grid_items: {{ grid_items }}\n    buttons: {{ content.buttons | json }}\n{% endcapture %}\n{% assign_local card_grid_content = card_grid_content | ymlify %}\n\n{% bookshop "generic/card-grid" content:card_grid_content styles:styles %}';

  // bookshop-import-file:components/sections/icon-cards/icon-cards.eleventy.liquid__bookshop_file__
  var icon_cards_eleventy_default2 = icon_cards_eleventy_default;

  // component-library/components/sections/image-cards/image-cards.eleventy.liquid
  var image_cards_eleventy_default = '{% assign grid_items = "" %} \n{% assign card_primary_heading_hierarchy = "h2" %}\n{% assign card_eyebrow_headline_hierarchy = "h3" %}\n{% if content.heading.primary_heading and content.heading.eyebrow_headline %}\n    {% assign card_primary_heading_hierarchy = "h4" %}\n    {% assign card_eyebrow_headline_hierarchy = "h5" %}\n{% elsif content.heading.primary_heading or content.heading.eyebrow_headline %}\n    {% assign card_primary_heading_hierarchy = "h3" %}\n    {% assign card_eyebrow_headline_hierarchy = "h4" %}\n{% endif %}\n\n    \n{% for item in content.grid_items %}\n    {% capture image %}\n        _bookshop_name: {{ item.image._bookshop_name }}\n        image_path: {{ item.image.image_path }}\n        image_alt: {{ item.image.image_alt }}\n        image_sizes: "(min-width: 769px) 368px, (min-width: 480px) 63vw, 94vw"\n    {% endcapture %}\n    {% assign image = image | ymlify %}\n    {% capture card %}\n        - content:\n            id: {{ content.id }}\n            imagery: {{ image | json }}\n            heading: \n                eyebrow_headline: {{item.heading.eyebrow_headline}}\n                eyebrow_headline_hierarchy: {{ card_eyebrow_headline_hierarchy }}\n                primary_heading: {{item.heading.primary_heading}}\n                primary_heading_hierarchy: {{ card_primary_heading_hierarchy }}\n            description: "{{ item.description }}"\n            buttons: {{ item.buttons | json }}\n    {% endcapture %}\n    {% assign grid_items = grid_items | append: card %}\n{% endfor %}\n\n{% capture card_grid_content %}\n    id: {{ content.id }}\n    heading: {{ content.heading | json }}\n    description: "{{ content.description }}"\n    grid_items: {{ grid_items }}\n    buttons: {{ content.buttons | json }}\n{% endcapture %}\n{% assign_local card_grid_content = card_grid_content | ymlify %}\n\n{% bookshop "generic/card-grid" content:card_grid_content styles:styles %}';

  // bookshop-import-file:components/sections/image-cards/image-cards.eleventy.liquid__bookshop_file__
  var image_cards_eleventy_default2 = image_cards_eleventy_default;

  // component-library/components/sections/left-right-contact/left-right-contact.eleventy.liquid
  var left_right_contact_eleventy_default = `{% assign_local c = "c-left-right-block--featured-map" %}

{%  assign featured_map_icons = "" %}

{% capture heading %}
  primary_heading: {{ content.heading }}
{% endcapture %}
{% assign_local heading = heading | ymlify %}

{% for detail in content.contact_details %}
  {% capture labelled-icon %}
    - _bookshop_name: generic/labelled-icon
      arrangement: inline
      text: '{{ detail.text }}'
      icon:
        _bookshop_name: generic/hero-library-icon
        hero_library_icon_name: {{ detail.hero_library_icon_name }}
        icon_size: small
        icon_type: outline
        rounded_border: true
        theme_color: true
  {% endcapture %}
  {%  assign featured_map_icons = featured_map_icons | append: labelled-icon %}
{% endfor %}

{% assign featured_map_icons = featured_map_icons | ymlify %}

<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }}">
  {% bookshop "generic/left-right-block" display_social_icons:content.display_social_icons heading:heading text:content.description icons:featured_map_icons buttons:content.buttons map:content.map image_alignment:styles.image_alignment color_group:styles.color_group %}
</section>
`;

  // bookshop-import-file:components/sections/left-right-contact/left-right-contact.eleventy.liquid__bookshop_file__
  var left_right_contact_eleventy_default2 = left_right_contact_eleventy_default;

  // component-library/components/sections/left-right-labelled-icons/left-right-labelled-icons.eleventy.liquid
  var left_right_labelled_icons_eleventy_default = `{% assign_local c = "c-left-right-block--featured-icons" %}
{%  assign block_icons = "" %}

{% for icon_data in content.icons %}
  {% if icon_data.hero_library_icon_name %}
    {% capture labelled-icon %}
      - _bookshop_name: generic/labelled-icon
        arrangement: stacked
        text: '{{ icon_data.icon_text }}'
        icon:
          _bookshop_name: generic/hero-library-icon
          hero_library_icon_name: {{ icon_data.hero_library_icon_name }}
          icon_size: large
          icon_type: {{ icon_data.icon_type }}
          rounded_border: true
          theme_color: true
    {% endcapture %}
    {%  assign block_icons = block_icons | append: labelled-icon %}    
  {% else %}
    {% capture labelled-icon %}
      - bookshop: generic/labelled-icon
        arrangement: stacked
        text: {{ icon_data.icon_text }}
        icon:
          _bookshop_name: generic/custom-icon
          icon_path: {{ icon_data.icon_path }}
          icon_size: large
          icon_type: {{ icon_data.icon_type }}
          rounded_border: true
          theme_color: true
    {% endcapture %}
    {%  assign block_icons = block_icons | append: labelled-icon %}
  {% endif %}
{% endfor %}

{% assign block_icons = block_icons | ymlify %}

<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }}">
  {% bookshop "generic/left-right-block" heading:content.heading buttons:content.buttons icons:block_icons image:content.image image_alignment:styles.image_alignment color_group:styles.color_group %}
</section>`;

  // bookshop-import-file:components/sections/left-right-labelled-icons/left-right-labelled-icons.eleventy.liquid__bookshop_file__
  var left_right_labelled_icons_eleventy_default2 = left_right_labelled_icons_eleventy_default;

  // component-library/components/sections/left-right-simple/left-right-simple.eleventy.liquid
  var left_right_simple_eleventy_default = '{% assign_local c = "c-left-right-block--simple" %}\n\n<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }}">\n  {% bookshop "generic/left-right-block" heading:content.heading buttons:content.buttons text:content.description image:content.image image_alignment:styles.image_alignment color_group:styles.color_group image_padding:styles.image_padding %}\n</section>';

  // bookshop-import-file:components/sections/left-right-simple/left-right-simple.eleventy.liquid__bookshop_file__
  var left_right_simple_eleventy_default2 = left_right_simple_eleventy_default;

  // component-library/components/sections/left-right-testimonial/left-right-testimonial.eleventy.liquid
  var left_right_testimonial_eleventy_default = '{% assign_local c = "c-left-right-block--testimonial" %}\n\n{% capture heading %}\n  eyebrow_headline: {{ content.eyebrow_headline }}\n  primary_heading: "&ldquo;{{ content.quote }}&rdquo;"\n{% endcapture %}\n{% assign_local heading = heading | ymlify %}\n\n\n<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }}">\n  {% bookshop "generic/left-right-block" heading:heading buttons:content.buttons text:content.author_name image:content.image image_alignment:styles.image_alignment color_group:styles.color_group %}\n</section>';

  // bookshop-import-file:components/sections/left-right-testimonial/left-right-testimonial.eleventy.liquid__bookshop_file__
  var left_right_testimonial_eleventy_default2 = left_right_testimonial_eleventy_default;

  // component-library/components/sections/price-list/price-list.eleventy.liquid
  var price_list_eleventy_default = '{% assign_local c = "c-price-list" %}\n<section {% if content.id %}id="{{ content.id }}"{% endif %} class="{{ c }} {{ c }}--content-align-{{ styles.content_alignment }} component component--{{ styles.color_group }}">\n\n    {% if content.heading or content.description %}\n        <div class="component__heading {{ c }}__heading">\n            {% if content.heading %}{% bookshop "generic/heading" bind:content.heading %}{% endif %}\n            {% if content.description %}{% bookshop "generic/text-block" text:content.description %}{% endif %}\n        </div>\n    {% endif %}\n\n    <div class="{{ c }}__lists">\n        {% for list in content.lists %}\n            <h4 class="{{ c }}__lists__list__heading">{{ list.list_heading }}</h4>\n            <ul class="{{ c }}__lists__list">\n                {% for item in list.list_items %}\n                    <li class="{{ c }}__lists__list__item">\n                        <p class="{{ c }}__lists__list__item__label">{{ item.label }}</p>\n                        <span class="{{ c }}__lists__list__item__seperator"></span>\n                        <p class="{{ c }}__lists__list__item__detail">{{ item.detail }}</p>\n                    </li>\n                {% endfor %}\n            </ul>\n        {% endfor %}\n    </div>\n    {% if content.button %}\n        <div class="{{ c }}__button">\n            {% bookshop "generic/button" bind:content.button %}\n        </div>\n    {% endif %}\n</section>';

  // bookshop-import-file:components/sections/price-list/price-list.eleventy.liquid__bookshop_file__
  var price_list_eleventy_default2 = price_list_eleventy_default;

  // component-library/components/sections/simple-text-block/simple-text-block.eleventy.liquid
  var simple_text_block_eleventy_default = `{%  assign_local c = 'c-simple-text-block' %}


<section {% if content.id %}id="{{ content.id }}"{% endif %} class='{{c}} component component--{{ styles.color_group }}'>

{% if content.heading or content.text %}
    <div class='{{c}}__content'>
        {% bookshop "generic/heading" bind:content.heading %}
        {% if content.text %}{% bookshop "generic/text-block" bind:content.text %}{% endif %}
    </div>
{% endif %}
</section>
`;

  // bookshop-import-file:components/sections/simple-text-block/simple-text-block.eleventy.liquid__bookshop_file__
  var simple_text_block_eleventy_default2 = simple_text_block_eleventy_default;

  // component-library/components/simple/form-builder/form-builder.eleventy.liquid
  var form_builder_eleventy_default = '{% assign_local c = "c-form-builder" %}\n<form class="{{ c }}"\n    id="{{ id }}"\n    action="{{ success_page }}"\n    method="post"\n    novalidate\n    onsubmit="return validateFormSubmit(event, this)">\n\n    {% for element in form_elements %}\n        {% bookshop "{{element._bookshop_name}}" bind: element %}\n    {% endfor %}\n\n    <input type="text" name="_gotcha" style="display: none;">\n    {% if inbox_key %}<input type="hidden" name="inbox_key" value="{{ inbox_key }}">{% endif %}\n    {% if subject %}<input type="hidden" name="_subject" value="{{ subject }}">{% endif %}\n\n    <div class="{{ c }}__submit-button">{% bookshop "generic/button" bind:submit_button %}</div>\n</form>';

  // bookshop-import-file:components/simple/form-builder/form-builder.eleventy.liquid__bookshop_file__
  var form_builder_eleventy_default2 = form_builder_eleventy_default;

  // component-library/components/simple/image-gallery/image-gallery.eleventy.liquid
  var image_gallery_eleventy_default = `<div class="c-gallery">
    {% if env_bookshop_live %}
        {% if show_note %}
            {% bookshop "generic/notification" heading:"Gallery Tile Display" text:"All tiles and the 'Load more' button will be visible when live editing. However, the live site will display 6 (desktop) or 3 (mobile) images initially, with a 'Load more' button to load more tiles. <br> This note only will only show in live editing." %}
        {% endif %}
        <div class="c-gallery__tiles">
            {% for image in images %}
                <div class="c-gallery__tiles__tile">{% bookshop "generic/image" bind:image %}</div>
            {% endfor %}
        </div>
    {% else %}
        <div class="c-gallery__tiles">
            {% for image in images %}
                <div class="c-gallery__tiles__tile c-gallery__tiles__tile--hidden">{% bookshop "generic/image" bind:image %}</div>
            {% endfor %}
        </div>
    {% endif %}
    <div class="c-gallery__button">{% bookshop "generic/button" bind:button %}</div>
</div>`;

  // bookshop-import-file:components/simple/image-gallery/image-gallery.eleventy.liquid__bookshop_file__
  var image_gallery_eleventy_default2 = image_gallery_eleventy_default;

  // component-library/components/simple/map/map.eleventy.liquid
  var map_eleventy_default = `{% assign_local c = "c-map-embed" %}

{% if env_bookshop_live %}

<div class="{{c}} {{c}}--live-editing" style="background-image: url('/assets/images/map/placeholder.png'); background-size: cover">
    <div class="{{c}}--live-editing__message">
        <p>This is a placeholder map. The Map will not render in live editing.</p>
    </div>
</div>

{% else %}

    <div class="{{c}}" 
        id="map"
        maplat={{ latitude }}
        maplong={{ longitude }}
        mapzoom={{ zoom_level }}>
    </div>

{% endif %}`;

  // bookshop-import-file:components/simple/map/map.eleventy.liquid__bookshop_file__
  var map_eleventy_default2 = map_eleventy_default;

  // component-library/shared/eleventy/hero.eleventy.liquid
  var hero_eleventy_default3 = '{% if hero %}\n    {% bookshop {{hero._bookshop_name}} bind:hero %}\n{% elsif permalink != "/components/" %}\n    {% capture default_hero %}\n        content:\n            heading:\n                primary_heading: {{ title }}\n        styles:\n            content_alignment: center\n            color_group: "primary"\n    {% endcapture %}\n    {% assign default_hero = default_hero | ymlify %}\n    {% bookshop "sections/hero--simple" bind: default_hero %}\n{% endif %}';

  // bookshop-import-file:shared/eleventy/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default4 = hero_eleventy_default3;

  // component-library/shared/eleventy/page.eleventy.liquid
  var page_eleventy_default = '<div>\n{% for block in content_blocks %}\n    {% comment %} \n        # The bind parameter here passes the inner fields of block to the component.\n        # Imagine it like the ...spread operator in JavaScript.\n    {% endcomment %}\n    {% bookshop "{{block._bookshop_name}}" bind: block %}\n{% endfor %}\n</div>\n';

  // bookshop-import-file:shared/eleventy/page.eleventy.liquid__bookshop_file__
  var page_eleventy_default2 = page_eleventy_default;

  // bookshop-import-glob:(.eleventy.liquid)
  var files = {};
  files["components/generic/button/button.eleventy.liquid"] = button_eleventy_default2;
  files["components/generic/card-grid/card-grid.eleventy.liquid"] = card_grid_eleventy_default2;
  files["components/generic/card/card.eleventy.liquid"] = card_eleventy_default2;
  files["components/generic/custom-embed/custom-embed.eleventy.liquid"] = custom_embed_eleventy_default2;
  files["components/generic/custom-icon/custom-icon.eleventy.liquid"] = custom_icon_eleventy_default2;
  files["components/generic/form/checkbox-group/checkbox-group.eleventy.liquid"] = checkbox_group_eleventy_default2;
  files["components/generic/form/checkbox-input/checkbox-input.eleventy.liquid"] = checkbox_input_eleventy_default2;
  files["components/generic/form/country-select-input/country-select-input.eleventy.liquid"] = country_select_input_eleventy_default2;
  files["components/generic/form/date-input/date-input.eleventy.liquid"] = date_input_eleventy_default2;
  files["components/generic/form/email-input/email-input.eleventy.liquid"] = email_input_eleventy_default2;
  files["components/generic/form/error-message/error-message.eleventy.liquid"] = error_message_eleventy_default2;
  files["components/generic/form/helper-text/helper-text.eleventy.liquid"] = helper_text_eleventy_default2;
  files["components/generic/form/phone-input/phone-input.eleventy.liquid"] = phone_input_eleventy_default2;
  files["components/generic/form/radio-button-group/radio-button-group.eleventy.liquid"] = radio_button_group_eleventy_default2;
  files["components/generic/form/radio-input/radio-input.eleventy.liquid"] = radio_input_eleventy_default2;
  files["components/generic/form/section-break/section-break.eleventy.liquid"] = section_break_eleventy_default2;
  files["components/generic/form/section-heading/section-heading.eleventy.liquid"] = section_heading_eleventy_default2;
  files["components/generic/form/select-input/select-input.eleventy.liquid"] = select_input_eleventy_default2;
  files["components/generic/form/simple-text/simple-text.eleventy.liquid"] = simple_text_eleventy_default2;
  files["components/generic/form/text-area-input/text-area-input.eleventy.liquid"] = text_area_input_eleventy_default2;
  files["components/generic/form/text-input/text-input.eleventy.liquid"] = text_input_eleventy_default2;
  files["components/generic/form/time-input/time-input.eleventy.liquid"] = time_input_eleventy_default2;
  files["components/generic/heading/heading.eleventy.liquid"] = heading_eleventy_default2;
  files["components/generic/hero-library-icon/hero-library-icon.eleventy.liquid"] = hero_library_icon_eleventy_default2;
  files["components/generic/image/image.eleventy.liquid"] = image_eleventy_default2;
  files["components/generic/labelled-icon/labelled-icon.eleventy.liquid"] = labelled_icon_eleventy_default2;
  files["components/generic/left-right-block/left-right-block.eleventy.liquid"] = left_right_block_eleventy_default2;
  files["components/generic/notification/notification.eleventy.liquid"] = notification_eleventy_default2;
  files["components/generic/social-icons/social-icons.eleventy.liquid"] = social_icons_eleventy_default2;
  files["components/generic/text-block/text-block.eleventy.liquid"] = text_block_eleventy_default2;
  files["components/generic/video/video.eleventy.liquid"] = video_eleventy_default2;
  files["components/sections/centered-large-asset/centered-large-asset.eleventy.liquid"] = centered_large_asset_eleventy_default2;
  files["components/sections/embed/embed.eleventy.liquid"] = embed_eleventy_default2;
  files["components/sections/form/form.eleventy.liquid"] = form_eleventy_default2;
  files["components/sections/gallery/gallery.eleventy.liquid"] = gallery_eleventy_default2;
  files["components/sections/hero--simple/hero--simple.eleventy.liquid"] = hero_simple_eleventy_default2;
  files["components/sections/hero/hero.eleventy.liquid"] = hero_eleventy_default2;
  files["components/sections/icon-cards/icon-cards.eleventy.liquid"] = icon_cards_eleventy_default2;
  files["components/sections/image-cards/image-cards.eleventy.liquid"] = image_cards_eleventy_default2;
  files["components/sections/left-right-contact/left-right-contact.eleventy.liquid"] = left_right_contact_eleventy_default2;
  files["components/sections/left-right-labelled-icons/left-right-labelled-icons.eleventy.liquid"] = left_right_labelled_icons_eleventy_default2;
  files["components/sections/left-right-simple/left-right-simple.eleventy.liquid"] = left_right_simple_eleventy_default2;
  files["components/sections/left-right-testimonial/left-right-testimonial.eleventy.liquid"] = left_right_testimonial_eleventy_default2;
  files["components/sections/price-list/price-list.eleventy.liquid"] = price_list_eleventy_default2;
  files["components/sections/simple-text-block/simple-text-block.eleventy.liquid"] = simple_text_block_eleventy_default2;
  files["components/simple/form-builder/form-builder.eleventy.liquid"] = form_builder_eleventy_default2;
  files["components/simple/image-gallery/image-gallery.eleventy.liquid"] = image_gallery_eleventy_default2;
  files["components/simple/map/map.eleventy.liquid"] = map_eleventy_default2;
  files["shared/eleventy/hero.eleventy.liquid"] = hero_eleventy_default4;
  files["shared/eleventy/page.eleventy.liquid"] = page_eleventy_default2;
  var eleventy_default = files;

  // node_modules/liquidjs/dist/liquid.browser.mjs
  var Token2 = class {
    constructor(kind, input, begin, end, file) {
      this.kind = kind;
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
    getText() {
      return this.input.slice(this.begin, this.end);
    }
    getPosition() {
      let [row, col] = [1, 1];
      for (let i = 0; i < this.begin; i++) {
        if (this.input[i] === "\n") {
          row++;
          col = 1;
        } else
          col++;
      }
      return [row, col];
    }
    size() {
      return this.end - this.begin;
    }
  };
  var Drop2 = class {
    liquidMethodMissing(key) {
      return void 0;
    }
  };
  var toString$12 = Object.prototype.toString;
  var toLowerCase2 = String.prototype.toLowerCase;
  var hasOwnProperty2 = Object.hasOwnProperty;
  function isString2(value) {
    return typeof value === "string";
  }
  function isFunction2(value) {
    return typeof value === "function";
  }
  function stringify2(value) {
    value = toValue2(value);
    if (isString2(value))
      return value;
    if (isNil2(value))
      return "";
    if (isArray2(value))
      return value.map((x) => stringify2(x)).join("");
    return String(value);
  }
  function toArray2(val) {
    val = toValue2(val);
    if (isNil2(val))
      return [];
    if (isArray2(val))
      return val;
    return [val];
  }
  function toValue2(value) {
    return value instanceof Drop2 && isFunction2(value.valueOf) ? value.valueOf() : value;
  }
  function isNumber2(value) {
    return typeof value === "number";
  }
  function isNil2(value) {
    return value == null;
  }
  function isArray2(value) {
    return toString$12.call(value) === "[object Array]";
  }
  function last2(arr) {
    return arr[arr.length - 1];
  }
  function isObject2(value) {
    const type2 = typeof value;
    return value !== null && (type2 === "object" || type2 === "function");
  }
  function range2(start, stop, step = 1) {
    const arr = [];
    for (let i = start; i < stop; i += step) {
      arr.push(i);
    }
    return arr;
  }
  function padStart2(str2, length, ch = " ") {
    return pad2(str2, length, ch, (str3, ch2) => ch2 + str3);
  }
  function padEnd2(str2, length, ch = " ") {
    return pad2(str2, length, ch, (str3, ch2) => str3 + ch2);
  }
  function pad2(str2, length, ch, add) {
    str2 = String(str2);
    let n = length - str2.length;
    while (n-- > 0)
      str2 = add(str2, ch);
    return str2;
  }
  function identify2(val) {
    return val;
  }
  function changeCase2(str2) {
    const hasLowerCase = [...str2].some((ch) => ch >= "a" && ch <= "z");
    return hasLowerCase ? str2.toUpperCase() : str2.toLowerCase();
  }
  function ellipsis2(str2, N) {
    return str2.length > N ? str2.slice(0, N - 3) + "..." : str2;
  }
  function caseInsensitiveCompare2(a, b) {
    if (a == null && b == null)
      return 0;
    if (a == null)
      return 1;
    if (b == null)
      return -1;
    a = toLowerCase2.call(a);
    b = toLowerCase2.call(b);
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  }
  function argumentsToValue2(fn) {
    return function(...args) {
      return fn.call(this, ...args.map(toValue2));
    };
  }
  function escapeRegExp2(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  var TRAIT2 = "__liquidClass__";
  var LiquidError2 = class extends Error {
    constructor(err, token) {
      super(typeof err === "string" ? err : err.message);
      this.context = "";
      if (typeof err !== "string")
        Object.defineProperty(this, "originalError", { value: err, enumerable: false });
      Object.defineProperty(this, "token", { value: token, enumerable: false });
      Object.defineProperty(this, TRAIT2, { value: "LiquidError", enumerable: false });
    }
    update() {
      Object.defineProperty(this, "context", { value: mkContext2(this.token), enumerable: false });
      this.message = mkMessage2(this.message, this.token);
      this.stack = this.message + "\n" + this.context + "\n" + this.stack;
      if (this.originalError)
        this.stack += "\nFrom " + this.originalError.stack;
    }
    static is(obj) {
      return (obj === null || obj === void 0 ? void 0 : obj[TRAIT2]) === "LiquidError";
    }
  };
  var TokenizationError2 = class extends LiquidError2 {
    constructor(message, token) {
      super(message, token);
      this.name = "TokenizationError";
      super.update();
    }
  };
  var UndefinedVariableError2 = class extends LiquidError2 {
    constructor(err, token) {
      super(err, token);
      this.name = "UndefinedVariableError";
      this.message = err.message;
      super.update();
    }
  };
  var AssertionError2 = class extends Error {
    constructor(message) {
      super(message);
      this.name = "AssertionError";
      this.message = message + "";
    }
  };
  function mkContext2(token) {
    const [line, col] = token.getPosition();
    const lines = token.input.split("\n");
    const begin = Math.max(line - 2, 1);
    const end = Math.min(line + 3, lines.length);
    const context = range2(begin, end + 1).map((lineNumber) => {
      const rowIndicator = lineNumber === line ? ">> " : "   ";
      const num = padStart2(String(lineNumber), String(end).length);
      let text = `${rowIndicator}${num}| `;
      const colIndicator = lineNumber === line ? "\n" + padStart2("^", col + text.length) : "";
      text += lines[lineNumber - 1];
      text += colIndicator;
      return text;
    }).join("\n");
    return context;
  }
  function mkMessage2(msg, token) {
    if (token.file)
      msg += `, file:${token.file}`;
    const [line, col] = token.getPosition();
    msg += `, line:${line}, col:${col}`;
    return msg;
  }
  var TYPES2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  var WORD2 = 1;
  var BLANK2 = 4;
  var QUOTE2 = 8;
  var INLINE_BLANK2 = 16;
  var NUMBER2 = 32;
  var SIGN2 = 64;
  var PUNCTUATION2 = 128;
  function isWord2(char) {
    const code = char.charCodeAt(0);
    return code >= 128 ? !TYPES2[code] : !!(TYPES2[code] & WORD2);
  }
  TYPES2[160] = TYPES2[5760] = TYPES2[6158] = TYPES2[8192] = TYPES2[8193] = TYPES2[8194] = TYPES2[8195] = TYPES2[8196] = TYPES2[8197] = TYPES2[8198] = TYPES2[8199] = TYPES2[8200] = TYPES2[8201] = TYPES2[8202] = TYPES2[8232] = TYPES2[8233] = TYPES2[8239] = TYPES2[8287] = TYPES2[12288] = BLANK2;
  TYPES2[8220] = TYPES2[8221] = PUNCTUATION2;
  function assert2(predicate, message) {
    if (!predicate) {
      const msg = typeof message === "function" ? message() : message || `expect ${predicate} to be true`;
      throw new AssertionError2(msg);
    }
  }
  var NullDrop2 = class extends Drop2 {
    equals(value) {
      return isNil2(toValue2(value));
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return null;
    }
  };
  var EmptyDrop2 = class extends Drop2 {
    equals(value) {
      if (value instanceof EmptyDrop2)
        return false;
      value = toValue2(value);
      if (isString2(value) || isArray2(value))
        return value.length === 0;
      if (isObject2(value))
        return Object.keys(value).length === 0;
      return false;
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return "";
    }
  };
  var BlankDrop2 = class extends EmptyDrop2 {
    equals(value) {
      if (value === false)
        return true;
      if (isNil2(toValue2(value)))
        return true;
      if (isString2(value))
        return /^\s*$/.test(value);
      return super.equals(value);
    }
  };
  function isComparable2(arg) {
    return arg && isFunction2(arg.equals) && isFunction2(arg.gt) && isFunction2(arg.geq) && isFunction2(arg.lt) && isFunction2(arg.leq);
  }
  var nil2 = new NullDrop2();
  var literalValues2 = {
    "true": true,
    "false": false,
    "nil": nil2,
    "null": nil2,
    "empty": new EmptyDrop2(),
    "blank": new BlankDrop2()
  };
  function createTrie2(input) {
    const trie = {};
    for (const [name, data] of Object.entries(input)) {
      let node = trie;
      for (let i = 0; i < name.length; i++) {
        const c = name[i];
        node[c] = node[c] || {};
        if (i === name.length - 1 && isWord2(name[i])) {
          node[c].needBoundary = true;
        }
        node = node[c];
      }
      node.data = data;
      node.end = true;
    }
    return trie;
  }
  function __awaiter2(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve3) {
        resolve3(value);
      });
    }
    return new (P || (P = Promise))(function(resolve3, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  var rFormat2 = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
  function daysInMonth2(d) {
    const feb = isLeapYear2(d) ? 29 : 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  function getDayOfYear2(d) {
    let num = 0;
    for (let i = 0; i < d.getMonth(); ++i) {
      num += daysInMonth2(d)[i];
    }
    return num + d.getDate();
  }
  function getWeekOfYear2(d, startDay) {
    const now = getDayOfYear2(d) + (startDay - d.getDay());
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const then = 7 - jan1.getDay() + startDay;
    return String(Math.floor((now - then) / 7) + 1);
  }
  function isLeapYear2(d) {
    const year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
  }
  function ordinal2(d) {
    const date3 = d.getDate();
    if ([11, 12, 13].includes(date3))
      return "th";
    switch (date3 % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  function century2(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
  }
  var padWidths2 = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
  };
  var padSpaceChars2 = new Set("aAbBceklpP");
  function getTimezoneOffset2(d, opts) {
    const nOffset = Math.abs(d.getTimezoneOffset());
    const h = Math.floor(nOffset / 60);
    const m = nOffset % 60;
    return (d.getTimezoneOffset() > 0 ? "-" : "+") + padStart2(h, 2, "0") + (opts.flags[":"] ? ":" : "") + padStart2(m, 2, "0");
  }
  var formatCodes2 = {
    a: (d) => d.getShortWeekdayName(),
    A: (d) => d.getLongWeekdayName(),
    b: (d) => d.getShortMonthName(),
    B: (d) => d.getLongMonthName(),
    c: (d) => d.toLocaleString(),
    C: (d) => century2(d),
    d: (d) => d.getDate(),
    e: (d) => d.getDate(),
    H: (d) => d.getHours(),
    I: (d) => String(d.getHours() % 12 || 12),
    j: (d) => getDayOfYear2(d),
    k: (d) => d.getHours(),
    l: (d) => String(d.getHours() % 12 || 12),
    L: (d) => d.getMilliseconds(),
    m: (d) => d.getMonth() + 1,
    M: (d) => d.getMinutes(),
    N: (d, opts) => {
      const width = Number(opts.width) || 9;
      const str2 = String(d.getMilliseconds()).slice(0, width);
      return padEnd2(str2, width, "0");
    },
    p: (d) => d.getHours() < 12 ? "AM" : "PM",
    P: (d) => d.getHours() < 12 ? "am" : "pm",
    q: (d) => ordinal2(d),
    s: (d) => Math.round(d.getTime() / 1e3),
    S: (d) => d.getSeconds(),
    u: (d) => d.getDay() || 7,
    U: (d) => getWeekOfYear2(d, 0),
    w: (d) => d.getDay(),
    W: (d) => getWeekOfYear2(d, 1),
    x: (d) => d.toLocaleDateString(),
    X: (d) => d.toLocaleTimeString(),
    y: (d) => d.getFullYear().toString().slice(2, 4),
    Y: (d) => d.getFullYear(),
    z: getTimezoneOffset2,
    Z: (d, opts) => d.getTimeZoneName() || getTimezoneOffset2(d, opts),
    "t": () => "	",
    "n": () => "\n",
    "%": () => "%"
  };
  formatCodes2.h = formatCodes2.b;
  function strftime2(d, formatStr) {
    let output = "";
    let remaining = formatStr;
    let match;
    while (match = rFormat2.exec(remaining)) {
      output += remaining.slice(0, match.index);
      remaining = remaining.slice(match.index + match[0].length);
      output += format2(d, match);
    }
    return output + remaining;
  }
  function format2(d, match) {
    const [input, flagStr = "", width, modifier, conversion] = match;
    const convert = formatCodes2[conversion];
    if (!convert)
      return input;
    const flags = {};
    for (const flag of flagStr)
      flags[flag] = true;
    let ret = String(convert(d, { flags, width, modifier }));
    let padChar = padSpaceChars2.has(conversion) ? " " : "0";
    let padWidth = width || padWidths2[conversion] || 0;
    if (flags["^"])
      ret = ret.toUpperCase();
    else if (flags["#"])
      ret = changeCase2(ret);
    if (flags["_"])
      padChar = " ";
    else if (flags["0"])
      padChar = "0";
    if (flags["-"])
      padWidth = 0;
    return padStart2(ret, padWidth, padChar);
  }
  function getDateTimeFormat2() {
    return typeof Intl !== "undefined" ? Intl.DateTimeFormat : void 0;
  }
  var OneMinute2 = 6e4;
  var ISO8601_TIMEZONE_PATTERN2 = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
  var monthNames2 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var monthNamesShort2 = monthNames2.map((name) => name.slice(0, 3));
  var dayNames2 = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var dayNamesShort2 = dayNames2.map((name) => name.slice(0, 3));
  var LiquidDate2 = class {
    constructor(init, locale, timezone) {
      this.locale = locale;
      this.DateTimeFormat = getDateTimeFormat2();
      this.date = new Date(init);
      this.timezoneFixed = timezone !== void 0;
      if (timezone === void 0) {
        timezone = this.date.getTimezoneOffset();
      }
      this.timezoneOffset = isString2(timezone) ? LiquidDate2.getTimezoneOffset(timezone, this.date) : timezone;
      this.timezoneName = isString2(timezone) ? timezone : "";
      const diff = (this.date.getTimezoneOffset() - this.timezoneOffset) * OneMinute2;
      const time = this.date.getTime() + diff;
      this.displayDate = new Date(time);
    }
    getTime() {
      return this.displayDate.getTime();
    }
    getMilliseconds() {
      return this.displayDate.getMilliseconds();
    }
    getSeconds() {
      return this.displayDate.getSeconds();
    }
    getMinutes() {
      return this.displayDate.getMinutes();
    }
    getHours() {
      return this.displayDate.getHours();
    }
    getDay() {
      return this.displayDate.getDay();
    }
    getDate() {
      return this.displayDate.getDate();
    }
    getMonth() {
      return this.displayDate.getMonth();
    }
    getFullYear() {
      return this.displayDate.getFullYear();
    }
    toLocaleString(locale, init) {
      if (init === null || init === void 0 ? void 0 : init.timeZone) {
        return this.date.toLocaleString(locale, init);
      }
      return this.displayDate.toLocaleString(locale, init);
    }
    toLocaleTimeString(locale) {
      return this.displayDate.toLocaleTimeString(locale);
    }
    toLocaleDateString(locale) {
      return this.displayDate.toLocaleDateString(locale);
    }
    getTimezoneOffset() {
      return this.timezoneOffset;
    }
    getTimeZoneName() {
      if (this.timezoneFixed)
        return this.timezoneName;
      if (!this.DateTimeFormat)
        return;
      return this.DateTimeFormat().resolvedOptions().timeZone;
    }
    getLongMonthName() {
      var _a;
      return (_a = this.format({ month: "long" })) !== null && _a !== void 0 ? _a : monthNames2[this.getMonth()];
    }
    getShortMonthName() {
      var _a;
      return (_a = this.format({ month: "short" })) !== null && _a !== void 0 ? _a : monthNamesShort2[this.getMonth()];
    }
    getLongWeekdayName() {
      var _a;
      return (_a = this.format({ weekday: "long" })) !== null && _a !== void 0 ? _a : dayNames2[this.displayDate.getDay()];
    }
    getShortWeekdayName() {
      var _a;
      return (_a = this.format({ weekday: "short" })) !== null && _a !== void 0 ? _a : dayNamesShort2[this.displayDate.getDay()];
    }
    valid() {
      return !isNaN(this.getTime());
    }
    format(options) {
      return this.DateTimeFormat && this.DateTimeFormat(this.locale, options).format(this.displayDate);
    }
    static createDateFixedToTimezone(dateString, locale) {
      const m = dateString.match(ISO8601_TIMEZONE_PATTERN2);
      if (m && m[1] === "Z") {
        return new LiquidDate2(+new Date(dateString), locale, 0);
      }
      if (m && m[2] && m[3] && m[4]) {
        const [, , sign, hours, minutes] = m;
        const offset2 = (sign === "+" ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
        return new LiquidDate2(+new Date(dateString), locale, offset2);
      }
      return new LiquidDate2(dateString, locale);
    }
    static getTimezoneOffset(timezoneName, date3) {
      const localDateString = date3.toLocaleString("en-US", { timeZone: timezoneName });
      const utcDateString = date3.toLocaleString("en-US", { timeZone: "UTC" });
      const localDate = new Date(localDateString);
      const utcDate = new Date(utcDateString);
      return (+utcDate - +localDate) / (60 * 1e3);
    }
  };
  var DelimitedToken2 = class extends Token2 {
    constructor(kind, [contentBegin, contentEnd], input, begin, end, trimLeft3, trimRight3, file) {
      super(kind, input, begin, end, file);
      this.trimLeft = false;
      this.trimRight = false;
      const tl = input[contentBegin] === "-";
      const tr = input[contentEnd - 1] === "-";
      let l = tl ? contentBegin + 1 : contentBegin;
      let r = tr ? contentEnd - 1 : contentEnd;
      while (l < r && TYPES2[input.charCodeAt(l)] & BLANK2)
        l++;
      while (r > l && TYPES2[input.charCodeAt(r - 1)] & BLANK2)
        r--;
      this.contentRange = [l, r];
      this.trimLeft = tl || trimLeft3;
      this.trimRight = tr || trimRight3;
    }
    get content() {
      return this.input.slice(this.contentRange[0], this.contentRange[1]);
    }
  };
  var TagToken2 = class extends DelimitedToken2 {
    constructor(input, begin, end, options, file) {
      const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options;
      const [valueBegin, valueEnd] = [begin + tagDelimiterLeft.length, end - tagDelimiterRight.length];
      super(TokenKind2.Tag, [valueBegin, valueEnd], input, begin, end, trimTagLeft, trimTagRight, file);
      this.tokenizer = new Tokenizer2(input, options.operators, file, this.contentRange);
      this.name = this.tokenizer.readTagName();
      this.tokenizer.assert(this.name, `illegal tag syntax, tag name expected`);
      this.tokenizer.skipBlank();
    }
    get args() {
      return this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
    }
  };
  var OutputToken2 = class extends DelimitedToken2 {
    constructor(input, begin, end, options, file) {
      const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options;
      const valueRange = [begin + outputDelimiterLeft.length, end - outputDelimiterRight.length];
      super(TokenKind2.Output, valueRange, input, begin, end, trimOutputLeft, trimOutputRight, file);
    }
  };
  var HTMLToken2 = class extends Token2 {
    constructor(input, begin, end, file) {
      super(TokenKind2.HTML, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.trimLeft = 0;
      this.trimRight = 0;
    }
    getContent() {
      return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    }
  };
  var NumberToken2 = class extends Token2 {
    constructor(input, begin, end, file) {
      super(TokenKind2.Number, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = Number(this.getText());
    }
  };
  var IdentifierToken2 = class extends Token2 {
    constructor(input, begin, end, file) {
      super(TokenKind2.Word, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = this.getText();
    }
  };
  var LiteralToken2 = class extends Token2 {
    constructor(input, begin, end, file) {
      super(TokenKind2.Literal, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.literal = this.getText();
      this.content = literalValues2[this.literal];
    }
  };
  var operatorPrecedences2 = {
    "==": 2,
    "!=": 2,
    ">": 2,
    "<": 2,
    ">=": 2,
    "<=": 2,
    "contains": 2,
    "not": 1,
    "and": 0,
    "or": 0
  };
  var operatorTypes2 = {
    "==": 0,
    "!=": 0,
    ">": 0,
    "<": 0,
    ">=": 0,
    "<=": 0,
    "contains": 0,
    "not": 1,
    "and": 0,
    "or": 0
  };
  var OperatorToken2 = class extends Token2 {
    constructor(input, begin, end, file) {
      super(TokenKind2.Operator, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.operator = this.getText();
    }
    getPrecedence() {
      const key = this.getText();
      return key in operatorPrecedences2 ? operatorPrecedences2[key] : 1;
    }
  };
  var PropertyAccessToken2 = class extends Token2 {
    constructor(variable, props, input, begin, end, file) {
      super(TokenKind2.PropertyAccess, input, begin, end, file);
      this.variable = variable;
      this.props = props;
    }
  };
  var FilterToken2 = class extends Token2 {
    constructor(name, args, input, begin, end, file) {
      super(TokenKind2.Filter, input, begin, end, file);
      this.name = name;
      this.args = args;
    }
  };
  var HashToken2 = class extends Token2 {
    constructor(input, begin, end, name, value, file) {
      super(TokenKind2.Hash, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.name = name;
      this.value = value;
      this.file = file;
    }
  };
  var rHex2 = /[\da-fA-F]/;
  var rOct2 = /[0-7]/;
  var escapeChar2 = {
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	",
    v: "\v"
  };
  function hexVal2(c) {
    const code = c.charCodeAt(0);
    if (code >= 97)
      return code - 87;
    if (code >= 65)
      return code - 55;
    return code - 48;
  }
  function parseStringLiteral2(str2) {
    let ret = "";
    for (let i = 1; i < str2.length - 1; i++) {
      if (str2[i] !== "\\") {
        ret += str2[i];
        continue;
      }
      if (escapeChar2[str2[i + 1]] !== void 0) {
        ret += escapeChar2[str2[++i]];
      } else if (str2[i + 1] === "u") {
        let val = 0;
        let j = i + 2;
        while (j <= i + 5 && rHex2.test(str2[j])) {
          val = val * 16 + hexVal2(str2[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      } else if (!rOct2.test(str2[i + 1])) {
        ret += str2[++i];
      } else {
        let j = i + 1;
        let val = 0;
        while (j <= i + 3 && rOct2.test(str2[j])) {
          val = val * 8 + hexVal2(str2[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      }
    }
    return ret;
  }
  var QuotedToken2 = class extends Token2 {
    constructor(input, begin, end, file) {
      super(TokenKind2.Quoted, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = parseStringLiteral2(this.getText());
    }
  };
  var RangeToken2 = class extends Token2 {
    constructor(input, begin, end, lhs, rhs, file) {
      super(TokenKind2.Range, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.lhs = lhs;
      this.rhs = rhs;
      this.file = file;
    }
  };
  var LiquidTagToken2 = class extends DelimitedToken2 {
    constructor(input, begin, end, options, file) {
      super(TokenKind2.Tag, [begin, end], input, begin, end, false, false, file);
      this.tokenizer = new Tokenizer2(input, options.operators, file, this.contentRange);
      this.name = this.tokenizer.readTagName();
      this.tokenizer.assert(this.name, "illegal liquid tag syntax");
      this.tokenizer.skipBlank();
      this.args = this.tokenizer.remaining();
    }
  };
  var FilteredValueToken2 = class extends Token2 {
    constructor(initial, filters3, input, begin, end, file) {
      super(TokenKind2.FilteredValue, input, begin, end, file);
      this.initial = initial;
      this.filters = filters3;
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
  };
  var Expression2 = class {
    constructor(tokens) {
      this.postfix = [...toPostfix2(tokens)];
    }
    *evaluate(ctx, lenient) {
      assert2(ctx, "unable to evaluate: context not defined");
      const operands = [];
      for (const token of this.postfix) {
        if (isOperatorToken2(token)) {
          const r = operands.pop();
          let result;
          if (operatorTypes2[token.operator] === 1) {
            result = yield ctx.opts.operators[token.operator](r, ctx);
          } else {
            const l = operands.pop();
            result = yield ctx.opts.operators[token.operator](l, r, ctx);
          }
          operands.push(result);
        } else {
          operands.push(yield evalToken2(token, ctx, lenient));
        }
      }
      return operands[0];
    }
    valid() {
      return !!this.postfix.length;
    }
  };
  function* evalToken2(token, ctx, lenient = false) {
    if (!token)
      return;
    if ("content" in token)
      return token.content;
    if (isPropertyAccessToken2(token))
      return yield evalPropertyAccessToken2(token, ctx, lenient);
    if (isRangeToken2(token))
      return yield evalRangeToken2(token, ctx);
  }
  function* evalPropertyAccessToken2(token, ctx, lenient) {
    const props = [];
    for (const prop of token.props) {
      props.push(yield evalToken2(prop, ctx, false));
    }
    try {
      if (token.variable) {
        const variable = yield evalToken2(token.variable, ctx, lenient);
        return yield ctx._getFromScope(variable, props);
      } else {
        return yield ctx._get(props);
      }
    } catch (e) {
      if (lenient && e.name === "InternalUndefinedVariableError")
        return null;
      throw new UndefinedVariableError2(e, token);
    }
  }
  function* evalRangeToken2(token, ctx) {
    const low = yield evalToken2(token.lhs, ctx);
    const high = yield evalToken2(token.rhs, ctx);
    return range2(+low, +high + 1);
  }
  function* toPostfix2(tokens) {
    const ops = [];
    for (const token of tokens) {
      if (isOperatorToken2(token)) {
        while (ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence()) {
          yield ops.pop();
        }
        ops.push(token);
      } else
        yield token;
    }
    while (ops.length) {
      yield ops.pop();
    }
  }
  function isTruthy2(val, ctx) {
    return !isFalsy2(val, ctx);
  }
  function isFalsy2(val, ctx) {
    val = toValue2(val);
    if (ctx.opts.jsTruthy) {
      return !val;
    } else {
      return val === false || val === void 0 || val === null;
    }
  }
  var defaultOperators2 = {
    "==": equals2,
    "!=": (l, r) => !equals2(l, r),
    ">": (l, r) => {
      if (isComparable2(l))
        return l.gt(r);
      if (isComparable2(r))
        return r.lt(l);
      return toValue2(l) > toValue2(r);
    },
    "<": (l, r) => {
      if (isComparable2(l))
        return l.lt(r);
      if (isComparable2(r))
        return r.gt(l);
      return toValue2(l) < toValue2(r);
    },
    ">=": (l, r) => {
      if (isComparable2(l))
        return l.geq(r);
      if (isComparable2(r))
        return r.leq(l);
      return toValue2(l) >= toValue2(r);
    },
    "<=": (l, r) => {
      if (isComparable2(l))
        return l.leq(r);
      if (isComparable2(r))
        return r.geq(l);
      return toValue2(l) <= toValue2(r);
    },
    "contains": (l, r) => {
      l = toValue2(l);
      if (isArray2(l))
        return l.some((i) => equals2(i, r));
      if (isFunction2(l === null || l === void 0 ? void 0 : l.indexOf))
        return l.indexOf(toValue2(r)) > -1;
      return false;
    },
    "not": (v, ctx) => isFalsy2(toValue2(v), ctx),
    "and": (l, r, ctx) => isTruthy2(toValue2(l), ctx) && isTruthy2(toValue2(r), ctx),
    "or": (l, r, ctx) => isTruthy2(toValue2(l), ctx) || isTruthy2(toValue2(r), ctx)
  };
  function equals2(lhs, rhs) {
    if (isComparable2(lhs))
      return lhs.equals(rhs);
    if (isComparable2(rhs))
      return rhs.equals(lhs);
    lhs = toValue2(lhs);
    rhs = toValue2(rhs);
    if (isArray2(lhs)) {
      return isArray2(rhs) && arrayEquals2(lhs, rhs);
    }
    return lhs === rhs;
  }
  function arrayEquals2(lhs, rhs) {
    if (lhs.length !== rhs.length)
      return false;
    return !lhs.some((value, i) => !equals2(value, rhs[i]));
  }
  function domResolve2(root, path) {
    const base = document.createElement("base");
    base.href = root;
    const head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    const a = document.createElement("a");
    a.href = path;
    const resolved = a.href;
    head.removeChild(base);
    return resolved;
  }
  function resolve2(root, filepath, ext) {
    if (root.length && last2(root) !== "/")
      root += "/";
    const url = domResolve2(root, filepath);
    return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (str2, origin, path) => {
      const last3 = path.split("/").pop();
      if (/\.\w+$/.test(last3))
        return str2;
      return origin + path + ext;
    });
  }
  function readFile2(url) {
    return __awaiter2(this, void 0, void 0, function* () {
      return new Promise((resolve3, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve3(xhr.responseText);
          } else {
            reject(new Error(xhr.statusText));
          }
        };
        xhr.onerror = () => {
          reject(new Error("An error occurred whilst receiving the response."));
        };
        xhr.open("GET", url);
        xhr.send();
      });
    });
  }
  function readFileSync2(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status < 200 || xhr.status >= 300) {
      throw new Error(xhr.statusText);
    }
    return xhr.responseText;
  }
  function exists2(filepath) {
    return __awaiter2(this, void 0, void 0, function* () {
      return true;
    });
  }
  function existsSync2(filepath) {
    return true;
  }
  function dirname2(filepath) {
    return domResolve2(filepath, ".");
  }
  var sep2 = "/";
  var fs2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    resolve: resolve2,
    readFile: readFile2,
    readFileSync: readFileSync2,
    exists: exists2,
    existsSync: existsSync2,
    dirname: dirname2,
    sep: sep2
  });
  function defaultFilter2(value, defaultValue, ...args) {
    value = toValue2(value);
    if (isArray2(value) || isString2(value))
      return value.length ? value : defaultValue;
    if (value === false && new Map(args).get("allow_false"))
      return false;
    return isFalsy2(value, this.context) ? defaultValue : value;
  }
  function json2(value, space = 0) {
    return JSON.stringify(value, null, space);
  }
  function inspect2(value, space = 0) {
    const ancestors = [];
    return JSON.stringify(value, function(_key, value2) {
      if (typeof value2 !== "object" || value2 === null)
        return value2;
      while (ancestors.length > 0 && ancestors[ancestors.length - 1] !== this)
        ancestors.pop();
      if (ancestors.includes(value2))
        return "[Circular]";
      ancestors.push(value2);
      return value2;
    }, space);
  }
  function to_integer2(value) {
    return Number(value);
  }
  var raw2 = {
    raw: true,
    handler: identify2
  };
  var misc2 = {
    default: defaultFilter2,
    raw: raw2,
    jsonify: json2,
    to_integer: to_integer2,
    json: json2,
    inspect: inspect2
  };
  var escapeMap2 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  };
  var unescapeMap2 = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#34;": '"',
    "&#39;": "'"
  };
  function escape2(str2) {
    str2 = stringify2(str2);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/&|<|>|"|'/g, (m) => escapeMap2[m]);
  }
  function xml_escape2(str2) {
    return escape2.call(this, str2);
  }
  function unescape2(str2) {
    str2 = stringify2(str2);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/&(amp|lt|gt|#34|#39);/g, (m) => unescapeMap2[m]);
  }
  function escape_once2(str2) {
    return escape2.call(this, unescape2.call(this, str2));
  }
  function newline_to_br2(v) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/\r?\n/gm, "<br />\n");
  }
  function strip_html2(v) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<.*?>|<!--[\s\S]*?-->/g, "");
  }
  var htmlFilters2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    escape: escape2,
    xml_escape: xml_escape2,
    escape_once: escape_once2,
    newline_to_br: newline_to_br2,
    strip_html: strip_html2
  });
  var defaultOptions2 = {
    root: ["."],
    layouts: ["."],
    partials: ["."],
    relativeReference: true,
    jekyllInclude: false,
    keyValueSeparator: ":",
    cache: void 0,
    extname: "",
    fs: fs2,
    dynamicPartials: true,
    jsTruthy: false,
    dateFormat: "%A, %B %-e, %Y at %-l:%M %P %z",
    locale: "",
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: "{%",
    tagDelimiterRight: "%}",
    outputDelimiterLeft: "{{",
    outputDelimiterRight: "}}",
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    ownPropertyOnly: true,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators2,
    memoryLimit: Infinity,
    parseLimit: Infinity,
    renderLimit: Infinity
  };
  function whiteSpaceCtrl2(tokens, options) {
    let inRaw = false;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!isDelimitedToken2(token))
        continue;
      if (!inRaw && token.trimLeft) {
        trimLeft2(tokens[i - 1], options.greedy);
      }
      if (isTagToken2(token)) {
        if (token.name === "raw")
          inRaw = true;
        else if (token.name === "endraw")
          inRaw = false;
      }
      if (!inRaw && token.trimRight) {
        trimRight2(tokens[i + 1], options.greedy);
      }
    }
  }
  function trimLeft2(token, greedy) {
    if (!token || !isHTMLToken2(token))
      return;
    const mask = greedy ? BLANK2 : INLINE_BLANK2;
    while (TYPES2[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
      token.trimRight++;
  }
  function trimRight2(token, greedy) {
    if (!token || !isHTMLToken2(token))
      return;
    const mask = greedy ? BLANK2 : INLINE_BLANK2;
    while (TYPES2[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
      token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === "\n")
      token.trimLeft++;
  }
  var Tokenizer2 = class {
    constructor(input, operators = defaultOptions2.operators, file, range3) {
      this.input = input;
      this.file = file;
      this.rawBeginAt = -1;
      this.p = range3 ? range3[0] : 0;
      this.N = range3 ? range3[1] : input.length;
      this.opTrie = createTrie2(operators);
      this.literalTrie = createTrie2(literalValues2);
    }
    readExpression() {
      return new Expression2(this.readExpressionTokens());
    }
    *readExpressionTokens() {
      while (this.p < this.N) {
        const operator = this.readOperator();
        if (operator) {
          yield operator;
          continue;
        }
        const operand = this.readValue();
        if (operand) {
          yield operand;
          continue;
        }
        return;
      }
    }
    readOperator() {
      this.skipBlank();
      const end = this.matchTrie(this.opTrie);
      if (end === -1)
        return;
      return new OperatorToken2(this.input, this.p, this.p = end, this.file);
    }
    matchTrie(trie) {
      let node = trie;
      let i = this.p;
      let info;
      while (node[this.input[i]] && i < this.N) {
        node = node[this.input[i++]];
        if (node["end"])
          info = node;
      }
      if (!info)
        return -1;
      if (info["needBoundary"] && isWord2(this.peek(i - this.p)))
        return -1;
      return i;
    }
    readFilteredValue() {
      const begin = this.p;
      const initial = this.readExpression();
      this.assert(initial.valid(), `invalid value expression: ${this.snapshot()}`);
      const filters3 = this.readFilters();
      return new FilteredValueToken2(initial, filters3, this.input, begin, this.p, this.file);
    }
    readFilters() {
      const filters3 = [];
      while (true) {
        const filter = this.readFilter();
        if (!filter)
          return filters3;
        filters3.push(filter);
      }
    }
    readFilter() {
      this.skipBlank();
      if (this.end())
        return null;
      this.assert(this.read() === "|", `expected "|" before filter`);
      const name = this.readIdentifier();
      if (!name.size()) {
        this.assert(this.end(), `expected filter name`);
        return null;
      }
      const args = [];
      this.skipBlank();
      if (this.peek() === ":") {
        do {
          ++this.p;
          const arg = this.readFilterArg();
          arg && args.push(arg);
          this.skipBlank();
          this.assert(this.end() || this.peek() === "," || this.peek() === "|", () => `unexpected character ${this.snapshot()}`);
        } while (this.peek() === ",");
      } else if (this.peek() === "|" || this.end())
        ;
      else {
        throw this.error('expected ":" after filter name');
      }
      return new FilterToken2(name.getText(), args, this.input, name.begin, this.p, this.file);
    }
    readFilterArg() {
      const key = this.readValue();
      if (!key)
        return;
      this.skipBlank();
      if (this.peek() !== ":")
        return key;
      ++this.p;
      const value = this.readValue();
      return [key.getText(), value];
    }
    readTopLevelTokens(options = defaultOptions2) {
      const tokens = [];
      while (this.p < this.N) {
        const token = this.readTopLevelToken(options);
        tokens.push(token);
      }
      whiteSpaceCtrl2(tokens, options);
      return tokens;
    }
    readTopLevelToken(options) {
      const { tagDelimiterLeft, outputDelimiterLeft } = options;
      if (this.rawBeginAt > -1)
        return this.readEndrawOrRawContent(options);
      if (this.match(tagDelimiterLeft))
        return this.readTagToken(options);
      if (this.match(outputDelimiterLeft))
        return this.readOutputToken(options);
      return this.readHTMLToken([tagDelimiterLeft, outputDelimiterLeft]);
    }
    readHTMLToken(stopStrings) {
      const begin = this.p;
      while (this.p < this.N) {
        if (stopStrings.some((str2) => this.match(str2)))
          break;
        ++this.p;
      }
      return new HTMLToken2(this.input, begin, this.p, this.file);
    }
    readTagToken(options) {
      const { file, input } = this;
      const begin = this.p;
      if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
        throw this.error(`tag ${this.snapshot(begin)} not closed`, begin);
      }
      const token = new TagToken2(input, begin, this.p, options, file);
      if (token.name === "raw")
        this.rawBeginAt = begin;
      return token;
    }
    readToDelimiter(delimiter, respectQuoted = false) {
      this.skipBlank();
      while (this.p < this.N) {
        if (respectQuoted && this.peekType() & QUOTE2) {
          this.readQuoted();
          continue;
        }
        ++this.p;
        if (this.rmatch(delimiter))
          return this.p;
      }
      return -1;
    }
    readOutputToken(options = defaultOptions2) {
      const { file, input } = this;
      const { outputDelimiterRight } = options;
      const begin = this.p;
      if (this.readToDelimiter(outputDelimiterRight, true) === -1) {
        throw this.error(`output ${this.snapshot(begin)} not closed`, begin);
      }
      return new OutputToken2(input, begin, this.p, options, file);
    }
    readEndrawOrRawContent(options) {
      const { tagDelimiterLeft, tagDelimiterRight } = options;
      const begin = this.p;
      let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
      while (this.p < this.N) {
        if (this.readIdentifier().getText() !== "endraw") {
          leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
          continue;
        }
        while (this.p <= this.N) {
          if (this.rmatch(tagDelimiterRight)) {
            const end = this.p;
            if (begin === leftPos) {
              this.rawBeginAt = -1;
              return new TagToken2(this.input, begin, end, options, this.file);
            } else {
              this.p = leftPos;
              return new HTMLToken2(this.input, begin, leftPos, this.file);
            }
          }
          if (this.rmatch(tagDelimiterLeft))
            break;
          this.p++;
        }
      }
      throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
    }
    readLiquidTagTokens(options = defaultOptions2) {
      const tokens = [];
      while (this.p < this.N) {
        const token = this.readLiquidTagToken(options);
        token && tokens.push(token);
      }
      return tokens;
    }
    readLiquidTagToken(options) {
      this.skipBlank();
      if (this.end())
        return;
      const begin = this.p;
      this.readToDelimiter("\n");
      const end = this.p;
      return new LiquidTagToken2(this.input, begin, end, options, this.file);
    }
    error(msg, pos = this.p) {
      return new TokenizationError2(msg, new IdentifierToken2(this.input, pos, this.N, this.file));
    }
    assert(pred, msg, pos) {
      if (!pred)
        throw this.error(typeof msg === "function" ? msg() : msg, pos);
    }
    snapshot(begin = this.p) {
      return JSON.stringify(ellipsis2(this.input.slice(begin, this.N), 32));
    }
    readWord() {
      return this.readIdentifier();
    }
    readIdentifier() {
      this.skipBlank();
      const begin = this.p;
      while (!this.end() && isWord2(this.peek()))
        ++this.p;
      return new IdentifierToken2(this.input, begin, this.p, this.file);
    }
    readNonEmptyIdentifier() {
      const id = this.readIdentifier();
      return id.size() ? id : void 0;
    }
    readTagName() {
      this.skipBlank();
      if (this.input[this.p] === "#")
        return this.input.slice(this.p, ++this.p);
      return this.readIdentifier().getText();
    }
    readHashes(jekyllStyle) {
      const hashes = [];
      while (true) {
        const hash = this.readHash(jekyllStyle);
        if (!hash)
          return hashes;
        hashes.push(hash);
      }
    }
    readHash(jekyllStyle) {
      this.skipBlank();
      if (this.peek() === ",")
        ++this.p;
      const begin = this.p;
      const name = this.readNonEmptyIdentifier();
      if (!name)
        return;
      let value;
      this.skipBlank();
      const sep3 = isString2(jekyllStyle) ? jekyllStyle : jekyllStyle ? "=" : ":";
      if (this.peek() === sep3) {
        ++this.p;
        value = this.readValue();
      }
      return new HashToken2(this.input, begin, this.p, name, value, this.file);
    }
    remaining() {
      return this.input.slice(this.p, this.N);
    }
    advance(step = 1) {
      this.p += step;
    }
    end() {
      return this.p >= this.N;
    }
    read() {
      return this.input[this.p++];
    }
    readTo(end) {
      while (this.p < this.N) {
        ++this.p;
        if (this.rmatch(end))
          return this.p;
      }
      return -1;
    }
    readValue() {
      this.skipBlank();
      const begin = this.p;
      const variable = this.readLiteral() || this.readQuoted() || this.readRange() || this.readNumber();
      const props = this.readProperties(!variable);
      if (!props.length)
        return variable;
      return new PropertyAccessToken2(variable, props, this.input, begin, this.p);
    }
    readScopeValue() {
      this.skipBlank();
      const begin = this.p;
      const props = this.readProperties();
      if (!props.length)
        return void 0;
      return new PropertyAccessToken2(void 0, props, this.input, begin, this.p);
    }
    readProperties(isBegin = true) {
      const props = [];
      while (true) {
        if (this.peek() === "[") {
          this.p++;
          const prop = this.readValue() || new IdentifierToken2(this.input, this.p, this.p, this.file);
          this.assert(this.readTo("]") !== -1, "[ not closed");
          props.push(prop);
          continue;
        }
        if (isBegin && !props.length) {
          const prop = this.readNonEmptyIdentifier();
          if (prop) {
            props.push(prop);
            continue;
          }
        }
        if (this.peek() === "." && this.peek(1) !== ".") {
          this.p++;
          const prop = this.readNonEmptyIdentifier();
          if (!prop)
            break;
          props.push(prop);
          continue;
        }
        break;
      }
      return props;
    }
    readNumber() {
      this.skipBlank();
      let decimalFound = false;
      let digitFound = false;
      let n = 0;
      if (this.peekType() & SIGN2)
        n++;
      while (this.p + n <= this.N) {
        if (this.peekType(n) & NUMBER2) {
          digitFound = true;
          n++;
        } else if (this.peek(n) === "." && this.peek(n + 1) !== ".") {
          if (decimalFound || !digitFound)
            return;
          decimalFound = true;
          n++;
        } else
          break;
      }
      if (digitFound && !isWord2(this.peek(n))) {
        const num = new NumberToken2(this.input, this.p, this.p + n, this.file);
        this.advance(n);
        return num;
      }
    }
    readLiteral() {
      this.skipBlank();
      const end = this.matchTrie(this.literalTrie);
      if (end === -1)
        return;
      const literal = new LiteralToken2(this.input, this.p, end, this.file);
      this.p = end;
      return literal;
    }
    readRange() {
      this.skipBlank();
      const begin = this.p;
      if (this.peek() !== "(")
        return;
      ++this.p;
      const lhs = this.readValueOrThrow();
      this.p += 2;
      const rhs = this.readValueOrThrow();
      ++this.p;
      return new RangeToken2(this.input, begin, this.p, lhs, rhs, this.file);
    }
    readValueOrThrow() {
      const value = this.readValue();
      this.assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
      return value;
    }
    readQuoted() {
      this.skipBlank();
      const begin = this.p;
      if (!(this.peekType() & QUOTE2))
        return;
      ++this.p;
      let escaped = false;
      while (this.p < this.N) {
        ++this.p;
        if (this.input[this.p - 1] === this.input[begin] && !escaped)
          break;
        if (escaped)
          escaped = false;
        else if (this.input[this.p - 1] === "\\")
          escaped = true;
      }
      return new QuotedToken2(this.input, begin, this.p, this.file);
    }
    *readFileNameTemplate(options) {
      const { outputDelimiterLeft } = options;
      const htmlStopStrings = [",", " ", outputDelimiterLeft];
      const htmlStopStringSet = new Set(htmlStopStrings);
      while (this.p < this.N && !htmlStopStringSet.has(this.peek())) {
        yield this.match(outputDelimiterLeft) ? this.readOutputToken(options) : this.readHTMLToken(htmlStopStrings);
      }
    }
    match(word) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== this.input[this.p + i])
          return false;
      }
      return true;
    }
    rmatch(pattern) {
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
          return false;
      }
      return true;
    }
    peekType(n = 0) {
      return this.p + n >= this.N ? 0 : TYPES2[this.input.charCodeAt(this.p + n)];
    }
    peek(n = 0) {
      return this.p + n >= this.N ? "" : this.input[this.p + n];
    }
    skipBlank() {
      while (this.peekType() & BLANK2)
        ++this.p;
    }
  };
  function isKeyValuePair2(arr) {
    return isArray2(arr);
  }
  var Filter2 = class {
    constructor(token, options, liquid) {
      this.token = token;
      this.name = token.name;
      this.handler = isFunction2(options) ? options : isFunction2(options === null || options === void 0 ? void 0 : options.handler) ? options.handler : identify2;
      this.raw = !isFunction2(options) && !!(options === null || options === void 0 ? void 0 : options.raw);
      this.args = token.args;
      this.liquid = liquid;
    }
    *render(value, context) {
      const argv = [];
      for (const arg of this.args) {
        if (isKeyValuePair2(arg))
          argv.push([arg[0], yield evalToken2(arg[1], context)]);
        else
          argv.push(yield evalToken2(arg, context));
      }
      return yield this.handler.apply({ context, token: this.token, liquid: this.liquid }, [value, ...argv]);
    }
  };
  var Value2 = class {
    constructor(input, liquid) {
      this.filters = [];
      const token = typeof input === "string" ? new Tokenizer2(input, liquid.options.operators).readFilteredValue() : input;
      this.initial = token.initial;
      this.filters = token.filters.map((token2) => new Filter2(token2, this.getFilter(liquid, token2.name), liquid));
    }
    *value(ctx, lenient) {
      lenient = lenient || ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === "default";
      let val = yield this.initial.evaluate(ctx, lenient);
      for (const filter of this.filters) {
        val = yield filter.render(val, ctx);
      }
      return val;
    }
    getFilter(liquid, name) {
      const impl = liquid.filters[name];
      assert2(impl || !liquid.options.strictFilters, () => `undefined filter: ${name}`);
      return impl;
    }
  };
  var LookupType2;
  (function(LookupType3) {
    LookupType3["Partials"] = "partials";
    LookupType3["Layouts"] = "layouts";
    LookupType3["Root"] = "root";
  })(LookupType2 || (LookupType2 = {}));
  var TokenKind2;
  (function(TokenKind3) {
    TokenKind3[TokenKind3["Number"] = 1] = "Number";
    TokenKind3[TokenKind3["Literal"] = 2] = "Literal";
    TokenKind3[TokenKind3["Tag"] = 4] = "Tag";
    TokenKind3[TokenKind3["Output"] = 8] = "Output";
    TokenKind3[TokenKind3["HTML"] = 16] = "HTML";
    TokenKind3[TokenKind3["Filter"] = 32] = "Filter";
    TokenKind3[TokenKind3["Hash"] = 64] = "Hash";
    TokenKind3[TokenKind3["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind3[TokenKind3["Word"] = 256] = "Word";
    TokenKind3[TokenKind3["Range"] = 512] = "Range";
    TokenKind3[TokenKind3["Quoted"] = 1024] = "Quoted";
    TokenKind3[TokenKind3["Operator"] = 2048] = "Operator";
    TokenKind3[TokenKind3["FilteredValue"] = 4096] = "FilteredValue";
    TokenKind3[TokenKind3["Delimited"] = 12] = "Delimited";
  })(TokenKind2 || (TokenKind2 = {}));
  function isDelimitedToken2(val) {
    return !!(getKind2(val) & TokenKind2.Delimited);
  }
  function isOperatorToken2(val) {
    return getKind2(val) === TokenKind2.Operator;
  }
  function isHTMLToken2(val) {
    return getKind2(val) === TokenKind2.HTML;
  }
  function isTagToken2(val) {
    return getKind2(val) === TokenKind2.Tag;
  }
  function isPropertyAccessToken2(val) {
    return getKind2(val) === TokenKind2.PropertyAccess;
  }
  function isRangeToken2(val) {
    return getKind2(val) === TokenKind2.Range;
  }
  function getKind2(val) {
    return val ? val.kind : -1;
  }
  var BlockMode2;
  (function(BlockMode3) {
    BlockMode3[BlockMode3["OUTPUT"] = 0] = "OUTPUT";
    BlockMode3[BlockMode3["STORE"] = 1] = "STORE";
  })(BlockMode2 || (BlockMode2 = {}));
  var abs2 = argumentsToValue2(Math.abs);
  var at_least2 = argumentsToValue2(Math.max);
  var at_most2 = argumentsToValue2(Math.min);
  var ceil2 = argumentsToValue2(Math.ceil);
  var divided_by2 = argumentsToValue2((dividend, divisor, integerArithmetic = false) => integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor);
  var floor2 = argumentsToValue2(Math.floor);
  var minus2 = argumentsToValue2((v, arg) => v - arg);
  var modulo2 = argumentsToValue2((v, arg) => v % arg);
  var times2 = argumentsToValue2((v, arg) => v * arg);
  function round2(v, arg = 0) {
    v = toValue2(v);
    arg = toValue2(arg);
    const amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
  }
  function plus2(v, arg) {
    v = toValue2(v);
    arg = toValue2(arg);
    return Number(v) + Number(arg);
  }
  var mathFilters2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    abs: abs2,
    at_least: at_least2,
    at_most: at_most2,
    ceil: ceil2,
    divided_by: divided_by2,
    floor: floor2,
    minus: minus2,
    modulo: modulo2,
    times: times2,
    round: round2,
    plus: plus2
  });
  var url_decode2 = (x) => decodeURIComponent(stringify2(x)).replace(/\+/g, " ");
  var url_encode2 = (x) => encodeURIComponent(stringify2(x)).replace(/%20/g, "+");
  var cgi_escape2 = (x) => encodeURIComponent(stringify2(x)).replace(/%20/g, "+").replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
  var uri_escape2 = (x) => encodeURI(stringify2(x)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  var rSlugifyDefault2 = /[^\p{M}\p{L}\p{Nd}]+/ug;
  var rSlugifyReplacers2 = {
    "raw": /\s+/g,
    "default": rSlugifyDefault2,
    "pretty": /[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/ug,
    "ascii": /[^A-Za-z0-9]+/g,
    "latin": rSlugifyDefault2,
    "none": null
  };
  function slugify3(str2, mode = "default", cased = false) {
    str2 = stringify2(str2);
    const replacer = rSlugifyReplacers2[mode];
    if (replacer) {
      if (mode === "latin")
        str2 = removeAccents2(str2);
      str2 = str2.replace(replacer, "-").replace(/^-|-$/g, "");
    }
    return cased ? str2 : str2.toLowerCase();
  }
  function removeAccents2(str2) {
    return str2.replace(/[àáâãäå]/g, "a").replace(/[æ]/g, "ae").replace(/[ç]/g, "c").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[ð]/g, "d").replace(/[ñ]/g, "n").replace(/[òóôõöø]/g, "o").replace(/[ùúûü]/g, "u").replace(/[ýÿ]/g, "y").replace(/[ß]/g, "ss").replace(/[œ]/g, "oe").replace(/[þ]/g, "th").replace(/[ẞ]/g, "SS").replace(/[Œ]/g, "OE").replace(/[Þ]/g, "TH");
  }
  var urlFilters2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    url_decode: url_decode2,
    url_encode: url_encode2,
    cgi_escape: cgi_escape2,
    uri_escape: uri_escape2,
    slugify: slugify3
  });
  var join2 = argumentsToValue2(function(v, arg) {
    const array = toArray2(v);
    const sep3 = isNil2(arg) ? " " : stringify2(arg);
    const complexity = array.length * (1 + sep3.length);
    this.context.memoryLimit.use(complexity);
    return array.join(sep3);
  });
  var last$12 = argumentsToValue2((v) => isArray2(v) ? last2(v) : "");
  var first2 = argumentsToValue2((v) => isArray2(v) ? v[0] : "");
  var reverse2 = argumentsToValue2(function(v) {
    const array = toArray2(v);
    this.context.memoryLimit.use(array.length);
    return [...array].reverse();
  });
  function* sort2(arr, property) {
    const values = [];
    const array = toArray2(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
      values.push([
        item,
        property ? yield this.context._getFromScope(item, stringify2(property).split("."), false) : item
      ]);
    }
    return values.sort((lhs, rhs) => {
      const lvalue = lhs[1];
      const rvalue = rhs[1];
      return lvalue < rvalue ? -1 : lvalue > rvalue ? 1 : 0;
    }).map((tuple) => tuple[0]);
  }
  function sort_natural2(input, property) {
    const propertyString = stringify2(property);
    const compare = property === void 0 ? caseInsensitiveCompare2 : (lhs, rhs) => caseInsensitiveCompare2(lhs[propertyString], rhs[propertyString]);
    const array = toArray2(input);
    this.context.memoryLimit.use(array.length);
    return [...array].sort(compare);
  }
  var size2 = (v) => v && v.length || 0;
  function* map2(arr, property) {
    const results = [];
    const array = toArray2(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
      results.push(yield this.context._getFromScope(item, stringify2(property), false));
    }
    return results;
  }
  function* sum2(arr, property) {
    let sum3 = 0;
    const array = toArray2(arr);
    for (const item of array) {
      const data = Number(property ? yield this.context._getFromScope(item, stringify2(property), false) : item);
      sum3 += Number.isNaN(data) ? 0 : data;
    }
    return sum3;
  }
  function compact2(arr) {
    const array = toArray2(arr);
    this.context.memoryLimit.use(array.length);
    return array.filter((x) => !isNil2(toValue2(x)));
  }
  function concat2(v, arg = []) {
    const lhs = toArray2(v);
    const rhs = toArray2(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return lhs.concat(rhs);
  }
  function push2(v, arg) {
    return concat2.call(this, v, [arg]);
  }
  function unshift2(v, arg) {
    const array = toArray2(v);
    this.context.memoryLimit.use(array.length);
    const clone = [...array];
    clone.unshift(arg);
    return clone;
  }
  function pop2(v) {
    const clone = [...toArray2(v)];
    clone.pop();
    return clone;
  }
  function shift2(v) {
    const array = toArray2(v);
    this.context.memoryLimit.use(array.length);
    const clone = [...array];
    clone.shift();
    return clone;
  }
  function slice2(v, begin, length = 1) {
    v = toValue2(v);
    if (isNil2(v))
      return [];
    if (!isArray2(v))
      v = stringify2(v);
    begin = begin < 0 ? v.length + begin : begin;
    this.context.memoryLimit.use(length);
    return v.slice(begin, begin + length);
  }
  function* where2(arr, property, expected) {
    const values = [];
    arr = toArray2(arr);
    this.context.memoryLimit.use(arr.length);
    const token = new Tokenizer2(stringify2(property)).readScopeValue();
    for (const item of arr) {
      values.push(yield evalToken2(token, this.context.spawn(item)));
    }
    return arr.filter((_, i) => {
      if (expected === void 0)
        return isTruthy2(values[i], this.context);
      return equals2(values[i], expected);
    });
  }
  function* where_exp2(arr, itemName, exp) {
    const filtered = [];
    const keyTemplate = new Value2(stringify2(exp), this.liquid);
    const array = toArray2(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
      const value = yield keyTemplate.value(this.context.spawn({ [itemName]: item }));
      if (value)
        filtered.push(item);
    }
    return filtered;
  }
  function* group_by2(arr, property) {
    const map4 = new Map();
    arr = toArray2(arr);
    const token = new Tokenizer2(stringify2(property)).readScopeValue();
    this.context.memoryLimit.use(arr.length);
    for (const item of arr) {
      const key = yield evalToken2(token, this.context.spawn(item));
      if (!map4.has(key))
        map4.set(key, []);
      map4.get(key).push(item);
    }
    return [...map4.entries()].map(([name, items]) => ({ name, items }));
  }
  function* group_by_exp2(arr, itemName, exp) {
    const map4 = new Map();
    const keyTemplate = new Value2(stringify2(exp), this.liquid);
    arr = toArray2(arr);
    this.context.memoryLimit.use(arr.length);
    for (const item of arr) {
      const key = yield keyTemplate.value(this.context.spawn({ [itemName]: item }));
      if (!map4.has(key))
        map4.set(key, []);
      map4.get(key).push(item);
    }
    return [...map4.entries()].map(([name, items]) => ({ name, items }));
  }
  function* find2(arr, property, expected) {
    const token = new Tokenizer2(stringify2(property)).readScopeValue();
    const array = toArray2(arr);
    for (const item of array) {
      const value = yield evalToken2(token, this.context.spawn(item));
      if (equals2(value, expected))
        return item;
    }
  }
  function* find_exp2(arr, itemName, exp) {
    const predicate = new Value2(stringify2(exp), this.liquid);
    const array = toArray2(arr);
    for (const item of array) {
      const value = yield predicate.value(this.context.spawn({ [itemName]: item }));
      if (value)
        return item;
    }
  }
  function uniq2(arr) {
    arr = toArray2(arr);
    this.context.memoryLimit.use(arr.length);
    return [...new Set(arr)];
  }
  function sample2(v, count = 1) {
    v = toValue2(v);
    if (isNil2(v))
      return [];
    if (!isArray2(v))
      v = stringify2(v);
    this.context.memoryLimit.use(count);
    const shuffled = [...v].sort(() => Math.random() - 0.5);
    if (count === 1)
      return shuffled[0];
    return shuffled.slice(0, count);
  }
  var arrayFilters2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    join: join2,
    last: last$12,
    first: first2,
    reverse: reverse2,
    sort: sort2,
    sort_natural: sort_natural2,
    size: size2,
    map: map2,
    sum: sum2,
    compact: compact2,
    concat: concat2,
    push: push2,
    unshift: unshift2,
    pop: pop2,
    shift: shift2,
    slice: slice2,
    where: where2,
    where_exp: where_exp2,
    group_by: group_by2,
    group_by_exp: group_by_exp2,
    find: find2,
    find_exp: find_exp2,
    uniq: uniq2,
    sample: sample2
  });
  function date2(v, format3, timezoneOffset) {
    var _a, _b, _c;
    const size3 = ((_a = v === null || v === void 0 ? void 0 : v.length) !== null && _a !== void 0 ? _a : 0) + ((_b = format3 === null || format3 === void 0 ? void 0 : format3.length) !== null && _b !== void 0 ? _b : 0) + ((_c = timezoneOffset === null || timezoneOffset === void 0 ? void 0 : timezoneOffset.length) !== null && _c !== void 0 ? _c : 0);
    this.context.memoryLimit.use(size3);
    const date3 = parseDate2(v, this.context.opts, timezoneOffset);
    if (!date3)
      return v;
    format3 = toValue2(format3);
    format3 = isNil2(format3) ? this.context.opts.dateFormat : stringify2(format3);
    return strftime2(date3, format3);
  }
  function date_to_xmlschema2(v) {
    return date2.call(this, v, "%Y-%m-%dT%H:%M:%S%:z");
  }
  function date_to_rfc8222(v) {
    return date2.call(this, v, "%a, %d %b %Y %H:%M:%S %z");
  }
  function date_to_string2(v, type2, style) {
    return stringify_date2.call(this, v, "%b", type2, style);
  }
  function date_to_long_string2(v, type2, style) {
    return stringify_date2.call(this, v, "%B", type2, style);
  }
  function stringify_date2(v, month_type, type2, style) {
    const date3 = parseDate2(v, this.context.opts);
    if (!date3)
      return v;
    if (type2 === "ordinal") {
      const d = date3.getDate();
      return style === "US" ? strftime2(date3, `${month_type} ${d}%q, %Y`) : strftime2(date3, `${d}%q ${month_type} %Y`);
    }
    return strftime2(date3, `%d ${month_type} %Y`);
  }
  function parseDate2(v, opts, timezoneOffset) {
    let date3;
    const defaultTimezoneOffset = timezoneOffset !== null && timezoneOffset !== void 0 ? timezoneOffset : opts.timezoneOffset;
    const locale = opts.locale;
    v = toValue2(v);
    if (v === "now" || v === "today") {
      date3 = new LiquidDate2(Date.now(), locale, defaultTimezoneOffset);
    } else if (isNumber2(v)) {
      date3 = new LiquidDate2(v * 1e3, locale, defaultTimezoneOffset);
    } else if (isString2(v)) {
      if (/^\d+$/.test(v)) {
        date3 = new LiquidDate2(+v * 1e3, locale, defaultTimezoneOffset);
      } else if (opts.preserveTimezones && timezoneOffset === void 0) {
        date3 = LiquidDate2.createDateFixedToTimezone(v, locale);
      } else {
        date3 = new LiquidDate2(v, locale, defaultTimezoneOffset);
      }
    } else {
      date3 = new LiquidDate2(v, locale, defaultTimezoneOffset);
    }
    return date3.valid() ? date3 : void 0;
  }
  var dateFilters2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    date: date2,
    date_to_xmlschema: date_to_xmlschema2,
    date_to_rfc822: date_to_rfc8222,
    date_to_string: date_to_string2,
    date_to_long_string: date_to_long_string2
  });
  var rCJKWord2 = /[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu;
  var rNonCJKWord2 = /[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;
  function append2(v, arg) {
    assert2(arguments.length === 2, "append expect 2 arguments");
    const lhs = stringify2(v);
    const rhs = stringify2(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return lhs + rhs;
  }
  function prepend2(v, arg) {
    assert2(arguments.length === 2, "prepend expect 2 arguments");
    const lhs = stringify2(v);
    const rhs = stringify2(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return rhs + lhs;
  }
  function lstrip2(v, chars) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    if (chars) {
      chars = escapeRegExp2(stringify2(chars));
      return str2.replace(new RegExp(`^[${chars}]+`, "g"), "");
    }
    return str2.replace(/^\s+/, "");
  }
  function downcase2(v) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.toLowerCase();
  }
  function upcase2(v) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return stringify2(str2).toUpperCase();
  }
  function remove2(v, arg) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.split(stringify2(arg)).join("");
  }
  function remove_first2(v, l) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(stringify2(l), "");
  }
  function remove_last2(v, l) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    const pattern = stringify2(l);
    const index = str2.lastIndexOf(pattern);
    if (index === -1)
      return str2;
    return str2.substring(0, index) + str2.substring(index + pattern.length);
  }
  function rstrip2(str2, chars) {
    str2 = stringify2(str2);
    this.context.memoryLimit.use(str2.length);
    if (chars) {
      chars = escapeRegExp2(stringify2(chars));
      return str2.replace(new RegExp(`[${chars}]+$`, "g"), "");
    }
    return str2.replace(/\s+$/, "");
  }
  function split2(v, arg) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    const arr = str2.split(stringify2(arg));
    while (arr.length && arr[arr.length - 1] === "")
      arr.pop();
    return arr;
  }
  function strip2(v, chars) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    if (chars) {
      chars = escapeRegExp2(stringify2(chars));
      return str2.replace(new RegExp(`^[${chars}]+`, "g"), "").replace(new RegExp(`[${chars}]+$`, "g"), "");
    }
    return str2.trim();
  }
  function strip_newlines2(v) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/\r?\n/gm, "");
  }
  function capitalize2(str2) {
    str2 = stringify2(str2);
    this.context.memoryLimit.use(str2.length);
    return str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase();
  }
  function replace2(v, pattern, replacement) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.split(stringify2(pattern)).join(replacement);
  }
  function replace_first2(v, arg1, arg2) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(stringify2(arg1), arg2);
  }
  function replace_last2(v, arg1, arg2) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    const pattern = stringify2(arg1);
    const index = str2.lastIndexOf(pattern);
    if (index === -1)
      return str2;
    const replacement = stringify2(arg2);
    return str2.substring(0, index) + replacement + str2.substring(index + pattern.length);
  }
  function truncate2(v, l = 50, o = "...") {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    if (str2.length <= l)
      return v;
    return str2.substring(0, l - o.length) + o;
  }
  function truncatewords2(v, words = 15, o = "...") {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    const arr = str2.split(/\s+/);
    if (words <= 0)
      words = 1;
    let ret = arr.slice(0, words).join(" ");
    if (arr.length >= words)
      ret += o;
    return ret;
  }
  function normalize_whitespace2(v) {
    const str2 = stringify2(v);
    this.context.memoryLimit.use(str2.length);
    return str2.replace(/\s+/g, " ");
  }
  function number_of_words2(input, mode) {
    const str2 = stringify2(input);
    this.context.memoryLimit.use(str2.length);
    input = str2.trim();
    if (!input)
      return 0;
    switch (mode) {
      case "cjk":
        return (input.match(rCJKWord2) || []).length + (input.match(rNonCJKWord2) || []).length;
      case "auto":
        return rCJKWord2.test(input) ? input.match(rCJKWord2).length + (input.match(rNonCJKWord2) || []).length : input.split(/\s+/).length;
      default:
        return input.split(/\s+/).length;
    }
  }
  function array_to_sentence_string2(array, connector = "and") {
    this.context.memoryLimit.use(array.length);
    switch (array.length) {
      case 0:
        return "";
      case 1:
        return array[0];
      case 2:
        return `${array[0]} ${connector} ${array[1]}`;
      default:
        return `${array.slice(0, -1).join(", ")}, ${connector} ${array[array.length - 1]}`;
    }
  }
  var stringFilters2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    append: append2,
    prepend: prepend2,
    lstrip: lstrip2,
    downcase: downcase2,
    upcase: upcase2,
    remove: remove2,
    remove_first: remove_first2,
    remove_last: remove_last2,
    rstrip: rstrip2,
    split: split2,
    strip: strip2,
    strip_newlines: strip_newlines2,
    capitalize: capitalize2,
    replace: replace2,
    replace_first: replace_first2,
    replace_last: replace_last2,
    truncate: truncate2,
    truncatewords: truncatewords2,
    normalize_whitespace: normalize_whitespace2,
    number_of_words: number_of_words2,
    array_to_sentence_string: array_to_sentence_string2
  });
  var filters2 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, htmlFilters2), mathFilters2), urlFilters2), arrayFilters2), dateFilters2), stringFilters2), misc2);

  // component-library/bookshop/assign_local.js
  function assign_local_default() {
    this.registerTag("assign_local", {
      parse: function(token) {
        const tokenizer = new Tokenizer2(token.args, this.liquid.options.operatorsTrie);
        this.key = tokenizer.readIdentifier().content;
        tokenizer.skipBlank();
        assert2(tokenizer.peek() === "=", () => `illegal token ${token.getText()}`);
        tokenizer.advance();
        this.value = tokenizer.remaining();
      },
      render: function(ctx) {
        ctx.scopes[ctx.scopes.length - 1][this.key] = this.liquid.evalValueSync(this.value, ctx);
      }
    });
  }

  // component-library/bookshop/image.js
  function image_default() {
    this.registerTag("image", {
      parse: () => {
      },
      render: () => {
      }
    });
  }

  // component-library/bookshop/military_time.js
  function military_time_default(Liquid2) {
    this.registerFilter("militaryTime", (value) => {
      const [time, period] = value.split(" ");
      const [hour, minute] = time.split(":");
      let formattedHour = parseInt(hour);
      if (period === "pm" || period === "PM") {
        formattedHour += 12;
      }
      return `${formattedHour}:${minute}`;
    });
  }

  // node_modules/js-yaml/dist/js-yaml.mjs
  function isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
  }
  function isObject3(subject) {
    return typeof subject === "object" && subject !== null;
  }
  function toArray3(sequence) {
    if (Array.isArray(sequence))
      return sequence;
    else if (isNothing(sequence))
      return [];
    return [sequence];
  }
  function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
      sourceKeys = Object.keys(source);
      for (index = 0, length = sourceKeys.length; index < length; index += 1) {
        key = sourceKeys[index];
        target[key] = source[key];
      }
    }
    return target;
  }
  function repeat(string, count) {
    var result = "", cycle;
    for (cycle = 0; cycle < count; cycle += 1) {
      result += string;
    }
    return result;
  }
  function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
  }
  var isNothing_1 = isNothing;
  var isObject_1 = isObject3;
  var toArray_1 = toArray3;
  var repeat_1 = repeat;
  var isNegativeZero_1 = isNegativeZero;
  var extend_1 = extend;
  var common = {
    isNothing: isNothing_1,
    isObject: isObject_1,
    toArray: toArray_1,
    repeat: repeat_1,
    isNegativeZero: isNegativeZero_1,
    extend: extend_1
  };
  function formatError(exception2, compact3) {
    var where3 = "", message = exception2.reason || "(unknown reason)";
    if (!exception2.mark)
      return message;
    if (exception2.mark.name) {
      where3 += 'in "' + exception2.mark.name + '" ';
    }
    where3 += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
    if (!compact3 && exception2.mark.snippet) {
      where3 += "\n\n" + exception2.mark.snippet;
    }
    return message + " " + where3;
  }
  function YAMLException$1(reason, mark) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = formatError(this, false);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack || "";
    }
  }
  YAMLException$1.prototype = Object.create(Error.prototype);
  YAMLException$1.prototype.constructor = YAMLException$1;
  YAMLException$1.prototype.toString = function toString2(compact3) {
    return this.name + ": " + formatError(this, compact3);
  };
  var exception = YAMLException$1;
  function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
    var head = "";
    var tail = "";
    var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
    if (position - lineStart > maxHalfLength) {
      head = " ... ";
      lineStart = position - maxHalfLength + head.length;
    }
    if (lineEnd - position > maxHalfLength) {
      tail = " ...";
      lineEnd = position + maxHalfLength - tail.length;
    }
    return {
      str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
      pos: position - lineStart + head.length
    };
  }
  function padStart3(string, max) {
    return common.repeat(" ", max - string.length) + string;
  }
  function makeSnippet(mark, options) {
    options = Object.create(options || null);
    if (!mark.buffer)
      return null;
    if (!options.maxLength)
      options.maxLength = 79;
    if (typeof options.indent !== "number")
      options.indent = 1;
    if (typeof options.linesBefore !== "number")
      options.linesBefore = 3;
    if (typeof options.linesAfter !== "number")
      options.linesAfter = 2;
    var re = /\r?\n|\r|\0/g;
    var lineStarts = [0];
    var lineEnds = [];
    var match;
    var foundLineNo = -1;
    while (match = re.exec(mark.buffer)) {
      lineEnds.push(match.index);
      lineStarts.push(match.index + match[0].length);
      if (mark.position <= match.index && foundLineNo < 0) {
        foundLineNo = lineStarts.length - 2;
      }
    }
    if (foundLineNo < 0)
      foundLineNo = lineStarts.length - 1;
    var result = "", i, line;
    var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
    var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
    for (i = 1; i <= options.linesBefore; i++) {
      if (foundLineNo - i < 0)
        break;
      line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
      result = common.repeat(" ", options.indent) + padStart3((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
    }
    line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
    result += common.repeat(" ", options.indent) + padStart3((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
    for (i = 1; i <= options.linesAfter; i++) {
      if (foundLineNo + i >= lineEnds.length)
        break;
      line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
      result += common.repeat(" ", options.indent) + padStart3((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    }
    return result.replace(/\n$/, "");
  }
  var snippet = makeSnippet;
  var TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
  ];
  var YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function compileStyleAliases(map4) {
    var result = {};
    if (map4 !== null) {
      Object.keys(map4).forEach(function(style) {
        map4[style].forEach(function(alias) {
          result[String(alias)] = style;
        });
      });
    }
    return result;
  }
  function Type$1(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
      if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
        throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
      }
    });
    this.options = options;
    this.tag = tag;
    this.kind = options["kind"] || null;
    this.resolve = options["resolve"] || function() {
      return true;
    };
    this.construct = options["construct"] || function(data) {
      return data;
    };
    this.instanceOf = options["instanceOf"] || null;
    this.predicate = options["predicate"] || null;
    this.represent = options["represent"] || null;
    this.representName = options["representName"] || null;
    this.defaultStyle = options["defaultStyle"] || null;
    this.multi = options["multi"] || false;
    this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
      throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
  }
  var type = Type$1;
  function compileList(schema2, name) {
    var result = [];
    schema2[name].forEach(function(currentType) {
      var newIndex = result.length;
      result.forEach(function(previousType, previousIndex) {
        if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
          newIndex = previousIndex;
        }
      });
      result[newIndex] = currentType;
    });
    return result;
  }
  function compileMap() {
    var result = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    }, index, length;
    function collectType(type2) {
      if (type2.multi) {
        result.multi[type2.kind].push(type2);
        result.multi["fallback"].push(type2);
      } else {
        result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
      }
    }
    for (index = 0, length = arguments.length; index < length; index += 1) {
      arguments[index].forEach(collectType);
    }
    return result;
  }
  function Schema$1(definition) {
    return this.extend(definition);
  }
  Schema$1.prototype.extend = function extend2(definition) {
    var implicit = [];
    var explicit = [];
    if (definition instanceof type) {
      explicit.push(definition);
    } else if (Array.isArray(definition)) {
      explicit = explicit.concat(definition);
    } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
      if (definition.implicit)
        implicit = implicit.concat(definition.implicit);
      if (definition.explicit)
        explicit = explicit.concat(definition.explicit);
    } else {
      throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    }
    implicit.forEach(function(type$1) {
      if (!(type$1 instanceof type)) {
        throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      if (type$1.loadKind && type$1.loadKind !== "scalar") {
        throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      }
      if (type$1.multi) {
        throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
      }
    });
    explicit.forEach(function(type$1) {
      if (!(type$1 instanceof type)) {
        throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
    });
    var result = Object.create(Schema$1.prototype);
    result.implicit = (this.implicit || []).concat(implicit);
    result.explicit = (this.explicit || []).concat(explicit);
    result.compiledImplicit = compileList(result, "implicit");
    result.compiledExplicit = compileList(result, "explicit");
    result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
    return result;
  };
  var schema = Schema$1;
  var str = new type("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(data) {
      return data !== null ? data : "";
    }
  });
  var seq = new type("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(data) {
      return data !== null ? data : [];
    }
  });
  var map3 = new type("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(data) {
      return data !== null ? data : {};
    }
  });
  var failsafe = new schema({
    explicit: [
      str,
      seq,
      map3
    ]
  });
  function resolveYamlNull(data) {
    if (data === null)
      return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
  }
  function constructYamlNull() {
    return null;
  }
  function isNull(object) {
    return object === null;
  }
  var _null = new type("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
      canonical: function() {
        return "~";
      },
      lowercase: function() {
        return "null";
      },
      uppercase: function() {
        return "NULL";
      },
      camelcase: function() {
        return "Null";
      },
      empty: function() {
        return "";
      }
    },
    defaultStyle: "lowercase"
  });
  function resolveYamlBoolean(data) {
    if (data === null)
      return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
  }
  function constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
  }
  function isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
  }
  var bool = new type("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
      lowercase: function(object) {
        return object ? "true" : "false";
      },
      uppercase: function(object) {
        return object ? "TRUE" : "FALSE";
      },
      camelcase: function(object) {
        return object ? "True" : "False";
      }
    },
    defaultStyle: "lowercase"
  });
  function isHexCode(c) {
    return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
  }
  function isOctCode(c) {
    return 48 <= c && c <= 55;
  }
  function isDecCode(c) {
    return 48 <= c && c <= 57;
  }
  function resolveYamlInteger(data) {
    if (data === null)
      return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max)
      return false;
    ch = data[index];
    if (ch === "-" || ch === "+") {
      ch = data[++index];
    }
    if (ch === "0") {
      if (index + 1 === max)
        return true;
      ch = data[++index];
      if (ch === "b") {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (ch !== "0" && ch !== "1")
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "x") {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (!isHexCode(data.charCodeAt(index)))
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "o") {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (!isOctCode(data.charCodeAt(index)))
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
    }
    if (ch === "_")
      return false;
    for (; index < max; index++) {
      ch = data[index];
      if (ch === "_")
        continue;
      if (!isDecCode(data.charCodeAt(index))) {
        return false;
      }
      hasDigits = true;
    }
    if (!hasDigits || ch === "_")
      return false;
    return true;
  }
  function constructYamlInteger(data) {
    var value = data, sign = 1, ch;
    if (value.indexOf("_") !== -1) {
      value = value.replace(/_/g, "");
    }
    ch = value[0];
    if (ch === "-" || ch === "+") {
      if (ch === "-")
        sign = -1;
      value = value.slice(1);
      ch = value[0];
    }
    if (value === "0")
      return 0;
    if (ch === "0") {
      if (value[1] === "b")
        return sign * parseInt(value.slice(2), 2);
      if (value[1] === "x")
        return sign * parseInt(value.slice(2), 16);
      if (value[1] === "o")
        return sign * parseInt(value.slice(2), 8);
    }
    return sign * parseInt(value, 10);
  }
  function isInteger(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
  }
  var int = new type("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
      binary: function(obj) {
        return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
      },
      octal: function(obj) {
        return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
      },
      decimal: function(obj) {
        return obj.toString(10);
      },
      hexadecimal: function(obj) {
        return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  });
  var YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function resolveYamlFloat(data) {
    if (data === null)
      return false;
    if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === "_") {
      return false;
    }
    return true;
  }
  function constructYamlFloat(data) {
    var value, sign;
    value = data.replace(/_/g, "").toLowerCase();
    sign = value[0] === "-" ? -1 : 1;
    if ("+-".indexOf(value[0]) >= 0) {
      value = value.slice(1);
    }
    if (value === ".inf") {
      return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === ".nan") {
      return NaN;
    }
    return sign * parseFloat(value, 10);
  }
  var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
  function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
      switch (style) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    } else if (Number.POSITIVE_INFINITY === object) {
      switch (style) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    } else if (Number.NEGATIVE_INFINITY === object) {
      switch (style) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    } else if (common.isNegativeZero(object)) {
      return "-0.0";
    }
    res = object.toString(10);
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
  }
  function isFloat(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
  }
  var float = new type("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: "lowercase"
  });
  var json3 = failsafe.extend({
    implicit: [
      _null,
      bool,
      int,
      float
    ]
  });
  var core2 = json3;
  var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
  var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function resolveYamlTimestamp(data) {
    if (data === null)
      return false;
    if (YAML_DATE_REGEXP.exec(data) !== null)
      return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
      return true;
    return false;
  }
  function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date3;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null)
      match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null)
      throw new Error("Date resolve error");
    year = +match[1];
    month = +match[2] - 1;
    day = +match[3];
    if (!match[4]) {
      return new Date(Date.UTC(year, month, day));
    }
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
      fraction = match[7].slice(0, 3);
      while (fraction.length < 3) {
        fraction += "0";
      }
      fraction = +fraction;
    }
    if (match[9]) {
      tz_hour = +match[10];
      tz_minute = +(match[11] || 0);
      delta = (tz_hour * 60 + tz_minute) * 6e4;
      if (match[9] === "-")
        delta = -delta;
    }
    date3 = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta)
      date3.setTime(date3.getTime() - delta);
    return date3;
  }
  function representYamlTimestamp(object) {
    return object.toISOString();
  }
  var timestamp = new type("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
  });
  function resolveYamlMerge(data) {
    return data === "<<" || data === null;
  }
  var merge = new type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
  });
  var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  function resolveYamlBinary(data) {
    if (data === null)
      return false;
    var code, idx, bitlen = 0, max = data.length, map4 = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      code = map4.indexOf(data.charAt(idx));
      if (code > 64)
        continue;
      if (code < 0)
        return false;
      bitlen += 6;
    }
    return bitlen % 8 === 0;
  }
  function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map4 = BASE64_MAP, bits = 0, result = [];
    for (idx = 0; idx < max; idx++) {
      if (idx % 4 === 0 && idx) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      }
      bits = bits << 6 | map4.indexOf(input.charAt(idx));
    }
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    } else if (tailbits === 18) {
      result.push(bits >> 10 & 255);
      result.push(bits >> 2 & 255);
    } else if (tailbits === 12) {
      result.push(bits >> 4 & 255);
    }
    return new Uint8Array(result);
  }
  function representYamlBinary(object) {
    var result = "", bits = 0, idx, tail, max = object.length, map4 = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      if (idx % 3 === 0 && idx) {
        result += map4[bits >> 18 & 63];
        result += map4[bits >> 12 & 63];
        result += map4[bits >> 6 & 63];
        result += map4[bits & 63];
      }
      bits = (bits << 8) + object[idx];
    }
    tail = max % 3;
    if (tail === 0) {
      result += map4[bits >> 18 & 63];
      result += map4[bits >> 12 & 63];
      result += map4[bits >> 6 & 63];
      result += map4[bits & 63];
    } else if (tail === 2) {
      result += map4[bits >> 10 & 63];
      result += map4[bits >> 4 & 63];
      result += map4[bits << 2 & 63];
      result += map4[64];
    } else if (tail === 1) {
      result += map4[bits >> 2 & 63];
      result += map4[bits << 4 & 63];
      result += map4[64];
      result += map4[64];
    }
    return result;
  }
  function isBinary(obj) {
    return Object.prototype.toString.call(obj) === "[object Uint8Array]";
  }
  var binary = new type("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
  });
  var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
  var _toString$2 = Object.prototype.toString;
  function resolveYamlOmap(data) {
    if (data === null)
      return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      pairHasKey = false;
      if (_toString$2.call(pair) !== "[object Object]")
        return false;
      for (pairKey in pair) {
        if (_hasOwnProperty$3.call(pair, pairKey)) {
          if (!pairHasKey)
            pairHasKey = true;
          else
            return false;
        }
      }
      if (!pairHasKey)
        return false;
      if (objectKeys.indexOf(pairKey) === -1)
        objectKeys.push(pairKey);
      else
        return false;
    }
    return true;
  }
  function constructYamlOmap(data) {
    return data !== null ? data : [];
  }
  var omap = new type("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
  });
  var _toString$1 = Object.prototype.toString;
  function resolveYamlPairs(data) {
    if (data === null)
      return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      if (_toString$1.call(pair) !== "[object Object]")
        return false;
      keys = Object.keys(pair);
      if (keys.length !== 1)
        return false;
      result[index] = [keys[0], pair[keys[0]]];
    }
    return true;
  }
  function constructYamlPairs(data) {
    if (data === null)
      return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      keys = Object.keys(pair);
      result[index] = [keys[0], pair[keys[0]]];
    }
    return result;
  }
  var pairs = new type("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
  });
  var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
  function resolveYamlSet(data) {
    if (data === null)
      return true;
    var key, object = data;
    for (key in object) {
      if (_hasOwnProperty$2.call(object, key)) {
        if (object[key] !== null)
          return false;
      }
    }
    return true;
  }
  function constructYamlSet(data) {
    return data !== null ? data : {};
  }
  var set = new type("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: resolveYamlSet,
    construct: constructYamlSet
  });
  var _default = core2.extend({
    implicit: [
      timestamp,
      merge
    ],
    explicit: [
      binary,
      omap,
      pairs,
      set
    ]
  });
  var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var CONTEXT_FLOW_IN = 1;
  var CONTEXT_FLOW_OUT = 2;
  var CONTEXT_BLOCK_IN = 3;
  var CONTEXT_BLOCK_OUT = 4;
  var CHOMPING_CLIP = 1;
  var CHOMPING_STRIP = 2;
  var CHOMPING_KEEP = 3;
  var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
  var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
  var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
  var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function _class(obj) {
    return Object.prototype.toString.call(obj);
  }
  function is_EOL(c) {
    return c === 10 || c === 13;
  }
  function is_WHITE_SPACE(c) {
    return c === 9 || c === 32;
  }
  function is_WS_OR_EOL(c) {
    return c === 9 || c === 32 || c === 10 || c === 13;
  }
  function is_FLOW_INDICATOR(c) {
    return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
  }
  function fromHexCode(c) {
    var lc;
    if (48 <= c && c <= 57) {
      return c - 48;
    }
    lc = c | 32;
    if (97 <= lc && lc <= 102) {
      return lc - 97 + 10;
    }
    return -1;
  }
  function escapedHexLen(c) {
    if (c === 120) {
      return 2;
    }
    if (c === 117) {
      return 4;
    }
    if (c === 85) {
      return 8;
    }
    return 0;
  }
  function fromDecimalCode(c) {
    if (48 <= c && c <= 57) {
      return c - 48;
    }
    return -1;
  }
  function simpleEscapeSequence(c) {
    return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
  }
  function charFromCodepoint(c) {
    if (c <= 65535) {
      return String.fromCharCode(c);
    }
    return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
  }
  var simpleEscapeCheck = new Array(256);
  var simpleEscapeMap = new Array(256);
  for (i = 0; i < 256; i++) {
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
  }
  var i;
  function State$1(input, options) {
    this.input = input;
    this.filename = options["filename"] || null;
    this.schema = options["schema"] || _default;
    this.onWarning = options["onWarning"] || null;
    this.legacy = options["legacy"] || false;
    this.json = options["json"] || false;
    this.listener = options["listener"] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
  }
  function generateError(state, message) {
    var mark = {
      name: state.filename,
      buffer: state.input.slice(0, -1),
      position: state.position,
      line: state.line,
      column: state.position - state.lineStart
    };
    mark.snippet = snippet(mark);
    return new exception(message, mark);
  }
  function throwError(state, message) {
    throw generateError(state, message);
  }
  function throwWarning(state, message) {
    if (state.onWarning) {
      state.onWarning.call(null, generateError(state, message));
    }
  }
  var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
      var match, major, minor;
      if (state.version !== null) {
        throwError(state, "duplication of %YAML directive");
      }
      if (args.length !== 1) {
        throwError(state, "YAML directive accepts exactly one argument");
      }
      match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
      if (match === null) {
        throwError(state, "ill-formed argument of the YAML directive");
      }
      major = parseInt(match[1], 10);
      minor = parseInt(match[2], 10);
      if (major !== 1) {
        throwError(state, "unacceptable YAML version of the document");
      }
      state.version = args[0];
      state.checkLineBreaks = minor < 2;
      if (minor !== 1 && minor !== 2) {
        throwWarning(state, "unsupported YAML version of the document");
      }
    },
    TAG: function handleTagDirective(state, name, args) {
      var handle, prefix;
      if (args.length !== 2) {
        throwError(state, "TAG directive accepts exactly two arguments");
      }
      handle = args[0];
      prefix = args[1];
      if (!PATTERN_TAG_HANDLE.test(handle)) {
        throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
      }
      if (_hasOwnProperty$1.call(state.tagMap, handle)) {
        throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
      }
      if (!PATTERN_TAG_URI.test(prefix)) {
        throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
      }
      try {
        prefix = decodeURIComponent(prefix);
      } catch (err) {
        throwError(state, "tag prefix is malformed: " + prefix);
      }
      state.tagMap[handle] = prefix;
    }
  };
  function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
      _result = state.input.slice(start, end);
      if (checkJson) {
        for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
          _character = _result.charCodeAt(_position);
          if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
            throwError(state, "expected valid JSON character");
          }
        }
      } else if (PATTERN_NON_PRINTABLE.test(_result)) {
        throwError(state, "the stream contains non-printable characters");
      }
      state.result += _result;
    }
  }
  function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) {
      throwError(state, "cannot merge mappings; the provided source object is unacceptable");
    }
    sourceKeys = Object.keys(source);
    for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
      key = sourceKeys[index];
      if (!_hasOwnProperty$1.call(destination, key)) {
        destination[key] = source[key];
        overridableKeys[key] = true;
      }
    }
  }
  function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
    var index, quantity;
    if (Array.isArray(keyNode)) {
      keyNode = Array.prototype.slice.call(keyNode);
      for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
        if (Array.isArray(keyNode[index])) {
          throwError(state, "nested arrays are not supported inside keys");
        }
        if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
          keyNode[index] = "[object Object]";
        }
      }
    }
    if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
      keyNode = "[object Object]";
    }
    keyNode = String(keyNode);
    if (_result === null) {
      _result = {};
    }
    if (keyTag === "tag:yaml.org,2002:merge") {
      if (Array.isArray(valueNode)) {
        for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
          mergeMappings(state, _result, valueNode[index], overridableKeys);
        }
      } else {
        mergeMappings(state, _result, valueNode, overridableKeys);
      }
    } else {
      if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
        state.line = startLine || state.line;
        state.lineStart = startLineStart || state.lineStart;
        state.position = startPos || state.position;
        throwError(state, "duplicated mapping key");
      }
      if (keyNode === "__proto__") {
        Object.defineProperty(_result, keyNode, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: valueNode
        });
      } else {
        _result[keyNode] = valueNode;
      }
      delete overridableKeys[keyNode];
    }
    return _result;
  }
  function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 10) {
      state.position++;
    } else if (ch === 13) {
      state.position++;
      if (state.input.charCodeAt(state.position) === 10) {
        state.position++;
      }
    } else {
      throwError(state, "a line break is expected");
    }
    state.line += 1;
    state.lineStart = state.position;
    state.firstTabInLine = -1;
  }
  function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        if (ch === 9 && state.firstTabInLine === -1) {
          state.firstTabInLine = state.position;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      if (allowComments && ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 10 && ch !== 13 && ch !== 0);
      }
      if (is_EOL(ch)) {
        readLineBreak(state);
        ch = state.input.charCodeAt(state.position);
        lineBreaks++;
        state.lineIndent = 0;
        while (ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
      } else {
        break;
      }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
      throwWarning(state, "deficient indentation");
    }
    return lineBreaks;
  }
  function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
      _position += 3;
      ch = state.input.charCodeAt(_position);
      if (ch === 0 || is_WS_OR_EOL(ch)) {
        return true;
      }
    }
    return false;
  }
  function writeFoldedLines(state, count) {
    if (count === 1) {
      state.result += " ";
    } else if (count > 1) {
      state.result += common.repeat("\n", count - 1);
    }
  }
  function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
      return false;
    }
    if (ch === 63 || ch === 45) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        return false;
      }
    }
    state.kind = "scalar";
    state.result = "";
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while (ch !== 0) {
      if (ch === 58) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          break;
        }
      } else if (ch === 35) {
        preceding = state.input.charCodeAt(state.position - 1);
        if (is_WS_OR_EOL(preceding)) {
          break;
        }
      } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
        break;
      } else if (is_EOL(ch)) {
        _line = state.line;
        _lineStart = state.lineStart;
        _lineIndent = state.lineIndent;
        skipSeparationSpace(state, false, -1);
        if (state.lineIndent >= nodeIndent) {
          hasPendingContent = true;
          ch = state.input.charCodeAt(state.position);
          continue;
        } else {
          state.position = captureEnd;
          state.line = _line;
          state.lineStart = _lineStart;
          state.lineIndent = _lineIndent;
          break;
        }
      }
      if (hasPendingContent) {
        captureSegment(state, captureStart, captureEnd, false);
        writeFoldedLines(state, state.line - _line);
        captureStart = captureEnd = state.position;
        hasPendingContent = false;
      }
      if (!is_WHITE_SPACE(ch)) {
        captureEnd = state.position + 1;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
      return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
  }
  function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 39) {
      return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 39) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);
        if (ch === 39) {
          captureStart = state.position;
          state.position++;
          captureEnd = state.position;
        } else {
          return true;
        }
      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;
      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, "unexpected end of the document within a single quoted scalar");
      } else {
        state.position++;
        captureEnd = state.position;
      }
    }
    throwError(state, "unexpected end of the stream within a single quoted scalar");
  }
  function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 34) {
      return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 34) {
        captureSegment(state, captureStart, state.position, true);
        state.position++;
        return true;
      } else if (ch === 92) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);
        if (is_EOL(ch)) {
          skipSeparationSpace(state, false, nodeIndent);
        } else if (ch < 256 && simpleEscapeCheck[ch]) {
          state.result += simpleEscapeMap[ch];
          state.position++;
        } else if ((tmp = escapedHexLen(ch)) > 0) {
          hexLength = tmp;
          hexResult = 0;
          for (; hexLength > 0; hexLength--) {
            ch = state.input.charCodeAt(++state.position);
            if ((tmp = fromHexCode(ch)) >= 0) {
              hexResult = (hexResult << 4) + tmp;
            } else {
              throwError(state, "expected hexadecimal character");
            }
          }
          state.result += charFromCodepoint(hexResult);
          state.position++;
        } else {
          throwError(state, "unknown escape sequence");
        }
        captureStart = captureEnd = state.position;
      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;
      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, "unexpected end of the document within a double quoted scalar");
      } else {
        state.position++;
        captureEnd = state.position;
      }
    }
    throwError(state, "unexpected end of the stream within a double quoted scalar");
  }
  function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = Object.create(null), keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 91) {
      terminator = 93;
      isMapping = false;
      _result = [];
    } else if (ch === 123) {
      terminator = 125;
      isMapping = true;
      _result = {};
    } else {
      return false;
    }
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while (ch !== 0) {
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if (ch === terminator) {
        state.position++;
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = isMapping ? "mapping" : "sequence";
        state.result = _result;
        return true;
      } else if (!readNext) {
        throwError(state, "missed comma between flow collection entries");
      } else if (ch === 44) {
        throwError(state, "expected the node content, but found ','");
      }
      keyTag = keyNode = valueNode = null;
      isPair = isExplicitPair = false;
      if (ch === 63) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following)) {
          isPair = isExplicitPair = true;
          state.position++;
          skipSeparationSpace(state, true, nodeIndent);
        }
      }
      _line = state.line;
      _lineStart = state.lineStart;
      _pos = state.position;
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      keyTag = state.tag;
      keyNode = state.result;
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if ((isExplicitPair || state.line === _line) && ch === 58) {
        isPair = true;
        ch = state.input.charCodeAt(++state.position);
        skipSeparationSpace(state, true, nodeIndent);
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        valueNode = state.result;
      }
      if (isMapping) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
      } else if (isPair) {
        _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
      } else {
        _result.push(keyNode);
      }
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if (ch === 44) {
        readNext = true;
        ch = state.input.charCodeAt(++state.position);
      } else {
        readNext = false;
      }
    }
    throwError(state, "unexpected end of the stream within a flow collection");
  }
  function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 124) {
      folding = false;
    } else if (ch === 62) {
      folding = true;
    } else {
      return false;
    }
    state.kind = "scalar";
    state.result = "";
    while (ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
      if (ch === 43 || ch === 45) {
        if (CHOMPING_CLIP === chomping) {
          chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
        } else {
          throwError(state, "repeat of a chomping mode identifier");
        }
      } else if ((tmp = fromDecimalCode(ch)) >= 0) {
        if (tmp === 0) {
          throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
        } else if (!detectedIndent) {
          textIndent = nodeIndent + tmp - 1;
          detectedIndent = true;
        } else {
          throwError(state, "repeat of an indentation width identifier");
        }
      } else {
        break;
      }
    }
    if (is_WHITE_SPACE(ch)) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (is_WHITE_SPACE(ch));
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (!is_EOL(ch) && ch !== 0);
      }
    }
    while (ch !== 0) {
      readLineBreak(state);
      state.lineIndent = 0;
      ch = state.input.charCodeAt(state.position);
      while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
      if (!detectedIndent && state.lineIndent > textIndent) {
        textIndent = state.lineIndent;
      }
      if (is_EOL(ch)) {
        emptyLines++;
        continue;
      }
      if (state.lineIndent < textIndent) {
        if (chomping === CHOMPING_KEEP) {
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        } else if (chomping === CHOMPING_CLIP) {
          if (didReadContent) {
            state.result += "\n";
          }
        }
        break;
      }
      if (folding) {
        if (is_WHITE_SPACE(ch)) {
          atMoreIndented = true;
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        } else if (atMoreIndented) {
          atMoreIndented = false;
          state.result += common.repeat("\n", emptyLines + 1);
        } else if (emptyLines === 0) {
          if (didReadContent) {
            state.result += " ";
          }
        } else {
          state.result += common.repeat("\n", emptyLines);
        }
      } else {
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      }
      didReadContent = true;
      detectedIndent = true;
      emptyLines = 0;
      captureStart = state.position;
      while (!is_EOL(ch) && ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, state.position, false);
    }
    return true;
  }
  function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    if (state.firstTabInLine !== -1)
      return false;
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      if (state.firstTabInLine !== -1) {
        state.position = state.firstTabInLine;
        throwError(state, "tab characters must not be used in indentation");
      }
      if (ch !== 45) {
        break;
      }
      following = state.input.charCodeAt(state.position + 1);
      if (!is_WS_OR_EOL(following)) {
        break;
      }
      detected = true;
      state.position++;
      if (skipSeparationSpace(state, true, -1)) {
        if (state.lineIndent <= nodeIndent) {
          _result.push(null);
          ch = state.input.charCodeAt(state.position);
          continue;
        }
      }
      _line = state.line;
      composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
      _result.push(state.result);
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
      if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
        throwError(state, "bad indentation of a sequence entry");
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }
    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = "sequence";
      state.result = _result;
      return true;
    }
    return false;
  }
  function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    if (state.firstTabInLine !== -1)
      return false;
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      if (!atExplicitKey && state.firstTabInLine !== -1) {
        state.position = state.firstTabInLine;
        throwError(state, "tab characters must not be used in indentation");
      }
      following = state.input.charCodeAt(state.position + 1);
      _line = state.line;
      if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
        if (ch === 63) {
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = true;
          allowCompact = true;
        } else if (atExplicitKey) {
          atExplicitKey = false;
          allowCompact = true;
        } else {
          throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
        }
        state.position += 1;
        ch = following;
      } else {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
        if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
          break;
        }
        if (state.line === _line) {
          ch = state.input.charCodeAt(state.position);
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 58) {
            ch = state.input.charCodeAt(++state.position);
            if (!is_WS_OR_EOL(ch)) {
              throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
            }
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = false;
            allowCompact = false;
            keyTag = state.tag;
            keyNode = state.result;
          } else if (detected) {
            throwError(state, "can not read an implicit mapping pair; a colon is missed");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        } else if (detected) {
          throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      }
      if (state.line === _line || state.lineIndent > nodeIndent) {
        if (atExplicitKey) {
          _keyLine = state.line;
          _keyLineStart = state.lineStart;
          _keyPos = state.position;
        }
        if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
          if (atExplicitKey) {
            keyNode = state.result;
          } else {
            valueNode = state.result;
          }
        }
        if (!atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
      }
      if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
        throwError(state, "bad indentation of a mapping entry");
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }
    if (atExplicitKey) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
    }
    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = "mapping";
      state.result = _result;
    }
    return detected;
  }
  function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 33)
      return false;
    if (state.tag !== null) {
      throwError(state, "duplication of a tag property");
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 60) {
      isVerbatim = true;
      ch = state.input.charCodeAt(++state.position);
    } else if (ch === 33) {
      isNamed = true;
      tagHandle = "!!";
      ch = state.input.charCodeAt(++state.position);
    } else {
      tagHandle = "!";
    }
    _position = state.position;
    if (isVerbatim) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0 && ch !== 62);
      if (state.position < state.length) {
        tagName = state.input.slice(_position, state.position);
        ch = state.input.charCodeAt(++state.position);
      } else {
        throwError(state, "unexpected end of the stream within a verbatim tag");
      }
    } else {
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        if (ch === 33) {
          if (!isNamed) {
            tagHandle = state.input.slice(_position - 1, state.position + 1);
            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
              throwError(state, "named tag handle cannot contain such characters");
            }
            isNamed = true;
            _position = state.position + 1;
          } else {
            throwError(state, "tag suffix cannot contain exclamation marks");
          }
        }
        ch = state.input.charCodeAt(++state.position);
      }
      tagName = state.input.slice(_position, state.position);
      if (PATTERN_FLOW_INDICATORS.test(tagName)) {
        throwError(state, "tag suffix cannot contain flow indicator characters");
      }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
      throwError(state, "tag name cannot contain such characters: " + tagName);
    }
    try {
      tagName = decodeURIComponent(tagName);
    } catch (err) {
      throwError(state, "tag name is malformed: " + tagName);
    }
    if (isVerbatim) {
      state.tag = tagName;
    } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
      state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === "!") {
      state.tag = "!" + tagName;
    } else if (tagHandle === "!!") {
      state.tag = "tag:yaml.org,2002:" + tagName;
    } else {
      throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
  }
  function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 38)
      return false;
    if (state.anchor !== null) {
      throwError(state, "duplication of an anchor property");
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
      throwError(state, "name of an anchor node must contain at least one character");
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
  }
  function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 42)
      return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
      throwError(state, "name of an alias node must contain at least one character");
    }
    alias = state.input.slice(_position, state.position);
    if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
      throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
  }
  function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
    if (state.listener !== null) {
      state.listener("open", state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      }
    }
    if (indentStatus === 1) {
      while (readTagProperty(state) || readAnchorProperty(state)) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          allowBlockCollections = allowBlockStyles;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        } else {
          allowBlockCollections = false;
        }
      }
    }
    if (allowBlockCollections) {
      allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
      if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
        flowIndent = parentIndent;
      } else {
        flowIndent = parentIndent + 1;
      }
      blockIndent = state.position - state.lineStart;
      if (indentStatus === 1) {
        if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
          hasContent = true;
        } else {
          if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
            hasContent = true;
          } else if (readAlias(state)) {
            hasContent = true;
            if (state.tag !== null || state.anchor !== null) {
              throwError(state, "alias node should not have any properties");
            }
          } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
            hasContent = true;
            if (state.tag === null) {
              state.tag = "?";
            }
          }
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      } else if (indentStatus === 0) {
        hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
      }
    }
    if (state.tag === null) {
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    } else if (state.tag === "?") {
      if (state.result !== null && state.kind !== "scalar") {
        throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
      }
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type2 = state.implicitTypes[typeIndex];
        if (type2.resolve(state.result)) {
          state.result = type2.construct(state.result);
          state.tag = type2.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (state.tag !== "!") {
      if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
        type2 = state.typeMap[state.kind || "fallback"][state.tag];
      } else {
        type2 = null;
        typeList = state.typeMap.multi[state.kind || "fallback"];
        for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
          if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
            type2 = typeList[typeIndex];
            break;
          }
        }
      }
      if (!type2) {
        throwError(state, "unknown tag !<" + state.tag + ">");
      }
      if (state.result !== null && type2.kind !== state.kind) {
        throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
      }
      if (!type2.resolve(state.result, state.tag)) {
        throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
      } else {
        state.result = type2.construct(state.result, state.tag);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    }
    if (state.listener !== null) {
      state.listener("close", state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
  }
  function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = Object.create(null);
    state.anchorMap = Object.create(null);
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
      if (state.lineIndent > 0 || ch !== 37) {
        break;
      }
      hasDirectives = true;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveName = state.input.slice(_position, state.position);
      directiveArgs = [];
      if (directiveName.length < 1) {
        throwError(state, "directive name must not be less than one character in length");
      }
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0 && !is_EOL(ch));
          break;
        }
        if (is_EOL(ch))
          break;
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveArgs.push(state.input.slice(_position, state.position));
      }
      if (ch !== 0)
        readLineBreak(state);
      if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
        directiveHandlers[directiveName](state, directiveName, directiveArgs);
      } else {
        throwWarning(state, 'unknown document directive "' + directiveName + '"');
      }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
      throwError(state, "directives end mark is expected");
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
      throwWarning(state, "non-ASCII line breaks are interpreted as content");
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
      if (state.input.charCodeAt(state.position) === 46) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      }
      return;
    }
    if (state.position < state.length - 1) {
      throwError(state, "end of the stream or a document separator is expected");
    } else {
      return;
    }
  }
  function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
      if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
        input += "\n";
      }
      if (input.charCodeAt(0) === 65279) {
        input = input.slice(1);
      }
    }
    var state = new State$1(input, options);
    var nullpos = input.indexOf("\0");
    if (nullpos !== -1) {
      state.position = nullpos;
      throwError(state, "null byte is not allowed in input");
    }
    state.input += "\0";
    while (state.input.charCodeAt(state.position) === 32) {
      state.lineIndent += 1;
      state.position += 1;
    }
    while (state.position < state.length - 1) {
      readDocument(state);
    }
    return state.documents;
  }
  function loadAll$1(input, iterator, options) {
    if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
      options = iterator;
      iterator = null;
    }
    var documents = loadDocuments(input, options);
    if (typeof iterator !== "function") {
      return documents;
    }
    for (var index = 0, length = documents.length; index < length; index += 1) {
      iterator(documents[index]);
    }
  }
  function load$1(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
      return void 0;
    } else if (documents.length === 1) {
      return documents[0];
    }
    throw new exception("expected a single document in the stream, but found more");
  }
  var loadAll_1 = loadAll$1;
  var load_1 = load$1;
  var loader = {
    loadAll: loadAll_1,
    load: load_1
  };
  var _toString = Object.prototype.toString;
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var CHAR_BOM = 65279;
  var CHAR_TAB = 9;
  var CHAR_LINE_FEED = 10;
  var CHAR_CARRIAGE_RETURN = 13;
  var CHAR_SPACE = 32;
  var CHAR_EXCLAMATION = 33;
  var CHAR_DOUBLE_QUOTE = 34;
  var CHAR_SHARP = 35;
  var CHAR_PERCENT = 37;
  var CHAR_AMPERSAND = 38;
  var CHAR_SINGLE_QUOTE = 39;
  var CHAR_ASTERISK = 42;
  var CHAR_COMMA = 44;
  var CHAR_MINUS = 45;
  var CHAR_COLON = 58;
  var CHAR_EQUALS = 61;
  var CHAR_GREATER_THAN = 62;
  var CHAR_QUESTION = 63;
  var CHAR_COMMERCIAL_AT = 64;
  var CHAR_LEFT_SQUARE_BRACKET = 91;
  var CHAR_RIGHT_SQUARE_BRACKET = 93;
  var CHAR_GRAVE_ACCENT = 96;
  var CHAR_LEFT_CURLY_BRACKET = 123;
  var CHAR_VERTICAL_LINE = 124;
  var CHAR_RIGHT_CURLY_BRACKET = 125;
  var ESCAPE_SEQUENCES = {};
  ESCAPE_SEQUENCES[0] = "\\0";
  ESCAPE_SEQUENCES[7] = "\\a";
  ESCAPE_SEQUENCES[8] = "\\b";
  ESCAPE_SEQUENCES[9] = "\\t";
  ESCAPE_SEQUENCES[10] = "\\n";
  ESCAPE_SEQUENCES[11] = "\\v";
  ESCAPE_SEQUENCES[12] = "\\f";
  ESCAPE_SEQUENCES[13] = "\\r";
  ESCAPE_SEQUENCES[27] = "\\e";
  ESCAPE_SEQUENCES[34] = '\\"';
  ESCAPE_SEQUENCES[92] = "\\\\";
  ESCAPE_SEQUENCES[133] = "\\N";
  ESCAPE_SEQUENCES[160] = "\\_";
  ESCAPE_SEQUENCES[8232] = "\\L";
  ESCAPE_SEQUENCES[8233] = "\\P";
  var DEPRECATED_BOOLEANS_SYNTAX = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
  ];
  var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function compileStyleMap(schema2, map4) {
    var result, keys, index, length, tag, style, type2;
    if (map4 === null)
      return {};
    result = {};
    keys = Object.keys(map4);
    for (index = 0, length = keys.length; index < length; index += 1) {
      tag = keys[index];
      style = String(map4[tag]);
      if (tag.slice(0, 2) === "!!") {
        tag = "tag:yaml.org,2002:" + tag.slice(2);
      }
      type2 = schema2.compiledTypeMap["fallback"][tag];
      if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
        style = type2.styleAliases[style];
      }
      result[tag] = style;
    }
    return result;
  }
  function encodeHex(character) {
    var string, handle, length;
    string = character.toString(16).toUpperCase();
    if (character <= 255) {
      handle = "x";
      length = 2;
    } else if (character <= 65535) {
      handle = "u";
      length = 4;
    } else if (character <= 4294967295) {
      handle = "U";
      length = 8;
    } else {
      throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + handle + common.repeat("0", length - string.length) + string;
  }
  var QUOTING_TYPE_SINGLE = 1;
  var QUOTING_TYPE_DOUBLE = 2;
  function State(options) {
    this.schema = options["schema"] || _default;
    this.indent = Math.max(1, options["indent"] || 2);
    this.noArrayIndent = options["noArrayIndent"] || false;
    this.skipInvalid = options["skipInvalid"] || false;
    this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
    this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
    this.sortKeys = options["sortKeys"] || false;
    this.lineWidth = options["lineWidth"] || 80;
    this.noRefs = options["noRefs"] || false;
    this.noCompatMode = options["noCompatMode"] || false;
    this.condenseFlow = options["condenseFlow"] || false;
    this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
    this.forceQuotes = options["forceQuotes"] || false;
    this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
  }
  function indentString(string, spaces) {
    var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
    while (position < length) {
      next = string.indexOf("\n", position);
      if (next === -1) {
        line = string.slice(position);
        position = length;
      } else {
        line = string.slice(position, next + 1);
        position = next + 1;
      }
      if (line.length && line !== "\n")
        result += ind;
      result += line;
    }
    return result;
  }
  function generateNextLine(state, level) {
    return "\n" + common.repeat(" ", state.indent * level);
  }
  function testImplicitResolving(state, str2) {
    var index, length, type2;
    for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
      type2 = state.implicitTypes[index];
      if (type2.resolve(str2)) {
        return true;
      }
    }
    return false;
  }
  function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
  }
  function isPrintable(c) {
    return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
  }
  function isNsCharOrWhitespace(c) {
    return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
  }
  function isPlainSafe(c, prev, inblock) {
    var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
    var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
    return (inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar;
  }
  function isPlainSafeFirst(c) {
    return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
  }
  function isPlainSafeLast(c) {
    return !isWhitespace(c) && c !== CHAR_COLON;
  }
  function codePointAt(string, pos) {
    var first3 = string.charCodeAt(pos), second;
    if (first3 >= 55296 && first3 <= 56319 && pos + 1 < string.length) {
      second = string.charCodeAt(pos + 1);
      if (second >= 56320 && second <= 57343) {
        return (first3 - 55296) * 1024 + second - 56320 + 65536;
      }
    }
    return first3;
  }
  function needIndentIndicator(string) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string);
  }
  var STYLE_PLAIN = 1;
  var STYLE_SINGLE = 2;
  var STYLE_LITERAL = 3;
  var STYLE_FOLDED = 4;
  var STYLE_DOUBLE = 5;
  function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
    var i;
    var char = 0;
    var prevChar = null;
    var hasLineBreak = false;
    var hasFoldableLine = false;
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1;
    var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
    if (singleLineOnly || forceQuotes) {
      for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
        char = codePointAt(string, i);
        if (!isPrintable(char)) {
          return STYLE_DOUBLE;
        }
        plain = plain && isPlainSafe(char, prevChar, inblock);
        prevChar = char;
      }
    } else {
      for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
        char = codePointAt(string, i);
        if (char === CHAR_LINE_FEED) {
          hasLineBreak = true;
          if (shouldTrackWidth) {
            hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
            previousLineBreak = i;
          }
        } else if (!isPrintable(char)) {
          return STYLE_DOUBLE;
        }
        plain = plain && isPlainSafe(char, prevChar, inblock);
        prevChar = char;
      }
      hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
    }
    if (!hasLineBreak && !hasFoldableLine) {
      if (plain && !forceQuotes && !testAmbiguousType(string)) {
        return STYLE_PLAIN;
      }
      return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    if (indentPerLevel > 9 && needIndentIndicator(string)) {
      return STYLE_DOUBLE;
    }
    if (!forceQuotes) {
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  function writeScalar(state, string, level, iskey, inblock) {
    state.dump = function() {
      if (string.length === 0) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
      }
      if (!state.noCompatMode) {
        if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
          return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
        }
      }
      var indent = state.indent * Math.max(1, level);
      var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
      var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
      function testAmbiguity(string2) {
        return testImplicitResolving(state, string2);
      }
      switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {
        case STYLE_PLAIN:
          return string;
        case STYLE_SINGLE:
          return "'" + string.replace(/'/g, "''") + "'";
        case STYLE_LITERAL:
          return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
        case STYLE_FOLDED:
          return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
        case STYLE_DOUBLE:
          return '"' + escapeString(string) + '"';
        default:
          throw new exception("impossible error: invalid scalar style");
      }
    }();
  }
  function blockHeader(string, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
    var clip = string[string.length - 1] === "\n";
    var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
    var chomp = keep ? "+" : clip ? "" : "-";
    return indentIndicator + chomp + "\n";
  }
  function dropEndingNewline(string) {
    return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
  }
  function foldString(string, width) {
    var lineRe = /(\n+)([^\n]*)/g;
    var result = function() {
      var nextLF = string.indexOf("\n");
      nextLF = nextLF !== -1 ? nextLF : string.length;
      lineRe.lastIndex = nextLF;
      return foldLine(string.slice(0, nextLF), width);
    }();
    var prevMoreIndented = string[0] === "\n" || string[0] === " ";
    var moreIndented;
    var match;
    while (match = lineRe.exec(string)) {
      var prefix = match[1], line = match[2];
      moreIndented = line[0] === " ";
      result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
      prevMoreIndented = moreIndented;
    }
    return result;
  }
  function foldLine(line, width) {
    if (line === "" || line[0] === " ")
      return line;
    var breakRe = / [^ ]/g;
    var match;
    var start = 0, end, curr = 0, next = 0;
    var result = "";
    while (match = breakRe.exec(line)) {
      next = match.index;
      if (next - start > width) {
        end = curr > start ? curr : next;
        result += "\n" + line.slice(start, end);
        start = end + 1;
      }
      curr = next;
    }
    result += "\n";
    if (line.length - start > width && curr > start) {
      result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
    } else {
      result += line.slice(start);
    }
    return result.slice(1);
  }
  function escapeString(string) {
    var result = "";
    var char = 0;
    var escapeSeq;
    for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      escapeSeq = ESCAPE_SEQUENCES[char];
      if (!escapeSeq && isPrintable(char)) {
        result += string[i];
        if (char >= 65536)
          result += string[i + 1];
      } else {
        result += escapeSeq || encodeHex(char);
      }
    }
    return result;
  }
  function writeFlowSequence(state, level, object) {
    var _result = "", _tag = state.tag, index, length, value;
    for (index = 0, length = object.length; index < length; index += 1) {
      value = object[index];
      if (state.replacer) {
        value = state.replacer.call(object, String(index), value);
      }
      if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
        if (_result !== "")
          _result += "," + (!state.condenseFlow ? " " : "");
        _result += state.dump;
      }
    }
    state.tag = _tag;
    state.dump = "[" + _result + "]";
  }
  function writeBlockSequence(state, level, object, compact3) {
    var _result = "", _tag = state.tag, index, length, value;
    for (index = 0, length = object.length; index < length; index += 1) {
      value = object[index];
      if (state.replacer) {
        value = state.replacer.call(object, String(index), value);
      }
      if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
        if (!compact3 || _result !== "") {
          _result += generateNextLine(state, level);
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          _result += "-";
        } else {
          _result += "- ";
        }
        _result += state.dump;
      }
    }
    state.tag = _tag;
    state.dump = _result || "[]";
  }
  function writeFlowMapping(state, level, object) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = "";
      if (_result !== "")
        pairBuffer += ", ";
      if (state.condenseFlow)
        pairBuffer += '"';
      objectKey = objectKeyList[index];
      objectValue = object[objectKey];
      if (state.replacer) {
        objectValue = state.replacer.call(object, objectKey, objectValue);
      }
      if (!writeNode(state, level, objectKey, false, false)) {
        continue;
      }
      if (state.dump.length > 1024)
        pairBuffer += "? ";
      pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
      if (!writeNode(state, level, objectValue, false, false)) {
        continue;
      }
      pairBuffer += state.dump;
      _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = "{" + _result + "}";
  }
  function writeBlockMapping(state, level, object, compact3) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    if (state.sortKeys === true) {
      objectKeyList.sort();
    } else if (typeof state.sortKeys === "function") {
      objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
      throw new exception("sortKeys must be a boolean or a function");
    }
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = "";
      if (!compact3 || _result !== "") {
        pairBuffer += generateNextLine(state, level);
      }
      objectKey = objectKeyList[index];
      objectValue = object[objectKey];
      if (state.replacer) {
        objectValue = state.replacer.call(object, objectKey, objectValue);
      }
      if (!writeNode(state, level + 1, objectKey, true, true, true)) {
        continue;
      }
      explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
      if (explicitPair) {
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += "?";
        } else {
          pairBuffer += "? ";
        }
      }
      pairBuffer += state.dump;
      if (explicitPair) {
        pairBuffer += generateNextLine(state, level);
      }
      if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
        continue;
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += ":";
      } else {
        pairBuffer += ": ";
      }
      pairBuffer += state.dump;
      _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || "{}";
  }
  function detectType(state, object, explicit) {
    var _result, typeList, index, length, type2, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for (index = 0, length = typeList.length; index < length; index += 1) {
      type2 = typeList[index];
      if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
        if (explicit) {
          if (type2.multi && type2.representName) {
            state.tag = type2.representName(object);
          } else {
            state.tag = type2.tag;
          }
        } else {
          state.tag = "?";
        }
        if (type2.represent) {
          style = state.styleMap[type2.tag] || type2.defaultStyle;
          if (_toString.call(type2.represent) === "[object Function]") {
            _result = type2.represent(object, style);
          } else if (_hasOwnProperty.call(type2.represent, style)) {
            _result = type2.represent[style](object, style);
          } else {
            throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
          }
          state.dump = _result;
        }
        return true;
      }
    }
    return false;
  }
  function writeNode(state, level, object, block, compact3, iskey, isblockseq) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
      detectType(state, object, true);
    }
    var type2 = _toString.call(state.dump);
    var inblock = block;
    var tagStr;
    if (block) {
      block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
    if (objectOrArray) {
      duplicateIndex = state.duplicates.indexOf(object);
      duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
      compact3 = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
      state.dump = "*ref_" + duplicateIndex;
    } else {
      if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
        state.usedDuplicates[duplicateIndex] = true;
      }
      if (type2 === "[object Object]") {
        if (block && Object.keys(state.dump).length !== 0) {
          writeBlockMapping(state, level, state.dump, compact3);
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + state.dump;
          }
        } else {
          writeFlowMapping(state, level, state.dump);
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + " " + state.dump;
          }
        }
      } else if (type2 === "[object Array]") {
        if (block && state.dump.length !== 0) {
          if (state.noArrayIndent && !isblockseq && level > 0) {
            writeBlockSequence(state, level - 1, state.dump, compact3);
          } else {
            writeBlockSequence(state, level, state.dump, compact3);
          }
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + state.dump;
          }
        } else {
          writeFlowSequence(state, level, state.dump);
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + " " + state.dump;
          }
        }
      } else if (type2 === "[object String]") {
        if (state.tag !== "?") {
          writeScalar(state, state.dump, level, iskey, inblock);
        }
      } else if (type2 === "[object Undefined]") {
        return false;
      } else {
        if (state.skipInvalid)
          return false;
        throw new exception("unacceptable kind of an object to dump " + type2);
      }
      if (state.tag !== null && state.tag !== "?") {
        tagStr = encodeURI(state.tag[0] === "!" ? state.tag.slice(1) : state.tag).replace(/!/g, "%21");
        if (state.tag[0] === "!") {
          tagStr = "!" + tagStr;
        } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
          tagStr = "!!" + tagStr.slice(18);
        } else {
          tagStr = "!<" + tagStr + ">";
        }
        state.dump = tagStr + " " + state.dump;
      }
    }
    return true;
  }
  function getDuplicateReferences(object, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object, objects, duplicatesIndexes);
    for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
      state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
  }
  function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object !== null && typeof object === "object") {
      index = objects.indexOf(object);
      if (index !== -1) {
        if (duplicatesIndexes.indexOf(index) === -1) {
          duplicatesIndexes.push(index);
        }
      } else {
        objects.push(object);
        if (Array.isArray(object)) {
          for (index = 0, length = object.length; index < length; index += 1) {
            inspectNode(object[index], objects, duplicatesIndexes);
          }
        } else {
          objectKeyList = Object.keys(object);
          for (index = 0, length = objectKeyList.length; index < length; index += 1) {
            inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
          }
        }
      }
    }
  }
  function dump$1(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs)
      getDuplicateReferences(input, state);
    var value = input;
    if (state.replacer) {
      value = state.replacer.call({ "": value }, "", value);
    }
    if (writeNode(state, 0, value, true, true))
      return state.dump + "\n";
    return "";
  }
  var dump_1 = dump$1;
  var dumper = {
    dump: dump_1
  };
  function renamed(from, to) {
    return function() {
      throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
    };
  }
  var Type = type;
  var Schema = schema;
  var FAILSAFE_SCHEMA = failsafe;
  var JSON_SCHEMA = json3;
  var CORE_SCHEMA = core2;
  var DEFAULT_SCHEMA = _default;
  var load = loader.load;
  var loadAll = loader.loadAll;
  var dump = dumper.dump;
  var YAMLException = exception;
  var types = {
    binary,
    float,
    map: map3,
    null: _null,
    pairs,
    set,
    timestamp,
    bool,
    int,
    merge,
    omap,
    seq,
    str
  };
  var safeLoad = renamed("safeLoad", "load");
  var safeLoadAll = renamed("safeLoadAll", "loadAll");
  var safeDump = renamed("safeDump", "dump");
  var jsYaml = {
    Type,
    Schema,
    FAILSAFE_SCHEMA,
    JSON_SCHEMA,
    CORE_SCHEMA,
    DEFAULT_SCHEMA,
    load,
    loadAll,
    dump,
    YAMLException,
    types,
    safeLoad,
    safeLoadAll,
    safeDump
  };
  var js_yaml_default = jsYaml;

  // component-library/bookshop/ymlify.js
  function ymlify_default() {
    this.registerFilter("ymlify", (yml) => js_yaml_default.load(yml));
  }

  // bookshop-import-config:bookshop.config.js
  var engines = [];
  var Engine0Plugins = [];
  Engine0Plugins.push(assign_local_default);
  Engine0Plugins.push(image_default);
  Engine0Plugins.push(military_time_default);
  Engine0Plugins.push(ymlify_default);
  engines.push(new Engine({
    ...{ "plugins": ["./assign_local.js", "./image.js", "./military_time.js", "./ymlify.js"] },
    files: eleventy_default,
    plugins: Engine0Plugins
  }));
  var bookshop_config_default = engines;

  // node_modules/@bookshop/live/lib/app/app.js
  window.BookshopLive = getLive(bookshop_config_default);
})();
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
