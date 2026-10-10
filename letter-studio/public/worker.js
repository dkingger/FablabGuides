var ih=Object.create;var ha=Object.defineProperty;var rh=Object.getOwnPropertyDescriptor;var sh=Object.getOwnPropertyNames;var oh=Object.getPrototypeOf,ah=Object.prototype.hasOwnProperty;var lh=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var ch=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of sh(t))!ah.call(n,s)&&s!==e&&ha(n,s,{get:()=>t[s],enumerable:!(r=rh(t,s))||r.enumerable});return n};var Ns=(n,t,e)=>(e=n!=null?ih(oh(n)):{},ch(t||!n||!n.__esModule?ha(e,"default",{value:n,enumerable:!0}):e,n));var vr=lh((Zp,gr)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof gr<"u"&&gr.exports?(gr.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var r="chrome";e="Netscape"}else{var r=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};r.indexOf("chrome")!=-1&&r.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,r.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,r.indexOf("safari")!=-1&&r.indexOf("chrome")==-1&&r.indexOf("chromium")==-1?s.safari=1:s.safari=0,r.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,r.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,r.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,r.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,r.indexOf("opera")!=-1?s.opera=1:s.opera=0,r.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,r.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,r.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,r.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,r.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var a,c=0xdeadbeefcafe,h=(c&16777215)==15715070;function u(i,o,l){n.biginteger_used=1,i!=null&&(typeof i=="number"&&typeof o>"u"?this.fromInt(i):typeof i=="number"?this.fromNumber(i,o,l):o==null&&typeof i!="string"?this.fromString(i,256):this.fromString(i,o))}function d(){return new u(null,void 0,void 0)}function p(i,o,l,f,g,M){for(;--M>=0;){var T=o*this[i++]+l[f]+g;g=Math.floor(T/67108864),l[f++]=T&67108863}return g}function v(i,o,l,f,g,M){for(var T=o&32767,W=o>>15;--M>=0;){var G=this[i]&32767,at=this[i++]>>15,_t=W*G+at*T;G=T*G+((_t&32767)<<15)+l[f]+(g&1073741823),g=(G>>>30)+(_t>>>15)+W*at+(g>>>30),l[f++]=G&1073741823}return g}function y(i,o,l,f,g,M){for(var T=o&16383,W=o>>14;--M>=0;){var G=this[i]&16383,at=this[i++]>>14,_t=W*G+at*T;G=T*G+((_t&16383)<<14)+l[f]+g,g=(G>>28)+(_t>>14)+W*at,l[f++]=G&268435455}return g}h&&e=="Microsoft Internet Explorer"?(u.prototype.am=v,a=30):h&&e!="Netscape"?(u.prototype.am=p,a=26):(u.prototype.am=y,a=28),u.prototype.DB=a,u.prototype.DM=(1<<a)-1,u.prototype.DV=1<<a;var m=52;u.prototype.FV=Math.pow(2,m),u.prototype.F1=m-a,u.prototype.F2=2*a-m;var b="0123456789abcdefghijklmnopqrstuvwxyz",w=new Array,S,P;for(S=48,P=0;P<=9;++P)w[S++]=P;for(S=97,P=10;P<36;++P)w[S++]=P;for(S=65,P=10;P<36;++P)w[S++]=P;function R(i){return b.charAt(i)}function C(i,o){var l=w[i.charCodeAt(o)];return l??-1}function A(i){for(var o=this.t-1;o>=0;--o)i[o]=this[o];i.t=this.t,i.s=this.s}function N(i){this.t=1,this.s=i<0?-1:0,i>0?this[0]=i:i<-1?this[0]=i+this.DV:this.t=0}function F(i){var o=d();return o.fromInt(i),o}function E(i,o){var l;if(o==16)l=4;else if(o==8)l=3;else if(o==256)l=8;else if(o==2)l=1;else if(o==32)l=5;else if(o==4)l=2;else{this.fromRadix(i,o);return}this.t=0,this.s=0;for(var f=i.length,g=!1,M=0;--f>=0;){var T=l==8?i[f]&255:C(i,f);if(T<0){i.charAt(f)=="-"&&(g=!0);continue}g=!1,M==0?this[this.t++]=T:M+l>this.DB?(this[this.t-1]|=(T&(1<<this.DB-M)-1)<<M,this[this.t++]=T>>this.DB-M):this[this.t-1]|=T<<M,M+=l,M>=this.DB&&(M-=this.DB)}l==8&&(i[0]&128)!=0&&(this.s=-1,M>0&&(this[this.t-1]|=(1<<this.DB-M)-1<<M)),this.clamp(),g&&u.ZERO.subTo(this,this)}function O(){for(var i=this.s&this.DM;this.t>0&&this[this.t-1]==i;)--this.t}function L(i){if(this.s<0)return"-"+this.negate().toString(i);var o;if(i==16)o=4;else if(i==8)o=3;else if(i==2)o=1;else if(i==32)o=5;else if(i==4)o=2;else return this.toRadix(i);var l=(1<<o)-1,f,g=!1,M="",T=this.t,W=this.DB-T*this.DB%o;if(T-- >0)for(W<this.DB&&(f=this[T]>>W)>0&&(g=!0,M=R(f));T>=0;)W<o?(f=(this[T]&(1<<W)-1)<<o-W,f|=this[--T]>>(W+=this.DB-o)):(f=this[T]>>(W-=o)&l,W<=0&&(W+=this.DB,--T)),f>0&&(g=!0),g&&(M+=R(f));return g?M:"0"}function U(){var i=d();return u.ZERO.subTo(this,i),i}function k(){return this.s<0?this.negate():this}function Z(i){var o=this.s-i.s;if(o!=0)return o;var l=this.t;if(o=l-i.t,o!=0)return this.s<0?-o:o;for(;--l>=0;)if((o=this[l]-i[l])!=0)return o;return 0}function tt(i){var o=1,l;return(l=i>>>16)!=0&&(i=l,o+=16),(l=i>>8)!=0&&(i=l,o+=8),(l=i>>4)!=0&&(i=l,o+=4),(l=i>>2)!=0&&(i=l,o+=2),(l=i>>1)!=0&&(i=l,o+=1),o}function Q(){return this.t<=0?0:this.DB*(this.t-1)+tt(this[this.t-1]^this.s&this.DM)}function it(i,o){var l;for(l=this.t-1;l>=0;--l)o[l+i]=this[l];for(l=i-1;l>=0;--l)o[l]=0;o.t=this.t+i,o.s=this.s}function Y(i,o){for(var l=i;l<this.t;++l)o[l-i]=this[l];o.t=Math.max(this.t-i,0),o.s=this.s}function et(i,o){var l=i%this.DB,f=this.DB-l,g=(1<<f)-1,M=Math.floor(i/this.DB),T=this.s<<l&this.DM,W;for(W=this.t-1;W>=0;--W)o[W+M+1]=this[W]>>f|T,T=(this[W]&g)<<l;for(W=M-1;W>=0;--W)o[W]=0;o[M]=T,o.t=this.t+M+1,o.s=this.s,o.clamp()}function H(i,o){o.s=this.s;var l=Math.floor(i/this.DB);if(l>=this.t){o.t=0;return}var f=i%this.DB,g=this.DB-f,M=(1<<f)-1;o[0]=this[l]>>f;for(var T=l+1;T<this.t;++T)o[T-l-1]|=(this[T]&M)<<g,o[T-l]=this[T]>>f;f>0&&(o[this.t-l-1]|=(this.s&M)<<g),o.t=this.t-l,o.clamp()}function K(i,o){for(var l=0,f=0,g=Math.min(i.t,this.t);l<g;)f+=this[l]-i[l],o[l++]=f&this.DM,f>>=this.DB;if(i.t<this.t){for(f-=i.s;l<this.t;)f+=this[l],o[l++]=f&this.DM,f>>=this.DB;f+=this.s}else{for(f+=this.s;l<i.t;)f-=i[l],o[l++]=f&this.DM,f>>=this.DB;f-=i.s}o.s=f<0?-1:0,f<-1?o[l++]=this.DV+f:f>0&&(o[l++]=f),o.t=l,o.clamp()}function lt(i,o){var l=this.abs(),f=i.abs(),g=l.t;for(o.t=g+f.t;--g>=0;)o[g]=0;for(g=0;g<f.t;++g)o[g+l.t]=l.am(0,f[g],o,g,0,l.t);o.s=0,o.clamp(),this.s!=i.s&&u.ZERO.subTo(o,o)}function J(i){for(var o=this.abs(),l=i.t=2*o.t;--l>=0;)i[l]=0;for(l=0;l<o.t-1;++l){var f=o.am(l,o[l],i,2*l,0,1);(i[l+o.t]+=o.am(l+1,2*o[l],i,2*l+1,f,o.t-l-1))>=o.DV&&(i[l+o.t]-=o.DV,i[l+o.t+1]=1)}i.t>0&&(i[i.t-1]+=o.am(l,o[l],i,2*l,0,1)),i.s=0,i.clamp()}function z(i,o,l){var f=i.abs();if(!(f.t<=0)){var g=this.abs();if(g.t<f.t){o?.fromInt(0),l!=null&&this.copyTo(l);return}l==null&&(l=d());var M=d(),T=this.s,W=i.s,G=this.DB-tt(f[f.t-1]);G>0?(f.lShiftTo(G,M),g.lShiftTo(G,l)):(f.copyTo(M),g.copyTo(l));var at=M.t,_t=M[at-1];if(_t!=0){var mt=_t*(1<<this.F1)+(at>1?M[at-2]>>this.F2:0),It=this.FV/mt,Kt=(1<<this.F1)/mt,ae=1<<this.F2,le=l.t,ge=le-at,Ne=o??d();for(M.dlShiftTo(ge,Ne),l.compareTo(Ne)>=0&&(l[l.t++]=1,l.subTo(Ne,l)),u.ONE.dlShiftTo(at,Ne),Ne.subTo(M,M);M.t<at;)M[M.t++]=0;for(;--ge>=0;){var qe=l[--le]==_t?this.DM:Math.floor(l[le]*It+(l[le-1]+ae)*Kt);if((l[le]+=M.am(0,qe,l,ge,0,at))<qe)for(M.dlShiftTo(ge,Ne),l.subTo(Ne,l);l[le]<--qe;)l.subTo(Ne,l)}o!=null&&(l.drShiftTo(at,o),T!=W&&u.ZERO.subTo(o,o)),l.t=at,l.clamp(),G>0&&l.rShiftTo(G,l),T<0&&u.ZERO.subTo(l,l)}}}function B(i){var o=d();return this.abs().divRemTo(i,null,o),this.s<0&&o.compareTo(u.ZERO)>0&&i.subTo(o,o),o}function j(i){this.m=i}function q(i){return i.s<0||i.compareTo(this.m)>=0?i.mod(this.m):i}function nt(i){return i}function bt(i){i.divRemTo(this.m,null,i)}function Tt(i,o,l){i.multiplyTo(o,l),this.reduce(l)}function St(i,o){i.squareTo(o),this.reduce(o)}j.prototype.convert=q,j.prototype.revert=nt,j.prototype.reduce=bt,j.prototype.mulTo=Tt,j.prototype.sqrTo=St;function Lt(){if(this.t<1)return 0;var i=this[0];if((i&1)==0)return 0;var o=i&3;return o=o*(2-(i&15)*o)&15,o=o*(2-(i&255)*o)&255,o=o*(2-((i&65535)*o&65535))&65535,o=o*(2-i*o%this.DV)%this.DV,o>0?this.DV-o:-o}function Wt(i){this.m=i,this.mp=i.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<i.DB-15)-1,this.mt2=2*i.t}function Yt(i){var o=d();return i.abs().dlShiftTo(this.m.t,o),o.divRemTo(this.m,null,o),i.s<0&&o.compareTo(u.ZERO)>0&&this.m.subTo(o,o),o}function Ct(i){var o=d();return i.copyTo(o),this.reduce(o),o}function dt(i){for(;i.t<=this.mt2;)i[i.t++]=0;for(var o=0;o<this.m.t;++o){var l=i[o]&32767,f=l*this.mpl+((l*this.mph+(i[o]>>15)*this.mpl&this.um)<<15)&i.DM;for(l=o+this.m.t,i[l]+=this.m.am(0,f,i,o,0,this.m.t);i[l]>=i.DV;)i[l]-=i.DV,i[++l]++}i.clamp(),i.drShiftTo(this.m.t,i),i.compareTo(this.m)>=0&&i.subTo(this.m,i)}function ht(i,o){i.squareTo(o),this.reduce(o)}function xt(i,o,l){i.multiplyTo(o,l),this.reduce(l)}Wt.prototype.convert=Yt,Wt.prototype.revert=Ct,Wt.prototype.reduce=dt,Wt.prototype.mulTo=xt,Wt.prototype.sqrTo=ht;function Pt(){return(this.t>0?this[0]&1:this.s)==0}function gt(i,o){if(i>4294967295||i<1)return u.ONE;var l=d(),f=d(),g=o.convert(this),M=tt(i)-1;for(g.copyTo(l);--M>=0;)if(o.sqrTo(l,f),(i&1<<M)>0)o.mulTo(f,g,l);else{var T=l;l=f,f=T}return o.revert(l)}function ut(i,o){var l;return i<256||o.isEven()?l=new j(o):l=new Wt(o),this.exp(i,l)}u.prototype.copyTo=A,u.prototype.fromInt=N,u.prototype.fromString=E,u.prototype.clamp=O,u.prototype.dlShiftTo=it,u.prototype.drShiftTo=Y,u.prototype.lShiftTo=et,u.prototype.rShiftTo=H,u.prototype.subTo=K,u.prototype.multiplyTo=lt,u.prototype.squareTo=J,u.prototype.divRemTo=z,u.prototype.invDigit=Lt,u.prototype.isEven=Pt,u.prototype.exp=gt,u.prototype.toString=L,u.prototype.negate=U,u.prototype.abs=k,u.prototype.compareTo=Z,u.prototype.bitLength=Q,u.prototype.mod=B,u.prototype.modPowInt=ut,u.ZERO=F(0),u.ONE=F(1);function pt(){var i=d();return this.copyTo(i),i}function Bt(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Jt(){return this.t==0?this.s:this[0]<<24>>24}function At(){return this.t==0?this.s:this[0]<<16>>16}function ne(i){return Math.floor(Math.LN2*this.DB/Math.log(i))}function ee(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function Ut(i){if(i==null&&(i=10),this.signum()==0||i<2||i>36)return"0";var o=this.chunkSize(i),l=Math.pow(i,o),f=F(l),g=d(),M=d(),T="";for(this.divRemTo(f,g,M);g.signum()>0;)T=(l+M.intValue()).toString(i).substr(1)+T,g.divRemTo(f,g,M);return M.intValue().toString(i)+T}function wt(i,o){this.fromInt(0),o==null&&(o=10);for(var l=this.chunkSize(o),f=Math.pow(o,l),g=!1,M=0,T=0,W=0;W<i.length;++W){var G=C(i,W);if(G<0){i.charAt(W)=="-"&&this.signum()==0&&(g=!0);continue}T=o*T+G,++M>=l&&(this.dMultiply(f),this.dAddOffset(T,0),M=0,T=0)}M>0&&(this.dMultiply(Math.pow(o,M)),this.dAddOffset(T,0)),g&&u.ZERO.subTo(this,this)}function Ot(i,o,l){if(typeof o=="number")if(i<2)this.fromInt(1);else for(this.fromNumber(i,l),this.testBit(i-1)||this.bitwiseTo(u.ONE.shiftLeft(i-1),Qt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(o);)this.dAddOffset(2,0),this.bitLength()>i&&this.subTo(u.ONE.shiftLeft(i-1),this);else{var f=new Array,g=i&7;f.length=(i>>3)+1,o.nextBytes(f),g>0?f[0]&=(1<<g)-1:f[0]=0,this.fromString(f,256)}}function Nt(){var i=this.t,o=new Array;o[0]=this.s;var l=this.DB-i*this.DB%8,f,g=0;if(i-- >0)for(l<this.DB&&(f=this[i]>>l)!=(this.s&this.DM)>>l&&(o[g++]=f|this.s<<this.DB-l);i>=0;)l<8?(f=(this[i]&(1<<l)-1)<<8-l,f|=this[--i]>>(l+=this.DB-8)):(f=this[i]>>(l-=8)&255,l<=0&&(l+=this.DB,--i)),(f&128)!=0&&(f|=-256),g==0&&(this.s&128)!=(f&128)&&++g,(g>0||f!=this.s)&&(o[g++]=f);return o}function kt(i){return this.compareTo(i)==0}function Zt(i){return this.compareTo(i)<0?this:i}function jt(i){return this.compareTo(i)>0?this:i}function Ht(i,o,l){var f,g,M=Math.min(i.t,this.t);for(f=0;f<M;++f)l[f]=o(this[f],i[f]);if(i.t<this.t){for(g=i.s&this.DM,f=M;f<this.t;++f)l[f]=o(this[f],g);l.t=this.t}else{for(g=this.s&this.DM,f=M;f<i.t;++f)l[f]=o(g,i[f]);l.t=i.t}l.s=o(this.s,i.s),l.clamp()}function $t(i,o){return i&o}function ce(i){var o=d();return this.bitwiseTo(i,$t,o),o}function Qt(i,o){return i|o}function Ae(i){var o=d();return this.bitwiseTo(i,Qt,o),o}function Xt(i,o){return i^o}function Ee(i){var o=d();return this.bitwiseTo(i,Xt,o),o}function Me(i,o){return i&~o}function Ue(i){var o=d();return this.bitwiseTo(i,Me,o),o}function Se(){for(var i=d(),o=0;o<this.t;++o)i[o]=this.DM&~this[o];return i.t=this.t,i.s=~this.s,i}function ze(i){var o=d();return i<0?this.rShiftTo(-i,o):this.lShiftTo(i,o),o}function Un(i){var o=d();return i<0?this.lShiftTo(-i,o):this.rShiftTo(i,o),o}function bn(i){if(i==0)return-1;var o=0;return(i&65535)==0&&(i>>=16,o+=16),(i&255)==0&&(i>>=8,o+=8),(i&15)==0&&(i>>=4,o+=4),(i&3)==0&&(i>>=2,o+=2),(i&1)==0&&++o,o}function Bn(){for(var i=0;i<this.t;++i)if(this[i]!=0)return i*this.DB+bn(this[i]);return this.s<0?this.t*this.DB:-1}function $e(i){for(var o=0;i!=0;)i&=i-1,++o;return o}function de(){for(var i=0,o=this.s&this.DM,l=0;l<this.t;++l)i+=$e(this[l]^o);return i}function Be(i){var o=Math.floor(i/this.DB);return o>=this.t?this.s!=0:(this[o]&1<<i%this.DB)!=0}function an(i,o){var l=u.ONE.shiftLeft(i);return this.bitwiseTo(l,o,l),l}function Qn(i){return this.changeBit(i,Qt)}function ls(i){return this.changeBit(i,Me)}function lr(i){return this.changeBit(i,Xt)}function cs(i,o){for(var l=0,f=0,g=Math.min(i.t,this.t);l<g;)f+=this[l]+i[l],o[l++]=f&this.DM,f>>=this.DB;if(i.t<this.t){for(f+=i.s;l<this.t;)f+=this[l],o[l++]=f&this.DM,f>>=this.DB;f+=this.s}else{for(f+=this.s;l<i.t;)f+=i[l],o[l++]=f&this.DM,f>>=this.DB;f+=i.s}o.s=f<0?-1:0,f>0?o[l++]=f:f<-1&&(o[l++]=this.DV+f),o.t=l,o.clamp()}function ti(i){var o=d();return this.addTo(i,o),o}function ei(i){var o=d();return this.subTo(i,o),o}function cr(i){var o=d();return this.multiplyTo(i,o),o}function hr(){var i=d();return this.squareTo(i),i}function kn(i){var o=d();return this.divRemTo(i,o,null),o}function hs(i){var o=d();return this.divRemTo(i,null,o),o}function us(i){var o=d(),l=d();return this.divRemTo(i,o,l),new Array(o,l)}function fs(i){this[this.t]=this.am(0,i-1,this,0,0,this.t),++this.t,this.clamp()}function ds(i,o){if(i!=0){for(;this.t<=o;)this[this.t++]=0;for(this[o]+=i;this[o]>=this.DV;)this[o]-=this.DV,++o>=this.t&&(this[this.t++]=0),++this[o]}}function hn(){}function ni(i){return i}function ps(i,o,l){i.multiplyTo(o,l)}function ms(i,o){i.squareTo(o)}hn.prototype.convert=ni,hn.prototype.revert=ni,hn.prototype.mulTo=ps,hn.prototype.sqrTo=ms;function gs(i){return this.exp(i,new hn)}function ur(i,o,l){var f=Math.min(this.t+i.t,o);for(l.s=0,l.t=f;f>0;)l[--f]=0;var g;for(g=l.t-this.t;f<g;++f)l[f+this.t]=this.am(0,i[f],l,f,0,this.t);for(g=Math.min(i.t,o);f<g;++f)this.am(0,i[f],l,f,0,o-f);l.clamp()}function vs(i,o,l){--o;var f=l.t=this.t+i.t-o;for(l.s=0;--f>=0;)l[f]=0;for(f=Math.max(o-this.t,0);f<i.t;++f)l[this.t+f-o]=this.am(o-f,i[f],l,0,0,this.t+f-o);l.clamp(),l.drShiftTo(1,l)}function Mn(i){this.r2=d(),this.q3=d(),u.ONE.dlShiftTo(2*i.t,this.r2),this.mu=this.r2.divide(i),this.m=i}function ys(i){if(i.s<0||i.t>2*this.m.t)return i.mod(this.m);if(i.compareTo(this.m)<0)return i;var o=d();return i.copyTo(o),this.reduce(o),o}function ii(i){return i}function xs(i){for(i.drShiftTo(this.m.t-1,this.r2),i.t>this.m.t+1&&(i.t=this.m.t+1,i.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);i.compareTo(this.r2)<0;)i.dAddOffset(1,this.m.t+1);for(i.subTo(this.r2,i);i.compareTo(this.m)>=0;)i.subTo(this.m,i)}function _s(i,o){i.squareTo(o),this.reduce(o)}function ri(i,o,l){i.multiplyTo(o,l),this.reduce(l)}Mn.prototype.convert=ys,Mn.prototype.revert=ii,Mn.prototype.reduce=xs,Mn.prototype.mulTo=ri,Mn.prototype.sqrTo=_s;function fr(i,o){var l=i.bitLength(),f,g=F(1),M;if(l<=0)return g;l<18?f=1:l<48?f=3:l<144?f=4:l<768?f=5:f=6,l<8?M=new j(o):o.isEven()?M=new Mn(o):M=new Wt(o);var T=new Array,W=3,G=f-1,at=(1<<f)-1;if(T[1]=M.convert(this),f>1){var _t=d();for(M.sqrTo(T[1],_t);W<=at;)T[W]=d(),M.mulTo(_t,T[W-2],T[W]),W+=2}var mt=i.t-1,It,Kt=!0,ae=d(),le;for(l=tt(i[mt])-1;mt>=0;){for(l>=G?It=i[mt]>>l-G&at:(It=(i[mt]&(1<<l+1)-1)<<G-l,mt>0&&(It|=i[mt-1]>>this.DB+l-G)),W=f;(It&1)==0;)It>>=1,--W;if((l-=W)<0&&(l+=this.DB,--mt),Kt)T[It].copyTo(g),Kt=!1;else{for(;W>1;)M.sqrTo(g,ae),M.sqrTo(ae,g),W-=2;W>0?M.sqrTo(g,ae):(le=g,g=ae,ae=le),M.mulTo(ae,T[It],g)}for(;mt>=0&&(i[mt]&1<<l)==0;)M.sqrTo(g,ae),le=g,g=ae,ae=le,--l<0&&(l=this.DB-1,--mt)}return M.revert(g)}function si(i){var o=this.s<0?this.negate():this.clone(),l=i.s<0?i.negate():i.clone();if(o.compareTo(l)<0){var f=o;o=l,l=f}var g=o.getLowestSetBit(),M=l.getLowestSetBit();if(M<0)return o;for(g<M&&(M=g),M>0&&(o.rShiftTo(M,o),l.rShiftTo(M,l));o.signum()>0;)(g=o.getLowestSetBit())>0&&o.rShiftTo(g,o),(g=l.getLowestSetBit())>0&&l.rShiftTo(g,l),o.compareTo(l)>=0?(o.subTo(l,o),o.rShiftTo(1,o)):(l.subTo(o,l),l.rShiftTo(1,l));return M>0&&l.lShiftTo(M,l),l}function bs(i){if(i<=0)return 0;var o=this.DV%i,l=this.s<0?i-1:0;if(this.t>0)if(o==0)l=this[0]%i;else for(var f=this.t-1;f>=0;--f)l=(o*l+this[f])%i;return l}function Ms(i){var o=i.isEven();if(this.isEven()&&o||i.signum()==0)return u.ZERO;for(var l=i.clone(),f=this.clone(),g=F(1),M=F(0),T=F(0),W=F(1);l.signum()!=0;){for(;l.isEven();)l.rShiftTo(1,l),o?((!g.isEven()||!M.isEven())&&(g.addTo(this,g),M.subTo(i,M)),g.rShiftTo(1,g)):M.isEven()||M.subTo(i,M),M.rShiftTo(1,M);for(;f.isEven();)f.rShiftTo(1,f),o?((!T.isEven()||!W.isEven())&&(T.addTo(this,T),W.subTo(i,W)),T.rShiftTo(1,T)):W.isEven()||W.subTo(i,W),W.rShiftTo(1,W);l.compareTo(f)>=0?(l.subTo(f,l),o&&g.subTo(T,g),M.subTo(W,M)):(f.subTo(l,f),o&&T.subTo(g,T),W.subTo(M,W))}if(f.compareTo(u.ONE)!=0)return u.ZERO;if(W.compareTo(i)>=0)return W.subtract(i);if(W.signum()<0)W.addTo(i,W);else return W;return W.signum()<0?W.add(i):W}var ye=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ss=(1<<26)/ye[ye.length-1];function dr(i){var o,l=this.abs();if(l.t==1&&l[0]<=ye[ye.length-1]){for(o=0;o<ye.length;++o)if(l[0]==ye[o])return!0;return!1}if(l.isEven())return!1;for(o=1;o<ye.length;){for(var f=ye[o],g=o+1;g<ye.length&&f<Ss;)f*=ye[g++];for(f=l.modInt(f);o<g;)if(f%ye[o++]==0)return!1}return l.millerRabin(i)}function oi(i){var o=this.subtract(u.ONE),l=o.getLowestSetBit();if(l<=0)return!1;var f=o.shiftRight(l);i=i+1>>1,i>ye.length&&(i=ye.length);for(var g=d(),M=0;M<i;++M){g.fromInt(ye[Math.floor(Math.random()*ye.length)]);var T=g.modPow(f,this);if(T.compareTo(u.ONE)!=0&&T.compareTo(o)!=0){for(var W=1;W++<l&&T.compareTo(o)!=0;)if(T=T.modPowInt(2,this),T.compareTo(u.ONE)==0)return!1;if(T.compareTo(o)!=0)return!1}}return!0}u.prototype.chunkSize=ne,u.prototype.toRadix=Ut,u.prototype.fromRadix=wt,u.prototype.fromNumber=Ot,u.prototype.bitwiseTo=Ht,u.prototype.changeBit=an,u.prototype.addTo=cs,u.prototype.dMultiply=fs,u.prototype.dAddOffset=ds,u.prototype.multiplyLowerTo=ur,u.prototype.multiplyUpperTo=vs,u.prototype.modInt=bs,u.prototype.millerRabin=oi,u.prototype.clone=pt,u.prototype.intValue=Bt,u.prototype.byteValue=Jt,u.prototype.shortValue=At,u.prototype.signum=ee,u.prototype.toByteArray=Nt,u.prototype.equals=kt,u.prototype.min=Zt,u.prototype.max=jt,u.prototype.and=ce,u.prototype.or=Ae,u.prototype.xor=Ee,u.prototype.andNot=Ue,u.prototype.not=Se,u.prototype.shiftLeft=ze,u.prototype.shiftRight=Un,u.prototype.getLowestSetBit=Bn,u.prototype.bitCount=de,u.prototype.testBit=Be,u.prototype.setBit=Qn,u.prototype.clearBit=ls,u.prototype.flipBit=lr,u.prototype.add=ti,u.prototype.subtract=ei,u.prototype.multiply=cr,u.prototype.divide=kn,u.prototype.remainder=hs,u.prototype.divideAndRemainder=us,u.prototype.modPow=fr,u.prototype.modInverse=Ms,u.prototype.pow=gs,u.prototype.gcd=si,u.prototype.isProbablePrime=dr,u.prototype.square=hr;var oe=u;oe.prototype.IsNegative=function(){return this.compareTo(oe.ZERO)==-1},oe.op_Equality=function(i,o){return i.compareTo(o)==0},oe.op_Inequality=function(i,o){return i.compareTo(o)!=0},oe.op_GreaterThan=function(i,o){return i.compareTo(o)>0},oe.op_LessThan=function(i,o){return i.compareTo(o)<0},oe.op_Addition=function(i,o){return new oe(i,void 0,void 0).add(new oe(o,void 0,void 0))},oe.op_Subtraction=function(i,o){return new oe(i,void 0,void 0).subtract(new oe(o,void 0,void 0))},oe.Int128Mul=function(i,o){return new oe(i,void 0,void 0).multiply(new oe(o,void 0,void 0))},oe.op_Division=function(i,o){return i.divide(o)},oe.prototype.ToDouble=function(){return parseFloat(this.toString())};var ai=function(i,o){var l;if(typeof Object.getOwnPropertyNames>"u"){for(l in o.prototype)(typeof i.prototype[l]>"u"||i.prototype[l]===Object.prototype[l])&&(i.prototype[l]=o.prototype[l]);for(l in o)typeof i[l]>"u"&&(i[l]=o[l]);i.$baseCtor=o}else{for(var f=Object.getOwnPropertyNames(o.prototype),g=0;g<f.length;g++)typeof Object.getOwnPropertyDescriptor(i.prototype,f[g])>"u"&&Object.defineProperty(i.prototype,f[g],Object.getOwnPropertyDescriptor(o.prototype,f[g]));for(l in o)typeof i[l]>"u"&&(i[l]=o[l]);i.$baseCtor=o}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var i=arguments;this.X=0,this.Y=0,i.length===1?(this.X=i[0].X,this.Y=i[0].Y):i.length===2&&(this.X=i[0],this.Y=i[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(i){this.X=i.X,this.Y=i.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(i,o){this.X=i,this.Y=o},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var i=!0,o=this.m_Parent;o!==null;)i=!i,o=o.m_Parent;return i},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(i){var o=this.m_Childs.length;this.m_Childs.push(i),i.m_Parent=this,i.m_Index=o},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var i=0,o=this.m_AllPolys.length;i<o;i++)this.m_AllPolys[i]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var i=this.m_AllPolys.length;return i>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&i--,i},ai(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(i){return Math.abs(i)},n.Math_Max_Int32_Int32=function(i,o){return Math.max(i,o)},s.msie||s.opera||s.safari?n.Cast_Int32=function(i){return i|0}:n.Cast_Int32=function(i){return~~i},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(i){return i<-2147483648||i>2147483647?i<0?Math.ceil(i):Math.floor(i):~~i}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(i){return Number.toInteger(i)}:s.msie7||s.msie8?n.Cast_Int64=function(i){return parseInt(i,10)}:s.msie?n.Cast_Int64=function(i){return i<-2147483648||i>2147483647?i<0?Math.ceil(i):Math.floor(i):i|0}:n.Cast_Int64=function(i){return i<0?Math.ceil(i):Math.floor(i)},n.Clear=function(i){i.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var i=arguments,o=i.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,o===3)this.X=i[0],this.Y=i[1],this.Z=i[2];else if(o===2)this.X=i[0],this.Y=i[1],this.Z=0;else if(o===1)if(i[0]instanceof n.DoublePoint){var l=i[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y),this.Z=0}else{var f=i[0];typeof f.Z>"u"&&(f.Z=0),this.X=f.X,this.Y=f.Y,this.Z=f.Z}else this.X=0,this.Y=0,this.Z=0;else if(o===2)this.X=i[0],this.Y=i[1];else if(o===1)if(i[0]instanceof n.DoublePoint){var l=i[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y)}else{var f=i[0];this.X=f.X,this.Y=f.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(i,o){return i.X===o.X&&i.Y===o.Y},n.IntPoint.op_Inequality=function(i,o){return i.X!==o.X||i.Y!==o.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(i){this.X=i.X,this.Y=i.Y,n.use_xyz&&(typeof i.Z>"u"?this.Z=0:this.Z=i.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(i){this.X=n.Clipper.Round(i.X),this.Y=n.Clipper.Round(i.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(i,o,l){this.X=i,this.Y=o,n.use_xyz&&(typeof l>"u"?this.Z=0:this.Z=l)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var i=arguments,o=i.length;if(o===4)this.left=i[0],this.top=i[1],this.right=i[2],this.bottom=i[3];else if(o===1){var l=i[0];this.left=l.left,this.top=l.top,this.right=l.right,this.bottom=l.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(i){this.left=i.left,this.top=i.top,this.right=i.right,this.bottom=i.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(i,o,l,f){this.left=i,this.top=o,this.right=l,this.bottom=f},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(i,o){var l=o.Pt.Y-i.Pt.Y;return l>0?1:l<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(i){return i>-n.ClipperBase.tolerance&&i<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(i){return i.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(i,o){var l=o;do{if(n.IntPoint.op_Equality(l.Pt,i))return!0;l=l.Next}while(l!==o);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(i,o,l,f){return f?i.X===o.X&&i.Y===o.Y||i.X===l.X&&i.Y===l.Y||i.X>o.X==i.X<l.X&&i.Y>o.Y==i.Y<l.Y&&oe.op_Equality(oe.Int128Mul(i.X-o.X,l.Y-o.Y),oe.Int128Mul(l.X-o.X,i.Y-o.Y)):i.X===o.X&&i.Y===o.Y||i.X===l.X&&i.Y===l.Y||i.X>o.X==i.X<l.X&&i.Y>o.Y==i.Y<l.Y&&(i.X-o.X)*(l.Y-o.Y)===(l.X-o.X)*(i.Y-o.Y)},n.ClipperBase.prototype.PointOnPolygon=function(i,o,l){for(var f=o;;){if(this.PointOnLineSegment(i,f.Pt,f.Next.Pt,l))return!0;if(f=f.Next,f===o)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var i=arguments,o=i.length,l,f,g,M,T,W,G;return o===3?(l=i[0],f=i[1],G=i[2],G?oe.op_Equality(oe.Int128Mul(l.Delta.Y,f.Delta.X),oe.Int128Mul(l.Delta.X,f.Delta.Y)):n.Cast_Int64(l.Delta.Y*f.Delta.X)===n.Cast_Int64(l.Delta.X*f.Delta.Y)):o===4?(g=i[0],M=i[1],T=i[2],G=i[3],G?oe.op_Equality(oe.Int128Mul(g.Y-M.Y,M.X-T.X),oe.Int128Mul(g.X-M.X,M.Y-T.Y)):n.Cast_Int64((g.Y-M.Y)*(M.X-T.X))-n.Cast_Int64((g.X-M.X)*(M.Y-T.Y))===0):(g=i[0],M=i[1],T=i[2],W=i[3],G=i[4],G?oe.op_Equality(oe.Int128Mul(g.Y-M.Y,T.X-W.X),oe.Int128Mul(g.X-M.X,T.Y-W.Y)):n.Cast_Int64((g.Y-M.Y)*(T.X-W.X))-n.Cast_Int64((g.X-M.X)*(T.Y-W.Y))===0)},n.ClipperBase.SlopesEqual3=function(i,o,l){return l?oe.op_Equality(oe.Int128Mul(i.Delta.Y,o.Delta.X),oe.Int128Mul(i.Delta.X,o.Delta.Y)):n.Cast_Int64(i.Delta.Y*o.Delta.X)===n.Cast_Int64(i.Delta.X*o.Delta.Y)},n.ClipperBase.SlopesEqual4=function(i,o,l,f){return f?oe.op_Equality(oe.Int128Mul(i.Y-o.Y,o.X-l.X),oe.Int128Mul(i.X-o.X,o.Y-l.Y)):n.Cast_Int64((i.Y-o.Y)*(o.X-l.X))-n.Cast_Int64((i.X-o.X)*(o.Y-l.Y))===0},n.ClipperBase.SlopesEqual5=function(i,o,l,f,g){return g?oe.op_Equality(oe.Int128Mul(i.Y-o.Y,l.X-f.X),oe.Int128Mul(i.X-o.X,l.Y-f.Y)):n.Cast_Int64((i.Y-o.Y)*(l.X-f.X))-n.Cast_Int64((i.X-o.X)*(l.Y-f.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var i=0,o=this.m_edges.length;i<o;++i){for(var l=0,f=this.m_edges[i].length;l<f;++l)this.m_edges[i][l]=null;n.Clear(this.m_edges[i])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var i=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=i}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(i,o){o.Value?(i.X>n.ClipperBase.hiRange||i.Y>n.ClipperBase.hiRange||-i.X>n.ClipperBase.hiRange||-i.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(i.X>n.ClipperBase.loRange||i.Y>n.ClipperBase.loRange||-i.X>n.ClipperBase.loRange||-i.Y>n.ClipperBase.loRange)&&(o.Value=!0,this.RangeTest(i,o))},n.ClipperBase.prototype.InitEdge=function(i,o,l,f){i.Next=o,i.Prev=l,i.Curr.X=f.X,i.Curr.Y=f.Y,n.use_xyz&&(i.Curr.Z=f.Z),i.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(i,o){i.Curr.Y>=i.Next.Curr.Y?(i.Bot.X=i.Curr.X,i.Bot.Y=i.Curr.Y,n.use_xyz&&(i.Bot.Z=i.Curr.Z),i.Top.X=i.Next.Curr.X,i.Top.Y=i.Next.Curr.Y,n.use_xyz&&(i.Top.Z=i.Next.Curr.Z)):(i.Top.X=i.Curr.X,i.Top.Y=i.Curr.Y,n.use_xyz&&(i.Top.Z=i.Curr.Z),i.Bot.X=i.Next.Curr.X,i.Bot.Y=i.Next.Curr.Y,n.use_xyz&&(i.Bot.Z=i.Next.Curr.Z)),this.SetDx(i),i.PolyTyp=o},n.ClipperBase.prototype.FindNextLocMin=function(i){for(var o;;){for(;n.IntPoint.op_Inequality(i.Bot,i.Prev.Bot)||n.IntPoint.op_Equality(i.Curr,i.Top);)i=i.Next;if(i.Dx!==n.ClipperBase.horizontal&&i.Prev.Dx!==n.ClipperBase.horizontal)break;for(;i.Prev.Dx===n.ClipperBase.horizontal;)i=i.Prev;for(o=i;i.Dx===n.ClipperBase.horizontal;)i=i.Next;if(i.Top.Y!==i.Prev.Bot.Y){o.Prev.Bot.X<i.Bot.X&&(i=o);break}}return i},n.ClipperBase.prototype.ProcessBound=function(i,o){var l,f=i,g;if(f.OutIdx===n.ClipperBase.Skip){if(i=f,o){for(;i.Top.Y===i.Next.Bot.Y;)i=i.Next;for(;i!==f&&i.Dx===n.ClipperBase.horizontal;)i=i.Prev}else{for(;i.Top.Y===i.Prev.Bot.Y;)i=i.Prev;for(;i!==f&&i.Dx===n.ClipperBase.horizontal;)i=i.Next}if(i===f)o?f=i.Next:f=i.Prev;else{o?i=f.Next:i=f.Prev;var M=new n.LocalMinima;M.Next=null,M.Y=i.Bot.Y,M.LeftBound=null,M.RightBound=i,i.WindDelta=0,f=this.ProcessBound(i,o),this.InsertLocalMinima(M)}return f}if(i.Dx===n.ClipperBase.horizontal&&(o?l=i.Prev:l=i.Next,l.Dx===n.ClipperBase.horizontal?l.Bot.X!==i.Bot.X&&l.Top.X!==i.Bot.X&&this.ReverseHorizontal(i):l.Bot.X!==i.Bot.X&&this.ReverseHorizontal(i)),l=i,o){for(;f.Top.Y===f.Next.Bot.Y&&f.Next.OutIdx!==n.ClipperBase.Skip;)f=f.Next;if(f.Dx===n.ClipperBase.horizontal&&f.Next.OutIdx!==n.ClipperBase.Skip){for(g=f;g.Prev.Dx===n.ClipperBase.horizontal;)g=g.Prev;g.Prev.Top.X>f.Next.Top.X&&(f=g.Prev)}for(;i!==f;)i.NextInLML=i.Next,i.Dx===n.ClipperBase.horizontal&&i!==l&&i.Bot.X!==i.Prev.Top.X&&this.ReverseHorizontal(i),i=i.Next;i.Dx===n.ClipperBase.horizontal&&i!==l&&i.Bot.X!==i.Prev.Top.X&&this.ReverseHorizontal(i),f=f.Next}else{for(;f.Top.Y===f.Prev.Bot.Y&&f.Prev.OutIdx!==n.ClipperBase.Skip;)f=f.Prev;if(f.Dx===n.ClipperBase.horizontal&&f.Prev.OutIdx!==n.ClipperBase.Skip){for(g=f;g.Next.Dx===n.ClipperBase.horizontal;)g=g.Next;(g.Next.Top.X===f.Prev.Top.X||g.Next.Top.X>f.Prev.Top.X)&&(f=g.Next)}for(;i!==f;)i.NextInLML=i.Prev,i.Dx===n.ClipperBase.horizontal&&i!==l&&i.Bot.X!==i.Next.Top.X&&this.ReverseHorizontal(i),i=i.Prev;i.Dx===n.ClipperBase.horizontal&&i!==l&&i.Bot.X!==i.Next.Top.X&&this.ReverseHorizontal(i),f=f.Prev}return f},n.ClipperBase.prototype.AddPath=function(i,o,l){n.use_lines?!l&&o===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):l||n.Error("AddPath: Open paths have been disabled.");var f=i.length-1;if(l)for(;f>0&&n.IntPoint.op_Equality(i[f],i[0]);)--f;for(;f>0&&n.IntPoint.op_Equality(i[f],i[f-1]);)--f;if(l&&f<2||!l&&f<1)return!1;for(var g=new Array,M=0;M<=f;M++)g.push(new n.TEdge);var T=!0;g[1].Curr.X=i[1].X,g[1].Curr.Y=i[1].Y,n.use_xyz&&(g[1].Curr.Z=i[1].Z);var W={Value:this.m_UseFullRange};this.RangeTest(i[0],W),this.m_UseFullRange=W.Value,W.Value=this.m_UseFullRange,this.RangeTest(i[f],W),this.m_UseFullRange=W.Value,this.InitEdge(g[0],g[1],g[f],i[0]),this.InitEdge(g[f],g[0],g[f-1],i[f]);for(var M=f-1;M>=1;--M)W.Value=this.m_UseFullRange,this.RangeTest(i[M],W),this.m_UseFullRange=W.Value,this.InitEdge(g[M],g[M+1],g[M-1],i[M]);for(var G=g[0],at=G,_t=G;;){if(at.Curr===at.Next.Curr&&(l||at.Next!==G)){if(at===at.Next)break;at===G&&(G=at.Next),at=this.RemoveEdge(at),_t=at;continue}if(at.Prev===at.Next)break;if(l&&n.ClipperBase.SlopesEqual4(at.Prev.Curr,at.Curr,at.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(at.Prev.Curr,at.Curr,at.Next.Curr))){at===G&&(G=at.Next),at=this.RemoveEdge(at),at=at.Prev,_t=at;continue}if(at=at.Next,at===_t||!l&&at.Next===G)break}if(!l&&at===at.Next||l&&at.Prev===at.Next)return!1;l||(this.m_HasOpenPaths=!0,G.Prev.OutIdx=n.ClipperBase.Skip),at=G;do this.InitEdge2(at,o),at=at.Next,T&&at.Curr.Y!==G.Curr.Y&&(T=!1);while(at!==G);if(T){if(l)return!1;at.Prev.OutIdx=n.ClipperBase.Skip;var mt=new n.LocalMinima;for(mt.Next=null,mt.Y=at.Bot.Y,mt.LeftBound=null,mt.RightBound=at,mt.RightBound.Side=n.EdgeSide.esRight,mt.RightBound.WindDelta=0;at.Bot.X!==at.Prev.Top.X&&this.ReverseHorizontal(at),at.Next.OutIdx!==n.ClipperBase.Skip;)at.NextInLML=at.Next,at=at.Next;return this.InsertLocalMinima(mt),this.m_edges.push(g),!0}this.m_edges.push(g);var It,Kt=null;for(n.IntPoint.op_Equality(at.Prev.Bot,at.Prev.Top)&&(at=at.Next);at=this.FindNextLocMin(at),at!==Kt;){Kt===null&&(Kt=at);var mt=new n.LocalMinima;mt.Next=null,mt.Y=at.Bot.Y,at.Dx<at.Prev.Dx?(mt.LeftBound=at.Prev,mt.RightBound=at,It=!1):(mt.LeftBound=at,mt.RightBound=at.Prev,It=!0),mt.LeftBound.Side=n.EdgeSide.esLeft,mt.RightBound.Side=n.EdgeSide.esRight,l?mt.LeftBound.Next===mt.RightBound?mt.LeftBound.WindDelta=-1:mt.LeftBound.WindDelta=1:mt.LeftBound.WindDelta=0,mt.RightBound.WindDelta=-mt.LeftBound.WindDelta,at=this.ProcessBound(mt.LeftBound,It),at.OutIdx===n.ClipperBase.Skip&&(at=this.ProcessBound(at,It));var ae=this.ProcessBound(mt.RightBound,!It);ae.OutIdx===n.ClipperBase.Skip&&(ae=this.ProcessBound(ae,!It)),mt.LeftBound.OutIdx===n.ClipperBase.Skip?mt.LeftBound=null:mt.RightBound.OutIdx===n.ClipperBase.Skip&&(mt.RightBound=null),this.InsertLocalMinima(mt),It||(at=ae)}return!0},n.ClipperBase.prototype.AddPaths=function(i,o,l){for(var f=!1,g=0,M=i.length;g<M;++g)this.AddPath(i[g],o,l)&&(f=!0);return f},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(i,o,l){return n.IntPoint.op_Equality(i,l)||n.IntPoint.op_Equality(i,o)||n.IntPoint.op_Equality(l,o)?!1:i.X!==l.X?o.X>i.X==o.X<l.X:o.Y>i.Y==o.Y<l.Y},n.ClipperBase.prototype.RemoveEdge=function(i){i.Prev.Next=i.Next,i.Next.Prev=i.Prev;var o=i.Next;return i.Prev=null,o},n.ClipperBase.prototype.SetDx=function(i){i.Delta.X=i.Top.X-i.Bot.X,i.Delta.Y=i.Top.Y-i.Bot.Y,i.Delta.Y===0?i.Dx=n.ClipperBase.horizontal:i.Dx=i.Delta.X/i.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(i){if(this.m_MinimaList===null)this.m_MinimaList=i;else if(i.Y>=this.m_MinimaList.Y)i.Next=this.m_MinimaList,this.m_MinimaList=i;else{for(var o=this.m_MinimaList;o.Next!==null&&i.Y<o.Next.Y;)o=o.Next;i.Next=o.Next,o.Next=i}},n.ClipperBase.prototype.PopLocalMinima=function(i,o){return o.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===i?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(i){var o=i.Top.X;i.Top.X=i.Bot.X,i.Bot.X=o,n.use_xyz&&(o=i.Top.Z,i.Top.Z=i.Bot.Z,i.Bot.Z=o)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var i=this.m_MinimaList;i!==null;){this.InsertScanbeam(i.Y);var o=i.LeftBound;o!==null&&(o.Curr.X=o.Bot.X,o.Curr.Y=o.Bot.Y,n.use_xyz&&(o.Curr.Z=o.Bot.Z),o.OutIdx=n.ClipperBase.Unassigned),o=i.RightBound,o!==null&&(o.Curr.X=o.Bot.X,o.Curr.Y=o.Bot.Y,n.use_xyz&&(o.Curr.Z=o.Bot.Z),o.OutIdx=n.ClipperBase.Unassigned),i=i.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(i){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=i;else if(i>this.m_Scanbeam.Y){var o=new n.Scanbeam;o.Y=i,o.Next=this.m_Scanbeam,this.m_Scanbeam=o}else{for(var l=this.m_Scanbeam;l.Next!==null&&i<=l.Next.Y;)l=l.Next;if(i===l.Y)return;var f=new n.Scanbeam;f.Y=i,f.Next=l.Next,l.Next=f}},n.ClipperBase.prototype.PopScanbeam=function(i){return this.m_Scanbeam===null?(i.v=0,!1):(i.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var i=new n.OutRec;return i.Idx=n.ClipperBase.Unassigned,i.IsHole=!1,i.IsOpen=!1,i.FirstLeft=null,i.Pts=null,i.BottomPt=null,i.PolyNode=null,this.m_PolyOuts.push(i),i.Idx=this.m_PolyOuts.length-1,i},n.ClipperBase.prototype.DisposeOutRec=function(i){var o=this.m_PolyOuts[i];o.Pts=null,o=null,this.m_PolyOuts[i]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(i){i.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var o=i.PrevInAEL,l=i.NextInAEL;return i.NextInLML.OutIdx=i.OutIdx,o!==null?o.NextInAEL=i.NextInLML:this.m_ActiveEdges=i.NextInLML,l!==null&&(l.PrevInAEL=i.NextInLML),i.NextInLML.Side=i.Side,i.NextInLML.WindDelta=i.WindDelta,i.NextInLML.WindCnt=i.WindCnt,i.NextInLML.WindCnt2=i.WindCnt2,i=i.NextInLML,i.Curr.X=i.Bot.X,i.Curr.Y=i.Bot.Y,i.PrevInAEL=o,i.NextInAEL=l,n.ClipperBase.IsHorizontal(i)||this.InsertScanbeam(i.Top.Y),i},n.ClipperBase.prototype.SwapPositionsInAEL=function(i,o){if(!(i.NextInAEL===i.PrevInAEL||o.NextInAEL===o.PrevInAEL)){if(i.NextInAEL===o){var l=o.NextInAEL;l!==null&&(l.PrevInAEL=i);var f=i.PrevInAEL;f!==null&&(f.NextInAEL=o),o.PrevInAEL=f,o.NextInAEL=i,i.PrevInAEL=o,i.NextInAEL=l}else if(o.NextInAEL===i){var g=i.NextInAEL;g!==null&&(g.PrevInAEL=o);var M=o.PrevInAEL;M!==null&&(M.NextInAEL=i),i.PrevInAEL=M,i.NextInAEL=o,o.PrevInAEL=i,o.NextInAEL=g}else{var T=i.NextInAEL,W=i.PrevInAEL;i.NextInAEL=o.NextInAEL,i.NextInAEL!==null&&(i.NextInAEL.PrevInAEL=i),i.PrevInAEL=o.PrevInAEL,i.PrevInAEL!==null&&(i.PrevInAEL.NextInAEL=i),o.NextInAEL=T,o.NextInAEL!==null&&(o.NextInAEL.PrevInAEL=o),o.PrevInAEL=W,o.PrevInAEL!==null&&(o.PrevInAEL.NextInAEL=o)}i.PrevInAEL===null?this.m_ActiveEdges=i:o.PrevInAEL===null&&(this.m_ActiveEdges=o)}},n.ClipperBase.prototype.DeleteFromAEL=function(i){var o=i.PrevInAEL,l=i.NextInAEL;o===null&&l===null&&i!==this.m_ActiveEdges||(o!==null?o.NextInAEL=l:this.m_ActiveEdges=l,l!==null&&(l.PrevInAEL=o),i.NextInAEL=null,i.PrevInAEL=null)},n.Clipper=function(i){typeof i>"u"&&(i=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&i)!==0,this.StrictlySimple=(2&i)!==0,this.PreserveCollinear=(4&i)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(i){var o=new n.Maxima;if(o.X=i,this.m_Maxima===null)this.m_Maxima=o,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(i<this.m_Maxima.X)o.Next=this.m_Maxima,o.Prev=null,this.m_Maxima=o;else{for(var l=this.m_Maxima;l.Next!==null&&i>=l.Next.X;)l=l.Next;if(i===l.X)return;o.Next=l.Next,o.Prev=l,l.Next!==null&&(l.Next.Prev=o),l.Next=o}},n.Clipper.prototype.Execute=function(){var i=arguments,o=i.length,l=i[1]instanceof n.PolyTree;if(o===4&&!l){var f=i[0],g=i[1],M=i[2],T=i[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(g),this.m_SubjFillType=M,this.m_ClipFillType=T,this.m_ClipType=f,this.m_UsingPolyTree=!1;try{var W=this.ExecuteInternal();W&&this.BuildResult(g)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return W}else if(o===4&&l){var f=i[0],G=i[1],M=i[2],T=i[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=M,this.m_ClipFillType=T,this.m_ClipType=f,this.m_UsingPolyTree=!0;try{var W=this.ExecuteInternal();W&&this.BuildResult2(G)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return W}else if(o===2&&!l){var f=i[0],g=i[1];return this.Execute(f,g,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(o===2&&l){var f=i[0],G=i[1];return this.Execute(f,G,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(i){if(!(i.FirstLeft===null||i.IsHole!==i.FirstLeft.IsHole&&i.FirstLeft.Pts!==null)){for(var o=i.FirstLeft;o!==null&&(o.IsHole===i.IsHole||o.Pts===null);)o=o.FirstLeft;i.FirstLeft=o}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var i={},o={};if(!this.PopScanbeam(i))return!1;for(this.InsertLocalMinimaIntoAEL(i.v);this.PopScanbeam(o)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(o.v))return!1;this.ProcessEdgesAtTopOfScanbeam(o.v),i.v=o.v,this.InsertLocalMinimaIntoAEL(i.v)}var l,f,g;for(f=0,g=this.m_PolyOuts.length;f<g;f++)l=this.m_PolyOuts[f],!(l.Pts===null||l.IsOpen)&&(l.IsHole^this.ReverseSolution)==this.Area$1(l)>0&&this.ReversePolyPtLinks(l.Pts);for(this.JoinCommonEdges(),f=0,g=this.m_PolyOuts.length;f<g;f++)l=this.m_PolyOuts[f],l.Pts!==null&&(l.IsOpen?this.FixupOutPolyline(l):this.FixupOutPolygon(l));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var i=0,o=this.m_PolyOuts.length;i<o;++i)this.DisposeOutRec(i);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(i,o,l){var f=new n.Join;f.OutPt1=i,f.OutPt2=o,f.OffPt.X=l.X,f.OffPt.Y=l.Y,n.use_xyz&&(f.OffPt.Z=l.Z),this.m_Joins.push(f)},n.Clipper.prototype.AddGhostJoin=function(i,o){var l=new n.Join;l.OutPt1=i,l.OffPt.X=o.X,l.OffPt.Y=o.Y,n.use_xyz&&(l.OffPt.Z=o.Z),this.m_GhostJoins.push(l)},n.Clipper.prototype.SetZ=function(i,o,l){if(this.ZFillFunction!==null){if(i.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(i,o.Bot)?i.Z=o.Bot.Z:n.IntPoint.op_Equality(i,o.Top)?i.Z=o.Top.Z:n.IntPoint.op_Equality(i,l.Bot)?i.Z=l.Bot.Z:n.IntPoint.op_Equality(i,l.Top)?i.Z=l.Top.Z:this.ZFillFunction(o.Bot,o.Top,l.Bot,l.Top,i)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(i){for(var o={},l,f;this.PopLocalMinima(i,o);){l=o.v.LeftBound,f=o.v.RightBound;var g=null;if(l===null?(this.InsertEdgeIntoAEL(f,null),this.SetWindingCount(f),this.IsContributing(f)&&(g=this.AddOutPt(f,f.Bot))):f===null?(this.InsertEdgeIntoAEL(l,null),this.SetWindingCount(l),this.IsContributing(l)&&(g=this.AddOutPt(l,l.Bot)),this.InsertScanbeam(l.Top.Y)):(this.InsertEdgeIntoAEL(l,null),this.InsertEdgeIntoAEL(f,l),this.SetWindingCount(l),f.WindCnt=l.WindCnt,f.WindCnt2=l.WindCnt2,this.IsContributing(l)&&(g=this.AddLocalMinPoly(l,f,l.Bot)),this.InsertScanbeam(l.Top.Y)),f!==null&&(n.ClipperBase.IsHorizontal(f)?(f.NextInLML!==null&&this.InsertScanbeam(f.NextInLML.Top.Y),this.AddEdgeToSEL(f)):this.InsertScanbeam(f.Top.Y)),!(l===null||f===null)){if(g!==null&&n.ClipperBase.IsHorizontal(f)&&this.m_GhostJoins.length>0&&f.WindDelta!==0)for(var M=0,T=this.m_GhostJoins.length;M<T;M++){var W=this.m_GhostJoins[M];this.HorzSegmentsOverlap(W.OutPt1.Pt.X,W.OffPt.X,f.Bot.X,f.Top.X)&&this.AddJoin(W.OutPt1,g,W.OffPt)}if(l.OutIdx>=0&&l.PrevInAEL!==null&&l.PrevInAEL.Curr.X===l.Bot.X&&l.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(l.PrevInAEL.Curr,l.PrevInAEL.Top,l.Curr,l.Top,this.m_UseFullRange)&&l.WindDelta!==0&&l.PrevInAEL.WindDelta!==0){var G=this.AddOutPt(l.PrevInAEL,l.Bot);this.AddJoin(g,G,l.Top)}if(l.NextInAEL!==f){if(f.OutIdx>=0&&f.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(f.PrevInAEL.Curr,f.PrevInAEL.Top,f.Curr,f.Top,this.m_UseFullRange)&&f.WindDelta!==0&&f.PrevInAEL.WindDelta!==0){var G=this.AddOutPt(f.PrevInAEL,f.Bot);this.AddJoin(g,G,f.Top)}var at=l.NextInAEL;if(at!==null)for(;at!==f;)this.IntersectEdges(f,at,l.Curr),at=at.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(i,o){if(this.m_ActiveEdges===null)i.PrevInAEL=null,i.NextInAEL=null,this.m_ActiveEdges=i;else if(o===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,i))i.PrevInAEL=null,i.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=i,this.m_ActiveEdges=i;else{for(o===null&&(o=this.m_ActiveEdges);o.NextInAEL!==null&&!this.E2InsertsBeforeE1(o.NextInAEL,i);)o=o.NextInAEL;i.NextInAEL=o.NextInAEL,o.NextInAEL!==null&&(o.NextInAEL.PrevInAEL=i),i.PrevInAEL=o,o.NextInAEL=i}},n.Clipper.prototype.E2InsertsBeforeE1=function(i,o){return o.Curr.X===i.Curr.X?o.Top.Y>i.Top.Y?o.Top.X<n.Clipper.TopX(i,o.Top.Y):i.Top.X>n.Clipper.TopX(o,i.Top.Y):o.Curr.X<i.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(i){return i.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(i){return i.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(i){var o,l;switch(i.PolyTyp===n.PolyType.ptSubject?(o=this.m_SubjFillType,l=this.m_ClipFillType):(o=this.m_ClipFillType,l=this.m_SubjFillType),o){case n.PolyFillType.pftEvenOdd:if(i.WindDelta===0&&i.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(i.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(i.WindCnt!==1)return!1;break;default:if(i.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return i.WindCnt2!==0;case n.PolyFillType.pftPositive:return i.WindCnt2>0;default:return i.WindCnt2<0}case n.ClipType.ctUnion:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return i.WindCnt2===0;case n.PolyFillType.pftPositive:return i.WindCnt2<=0;default:return i.WindCnt2>=0}case n.ClipType.ctDifference:if(i.PolyTyp===n.PolyType.ptSubject)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return i.WindCnt2===0;case n.PolyFillType.pftPositive:return i.WindCnt2<=0;default:return i.WindCnt2>=0}else switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return i.WindCnt2!==0;case n.PolyFillType.pftPositive:return i.WindCnt2>0;default:return i.WindCnt2<0}case n.ClipType.ctXor:if(i.WindDelta===0)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return i.WindCnt2===0;case n.PolyFillType.pftPositive:return i.WindCnt2<=0;default:return i.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(i){for(var o=i.PrevInAEL;o!==null&&(o.PolyTyp!==i.PolyTyp||o.WindDelta===0);)o=o.PrevInAEL;if(o===null){var l=i.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;i.WindDelta===0?i.WindCnt=l===n.PolyFillType.pftNegative?-1:1:i.WindCnt=i.WindDelta,i.WindCnt2=0,o=this.m_ActiveEdges}else if(i.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)i.WindCnt=1,i.WindCnt2=o.WindCnt2,o=o.NextInAEL;else if(this.IsEvenOddFillType(i)){if(i.WindDelta===0){for(var f=!0,g=o.PrevInAEL;g!==null;)g.PolyTyp===o.PolyTyp&&g.WindDelta!==0&&(f=!f),g=g.PrevInAEL;i.WindCnt=f?0:1}else i.WindCnt=i.WindDelta;i.WindCnt2=o.WindCnt2,o=o.NextInAEL}else o.WindCnt*o.WindDelta<0?Math.abs(o.WindCnt)>1?o.WindDelta*i.WindDelta<0?i.WindCnt=o.WindCnt:i.WindCnt=o.WindCnt+i.WindDelta:i.WindCnt=i.WindDelta===0?1:i.WindDelta:i.WindDelta===0?i.WindCnt=o.WindCnt<0?o.WindCnt-1:o.WindCnt+1:o.WindDelta*i.WindDelta<0?i.WindCnt=o.WindCnt:i.WindCnt=o.WindCnt+i.WindDelta,i.WindCnt2=o.WindCnt2,o=o.NextInAEL;if(this.IsEvenOddAltFillType(i))for(;o!==i;)o.WindDelta!==0&&(i.WindCnt2=i.WindCnt2===0?1:0),o=o.NextInAEL;else for(;o!==i;)i.WindCnt2+=o.WindDelta,o=o.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(i){this.m_SortedEdges===null?(this.m_SortedEdges=i,i.PrevInSEL=null,i.NextInSEL=null):(i.NextInSEL=this.m_SortedEdges,i.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=i,this.m_SortedEdges=i)},n.Clipper.prototype.PopEdgeFromSEL=function(i){if(i.v=this.m_SortedEdges,i.v===null)return!1;var o=i.v;return this.m_SortedEdges=i.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),o.NextInSEL=null,o.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var i=this.m_ActiveEdges;for(this.m_SortedEdges=i;i!==null;)i.PrevInSEL=i.PrevInAEL,i.NextInSEL=i.NextInAEL,i=i.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(i,o){if(!(i.NextInSEL===null&&i.PrevInSEL===null)&&!(o.NextInSEL===null&&o.PrevInSEL===null)){if(i.NextInSEL===o){var l=o.NextInSEL;l!==null&&(l.PrevInSEL=i);var f=i.PrevInSEL;f!==null&&(f.NextInSEL=o),o.PrevInSEL=f,o.NextInSEL=i,i.PrevInSEL=o,i.NextInSEL=l}else if(o.NextInSEL===i){var l=i.NextInSEL;l!==null&&(l.PrevInSEL=o);var f=o.PrevInSEL;f!==null&&(f.NextInSEL=i),i.PrevInSEL=f,i.NextInSEL=o,o.PrevInSEL=i,o.NextInSEL=l}else{var l=i.NextInSEL,f=i.PrevInSEL;i.NextInSEL=o.NextInSEL,i.NextInSEL!==null&&(i.NextInSEL.PrevInSEL=i),i.PrevInSEL=o.PrevInSEL,i.PrevInSEL!==null&&(i.PrevInSEL.NextInSEL=i),o.NextInSEL=l,o.NextInSEL!==null&&(o.NextInSEL.PrevInSEL=o),o.PrevInSEL=f,o.PrevInSEL!==null&&(o.PrevInSEL.NextInSEL=o)}i.PrevInSEL===null?this.m_SortedEdges=i:o.PrevInSEL===null&&(this.m_SortedEdges=o)}},n.Clipper.prototype.AddLocalMaxPoly=function(i,o,l){this.AddOutPt(i,l),o.WindDelta===0&&this.AddOutPt(o,l),i.OutIdx===o.OutIdx?(i.OutIdx=-1,o.OutIdx=-1):i.OutIdx<o.OutIdx?this.AppendPolygon(i,o):this.AppendPolygon(o,i)},n.Clipper.prototype.AddLocalMinPoly=function(i,o,l){var f,g,M;if(n.ClipperBase.IsHorizontal(o)||i.Dx>o.Dx?(f=this.AddOutPt(i,l),o.OutIdx=i.OutIdx,i.Side=n.EdgeSide.esLeft,o.Side=n.EdgeSide.esRight,g=i,g.PrevInAEL===o?M=o.PrevInAEL:M=g.PrevInAEL):(f=this.AddOutPt(o,l),i.OutIdx=o.OutIdx,i.Side=n.EdgeSide.esRight,o.Side=n.EdgeSide.esLeft,g=o,g.PrevInAEL===i?M=i.PrevInAEL:M=g.PrevInAEL),M!==null&&M.OutIdx>=0&&M.Top.Y<l.Y&&g.Top.Y<l.Y){var T=n.Clipper.TopX(M,l.Y),W=n.Clipper.TopX(g,l.Y);if(T===W&&g.WindDelta!==0&&M.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(T,l.Y),M.Top,new n.IntPoint2(W,l.Y),g.Top,this.m_UseFullRange)){var G=this.AddOutPt(M,l);this.AddJoin(f,G,g.Top)}}return f},n.Clipper.prototype.AddOutPt=function(i,o){if(i.OutIdx<0){var l=this.CreateOutRec();l.IsOpen=i.WindDelta===0;var f=new n.OutPt;return l.Pts=f,f.Idx=l.Idx,f.Pt.X=o.X,f.Pt.Y=o.Y,n.use_xyz&&(f.Pt.Z=o.Z),f.Next=f,f.Prev=f,l.IsOpen||this.SetHoleState(i,l),i.OutIdx=l.Idx,f}else{var l=this.m_PolyOuts[i.OutIdx],g=l.Pts,M=i.Side===n.EdgeSide.esLeft;if(M&&n.IntPoint.op_Equality(o,g.Pt))return g;if(!M&&n.IntPoint.op_Equality(o,g.Prev.Pt))return g.Prev;var f=new n.OutPt;return f.Idx=l.Idx,f.Pt.X=o.X,f.Pt.Y=o.Y,n.use_xyz&&(f.Pt.Z=o.Z),f.Next=g,f.Prev=g.Prev,f.Prev.Next=f,g.Prev=f,M&&(l.Pts=f),f}},n.Clipper.prototype.GetLastOutPt=function(i){var o=this.m_PolyOuts[i.OutIdx];return i.Side===n.EdgeSide.esLeft?o.Pts:o.Pts.Prev},n.Clipper.prototype.SwapPoints=function(i,o){var l=new n.IntPoint1(i.Value);i.Value.X=o.Value.X,i.Value.Y=o.Value.Y,n.use_xyz&&(i.Value.Z=o.Value.Z),o.Value.X=l.X,o.Value.Y=l.Y,n.use_xyz&&(o.Value.Z=l.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(i,o,l,f){var g;return i>o&&(g=i,i=o,o=g),l>f&&(g=l,l=f,f=g),i<f&&l<o},n.Clipper.prototype.SetHoleState=function(i,o){for(var l=i.PrevInAEL,f=null;l!==null;)l.OutIdx>=0&&l.WindDelta!==0&&(f===null?f=l:f.OutIdx===l.OutIdx&&(f=null)),l=l.PrevInAEL;f===null?(o.FirstLeft=null,o.IsHole=!1):(o.FirstLeft=this.m_PolyOuts[f.OutIdx],o.IsHole=!o.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(i,o){return i.Y===o.Y?n.ClipperBase.horizontal:(o.X-i.X)/(o.Y-i.Y)},n.Clipper.prototype.FirstIsBottomPt=function(i,o){for(var l=i.Prev;n.IntPoint.op_Equality(l.Pt,i.Pt)&&l!==i;)l=l.Prev;var f=Math.abs(this.GetDx(i.Pt,l.Pt));for(l=i.Next;n.IntPoint.op_Equality(l.Pt,i.Pt)&&l!==i;)l=l.Next;var g=Math.abs(this.GetDx(i.Pt,l.Pt));for(l=o.Prev;n.IntPoint.op_Equality(l.Pt,o.Pt)&&l!==o;)l=l.Prev;var M=Math.abs(this.GetDx(o.Pt,l.Pt));for(l=o.Next;n.IntPoint.op_Equality(l.Pt,o.Pt)&&l!==o;)l=l.Next;var T=Math.abs(this.GetDx(o.Pt,l.Pt));return Math.max(f,g)===Math.max(M,T)&&Math.min(f,g)===Math.min(M,T)?this.Area(i)>0:f>=M&&f>=T||g>=M&&g>=T},n.Clipper.prototype.GetBottomPt=function(i){for(var o=null,l=i.Next;l!==i;)l.Pt.Y>i.Pt.Y?(i=l,o=null):l.Pt.Y===i.Pt.Y&&l.Pt.X<=i.Pt.X&&(l.Pt.X<i.Pt.X?(o=null,i=l):l.Next!==i&&l.Prev!==i&&(o=l)),l=l.Next;if(o!==null)for(;o!==l;)for(this.FirstIsBottomPt(l,o)||(i=o),o=o.Next;n.IntPoint.op_Inequality(o.Pt,i.Pt);)o=o.Next;return i},n.Clipper.prototype.GetLowermostRec=function(i,o){i.BottomPt===null&&(i.BottomPt=this.GetBottomPt(i.Pts)),o.BottomPt===null&&(o.BottomPt=this.GetBottomPt(o.Pts));var l=i.BottomPt,f=o.BottomPt;return l.Pt.Y>f.Pt.Y?i:l.Pt.Y<f.Pt.Y?o:l.Pt.X<f.Pt.X?i:l.Pt.X>f.Pt.X||l.Next===l?o:f.Next===f||this.FirstIsBottomPt(l,f)?i:o},n.Clipper.prototype.OutRec1RightOfOutRec2=function(i,o){do if(i=i.FirstLeft,i===o)return!0;while(i!==null);return!1},n.Clipper.prototype.GetOutRec=function(i){for(var o=this.m_PolyOuts[i];o!==this.m_PolyOuts[o.Idx];)o=this.m_PolyOuts[o.Idx];return o},n.Clipper.prototype.AppendPolygon=function(i,o){var l=this.m_PolyOuts[i.OutIdx],f=this.m_PolyOuts[o.OutIdx],g;this.OutRec1RightOfOutRec2(l,f)?g=f:this.OutRec1RightOfOutRec2(f,l)?g=l:g=this.GetLowermostRec(l,f);var M=l.Pts,T=M.Prev,W=f.Pts,G=W.Prev;i.Side===n.EdgeSide.esLeft?o.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(W),W.Next=M,M.Prev=W,T.Next=G,G.Prev=T,l.Pts=G):(G.Next=M,M.Prev=G,W.Prev=T,T.Next=W,l.Pts=W):o.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(W),T.Next=G,G.Prev=T,W.Next=M,M.Prev=W):(T.Next=W,W.Prev=T,M.Prev=G,G.Next=M),l.BottomPt=null,g===f&&(f.FirstLeft!==l&&(l.FirstLeft=f.FirstLeft),l.IsHole=f.IsHole),f.Pts=null,f.BottomPt=null,f.FirstLeft=l;var at=i.OutIdx,_t=o.OutIdx;i.OutIdx=-1,o.OutIdx=-1;for(var mt=this.m_ActiveEdges;mt!==null;){if(mt.OutIdx===_t){mt.OutIdx=at,mt.Side=i.Side;break}mt=mt.NextInAEL}f.Idx=l.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(i){if(i!==null){var o,l;o=i;do l=o.Next,o.Next=o.Prev,o.Prev=l,o=l;while(o!==i)}},n.Clipper.SwapSides=function(i,o){var l=i.Side;i.Side=o.Side,o.Side=l},n.Clipper.SwapPolyIndexes=function(i,o){var l=i.OutIdx;i.OutIdx=o.OutIdx,o.OutIdx=l},n.Clipper.prototype.IntersectEdges=function(i,o,l){var f=i.OutIdx>=0,g=o.OutIdx>=0;if(n.use_xyz&&this.SetZ(l,i,o),n.use_lines&&(i.WindDelta===0||o.WindDelta===0)){if(i.WindDelta===0&&o.WindDelta===0)return;i.PolyTyp===o.PolyTyp&&i.WindDelta!==o.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?i.WindDelta===0?g&&(this.AddOutPt(i,l),f&&(i.OutIdx=-1)):f&&(this.AddOutPt(o,l),g&&(o.OutIdx=-1)):i.PolyTyp!==o.PolyTyp&&(i.WindDelta===0&&Math.abs(o.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||o.WindCnt2===0)?(this.AddOutPt(i,l),f&&(i.OutIdx=-1)):o.WindDelta===0&&Math.abs(i.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||i.WindCnt2===0)&&(this.AddOutPt(o,l),g&&(o.OutIdx=-1)));return}if(i.PolyTyp===o.PolyTyp)if(this.IsEvenOddFillType(i)){var M=i.WindCnt;i.WindCnt=o.WindCnt,o.WindCnt=M}else i.WindCnt+o.WindDelta===0?i.WindCnt=-i.WindCnt:i.WindCnt+=o.WindDelta,o.WindCnt-i.WindDelta===0?o.WindCnt=-o.WindCnt:o.WindCnt-=i.WindDelta;else this.IsEvenOddFillType(o)?i.WindCnt2=i.WindCnt2===0?1:0:i.WindCnt2+=o.WindDelta,this.IsEvenOddFillType(i)?o.WindCnt2=o.WindCnt2===0?1:0:o.WindCnt2-=i.WindDelta;var T,W,G,at;i.PolyTyp===n.PolyType.ptSubject?(T=this.m_SubjFillType,G=this.m_ClipFillType):(T=this.m_ClipFillType,G=this.m_SubjFillType),o.PolyTyp===n.PolyType.ptSubject?(W=this.m_SubjFillType,at=this.m_ClipFillType):(W=this.m_ClipFillType,at=this.m_SubjFillType);var _t,mt;switch(T){case n.PolyFillType.pftPositive:_t=i.WindCnt;break;case n.PolyFillType.pftNegative:_t=-i.WindCnt;break;default:_t=Math.abs(i.WindCnt);break}switch(W){case n.PolyFillType.pftPositive:mt=o.WindCnt;break;case n.PolyFillType.pftNegative:mt=-o.WindCnt;break;default:mt=Math.abs(o.WindCnt);break}if(f&&g)_t!==0&&_t!==1||mt!==0&&mt!==1||i.PolyTyp!==o.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(i,o,l):(this.AddOutPt(i,l),this.AddOutPt(o,l),n.Clipper.SwapSides(i,o),n.Clipper.SwapPolyIndexes(i,o));else if(f)(mt===0||mt===1)&&(this.AddOutPt(i,l),n.Clipper.SwapSides(i,o),n.Clipper.SwapPolyIndexes(i,o));else if(g)(_t===0||_t===1)&&(this.AddOutPt(o,l),n.Clipper.SwapSides(i,o),n.Clipper.SwapPolyIndexes(i,o));else if((_t===0||_t===1)&&(mt===0||mt===1)){var It,Kt;switch(G){case n.PolyFillType.pftPositive:It=i.WindCnt2;break;case n.PolyFillType.pftNegative:It=-i.WindCnt2;break;default:It=Math.abs(i.WindCnt2);break}switch(at){case n.PolyFillType.pftPositive:Kt=o.WindCnt2;break;case n.PolyFillType.pftNegative:Kt=-o.WindCnt2;break;default:Kt=Math.abs(o.WindCnt2);break}if(i.PolyTyp!==o.PolyTyp)this.AddLocalMinPoly(i,o,l);else if(_t===1&&mt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:It>0&&Kt>0&&this.AddLocalMinPoly(i,o,l);break;case n.ClipType.ctUnion:It<=0&&Kt<=0&&this.AddLocalMinPoly(i,o,l);break;case n.ClipType.ctDifference:(i.PolyTyp===n.PolyType.ptClip&&It>0&&Kt>0||i.PolyTyp===n.PolyType.ptSubject&&It<=0&&Kt<=0)&&this.AddLocalMinPoly(i,o,l);break;case n.ClipType.ctXor:this.AddLocalMinPoly(i,o,l);break}else n.Clipper.SwapSides(i,o)}},n.Clipper.prototype.DeleteFromSEL=function(i){var o=i.PrevInSEL,l=i.NextInSEL;o===null&&l===null&&i!==this.m_SortedEdges||(o!==null?o.NextInSEL=l:this.m_SortedEdges=l,l!==null&&(l.PrevInSEL=o),i.NextInSEL=null,i.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var i={};this.PopEdgeFromSEL(i);)this.ProcessHorizontal(i.v)},n.Clipper.prototype.GetHorzDirection=function(i,o){i.Bot.X<i.Top.X?(o.Left=i.Bot.X,o.Right=i.Top.X,o.Dir=n.Direction.dLeftToRight):(o.Left=i.Top.X,o.Right=i.Bot.X,o.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(i){var o={Dir:null,Left:null,Right:null};this.GetHorzDirection(i,o);for(var l=o.Dir,f=o.Left,g=o.Right,M=i.WindDelta===0,T=i,W=null;T.NextInLML!==null&&n.ClipperBase.IsHorizontal(T.NextInLML);)T=T.NextInLML;T.NextInLML===null&&(W=this.GetMaximaPair(T));var G=this.m_Maxima;if(G!==null)if(l===n.Direction.dLeftToRight){for(;G!==null&&G.X<=i.Bot.X;)G=G.Next;G!==null&&G.X>=T.Top.X&&(G=null)}else{for(;G.Next!==null&&G.Next.X<i.Bot.X;)G=G.Next;G.X<=T.Top.X&&(G=null)}for(var at=null;;){for(var _t=i===T,mt=this.GetNextInAEL(i,l);mt!==null;){if(G!==null)if(l===n.Direction.dLeftToRight)for(;G!==null&&G.X<mt.Curr.X;)i.OutIdx>=0&&!M&&this.AddOutPt(i,new n.IntPoint2(G.X,i.Bot.Y)),G=G.Next;else for(;G!==null&&G.X>mt.Curr.X;)i.OutIdx>=0&&!M&&this.AddOutPt(i,new n.IntPoint2(G.X,i.Bot.Y)),G=G.Prev;if(l===n.Direction.dLeftToRight&&mt.Curr.X>g||l===n.Direction.dRightToLeft&&mt.Curr.X<f||mt.Curr.X===i.Top.X&&i.NextInLML!==null&&mt.Dx<i.NextInLML.Dx)break;if(i.OutIdx>=0&&!M){n.use_xyz&&(l===n.Direction.dLeftToRight?this.SetZ(mt.Curr,i,mt):this.SetZ(mt.Curr,mt,i)),at=this.AddOutPt(i,mt.Curr);for(var It=this.m_SortedEdges;It!==null;){if(It.OutIdx>=0&&this.HorzSegmentsOverlap(i.Bot.X,i.Top.X,It.Bot.X,It.Top.X)){var Kt=this.GetLastOutPt(It);this.AddJoin(Kt,at,It.Top)}It=It.NextInSEL}this.AddGhostJoin(at,i.Bot)}if(mt===W&&_t){i.OutIdx>=0&&this.AddLocalMaxPoly(i,W,i.Top),this.DeleteFromAEL(i),this.DeleteFromAEL(W);return}if(l===n.Direction.dLeftToRight){var ae=new n.IntPoint2(mt.Curr.X,i.Curr.Y);this.IntersectEdges(i,mt,ae)}else{var ae=new n.IntPoint2(mt.Curr.X,i.Curr.Y);this.IntersectEdges(mt,i,ae)}var le=this.GetNextInAEL(mt,l);this.SwapPositionsInAEL(i,mt),mt=le}if(i.NextInLML===null||!n.ClipperBase.IsHorizontal(i.NextInLML))break;i=this.UpdateEdgeIntoAEL(i),i.OutIdx>=0&&this.AddOutPt(i,i.Bot),o={Dir:l,Left:f,Right:g},this.GetHorzDirection(i,o),l=o.Dir,f=o.Left,g=o.Right}if(i.OutIdx>=0&&at===null){at=this.GetLastOutPt(i);for(var It=this.m_SortedEdges;It!==null;){if(It.OutIdx>=0&&this.HorzSegmentsOverlap(i.Bot.X,i.Top.X,It.Bot.X,It.Top.X)){var Kt=this.GetLastOutPt(It);this.AddJoin(Kt,at,It.Top)}It=It.NextInSEL}this.AddGhostJoin(at,i.Top)}if(i.NextInLML!==null)if(i.OutIdx>=0){if(at=this.AddOutPt(i,i.Top),i=this.UpdateEdgeIntoAEL(i),i.WindDelta===0)return;var ge=i.PrevInAEL,le=i.NextInAEL;if(ge!==null&&ge.Curr.X===i.Bot.X&&ge.Curr.Y===i.Bot.Y&&ge.WindDelta===0&&ge.OutIdx>=0&&ge.Curr.Y>ge.Top.Y&&n.ClipperBase.SlopesEqual3(i,ge,this.m_UseFullRange)){var Kt=this.AddOutPt(ge,i.Bot);this.AddJoin(at,Kt,i.Top)}else if(le!==null&&le.Curr.X===i.Bot.X&&le.Curr.Y===i.Bot.Y&&le.WindDelta!==0&&le.OutIdx>=0&&le.Curr.Y>le.Top.Y&&n.ClipperBase.SlopesEqual3(i,le,this.m_UseFullRange)){var Kt=this.AddOutPt(le,i.Bot);this.AddJoin(at,Kt,i.Top)}}else i=this.UpdateEdgeIntoAEL(i);else i.OutIdx>=0&&this.AddOutPt(i,i.Top),this.DeleteFromAEL(i)},n.Clipper.prototype.GetNextInAEL=function(i,o){return o===n.Direction.dLeftToRight?i.NextInAEL:i.PrevInAEL},n.Clipper.prototype.IsMinima=function(i){return i!==null&&i.Prev.NextInLML!==i&&i.Next.NextInLML!==i},n.Clipper.prototype.IsMaxima=function(i,o){return i!==null&&i.Top.Y===o&&i.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(i,o){return i.Top.Y===o&&i.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(i){return n.IntPoint.op_Equality(i.Next.Top,i.Top)&&i.Next.NextInLML===null?i.Next:n.IntPoint.op_Equality(i.Prev.Top,i.Top)&&i.Prev.NextInLML===null?i.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(i){var o=this.GetMaximaPair(i);return o===null||o.OutIdx===n.ClipperBase.Skip||o.NextInAEL===o.PrevInAEL&&!n.ClipperBase.IsHorizontal(o)?null:o},n.Clipper.prototype.ProcessIntersections=function(i){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(i),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(i){if(this.m_ActiveEdges!==null){var o=this.m_ActiveEdges;for(this.m_SortedEdges=o;o!==null;)o.PrevInSEL=o.PrevInAEL,o.NextInSEL=o.NextInAEL,o.Curr.X=n.Clipper.TopX(o,i),o=o.NextInAEL;for(var l=!0;l&&this.m_SortedEdges!==null;){for(l=!1,o=this.m_SortedEdges;o.NextInSEL!==null;){var f=o.NextInSEL,g=new n.IntPoint0;if(o.Curr.X>f.Curr.X){this.IntersectPoint(o,f,g),g.Y<i&&(g=new n.IntPoint2(n.Clipper.TopX(o,i),i));var M=new n.IntersectNode;M.Edge1=o,M.Edge2=f,M.Pt.X=g.X,M.Pt.Y=g.Y,n.use_xyz&&(M.Pt.Z=g.Z),this.m_IntersectList.push(M),this.SwapPositionsInSEL(o,f),l=!0}else o=f}if(o.PrevInSEL!==null)o.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(i){return i.Edge1.NextInSEL===i.Edge2||i.Edge1.PrevInSEL===i.Edge2},n.Clipper.IntersectNodeSort=function(i,o){return o.Pt.Y-i.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var i=this.m_IntersectList.length,o=0;o<i;o++){if(!this.EdgesAdjacent(this.m_IntersectList[o])){for(var l=o+1;l<i&&!this.EdgesAdjacent(this.m_IntersectList[l]);)l++;if(l===i)return!1;var f=this.m_IntersectList[o];this.m_IntersectList[o]=this.m_IntersectList[l],this.m_IntersectList[l]=f}this.SwapPositionsInSEL(this.m_IntersectList[o].Edge1,this.m_IntersectList[o].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var i=0,o=this.m_IntersectList.length;i<o;i++){var l=this.m_IntersectList[i];this.IntersectEdges(l.Edge1,l.Edge2,l.Pt),this.SwapPositionsInAEL(l.Edge1,l.Edge2)}this.m_IntersectList.length=0};var ws=function(i){return i<0?Math.ceil(i-.5):Math.round(i)},Ts=function(i){return i<0?Math.ceil(i-.5):Math.floor(i+.5)},Es=function(i){return i<0?-Math.round(Math.abs(i)):Math.round(i)},Li=function(i){return i<0?(i-=.5,i<-2147483648?Math.ceil(i):i|0):(i+=.5,i>2147483647?Math.floor(i):i|0)};s.msie?n.Clipper.Round=ws:s.chromium?n.Clipper.Round=Es:s.safari?n.Clipper.Round=Li:n.Clipper.Round=Ts,n.Clipper.TopX=function(i,o){return o===i.Top.Y?i.Top.X:i.Bot.X+n.Clipper.Round(i.Dx*(o-i.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(i,o,l){l.X=0,l.Y=0;var f,g;if(i.Dx===o.Dx){l.Y=i.Curr.Y,l.X=n.Clipper.TopX(i,l.Y);return}if(i.Delta.X===0)l.X=i.Bot.X,n.ClipperBase.IsHorizontal(o)?l.Y=o.Bot.Y:(g=o.Bot.Y-o.Bot.X/o.Dx,l.Y=n.Clipper.Round(l.X/o.Dx+g));else if(o.Delta.X===0)l.X=o.Bot.X,n.ClipperBase.IsHorizontal(i)?l.Y=i.Bot.Y:(f=i.Bot.Y-i.Bot.X/i.Dx,l.Y=n.Clipper.Round(l.X/i.Dx+f));else{f=i.Bot.X-i.Bot.Y*i.Dx,g=o.Bot.X-o.Bot.Y*o.Dx;var M=(g-f)/(i.Dx-o.Dx);l.Y=n.Clipper.Round(M),Math.abs(i.Dx)<Math.abs(o.Dx)?l.X=n.Clipper.Round(i.Dx*M+f):l.X=n.Clipper.Round(o.Dx*M+g)}if(l.Y<i.Top.Y||l.Y<o.Top.Y){if(i.Top.Y>o.Top.Y)return l.Y=i.Top.Y,l.X=n.Clipper.TopX(o,i.Top.Y),l.X<i.Top.X;l.Y=o.Top.Y,Math.abs(i.Dx)<Math.abs(o.Dx)?l.X=n.Clipper.TopX(i,l.Y):l.X=n.Clipper.TopX(o,l.Y)}l.Y>i.Curr.Y&&(l.Y=i.Curr.Y,Math.abs(i.Dx)>Math.abs(o.Dx)?l.X=n.Clipper.TopX(o,l.Y):l.X=n.Clipper.TopX(i,l.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(i){for(var o=this.m_ActiveEdges;o!==null;){var l=this.IsMaxima(o,i);if(l){var f=this.GetMaximaPairEx(o);l=f===null||!n.ClipperBase.IsHorizontal(f)}if(l){this.StrictlySimple&&this.InsertMaxima(o.Top.X);var g=o.PrevInAEL;this.DoMaxima(o),g===null?o=this.m_ActiveEdges:o=g.NextInAEL}else{if(this.IsIntermediate(o,i)&&n.ClipperBase.IsHorizontal(o.NextInLML)?(o=this.UpdateEdgeIntoAEL(o),o.OutIdx>=0&&this.AddOutPt(o,o.Bot),this.AddEdgeToSEL(o)):(o.Curr.X=n.Clipper.TopX(o,i),o.Curr.Y=i),n.use_xyz&&(o.Top.Y===i?o.Curr.Z=o.Top.Z:o.Bot.Y===i?o.Curr.Z=o.Bot.Z:o.Curr.Z=0),this.StrictlySimple){var g=o.PrevInAEL;if(o.OutIdx>=0&&o.WindDelta!==0&&g!==null&&g.OutIdx>=0&&g.Curr.X===o.Curr.X&&g.WindDelta!==0){var M=new n.IntPoint1(o.Curr);n.use_xyz&&this.SetZ(M,g,o);var T=this.AddOutPt(g,M),W=this.AddOutPt(o,M);this.AddJoin(T,W,M)}}o=o.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,o=this.m_ActiveEdges;o!==null;){if(this.IsIntermediate(o,i)){var T=null;o.OutIdx>=0&&(T=this.AddOutPt(o,o.Top)),o=this.UpdateEdgeIntoAEL(o);var g=o.PrevInAEL,G=o.NextInAEL;if(g!==null&&g.Curr.X===o.Bot.X&&g.Curr.Y===o.Bot.Y&&T!==null&&g.OutIdx>=0&&g.Curr.Y===g.Top.Y&&n.ClipperBase.SlopesEqual5(o.Curr,o.Top,g.Curr,g.Top,this.m_UseFullRange)&&o.WindDelta!==0&&g.WindDelta!==0){var W=this.AddOutPt(ePrev2,o.Bot);this.AddJoin(T,W,o.Top)}else if(G!==null&&G.Curr.X===o.Bot.X&&G.Curr.Y===o.Bot.Y&&T!==null&&G.OutIdx>=0&&G.Curr.Y===G.Top.Y&&n.ClipperBase.SlopesEqual5(o.Curr,o.Top,G.Curr,G.Top,this.m_UseFullRange)&&o.WindDelta!==0&&G.WindDelta!==0){var W=this.AddOutPt(G,o.Bot);this.AddJoin(T,W,o.Top)}}o=o.NextInAEL}},n.Clipper.prototype.DoMaxima=function(i){var o=this.GetMaximaPairEx(i);if(o===null){i.OutIdx>=0&&this.AddOutPt(i,i.Top),this.DeleteFromAEL(i);return}for(var l=i.NextInAEL;l!==null&&l!==o;)this.IntersectEdges(i,l,i.Top),this.SwapPositionsInAEL(i,l),l=i.NextInAEL;i.OutIdx===-1&&o.OutIdx===-1?(this.DeleteFromAEL(i),this.DeleteFromAEL(o)):i.OutIdx>=0&&o.OutIdx>=0?(i.OutIdx>=0&&this.AddLocalMaxPoly(i,o,i.Top),this.DeleteFromAEL(i),this.DeleteFromAEL(o)):n.use_lines&&i.WindDelta===0?(i.OutIdx>=0&&(this.AddOutPt(i,i.Top),i.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(i),o.OutIdx>=0&&(this.AddOutPt(o,i.Top),o.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(o)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(i){for(var o=0,l=i.length;o<l;o++)i[o].reverse()},n.Clipper.Orientation=function(i){return n.Clipper.Area(i)>=0},n.Clipper.prototype.PointCount=function(i){if(i===null)return 0;var o=0,l=i;do o++,l=l.Next;while(l!==i);return o},n.Clipper.prototype.BuildResult=function(i){n.Clear(i);for(var o=0,l=this.m_PolyOuts.length;o<l;o++){var f=this.m_PolyOuts[o];if(f.Pts!==null){var g=f.Pts.Prev,M=this.PointCount(g);if(!(M<2)){for(var T=new Array(M),W=0;W<M;W++)T[W]=g.Pt,g=g.Prev;i.push(T)}}}},n.Clipper.prototype.BuildResult2=function(i){i.Clear();for(var o=0,l=this.m_PolyOuts.length;o<l;o++){var f=this.m_PolyOuts[o],g=this.PointCount(f.Pts);if(!(f.IsOpen&&g<2||!f.IsOpen&&g<3)){this.FixHoleLinkage(f);var M=new n.PolyNode;i.m_AllPolys.push(M),f.PolyNode=M,M.m_polygon.length=g;for(var T=f.Pts.Prev,W=0;W<g;W++)M.m_polygon[W]=T.Pt,T=T.Prev}}for(var o=0,l=this.m_PolyOuts.length;o<l;o++){var f=this.m_PolyOuts[o];f.PolyNode!==null&&(f.IsOpen?(f.PolyNode.IsOpen=!0,i.AddChild(f.PolyNode)):f.FirstLeft!==null&&f.FirstLeft.PolyNode!==null?f.FirstLeft.PolyNode.AddChild(f.PolyNode):i.AddChild(f.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(i){for(var o=i.Pts,l=o.Prev;o!==l;)if(o=o.Next,n.IntPoint.op_Equality(o.Pt,o.Prev.Pt)){o===l&&(l=o.Prev);var f=o.Prev;f.Next=o.Next,o.Next.Prev=f,o=f}o===o.Prev&&(i.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(i){var o=null;i.BottomPt=null;for(var l=i.Pts,f=this.PreserveCollinear||this.StrictlySimple;;){if(l.Prev===l||l.Prev===l.Next){i.Pts=null;return}if(n.IntPoint.op_Equality(l.Pt,l.Next.Pt)||n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)||n.ClipperBase.SlopesEqual4(l.Prev.Pt,l.Pt,l.Next.Pt,this.m_UseFullRange)&&(!f||!this.Pt2IsBetweenPt1AndPt3(l.Prev.Pt,l.Pt,l.Next.Pt)))o=null,l.Prev.Next=l.Next,l.Next.Prev=l.Prev,l=l.Prev;else{if(l===o)break;o===null&&(o=l),l=l.Next}}i.Pts=l},n.Clipper.prototype.DupOutPt=function(i,o){var l=new n.OutPt;return l.Pt.X=i.Pt.X,l.Pt.Y=i.Pt.Y,n.use_xyz&&(l.Pt.Z=i.Pt.Z),l.Idx=i.Idx,o?(l.Next=i.Next,l.Prev=i,i.Next.Prev=l,i.Next=l):(l.Prev=i.Prev,l.Next=i,i.Prev.Next=l,i.Prev=l),l},n.Clipper.prototype.GetOverlap=function(i,o,l,f,g){return i<o?l<f?(g.Left=Math.max(i,l),g.Right=Math.min(o,f)):(g.Left=Math.max(i,f),g.Right=Math.min(o,l)):l<f?(g.Left=Math.max(o,l),g.Right=Math.min(i,f)):(g.Left=Math.max(o,f),g.Right=Math.min(i,l)),g.Left<g.Right},n.Clipper.prototype.JoinHorz=function(i,o,l,f,g,M){var T=i.Pt.X>o.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,W=l.Pt.X>f.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(T===W)return!1;if(T===n.Direction.dLeftToRight){for(;i.Next.Pt.X<=g.X&&i.Next.Pt.X>=i.Pt.X&&i.Next.Pt.Y===g.Y;)i=i.Next;M&&i.Pt.X!==g.X&&(i=i.Next),o=this.DupOutPt(i,!M),n.IntPoint.op_Inequality(o.Pt,g)&&(i=o,i.Pt.X=g.X,i.Pt.Y=g.Y,n.use_xyz&&(i.Pt.Z=g.Z),o=this.DupOutPt(i,!M))}else{for(;i.Next.Pt.X>=g.X&&i.Next.Pt.X<=i.Pt.X&&i.Next.Pt.Y===g.Y;)i=i.Next;!M&&i.Pt.X!==g.X&&(i=i.Next),o=this.DupOutPt(i,M),n.IntPoint.op_Inequality(o.Pt,g)&&(i=o,i.Pt.X=g.X,i.Pt.Y=g.Y,n.use_xyz&&(i.Pt.Z=g.Z),o=this.DupOutPt(i,M))}if(W===n.Direction.dLeftToRight){for(;l.Next.Pt.X<=g.X&&l.Next.Pt.X>=l.Pt.X&&l.Next.Pt.Y===g.Y;)l=l.Next;M&&l.Pt.X!==g.X&&(l=l.Next),f=this.DupOutPt(l,!M),n.IntPoint.op_Inequality(f.Pt,g)&&(l=f,l.Pt.X=g.X,l.Pt.Y=g.Y,n.use_xyz&&(l.Pt.Z=g.Z),f=this.DupOutPt(l,!M))}else{for(;l.Next.Pt.X>=g.X&&l.Next.Pt.X<=l.Pt.X&&l.Next.Pt.Y===g.Y;)l=l.Next;!M&&l.Pt.X!==g.X&&(l=l.Next),f=this.DupOutPt(l,M),n.IntPoint.op_Inequality(f.Pt,g)&&(l=f,l.Pt.X=g.X,l.Pt.Y=g.Y,n.use_xyz&&(l.Pt.Z=g.Z),f=this.DupOutPt(l,M))}return T===n.Direction.dLeftToRight===M?(i.Prev=l,l.Next=i,o.Next=f,f.Prev=o):(i.Next=l,l.Prev=i,o.Prev=f,f.Next=o),!0},n.Clipper.prototype.JoinPoints=function(i,o,l){var f=i.OutPt1,g=new n.OutPt,M=i.OutPt2,T=new n.OutPt,W=i.OutPt1.Pt.Y===i.OffPt.Y;if(W&&n.IntPoint.op_Equality(i.OffPt,i.OutPt1.Pt)&&n.IntPoint.op_Equality(i.OffPt,i.OutPt2.Pt)){if(o!==l)return!1;for(g=i.OutPt1.Next;g!==f&&n.IntPoint.op_Equality(g.Pt,i.OffPt);)g=g.Next;var G=g.Pt.Y>i.OffPt.Y;for(T=i.OutPt2.Next;T!==M&&n.IntPoint.op_Equality(T.Pt,i.OffPt);)T=T.Next;var at=T.Pt.Y>i.OffPt.Y;return G===at?!1:G?(g=this.DupOutPt(f,!1),T=this.DupOutPt(M,!0),f.Prev=M,M.Next=f,g.Next=T,T.Prev=g,i.OutPt1=f,i.OutPt2=g,!0):(g=this.DupOutPt(f,!0),T=this.DupOutPt(M,!1),f.Next=M,M.Prev=f,g.Prev=T,T.Next=g,i.OutPt1=f,i.OutPt2=g,!0)}else if(W){for(g=f;f.Prev.Pt.Y===f.Pt.Y&&f.Prev!==g&&f.Prev!==M;)f=f.Prev;for(;g.Next.Pt.Y===g.Pt.Y&&g.Next!==f&&g.Next!==M;)g=g.Next;if(g.Next===f||g.Next===M)return!1;for(T=M;M.Prev.Pt.Y===M.Pt.Y&&M.Prev!==T&&M.Prev!==g;)M=M.Prev;for(;T.Next.Pt.Y===T.Pt.Y&&T.Next!==M&&T.Next!==f;)T=T.Next;if(T.Next===M||T.Next===f)return!1;var _t={Left:null,Right:null};if(!this.GetOverlap(f.Pt.X,g.Pt.X,M.Pt.X,T.Pt.X,_t))return!1;var mt=_t.Left,It=_t.Right,Kt=new n.IntPoint0,ae;return f.Pt.X>=mt&&f.Pt.X<=It?(Kt.X=f.Pt.X,Kt.Y=f.Pt.Y,n.use_xyz&&(Kt.Z=f.Pt.Z),ae=f.Pt.X>g.Pt.X):M.Pt.X>=mt&&M.Pt.X<=It?(Kt.X=M.Pt.X,Kt.Y=M.Pt.Y,n.use_xyz&&(Kt.Z=M.Pt.Z),ae=M.Pt.X>T.Pt.X):g.Pt.X>=mt&&g.Pt.X<=It?(Kt.X=g.Pt.X,Kt.Y=g.Pt.Y,n.use_xyz&&(Kt.Z=g.Pt.Z),ae=g.Pt.X>f.Pt.X):(Kt.X=T.Pt.X,Kt.Y=T.Pt.Y,n.use_xyz&&(Kt.Z=T.Pt.Z),ae=T.Pt.X>M.Pt.X),i.OutPt1=f,i.OutPt2=M,this.JoinHorz(f,g,M,T,Kt,ae)}else{for(g=f.Next;n.IntPoint.op_Equality(g.Pt,f.Pt)&&g!==f;)g=g.Next;var le=g.Pt.Y>f.Pt.Y||!n.ClipperBase.SlopesEqual4(f.Pt,g.Pt,i.OffPt,this.m_UseFullRange);if(le){for(g=f.Prev;n.IntPoint.op_Equality(g.Pt,f.Pt)&&g!==f;)g=g.Prev;if(g.Pt.Y>f.Pt.Y||!n.ClipperBase.SlopesEqual4(f.Pt,g.Pt,i.OffPt,this.m_UseFullRange))return!1}for(T=M.Next;n.IntPoint.op_Equality(T.Pt,M.Pt)&&T!==M;)T=T.Next;var ge=T.Pt.Y>M.Pt.Y||!n.ClipperBase.SlopesEqual4(M.Pt,T.Pt,i.OffPt,this.m_UseFullRange);if(ge){for(T=M.Prev;n.IntPoint.op_Equality(T.Pt,M.Pt)&&T!==M;)T=T.Prev;if(T.Pt.Y>M.Pt.Y||!n.ClipperBase.SlopesEqual4(M.Pt,T.Pt,i.OffPt,this.m_UseFullRange))return!1}return g===f||T===M||g===T||o===l&&le===ge?!1:le?(g=this.DupOutPt(f,!1),T=this.DupOutPt(M,!0),f.Prev=M,M.Next=f,g.Next=T,T.Prev=g,i.OutPt1=f,i.OutPt2=g,!0):(g=this.DupOutPt(f,!0),T=this.DupOutPt(M,!1),f.Next=M,M.Prev=f,g.Prev=T,T.Next=g,i.OutPt1=f,i.OutPt2=g,!0)}},n.Clipper.GetBounds=function(i){for(var o=0,l=i.length;o<l&&i[o].length===0;)o++;if(o===l)return new n.IntRect(0,0,0,0);var f=new n.IntRect;for(f.left=i[o][0].X,f.right=f.left,f.top=i[o][0].Y,f.bottom=f.top;o<l;o++)for(var g=0,M=i[o].length;g<M;g++)i[o][g].X<f.left?f.left=i[o][g].X:i[o][g].X>f.right&&(f.right=i[o][g].X),i[o][g].Y<f.top?f.top=i[o][g].Y:i[o][g].Y>f.bottom&&(f.bottom=i[o][g].Y);return f},n.Clipper.prototype.GetBounds2=function(i){var o=i,l=new n.IntRect;for(l.left=i.Pt.X,l.right=i.Pt.X,l.top=i.Pt.Y,l.bottom=i.Pt.Y,i=i.Next;i!==o;)i.Pt.X<l.left&&(l.left=i.Pt.X),i.Pt.X>l.right&&(l.right=i.Pt.X),i.Pt.Y<l.top&&(l.top=i.Pt.Y),i.Pt.Y>l.bottom&&(l.bottom=i.Pt.Y),i=i.Next;return l},n.Clipper.PointInPolygon=function(i,o){var l=0,f=o.length;if(f<3)return 0;for(var g=o[0],M=1;M<=f;++M){var T=M===f?o[0]:o[M];if(T.Y===i.Y&&(T.X===i.X||g.Y===i.Y&&T.X>i.X==g.X<i.X))return-1;if(g.Y<i.Y!=T.Y<i.Y){if(g.X>=i.X)if(T.X>i.X)l=1-l;else{var W=(g.X-i.X)*(T.Y-i.Y)-(T.X-i.X)*(g.Y-i.Y);if(W===0)return-1;W>0==T.Y>g.Y&&(l=1-l)}else if(T.X>i.X){var W=(g.X-i.X)*(T.Y-i.Y)-(T.X-i.X)*(g.Y-i.Y);if(W===0)return-1;W>0==T.Y>g.Y&&(l=1-l)}}g=T}return l},n.Clipper.prototype.PointInPolygon=function(i,o){var l=0,f=o,g=i.X,M=i.Y,T=o.Pt.X,W=o.Pt.Y;do{o=o.Next;var G=o.Pt.X,at=o.Pt.Y;if(at===M&&(G===g||W===M&&G>g==T<g))return-1;if(W<M!=at<M){if(T>=g)if(G>g)l=1-l;else{var _t=(T-g)*(at-M)-(G-g)*(W-M);if(_t===0)return-1;_t>0==at>W&&(l=1-l)}else if(G>g){var _t=(T-g)*(at-M)-(G-g)*(W-M);if(_t===0)return-1;_t>0==at>W&&(l=1-l)}}T=G,W=at}while(f!==o);return l},n.Clipper.prototype.Poly2ContainsPoly1=function(i,o){var l=i;do{var f=this.PointInPolygon(l.Pt,o);if(f>=0)return f>0;l=l.Next}while(l!==i);return!0},n.Clipper.prototype.FixupFirstLefts1=function(i,o){for(var l,f,g=0,M=this.m_PolyOuts.length;g<M;g++)l=this.m_PolyOuts[g],f=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&f===i&&this.Poly2ContainsPoly1(l.Pts,o.Pts)&&(l.FirstLeft=o)},n.Clipper.prototype.FixupFirstLefts2=function(i,o){for(var l=o.FirstLeft,f,g,M=0,T=this.m_PolyOuts.length;M<T;M++)f=this.m_PolyOuts[M],!(f.Pts===null||f===o||f===i)&&(g=n.Clipper.ParseFirstLeft(f.FirstLeft),!(g!==l&&g!==i&&g!==o)&&(this.Poly2ContainsPoly1(f.Pts,i.Pts)?f.FirstLeft=i:this.Poly2ContainsPoly1(f.Pts,o.Pts)?f.FirstLeft=o:(f.FirstLeft===i||f.FirstLeft===o)&&(f.FirstLeft=l)))},n.Clipper.prototype.FixupFirstLefts3=function(i,o){for(var l,f,g=0,M=this.m_PolyOuts.length;g<M;g++)l=this.m_PolyOuts[g],f=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&f===i&&(l.FirstLeft=o)},n.Clipper.ParseFirstLeft=function(i){for(;i!==null&&i.Pts===null;)i=i.FirstLeft;return i},n.Clipper.prototype.JoinCommonEdges=function(){for(var i=0,o=this.m_Joins.length;i<o;i++){var l=this.m_Joins[i],f=this.GetOutRec(l.OutPt1.Idx),g=this.GetOutRec(l.OutPt2.Idx);if(!(f.Pts===null||g.Pts===null)&&!(f.IsOpen||g.IsOpen)){var M;f===g?M=f:this.OutRec1RightOfOutRec2(f,g)?M=g:this.OutRec1RightOfOutRec2(g,f)?M=f:M=this.GetLowermostRec(f,g),this.JoinPoints(l,f,g)&&(f===g?(f.Pts=l.OutPt1,f.BottomPt=null,g=this.CreateOutRec(),g.Pts=l.OutPt2,this.UpdateOutPtIdxs(g),this.Poly2ContainsPoly1(g.Pts,f.Pts)?(g.IsHole=!f.IsHole,g.FirstLeft=f,this.m_UsingPolyTree&&this.FixupFirstLefts2(g,f),(g.IsHole^this.ReverseSolution)==this.Area$1(g)>0&&this.ReversePolyPtLinks(g.Pts)):this.Poly2ContainsPoly1(f.Pts,g.Pts)?(g.IsHole=f.IsHole,f.IsHole=!g.IsHole,g.FirstLeft=f.FirstLeft,f.FirstLeft=g,this.m_UsingPolyTree&&this.FixupFirstLefts2(f,g),(f.IsHole^this.ReverseSolution)==this.Area$1(f)>0&&this.ReversePolyPtLinks(f.Pts)):(g.IsHole=f.IsHole,g.FirstLeft=f.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(f,g))):(g.Pts=null,g.BottomPt=null,g.Idx=f.Idx,f.IsHole=M.IsHole,M===g&&(f.FirstLeft=g.FirstLeft),g.FirstLeft=f,this.m_UsingPolyTree&&this.FixupFirstLefts3(g,f)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(i){var o=i.Pts;do o.Idx=i.Idx,o=o.Prev;while(o!==i.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var i=0;i<this.m_PolyOuts.length;){var o=this.m_PolyOuts[i++],l=o.Pts;if(!(l===null||o.IsOpen))do{for(var f=l.Next;f!==o.Pts;){if(n.IntPoint.op_Equality(l.Pt,f.Pt)&&f.Next!==l&&f.Prev!==l){var g=l.Prev,M=f.Prev;l.Prev=M,M.Next=l,f.Prev=g,g.Next=f,o.Pts=l;var T=this.CreateOutRec();T.Pts=f,this.UpdateOutPtIdxs(T),this.Poly2ContainsPoly1(T.Pts,o.Pts)?(T.IsHole=!o.IsHole,T.FirstLeft=o,this.m_UsingPolyTree&&this.FixupFirstLefts2(T,o)):this.Poly2ContainsPoly1(o.Pts,T.Pts)?(T.IsHole=o.IsHole,o.IsHole=!T.IsHole,T.FirstLeft=o.FirstLeft,o.FirstLeft=T,this.m_UsingPolyTree&&this.FixupFirstLefts2(o,T)):(T.IsHole=o.IsHole,T.FirstLeft=o.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(o,T)),f=l}f=f.Next}l=l.Next}while(l!==o.Pts)}},n.Clipper.Area=function(i){if(!Array.isArray(i))return 0;var o=i.length;if(o<3)return 0;for(var l=0,f=0,g=o-1;f<o;++f)l+=(i[g].X+i[f].X)*(i[g].Y-i[f].Y),g=f;return-l*.5},n.Clipper.prototype.Area=function(i){var o=i;if(i===null)return 0;var l=0;do l=l+(i.Prev.Pt.X+i.Pt.X)*(i.Prev.Pt.Y-i.Pt.Y),i=i.Next;while(i!==o);return l*.5},n.Clipper.prototype.Area$1=function(i){return this.Area(i.Pts)},n.Clipper.SimplifyPolygon=function(i,o){var l=new Array,f=new n.Clipper(0);return f.StrictlySimple=!0,f.AddPath(i,n.PolyType.ptSubject,!0),f.Execute(n.ClipType.ctUnion,l,o,o),l},n.Clipper.SimplifyPolygons=function(i,o){typeof o>"u"&&(o=n.PolyFillType.pftEvenOdd);var l=new Array,f=new n.Clipper(0);return f.StrictlySimple=!0,f.AddPaths(i,n.PolyType.ptSubject,!0),f.Execute(n.ClipType.ctUnion,l,o,o),l},n.Clipper.DistanceSqrd=function(i,o){var l=i.X-o.X,f=i.Y-o.Y;return l*l+f*f},n.Clipper.DistanceFromLineSqrd=function(i,o,l){var f=o.Y-l.Y,g=l.X-o.X,M=f*o.X+g*o.Y;return M=f*i.X+g*i.Y-M,M*M/(f*f+g*g)},n.Clipper.SlopesNearCollinear=function(i,o,l,f){return Math.abs(i.X-o.X)>Math.abs(i.Y-o.Y)?i.X>o.X==i.X<l.X?n.Clipper.DistanceFromLineSqrd(i,o,l)<f:o.X>i.X==o.X<l.X?n.Clipper.DistanceFromLineSqrd(o,i,l)<f:n.Clipper.DistanceFromLineSqrd(l,i,o)<f:i.Y>o.Y==i.Y<l.Y?n.Clipper.DistanceFromLineSqrd(i,o,l)<f:o.Y>i.Y==o.Y<l.Y?n.Clipper.DistanceFromLineSqrd(o,i,l)<f:n.Clipper.DistanceFromLineSqrd(l,i,o)<f},n.Clipper.PointsAreClose=function(i,o,l){var f=i.X-o.X,g=i.Y-o.Y;return f*f+g*g<=l},n.Clipper.ExcludeOp=function(i){var o=i.Prev;return o.Next=i.Next,i.Next.Prev=o,o.Idx=0,o},n.Clipper.CleanPolygon=function(i,o){typeof o>"u"&&(o=1.415);var l=i.length;if(l===0)return new Array;for(var f=new Array(l),g=0;g<l;++g)f[g]=new n.OutPt;for(var g=0;g<l;++g)f[g].Pt=i[g],f[g].Next=f[(g+1)%l],f[g].Next.Prev=f[g],f[g].Idx=0;for(var M=o*o,T=f[0];T.Idx===0&&T.Next!==T.Prev;)n.Clipper.PointsAreClose(T.Pt,T.Prev.Pt,M)?(T=n.Clipper.ExcludeOp(T),l--):n.Clipper.PointsAreClose(T.Prev.Pt,T.Next.Pt,M)?(n.Clipper.ExcludeOp(T.Next),T=n.Clipper.ExcludeOp(T),l-=2):n.Clipper.SlopesNearCollinear(T.Prev.Pt,T.Pt,T.Next.Pt,M)?(T=n.Clipper.ExcludeOp(T),l--):(T.Idx=1,T=T.Next);l<3&&(l=0);for(var W=new Array(l),g=0;g<l;++g)W[g]=new n.IntPoint1(T.Pt),T=T.Next;return f=null,W},n.Clipper.CleanPolygons=function(i,o){for(var l=new Array(i.length),f=0,g=i.length;f<g;f++)l[f]=n.Clipper.CleanPolygon(i[f],o);return l},n.Clipper.Minkowski=function(i,o,l,f){var g=f?1:0,M=i.length,T=o.length,W=new Array;if(l)for(var G=0;G<T;G++){for(var at=new Array(M),_t=0,mt=i.length,It=i[_t];_t<mt;_t++,It=i[_t])at[_t]=new n.IntPoint2(o[G].X+It.X,o[G].Y+It.Y);W.push(at)}else for(var G=0;G<T;G++){for(var at=new Array(M),_t=0,mt=i.length,It=i[_t];_t<mt;_t++,It=i[_t])at[_t]=new n.IntPoint2(o[G].X-It.X,o[G].Y-It.Y);W.push(at)}for(var Kt=new Array,G=0;G<T-1+g;G++)for(var _t=0;_t<M;_t++){var ae=new Array;ae.push(W[G%T][_t%M]),ae.push(W[(G+1)%T][_t%M]),ae.push(W[(G+1)%T][(_t+1)%M]),ae.push(W[G%T][(_t+1)%M]),n.Clipper.Orientation(ae)||ae.reverse(),Kt.push(ae)}return Kt},n.Clipper.MinkowskiSum=function(i,o,l){if(o[0]instanceof Array){for(var g=o,T=new n.Paths,M=new n.Clipper,W=0;W<g.length;++W){var G=n.Clipper.Minkowski(i,g[W],!0,l);if(M.AddPaths(G,n.PolyType.ptSubject,!0),l){var f=n.Clipper.TranslatePath(g[W],i[0]);M.AddPath(f,n.PolyType.ptClip,!0)}}return M.Execute(n.ClipType.ctUnion,T,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),T}else{var f=o,g=n.Clipper.Minkowski(i,f,!0,l),M=new n.Clipper;return M.AddPaths(g,n.PolyType.ptSubject,!0),M.Execute(n.ClipType.ctUnion,g,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),g}},n.Clipper.TranslatePath=function(i,o){for(var l=new n.Path,f=0;f<i.length;f++)l.push(new n.IntPoint2(i[f].X+o.X,i[f].Y+o.Y));return l},n.Clipper.MinkowskiDiff=function(i,o){var l=n.Clipper.Minkowski(i,o,!1,!0),f=new n.Clipper;return f.AddPaths(l,n.PolyType.ptSubject,!0),f.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),l},n.Clipper.PolyTreeToPaths=function(i){var o=new Array;return n.Clipper.AddPolyNodeToPaths(i,n.Clipper.NodeType.ntAny,o),o},n.Clipper.AddPolyNodeToPaths=function(i,o,l){var f=!0;switch(o){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:f=!i.IsOpen;break;default:break}i.m_polygon.length>0&&f&&l.push(i.m_polygon);for(var g=0,M=i.Childs(),T=M.length,W=M[g];g<T;g++,W=M[g])n.Clipper.AddPolyNodeToPaths(W,o,l)},n.Clipper.OpenPathsFromPolyTree=function(i){for(var o=new n.Paths,l=0,f=i.ChildCount();l<f;l++)i.Childs()[l].IsOpen&&o.push(i.Childs()[l].m_polygon);return o},n.Clipper.ClosedPathsFromPolyTree=function(i){var o=new n.Paths;return n.Clipper.AddPolyNodeToPaths(i,n.Clipper.NodeType.ntClosed,o),o},ai(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(i,o){typeof i>"u"&&(i=2),typeof o>"u"&&(o=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=i,this.ArcTolerance=o,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(i,o,l){var f=i.length-1;if(!(f<0)){var g=new n.PolyNode;if(g.m_jointype=o,g.m_endtype=l,l===n.EndType.etClosedLine||l===n.EndType.etClosedPolygon)for(;f>0&&n.IntPoint.op_Equality(i[0],i[f]);)f--;g.m_polygon.push(i[0]);for(var M=0,T=0,W=1;W<=f;W++)n.IntPoint.op_Inequality(g.m_polygon[M],i[W])&&(M++,g.m_polygon.push(i[W]),(i[W].Y>g.m_polygon[T].Y||i[W].Y===g.m_polygon[T].Y&&i[W].X<g.m_polygon[T].X)&&(T=M));if(!(l===n.EndType.etClosedPolygon&&M<2)&&(this.m_polyNodes.AddChild(g),l===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,T);else{var G=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(g.m_polygon[T].Y>G.Y||g.m_polygon[T].Y===G.Y&&g.m_polygon[T].X<G.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,T))}}},n.ClipperOffset.prototype.AddPaths=function(i,o,l){for(var f=0,g=i.length;f<g;f++)this.AddPath(i[f],o,l)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var i=0;i<this.m_polyNodes.ChildCount();i++){var o=this.m_polyNodes.Childs()[i];(o.m_endtype===n.EndType.etClosedPolygon||o.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(o.m_polygon))&&o.m_polygon.reverse()}else for(var i=0;i<this.m_polyNodes.ChildCount();i++){var o=this.m_polyNodes.Childs()[i];o.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(o.m_polygon)&&o.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(i,o){var l=o.X-i.X,f=o.Y-i.Y;if(l===0&&f===0)return new n.DoublePoint2(0,0);var g=1/Math.sqrt(l*l+f*f);return l*=g,f*=g,new n.DoublePoint2(f,-l)},n.ClipperOffset.prototype.DoOffset=function(i){if(this.m_destPolys=new Array,this.m_delta=i,n.ClipperBase.near_zero(i)){for(var o=0;o<this.m_polyNodes.ChildCount();o++){var l=this.m_polyNodes.Childs()[o];l.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(l.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var f;this.ArcTolerance<=0?f=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(i)*n.ClipperOffset.def_arc_tolerance?f=Math.abs(i)*n.ClipperOffset.def_arc_tolerance:f=this.ArcTolerance;var g=3.14159265358979/Math.acos(1-f/Math.abs(i));this.m_sin=Math.sin(n.ClipperOffset.two_pi/g),this.m_cos=Math.cos(n.ClipperOffset.two_pi/g),this.m_StepsPerRad=g/n.ClipperOffset.two_pi,i<0&&(this.m_sin=-this.m_sin);for(var o=0;o<this.m_polyNodes.ChildCount();o++){var l=this.m_polyNodes.Childs()[o];this.m_srcPoly=l.m_polygon;var M=this.m_srcPoly.length;if(!(M===0||i<=0&&(M<3||l.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,M===1){if(l.m_jointype===n.JoinType.jtRound)for(var T=1,W=0,G=1;G<=g;G++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+T*i),n.ClipperOffset.Round(this.m_srcPoly[0].Y+W*i)));var at=T;T=T*this.m_cos-this.m_sin*W,W=at*this.m_sin+W*this.m_cos}else for(var T=-1,W=-1,G=0;G<4;++G)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+T*i),n.ClipperOffset.Round(this.m_srcPoly[0].Y+W*i))),T<0?T=1:W<0?W=1:T=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var G=0;G<M-1;G++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[G],this.m_srcPoly[G+1]));if(l.m_endtype===n.EndType.etClosedLine||l.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[M-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[M-2])),l.m_endtype===n.EndType.etClosedPolygon){for(var _t=M-1,G=0;G<M;G++)_t=this.OffsetPoint(G,_t,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(l.m_endtype===n.EndType.etClosedLine){for(var _t=M-1,G=0;G<M;G++)_t=this.OffsetPoint(G,_t,l.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var mt=this.m_normals[M-1],G=M-1;G>0;G--)this.m_normals[G]=new n.DoublePoint2(-this.m_normals[G-1].X,-this.m_normals[G-1].Y);this.m_normals[0]=new n.DoublePoint2(-mt.X,-mt.Y),_t=0;for(var G=M-1;G>=0;G--)_t=this.OffsetPoint(G,_t,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var _t=0,G=1;G<M-1;++G)_t=this.OffsetPoint(G,_t,l.m_jointype);var It;if(l.m_endtype===n.EndType.etOpenButt){var G=M-1;It=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[G].X+this.m_normals[G].X*i),n.ClipperOffset.Round(this.m_srcPoly[G].Y+this.m_normals[G].Y*i)),this.m_destPoly.push(It),It=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[G].X-this.m_normals[G].X*i),n.ClipperOffset.Round(this.m_srcPoly[G].Y-this.m_normals[G].Y*i)),this.m_destPoly.push(It)}else{var G=M-1;_t=M-2,this.m_sinA=0,this.m_normals[G]=new n.DoublePoint2(-this.m_normals[G].X,-this.m_normals[G].Y),l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(G,_t):this.DoRound(G,_t)}for(var G=M-1;G>0;G--)this.m_normals[G]=new n.DoublePoint2(-this.m_normals[G-1].X,-this.m_normals[G-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),_t=M-1;for(var G=_t-1;G>0;--G)_t=this.OffsetPoint(G,_t,l.m_jointype);l.m_endtype===n.EndType.etOpenButt?(It=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*i),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*i)),this.m_destPoly.push(It),It=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*i),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*i)),this.m_destPoly.push(It)):(_t=1,this.m_sinA=0,l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var i=arguments,o=i[0]instanceof n.PolyTree;if(o){var l=i[0],f=i[1];l.Clear(),this.FixOrientations(),this.DoOffset(f);var g=new n.Clipper(0);if(g.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),f>0)g.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var M=n.Clipper.GetBounds(this.m_destPolys),T=new n.Path;if(T.push(new n.IntPoint2(M.left-10,M.bottom+10)),T.push(new n.IntPoint2(M.right+10,M.bottom+10)),T.push(new n.IntPoint2(M.right+10,M.top-10)),T.push(new n.IntPoint2(M.left-10,M.top-10)),g.AddPath(T,n.PolyType.ptSubject,!0),g.ReverseSolution=!0,g.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.ChildCount()===1&&l.Childs()[0].ChildCount()>0){var W=l.Childs()[0];l.Childs()[0]=W.Childs()[0],l.Childs()[0].m_Parent=l;for(var G=1;G<W.ChildCount();G++)l.AddChild(W.Childs()[G])}else l.Clear()}}else{var l=i[0],f=i[1];n.Clear(l),this.FixOrientations(),this.DoOffset(f);var g=new n.Clipper(0);if(g.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),f>0)g.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var M=n.Clipper.GetBounds(this.m_destPolys),T=new n.Path;T.push(new n.IntPoint2(M.left-10,M.bottom+10)),T.push(new n.IntPoint2(M.right+10,M.bottom+10)),T.push(new n.IntPoint2(M.right+10,M.top-10)),T.push(new n.IntPoint2(M.left-10,M.top-10)),g.AddPath(T,n.PolyType.ptSubject,!0),g.ReverseSolution=!0,g.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.length>0&&l.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(i,o,l){if(this.m_sinA=this.m_normals[o].X*this.m_normals[i].Y-this.m_normals[i].X*this.m_normals[o].Y,Math.abs(this.m_sinA*this.m_delta)<1){var f=this.m_normals[o].X*this.m_normals[i].X+this.m_normals[i].Y*this.m_normals[o].Y;if(f>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+this.m_normals[o].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[i].Y+this.m_normals[o].Y*this.m_delta))),o}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+this.m_normals[o].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[i].Y+this.m_normals[o].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[i])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+this.m_normals[i].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[i].Y+this.m_normals[i].Y*this.m_delta)));else switch(l){case n.JoinType.jtMiter:{var g=1+(this.m_normals[i].X*this.m_normals[o].X+this.m_normals[i].Y*this.m_normals[o].Y);g>=this.m_miterLim?this.DoMiter(i,o,g):this.DoSquare(i,o);break}case n.JoinType.jtSquare:this.DoSquare(i,o);break;case n.JoinType.jtRound:this.DoRound(i,o);break}return o=i,o},n.ClipperOffset.prototype.DoSquare=function(i,o){var l=Math.tan(Math.atan2(this.m_sinA,this.m_normals[o].X*this.m_normals[i].X+this.m_normals[o].Y*this.m_normals[i].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+this.m_delta*(this.m_normals[o].X-this.m_normals[o].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[i].Y+this.m_delta*(this.m_normals[o].Y+this.m_normals[o].X*l)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+this.m_delta*(this.m_normals[i].X+this.m_normals[i].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[i].Y+this.m_delta*(this.m_normals[i].Y-this.m_normals[i].X*l))))},n.ClipperOffset.prototype.DoMiter=function(i,o,l){var f=this.m_delta/l;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+(this.m_normals[o].X+this.m_normals[i].X)*f),n.ClipperOffset.Round(this.m_srcPoly[i].Y+(this.m_normals[o].Y+this.m_normals[i].Y)*f)))},n.ClipperOffset.prototype.DoRound=function(i,o){for(var l=Math.atan2(this.m_sinA,this.m_normals[o].X*this.m_normals[i].X+this.m_normals[o].Y*this.m_normals[i].Y),f=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(l))),1),g=this.m_normals[o].X,M=this.m_normals[o].Y,T,W=0;W<f;++W)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+g*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[i].Y+M*this.m_delta))),T=g,g=g*this.m_cos-this.m_sin*M,M=T*this.m_sin+M*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[i].X+this.m_normals[i].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[i].Y+this.m_normals[i].Y*this.m_delta)))},n.Error=function(i){try{throw new Error(i)}catch(o){alert(o.message)}},n.JS={},n.JS.AreaOfPolygon=function(i,o){return o||(o=1),n.Clipper.Area(i)/(o*o)},n.JS.AreaOfPolygons=function(i,o){o||(o=1);for(var l=0,f=0;f<i.length;f++)l+=n.Clipper.Area(i[f]);return l/(o*o)},n.JS.BoundsOfPath=function(i,o){return n.JS.BoundsOfPaths([i],o)},n.JS.BoundsOfPaths=function(i,o){o||(o=1);var l=n.Clipper.GetBounds(i);return l.left/=o,l.bottom/=o,l.right/=o,l.top/=o,l},n.JS.Clean=function(f,o){if(!(f instanceof Array))return[];var l=f[0]instanceof Array,f=n.JS.Clone(f);if(typeof o!="number"||o===null)return n.Error("Delta is not a number in Clean()."),f;if(f.length===0||f.length===1&&f[0].length===0||o<0)return f;l||(f=[f]);for(var g=f.length,M,T,W,G,at,_t,mt,It=[],Kt=0;Kt<g;Kt++)if(T=f[Kt],M=T.length,M!==0){if(M<3){W=T,It.push(W);continue}for(W=T,G=o*o,at=T[0],_t=1,mt=1;mt<M;mt++)(T[mt].X-at.X)*(T[mt].X-at.X)+(T[mt].Y-at.Y)*(T[mt].Y-at.Y)<=G||(W[_t]=T[mt],at=T[mt],_t++);at=T[_t-1],(T[0].X-at.X)*(T[0].X-at.X)+(T[0].Y-at.Y)*(T[0].Y-at.Y)<=G&&_t--,_t<M&&W.splice(_t,M-_t),W.length&&It.push(W)}return!l&&It.length?It=It[0]:!l&&It.length===0?It=[]:l&&It.length===0&&(It=[[]]),It},n.JS.Clone=function(i){if(!(i instanceof Array))return[];if(i.length===0)return[];if(i.length===1&&i[0].length===0)return[[]];var o=i[0]instanceof Array;o||(i=[i]);var l=i.length,f,g,M,T,W=new Array(l);for(g=0;g<l;g++){for(f=i[g].length,T=new Array(f),M=0;M<f;M++)T[M]={X:i[g][M].X,Y:i[g][M].Y};W[g]=T}return o||(W=W[0]),W},n.JS.Lighten=function(i,o){if(!(i instanceof Array))return[];if(typeof o!="number"||o===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(i);if(i.length===0||i.length===1&&i[0].length===0||o<0)return n.JS.Clone(i);var l=i[0]instanceof Array;l||(i=[i]);var f,g,M,T,W,G,at,_t,mt,It,Kt,ae,le,ge,Ne,qe,Sn,Ps=i.length,As=o*o,wn=[];for(f=0;f<Ps;f++)if(M=i[f],G=M.length,G!==0){for(T=0;T<1e6;T++){for(W=[],G=M.length,M[G-1].X!==M[0].X||M[G-1].Y!==M[0].Y?(ae=1,M.push({X:M[0].X,Y:M[0].Y}),G=M.length):ae=0,Kt=[],g=0;g<G-2;g++)at=M[g],mt=M[g+1],_t=M[g+2],qe=at.X,Sn=at.Y,le=_t.X-qe,ge=_t.Y-Sn,(le!==0||ge!==0)&&(Ne=((mt.X-qe)*le+(mt.Y-Sn)*ge)/(le*le+ge*ge),Ne>1?(qe=_t.X,Sn=_t.Y):Ne>0&&(qe+=le*Ne,Sn+=ge*Ne)),le=mt.X-qe,ge=mt.Y-Sn,It=le*le+ge*ge,It<=As&&(Kt[g+1]=1,g++);for(W.push({X:M[0].X,Y:M[0].Y}),g=1;g<G-1;g++)Kt[g]||W.push({X:M[g].X,Y:M[g].Y});if(W.push({X:M[G-1].X,Y:M[G-1].Y}),ae&&M.pop(),Kt.length)M=W;else break}G=W.length,W[G-1].X===W[0].X&&W[G-1].Y===W[0].Y&&W.pop(),W.length>2&&wn.push(W)}return l||(wn=wn[0]),typeof wn>"u"&&(wn=[]),wn},n.JS.PerimeterOfPath=function(i,o,l){if(typeof i>"u")return 0;var f=Math.sqrt,g=0,M,T,W=0,G=0,at=0,_t=0,mt=i.length;if(mt<2)return 0;for(o&&(i[mt]=i[0],mt++);--mt;)M=i[mt],W=M.X,G=M.Y,T=i[mt-1],at=T.X,_t=T.Y,g+=f((W-at)*(W-at)+(G-_t)*(G-_t));return o&&i.pop(),g/l},n.JS.PerimeterOfPaths=function(i,o,l){l||(l=1);for(var f=0,g=0;g<i.length;g++)f+=n.JS.PerimeterOfPath(i[g],o,l);return f},n.JS.ScaleDownPath=function(i,o){var l,f;for(o||(o=1),l=i.length;l--;)f=i[l],f.X=f.X/o,f.Y=f.Y/o},n.JS.ScaleDownPaths=function(i,o){var l,f,g;for(o||(o=1),l=i.length;l--;)for(f=i[l].length;f--;)g=i[l][f],g.X=g.X/o,g.Y=g.Y/o},n.JS.ScaleUpPath=function(i,o){var l,f,g=Math.round;for(o||(o=1),l=i.length;l--;)f=i[l],f.X=g(f.X*o),f.Y=g(f.Y*o)},n.JS.ScaleUpPaths=function(i,o){var l,f,g,M=Math.round;for(o||(o=1),l=i.length;l--;)for(f=i[l].length;f--;)g=i[l][f],g.X=M(g.X*o),g.Y=M(g.Y*o)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(i,o){var l=new n.ExPolygon;l.outer=i.Contour();var f=i.Childs(),g=f.length;l.holes=new Array(g);var M,T,W,G,at,_t;for(W=0;W<g;W++)for(M=f[W],l.holes[W]=M.Contour(),G=0,at=M.Childs(),_t=at.length;G<_t;G++)T=at[G],n.JS.AddOuterPolyNodeToExPolygons(T,o);o.push(l)},n.JS.ExPolygonsToPaths=function(i){var o,l,f,g,M=new n.Paths;for(o=0,f=i.length;o<f;o++)for(M.push(i[o].outer),l=0,g=i[o].holes.length;l<g;l++)M.push(i[o].holes[l]);return M},n.JS.PolyTreeToExPolygons=function(i){var o=new n.ExPolygons,l,f,g,M;for(f=0,g=i.Childs(),M=g.length;f<M;f++)l=g[f],n.JS.AddOuterPolyNodeToExPolygons(l,o);return o}})()});async function hh(n={}){var t,e=n,r=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,a=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(a){let{createRequire:x}=await import("node:module");var c=x(import.meta.url)}var h=!1;e.setup=function(){if(h)return;h=!0,e.initTBB();function x(V,$,ct=(vt=>vt)){if($)for(let vt of $)V.push_back(ct(vt));return V}function _(V,$=(ct=>ct)){let ct=[],vt=V.size();for(let zt=0;zt<vt;zt++)ct.push($(V.get(zt)));return ct}function I(V,$=(ct=>ct)){let ct=[],vt=V.size();for(let zt=0;zt<vt;zt++){let ie=V.get(zt),ue=ie.size(),xe=[];for(let ve=0;ve<ue;ve++)xe.push($(ie.get(ve)));ct.push(xe)}return ct}function D(V){return V[0].length<3&&(V=[V]),x(new e.Vector2_vec2,V,$=>x(new e.Vector_vec2,$,ct=>ct instanceof Array?{x:ct[0],y:ct[1]}:ct))}function X(V){for(let $=0;$<V.size();$++)V.get($).delete();V.delete()}function rt(V){return V[0]instanceof Array?{x:V[0][0],y:V[0][1]}:typeof V[0]=="number"?{x:V[0]||0,y:V[1]||0}:V[0]}function st(V){return V[0]instanceof Array?{x:V[0][0],y:V[0][1],z:V[0][2]}:typeof V[0]=="number"?{x:V[0]||0,y:V[1]||0,z:V[2]||0}:V[0]}function ot(V){return V=="EvenOdd"?0:V=="NonZero"?1:V=="Negative"?3:2}function ft(V){return V=="Round"?1:V=="Miter"?2:0}let yt=e.CrossSection;function Et(V,$="Positive"){if(V instanceof yt)return V;{let ct=D(V),vt=new yt(ct,ot($));return X(ct),vt}}e.CrossSection.prototype.translate=function(...V){return this._Translate(rt(V))},e.CrossSection.prototype.scale=function(V){return typeof V=="number"?this._Scale({x:V,y:V}):this._Scale(rt([V]))},e.CrossSection.prototype.mirror=function(V){return this._Mirror(rt([V]))},e.CrossSection.prototype.warp=function(V){let $=Vn(function(vt){let zt=gt(vt,"double"),ie=gt(vt+8,"double"),ue=[zt,ie];V(ue),pt(vt,ue[0],"double"),pt(vt+8,ue[1],"double")},"vi"),ct=this._Warp($);return Wn($),ct},e.CrossSection.prototype.decompose=function(){let V=this._Decompose(),$=_(V);return V.delete(),$},e.CrossSection.prototype.bounds=function(){let V=this._Bounds();return{min:["x","y"].map($=>V.min[$]),max:["x","y"].map($=>V.max[$])}},e.CrossSection.prototype.offset=function(V,$="Round",ct=2,vt=0){return this._Offset(V,ft($),ct,vt)},e.CrossSection.prototype.simplify=function(V=1e-6){return this._Simplify(V)},e.CrossSection.prototype.extrude=function(V,$=0,ct=0,vt=[1,1],zt=!1){vt=rt([vt]);let ie=e._Extrude(this._ToPolygons(),V,$,ct,vt);return zt?ie.translate([0,0,-V/2]):ie},e.CrossSection.prototype.revolve=function(V=0,$=360){return e._Revolve(this._ToPolygons(),V,$)},e.CrossSection.prototype.add=function(V){return this._add(Et(V))},e.CrossSection.prototype.subtract=function(V){return this._subtract(Et(V))},e.CrossSection.prototype.intersect=function(V){return this._intersect(Et(V))},e.CrossSection.prototype.toPolygons=function(){let V=this._ToPolygons(),$=I(V,ct=>[ct.x,ct.y]);return V.delete(),$},e.Manifold.prototype.smoothOut=function(V=52.5,$=0){return this._SmoothOut(V,$)},e.Manifold.prototype.warp=function(V){let $=Vn(function(zt){let ie=gt(zt,"double"),ue=gt(zt+8,"double"),xe=gt(zt+16,"double"),ve=[ie,ue,xe];V(ve),pt(zt,ve[0],"double"),pt(zt+8,ve[1],"double"),pt(zt+16,ve[2],"double")},"vi"),ct=this._Warp($);Wn($);let vt=ct.status();if(vt!=="NoError")throw new e.ManifoldError(vt);return ct},e.Manifold.prototype.warpBatch=function(V){let $=Vn(function(zt,ie){let ue=e.HEAPF64??it;if(!ue)throw new Error("WASM heap is not initialized (HEAPF64 unavailable)");let xe=new Float64Array(ue.buffer,zt,ie*3);V(xe,ie)},"vii"),ct=this._WarpBatch($);Wn($);let vt=ct.status();if(vt!=="NoError")throw new e.ManifoldError(vt);return ct},e.Manifold.prototype.calculateNormals=function(V=0,$=52.5){return this._CalculateNormals(V,$)},e.Manifold.prototype.smoothByNormals=function(V=0){return this._SmoothByNormals(V)},e.Manifold.prototype.setProperties=function(V,$){let ct=this.numProp(),vt=Vn(function(ie,ue,xe){let ve=[];for(let _e=0;_e<V;++_e)ve[_e]=gt(ie+8*_e,"double");let ln=[];for(let _e=0;_e<3;++_e)ln[_e]=gt(ue+8*_e,"double");let Tn=[];for(let _e=0;_e<ct;++_e)Tn[_e]=gt(xe+8*_e,"double");$(ve,ln,Tn);for(let _e=0;_e<V;++_e)pt(ie+8*_e,ve[_e],"double")},"viii"),zt=this._SetProperties(V,vt);return Wn(vt),zt},e.Manifold.prototype.translate=function(...V){return this._Translate(st(V))},e.Manifold.prototype.rotate=function(V,$,ct){return Array.isArray(V)?this._Rotate(...V):this._Rotate(V,$||0,ct||0)},e.Manifold.prototype.scale=function(V){return typeof V=="number"?this._Scale({x:V,y:V,z:V}):this._Scale(st([V]))},e.Manifold.prototype.mirror=function(V){return this._Mirror(st([V]))},e.Manifold.prototype.trimByPlane=function(V,$=0){return this._TrimByPlane(st([V]),$)},e.Manifold.prototype.slice=function(V=0){let $=this._Slice(V),ct=new yt($,ot("Positive"));return X($),ct},e.Manifold.prototype.project=function(){let V=this._Project(),$=new yt(V,ot("Positive"));return X(V),$},e.Manifold.prototype.rayCast=function(V,$){let ct=this._RayCast(st([V]),st([$])),vt=_(ct,zt=>({faceID:zt.faceID,distance:zt.distance,position:["x","y","z"].map(ie=>zt.position[ie]),normal:["x","y","z"].map(ie=>zt.normal[ie])}));return ct.delete(),vt},e.Manifold.prototype.split=function(V){let $=this._Split(V),ct=_($);return $.delete(),ct},e.Manifold.prototype.splitByPlane=function(V,$=0){let ct=this._SplitByPlane(st([V]),$),vt=_(ct);return ct.delete(),vt},e.Manifold.prototype.decompose=function(){let V=this._Decompose(),$=_(V);return V.delete(),$},e.Manifold.prototype.boundingBox=function(){let V=this._boundingBox();return{min:["x","y","z"].map($=>V.min[$]),max:["x","y","z"].map($=>V.max[$])}},e.Manifold.prototype.simplify=function(V=0){return this._Simplify(V)};class Rt{constructor({numProp:$=3,triVerts:ct=new Uint32Array,vertProperties:vt=new Float32Array,mergeFromVert:zt,mergeToVert:ie,runIndex:ue,runOriginalID:xe,faceID:ve,halfedgeTangent:ln,runTransform:Tn,runFlags:_e,tolerance:Ds=0}={}){this.numProp=$,this.triVerts=ct,this.vertProperties=vt,this.mergeFromVert=zt,this.mergeToVert=ie,this.runIndex=ue,this.runOriginalID=xe,this.faceID=ve,this.halfedgeTangent=ln,this.runTransform=Tn,this.runFlags=_e,this.tolerance=Ds}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){let{changed:$,mesh:ct}=e._Merge(this);return Object.assign(this,{...ct}),$}verts($){return this.triVerts.subarray(3*$,3*($+1))}position($){return this.vertProperties.subarray(this.numProp*$,this.numProp*$+3)}extras($){return this.vertProperties.subarray(this.numProp*$+3,this.numProp*($+1))}tangent($){return this.halfedgeTangent.subarray(4*$,4*($+1))}transform($){let ct=new Array(16);for(let vt of[0,1,2,3])for(let zt of[0,1,2])ct[4*vt+zt]=this.runTransform[12*$+3*vt+zt];return ct[15]=1,ct}backside($){return this.runFlags!=null&&$<this.runFlags.length&&(this.runFlags[$]&1)!==0}hasNormals($){return this.runFlags!=null&&$<this.runFlags.length&&(this.runFlags[$]&2)!==0}}e.Mesh=Rt,e.Manifold.prototype.getMesh=function(V=-1){return new Rt(this._GetMeshJS(V))},e.ManifoldError=function($,...ct){let vt="Unknown error";switch($){case"NonFiniteVertex":vt="Non-finite vertex";break;case"NotManifold":vt="Not manifold";break;case"VertexOutOfBounds":vt="Vertex index out of bounds";break;case"PropertiesWrongLength":vt="Properties have wrong length";break;case"MissingPositionProperties":vt="Less than three properties";break;case"MergeVectorsDifferentLengths":vt="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":vt="Merge index out of bounds";break;case"TransformWrongLength":vt="Transform vector has wrong length";break;case"RunIndexWrongLength":vt="Run index vector has wrong length";break;case"FaceIDWrongLength":vt="Face ID vector has wrong length";break;case"InvalidConstruction":vt="Manifold constructed with invalid parameters";break;case"ResultTooLarge":vt="Result exceeds maximum size";break;case"InvalidTangents":vt="Invalid halfedge tangents";break}let zt=Error.apply(this,[vt,...ct]);zt.name=this.name="ManifoldError",this.message=zt.message,this.stack=zt.stack,this.code=$},e.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:e.ManifoldError,writable:!0,configurable:!0}}),e.CrossSection=function(V,$="Positive"){let ct=D(V),vt=new yt(ct,ot($));return X(ct),vt},e.CrossSection.ofPolygons=function(V,$="Positive"){return new e.CrossSection(V,$)},e.CrossSection.square=function(...V){let $;V.length==0?$={x:1,y:1}:typeof V[0]=="number"?$={x:V[0],y:V[0]}:$=rt(V);let ct=V[1]||!1;return e._Square($,ct)},e.CrossSection.circle=function(V,$=0){return e._Circle(V,$)};function Dt(V){return function(...$){$.length==1&&($=$[0]);let ct=new e.Vector_crossSection;for(let zt of $)ct.push_back(Et(zt));let vt=e["_crossSection"+V](ct);return ct.delete(),vt}}e.CrossSection.compose=Dt("Compose"),e.CrossSection.union=Dt("UnionN"),e.CrossSection.difference=Dt("DifferenceN"),e.CrossSection.intersection=Dt("IntersectionN");function Vt(V,$){x(V,$,ct=>ct instanceof Array?{x:ct[0],y:ct[1]}:ct)}e.CrossSection.hull=function(...V){V.length==1&&(V=V[0]);let $=new e.Vector_vec2;for(let vt of V)if(vt instanceof yt)e._crossSectionCollectVertices($,vt);else if(vt instanceof Array&&vt.length==2&&typeof vt[0]=="number")$.push_back({x:vt[0],y:vt[1]});else if(vt.x)$.push_back(vt);else{let ie=vt[0].length==2&&typeof vt[0][0]=="number"||vt[0].x?[vt]:vt;for(let ue of ie)Vt($,ue)}let ct=e._crossSectionHullPoints($);return $.delete(),ct},e.CrossSection.prototype=Object.create(yt.prototype),Object.defineProperty(e.CrossSection,Symbol.hasInstance,{get:()=>V=>V instanceof yt});let qt=e.Manifold;e.Manifold=function(V){let $=new qt(V),ct=$.status();if(ct!=="NoError")throw new e.ManifoldError(ct);return $},e.Manifold.ofMesh=function(V){return new e.Manifold(V)},e.Manifold.tetrahedron=function(){return e._Tetrahedron()},e.Manifold.cube=function(...V){let $;V.length==0?$={x:1,y:1,z:1}:typeof V[0]=="number"?$={x:V[0],y:V[0],z:V[0]}:$=st(V);let ct=V[1]||!1;return e._Cube($,ct)},e.Manifold.cylinder=function(V,$,ct=-1,vt=0,zt=!1){return e._Cylinder(V,$,ct,vt,zt)},e.Manifold.sphere=function(V,$=0){return e._Sphere(V,$)},e.Manifold.smooth=function(V,$=[]){let ct=new e.Vector_smoothness;x(ct,$);let vt=e._Smooth(V,ct);return ct.delete(),vt},e.Manifold.extrude=function(V,$,ct=0,vt=0,zt=[1,1],ie=!1){return(V instanceof yt?V:e.CrossSection(V,"Positive")).extrude($,ct,vt,zt,ie)},e.Manifold.revolve=function(V,$=0,ct=360){return(V instanceof yt?V:e.CrossSection(V,"Positive")).revolve($,ct)},e.Manifold.reserveIDs=function(V){return e._ReserveIDs(V)};function te(V){return function(...$){$.length==1&&($=$[0]);let ct=new e.Vector_manifold;for(let zt of $)ct.push_back(zt);let vt=e["_manifold"+V+"N"](ct);return ct.delete(),vt}}e.Manifold.union=te("Union"),e.Manifold.compose=e.Manifold.union,e.Manifold.difference=te("Difference"),e.Manifold.intersection=te("Intersection"),e.Manifold.levelSet=function(V,$,ct,vt=0,zt=-1){let ie={min:{x:$.min[0],y:$.min[1],z:$.min[2]},max:{x:$.max[0],y:$.max[1],z:$.max[2]}},ue=Vn(function(ve){let ln=gt(ve,"double"),Tn=gt(ve+8,"double"),_e=gt(ve+16,"double");return V([ln,Tn,_e])},"di"),xe=e._LevelSet(ue,ie,ct,vt,zt);return Wn(ue),xe},e.ExecutionContext.prototype.fromMesh=function(V){return this._FromMesh(V)},e.ExecutionContext.prototype.smooth=function(V,$=[]){let ct=new e.Vector_smoothness;x(ct,$);let vt=this._Smooth(V,ct);return ct.delete(),vt},e.ExecutionContext.prototype.levelSet=function(V,$,ct,vt=0,zt=-1){let ie={min:{x:$.min[0],y:$.min[1],z:$.min[2]},max:{x:$.max[0],y:$.max[1],z:$.max[2]}},ue=Vn(function(ve){let ln=gt(ve,"double"),Tn=gt(ve+8,"double"),_e=gt(ve+16,"double");return V([ln,Tn,_e])},"di"),xe=this._LevelSet(ue,ie,ct,vt,zt);return Wn(ue),xe};function re(V,$){x(V,$,ct=>ct instanceof Array?{x:ct[0],y:ct[1],z:ct[2]}:ct)}e.Manifold.hull=function(...V){V.length==1&&(V=V[0]);let $=new e.Vector_vec3;for(let vt of V)vt instanceof qt?e._manifoldCollectVertices($,vt):vt instanceof Array&&vt.length==3&&typeof vt[0]=="number"?$.push_back({x:vt[0],y:vt[1],z:vt[2]}):vt.x?$.push_back(vt):re($,vt);let ct=e._manifoldHullPoints($);return $.delete(),ct},e.Manifold.prototype=Object.create(qt.prototype),Object.defineProperty(e.Manifold,Symbol.hasInstance,{get:()=>V=>V instanceof qt}),e.triangulate=function(V,$=-1,ct=!0){let vt=D(V),zt=_(e._Triangulate(vt,$,ct),ie=>[ie[0],ie[1],ie[2]]);return X(vt),zt}};var u=[],d="./this.program",p=(x,_)=>{throw _},v=import.meta.url,y="";function m(x){return e.locateFile?e.locateFile(x,y):y+x}var b,w;if(a){var S=c("node:fs");v.startsWith("file:")&&(y=c("node:path").dirname(c("node:url").fileURLToPath(v))+"/"),w=x=>{x=N(x)?new URL(x):x;var _=S.readFileSync(x);return _},b=async(x,_=!0)=>{x=N(x)?new URL(x):x;var I=S.readFileSync(x,_?void 0:"utf8");return I},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),u=process.argv.slice(2),p=(x,_)=>{throw process.exitCode=x,_}}else if(r||s){try{y=new URL(".",v).href}catch{}s&&(w=x=>{var _=new XMLHttpRequest;return _.open("GET",x,!1),_.responseType="arraybuffer",_.send(null),new Uint8Array(_.response)}),b=async x=>{if(N(x))return new Promise((I,D)=>{var X=new XMLHttpRequest;X.open("GET",x,!0),X.responseType="arraybuffer",X.onload=()=>{if(X.status==200||X.status==0&&X.response){I(X.response);return}D(X.status)},X.onerror=D,X.send(null)});var _=await fetch(x,{credentials:"same-origin"});if(_.ok)return _.arrayBuffer();throw new Error(_.status+" : "+_.url)}}var P=console.log.bind(console),R=console.error.bind(console),C,A=!1,N=x=>x.startsWith("file://"),F,E,O,L,U,k,Z,tt,Q,it,Y,et,H=!1;function K(){var x=pr.buffer;O=new Int8Array(x),U=new Int16Array(x),L=new Uint8Array(x),k=new Uint16Array(x),Z=new Int32Array(x),tt=new Uint32Array(x),Q=new Float32Array(x),it=new Float64Array(x),Y=new BigInt64Array(x),et=new BigUint64Array(x)}function lt(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Pt(e.preRun.shift());Ct(xt)}function J(){H=!0,Gn.J()}function z(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ht(e.postRun.shift());Ct(dt)}function B(x){e.onAbort?.(x),x="Aborted("+x+")",R(x),A=!0,x+=". Build with -sASSERTIONS for more info.";var _=new WebAssembly.RuntimeError(x);throw E?.(_),_}var j;function q(){return e.locateFile?m("manifold.wasm"):new URL("manifold.wasm",import.meta.url).href}function nt(x){if(x==j&&C)return new Uint8Array(C);if(w)return w(x);throw"both async and sync fetching of the wasm failed"}async function bt(x){if(!C)try{var _=await b(x);return new Uint8Array(_)}catch{}return nt(x)}async function Tt(x,_){try{var I=await bt(x),D=await WebAssembly.instantiate(I,_);return D}catch(X){R(`failed to asynchronously prepare wasm: ${X}`),B(X)}}async function St(x,_,I){if(!x&&!N(_)&&!a)try{var D=fetch(_,{credentials:"same-origin"}),X=await WebAssembly.instantiateStreaming(D,I);return X}catch(rt){R(`wasm streaming compile failed: ${rt}`),R("falling back to ArrayBuffer instantiation")}return Tt(_,I)}function Lt(){var x={a:th};return x}async function Wt(){function x(rt,st){return Gn=rt.exports,Gn=eh(Gn),Qc(Gn),K(),Gn}function _(rt){return x(rt.instance)}var I=Lt();if(e.instantiateWasm)return new Promise((rt,st)=>{e.instantiateWasm(I,(ot,ft)=>{rt(x(ot,ft))})});j??=q();var D=await St(C,j,I),X=_(D);return X}class Yt{name="ExitStatus";constructor(_){this.message=`Program terminated with exit(${_})`,this.status=_}}var Ct=x=>{for(;x.length>0;)x.shift()(e)},dt=[],ht=x=>dt.push(x),xt=[],Pt=x=>xt.push(x);function gt(x,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":return O[x>>>0];case"i8":return O[x>>>0];case"i16":return U[x>>>1>>>0];case"i32":return Z[x>>>2>>>0];case"i64":return Y[x>>>3>>>0];case"float":return Q[x>>>2>>>0];case"double":return it[x>>>3>>>0];case"*":return tt[x>>>2>>>0];default:B(`invalid type for getValue: ${_}`)}}var ut=!0;function pt(x,_,I="i8"){switch(I.endsWith("*")&&(I="*"),I){case"i1":O[x>>>0]=_;break;case"i8":O[x>>>0]=_;break;case"i16":U[x>>>1>>>0]=_;break;case"i32":Z[x>>>2>>>0]=_;break;case"i64":Y[x>>>3>>>0]=BigInt(_);break;case"float":Q[x>>>2>>>0]=_;break;case"double":it[x>>>3>>>0]=_;break;case"*":tt[x>>>2>>>0]=_;break;default:B(`invalid type for setValue: ${I}`)}}class Bt{constructor(_){this.excPtr=_,this.ptr=_-24}set_type(_){tt[this.ptr+4>>>2>>>0]=_}get_type(){return tt[this.ptr+4>>>2>>>0]}set_destructor(_){tt[this.ptr+8>>>2>>>0]=_}get_destructor(){return tt[this.ptr+8>>>2>>>0]}set_caught(_){_=_?1:0,O[this.ptr+12>>>0]=_}get_caught(){return O[this.ptr+12>>>0]!=0}set_rethrown(_){_=_?1:0,O[this.ptr+13>>>0]=_}get_rethrown(){return O[this.ptr+13>>>0]!=0}init(_,I){this.set_adjusted_ptr(0),this.set_type(_),this.set_destructor(I)}set_adjusted_ptr(_){tt[this.ptr+16>>>2>>>0]=_}get_adjusted_ptr(){return tt[this.ptr+16>>>2>>>0]}}var Jt=0,At=0;function ne(x,_,I){x>>>=0,_>>>=0,I>>>=0;var D=new Bt(x);throw D.init(_,I),Jt=x,At++,Jt}var ee=()=>B(""),Ut={},wt=x=>{for(;x.length;){var _=x.pop(),I=x.pop();I(_)}};function Ot(x){return this.fromWireType(tt[x>>>2>>>0])}var Nt={},kt={},Zt={},jt=class extends Error{constructor(_){super(_),this.name="InternalError"}},Ht=x=>{throw new jt(x)},$t=(x,_,I)=>{x.forEach(ot=>Zt[ot]=_);function D(ot){var ft=I(ot);ft.length!==x.length&&Ht("Mismatched type converter count");for(var yt=0;yt<x.length;++yt)Me(x[yt],ft[yt])}var X=new Array(_.length),rt=[],st=0;for(let[ot,ft]of _.entries())kt.hasOwnProperty(ft)?X[ot]=kt[ft]:(rt.push(ft),Nt.hasOwnProperty(ft)||(Nt[ft]=[]),Nt[ft].push(()=>{X[ot]=kt[ft],++st,st===rt.length&&D(X)}));rt.length===0&&D(X)},ce=function(x){x>>>=0;var _=Ut[x];delete Ut[x];var I=_.rawConstructor,D=_.rawDestructor,X=_.fields,rt=X.map(st=>st.getterReturnType).concat(X.map(st=>st.setterArgumentType));$t([x],rt,st=>{var ot={};for(var[ft,yt]of X.entries()){let Et=st[ft],Rt=yt.getter,Dt=yt.getterContext,Vt=st[ft+X.length],qt=yt.setter,te=yt.setterContext;ot[yt.fieldName]={read:re=>Et.fromWireType(Rt(Dt,re)),write:(re,V)=>{var $=[];qt(te,re,Vt.toWireType($,V)),wt($)},optional:Et.optional}}return[{name:_.name,fromWireType:Et=>{var Rt={};for(var Dt in ot)Rt[Dt]=ot[Dt].read(Et);return D(Et),Rt},toWireType:(Et,Rt)=>{for(var Dt in ot)if(!(Dt in Rt)&&!ot[Dt].optional)throw new TypeError(`Missing field: "${Dt}"`);var Vt=I();for(Dt in ot)ot[Dt].write(Vt,Rt[Dt]);return Et!==null&&Et.push(D,Vt),Vt},readValueFromPointer:Ot,destructorFunction:D}]})},Qt=x=>{x>>>=0;for(var _="";;){var I=L[x++>>>0];if(!I)return _;_+=String.fromCharCode(I)}},Ae=class extends Error{constructor(_){super(_),this.name="BindingError"}},Xt=x=>{throw new Ae(x)};function Ee(x,_,I={}){var D=_.name;if(x||Xt(`type "${D}" must have a positive integer typeid pointer`),kt.hasOwnProperty(x)){if(I.ignoreDuplicateRegistrations)return;Xt(`Cannot register type '${D}' twice`)}if(kt[x]=_,delete Zt[x],Nt.hasOwnProperty(x)){var X=Nt[x];delete Nt[x],X.forEach(rt=>rt())}}function Me(x,_,I={}){return Ee(x,_,I)}var Ue=(x,_,I)=>{switch(_){case 1:return I?D=>O[D>>>0]:D=>L[D>>>0];case 2:return I?D=>U[D>>>1>>>0]:D=>k[D>>>1>>>0];case 4:return I?D=>Z[D>>>2>>>0]:D=>tt[D>>>2>>>0];case 8:return I?D=>Y[D>>>3>>>0]:D=>et[D>>>3>>>0];default:throw new TypeError(`invalid integer width (${_}): ${x}`)}},Se=function(x,_,I,D,X){x>>>=0,_>>>=0,I>>>=0,_=Qt(_);let rt=D===0n,st=ot=>ot;if(rt){let ot=I*8;st=ft=>BigInt.asUintN(ot,ft),X=st(X)}Me(x,{name:_,fromWireType:st,toWireType:(ot,ft)=>(typeof ft=="number"&&(ft=BigInt(ft)),ft),readValueFromPointer:Ue(_,I,!rt),destructorFunction:null})};function ze(x,_,I,D){x>>>=0,_>>>=0,_=Qt(_),Me(x,{name:_,fromWireType:function(X){return!!X},toWireType:function(X,rt){return rt?I:D},readValueFromPointer:function(X){return this.fromWireType(L[X>>>0])},destructorFunction:null})}var Un=x=>({count:x.count,deleteScheduled:x.deleteScheduled,preservePointerOnDelete:x.preservePointerOnDelete,ptr:x.ptr,ptrType:x.ptrType,smartPtr:x.smartPtr,smartPtrType:x.smartPtrType}),bn=x=>{function _(I){return I.$$.ptrType.registeredClass.name}Xt(_(x)+" instance already deleted")},Bn=!1,$e=x=>{},de=x=>{x.smartPtr?x.smartPtrType.rawDestructor(x.smartPtr):x.ptrType.registeredClass.rawDestructor(x.ptr)},Be=x=>{x.count.value-=1;var _=x.count.value===0;_&&de(x)},an=x=>globalThis.FinalizationRegistry?(Bn=new FinalizationRegistry(_=>{Be(_.$$)}),an=_=>{var I=_.$$,D=!!I.smartPtr;if(D){var X={$$:I};Bn.register(_,X,_)}return _},$e=_=>Bn.unregister(_),an(x)):(an=_=>_,x),Qn=[],ls=()=>{for(;Qn.length;){var x=Qn.pop();x.$$.deleteScheduled=!1,x.delete()}},lr,cs=()=>{let x=ti.prototype;Object.assign(x,{isAliasOf(I){if(!(this instanceof ti)||!(I instanceof ti))return!1;var D=this.$$.ptrType.registeredClass,X=this.$$.ptr;I.$$=I.$$;for(var rt=I.$$.ptrType.registeredClass,st=I.$$.ptr;D.baseClass;)X=D.upcast(X),D=D.baseClass;for(;rt.baseClass;)st=rt.upcast(st),rt=rt.baseClass;return D===rt&&X===st},clone(){if(this.$$.ptr||bn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var I=an(Object.create(Object.getPrototypeOf(this),{$$:{value:Un(this.$$)}}));return I.$$.count.value+=1,I.$$.deleteScheduled=!1,I},delete(){this.$$.ptr||bn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Xt("Object already scheduled for deletion"),$e(this),Be(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||bn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Xt("Object already scheduled for deletion"),Qn.push(this),Qn.length===1&&lr&&lr(ls),this.$$.deleteScheduled=!0,this}});let _=Symbol.dispose;_&&(x[_]=x.delete)};function ti(){}var ei=(x,_)=>Object.defineProperty(_,"name",{value:x}),cr={},hr=(x,_,I)=>{if(x[_].overloadTable===void 0){var D=x[_];x[_]=function(...X){return x[_].overloadTable.hasOwnProperty(X.length)||Xt(`Function '${I}' called with an invalid number of arguments (${X.length}) - expects one of (${x[_].overloadTable})!`),x[_].overloadTable[X.length].apply(this,X)},x[_].overloadTable=[],x[_].overloadTable[D.argCount]=D}},kn=(x,_,I)=>{e.hasOwnProperty(x)?((I===void 0||e[x].overloadTable!==void 0&&e[x].overloadTable[I]!==void 0)&&Xt(`Cannot register public name '${x}' twice`),hr(e,x,x),e[x].overloadTable.hasOwnProperty(I)&&Xt(`Cannot register multiple overloads of a function with the same number of arguments (${I})!`),e[x].overloadTable[I]=_):(e[x]=_,e[x].argCount=I)},hs=48,us=57,fs=x=>{x=x.replace(/[^a-zA-Z0-9_]/g,"$");var _=x.charCodeAt(0);return _>=hs&&_<=us?`_${x}`:x};function ds(x,_,I,D,X,rt,st,ot){this.name=x,this.constructor=_,this.instancePrototype=I,this.rawDestructor=D,this.baseClass=X,this.getActualType=rt,this.upcast=st,this.downcast=ot,this.pureVirtualFunctions=[]}var hn=(x,_,I)=>{for(;_!==I;)_.upcast||Xt(`Expected null or instance of ${I.name}, got an instance of ${_.name}`),x=_.upcast(x),_=_.baseClass;return x},ni=x=>{if(x===null)return"null";var _=typeof x;return _==="object"||_==="array"||_==="function"?x.toString():""+x};function ps(x,_){if(_===null)return this.isReference&&Xt(`null is not a valid ${this.name}`),0;_.$$||Xt(`Cannot pass "${ni(_)}" as a ${this.name}`),_.$$.ptr||Xt(`Cannot pass deleted object as a pointer of type ${this.name}`);var I=_.$$.ptrType.registeredClass,D=hn(_.$$.ptr,I,this.registeredClass);return D}function ms(x,_){var I;if(_===null)return this.isReference&&Xt(`null is not a valid ${this.name}`),this.isSmartPointer?(I=this.rawConstructor(),x!==null&&x.push(this.rawDestructor,I),I):0;(!_||!_.$$)&&Xt(`Cannot pass "${ni(_)}" as a ${this.name}`),_.$$.ptr||Xt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&_.$$.ptrType.isConst&&Xt(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);var D=_.$$.ptrType.registeredClass;if(I=hn(_.$$.ptr,D,this.registeredClass),this.isSmartPointer)switch(_.$$.smartPtr===void 0&&Xt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:_.$$.smartPtrType===this?I=_.$$.smartPtr:Xt(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:I=_.$$.smartPtr;break;case 2:if(_.$$.smartPtrType===this)I=_.$$.smartPtr;else{var X=_.clone();I=this.rawShare(I,T.toHandle(()=>X.delete())),x!==null&&x.push(this.rawDestructor,I)}break;default:Xt("Unsupported sharing policy")}return I}function gs(x,_){if(_===null)return this.isReference&&Xt(`null is not a valid ${this.name}`),0;_.$$||Xt(`Cannot pass "${ni(_)}" as a ${this.name}`),_.$$.ptr||Xt(`Cannot pass deleted object as a pointer of type ${this.name}`),_.$$.ptrType.isConst&&Xt(`Cannot convert argument of type ${_.$$.ptrType.name} to parameter type ${this.name}`);var I=_.$$.ptrType.registeredClass,D=hn(_.$$.ptr,I,this.registeredClass);return D}var ur=(x,_,I)=>{if(_===I)return x;if(I.baseClass===void 0)return null;var D=ur(x,_,I.baseClass);return D===null?null:I.downcast(D)},vs={},Mn=(x,_)=>{for(_===void 0&&Xt("ptr should not be undefined");x.baseClass;)_=x.upcast(_),x=x.baseClass;return _},ys=(x,_)=>(_=Mn(x,_),vs[_]),ii=(x,_)=>{(!_.ptrType||!_.ptr)&&Ht("makeClassHandle requires ptr and ptrType");var I=!!_.smartPtrType,D=!!_.smartPtr;return I!==D&&Ht("Both smartPtrType and smartPtr must be specified"),_.count={value:1},an(Object.create(x,{$$:{value:_,writable:!0}}))};function xs(x){var _=this.getPointee(x);if(!_)return this.destructor(x),null;var I=ys(this.registeredClass,_);if(I!==void 0){if(I.$$.count.value===0)return I.$$.ptr=_,I.$$.smartPtr=x,I.clone();var D=I.clone();return this.destructor(x),D}function X(){return this.isSmartPointer?ii(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:_,smartPtrType:this,smartPtr:x}):ii(this.registeredClass.instancePrototype,{ptrType:this,ptr:x})}var rt=this.registeredClass.getActualType(_),st=cr[rt];if(!st)return X.call(this);var ot;this.isConst?ot=st.constPointerType:ot=st.pointerType;var ft=ur(_,this.registeredClass,ot.registeredClass);return ft===null?X.call(this):this.isSmartPointer?ii(ot.registeredClass.instancePrototype,{ptrType:ot,ptr:ft,smartPtrType:this,smartPtr:x}):ii(ot.registeredClass.instancePrototype,{ptrType:ot,ptr:ft})}var _s=()=>{Object.assign(ri.prototype,{getPointee(x){return this.rawGetPointee&&(x=this.rawGetPointee(x)),x},destructor(x){this.rawDestructor?.(x)},readValueFromPointer:Ot,fromWireType:xs})};function ri(x,_,I,D,X,rt,st,ot,ft,yt,Et){this.name=x,this.registeredClass=_,this.isReference=I,this.isConst=D,this.isSmartPointer=X,this.pointeeType=rt,this.sharingPolicy=st,this.rawGetPointee=ot,this.rawConstructor=ft,this.rawShare=yt,this.rawDestructor=Et,!X&&_.baseClass===void 0?D?(this.toWireType=ps,this.destructorFunction=null):(this.toWireType=gs,this.destructorFunction=null):this.toWireType=ms}var fr=(x,_,I)=>{e.hasOwnProperty(x)||Ht("Replacing nonexistent public symbol"),e[x].overloadTable!==void 0&&I!==void 0?e[x].overloadTable[I]=_:(e[x]=_,e[x].argCount=I)},si=x=>Di.get(x),bs=(x,_,I=[],D=!1)=>{var X=si(_),rt=X(...I);function st(ot){return x[0]=="p"?ot>>>0:ot}return st(rt)},Ms=(x,_,I=!1)=>(...D)=>bs(x,_,D,I),ye=(x,_,I=!1)=>{x=Qt(x);function D(){if(x.includes("p"))return Ms(x,_,I);var rt=si(_);return rt}var X=D();return typeof X!="function"&&Xt(`unknown function pointer with signature ${x}: ${_}`),X};class Ss extends Error{}var dr=x=>{var _=ca(x),I=Qt(_);return un(_),I},oi=(x,_)=>{var I=[],D={};function X(rt){if(!D[rt]&&!kt[rt]){if(Zt[rt]){Zt[rt].forEach(X);return}I.push(rt),D[rt]=!0}}throw _.forEach(X),new Ss(`${x}: `+I.map(dr).join([", "]))};function oe(x,_,I,D,X,rt,st,ot,ft,yt,Et,Rt,Dt){x>>>=0,_>>>=0,I>>>=0,D>>>=0,X>>>=0,rt>>>=0,st>>>=0,ot>>>=0,ft>>>=0,yt>>>=0,Et>>>=0,Rt>>>=0,Dt>>>=0,Et=Qt(Et),rt=ye(X,rt),ot&&=ye(st,ot),yt&&=ye(ft,yt),Dt=ye(Rt,Dt);var Vt=fs(Et);kn(Vt,function(){oi(`Cannot construct ${Et} due to unbound types`,[D])}),$t([x,_,I],D?[D]:[],qt=>{qt=qt[0];var te,re;D?(te=qt.registeredClass,re=te.instancePrototype):re=ti.prototype;var V=ei(Et,function(...ue){if(Object.getPrototypeOf(this)!==$)throw new Ae(`Use 'new' to construct ${Et}`);if(ct.constructor_body===void 0)throw new Ae(`${Et} has no accessible constructor`);var xe=ct.constructor_body[ue.length];if(xe===void 0)throw new Ae(`Tried to invoke ctor of ${Et} with invalid number of parameters (${ue.length}) - expected (${Object.keys(ct.constructor_body).toString()}) parameters instead!`);return xe.apply(this,ue)}),$=Object.create(re,{constructor:{value:V}});V.prototype=$;var ct=new ds(Et,V,$,Dt,te,rt,ot,yt);ct.baseClass&&(ct.baseClass.__derivedClasses??=[],ct.baseClass.__derivedClasses.push(ct));var vt=new ri(Et,ct,!0,!1,!1),zt=new ri(Et+"*",ct,!1,!1,!1),ie=new ri(Et+" const*",ct,!1,!0,!1);return cr[x]={pointerType:zt,constPointerType:ie},fr(Vt,V),[vt,zt,ie]})}var ai=(x,_)=>{for(var I=[],D=0;D<x;D++)I.push(tt[_+D*4>>>2>>>0]);return I};function ws(x){for(var _=1;_<x.length;++_)if(x[_]!==null&&x[_].destructorFunction===void 0)return!0;return!1}var Ts={ftf:function(_,I,D,X,rt,st,ot){return function(){var ft=D(X),yt=st(ft);return yt}},tffn:function(_,I,D,X,rt,st,ot){return function(){var ft=ot(null,this);D(X,ft)}},ttfn:function(_,I,D,X,rt,st,ot){return function(){var ft=ot(null,this),yt=D(X,ft),Et=st(yt);return Et}},ttfnn:function(_,I,D,X,rt,st,ot,ft){return function(yt){var Et=ot(null,this),Rt=ft(null,yt),Dt=D(X,Et,Rt),Vt=st(Dt);return Vt}},ttfnnn:function(_,I,D,X,rt,st,ot,ft,yt){return function(Et,Rt){var Dt=ot(null,this),Vt=ft(null,Et),qt=yt(null,Rt),te=D(X,Dt,Vt,qt),re=st(te);return re}},ttfnntnnn:function(_,I,D,X,rt,st,ot,ft,yt,Et,Rt,Dt,Vt){return function(qt,te,re,V,$){var ct=ot(null,this),vt=ft(null,qt),zt=yt(null,te),ie=Et(null,re),ue=Rt(null,V),xe=Dt(null,$),ve=D(X,ct,vt,zt,ie,ue,xe);Vt(zt);var ln=st(ve);return ln}},tffnt:function(_,I,D,X,rt,st,ot,ft,yt){return function(Et){var Rt=ot(null,this),Dt=ft(null,Et);D(X,Rt,Dt),yt(Dt)}},tffnnt:function(_,I,D,X,rt,st,ot,ft,yt,Et){return function(Rt,Dt){var Vt=ot(null,this),qt=ft(null,Rt),te=yt(null,Dt);D(X,Vt,qt,te),Et(te)}},ttfnnt:function(_,I,D,X,rt,st,ot,ft,yt,Et){return function(Rt,Dt){var Vt=ot(null,this),qt=ft(null,Rt),te=yt(null,Dt),re=D(X,Vt,qt,te);Et(te);var V=st(re);return V}},tffnn:function(_,I,D,X,rt,st,ot,ft){return function(yt){var Et=ot(null,this),Rt=ft(null,yt);D(X,Et,Rt)}},tffnnn:function(_,I,D,X,rt,st,ot,ft,yt){return function(Et,Rt){var Dt=ot(null,this),Vt=ft(null,Et),qt=yt(null,Rt);D(X,Dt,Vt,qt)}},ftfnn:function(_,I,D,X,rt,st,ot,ft,yt){return function(Et,Rt){var Dt=ft(null,Et),Vt=yt(null,Rt),qt=D(X,Dt,Vt),te=st(qt);return te}},ttfnt:function(_,I,D,X,rt,st,ot,ft,yt){return function(Et){var Rt=ot(null,this),Dt=ft(null,Et),Vt=D(X,Rt,Dt);yt(Dt);var qt=st(Vt);return qt}},ttfnnnnn:function(_,I,D,X,rt,st,ot,ft,yt,Et,Rt){return function(Dt,Vt,qt,te){var re=ot(null,this),V=ft(null,Dt),$=yt(null,Vt),ct=Et(null,qt),vt=Rt(null,te),zt=D(X,re,V,$,ct,vt),ie=st(zt);return ie}},ftftn:function(_,I,D,X,rt,st,ot,ft,yt,Et){return function(Rt,Dt){var Vt=ft(null,Rt),qt=yt(null,Dt),te=D(X,Vt,qt);Et(Vt);var re=st(te);return re}},ftfn:function(_,I,D,X,rt,st,ot,ft){return function(yt){var Et=ft(null,yt),Rt=D(X,Et),Dt=st(Rt);return Dt}},fffnn:function(_,I,D,X,rt,st,ot,ft,yt){return function(Et,Rt){var Dt=ft(null,Et),Vt=yt(null,Rt);D(X,Dt,Vt)}},ttfntn:function(_,I,D,X,rt,st,ot,ft,yt,Et){return function(Rt,Dt){var Vt=ot(null,this),qt=ft(null,Rt),te=yt(null,Dt),re=D(X,Vt,qt,te);Et(qt);var V=st(re);return V}},ttfnnnn:function(_,I,D,X,rt,st,ot,ft,yt,Et){return function(Rt,Dt,Vt){var qt=ot(null,this),te=ft(null,Rt),re=yt(null,Dt),V=Et(null,Vt),$=D(X,qt,te,re,V),ct=st($);return ct}},ttfntt:function(_,I,D,X,rt,st,ot,ft,yt,Et,Rt){return function(Dt,Vt){var qt=ot(null,this),te=ft(null,Dt),re=yt(null,Vt),V=D(X,qt,te,re);Et(te),Rt(re);var $=st(V);return $}},ftfnnnnn:function(_,I,D,X,rt,st,ot,ft,yt,Et,Rt,Dt){return function(Vt,qt,te,re,V){var $=ft(null,Vt),ct=yt(null,qt),vt=Et(null,te),zt=Rt(null,re),ie=Dt(null,V),ue=D(X,$,ct,vt,zt,ie),xe=st(ue);return xe}},ftfnnnnt:function(_,I,D,X,rt,st,ot,ft,yt,Et,Rt,Dt,Vt){return function(qt,te,re,V,$){var ct=ft(null,qt),vt=yt(null,te),zt=Et(null,re),ie=Rt(null,V),ue=Dt(null,$),xe=D(X,ct,vt,zt,ie,ue);Vt(ue);var ve=st(xe);return ve}},ftfnnn:function(_,I,D,X,rt,st,ot,ft,yt,Et){return function(Rt,Dt,Vt){var qt=ft(null,Rt),te=yt(null,Dt),re=Et(null,Vt),V=D(X,qt,te,re),$=st(V);return $}},ftfntnnn:function(_,I,D,X,rt,st,ot,ft,yt,Et,Rt,Dt,Vt){return function(qt,te,re,V,$){var ct=ft(null,qt),vt=yt(null,te),zt=Et(null,re),ie=Rt(null,V),ue=Dt(null,$),xe=D(X,ct,vt,zt,ie,ue);Vt(vt);var ve=st(xe);return ve}},fffn:function(_,I,D,X,rt,st,ot,ft){return function(yt){var Et=ft(null,yt);D(X,Et)}},fff:function(_,I,D,X,rt,st,ot){return function(){D(X)}}};function Es(x,_,I,D){let X=[_?"t":"f",I?"t":"f",D?"t":"f"];for(let rt=_?1:2;rt<x.length;++rt){let st=x[rt],ot="";st.destructorFunction===void 0?ot="u":st.destructorFunction===null?ot="n":ot="t",X.push(ot)}return X.join("")}function Li(x,_,I,D,X,rt){var st=_.length;st<2&&Xt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ot=_[1]!==null&&I!==null,ft=ws(_),yt=!_[0].isVoid,Et=_[0],Rt=_[1],Dt=[x,Xt,D,X,wt,Et.fromWireType.bind(Et),Rt?.toWireType.bind(Rt)],Vt=2;Vt<st;++Vt){var qt=_[Vt];Dt.push(qt.toWireType.bind(qt))}if(!ft)for(var Vt=ot?1:2;Vt<_.length;++Vt)_[Vt].destructorFunction!==null&&Dt.push(_[Vt].destructorFunction);var te=Es(_,ot,yt,rt),re=Ts[te](...Dt);return ei(x,re)}var i=function(x,_,I,D,X,rt){x>>>=0,I>>>=0,D>>>=0,X>>>=0,rt>>>=0;var st=ai(_,I);X=ye(D,X),$t([],[x],ot=>{ot=ot[0];var ft=`constructor ${ot.name}`;if(ot.registeredClass.constructor_body===void 0&&(ot.registeredClass.constructor_body=[]),ot.registeredClass.constructor_body[_-1]!==void 0)throw new Ae(`Cannot register multiple constructors with identical number of parameters (${_-1}) for class '${ot.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return ot.registeredClass.constructor_body[_-1]=()=>{oi(`Cannot construct ${ot.name} due to unbound types`,st)},$t([],st,yt=>(yt.splice(1,0,null),ot.registeredClass.constructor_body[_-1]=Li(ft,yt,null,X,rt),[])),[]})},o=x=>{x=x.trim();let _=x.indexOf("(");return _===-1?x:x.slice(0,_)},l=function(x,_,I,D,X,rt,st,ot,ft,yt){x>>>=0,_>>>=0,D>>>=0,X>>>=0,rt>>>=0,st>>>=0;var Et=ai(I,D);_=Qt(_),_=o(_),rt=ye(X,rt,ft),$t([],[x],Rt=>{Rt=Rt[0];var Dt=`${Rt.name}.${_}`;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),ot&&Rt.registeredClass.pureVirtualFunctions.push(_);function Vt(){oi(`Cannot call ${Dt} due to unbound types`,Et)}var qt=Rt.registeredClass.instancePrototype,te=qt[_];return te===void 0||te.overloadTable===void 0&&te.className!==Rt.name&&te.argCount===I-2?(Vt.argCount=I-2,Vt.className=Rt.name,qt[_]=Vt):(hr(qt,_,Dt),qt[_].overloadTable[I-2]=Vt),$t([],Et,re=>{var V=Li(Dt,re,Rt,rt,st,ft);return qt[_].overloadTable===void 0?(V.argCount=I-2,qt[_]=V):qt[_].overloadTable[I-2]=V,[]}),[]})},f=[],g=[0,1,,1,null,1,!0,1,!1,1];function M(x){x>>>=0,x>9&&--g[x+1]===0&&(g[x]=void 0,f.push(x))}var T={toValue:x=>(x||Xt(`Cannot use deleted val. handle = ${x}`),g[x]),toHandle:x=>{switch(x){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let _=f.pop()||g.length;return g[_]=x,g[_+1]=1,_}}}},W={name:"emscripten::val",fromWireType:x=>{var _=T.toValue(x);return M(x),_},toWireType:(x,_)=>T.toHandle(_),readValueFromPointer:Ot,destructorFunction:null};function G(x){return x>>>=0,Me(x,W)}var at=(x,_,I)=>{switch(_){case 1:return I?function(D){return this.fromWireType(O[D>>>0])}:function(D){return this.fromWireType(L[D>>>0])};case 2:return I?function(D){return this.fromWireType(U[D>>>1>>>0])}:function(D){return this.fromWireType(k[D>>>1>>>0])};case 4:return I?function(D){return this.fromWireType(Z[D>>>2>>>0])}:function(D){return this.fromWireType(tt[D>>>2>>>0])};default:throw new TypeError(`invalid integer width (${_}): ${x}`)}};function _t(x){return x===0?"object":x===1?"number":"string"}function mt(x,_,I,D,X){x>>>=0,_>>>=0,I>>>=0,_=Qt(_);let rt=_t(X);switch(rt){case"object":{let yt=function(){};yt.values={},Me(x,{name:_,constructor:yt,valueType:rt,fromWireType:function(Et){return this.constructor.values[Et]},toWireType:(Et,Rt)=>Rt.value,readValueFromPointer:at(_,I,D),destructorFunction:null}),kn(_,yt);break}case"number":{var st={};Me(x,{name:_,keysMap:st,valueType:rt,fromWireType:yt=>yt,toWireType:(yt,Et)=>Et,readValueFromPointer:at(_,I,D),destructorFunction:null}),kn(_,st),delete e[_].argCount;break}case"string":{var ot={},ft={},st={};Me(x,{name:_,valuesMap:ot,reverseMap:ft,keysMap:st,valueType:rt,fromWireType:function(Et){return this.reverseMap[Et]},toWireType:function(Et,Rt){return this.valuesMap[Rt]},readValueFromPointer:at(_,I,D),destructorFunction:null}),kn(_,st),delete e[_].argCount;break}}}var It=(x,_)=>{var I=kt[x];return I===void 0&&Xt(`${_} has unknown type ${dr(x)}`),I};function Kt(x,_,I){x>>>=0,_>>>=0;var D=It(x,"enum");switch(_=Qt(_),D.valueType){case"object":{var X=D.constructor,rt=Object.create(D.constructor.prototype,{value:{value:I},constructor:{value:ei(`${D.name}_${_}`,function(){})}});X.values[I]=rt,X[_]=rt;break}case"number":{D.keysMap[_]=I;break}case"string":{D.valuesMap[_]=I,D.reverseMap[I]=_,D.keysMap[_]=_;break}}}var ae=(x,_)=>{switch(_){case 4:return function(I){return this.fromWireType(Q[I>>>2>>>0])};case 8:return function(I){return this.fromWireType(it[I>>>3>>>0])};default:throw new TypeError(`invalid float width (${_}): ${x}`)}},le=function(x,_,I){x>>>=0,_>>>=0,I>>>=0,_=Qt(_),Me(x,{name:_,fromWireType:D=>D,toWireType:(D,X)=>X,readValueFromPointer:ae(_,I),destructorFunction:null})};function ge(x,_,I,D,X,rt,st,ot){x>>>=0,I>>>=0,D>>>=0,X>>>=0,rt>>>=0;var ft=ai(_,I);x=Qt(x),x=o(x),X=ye(D,X,st),kn(x,function(){oi(`Cannot call ${x} due to unbound types`,ft)},_-1),$t([],ft,yt=>{var Et=[yt[0],null].concat(yt.slice(1));return fr(x,Li(x,Et,null,X,rt,st),_-1),[]})}var Ne=function(x,_,I,D,X){x>>>=0,_>>>=0,I>>>=0,_=Qt(_);let rt=D===0,st=ft=>ft;if(rt){var ot=32-8*I;st=ft=>ft<<ot>>>ot,X=st(X)}Me(x,{name:_,fromWireType:st,toWireType:(ft,yt)=>yt,readValueFromPointer:Ue(_,I,D!==0),destructorFunction:null})},qe=(x,_,I)=>{let D=(X,rt)=>{let st=0;return{next(){if(st>=X)return{done:!0};let ot=st;return st++,{value:rt(ot),done:!1}},[Symbol.iterator](){return this}}};x[Symbol.iterator]||(x[Symbol.iterator]=function(){let X=this[_]();return D(X,rt=>this[I](rt))})},Sn=function(x,_,I,D){x>>>=0,_>>>=0,I>>>=0,D>>>=0,I=Qt(I),D=Qt(D),$t([],[x,_],X=>{let rt=X[0];return qe(rt.registeredClass.instancePrototype,I,D),[]})};function Ps(x,_,I){x>>>=0,I>>>=0;var D=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],X=D[_];function rt(st){var ot=tt[st>>>2>>>0],ft=tt[st+4>>>2>>>0];return new X(O.buffer,ft,ot)}I=Qt(I),Me(x,{name:I,fromWireType:rt,readValueFromPointer:rt},{ignoreDuplicateRegistrations:!0})}var As=Object.assign({optional:!0},W);function wn(x,_){x>>>=0,_>>>=0,Me(x,As)}var fc=(x,_,I,D)=>{if(I>>>=0,!(D>0))return 0;for(var X=I,rt=I+D-1,st=0;st<x.length;++st){var ot=x.codePointAt(st);if(ot<=127){if(I>=rt)break;_[I++>>>0]=ot}else if(ot<=2047){if(I+1>=rt)break;_[I++>>>0]=192|ot>>6,_[I++>>>0]=128|ot&63}else if(ot<=65535){if(I+2>=rt)break;_[I++>>>0]=224|ot>>12,_[I++>>>0]=128|ot>>6&63,_[I++>>>0]=128|ot&63}else{if(I+3>=rt)break;_[I++>>>0]=240|ot>>18,_[I++>>>0]=128|ot>>12&63,_[I++>>>0]=128|ot>>6&63,_[I++>>>0]=128|ot&63,st++}}return _[I>>>0]=0,I-X},dc=(x,_,I)=>fc(x,L,_,I),pc=x=>{for(var _=0,I=0;I<x.length;++I){var D=x.charCodeAt(I);D<=127?_++:D<=2047?_+=2:D>=55296&&D<=57343?(_+=4,++I):_+=3}return _},ia=globalThis.TextDecoder&&new TextDecoder,ra=(x,_,I,D)=>{var X=_+I;if(D)return X;for(;x[_]&&!(_>=X);)++_;return _},mc=(x,_=0,I,D)=>{_>>>=0;var X=ra(x,_,I,D);if(X-_>16&&x.buffer&&ia)return ia.decode(x.subarray(_,X));for(var rt="";_<X;){var st=x[_++];if(!(st&128)){rt+=String.fromCharCode(st);continue}var ot=x[_++]&63;if((st&224)==192){rt+=String.fromCharCode((st&31)<<6|ot);continue}var ft=x[_++]&63;if((st&240)==224?st=(st&15)<<12|ot<<6|ft:st=(st&7)<<18|ot<<12|ft<<6|x[_++]&63,st<65536)rt+=String.fromCharCode(st);else{var yt=st-65536;rt+=String.fromCharCode(55296|yt>>10,56320|yt&1023)}}return rt},gc=(x,_,I)=>(x>>>=0,x?mc(L,x,_,I):"");function vc(x,_){x>>>=0,_>>>=0,_=Qt(_);var I=!0;Me(x,{name:_,fromWireType(D){var X=tt[D>>>2>>>0],rt=D+4,st;if(I)st=gc(rt,X,!0);else{st="";for(var ot=0;ot<X;++ot)st+=String.fromCharCode(L[rt+ot>>>0])}return un(D),st},toWireType(D,X){X instanceof ArrayBuffer&&(X=new Uint8Array(X));var rt,st=typeof X=="string";st||ArrayBuffer.isView(X)&&X.BYTES_PER_ELEMENT==1||Xt("Cannot pass non-string to std::string"),I&&st?rt=pc(X):rt=X.length;var ot=Ls(4+rt+1),ft=ot+4;if(tt[ot>>>2>>>0]=rt,st)if(I)dc(X,ft,rt+1);else for(var yt=0;yt<rt;++yt){var Et=X.charCodeAt(yt);Et>255&&(un(ot),Xt("String has UTF-16 code units that do not fit in 8 bits")),L[ft+yt>>>0]=Et}else L.set(X,ft>>>0);return D!==null&&D.push(un,ot),ot},readValueFromPointer:Ot,destructorFunction(D){un(D)}})}var sa=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,yc=(x,_,I)=>{var D=x>>>1,X=ra(k,D,_/2,I);if(X-D>16&&sa)return sa.decode(k.subarray(D>>>0,X>>>0));for(var rt="",st=D;st<X;++st){var ot=k[st>>>0];rt+=String.fromCharCode(ot)}return rt},xc=(x,_,I)=>{if(I??=2147483647,I<2)return 0;I-=2;for(var D=_,X=I<x.length*2?I/2:x.length,rt=0;rt<X;++rt){var st=x.charCodeAt(rt);U[_>>>1>>>0]=st,_+=2}return U[_>>>1>>>0]=0,_-D},_c=x=>x.length*2,bc=(x,_,I)=>{for(var D="",X=x>>>2,rt=0;!(rt>=_/4);rt++){var st=tt[X+rt>>>0];if(!st&&!I)break;D+=String.fromCodePoint(st)}return D},Mc=(x,_,I)=>{if(_>>>=0,I??=2147483647,I<4)return 0;for(var D=_,X=D+I-4,rt=0;rt<x.length;++rt){var st=x.codePointAt(rt);if(st>65535&&rt++,Z[_>>>2>>>0]=st,_+=4,_+4>X)break}return Z[_>>>2>>>0]=0,_-D},Sc=x=>{for(var _=0,I=0;I<x.length;++I){var D=x.codePointAt(I);D>65535&&I++,_+=4}return _};function wc(x,_,I){x>>>=0,_>>>=0,I>>>=0,I=Qt(I);var D,X,rt;_===2?(D=yc,X=xc,rt=_c):(D=bc,X=Mc,rt=Sc),Me(x,{name:I,fromWireType:st=>{var ot=tt[st>>>2>>>0],ft=D(st+4,ot*_,!0);return un(st),ft},toWireType:(st,ot)=>{typeof ot!="string"&&Xt(`Cannot pass non-string to C++ string type ${I}`);var ft=rt(ot),yt=Ls(4+ft+_);return tt[yt>>>2>>>0]=ft/_,X(ot,yt+4,ft+_),st!==null&&st.push(un,yt),yt},readValueFromPointer:Ot,destructorFunction(st){un(st)}})}function Tc(x,_,I,D,X,rt){x>>>=0,_>>>=0,I>>>=0,D>>>=0,X>>>=0,rt>>>=0,Ut[x]={name:Qt(_),rawConstructor:ye(I,D),rawDestructor:ye(X,rt),fields:[]}}function Ec(x,_,I,D,X,rt,st,ot,ft,yt){x>>>=0,_>>>=0,I>>>=0,D>>>=0,X>>>=0,rt>>>=0,st>>>=0,ot>>>=0,ft>>>=0,yt>>>=0,Ut[x].fields.push({fieldName:Qt(_),getterReturnType:I,getter:ye(D,X),getterContext:rt,setterArgumentType:st,setter:ye(ot,ft),setterContext:yt})}var Pc=function(x,_){x>>>=0,_>>>=0,_=Qt(_),Me(x,{isVoid:!0,name:_,fromWireType:()=>{},toWireType:(I,D)=>{}})};function Ac(x,_){x>>>=0,_>>>=0,x=T.toValue(x),_=T.toValue(_),x.set(_)}var Cs=[],Cc=x=>{var _=Cs.length;return Cs.push(x),_},Ic=(x,_)=>{for(var I=new Array(x),D=0;D<x;++D)I[D]=It(tt[_+D*4>>>2>>>0],`parameter ${D}`);return I},Rc=(x,_,I)=>{var D=[],X=x(D,I);return D.length&&(tt[_>>>2>>>0]=T.toHandle(D)),X},Lc={},oa=x=>{var _=Lc[x];return _===void 0?Qt(x):_},Dc=function(x,_,I){_>>>=0;var D=8,[X,...rt]=Ic(x,_),st=X.toWireType.bind(X),ot=rt.map(Rt=>Rt.readValueFromPointer.bind(Rt));x--;var ft=new Array(x),yt=(Rt,Dt,Vt,qt)=>{for(var te=0,re=0;re<x;++re)ft[re]=ot[re](qt+te),te+=D;var V;switch(I){case 0:V=T.toValue(Rt).apply(null,ft);break;case 2:V=Reflect.construct(T.toValue(Rt),ft);break;case 3:V=ft[0];break;case 1:V=T.toValue(Rt)[oa(Dt)](...ft);break}return Rc(st,Vt,V)},Et=`methodCaller<(${rt.map(Rt=>Rt.name)}) => ${X.name}>`;return Cc(ei(Et,yt))};function Nc(x,_){return x>>>=0,_>>>=0,x=T.toValue(x),_=T.toValue(_),x==_}function Fc(x,_){return x>>>=0,_>>>=0,x=T.toValue(x),_=T.toValue(_),T.toHandle(x[_])}function Oc(x){x>>>=0,x>9&&(g[x+1]+=1)}function Uc(x,_,I,D,X){return x>>>=0,_>>>=0,I>>>=0,D>>>=0,X>>>=0,Cs[x](_,I,D,X)}function Bc(x){return x>>>=0,T.toHandle(oa(x))}function kc(){return T.toHandle({})}function zc(x){x>>>=0;var _=T.toValue(x);wt(_),M(x)}function Vc(x,_,I){x>>>=0,_>>>=0,I>>>=0,x=T.toValue(x),_=T.toValue(_),I=T.toValue(I),x[_]=I}var Wc=()=>4294901760,Gc=(x,_)=>Math.ceil(x/_)*_,Hc=x=>{var _=pr.buffer.byteLength,I=(x-_+65535)/65536|0;try{return pr.grow(I),K(),1}catch{}};function Xc(x){x>>>=0;var _=L.length,I=Wc();if(x>I)return!1;for(var D=1;D<=4;D*=2){var X=_*(1+.2/D);X=Math.min(X,x+100663296);var rt=Math.min(I,Gc(Math.max(x,X),65536)),st=Hc(rt);if(st)return!0}return!1}var Yc=(x,_)=>{if(zn)for(var I=x;I<x+_;I++){var D=si(I);D&&zn.set(D,I)}},zn,qc=x=>(zn||(zn=new WeakMap,Yc(0,Di.length)),zn.get(x)||0),Is=[],Zc=()=>Is.length?Is.pop():Di.grow(1),Rs=(x,_)=>Di.set(x,_),aa=x=>{let _=x.length;return[_%128|128,_>>7,...x]},Jc={i:127,p:127,j:126,f:125,d:124,e:111},la=x=>aa(Array.from(x,_=>{var I=Jc[_];return I})),jc=(x,_)=>{var I=Uint8Array.of(0,97,115,109,1,0,0,0,1,...aa([1,96,...la(_.slice(1)),...la(_[0]==="v"?"":_[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),D=new WebAssembly.Module(I),X=new WebAssembly.Instance(D,{e:{f:x}}),rt=X.exports.f;return rt},Vn=(x,_)=>{var I=qc(x);if(I)return I;var D=Zc();try{Rs(D,x)}catch(rt){if(!(rt instanceof TypeError))throw rt;var X=jc(x,_);Rs(D,X)}return zn.set(x,D),D},Wn=x=>{zn.delete(si(x)),Rs(x,null),Is.push(x)};if(cs(),_s(),e.noExitRuntime&&(ut=e.noExitRuntime),e.print&&(P=e.print),e.printErr&&(R=e.printErr),e.wasmBinary&&(C=e.wasmBinary),e.arguments&&(u=e.arguments),e.thisProgram&&(d=e.thisProgram),e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.shift()();e.addFunction=Vn,e.removeFunction=Wn;var ca,Ls,un,Kc,$c,pr,Di;function Qc(x){ca=x.K,Ls=x.M,un=x.N,Kc=pr=x.I,$c=Di=x.L}var th={l:ne,C:ee,q:ce,z:Se,G:ze,j:oe,i,a:l,E:G,x:mt,d:Kt,y:le,c:ge,p:Ne,m:Sn,h:Ps,n:wn,F:vc,w:wc,r:Tc,k:Ec,H:Pc,u:Ac,g:Dc,b:M,o:Nc,B:Fc,t:Oc,f:Uc,s:Bc,A:kc,e:zc,v:Vc,D:Xc};function eh(x){x=Object.assign({},x);var _=D=>X=>D(X)>>>0,I=D=>()=>D()>>>0;return x.K=_(x.K),x.M=_(x.M),x._emscripten_stack_alloc=_(x._emscripten_stack_alloc),x.emscripten_stack_get_current=I(x.emscripten_stack_get_current),x}function nh(){lt();function x(){e.calledRun=!0,!A&&(J(),F?.(e),e.onRuntimeInitialized?.(),z())}e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1),x()},1)):x()}var Gn;return Gn=await Wt(),nh(),H?t=e:t=new Promise((x,_)=>{F=x,E=_}),t}var ua=hh;var uh=["straight","wider-back","wider-front"];function fa(n){return["separate","pushin"].includes(n.construction??"separate")?n.layout==="connected"?"Use separate bodies or joined letters for taper. A shared backing currently needs straight sides.":"":"Choose Separate face or Push-in front to use tapered sides. Other constructions currently use straight sides."}function Fs(n){let t=n.bodyStyle??"straight",e=n.taperAngle??10;if(!uh.includes(t))throw Object.assign(Error("Choose Straight, Wider back, or Wider front."),{field:"bodyStyle"});if(!Number.isFinite(e)||e<0||e>15)throw Object.assign(Error("Taper must be between 0\xB0 and 15\xB0 from vertical."),{field:"taperAngle"});let r=t!=="straight"&&e>0;if(r&&e<.5)throw Object.assign(Error("Use at least 0.5\xB0 of taper, or set 0\xB0 for straight sides."),{field:"taperAngle"});if(r&&fa(n))throw Object.assign(Error(fa(n)),{field:"bodyStyle"});return{style:t,angle:e,active:r,sign:t==="wider-back"?1:-1}}var fh=(n,t,e)=>{let r=e[0]-t[0],s=e[1]-t[1],a=Math.max(0,Math.min(1,((n[0]-t[0])*r+(n[1]-t[1])*s)/(r*r+s*s||1)));return(n[0]-t[0]-a*r)**2+(n[1]-t[1]-a*s)**2};function da(n,t,e,r,s,a){let c=t.area()>e.area(),h=c?t:e,u=c?e:t,d=a(h.subtract(u)),p=d.toPolygons(),v=t.toPolygons(),y=[],m=[],b=[];for(let N of p){let F=N[0],E=1/0;for(let U of v)for(let k=0;k<U.length;k++)E=Math.min(E,fh(F,U[k],U[(k+1)%U.length]));let O=E<1e-9;b.push(...N.map(()=>O?r:s));let L=N.map(U=>[...U]);O!==c&&L.reverse(),(O?y:m).push(L)}if(!y.length||!m.length)throw Error("Taper is too small to form a reliable wall. Increase its angle slightly or use Straight sides.");let w=p.flat(),S=[],P=[],R=new Map;function C(N,F){let E=[Math.fround(N[0]),Math.fround(N[1]),Math.fround(F)],O=E.join(",");return R.has(O)||(R.set(O,S.length/3),S.push(...E)),R.get(O)}for(let N of n.triangulate(p)){let F=N.map(E=>C(w[E],b[E]));P.push(...c?F:F.reverse())}for(let[N,F,E]of[[y,r,!0],[m,s,!1]]){let O=N.flat();for(let L of n.triangulate(N)){let U=L.map(k=>C(O[k],F));P.push(...E?U.reverse():U)}}let A=a(new n.Manifold(new n.Mesh({numProp:3,vertProperties:new Float32Array(S),triVerts:new Uint32Array(P)})));if(A.status()!=="NoError"||A.isEmpty()||A.volume()<=0)throw Object.assign(Error("The tapered wall could not form a closed solid. Reduce taper or use Straight sides."),{field:"taperAngle"});return A}function pa(n,t,e,r,s){let a=Fs(e);if(!a.active)return null;let c=y=>{throw Object.assign(Error(y),{field:"taperAngle"})};r-e.base<4&&c("There is not enough depth behind the face fitting for taper. Increase body depth, reduce face recess, or choose Straight sides.");function h(y,m=!1){let b=[],w=S=>(b.push(S),S);try{let S=y*Math.PI/180,P=Math.tan(S)*a.sign,R=e.wall/Math.cos(S),C=P*r,A=[];for(let N of t){let F=N.toPolygons().length,E=Q=>!Q.isEmpty()&&Q.toPolygons().length===F&&O(Q).length===1,O=Q=>Q.decompose().map(w),L=w(N.offset(-e.wall,"Miter",2));if(!E(L))return null;for(let Q=0;Q<=4;Q++){let it=e.base+(r-e.base)*Q/4,Y=P*(r-it),et=w(N.offset(Y,"Miter",2)),H=w(et.offset(-R,"Miter",2));if(!E(et)||!E(H)||!E(w(H.offset(-.6,"Miter",2))))return null}let U=w(N.offset(C,"Miter",2)),k=w(N.offset(P*(r-e.base),"Miter",2));if(!E(U))return null;let Z=w(k.offset(-R,"Miter",2)),tt=w(N.offset(-R,"Miter",2));for(let[Q,it]of[[U,N],[Z,tt]]){let Y=Q.area()>it.area()?Q:it;if(w((Y===Q?it:Q).subtract(Y)).area()>.001)return null}A.push({outer:N,rear:U,insideRear:Z,insideTop:tt,inside:L})}if(a.sign>0){for(let N=0;N<A.length;N++)for(let F=N+1;F<A.length;F++)if(w(w(A[N].rear.offset(.25,"Miter",2)).intersect(A[F].rear)).area()>1e-4)return null}return m?(b.forEach(s),b.length=0,{angle:y,offset:C,shapes:A}):!0}finally{b.reverse().forEach(S=>S.delete())}}let u=a.angle,d=!1;if(!h(u)){d=!0;let y=0,m=u;for(let b=0;b<9;b++){let w=(y+m)/2;h(w)?y=w:m=w}u=Math.floor(y*10)/10}let p=u>=.5?h(u,!0):null;return p||c("This outline has too little room for taper without closing an opening or splitting a narrow detail. Choose Straight sides, enlarge the artwork, or reduce wall thickness."),{info:{style:a.style,requestedAngle:a.angle,angle:u,limited:d,collarStart:r,straightDepth:e.depth-r,rearOffset:p.offset},shell(y,m){let b=p.shapes[y],w=da(n,b.rear,b.outer,0,r,s),S=da(n,b.insideRear,b.insideTop,e.base,r,s),P=s(w.subtract(S)),R=s(b.outer.subtract(b.inside)),C=s(s(R.extrude(m-r+.002)).translate([0,0,r-.002])),A=s(P.add(C)),N=A.decompose().map(s).filter(F=>Math.abs(F.volume())>1e-6);return(A.status()!=="NoError"||A.isEmpty()||N.length!==1||N[0].volume()<=0)&&c("Taper breaks this body into separate parts. Reduce taper or choose Straight sides."),N[0]}}}function Ni(n,t=n.depth,e=n.acrylic+(n.insetSkirtDepth??n._insetSkirtDepth??0)){let r=n._rimBorder??(n.construction==="inset"?n.insetBorder:n.wall),s=Math.max(0,r-n.wall+n.ledge),a=2*s,c=t-(n.faceRecess??0)-e-n.ledgeT;return{run:s,rise:a,top:c,start:c-a,angleFromBed:Math.atan(2)*180/Math.PI}}function mr(n,t,e){if(!t?.length)throw Error("Merged lettering needs typed text. For SVG, weld and position the outlines in your artwork editor.");if(t.length>24||t.flatMap(u=>u.polygons.flat()).length>4e4)throw Error("Simplify the text before merging.");let r=e.mergeMode??"size",s=e.mergeJoint??2;if(!["spacing","level","size"].includes(r)||!Number.isFinite(s)||s<.5||s>10)throw Error("Choose a merge mode and a joint width between 0.5 and 10 mm.");let a=e.letterEdits??[];for(let u of a)if(![u.x,u.y,u.scale].every(Number.isFinite)||Math.abs(u.x)>100||Math.abs(u.y)>100||u.scale<50||u.scale>150)throw Error("Letter adjustments: X/Y must be \u2212100 to 100% of height; size 50\u2013150%.");let c=[],h=u=>(c.push(u),u);try{let u=t.flatMap(E=>E.polygons.flat()),d=Math.max(...u.map(E=>E[1]))-Math.min(...u.map(E=>E[1]));if(d<=0)throw Error("Letters have no measurable height.");let p=e.height/d,v=t.map(E=>{let O=h(new n.CrossSection(E.polygons,"NonZero")),L=O.bounds();return h(h(O.translate([-L.min[0],0])).scale(p))}),y=[],m=[],b=s*.85,w=(E,O,L)=>{let U=E.intersect(O),k=U.offset(-L,"Round",2,16),Z=k.area()>1e-4;return k.delete(),U.delete(),Z};for(let E=0;E<v.length;E++){let O=v[E],L=a[E]??{x:0,y:0,scale:100},U=null;if(E===0)U={x:0,y:0,scale:1,score:0};else{let Y=y[E-1],et=Y.bounds();for(let H of r==="size"?[1,.85,1.15]:[1])for(let K of r==="spacing"?[0]:[0,-.1,.1,-.2,.2]){let lt=O.scale(H),J=lt.translate([0,K*e.height]),z=J.bounds();lt.delete();let B=et.max[0]-z.min[0],j=B-Math.min(et.max[0]-et.min[0],z.max[0]-z.min[0])*.65,q=B,nt=!1,bt=B,Tt=Math.max(.5,e.height*.025);for(;q>=j;){let St=J.translate([q,0]);if(nt=w(Y,St,b),St.delete(),nt)break;bt=q,q-=Tt}if(nt){for(let Ct=0;Ct<7;Ct++){let dt=(q+bt)/2,ht=J.translate([dt,0]),xt=w(Y,ht,b);ht.delete(),xt?q=dt:bt=dt}let St=J.translate([q,0]),Lt=Y.intersect(St),Wt=Lt.area()/Math.min(Y.area(),St.area());Lt.delete(),St.delete();let Yt=B-q+Math.abs(K)*e.height*.3+Math.abs(1-H)*e.height*.2;Wt<.4&&(!U||Yt<U.score)&&(U={x:q,y:K*e.height,scale:H,score:Yt})}J.delete()}}if(!U)throw Error(`Cannot safely join \u201C${t[E-1]?.char}\u201D and \u201C${t[E].char}\u201D. Allow level / size changes, reduce joint width, or try a bolder font.`);let k=U.scale*L.scale/100,Z=U.x+L.x*e.height/100,tt=U.y+L.y*e.height/100,Q=h(O.scale(k)),it=h(Q.translate([Z,tt]));y.push(it),m.push({letter:t[E].char,index:t[E].index,x:Z,y:tt,sizePercent:k*100})}let S=h(n.CrossSection.union(y)),P=S.bounds(),R=(e.textRotation??0)*Math.PI/180,C=S.toPolygons().flat().map(([E,O])=>E*Math.sin(R)+O*Math.cos(R)),A=e.height/(Math.max(...C)-Math.min(...C));for(let E=1;E<y.length;E++)if(!w(y[E-1],y[E],s/(2*A)))throw Error(`Join before \u201C${t[E].char}\u201D is too thin or disconnected. Reduce manual offsets, increase letter size, or reduce the requested joint width.`);let N=S.decompose(),F=N.length;if(N.forEach(E=>E.delete()),F!==1)throw Error(`The word still has ${F} separate pieces (often dots or accents). Choose a connected font or prepare welded SVG artwork; no backing is added in this mode.`);return{polygons:S.toPolygons(),report:m.map(E=>({...E,x:(E.x-P.min[0])*A,y:(E.y-P.min[1])*A,sizePercent:E.sizePercent,normalization:A}))}}finally{c.reverse().forEach(u=>u.delete())}}var dh=Ns(vr(),1);function yr(n,t=0){if(!Number.isFinite(t)||Math.abs(t)>45)throw Error("Text rotation must be \u221245 to 45 degrees.");let e=t*Math.PI/180,r=Math.cos(e),s=Math.sin(e);return n.map(a=>a.map(([c,h])=>[c*r-h*s,c*s+h*r]))}function Qe(n){return n._preview&&n._previewCurves!==!1&&!["zigzag","cob","cob-flex","wires"].includes(n.ledMode)&&!n.ledManualRoutes?.some(t=>t.holes?.length||t.paths?.length)?.05:0}function Os(n,t,e,r,s){let a={...e,insetBorder:e.insetBorder??5,insetSkirtWall:e.insetSkirtWall??1.2,insetSkirtExtra:e.insetSkirtExtra??0,insetFaceOffset:e.insetFaceOffset??(e.facePosition==="recessed"?-(e.faceRecess??0):0)},c=[],h=d=>(c.push(d),d);if(!Number.isFinite(a.insetBorder)||a.insetBorder<2||a.insetBorder>30||a.insetBorder<a.wall+1)throw Object.assign(Error("Inset border must be 2\u201330 mm and at least 1 mm wider than the body wall."),{field:"insetBorder"});if(!Number.isFinite(a.insetFaceOffset)||a.insetFaceOffset<-30||a.insetFaceOffset>10)throw Object.assign(Error("Face height must be between \u221230 and +10 mm."),{field:"insetFaceOffset"});let u=(a.faceMethod??"cnc")==="print";if(a.insetSkirtDepth=u?2*a.acrylic+Math.max(0,a.insetFaceOffset)+a.insetSkirtExtra:0,u&&(!Number.isFinite(a.insetSkirtWall)||a.insetSkirtWall<.8||a.insetSkirtWall>3))throw Object.assign(Error("Skirt wall must be 0.8\u20133 mm."),{field:"insetSkirtWall"});if(u&&(!Number.isFinite(a.insetSkirtExtra)||a.insetSkirtExtra<0||a.insetSkirtExtra>20))throw Object.assign(Error("Extra skirt depth must be 0\u201320 mm."),{field:"insetSkirtExtra"});if(!u&&a.insetFaceOffset>0&&a.acrylic-a.insetFaceOffset<.6-1e-6)throw Object.assign(Error("Leave at least 0.6 mm of face inside the body. Cut acrylic is a flat insert. Reduce the raised height, use thicker acrylic, or choose a printed face with a skirt."),{field:"insetFaceOffset"});if(a.layout==="connected")throw Error("Inset lettering uses its widened body to join the design. Choose Joined letters or a contour lightbox instead of shared backing.");try{if(a.layout==="merged"){let L=mr(n,r,a);t=yr(L.polygons,a.textRotation??0),a.mergeReport=L.report}let d=t.flat();if(!d.length||d.length>4e4)throw Error("Use valid artwork with at most 40,000 outline points.");let p=Math.min(...d.map(L=>L[0])),v=Math.min(...d.map(L=>L[1])),y=Math.max(...d.map(L=>L[1]));if(!Number.isFinite(a.height)||a.height<20||a.height>1e3||y-v<.001)throw Error("Check the artwork height (20\u20131000 mm).");let m=a.height/(y-v),b=h(new n.CrossSection(t.map(L=>L.map(([U,k])=>[(U-p)*m,(k-v)*m])),"NonZero"));b=h(b.simplify(.01)),Qe(a)&&(b=h(b.simplify(Qe(a))));let w=L=>{let U=L.decompose(),k=U.length;return U.forEach(Z=>Z.delete()),k},S=a.insetBorder,P;for(;;){P=h(h(b.offset(S,"Round",2,64)).simplify(.01));let L=h(P.offset(-a.wall,"Miter",2));if(!["merged"].includes(a.layout)&&a.projectMode!=="lightbox"||w(P)===1&&w(L)===1)break;if(S=Math.round((S+.5)*10)/10,S>30)throw Error("A shared cavity needs more than 30 mm of border. Move letters closer or choose Joined letters.")}let R=P.toPolygons().flat(),C=Math.min(...R.map(L=>L[0])),A=Math.min(...R.map(L=>L[1])),N=Math.max(...R.map(L=>L[1]))-A,F=Math.max(...R.map(L=>L[0]))-C;if(Math.max(N,F)>1e3)throw Error("The expanded body exceeds 1000 mm. Reduce artwork height or border.");b=h(b.translate([-C,-A])),P=h(P.translate([-C,-A]));let E=s(n,P.toPolygons(),{...a,construction:"separate",projectMode:"letters",layout:"individual",height:N,_faceOutlines:b.toPolygons(),_rimBorder:S,_insetSkirtDepth:a.insetSkirtDepth,facePosition:"recessed",faceRecess:-a.insetFaceOffset,calibration:!0});for(let L of E.parts){let U=h(new n.CrossSection(L.facePolygons,"NonZero"));L.artPolygons=U.toPolygons(),L.enclosurePolygons=E.parts.length===1?P.toPolygons():h(h(new n.Manifold(new n.Mesh({numProp:L.body.stride,vertProperties:L.body.vertices,triVerts:L.body.indices}))).slice(a.base/2)).toPolygons(),L.faceZ=E.depth-(E.params.faceRecess??0)-a.acrylic,L.insetSkirtDepth=a.insetSkirtDepth,L.seatZ=L.faceZ-a.insetSkirtDepth}E.depth=a.depth+Math.max(0,a.insetFaceOffset);let O=E.params;return delete O._faceOutlines,delete O._rimBorder,delete O._insetSkirtDepth,E.params={...O,...a,calibration:a.calibration,availabilityCheck:a.availabilityCheck,construction:"inset",height:a.height,insetBorder:S,requestedInsetBorder:a.insetBorder,faceRecess:O.faceRecess,artworkActualHeight:a.height,boxActualWidth:F,boxActualHeight:N},S>a.insetBorder&&E.warnings.push(`Inset border increased to ${S.toFixed(1)} mm to create a shared cavity. The face lettering keeps its original size.`),u&&E.warnings.push(`Printed face: ${a.acrylic} mm skin + ${a.insetSkirtDepth} mm hollow skirt. Print face-down. The skirt seats on the body ledge; it is not a snap latch. Narrow tips can become solid where a hollow wall cannot fit.`),E.warnings.push("Inset lettering: wider opaque body, smaller front inserts, shared space behind the front rim. Fit, face retention and LED bends require a physical test. Small counters can close in the expanded body; inspect the preview."),!a.calibration&&!a.availabilityCheck&&!a._preview&&(E.fitSample=Os(n,[[[0,0],[30,0],[30,30],[0,30]]],{...a,height:30,layout:"individual",calibration:!0},void 0,s)),E}finally{c.reverse().forEach(d=>d.delete())}}function ma(n,t,e,r,s,a,c,h=null){let u=Z=>{throw Object.assign(Error(`Flanged face, part ${a+1}: ${Z}`),{field:"frontDepth"})},d=e.frontFlange==="outer",p=r(t.offset(-e.wall,"Miter",2)),v=r(t.offset(d?e.frontFit+e.frontWall:-(e.wall+e.frontFit),"Miter",2)),y=r(t.offset(d?e.frontFit:-(e.wall+e.frontFit+e.frontWall),"Miter",2)),m=d?v:t,b=Z=>{let tt=Z.decompose().map(r);return!Z.isEmpty()&&tt.length===1&&Z.toPolygons().length===t.toPolygons().length};[p,v,y].every(b)||u("the collar closes a hole or splits at a narrow stroke. Increase artwork size or reduce body/collar wall thickness.");let w=r(v.subtract(y)),S=e.depth-e.acrylic,P=h?h.shell(a,S):r(r(t.extrude(S)).subtract(r(r(p.extrude(S)).translate([0,0,e.base])))),R=[r(r(w.extrude(e.frontDepth-e.frontChamfer+.002)).translate([0,0,-e.frontDepth+e.frontChamfer]))];if(e.frontChamfer>0){let Z=Math.ceil(e.frontChamfer/.1),tt=e.frontChamfer/Z;for(let Q=0;Q<Z;Q++){let it=e.frontChamfer-(Q+.5)*tt,Y=r(v.offset(-it,"Miter",2)),et=r(y.offset(it,"Miter",2)),H=r(Y.subtract(et));H.isEmpty()&&u("the entry chamfer removes the collar tip. Reduce chamfer or increase collar thickness."),R.push(r(r(H.extrude(tt+.001)).translate([0,0,-e.frontDepth+Q*tt])))}}let C=r(n.Manifold.union(R)),A=r(r(m.extrude(e.acrylic)).add(C));r(r(C.translate([0,0,S])).intersect(P)).volume()>.01&&u("collar interferes with the body. Increase fit allowance."),(P.decompose().map(r).length!==1||A.decompose().map(r).length!==1)&&u("body or front is not one connected solid. Simplify the outline.");let N=P.boundingBox(),F=N.max[0]-N.min[0],E=N.max[1]-N.min[1],O=A.boundingBox(),L=O.max[0]-O.min[0],U=O.max[1]-O.min[1],k={minX:Math.min(N.min[0],O.min[0]),minY:Math.min(N.min[1],O.min[1]),maxX:Math.max(N.max[0],O.max[0]),maxY:Math.max(N.max[1],O.max[1])};for(let[Z,tt,Q]of[["body",F,E],["flanged face",L,U]])tt<=e.bedX&&Q<=e.bedY||Q<=e.bedX&&tt<=e.bedY||c.push(`Part ${a+1}: ${Z} exceeds the bed at 0\xB0 or 90\xB0. Try rotation in Arrange print plates before resizing.`);return Math.max(S,e.acrylic+e.frontDepth)>e.bedZ&&c.push(`Part ${a+1}: body or flanged face exceeds the print height. Reduce depth.`),{name:`part-${String(a+1).padStart(2,"0")}`,body:s(P),face:s(A),frontCollar:s(C),facePolygons:m.toPolygons(),faceZ:S,origin:[N.min[0],N.min[1]],width:F,height:E,faceWidth:L,faceHeight:U,footprint:k,volume:P.volume(),faceVolume:A.volume(),cncRisk:null,cncRiskArea:0}}function Us(n,t,e,r){let s={...e,construction:e.construction??"frontframe",boxShape:e.boxShape??"contour",boxSizing:e.boxSizing??"auto",boxAlign:e.boxAlign??"center",boxMargin:e.boxMargin??10,boxWidth:e.boxWidth??220,boxHeight:e.boxHeight??120,boxRadius:e.boxRadius??8,maskThickness:e.maskThickness??.8};for(let[v,y,m]of[["boxMargin",3,100],["boxWidth",30,1e3],["boxHeight",30,1e3],["boxRadius",0,100],["maskThickness",.4,3]])if(!Number.isFinite(s[v])||s[v]<y||s[v]>m)throw Error(`Check ${v}: supported range ${y}\u2013${m} mm.`);if(!["contour","rectangle"].includes(s.boxShape))throw Error("Choose a contour or rectangular enclosure.");if(!["separate","frontframe","trimcap","reartray","pushin"].includes(s.construction))throw Error("Lightboxes support separate face, front frame, push-in front, acrylic trim cap or rear tray. Integrated multicolour front is not available yet.");s.construction==="pushin"&&(s.faceMethod="print");let a=["frontframe","trimcap"].includes(s.construction),c=s.construction==="reartray",h=s.boxShape==="contour";if(h&&(s.boxSizing="auto"),!["auto","fixed"].includes(s.boxSizing)||!["left","center","right"].includes(s.boxAlign))throw Error("Choose a valid box size and alignment.");let u=[],d=v=>(u.push(v),v),{CrossSection:p}=n;try{let v=t.flat();if(!v.length)throw Error("Enter text or import artwork for the box.");let y=v.map(q=>q[0]),m=v.map(q=>q[1]),b=Math.min(...y),w=Math.min(...m),S=Math.max(...y)-b,P=Math.max(...m)-w;if(S<.001||P<.001||!Number.isFinite(s.height)||s.height<20||s.height>1e3)throw Error("Check artwork height and outlines.");let R=(s.wall||2)+(s.clearance||.2)+(a?s.capOverlap??1.5:c?s.ledge??1.5:0)+2,C=s.boxMargin;if(h&&(s.boxMargin=Math.max(s.boxMargin,R+.1)),s.boxMargin<R)throw Error(`Use at least ${R.toFixed(1)} mm margin to keep artwork clear of the frame.`);let A=s.height/P,N=S*A+2*s.boxMargin,F=s.height+2*s.boxMargin;if(s.boxSizing==="fixed"){if(N=s.boxWidth,F=s.boxHeight,N<=2*s.boxMargin||F<=2*s.boxMargin)throw Error("Box margins leave no room for text.");A=Math.min(A,(N-2*s.boxMargin)/S,(F-2*s.boxMargin)/P)}if(N>1e3||F>1e3)throw Error("Box exceeds 1000 mm. Reduce artwork height or use fixed dimensions.");if(!h&&s.boxRadius>Math.min(N,F)/2)throw Error("Corner radius cannot exceed half the shortest box side.");let E=s.boxRadius,O=[];if(E===0)O.push([0,0],[N,0],[N,F],[0,F]);else for(let[q,nt,bt]of[[N-E,E,-90],[N-E,F-E,0],[E,F-E,90],[E,E,180]])for(let Tt=0;Tt<=16;Tt++){let St=(bt+Tt*90/16)*Math.PI/180;O.push([q+E*Math.cos(St),nt+E*Math.sin(St)])}let L=s.boxAlign==="left"?s.boxMargin:s.boxAlign==="right"?N-s.boxMargin-S*A:(N-S*A)/2,U=(F-P*A)/2,k=d(new p(t.map(q=>q.map(([nt,bt])=>[(nt-b)*A+L,(bt-w)*A+U])),"NonZero"));Qe(s)&&(k=d(k.simplify(Qe(s))));let Z,tt=0,Q=0;if(h){let q=ht=>ht.reduce((xt,Pt,gt)=>{let ut=ht[(gt+1)%ht.length];return xt+Pt[0]*ut[1]-ut[0]*Pt[1]},0)/2,nt=ht=>{let xt=ht.decompose(),Pt=xt.length===1;return xt.forEach(gt=>gt.delete()),Pt},bt=ht=>{let xt=k.offset(ht,"Round",2,96),Pt=new p(xt.toPolygons().filter(Jt=>q(Jt)>0),"NonZero");xt.delete();let gt=Pt.offset(-Math.max(s.wall+s.ledge+.5,R),"Miter",2),ut=Pt.offset(-R,"Miter",2),pt=k.subtract(ut),Bt=nt(Pt)&&!gt.isEmpty()&&nt(gt)&&pt.area()<=.001;return gt.delete(),ut.delete(),pt.delete(),{section:Pt,ok:Bt}},Tt=Math.floor((1e3-Math.max(S*A,P*A))/2*10)/10,St=s.boxMargin,Lt=St,Wt=bt(Lt);if(!Wt.ok){for(Wt.section.delete();;){let ht=Math.min(Tt,Math.max(Lt+1,Lt*1.5));if(ht<=Lt)throw Error("Connecting this artwork would exceed the 1000 mm box limit. Reduce artwork height or move the shapes closer together.");if(Lt=ht,Wt=bt(Lt),Wt.ok){Wt.section.delete();break}Wt.section.delete(),St=Lt}for(;Lt-St>.05;){let ht=(St+Lt)/2,xt=bt(ht);xt.section.delete(),xt.ok?Lt=ht:St=ht}if(Lt=Math.ceil(Lt*10)/10,Wt=bt(Lt),!Wt.ok)throw Wt.section.delete(),Error("Unable to connect the contour reliably. Move the shapes closer together.")}s.boxMargin=Lt,Z=d(Wt.section);let Yt=Z.toPolygons().flat(),Ct=Math.min(...Yt.map(ht=>ht[0])),dt=Math.min(...Yt.map(ht=>ht[1]));if(N=Math.max(...Yt.map(ht=>ht[0]))-Ct,F=Math.max(...Yt.map(ht=>ht[1]))-dt,N>1000.001||F>1000.001)throw Error("Connecting this artwork would exceed the 1000 mm box limit. Reduce artwork height.");tt=Ct,Q=dt,Z=d(Z.translate([-Ct,-dt])),k=d(k.translate([-Ct,-dt]))}else Z=d(new p([O]));let it=d(Z.offset(-R,"Miter",2));if(d(k.subtract(it)).area()>.001)throw Error("Artwork meets the rounded frame. Increase margins, reduce corner radius, or reduce artwork height.");let Y=s.acrylic+s.maskThickness,et=r(n,Z.toPolygons(),{...s,projectMode:"letters",height:F,construction:s.construction,layout:"individual",acrylic:Y,calibration:!0});et.artworkTransform={scale:A,x:L-b*A-tt,y:U-w*A-Q};let H=et.parts[0];H.faceZ??=et.bodyDepth-et.params.faceRecess-Y,H.enclosurePolygons=Z.toPolygons();let K=d(new p(H.facePolygons,"NonZero")),lt=d(K.subtract(k)),J=q=>{if(d(q),q.status()!=="NoError"||q.isEmpty())throw Error("Unable to make the face mask.");let nt=q.getMesh();return{vertices:new Float32Array(nt.vertProperties),indices:new Uint32Array(nt.triVerts),stride:nt.numProp}},z=d(K.extrude(s.acrylic)),B=d(lt.extrude(s.maskThickness));if(H.faceStack=J(z.add(d(B.translate([0,0,s.acrylic])))),H.face=J(K.extrude(s.acrylic)),H.mask=J(lt.extrude(s.maskThickness)),H.maskZ=H.faceZ+s.acrylic,H.maskPolygons=lt.toPolygons(),H.artPolygons=k.toPolygons(),H.maskPieces=lt.decompose().map(d).length,s.construction==="pushin"){let q=H.frontCollar,nt=d(new n.Manifold(new n.Mesh({numProp:q.stride,vertProperties:q.vertices,triVerts:q.indices})));H.face=J(z.add(nt)),delete H.faceStack}let j=d(d(lt.offset(-.4,"Round",2,32)).offset(.4,"Round",2,32));if(d(lt.subtract(j)).area()>.5&&et.warnings.push("Mask has details near or below 0.8 mm. Inspect every stroke and counter in the sliced preview for your nozzle."),et.params={...s,...et.params,height:s.height,acrylic:s.acrylic,projectMode:"lightbox",calibration:s.calibration,requestedBoxMargin:C,boxMargin:s.boxMargin,faceStackThickness:Y,boxActualWidth:N,boxActualHeight:F,artworkActualHeight:P*A},!s.calibration&&!s.availabilityCheck&&!s._preview)try{et.fitSample=Us(n,[[[0,0],[20,0],[20,20],[0,20]]],{...s,height:20,boxShape:"rectangle",boxSizing:"auto",boxMargin:10,boxRadius:0,boxAlign:"center",calibration:!0},r)}catch(q){et.warnings.push("A 40 mm fit sample is not available for these dimensions: "+q.message)}return h&&s.boxMargin>C+.001&&et.warnings.push(`Contour border automatically increased from ${C.toFixed(1)} to ${s.boxMargin.toFixed(1)} mm to connect the artwork and leave room for the construction. Finished size and bed-fit checks use the expanded box.`),h&&et.warnings.push("Contour enclosure follows the expanded artwork silhouette. Internal artwork holes are filled in the enclosure; they remain in the opaque artwork mask. Inspect narrow joins and CNC inside corners before fabrication."),s.construction==="pushin"?et.warnings.push("Push-in lightbox: print the diffuser with collar face-down, then print and bond the separate opaque mask onto its front using the alignment template. No combined face-stack print is exported; this avoids bridging the text openings."):et.warnings.push(`Lightbox mask has ${H.maskPieces} piece(s), including enclosed artwork details. Printed diffuser: print the registered face stack with a colour change at ${s.acrylic} mm. Acrylic: bond every mask piece to the diffuser using the supplied alignment template. Friction fit and light blocking require a physical test.`),et}finally{u.reverse().forEach(v=>v.delete())}}function ga(n,t,e,r,s,a,c){let h=r(t.offset(-e.wall,"Miter",2)),u=r(t.offset(-(e.wall+e.ledge),"Miter",2)),d=r(t.offset(-(e.wall+e.clearance),"Miter",2)),p=r(t.offset(-(e.wall+e.backFit),"Miter",2)),v=r(t.offset(-(e.wall+e.backFit+e.collarWall),"Miter",2));if([h,u,d,v].some(E=>E.isEmpty()))throw Error("Letter is too narrow for the shell, face lip and rear tray. Increase height or reduce wall / lip / collar.");if(h.toPolygons().length!==t.toPolygons().length||p.toPolygons().length!==t.toPolygons().length||v.toPolygons().length!==t.toPolygons().length)throw Error("Rear tray closes or splits an outline. Increase letter height or reduce collar dimensions.");let y=r(r(r(t.subtract(h)).extrude(e.depth-e.base)).translate([0,0,e.base])),m=r(r(r(h.subtract(u)).extrude(e.ledgeT)).translate([0,0,e.depth-e.ledgeT])),b=r(y.add(m)),w=r(d.extrude(e.acrylic)),S=r(r(r(p.subtract(v)).extrude(e.collarDepth)).translate([0,0,e.base])),P=r(r(t.extrude(e.base)).add(S));if(P.decompose().map(r).length!==1)throw Error("The rear tray is disconnected. Increase lettering size.");let R=b.decompose().map(r).length;R>1&&c.push(`Part ${a+1}: shell has ${R} separate rings, including counters. Bond all rings to the face before fitting the tray.`);let C=d.decompose().map(r).length;C>1&&c.push(`Part ${a+1}: narrow joins split the face into ${C} pieces. Assemble every insert.`);let A=b.boundingBox(),N=A.max[0]-A.min[0],F=A.max[1]-A.min[1];return(!(N<=e.bedX&&F<=e.bedY||F<=e.bedX&&N<=e.bedY)||e.depth-e.base>e.bedZ||e.base+e.collarDepth>e.bedZ)&&c.push(`Part ${a+1}: shell or tray exceeds the entered build volume.`),e.faceMethod==="cnc"&&c.push(`Part ${a+1}: CNC face is a nominal outline. Resolve concave corners for the \xD8${e.bitDiameter} mm cutter in CAM and test the face fit; no automatic corner correction is applied.`),{name:`part-${String(a+1).padStart(2,"0")}`,body:s(b),face:s(w),faceZ:e.depth-e.ledgeT-e.acrylic,facePolygons:d.toPolygons(),back:s(P),origin:[A.min[0],A.min[1]],width:N,height:F,volume:b.volume(),backVolume:P.volume(),shellPieces:R,cncRisk:null,cncRiskArea:0}}function va(n,t,e,r,s,a){let c=r(t.offset(-e.wall,"Miter",2)),h=r(t.offset(-(e.wall+e.backFit),"Miter",2)),u=r(t.offset(-(e.wall+e.backFit+e.collarWall),"Miter",2));if(c.isEmpty()||u.isEmpty())throw Error(`Part ${a+1}: too narrow for a rear collar. Increase artwork height or reduce collar / body wall thickness.`);let d=r(t.subtract(c)),p=r(r(d.extrude(e.depth-e.base-e.acrylic)).translate([0,0,e.base])),v=r(t.extrude(e.acrylic)),y=r(v.translate([0,0,e.depth-e.acrylic])),m=r(p.add(y)),b=r(r(r(h.subtract(u)).extrude(e.collarDepth)).translate([0,0,e.base])),w=r(r(t.extrude(e.base)).add(b));if(m.decompose().map(r).length!==1||w.decompose().map(r).length!==1)throw Error("Rear collar split the part. Enlarge the lettering or reduce collar dimensions.");let S=m.boundingBox();return{name:`part-${String(a+1).padStart(2,"0")}`,body:s(m),previewBody:s(p),face:s(v),back:s(w),facePolygons:t.toPolygons(),origin:[S.min[0],S.min[1]],width:S.max[0]-S.min[0],height:S.max[1]-S.min[1],volume:m.volume(),backVolume:w.volume(),screws:[],cncRisk:null,cncRiskArea:0}}function ya(n,t,e,r,s,a,c,h){let{CrossSection:u,Manifold:d,Mesh:p}=n,v=r.assemblyMargin,y=c(new u([[[-v,-v],[s+v,-v],[s+v,a+v],[-v,a+v]]],"NonZero")),m=L=>c(new d(new p({numProp:L.stride,vertProperties:L.vertices,triVerts:L.indices}))),b=m(t[0].body);for(let L of t.slice(1))b=c(b.add(m(L.body)));let w=r.construction==="integrated",S=y;if(w)for(let L of e){let U=c(L.offset(-r.wall,"Miter",2));S=c(S.subtract(U))}let P=w?r.base:0,R=w?r.assemblyThickness:r.base,C=c(c(S.extrude(R)).translate([0,0,P])),A=c(b.add(C));if(A.decompose().map(c).length!==1)throw Error("The backing did not connect every body. Enlarge the backing margin or simplify the artwork.");let N=c(C.subtract(b)),F=null,E=null;if(w){let L=m(t[0].back);for(let Z of t.slice(1))L=c(L.add(m(Z.back)));let U=y;for(let Z of e)U=c(U.subtract(c(Z.offset(-.05,"Miter",2))));let k=c(U.extrude(r.base));if(F=c(L.add(k)),E=k,F.decompose().map(c).length!==1)throw Error("The shared back did not connect every cover. Adjust artwork or margin.")}let O=A.boundingBox();return{name:"connected-lettering",body:h(A),back:F?h(F):null,connector:N.isEmpty()?null:h(N),backConnector:E&&!E.isEmpty()?h(E):null,origin:[O.min[0],O.min[1]],width:O.max[0]-O.min[0],height:O.max[1]-O.min[1],volume:A.volume(),backVolume:F?.volume()??0}}function xa(n,t,e,r,s,a){let c=r(t.offset(e.capGap,e.capRetention==="friction"?"Miter":"Round",2,48)),h=r(t.offset(e.capGap+e.capWall,e.capRetention==="friction"?"Miter":"Round",2,48));if(c.toPolygons().length!==t.toPolygons().length||h.toPolygons().length!==t.toPolygons().length)throw Error(`Part ${a+1}: trim skirt closes a counter or merges an outline. Enlarge the letter or reduce cap gap / wall.`);let u=r(t.offset(-(e.wall+e.clearance+e.capOverlap),"Miter",2));if(u.isEmpty())throw Error(`Part ${a+1}: the trim lip closes the face opening. Enlarge the letter or reduce lip overlap.`);let d=r(h.subtract(c)),p=r(h.subtract(u)),v=r(d.extrude(e.capSkirt)),y=r(r(p.extrude(e.capLip)).translate([0,0,e.capSkirt])),m=r(v.add(y)),b=m.decompose().map(r).length,w=m.boundingBox();return{cap:s(m),capPieces:b,capOrigin:[w.min[0],w.min[1]],capWidth:w.max[0]-w.min[0],capHeight:w.max[1]-w.min[1],capVolume:m.volume(),capPolygons:h.toPolygons(),capZ:e.depth-e.capLip-e.capSkirt,faceZ:e.depth-e.capLip-e.acrylic}}function _a(n,t,e,r,s,a){let{CrossSection:c}=n,h=e.bossDiameter/2,u=r(t.offset(-e.wall,"Miter",2));if(u.isEmpty())throw Error(`Part ${a+1}: no interior remains. Increase height or reduce wall thickness.`);let d=r(t.subtract(u)),v=r(t.offset(-(h+.3),"Round",2,32)).toPolygons(),y=[];for(let k of v){let Z=k.map((et,H)=>Math.hypot(et[0]-k[(H+1)%k.length][0],et[1]-k[(H+1)%k.length][1])),tt=Z.reduce((et,H)=>et+H,0),Q=Math.max(2,tt/160),it=0,Y=0;for(let et=0;et<tt;et+=Q){for(;it<Z.length-1&&Y+Z[it]<et;)Y+=Z[it++];let H=k[it],K=k[(it+1)%k.length],lt=(et-Y)/(Z[it]||1);y.push([H[0]+(K[0]-H[0])*lt,H[1]+(K[1]-H[1])*lt])}}if(y.length>2500)throw Error("Too many small outlines for automatic screw placement. Simplify the artwork.");let m=[],b=[],w=t.bounds(),S=[(w.min[0]+w.max[0])/2,(w.min[1]+w.max[1])/2],P=(k,Z)=>Math.hypot(k[0]-Z[0],k[1]-Z[1]);for(;m.length<e.screwCount&&y.length;){y.sort((it,Y)=>{let et=H=>m.length?Math.min(...m.map(K=>P(K,H))):P(S,H);return et(Y)-et(it)});let k=y.shift();if(m.some(it=>P(it,k)<e.bossDiameter+2))continue;let Z=r(r(c.circle(h,48)).translate(k)),tt=r(Z.subtract(t)),Q=r(Z.intersect(d));tt.area()>.001||Q.area()<1||(m.push(k),b.push(Z))}if(m.length!==e.screwCount)throw Error(`Part ${a+1}: only ${m.length} of ${e.screwCount} screw posts fit. Increase artwork height, reduce post diameter, or request fewer screws.`);let R=e.depth-e.base-e.acrylic,C=r(r(d.extrude(R)).translate([0,0,e.base])),A=r(r(t.extrude(R)).translate([0,0,e.base])),N=t.toPolygons();for(let k=0;k<b.length;k++){let Z=m[k],tt=null,Q=1/0;for(let J of N)for(let z=0;z<J.length;z++){let B=J[z],j=J[(z+1)%J.length],q=j[0]-B[0],nt=j[1]-B[1],bt=Math.max(0,Math.min(1,((Z[0]-B[0])*q+(Z[1]-B[1])*nt)/(q*q+nt*nt||1))),Tt=[B[0]+bt*q,B[1]+bt*nt],St=P(Z,Tt);St<Q&&(Q=St,tt=Tt)}let it=tt.map((J,z)=>J+(Z[z]-J)*Math.min(.5,e.wall/2/Q)),Y=r(r(b[k].extrude(e.bossLength)).translate([0,0,e.base])),et=r(r(b[k].extrude(.01)).translate([0,0,e.base+e.bossLength-.01])),H=r(r(c.circle(Math.min(.4,e.wall/4),24)).translate(it)),K=r(r(H.extrude(.01)).translate([0,0,e.base+e.bossLength+e.bossDiameter-.01])),lt=r(r(n.Manifold.hull([et,K])).intersect(A));C=r(r(C.add(Y)).add(lt))}let F=r(t.extrude(e.base));for(let k of m){let Z=r(r(c.circle(e.pilotDiameter/2,40)).translate(k)),tt=r(r(Z.extrude(e.pilotDepth+.1)).translate([0,0,e.base-.1]));C=r(C.subtract(tt));let Q=r(r(c.circle(e.screwClearance/2,40)).translate(k));F=r(F.subtract(r(Q.extrude(e.base))))}let E=r(t.extrude(e.acrylic)),O=r(E.translate([0,0,e.depth-e.acrylic])),L=r(C.add(O));if(L.decompose().map(r).length!==1||F.decompose().map(r).length!==1)throw Error("Screw features split a part. Increase artwork height or reduce screw dimensions.");let U=L.boundingBox();return{name:`part-${String(a+1).padStart(2,"0")}`,body:s(L),previewBody:s(C),face:s(E),back:s(F),facePolygons:t.toPolygons(),origin:[U.min[0],U.min[1]],width:U.max[0]-U.min[0],height:U.max[1]-U.min[1],volume:L.volume(),backVolume:F.volume(),screws:m,cncRisk:null,cncRiskArea:0}}function xr(n,t,e){let r=new Float32Array(n.vertices);for(let s=0;s<r.length;s+=n.stride)r[s+1]=e-r[s+1],r[s+2]=t-r[s+2];return{...n,vertices:r}}function En(n,t,e,r){if(Fs(e),e.construction==="inset")return Os(n,t,e,r,En);if(e.projectMode==="lightbox")return Us(n,t,e,En);e={...e,bitDiameter:e.bitDiameter??3.175,faceMethod:e.faceMethod??"cnc",facePosition:e.facePosition??"flush"},e.construction=e.construction??"separate";let s=e.construction==="integrated",a=e.construction==="pushin";if(!["separate","integrated","trimcap","frontframe","reartray","pushin"].includes(e.construction))throw Error("Choose a valid construction.");if(s&&(e={...e,faceMethod:"print",facePosition:"flush",clearance:.2,ledge:1.5,ledgeT:1.2,screwCount:e.screwCount??4,bossDiameter:e.bossDiameter??8}),a&&(e={...e,faceMethod:"print",facePosition:"flush",clearance:.2,ledge:1.5,ledgeT:1.2,frontFlange:e.frontFlange??"inner",frontFlangeColour:e.frontFlangeColour??"body",frontDepth:e.frontDepth??5,frontWall:e.frontWall??1.6,frontFit:e.frontFit??.2,frontChamfer:e.frontChamfer??.4}),e.backFastening=e.backFastening??"screws",e.capRetention=e.capRetention??"slip",e.layout=e.layout??"individual",!["screws","friction"].includes(e.backFastening)||!["slip","friction"].includes(e.capRetention)||!["individual","connected","merged"].includes(e.layout))throw Error("Choose a valid fit and assembly option.");let c=s&&e.backFastening==="friction",h=e.construction==="reartray",u=e.construction==="frontframe",d=e.construction==="trimcap"||u;if(h&&(e.backFastening="friction"),(h||u)&&(e.facePosition="flush",e.layout==="connected"))throw Error("Use individual bodies or a merged word for service constructions. Shared backing can trap the removable parts.");if(u&&(e.capRetention="friction"),d&&(e={...e,facePosition:"flush",capGap:e.capGap??.25,capWall:e.capWall??1.6,capSkirt:e.capSkirt??8,capLip:e.capLip??1.2,capOverlap:e.capOverlap??1.5},!u&&!["cnc","laser"].includes(e.faceMethod)))throw Error("Trim caps require a CNC- or laser-cut acrylic face.");u&&(e.capSkirt=e.depth-e.capLip),d&&e.capRetention==="friction"&&(e.capGap=e.capFit??0);let p=a?e.depth-e.acrylic:d?e.depth-e.capLip:e.depth;e.faceRecess=e.facePosition==="flush"?0:e.faceRecess;let v=e.acrylic+(e._insetSkirtDepth??0),y=[],m=w=>(y.push(w),w),{CrossSection:b}=n;try{for(let Y of["height","depth","wall","base","acrylic","clearance","ledge","ledgeT","bedX","bedY","bedZ"])if(!Number.isFinite(e[Y])||e[Y]<=0)throw Error("Enter a positive number for every dimension.");if(!["print","cnc","laser"].includes(e.faceMethod))throw Error("Choose a valid face manufacturing method.");if(!["flush","recessed"].includes(e.facePosition))throw Error("Choose flush or recessed face placement.");if(!Number.isFinite(e.faceRecess)||!e._rimBorder&&(e.faceRecess<0||e.facePosition==="recessed"&&e.faceRecess<.1)||e.faceRecess>100)throw Error("Face recess must be between 0.1 and 100 mm.");if(e.acrylic<(e.faceMethod==="print"?.4:1))throw Error("Face thickness is below the supported minimum.");if(e.height<20||e.height>1e3||e.depth>300||e.wall<.8||e.base<.8||e.acrylic>10||e.wall>10||e.base>10||e.clearance>1||e.ledge>8||e.ledgeT>6)throw Error("One or more dimensions are outside this prototype\u2019s supported range.");if(e.faceMethod==="cnc"&&(!Number.isFinite(e.bitDiameter)||e.bitDiameter<.1||e.bitDiameter>25.4))throw Error("CNC bit diameter must be between 0.1 and 25.4 mm.");if(a){for(let[et,H,K]of[["frontDepth",2,100],["frontWall",.8,3],["frontFit",0,.6],["frontChamfer",0,.8]])if(!Number.isFinite(e[et])||e[et]<H||e[et]>K)throw Object.assign(Error(`Push-in front: ${et} must be ${H}\u2013${K} mm.`),{field:et});if(e.frontWall-2*e.frontChamfer<.4-1e-6)throw Object.assign(Error("Push-in front: chamfer leaves less than 0.4 mm at the collar tip. Reduce chamfer or increase collar wall."),{field:"frontChamfer"});if(!["inner","outer"].includes(e.frontFlange)||!["body","face"].includes(e.frontFlangeColour))throw Error("Choose a valid flange position and colour.");let Y=p-(e.frontFlange==="inner"?e.base+2:e.layout==="connected"?e.base+1:0);if(p<=e.base+1)throw Object.assign(Error("Increase body depth to leave space above the back."),{field:"depth"});if(e.frontDepth>Y+1e-6)throw Object.assign(Error(`Flange is too deep. Use at most ${Math.max(0,Y).toFixed(1)} mm, or increase body depth.${e.frontFlange==="inner"?" Keep 2 mm clear of the back.":""}`),{field:"frontDepth"})}if(d){for(let[Y,et,H]of[["capGap",e.capRetention==="friction"?-.15:.05,e.capRetention==="friction"?.4:1],["capWall",.8,5],["capSkirt",3,u?300:30],["capLip",.8,5],["capOverlap",.5,5]])if(!Number.isFinite(e[Y])||e[Y]<et||e[Y]>H)throw Error("Check trim-cap dimensions: slip gap 0.05\u20131 mm or friction allowance -0.15\u20130.4 mm; wall/lip 0.8\u20135, skirt 3\u201330, overlap 0.5\u20135 mm.");if(e.capSkirt>p-(u?0:e.base)+1e-5)throw Error("Trim skirt is deeper than the available body wall. Shorten the skirt or increase total depth.")}if(e.layout==="connected"){if(e.assemblyMargin=e.assemblyMargin??3,e.assemblyThickness=e.assemblyThickness??2,!Number.isFinite(e.assemblyMargin)||e.assemblyMargin<1||e.assemblyMargin>20||!Number.isFinite(e.assemblyThickness)||e.assemblyThickness<1||e.assemblyThickness>8)throw Error("Backing margin must be 1\u201320 mm; frame thickness 1\u20138 mm.");if(s&&e.base+e.assemblyThickness>=e.depth-e.acrylic)throw Error("The shared rear frame reaches the face. Increase total depth.");if(d&&e.capSkirt>=p-e.base)throw Error("Leave clearance between the trim skirt and shared backing. Shorten the skirt.")}if(c||h){if(e.backFit=e.backFit??0,e.collarDepth=e.collarDepth??4,e.collarWall=e.collarWall??1.2,!Number.isFinite(e.backFit)||e.backFit<-.15||e.backFit>.4||!Number.isFinite(e.collarDepth)||e.collarDepth<2||e.collarDepth>10||!Number.isFinite(e.collarWall)||e.collarWall<.8||e.collarWall>3)throw Error("Back fit must be -0.15\u20130.4 mm, collar depth 2\u201310 mm, and collar wall 0.8\u20133 mm.");if(e.depth-e.base-e.acrylic-e.collarDepth-(h?e.ledgeT:0)<(h?6:2))throw Error(h?"Leave at least 6 mm between the tray collar and face. Increase depth or shorten the collar.":"Leave at least 2 mm between the rear collar and integrated face.")}if(s&&!c){if(e.pilotDiameter=e.pilotDiameter??2.5,e.screwClearance=e.screwClearance??3.4,e.pilotDepth=e.pilotDepth??8,e.bossLength=e.bossLength??10,e.bossFaceGap=e.bossFaceGap??6,!Number.isFinite(e.bossLength)||e.bossLength<5||e.bossLength>40||!Number.isFinite(e.bossFaceGap)||e.bossFaceGap<2||e.bossFaceGap>50||e.bossLength<e.pilotDepth+2)throw Error("Boss length must be 5\u201340 mm and at least 2 mm longer than the blind pilot. Face gap must be 2\u201350 mm.");if(e.depth-e.base-e.acrylic-e.bossLength-e.bossDiameter<e.bossFaceGap)throw Error("Rear bosses and their ramps need more clearance behind the face. Increase total depth, shorten bosses / pilots, or reduce post diameter.");if(!Number.isInteger(e.screwCount)||e.screwCount<2||e.screwCount>8)throw Error("Use 2\u20138 screws per separate body.");if(!Number.isFinite(e.bossDiameter)||e.bossDiameter<5||e.bossDiameter>20||!Number.isFinite(e.pilotDiameter)||e.pilotDiameter<1||e.pilotDiameter>8||!Number.isFinite(e.screwClearance)||e.screwClearance<=e.pilotDiameter||e.screwClearance>10||e.bossDiameter<e.screwClearance+3)throw Error("Check screw dimensions: clearance must exceed pilot diameter, with at least 1.5 mm of post material around the clearance hole.");if(!Number.isFinite(e.pilotDepth)||e.pilotDepth<3||e.pilotDepth>30||e.pilotDepth>e.depth-e.base-e.acrylic-2)throw Error("Pilot depth must be 3\u201330 mm and leave at least 2 mm before the integrated face. Increase total depth or shorten the pilot.")}if(!s&&!a&&p<=e.base+v+e.ledgeT+e.faceRecess+1)throw Error("Increase body depth or reduce recess / face thickness: leave more than 1 mm between the back and the underside of the ledge.");let w=Ni(e,p,v);if(!s&&!h&&!a&&w.start<e.base-1e-5)throw Object.assign(Error(`The earlier-starting face support needs ${w.rise.toFixed(1)} mm below the ledge. Increase body depth to at least ${(e.depth+e.base-w.start).toFixed(1)} mm, or reduce ledge width, border, face thickness or recess.`),{field:"depth"});if(e.clearance>=e.ledge*.75)throw Error("Reduce face clearance or increase the ledge width to support the acrylic.");if(e.layout==="merged"){let Y=mr(n,r,e);t=yr(Y.polygons,e.textRotation??0),e.mergeReport=Y.report}if(!t.length)throw Error("Add text or closed filled SVG outlines.");let S=t.flat();if(S.length>4e4)throw Error("Artwork is too complex for this beta. Simplify the paths first.");let P=Math.min(...S.map(Y=>Y[0])),R=Math.max(...S.map(Y=>Y[0])),C=Math.min(...S.map(Y=>Y[1])),A=Math.max(...S.map(Y=>Y[1]));if(A-C<.001)throw Error("Artwork has no measurable height.");let N=e.height/(A-C),F=t.map(Y=>Y.map(([et,H])=>[(et-P)*N,(H-C)*N])),E=m(new b(F,"NonZero"));Qe(e)&&(E=m(E.simplify(Qe(e))));let O=E.decompose().map(m);if(!O.length||O.length>40)throw Error("Use artwork with 1\u201340 separate filled components.");O.sort((Y,et)=>Math.min(...Y.toPolygons().flat().map(H=>H[0]))-Math.min(...et.toPolygons().flat().map(H=>H[0])));let L=[],U=[],k=pa(n,O,e,a?p-e.frontDepth-1:w.start-1,m);if(k?(e.bodyTaper=k.info,U.push((k.info.limited?`Taper reduced from ${k.info.requestedAngle}\xB0 to ${k.info.angle}\xB0 to preserve openings and spacing. `:"")+`Tapered body: ${k.info.angle}\xB0 from vertical; the front fitting stays straight. Print back-down. Inspect inner and outer overhangs in the slicer and test one part before production.`)):delete e.bodyTaper,!s&&!h&&!a&&U.push(`Face support starts ${w.start.toFixed(2)} mm above the back and rises ${w.rise.toFixed(2)} mm to the ledge underside. Straight-wall slope: 63.4\xB0 from the plate; production steps at most 0.1 mm. Print body back-down. Check corners and sliced layers with your nozzle, layer height and material; support-free printing is not guaranteed.`),e.layout==="merged"){if(O.length!==1)throw Error("Letters are still disconnected. Adjust the merge or choose a connected font.");U.push("Merged outlines: inspect readability and counters. Face insets can split at narrow joins; check the face-piece warnings.")}(h||c||d&&e.capRetention==="friction")&&U.push("Prototype friction fit: 0 mm is nominal line-to-line; negative allowance adds interference, positive adds clearance. Calibrate in the intended filament before production. No snap latch or retention-load rating."),s&&!c&&U.push("Experimental screw fit: holes are unthreaded. Test your screw, pilot diameter and filament on one part. Short rear bosses and wall ramps leave a gap behind the face; actual illumination still needs testing."),u&&U.push("Full-depth outer sleeve: covers the exterior sides down to the back. Bond the diffuser to the sleeve lip only. Calibrate the friction skirt; do not glue the frame to the body. Counter rings must be bonded to the same face."),h&&U.push("Rear-tray service: insert the face from the rear and bond it to the front lip. The shell lifts off the locating tray. Fit and retention are untested; automatic mounting holes are not included. Add rear wire entries in the LED & wire editor.");let Z=Y=>{if(Y.status()!=="NoError"||Y.isEmpty()||Y.volume()<=0)throw Error("A valid closed solid could not be generated. Try simpler artwork or smaller walls.");let et=m(new n.Manifold(Y.getMesh()));if(et.status()!=="NoError")throw Error("Mesh precision could not preserve this shape. Simplify the artwork.");let H=et.decompose().map(m),K=H.filter(z=>z.volume()>1e-6);if(!K.length)throw Error("The generated part has no solid volume.");let J=(K.length===H.length?et:K.length===1?K[0]:m(n.Manifold.compose(K))).getMesh();return{vertices:new Float32Array(J.vertProperties),indices:new Uint32Array(J.triVerts),stride:J.numProp}};a&&U.push("Flanged face: print body back-down and front face-down with collar upwards. Fit allowance is per side; zero is nominal contact, positive adds clearance. No snap latch or guaranteed retention. Calibrate fit and test removal and edge brightness before production.");for(let Y=0;Y<O.length;Y++){if(a){L.push(ma(n,O[Y],e,m,Z,Y,U,k));continue}if(h){L.push(ga(n,O[Y],e,m,Z,Y,U));continue}if(s){let Ut=(c?va:_a)(n,O[Y],e,m,Z,Y);(!(Ut.width<=e.bedX&&Ut.height<=e.bedY||Ut.height<=e.bedX&&Ut.width<=e.bedY)||e.depth-e.base>e.bedZ||e.base+(c?e.collarDepth:0)>e.bedZ)&&U.push(`Part ${Y+1} exceeds the entered build volume. Resize or split it before printing.`),L.push(Ut);continue}let et=O[Y],H=m(et.offset(-e.wall,"Miter",2)),K=e._faceOutlines?m(m(new b(e._faceOutlines,"NonZero")).intersect(et)):H,lt=m(e._faceOutlines?K.offset(-e.ledge,"Miter",2):et.offset(-(e.wall+e.ledge),"Miter",2)),J=m(e._faceOutlines?K.offset(-e.clearance,"Miter",2):et.offset(-(e.wall+e.clearance),"Miter",2));if(H.isEmpty()||J.isEmpty()||lt.isEmpty())throw Error(`Part ${Y+1} is too narrow for these walls and ledge. Increase artwork height or reduce wall / ledge width.`);let z=J.decompose().map(m);z.length>1&&U.push(`Part ${Y+1}: narrow strokes split the face into ${z.length} pieces. Review before fabrication.`);let B=m(H.offset(e.wall,"Miter",2));m(et.subtract(B)).area()/et.area()>.015&&U.push(`Part ${Y+1}: thin details lose interior space. Inspect the model.`);let q=m(et.extrude(p)),nt=m(H.extrude(p)),bt=m(nt.translate([0,0,e.base])),Tt=k?k.shell(Y,p):m(q.subtract(bt)),St=m(H.subtract(lt)),Lt=m(St.extrude(e.ledgeT)),Wt=m(Lt.translate([0,0,p-e.faceRecess-v-e.ledgeT])),Yt=[Tt,Wt],Ct=w.run;if(e._rimBorder){let Ut=m(et.subtract(K));Yt.push(m(m(Ut.extrude(v+e.faceRecess)).translate([0,0,p-e.faceRecess-v])));let wt=m(et.subtract(H));for(let Ot of Ut.decompose().map(m))m(Ot.intersect(wt)).area()<.001&&Yt.push(m(Ot.extrude(p)))}let dt=Math.ceil(w.rise/(e._preview?.5:.1)),ht=w.rise/dt,xt=Ct/dt,Pt=w.start;for(let Ut=1;Ut<=dt;Ut++){let wt=e._rimBorder?m(lt.offset(Ct-Ut*xt,"Miter",2)):m(et.offset(-(e.wall+Ut*xt),"Miter",2)),Ot=m(H.subtract(wt)),Nt=m(m(Ot.extrude(ht)).translate([0,0,Pt+(Ut-1)*ht]));Yt.push(Nt)}let gt=m(n.Manifold.union(Yt)),ut=null,pt=0;if(e.faceMethod==="cnc"){let Ut=e.bitDiameter/2,wt=m(J.offset(Ut,"Round",2,64)),Ot=m(wt.offset(-Ut,"Round",2,64)),Nt=m(Ot.subtract(J)),kt=m(Nt.simplify(.002)),Zt=m(kt.offset(-.015,"Round",2,32)),jt=m(Zt.offset(.015,"Round",2,32)),Ht=m(jt.intersect(Nt)),$t=m(Ht.simplify(.002));if(pt=$t.area(),pt>.02){let ce=m($t.extrude(.1));ut=Z(ce),U.push(`Part ${Y+1}: \xD8${e.bitDiameter} mm bit leaves at least a ${Ut.toFixed(3)} mm inside radius. Orange regions show possible excess material (${pt.toFixed(2)} mm\xB2); the nominal face may not fit. Use a smaller cutter or revise the corner/slot geometry in CAD/CAM.`)}}let Bt=m(J.extrude(e.acrylic));if(e._insetSkirtDepth){let Ut=m(J.offset(-e.insetSkirtWall,"Miter",2)),wt=m(J.subtract(Ut));if(Bt=m(Bt.add(m(m(wt.extrude(e._insetSkirtDepth)).translate([0,0,-e._insetSkirtDepth])))),!e._preview){let Ot=m(Bt.translate([0,0,p-e.faceRecess-e.acrylic]));if(m(Ot.intersect(gt)).volume()>.01)throw Error("The face skirt intersects the body. Increase fit clearance or simplify narrow artwork.")}}let Jt=gt.boundingBox(),At=Jt.max[0]-Jt.min[0],ne=Jt.max[1]-Jt.min[1];(!(At<=e.bedX&&ne<=e.bedY||ne<=e.bedX&&At<=e.bedY)||p>e.bedZ)&&U.push(`Part ${Y+1} (${At.toFixed(1)} \xD7 ${ne.toFixed(1)} \xD7 ${p} mm) does not fit at 0\xB0 or 90\xB0. Try diagonal rotation in Download \u2192 Arrange print plates before splitting; also check build height.`);let ee=d?xa(n,et,e,m,Z,Y):{};d&&(ee.capPieces>1&&U.push(`Part ${Y+1}: trim cap has ${ee.capPieces} separate ring pieces, including counter rings. Print and fit every piece.`),(!(ee.capWidth<=e.bedX&&ee.capHeight<=e.bedY||ee.capHeight<=e.bedX&&ee.capWidth<=e.bedY)||e.capSkirt+e.capLip>e.bedZ)&&U.push(`Part ${Y+1}: trim cap exceeds the entered print volume.`)),L.push({...ee,name:`part-${String(Y+1).padStart(2,"0")}`,body:Z(gt),face:Z(Bt),facePolygons:J.toPolygons(),origin:[Jt.min[0],Jt.min[1]],width:At,height:ne,volume:gt.volume(),cncRisk:ut,cncRiskArea:pt})}if(a&&e.frontFlange==="outer")for(let Y=0;Y<L.length;Y++)for(let et=Y+1;et<L.length;et++){let H=m(new b(L[Y].facePolygons,"NonZero")),K=m(new b(L[et].facePolygons,"NonZero"));if(m(H.intersect(K)).area()>.001)throw Object.assign(Error(`Outside flanges on parts ${Y+1} and ${et+1} overlap. Increase letter spacing, move the shapes apart, or choose Inside flange.`),{field:"frontFlange"})}if(d){e.capRetention==="slip"&&U.push("Trim cap is a clearance slip fit. Bond acrylic to the lip with a compatible adhesive and secure the cap to the body with suitable adhesive or shop-drilled retaining screws. No locking features are generated.");for(let Y=0;Y<L.length;Y++)for(let et=Y+1;et<L.length;et++){let H=m(new b(L[Y].capPolygons,"NonZero")),K=m(new b(L[et].capPolygons,"NonZero"));m(H.intersect(K)).area()>.01&&U.push(`Trim caps ${Y+1} and ${et+1} overlap in the artwork layout. Increase letter spacing before assembly; arrange export parts separately for printing.`)}}let tt=null;e.layout==="connected"&&(tt=ya(n,L,O,e,(R-P)*N,e.height,m,Z),tt.width<=e.bedX&&tt.height<=e.bedY||tt.height<=e.bedX&&tt.width<=e.bedY||U.push(`Connected lettering (${tt.width.toFixed(1)} \xD7 ${tt.height.toFixed(1)} mm) exceeds the entered bed. Resize or split before printing.`),s&&U.push("Connected integrated-face bodies have a shared rear frame. Face-down printing may require bridging/supports under the frame; inspect the slicer."));let Q=L.reduce((Y,et)=>({minX:Math.min(Y.minX,et.origin[0]),minY:Math.min(Y.minY,et.origin[1]),maxX:Math.max(Y.maxX,et.origin[0]+et.width),maxY:Math.max(Y.maxY,et.origin[1]+et.height)}),{minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0});if(a)for(let Y of L){let et=Y.footprint;Q.minX=Math.min(Q.minX,et.minX),Q.minY=Math.min(Q.minY,et.minY),Q.maxX=Math.max(Q.maxX,et.maxX),Q.maxY=Math.max(Q.maxY,et.maxY)}let it=(u||h||a)&&!e.calibration&&!e.availabilityCheck&&!e._preview?En(n,[[[0,0],[40,0],[40,40],[0,40]]],{...e,height:40,layout:"individual",mergeReport:void 0,letterEdits:[],calibration:!0}):null;return{artworkPolygons:e.layout==="merged"?F:void 0,artworkTransform:{scale:N,x:-P*N,y:-C*N},fitSample:it,assembly:tt,bodyDepth:p,parts:L,width:k||a?Q.maxX-Q.minX:(R-P)*N,height:k||a?Q.maxY-Q.minY:e.height,depth:e.depth,volume:tt?.volume??L.reduce((Y,et)=>Y+et.volume,0),warnings:U,params:e}}finally{y.reverse().forEach(w=>w.delete())}}function ph(n){let t=[];return n.construction==="pushin"&&t.push({key:"frontFit",label:"Face flange to body",values:[0,.1,.2,.3,.4]}),["integrated","pushin"].includes(n.construction)||t.push({key:"clearance",label:"Face to body",values:[.1,.2,.3,.4,.5]}),["frontframe","trimcap"].includes(n.construction)&&t.push(n.construction==="frontframe"||n.capRetention==="friction"?{key:"capFit",label:"Frame / cap to body",values:[0,.1,.2,.3,.4]}:{key:"capGap",label:"Slip cap to body",values:[.1,.2,.3,.4,.5]}),(n.construction==="reartray"||n.construction==="integrated"&&n.backFastening==="friction")&&t.push({key:"backFit",label:"Rear collar to body",values:[0,.1,.2,.3,.4]}),t}function mh(n,t){let e=t.projectMode==="lightbox";return En(n,[[[0,0],[20,0],[20,20],[0,20]]],{...t,height:e?20:40,boxShape:"rectangle",boxSizing:"auto",boxMargin:10,boxRadius:0,boxAlign:"center",layout:"individual",mergeReport:void 0,letterEdits:[],calibration:!0})}function ba(n,t,e){let r=ph(t).find(c=>c.key===e);if(!r)throw Error("This construction has no matching fit test.");let s=[],a=[];for(let[c,h]of r.values.entries()){let u=`${c+1}-${e}-${h.toFixed(2)}mm`;try{s.push({label:u,value:h,result:mh(n,{...t,[e]:h})})}catch(d){a.push({label:u,value:h,reason:d.message})}}if(!s.length)throw Error("These settings cannot form a 40 mm test: "+a[0].reason);return{target:r,samples:s,skipped:a}}var gh={height:180,depth:28,wall:2,front:2.4,gap:19.05,fit:.25,screw:3.4,standoffDiameter:11,edgeClearance:4,mountCount:3,colour:"#34485e",bedX:256,bedY:256,bedZ:256,mounts:null,wires:null,wireDiameter:6,ledWidth:7,ledThickness:2,reflector:"auto",reflectorThickness:1.2,reflectorFit:.25},vh={height:[40,1e3,1],depth:[14,80,.5],wall:[1.2,5,.1],front:[1.6,6,.2],gap:[12.7,25.4,.001],fit:[.1,.5,.05],screw:[3,4.5,.1],standoffDiameter:[10,16,.5],edgeClearance:[3,12,.5],mountCount:[3,6,1],wireDiameter:[3,12,.5],bedX:[80,1e3,1],bedY:[80,1e3,1],bedZ:[80,1e3,1],ledWidth:[4,12,.5],ledThickness:[1,6,.1],reflectorThickness:[.8,2,.2],reflectorFit:[.15,.5,.05]};function Ma(n={}){let t={...gh,...n};for(let[e,[r,s]]of Object.entries(vh))if(!Number.isFinite(t[e])||t[e]<r||t[e]>s)throw Error(`${e}: use ${r}\u2013${s}${e==="mountCount"?" mounts per connected piece":" mm"}.`);if(t.standoffDiameter<t.screw+2.8+3)throw Error(`Standoff diameter must be at least ${(t.screw+5.8).toFixed(1)} mm for this screw bore (1.5 mm radial wall).`);if(!Number.isInteger(t.mountCount))throw Error("Use a whole number of mounts.");if(!/^#[0-9a-f]{6}$/i.test(t.colour))throw Error("Choose a valid body colour.");return t}function Bs(n){let t=n.screw+2.8,e=t+2.6,r=e+2.4;return{travel:6,bore:t,neck:e,head:r,spacer:n.standoffDiameter,bossRadius:r/2+n.fit+1.6,headHeight:4.2,cavity:4.6,ramp:(r-e)/2}}function yh(n){if(!["auto","always","off"].includes(n.reflector))throw Error("Choose Automatic, Always or Off for the white reflector.");return n.reflector==="always"||n.reflector==="auto"&&[1,3,5].some(t=>parseInt(n.colour.slice(t,t+2),16)<230)}function ks(n){let t=Bs(n),e=yh(n),r=e?n.reflectorFit+n.reflectorThickness:0;return{reflector:e,lining:r,ledSideClearance:.8,stripStroke:2*(n.wall+r+.8)+n.ledWidth,mountWidth:2*(Math.max(t.bossRadius,t.spacer/2,t.head/2)+n.edgeClearance),mountLength:2*(Math.max(t.bossRadius,t.spacer/2,t.head/2)+n.edgeClearance)+t.travel,minimumDepth:Math.max(14,n.front+(e?n.reflectorThickness:0)+n.ledThickness+2,n.front+t.cavity+1.2)}}var zs=(n,t,e,r=40)=>Array.from({length:r},(s,a)=>[n+e*Math.cos(a*2*Math.PI/r),t+e*Math.sin(a*2*Math.PI/r)]);function Vs(n,t,e={},r={}){let s=Ma(e),a=Bs(s),c=ks(s),h=[],u=S=>(h.push(S),S),{CrossSection:d,Manifold:p}=n,v=S=>u(new d(S,"NonZero")),y=S=>{if(S.status()!=="NoError"||S.isEmpty())throw Error("The halo geometry could not form a closed printable solid.");let P=S.getMesh();return{vertices:new Float32Array(P.vertProperties),indices:new Uint32Array(P.triVerts),stride:P.numProp}},m=(S,P,R)=>u(d.hull([v([zs(S,P,R)]),v([zs(S,P-a.travel,R)])])),b=(S,P,R=P,C=0,A=0,N=0)=>u(u(p.cylinder(S,P,R,48)).translate([A,N,C])),w=(S,P,R,C,A,N)=>u(p.hull([b(S,P,R,C,A,N),b(S,P,R,C,A,N-a.travel)]));try{if(!Array.isArray(t)||!t.length||t.reduce((z,B)=>z+B.length,0)>4e4||t.some(z=>z.some(B=>B.length!==2||B.some(j=>!Number.isFinite(j)||Math.abs(j)>1e6))))throw Error("Use valid closed text or SVG outlines with at most 40,000 points.");let S=t.flat(),P=Math.min(...S.map(z=>z[0])),R=Math.min(...S.map(z=>z[1])),C=Math.max(...S.map(z=>z[1]));if(C-R<.001)throw Error("This artwork has no printable height.");let A=s.height/(C-R),N=v(t.map(z=>z.map(([B,j])=>[(B-P)*A,(j-R)*A]))),F=N.bounds(),E=N.decompose().map(u).sort((z,B)=>z.bounds().min[0]-B.bounds().min[0]||z.bounds().min[1]-B.bounds().min[1]);if(E.length>24)throw Error("Use at most 24 connected pieces for a halo sign. Join small details in your artwork first.");let O=[],L=[],U=[],k=[],Z=[],tt=[],Q=[];s.depth<c.minimumDepth&&tt.push(`Body depth must be at least ${c.minimumDepth.toFixed(1)} mm for the front, reflector, LED thickness and 2 mm rear clearance.`);let it=(z,B)=>{if(!Array.isArray(z)||z.length>200||z.some(j=>!j||typeof j.part!="string"||!Number.isFinite(j.x)||!Number.isFinite(j.y)))throw Error(`Invalid ${B} positions.`)};s.mounts!==null&&it(s.mounts,"mount"),s.wires!==null&&it(s.wires,"wire");for(let z=0;z<E.length;z++){let B=E[z],j="H"+String(z+1).padStart(2,"0"),q=B.bounds(),nt=u(B.offset(-s.wall,"Round",2,32)),bt=B.toPolygons();nt.isEmpty()&&tt.push(`${j}: no LED cavity remains. Enlarge the artwork or reduce the wall thickness.`);let Tt=u(B.offset(-s.edgeClearance,"Round",2,48)),St=Math.max(a.bossRadius,a.spacer/2,a.head/2),Lt=(wt,Ot)=>{let kt=m(wt,Ot,St).subtract(Tt),Zt=kt.area()<1e-4;return kt.delete(),Zt},Wt=(wt,Ot)=>{let Nt=1/0;for(let kt of bt)for(let Zt=0;Zt<kt.length;Zt++){let jt=kt[Zt],Ht=kt[(Zt+1)%kt.length],$t=Ht[0]-jt[0],ce=Ht[1]-jt[1],Qt=Math.max(0,Math.min(1,((wt-jt[0])*$t+(Ot-jt[1])*ce)/($t*$t+ce*ce||1)));Nt=Math.min(Nt,Math.hypot(wt-jt[0]-Qt*$t,Ot-jt[1]-Qt*ce))}return Nt},Yt=(wt,Ot)=>Math.min(Wt(wt,Ot),Wt(wt,Ot-a.travel/2),Wt(wt,Ot-a.travel))-St,Ct=s.mounts?.filter(wt=>wt.part===j).map(wt=>({part:j,x:wt.x,y:wt.y}));if(!Ct){let wt=Math.hypot(q.max[0]-q.min[0],q.max[1]-q.min[1]),Ot=[],Nt=Math.max(3,Math.sqrt((q.max[0]-q.min[0])*(q.max[1]-q.min[1])/1500)),kt=u(B.offset(-St-s.edgeClearance-.1,"Round",2,48)).toPolygons(),Zt=(jt,Ht)=>{let $t=!1;for(let ce of kt)for(let Qt=0,Ae=ce.length-1;Qt<ce.length;Ae=Qt++){let Xt=ce[Qt],Ee=ce[Ae];Xt[1]>Ht!=Ee[1]>Ht&&jt<(Ee[0]-Xt[0])*(Ht-Xt[1])/(Ee[1]-Xt[1])+Xt[0]&&($t=!$t)}return $t};for(let jt=q.min[1]+St+s.edgeClearance+a.travel;jt<=q.max[1]-St-s.edgeClearance;jt+=Nt)for(let Ht=q.min[0]+St+s.edgeClearance;Ht<=q.max[0]-St-s.edgeClearance;Ht+=Nt)Zt(Ht,jt)&&Zt(Ht,jt-a.travel)&&Zt(Ht,jt-a.travel/2)&&Ot.push({part:j,x:Ht,y:jt,clearance:Yt(Ht,jt)});for(Ct=[];Ct.length<s.mountCount&&Ot.length;){Ot.sort((Ht,$t)=>{let ce=Qt=>{let Ae=Ct.length?Math.min(...Ct.map(Ue=>Math.hypot(Qt.x-Ue.x,Qt.y-Ue.y))):0,Xt=Ct[0],Ee=Ct[1],Me=Ct.length===2?Math.abs((Ee.x-Xt.x)*(Qt.y-Xt.y)-(Ee.y-Xt.y)*(Qt.x-Xt.x))/(Math.hypot(Ee.x-Xt.x,Ee.y-Xt.y)||1):0;return Qt.clearance+(Ct.length?Math.min(Ae,wt*.6)*.12:0)+Me*.6};return ce($t)-ce(Ht)});let jt=!1;for(;Ot.length;){let Ht=Ot.shift();if(!(Ct.some($t=>Math.hypot(Ht.x-$t.x,Ht.y-$t.y)<a.bossRadius*2+a.travel+2)||!Lt(Ht.x,Ht.y))){Ct.push(Ht),jt=!0;break}}if(!jt)break}}if(Ct.length<3&&tt.push(`${j}: needs at least three mounting sockets. Enlarge this piece or use a broader/connected font. At this ${s.edgeClearance} mm edge clearance, the mounting envelope needs at least ${(2*(St+s.edgeClearance)).toFixed(1)} mm across, and more at corners. Reduce the clearance/diameter or enlarge the artwork.`),Ct.length>=3){let wt=0;for(let Ot=0;Ot<Ct.length-2;Ot++)for(let Nt=Ot+1;Nt<Ct.length-1;Nt++)for(let kt=Nt+1;kt<Ct.length;kt++){let Zt=Ct[Ot],jt=Ct[Nt],Ht=Ct[kt];wt=Math.max(wt,Math.abs((jt.x-Zt.x)*(Ht.y-Zt.y)-(jt.y-Zt.y)*(Ht.x-Zt.x))/(Math.hypot(jt.x-Zt.x,jt.y-Zt.y)||1))}wt<a.spacer*.5&&Z.push(`${j}: the mounts lie in a narrow line. Three mounts alone do not prevent rocking; spread them sideways where the shape permits and verify the installed stability.`)}Ct.length>8&&tt.push(`${j}: use at most eight mounts.`);let dt=[],ht=[],xt=[];Ct.forEach((wt,Ot)=>{if(wt.id=`${j}-M${Ot+1}`,wt.valid=Lt(wt.x,wt.y)&&!Ct.some((jt,Ht)=>Ht<Ot&&Math.hypot(jt.x-wt.x,jt.y-wt.y)<a.bossRadius*2+a.travel+1),wt.valid||tt.push(`${wt.id}: move the socket at least ${s.edgeClearance} mm from all letter edges and counters, clear of other sockets.`),O.push(wt),!wt.valid)return;let Nt=m(wt.x,wt.y,a.bossRadius);if(xt.push(Nt),r.fitOnly)return;dt.push(u(Nt.extrude(s.depth-s.front+.1)));let kt=a.neck/2+s.fit,Zt=a.head/2+s.fit;ht.push(w(a.ramp,kt,Zt,0,wt.x,wt.y),w(a.cavity-a.ramp,Zt,Zt,a.ramp,wt.x,wt.y),b(a.cavity+.2,Zt,Zt,-.1,wt.x,wt.y-a.travel))});let Pt=nt;for(let wt of xt)Pt=u(Pt.subtract(wt));let gt=c.lining?u(Pt.offset(-c.lining,"Round",2,48)):Pt,ut=u(gt.offset(-(s.ledWidth/2+c.ledSideClearance),"Round",2,48)),pt=ut.decompose().map(u),Bt=pt.filter(wt=>{let Ot=wt.bounds();return Math.max(Ot.max[0]-Ot.min[0],Ot.max[1]-Ot.min[1])>=s.ledWidth});if(Bt.length||tt.push(`${j}: not enough clear space for a ${s.ledWidth} mm LED strip beside the sockets${c.reflector?" and white reflector":""}. Enlarge the artwork, choose a broader font or move the mounts.`),Bt.length>1&&Z.push(`${j}: strip-width space is split into ${Bt.length} regions by narrow strokes or sockets. You may need separate strip pieces and wire links. The app has not planned a continuous LED route.`),!ut.isEmpty()){let wt=u(ut.offset(s.ledWidth/2+c.ledSideClearance,"Round",2,48));u(gt.subtract(wt)).area()>Math.max(10,gt.area()*.12)&&Z.push(`${j}: some tips or narrow strokes do not accept the full strip width. Inspect LED placement before printing; this fit check does not predict dark spots.`)}if(Q.push({part:j,clearRegions:Bt.length,stripWidth:s.ledWidth}),r.fitOnly){U.push({name:j,outline:bt});continue}let Jt=u(u(B.extrude(s.front)).translate([0,0,s.depth-s.front])),At=u(u(B.subtract(nt)).extrude(s.depth)),ee=u(Jt.add(At));for(let wt of dt)ee=u(ee.add(wt));for(let wt of ht)ee=u(ee.subtract(wt));if(U.push({name:j,body:y(ee),colour:s.colour,outline:bt,volume:ee.volume()}),c.reflector&&!Pt.isEmpty()){let wt=u(Pt.offset(-s.reflectorFit,"Round",2,48)),Ot=wt.decompose().map(u),Nt=s.depth-s.front;for(let kt=0;kt<Ot.length;kt++){let Zt=Ot[kt],jt=u(u(Zt.extrude(s.reflectorThickness)).translate([0,0,Nt-s.reflectorThickness])),Ht=u(Zt.offset(-s.reflectorThickness,"Round",2,48)),$t=u(Zt.subtract(Ht)),ce=u(u($t.extrude(Math.max(.1,Nt-.6))).translate([0,0,.6])),Qt=u(jt.add(ce));k.push({name:`${j}-white-reflector-${kt+1}`,part:j,body:y(Qt),print:xr(y(Qt),Nt,F.max[1]),colour:"#ffffff",volume:Qt.volume()})}}let Ut=s.wires?.filter(wt=>wt.part===j)??[];for(let wt=0;wt<Ut.length;wt++){let Ot={...Ut[wt],id:`${j}-W${wt+1}`},Nt=v([zs(Ot.x,Ot.y,s.wireDiameter/2+1)]);Ot.valid=u(Nt.subtract(nt)).area()<.001&&!Ct.some(kt=>u(Nt.intersect(m(kt.x,kt.y,a.bossRadius))).area()>.001),Ot.valid||tt.push(`${Ot.id}: place the wall wire exit in the open cavity, clear of sockets.`),L.push(Ot)}}if((s.mounts?.some(z=>!U.some(B=>B.name===z.part))||s.wires?.some(z=>!U.some(B=>B.name===z.part)))&&tt.push("The artwork changed. Reset mounting positions for this design."),r.fitOnly)return{exportBlocked:tt.length?tt.join(" "):null};let Y=u(u(b(s.gap,a.spacer/2,a.spacer/2,-s.gap).add(b(a.ramp,a.neck/2,a.head/2,0))).add(b(a.headHeight-a.ramp,a.head/2,a.head/2,a.ramp))),et=u(u(Y.subtract(b(s.gap+a.headHeight+2,s.screw/2,s.screw/2,-s.gap-1))).subtract(b(s.gap+a.headHeight-3+1,a.bore/2,a.bore/2,-s.gap+3))),H=y(et),K=y(u(et.translate([0,0,s.gap]))),lt=O.filter(z=>z.valid).map(z=>({name:z.id+"-standoff",mount:z,body:H,print:K,colour:"#b6c4d4"}));c.reflector&&Z.push(`White reflector: ${k.length} separate insert(s), ${s.reflectorThickness} mm walls/floor, ${s.reflectorFit} mm fit clearance per side. Print in opaque matte white, floor-down with sides upward. Dry-fit around every socket, secure with a compatible thin adhesive, then attach LEDs facing the wall. The insert has no snap retention. Filament colour alone does not specify reflectance or heat resistance.`),Z.push("Prototype indoor lift-off mounting: fit-test and verify the fixing for the actual letter weight before installation. No load rating. Lift 6 mm to release; this is not an anti-lift lock.",`Print the letter face-down and standoffs wall-side-down. Use opaque body filament and inspect the slice for thin walls. Socket clearance is ${s.fit} mm per side.`,`Use wall screws with a ${s.screw} mm shank clearance and heads under ${a.bore.toFixed(1)} mm diameter. Choose wall anchors for the wall and load. Tighten gently; plastic can creep.`,`Standoff shaft diameter is ${a.spacer} mm. Minimum clearance is ${s.edgeClearance} mm between the full mounting envelope and every outside/counter edge. Positions favour the stroke interior; this reduces edge obstruction but does not predict or eliminate lighting shadows.`,`Wall gap is ${s.gap} mm, measured from the rear edge to the wall. Leave at least 6 mm vertical removal clearance.`,"Wire markers are holes in the WALL, not in the open-back letter. LED placement and halo brightness are not simulated. The wall colour and LED/diffuser choice affect the result.");let J=xh(n,t,s);return{halo:!0,fit:{...c,minimumHeight:J,ledChecks:Q},reflectors:k,params:{...s,projectMode:"halo"},width:F.max[0],height:F.max[1],depth:s.depth,bounds:{min:[0,0,-s.gap],max:[F.max[0],F.max[1],s.depth]},outline:N.toPolygons(),parts:U,accessories:lt,mounts:O,wires:L,dimensions:a,warnings:Z,exportBlocked:tt.length?[...new Set(tt)].join(" "):null}}finally{for(let S of h.reverse())try{S.delete()}catch{}}}var li=new Map;function xh(n,t,e){let r=ks(e),s={...e,mounts:null,wires:null,depth:Math.max(e.depth,r.minimumDepth)},a=JSON.stringify([t,e.wall,e.front,e.fit,e.screw,e.standoffDiameter,e.edgeClearance,e.mountCount,e.ledWidth,r.reflector,e.reflectorThickness,e.reflectorFit]);if(li.has(a))return li.get(a);let c=p=>!Vs(n,t,{...s,height:p},{fitOnly:!0}).exportBlocked,h=40,u=40,d=null;if(c(40))d=40;else do if(h=u,u=Math.min(1e3,Math.ceil(u*1.5)),c(u)){for(;u-h>1;){let p=Math.floor((h+u)/2);c(p)?u=p:h=p}d=u;break}while(u<1e3);return li.size>=40&&li.delete(li.keys().next().value),li.set(a,d),d}var _h={facets:"Facets",diamonds:"Diamonds"},br={..._h,waves:"Waves",fluted:"Fluted",rock:"Rock",wood:"Wood grain"};var Ws={texture:"facets",textureScale:18,textureAngle:0,textureSeed:1,printNozzle:.4,printLayer:.16},Hn=2*Math.PI,_r=n=>Math.max(0,Math.min(1,n)),me=(n,t,e)=>{let r=Math.imul(n,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};function Re(n,t,e){let r=Math.floor(n),s=Math.floor(t),a=n-r,c=t-s,h=a*a*(3-2*a),u=c*c*(3-2*c);return(1-u)*((1-h)*me(r,s,e)+h*me(r+1,s,e))+u*((1-h)*me(r,s+1,e)+h*me(r+1,s+1,e))}function bh(n,t,e){let r=e.textureAngle*Math.PI/180,s=(n*Math.cos(r)+t*Math.sin(r))/e.textureScale,a=(-n*Math.sin(r)+t*Math.cos(r))/e.textureScale,c=e.textureSeed,h=me(c,3,c)*Hn;if(e.texture==="waves")return _r(.5+.35*Math.sin(Hn*s+.5*Math.sin(Hn*.9*a)+h)+.15*Math.sin(Hn*(.62*a+.35*s)+h));if(e.texture==="fluted")return .5+.5*Math.cos(Hn*s);if(e.texture==="diamonds"){let C=A=>2*Math.abs(A-Math.floor(A)-.5);return _r((1-Math.max(C(s+a),C(s-a)))*1.2)}if(e.texture==="rock")return _r(.5*Re(s*2,a*2,c)+.32*(1-Math.abs(2*Re(s*4,a*4,c+5)-1))+.18*Re(s*8,a*8,c+13));let u=Math.floor(s/2.8),d=Math.floor(a/4),p=(u+.5)*2.8+(me(u,d,c)-.5)*.4,v=(d+.5)*4+(me(u,d,c+2)-.5)*.6,y=s-p,m=(a-v)*.48,b=Math.hypot(y,m),w=Math.pow(Math.max(0,1-(y/.8)**2-(m/.9)**2),3),S=s+.1*Math.sin(2.1*a+h)+.06*Math.sin(5.3*a)+.1*Re(s,a,c),P=.5+.5*Math.sin(Hn*3*S+h),R=.5+.5*Math.sin(Hn*5*b+h);return _r(.12+.76*Math.pow(P*(1-w)+R*w,2)+.12*Re(3*s,2*a,c))}function Sa(n,t){let e=["stone","wood"].includes(t.preset)?Math.max(.35,Math.min(1.2,t.textureScale/24)):Math.max(.2,Math.min(1,t.textureScale/32)),r=0,s=n.map(a=>{let c=Math.floor(a.min[0]/e)*e-e,h=Math.floor(a.min[1]/e)*e-e,u=Math.ceil((a.max[0]-c)/e)+1,d=Math.ceil((a.max[1]-h)/e)+1;return r+=(u+1)*(d+1)+2*(u+d)+1,{x:c,y:h,nx:u,ny:d,step:e}});if(r>14e4)throw Error("Texture is too detailed for this design. Increase Pattern size, reduce Letter height, or make fewer letters at once.");return s}function ci(n,t,e,r,s,a,c=!0){let{x:h,y:u,nx:d,ny:p,step:v}=r,y=[],m=[],b=(A,N)=>N*(d+1)+A;for(let A=0;A<=p;A++)for(let N=0;N<=d;N++){let F=h+N*v,E=u+A*v;y.push(F,E,a?a(F,E):e.depth+e.relief*bh(F,E,e))}for(let A=0;A<p;A++)for(let N=0;N<d;N++){let F=b(N,A),E=b(N+1,A),O=b(N,A+1),L=b(N+1,A+1);m.push(F,E,L,F,L,O)}let w=[];for(let A=0;A<=d;A++)w.push(b(A,0));for(let A=1;A<=p;A++)w.push(b(d,A));for(let A=d-1;A>=0;A--)w.push(b(A,p));for(let A=p-1;A>0;A--)w.push(b(0,A));let S=y.length/3;for(let A of w)y.push(y[A*3],y[A*3+1],0);let P=y.length/3;y.push(h+d*v/2,u+p*v/2,0);for(let A=0;A<w.length;A++){let N=(A+1)%w.length;m.push(w[A],S+A,S+N,w[A],S+N,w[N],P,S+N,S+A)}let R=a&&c?new Float32Array(y.length/3*4):null;if(R)for(let A=0;A<y.length/3;A++)R.set(y.slice(A*3,A*3+3),A*4),R[A*4+3]=A<(d+1)*(p+1)?1:0;let C=s(new n.Manifold(new n.Mesh({numProp:R?4:3,vertProperties:R||new Float32Array(y),triVerts:new Uint32Array(m)})));if(C.status()!=="NoError")throw Error("The surface texture could not form a closed print. Try another pattern size.");return s(C.intersect(s(t.extrude(e.depth+e.relief+.1))))}function wa(n){if(!["faceted","stone","wood"].includes(n.preset))return[];let t=[],e=n.preset==="wood"?n.textureScale/14:n.preset==="stone"?n.textureScale/18:n.texture==="facets"?n.cell/3:n.textureScale/({waves:4,fluted:4,diamonds:12,wood:12,rock:16}[n.texture]||16);return n.printLayer>n.printNozzle*.8+1e-6&&t.push("Layer height exceeds 80% of the nozzle diameter. Choose a supported printer profile; reduce the layer height for texture detail."),n.relief/n.printLayer<4&&t.push("Shallow relief: fewer than four layers span its height. Increase Raised height or use finer layers; the texture may nearly disappear."),e<n.printNozzle*2&&t.push("Fine texture: some ridges may blur or disappear with this nozzle. Increase Pattern size or use a smaller nozzle."),(["stone","wood"].includes(n.preset)||n.texture!=="facets")&&n.relief>n.textureScale*.25&&t.push("Tall, closely spaced relief may leave rough peaks or stringing. Reduce Raised height or increase Pattern size."),n.printLayer>.2&&t.push("Coarse layers can make the surface look stepped. Try a finer or variable layer-height profile on the textured region."),t}var Gs={domeRound:2,ridgeRound:.3,studDiameter:4.8,studHeight:2.4,studPitch:8,studMargin:1.2,studShiftX:0,studShiftY:0,outlineWidth:4,outlineFace:3,outlineMode:"together"},Mr=["msrounded","coiny","chewy"],Rm={tray:Mr,bubble:[...Mr,"lilitaone"],brick:["bungee","archivo","bold","anton"],outline:["pacifico","lobstertwo","cookie","leckerli","lilyscript","norican","msrounded"],ridge:["bold","archivo","righteous","anton","bebas"]};function Ta(n){let t=n.flatMap(u=>u.map((d,p)=>{let v=u[(p+1)%u.length];return{a:d,b:v,min:[Math.min(d[0],v[0]),Math.min(d[1],v[1])],max:[Math.max(d[0],v[0]),Math.max(d[1],v[1])]}}));function e(u){let d=[0,1].map(m=>Math.min(...u.map(b=>b.min[m]))),p=[0,1].map(m=>Math.max(...u.map(b=>b.max[m])));if(u.length<=12)return{min:d,max:p,segs:u};let v=p[0]-d[0]>p[1]-d[1]?0:1;u.sort((m,b)=>m.min[v]+m.max[v]-b.min[v]-b.max[v]);let y=u.length>>1;return{min:d,max:p,left:e(u.slice(0,y)),right:e(u.slice(y))}}let r=e(t),s=(u,d,p)=>Math.max(u.min[0]-d,0,d-u.max[0])**2+Math.max(u.min[1]-p,0,p-u.max[1])**2;function a(u,d){let p=1/0;function v(y){if(!(s(y,u,d)>=p))if(y.segs)for(let{a:m,b}of y.segs){let w=b[0]-m[0],S=b[1]-m[1],P=Math.max(0,Math.min(1,((u-m[0])*w+(d-m[1])*S)/(w*w+S*S||1)));p=Math.min(p,(u-m[0]-P*w)**2+(d-m[1]-P*S)**2)}else{let m=s(y.left,u,d)<s(y.right,u,d);v(m?y.left:y.right),v(m?y.right:y.left)}}return v(r),Math.sqrt(p)}function c(u){let d=[];for(let{a:p,b:v}of t)p[1]>u!=v[1]>u&&d.push(p[0]+(u-p[1])*(v[0]-p[0])/(v[1]-p[1]));return d.sort((p,v)=>p-v)}return{distance:a,intervals:c,inside:(u,d)=>{let p=0;for(;p<d.length&&d[p]<=u;)p++;return p%2===1}}}function Ea(n,t){let e=Math.max(.3,Math.min(.75,t.height/200)),r=0,s=n.map(a=>{let c=a.bounds(),h=c.min[0]-e,u=c.min[1]-e,d=Math.ceil((c.max[0]-h)/e)+1,p=Math.ceil((c.max[1]-u)/e)+1;return r+=(d+1)*(p+1),{x:h,y:u,nx:d,ny:p,step:e}});if(r>14e4)throw Error("Too many sculpted letters at once. Shorten the text and export smaller groups.");return s}function Pa(n,t,e,r,s){let{x:a,y:c,nx:h,ny:u,step:d}=r,p=h+1,v=u+1,y=new Float64Array(p*v),m=Ta(t.toPolygons());for(let C=0;C<v;C++){let A=c+C*d,N=m.intervals(A);for(let F=0;F<p;F++){let E=a+F*d;y[C*p+F]=m.distance(E,A)*(m.inside(E,N)?1:-1)}}let b=e.preset==="bubble"?e.domeRound:e.ridgeRound,w=b/d,S=y;if(w>.05){let C=Math.ceil(3*w),A=Array.from({length:C*2+1},(E,O)=>Math.exp(-.5*((O-C)/w)**2)),N=A.reduce((E,O)=>E+O,0),F=new Float64Array(y.length);S=new Float64Array(y.length);for(let E=0;E<v;E++)for(let O=0;O<p;O++){let L=0;for(let U=-C;U<=C;U++)L+=y[E*p+Math.max(0,Math.min(p-1,O+U))]*A[U+C];F[E*p+O]=L/N}for(let E=0;E<v;E++)for(let O=0;O<p;O++){let L=0;for(let U=-C;U<=C;U++)L+=F[Math.max(0,Math.min(v-1,E+U))*p+O]*A[U+C];S[E*p+O]=L/N}}let P=0;for(let C=0;C<y.length;C++)y[C]>0&&(P=Math.max(P,S[C]));if(P<.25)throw Error("The strokes are too narrow for this rounding. Reduce Softness or enlarge the letters.");return ci(n,t,e,r,s,(C,A)=>{let N=Math.max(0,Math.min(h,Math.round((C-a)/d))),F=Math.max(0,Math.min(u,Math.round((A-c)/d))),E=Math.max(0,Math.min(1,S[F*p+N]/P));return e.depth+e.relief*(e.preset==="bubble"?Math.sqrt(E*(2-E)):E)},!1)}function Aa(n,t,e,r,s){let a=t.bounds(),c=Ta(t.toPolygons()),h=e.studDiameter/2,u=h+e.studMargin,d=e.studPitch,p=(a.min[0]+a.max[0])/2+e.studShiftX*d/100,v=(a.min[1]+a.max[1])/2+e.studShiftY*d/100,y=Math.ceil((a.min[0]+u-p)/d),m=Math.floor((a.max[0]-u-p)/d),b=Math.ceil((a.min[1]+u-v)/d),w=Math.floor((a.max[1]-u-v)/d);if((m-y+1)*(w-b+1)>2e3)throw Error("Too many stud positions. Increase Stud spacing or reduce Letter height.");let S=[];for(let P=b;P<=w;P++){let R=v+P*d,C=c.intervals(R);for(let A=y;A<=m;A++){let N=p+A*d;if(c.inside(N,C)&&c.distance(N,R)>=u){if(++s.count>1200)throw Error("More than 1,200 studs. Increase Stud spacing or shorten the text.");S.push(r(r(n.Manifold.cylinder(e.studHeight+.02,h,h,32)).translate([N,R,e.depth-.02])))}}}if(!S.length)throw Error("No whole studs fit this letter. Reduce Stud diameter or Edge margin, change the grid position, or enlarge the letter.");return r(n.Manifold.union([r(t.extrude(e.depth)),...S]))}var Ze=Uint8Array,hi=Uint16Array,Mh=Int32Array,Ca=new Ze([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ia=new Ze([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Sh=new Ze([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ra=function(n,t){for(var e=new hi(31),r=0;r<31;++r)e[r]=t+=1<<n[r-1];for(var s=new Mh(e[30]),r=1;r<30;++r)for(var a=e[r];a<e[r+1];++a)s[a]=a-e[r]<<5|r;return{b:e,r:s}},La=Ra(Ca,2),Da=La.b,wh=La.r;Da[28]=258,wh[258]=28;var Na=Ra(Ia,0),Th=Na.b,Dm=Na.r,Ys=new hi(32768);for(pe=0;pe<32768;++pe)fn=(pe&43690)>>1|(pe&21845)<<1,fn=(fn&52428)>>2|(fn&13107)<<2,fn=(fn&61680)>>4|(fn&3855)<<4,Ys[pe]=((fn&65280)>>8|(fn&255)<<8)>>1;var fn,pe,Fi=(function(n,t,e){for(var r=n.length,s=0,a=new hi(t);s<r;++s)n[s]&&++a[n[s]-1];var c=new hi(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;var h;if(e){h=new hi(1<<t);var u=15-t;for(s=0;s<r;++s)if(n[s])for(var d=s<<4|n[s],p=t-n[s],v=c[n[s]-1]++<<p,y=v|(1<<p)-1;v<=y;++v)h[Ys[v]>>u]=d}else for(h=new hi(r),s=0;s<r;++s)n[s]&&(h[s]=Ys[c[n[s]-1]++]>>15-n[s]);return h}),Oi=new Ze(288);for(pe=0;pe<144;++pe)Oi[pe]=8;var pe;for(pe=144;pe<256;++pe)Oi[pe]=9;var pe;for(pe=256;pe<280;++pe)Oi[pe]=7;var pe;for(pe=280;pe<288;++pe)Oi[pe]=8;var pe,Fa=new Ze(32);for(pe=0;pe<32;++pe)Fa[pe]=5;var pe;var Eh=Fi(Oi,9,1);var Ph=Fi(Fa,5,1),Hs=function(n){for(var t=n[0],e=1;e<n.length;++e)n[e]>t&&(t=n[e]);return t},tn=function(n,t,e){var r=t/8|0;return(n[r]|n[r+1]<<8)>>(t&7)&e},Xs=function(n,t){var e=t/8|0;return(n[e]|n[e+1]<<8|n[e+2]<<16)>>(t&7)},Ah=function(n){return(n+7)/8|0},Ch=function(n,t,e){return(t==null||t<0)&&(t=0),(e==null||e>n.length)&&(e=n.length),new Ze(n.subarray(t,e))};var Ih=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],en=function(n,t,e){var r=new Error(t||Ih[n]);if(r.code=n,Error.captureStackTrace&&Error.captureStackTrace(r,en),!e)throw r;return r},Rh=function(n,t,e,r){var s=n.length,a=r?r.length:0;if(!s||t.f&&!t.l)return e||new Ze(0);var c=!e,h=c||t.i!=2,u=t.i;c&&(e=new Ze(s*3));var d=function(Wt){var Yt=e.length;if(Wt>Yt){var Ct=new Ze(Math.max(Yt*2,Wt));Ct.set(e),e=Ct}},p=t.f||0,v=t.p||0,y=t.b||0,m=t.l,b=t.d,w=t.m,S=t.n,P=s*8;do{if(!m){p=tn(n,v,1);var R=tn(n,v+1,3);if(v+=3,R)if(R==1)m=Eh,b=Ph,w=9,S=5;else if(R==2){var F=tn(n,v,31)+257,E=tn(n,v+10,15)+4,O=F+tn(n,v+5,31)+1;v+=14;for(var L=new Ze(O),U=new Ze(19),k=0;k<E;++k)U[Sh[k]]=tn(n,v+k*3,7);v+=E*3;for(var Z=Hs(U),tt=(1<<Z)-1,Q=Fi(U,Z,1),k=0;k<O;){var it=Q[tn(n,v,tt)];v+=it&15;var C=it>>4;if(C<16)L[k++]=C;else{var Y=0,et=0;for(C==16?(et=3+tn(n,v,3),v+=2,Y=L[k-1]):C==17?(et=3+tn(n,v,7),v+=3):C==18&&(et=11+tn(n,v,127),v+=7);et--;)L[k++]=Y}}var H=L.subarray(0,F),K=L.subarray(F);w=Hs(H),S=Hs(K),m=Fi(H,w,1),b=Fi(K,S,1)}else en(1);else{var C=Ah(v)+4,A=n[C-4]|n[C-3]<<8,N=C+A;if(N>s){u&&en(0);break}h&&d(y+A),e.set(n.subarray(C,N),y),t.b=y+=A,t.p=v=N*8,t.f=p;continue}if(v>P){u&&en(0);break}}h&&d(y+131072);for(var lt=(1<<w)-1,J=(1<<S)-1,z=v;;z=v){var Y=m[Xs(n,v)&lt],B=Y>>4;if(v+=Y&15,v>P){u&&en(0);break}if(Y||en(2),B<256)e[y++]=B;else if(B==256){z=v,m=null;break}else{var j=B-254;if(B>264){var k=B-257,q=Ca[k];j=tn(n,v,(1<<q)-1)+Da[k],v+=q}var nt=b[Xs(n,v)&J],bt=nt>>4;nt||en(3),v+=nt&15;var K=Th[bt];if(bt>3){var q=Ia[bt];K+=Xs(n,v)&(1<<q)-1,v+=q}if(v>P){u&&en(0);break}h&&d(y+131072);var Tt=y+j;if(y<K){var St=a-K,Lt=Math.min(K,Tt);for(St+y<0&&en(3);y<Lt;++y)e[y]=r[St+y]}for(;y<Tt;++y)e[y]=e[y-K]}}t.l=m,t.p=z,t.b=y,t.f=p,m&&(p=1,t.m=w,t.d=b,t.n=S)}while(!p);return y!=e.length&&c?Ch(e,0,y):e.subarray(0,y)};var Lh=new Ze(0);var Dh=function(n,t){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&en(6,"invalid zlib data"),(n[1]>>5&1)==+!t&&en(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Oa(n,t){return Rh(n.subarray(Dh(n,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Nh=typeof TextDecoder<"u"&&new TextDecoder,Fh=0;try{Nh.decode(Lh,{stream:!0}),Fh=1}catch{}var Ui=160,Oh=Oa(Uint8Array.from(atob("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"),n=>n.charCodeAt(0)));function Ua(n,t,e=1){let r=((n+e*.371)%1+1)%1*Ui,s=((t+e*.619)%1+1)%1*Ui,a=Math.floor(r),c=Math.floor(s),h=r-a,u=s-c,d=(p,v)=>Oh[v%Ui*Ui+p%Ui]/255;return(d(a,c)*(1-h)+d(a+1,c)*h)*(1-u)+(d(a,c+1)*(1-h)+d(a+1,c+1)*h)*u}var Js={stoneFinish:"chiseled",stoneRound:2,stoneRoughness:1.4},za=[{id:"sandstone",name:"Sandstone",relief:4,stoneRound:2,stoneRoughness:1.2,textureScale:18,colour:"#C6AE89"},{id:"chiseled",name:"Chiseled",relief:6,stoneRound:2,stoneRoughness:1.4,textureScale:26,colour:"#898A80"},{id:"weathered",name:"Weathered",relief:5,stoneRound:2.5,stoneRoughness:1.3,textureScale:22,colour:"#AEA698"}],Xn=n=>Math.max(0,Math.min(1,n));function qs(n,t,e){return .5*Re(n,t,e)+.3*Re(1.6*n+1.2*t,-1.2*n+1.6*t,e+11)+.2*Re(3.1*n-2.5*t,2.5*n+3.1*t,e+29)}function Ba(n,t,e){let r=Math.floor(n),s=Math.floor(t),a=n-r,c=t-s,h=me(r,s,e),u=me(r+1,s,e),d=me(r,s+1,e),p=me(r+1,s+1,e);return a>c?h+(u-h)*a+(p-u)*c:h+(p-d)*a+(d-h)*c}function ui(n,t,e){return .65*Ba(1.8*n+.7*t,-.7*n+1.8*t,e)+.35*Ba(3.1*n-1.9*t,1.9*n+3.1*t,e+29)}function Zs(n,t,e,r){let s=Math.floor(e),a=e-s;return ui(n,t,r+s*173)*(1-a)+ui(n,t,r+(s+1)*173)*a}function Va(n,t,e,r){return .55*Zs(n,t,e,r)+.3*Zs(1.6*n+1.2*t,-1.2*n+1.6*t,2*e,r+23)+.15*Zs(3.1*n-2.5*e,4*t,2.5*n+3.1*e,r+41)}function ka(n,t,e,r=!1){let s=Math.floor(n),a=Math.floor(t),c=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){let d=s+h,p=a+u;if(me(d,p,e+47)>(r?.7:.6))continue;let v=d+me(d,p,e),y=p+me(d,p,e+7),m=me(d,p,e+11)*Math.PI,b=Math.cos(m),w=Math.sin(m),S=(n-v)*b+(t-y)*w,P=-(n-v)*w+(t-y)*b,R=.17+.26*me(d,p,e+13),C=R*(r?.6+.6*me(d,p,e+17):.23+.4*me(d,p,e+17)),A=r?Math.hypot(S/R,P/C):Math.max(Math.abs(S/R),Math.abs(P/C),Math.abs(.55*S/R+.8*P/C));A<1&&(c=Math.max(c,(r?Math.sqrt(1-A*A):Math.min(1,(1-A)*2.6))*(.45+.55*me(d,p,e+31))))}return c}function Uh(n,t,e){let r=e.textureAngle*Math.PI/180,s=(n*Math.cos(r)+t*Math.sin(r))/e.textureScale,a=(-n*Math.sin(r)+t*Math.cos(r))/e.textureScale,c=e.textureSeed;return e.stoneFinish==="sandstone"?Xn(.5+1.1*(qs(s*1.5,a*1.5,c)-.5)+.65*(qs(s*7,a*7,c+21)-.5)-.18*ka(s*3,a*3,c+5)):e.stoneFinish==="chiseled"?Xn(.94*Ua(s/4,a/4,c)+.06*ui(s*5,a*5,c+23)):Xn(.65+.9*(qs(s*2,a*2,c)-.5)+.22*(ui(s*8,a*8,c+19)-.5)-.8*ka(s*4,a*4,c,!0))}function Bh(n,t){let e=n.flatMap(a=>a.map((c,h)=>{let u=a[(h+1)%a.length];return{a:c,b:u,min:[Math.min(c[0],u[0]),Math.min(c[1],u[1])],max:[Math.max(c[0],u[0]),Math.max(c[1],u[1])]}})),r=a=>{let c=[0,1].map(p=>Math.min(...a.map(v=>v.min[p]))),h=[0,1].map(p=>Math.max(...a.map(v=>v.max[p])));if(a.length<=8)return{min:c,max:h,items:a};let u=h[0]-c[0]>h[1]-c[1]?0:1;a.sort((p,v)=>p.min[u]+p.max[u]-v.min[u]-v.max[u]);let d=a.length>>1;return{min:c,max:h,children:[r(a.slice(0,d)),r(a.slice(d))]}},s=r(e);return(a,c)=>{let h=t*t,u=d=>{let p=Math.max(d.min[0]-a,0,a-d.max[0]),v=Math.max(d.min[1]-c,0,c-d.max[1]);if(!(p*p+v*v>=h)){if(d.children){d.children.forEach(u);return}for(let{a:y,b:m}of d.items){let b=m[0]-y[0],w=m[1]-y[1],S=Math.max(0,Math.min(1,((a-y[0])*b+(c-y[1])*w)/(b*b+w*w||1))),P=a-y[0]-S*b,R=c-y[1]-S*w;h=Math.min(h,P*P+R*R)}}};return u(s),Math.sqrt(h)}}function Wa(n,t,e,r="Carved stone"){let s=Math.max(1,Math.min(1.8,t.textureScale/12)),a=0;for(let[c,h]of n.entries()){let u=0;for(let d of h.toPolygons())for(let p=0;p<d.length;p++)u+=Math.hypot(d[p][0]-d[(p+1)%d.length][0],d[p][1]-d[(p+1)%d.length][1]);a+=2*e[c].nx*e[c].ny+3*(2*h.area()+u*(t.depth+t.relief))/(s*s)}if(a>8e5)throw Error(`${r} is too detailed at this size. Increase Pattern size, reduce Letter height, or make fewer letters at once.`);return s}function Ga(n,t,e,r,s,a){return js(n,t,e,r,s,a)}function js(n,t,e,r,s,a,c={}){let h=c.outlineNoise||ui,u=c.height||Uh,d=c.label||"Stone",p=e.stoneRound,v=t.toPolygons(),y=a(t.offset(-p,"Round",2,48));if(y.isEmpty()||y.decompose().map(a).length!==1||y.toPolygons().length!==v.length)throw Error("Edge rounding removes a narrow letter detail. Reduce Edge wear, increase Letter height, or choose a broader font.");let m=a(a(y.offset(p,"Round",2,48)).intersect(t));if(e.stoneRoughness>0){let E=Math.max(8,e.textureScale*.65,e.stoneRoughness*10),O=e.stoneRoughness*.9,L=e.textureSeed,U=[];for(let k of m.toPolygons()){let Z=[];for(let tt=0;tt<k.length;tt++){let Q=k[tt],it=k[(tt+1)%k.length],Y=Math.max(1,Math.ceil(Math.hypot(it[0]-Q[0],it[1]-Q[1])/s));for(let et=0;et<Y;et++){let H=et/Y,K=Q[0]+H*(it[0]-Q[0]),lt=Q[1]+H*(it[1]-Q[1]);Z.push([K+O*(2*Xn(.5+1.8*(h(K/E,lt/E,L+3)-.5))-1),lt+O*(2*Xn(.5+1.8*(h(K/E,lt/E,L+17)-.5))-1)])}}U.push(Z)}m=a(new n.CrossSection(U,"NonZero"))}let b=a(m.offset(-(e.stoneRoughness*1.5+e.printNozzle),"Round",2,32));if(b.isEmpty()||b.decompose().map(a).length!==1||b.toPolygons().length!==v.length)throw Error("Side roughness leaves too little material in a narrow stroke. Reduce Side roughness or use a broader letter.");let w=Bh(m.toPolygons(),Math.max(p*1.5,3*Math.min(1.2,Math.max(.45,p*.4)))),S=(E,O)=>{let L=w(E,O),U=p*(.45+1.05*ui(E/e.textureScale*3,O/e.textureScale*3,e.textureSeed+101)),k=Math.max(0,1-L/U),Z=.65+.35*Math.min(1,L/U);return e.depth-U*k+e.relief*u(E,O,e)*Z},P=ci(n,m,e,r,a,S);e.stoneRoughness>0&&(P=kh(n,P,e,s,a,c.sideNoise||Va)),P=zh(n,P,e,w,S,a);let R=P.decompose().map(a).sort((E,O)=>O.volume()-E.volume());if(R.length>1){if(R.slice(1).some(E=>Math.abs(E.volume())>1e-4))throw Error(`${d} shaping leaves a detached fragment. Reduce Side roughness or choose a broader font.`);P=R[0]}e.standStyle==="flat"&&(P=a(P.trimByPlane([0,1,0],e.bottomTrim)));let C=P.getMesh(),A=C.vertProperties,N=C.triVerts,F=C.numProp;for(let E=0;E<N.length;E+=3){let O=N[E]*F,L=N[E+1]*F,U=N[E+2]*F;if(Math.max(A[O+2],A[L+2],A[U+2])<.01)continue;let k=A[L]-A[O],Z=A[L+1]-A[O+1],tt=A[L+2]-A[O+2],Q=A[U]-A[O],it=A[U+1]-A[O+1],Y=A[U+2]-A[O+2],et=Z*Y-tt*it,H=tt*Q-k*Y,K=k*it-Z*Q;if(K<-.7072*Math.hypot(et,H,K)&&Math.hypot(et,H,K)>2e-4)throw Error(`This ${d.toLowerCase()} setting creates a steep underside. Reduce Side roughness or increase Pattern size.`)}return P}function kh(n,t,e,r,s,a=Va){let c=t.getMesh(),h=c.vertProperties,u=c.triVerts,d=c.numProp,p=[],v=[],y=new Map,m=new Map,b=new Map,w=L=>{if(!y.has(L)){let U=[0,1,2].map(k=>h[L*d+k].toFixed(5)).join(",");m.has(U)||(m.set(U,p.length/3),p.push(h[L*d],h[L*d+1],h[L*d+2])),y.set(L,m.get(U))}return y.get(L)};for(let L=0;L<u.length;L+=3){let[U,k,Z]=[u[L],u[L+1],u[L+2]],tt=U*d,Q=k*d,it=Z*d;if(d<4||Math.min(h[tt+3],h[Q+3],h[it+3])<.99999)continue;let Y=[w(U),w(k),w(Z)];if(new Set(Y).size===3){v.push(...Y);for(let et=0;et<3;et++){let H=Y[et],K=Y[(et+1)%3],lt=H<K?H+":"+K:K+":"+H;b.has(lt)?b.delete(lt):b.set(lt,[H,K])}}}let S=p.length/3,P=[...new Set([...b.values()].flat())],R=Math.ceil((e.depth+e.relief)/r);if(2*S+P.length*(R-1)>22e4)throw Error("Too much stone side detail. Increase Pattern size or reduce Letter height.");for(let L=0;L<S;L++)p.push(p[L*3],p[L*3+1],0);let C=[...v];for(let L=0;L<v.length;L+=3)C.push(v[L]+S,v[L+2]+S,v[L+1]+S);let A=new Map,N=e.stoneRoughness,F=Math.max(8,e.textureScale*.65,N*10),E=e.textureSeed;for(let L of P){let U=p[L*3],k=p[L*3+1],Z=p[L*3+2],tt=[L];for(let Q=1;Q<R;Q++){let it=Z*(1-Q/R),Y=Math.sin(Math.PI*Q/R)**2;tt.push(p.length/3),p.push(U+N*Y*(2*Xn(.5+2.2*(a(U/F,k/F,it/F,E+43)-.5))-1),k+N*Y*(2*Xn(.5+2.2*(a(U/F,k/F,it/F,E+71)-.5))-1),it)}tt.push(L+S),A.set(L,tt)}for(let[L,U]of b.values()){let k=A.get(L),Z=A.get(U);for(let tt=0;tt<R;tt++)C.push(k[tt],k[tt+1],Z[tt+1],k[tt],Z[tt+1],Z[tt])}let O=new n.Mesh({numProp:3,vertProperties:new Float32Array(p),triVerts:new Uint32Array(C)});return O.merge(),s(new n.Manifold(O))}function zh(n,t,e,r,s,a){let c=t.getMesh(),h=c.vertProperties,u=c.numProp,d=Uint32Array.from({length:h.length/u},(F,E)=>E),p=F=>{for(;d[F]!==F;)d[F]=d[d[F]],F=d[F];return F};for(let F=0;F<c.mergeFromVert.length;F++)d[p(c.mergeFromVert[F])]=p(c.mergeToVert[F]);let v=new Uint32Array(d.length),y=new Map,m=[];for(let F=0;F<d.length;F++){let E=p(F);y.has(E)||(y.set(E,m.length/3),m.push(h[E*u],h[E*u+1],h[E*u+2])),v[F]=y.get(E)}let b=Uint32Array.from(c.triVerts,F=>v[F]),w=m.length/3,S=Math.min(1.2,Math.max(.45,e.stoneRound*.4)),P=S*3,R=new Float64Array(m),C=new Float64Array(w);for(let F=0;F<w;F++){let E=R[F*3],O=R[F*3+1],L=R[F*3+2],U=Math.hypot(r(E,O),Math.max(0,s(E,O)-L));C[F]=L<.01?0:Math.max(0,1-U/P)}let A=R.slice();for(let F=0;F<7;F++){let E=new Float64Array(w*3),O=new Float64Array(w);for(let U=0;U<b.length;U+=3){let k=b[U],Z=b[U+1],tt=b[U+2],Q=k*3,it=Z*3,Y=tt*3,et=A[it]-A[Q],H=A[it+1]-A[Q+1],K=A[it+2]-A[Q+2],lt=A[Y]-A[Q],J=A[Y+1]-A[Q+1],z=A[Y+2]-A[Q+2],B=Math.hypot(H*z-K*J,K*lt-et*z,et*J-H*lt);if(B<1e-10)continue;let j=[0,1,2].map(q=>(A[Q+q]+A[it+q]+A[Y+q])/3);for(let q of[k,Z,tt])if(C[q]){O[q]+=B;for(let nt=0;nt<3;nt++)E[q*3+nt]+=B*j[nt]}}let L=A.slice();for(let U=0;U<w;U++){if(!C[U]||!O[U])continue;let k=U*3,Z=.6*C[U],tt=A[k]+Z*(E[k]/O[U]-A[k])-R[k],Q=A[k+1]+Z*(E[k+1]/O[U]-A[k+1])-R[k+1],it=A[k+2]+Z*(E[k+2]/O[U]-A[k+2])-R[k+2],Y=Math.min(1,S/Math.hypot(tt,Q,it));L[k]=R[k]+tt*Y,L[k+1]=R[k+1]+Q*Y,L[k+2]=R[k+2]+it*Y}A=L}let N=new n.Mesh({numProp:3,vertProperties:new Float32Array(A),triVerts:new Uint32Array(b)});return N.merge(),a(new n.Manifold(N))}var to={woodFinish:"carved",woodRound:1.8,woodRoughness:.7},Ha=[{id:"carved",name:"Rough carved",relief:5,woodRound:1.8,woodRoughness:.7,textureScale:26,textureAngle:0,colour:"#AD8054"},{id:"chisel",name:"Chisel cuts",relief:5,woodRound:1.5,woodRoughness:.8,textureScale:32,textureAngle:0,colour:"#C39764"},{id:"bark",name:"Bark",relief:6,woodRound:1.5,woodRoughness:1,textureScale:28,textureAngle:0,colour:"#806344"}],Ks=n=>Math.max(0,Math.min(1,n));function $s(n,t,e){let r=n+.22*Math.sin(t*.85+me(e,0,e)*6.28)+.32*(Re(n*.45,t*.4,e+13)-.5),s=Math.floor(r),a=0;for(let c=s-1;c<=s+1;c++){let h=c+.2+.6*me(c,0,e),u=.15+.27*me(c,1,e),d=Math.abs(r-h)/u;d<1&&(a=Math.max(a,(1-d)**.8*(.5+.5*Re(c*.31,t*.65,e+7))))}return a}function Qs(n,t,e){let r=Math.floor(n),s=Math.floor(t),a=0;for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){let u=r+c,d=s+h,p=u+.15+.7*me(u,d,e),v=d+.15+.7*me(u,d,e+3),y=(me(u,d,e+5)-.5)*.4,m=n-p+y*(t-v),b=t-v,w=.22+.24*me(u,d,e+9),S=.32+.35*me(u,d,e+11),P=Math.max(Math.abs(m)/w,Math.abs(b)/S);P<1&&(a=Math.max(a,Math.min(1,(1-P)*3)*(.3+.7*(b/S+1)/2)*(.6+.4*me(u,d,e+15))))}return a}function Vh(n,t,e){let r=e.textureAngle*Math.PI/180,s=(n*Math.cos(r)+t*Math.sin(r))/e.textureScale,a=(-n*Math.sin(r)+t*Math.cos(r))/e.textureScale,c=e.textureSeed,h=$s(s*6,a*1.8,c),u=$s(s*14,a*2.4,c+37),d=Re(s*4,a*.8,c+19);if(e.woodFinish==="chisel")return Ks(.88-.68*Qs(s*3,a*1.7,c)-.24*h+.1*(d-.5));if(e.woodFinish==="bark"){let p=.5*Math.sin(a*3+Re(s,a,c+61))+.3*(Re(s*2,a*3,c+67)-.5);return Ks(.9-.8*$s(s*4.5+p,a*4,c)-.18*u+.22*(Re(s*9,a*4,c+41)-.5)-.3*Qs(s*4,a*4,c+51))}return Ks(.86-.65*h-.15*u-.23*Qs(s*4,a*.9,c+23)+.16*(d-.5))}var eo=n=>({...n,stoneRound:n.woodRound,stoneRoughness:n.woodRoughness});function Xa(n,t,e,r,s,a){let c=e.textureAngle*Math.PI/180,h=Math.cos(c),u=Math.sin(c),d=(p,v,y,m)=>{let b=p*h+v*u+y*.35,w=-p*u+v*h;return .6*Re(b*5,w*.8,m)+.4*Re(b*11,w*2,m+19)};return js(n,t,eo(e),r,s,a,{label:"Wood",height:Vh,outlineNoise:(p,v,y)=>d(p,v,0,y),sideNoise:d})}var ul=1;var fl=3;var vo=0,yo=1,xo=2,_o=3,bo=4,Mo=5,So=6,wo=7,dl=0,pl=1,ml=2;var Wo=1,Go=2,Ho=3,Xo=4,Yo=5,qo=6,Zo=7;var Jo=300,gl=301,jo=302;var vl=306,To=1e3,Gi=1001,Eo=1002;var yl=1006;var xl=1008;var _l=1009;var bl=1015;var Ml=1023;var Zi=2300,Nr=2301,Lr=2302,Po=2303,Ao=2400,Co=2401,Io=2402;var Ko="",Ke="srgb",Ro="srgb-linear",Lo="linear",Dr="srgb";var Sl=35044;var Hi=2e3,Do=2001;function Wh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Gh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}var Ya={},Fr=null;function wl(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=wl(n);let t="THREE."+n.shift();if(Fr)Fr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function we(...n){n=wl(n);let t="THREE."+n.shift();if(Fr)Fr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function bi(...n){let t=n.join(" ");t in Ya||(Ya[t]=!0,Ie(...n))}var Hh={[vo]:yo,[xo]:So,[bo]:wo,[_o]:Mo,[yo]:vo,[So]:xo,[wo]:bo,[Mo]:_o},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){let r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){let r=this._listeners;if(r===void 0)return;let s=r[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let r=e[t.type];if(r!==void 0){t.target=this;let s=r.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gm=Math.PI/180,Xh=180/Math.PI;function rr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[r&255]+Fe[r>>8&255]+Fe[r>>16&255]+Fe[r>>24&255]).toLowerCase()}function he(n,t,e){return Math.max(t,Math.min(e,n))}function Yh(n,t){return(n%t+t)%t}function no(n,t,e){return(1-e)*n+e*t}function Bi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,r=this.y,s=t.elements;return this.x=s[0]*e+s[3]*r+s[6],this.y=s[1]*e+s[4]*r+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let r=this.dot(t)/e;return Math.acos(he(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let r=Math.cos(e),s=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*r-c*s+t.x,this.y=a*s+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(t=0,e=0,r=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=s}static slerpFlat(t,e,r,s,a,c,h){let u=r[s+0],d=r[s+1],p=r[s+2],v=r[s+3],y=a[c+0],m=a[c+1],b=a[c+2],w=a[c+3];if(v!==w||u!==y||d!==m||p!==b){let S=u*y+d*m+p*b+v*w;S<0&&(y=-y,m=-m,b=-b,w=-w,S=-S);let P=1-h;if(S<.9995){let R=Math.acos(S),C=Math.sin(R);P=Math.sin(P*R)/C,h=Math.sin(h*R)/C,u=u*P+y*h,d=d*P+m*h,p=p*P+b*h,v=v*P+w*h}else{u=u*P+y*h,d=d*P+m*h,p=p*P+b*h,v=v*P+w*h;let R=1/Math.sqrt(u*u+d*d+p*p+v*v);u*=R,d*=R,p*=R,v*=R}}t[e]=u,t[e+1]=d,t[e+2]=p,t[e+3]=v}static multiplyQuaternionsFlat(t,e,r,s,a,c){let h=r[s],u=r[s+1],d=r[s+2],p=r[s+3],v=a[c],y=a[c+1],m=a[c+2],b=a[c+3];return t[e]=h*b+p*v+u*m-d*y,t[e+1]=u*b+p*y+d*v-h*m,t[e+2]=d*b+p*m+h*y-u*v,t[e+3]=p*b-h*v-u*y-d*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,s){return this._x=t,this._y=e,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let r=t._x,s=t._y,a=t._z,c=t._order,h=Math.cos,u=Math.sin,d=h(r/2),p=h(s/2),v=h(a/2),y=u(r/2),m=u(s/2),b=u(a/2);switch(c){case"XYZ":this._x=y*p*v+d*m*b,this._y=d*m*v-y*p*b,this._z=d*p*b+y*m*v,this._w=d*p*v-y*m*b;break;case"YXZ":this._x=y*p*v+d*m*b,this._y=d*m*v-y*p*b,this._z=d*p*b-y*m*v,this._w=d*p*v+y*m*b;break;case"ZXY":this._x=y*p*v-d*m*b,this._y=d*m*v+y*p*b,this._z=d*p*b+y*m*v,this._w=d*p*v-y*m*b;break;case"ZYX":this._x=y*p*v-d*m*b,this._y=d*m*v+y*p*b,this._z=d*p*b-y*m*v,this._w=d*p*v+y*m*b;break;case"YZX":this._x=y*p*v+d*m*b,this._y=d*m*v+y*p*b,this._z=d*p*b-y*m*v,this._w=d*p*v-y*m*b;break;case"XZY":this._x=y*p*v-d*m*b,this._y=d*m*v-y*p*b,this._z=d*p*b+y*m*v,this._w=d*p*v+y*m*b;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let r=e/2,s=Math.sin(r);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,r=e[0],s=e[4],a=e[8],c=e[1],h=e[5],u=e[9],d=e[2],p=e[6],v=e[10],y=r+h+v;if(y>0){let m=.5/Math.sqrt(y+1);this._w=.25/m,this._x=(p-u)*m,this._y=(a-d)*m,this._z=(c-s)*m}else if(r>h&&r>v){let m=2*Math.sqrt(1+r-h-v);this._w=(p-u)/m,this._x=.25*m,this._y=(s+c)/m,this._z=(a+d)/m}else if(h>v){let m=2*Math.sqrt(1+h-r-v);this._w=(a-d)/m,this._x=(s+c)/m,this._y=.25*m,this._z=(u+p)/m}else{let m=2*Math.sqrt(1+v-r-h);this._w=(c-s)/m,this._x=(a+d)/m,this._y=(u+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let r=this.angleTo(t);if(r===0)return this;let s=Math.min(1,e/r);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let r=t._x,s=t._y,a=t._z,c=t._w,h=e._x,u=e._y,d=e._z,p=e._w;return this._x=r*p+c*h+s*d-a*u,this._y=s*p+c*u+a*h-r*d,this._z=a*p+c*d+r*u-s*h,this._w=c*p-r*h-s*u-a*d,this._onChangeCallback(),this}slerp(t,e){let r=t._x,s=t._y,a=t._z,c=t._w,h=this.dot(t);h<0&&(r=-r,s=-s,a=-a,c=-c,h=-h);let u=1-e;if(h<.9995){let d=Math.acos(h),p=Math.sin(d);u=Math.sin(u*d)/p,e=Math.sin(e*d)/p,this._x=this._x*u+r*e,this._y=this._y*u+s*e,this._z=this._z*u+a*e,this._w=this._w*u+c*e,this._onChangeCallback()}else this._x=this._x*u+r*e,this._y=this._y*u+s*e,this._z=this._z*u+a*e,this._w=this._w*u+c*e,this.normalize();return this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mt=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,r=0){this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qa.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,r=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*r+a[6]*s,this.y=a[1]*e+a[4]*r+a[7]*s,this.z=a[2]*e+a[5]*r+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,r=this.y,s=this.z,a=t.elements,c=1/(a[3]*e+a[7]*r+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*r+a[8]*s+a[12])*c,this.y=(a[1]*e+a[5]*r+a[9]*s+a[13])*c,this.z=(a[2]*e+a[6]*r+a[10]*s+a[14])*c,this}applyQuaternion(t){let e=this.x,r=this.y,s=this.z,a=t.x,c=t.y,h=t.z,u=t.w,d=2*(c*s-h*r),p=2*(h*e-a*s),v=2*(a*r-c*e);return this.x=e+u*d+c*v-h*p,this.y=r+u*p+h*d-a*v,this.z=s+u*v+a*p-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,r=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*r+a[8]*s,this.y=a[1]*e+a[5]*r+a[9]*s,this.z=a[2]*e+a[6]*r+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let r=t.x,s=t.y,a=t.z,c=e.x,h=e.y,u=e.z;return this.x=s*u-a*h,this.y=a*c-r*u,this.z=r*h-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let r=this.dot(t)/e;return Math.acos(he(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,r=this.y-t.y,s=this.z-t.z;return e*e+r*r+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){let s=Math.sin(e)*t;return this.x=s*Math.sin(r),this.y=Math.cos(e)*t,this.z=s*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new Mt,qa=new vn,se=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,r,s,a,c,h,u,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,s,a,c,h,u,d)}set(t,e,r,s,a,c,h,u,d){let p=this.elements;return p[0]=t,p[1]=s,p[2]=h,p[3]=e,p[4]=a,p[5]=u,p[6]=r,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let r=t.elements,s=e.elements,a=this.elements,c=r[0],h=r[3],u=r[6],d=r[1],p=r[4],v=r[7],y=r[2],m=r[5],b=r[8],w=s[0],S=s[3],P=s[6],R=s[1],C=s[4],A=s[7],N=s[2],F=s[5],E=s[8];return a[0]=c*w+h*R+u*N,a[3]=c*S+h*C+u*F,a[6]=c*P+h*A+u*E,a[1]=d*w+p*R+v*N,a[4]=d*S+p*C+v*F,a[7]=d*P+p*A+v*E,a[2]=y*w+m*R+b*N,a[5]=y*S+m*C+b*F,a[8]=y*P+m*A+b*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],r=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8];return e*c*p-e*h*d-r*a*p+r*h*u+s*a*d-s*c*u}invert(){let t=this.elements,e=t[0],r=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8],v=p*c-h*d,y=h*u-p*a,m=d*a-c*u,b=e*v+r*y+s*m;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=v*w,t[1]=(s*d-p*r)*w,t[2]=(h*r-s*c)*w,t[3]=y*w,t[4]=(p*e-s*u)*w,t[5]=(s*a-h*e)*w,t[6]=m*w,t[7]=(r*u-d*e)*w,t[8]=(c*e-r*a)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,s,a,c,h){let u=Math.cos(a),d=Math.sin(a);return this.set(r*u,r*d,-r*(u*c+d*h)+c+t,-s*d,s*u,-s*(-d*c+u*h)+h+e,0,0,1),this}scale(t,e){return bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ro.makeScale(t,e)),this}rotate(t){return bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ro.makeRotation(-t)),this}translate(t,e){return bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,r=t.elements;for(let s=0;s<9;s++)if(e[s]!==r[s])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){let r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ro=new se,Za=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ja=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){let n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Dr&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dr&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ko?Lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ro]:{primaries:t,whitePoint:r,transfer:Lo,toXYZ:Za,fromXYZ:Ja,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:r,transfer:Dr,toXYZ:Za,fromXYZ:Ja,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}var je=qh();function mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fi,Or=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{fi===void 0&&(fi=No("canvas")),fi.width=t.width,fi.height=t.height;let s=fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),r=fi}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=No("canvas");e.width=t.width,e.height=t.height;let r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);let s=r.getImageData(0,0,t.width,t.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=mn(a[c]/255)*255;return r.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(mn(e[r]/255)*255):e[r]=mn(e[r]);return{data:e,width:t.width,height:t.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zh=0,Ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,h=s.length;c<h;c++)s[c].isDataTexture?a.push(so(s[c].image)):a.push(so(s[c]))}else a=so(s);r.url=a}return e||(t.images[this.uuid]=r),r}};function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Or.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Jh=0,oo=new Mt,Si=class n extends Jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,r=Gi,s=Gi,a=yl,c=xl,h=Ml,u=_l,d=n.DEFAULT_ANISOTROPY,p=Ko){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=rr(),this.name="",this.source=new Ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let r=t[e];if(r===void 0){Ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[e]=r}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Jo;Si.DEFAULT_ANISOTROPY=1;var Fo=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,r=0,s=1){this.x=t,this.y=e,this.z=r,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,s){return this.x=t,this.y=e,this.z=r,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,r=this.y,s=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*r+c[8]*s+c[12]*a,this.y=c[1]*e+c[5]*r+c[9]*s+c[13]*a,this.z=c[2]*e+c[6]*r+c[10]*s+c[14]*a,this.w=c[3]*e+c[7]*r+c[11]*s+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,s,a,u=t.elements,d=u[0],p=u[4],v=u[8],y=u[1],m=u[5],b=u[9],w=u[2],S=u[6],P=u[10];if(Math.abs(p-y)<.01&&Math.abs(v-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(p+y)<.1&&Math.abs(v+w)<.1&&Math.abs(b+S)<.1&&Math.abs(d+m+P-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(d+1)/2,A=(m+1)/2,N=(P+1)/2,F=(p+y)/4,E=(v+w)/4,O=(b+S)/4;return C>A&&C>N?C<.01?(r=0,s=.707106781,a=.707106781):(r=Math.sqrt(C),s=F/r,a=E/r):A>N?A<.01?(r=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),r=F/s,a=O/s):N<.01?(r=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),r=E/a,s=O/a),this.set(r,s,a,e),this}let R=Math.sqrt((S-b)*(S-b)+(v-w)*(v-w)+(y-p)*(y-p));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(v-w)/R,this.z=(y-p)/R,this.w=Math.acos((d+m+P-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var sn=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,r,s,a,c,h,u,d,p,v,y,m,b,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,s,a,c,h,u,d,p,v,y,m,b,w,S)}set(t,e,r,s,a,c,h,u,d,p,v,y,m,b,w,S){let P=this.elements;return P[0]=t,P[4]=e,P[8]=r,P[12]=s,P[1]=a,P[5]=c,P[9]=h,P[13]=u,P[2]=d,P[6]=p,P[10]=v,P[14]=y,P[3]=m,P[7]=b,P[11]=w,P[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){let e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,r=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),a=1/di.setFromMatrixColumn(t,1).length(),c=1/di.setFromMatrixColumn(t,2).length();return e[0]=r[0]*s,e[1]=r[1]*s,e[2]=r[2]*s,e[3]=0,e[4]=r[4]*a,e[5]=r[5]*a,e[6]=r[6]*a,e[7]=0,e[8]=r[8]*c,e[9]=r[9]*c,e[10]=r[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,r=t.x,s=t.y,a=t.z,c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),d=Math.sin(s),p=Math.cos(a),v=Math.sin(a);if(t.order==="XYZ"){let y=c*p,m=c*v,b=h*p,w=h*v;e[0]=u*p,e[4]=-u*v,e[8]=d,e[1]=m+b*d,e[5]=y-w*d,e[9]=-h*u,e[2]=w-y*d,e[6]=b+m*d,e[10]=c*u}else if(t.order==="YXZ"){let y=u*p,m=u*v,b=d*p,w=d*v;e[0]=y+w*h,e[4]=b*h-m,e[8]=c*d,e[1]=c*v,e[5]=c*p,e[9]=-h,e[2]=m*h-b,e[6]=w+y*h,e[10]=c*u}else if(t.order==="ZXY"){let y=u*p,m=u*v,b=d*p,w=d*v;e[0]=y-w*h,e[4]=-c*v,e[8]=b+m*h,e[1]=m+b*h,e[5]=c*p,e[9]=w-y*h,e[2]=-c*d,e[6]=h,e[10]=c*u}else if(t.order==="ZYX"){let y=c*p,m=c*v,b=h*p,w=h*v;e[0]=u*p,e[4]=b*d-m,e[8]=y*d+w,e[1]=u*v,e[5]=w*d+y,e[9]=m*d-b,e[2]=-d,e[6]=h*u,e[10]=c*u}else if(t.order==="YZX"){let y=c*u,m=c*d,b=h*u,w=h*d;e[0]=u*p,e[4]=w-y*v,e[8]=b*v+m,e[1]=v,e[5]=c*p,e[9]=-h*p,e[2]=-d*p,e[6]=m*v+b,e[10]=y-w*v}else if(t.order==="XZY"){let y=c*u,m=c*d,b=h*u,w=h*d;e[0]=u*p,e[4]=-v,e[8]=d*p,e[1]=y*v+w,e[5]=c*p,e[9]=m*v-b,e[2]=b*v-m,e[6]=h*p,e[10]=w*v+y}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jh,t,Kh)}lookAt(t,e,r){let s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Pn.crossVectors(r,Ge),Pn.lengthSq()===0&&(Math.abs(r.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Pn.crossVectors(r,Ge)),Pn.normalize(),Sr.crossVectors(Ge,Pn),s[0]=Pn.x,s[4]=Sr.x,s[8]=Ge.x,s[1]=Pn.y,s[5]=Sr.y,s[9]=Ge.y,s[2]=Pn.z,s[6]=Sr.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let r=t.elements,s=e.elements,a=this.elements,c=r[0],h=r[4],u=r[8],d=r[12],p=r[1],v=r[5],y=r[9],m=r[13],b=r[2],w=r[6],S=r[10],P=r[14],R=r[3],C=r[7],A=r[11],N=r[15],F=s[0],E=s[4],O=s[8],L=s[12],U=s[1],k=s[5],Z=s[9],tt=s[13],Q=s[2],it=s[6],Y=s[10],et=s[14],H=s[3],K=s[7],lt=s[11],J=s[15];return a[0]=c*F+h*U+u*Q+d*H,a[4]=c*E+h*k+u*it+d*K,a[8]=c*O+h*Z+u*Y+d*lt,a[12]=c*L+h*tt+u*et+d*J,a[1]=p*F+v*U+y*Q+m*H,a[5]=p*E+v*k+y*it+m*K,a[9]=p*O+v*Z+y*Y+m*lt,a[13]=p*L+v*tt+y*et+m*J,a[2]=b*F+w*U+S*Q+P*H,a[6]=b*E+w*k+S*it+P*K,a[10]=b*O+w*Z+S*Y+P*lt,a[14]=b*L+w*tt+S*et+P*J,a[3]=R*F+C*U+A*Q+N*H,a[7]=R*E+C*k+A*it+N*K,a[11]=R*O+C*Z+A*Y+N*lt,a[15]=R*L+C*tt+A*et+N*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],r=t[4],s=t[8],a=t[12],c=t[1],h=t[5],u=t[9],d=t[13],p=t[2],v=t[6],y=t[10],m=t[14],b=t[3],w=t[7],S=t[11],P=t[15],R=u*m-d*y,C=h*m-d*v,A=h*y-u*v,N=c*m-d*p,F=c*y-u*p,E=c*v-h*p;return e*(w*R-S*C+P*A)-r*(b*R-S*N+P*F)+s*(b*C-w*N+P*E)-a*(b*A-w*F+S*E)}determinantAffine(){let t=this.elements,e=t[0],r=t[4],s=t[8],a=t[1],c=t[5],h=t[9],u=t[2],d=t[6],p=t[10];return e*(c*p-h*d)-r*(a*p-h*u)+s*(a*d-c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=r),this}invert(){let t=this.elements,e=t[0],r=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8],v=t[9],y=t[10],m=t[11],b=t[12],w=t[13],S=t[14],P=t[15],R=e*h-r*c,C=e*u-s*c,A=e*d-a*c,N=r*u-s*h,F=r*d-a*h,E=s*d-a*u,O=p*w-v*b,L=p*S-y*b,U=p*P-m*b,k=v*S-y*w,Z=v*P-m*w,tt=y*P-m*S,Q=R*tt-C*Z+A*k+N*U-F*L+E*O;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let it=1/Q;return t[0]=(h*tt-u*Z+d*k)*it,t[1]=(s*Z-r*tt-a*k)*it,t[2]=(w*E-S*F+P*N)*it,t[3]=(y*F-v*E-m*N)*it,t[4]=(u*U-c*tt-d*L)*it,t[5]=(e*tt-s*U+a*L)*it,t[6]=(S*A-b*E-P*C)*it,t[7]=(p*E-y*A+m*C)*it,t[8]=(c*Z-h*U+d*O)*it,t[9]=(r*U-e*Z-a*O)*it,t[10]=(b*F-w*A+P*R)*it,t[11]=(v*A-p*F-m*R)*it,t[12]=(h*L-c*k-u*O)*it,t[13]=(e*k-r*L+s*O)*it,t[14]=(w*C-b*N-S*R)*it,t[15]=(p*N-v*C+y*R)*it,this}scale(t){let e=this.elements,r=t.x,s=t.y,a=t.z;return e[0]*=r,e[4]*=s,e[8]*=a,e[1]*=r,e[5]*=s,e[9]*=a,e[2]*=r,e[6]*=s,e[10]*=a,e[3]*=r,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,s))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let r=Math.cos(e),s=Math.sin(e),a=1-r,c=t.x,h=t.y,u=t.z,d=a*c,p=a*h;return this.set(d*c+r,d*h-s*u,d*u+s*h,0,d*h+s*u,p*h+r,p*u-s*c,0,d*u-s*h,p*u+s*c,a*u*u+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,s,a,c){return this.set(1,r,a,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,r){let s=this.elements,a=e._x,c=e._y,h=e._z,u=e._w,d=a+a,p=c+c,v=h+h,y=a*d,m=a*p,b=a*v,w=c*p,S=c*v,P=h*v,R=u*d,C=u*p,A=u*v,N=r.x,F=r.y,E=r.z;return s[0]=(1-(w+P))*N,s[1]=(m+A)*N,s[2]=(b-C)*N,s[3]=0,s[4]=(m-A)*F,s[5]=(1-(y+P))*F,s[6]=(S+R)*F,s[7]=0,s[8]=(b+C)*E,s[9]=(S-R)*E,s[10]=(1-(y+w))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,r){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return r.set(1,1,1),e.identity(),this;let c=di.set(s[0],s[1],s[2]).length(),h=di.set(s[4],s[5],s[6]).length(),u=di.set(s[8],s[9],s[10]).length();a<0&&(c=-c),nn.copy(this);let d=1/c,p=1/h,v=1/u;return nn.elements[0]*=d,nn.elements[1]*=d,nn.elements[2]*=d,nn.elements[4]*=p,nn.elements[5]*=p,nn.elements[6]*=p,nn.elements[8]*=v,nn.elements[9]*=v,nn.elements[10]*=v,e.setFromRotationMatrix(nn),r.x=c,r.y=h,r.z=u,this}makePerspective(t,e,r,s,a,c,h=Hi,u=!1){let d=this.elements,p=2*a/(e-t),v=2*a/(r-s),y=(e+t)/(e-t),m=(r+s)/(r-s),b,w;if(u)b=a/(c-a),w=c*a/(c-a);else if(h===Hi)b=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(h===Do)b=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=y,d[12]=0,d[1]=0,d[5]=v,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,r,s,a,c,h=Hi,u=!1){let d=this.elements,p=2/(e-t),v=2/(r-s),y=-(e+t)/(e-t),m=-(r+s)/(r-s),b,w;if(u)b=1/(c-a),w=c/(c-a);else if(h===Hi)b=-2/(c-a),w=-(c+a)/(c-a);else if(h===Do)b=-1/(c-a),w=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=0,d[12]=y,d[1]=0,d[5]=v,d[9]=0,d[13]=m,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,r=t.elements;for(let s=0;s<16;s++)if(e[s]!==r[s])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){let r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}},di=new Mt,nn=new sn,jh=new Mt(0,0,0),Kh=new Mt(1,1,1),Pn=new Mt,Sr=new Mt,Ge=new Mt,ja=new sn,Ka=new vn,Ji=class n{constructor(t=0,e=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,s=this._order){return this._x=t,this._y=e,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){let s=t.elements,a=s[0],c=s[4],h=s[8],u=s[1],d=s[5],p=s[9],v=s[2],y=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(y,d),this._z=0);break;case"YXZ":this._x=Math.asin(-he(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(h,m),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(he(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,m),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-he(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,m),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(h,m));break;case"XZY":this._z=Math.asin(-he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,d),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$h=0,$a=new Mt,pi=new vn,dn=new sn,wr=new Mt,ki=new Mt,Qh=new Mt,tu=new vn,Qa=new Mt(1,0,0),tl=new Mt(0,1,0),el=new Mt(0,0,1),nl={type:"added"},eu={type:"removed"},mi={type:"childadded",child:null},ao={type:"childremoved",child:null},jn=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Mt,e=new Ji,r=new vn,s=new Mt(1,1,1);function a(){r.setFromEuler(e,!1)}function c(){e.setFromQuaternion(r,void 0,!1)}e._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new se}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Qa,t)}rotateY(t){return this.rotateOnAxis(tl,t)}rotateZ(t){return this.rotateOnAxis(el,t)}translateOnAxis(t,e){return $a.copy(t).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qa,t)}translateY(t){return this.translateOnAxis(tl,t)}translateZ(t){return this.translateOnAxis(el,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?wr.copy(t):wr.set(t,e,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(ki,wr,this.up):dn.lookAt(wr,ki,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(dn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nl),mi.child=t,this.dispatchEvent(mi),mi.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eu),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nl),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,s=this.children.length;r<s;r++){let c=this.children[r].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);let s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,r=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*r-a[8]*s,a[13]+=r-a[1]*e-a[5]*r-a[9]*s,a[14]+=s-a[2]*e-a[6]*r-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e,r=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),e===!0){let a=this.children;for(let c=0,h=a.length;c<h;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(t){let e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let d=0,p=u.length;d<p;d++){let v=u[d];a(t.shapes,v)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,d=this.material.length;u<d;u++)h.push(a(t.materials,this.material[u]));s.material=h}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];s.animations.push(a(t.animations,u))}}if(e){let h=c(t.geometries),u=c(t.materials),d=c(t.textures),p=c(t.images),v=c(t.shapes),y=c(t.skeletons),m=c(t.animations),b=c(t.nodes);h.length>0&&(r.geometries=h),u.length>0&&(r.materials=u),d.length>0&&(r.textures=d),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),m.length>0&&(r.animations=m),b.length>0&&(r.nodes=b)}return r.object=s,r;function c(h){let u=[];for(let d in h){let p=h[d];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jn.DEFAULT_UP=new Mt(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function lo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var De=class{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,je.colorSpaceToWorking(this,e),this}setRGB(t,e,r,s=je.workingColorSpace){return this.r=t,this.g=e,this.b=r,je.colorSpaceToWorking(this,s),this}setHSL(t,e,r,s=je.workingColorSpace){if(t=Yh(t,1),e=he(e,0,1),r=he(r,0,1),e===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+e):r+e-r*e,c=2*r-a;this.r=lo(c,a,t+1/3),this.g=lo(c,a,t),this.b=lo(c,a,t-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function r(a){a!==void 0&&parseFloat(a)<1&&Ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,c=s[1],h=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);Ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let r=Tl[t.toLowerCase()];return r!==void 0?this.setHex(r,e):Ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return je.workingToColorSpace(Oe.copy(this),t),Math.round(he(Oe.r*255,0,255))*65536+Math.round(he(Oe.g*255,0,255))*256+Math.round(he(Oe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=je.workingColorSpace){je.workingToColorSpace(Oe.copy(this),e);let r=Oe.r,s=Oe.g,a=Oe.b,c=Math.max(r,s,a),h=Math.min(r,s,a),u,d,p=(h+c)/2;if(h===c)u=0,d=0;else{let v=c-h;switch(d=p<=.5?v/(c+h):v/(2-c-h),c){case r:u=(s-a)/v+(s<a?6:0);break;case s:u=(a-r)/v+2;break;case a:u=(r-s)/v+4;break}u/=6}return t.h=u,t.s=d,t.l=p,t}getRGB(t,e=je.workingColorSpace){return je.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ke){je.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,r=Oe.g,s=Oe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(t,e,r){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(Tr);let r=no(An.h,Tr.h,e),s=no(An.s,Tr.s,e),a=no(An.l,Tr.l,e);return this.setHSL(r,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,r=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*r+a[6]*s,this.g=a[1]*e+a[4]*r+a[7]*s,this.b=a[2]*e+a[5]*r+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new De;De.NAMES=Tl;var Rn=class{constructor(t=new Mt(1/0,1/0,1/0),e=new Mt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let r=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let r=t.geometry;if(r!==void 0){let a=r.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,rn):rn.fromBufferAttribute(a,c),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Er.copy(r.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),Pr.subVectors(this.max,zi),gi.subVectors(t.a,zi),vi.subVectors(t.b,zi),yi.subVectors(t.c,zi),Cn.subVectors(vi,gi),In.subVectors(yi,vi),Yn.subVectors(gi,yi);let e=[0,-Cn.z,Cn.y,0,-In.z,In.y,0,-Yn.z,Yn.y,Cn.z,0,-Cn.x,In.z,0,-In.x,Yn.z,0,-Yn.x,-Cn.y,Cn.x,0,-In.y,In.x,0,-Yn.y,Yn.x,0];return!co(e,gi,vi,yi,Pr)||(e=[1,0,0,0,1,0,0,0,1],!co(e,gi,vi,yi,Pr))?!1:(Ar.crossVectors(Cn,In),e=[Ar.x,Ar.y,Ar.z],co(e,gi,vi,yi,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pn=[new Mt,new Mt,new Mt,new Mt,new Mt,new Mt,new Mt,new Mt],rn=new Mt,Er=new Rn,gi=new Mt,vi=new Mt,yi=new Mt,Cn=new Mt,In=new Mt,Yn=new Mt,zi=new Mt,Pr=new Mt,Ar=new Mt,qn=new Mt;function co(n,t,e,r,s){for(let a=0,c=n.length-3;a<=c;a+=3){qn.fromArray(n,a);let h=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),u=t.dot(qn),d=e.dot(qn),p=r.dot(qn);if(Math.max(-Math.max(u,d,p),Math.min(u,d,p))>h)return!1}return!0}var Ce=new Mt,Cr=new Gt,nu=0,gn=class extends Jn{constructor(t,e,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=Sl,this.updateRanges=[],this.gpuType=bl,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[r+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=s,this}setXYZW(t,e,r,s,a){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),r=Ve(r,this.array),s=Ve(s,this.array),a=Ve(a,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var kr=class extends gn{constructor(t,e,r){super(new Uint16Array(t),e,r)}};var zr=class extends gn{constructor(t,e,r){super(new Uint32Array(t),e,r)}};var wi=class extends gn{constructor(t,e,r){super(new Float32Array(t),e,r)}},iu=new Rn,Vi=new Mt,ho=new Mt,Vr=class{constructor(t=new Mt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let r=this.center;e!==void 0?r.copy(e):iu.setFromPoints(t).getCenter(r);let s=0;for(let a=0,c=t.length;a<c;a++)s=Math.max(s,r.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);let e=Vi.lengthSq();if(e>this.radius*this.radius){let r=Math.sqrt(e),s=(r-this.radius)*.5;this.center.addScaledVector(Vi,s/r),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(ho)),this.expandByPoint(Vi.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ru=0,Je=new sn,uo=new jn,xi=new Mt,He=new Rn,Wi=new Rn,Le=new Mt,Wr=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wh(t)?zr:kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let a=new se().getNormalMatrix(t);r.applyNormalMatrix(a),r.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,r){return Je.makeTranslation(t,e,r),this.applyMatrix4(Je),this}scale(t,e,r){return Je.makeScale(t,e,r),this.applyMatrix4(Je),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let r=[];for(let s=0,a=t.length;s<a;s++){let c=t[s];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new wi(r,3))}else{let r=Math.min(t.length,e.count);for(let s=0;s<r;s++){let a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Mt(-1/0,-1/0,-1/0),new Mt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let a=e[r];He.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Mt,1/0);return}if(t){let r=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){let h=e[a];Wi.setFromBufferAttribute(h),this.morphTargetsRelative?(Le.addVectors(He.min,Wi.min),He.expandByPoint(Le),Le.addVectors(He.max,Wi.max),He.expandByPoint(Le)):(He.expandByPoint(Wi.min),He.expandByPoint(Wi.max))}He.getCenter(r);let s=0;for(let a=0,c=t.count;a<c;a++)Le.fromBufferAttribute(t,a),s=Math.max(s,r.distanceToSquared(Le));if(e)for(let a=0,c=e.length;a<c;a++){let h=e[a],u=this.morphTargetsRelative;for(let d=0,p=h.count;d<p;d++)Le.fromBufferAttribute(h,d),u&&(xi.fromBufferAttribute(t,d),Le.add(xi)),s=Math.max(s,r.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=e.position,s=e.normal,a=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new gn(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));let h=[],u=[];for(let O=0;O<r.count;O++)h[O]=new Mt,u[O]=new Mt;let d=new Mt,p=new Mt,v=new Mt,y=new Gt,m=new Gt,b=new Gt,w=new Mt,S=new Mt;function P(O,L,U){d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,L),v.fromBufferAttribute(r,U),y.fromBufferAttribute(a,O),m.fromBufferAttribute(a,L),b.fromBufferAttribute(a,U),p.sub(d),v.sub(d),m.sub(y),b.sub(y);let k=1/(m.x*b.y-b.x*m.y);isFinite(k)&&(w.copy(p).multiplyScalar(b.y).addScaledVector(v,-m.y).multiplyScalar(k),S.copy(v).multiplyScalar(m.x).addScaledVector(p,-b.x).multiplyScalar(k),h[O].add(w),h[L].add(w),h[U].add(w),u[O].add(S),u[L].add(S),u[U].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,L=R.length;O<L;++O){let U=R[O],k=U.start,Z=U.count;for(let tt=k,Q=k+Z;tt<Q;tt+=3)P(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let C=new Mt,A=new Mt,N=new Mt,F=new Mt;function E(O){N.fromBufferAttribute(s,O),F.copy(N);let L=h[O];C.copy(L),C.sub(N.multiplyScalar(N.dot(L))).normalize(),A.crossVectors(F,L);let k=A.dot(u[O])<0?-1:1;c.setXYZW(O,C.x,C.y,C.z,k)}for(let O=0,L=R.length;O<L;++O){let U=R[O],k=U.start,Z=U.count;for(let tt=k,Q=k+Z;tt<Q;tt+=3)E(t.getX(tt+0)),E(t.getX(tt+1)),E(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==e.count)r=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let y=0,m=r.count;y<m;y++)r.setXYZ(y,0,0,0);let s=new Mt,a=new Mt,c=new Mt,h=new Mt,u=new Mt,d=new Mt,p=new Mt,v=new Mt;if(t)for(let y=0,m=t.count;y<m;y+=3){let b=t.getX(y+0),w=t.getX(y+1),S=t.getX(y+2);s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,w),c.fromBufferAttribute(e,S),p.subVectors(c,a),v.subVectors(s,a),p.cross(v),h.fromBufferAttribute(r,b),u.fromBufferAttribute(r,w),d.fromBufferAttribute(r,S),h.add(p),u.add(p),d.add(p),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,u.x,u.y,u.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let y=0,m=e.count;y<m;y+=3)s.fromBufferAttribute(e,y+0),a.fromBufferAttribute(e,y+1),c.fromBufferAttribute(e,y+2),p.subVectors(c,a),v.subVectors(s,a),p.cross(v),r.setXYZ(y+0,p.x,p.y,p.z),r.setXYZ(y+1,p.x,p.y,p.z),r.setXYZ(y+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(h,u){let d=h.array,p=h.itemSize,v=h.normalized,y=new d.constructor(u.length*p),m=0,b=0;for(let w=0,S=u.length;w<S;w++){h.isInterleavedBufferAttribute?m=u[w]*h.data.stride+h.offset:m=u[w]*p;for(let P=0;P<p;P++)y[b++]=d[m++]}return new gn(y,p,v)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,r=this.index.array,s=this.attributes;for(let h in s){let u=s[h],d=t(u,r);e.setAttribute(h,d)}let a=this.morphAttributes;for(let h in a){let u=[],d=a[h];for(let p=0,v=d.length;p<v;p++){let y=d[p],m=t(y,r);u.push(m)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let h=0,u=c.length;h<u;h++){let d=c[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let r=this.attributes;for(let u in r){let d=r[u];t.data.attributes[u]=d.toJSON(t.data)}let s={},a=!1;for(let u in this.morphAttributes){let d=this.morphAttributes[u],p=[];for(let v=0,y=d.length;v<y;v++){let m=d[v];p.push(m.toJSON(t.data))}p.length>0&&(s[u]=p,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let s=t.attributes;for(let d in s){let p=s[d];this.setAttribute(d,p.clone(e))}let a=t.morphAttributes;for(let d in a){let p=[],v=a[d];for(let y=0,m=v.length;y<m;y++)p.push(v[y].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let d=0,p=c.length;d<p;d++){let v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let r=this.getUtoTmapping(t);return this.getPoint(r,e)}getPoints(t=5){let e=[];for(let r=0;r<=t;r++)e.push(this.getPoint(r/t));return e}getSpacedPoints(t=5){let e=[];for(let r=0;r<=t;r++)e.push(this.getPointAt(r/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],r,s=this.getPoint(0),a=0;e.push(0);for(let c=1;c<=t;c++)r=this.getPoint(c/t),a+=r.distanceTo(s),e.push(a),s=r;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let r=this.getLengths(),s=0,a=r.length,c;e?c=e:c=t*r[a-1];let h=0,u=a-1,d;for(;h<=u;)if(s=Math.floor(h+(u-h)/2),d=r[s]-c,d<0)h=s+1;else if(d>0)u=s-1;else{u=s;break}if(s=u,r[s]===c)return s/(a-1);let p=r[s],y=r[s+1]-p,m=(c-p)/y;return(s+m)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let c=this.getPoint(s),h=this.getPoint(a),u=e||(c.isVector2?new Gt:new Mt);return u.copy(h).sub(c).normalize(),u}getTangentAt(t,e){let r=this.getUtoTmapping(t);return this.getTangent(r,e)}computeFrenetFrames(t,e=!1){let r=new Mt,s=[],a=[],c=[],h=new Mt,u=new sn;for(let m=0;m<=t;m++){let b=m/t;s[m]=this.getTangentAt(b,new Mt)}a[0]=new Mt,c[0]=new Mt;let d=Number.MAX_VALUE,p=Math.abs(s[0].x),v=Math.abs(s[0].y),y=Math.abs(s[0].z);p<=d&&(d=p,r.set(1,0,0)),v<=d&&(d=v,r.set(0,1,0)),y<=d&&r.set(0,0,1),h.crossVectors(s[0],r).normalize(),a[0].crossVectors(s[0],h),c[0].crossVectors(s[0],a[0]);for(let m=1;m<=t;m++){if(a[m]=a[m-1].clone(),c[m]=c[m-1].clone(),h.crossVectors(s[m-1],s[m]),h.length()>Number.EPSILON){h.normalize();let b=Math.acos(he(s[m-1].dot(s[m]),-1,1));a[m].applyMatrix4(u.makeRotationAxis(h,b))}c[m].crossVectors(s[m],a[m])}if(e===!0){let m=Math.acos(he(a[0].dot(a[t]),-1,1));m/=t,s[0].dot(h.crossVectors(a[0],a[t]))>0&&(m=-m);for(let b=1;b<=t;b++)a[b].applyMatrix4(u.makeRotationAxis(s[b],m*b)),c[b].crossVectors(s[b],a[b])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ti=class extends Xe{constructor(t=0,e=0,r=1,s=1,a=0,c=Math.PI*2,h=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=r,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=h,this.aRotation=u}getPoint(t,e=new Gt){let r=e,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);let h=this.aStartAngle+t*a,u=this.aX+this.xRadius*Math.cos(h),d=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){let p=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=u-this.aX,m=d-this.aY;u=y*p-m*v+this.aX,d=y*v+m*p+this.aY}return r.set(u,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gr=class extends Ti{constructor(t,e,r,s,a,c){super(t,e,r,r,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}};function $o(){let n=0,t=0,e=0,r=0;function s(a,c,h,u){n=a,t=h,e=-3*a+3*c-2*h-u,r=2*a-2*c+h+u}return{initCatmullRom:function(a,c,h,u,d){s(c,h,d*(h-a),d*(u-c))},initNonuniformCatmullRom:function(a,c,h,u,d,p,v){let y=(c-a)/d-(h-a)/(d+p)+(h-c)/p,m=(h-c)/p-(u-c)/(p+v)+(u-h)/v;y*=p,m*=p,s(c,h,y,m)},calc:function(a){let c=a*a,h=c*a;return n+t*a+e*c+r*h}}}var il=new Mt,rl=new Mt,fo=new $o,po=new $o,mo=new $o,Hr=class extends Xe{constructor(t=[],e=!1,r="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=r,this.tension=s}getPoint(t,e=new Mt){let r=e,s=this.points,a=s.length,c=(a-(this.closed?0:1))*t,h=Math.floor(c),u=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/a)+1)*a:u===0&&h===a-1&&(h=a-2,u=1);let d,p;this.closed||h>0?d=s[(h-1)%a]:(rl.subVectors(s[0],s[1]).add(s[0]),d=rl);let v=s[h%a],y=s[(h+1)%a];if(this.closed||h+2<a?p=s[(h+2)%a]:(il.subVectors(s[a-1],s[a-2]).add(s[a-1]),p=il),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,b=Math.pow(d.distanceToSquared(v),m),w=Math.pow(v.distanceToSquared(y),m),S=Math.pow(y.distanceToSquared(p),m);w<1e-4&&(w=1),b<1e-4&&(b=w),S<1e-4&&(S=w),fo.initNonuniformCatmullRom(d.x,v.x,y.x,p.x,b,w,S),po.initNonuniformCatmullRom(d.y,v.y,y.y,p.y,b,w,S),mo.initNonuniformCatmullRom(d.z,v.z,y.z,p.z,b,w,S)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(d.x,v.x,y.x,p.x,this.tension),po.initCatmullRom(d.y,v.y,y.y,p.y,this.tension),mo.initCatmullRom(d.z,v.z,y.z,p.z,this.tension));return r.set(fo.calc(u),po.calc(u),mo.calc(u)),r}copy(t){super.copy(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,r=this.points.length;e<r;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sl(n,t,e,r,s){let a=(r-t)*.5,c=(s-e)*.5,h=n*n,u=n*h;return(2*e-2*r+a+c)*u+(-3*e+3*r-2*a-c)*h+a*n+e}function su(n,t){let e=1-n;return e*e*t}function ou(n,t){return 2*(1-n)*n*t}function au(n,t){return n*n*t}function Yi(n,t,e,r){return su(n,t)+ou(n,e)+au(n,r)}function lu(n,t){let e=1-n;return e*e*e*t}function cu(n,t){let e=1-n;return 3*e*e*n*t}function hu(n,t){return 3*(1-n)*n*n*t}function uu(n,t){return n*n*n*t}function qi(n,t,e,r,s){return lu(n,t)+cu(n,e)+hu(n,r)+uu(n,s)}var ji=class extends Xe{constructor(t=new Gt,e=new Gt,r=new Gt,s=new Gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=r,this.v3=s}getPoint(t,e=new Gt){let r=e,s=this.v0,a=this.v1,c=this.v2,h=this.v3;return r.set(qi(t,s.x,a.x,c.x,h.x),qi(t,s.y,a.y,c.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xr=class extends Xe{constructor(t=new Mt,e=new Mt,r=new Mt,s=new Mt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=r,this.v3=s}getPoint(t,e=new Mt){let r=e,s=this.v0,a=this.v1,c=this.v2,h=this.v3;return r.set(qi(t,s.x,a.x,c.x,h.x),qi(t,s.y,a.y,c.y,h.y),qi(t,s.z,a.z,c.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ki=class extends Xe{constructor(t=new Gt,e=new Gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Gt){let r=e;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends Xe{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let r=e;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$i=class extends Xe{constructor(t=new Gt,e=new Gt,r=new Gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=r}getPoint(t,e=new Gt){let r=e,s=this.v0,a=this.v1,c=this.v2;return r.set(Yi(t,s.x,a.x,c.x),Yi(t,s.y,a.y,c.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends Xe{constructor(t=new Mt,e=new Mt,r=new Mt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=r}getPoint(t,e=new Mt){let r=e,s=this.v0,a=this.v1,c=this.v2;return r.set(Yi(t,s.x,a.x,c.x),Yi(t,s.y,a.y,c.y),Yi(t,s.z,a.z,c.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qi=class extends Xe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Gt){let r=e,s=this.points,a=(s.length-1)*t,c=Math.floor(a),h=a-c,u=s[c===0?c:c-1],d=s[c],p=s[c>s.length-2?s.length-1:c+1],v=s[c>s.length-3?s.length-1:c+2];return r.set(sl(h,u.x,d.x,p.x,v.x),sl(h,u.y,d.y,p.y,v.y)),r}copy(t){super.copy(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,r=this.points.length;e<r;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){let s=t.points[e];this.points.push(new Gt().fromArray(s))}return this}},Oo=Object.freeze({__proto__:null,ArcCurve:Gr,CatmullRomCurve3:Hr,CubicBezierCurve:ji,CubicBezierCurve3:Xr,EllipseCurve:Ti,LineCurve:Ki,LineCurve3:Yr,QuadraticBezierCurve:$i,QuadraticBezierCurve3:qr,SplineCurve:Qi}),Zr=class extends Xe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[r](e,t))}return this}getPoint(t,e){let r=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=r){let c=s[a]-r,h=this.curves[a],u=h.getLength(),d=u===0?0:1-c/u;return h.getPointAt(d,e)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let r=0,s=this.curves.length;r<s;r++)e+=this.curves[r].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let r=0;r<=t;r++)e.push(this.getPoint(r/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],r;for(let s=0,a=this.curves;s<a.length;s++){let c=a[s],h=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,u=c.getPoints(h);for(let d=0;d<u.length;d++){let p=u[d];r&&r.equals(p)||(e.push(p),r=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,r=t.curves.length;e<r;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,r=this.curves.length;e<r;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,r=t.curves.length;e<r;e++){let s=t.curves[e];this.curves.push(new Oo[s.type]().fromJSON(s))}return this}},yn=class extends Zr{constructor(t){super(),this.type="Path",this.currentPoint=new Gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,r=t.length;e<r;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let r=new Ki(this.currentPoint.clone(),new Gt(t,e));return this.curves.push(r),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,r,s){let a=new $i(this.currentPoint.clone(),new Gt(t,e),new Gt(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}bezierCurveTo(t,e,r,s,a,c){let h=new ji(this.currentPoint.clone(),new Gt(t,e),new Gt(r,s),new Gt(a,c));return this.curves.push(h),this.currentPoint.set(a,c),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),r=new Qi(e);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,r,s,a,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+h,e+u,r,s,a,c),this}absarc(t,e,r,s,a,c){return this.absellipse(t,e,r,r,s,a,c),this}ellipse(t,e,r,s,a,c,h,u){let d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+d,e+p,r,s,a,c,h,u),this}absellipse(t,e,r,s,a,c,h,u){let d=new Ti(t,e,r,s,a,c,h,u);if(this.curves.length>0){let v=d.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(d);let p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ln=class extends yn{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let r=0,s=this.holes.length;r<s;r++)e[r]=this.holes[r].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,r=t.holes.length;e<r;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,r=this.holes.length;e<r;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,r=t.holes.length;e<r;e++){let s=t.holes[e];this.holes.push(new yn().fromJSON(s))}return this}};function fu(n,t,e=2){let r=t&&t.length,s=r?t[0]*e:n.length,a=El(n,0,s,e,!0),c=[];if(!a||a.next===a.prev)return c;let h,u,d;if(r&&(a=vu(n,t,a,e)),n.length>80*e){h=n[0],u=n[1];let p=h,v=u;for(let y=e;y<s;y+=e){let m=n[y],b=n[y+1];m<h&&(h=m),b<u&&(u=b),m>p&&(p=m),b>v&&(v=b)}d=Math.max(p-h,v-u),d=d!==0?32767/d:0}return tr(a,c,e,h,u,d,0),c}function El(n,t,e,r,s){let a;if(s===Au(n,t,e,r)>0)for(let c=t;c<e;c+=r)a=ol(c/r|0,n[c],n[c+1],a);else for(let c=e-r;c>=t;c-=r)a=ol(c/r|0,n[c],n[c+1],a);return a&&Ei(a,a.next)&&(nr(a),a=a.next),a}function Kn(n,t){if(!n)return n;t||(t=n);let e=n,r;do if(r=!1,!e.steiner&&(Ei(e,e.next)||Te(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;r=!0}else e=e.next;while(r||e!==t);return t}function tr(n,t,e,r,s,a,c){if(!n)return;!c&&a&&Mu(n,r,s,a);let h=n;for(;n.prev!==n.next;){let u=n.prev,d=n.next;if(a?pu(n,r,s,a):du(n)){t.push(u.i,n.i,d.i),nr(n),n=d.next,h=d.next;continue}if(n=d,n===h){c?c===1?(n=mu(Kn(n),t),tr(n,t,e,r,s,a,2)):c===2&&gu(n,t,e,r,s,a):tr(Kn(n),t,e,r,s,a,1);break}}}function du(n){let t=n.prev,e=n,r=n.next;if(Te(t,e,r)>=0)return!1;let s=t.x,a=e.x,c=r.x,h=t.y,u=e.y,d=r.y,p=Math.min(s,a,c),v=Math.min(h,u,d),y=Math.max(s,a,c),m=Math.max(h,u,d),b=r.next;for(;b!==t;){if(b.x>=p&&b.x<=y&&b.y>=v&&b.y<=m&&Xi(s,h,a,u,c,d,b.x,b.y)&&Te(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function pu(n,t,e,r){let s=n.prev,a=n,c=n.next;if(Te(s,a,c)>=0)return!1;let h=s.x,u=a.x,d=c.x,p=s.y,v=a.y,y=c.y,m=Math.min(h,u,d),b=Math.min(p,v,y),w=Math.max(h,u,d),S=Math.max(p,v,y),P=Uo(m,b,t,e,r),R=Uo(w,S,t,e,r),C=n.prevZ,A=n.nextZ;for(;C&&C.z>=P&&A&&A.z<=R;){if(C.x>=m&&C.x<=w&&C.y>=b&&C.y<=S&&C!==s&&C!==c&&Xi(h,p,u,v,d,y,C.x,C.y)&&Te(C.prev,C,C.next)>=0||(C=C.prevZ,A.x>=m&&A.x<=w&&A.y>=b&&A.y<=S&&A!==s&&A!==c&&Xi(h,p,u,v,d,y,A.x,A.y)&&Te(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;C&&C.z>=P;){if(C.x>=m&&C.x<=w&&C.y>=b&&C.y<=S&&C!==s&&C!==c&&Xi(h,p,u,v,d,y,C.x,C.y)&&Te(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;A&&A.z<=R;){if(A.x>=m&&A.x<=w&&A.y>=b&&A.y<=S&&A!==s&&A!==c&&Xi(h,p,u,v,d,y,A.x,A.y)&&Te(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function mu(n,t){let e=n;do{let r=e.prev,s=e.next.next;!Ei(r,s)&&Al(r,e,e.next,s)&&er(r,s)&&er(s,r)&&(t.push(r.i,e.i,s.i),nr(e),nr(e.next),e=n=s),e=e.next}while(e!==n);return Kn(e)}function gu(n,t,e,r,s,a){let c=n;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&Tu(c,h)){let u=Cl(c,h);c=Kn(c,c.next),u=Kn(u,u.next),tr(c,t,e,r,s,a,0),tr(u,t,e,r,s,a,0);return}h=h.next}c=c.next}while(c!==n)}function vu(n,t,e,r){let s=[];for(let a=0,c=t.length;a<c;a++){let h=t[a]*r,u=a<c-1?t[a+1]*r:n.length,d=El(n,h,u,r,!1);d===d.next&&(d.steiner=!0),s.push(wu(d))}s.sort(yu);for(let a=0;a<s.length;a++)e=xu(s[a],e);return e}function yu(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let r=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=r-s}return e}function xu(n,t){let e=_u(n,t);if(!e)return t;let r=Cl(e,n);return Kn(r,r.next),Kn(e,e.next)}function _u(n,t){let e=t,r=n.x,s=n.y,a=-1/0,c;if(Ei(n,e))return e;do{if(Ei(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=r&&v>a&&(a=v,c=e.x<e.next.x?e:e.next,v===r))return c}e=e.next}while(e!==t);if(!c)return null;let h=c,u=c.x,d=c.y,p=1/0;e=c;do{if(r>=e.x&&e.x>=u&&r!==e.x&&Pl(s<d?r:a,s,u,d,s<d?a:r,s,e.x,e.y)){let v=Math.abs(s-e.y)/(r-e.x);er(e,n)&&(v<p||v===p&&(e.x>c.x||e.x===c.x&&bu(c,e)))&&(c=e,p=v)}e=e.next}while(e!==h);return c}function bu(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function Mu(n,t,e,r){let s=n;do s.z===0&&(s.z=Uo(s.x,s.y,t,e,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Su(s)}function Su(n){let t,e=1;do{let r=n,s;n=null;let a=null;for(t=0;r;){t++;let c=r,h=0;for(let d=0;d<e&&(h++,c=c.nextZ,!!c);d++);let u=e;for(;h>0||u>0&&c;)h!==0&&(u===0||!c||r.z<=c.z)?(s=r,r=r.nextZ,h--):(s=c,c=c.nextZ,u--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;r=c}a.nextZ=null,e*=2}while(t>1);return n}function Uo(n,t,e,r,s){return n=(n-e)*s|0,t=(t-r)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function wu(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Pl(n,t,e,r,s,a,c,h){return(s-c)*(t-h)>=(n-c)*(a-h)&&(n-c)*(r-h)>=(e-c)*(t-h)&&(e-c)*(a-h)>=(s-c)*(r-h)}function Xi(n,t,e,r,s,a,c,h){return!(n===c&&t===h)&&Pl(n,t,e,r,s,a,c,h)}function Tu(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Eu(n,t)&&(er(n,t)&&er(t,n)&&Pu(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||Ei(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ei(n,t){return n.x===t.x&&n.y===t.y}function Al(n,t,e,r){let s=Rr(Te(n,t,e)),a=Rr(Te(n,t,r)),c=Rr(Te(e,r,n)),h=Rr(Te(e,r,t));return!!(s!==a&&c!==h||s===0&&Ir(n,e,t)||a===0&&Ir(n,r,t)||c===0&&Ir(e,n,r)||h===0&&Ir(e,t,r))}function Ir(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Rr(n){return n>0?1:n<0?-1:0}function Eu(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Al(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function er(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function Pu(n,t){let e=n,r=!1,s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(r=!r),e=e.next;while(e!==n);return r}function Cl(n,t){let e=Bo(n.i,n.x,n.y),r=Bo(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,r.next=e,e.prev=r,a.next=r,r.prev=a,r}function ol(n,t,e,r){let s=Bo(n,t,e);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bo(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Au(n,t,e,r){let s=0;for(let a=t,c=e-r;a<e;a+=r)s+=(n[c]-n[a])*(n[a+1]+n[c+1]),c=a;return s}var ko=class{static triangulate(t,e,r=2){return fu(t,e,r)}},Zn=class n{static area(t){let e=t.length,r=0;for(let s=e-1,a=0;a<e;s=a++)r+=t[s].x*t[a].y-t[a].x*t[s].y;return r*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let r=[],s=[],a=[];al(t),ll(r,t);let c=t.length;e.forEach(al);for(let u=0;u<e.length;u++)s.push(c),c+=e[u].length,ll(r,e[u]);let h=ko.triangulate(r,s);for(let u=0;u<h.length;u+=3)a.push(h.slice(u,u+3));return a}};function al(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ll(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var $n=class n extends Wr{constructor(t=new Ln([new Gt(.5,.5),new Gt(-.5,.5),new Gt(-.5,-.5),new Gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let r=this,s=[],a=[];for(let h=0,u=t.length;h<u;h++){let d=t[h];c(d)}this.setAttribute("position",new wi(s,3)),this.setAttribute("uv",new wi(a,2)),this.computeVertexNormals();function c(h){let u=[],d=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,y=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,b=e.bevelSize!==void 0?e.bevelSize:m-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,S=e.bevelSegments!==void 0?e.bevelSegments:3,P=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Cu,C,A=!1,N,F,E,O;if(P){C=P.getSpacedPoints(p),A=!0,y=!1;let dt=P.isCatmullRomCurve3?P.closed:!1;N=P.computeFrenetFrames(p,dt),F=new Mt,E=new Mt,O=new Mt}y||(S=0,m=0,b=0,w=0);let L=h.extractPoints(d),U=L.shape,k=L.holes;if(!Zn.isClockWise(U)){U=U.reverse();for(let dt=0,ht=k.length;dt<ht;dt++){let xt=k[dt];Zn.isClockWise(xt)&&(k[dt]=xt.reverse())}}function tt(dt){let xt=10000000000000001e-36,Pt=dt[0];for(let gt=1;gt<=dt.length;gt++){let ut=gt%dt.length,pt=dt[ut],Bt=pt.x-Pt.x,Jt=pt.y-Pt.y,At=Bt*Bt+Jt*Jt,ne=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(Pt.x),Math.abs(Pt.y)),ee=xt*ne*ne;if(At<=ee){dt.splice(ut,1),gt--;continue}Pt=pt}}tt(U),k.forEach(tt);let Q=k.length,it=U;for(let dt=0;dt<Q;dt++){let ht=k[dt];U=U.concat(ht)}function Y(dt,ht,xt){return ht||we("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(ht,xt)}let et=U.length;function H(dt,ht,xt){let Pt,gt,ut,pt=dt.x-ht.x,Bt=dt.y-ht.y,Jt=xt.x-dt.x,At=xt.y-dt.y,ne=pt*pt+Bt*Bt,ee=pt*At-Bt*Jt;if(Math.abs(ee)>Number.EPSILON){let Ut=Math.sqrt(ne),wt=Math.sqrt(Jt*Jt+At*At),Ot=ht.x-Bt/Ut,Nt=ht.y+pt/Ut,kt=xt.x-At/wt,Zt=xt.y+Jt/wt,jt=((kt-Ot)*At-(Zt-Nt)*Jt)/(pt*At-Bt*Jt);Pt=Ot+pt*jt-dt.x,gt=Nt+Bt*jt-dt.y;let Ht=Pt*Pt+gt*gt;if(Ht<=2)return new Gt(Pt,gt);ut=Math.sqrt(Ht/2)}else{let Ut=!1;pt>Number.EPSILON?Jt>Number.EPSILON&&(Ut=!0):pt<-Number.EPSILON?Jt<-Number.EPSILON&&(Ut=!0):Math.sign(Bt)===Math.sign(At)&&(Ut=!0),Ut?(Pt=-Bt,gt=pt,ut=Math.sqrt(ne)):(Pt=pt,gt=Bt,ut=Math.sqrt(ne/2))}return new Gt(Pt/ut,gt/ut)}let K=[];for(let dt=0,ht=it.length,xt=ht-1,Pt=dt+1;dt<ht;dt++,xt++,Pt++)xt===ht&&(xt=0),Pt===ht&&(Pt=0),K[dt]=H(it[dt],it[xt],it[Pt]);let lt=[],J,z=K.concat();for(let dt=0,ht=Q;dt<ht;dt++){let xt=k[dt];J=[];for(let Pt=0,gt=xt.length,ut=gt-1,pt=Pt+1;Pt<gt;Pt++,ut++,pt++)ut===gt&&(ut=0),pt===gt&&(pt=0),J[Pt]=H(xt[Pt],xt[ut],xt[pt]);lt.push(J),z=z.concat(J)}let B;if(S===0)B=Zn.triangulateShape(it,k);else{let dt=[],ht=[];for(let xt=0;xt<S;xt++){let Pt=xt/S,gt=m*Math.cos(Pt*Math.PI/2),ut=b*Math.sin(Pt*Math.PI/2)+w;for(let pt=0,Bt=it.length;pt<Bt;pt++){let Jt=Y(it[pt],K[pt],ut);St(Jt.x,Jt.y,-gt),Pt===0&&dt.push(Jt)}for(let pt=0,Bt=Q;pt<Bt;pt++){let Jt=k[pt];J=lt[pt];let At=[];for(let ne=0,ee=Jt.length;ne<ee;ne++){let Ut=Y(Jt[ne],J[ne],ut);St(Ut.x,Ut.y,-gt),Pt===0&&At.push(Ut)}Pt===0&&ht.push(At)}}B=Zn.triangulateShape(dt,ht)}let j=B.length,q=b+w;for(let dt=0;dt<et;dt++){let ht=y?Y(U[dt],z[dt],q):U[dt];A?(E.copy(N.normals[0]).multiplyScalar(ht.x),F.copy(N.binormals[0]).multiplyScalar(ht.y),O.copy(C[0]).add(E).add(F),St(O.x,O.y,O.z)):St(ht.x,ht.y,0)}for(let dt=1;dt<=p;dt++)for(let ht=0;ht<et;ht++){let xt=y?Y(U[ht],z[ht],q):U[ht];A?(E.copy(N.normals[dt]).multiplyScalar(xt.x),F.copy(N.binormals[dt]).multiplyScalar(xt.y),O.copy(C[dt]).add(E).add(F),St(O.x,O.y,O.z)):St(xt.x,xt.y,v/p*dt)}for(let dt=S-1;dt>=0;dt--){let ht=dt/S,xt=m*Math.cos(ht*Math.PI/2),Pt=b*Math.sin(ht*Math.PI/2)+w;for(let gt=0,ut=it.length;gt<ut;gt++){let pt=Y(it[gt],K[gt],Pt);St(pt.x,pt.y,v+xt)}for(let gt=0,ut=k.length;gt<ut;gt++){let pt=k[gt];J=lt[gt];for(let Bt=0,Jt=pt.length;Bt<Jt;Bt++){let At=Y(pt[Bt],J[Bt],Pt);A?St(At.x,At.y+C[p-1].y,C[p-1].x+xt):St(At.x,At.y,v+xt)}}}nt(),bt();function nt(){let dt=s.length/3;if(y){let ht=0,xt=et*ht;for(let Pt=0;Pt<j;Pt++){let gt=B[Pt];Lt(gt[2]+xt,gt[1]+xt,gt[0]+xt)}ht=p+S*2,xt=et*ht;for(let Pt=0;Pt<j;Pt++){let gt=B[Pt];Lt(gt[0]+xt,gt[1]+xt,gt[2]+xt)}}else{for(let ht=0;ht<j;ht++){let xt=B[ht];Lt(xt[2],xt[1],xt[0])}for(let ht=0;ht<j;ht++){let xt=B[ht];Lt(xt[0]+et*p,xt[1]+et*p,xt[2]+et*p)}}r.addGroup(dt,s.length/3-dt,0)}function bt(){let dt=s.length/3,ht=0;Tt(it,ht),ht+=it.length;for(let xt=0,Pt=k.length;xt<Pt;xt++){let gt=k[xt];Tt(gt,ht),ht+=gt.length}r.addGroup(dt,s.length/3-dt,1)}function Tt(dt,ht){let xt=dt.length;for(;--xt>=0;){let Pt=xt,gt=xt-1;gt<0&&(gt=dt.length-1);for(let ut=0,pt=p+S*2;ut<pt;ut++){let Bt=et*ut,Jt=et*(ut+1),At=ht+Pt+Bt,ne=ht+gt+Bt,ee=ht+gt+Jt,Ut=ht+Pt+Jt;Wt(At,ne,ee,Ut)}}}function St(dt,ht,xt){u.push(dt),u.push(ht),u.push(xt)}function Lt(dt,ht,xt){Yt(dt),Yt(ht),Yt(xt);let Pt=s.length/3,gt=R.generateTopUV(r,s,Pt-3,Pt-2,Pt-1);Ct(gt[0]),Ct(gt[1]),Ct(gt[2])}function Wt(dt,ht,xt,Pt){Yt(dt),Yt(ht),Yt(Pt),Yt(ht),Yt(xt),Yt(Pt);let gt=s.length/3,ut=R.generateSideWallUV(r,s,gt-6,gt-3,gt-2,gt-1);Ct(ut[0]),Ct(ut[1]),Ct(ut[3]),Ct(ut[1]),Ct(ut[2]),Ct(ut[3])}function Yt(dt){s.push(u[dt*3+0]),s.push(u[dt*3+1]),s.push(u[dt*3+2])}function Ct(dt){a.push(dt.x),a.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,r=this.parameters.options;return Iu(e,r,t)}static fromJSON(t,e){let r=[];for(let a=0,c=t.shapes.length;a<c;a++){let h=e[t.shapes[a]];r.push(h)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oo[s.type]().fromJSON(s)),new n(r,t.options)}},Cu={generateTopUV:function(n,t,e,r,s){let a=t[e*3],c=t[e*3+1],h=t[r*3],u=t[r*3+1],d=t[s*3],p=t[s*3+1];return[new Gt(a,c),new Gt(h,u),new Gt(d,p)]},generateSideWallUV:function(n,t,e,r,s,a){let c=t[e*3],h=t[e*3+1],u=t[e*3+2],d=t[r*3],p=t[r*3+1],v=t[r*3+2],y=t[s*3],m=t[s*3+1],b=t[s*3+2],w=t[a*3],S=t[a*3+1],P=t[a*3+2];return Math.abs(h-p)<Math.abs(c-d)?[new Gt(c,1-u),new Gt(d,1-v),new Gt(y,1-b),new Gt(w,1-P)]:[new Gt(h,1-u),new Gt(p,1-v),new Gt(m,1-b),new Gt(S,1-P)]}};function Iu(n,t,e){if(e.shapes=[],Array.isArray(n))for(let r=0,s=n.length;r<s;r++){let a=n[r];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Il(n){let t={};for(let e in n){t[e]={};for(let r in n[e]){let s=n[e][r];if(cl(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=s.clone();else if(Array.isArray(s))if(cl(s[0])){let a=[];for(let c=0,h=s.length;c<h;c++)a[c]=s[c].clone();t[e][r]=a}else t[e][r]=s.slice();else t[e][r]=s}}return t}function ke(n){let t={};for(let e=0;e<n.length;e++){let r=Il(n[e]);for(let s in r)t[s]=r[s]}return t}function cl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _i(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function go(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Dn=class{constructor(t,e,r,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(r),this.sampleValues=e,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,r=this._cachedIndex,s=e[r],a=e[r-1];n:{t:{let c;e:{i:if(!(t<s)){for(let h=r+2;;){if(s===void 0){if(t<a)break i;return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===h)break;if(a=s,s=e[++r],t<s)break t}c=e.length;break e}if(!(t>=a)){let h=e[1];t<h&&(r=2,a=h);for(let u=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===u)break;if(s=a,a=e[--r-1],t>=a)break t}c=r,r=0;break e}break n}for(;r<c;){let h=r+c>>>1;t<e[h]?c=h:r=h+1}if(s=e[r],a=e[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,s)}return this.interpolate_(r,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,r=this.sampleValues,s=this.valueSize,a=t*s;for(let c=0;c!==s;++c)e[c]=r[a+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jr=class extends Dn{constructor(t,e,r,s){super(t,e,r,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ao,endingEnd:Ao}}intervalChanged_(t,e,r){let s=this.parameterPositions,a=t-2,c=t+1,h=s[a],u=s[c];if(h===void 0)switch(this.getSettings_().endingStart){case Co:a=t,h=2*e-r;break;case Io:a=s.length-2,h=e+s[a]-s[a+1];break;default:a=t,h=r}if(u===void 0)switch(this.getSettings_().endingEnd){case Co:c=t,u=2*r-e;break;case Io:c=1,u=r+s[1]-s[0];break;default:c=t-1,u=e}let d=(r-e)*.5,p=this.valueSize;this._weightPrev=d/(e-h),this._weightNext=d/(u-r),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(t,e,r,s){let a=this.resultBuffer,c=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,p=this._offsetPrev,v=this._offsetNext,y=this._weightPrev,m=this._weightNext,b=(r-e)/(s-e),w=b*b,S=w*b,P=-y*S+2*y*w-y*b,R=(1+y)*S+(-1.5-2*y)*w+(-.5+y)*b+1,C=(-1-m)*S+(1.5+m)*w+.5*b,A=m*S-m*w;for(let N=0;N!==h;++N)a[N]=P*c[p+N]+R*c[d+N]+C*c[u+N]+A*c[v+N];return a}},jr=class extends Dn{constructor(t,e,r,s){super(t,e,r,s)}interpolate_(t,e,r,s){let a=this.resultBuffer,c=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,p=(r-e)/(s-e),v=1-p;for(let y=0;y!==h;++y)a[y]=c[d+y]*v+c[u+y]*p;return a}},Kr=class extends Dn{constructor(t,e,r,s){super(t,e,r,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$r=class extends Dn{interpolate_(t,e,r,s){let a=this.resultBuffer,c=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,p=this.inTangents,v=this.outTangents;if(!p||!v){let b=(r-e)/(s-e),w=1-b;for(let S=0;S!==h;++S)a[S]=c[d+S]*w+c[u+S]*b;return a}let y=h*2,m=t-1;for(let b=0;b!==h;++b){let w=c[d+b],S=c[u+b],P=m*y+b*2,R=v[P],C=v[P+1],A=t*y+b*2,N=p[A],F=p[A+1],E=Lu(r,e,R,N,s);a[b]=Rl(E,w,C,F,S)}return a}};function Rl(n,t,e,r,s){let a=1-n;return a*a*a*t+3*a*a*n*e+3*a*n*n*r+n*n*n*s}function Ru(n,t,e,r,s){let a=1-n;return 3*a*a*(e-t)+6*a*n*(r-e)+3*n*n*(s-r)}function Lu(n,t,e,r,s){let a=(n-t)/(s-t);for(let c=0;c<8;c++){let h=Rl(a,t,e,r,s)-n;if(Math.abs(h)<1e-10)break;let u=Ru(a,t,e,r,s);if(Math.abs(u)<1e-10)break;a=Math.max(0,Math.min(1,a-h/u))}return a}var Ye=class{constructor(t,e,r,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_i(e,this.TimeBufferType),this.values=_i(r,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,r;if(e.toJSON!==this.toJSON)r=e.toJSON(t);else{r={name:t.name,times:_i(t.times,Array),values:_i(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(r.interpolation=s),go(t.settings)&&(r.settings={inTangents:_i(t.settings.inTangents,Array),outTangents:_i(t.settings.outTangents,Array)})}return r.type=t.ValueTypeName,r}InterpolantFactoryMethodDiscrete(t){return new Kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $r(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zi:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case Lr:e=this.InterpolantFactoryMethodSmooth;break;case Po:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return Ie("KeyframeTrack:",r),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Lr;case this.InterpolantFactoryMethodBezier:return Po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let r=0,s=e.length;r!==s;++r)e[r]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let r=0,s=e.length;r!==s;++r)e[r]*=t;go(this.settings)&&(hl(this.settings.inTangents,t),hl(this.settings.outTangents,t))}return this}trim(t,e){let r=this.times,s=r.length,a=0,c=s-1;for(;a!==s&&r[a]<t;)++a;for(;c!==-1&&r[c]>e;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);let h=this.getValueSize();this.times=r.slice(a,c),this.values=this.values.slice(a*h,c*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),t=!1);let r=this.times,s=this.values,a=r.length;a===0&&(we("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let h=0;h!==a;h++){let u=r[h];if(typeof u=="number"&&isNaN(u)){we("KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(c!==null&&c>u){we("KeyframeTrack: Out of order keys.",this,h,u,c),t=!1;break}c=u}if(s!==void 0&&Gh(s))for(let h=0,u=s.length;h!==u;++h){let d=s[h];if(isNaN(d)){we("KeyframeTrack: Value is not a valid number.",this,h,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),r=this.getValueSize(),s=this.getInterpolation()===Lr,a=t.length-1,c=1;for(let h=1;h<a;++h){let u=!1,d=t[h],p=t[h+1];if(d!==p&&(h!==1||d!==t[0]))if(s)u=!0;else{let v=h*r,y=v-r,m=v+r;for(let b=0;b!==r;++b){let w=e[v+b];if(w!==e[y+b]||w!==e[m+b]){u=!0;break}}}if(u){if(h!==c){t[c]=t[h];let v=h*r,y=c*r;for(let m=0;m!==r;++m)e[y+m]=e[v+m]}++c}}if(a>0){t[c]=t[a];for(let h=a*r,u=c*r,d=0;d!==r;++d)e[u+d]=e[h+d];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*r)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),r=this.constructor,s=new r(this.name,t,e);return s.createInterpolant=this.createInterpolant,go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hl(n,t){for(let e=0,r=n.length;e!==r;e+=2)n[e]*=t}Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=Nr;var Nn=class extends Ye{constructor(t,e,r){super(t,e,r)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=Zi;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Ye{constructor(t,e,r,s){super(t,e,r,s)}};Qr.prototype.ValueTypeName="color";var ts=class extends Ye{constructor(t,e,r,s){super(t,e,r,s)}};ts.prototype.ValueTypeName="number";var es=class extends Dn{constructor(t,e,r,s){super(t,e,r,s)}interpolate_(t,e,r,s){let a=this.resultBuffer,c=this.sampleValues,h=this.valueSize,u=(r-e)/(s-e),d=t*h;for(let p=d+h;d!==p;d+=4)vn.slerpFlat(a,0,c,d-h,c,d,u);return a}},ir=class extends Ye{constructor(t,e,r,s){super(t,e,r,s)}InterpolantFactoryMethodLinear(t){return new es(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends Ye{constructor(t,e,r){super(t,e,r)}};Fn.prototype.ValueTypeName="string";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=Zi;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Ye{constructor(t,e,r,s){super(t,e,r,s)}};ns.prototype.ValueTypeName="vector";var is=class{constructor(t,e,r){let s=this,a=!1,c=0,h=0,u,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this._abortController=null,this.itemStart=function(p){h++,a===!1&&s.onStart!==void 0&&s.onStart(p,c,h),a=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,h),c===h&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,v){return d.push(p,v),this},this.removeHandler=function(p){let v=d.indexOf(p);return v!==-1&&d.splice(v,2),this},this.getHandler=function(p){for(let v=0,y=d.length;v<y;v+=2){let m=d[v],b=d[v+1];if(m.global&&(m.lastIndex=0),m.test(p))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ll=new is,rs=class{constructor(t){this.manager=t!==void 0?t:Ll,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let r=this;return new Promise(function(s,a){r.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};rs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qo="\\[\\]\\.:\\/",Du=new RegExp("["+Qo+"]","g"),ta="[^"+Qo+"]",Nu="[^"+Qo.replace("\\.","")+"]",Fu=/((?:WC+[\/:])*)/.source.replace("WC",ta),Ou=/(WCOD+)?/.source.replace("WCOD",Nu),Uu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ta),Bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ta),ku=new RegExp("^"+Fu+Ou+Uu+Bu+"$"),zu=["material","materials","bones","map"],zo=class{constructor(t,e,r){let s=r||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let r=this._targetGroup.nCachedObjects_,s=this._bindings[r];s!==void 0&&s.getValue(t,e)}setValue(t,e){let r=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=r.length;s!==a;++s)r[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].unbind()}},be=class n{constructor(t,e,r){this.path=e,this.parsedPath=r||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,r):new n(t,e,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Du,"")}static parseTrackName(t){let e=ku.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=r.nodeName.substring(s+1);zu.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(e);if(r!==void 0)return r}if(t.children){let r=function(a){for(let c=0;c<a.length;c++){let h=a[c];if(h.name===e||h.uuid===e)return h;let u=r(h.children);if(u)return u}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)t[e++]=r[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,r=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let d=e.objectIndex;switch(r){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===d){d=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(d!==void 0){if(t[d]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[s];if(c===void 0){let d=e.nodeName;we("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(u=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=zo;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hm=new Float32Array(1);var Vo=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,r,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,r,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let r=0;r<4;r++)this.elements[r]=t[r+e];return this}set(t,e,r,s){let a=this.elements;return a[0]=t,a[2]=e,a[1]=r,a[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,df=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:Vu,alphahash_pars_fragment:Wu,alphamap_fragment:Gu,alphamap_pars_fragment:Hu,alphatest_fragment:Xu,alphatest_pars_fragment:Yu,aomap_fragment:qu,aomap_pars_fragment:Zu,batching_pars_vertex:Ju,batching_vertex:ju,begin_vertex:Ku,beginnormal_vertex:$u,bsdfs:Qu,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:hf,common:uf,cube_uv_reflection_fragment:ff,defaultnormal_vertex:df,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:vf,colorspace_fragment:yf,colorspace_pars_fragment:xf,envmap_fragment:_f,envmap_common_pars_fragment:bf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Nf,envmap_vertex:wf,fog_vertex:Tf,fog_pars_vertex:Ef,fog_fragment:Pf,fog_pars_fragment:Af,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:If,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Lf,lights_pars_begin:Df,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Uf,lights_phong_pars_fragment:Bf,lights_physical_fragment:kf,lights_physical_pars_fragment:zf,lights_fragment_begin:Vf,lights_fragment_maps:Wf,lights_fragment_end:Gf,lightprobes_pars_fragment:Hf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Zf,map_fragment:Jf,map_pars_fragment:jf,map_particle_fragment:Kf,map_particle_pars_fragment:$f,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:td,morphinstance_vertex:ed,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:rd,morphtarget_vertex:sd,normal_fragment_begin:od,normal_fragment_maps:ad,normal_pars_fragment:ld,normal_pars_vertex:cd,normal_vertex:hd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:vd,premultiplied_alpha_fragment:yd,project_vertex:xd,dithering_fragment:_d,dithering_pars_fragment:bd,roughnessmap_fragment:Md,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:Td,shadowmap_vertex:Ed,shadowmask_pars_fragment:Pd,skinbase_vertex:Ad,skinning_pars_vertex:Cd,skinning_vertex:Id,skinnormal_vertex:Rd,specularmap_fragment:Ld,specularmap_pars_fragment:Dd,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:Ud,uv_pars_fragment:Bd,uv_pars_vertex:kd,uv_vertex:zd,worldpos_vertex:Vd,background_vert:Wd,background_frag:Gd,backgroundCube_vert:Hd,backgroundCube_frag:Xd,cube_vert:Yd,cube_frag:qd,depth_vert:Zd,depth_frag:Jd,distance_vert:jd,distance_frag:Kd,equirect_vert:$d,equirect_frag:Qd,linedashed_vert:tp,linedashed_frag:ep,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:rp,meshlambert_frag:sp,meshmatcap_vert:op,meshmatcap_frag:ap,meshnormal_vert:lp,meshnormal_frag:cp,meshphong_vert:hp,meshphong_frag:up,meshphysical_vert:fp,meshphysical_frag:dp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:vp,shadow_vert:yp,shadow_frag:xp,sprite_vert:_p,sprite_frag:bp},Ft={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Mt},probesMax:{value:new Mt},probesResolution:{value:new Mt}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Dl={basic:{uniforms:ke([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:ke([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:ke([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:ke([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:ke([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new De(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:ke([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:ke([Ft.points,Ft.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:ke([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:ke([Ft.common,Ft.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:ke([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:ke([Ft.sprite,Ft.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:ke([Ft.common,Ft.displacementmap,{referencePosition:{value:new Mt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:ke([Ft.lights,Ft.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Dl.physical={uniforms:ke([Dl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Mp=new se;Mp.set(-1,0,0,0,1,0,0,0,1);var ib={[Wo]:"LINEAR_TONE_MAPPING",[Go]:"REINHARD_TONE_MAPPING",[Ho]:"CINEON_TONE_MAPPING",[Xo]:"ACES_FILMIC_TONE_MAPPING",[qo]:"AGX_TONE_MAPPING",[Zo]:"NEUTRAL_TONE_MAPPING",[Yo]:"CUSTOM_TONE_MAPPING"};var rb=new Float32Array(16),sb=new Float32Array(9),ob=new Float32Array(4);var ab={[Wo]:"Linear",[Go]:"Reinhard",[Ho]:"Cineon",[Xo]:"ACESFilmic",[qo]:"AgX",[Zo]:"Neutral",[Yo]:"Custom"};var lb={[ul]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};var cb={[gl]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE",[vl]:"ENVMAP_TYPE_CUBE_UV"};var hb={[jo]:"ENVMAP_MODE_REFRACTION"};var ub={[dl]:"ENVMAP_BLENDING_MULTIPLY",[pl]:"ENVMAP_BLENDING_MIX",[ml]:"ENVMAP_BLENDING_ADD"};var Sp=new se;Sp.set(-1,0,0,0,1,0,0,0,1);var fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var wp=["circle","square","heart","hexagon","diamond","star","triangle"];var Nl={size:[2,40],gap:[.8,20],border:[.8,30],rotation:[-180,180],offsetX:[-50,50],offsetY:[-50,50]};function sr(n){if(!n||typeof n.enabled!="boolean"||!wp.includes(n.shape)||!["whole","clip"].includes(n.edge)||!["grid","staggered"].includes(n.layout))throw Error("Invalid face pattern.");for(let[t,[e,r]]of Object.entries(Nl))if(!Number.isFinite(n[t])||n[t]<e||n[t]>r)throw Error(`Pattern ${t} must be ${e}\u2013${r}${t==="rotation"?"\xB0":" mm"}.`);return n}function Fl(n){return n.faceMethod==="print"&&["separate","frontframe","pushin","reartray"].includes(n.construction)&&(n.splitMode||"off")==="off"}var Ol="Face patterns need a printed Separate front, Outer sleeve, Push-in front or Rear tray, with splitting off.";var xn=Ns(vr(),1);var ss=1e4;function _n(n){let t=1/0,e=1/0,r=-1/0,s=-1/0;for(let a of n)for(let[c,h]of a)t=Math.min(t,c),e=Math.min(e,h),r=Math.max(r,c),s=Math.max(s,h);return{minX:t,minY:e,maxX:r,maxY:s,width:r-t,height:s-e,cx:(t+r)/2,cy:(e+s)/2}}var Ul=n=>n.map(t=>t.map(([e,r])=>({X:Math.round(e*ss),Y:Math.round(r*ss)}))),Tp=n=>n.map(t=>t.map(({X:e,Y:r})=>[e/ss,r/ss]));function ea(n,t=[],e="union"){let r=new xn.default.Clipper,s=[];return r.AddPaths(Ul(n),xn.default.PolyType.ptSubject,!0),t.length&&r.AddPaths(Ul(t),xn.default.PolyType.ptClip,!0),r.Execute(e==="subtract"?xn.default.ClipType.ctDifference:e==="intersect"?xn.default.ClipType.ctIntersection:xn.default.ClipType.ctUnion,s,xn.default.PolyFillType.pftNonZero,xn.default.PolyFillType.pftNonZero),Tp(s)}function We(n){return n.reduce((t,e)=>t+e.reduce((r,[s,a],c)=>{let h=e[(c+1)%e.length];return r+s*h[1]-h[0]*a},0)/2,0)}function Bl(n){return{cutouts:n.construction==="separate"&&n.layout==="individual"&&n.faceMethod!=="cnc"&&n.splitMode==="off"&&n.standMode!=="desk",cutoutReason:"Cutouts currently need Separate front, individual bodies or a lightbox, a printed/laser face, no splitting and no desk base.",colours:n.faceMethod==="print"&&!["integrated","reartray","inset"].includes(n.construction)&&n.splitMode==="off",colourReason:"Object colours need a printed separate face, with no splitting. Integrated, rear-tray and inset constructions use the material colour."}}function kl(n,t,e,r,s){let a=r.trayRounding;function c(d,p){let v=[];for(let y of d.decompose().map(s)){let m=s(s(y.offset(-p*a,p>0?"Round":"Miter",2,48)).simplify(.01));if(m.isEmpty()||m.decompose().map(s).length!==1||m.toPolygons().length!==y.toPolygons().length)throw Error("This rounding closes a small letter detail. Reduce Rim rounding or enlarge the letter.");let b=m.toPolygons(),w=b.find(R=>We([R])>0),S=new Ln(w.map(R=>new Gt(...R)));S.holes=b.filter(R=>We([R])<0).map(R=>new yn(R.map(C=>new Gt(...C))));let P=new $n(S,{depth:r.depth-a,steps:1,bevelEnabled:!0,bevelSize:p*a,bevelOffset:0,bevelThickness:a,bevelSegments:10,curveSegments:1});try{let R=P.getAttribute("position").array,C=new n.Mesh({numProp:3,vertProperties:new Float32Array(R),triVerts:new Uint32Array(Array.from({length:R.length/3},(A,N)=>N))});C.merge(),v.push(s(new n.Manifold(C)))}catch{throw Error("The rounded rim could not form a closed print. Reduce Rim rounding or choose a broader font.")}finally{P.dispose()}}return s(n.Manifold.union(v))}let h=s(c(t,1).trimByPlane([0,0,1],0)),u=s(c(e,-1).trimByPlane([0,0,1],r.base));return s(h.subtract(u))}function zl(n,t,e,r){let{CrossSection:s,Manifold:a}=n,c=e,h=t.boundingBox(),u=h.min[1],d=c.standEmbed,p=c.standHeight;if(c.standDepth<h.max[2]-h.min[2]+10)throw Error("Increase Base depth to leave at least 10 mm beyond the full letter thickness, including its front relief.");let v=r(t.intersect(r(a.cube([h.max[0]-h.min[0]+2,d+.001,h.max[2]-h.min[2]+2]).translate([h.min[0]-1,u,h.min[2]-1]))));if(v.isEmpty())throw Error("No letter foot reaches the stand.");let y=v.boundingBox(),m=h.max[0]-h.min[0]+2*c.standMargin,b=c.standDepth,w=(h.min[0]+h.max[0])/2,S=(h.min[2]+h.max[2])/2,P=Math.min(8,m/4,b/4),R=r(r(s.square([m-2*P,b-2*P],!0)).offset(P,"Round",2,48)).translate([w,S]);r(R);let C=r(R.extrude(p));if(c.standStyle==="stepped"){let U=r(R.offset(-2,"Round",2,48));C=r(r(R.extrude(2.5)).add(r(r(U.extrude(p-2.5)).translate([0,0,2.5]))))}let A=r(r(s.square([y.max[0]-y.min[0]+2*c.standClearance,h.max[2]-h.min[2]+2*c.standClearance],!0)).translate([(y.max[0]+y.min[0])/2,S])),N=r(r(A.extrude(d+.1)).translate([0,0,p-d]));if(C=r(C.subtract(N)),C.status()!=="NoError"||C.isEmpty())throw Error("The stand cannot form a closed print. Increase its size.");let F=u+d-p,E=h.min[2]+h.max[2],O=r(r(C.rotate([-90,0,0])).translate([0,F,E]));if(r(t.intersect(O)).volume()>.001)throw Error("The stand slot clashes with the letter. Increase slot clearance.");return{stand:C,assembled:O,previewMatrix:[1,0,0,0,0,0,-1,0,0,1,0,0,0,F,E,1],assemblyOutline:r(O.project()).toPolygons(),baseY:F,slotWidth:y.max[0]-y.min[0]+2*c.standClearance}}var Ep=[{id:"solid",name:"Solid letter",hint:"Flat front \xB7 one piece",font:"archivo",depth:16},{id:"bubble",name:"Bubble letters",hint:"Soft, inflated front",font:"msrounded",depth:4,relief:10,domeRound:2},{id:"brick",name:"Brick studs",hint:"Raised round studs",font:"bungee",depth:10,studDiameter:4.8,studHeight:2.4,studPitch:8,studMargin:1.2},{id:"outline",name:"Bold outline",hint:"Raised name \xB7 wide border",font:"pacifico",depth:6,outlineWidth:4,outlineFace:3,colour:"#B13877",nameColour:"#FFC5DD"},{id:"ridge",name:"Ridged face",hint:"Sloping face \xB7 centre peak",font:"bold",depth:8,relief:7,ridgeRound:.3},{id:"tray",name:"Letter tray",hint:"Low, wide rounded rim",font:"msrounded",depth:8,wall:4,base:2,trayRounding:1.5},{id:"moss",name:"Moss letter",hint:"Deep decorative pocket",font:"archivo",depth:28,wall:2.4,base:2.4},{id:"bevel",name:"Bevelled edge",hint:"Sloped rim \xB7 flat centre",font:"bungee",depth:18,bevel:2,relief:3},{id:"faceted",texture:"facets",name:"Textured front",hint:"Facets & diamond tiles",font:"archivo",depth:14,relief:3,cell:20},{id:"stone",name:"Carved stone",hint:"Fractured surface \xB7 chipped edges",font:"archivo",depth:20,relief:6,textureScale:26,stoneFinish:"chiseled",stoneRound:2,stoneRoughness:1.4,colour:"#898A80"},{id:"wood",name:"Carved wood",hint:"Deep grain \xB7 worn edges",font:"archivo",depth:20,relief:5,textureScale:26,textureAngle:0,woodFinish:"carved",woodRound:1.8,woodRoughness:.7,colour:"#AD8054"},{id:"monogram",name:"Initial + name",hint:"Recessed script insert",font:"alfa",depth:22}],Pp={domeRound:[.5,6,.1],ridgeRound:[0,3,.1],studDiameter:[2,12,.2],studHeight:[.8,8,.2],studPitch:[4,24,.5],studMargin:[.6,5,.2],studShiftX:[-50,50,1],studShiftY:[-50,50,1],outlineWidth:[1,15,.5],outlineFace:[.8,10,.2],woodRound:[.5,6,.1],woodRoughness:[0,2,.1],stoneRound:[.5,6,.1],stoneRoughness:[0,2,.1],textureScale:[6,60,1],textureAngle:[-180,180,1],printLayer:[.06,.4,.02],height:[30,600,1],depth:[3,80,1],wall:[.8,8,.2],trayRounding:[0,3.8,.1],base:[.8,10,.2],bevel:[.5,8,.5],relief:[.5,15,.5],cell:[8,60,1],spacing:[-5,20,.5],nameWidth:[40,160,1],nameY:[10,90,1],nameX:[-75,75,1],nameRotation:[-180,180,1],nameSpacing:[-20,5,.5],nameInsertDepth:[.6,20,.2],nameRaisedHeight:[0,15,.2],nameClearance:[0,.6,.05],bottomTrim:[.5,10,.5],standHeight:[6,25,.5],standEmbed:[1,12,.5],standDepth:[12,200,1],standMargin:[5,30,1],standClearance:[0,.6,.05],bedX:[80,600,1],bedY:[80,600,1],bedZ:[80,600,1]},Ap=n=>{if(typeof n!="string")return n;let t=Array.from(n.normalize("NFC").toLowerCase()),e=t.findIndex(r=>/\p{L}/u.test(r));return e>=0&&(t[e]=t[e].toUpperCase()),t.join("")},Cp=["lobster","pacifico","oleo","yellowtail","damion","courgette","kaushan","oleoswash","pattaya","berkshire","leckerli","lilyscript","lobstertwo","norican","molle","satisfy","cookie","yesteryear","grandhotel","playball"];function Ip(n,t){let e={domeRound:["bubble"],ridgeRound:["ridge"],studDiameter:["brick"],studHeight:["brick"],studPitch:["brick"],studMargin:["brick"],studShiftX:["brick"],studShiftY:["brick"],outlineWidth:["outline"],outlineFace:["outline"],woodRound:["wood"],woodRoughness:["wood"],stoneRound:["stone"],stoneRoughness:["stone"],textureScale:["faceted","stone","wood"],textureAngle:["faceted","stone","wood"],printLayer:["faceted","stone","wood"],wall:["tray","moss"],base:["tray","moss"],trayRounding:["tray"],bevel:["bevel"],relief:["bevel","faceted","stone","wood","bubble","ridge"],cell:["faceted"]};return t.preset==="faceted"&&(["textureScale","textureAngle"].includes(n)&&t.texture==="facets"||n==="cell"&&t.texture!=="facets")?!1:n.startsWith("name")?t.preset==="monogram":n==="bottomTrim"?t.standStyle==="flat":n.startsWith("stand")?["rounded","stepped"].includes(t.standStyle):!e[n]||e[n].includes(t.preset)}function Vl(n,t){if(!n||n.version!==2||!Ep.some(e=>e.id===n.preset))throw Error("Choose a valid non-lit style.");for(let e of n.preset==="monogram"?["text","name"]:["text"])if(typeof n[e]!="string"||n[e].length>24||!n[e].trim()||/[\r\n]/.test(n[e]))throw Error("Use 1\u201324 characters on one line.");if(n.preset==="monogram"&&Array.from(n.text.trim()).length!==1)throw Error("Initial + name needs one letter or number in Initial.");if(n.preset==="monogram"&&n.name!==Ap(n.name))throw Error("Use a capital first letter followed by lowercase. Reopen the design to convert it.");for(let e of n.preset==="monogram"?["font","nameFont"]:["font"])if(typeof n[e]!="string"||t&&!t.includes(n[e]))throw Error("Choose a bundled font.");if(n.preset==="monogram"&&!Cp.includes(n.nameFont))throw Error("Choose a script font for the name.");if(!["together","separate"].includes(n.outlineMode))throw Error("Choose a valid outline print method.");if(n.preset==="brick"&&n.studPitch<n.studDiameter+.8)throw Error("Leave at least 0.8 mm between studs. Increase Stud spacing or reduce Stud diameter.");if(!Ha.some(e=>e.id===n.woodFinish))throw Error("Choose a valid wood finish.");if(n.preset==="wood"&&n.woodRound*1.5>n.depth-2)throw Error("Leave at least 2 mm of body below the worn wood edge. Reduce Edge wear or increase Body depth.");if(!za.some(e=>e.id===n.stoneFinish))throw Error("Choose a valid stone finish.");if(n.preset==="stone"&&n.stoneRound*1.5>n.depth-2)throw Error("Leave at least 2 mm of body below the worn stone edge. Reduce Edge wear or increase Body depth.");if(!Object.hasOwn(br,n.texture))throw Error("Choose a valid front texture.");if(!Number.isInteger(n.textureSeed)||n.textureSeed<1||n.textureSeed>9999)throw Error("Texture variation must be 1\u20139999.");if(![.2,.4,.6,.8].includes(n.printNozzle))throw Error("Choose a 0.2, 0.4, 0.6 or 0.8 mm nozzle.");if(["faceted","stone","wood"].includes(n.preset)&&n.printLayer>=n.printNozzle)throw Error("Layer height must be smaller than the nozzle diameter. Choose a supported slicer profile.");if(!["none","flat","rounded","stepped"].includes(n.standStyle))throw Error("Choose a valid desktop option.");if(["rounded","stepped"].includes(n.standStyle)){if(n.standHeight-n.standEmbed<3)throw Error("Keep at least 3 mm of stand below the slot.");if(n.standDepth<n.depth+10)throw Error("Stand depth must be at least 10 mm greater than body depth.")}if(n.standStyle==="flat"&&n.bottomTrim>n.height*.15)throw Error("Trim no more than 15% of the letter height.");for(let e of["colour","nameColour","standColour"])if(!/^#[0-9a-f]{6}$/i.test(n[e]))throw Error("Choose a valid print colour.");if(n.preset==="monogram"&&(!Number.isFinite(n.nameRaisedHeight)||n.nameRaisedHeight<0||n.nameRaisedHeight>15))throw Error("Total name thickness must include the insertion depth, plus 0\u201315 mm above the initial.");for(let[e,[r,s]]of Object.entries(Pp))if(!Number.isFinite(n[e])||Ip(e,n)&&(n[e]<r||n[e]>s))throw Error(`${e} must be between ${r} and ${s}.`);if(["tray","moss"].includes(n.preset)&&n.depth<n.base+2)throw Error("Leave at least 2 mm of open pocket above the floor.");if(n.preset==="tray"&&n.trayRounding>Math.min((n.wall-.4)/2,n.depth-n.base-.4)+1e-6)throw Error("Rim rounding is too large. Reduce it, widen the rim, or increase tray height. Leave at least 0.4 mm at the crown and below the rounding.");if(n.preset==="bevel"&&n.relief>n.depth-1)throw Error("Leave at least 1 mm of straight side below the bevel.");if(n.preset==="monogram"&&n.nameInsertDepth>n.depth-2)throw Error("Leave at least 2 mm of body behind the name recess. Reduce Insert depth or increase Body depth.");return n}function Wl(n,t,e,r=[]){e={...Gs,...Ws,...Js,...to,trayRounding:0,...e},Vl(e);for(let m of[t,r])if(!Array.isArray(m)||m.reduce((b,w)=>b+w.length,0)>4e4||m.some(b=>b.length<3||b.some(w=>w.length!==2||w.some(S=>!Number.isFinite(S)||Math.abs(S)>1e6))))throw Error("Invalid or excessively complex letter outlines.");let s=[],a=m=>(s.push(m),m),{CrossSection:c,Manifold:h}=n,u=[],d=[],p=m=>a(new c(m,"NonZero")),v=m=>{if(m.status()!=="NoError"||m.isEmpty()||m.volume()<.001)throw Error("This style cannot form a closed print. Reduce the relief or choose a broader font.");let b=m.getMesh();return{vertices:new Float32Array(b.vertProperties),indices:new Uint32Array(b.triVerts),stride:b.numProp}},y=(m,b,w,S=0)=>{let P=v(m),R=m.boundingBox();d.push({name:b,body:P,colour:w,previewZ:S,outline:a(m.project()).toPolygons(),origin:[R.min[0],R.min[1]],width:R.max[0]-R.min[0],height:R.max[1]-R.min[1],volume:m.volume()})};try{let m=_n(t);if(!(m.height>.001))throw Error("The text has no printable outline.");let b=e.height/m.height,w=t.map(J=>J.map(([z,B])=>[(z-m.minX)*b,(B-m.minY)*b])),S=p(w);if(e.standStyle==="flat"){let J=p([[[-1,e.bottomTrim],[m.width*b+1,e.bottomTrim],[m.width*b+1,e.height+1],[-1,e.height+1]]]);S=a(S.intersect(J))}let P=S;if(e.preset==="outline"&&(S=a(S.offset(e.outlineWidth,"Round",2,64)),e.standStyle==="flat")){let J=S.bounds();S=a(S.intersect(p([[[J.min[0]-1,e.bottomTrim],[J.max[0]+1,e.bottomTrim],[J.max[0]+1,J.max[1]+1],[J.min[0]-1,J.max[1]+1]]])))}let R=S.decompose().map(a);if(!R.length||R.length>40)throw Error("Use 1\u201340 separate letter pieces.");R.sort((J,z)=>J.bounds().min[0]-z.bounds().min[0]);let C=["stone","wood"].includes(e.preset),A=e.preset==="wood"?eo(e):e,N=[],F=C||e.preset==="faceted"&&e.texture!=="facets"?Sa(R.map(J=>{let z=J.bounds();return C?{min:z.min.map(B=>B-A.stoneRoughness),max:z.max.map(B=>B+A.stoneRoughness)}:z}),e):null,E=C?Wa(R,A,F,e.preset==="wood"?"Carved wood":"Carved stone"):0,O=wa(e);if(u.push(...O),e.preset==="stone"&&u.push("Carved stone changes the front, edges and sides; the back remains flat. Print back-down. Geometry checks limit downward-facing slopes, but cooling, bridging and layer quality still require a physical test.","Stone colour in the preview is a single base colour. Granite or marble speckling needs a suitable effect filament or painting; those speckles are not separate colour regions in the STL or 3MF.","Letter height is nominal before edge shaping. See the actual dimensions above the preview; rough edges can vary slightly. Test the stand fit and desktop balance."),e.preset==="wood"&&u.push("Carved wood shapes the front, edges and sides; the back remains flat. Print back-down. Grain is actual geometry in the STL and 3MF.","Wood colour is a single filament colour; the preview does not create separate brown grain regions. Wood-fill filament or finishing can change the appearance. Follow the filament manufacturer\u2019s nozzle and drying requirements; wood-filled materials can need a larger nozzle.","Grain angle 0 runs along the letter height; 90 runs across it. The carved silhouette can vary slightly from the nominal letter size. Test a sample and any stand fit."),["faceted","stone","wood"].includes(e.preset)&&u.push(C?"Use the carved sample before a full print; it includes edge shaping and rough sides.":`${br[e.texture]} is real geometry. Print flat back-down, texture facing up; the relief introduces no unsupported overhangs in this orientation. Start with a small test tile.`,`Detail check assumes a ${e.printNozzle} mm nozzle and ${e.printLayer} mm layers. These values do not configure your slicer or 3MF printer profile. Check sliced layers and choose a supported profile.`,"Maintain sufficient top-shell thickness over infill. Finer or variable layers can reduce stepping; ironing is intended for flat surfaces and will not smooth the whole relief. Texture appearance varies with filament, cooling and slicer settings."),["rounded","stepped"].includes(e.standStyle)&&R.length!==1)throw Error("A desktop base currently needs one connected main letter. Use a single initial, or choose Flat-bottom cut.");let L=["bubble","ridge"].includes(e.preset)?Ea(R,e):null,U={count:0};L&&u.push("Print the flat back on the bed, sculpted face up. Finer or variable layers reduce visible steps. Peak height varies across narrow strokes; inspect a small physical sample."),e.preset==="brick"&&u.push("Decorative studs only: not a tested fit for LEGO or other construction bricks. Print back-down, studs up. The grid skips studs that would touch an edge or a letter opening."),e.preset==="outline"&&u.push(e.outlineMode==="together"?"Use the plate 3MF for a registered two-colour object: backing below, raised lettering above. Assign filaments before slicing. The STL ZIP also includes the separate shapes, which need alignment if printed separately.":"Print the backing and raised letters separately, flat back-down, then glue using assembly-placement.svg. This is a glued design, not a snap fit.","Border width can join nearby letters. If gaps remain, the design exports as separate groups. Letter height describes the text before adding the border; actual overall dimensions appear above the preview."),e.preset==="tray"&&!Mr.includes(e.font)&&u.push("This older tray keeps its original font. New tray font choices are rounded only. Choose a rounded font in Design to update it.");let k=0,Z=null,tt=null,Q=null,it=[],Y=null,et;if(e.preset==="monogram"){let J=_n(r);if(!(J.width>.001))throw Error("Type a printable name.");let z=m.width*b*e.nameWidth/100/J.width,B=e.nameRotation*Math.PI/180,j=Math.cos(B),q=Math.sin(B),nt=[m.width*b*(.5+e.nameX/100),e.height*e.nameY/100];Q={center:nt,width:J.width*z,height:J.height*z,rotation:e.nameRotation},Z=p(r.map(St=>St.map(([Lt,Wt])=>{let Yt=(Lt-J.cx)*z,Ct=(Wt-J.cy)*z;return[nt[0]+Yt*j-Ct*q,nt[1]+Yt*q+Ct*j]}))),it=Z.decompose().map(a).sort((St,Lt)=>St.bounds().min[0]-Lt.bounds().min[0]||St.bounds().min[1]-Lt.bounds().min[1]),Y={pieceCount:it.length,glueRequired:it.length>1,pieces:[]};let bt=!1;for(let[St,Lt]of it.entries()){let Wt=`name-${String(St+1).padStart(2,"0")}`,Yt=Lt.area(),Ct=a(Lt.intersect(S)),dt=Ct.area(),ht=Math.max(Yt*.15,Math.min(4,Yt*.9)),xt=a(Lt.offset(-.4,"Round",2,32)),Pt=a(Ct.offset(-.4,"Round",2,32)),gt=null;xt.isEmpty()?gt=`Name piece ${St+1} is too small or thin. Increase Name width or choose a heavier script. The red piece needs a feature wider than 0.8 mm.`:dt<ht||Pt.isEmpty()?gt=`Name piece ${St+1} has too little contact with the large letter. Move the name so the red piece sits over the letter, or reduce Name width. Dots and accents need their own supported recess.`:xt.decompose().map(a).length>1&&(bt=!0),Y.pieces.push({name:Wt,area:Yt,contactArea:dt,minimumContactArea:ht,contactFraction:dt/Yt,issue:gt}),gt&&!et&&(et=gt)}bt&&u.push("Some script connections are thinner than 0.8 mm. Check the sliced layers and try a heavier font or tighter spacing."),Y.glueRequired&&!et&&u.push(`The name exports as ${it.length} separate pieces, including any dots or accents. Each has contact with the large letter and a matching recess. Test-fit, then glue each piece into its recess; this is not a click fit. Use assembly-placement.svg in the STL ZIP to locate the pieces. Geometry checks do not verify adhesive strength.`);let Tt=a(Z.offset(e.nameClearance,"Round",2,32));tt=a(a(Tt.extrude(e.nameInsertDepth+.1)).translate([0,0,e.depth-e.nameInsertDepth]))}for(let[J,z]of R.entries()){if(a(z.offset(-.4,"Round",2,32)).isEmpty())throw Error("A detail is narrower than 0.8 mm. Increase the size or use a thicker font.");let j;if(["tray","moss"].includes(e.preset)){let nt=a(z.offset(-e.wall,"Round",2,48));if(nt.isEmpty()||nt.area()<z.area()*.08)throw Error("This font is too narrow for an open tray at these settings. Increase height, reduce wall thickness or choose a broader font.");if(e.preset==="tray"&&e.trayRounding>0)j=kl(n,z,nt,e,a);else{let bt=a(z.extrude(e.depth)),Tt=a(a(nt.extrude(e.depth)).translate([0,0,e.base]));j=a(bt.subtract(Tt))}}else if(e.preset==="bevel"){let nt=a(z.offset(-e.bevel,"Miter",2)),bt=nt.decompose().map(a);if(nt.isEmpty()||bt.length!==1||nt.toPolygons().length!==z.toPolygons().length)throw Error("This bevel closes or splits a letter detail. Reduce Bevel width, enlarge the letters or choose a thicker font.");let Tt=nt.toPolygons(),St=new Ln(Tt.find(dt=>We([dt])>0).map(dt=>new Gt(...dt)));St.holes=Tt.filter(dt=>We([dt])<0).map(dt=>new yn(dt.map(ht=>new Gt(...ht))));let Lt=new $n(St,{depth:e.depth-e.relief,steps:1,bevelEnabled:!0,bevelThickness:e.relief,bevelSize:e.bevel,bevelSegments:1,curveSegments:1}),Wt=Lt.getAttribute("position").array,Yt=new n.Mesh({numProp:3,vertProperties:new Float32Array(Wt),triVerts:new Uint32Array(Array.from({length:Wt.length/3},(dt,ht)=>ht))});Yt.merge();let Ct=a(new h(Yt));if(Lt.dispose(),Ct.status()!=="NoError")throw Error("This outline cannot support the selected bevel. Reduce the bevel or use a broader font.");j=a(Ct.intersect(a(z.extrude(e.depth))))}else if(L)j=Pa(n,z,e,L[J],a);else if(e.preset==="brick")j=Aa(n,z,e,a,U);else if(e.preset==="wood")j=Xa(n,z,e,F[J],E,a);else if(e.preset==="stone")j=Ga(n,z,e,F[J],E,a);else if(F)j=ci(n,z,e,F[J],a);else if(e.preset==="faceted"){let nt=z.bounds(),bt=Math.floor(nt.min[0]/e.cell),Tt=Math.ceil(nt.max[0]/e.cell),St=Math.floor(nt.min[1]/e.cell),Lt=Math.ceil(nt.max[1]/e.cell);if(k+=(Tt-bt)*(Lt-St),(Tt-bt)*(Lt-St)>600||k>1200)throw Error("Too many facets. Increase Facet size or reduce letter height.");let Wt=[],Yt=a(z.extrude(e.depth+e.relief));for(let Ct=bt;Ct<Tt;Ct++)for(let dt=St;dt<Lt;dt++){let ht=Ct*e.cell,xt=dt*e.cell,Pt=e.cell,gt=[[ht,xt],[ht+Pt,xt],[ht+Pt,xt+Pt],[ht,xt+Pt]];for(let ut of[[gt[0],gt[1],gt[2]],[gt[0],gt[2],gt[3]]]){let pt=p([ut]);if(a(z.intersect(pt)).area()<.001)continue;let Jt=ut.reduce((Ut,wt)=>Ut+wt[0],0)/3,At=ut.reduce((Ut,wt)=>Ut+wt[1],0)/3,ne=e.relief*(.55+.45*(.5+.5*Math.sin(Jt*12.9898+At*78.233))),ee=a(h.hull([...ut.map(([Ut,wt])=>[Ut,wt,e.depth-.05]),[Jt,At,e.depth+ne]]));Wt.push(a(ee.intersect(Yt)))}}j=a(h.union([a(z.extrude(e.depth)),...Wt]))}else j=a(z.extrude(e.depth));if(tt&&(j=a(j.subtract(tt))),j.decompose().map(a).filter(nt=>nt.volume()>1e-4).length!==1)throw Error("This style leaves detached pieces. Reduce the effect or change the font.");if(y(j,`letter-${String(J+1).padStart(2,"0")}`,e.colour),N.push(j),e.preset==="outline"){let nt="outline-"+(J+1);d.at(-1).assemblyGroup=nt;let bt=a(P.intersect(z));for(let[Tt,St]of bt.decompose().map(a).entries())y(a(St.extrude(e.outlineFace)),`front-${J+1}-${Tt+1}`,e.nameColour,e.depth),d.at(-1).assemblyGroup=nt}if(C&&d.reduce((nt,bt)=>nt+bt.body.indices.length/3,0)>8e5)throw Error("Too much carved detail in one design. Make fewer letters at once, increase Pattern size, or reduce Letter height.")}if(Z){for(let[J,z]of it.entries())y(a(z.extrude(e.nameInsertDepth+e.nameRaisedHeight)),Y.pieces[J].name,e.nameColour,e.depth-e.nameInsertDepth),d.at(-1).assemblyIssue=Y.pieces[J].issue;u.push(`Print the letter and all name pieces back-down. The name inserts ${e.nameInsertDepth} mm into its matching recess and projects ${e.nameRaisedHeight} mm beyond the initial. Clearance is ${e.nameClearance} mm per side. Test a small fit sample; this is not a snap lock.`)}if(e.standStyle==="flat"&&(Z&&!Z.isEmpty()&&Z.bounds().min[1]<e.bottomTrim-.01&&(et="The name projects below the flat bottom. Move it up before printing."),u.push(`The bottom ${e.bottomTrim} mm is removed from the main letter. Check front-to-back stability with your chosen depth and infill.`)),["rounded","stepped"].includes(e.standStyle)){let J=zl(n,N[0],e,a);if(y(J.stand,"stand-01",e.standColour),Object.assign(d.at(-1),{previewMatrix:J.previewMatrix,assemblyOutline:J.assemblyOutline}),e.preset==="outline"){let z=a(a(P.extrude(e.outlineFace)).translate([0,0,e.depth]));a(z.intersect(J.assembled)).volume()>.001&&(et="The raised lettering clashes with the stand. Reduce Letter insertion or increase Border width before printing.")}if(Z){let z=a(a(Z.extrude(e.nameInsertDepth+e.nameRaisedHeight)).translate([0,0,e.depth-e.nameInsertDepth]));a(z.intersect(J.assembled)).volume()>.001&&(et="The name clashes with the stand. Move it up or reduce the stand insertion depth.")}u.push(`Print the stand bottom-down as exported. Insert the lower ${e.standEmbed} mm of the main letter into its locating slot (${e.standClearance} mm clearance per side). No screws are needed; this is a locating fit, not a locking joint. Test fit and balance before use.`)}u.push("Solid describes the CAD envelope, not 100% slicer infill. Choose walls and infill in your slicer."),["tray","moss"].includes(e.preset)&&u.push("Decorative dry-use tray. No drainage, food-contact suitability or watertightness is claimed. Moss and decorations are not included."),e.standStyle==="none"&&u.push("Desktop balance depends on shape and depth. Choose Desktop display for a base or flat-bottom cut.");let H=d.map(J=>{let z=J.body.vertices,B=[1/0,1/0,1/0],j=[-1/0,-1/0,-1/0];for(let q=0;q<z.length;q+=J.body.stride)for(let nt=0;nt<3;nt++){let bt=J.previewMatrix,Tt=bt?bt[nt]*z[q]+bt[4+nt]*z[q+1]+bt[8+nt]*z[q+2]+bt[12+nt]:z[q+nt]+(nt===2?J.previewZ:0);B[nt]=Math.min(B[nt],Tt),j[nt]=Math.max(j[nt],Tt)}return{min:B,max:j}}),K=[0,1,2].map(J=>Math.min(...H.map(z=>z.min[J]))),lt=[0,1,2].map(J=>Math.max(...H.map(z=>z.max[J])));return{nonlit:!0,parts:d,nameLayout:Q,nameFit:Y,initialBounds:{min:[0,0],max:[m.width*b,e.height]},nameContactMinimum:.15,width:lt[0]-K[0],height:lt[1]-K[1],depth:lt[2]-K[2],bounds:{min:K,max:lt},volume:d.reduce((J,z)=>J+z.volume,0),warnings:u,printAdvice:O,exportBlocked:et,params:{projectMode:"nonlit",nonlit:e,bedX:e.bedX,bedY:e.bedY,bedZ:e.bedZ,materials:{body:{type:"PLA",colour:e.colour},face:{type:"PLA",colour:e.nameColour}}}}}finally{s.reverse().forEach(m=>m.delete())}}var Gl=n=>Object.assign(Error(n),{patternDensity:!0,field:"canvasMode"});function Rp(n,t=6){let e=(r,s=0)=>{let a=Array.from({length:s?r*2:r},(u,d)=>{let p=Math.PI/2+d*2*Math.PI/(s?r*2:r),v=s&&d%2?s:.5;return[Math.cos(p)*v,Math.sin(p)*v]}),c=_n([a]),h=Math.max(c.width,c.height);return a.map(([u,d])=>[(u-c.cx)/h,(d-c.cy)/h])};if(n==="circle")return[e(t>20?64:32)];if(n==="square")return[[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]]];if(n==="hexagon")return[e(6)];if(n==="diamond")return[e(4)];if(n==="triangle")return[e(3)];if(n==="star")return[e(5,23/86)];if(n==="heart"){let r=[],s=[[[50,89],[39,78],[7,55],[7,31]],[[7,31],[7,7],[37,4],[50,24]],[[50,24],[63,4],[93,7],[93,31]],[[93,31],[93,55],[61,78],[50,89]]];for(let[h,u,d,p]of s)for(let v=0;v<(t>20?16:8);v++){let y=v/(t>20?16:8),m=1-y;r.push([m*m*m*h[0]+3*m*m*y*u[0]+3*m*y*y*d[0]+y*y*y*p[0],-(m*m*m*h[1]+3*m*m*y*u[1]+3*m*y*y*d[1]+y*y*y*p[1])])}let a=_n([r]),c=Math.max(a.width,a.height);return r.forEach(h=>{h[0]=(h[0]-a.cx)/c,h[1]=(h[1]-a.cy)/c}),We([r])<0&&r.reverse(),[r]}throw Error("Choose a supported pattern shape.")}function Hl(n,t,{origin:e=[0,0],limit:r=2e3,maxCandidates:s=16e3}={}){sr(t);let a={holes:[],count:0,whole:0,clipped:0,openArea:0};if(!n.length)return a;let c=t.rotation*Math.PI/180,h=Math.cos(c),u=Math.sin(c),d=Rp(t.shape,t.size).map(N=>N.map(([F,E])=>[(F*h-E*u)*t.size,(F*u+E*h)*t.size])),p=_n(n),v=_n(d),y=v.width+t.gap,m=v.height+t.gap,b=e[0]+t.offsetX,w=e[1]+t.offsetY,S=Math.floor((p.minY-w-v.maxY)/m),P=Math.ceil((p.maxY-w-v.minY)/m),R=Math.ceil((p.width+v.width)/y)+3;if((P-S+1)*R>s)throw Gl("This pattern is too dense at the current artwork size. Open Pattern and choose Auto space holes, increase hole size, or use a solid face.");let C={...a,holes:[]},A=Math.abs(We(d));for(let N=S;N<=P;N++){let F=w+N*m,E=t.layout==="staggered"?Math.abs(N)%2*y/2:0;for(let O=Math.floor((p.minX-b-E-v.maxX)/y);O<=Math.ceil((p.maxX-b-E-v.minX)/y);O++){let L=b+O*y+E,U=d.map(H=>H.map(([K,lt])=>[K+L,lt+F])),k=ea(U,n,"intersect"),Z=Math.abs(We(k));if(Z<.15)continue;let tt=Math.abs(A-Z)<.001;if(t.edge==="whole"&&!tt)continue;let Q=tt?[]:k.filter(H=>{let K=_n([H]);return We([H])>=.15&&K.width>=.4&&K.height>=.4}),it=tt?[]:k.filter(H=>We([H])<0),Y=tt?U:Q.length?it.length?ea(Q,it,"subtract"):Q:[];if(!Y.length)continue;let et=Y.filter(H=>We([H])>0).length;if(C.holes.push(...Y),C.count+=et,C[tt?"whole":"clipped"]+=et,C.openArea+=Math.abs(We(Y)),C.count>r)throw Gl("More than 2,000 pattern holes per design. Open Pattern and choose Auto space holes, increase hole size, or use a solid face.")}}return C}function Xl(n,t){let e=t.params,r=e.designFacePattern;if(!r?.enabled||e.calibration)return t;let s=S=>{throw Object.assign(Error(S),{field:"canvasMode"})};sr(r),Fl(e)||s(Ol);let a=[],c=S=>(a.push(S),S),{CrossSection:h,Manifold:u}=n,d=S=>c(new h(S,"NonZero")),p=S=>c(new u(new n.Mesh({numProp:S.stride,vertProperties:S.vertices,triVerts:S.indices}))),v=S=>{(S.status()!=="NoError"||S.isEmpty())&&s("The pattern removes or invalidates the face. Increase its border or spacing.");let P=S.getMesh();return{vertices:new Float32Array(P.vertProperties),indices:new Uint32Array(P.triVerts),stride:P.numProp}},y=S=>S.decompose().map(c).filter(P=>P.volume()>1e-6).length,m=0,b=0,w=0;try{for(let S of t.parts){let P=p(S.face),R=d(S.facePolygons),C=c(R.offset(-r.border,"Round",2,64));S.artPolygons&&(C=c(C.intersect(c(d(S.artPolygons).offset(-r.border,"Round",2,64))))),S.frontCollar&&(C=c(C.subtract(c(c(p(S.frontCollar).project()).offset(r.border,"Round",2,64)))));let A=t.artworkTransform||{x:0,y:0},N=Hl(C.toPolygons(),r,{origin:[A.x,A.y],limit:2e3-m});if(S.facePattern={...r,holeCount:N.count,clippedCount:N.clipped,openArea:N.openArea},!N.count){t.warnings.push(`${S.name}: no pattern holes fit. The face stays solid here; reduce hole size or border.`);continue}let F=d(N.holes),E=c(c(F.extrude(e.acrylic+(e.maskThickness||0)+.04)).translate([0,0,-.02])),O=c(P.subtract(E));y(O)!==y(P)&&s("The pattern leaves loose face pieces. Increase the solid border or spacing."),S.face=v(O),S.faceVolume=O.volume(),S.facePolygons=c(R.subtract(F)).toPolygons(),S.faceStack&&(S.faceStack=v(c(p(S.faceStack).subtract(E)))),m+=N.count,b+=N.clipped,w+=N.openArea}return m||s("No pattern holes fit the finished face. Reduce Hole size or Solid border, enlarge the artwork, or choose Use solid face."),t.facePattern={...r,holeCount:m,clippedCount:b,openArea:w},m&&t.warnings.push(`Perforated face: ${m} ${r.shape} pattern holes${b?`, ${b} clipped at the protected border`:""}. Open holes can show the LEDs; check the narrow webs and face fit in a small test print.`),t}catch(S){throw S.field||(S.field="canvasMode"),S}finally{a.reverse().forEach(S=>S.delete())}}function Yl(n,t){let e=t.params,r=e.designCutouts;if(!r?.length)return t;let s=Bl(e);if(!s.cutouts)throw Error(s.cutoutReason);if(!Array.isArray(r)||r.length>64||!t.artworkTransform)throw Error("Invalid canvas cutout data.");let a=[],c=m=>(a.push(m),m),{CrossSection:h,Manifold:u}=n,d=m=>c(new h(m,"NonZero")),p=m=>c(new u(new n.Mesh({numProp:m.stride,vertProperties:m.vertices,triVerts:m.indices}))),v=m=>{if(m.status()!=="NoError"||m.isEmpty())throw Error("A cutout removes or invalidates a part. Reduce or move it.");let b=m.getMesh();return{vertices:new Float32Array(b.vertProperties),indices:new Uint32Array(b.triVerts),stride:b.numProp}},y=m=>m.decompose().map(c).filter(b=>b.volume()>1e-6).length;try{let m=t.artworkTransform,b=r.map(S=>{if(!["face","back"].includes(S.role)||!Array.isArray(S.polygons)||S.polygons.reduce((P,R)=>P+R.length,0)>4e4||S.polygons.some(P=>P.length<3||P.some(R=>R.length!==2||R.some(C=>!Number.isFinite(C)||Math.abs(C)>1e4))))throw Error("Invalid canvas cutout outline.");return{...S,section:d(S.polygons.map(P=>P.map(([R,C])=>[R*m.scale+m.x,C*m.scale+m.y])))}}),w=new Map(t.parts.map(S=>[S,[]]));for(let S of b){if(S.section.area()<.1)throw Error("A canvas cutout is too small. Increase its size.");let P=null;for(let R of t.parts){let C=S.role==="face"?d(R.facePolygons):c(p(R.body).slice(Math.min(.05,e.base/2))),A=c(C.offset(-.8,"Round",2,32));if(c(S.section.subtract(A)).area()<.001){let N=S.role==="back"?e.base+.02:(R.faceZ??t.depth-e.faceRecess-e.acrylic)-.02,F=c(p(R.body).slice(N)),E=c(S.section.offset(.8,"Round",2,32));if(c(E.intersect(F)).area()>.001)continue;P=R;break}}if(!P)throw Error(`Canvas ${S.role} cutout \u201C${S.name}\u201D must fit inside one part, at least 0.8 mm from its edge, wall and fittings. Move or shrink it.`);w.get(P).push(S)}for(let S=0;S<b.length;S++)for(let P=S+1;P<b.length;P++)if(b[S].role===b[P].role&&c(c(b[S].section.offset(.8,"Round",2,32)).intersect(b[P].section)).area()>.001)throw Error("Keep at least 0.8 mm between canvas cutouts, or Join them into one cutout.");for(let[S,P]of w)for(let R of["face","back"]){let C=P.filter(L=>L.role===R);if(!C.length)continue;let A=c(h.union(C.map(L=>L.section))),N=c(c(A.extrude(R==="face"?e.acrylic+(e.maskThickness||0)+.04:e.base+.04)).translate([0,0,-.02])),F=R==="face"?"face":"body",E=p(S[F]),O=c(E.subtract(N));if(y(O)!==y(E))throw Error(`The ${R} cutout splits its part. Leave a wider solid border.`);if(S[F]=v(O),R==="face"){if(S.facePolygons=c(d(S.facePolygons).subtract(A)).toPolygons(),S.mask){let L=c(p(S.mask).subtract(N));S.mask=L.isEmpty()?null:v(L),S.maskPolygons=c(d(S.maskPolygons).subtract(A)).toPolygons(),S.maskPieces=L.isEmpty()?0:y(L)}S.faceStack&&(S.faceStack=v(c(p(S.faceStack).subtract(N))))}else{let L=E.volume()-O.volume();S.volume-=L,t.volume-=L,S.previewBody&&(S.previewBody=v(c(p(S.previewBody).subtract(N))))}}return t.warnings.push(`${b.length} Design canvas cutout(s) included in production geometry. Face holes also appear in cutting outlines. Check strength and light leakage on a test print.`),t}finally{a.reverse().forEach(m=>m.delete())}}function Zl(n,t){let e=t.params,r=e.faceColourMode??"none";if(r==="none")return ql(n,t);if(e.faceMethod!=="print")throw Error("Multicolour faces require a printed face.");if(["integrated","reartray"].includes(e.construction))throw Error("Multicolour faces currently need a separate face, sleeve or push-in front.");if(e.splitMode&&e.splitMode!=="off")throw Error("Turn off splitting to use multicolour faces in this version. Colour-preserving split export is not available yet.");if(!["bands","svg"].includes(r))throw Error("Choose a valid face colour layout.");let s=e.facePalette,a=e.faceColourBuild??"backed";if(!["backed","full"].includes(a))throw Error("Choose a valid colour construction.");if(!Array.isArray(s)||s.length<2||s.length>8||s.some(v=>!/^#[0-9a-f]{6}$/i.test(v)))throw Error("Use 2\u20138 valid face colours.");if(r==="svg"&&(e.construction==="inset"||e.artworkSource!=="svg"||!e.svgColourLayers?.length||!t.artworkTransform))throw Error("Import a solid-colour SVG for this colour layout. Inset lettering currently supports colour bands only.");let c=[],h=v=>(c.push(v),v),u=v=>h(new n.CrossSection(v,"NonZero")),d=v=>{if(v.status()!=="NoError"||v.isEmpty())throw Error("Unable to build a closed colour region. Simplify the artwork.");let y=v.getMesh();return{vertices:new Float32Array(y.vertProperties),indices:new Uint32Array(y.triVerts),stride:y.numProp}},p=v=>h(new n.Manifold(new n.Mesh({numProp:v.stride,vertProperties:v.vertices,triVerts:v.indices})));try{let v=e.projectMode==="lightbox"&&e.construction!=="inset",y=e.acrylic+(v?e.maskThickness:0),m=a==="full"?y:e.faceColourDepth??.6;if(!Number.isFinite(m)||m<.4||m>y)throw Error("Colour depth must be at least 0.4 mm and cannot exceed the total face thickness.");if(a==="backed"&&y-m<.4-1e-6)throw Error("Leave at least 0.4 mm of backing behind the colour skin. Increase face thickness or reduce colour depth.");let b=y-m,w=v?y:e.acrylic,S=t.parts.flatMap(R=>R.facePolygons.flat()),P={x0:Math.min(...S.map(R=>R[0])),y0:Math.min(...S.map(R=>R[1])),x1:Math.max(...S.map(R=>R[0])),y1:Math.max(...S.map(R=>R[1]))};for(let R of t.parts){let C=u(R.facePolygons),A=v?h(C.intersect(u(R.artPolygons))):C,N=(k,Z,tt=0)=>h(h(k.extrude(Z)).translate([0,0,tt])),F=p(R.face);v&&(F=h(F.add(N(C,w))));let E=h(F.trimByPlane([0,0,-1],-b)),O=new Map,L=(k,Z,tt="face")=>{if(Z.isEmpty()||Z.area()<1e-8)return;let Q=tt+"|"+k.toUpperCase(),it=O.get(Q);O.set(Q,{colour:k,role:tt,area:it?h(it.area.add(Z)):Z})},U=C;if(r==="svg"){let k=t.artworkTransform;for(let Z of[...e.svgColourLayers].reverse()){if(!Number.isInteger(Z.slot)||Z.slot<0||Z.slot>=s.length)throw Error("SVG uses more colours than the current palette.");let tt=u(Z.polygons.map(it=>it.map(([Y,et])=>[Y*k.scale+k.x,et*k.scale+k.y]))),Q=h(h(tt.intersect(A)).intersect(U));L(s[Z.slot],Q),U=h(U.subtract(Q))}}else{let k=e.faceColourDirection==="vertical",Z=k?P.x0:P.y0,tt=k?P.x1-P.x0:P.y1-P.y0;for(let Q=0;Q<s.length;Q++){let it=Z+tt*Q/s.length,Y=Z+tt*(Q+1)/s.length,et=k?[[it,P.y0-1],[Y,P.y0-1],[Y,P.y1+1],[it,P.y1+1]]:[[P.x0-1,it],[P.x1+1,it],[P.x1+1,Y],[P.x0-1,Y]],H=h(h(u([et]).intersect(A)).intersect(U));L(s[Q],H),U=h(U.subtract(H))}}L(v?e.materials?.cap?.colour??"#20252b":e.materials?.face?.colour??"#ffffff",U,v?"cap":"face"),R.faceColours=[],!E.isEmpty()&&E.volume()>1e-6&&R.faceColours.push({name:a==="full"?"Fitting collar / skirt":"Continuous backing",role:"face",colour:e.materials?.face?.colour??"#ffffff",mesh:d(E)}),R.faceColourBuild={mode:a,colourDepth:m,backingDepth:y-m,total:y};for(let{colour:k,role:Z,area:tt}of O.values())h(tt.offset(-.2,"Miter",2)).isEmpty()&&t.warnings.push(`${R.name}: a colour detail may be too thin for a 0.4 mm nozzle. Inspect the sliced first layers.`),R.faceColours.push({name:`${Z==="cap"?"Opaque mask":"Face"} ${k.toUpperCase()}`,role:Z,colour:k,defaultLightBlocking:Z==="cap",mesh:d(N(tt,m,b))});R.faceColourTop=y}return a==="full"&&t.warnings.push("Full-depth colour: no continuous backing. Inspect the sliced boundaries and test adhesion between colours; disconnected artwork remains separate. The flange uses the selected body or face colour."),t.warnings.push("Multicolour face: print face-down as exported. Assign compatible filaments and verify first layers, purge tower and dark-to-light flushing in the slicer. Colour/brightness depend on the actual filament; print a small sample."),ql(n,t)}finally{c.reverse().forEach(v=>v.delete())}}function ql(n,t){let e=t.params;if(e.faceMethod!=="print"||e.construction!=="pushin")return t;let r=[],s=c=>(r.push(c),c),a=c=>{if(c.status()!=="NoError")throw Error("Unable to separate the collar colour.");let h=c.getMesh();return{vertices:new Float32Array(h.vertProperties),indices:new Uint32Array(h.triVerts),stride:h.numProp}};try{for(let c of t.parts){let u=c.faceColours,d=u??[{name:"Visible face",role:"face",colour:e.materials?.face?.colour??"#ffffff",mesh:c.face}],p=[],v=!1;for(let y of d){let m=s(new n.Manifold(new n.Mesh({numProp:y.mesh.stride,vertProperties:y.mesh.vertices,triVerts:y.mesh.indices}))),b=s(m.trimByPlane([0,0,-1],-0));if(b.isEmpty()||b.volume()<1e-6){p.push(y);continue}v=!0;let w=s(m.trimByPlane([0,0,1],0));!w.isEmpty()&&w.volume()>1e-6&&p.push({...y,name:y.name==="Fitting collar / skirt"?"Visible skirt":y.name,mesh:a(w)}),p.push({name:"Fitting collar / skirt",role:e.frontFlangeColour==="face"?"face":"body",colour:e.frontFlangeColour==="face"?e.materials?.face?.colour??"#ffffff":e.materials?.body?.colour??"#20252b",defaultLightBlocking:e.frontFlangeColour!=="face",mesh:a(b)})}v&&(c.faceColours=p,c.collarMatchesBody=e.frontFlangeColour!=="face",u||(c.faceColourTop=e.acrylic,c.faceColourBuild={mode:"collar",colourDepth:e.acrylic,backingDepth:0,total:e.acrylic},c.faceMaskSeparate=!!c.mask))}return t.parts.some(c=>c.collarMatchesBody)&&t.warnings.push("Push-in insertion collars match the body colour. The visible face keeps its own colour. Print registered parts together with compatible filaments; the colour boundary is not a separate mechanical joint."),t}finally{r.reverse().forEach(c=>c.delete())}}function Lp(n){return n.projectMode!=="lightbox"&&!(n.construction==="inset"&&n.layout==="merged")?"This first version splits contour and rectangular lightboxes. Individual letters and welded lettering need a different seam planner.":!["separate","inset"].includes(n.construction)||n.faceMethod!=="print"?"Choose Separate front or Inset lettering with a printed face. Other constructions and cut acrylic faces are not supported by this joint yet.":n.standMode==="desk"?"Turn off the desk base first. A split base and its mounting loads have not been checked.":""}var Dp=n=>{let t=n.map(e=>e[0]);return[Math.min(...t),Math.max(...t)]};function Np(n){let t=n.params,e=Lp(t);if(e)throw Error(e);let r=t.splitMargin??8,s=t.splitFit??0;if(!["keys","dovetail"].includes(t.splitMode))throw Error("Choose a supported split joint.");if(t.splitMode==="dovetail"&&(!Number.isFinite(s)||s<.05||s>.3))throw Error("Integrated dovetails need 0.05\u20130.30 mm clearance per side. Start at 0.15 mm and print the joint test.");if(!Number.isFinite(r)||r<2||r>30||!Number.isFinite(s)||s<-.1||s>.3)throw Error("Use a 2\u201330 mm plate margin and \u22120.10 to 0.30 mm key clearance.");let a=t.bedX-2*r,c=t.bedY-2*r;if(n.height>c+.001)throw Error(`The box is ${n.height.toFixed(1)} mm tall; only ${c.toFixed(1)} mm is usable. This version splits left to right only. Reduce its height or change the build volume.`);if(n.depth>t.bedZ)throw Error("The box depth exceeds the printer height.");if(a<40)throw Error("The usable plate width is too small for the reinforced joints.");let h=[];if(n.width>a+.001)if(t.splitStrategy==="even"){let u=Math.ceil(n.width/a);for(let d=1;d<u;d++)h.push(n.width*d/u)}else{let u=(n.parts[0].artPolygons||[]).map(Dp).sort((y,m)=>y[0]-m[0]),d=[];for(let y of u){let m=d.at(-1);m&&y[0]<=m[1]+.4?m[1]=Math.max(m[1],y[1]):d.push([...y])}let p=d.slice(1).map((y,m)=>(d[m][1]+y[0])/2),v=0;for(;n.width-v>a+.001;){let y=p.filter(m=>m-v>=30&&m-v<=a-.001&&n.width-m>=30);if(!y.length)throw Error("No letter gap fits within the plate width. A letter, touching text or overlapping rows crosses the next cut. Reduce the size, increase spacing, or explicitly choose Even sections (cuts through artwork).");if(v=y.at(-1),h.push(v),h.length>35)throw Error("Use fewer than 36 sections.")}}return{cuts:h,edges:[0,...h,n.width],margin:r,fit:s,strategy:t.splitStrategy??"gaps",status:h.length?"planned":"fits",message:h.length?`${h.length+1} sections planned. ${t.splitStrategy==="even"?"Seams may cross illuminated artwork.":"Face seams stay between artwork shapes."} Prepare print files to check joints and assembly clearance.`:"The whole box already fits the usable plate. No cuts are needed."}}function Jl(n,t){if(!t.params.splitMode||t.params.splitMode==="off")return t;try{let e=Np(t);if(t.splitPlan=e,!e.cuts.length||t.params._preview)return t;let r=t.params,s=t.parts[0],a=r.splitMode==="dovetail";if(t.parts.length!==1)throw Error("Splitting requires one connected body. Increase the border to join the artwork.");if(r.base<1.2||(s.seatZ??s.faceZ??r.depth-(r.faceRecess??0)-r.acrylic-(r.maskThickness??.8))<r.base+7)throw Error("Reinforced joints need at least a 1.2 mm back and 7 mm free depth above it.");let c=[],h=u=>(c.push(u),u);try{let u=z=>h(new n.Manifold(new n.Mesh({numProp:z.stride,vertProperties:z.vertices,triVerts:z.indices}))),d=z=>h(new n.CrossSection(z,"NonZero")),p=(z,B,j,q)=>d([[[z,B],[z+j,B],[z+j,B+q],[z,B+q]]]),v=(z,B,j,q,nt,bt)=>h(h(n.Manifold.cube([q,nt,bt])).translate([z,B,j])),y=z=>{if(z.status()!=="NoError"||z.isEmpty())throw Error("A split produced invalid geometry.");let B=z.getMesh();return{vertices:new Float32Array(B.vertProperties),indices:new Uint32Array(B.triVerts),stride:B.numProp}},m=z=>{let B=z.decompose(),j=B.length;return B.forEach(q=>q.delete()),j===1},b=u(s.body),w=u(s.insetSkirtDepth?xr(s.face,r.acrylic,t.height):s.face),S=s.mask?u(s.mask):null,P=h(d(s.enclosurePolygons).offset(-r.wall-1,"Miter",2)),R=[],C=[],A=[],N=[],F=(z,B,j=1)=>d([[[-4,-3],[0,-3],[8,-5],[8,5],[0,3],[-4,3]].map(([q,nt])=>[z+q*j,B+nt*j])]),E=(z,B,j=1)=>d([[[-9,-5],[0,-2.5],[9,-5],[9,5],[0,2.5],[-9,5]].map(([q,nt])=>[z+q*j,B+nt*j])]),O=P,L=h(b.slice(Math.max(.1,r.base/2)));O=h(O.intersect(L));let U=h(h(b.slice(r.base+.1)).add(h(b.slice(r.base+4.3))));if(O=h(O.subtract(h(U.offset(.5,"Miter",2)))),a){let z=h(b.intersect(v(-1,-1,r.base+.01,t.width+2,t.height+2,t.depth+2)));O=h(O.subtract(h(h(z.project()).offset(.5,"Miter",2))))}for(let z of[...t.ledPlan?.routes||[],...t.ledPlan?.wires||[]])if(z.envelope?.length)O=h(O.subtract(d(z.envelope)));else if(z.mesh){let B=[];for(let nt=0;nt<z.mesh.vertices.length;nt+=z.mesh.stride)B.push([z.mesh.vertices[nt],z.mesh.vertices[nt+1]]);let j=B.map(nt=>nt[0]),q=B.map(nt=>nt[1]);O=h(O.subtract(p(Math.min(...j),Math.min(...q),Math.max(...j)-Math.min(...j)+.01,Math.max(...q)-Math.min(...q)+.01)))}let k=d(s.enclosurePolygons),Z=r.bedX-2*e.margin,tt=Z-(a?8:0),Q=[],it=[],Y=z=>{let B=z.decompose(),j=B.length===1;return B.forEach(q=>q.delete()),j},et=0;for(;t.width-et>tt+.001;){let z=Math.min(et+tt-.01,t.width-30),B=e.cuts.find(nt=>nt>et+30&&nt<=z)??z,j=[B];for(let nt=z;nt>=et+35;nt-=3)Math.abs(nt-B)>.1&&j.push(nt);let q=null;for(let nt of j){let bt=h(k.intersect(p(et,-1,nt-et,t.height+2))),Tt=h(k.intersect(p(nt,-1,t.width-nt+1,t.height+2)));if(!(!Y(bt)||!Y(Tt))){for(let St of r.construction==="inset"?[1,.75,.6]:[1]){let Lt=[];for(let Wt=8*St+2;Wt<=t.height-8*St-2;Wt+=2)h(p(nt-12*St,Wt-8*St,24*St,16*St).subtract(O)).area()<.001&&Lt.push(Wt);if(Lt.length>1&&Lt.at(-1)-Lt[0]>=24*St){q={x:nt,scale:St,ys:[Lt[0],Lt.at(-1)]};break}}if(q){let St=v(et,-1,-1,nt-et,t.height+2,Math.max(r.depth+5,r.acrylic+(r.insetSkirtDepth??0)+2)),Lt=v(nt,-1,-1,t.width-nt+1,t.height+2,Math.max(r.depth+5,r.acrylic+(r.insetSkirtDepth??0)+2)),Wt=h(b.intersect(St)),Yt=h(b.intersect(Lt));if(m(Wt)&&m(Yt))break;q=null}}}if(!q)throw Error(`Back section ${Q.length+1} has no room for two separated joints clear of walls, LED paths, wire holes and the insertion corridor. Increase the ${r.construction==="inset"?"inset border":"box margin"}, adjust the LED route, or use a smaller design.`);if(et=q.x,Q.push(q.x),it.push(q),Q.length>35)throw Error("Use fewer than 36 back sections.")}e.bodyCuts=Q,e.bodyEdges=[0,...Q,t.width];let H=[],K=r.base+4.2;for(let[z,{x:B,ys:j,scale:q}]of it.entries()){let nt=j;for(let[bt,Tt]of[nt[0],nt.at(-1)].entries()){if(a){let ht=F(B,Tt,q),xt=h(ht.offset(e.fit,"Miter",2)),Pt=h(ht.extrude(K-.4));for(let pt=0;pt<4;pt++)Pt=h(Pt.add(h(h(h(ht.offset(-.075*(pt+1),"Miter",2)).extrude(.1)).translate([0,0,K-.4+pt*.1]))));let gt=h(h(xt.extrude(K+.2)).translate([0,0,-.1]));for(let pt=0;pt<4;pt++)gt=h(gt.add(h(h(h(xt.offset(.075*(4-pt),"Miter",2)).extrude(.1)).translate([0,0,pt*.1]))));let ut=v(B-12*q,Tt-8*q,0,24*q,16*q,K);if(b=h(b.add(ut)),H.push({cut:z+1,male:Pt,socket:gt}),C.push({cut:z+1,x:B,y:Tt,scale:q,clearance:e.fit,type:"dovetail",profile:[[-4,-3],[0,-3],[8,-5],[8,5],[0,3],[-4,3]]}),!A.some(pt=>pt.scale===q)){let pt=h(h(ut.intersect(v(B-12*q,Tt-9*q,-1,12*q,18*q,K+2))).add(Pt)),Bt=h(h(ut.intersect(v(B,Tt-9*q,-1,12*q,18*q,K+2))).subtract(gt));A.push({name:"dovetail-test-"+Math.round(q*100)+"-male",scale:q,mesh:y(pt)},{name:"dovetail-test-"+Math.round(q*100)+"-female",scale:q,mesh:y(Bt)})}continue}let St=E(B,Tt,q),Lt=h(St.offset(e.fit,"Miter",2)),Wt=v(B-12*q,Tt-8*q,r.base-.2,24*q,16*q,4.4),Yt=h(h(Lt.extrude(4.5)).translate([0,0,r.base]));b=h(h(b.add(Wt)).subtract(Yt));let Ct=h(h(St.extrude(3.6)).translate([0,0,.4]));for(let ht=0;ht<4;ht++){let xt=h(St.offset(-.2+ht*.05,"Miter",2));Ct=h(Ct.add(h(h(xt.extrude(.1)).translate([0,0,ht*.1]))))}let dt=y(Ct);if(N.push(y(h(Ct.translate([0,0,r.base])))),R.push({name:`Joint-${z+1}-key-${bt+1}`,group:"Joint keys",components:[{mesh:dt,role:"body",name:"Butterfly key"}]}),C.push({cut:z+1,x:B,y:Tt,scale:q,clearance:e.fit}),!A.some(ht=>ht.scale===q)){let ht=h(v(B-12*q,Tt-8*q,0,24*q,16*q,r.base+4.2).subtract(Yt));for(let[xt,Pt,gt]of[["left",B-12*q,12*q],["right",B,12*q]])A.push({name:"joint-test-"+Math.round(q*100)+"-"+xt,scale:q,mesh:y(h(ht.intersect(v(Pt,Tt-9*q,-1,gt,18*q,r.base+7))))});A.push({name:"joint-test-"+Math.round(q*100)+"-key",scale:q,mesh:dt})}}}let lt=[],J=[];for(let z=0;z<e.bodyEdges.length-1;z++){let B=e.bodyEdges[z],j=e.bodyEdges[z+1],q=v(B,-1,-1,j-B,t.height+2,Math.max(r.depth+5,r.acrylic+(r.insetSkirtDepth??0)+2)),nt=h(b.intersect(q));if(a)for(let bt of H)bt.cut===z+1&&(nt=h(nt.add(bt.male))),bt.cut===z&&(nt=h(nt.subtract(bt.socket)));if(a&&(nt=h(nt.simplify(.001))),J.push(nt),!m(nt))throw Error(`Back section ${z+1} would contain disconnected pieces. Increase the ${r.construction==="inset"?"inset border":"contour margin"} or use another construction.`);lt.push({name:`Back-${z+1}-body`,group:"Bodies",components:[{mesh:y(nt),role:"body",name:"Body"}]})}if(a){let z=J.map(B=>h(B.project()));for(let B=0;B<z.length;B++)for(let j=B+1;j<z.length;j++)if(h(z[B].intersect(z[j])).area()>.001)throw Error(`Body ${j+1} cannot slide down onto body ${B+1}: the rim or another feature blocks the dovetail. Use separate joining keys or increase the border.`);b=h(n.Manifold.union(J))}for(let z=0;z<e.edges.length-1;z++){let B=e.edges[z],j=e.edges[z+1],q=v(B,-1,-1,j-B,t.height+2,Math.max(r.depth+5,r.acrylic+(r.insetSkirtDepth??0)+2)),nt=h(w.intersect(q));if(r.construction==="inset"){let Tt=nt.decompose().map(h).sort((St,Lt)=>St.boundingBox().min[0]-Lt.boundingBox().min[0]||St.boundingBox().min[1]-Lt.boundingBox().min[1]);for(let[St,Lt]of Tt.entries())lt.push({name:`Face-${z+1}-insert-${St+1}`,group:"Faces",components:[{mesh:y(Lt),role:"face",name:"Letter insert"}]});continue}if(!m(nt))throw Error(`Face section ${z+1} would contain disconnected diffuser pieces. Choose another split strategy or simplify the outline.`);let bt=[{mesh:y(nt),role:"face",name:"Diffuser"}];if(S){let Tt=h(S.intersect(q));Tt.isEmpty()||bt.push({mesh:y(h(Tt.translate([0,0,r.acrylic]))),role:"cap",name:"Opaque mask"})}lt.push({name:`Face-${z+1}`,group:"Faces",components:bt})}for(let z of[...lt,...R]){let B=[1/0,1/0,1/0],j=[-1/0,-1/0,-1/0];for(let{mesh:nt}of z.components)for(let bt=0;bt<nt.vertices.length;bt+=nt.stride)for(let Tt=0;Tt<3;Tt++)B[Tt]=Math.min(B[Tt],nt.vertices[bt+Tt]),j[Tt]=Math.max(j[Tt],nt.vertices[bt+Tt]);let q=j.map((nt,bt)=>nt-B[bt]);if(q[0]>Z+.001||q[1]>r.bedY-2*e.margin+.001||q[2]>r.bedZ+.001)throw Error(`${z.name} exceeds the usable print plate after adding its joints.`)}return t.warnings=t.warnings.filter(z=>!/^Part \d+.*exceeds.*build volume/.test(z)),s.previewBody=y(b),t.volume+=b.volume()-u(s.body).volume(),t.split={jointMode:a?"dovetail":"keys",keyPreviews:N,items:[...lt,...R],samples:A,joints:C,notes:["Key width adapts to available room: 18, 13.5 or 10.8 mm. Print each supplied size of joint coupon; compact keys have less engagement and need a physical strength check.","Back and face sections are independently numbered left to right; their seams can be staggered. Follow the assembly map. Print bodies back-down, faces visible-face-down with any skirts upwards, and keys flat.","Butterfly keys press into paired pockets from inside the open box. They resist separation in the back plane; vertical retention relies on a calibrated tight fit, not a latch.","Print the supplied joint test first. Clearance is per side; negative values tighten the fit. Do not force a key. This prototype has not been strength-tested.","Join bodies and install LEDs/wires before fitting faces. The interior remains open across seams. Inspect light leakage and face retention; visible seams are possible."]},a&&(t.split.notes=["INTEGRATED DOVETAILS \u2014 male tongues belong to the left body; matching female sockets belong to the right body. No loose joining keys. Two reinforced joints per seam; compact joints have less engagement.","Print bodies and both joint coupons back-down. First place B1 flat, then lower B2 vertically over the male tongues of B1, then B3 onto B2, continuing left to right. Keep faces off until all bodies are joined. The assembly viewer shows the lowering direction.","Clearance is per side. Start with the supplied male/female coupon in your final filament and settings. The male top and female underside have stepped lead-in chamfers. Change clearance in 0.05 mm steps if needed; never force the joint.","Dovetails resist pulling apart across the seam. They are NOT snap locks: vertical lift-out retention relies on friction and is not guaranteed. Support all sections when lifting. This mechanical prototype has not been physically strength-tested.","Connector footprints are included in the print-bed check. A conservative projection check verifies an unobstructed vertical assembly path. LED paths and wire passages are reserved; strength, warping and material shrinkage are not simulated.","Back and face seams may be staggered. Follow numbered parts and the assembly map. Install LEDs and wires after joining the bodies, then fit the faces. Print faces visible-face-down with skirts upwards. Inspect light leakage and face retention."]),e.status="ready",e.message=`${e.bodyCuts.length+1} back sections, ${lt.filter(z=>z.group==="Faces").length} face pieces + ${a?C.length+" integrated dovetails":R.length+" butterfly keys"} ready. Print the joint test before the full box.`,t}finally{c.reverse().forEach(u=>u.delete())}}catch(e){return t.splitPlan={status:"blocked",cuts:[],message:e.message},t.exportBlocked="Split design: "+e.message,t.warnings.push(t.exportBlocked),t}}function jl(n,t,e,r){let s=new n.CrossSection(t,"EvenOdd"),a=s.offset(-r-.15,"Round",2,32);try{if(a.isEmpty())return null;let c=a.toPolygons(),h=c.flat(),u=h.map(L=>L[0]),d=h.map(L=>L[1]),p=[Math.min(...u),Math.min(...d),Math.max(...u),Math.max(...d)],v=p[2]-p[0],y=p[3]-p[1];if(!["horizontal","vertical"].includes(e.ledRouting)&&(a.area()/(v*y)<.62||Math.min(v,y)<r*6))return null;let b=e.ledRouting==="vertical"?"vertical":"horizontal",w=b==="horizontal"?1:0,S=1-w,P=p[w+2]-p[w],R=Math.max(1,e.ledOpticalDistance??e.depth-(e.faceRecess||0)-e.acrylic-(e.base+e.ledThickness)),C={economy:3.4,balanced:2.7,even:2}[e.ledCoverage||"balanced"],A=e.ledRowSpacing>0?e.ledRowSpacing:Math.max(50,Math.min(140,R*C)),N=e.ledRows>0?e.ledRows:Math.max(1,Math.ceil((P+2*r)/A));if(N>24)throw Object.assign(Error("This box needs more than 24 rows at this spacing. Increase row spacing or use manual routes."),{field:"ledRowSpacing"});if(N>1&&P/N<r*2+1)throw Object.assign(Error("Too many rows for the strip width. Reduce row count or increase spacing."),{field:e.ledRows>0?"ledRows":"ledRowSpacing"});let F=[],E=L=>{let U=[];for(let Z of c)for(let tt=0,Q=Z.length-1;tt<Z.length;Q=tt++){let it=Z[Q],Y=Z[tt];it[w]>L!=Y[w]>L&&U.push(it[S]+(L-it[w])*(Y[S]-it[S])/(Y[w]-it[w]))}U.sort((Z,tt)=>Z-tt);let k=[];for(let Z=0;Z+1<U.length;Z+=2)U[Z+1]-U[Z]>.2+r*2&&k.push([U[Z]+.1,U[Z+1]-.1]);return k},O=[];for(let L=0;L<N;L++){let U=p[w]+P*(L+.5)/N,k=P/N,Z=E(U),tt=Z.reduce((it,Y)=>it+Y[1]-Y[0],0),Q=null;for(let it of[0,-.1,.1,-.2,.2,-.3,.3]){let Y=U+it*k,et=E(Y);if(!et.length)continue;let H=et.reduce((lt,J)=>lt+J[1]-J[0],0);if(H<tt*.85||O.length&&Y-O.at(-1)<r*2+1)continue;let K=et.length*k+Math.abs(it*k)+Math.max(0,tt-H);(!Q||K<Q.score)&&(Q={v:Y,runs:et,score:K})}if(Q){O.push(Q.v);for(let[it,Y]of Q.runs){let et=H=>w===1?[H,Q.v]:[Q.v,H];F.push({points:[et(it),et(Y)],closed:!1,terminals:[!1,!1]})}}}return{paths:F,rowPositions:O,rowCount:O.length,rowSpacing:P/N,direction:b,opticalDistance:R,method:"rows"}}finally{a.delete(),s.delete()}}var or=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]);function On(n){let t=0;for(let e=1;e<n.length;e++)t+=or(n[e-1],n[e]);return t}function cn(n,t=.65){if(n.length<3)return n;let e=n[0],r=n.at(-1),s=r[0]-e[0],a=r[1]-e[1],c=s*s+a*a,h=0,u=0;for(let d=1;d<n.length-1;d++){let p=n[d],v=c?Math.max(0,Math.min(1,((p[0]-e[0])*s+(p[1]-e[1])*a)/c)):0,y=or(p,[e[0]+s*v,e[1]+a*v]);y>h&&(h=y,u=d)}return h>t?[...cn(n.slice(0,u+1),t).slice(0,-1),...cn(n.slice(u),t)]:[e,r]}function ar(n){let t=n.flat();if(!t.length)return{paths:[],step:0,pruned:0};let e=1/0,r=1/0,s=-1/0,a=-1/0;for(let[H,K]of t)e=Math.min(e,H),r=Math.min(r,K),s=Math.max(s,H),a=Math.max(a,K);let c=Math.max(.3,(s-e)/700,(a-r)/700,Math.sqrt((s-e)*(a-r)/35e4)),h=e-c*2,u=r-c*2,d=Math.ceil((s-e)/c)+5,p=Math.ceil((a-r)/c)+5,v=d*p,y=new Uint8Array(v);for(let H=1;H<p-1;H++){let K=u+H*c,lt=[];for(let J of n)for(let z=0,B=J.length-1;z<J.length;B=z++){let j=J[B],q=J[z];j[1]>K!=q[1]>K&&lt.push(j[0]+(K-j[1])*(q[0]-j[0])/(q[1]-j[1]))}lt.sort((J,z)=>J-z);for(let J=0;J+1<lt.length;J+=2){let z=Math.max(1,Math.ceil((lt[J]-h)/c)),B=Math.min(d-2,Math.floor((lt[J+1]-h)/c));for(let j=z;j<=B;j++)y[H*d+j]=1}}let m=new Float32Array(v);for(let H=0;H<v;H++)m[H]=y[H]?1e6:0;for(let H=1;H<p-1;H++)for(let K=1;K<d-1;K++){let lt=H*d+K;y[lt]&&(m[lt]=Math.min(m[lt],m[lt-1]+1,m[lt-d]+1,m[lt-d-1]+Math.SQRT2,m[lt-d+1]+Math.SQRT2))}for(let H=p-2;H>0;H--)for(let K=d-2;K>0;K--){let lt=H*d+K;y[lt]&&(m[lt]=Math.min(m[lt],m[lt+1]+1,m[lt+d]+1,m[lt+d+1]+Math.SQRT2,m[lt+d-1]+Math.SQRT2))}let b=[];for(let H=0;H<v;H++)y[H]&&b.push(H);let w=!0,S=0;for(;w&&S++<1e3;){w=!1;for(let H=0;H<2;H++){let K=[];for(let lt of b){if(!y[lt])continue;let J=[y[lt-d],y[lt-d+1],y[lt+1],y[lt+d+1],y[lt+d],y[lt+d-1],y[lt-1],y[lt-d-1]],z=J.reduce((j,q)=>j+q,0);if(z<2||z>6)continue;let B=0;for(let j=0;j<8;j++)!J[j]&&J[(j+1)%8]&&B++;B===1&&((H===0?J[0]*J[2]*J[4]||J[2]*J[4]*J[6]:J[0]*J[2]*J[6]||J[0]*J[4]*J[6])||K.push(lt))}K.length&&(w=!0);for(let lt of K)y[lt]=0}}if(w)throw Error("Artwork is too broad for the single-row LED planner. Use a simpler shape or manual paths.");let P=b.filter(H=>y[H]),R=new Map,C=H=>[h+H%d*c,u+Math.floor(H/d)*c];for(let H of P){let K=[];for(let lt=-1;lt<=1;lt++)for(let J=-1;J<=1;J++){if(!J&&!lt)continue;let z=H+lt*d+J;y[z]&&(J&&lt&&(y[H+J]||y[H+lt*d])||K.push(z))}R.set(H,K)}let A=[],N=new Map;for(let H of P){if(N.has(H)||R.get(H).length===2)continue;let K=[H],lt=A.length;if(N.set(H,lt),R.get(H).length>2)for(let z=0;z<K.length;z++)for(let B of R.get(K[z]))R.get(B).length>2&&!N.has(B)&&(N.set(B,lt),K.push(B));let J=K.map(C);A.push({point:[J.reduce((z,B)=>z+B[0],0)/J.length,J.reduce((z,B)=>z+B[1],0)/J.length],pixels:K,radius:Math.max(...K.map(z=>m[z]))*c})}let F=new Set,E=[],O=(H,K)=>H<K?H+":"+K:K+":"+H,L=(H,K)=>F.add(O(H,K)),U=(H,K,lt)=>{let J=[H],z=H,B=K;L(z,B);let j=0;for(;j++<=P.length&&(J.push(B),!N.has(B));){let bt=R.get(B).find(Tt=>Tt!==z);if(bt===void 0||F.has(O(B,bt)))break;z=B,B=bt,L(z,B)}let q=N.get(B);if(q===void 0)return;let nt=[A[lt].point,...J.slice(1,-1).map(C),A[q].point];nt.length>1&&On(nt)>.01&&E.push({a:lt,b:q,points:nt,length:On(nt),active:!0})};for(let H=0;H<A.length;H++)for(let K of A[H].pixels)for(let lt of R.get(K)){if(N.get(lt)===H){L(K,lt);continue}F.has(O(K,lt))||U(K,lt,H)}for(let H of P)for(let K of R.get(H))if(!F.has(O(H,K))){let lt=A.length;N.set(H,lt),A.push({point:C(H),pixels:[H],radius:m[H]*c}),U(H,K,lt)}let k=0;for(let H=0;H<4;H++){let K=new Int32Array(A.length);for(let J of E)J.active&&(K[J.a]++,K[J.b]++);let lt=0;for(let J of E)if(J.active&&J.a!==J.b){let z=K[J.a]===1&&K[J.b]>=3?J.b:K[J.b]===1&&K[J.a]>=3?J.a:-1;z>=0&&J.length<Math.max(1.2,A[z].radius*1.15)&&(J.active=!1,lt++,k++)}if(!lt)break}let Z=A.map(()=>[]),tt=new Map;E.forEach((H,K)=>{H.active&&(Z[H.a].push(2*K),Z[H.b].push(2*K+1))});let Q=H=>{let K=E[H>>1],lt=H%2?[...K.points].reverse():K.points,J=1;for(;J<lt.length-1&&or(lt[0],lt[J])<3;)J++;let z=or(lt[0],lt[J])||1;return[(lt[J][0]-lt[0][0])/z,(lt[J][1]-lt[0][1])/z]};for(let H of Z){let K=[...H];for(;K.length>=2;){let lt=1/0,J=0,z=1;for(let q=0;q<K.length;q++)for(let nt=q+1;nt<K.length;nt++){let bt=Q(K[q]),Tt=Q(K[nt]),St=bt[0]*Tt[0]+bt[1]*Tt[1];St<lt&&(lt=St,J=q,z=nt)}let B=K[J],j=K[z];tt.set(B,j),tt.set(j,B),K.splice(z,1),K.splice(J,1)}}let it=new Set,Y=[],et=H=>{let K=H,lt=H^1,J=[];for(;!it.has(K>>1);){let z=E[K>>1];it.add(K>>1);let B=K%2?[...z.points].reverse():z.points;J.push(...J.length?B.slice(1):B),lt=K^1;let j=tt.get(lt);if(j===void 0)break;K=j}if(J.length>1){let z=or(J[0],J.at(-1))<c*.1,B;if(z){let q=Math.floor(J.length/2);B=[...cn(J.slice(0,q+1),Math.max(.5,c*1.2)).slice(0,-1),...cn(J.slice(q),Math.max(.5,c*1.2))]}else B=cn(J,Math.max(.5,c*1.2));let j=q=>{let nt=E[q>>1];return Z[q%2?nt.b:nt.a].length===1};Y.push({points:B,closed:z,terminals:[j(H),j(lt)]})}};for(let H of Z)for(let K of H)!tt.has(K)&&!it.has(K>>1)&&et(K);return E.forEach((H,K)=>{H.active&&!it.has(K)&&et(K*2)}),{paths:Y.sort((H,K)=>On(K.points)-On(H.points)),step:c,pruned:k}}function Pi(n,t){let e=!1,r=1/0;for(let s of n)for(let a=0,c=s.length-1;a<s.length;c=a++){let h=s[c],u=s[a];h[1]>t[1]!=u[1]>t[1]&&t[0]<(u[0]-h[0])*(t[1]-h[1])/(u[1]-h[1])+h[0]&&(e=!e);let d=u[0]-h[0],p=u[1]-h[1],v=Math.max(0,Math.min(1,((t[0]-h[0])*d+(t[1]-h[1])*p)/(d*d+p*p||1)));r=Math.min(r,Math.hypot(t[0]-h[0]-v*d,t[1]-h[1]-v*p))}return e?r:-r}function Kl(n,t,e,r){let s=new n.CrossSection(t,"EvenOdd"),a=s.offset(-e,"Round",2,48),c=a.offset(e,"Round",2,48);try{let h=c.isEmpty()?s:c,u=ar(h.toPolygons()),d=ar(t),p=[],v=Math.max(0,...u.paths.map(b=>On(b.points)),...d.paths.map(b=>On(b.points))),y=Math.max(r*3,Math.min(e*4,v*.3)),m=b=>{let w=1/0;for(let S of p)for(let P=1;P<S.points.length;P++){let R=S.points[P-1],C=S.points[P],A=C[0]-R[0],N=C[1]-R[1],F=Math.max(0,Math.min(1,((b[0]-R[0])*A+(b[1]-R[1])*N)/(A*A+N*N||1)));w=Math.min(w,Math.hypot(b[0]-R[0]-F*A,b[1]-R[1]-F*N))}return w};for(let b of[...u.paths,...d.paths]){let w=[],S=()=>{w.length>1&&On(w)>=y&&w.some(P=>m(P)>e*1.5)&&p.push({points:cn(w,1),closed:w.length>3&&Math.hypot(w[0][0]-w.at(-1)[0],w[0][1]-w.at(-1)[1])<.01,terminals:[!1,!1]}),w=[]};for(let P=1;P<b.points.length;P++){let R=b.points[P-1],C=b.points[P],A=Math.max(1,Math.ceil(Math.hypot(C[0]-R[0],C[1]-R[1])));for(let N=P===1?0:1;N<=A;N++){let F=[R[0]+(C[0]-R[0])*N/A,R[1]+(C[1]-R[1])*N/A];m(F)<r*2+1?S():w.push(F)}}S()}return{...u,paths:p}}finally{c.delete(),a.delete(),s.delete()}}function $l(n,t,e){let r=(a,c)=>{let h=1/0;for(let u of c)for(let d=1;d<u.length;d++){let p=u[d-1],v=u[d],y=v[0]-p[0],m=v[1]-p[1],b=Math.max(0,Math.min(1,((a[0]-p[0])*y+(a[1]-p[1])*m)/(y*y+m*m||1)));h=Math.min(h,Math.hypot(a[0]-p[0]-y*b,a[1]-p[1]-m*b))}return h},s=a=>{let c=a.map(h=>[...h]);for(;c.length>1&&r(c[0],t)<e;){let h=c[0],u=c[1],d=Math.hypot(u[0]-h[0],u[1]-h[1]);d<=.5?c.shift():c[0]=[h[0]+(u[0]-h[0])*.5/d,h[1]+(u[1]-h[1])*.5/d]}return c};return s(s(n).reverse()).reverse()}var os=Ns(vr(),1);var Ql=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]);function tc(n,t,e,r,s){let a=n.map(c=>[...c]);for(let c of[0,1]){if(!t?.[c])continue;let h=c?[...a].reverse():a,u=h[0],d=1;for(;d<h.length-1&&Ql(u,h[d])<3;)d++;let p=Ql(u,h[d]);if(p<.01)continue;let v=[(u[0]-h[d][0])/p,(u[1]-h[d][1])/p],y=u,m=r.flat(),b=Math.hypot(Math.max(...m.map(w=>w[0]))-Math.min(...m.map(w=>w[0])),Math.max(...m.map(w=>w[1]))-Math.min(...m.map(w=>w[1])));for(let w=.25;w<=b;w+=.25){let S=[u[0]+v[0]*w,u[1]+v[1]*w];if(Pi(e,S)<s||Pi(r,S)<.03)break;y=S}c?a[a.length-1]=y:a[0]=y}return a}var Ai=(n,t)=>{throw Object.assign(Error(t),{field:n})};function ec(n){let t=["cob","cob-flex"].includes(n.ledMode),e=n.ledDensity??80,r=n.ledVoltage??12,s=n.ledWattsPerMeter??null,a=n.ledCutMode??"length",c=n.ledCutLEDs??3;!t&&(!Number.isInteger(e)||e<10||e>300)&&Ai("ledDensity","LED density must be a whole number from 10 to 300 LEDs/m."),(!Number.isFinite(r)||r<5||r>48)&&Ai("ledVoltage","Enter a strip voltage from 5 to 48 V."),s!==null&&(!Number.isFinite(s)||s<.1||s>100)&&Ai("ledWattsPerMeter","Enter 0.1\u2013100 W/m, or leave consumption blank if unknown."),["leds","length"].includes(a)||Ai("ledCutMode","Choose how to specify the cutting interval."),!t&&a==="leds"&&(!Number.isInteger(c)||c<1||c>60)&&Ai("ledCutLEDs","LEDs per cut group must be a whole number from 1 to 60.");let h=1e3/e,u=!t&&a==="leds"?c*h:n.ledCutPitch??50;(!Number.isFinite(u)||u<3||u>2e3)&&Ai(a==="leds"?"ledCutLEDs":"ledCutPitch","Cut interval must be between 3 and 2000 mm.");let d=u/h,p=Math.round(d),v=p>=1&&Math.abs(d-p)<=.01;return t?{kind:n.ledMode,continuous:!0,density:null,pitch:null,voltage:r,wattsPerMeter:s,cutMode:"length",cutPitch:u,cutLEDs:null,consistent:!0}:{kind:"zigzag",continuous:!1,density:e,pitch:h,voltage:r,wattsPerMeter:s,cutMode:a,cutPitch:u,cutLEDs:a==="leds"?c:v?p:null,consistent:v}}function Fp(n,t,e){let r=[],s=1,a=0;for(let c=0;c<t;c++){let h=(c+.5)*e;for(;s<n.length;){let u=n[s-1],d=n[s],p=Math.hypot(d[0]-u[0],d[1]-u[1]);if(a+p>=h-1e-7){let v=p?Math.min(1,(h-a)/p):0;r.push([u[0]+(d[0]-u[0])*v,u[1]+(d[1]-u[1])*v]);break}a+=p,s++}}return r}function nc(n,t){Object.assign(n.profile,t),t.consistent||n.issues.push("Density and cut interval do not give a whole number of LEDs per cut group. Check the strip markings; LED count is approximate.");let e=1e4;for(let r of n.routes)r.ledCount=t.continuous?null:t.consistent?r.cutUnits*t.cutLEDs:Math.round((r.cutLength??r.length)/t.pitch),r.ledCountEstimated=!t.consistent,r.watts=t.wattsPerMeter===null?null:(r.cutLength??r.length)/1e3*t.wattsPerMeter,r.ledPositions=t.continuous?[]:Fp(r.points,Math.min(e,r.ledCount),t.pitch),e-=r.ledPositions.length;return n.totalLEDs=t.continuous?null:n.routes.reduce((r,s)=>r+s.ledCount,0),n.ledMarkersTruncated=n.totalLEDs>1e4,n.ledMarkersTruncated&&n.issues.push("LED preview limited to 10,000 markers; totals include all proposed sections."),n.totalWatts=t.wattsPerMeter===null?null:n.totalLength/1e3*t.wattsPerMeter,n.totalAmps=n.totalWatts===null?null:n.totalWatts/t.voltage,n}var on=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]);function Ci(n){let t=0;for(let e=1;e<n.length;e++)t+=on(n[e-1],n[e]);return t}function Ii(n,t){let e=[n[0]],r=t;for(let s=1;s<n.length&&r>1e-7;s++){let a=on(n[s-1],n[s]);if(!(a<1e-7))if(a<=r)e.push(n[s]),r-=a;else{e.push(n[s-1].map((c,h)=>c+(n[s][h]-c)*r/a));break}}return e}function Op(n,t){let e=new os.default.ClipperOffset(2,100);e.AddPath(n.map(([s,a])=>({X:Math.round(s*1e3),Y:Math.round(a*1e3)})),os.default.JoinType.jtRound,os.default.EndType.etOpenRound);let r=[];return e.Execute(r,t*500),r.map(s=>s.map(a=>[a.X/1e3,a.Y/1e3]))}function Up(n,t,e=!0){let r=n.map((a,c)=>{if(!e&&(c===0||c===n.length-1))return{points:[a],radius:1/0};let h=n[(c+n.length-1)%n.length],u=n[(c+1)%n.length],d=on(h,a),p=on(a,u),v=a.map((E,O)=>(E-h[O])/d),y=u.map((E,O)=>(E-a[O])/p),m=Math.acos(Math.max(-1,Math.min(1,v[0]*y[0]+v[1]*y[1])));if(m<.005)return{points:[a],radius:1/0};let b=Math.min(t*Math.tan(m/2),d*.45,p*.45),w=b/Math.tan(m/2),S=Math.sign(v[0]*y[1]-v[1]*y[0])||1,P=a.map((E,O)=>E-v[O]*b),R=a.map((E,O)=>E+y[O]*b),C=[P[0]-v[1]*w*S,P[1]+v[0]*w*S],A=Math.atan2(P[1]-C[1],P[0]-C[0]),N=Math.max(2,Math.ceil(m/(Math.PI/24))),F=[];for(let E=0;E<=N;E++){let O=A+m*S*E/N;F.push([C[0]+Math.cos(O)*w,C[1]+Math.sin(O)*w])}return F[0]=P,F[N]=R,{points:F,radius:w}}),s=[];for(let a=0;a<r.length-(e?0:1);a++){let c=r[a],h=r[(a+1)%r.length];s.push({...c,kind:"bend"},{points:[c.points.at(-1),h.points[0]],radius:1/0,kind:"straight"})}return s}function Bp(n,t){let e=(a,c,h)=>{let u=h[0]-c[0],d=h[1]-c[1],p=Math.max(0,Math.min(1,((a[0]-c[0])*u+(a[1]-c[1])*d)/(u*u+d*d||1)));return{distance:on(a,[c[0]+p*u,c[1]+p*d]),t:p}},r=(a,c,h)=>(c[0]-a[0])*(h[1]-a[1])-(c[1]-a[1])*(h[0]-a[0]),s=[0];for(let a=1;a<n.length;a++)s.push(s.at(-1)+on(n[a-1],n[a]));for(let a=1;a<n.length;a++)for(let c=a+2;c<n.length;c++){let h=n[a-1],u=n[a],d=n[c-1],p=n[c];if(r(h,u,d)*r(h,u,p)<0&&r(d,p,h)*r(d,p,u)<0)return!0;for(let[v,y,m,b,w]of[[h,a-1,d,p,c],[u,a,d,p,c],[d,c-1,h,u,a],[p,c,h,u,a]]){let S=e(v,m,b),P=s[w-1]+S.t*(s[w]-s[w-1]);if(S.distance<t-.15&&Math.abs(s[y]-P)>t*1.5)return!0}}return!1}function ic(n,t){let e=["zigzag","cob","cob-flex"].includes(t.params.ledMode),r=t.params.ledManualRoutes?.some(it=>it.holes?.length),s=e?t.params:{...t.params,ledWidth:7,ledThickness:2,ledBendRadius:8,ledClearance:.5,ledInset:1,ledCutMode:"leds",ledCutLEDs:3,ledDensity:80,ledVoltage:12,ledWattsPerMeter:null,ledWireDiameter:3};if(!e&&s.ledMode!=="wires"&&!r||s.calibration)return t;if(s.ledRouting??="auto",s.ledSimplify??=10,!["auto","simple","strokes","horizontal","vertical"].includes(s.ledRouting)||!Number.isFinite(s.ledSimplify)||s.ledSimplify<3||s.ledSimplify>25)throw Error("Check LED routing method and branch smoothing (3\u201325 mm).");let a=s.ledMode==="cob",c=(a||s.projectMode==="lightbox"&&s.construction!=="inset")&&s.ledRouting!=="strokes";if(s.ledCoverage??="balanced",s.ledRows??=0,s.ledRowSpacing??=0,c&&(!["economy","balanced","even"].includes(s.ledCoverage)||!Number.isInteger(s.ledRows)||s.ledRows<0||s.ledRows>24||!Number.isFinite(s.ledRowSpacing)||s.ledRowSpacing<0||s.ledRowSpacing>300))throw Error("Check LED coverage, row count (0\u201324) and spacing (0\u2013300 mm).");let h=ec(s);s.ledCutPitch=h.cutPitch;let u={ledWidth:7,ledThickness:2,ledBendRadius:8,ledClearance:.5,ledInset:1,ledCutPitch:50,ledWireDiameter:3,ledBendConfirmed:!1};for(let[it,Y]of Object.entries(u))s[it]??=Y;for(let[it,Y,et]of[["ledWidth",3,15],["ledThickness",.5,8],["ledBendRadius",1,50],["ledClearance",0,3],["ledInset",0,30],["ledCutPitch",3,2e3],["ledWireDiameter",1,6]])if(!Number.isFinite(s[it])||s[it]<Y||s[it]>et)throw Object.assign(Error("Check LED strip dimensions and bend settings."),{field:it});let d=[],p=it=>(d.push(it),it),{CrossSection:v,Manifold:y}=n,m=[],b=[],w=[],S=[],P=[],R=[],C=it=>p(new y(new n.Mesh({numProp:it.stride,vertProperties:it.vertices,triVerts:it.indices}))),A=it=>p(new v(it,"EvenOdd")),N=it=>{let Y=it.getMesh();return{vertices:new Float32Array(Y.vertProperties),indices:new Uint32Array(Y.triVerts),stride:Y.numProp}},F=s.base,E=F+s.ledThickness+s.ledWireDiameter/2+.5,O=(it,Y,et)=>p(p(y.cube([it.max[0]-it.min[0]+2,it.max[1]-it.min[1]+2,et])).translate([it.min[0]-1,it.min[1]-1,Y])),L=(it,Y)=>A(Op(it,Y)),U=0,k=0,Z=[],tt=[],Q=[];try{for(let B of t.assembly?[t.assembly]:t.parts){let j=C(B.body),q=B.back?C(B.back):j,nt=[j];q!==j&&nt.push(q);for(let At of t.assembly?t.parts:[B])At.face&&nt.push(p(C(At.face).translate([0,0,At.faceZ??t.depth-(s.faceRecess??0)-s.acrylic]))),At.cap&&nt.push(p(C(At.cap).translate([0,0,At.capZ??0]))),At.mask&&nt.push(p(C(At.mask).translate([0,0,At.maskZ??0])));let bt=p(q.slice(Math.max(.01,s.base-.05))),Tt=j.boundingBox(),St=O(Tt,F+.02,s.ledThickness+.1),Lt=O(Tt,E-s.ledWireDiameter/2,s.ledWireDiameter),Wt=p(v.union(nt.map(At=>p(p(At.intersect(St)).project())))),Yt=p(v.union(nt.map(At=>p(p(At.intersect(Lt)).project())))),Ct=p(p(p(bt.subtract(Wt)).simplify(.01)).offset(-.02,"Round",2,32));P.push({name:B.name,polygons:bt.toPolygons(),free:Ct.toPolygons()});let dt=(t.assembly?t.parts:[B]).flatMap(At=>At.artPolygons||At.facePolygons||[]),ht=dt.length?A(dt):Ct;P.at(-1).target=ht.toPolygons(),tt.push({part:B.name,free:p(bt.subtract(Yt))});let xt=p(Ct.offset(-s.ledInset,"Round",2,32)),Pt=JSON.stringify([P.at(-1).polygons,P.at(-1).free,P.at(-1).target]),gt=2166136261;for(let At=0;At<Pt.length;At++)gt=Math.imul(gt^Pt.charCodeAt(At),16777619);P.at(-1).key=String(gt>>>0);let ut=s.ledManualRoutes?.find(At=>At.part===B.name&&At.key===String(gt>>>0)),pt=ut?.paths!=null;if(P.at(-1).manualRoutes=pt,ut?.holes!==void 0){if(!Array.isArray(ut.holes)||ut.holes.length>80||ut.holes.some(At=>!Array.isArray(At.point)||At.point.length!==2||At.point.some(ne=>!Number.isFinite(ne))||!Number.isFinite(At.diameter)||At.diameter<2||At.diameter>12))throw Error("Check wire-hole positions and diameters (2\u201312 mm).");for(let At of ut.holes)R.push({id:"HOLE-"+(R.length+1),kind:"manual",part:B.name,point:[...At.point],diameter:At.diameter,axis:"Z",z:s.base,status:"pending",note:"Rear wire entry awaiting geometry checks."})}let Bt=!e||pt?{paths:[]}:c?jl(n,xt.toPolygons(),{...s,ledOpticalDistance:(B.faceZ??t.depth-(s.faceRecess??0)-s.acrylic)-F-s.ledThickness},s.ledWidth/2+s.ledClearance)||Kl(n,xt.toPolygons(),s.ledSimplify,s.ledWidth/2+s.ledClearance):ar(ht.toPolygons());if(Bt.method==="rows"&&Z.push({part:B.name,count:Bt.rowCount,spacing:Bt.rowSpacing,positions:Bt.rowPositions,direction:Bt.direction,opticalDistance:Bt.opticalDistance}),e&&c&&!pt&&S.push(Bt.method==="rows"?"Economical straight rows across the shared cavity. Spacing is a starting estimate, not a diffusion simulation. Adjust rows after testing the face.":"Narrow silhouette: main runs omit small branches. Adjust after testing the lit face."),e&&!pt&&!Bt.paths.length&&(S.push(`${B.name}: no usable stroke path could be extracted. Add a manual route or enlarge the artwork.`),k++),s.ledManualRoutes?.some(At=>At.part===B.name)&&!ut&&S.push(`${B.name}: artwork or mounting space changed; previous manual routes were not reused.`),e&&pt&&S.push(`${B.name}: manually adjusted routes; check that every intended stroke is illuminated.`),pt&&(!Array.isArray(ut.paths)||ut.paths.some(At=>!Array.isArray(At)||At.length<2||At.some(ne=>!Array.isArray(ne)||ne.length!==2||ne.some(ee=>!Number.isFinite(ee))))))throw Error("Check manual LED route points.");let Jt=e?pt?ut.paths.map(At=>({points:At,closed:on(At[0],At.at(-1))<.01})):Bt.paths:[];if(a&&(pt?S.push("Standard COB uses straight runs on the back. Curved manual paths are flagged; use separate runs and wire jumpers, or a verified side-bending COB tape."):Jt=Jt.flatMap(At=>{let ne=cn(At.points,Math.max(1,s.ledWidth/2));return ne.slice(1).map((ee,Ut)=>{let wt=ne[Ut],Ot=on(wt,ee),Nt=(s.ledWidth+2*s.ledClearance)/2+.2;return{points:Ot>2*Nt?[[wt[0]+(ee[0]-wt[0])*Nt/Ot,wt[1]+(ee[1]-wt[1])*Nt/Ot],[ee[0]-(ee[0]-wt[0])*Nt/Ot,ee[1]-(ee[1]-wt[1])*Nt/Ot]]:[],closed:!1}}).filter(ee=>ee.points.length===2)})),Jt.length>80)throw Error("Use at most 80 LED routes per body.");for(let At of Jt){if(b.length>=80){S.push("LED preview limited to 80 sections. Remaining strokes are not included."),k++;break}if(!Array.isArray(At.points)||At.points.length<2||At.points.length>1e3||At.points.some(de=>!Array.isArray(de)||de.length!==2||de.some(Be=>!Number.isFinite(Be))))throw Error("Check manual LED route points.");let ne=At.points.filter((de,Be)=>Be===0||on(de,At.points[Be-1])>.001);if(ne.length<2){U++;continue}let ee=cn(ne,.4),Ut=At.closed&&ne.length>3,wt=Ut?ee.slice(0,-1):ee,Ot=Up(wt,s.ledBendRadius,Ut),Nt=Ot,kt=Ut?[]:[wt[0]],Zt=!1;for(let de of Nt)kt.length||kt.push(de.points[0]),kt.push(...de.points.slice(1)),de.kind==="bend"&&de.radius<s.ledBendRadius-.1&&(Zt=!0);!Ut&&kt.length<2&&(kt=wt);let jt={part:B.name,points:ee,closed:Ut,manual:pt};Q.push(jt);let Ht=Ci(kt),$t=s.ledWidth/2+s.ledClearance+.03,ce=xt.toPolygons();if(!Ut){let de=0,Be=0;for(;de<Ht&&Pi(ce,Ii(kt,de).at(-1))<$t;)de+=.5;let an=[...kt].reverse();for(;Be<Ht-de&&Pi(ce,Ii(an,Be).at(-1))<$t;)Be+=.5;if(de+Be>=Ht){U++,jt.omitted=!0;continue}kt=Ii(Ii(an,Ht-de).reverse(),Ht-de-Be)}if(c&&!pt&&!Ut&&(kt=$l(kt,b.filter(de=>de.part===B.name).map(de=>de.points),s.ledWidth+2*s.ledClearance+.3),kt.length<2||Ci(kt)<s.ledWidth*2)){U++,jt.omitted=!0;continue}!a&&!c&&!Ut&&!pt&&(kt=tc(kt,At.terminals,ce,ht.toPolygons(),$t));let Qt=Ci(kt),Ae=Ut?s.ledWidth+2*s.ledClearance+.2:0;if(Qt<=Ae+.01){U++,jt.omitted=!0;continue}Ut&&(kt=Ii(Ii([...kt].reverse(),Qt-Ae/2).reverse(),Qt-Ae));let Xt=Ci(kt),Ee=Math.max(1,Math.ceil((Xt-1e-6)/s.ledCutPitch)),Me=Ee*s.ledCutPitch;Ut||(jt.points=kt.map(de=>[...de]));let Ue=kt,Se=Ci(Ue),ze=Math.max(0,Me-Se),Un=L(Ue,s.ledWidth+2*s.ledClearance),bn=L(Ue,s.ledWidth),Bn=p(Un.subtract(xt)).area(),$e=[];a&&Ci(wt)-on(wt[0],wt.at(-1))>.05&&$e.push("Standard COB cannot follow this sideways curve on the back. Draw straight runs with wire connections, or select side-bending COB."),Zt=Nt.some(de=>de.kind==="bend"&&de.radius<s.ledBendRadius-.1),Zt&&s.ledBendConfirmed&&$e.push("Some turns are tighter than the entered bend radius; adjust the route or verify a smaller radius for your strip."),Bp(Ue,s.ledWidth+2*s.ledClearance)&&$e.push("This strip doubles back into its own reserved clearance."),Bn>.08&&$e.push("Strip and clearance overlap a wall, fitting or unsupported rear area."),jt.cutAllowance=ze,b.push({bendIssue:Zt,id:"LED-"+(b.length+1),part:B.name,points:Ue,length:Se,cutLength:Me,coverageLength:Xt,cutAllowance:ze,cutUnits:Ee,availableLength:Qt,guideIndex:Q.length-1,polygons:bn.toPolygons(),envelope:Un.toPolygons(),reasons:$e,status:$e.length?"blocked":a||s.ledBendConfirmed?"clear":"unverified",z:F,mesh:N(p(p(bn.extrude(s.ledThickness)).translate([0,0,F])))}),m.push(Un)}}for(let B of t.stand?.ports||[])R.push({id:"PASSAGE-"+(R.length+1),kind:"printed",part:B.part,point:[B.wireX,B.y+2],end:[B.wireX,t.stand.top-t.stand.plug-4],diameter:B.diameter,axis:"Y",z:B.wireZ,status:"included",note:"Existing printed passage through the desk foot and base socket."});for(let B=0;B<b.length;B++)for(let j=B+1;j<b.length;j++)if(p(m[B].intersect(m[j])).area()>.1)for(let q of[B,j])b[q].status="blocked",b[q].reasons.push("Clearance overlaps another strip section. Move or split a route at this junction.");let it=Math.min(...t.parts.map(B=>B.faceZ??t.depth-(s.faceRecess??0)-s.acrylic)),Y=[];if(E+s.ledWireDiameter/2<=it-.05)for(let B=0;B<b.length;B++)for(let j=B+1;j<b.length;j++){let q=b[B],nt=b[j];if(q.part!==nt.part)continue;let bt=tt.find(Tt=>Tt.part===q.part)?.free;if(bt)for(let Tt of[q.points[0],q.points.at(-1)])for(let St of[nt.points[0],nt.points.at(-1)]){let Lt=on(Tt,St);if(Lt<.1)continue;let Wt=[Tt,St],Yt=L(Wt,s.ledWireDiameter);p(Yt.subtract(bt)).area()>.05||Y.push({i:B,j,points:Wt,length:Lt})}}Y.sort((B,j)=>B.length-j.length);let et=b.map((B,j)=>j),H=B=>{for(;et[B]!==B;)B=et[B];return B};for(let B of Y){let j=H(B.i),q=H(B.j);if(j===q)continue;et[j]=q;let nt=L(B.points,s.ledWireDiameter);w.push({id:"WIRE-"+(w.length+1),from:b[B.i].id,to:b[B.j].id,points:B.points,length:B.length,z:E,status:"clear",reason:"Feasible straight endpoint connection inside this body. Confirm solder-pad access, polarity and slack; no electrical circuit is specified.",mesh:N(p(p(nt.extrude(s.ledWireDiameter)).translate([0,0,E-s.ledWireDiameter/2])))})}let K=new Set(b.map((B,j)=>H(j))).size;K>1&&S.push(`${K} separate connection groups remain. No clear straight internal jumper connects them; plan the wiring manually or provide suitable passages. No wall-crossing wire is drawn.`),U&&S.push(`${U} stroke run(s) have no usable mounting path. Their guide paths remain visible; they are not included in totals.`),e&&!b.length&&S.push("No complete strip sections fit. Reduce the inset, use a suitable shorter cut interval, or enlarge the design."),!s.ledBendConfirmed&&b.some(B=>B.bendIssue)&&S.push("Some turns are tighter than the unverified planning radius. Test these bends or adjust their routes; they are not confirmed to fit your strip."),e&&!a&&!s.ledBendConfirmed&&S.push("Bend radius is an unverified planning value. Confirm it using your strip specification or a physical sample.");let lt=R.filter(B=>B.status==="blocked").length;lt&&S.push(`${lt} wire hole(s) overlap an edge, wall or fitting. Move the red holes in the layout editor.`);let J=b.filter(B=>B.status==="blocked").length,z=w.filter(B=>B.status==="blocked").length;return t.ledPlan={lighting:e,rowLayouts:Z,routing:Z.length?"parallel-rows":c?"simple-lightbox":"artwork-centreline",lengthPolicy:"coverage-first-round-up",guides:Q,connectionGroups:K,routes:b,wires:w,holes:R,floorOutlines:P,issues:S,blocked:J,wBlocked:z,hBlocked:lt,ledZ:F,wireZ:E,totalLength:b.reduce((B,j)=>B+j.cutLength,0),placedLength:b.reduce((B,j)=>B+j.length,0),cutAllowance:b.reduce((B,j)=>B+j.cutAllowance,0),wireLength:w.reduce((B,j)=>B+j.length,0),status:J||z||lt||U||k||K>1||e&&!b.length?"needs-work":!e||a||s.ledBendConfirmed?"clearance-checked":"unverified",profile:{width:s.ledWidth,thickness:s.ledThickness,bendRadius:s.ledBendRadius,clearance:s.ledClearance,inset:s.ledInset,cutPitch:s.ledCutPitch,wireDiameter:s.ledWireDiameter,bendConfirmed:a||s.ledBendConfirmed}},nc(t.ledPlan,h),h.continuous&&S.push("COB is previewed as a continuous ribbon. Use the actual cut marks, width and W/m. This is back-mounted planning; side-wall mounting and thermal performance are not simulated."),e&&t.warnings.push(`LED installation proposal: ${b.length} strip sections; ${J} blocked strips and ${z} blocked wire jumpers. ${s.ledBendConfirmed?"":"Bend radius needs confirmation. "}Geometry only: no illumination, heat, electrical sizing. Rear wire holes are checked separately. See the LED plan before installation.`),t}finally{d.reverse().forEach(it=>it.delete())}}var Pe=Object.freeze({revision:"PLA-R3",plug:10,depth:22,minHeight:20,minClearDepth:24,rootThickness:3.5,tipThickness:3,armWidth:4,armLength:30,rootRadius:2,armOuter:10.8,hookOverlap:1.2,guideHalfWidth:7,guideFit:.25,socketHeight:15,wall:3,releaseTravel:1.45,stopTravel:1.75,wireZ:11,keyRootX:-25,keyTop:-3.2,keyBottom:-7.2,keyMinX:-28,keyMaxX:10,grooveTop:-3.05,grooveBottom:-7.4,grooveDepth:4.95,minSpacing:48,releaseSlide:6.5});function kp(n=Pe.guideFit){let t=Pe,e=11+n+t.hookOverlap,r=a=>t.armOuter-t.rootThickness+(t.rootThickness-t.tipThickness)*Math.max(0,Math.min(1,(-a-t.rootRadius)/(t.armLength-t.rootRadius))),s=[[t.armOuter,1],[t.armOuter,-30],[e,-30],[e,-31],[t.armOuter,-35],[r(-35),-35],[r(-30),-30],[r(-2),-2]];for(let a=1;a<=24;a++){let c=Math.PI*a/48;s.push([t.armOuter-t.rootThickness-t.rootRadius+t.rootRadius*Math.cos(c),-t.rootRadius+t.rootRadius*Math.sin(c)])}return s.push([t.armOuter-t.rootThickness-t.rootRadius,1]),s.flatMap((a,c)=>{let h=s[(c+1)%s.length],u=Math.max(1,Math.ceil(Math.hypot(h[0]-a[0],h[1]-a[1])));return Array.from({length:u},(d,p)=>[a[0]+(h[0]-a[0])*p/u,a[1]+(h[1]-a[1])*p/u])})}function rc(n,t,{x:e=0,top:r=0,fit:s=Pe.guideFit,deflection:a=0}={}){let c=Pe,{Manifold:h,CrossSection:u}=n,d=(P,R,C,A,N,F)=>t(t(h.cube([A,N,F])).translate([P,R,C])),p=kp(s).map(([P,R])=>{let C=Math.max(0,Math.min(1,-R/c.armLength));return[P-a*C*C*(3-C)/2,R]}),v=P=>{let R=p.map(([C,A])=>[e+c.keyRootX-A,11+P*C]);return t(t(t(t(new u([R],"EvenOdd")).extrude(c.armWidth)).rotate([90,0,0])).translate([0,r+c.keyTop,0]))},y=v(1),m=v(-1),b=d(e+c.keyMinX,r+c.keyBottom,-4,4,c.armWidth,30),w=d(e-26,r+c.keyBottom,7,26-(c.guideHalfWidth+s+c.wall),c.armWidth,8),S=t(h.union([b,w]));return{core:S,right:y,left:m,solid:t(h.union([S,y,m]))}}function sc(n,t,{x:e=0,top:r=0,rootTop:s=14,fit:a=Pe.guideFit}={}){let c=Pe,{Manifold:h,CrossSection:u}=n,d=(R,C,A,N,F,E)=>t(t(h.cube([N,F,E])).translate([R,C,A])),p=t(h.union([d(e-7,r-c.plug,0,14,s-r+c.plug,c.depth),d(e-9,r,0,18,2,c.depth)])),v=(c.grooveBottom+c.grooveTop)/2,y=(c.grooveTop-c.grooveBottom)/2,m=[[-1,c.grooveBottom],[c.grooveDepth,c.grooveBottom],[c.grooveDepth+y,v],[c.grooveDepth,c.grooveTop],[-1,c.grooveTop]],b=t(t(t(t(new u([m.map(([R,C])=>[-R,C])],"EvenOdd")).extrude(16)).rotate([0,90,0])).translate([e-8,r,0]));p=t(p.subtract(b)),p=t(p.subtract(d(e-8,r+c.grooveBottom,c.depth-c.grooveDepth,16,c.grooveTop-c.grooveBottom,c.grooveDepth+1)));let w=-c.plug-1,S=[[-1,w],[c.grooveDepth+c.grooveTop-w,w],[c.grooveDepth,c.grooveTop],[-1,c.grooveTop]],P=t(t(t(t(new u([S.map(([R,C])=>[-R,C])],"EvenOdd")).extrude(12)).rotate([0,90,0])).translate([e-8,r,0]));return p=t(p.subtract(P)),p=t(p.subtract(d(e-8,r-c.plug-1,c.depth-c.grooveDepth,12,c.plug+1+c.grooveTop,c.grooveDepth+1))),{solid:p,core:p}}function oc(n,t,{x:e=0,y0:r,y1:s,diameter:a=5}){let c=a/2,h=[];for(let u=0;u<=54;u++){let d=Math.PI/4-u*(3*Math.PI/2)/54;h.push([e+c*Math.cos(d),Pe.wireZ+c*Math.sin(d)])}return h.push([e,Pe.wireZ+c*Math.SQRT2]),t(t(t(t(new n.CrossSection([h],"EvenOdd")).extrude(s-r)).rotate([90,0,0])).translate([0,s,0]))}function ac(n,t,{x:e=0,top:r=0,fit:s=Pe.guideFit}={}){let a=Pe,c=a.guideHalfWidth+s,h=(y,m,b,w,S,P)=>t(t(n.Manifold.cube([w,S,P])).translate([y,m,b])),u=h(e-c-a.wall,r-a.socketHeight,-s-a.wall,2*(c+a.wall),a.socketHeight,a.depth+2*(s+a.wall)),d=h(e-c,r-a.socketHeight-1,-s,2*c,a.socketHeight+2,a.depth+2*s),p=[-s,a.depth-a.grooveDepth].map(y=>h(e-32,r-a.socketHeight-1,y,46,a.socketHeight+1+a.grooveTop,a.grooveDepth+s));p.push(h(e+4.8,r-a.socketHeight-1,-s-a.wall-.1,12,a.socketHeight+1+a.grooveTop,a.wall+.2),h(e+4.8,r-a.socketHeight-1,a.depth+s-.1,12,a.socketHeight+1+a.grooveTop,a.wall+.2));let v=t(u.subtract(d));for(let y of p)v=t(v.subtract(y));return{blank:u,cavity:d,windows:p,solid:v}}var as=(n,t)=>new n.Manifold(new n.Mesh({numProp:t.stride,vertProperties:t.vertices,triVerts:t.indices}));function Ri(n,t){let e=new Float32Array(n.vertices),r=n.stride;for(let a=0;a<e.length;a+=r){let c=e[a+1],h=e[a+2];t==="floor"&&(e[a+1]=-h,e[a+2]=c),t==="ceiling"&&(e[a+1]=h,e[a+2]=-c)}let s=[1/0,1/0,1/0];for(let a=0;a<e.length;a+=r)for(let c=0;c<3;c++)s[c]=Math.min(s[c],e[a+c]);for(let a=0;a<e.length;a+=r)for(let c=0;c<3;c++)e[a+c]-=s[c];return{...n,vertices:e}}function lc(n,t){let e=t.params;if(e.standMode!=="desk"||e.calibration)return t;if(e.standSizing??="auto",!["auto","custom"].includes(e.standSizing))throw Error("Choose automatic or custom desk-base size.");e.standFastening??="screws",e.standPressFit??=0;let r=e.standFastening==="press",s=e.standFastening==="click",a=r||s,c=F=>{throw Object.assign(Error(F),{field:"standMode"})};(!["screws","press","click"].includes(e.standFastening)||r&&(!Number.isFinite(e.standPressFit)||e.standPressFit<-.1||e.standPressFit>.3))&&c("Choose screws, click & release, or tight-fit mounting; tight-fit allowance must be -0.10 to 0.30 mm per side."),["integrated","reartray"].includes(e.construction)&&c("This desk-base prototype needs a fixed-back body. Choose Separate front, Push-in front, Front frame or Trim cap, or switch off the desk base. Removable-back mounting is not yet supported.");for(let[F,E]of Object.entries({standMargin:18,standHeight:24,standLift:2,standFit:.25,wireDiameter:5}))e[F]??=E;if(s&&e.standHeight<Pe.minHeight)throw Object.assign(Error("The horizontal click key needs a base at least 20 mm high, including its cover. Set Base height to 20 mm or more."),{field:"standHeight"});for(let[F,E,O]of[["standMargin",10,80],["standHeight",s?20:22,60],["standLift",0,8],["standFit",.1,.6],["wireDiameter",3,6]])!(r&&F==="standFit")&&(!Number.isFinite(e[F])||e[F]<E||e[F]>O)&&c("Check desk-base dimensions: margin 10\u201380 mm, height "+(s?"20":"22")+"\u201360 mm, gap 0\u20138 mm, clearance 0.1\u20130.6 mm per side, wire passage 3\u20136 mm.");e.construction==="frontframe"&&c("The full-depth sleeve covers the desk-foot attachment area. Use a separate face or push-in front for this desk base.");let h=e.construction==="pushin"?t.bodyDepth-e.frontDepth:e.construction==="trimcap"?Math.min(t.bodyDepth-e.capSkirt,Ni(e,t.bodyDepth,e.faceStackThickness??e.acrylic).start):Ni(e,t.bodyDepth,(e.faceStackThickness??e.acrylic)+(e.insetSkirtDepth??0)).start,u=s?Pe.minClearDepth:16;h<u&&c(`Desk feet need ${u} mm of clear depth behind the face fittings. Increase body depth or shorten the front collar / skirt.`);let d=[],p=F=>(d.push(F),F),{CrossSection:v,Manifold:y}=n,m=(F,E,O,L,U,k)=>p(p(y.cube([L,U,k])).translate([F,E,O])),b=(F,E,O,L,U)=>p(p(p(y.cylinder(U,L,L,32)).rotate([-90,0,0])).translate([F,E,O])),w=F=>{let E=F.decompose().map(p);(F.status()!=="NoError"||F.isEmpty()||F.volume()<=0||E.length!==1)&&c("A desk-base part is not one connected solid. Enlarge the design or switch off the desk base.");let O=F.getMesh();return{vertices:new Float32Array(O.vertProperties),indices:new Uint32Array(O.triVerts),stride:O.numProp}},S=F=>{let E=F.getMesh();return{vertices:new Float32Array(E.vertProperties),indices:new Uint32Array(E.triVerts),stride:E.numProp}},P=[],R=[],C=t.assembly?[t.assembly]:t.parts,A=(F,E,O)=>{let L=w(E),U=Ri(L,O),k=U.vertices,Z=[0,0,0];for(let tt=0;tt<k.length;tt+=U.stride)for(let Q=0;Q<3;Q++)Z[Q]=Math.max(Z[Q],k[tt+Q]);P.push({name:F,mesh:L,print:U,dimensions:Z,volume:E.volume()}),N(F,Z)},N=(F,E)=>{(!(E[0]<=e.bedX&&E[1]<=e.bedY||E[0]<=e.bedY&&E[1]<=e.bedX)||E[2]>e.bedZ)&&t.warnings.push(`${F}: ${E.map(O=>O.toFixed(1)).join(" \xD7 ")} mm exceeds the entered print volume. Resize or split before printing.`)};try{let E=r?e.standPressFit:e.standFit,O=s?0:E,L=s?2*Pe.guideHalfWidth:18,U=s?Pe.depth:14,k=s?Pe.plug:r?10:6,Z=s?Pe.socketHeight:k+3.5,Q=Math.min(...C.map(ut=>ut.origin[1]),...t.parts.filter(ut=>ut.cap).map(ut=>ut.capOrigin[1]))-e.standLift,it=Q-e.standHeight,Y=it+(a?2.4:0),et=Math.min(...C.map(ut=>ut.origin[0])),H=Math.max(...C.map(ut=>ut.origin[0]+ut.width)),K=e.standSizing==="custom";if(K){for(let[ut,pt,Bt]of[["standWidth",50,1e3],["standDepth",30,300],["standOffsetX",-300,300],["standOffsetZ",-100,100]])if(!Number.isFinite(e[ut])||e[ut]<pt||e[ut]>Bt)throw Object.assign(Error("Check custom desk-base width, depth and position."),{field:ut})}let lt=K?e.standWidth:H-et+2*e.standMargin,J=K?e.standDepth:t.depth+2*e.standMargin,z=(et+H)/2+(K?e.standOffsetX:0),B=t.depth/2+(K?e.standOffsetZ:0),j=z-lt/2,q=z+lt/2,nt=B-J/2,bt=B+J/2,Tt,St=[],Lt=[],Wt=[],Yt=[];for(let ut of C){let pt=p(as(n,ut.body)),Bt=p(pt.slice(e.base/2)),Jt=p(pt.slice(e.base+.1)),At=p(p(p(Bt.subtract(Jt)).simplify(.02)).offset(-.6,"Miter",2)),ne=At.bounds();At.isEmpty()&&c(`${ut.name}: no clear lower area for a desk attachment.`);let ee=ne.max[0]-ne.min[0],Ut=ee>65?2:1,wt=[];for(let Nt=0;Nt<Ut;Nt++){let kt=ne.min[0]+ee*(Ut===1?.5:Nt===0?.22:.78),Zt=null,jt=Math.min(ne.max[1]-3,ut.origin[1]+24);for(let Ht=ne.min[1]+3;Ht<=jt;Ht+=1)for(let $t=ne.min[0]+7;$t<=ne.max[0]-7;$t+=1){if([...wt,...R].some(Ee=>Math.abs(Ee.x-$t)<(s?Pe.minSpacing:26)+2*E))continue;let ce=Ht-ut.origin[1]+Math.abs($t-kt)*.35;if(Zt&&ce>=Zt.score)continue;let Qt=new v([[[$t-7,Ht-3],[$t+7,Ht-3],[$t+7,Ht+3],[$t-7,Ht+3]]]),Ae=Qt.subtract(At),Xt=Ae.area()<.001;Ae.delete(),Qt.delete(),Xt&&(Zt={x:$t,y:Ht,score:ce})}if(!Zt){if(Nt===1)break;c(`${ut.name}: needs a clear 14 \xD7 6 mm lower stroke within 24 mm of its bottom. Enlarge or thicken the artwork, or switch off the desk base. Floating shapes need a shared backing or contour lightbox.`)}Zt.y-Q>32&&c(`${ut.name}: too far above the base for a short foot. Use a shared backing or contour lightbox.`),wt.push(Zt)}for(let{x:Nt,y:kt}of wt){if(s&&!K){let Se=Math.max(0,j+3-(Nt+Pe.keyMinX-Pe.releaseSlide-.5));j-=Se,q+=Se}if(Nt-(s?35:L/2+E+3)<j+3||Nt+L/2+E+3>q-3)throw Object.assign(Error("The custom base does not contain every mounting socket. Increase base width or move it horizontally; click mounting also needs space to the left of each foot for its removable key."),{field:"standWidth"});if((s?-4:-E-3)<nt+3||(s?26:U+E+3)>bt-3)throw Object.assign(Error("The base is too shallow or shifted too far for its mounting sockets. Increase base depth or adjust front/back position."),{field:"standDepth"});let Zt=Nt-4.5,jt=s?Nt:Nt+3,Ht=s?Pe.wireZ:10,$t=kt+2,ce=s?sc(n,p,{x:Nt,top:Q,rootTop:$t,fit:E}).solid:m(Nt-9,Q-k,0,L,$t-Q+k,U);if(r){ce=m(Nt-9,Q-k+1,0,L,$t-Q+k-1,U);for(let Se=0;Se<10;Se++){let ze=.6*(1-Se/10);ce=p(ce.add(m(Nt-9+ze,Q-k+Se*.1,ze,L-2*ze,.1001,U-2*ze)))}}s||(ce=p(ce.add(m(Nt-11,Q,0,22,2,U))));let Qt=m(Zt-2.9,Q+1,.65,5.8,2.7,U),Ae=b(Zt,Q-k-1,4,1.7,$t-Q+k+3),Xt=s?oc(n,p,{x:jt,y0:Q-k-1,y1:$t+2,diameter:e.wireDiameter}):b(jt,Q-k-1,Ht,e.wireDiameter/2,$t-Q+k+3),Ee=Se=>a?Se:p(p(Se.subtract(Qt)).subtract(Ae));ce=Ee(p(ce.subtract(Xt)));let Me=pt;pt=Ee(p(p(pt.add(ce)).subtract(Xt))),Wt.push(ce);let Ue=R.length+1;if(R.push({part:ut.name,support:`foot-${String(Ue).padStart(2,"0")}`,x:Nt,y:$t,wireX:jt,wireZ:Ht,footDepth:U,screwX:a?null:Zt,screwZ:a?null:4,diameter:e.wireDiameter}),s){let Se=ac(n,p,{x:Nt,top:Q,fit:E});St.push(Se.blank),Lt.push(Se.cavity,...Se.windows),Yt.push(rc(n,p,{x:Nt,top:Q,fit:E}).solid)}else St.push(m(Nt-9-E-3,Q-Z,-E-3,L+2*E+6,Z,U+2*E+6)),Lt.push(m(Nt-9-E,Q-k-.5,-E,L+2*E,k+2,U+2*E));if(a||Lt.push(b(Zt,Q-Z-.5,4,1.7,Z+3)),Lt.push(b(jt,Q-Z-.5,Ht,e.wireDiameter/2,Z+3)),t.assembly){let Se=p(pt.subtract(Me));ut.connector=ut.connector?S(p(p(as(n,ut.connector)).add(Se))):S(Se),ut.connector=S(Ee(p(p(as(n,ut.connector)).subtract(Xt))));for(let ze of t.parts)ze.body=S(Ee(p(p(as(n,ze.body)).subtract(Xt))))}}ut.body=w(pt),ut.volume=pt.volume();let Ot=pt.boundingBox();ut.standPrintDimensions=Ot.max.map((Nt,kt)=>Nt-Ot.min[kt]),N(ut.name+" with feet",ut.standPrintDimensions)}Tt=p(m(j,Y,nt,q-j,Q-Y,bt-nt).subtract(m(j+3,Y-1,nt+3,q-j-6,Q-Y-3+1,bt-nt-6))),Tt=p(y.union([Tt,...St]));for(let ut of Lt)Tt=p(Tt.subtract(ut));Tt=p(Tt.subtract(m(j-1,Y-1,nt+6,5,11,8)));let Ct=m(j+3+E,Y,nt+3+E,q-j-2*(3+E),2.4,bt-nt-2*(3+E)),dt=[];if(a){Ct=m(j+.15,it,nt+.15,q-j-.3,2.4,bt-nt-.3);for(let ut=0;ut<8;ut++){let pt=O+(ut<6?0:(ut-5)*.2),Bt=q-j-2*(3+pt),Jt=bt-nt-2*(3+pt),At=p(m(j+3+pt,Y+ut*.5,nt+3+pt,Bt,.5001,Jt).subtract(m(j+3+pt+1.2,Y+ut*.5-.01,nt+3+pt+1.2,Bt-2.4,.53,Jt-2.4)));Ct=p(Ct.add(At))}Ct=p(Ct.subtract(m((j+q)/2-6,it-1,bt-2,12,3.4,3)))}else for(let ut of[j+3+5,q-3-5])for(let pt of[nt+3+5,bt-3-5]){let Bt=m(ut-5,Y+2.4,pt-5,10,e.standHeight-2.4,10),Jt=b(ut,Y+2,pt,1.25,9);Bt=p(Bt.subtract(Jt)),Tt=p(Tt.add(Bt)),Ct=p(Ct.subtract(b(ut,Y-1,pt,1.7,5))),dt.push({x:ut,z:pt})}let ht=p(Tt.intersect(Ct));E>=0&&ht.volume()>.01&&c("Desk cover clashes with the base. Change the base dimensions.");for(let ut of Wt)E>=0&&p(ut.intersect(Tt)).volume()>.01&&c("Desk attachment clashes with its socket. Increase the socket clearance.");A("desk-base",Tt,"ceiling"),A("desk-bottom-cover",Ct,"floor");for(let[ut,pt]of Yt.entries())(p(pt.intersect(Tt)).volume()>.01||p(pt.intersect(Ct)).volume()>.01||Wt.some(Bt=>p(Bt.intersect(pt)).volume()>.01))&&c("The locking key clashes with a foot or the base. Increase spacing or enlarge the artwork."),A("desk-lock-key-"+String(ut+1).padStart(2,"0"),pt,"ceiling");let xt=R[0],Pt=p(Tt.intersect(m(xt.x-L/2-E-3,Q-Z,-E-3,L+2*(E+3),Z,U+2*(E+3)))),gt=[{name:"test-foot",print:Ri(w(Wt[0]),"back")},{name:"test-socket",print:Ri(w(Pt),"ceiling")}];if(s&&gt.push({name:"test-lock-key",print:Ri(w(Yt[0]),"ceiling")}),a){let ut=m(j,it,bt-20,20,8,20);gt.push({name:"test-cover-corner",print:Ri(w(p(Ct.intersect(ut))),"floor")},{name:"test-base-corner",print:Ri(w(p(Tt.intersect(ut))),"ceiling")})}return t.stand={samples:gt,lockRevision:s?Pe.revision:null,kind:"bottom-mounted",fastening:e.standFastening,fit:E,coverFit:O,plug:k,accessories:P,ports:R,coverScrews:dt,bounds:{min:[Math.min(j,et),it,Math.min(nt,0)],max:[Math.max(q,H),t.height,Math.max(bt,t.depth)]},baseBounds:{min:[j,it,nt],max:[q,Q,bt]},width:q-j,depth:bt-nt,height:e.standHeight,wireExit:"left rear, at underside",floor:it,top:Q},t.volume=C.reduce((ut,pt)=>ut+pt.volume+(pt.backVolume??0),0)+P.reduce((ut,pt)=>ut+pt.volume,0),t.warnings.push(s?"20 mm click-key desk prototype: a rigid 10 mm foot drops into the base, then a separate flat key slides in from the left underneath. Its 30 mm arms taper from 3.5 to 3 mm and have 1.2 mm catches. Print the foot, socket and key samples first in plain PLA. Remove the cover, squeeze the key tips together and slide the key left 6.5 mm and lower it out before lifting the sign. Fit, holding force and fatigue need a physical test; support the base when carrying it.":r?"Screw-free desk prototype: 10 mm tight-fit feet and a removable friction-fit bottom cover. No screws, nuts or positive latches. Print the foot/socket and cover-corner samples first. Zero allowance is nominal contact; negative values add interference. Retention depends on filament and printer calibration; support the base when moving the sign.":"Desk-base prototype: integral feet, M3 \xD7 16 mm screws + flat washers + standard M3 hex nuts (one set per foot); four 2.9 \xD7 8 mm plastic-thread screws for the bottom cover. Check actual hardware engagement and test one foot first. Cover pilot \xD82.5 mm is uncalibrated."),t.warnings.push("Print the base top-down, underside open upward, and the bodies back-down. Check the short bridges over transverse holes in your slicer. Add non-slip feet. Stability and load strength are not calculated or physically tested; test with the assembled sign and cable attached."),t.warnings.push(`Internal wire passages are \xD8${e.wireDiameter} mm. Use insulated low-voltage wire jumpers between LED sections, with service slack and strain relief at the exit. No continuous LED-strip path or electrical sizing is generated.`),t}finally{d.reverse().forEach(F=>F.delete())}}function cc(n,t){let e=t.params,r=e.facePattern||"none";if(r==="none"||e.calibration)return t;let s=(y,m="facePattern")=>{throw Object.assign(Error(y),{field:m})};(e.faceMethod!=="print"||e.construction==="integrated")&&s("Face patterns require a separately printed face. Choose a solid face for this construction or cutting method."),["round","hex"].includes(r)||s("Choose a supported face pattern.");for(let[y,m,b,w]of[["faceHoleSize",2,20,4],["faceHoleGap",.8,6,1.2],["facePatternBorder",1.5,15,3]])e[y]??=w,(!Number.isFinite(e[y])||e[y]<m||e[y]>b)&&s("Check the hole size, solid gap and face border.",y);let a=e.faceHoleSize,c=e.faceHoleGap,h=e.facePatternBorder,u=a+c,d=u*Math.sqrt(3)/2,p=0,v=0;for(let y of t.parts){let m=[],b=C=>(m.push(C),C),{CrossSection:w,Manifold:S}=n,P=C=>b(new S(new n.Mesh({numProp:C.stride,vertProperties:C.vertices,triVerts:C.indices}))),R=C=>{let A=C.getMesh();return{vertices:A.vertProperties,indices:A.triVerts,stride:A.numProp}};try{let C=b(b(new w(y.facePolygons,"EvenOdd")).offset(-h,"Round"));y.artPolygons&&(C=b(C.intersect(b(b(new w(y.artPolygons,"EvenOdd")).offset(-h,"Round"))))),y.frontCollar&&(C=b(C.subtract(b(b(P(y.frontCollar).project()).offset(h,"Round")))));let A=C.toPolygons().flat(),N=[];if(A.length){let U=A.map(H=>H[0]),k=A.map(H=>H[1]),Z=Math.min(...U),tt=Math.max(...U),Q=Math.min(...k),it=Math.max(...k),Y=Math.ceil((it-Q)/d)+1,et=Math.ceil((tt-Z)/u)+1;v+Y*et>16e3&&s("This pattern is too dense. Increase hole size or spacing, or reduce the design size.","faceHoleGap"),v+=Y*et;for(let H=Math.floor(Q/d);H<=Math.ceil(it/d);H++){let K=H*d,lt=Math.abs(H)%2*u/2;for(let J=Math.floor((Z-lt)/u);J<=Math.ceil((tt-lt)/u);J++){let z=J*u+lt,B=r==="hex"?6:32,j=Array.from({length:B},(Tt,St)=>[z+a/2*Math.cos(St*2*Math.PI/B),K+a/2*Math.sin(St*2*Math.PI/B)]),q=new w([j]),nt=q.subtract(C),bt=nt.area()<1e-7;nt.delete(),q.delete(),bt&&(N.push(j),p+N.length>2e3&&s("More than 2,000 holes would be generated. Increase hole size or spacing, or reduce the design size.","faceHoleGap"))}}}if(p+=N.length,y.facePattern={pattern:r,holeCount:N.length,holeSize:a,solidGap:c,border:h},!N.length){t.warnings.push(`${y.name}: no complete pattern holes fit. This face stays solid; reduce hole size or border, or enlarge the design.`);continue}let F=b(new w(N,"NonZero")),E=b(b(F.extrude(e.acrylic+.02)).translate([0,0,-.01])),O=P(y.face),L=b(O.subtract(E));if((L.status()!=="NoError"||L.isEmpty()||L.decompose().map(b).length>O.decompose().map(b).length)&&s("The pattern would break the face into loose pieces. Increase the solid gap or border.","faceHoleGap"),y.face=R(L),y.faceVolume=L.volume(),y.facePattern.openArea=F.area(),y.faceStack){let U=b(P(y.faceStack).subtract(E));U.status()!=="NoError"&&s("The patterned face stack could not be generated."),y.faceStack=R(U)}}finally{m.reverse().forEach(C=>C.delete())}}return t.facePattern={pattern:r,holeCount:p},p&&t.warnings.push(`Perforated face: ${p} open holes. LEDs may be directly visible. Test the solid webs and lighting before printing the full design.`),t}function hc(n,t){let e=t.ledPlan,r=t.params;if(!e||r.calibration)return t;let s=(r.ledManualRoutes||[]).reduce((S,P)=>S+(P.holes?.length||0),0),a=e.holes.filter(S=>S.kind==="manual"),c=[];s!==a.length&&c.push("Saved wire holes no longer match this artwork. Open the LED & wire editor and reset or place them again.");let h=[],u=S=>(h.push(S),S),{CrossSection:d,Manifold:p}=n,v=S=>u(new p(new n.Mesh({numProp:S.stride,vertProperties:S.vertices,triVerts:S.indices}))),y=S=>{let P=S.getMesh();return{vertices:new Float32Array(P.vertProperties),indices:new Uint32Array(P.triVerts),stride:P.numProp}},m=S=>u(new d(S,"EvenOdd")),b=(S,P=0)=>u(u(d.circle(S.diameter/2+P,48)).translate(S.point)),w=(S,P)=>{S.status="blocked",S.note=P};try{for(let P of t.assembly?[t.assembly]:t.parts){let R=a.filter(E=>E.part===P.name),C=P.back?"back":"body";if(!R.length)continue;let A=v(P[C]),N=m(e.floorOutlines.find(E=>E.name===P.name).free);for(let E of R){if(u(b(E,.5).subtract(N)).area()>.001){w(E,"Move the hole away from the edge, wall or fitting. A 0.5 mm clearance is required.");continue}if(e.routes.some(Z=>Z.part===P.name&&u(b(E,.5).intersect(m(Z.envelope))).area()>.001)){w(E,"This hole overlaps the reserved LED-strip area. Move the hole or edit the strip route.");continue}let O=b(E),L=u(u(O.extrude(r.base+.04)).translate([0,0,-.02])),U=u(A.slice(Math.min(.05,r.base/2))),k=u(A.slice(r.base+.02));if(u(O.subtract(U)).area()>.001||u(O.intersect(k)).area()>.001){w(E,"No clear rear entry here: the hole misses the rear sheet or meets a fitting. Move it.");continue}E.status="included",E.note="Round rear wire-entry hole included in STL and 3MF. Diameter is nominal; check cable fit after slicing and printing.",E.target=C,E.z=r.base,E.depth=r.base,E.cutter=L}for(let E=0;E<R.length;E++)for(let O=E+1;O<R.length;O++)if(Math.hypot(...R[E].point.map((L,U)=>L-R[O].point[U]))<(R[E].diameter+R[O].diameter)/2+1)for(let L of[R[E],R[O]])w(L,"Wire holes need at least 1 mm of solid material between them. Move or remove one.");let F=R.filter(E=>E.status==="included");if(F.length){let E=u(p.union(F.map(L=>L.cutter))),O=u(A.subtract(E));if(O.status()!=="NoError"||O.isEmpty()||O.decompose().map(u).length!==A.decompose().map(u).length)for(let L of F)w(L,"These holes would split or invalidate the rear part. Move or remove them.");else{let L=A.volume();if(P[C]=y(O),P[C==="back"?"backVolume":"volume"]=O.volume(),t.assembly){for(let k of t.parts)if(k[C]){let Z=u(v(k[C]).subtract(E));k[C]=y(Z),k[C==="back"?"backVolume":"volume"]=Z.volume()}let U=C==="back"?"backConnector":"connector";P[U]&&(P[U]=y(u(v(P[U]).subtract(E))))}C==="body"&&P.previewBody&&(P.previewBody=y(u(v(P.previewBody).subtract(E)))),(C==="body"||t.stand)&&(t.volume-=L-O.volume())}}}for(let P of a)delete P.cutter;e.hBlocked=a.filter(P=>P.status==="blocked").length,e.hBlocked&&c.push(`${e.hBlocked} wire hole(s) cannot be printed at the selected positions. Move or delete the red holes in the LED & wire editor.`),c.length&&(t.exportBlocked=c.join(" "),e.status="needs-work",e.issues.push(...c),t.warnings.push(...c));let S=a.filter(P=>P.status==="included").length;return S&&t.warnings.push(`${S} rear wire-entry hole(s) included in the printed ${t.parts.some(P=>P.back)?"back/tray":"body"}. Check nominal hole diameter against the actual cable or connector.`),t}finally{for(let S of a)delete S.cutter;h.reverse().forEach(S=>S.delete())}}function uc(n,{polygons:t,params:e,glyphs:r,namePolygons:s,preview:a=!1,previewCurves:c=!0},h){if(e.projectMode==="halo")try{return{result:Vs(n,t,e.halo)}}catch(m){return{error:m.message}}if(e.projectMode==="nonlit")try{return{result:Wl(n,t,e.nonlit,s)}}catch(m){return{error:m.message}}e={...e},delete e._preview,delete e._previewCurves,a&&(e._preview=!0,e._previewCurves=c);let u=performance.now(),d=structuredClone(Object.fromEntries(Object.entries(e).filter(([m])=>m.startsWith("led")||m==="materials"))),p=Object.fromEntries(Object.entries(e).filter(([m])=>!m.startsWith("led")&&m!=="materials")),v=h?JSON.stringify([t,p,r,Qe(e)]):null,y={status:"blocked",reason:"Correct the artwork or dimensions before choosing this construction."};try{let m;h?.key===v?(m=structuredClone(h.result),y=h.availability):(e.construction==="pushin"?(m=En(n,t,e,r),y={status:"ready",reason:""}):y={status:"unchecked",reason:"Checked when selected."},m||(m=En(n,t,e,r)),m=lc(n,Xl(n,cc(n,Yl(n,m)))),h&&(h.key=v,h.result=structuredClone(m),h.availability=y));for(let b of Object.keys(m.params))b.startsWith("led")&&delete m.params[b];return Object.assign(m.params,d),m=Jl(n,Zl(n,hc(n,ic(n,m)))),a&&(m.previewOnly=!0),{result:m,availability:y,timing:{calculationMs:performance.now()-u}}}catch(m){return a&&c?uc(n,{polygons:t,params:e,glyphs:r,preview:a,previewCurves:!1},h):(e.construction==="pushin"&&y.status!=="ready"&&(y={status:"blocked",reason:m.message}),{error:m.message,field:m.field,availability:y})}}function na(n){let t={};return e=>uc(n,e,t)}var zp=ua({locateFile:()=>new URL("./manifold.wasm",import.meta.url).href}).then(n=>(n.setup(),{m:n,generate:na(n),preview:na(n)}));self.onmessage=async({data:n})=>{try{let{m:t,generate:e,preview:r}=await zp;self.postMessage({id:n.id,...n.operation==="calibration"?{result:ba(t,n.params,n.target)}:(n.preview?r:e)(n)})}catch(t){self.postMessage({id:n.id,error:t.message||"Unable to generate this artwork.",field:t.field})}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
