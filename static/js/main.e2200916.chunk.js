(this["webpackJsonptrade-summary"]=this["webpackJsonptrade-summary"]||[]).push([[0],{199:function(e,t,a){e.exports=a(335)},204:function(e,t,a){},205:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n,r=a(1),l=a.n(r),o=a(30),c=a.n(o),i=(a(204),a(205),a(206),a(13)),s=function(e){return{type:"SORT_FILTER",payload:e}},u=function(e){return{type:"SEE_STOCK_PAGE",payload:e}},m=Object(i.b)(null,(function(e){return{include:function(t,a,n){e(function(e,t,a){return{type:"INCLUDE",index:e,date:t,included:a}}(t,a,n))}}}))((function(e){var t=e.include,a=(e.dispatch,e.date),n=e.account,r=e.transactiontype,o=e.stockname,c=e.amount,i=e.price,s=e.total,u=e.brokerage,m=e.currency,d=e.id,p=e.included,f=e.index;return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"checkbox",checked:p,onClick:function(){t(f,a,p)}})),l.a.createElement("td",null,"  ",a,"  "),l.a.createElement("td",null,"  ",n,"   "),l.a.createElement("td",null,"  ",r,"   "),l.a.createElement("td",null,"  ",o,"   "),l.a.createElement("td",null,"  ",c,"   "),l.a.createElement("td",null,"  ",i,"   "),l.a.createElement("td",null,"  ",s,"   "),l.a.createElement("td",null,"  ",u,"   "),l.a.createElement("td",null,"  ",m,"   "),l.a.createElement("td",null,"  ",d,"   "))})),d=a(57),p=Object(i.b)((function(e){return{transactions:e.TransactionsStore.transactions}}),(function(e){return{setFilter:function(t){return e(s(t))}}}))((function(e){var t=e.transactions,a=e.setFilter;return l.a.createElement("table",{className:"centering"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," Included "),l.a.createElement("th",{className:"sort",onClick:function(){return a("date")}}," ",l.a.createElement(d.a,null)," Date "),l.a.createElement("th",null," Account "),l.a.createElement("th",null," Transactiontype "),l.a.createElement("th",{className:"sort",onClick:function(){return a("stockname")}}," ",l.a.createElement(d.a,null)," Name  "),l.a.createElement("th",null," Amount "),l.a.createElement("th",null," Price "),l.a.createElement("th",null," Total "),l.a.createElement("th",null," Brokerage "),l.a.createElement("th",null," Currency "),l.a.createElement("th",null," Id "))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(m,e)}))))})),f=a(179),E=function e(t){var a=this;Object(f.a)(this,e),this.addBuy=function(e,t,n){n="-"===n?0:n,a.paid+=parseFloat(t)*parseFloat(e),a.sharesBought+=parseFloat(e),a.amountOwned+=parseFloat(e),a.avgBought=parseFloat(a.paid/a.sharesBought),a.brokerage+=parseFloat(n)},this.sell=function(e,t,n){n="-"===n?0:n;var r=-1*parseFloat(e)*parseFloat(t);a.amountOwned+=parseFloat(e),a.sharesSold+=-1*parseFloat(e),a.sold+=r,a.brokerage+=parseFloat(n)},this.addDividents=function(e,t){a.divident+=parseFloat(e)*parseFloat(t)},this.getProfits=function(){var e=parseFloat(a.sharesBought)<parseFloat(a.sharesSold)?parseFloat(a.sharesBought):parseFloat(a.sharesSold);a.profit=parseFloat(a.sold)-e*parseFloat(a.avgBought)+parseFloat(a.divident)-parseFloat(a.brokerage)},this.returnProfit=function(){return a.profit},this.printInformation=function(){return 0===a.profit?null:l.a.createElement("tr",null,l.a.createElement("td",null,a.name),l.a.createElement("td",null,a.sharesBought),l.a.createElement("td",null,a.avgBought),l.a.createElement("td",null,a.paid),l.a.createElement("td",null,a.sharesSold),l.a.createElement("td",null,parseFloat(parseFloat(a.sold)/parseFloat(a.sharesSold)).toFixed(2)),l.a.createElement("td",null,a.sold),l.a.createElement("td",null,a.divident),l.a.createElement("td",null,a.brokerage),l.a.createElement("td",null,a.profit))},this.roundDecimals=function(){a.amountOwned=parseFloat(a.amountOwned.toFixed(2)),a.paid=parseFloat(a.paid.toFixed(2)),a.sharesBought=parseFloat(a.sharesBought.toFixed(2)),a.sold=parseFloat(a.sold.toFixed(2)),a.sharesSold=parseFloat(a.sharesSold.toFixed(2)),a.avgBought=parseFloat(a.avgBought.toFixed(2)),a.divident=parseFloat(a.divident.toFixed(2)),a.profit=parseFloat(a.profit.toFixed(2)),a.brokerage=parseFloat(a.brokerage.toFixed(2))},this.name=t,this.amountOwned=0,this.paid=0,this.sharesBought=0,this.sold=0,this.sharesSold=0,this.avgBought=0,this.divident=0,this.profit=0,this.brokerage=0},h=function(e){return e.printInformation()},y=function(e,t){var a=Object.assign({},t);switch(a.transactiontype){case"K\xf6p":e.addBuy(a.amount,a.price,a.brokerage);break;case"S\xe4lj":e.sell(a.amount,a.price,a.brokerage);break;case"Utdelning":e.addDividents(a.amount,a.price)}},v=Object(i.b)((function(e){return{transactions:e.TransactionsStore.transactions}}),(function(e){return{addSummary:function(t){return e({type:"ADD_SUMMARY",payload:t})},setProfit:function(t){return e(function(e){return{type:"SET_PROFIT",payload:e}}(t))},setFilter:function(t){return e(s(t))}}}))((function(e){var t=e.transactions,a=e.addSummary,n=e.setProfit,r=e.setFilter,o=(e.dispatch,new Map),c=[],i=0;return function(e){e.map((function(e){o.has(e.stockname)||o.set(e.stockname,new E(e.stockname));var t=o.get(e.stockname);return e.included&&y(t,e),null}))}(t),a(c),l.a.createElement("div",{className:"centering"},l.a.createElement("table",{className:"centering"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{onClick:function(){return r("stockname")}},"Name"),l.a.createElement("th",null,"Bought"),l.a.createElement("th",null,"@avg"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Sold"),l.a.createElement("th",null,"@avg"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Dividents"),l.a.createElement("th",null,"Brokerage"),l.a.createElement("th",null,"Profit"))),l.a.createElement("tbody",null,function(e){var t=!0,a=!1,r=void 0;try{for(var c,s=o.values()[Symbol.iterator]();!(t=(c=s.next()).done);t=!0){var u=c.value;e.push(u)}}catch(m){a=!0,r=m}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}return e.map((function(e){return e.getProfits(),e.roundDecimals(),i+=parseFloat(e.returnProfit()),n(i),l.a.createElement(h,e)}))}(c))))})),b=a(351),g=a(195),S=a(352),F=a(197),k=(Object(i.b)((function(e){return{readPercentage:e.TransactionsStore.readPercentage}}),null)((function(e){var t=e.readPercentage;return l.a.createElement("div",null,l.a.createElement(F.a,{striped:!0,variant:"success",now:Math.round(100*t[0].y)}),l.a.createElement("svg",{viewBox:"0 0 400 400",width:"10%",height:"10%"},l.a.createElement(b.a,{standalone:!1,animate:{duration:5e3},width:400,height:400,data:t,innerRadius:120,cornerRadius:25,labels:function(){return null},style:{data:{fill:function(e){var t=e.datum,a=100*t.y>30?"green":"red";return 100*t.y>99?a:"transparent"}}}}),l.a.createElement(g.a,{duration:1e3,data:t},(function(e){return l.a.createElement(S.a,{textAnchor:"middle",verticalAnchor:"middle",x:200,y:200,text:"".concat(Math.round(100*t[0].y),"%"),style:{fontSize:45}})}))))})),a(38)),O=a(84),T=a(136),x=a(135),A=a(43),N=a(58),C=(a(305),Object(i.b)((function(e){return{profit:e.TransactionsStore.profit.toFixed(2)}}),(function(e){return{}}))((function(e){var t=e.profit;e.dispatch;return l.a.createElement("h2",null," Total Profit: ",t," ")}))),P=function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(v,null),l.a.createElement(p,null))},D=Object(i.b)((function(e){return{summaries:(t=e.TransactionsStore.summaries,Object(k.a)(t).sort((function(e,t){return parseFloat(e.profit)<parseFloat(t.profit)?1:parseFloat(e.profit)>parseFloat(t.profit)?-1:0})))};var t}),(function(e){return{setStockpage:function(t){return e(u(t))}}}))((function(e){var t=e.summaries,a=e.setStockpage;e.dispatch;return l.a.createElement("div",null,function(e,t){return e.map((function(e){var a=parseFloat(e.profit)>=0?"SumWinProfit":"SumLossProfit",n=parseFloat(e.profit)>=0?"greenText":"redText";return l.a.createElement("div",{className:"centering inlineBlock StockSummaryWindow "+a},l.a.createElement("div",{className:"rubricArea"}," ",l.a.createElement("h3",null," ",e.name," ")," "),l.a.createElement("hr",{className:"sumAreaDivider"}),l.a.createElement("div",{className:"profitArea"},l.a.createElement("div",{className:"inlineBlock"},l.a.createElement("p",{className:n}," ",e.profit,"  ",l.a.createElement(d.b,{className:"sumWindowCoins"}))),l.a.createElement("br",null),l.a.createElement(A.Link,{onClick:function(){return t(e.name)},to:"/StockPage"},l.a.createElement(d.c,{className:"moreButton"}))))}))}(t,a))})),w=a(347),j=a(357),B=a(196),_=a(355),R=a(356),I=function(e){var t=Object(k.a)(e).sort((function(e,t){return parseFloat(e.profit)<parseFloat(t.profit)?1:parseFloat(e.profit)>parseFloat(t.profit)?-1:0})),a=[],n=0,r=!0,l=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var s=c.value;if(0!==s.profit){var u="#4CAF50";s.profit<0&&(u="#BB1313"),a.push({x:n,y:Math.abs(s.profit),fill:u,label:s.name}),s=null,n++}}}catch(m){l=!0,o=m}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return t=null,a},L=Object(i.b)((function(e){return{summaries:I(e.TransactionsStore.summaries)}}),(function(e){return{}}))((function(e){var t=e.summaries,a=(e.dispatch,500),n=0,r=!0,o=!1,c=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var u=i.value;(parseFloat(u.profit)>0||parseFloat(u.profit)<0)&&(a+=parseFloat(u.profit),n++)}}catch(m){o=!0,c=m}finally{try{r||null==s.return||s.return()}finally{if(o)throw c}}a/=n;return l.a.createElement("div",{className:"centering overAllChart"},l.a.createElement(w.a,{domainPadding:{x:10}},l.a.createElement(j.a,{horizontal:!0,animate:{duration:2e3,onLoad:{duration:1e3}},barRatio:.8,dataComponents:l.a.createElement(B.a,{events:{onMouseOver:function(){return console.log("mouseover")}}}),style:{data:{fill:function(e){return e.datum.fill}},labels:{fill:"black"}},data:t,labelComponent:l.a.createElement(_.a,{style:{fontSize:5},constrainToVisibleArea:!1,pointerOrientation:"left",cornerRadius:0,centerOffset:{x:0,y:-10},flyoutWidth:function(e){return 5*e.datum.label.length+30},labelComponent:l.a.createElement(S.a,{style:{fontSize:7},angle:0,verticalAnchor:"middle",textAnchor:"middle",dx:0,dy:0,text:function(e){var t=e.datum;return t.label+" : "+t.y}})})}),l.a.createElement(R.a,{dependentAxis:!0,style:{tickLabels:{fontSize:10}}}),l.a.createElement(R.a,{style:{tickLabels:{fill:"none"}}})))})),z=new FileReader,M=Object(i.b)(null,(function(e){return{addTransaction:function(t,a,n,r,l,o,c,i,s,u,m){return e(function(e,t,a,n,r,l,o,c,i,s,u){return{type:"ADD_TRANSACTION",date:e,account:t,transactiontype:a,stockname:n,amount:r,price:l,total:o,brokerage:c,currency:i,id:s,included:!0,index:u}}(t,a,n,r,l,o,c,i,s,u,m))},removeTransactions:function(){return e({type:"REMOVE_TRANSACTIONS"})},setPercentage:function(t){return e(function(e){return{type:"SET_PERCENTAGE",payload:e}}(t))}}}))((function(e){var t=e.addTransaction,a=e.removeTransactions,n=e.setPercentage,r=(e.dispatch,function(e){e.preventDefault();for(var a=z.result,r=(a=a.replace(/,/g,".")).split("\n"),l=0;l<r.length;l++){var o=r[l].split(";");parseFloat(n(parseFloat(l)/parseFloat(r.length))),0!==l&&l!==r.length-1&&(t(o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],o[8],o[9],l-1),r[l]=null,o=null)}});return l.a.createElement("div",null,l.a.createElement("input",{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(e){return t=e.target.files[0],a(),z.onloadend=r,void z.readAsText(t);var t}}))})),V=function(){return l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(C,null),l.a.createElement(L,null),l.a.createElement(D,null),l.a.createElement(v,null))},K=a(343),U=a(345),G=a(346),X=a(349),q=a(353),H=a(348),J=function(e,t){var a=[],n=[],r=[],l=!0,o=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(l=(i=s.next()).done);l=!0){var u=i.value;if(u.stockname===t&&!0===u.included){var m="K\xf6p"===u.transactiontype?"#4CAF50":"#BB1313";a.push({x:u.date,y:parseFloat(u.price),label:JSON.stringify(u,null,"\n"),fill:m,index:u.index}),"#4CAF50"==m?n.push({x:u.date,y:parseFloat(u.price),fill:m,index:u.index}):r.push({x:u.date,y:parseFloat(u.price),fill:m,index:u.index})}}}catch(d){o=!0,c=d}finally{try{l||null==s.return||s.return()}finally{if(o)throw c}}return a.sort((function(e,t){return Date.parse(e.x)<Date.parse(t.x)?-1:Date.parse(e.x)>Date.parse(t.x)?1:0})),{all:a,buy:n,sell:r}},W=Object(i.b)((function(e){return{transactions:J(e.TransactionsStore.transactions,e.TransactionsStore.stockPage),stockPage:e.TransactionsStore.stockPage}}),(function(e){return{}}))((function(e){var t=e.transactions;e.stockPage,e.dispatch,null!=t.all[0]&&t.all[0];return l.a.createElement(K.a,{lg:7,className:"inlineBlock overAllChart"},l.a.createElement(w.a,{width:800,height:500},l.a.createElement(X.a,{x:170,y:10,centerTitle:!0,orientation:"horizontal",gutter:20,style:{border:{stroke:"black"},title:{fontSize:20}},data:[{name:"Buy",symbol:{fill:"#4CAF50"}},{name:"Sell",symbol:{fill:"#BB1313"}}]}),l.a.createElement(q.a,{data:t.all,animate:{duration:500,onLoad:{duration:1e3}},style:{data:{fill:function(e){return e.datum.fill}},labels:{fill:"black"}},labelComponent:l.a.createElement(_.a,{style:{fontSize:5},constrainToVisibleArea:!0,pointerOrientation:"left",cornerRadius:0,centerOffset:{x:0,y:0},labelComponent:l.a.createElement(S.a,{style:{fontSize:7},angle:0,verticalAnchor:"middle",textAnchor:"middle",dx:0,dy:0,text:function(e){return e.datum.label}})})}),l.a.createElement(H.a,{data:t.buy,style:{data:{stroke:"#4CAF50"}}}),l.a.createElement(H.a,{data:t.sell,style:{data:{stroke:"#BB1313"}}}),l.a.createElement(R.a,{dependentAxis:!0,orientation:"left"}),l.a.createElement(R.a,{orientation:"bottom",tickCount:2,tickValues:[t.all[0],t.all[t.length-1]]})))})),Y=function(e,t){var a=Object(k.a)(e).sort((function(e,t){return new Date(e.date)<new Date(parseFloat(t.date))?1:new Date(e.date)>new Date(t.date)?-1:0})),n=[],r=!0,l=!1,o=void 0;try{for(var c,i=a[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var s=c.value;s.name===t&&"Utdelning"===s.transactiontype&&n.push(s)}}catch(u){l=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return n},Q=function(e,t){var a=!0,n=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var c=l.value;if(c.name===t)return c.divident}}catch(i){n=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return 0},Z=Object(i.b)((function(e){return{transactions:Y(e.TransactionsStore.transactions,e.TransactionsStore.stockPage),dividents:Q(e.TransactionsStore.summaries,e.TransactionsStore.stockPage)}}),(function(e){return{}}))((function(e){e.transactions;var t=e.dividents,a=(e.dispatch,[{x:"dividents",y:t,fill:"#4CAF50"}]);return l.a.createElement("div",{className:"centering overallSummary overAllChart"},l.a.createElement(w.a,null,l.a.createElement(j.a,{animate:{duration:2e3,onLoad:{duration:1e3}},dataComponents:l.a.createElement(B.a,{events:{onMouseOver:function(){return console.log("mouseover")}}}),style:{data:{fill:function(e){return e.datum.fill},width:200,height:400}},data:a,labels:function(e){return e.datum.y},labelComponent:l.a.createElement(S.a,{style:{fontSize:50,fill:"black"},textAnchor:"middle",verticalAnchor:"end",dy:0})}),l.a.createElement(R.a,{style:{tickLabels:{fontSize:25,padding:5}}}),l.a.createElement(R.a,{tickFormat:function(){return""}})))})),$=Object(i.b)((function(e){return{summaries:e.TransactionsStore.summaries,transactions:e.TransactionsStore.transactions,name:e.TransactionsStore.stockPage}}),(function(e){return{setFilter:function(t){return e(s(t))}}}))((function(e){var t=e.setFilter,a=e.name,r=(e.summaries,e.transactions);e.dispatch;return n=new E(a),l.a.createElement(K.a,null,l.a.createElement(U.a,null,l.a.createElement(K.a,{className:"al-itemsCenter centering inlineBlock"},l.a.createElement(G.a,{md:"auto"}," ",l.a.createElement(W,null)," "),l.a.createElement(G.a,{md:"auto"}," ",l.a.createElement(Z,null)," "),l.a.createElement(G.a,{md:"auto"}," ",l.a.createElement("table",{className:"centering"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Bought"),l.a.createElement("th",null,"@avg"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Sold"),l.a.createElement("th",null,"@avg"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Dividents"),l.a.createElement("th",null,"Brokerage"),l.a.createElement("th",null,"Profit"))),l.a.createElement("tbody",null,l.a.createElement(h,n)))," "))),l.a.createElement(K.a,null,l.a.createElement("br",null),l.a.createElement("br",null),function(e,t,a){var r=[],o=!0,c=!1,i=void 0;try{for(var s,u=a[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){(E=s.value).stockname===t&&r.push(E)}}catch(h){c=!0,i=h}finally{try{o||null==u.return||u.return()}finally{if(c)throw i}}if(r===[])return null;for(var p=0,f=r;p<f.length;p++){var E;(E=f[p]).included&&y(n,E)}return n.getProfits(),n.roundDecimals(),console.log(n),l.a.createElement("table",{className:"centering"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," Included "),l.a.createElement("th",{className:"sort",onClick:function(){return e("date")}}," ",l.a.createElement(d.a,null)," Date "),l.a.createElement("th",null," Account "),l.a.createElement("th",null," Transactiontype "),l.a.createElement("th",null," Name  "),l.a.createElement("th",null," Amount "),l.a.createElement("th",null," Price "),l.a.createElement("th",null," Total "),l.a.createElement("th",null," Brokerage "),l.a.createElement("th",null," Currency "),l.a.createElement("th",null," Id "))),l.a.createElement("tbody",null,r.map((function(e){return l.a.createElement(m,e)}))))}(t,a,r)))})),ee=Object(i.b)((function(e){return{summaries:(t=e.TransactionsStore.summaries,Object(k.a)(t).sort((function(e,t){return parseFloat(e.name)<parseFloat(t.name)?1:parseFloat(e.name)>parseFloat(t.name)?-1:0})))};var t}),(function(e){return{setStockpage:function(t){return e(u(t))}}}))((function(e){var t=e.setStockpage,a=e.summaries;e.dispatch;return l.a.createElement(A.BrowserRouter,null,l.a.createElement(O.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(O.a.Brand,{href:"/Home"},"Trade Summary"),l.a.createElement(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(O.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(T.a,{className:"mr-auto navCenter"},l.a.createElement(A.Link,{className:"navCenter",to:"/Home"},"Home"),l.a.createElement(A.Link,{className:"navCenter",to:"/DataTables"},"Data Tables"),l.a.createElement(x.a,{title:"Dropdown",id:"collasible-nav-dropdown"},function(e){return e.map((function(e){return l.a.createElement(x.a.Item,{className:"navCenter"},l.a.createElement(A.Link,{onClick:function(){return t(e.name)},to:"/StockPage"},e.name))}))}(a))),l.a.createElement(T.a,null,l.a.createElement(A.Link,{className:"navCenter",to:"#About"},"About")))),l.a.createElement(N.g,null,l.a.createElement(N.d,{exact:!0,path:"/Home",component:V}),l.a.createElement(N.d,{path:"/DataTables",component:P}),l.a.createElement(N.d,{path:"/StockPage",component:$})))})),te=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossorigin:"anonymous"}),l.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js",integrity:"sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ",crossorigin:"anonymous"}),l.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js",integrity:"sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm",crossorigin:"anonymous"}),l.a.createElement(ee,null))},ae=a(66),ne=a(194);function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(a,!0).forEach((function(t){Object(ne.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var oe={transactions:[],summaries:[],profit:0,sortFilter:"date",sortOrder:"DESC",readPercentage:[{x:1,y:0},{x:2,y:100}],stockPage:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCLUDE":return console.log("IN INCLUDE"),le({},e,{transactions:e.transactions.map((function(e){return e.index===t.index&&e.name===t.name?le({},e,{included:!t.included}):e}))});case"ADD_TRANSACTION":return le({},e,{transactions:[].concat(Object(k.a)(e.transactions),[{date:t.date,account:t.account,transactiontype:t.transactiontype,stockname:t.stockname,amount:t.amount,price:t.price,total:t.total,brokerage:t.brokerage,currency:t.currency,id:t.id,included:!0,index:t.index}])});case"SET_TRANSACTIONS":return le({},e,{transactions:t.payload});case"REMOVE_TRANSACTIONS":return le({},e,{transactions:[],summaries:[],sortFilter:"date"});case"ADD_SUMMARY":return le({},e,{summaries:t.payload});case"SET_SUMMARY":return le({},e,{summaries:e.summaries.map((function(e){return e.name===t.payload.name?t.payload:e}))});case"SET_PROFIT":return le({},e,{profit:t.payload});case"SORT_FILTER":return le({},e,{transactions:Object(k.a)(e.transactions).sort((function(a,n){var r=0;return t.payload===e.sortFilter?r:"DESC"===e.sortOrder?(a[t.payload]<n[t.payload]?r=-1:a[t.payload]>n[t.payload]&&(r=1),r):(a[t.payload]<n[t.payload]?r=1:a[t.payload]>n[t.payload]&&(r=-1),r)})),sortFilter:t.payload,sortOrder:"DESC"===e.sortOrder?"ASC":"DESC"});case"SET_PERCENTAGE":return le({},e,{readPercentage:[{x:1,y:parseFloat(t.payload)},{x:2,y:parseFloat(1-t.payload)}]});case"SEE_STOCK_PAGE":return le({},e,{stockPage:t.payload});default:return e}},ie=Object(ae.b)({TransactionsStore:ce}),se=Object(ae.c)(ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ue=document.getElementById("root");c.a.render(l.a.createElement(i.a,{store:se},l.a.createElement(te,null)),ue)}},[[199,1,2]]]);
//# sourceMappingURL=main.e2200916.chunk.js.map