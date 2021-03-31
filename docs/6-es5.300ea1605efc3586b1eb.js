function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8gIO":function(t,e,i){"use strict";i.r(e),i.d(e,"ArtistModule",(function(){return v}));var r=i("j1ZV"),n=i("tyNb"),c=i("N+K7"),o=i("fXoL"),a=i("ofXK");function l(t,e){if(1&t){var i=o.Nb();o.Mb(0,"li",10),o.gc(1),o.Mb(2,"button",11),o.Ub("click",(function(){o.cc(i);var t=e.$implicit;return o.Wb().playAdio(null==t?null:t.preview)})),o.Mb(3,"span"),o.gc(4),o.Lb(),o.Kb(5,"span",12),o.Lb(),o.Kb(6,"audio",13),o.Lb()}if(2&t){var r=e.$implicit,n=o.Wb();o.zb(1),o.ic(" ",null==r?null:r.title," "),o.zb(3),o.hc(n.formatTime(null==r?null:r.duration)),o.zb(2),o.Yb("src",null==r?null:r.preview,o.dc)}}function u(t,e){if(1&t&&(o.Mb(0,"div",5),o.Mb(1,"div",16),o.Mb(2,"div",17),o.Mb(3,"div",18),o.Kb(4,"img",19),o.Lb(),o.Lb(),o.Mb(5,"h6",20),o.gc(6),o.Lb(),o.Mb(7,"p"),o.gc(8,"Release Date "),o.Mb(9,"span",21),o.gc(10),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&t){var i=e.$implicit;o.zb(4),o.Xb("src",i.cover_medium,o.dc),o.zb(2),o.hc(i.title),o.zb(4),o.ic(" ",i.release_date," ")}}function s(t,e){if(1&t&&(o.Mb(0,"div",14),o.fc(1,u,11,3,"div",15),o.Lb()),2&t){var i=e.$implicit;o.zb(1),o.Xb("ngForOf",i)}}var b,d,f,p=[{path:"",component:(b=function(){function t(e,i){_classCallCheck(this,t),this.activeRoute=e,this.service=i,this.selectedArtist=this.activeRoute.snapshot.params.artistID}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.service.getData("music/artist/"+this.selectedArtist).pipe().subscribe((function(e){t.artist=e,t.albums=t.groupArray(e.albums,3)}),(function(t){console.log("An Error occurred"),console.error(t)}),(function(){}))}},{key:"playAdio",value:function(t){console.log(t)}},{key:"groupArray",value:function(t,e){for(var i=new Array,r=0,n=0;r<t.length;r++)r>=e&&r%e==0&&n++,i[n]=i[n]||[],i[n].push(t[r]);return i}},{key:"nFormatter",value:function(t,e){var i,r=[{value:1,symbol:""},{value:1e3,symbol:" k"},{value:1e6,symbol:" M"}];for(i=r.length-1;i>0&&!(t>=r[i].value);i--);return(t/r[i].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+r[i].symbol}},{key:"formatTime",value:function(t){var e=~~(t/3600),i=~~(t%3600/60),r=~~t%60,n="";return e>0&&(n+=e+":"+(i<10?"0":"")),n+=i+":"+(r<10?"0":""),n+=""+r}}]),t}(),b.\u0275fac=function(t){return new(t||b)(o.Jb(n.a),o.Jb(c.a))},b.\u0275cmp=o.Db({type:b,selectors:[["app-artist"]],decls:16,vars:4,consts:[[1,"mt-5","py-5","bg-light"],[1,"container"],[1,"row"],[1,"col-md-8"],["data-src","https://cdn.mos.cms.futurecdn.net/dqmkMx9eXDgmnHbFHkL4WN.jpg","uk-img","",1,"uk-height-medium","uk-flex","uk-flex-center","uk-flex-middle","uk-background-cover","uk-light"],[1,"col-md-4"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"uk-divider-icon"],["class","row mb-4",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"btn","btn-info","btn-sm","float-right",3,"click"],["uk-icon","play"],["id","audio",3,"src"],[1,"row","mb-4"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"uk-card","uk-card-default","uk-card-hover","uk-card-body"],["uk-grid","",1,"uk-grid-small","uk-flex-middle"],[1,"uk-width-auto"],["uk-img","",1,"uk-border-rounded",3,"src"],[1,"uk-card-title"],[1,"float-right"]],template:function(t,e){1&t&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"div",2),o.Mb(3,"div",3),o.Mb(4,"div",4),o.Mb(5,"h1"),o.gc(6),o.Lb(),o.Mb(7,"h4"),o.gc(8),o.Lb(),o.Lb(),o.Lb(),o.Mb(9,"div",5),o.Mb(10,"h5"),o.gc(11,"Top Tracks"),o.Lb(),o.Mb(12,"ul",6),o.fc(13,l,7,3,"li",7),o.Lb(),o.Lb(),o.Lb(),o.Kb(14,"hr",8),o.fc(15,s,2,1,"div",9),o.Lb(),o.Lb()),2&t&&(o.zb(6),o.hc(null==e.artist?null:e.artist.artist.name),o.zb(2),o.ic(" ",e.nFormatter(null==e.artist?null:e.artist.artist.nb_fan,3)," fans "),o.zb(5),o.Xb("ngForOf",null==e.artist?null:e.artist.topTracks),o.zb(2),o.Xb("ngForOf",e.albums))},directives:[a.h],styles:[""]}),b)}],m=((f=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:f}),f.\u0275inj=o.Gb({factory:function(t){return new(t||f)},imports:[[n.c.forChild(p)],n.c]}),f),v=((d=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:d}),d.\u0275inj=o.Gb({factory:function(t){return new(t||d)},providers:[],imports:[[r.a,m]]}),d)}}]);