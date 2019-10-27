(this["webpackJsonptrade-summary"]=this["webpackJsonptrade-summary"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),c=(a(19),a(20),a(1)),i=new FileReader,u=Object(c.b)(null,(function(e){return{addTransaction:function(t,a,n,r,l,o,c,i,u,s,d){return e(function(e,t,a,n,r,l,o,c,i,u,s){return{type:"ADD_TRANSACTION",date:e,account:t,transactiontype:a,stockname:n,amount:r,price:l,total:o,brokerage:c,currency:i,id:u,included:!0,index:s}}(t,a,n,r,l,o,c,i,u,s,d))}}}))((function(e){var t=e.addTransaction,a=(e.dispatch,function(e){e.preventDefault();for(var a=i.result,n=(a=a.replace(/,/g,".")).split("\n"),r=0;r<n.length;r++){var l=n[r].split(";");console.log(l),0!==r&&r!==n.length-1&&t(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],r-1)}});return r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(e){return t=e.target.files[0],i.onloadend=a,void i.readAsText(t);var t}}))})),s=Object(c.b)(null,(function(e){return{include:function(t,a,n){e(function(e,t,a){return{type:"INCLUDE",index:e,date:t,included:a}}(t,a,n))}}}))((function(e){var t=e.include,a=(e.dispatch,e.date),n=e.account,l=e.transactiontype,o=e.stockname,c=e.amount,i=e.price,u=e.total,s=e.brokerage,d=e.currency,m=e.id,p=e.included,h=e.index;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",defaultChecked:!0,onClick:function(){console.log("clickclick, index:"+h),t(h,a,p)}})),r.a.createElement("td",null,"  ",a,"  "),r.a.createElement("td",null,"  ",n,"   "),r.a.createElement("td",null,"  ",l,"   "),r.a.createElement("td",null,"  ",o,"   "),r.a.createElement("td",null,"  ",c,"   "),r.a.createElement("td",null,"  ",i,"   "),r.a.createElement("td",null,"  ",u,"   "),r.a.createElement("td",null,"  ",s,"   "),r.a.createElement("td",null,"  ",d,"   "),r.a.createElement("td",null,"  ",m,"   "))})),d=Object(c.b)((function(e){return{transactions:(t=e.TransactionsStore.transactions,t)};var t}),(function(e){return{}}))((function(e){var t=e.transactions;e.include;return r.a.createElement("table",{className:"centering"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Included "),r.a.createElement("th",null," Date "),r.a.createElement("th",null," Account "),r.a.createElement("th",null," Transactiontype "),r.a.createElement("th",null," Name "),r.a.createElement("th",null," Amount "),r.a.createElement("th",null," Price "),r.a.createElement("th",null," Total "),r.a.createElement("th",null," Brokerage "),r.a.createElement("th",null," Currency "),r.a.createElement("th",null," Id "))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(s,e)}))))})),m=a(11),p=function e(t){var a=this;Object(m.a)(this,e),this.addBuy=function(e,t,n){n="-"===n?0:n,a.paid+=parseFloat(t)*parseFloat(e),a.sharesBought+=parseFloat(e),a.amountOwned+=parseFloat(e),a.avgBought=parseFloat(a.paid/a.sharesBought),a.brokerage+=parseFloat(n)},this.sell=function(e,t,n){n="-"===n?0:n;var r=-1*parseFloat(e)*parseFloat(t);a.amountOwned+=parseFloat(e),a.sharesSold+=-1*parseFloat(e),a.sold+=r,a.brokerage+=parseFloat(n)},this.addDividents=function(e,t){a.divident+=parseFloat(e)*parseFloat(t)},this.getProfits=function(){var e=parseFloat(a.sharesBought)<parseFloat(a.sharesSold)?parseFloat(a.sharesBought):parseFloat(a.sharesSold);a.profit=parseFloat(a.sold)-e*a.avgBought+parseFloat(a.divident)-parseFloat(a.brokerage)},this.returnProfit=function(){return a.profit},this.printInformation=function(){return 0===a.profit?null:r.a.createElement("tr",null,r.a.createElement("td",null,a.name),r.a.createElement("td",null,a.sharesBought),r.a.createElement("td",null,a.avgBought),r.a.createElement("td",null,a.paid),r.a.createElement("td",null,a.sharesSold),r.a.createElement("td",null,parseFloat(parseFloat(a.sold)/parseFloat(a.sharesSold)).toFixed(2)),r.a.createElement("td",null,a.sold),r.a.createElement("td",null,a.divident),r.a.createElement("td",null,a.brokerage),r.a.createElement("td",null,a.profit))},this.roundDecimals=function(){a.amountOwned=parseFloat(a.amountOwned.toFixed(2)),a.paid=parseFloat(a.paid.toFixed(2)),a.sharesBought=parseFloat(a.sharesBought.toFixed(2)),a.sold=parseFloat(a.sold.toFixed(2)),a.sharesSold=parseFloat(a.sharesSold.toFixed(2)),a.avgBought=parseFloat(a.avgBought.toFixed(2)),a.divident=parseFloat(a.divident.toFixed(2)),a.profit=parseFloat(a.profit.toFixed(2)),a.brokerage=parseFloat(a.brokerage.toFixed(2))},this.name=t,this.amountOwned=0,this.paid=0,this.sharesBought=0,this.sold=0,this.sharesSold=0,this.avgBought=0,this.divident=0,this.profit=0,this.brokerage=0},h=function(e){return e.printInformation()},f=Object(c.b)((function(e){return{transactions:e.TransactionsStore.transactions}}),(function(e){return{}}))((function(e){var t=e.transactions,a=(e.dispatch,new Map),n=0;return function(e){e.map((function(e){a.has(e.stockname)||a.set(e.stockname,new p(e.stockname));var t=a.get(e.stockname);e.included&&function(e,t){var a=Object.assign({},t);switch(a.transactiontype){case"K\xf6p":e.addBuy(a.amount,a.price,a.brokerage);break;case"S\xe4lj":e.sell(a.amount,a.price,a.brokerage);break;case"Utdelning":e.addDividents(a.amount,a.price)}e.getProfits(),e.roundDecimals()}(t,e),console.log("Profits"+t.profit)}))}(t),console.log(a.get("Starbreeze B")),r.a.createElement("div",{className:"centering"},r.a.createElement("table",{className:"centering"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Bought"),r.a.createElement("th",null,"@avg"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Sold"),r.a.createElement("th",null,"@avg"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Dividents"),r.a.createElement("th",null,"Brokerage"),r.a.createElement("th",null,"Profit"))),r.a.createElement("tbody",null,function(){var e=[],t=!0,l=!1,o=void 0;try{for(var c,i=a.values()[Symbol.iterator]();!(t=(c=i.next()).done);t=!0){var u=c.value;e.push(u),console.log("Entry "+u)}}catch(s){l=!0,o=s}finally{try{t||null==i.return||i.return()}finally{if(l)throw o}}return e.map((function(e){return n+=parseFloat(e.returnProfit()),r.a.createElement(h,e)}))}())),r.a.createElement("h2",null," Total Profit: ",n," "))}));var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(d,null),r.a.createElement(f,null))},g=a(4),v=a(13),b=a(12);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={transactions:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCLUDE":return console.log("IN INCLUDE"),y({},e,{transactions:e.transactions.map((function(e){return e.index===t.index&&e.name===t.name?y({},e,{included:!t.included}):e}))});case"ADD_TRANSACTION":return y({},e,{transactions:[].concat(Object(v.a)(e.transactions),[{date:t.date,account:t.account,transactiontype:t.transactiontype,stockname:t.stockname,amount:t.amount,price:t.price,total:t.total,brokerage:t.brokerage,currency:t.currency,id:t.id,included:!0,index:t.index}])});default:return e}},w=Object(g.b)({TransactionsStore:k}),S=Object(g.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=document.getElementById("root");o.a.render(r.a.createElement(c.a,{store:S},r.a.createElement(E,null)),x)}},[[14,1,2]]]);
//# sourceMappingURL=main.f17aba38.chunk.js.map