// build time:Tue Jul 21 2020 13:11:08 GMT+0800 (GMT+08:00)
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.hanabi=r()}(this,function(){"use strict";function e(e,r){return r={exports:{}},e(r,r.exports),r.exports}function r(e){return'<span style="color: slategray">'+e+"</span>"}var n=e(function(e){var r=e.exports=function(){return new RegExp("(?:"+r.line().source+")|(?:"+r.block().source+")","gm")};r.line=function(){return/(?:^|\s)\/\/(.+?)$/gm},r.block=function(){return/\/\*([\S\s]*?)\*\//gm}}),o=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],a=function(e,a){void 0===a&&(a={});var i=a.colors;void 0===i&&(i=o);var s=0,t={},u=/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,l=/</,f=new RegExp("("+u.source+"|"+l.source+")|("+n().source+")","gmi");return e.replace(f,function(e,n,o){if(o)return r(o);if("<"===n)return"&lt;";var a;t[n]?a=t[n]:(a=i[s],t[n]=a);var u='<span style="color: #'+a+'">'+n+"</span>";return s=++s%i.length,u})};return a});var HanabiBrowser={ref:{colors:["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],lineNumber:true},"default":{defaultColors:["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"]},start:function(e,r){HanabiBrowser.ref.lineNumber=r;$(e||"code").each(function(e,r){var n=hanabi($(r).html().replace(new RegExp("&lt;","g"),"<").replace(new RegExp("&gt;","g"),">"),HanabiBrowser.ref);n=n.substring(0,n.length-1).replace(new RegExp("\n","g"),"<br>").replace(new RegExp("  ","g"),"&nbsp&nbsp");var o=0;var a=[];n.split("<br>").forEach(function(e){if(HanabiBrowser.ref.lineNumber){a.push('<span style="width: 30px; display: inline-block" class="hanabi-linenumber">'+(++o).toString()+"</span>"+e)}else{a.push('<span style="width: 30px; display: none" class="hanabi-linenumber">'+(++o).toString()+"</span>"+e)}});n=a.join("<br>");$(r).html(n)})},setLinenumber:function(e){HanabiBrowser.ref.lineNumber=e;if(HanabiBrowser.ref.lineNumber){$(".hanabi-linenumber").css("display","inline-block")}else{$(".hanabi-linenumber").css("display","none")}},toggleLinenumber:function(){HanabiBrowser.ref.lineNumber=!HanabiBrowser.ref.lineNumber;HanabiBrowser.setLinenumber(HanabiBrowser.ref.lineNumber)},putColor:function(e){if(typeof e=="string"){HanabiBrowser.ref.colors.push(e)}else{HanabiBrowser.ref.colors=HanabiBrowser.ref.colors.concat(e)}},defaultColors:function(){HanabiBrowser.ref.colors=HanabiBrowser.default.defaultColors},clearColors:function(){HanabiBrowser.ref.colors=[]}};
//rebuild by neat 