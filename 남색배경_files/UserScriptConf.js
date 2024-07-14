﻿// UserScriptConf.js //
// last_version: 3.3.2_min //

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var turn_on_fid_cookie = true; // "_harry_fid", device id cookie

var turn_on_hsid_cookie = true; // "_harry_hsid", session id in same host cookie

var turn_on_dsid_cookie = true; // "_harry_dsid", session id in same domain cookie

var turn_on_sid_cookie = true; // "XTSID", session id, 30-min last from last click

var turn_on_vid_cookie = true; // "XTVID", anoymous id cookie

var turn_on_xloc_cookie = true; // "xloc", screen pixel info cookie

var turn_on_lang_cookie = true; // "_harry_lang", language info set in browser cookie

/// call set_cookie.uid(id): "XTLID", call set_cookie.info(text): "_harry_info"
/// call clear_cookie(cookie_name): clear value of the cookie

var turn_on_sending_logs_to_api_server = false;

var api_server_url = "https://www.clickwhy.co.kr/userScript/userScript/UserInfoGet?&";

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function get_host(t){try{if(!t)return"";try{return t.replace(/(\w+)?:?\/\/{1}/,"").split(/[/?#:]/)[0]}catch(e){}}catch(r){console.log(r)}}function get_domain(t){try{return/\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/.exec(get_host(t))[0]}catch(e){}try{var r=get_host(t).split(".");if(1==r.length)return r[0];if(2==r.length||r[r.length-1].length>2)return r[r.length-2]+"."+r[r.length-1];return r[r.length-3]+"."+r[r.length-2]+"."+r[r.length-1]}catch(n){console.log(n)}}var _hsidyn_,_dsidyn_,_sidyn,harry_domain=get_domain(document.domain),harry_ref_host=get_host(document.referrer),issue_cookie=function(t,e,r,n,o){try{var s=new Date;s.setDate(s.getDate()+o);var a=o<0?"":s.toUTCString(),c=t+"="+escape(e)+"; domain="+r+"; path="+n+"; expires="+a+"; Secure; SameSite=None";document.cookie=c}catch(u){console.log(u)}},issue_min_cookie=function(t,e,r,n,o){try{var s=new Date;s.setMilliseconds(s.getMilliseconds()+6e4*o);var a=o<0?"":s.toUTCString(),c=t+"="+escape(e)+"; domain="+r+"; path="+n+"; expires="+a+"; Secure; SameSite=None";document.cookie=c}catch(u){console.log(u)}},hash_value=function(t){var e=0;if(0==t.length)return e;for(i=0;i<t.length;i++)char=t.charCodeAt(i),e=(e<<5)-e+char,e&=e;return e},enkode=function(t){try{return btoa(encodeURIComponent(t))}catch(e){return t}},is_cookie=function(t){try{var e=RegExp(t+"=[^;]+");return t&&e.exec(document.cookie)?1:0}catch(r){return 0}},get_cookie=function(t){if(!t)return null;try{var e=RegExp(t+"=(([^;]?)+)").exec(document.cookie)[1];return(e=unescape(e))||null}catch(r){return null}},base64_cookie=function(t){if(!t)return null;try{var e=RegExp(t+"=(([^;]?)+)").exec(document.cookie)[1]}catch(r){return null}try{return(e=decodeURIComponent(atob(decodeURIComponent(e))))||null}catch(n){return null}},clear_cookie=function(t){try{issue_min_cookie(t,"",harry_domain,"/",1/6e4)}catch(e){console.log(e)}},set_cookie={str_now:function(){try{return new Date(Date.now()-6e4*new Date().getTimezoneOffset()).toISOString().replace(/-|:|\.|T|Z/g,"").substring(2)}catch(t){return new Date().toISOString().replace(/-|:|\.|T|Z/g,"").substring(2)}},hsid:function(){try{if(is_cookie("_harry_hsid")&&harry_ref_host==get_host(document.location.host)){var t=get_cookie("_harry_hsid");window._hsidyn_="N",issue_min_cookie("_harry_hsid",t,harry_domain,"/",30)}else{var e="A"+this.str_now();e+=(""+Math.random()).substr(2,3),window._hsidyn_="Y",issue_min_cookie("_harry_hsid",e,harry_domain,"/",30)}}catch(r){console.log(r),window._hsidyn_="N",issue_min_cookie("_harry_hsid","error_catched",harry_domain,"/",30)}},dsid:function(){try{if(is_cookie("_harry_dsid")&&harry_domain==get_domain(document.referrer)){var t=get_cookie("_harry_dsid");window._dsidyn_="N",issue_min_cookie("_harry_dsid",t,harry_domain,"/",30)}else{var e="A"+this.str_now();e+=(""+Math.random()).substr(2,3),window._dsidyn_="Y",issue_min_cookie("_harry_dsid",e,harry_domain,"/",30)}}catch(r){console.log(r),window._dsidyn_="N",issue_min_cookie("_harry_dsid","error_catched",harry_domain,"/",30)}},sid:function(){try{if(is_cookie("XTSID")&&"Y"==sessionStorage.getItem("is_sbs")){var t=get_cookie("XTSID");window._sidyn_="N",sessionStorage.setItem("is_sbs","Y"),issue_min_cookie("XTSID",t,harry_domain,"/",30)}else{var e="A"+this.str_now();e+=(""+Math.random()).substr(2,3),window._sidyn_="Y",sessionStorage.setItem("is_sbs","Y"),issue_min_cookie("XTSID",e,harry_domain,"/",30)}}catch(r){console.log(r),window._sidyn_="N",sessionStorage.setItem("is_sbs","Y"),issue_min_cookie("XTSID","error_catched",harry_domain,"/",30)}},vid:function(){try{if(!is_cookie("XTVID")){var t="A"+this.str_now();t+=(""+Math.random()).substr(2,3),issue_cookie("XTVID",t,harry_domain,"/",36500)}}catch(e){console.log(e)}},uid:function(t){try{issue_cookie("XTLID",t,harry_domain,"/","-1")}catch(e){console.log(e)}},info:function(t){try{_value=btoa(t),issue_cookie("_harry_info",_value,harry_domain,"/","-1")}catch(e){_value=btoa(encodeURIComponent(t)),issue_cookie("_harry_info",_value,harry_domain,"/","-1")}},xloc:function(){try{try{var t=screen.width+"X";t+=screen.height,issue_cookie("xloc",t,harry_domain,"/",365)}catch(e){issue_cookie("xloc","no_screen_info_found",harry_domain,"/",365)}}catch(r){console.log(r)}},urlref:function(){try{document.location.host!=harry_ref_host&&(issue_cookie("_harry_ref",document.referrer,harry_domain,"/","-1"),issue_cookie("_harry_url",document.URL,harry_domain,"/","-1"))}catch(t){console.log(t)}}},device_cd=function(){var t="",e=navigator,r=e.language||e.userLanguage||e.languages[0]||e.browserLanguage||e.systemLanguage;return{ua:function(){t+=e.userAgent},la:function(){t+=r||"no_lang_info"},cd:function(){t+=window.screen.colorDepth},pr:function(){t+=window.devicePixelRatio},tzo:function(){var e=new Date;t+=e.getTimezoneOffset()},platform:function(){t+=e.platform},set_cookie_lang:function(){try{issue_cookie("_harry_lang",r,harry_domain,"/",36500)}catch(t){console.log(t)}},set_cookie_fid:function(){try{is_cookie("_harry_fid")||issue_cookie("_harry_fid",this.value(),harry_domain,"/",10)}catch(t){console.log(t)}},value:function(){this.ua(),this.la(),this.cd(),this.pr(),this.tzo(),this.platform();var e=t.replace(/\s+/g,"");return t="","hh"+hash_value(e)}}}(),get_keys_locsto=function(){for(var t=[],e=0;e<localStorage.length;e++)try{t.push(localStorage.key(e))}catch(r){}return t},get_pdata_keys=function(t){for(var e=[],r=0;r<t.length;r++)try{e.push(/pdata_/.exec(t[r]).input)}catch(n){}return e.sort()},get_pjson_keys=function(t){for(var e=[],r=0;r<t.length;r++)try{e.push(/pjson/.exec(t[r]).input)}catch(n){}return e.sort()},gen_pdata=function(){var t=set_cookie.str_now();return{key:function(){return"pdata_"+t},jkey:function(){return"pjson"+t},rtjson:function(){var e=document.URL.replace(/\w+\:\/\//,"")||"",r=document.referrer.replace(/\w+\:\/\//,"")||"",n=navigator.userAgent||"",o=(document.cookie||"").split("; "),s={hjs:"rt",hdt:t,ss:_sidyn_,hss:_hsidyn_,dss:_dsidyn_};return o.forEach(function(t){s[(t=t.split("="))[0]]=t[1]||""}),{url:e,ref:r,ua:n,dc:s}},lsjson:function(){var e=document.URL.replace(/\w+\:\/\//,"")||"",r=document.referrer.replace(/\w+\:\/\//,"")||"",n=navigator.userAgent||"",o=(document.cookie||"").split("; "),s={hjs:"ls",hdt:t,ss:_sidyn_,hss:_hsidyn_,dss:_dsidyn_};return o.forEach(function(t){s[(t=t.split("="))[0]]=t[1]||""}),{url:e,ref:r,ua:n,dc:s}},rtvalue:function(){var e=encodeURIComponent(document.URL.replace(/\w+\:\/\//,"")||""),r=encodeURIComponent(document.referrer.replace(/\w+\:\/\//,"")||""),n=encodeURIComponent(navigator.userAgent||""),o=encodeURIComponent(document.cookie||""),s=encodeURIComponent(get_cookie("XTLID")||"");return"url="+e+"&ref="+r+"&req_type=xml&ua="+n+"&dc=hjs=rt; hdt="+t+"; ss="+_sidyn_+"; hss="+_hsidyn_+"; dss="+_dsidyn_+"; "+o+"&xtuid="+s+"&httpstatus=200&method=GET&gvhost="},lsvalue:function(){var e=encodeURIComponent(document.URL.replace(/\w+\:\/\//,"")||""),r=encodeURIComponent(document.referrer.replace(/\w+\:\/\//,"")||""),n=encodeURIComponent(navigator.userAgent||""),o=encodeURIComponent(document.cookie||""),s=encodeURIComponent(get_cookie("XTLID")||"");return"url="+e+"&ref="+r+"&req_type=xml&ua="+n+"&dc=hjs=ls; hdt="+t+"; ss="+_sidyn_+"; hss="+_hsidyn_+"; dss="+_dsidyn_+"; "+o+"&xtuid="+s+"&httpstatus=200&method=GET&gvhost="}}}();function get_xhr(){if(window.XMLHttpRequest)return new XMLHttpRequest;if(!window.ActiveXObject)return null;try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){return null}}function send_log(){var t=get_xhr();t.onload=function(e){4===t.readyState&&(200===t.status?console.log("api connected for g log !!"):console.error(e))},t.ontimeout=function(t){localStorage.setItem(gen_pdata.key(),gen_pdata.lsvalue()),console.error(t)};var e=api_server_url;try{t.open("GET",e+gen_pdata.rtvalue(),!0),t.timeout=5e3,t.send(null)}catch(r){localStorage.setItem(gen_pdata.key(),gen_pdata.lsvalue())}}function send_pdata(){var t=get_pdata_keys(get_keys_locsto());if(t)for(var e=0;e<t.length;e++){var r=get_xhr();r.onload=function(t){4===r.readyState&&(200===r.status?console.log("api connected for g ls !!"):console.error(t))},r.ontimeout=function(t){console.error(t)};var n=api_server_url;try{r.open("GET",n+localStorage.getItem(t[e]),!0),r.timeout=5e3,r.send(null),localStorage.removeItem(t[e])}catch(o){console.error(o)}}}function send_log_json(){var t=get_xhr();t.onload=function(e){4===t.readyState&&(200===t.status?console.log("api connected for p log !!"):console.error(e))},t.ontimeout=function(t){localStorage.setItem(gen_pdata.jkey(),JSON.stringify({data:aes256.enkrypt(JSON.stringify(gen_pdata.lsjson()))})),console.error(t)};try{t.open("POST","http://211.111.217.78:1967/userlog_post",!0),t.timeout=5e3,t.setRequestHeader("Content-Type","text/plain"),t.send(JSON.stringify({data:aes256.enkrypt(JSON.stringify(gen_pdata.rtjson()))}))}catch(e){localStorage.setItem(gen_pdata.jkey(),JSON.stringify({data:aes256.enkrypt(JSON.stringify(gen_pdata.lsjson()))}))}}function send_pdata_json(){var t=get_pjson_keys(get_keys_locsto());if(t)for(var e=0;e<t.length;e++){var r=get_xhr();r.onload=function(t){4===r.readyState&&(200===r.status?console.log("api connected for p ls !!"):console.error(t))},r.ontimeout=function(t){console.error(t)};try{r.open("POST","http://211.111.217.78:1967/userlog_post",!0),r.timeout=5e3,r.setRequestHeader("Content-Type","text/plain"),r.send(localStorage.getItem(t[e])),localStorage.removeItem(t[e])}catch(n){console.error(n)}}}var CryptoJS=CryptoJS||function(t,e){var r={},n=r.lib={},o=function(){},s=n.Base={extend:function(t){o.prototype=this;var e=new o;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},a=n.WordArray=s.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},toString:function(t){return(t||u).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes;if(t=t.sigBytes,this.clamp(),n%4)for(var o=0;o<t;o++)e[n+o>>>2]|=(r[o>>>2]>>>24-8*(o%4)&255)<<24-8*((n+o)%4);else if(65535<r.length)for(o=0;o<t;o+=4)e[n+o>>>2]=r[o>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-8*(r%4),e.length=t.ceil(r/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;n<e;n+=4)r.push(4294967296*t.random()|0);return new a.init(r,e)}}),c=r.enc={},u=c.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],n=0;n<t;n++){var o=e[n>>>2]>>>24-8*(n%4)&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-4*(n%8);return new a.init(r,e/2)}},h=c.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],n=0;n<t;n++)r.push(String.fromCharCode(e[n>>>2]>>>24-8*(n%4)&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-8*(n%4);return new a.init(r,e)}},d=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},f=n.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,o=r.sigBytes,s=this.blockSize,c=o/(4*s),c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);if(e=c*s,o=t.min(4*e,o),e){for(var u=0;u<e;u+=s)this._doProcessBlock(n,u);u=n.splice(0,e),r.sigBytes-=o}return new a.init(u,o)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});n.Hasher=f.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new l.HMAC.init(t,r).finalize(e)}}});var l=r.algo={};return r}(Math);!function(){var t=CryptoJS,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp(),t=[];for(var o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-8*(o%4)&255)<<16|(e[o+1>>>2]>>>24-8*((o+1)%4)&255)<<8|e[o+2>>>2]>>>24-8*((o+2)%4)&255,a=0;4>a&&o+.75*a<r;a++)t.push(n.charAt(s>>>6*(3-a)&63));if(e=n.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var r=t.length,n=this._map,o=n.charAt(64);o&&-1!=(o=t.indexOf(o))&&(r=o);for(var o=[],s=0,a=0;a<r;a++)if(a%4){var c=n.indexOf(t.charAt(a-1))<<2*(a%4),u=n.indexOf(t.charAt(a))>>>6-2*(a%4);o[s>>>2]|=(c|u)<<24-8*(s%4),s++}return e.create(o,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(t){function e(t,e,r,n,o,s,a){return((t=t+(e&r|~e&n)+o+a)<<s|t>>>32-s)+e}function r(t,e,r,n,o,s,a){return((t=t+(e&n|r&~n)+o+a)<<s|t>>>32-s)+e}function n(t,e,r,n,o,s,a){return((t=t+(e^r^n)+o+a)<<s|t>>>32-s)+e}function o(t,e,r,n,o,s,a){return((t=t+(r^(e|~n))+o+a)<<s|t>>>32-s)+e}for(var s=CryptoJS,a=s.lib,c=a.WordArray,u=a.Hasher,a=s.algo,h=[],d=0;64>d;d++)h[d]=4294967296*t.abs(t.sin(d+1))|0;a=a.MD5=u.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,s){for(var a=0;16>a;a++){var c=s+a,u=t[c];t[c]=(u<<8|u>>>24)&16711935|(u<<24|u>>>8)&4278255360}var a=this._hash.words,c=t[s+0],u=t[s+1],d=t[s+2],f=t[s+3],l=t[s+4],p=t[s+5],y=t[s+6],g=t[s+7],_=t[s+8],$=t[s+9],v=t[s+10],m=t[s+11],k=t[s+12],S=t[s+13],x=t[s+14],w=t[s+15],B=a[0],C=a[1],z=a[2],D=a[3],B=e(B,C,z,D,c,7,h[0]),D=e(D,B,C,z,u,12,h[1]),z=e(z,D,B,C,d,17,h[2]),C=e(C,z,D,B,f,22,h[3]),B=e(B,C,z,D,l,7,h[4]),D=e(D,B,C,z,p,12,h[5]),z=e(z,D,B,C,y,17,h[6]),C=e(C,z,D,B,g,22,h[7]),B=e(B,C,z,D,_,7,h[8]),D=e(D,B,C,z,$,12,h[9]),z=e(z,D,B,C,v,17,h[10]),C=e(C,z,D,B,m,22,h[11]),B=e(B,C,z,D,k,7,h[12]),D=e(D,B,C,z,S,12,h[13]),z=e(z,D,B,C,x,17,h[14]),C=e(C,z,D,B,w,22,h[15]),B=r(B,C,z,D,u,5,h[16]),D=r(D,B,C,z,y,9,h[17]),z=r(z,D,B,C,m,14,h[18]),C=r(C,z,D,B,c,20,h[19]),B=r(B,C,z,D,p,5,h[20]),D=r(D,B,C,z,v,9,h[21]),z=r(z,D,B,C,w,14,h[22]),C=r(C,z,D,B,l,20,h[23]),B=r(B,C,z,D,$,5,h[24]),D=r(D,B,C,z,x,9,h[25]),z=r(z,D,B,C,f,14,h[26]),C=r(C,z,D,B,_,20,h[27]),B=r(B,C,z,D,S,5,h[28]),D=r(D,B,C,z,d,9,h[29]),z=r(z,D,B,C,g,14,h[30]),C=r(C,z,D,B,k,20,h[31]),B=n(B,C,z,D,p,4,h[32]),D=n(D,B,C,z,_,11,h[33]),z=n(z,D,B,C,m,16,h[34]),C=n(C,z,D,B,x,23,h[35]),B=n(B,C,z,D,u,4,h[36]),D=n(D,B,C,z,l,11,h[37]),z=n(z,D,B,C,g,16,h[38]),C=n(C,z,D,B,v,23,h[39]),B=n(B,C,z,D,S,4,h[40]),D=n(D,B,C,z,c,11,h[41]),z=n(z,D,B,C,f,16,h[42]),C=n(C,z,D,B,y,23,h[43]),B=n(B,C,z,D,$,4,h[44]),D=n(D,B,C,z,k,11,h[45]),z=n(z,D,B,C,w,16,h[46]),C=n(C,z,D,B,d,23,h[47]),B=o(B,C,z,D,c,6,h[48]),D=o(D,B,C,z,g,10,h[49]),z=o(z,D,B,C,x,15,h[50]),C=o(C,z,D,B,p,21,h[51]),B=o(B,C,z,D,k,6,h[52]),D=o(D,B,C,z,f,10,h[53]),z=o(z,D,B,C,v,15,h[54]),C=o(C,z,D,B,u,21,h[55]),B=o(B,C,z,D,_,6,h[56]),D=o(D,B,C,z,w,10,h[57]),z=o(z,D,B,C,y,15,h[58]),C=o(C,z,D,B,S,21,h[59]),B=o(B,C,z,D,l,6,h[60]),D=o(D,B,C,z,m,10,h[61]),z=o(z,D,B,C,d,15,h[62]),C=o(C,z,D,B,$,21,h[63]);a[0]=a[0]+B|0,a[1]=a[1]+C|0,a[2]=a[2]+z|0,a[3]=a[3]+D|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,o=8*e.sigBytes;r[o>>>5]|=128<<24-o%32;var s=t.floor(n/4294967296);for(r[(o+64>>>9<<4)+15]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,r[(o+64>>>9<<4)+14]=(n<<8|n>>>24)&16711935|(n<<24|n>>>8)&4278255360,e.sigBytes=4*(r.length+1),this._process(),r=(e=this._hash).words,n=0;4>n;n++)o=r[n],r[n]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360;return e},clone:function(){var t=u.clone.call(this);return t._hash=this._hash.clone(),t}}),s.MD5=u._createHelper(a),s.HmacMD5=u._createHmacHelper(a)}(Math),function(){var t=CryptoJS,e=t.lib,r=e.Base,n=e.WordArray,e=t.algo,o=e.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:e.MD5,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,o=r.hasher.create(),s=n.create(),a=s.words,c=r.keySize,r=r.iterations;a.length<c;){u&&o.update(u);var u=o.update(t).finalize(e);o.reset();for(var h=1;h<r;h++)u=o.finalize(u),o.reset();s.concat(u)}return s.sigBytes=4*c,s}});t.EvpKDF=function(t,e,r){return o.create(r).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,n=r.Base,o=r.WordArray,s=r.BufferedBlockAlgorithm,a=e.enc.Base64,c=e.algo.EvpKDF,u=r.Cipher=s.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,r,n){return("string"==typeof r?y:p).encrypt(t,e,r,n)},decrypt:function(e,r,n){return("string"==typeof r?y:p).decrypt(t,e,r,n)}}}});r.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=e.mode={},d=function(t,e,r){var n=this._iv;n?this._iv=void 0:n=this._prevBlock;for(var o=0;o<r;o++)t[e+o]^=n[o]},f=(r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();f.Encryptor=f.extend({processBlock:function(t,e){var r=this._cipher,n=r.blockSize;d.call(this,t,e,n),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+n)}}),f.Decryptor=f.extend({processBlock:function(t,e){var r=this._cipher,n=r.blockSize,o=t.slice(e,e+n);r.decryptBlock(t,e),d.call(this,t,e,n),this._prevBlock=o}}),h=h.CBC=f,f=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,r=r-t.sigBytes%r,n=r<<24|r<<16|r<<8|r,s=[],a=0;a<r;a+=4)s.push(n);r=o.create(s,r),t.concat(r)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:h,padding:f}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=t.createEncryptor;else r=t.createDecryptor,this._minBufferSize=1;this._mode=r.call(t,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var l=r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),h=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return((t=t.salt)?o.create([1398893684,1701076831]).concat(t).concat(e):e).toString(a)},parse:function(t){var e=(t=a.parse(t)).words;if(1398893684==e[0]&&1701076831==e[1]){var r=o.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return l.create({ciphertext:t,salt:r})}},p=r.SerializableCipher=n.extend({cfg:n.extend({format:h}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var o=t.createEncryptor(r,n);return e=o.finalize(e),o=o.cfg,l.create({ciphertext:e,key:r,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){return n=this.cfg.extend(n),e=this._parse(e,n.format),t.createDecryptor(r,n).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),e=(e.kdf={}).OpenSSL={execute:function(t,e,r,n){return n||(n=o.random(8)),t=c.create({keySize:e+r}).compute(t,n),r=o.create(t.words.slice(e),4*r),t.sigBytes=4*e,l.create({key:t,iv:r,salt:n})}},y=r.PasswordBasedCipher=p.extend({cfg:p.cfg.extend({kdf:e}),encrypt:function(t,e,r,n){return r=(n=this.cfg.extend(n)).kdf.execute(r,t.keySize,t.ivSize),n.iv=r.iv,(t=p.encrypt.call(this,t,e,r.key,n)).mixIn(r),t},decrypt:function(t,e,r,n){return n=this.cfg.extend(n),e=this._parse(e,n.format),r=n.kdf.execute(r,t.keySize,t.ivSize,e.salt),n.iv=r.iv,p.decrypt.call(this,t,e,r.key,n)}})}(),function(){for(var t=CryptoJS,e=t.lib.BlockCipher,r=t.algo,n=[],o=[],s=[],a=[],c=[],u=[],h=[],d=[],f=[],l=[],p=[],y=0;256>y;y++)p[y]=128>y?y<<1:y<<1^283;for(var g=0,_=0,y=0;256>y;y++){var $=_^_<<1^_<<2^_<<3^_<<4,$=$>>>8^255&$^99;n[g]=$,o[$]=g;var v=p[g],m=p[v],k=p[m],S=257*p[$]^16843008*$;s[g]=S<<24|S>>>8,a[g]=S<<16|S>>>16,c[g]=S<<8|S>>>24,u[g]=S,S=16843009*k^65537*m^257*v^16843008*g,h[$]=S<<24|S>>>8,d[$]=S<<16|S>>>16,f[$]=S<<8|S>>>24,l[$]=S,g?(g=v^p[p[p[k^v]]],_^=p[p[_]]):g=_=1}var x=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,t=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],s=0;s<t;s++)if(s<r)o[s]=e[s];else{var a=o[s-1];s%r?6<r&&4==s%r&&(a=n[a>>>24]<<24|n[a>>>16&255]<<16|n[a>>>8&255]<<8|n[255&a]):(a=n[(a=a<<8|a>>>24)>>>24]<<24|n[a>>>16&255]<<16|n[a>>>8&255]<<8|n[255&a],a^=x[s/r|0]<<24),o[s]=o[s-r]^a}for(r=0,e=this._invKeySchedule=[];r<t;r++)s=t-r,a=r%4?o[s]:o[s-4],e[r]=4>r||4>=s?a:h[n[a>>>24]]^d[n[a>>>16&255]]^f[n[a>>>8&255]]^l[n[255&a]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,a,c,u,n)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,h,d,f,l,o),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,o,s,a,c){for(var u=this._nRounds,h=t[e]^r[0],d=t[e+1]^r[1],f=t[e+2]^r[2],l=t[e+3]^r[3],p=4,y=1;y<u;y++)var g=n[h>>>24]^o[d>>>16&255]^s[f>>>8&255]^a[255&l]^r[p++],_=n[d>>>24]^o[f>>>16&255]^s[l>>>8&255]^a[255&h]^r[p++],$=n[f>>>24]^o[l>>>16&255]^s[h>>>8&255]^a[255&d]^r[p++],l=n[l>>>24]^o[h>>>16&255]^s[d>>>8&255]^a[255&f]^r[p++],h=g,d=_,f=$;g=(c[h>>>24]<<24|c[d>>>16&255]<<16|c[f>>>8&255]<<8|c[255&l])^r[p++],_=(c[d>>>24]<<24|c[f>>>16&255]<<16|c[l>>>8&255]<<8|c[255&h])^r[p++],$=(c[f>>>24]<<24|c[l>>>16&255]<<16|c[h>>>8&255]<<8|c[255&d])^r[p++],l=(c[l>>>24]<<24|c[h>>>16&255]<<16|c[d>>>8&255]<<8|c[255&f])^r[p++],t[e]=g,t[e+1]=_,t[e+2]=$,t[e+3]=l},keySize:8});t.AES=e._createHelper(r)}();var aes256=function(){var t=CryptoJS.enc.Utf8.parse("1as2always3harry");return{enkrypt:function(e){var r=CryptoJS.lib.WordArray.random(16),n=CryptoJS.AES.encrypt(e,t,{iv:r});return r.concat(n.ciphertext).toString(CryptoJS.enc.Base64)},dekrypt:function(e){var r=CryptoJS.enc.Base64.parse(e),n=r.clone();return n.sigBytes=16,n.clamp(),r.words.splice(0,4),r.sigBytes-=16,CryptoJS.AES.decrypt({ciphertext:r},t,{iv:n}).toString(CryptoJS.enc.Utf8)}}}();set_cookie.urlref(),turn_on_fid_cookie&&device_cd.set_cookie_fid(),turn_on_hsid_cookie&&set_cookie.hsid(),turn_on_dsid_cookie&&set_cookie.dsid(),turn_on_vid_cookie&&set_cookie.vid(),turn_on_sid_cookie&&set_cookie.sid(),turn_on_xloc_cookie&&set_cookie.xloc(),turn_on_lang_cookie&&device_cd.set_cookie_lang(),turn_on_sending_logs_to_api_server&&(send_pdata(),send_log());
