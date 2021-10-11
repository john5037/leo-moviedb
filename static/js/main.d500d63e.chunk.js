(this["webpackJsonpleo-moviedb"]=this["webpackJsonpleo-moviedb"]||[]).push([[0],{25:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(18),n=c.n(i),r=(c(25),c(9)),l=c(2),o=c(0),j=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"inner-content",children:[Object(o.jsx)("div",{className:"brand",children:Object(o.jsx)(r.b,{to:"/",children:"Leo Movies"})}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/watchlist",children:"Watch List"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/favourite",children:"Favourites"})}),Object(o.jsx)("li",{})]})]})})})},d=c(12),u=c(17),h=c(7),O=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(h.a)(Object(h.a)({},e),{},{watchlist:[t.payload].concat(Object(u.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(h.a)(Object(h.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_FAVOURITE":return Object(h.a)(Object(h.a)({},e),{},{favourites:[t.payload].concat(Object(u.a)(e.favourites))});case"REMOVE_FROM_FAVOURITE":return Object(h.a)(Object(h.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.id!==t.payload}))});default:return e}},b={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],favourites:localStorage.getItem("favourites")?JSON.parse(localStorage.getItem("favourites")):[]},v=Object(a.createContext)(b),m=function(e){var t=Object(a.useReducer)(O,b),c=Object(d.a)(t,2),s=c[0],i=c[1];Object(a.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(s.watchlist)),localStorage.setItem("favourites",JSON.stringify(s.favourites))}),[s]);return Object(o.jsx)(v.Provider,{value:{watchlist:s.watchlist,favourites:s.favourites,addMovieToWatchlist:function(e){i({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){i({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToFavourite:function(e){i({type:"ADD_MOVIE_TO_FAVOURITE",payload:e})},moveToWatchlist:function(e){i({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromFavourite:function(e){i({type:"REMOVE_FROM_FAVOURITE",payload:e})}},children:e.children})},f=function(e){var t=e.type,c=e.movie,s=Object(a.useContext)(v),i=s.removeMovieFromWatchlist,n=s.removeFromFavourite;return Object(o.jsxs)("div",{className:"inner-card-controls",children:["watchlist"===t&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:"ctrl-btn",onClick:function(){return i(c.id)},children:Object(o.jsx)("i",{className:"fa-fw far fa-eye"})})}),"favourites"===t&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:"ctrl-btn",onClick:function(){return n(c.id)},children:Object(o.jsx)("i",{className:"far fa-star"})})})]})},x=function(e){var t=e.movie,c=e.type;return Object(o.jsxs)("div",{className:"movie-card",children:[Object(o.jsx)("div",{className:"overlay"}),t.poster_path&&null!=t.poster_path?Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(o.jsx)("div",{className:"filler-poster"}),Object(o.jsx)(f,{type:c,movie:t})]})},p=function(){var e=Object(a.useContext)(v).watchlist;return Object(o.jsx)("div",{className:"movie-page",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"heading",children:"My Watchlist"}),Object(o.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),e.length>0?Object(o.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(o.jsx)(x,{movie:e,type:"watchlist"},e.id)}))}):Object(o.jsx)("h2",{className:"no-movies",children:"No movies in your watch list! Add some!"})]})})},N=function(){var e=Object(a.useContext)(v).favourites;return Object(o.jsx)("div",{className:"movie-page",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"heading",children:"My Favourites"}),Object(o.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),e.length>0?Object(o.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(o.jsx)(x,{movie:e,type:"favourites"},e.id)}))}):Object(o.jsx)("h2",{className:"no-movies",children:"No movies in your favourite list! Add some!"})]})})},g=function(e){var t=e.movie,c=Object(a.useContext)(v),s=c.addMovieToWatchlist,i=c.addMovieToFavourite,n=c.watchlist,r=c.favourites,l=!!n.find((function(e){return e.id===t.id})),j=!!r.find((function(e){return e.id===t.id}));return Object(o.jsxs)("div",{className:"result-card",children:[Object(o.jsx)("div",{className:"poster-wrapper",children:t.poster_path&&null!=t.poster_path?Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(o.jsx)("div",{className:"filler-poster"})}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h3",{className:"title",children:t.title})}),Object(o.jsxs)("div",{className:"controls",children:[Object(o.jsx)("button",{className:"btn",disabled:l,label:"Add to watchlist",onClick:function(){return s(t)},children:Object(o.jsx)("i",{className:"fa-fw far fa-eye"})}),Object(o.jsx)("button",{className:"btn",disabled:j,onClick:function(){return i(t)},children:Object(o.jsx)("i",{className:"fa-fw far fa-star"})})]})]})]})},y=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),n=Object(d.a)(i,2),r=n[0],l=n[1];return Object(o.jsx)("div",{className:"add-page",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"add-content",children:[Object(o.jsx)("div",{className:"input-wrapper",children:Object(o.jsx)("input",{type:"text",placeholder:"Search for a movie",value:c,onChange:function(e){e.preventDefault(),s(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("dfebbe7d9c006442430784c16d463017","&language=en-US&page=1&include_adult=false&query=").concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results)}))}})}),r.length>0&&Object(o.jsx)("ul",{className:"results",children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(g,{movie:e})},e.id)}))})]})})})};c(35),c(36);var _=function(){return Object(o.jsx)(m,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(y,{})}),Object(o.jsx)(l.a,{path:"/watchlist",children:Object(o.jsx)(p,{})}),Object(o.jsx)(l.a,{path:"/favourite",children:Object(o.jsx)(N,{})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.d500d63e.chunk.js.map