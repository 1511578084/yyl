(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17d04e2e"],{"0507":function(t,e,a){"use strict";var n=a("5383"),r=a.n(n);r.a},"06ca":function(t,e,a){"use strict";var n=a("6724"),r=a.n(n);r.a},"09bd":function(t,e,a){"use strict";var n=a("6afb"),r=a.n(n);r.a},"1a81":function(t,e,a){},"3ca9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"workbench"},[1===t.tabType?a("NetworkManage",{attrs:{ifPageStopScroll:t.ifPageStopScroll}}):t._e(),2===t.tabType?a("OperationBoard"):t._e(),a("img",{staticClass:"xiaoji",attrs:{src:"/static/images/ic_xiaoji.png",alt:""},on:{click:t.onXiaoji}})],1)},r=[],i=(a("4de4"),a("4160"),a("a9e3"),a("159b"),a("85f2")),s=a.n(i),o=a("d847"),c=a.n(o),l=a("5e83"),u=a.n(l),d=a("268f"),f=a.n(d),h=a("e265"),p=a.n(h),m=a("a4bb"),b=a.n(m),g=a("2fa7"),v=a("51be"),y=a("e350"),C=a("328e"),S=a("2f62"),w=a("91e96"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"workbench"},[a("van-tabs",{staticClass:"tabs",attrs:{color:"#3693ff","title-active-color":"#3693ff",background:"#fff"},on:{change:t.onChangeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"量本利",name:"volumeCostProfit"}},[t.checkPerm(["me_area_operation"])?a("VolumeCostProfit",{ref:"volumeCostProfit"}):a("NoPermission")],1)],1)],1)},D=[],k=(a("b0c0"),a("0cc8"),a("3104")),_=(a("bda7"),a("5e46")),T=(a("da3c0"),a("0b33")),O=a("d322"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"operation-board"},[a("SelectTime",{on:{change:t.onTimeChange},model:{value:t.params.currentDate,callback:function(e){t.$set(t.params,"currentDate",e)},expression:"params.currentDate"}}),a("Header",{attrs:{time:t.params.currentDate},on:{change:t.onChangeSite}}),a("DayData",{attrs:{time:t.params.currentDate,list:t.list,loading:t.loading}}),a("SingleCarValueProfit",{ref:"list",attrs:{time:t.params.currentDate}})],1)},M=[],P=(a("d3b7"),a("795b")),I=a.n(P),Y=a("967e"),E=a.n(Y),A=(a("96cf"),a("c1df")),$=a.n(A),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select-time"},[a("van-button",{attrs:{icon:"arrow-left",disabled:t.minDisable},on:{click:t.onLastDay}},[t._v("上一日")]),a("div",{staticClass:"title",on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.currentDate))]),a("van-button",{attrs:{icon:"arrow","icon-position":"right",disabled:t.maxDisable},on:{click:t.onNextDay}},[t._v(" 下一日 ")]),a("div",{staticClass:"my-container"}),a("van-calendar",{attrs:{"min-date":t.minDate,"max-date":t.maxDate,poppable:"",round:!1,position:"top","row-height":"50","show-title":!1,"show-confirm":!1,"show-subtitle":!1,"get-container":t.getContainer},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},q=[],L={components:{},model:{prop:"currentDate",event:"change"},props:{currentDate:{type:String,default:$()().format("YYYY-MM-DD")},min:{type:String,default:""},max:{type:String,default:""}},data:function(){return{show:!1,minDisable:!1,maxDisable:!1}},computed:{minDate:function(){return this.min?new Date(this.min):new Date("2010-01-01")},maxDate:function(){return this.max?new Date(this.max):new Date("2030-01-01")}},mounted:function(){},methods:{getContainer:function(){return document.querySelector(".my-container")},onLastDay:function(){this.show=!1;var t=$()(this.currentDate).subtract(1,"days");this.min&&(t.unix()<=$()(this.min).unix()?this.minDisable=!0:(this.minDisable=!1,this.maxDisable=!1)),this.$emit("change",t.format("YYYY-MM-DD"))},onNextDay:function(){this.show=!1;var t=$()(this.currentDate).add(1,"days");this.max&&(t.unix()>=$()(this.max).unix()?this.maxDisable=!0:(this.minDisable=!1,this.maxDisable=!1)),this.$emit("change",t.format("YYYY-MM-DD"))},onSelect:function(t){this.show=!1,this.$emit("change",$()(t).format("YYYY-MM-DD"))}}},B=L,R=(a("5101"),a("2877")),V=Object(R["a"])(B,N,q,!1,null,"74179723",null),F=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("b-select-site-2",{attrs:{"end-type":1},on:{change:t.onChange}}),a("div",{staticClass:"right"},[t._v(t._s(t.time)+" 00:00 数据已更新")])],1)},H=[],J={components:{},props:{time:{type:String,default:""}},data:function(){return{show:!1,site:"",showSiteSelect:"",placeholder:"",loading:!1,options:[]}},computed:{},mounted:function(){},methods:{onChange:function(t,e){this.$emit("change",t,e)}}},Q=J,X=(a("09bd"),Object(R["a"])(Q,W,H,!1,null,"e6ab686a",null)),z=X.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day-data"},[a("div",{staticClass:"title"},[t._v(t._s(t._f("FORMAT_YEAR")(t.time))+"运营日报")]),t.loading?a("div",{staticClass:"loading"},[a("van-loading",{attrs:{type:"spinner"}})],1):a("div",{staticClass:"list"},t._l(t.data,(function(e){return a("div",{key:e.title,staticClass:"item",class:e.gray?"gray":""},[a("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"today",class:t.getTodayClass(e)},[t._v(" "+t._s(e.gray?"待研发":e.today)+" ")]),a("div",{staticClass:"yesterday"},[t._v(" 昨日 "),a("span",{staticClass:"value"},[t._v(" "+t._s(e.yesterday)+" ")]),e.gray?t._e():a("img",{staticClass:"question",attrs:{src:"/static/images/icon_question.png",alt:""},on:{click:function(a){return t.onClickQuestion(e)}}})])])})),0),a("van-dialog",{attrs:{className:"dialog1",title:t.dialogTitle,message:t.dialogMessage,confirmButtonText:"我知道了"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)},K=[],U=(a("7db0"),{components:{},filters:{FORMAT_YEAR:function(t){return $()(t).format("YYYY")}},props:{loading:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}},time:{type:String,default:""}},data:function(){return{showDialog:!1,dialogTitle:"",dialogMessage:""}},computed:{data:function(){var t=this,e=[{name:"安全事故",today:0,yesterday:0,gray:!0},{name:"超60方空仓数",today:0,yesterday:0,gray:!0},{name:"超30方留仓中心",today:0,yesterday:0,gray:!0},{name:"超200分钟未清仓中心",today:0,yesterday:0,gray:!0},{name:"载重不达标线路数",today:0,yesterday:0,gray:!0},{name:"空返线路数",today:0,yesterday:0,gray:!0}];return this.list&&this.list.length?(e.forEach((function(e){var a=t.list.find((function(t){return t.type===e.name}));a&&(e.today=a.today,e.yesterday=a.yesterday,e.gray=!1)})),e):e}},mounted:function(){},methods:{getTodayClass:function(t){return"安全事故"===t.name?t.today?"fx":"":"载重不达标线路数"===t.name?t.nowc?"fx":"":"空返线路数"===t.name&&t.nowc?"fx":""},onClickQuestion:function(t){this.dialogTitle="安全事故数据说明",this.dialogMessage="计算方法为：交通事故数 + 场内操作事故数",this.showDialog=!0}}}),Z=U,tt=(a("06ca"),Object(R["a"])(Z,G,K,!1,null,"e7dd6848",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("div",{staticClass:"title"},[t._v(t._s(t.site)+"单车量本利")]),a("div",{staticClass:"filter"},[a("b-select-site-picker",{attrs:{permissions:""},on:{change:t.onStartSiteChange}}),a("van-icon",{staticClass:"icon",attrs:{name:"exchange"}}),a("b-select-site-picker",{on:{change:t.onEndSiteChange}})],1),a("div",{staticClass:"body"},[t.loading?a("div",{staticClass:"loading"},[a("van-loading",{attrs:{type:"spinner"}})],1):a("x-table",{attrs:{data:t.list}},[a("x-table-column",{attrs:{label:"详情",prop:"g",width:"35",type:"expand"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("SingleCarValueProfitDetail",{attrs:{list:t.row.details}})]}}])}),a("x-table-column",{attrs:{label:"始发地",prop:"startName",width:"90"}}),a("x-table-column",{attrs:{label:"目的地",prop:"endName",width:"90"}}),a("x-table-column",{attrs:{label:"盈亏",prop:"profitAndLoss",width:"60"}}),a("x-table-column",{attrs:{label:"总收入(元)",prop:"totalProfit",width:"60"}}),a("x-table-column",{attrs:{label:"总运费(元)",prop:"totalFee",width:"60"}}),a("x-table-column",{attrs:{label:"总重量(kg)",prop:"totalWeight",width:"60"}}),a("x-table-column",{attrs:{label:"单公斤成本",prop:"preCost",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s("NaN"===e.row.preCost?0:e.row.preCost))])]}}])})],1)],1)])},nt=[],rt=a("b775");function it(t){return Object(rt["a"])({url:"".concat(v["a"],"/operationAnalyse/baseCostBatchDataList"),method:"POST",data:t})}function st(t){return Object(rt["a"])({url:"".concat(v["a"],"/areaOperation/geAllCount"),method:"POST",data:t})}var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"list"},[a("x-table",{attrs:{data:t.isMore?t.list:t.miniList}},[a("x-table-column",{attrs:{label:"线路",prop:"lineName",width:"100"}}),a("x-table-column",{attrs:{label:"类型",prop:"runTypeString",width:"80"}}),a("x-table-column",{attrs:{label:"荷载体积",prop:"maxVolume",width:"55"}}),a("x-table-column",{attrs:{label:"实载体积",prop:"outPosition",width:"55"}}),a("x-table-column",{attrs:{label:"地磅重量",prop:"outWeight",width:"55"}}),a("x-table-column",{attrs:{label:"快件重量",prop:"billWeight2",width:"55"}}),a("x-table-column",{attrs:{label:"收费重量",prop:"billWeight",width:"55"}}),a("x-table-column",{attrs:{label:"中转费收入",prop:"transfee",width:"65"}}),a("x-table-column",{attrs:{label:"包仓收入",prop:"storehouseMonthFee",width:"55"}}),a("x-table-column",{attrs:{label:"分摊费用",prop:"fee",width:"55"}})],1)],1),!t.isMore&&t.list.length>10?a("div",{staticClass:"more",on:{click:function(e){t.isMore=!0}}},[t._v(" 查看更多 "),a("van-icon",{staticClass:"icon",attrs:{name:"arrow-down"}})],1):t._e()])},ct=[],lt=(a("fb6a"),{components:{},props:{list:{type:Array,default:function(){return[{a:"无锡-上海",dd:"公司正班车"},{a:"上海"},{a:"上海"},{a:"上海"},{a:"上海"},{a:"上海222"}]}},valueColor:{type:String,default:"#FF6383"},unit:{type:String,default:"万"},avgLable:{type:String,default:"平均值"},avgValue:{type:Number,default:25}},data:function(){return{isMore:!1}},computed:{miniList:function(){return this.list.slice(0,10)}},mounted:function(){},methods:{}}),ut=lt,dt=(a("b206"),Object(R["a"])(ut,ot,ct,!1,null,"6672ef43",null)),ft=dt.exports;function ht(t,e){var a=b()(t);if(p.a){var n=p()(t);e&&(n=n.filter((function(e){return f()(t,e).enumerable}))),a.push.apply(a,n)}return a}function pt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(a),!0).forEach((function(e){Object(g["a"])(t,e,a[e])})):u.a?c()(t,u()(a)):ht(Object(a)).forEach((function(e){s()(t,e,f()(a,e))}))}return t}var mt={components:{SingleCarValueProfitDetail:ft},props:{time:{type:String,default:""}},data:function(){return{loading:!1,site:"",parmes:{date:"2021-03-23 00:00:00",startManageAreaId:"",startCenterId:"",endManageAreaId:"",endCenterId:""},list:[]}},computed:{},watch:{time:function(){this.query()}},mounted:function(){},methods:{onStartSiteChange:function(t,e){e?(this.parmes.startManageAreaId="",this.parmes.startCenterId=e.value,this.site=e.text):t?(this.parmes.startManageAreaId=t.value,this.parmes.startCenterId="",this.site=t.text):(this.parmes.startManageAreaId="",this.parmes.startCenterId="",this.site="全国"),this.query()},onEndSiteChange:function(t,e){e?(this.parmes.endManageAreaId="",this.parmes.endCenterId=e.value):t?(this.parmes.endManageAreaId=t.value,this.parmes.endCenterId=""):(this.parmes.endManageAreaId="",this.parmes.endCenterId=""),this.query()},query:function(){var t,e,a,n,r;return E.a.async((function(i){while(1)switch(i.prev=i.next){case 0:this.loading=!0,i.prev=1,this.parmes.date=this.time+" 00:00:00",t=pt({},this.parmes),e=t.startManageAreaId,a=t.startCenterId,n=t.endManageAreaId,r=t.endCenterId;try{t.startManageAreaId=String(e)||"",t.startCenterId=String(a)||"",t.endManageAreaId=String(n)||"",t.endCenterId=String(r)||""}catch(s){}return i.next=8,E.a.awrap(it(t));case 8:this.list=i.sent,i.next=13;break;case 11:i.prev=11,i.t0=i["catch"](1);case 13:this.loading=!1;case 14:case"end":return i.stop()}}),null,this,[[1,11]],I.a)}}},bt=mt,gt=(a("0507"),Object(R["a"])(bt,at,nt,!1,null,"0656ffce",null)),vt=gt.exports;function yt(t,e){var a=b()(t);if(p.a){var n=p()(t);e&&(n=n.filter((function(e){return f()(t,e).enumerable}))),a.push.apply(a,n)}return a}function Ct(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(a),!0).forEach((function(e){Object(g["a"])(t,e,a[e])})):u.a?c()(t,u()(a)):yt(Object(a)).forEach((function(e){s()(t,e,f()(a,e))}))}return t}var St,wt={name:"OperationBoard",components:{SelectTime:F,Header:z,DayData:et,SingleCarValueProfit:vt},data:function(){return{loading:!1,params:{currentDate:$()().subtract(3,"days").format("YYYY-MM-DD"),centerIds:[]},list:[]}},computed:{},mounted:function(){},methods:{onChangeSite:function(t,e){"0"===t||0===e.type?this.params.centerIds=e.children:this.params.centerIds=[t],this.query()},onTimeChange:function(){this.query()},query:function(){var t,e,a,n=this;return E.a.async((function(r){while(1)switch(r.prev=r.next){case 0:return this.loading=!0,t=(new Date).getTime(),e=Ct({},this.params),e.currentDate&&(e.currentDate=e.currentDate+" 00:00:00"),r.prev=4,r.next=7,E.a.awrap(st(e));case 7:this.list=r.sent,r.next=12;break;case 10:r.prev=10,r.t0=r["catch"](4);case 12:a=(new Date).getTime()-t,setTimeout((function(){n.loading=!1}),a<400?400:0);case 14:case"end":return r.stop()}}),null,this,[[4,10]],I.a)}}},xt=wt,Dt=(a("8f5b"),Object(R["a"])(xt,j,M,!1,null,"5aac339a",null)),kt=Dt.exports;function _t(t,e){var a=b()(t);if(p.a){var n=p()(t);e&&(n=n.filter((function(e){return f()(t,e).enumerable}))),a.push.apply(a,n)}return a}function Tt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(a),!0).forEach((function(e){Object(g["a"])(t,e,a[e])})):u.a?c()(t,u()(a)):_t(Object(a)).forEach((function(e){s()(t,e,f()(a,e))}))}return t}var Ot={name:"DataCenter",components:(St={},Object(g["a"])(St,T["a"].name,T["a"]),Object(g["a"])(St,_["a"].name,_["a"]),Object(g["a"])(St,k["a"].name,k["a"]),Object(g["a"])(St,"NoPermission",O["a"]),Object(g["a"])(St,"VolumeCostProfit",kt),St),data:function(){return{active:""}},computed:Tt({},Object(S["d"])("user",["userInfo"])),created:function(){},mounted:function(){},destroyed:function(){},methods:Tt(Tt({checkPerm:y["a"]},Object(S["b"])("workbench",["setSelectedList"])),{},{onChangeTab:function(t){this.onRefresh()},onRefresh:function(){var t=this;this.$nextTick((function(){try{var e=t.$refs[t.active];e&&e.refresh&&e.refresh()}catch(a){console.error(a)}}))}})},jt=Ot,Mt=(a("f261"),Object(R["a"])(jt,x,D,!1,null,"5551f3ff",null)),Pt=Mt.exports;function It(t,e){var a=b()(t);if(p.a){var n=p()(t);e&&(n=n.filter((function(e){return f()(t,e).enumerable}))),a.push.apply(a,n)}return a}function Yt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?It(Object(a),!0).forEach((function(e){Object(g["a"])(t,e,a[e])})):u.a?c()(t,u()(a)):It(Object(a)).forEach((function(e){s()(t,e,f()(a,e))}))}return t}var Et={name:"DataCenter",components:{NetworkManage:w["a"],OperationBoard:Pt},data:function(){return{scrollTop:0,lastScrollTop:0,ifPageStopScroll:!1,pageStopScrollDelayTask:void 0,checkPageStopScrollTimer:void 0}},computed:Yt(Yt({},Object(S["d"])("user",["userInfo"])),{},{tabType:function(){return Number(this.$route.query.tabType||1)}}),created:function(){},mounted:function(){this.$baidu("数据中心"),window.addEventListener("scroll",this.scrollChange),this.startCheckPageStopScrollTask()},destroyed:function(){this.stopCheckPageStopScrollTask(),window.removeEventListener("scroll",this.scrollChange)},methods:Yt(Yt({checkPerm:y["a"]},Object(S["b"])("workbench",["setSelectedList"])),{},{scrollChange:function(){this.scrollTop=document.body.scrollTop||document.documentElement.scrollTop},startCheckPageStopScrollTask:function(){var t=this;this.checkPageStopScrollTimer=setInterval((function(){t.scrollTop===t.lastScrollTop?t.pageStopScrollDelayTask||(t.pageStopScrollDelayTask=setTimeout((function(){t.ifPageStopScroll=!0}),3e3)):(clearTimeout(t.pageStopScrollDelayTask),t.pageStopScrollDelayTask=void 0,t.ifPageStopScroll=!1),t.lastScrollTop=t.scrollTop}),300)},stopCheckPageStopScrollTask:function(){clearInterval(this.checkPageStopScrollTimer),this.checkPageStopScrollTimer=void 0},onXiaoji:function(){var t="http://10.9.56.159:8005/feedback/index.html#/feedBack";"PRE"!==v["e"]&&"PROD"!==v["e"]||(t="https://xj.zto.com/feedback/index.html#/feedBack"),Object(C["b"])({url:t,query:{}})}})},At=Et,$t=(a("c9de"),Object(R["a"])(At,n,r,!1,null,"242aec61",null));e["default"]=$t.exports},"4ed8":function(t,e,a){},5101:function(t,e,a){"use strict";var n=a("c692"),r=a.n(n);r.a},5383:function(t,e,a){},6724:function(t,e,a){},"6afb":function(t,e,a){},"6b51":function(t,e,a){},"8f5b":function(t,e,a){"use strict";var n=a("6b51"),r=a.n(n);r.a},a603:function(t,e,a){},b206:function(t,e,a){"use strict";var n=a("4ed8"),r=a.n(n);r.a},c692:function(t,e,a){},c9de:function(t,e,a){"use strict";var n=a("a603"),r=a.n(n);r.a},f261:function(t,e,a){"use strict";var n=a("1a81"),r=a.n(n);r.a}}]);