(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74622de6"],{"06c7":function(e,t,i){"use strict";var s=i("c4db"),a=i.n(s);a.a},"0eb4":function(e,t,i){},1479:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"facePolicyDetail",staticClass:"facePolicyDetail"},[i("van-tabs",{ref:"tabs",attrs:{color:"#3693ff","title-active-color":"#3693ff",background:"#fff","before-change":e.onBeforeChangeTab,"lazy-render":!1,sticky:""},on:{change:e.onChangeTab},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(t){return i("van-tab",{key:t.type,attrs:{title:t.tabName,name:t.type}},[i("detail-panel",{ref:"detailPanel"+t.type,refInFor:!0,attrs:{tabActive:e.active},on:{onDownTab:e.onDownTab}})],1)})),1)],1)},a=[],o=(i("4de4"),i("a9e3"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"detailPenal"},[i("div",{staticClass:"form-field"},[i("div",{staticClass:"area-search"},[i("van-search",{attrs:{shape:"round",background:"#fff",placeholder:e.placeholder,readonly:""},on:{focus:e.onFocus},model:{value:e.codes,callback:function(t){e.codes=t},expression:"codes"}}),e.codes?i("van-icon",{staticClass:"close-icon",attrs:{name:"close"},on:{click:e.onAreaClean}}):e._e()],1),i("b-select-date",{staticClass:"area-date",attrs:{stype:"year-month",zoneNo:!0,title:"请选择年月",minDate:e.expensesPolicyMinDate,maxDate:e.expensesPolicyMaxDate},on:{change:e.onChangeTime},model:{value:e.selectData.sumDate,callback:function(t){e.$set(e.selectData,"sumDate",t)},expression:"selectData.sumDate"}})],1),i("div",{staticClass:"form-field"},[i("div",{staticStyle:{"padding-left":"12px",position:"relative"}},[i("van-field",{staticClass:"form-field-select",attrs:{readonly:"",clickable:"",name:"picker",value:e.policyModeStr,placeholder:"请选择政策模式"},on:{click:function(t){e.policyModeShow=!0}}}),e.policyModeStr?i("van-icon",{staticClass:"close-icon",attrs:{name:"close"},on:{click:function(t){return e.onClear(1)}}}):e._e(),i("van-action-sheet",{attrs:{title:"政策模式"},model:{value:e.policyModeShow,callback:function(t){e.policyModeShow=t},expression:"policyModeShow"}},e._l(e.policyModeList,(function(t){return i("div",{key:t.policyMode,staticClass:"select-sheet",on:{click:function(i){return e.onSelect(t)}}},[e._v(" "+e._s(t.policyModeStr)+" ")])})),0)],1),i("div",{staticStyle:{padding:"0 6px",position:"relative"}},[i("van-field",{staticClass:"form-field-select",attrs:{readonly:"",clickable:"",name:"picker",value:e.subtypesStr,disabled:0===e.subtypesList.length,placeholder:"请选择政策子类型"},on:{click:e.onSubtypesShow}}),e.subtypesStr?i("van-icon",{staticClass:"close-icon",attrs:{name:"close"},on:{click:function(t){return e.onClear(2)}}}):e._e(),i("van-action-sheet",{attrs:{title:"政策子类型"},model:{value:e.subtypesShow,callback:function(t){e.subtypesShow=t},expression:"subtypesShow"}},e._l(e.subtypesList,(function(t){return i("div",{key:t.subtypes,staticClass:"select-sheet",on:{click:function(i){return e.onSubtypesSelect(t)}}},[e._v(" "+e._s(t.subTypeStr)+" ")])})),0)],1)]),i("b-select-site-multiple",{ref:"selectSite",attrs:{defaultData:e.defaultSite,disableTabs:e.disableTabs},on:{change:e.onChangeSite},model:{value:e.selectCode,callback:function(t){e.selectCode=t},expression:"selectCode"}}),i("div",{staticClass:"content"},[i("hy-table",{staticClass:"base-table",attrs:{"table-data":e.tableData,columns:e.tableHeader,scrollWidth:"100%",border:"",theme:"light","border-y":!0,isShowMore:!0,total:e.total,isFixedHeader:!0,maxHeight:480},on:{updateData:e.updateData,displayMore:e.displayMore}})],1),i("site-popup",{ref:"sitePopup"}),i("rule-popup",{ref:"rulePopup"})],1)}),c=[],n=(i("4160"),i("a15b"),i("d81d"),i("b0c0"),i("d3b7"),i("ac1f"),i("1276"),i("c7cd"),i("159b"),i("85f2")),r=i.n(n),l=i("d847"),d=i.n(l),h=i("5e83"),u=i.n(h),p=i("268f"),f=i.n(p),b=i("e265"),y=i.n(b),C=i("a4bb"),m=i.n(C),g=i("284c"),S=i("795b"),v=i.n(S),D=i("967e"),w=i.n(D),P=(i("96cf"),i("2fa7")),k=i("0644"),M=i.n(k),x=i("c1df"),T=i.n(x),A=i("2f62"),N=i("538d"),$=function(e){return[{field:"districtName",key:"districtName",title:"管理区",width:80},{field:"districtAreaName",key:"districtAreaName",title:"片区",width:120},{field:"centerName",key:"centerName",title:"中心",width:120},{field:"reason",key:"reason",title:"规则标准",width:100,renderBodyCell:function(t,i){var s=t.row;t.column,t.rowIndex;return i("span",{class:"color2fe",on:{click:function(){return e.toRulePop(s)}}},["查看"])}},{field:"policyModeStr",key:"policyModeStr",title:"政策模式",width:140},{field:"subTypeStr",key:"subTypeStr",title:"政策子类型",width:140},{field:"index",key:"index",title:"政策个数",width:140,renderBodyCell:function(t,i){var s=t.row;t.column,t.rowIndex;return Number(s.index)?i("span",{class:"color2fe",on:{click:function(){return e.toSitePop(s,4)}}},[s.index]):i("span",[s.index])}},{field:"siteSize",key:"siteSize",title:"网点个数",width:100,renderBodyCell:function(t,i){var s=t.row;t.column,t.rowIndex;return Number(s.siteSize)?i("span",{class:"color2fe",on:{click:function(){return e.toNextTab(s,1)}}},[s.siteSize]):i("span",[s.siteSize])}},{field:"baseNumber",key:"baseNumber",title:"基数个数",width:100},{field:"startTimeStr",key:"startTimeStr",title:"政策开始时间",width:160},{field:"endTimeStr",key:"endTimeStr",title:"政策结束时间",width:160},{field:"classifiedCode",key:"classifiedCode",title:"政策编号",width:140}]},z=i("0532"),B=i("dcbf");function _(e,t){var i=m()(e);if(y.a){var s=y()(e);t&&(s=s.filter((function(t){return f()(e,t).enumerable}))),i.push.apply(i,s)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_(Object(i),!0).forEach((function(t){Object(P["a"])(e,t,i[t])})):u.a?d()(e,u()(i)):_(Object(i)).forEach((function(t){r()(e,t,f()(i,t))}))}return e}var q={name:"detailPanel",components:{SitePopup:z["a"],RulePopup:B["a"]},props:{tabActive:{type:Number,default:2}},data:function(){return{loading:!0,codes:"",selectCode:[],downDistrictCode:[],downCenterCode:[],downDistrictAreaCode:"",isFirst:!0,defaultSite:[],selectData:{code:[],type:"",sumDate:T()().format("YYYY-MM"),policyMode:"",subtypes:""},cacheParams:{districtCode:[],centerCode:[],siteCode:[]},placeholder:"请输入管理区名称",dtype:"",tableData:[],total:0,pageSize:10,currentPage:1,policyModeStr:"",subtypesStr:"",policyModeList:[],policyModeShow:!1,subtypesShow:!1,expensesPolicyMaxDate:new Date,expensesPolicyMinDate:T()().subtract(24,"months").toDate()}},computed:O(O({},Object(A["d"])("user",["userInfo"])),{},{disableTabs:function(){return 2===this.tabActive||3===this.tabActive?[3]:[]},tableHeader:function(){var e=M()($(this));return 2===this.tabActive?(e=e.filter((function(e){return"reason"!==e.field&&"baseNumber"!==e.field&&"startTimeStr"!==e.field&&"endTimeStr"!==e.field&&"classifiedCode"!==e.field})),e[0].fixed="left"):1===this.tabActive&&(e=e.filter((function(e){return"districtAreaName"!==e.field&&"centerName"!==e.field&&"index"!==e.field&&"siteSize"!==e.field})),e.unshift({field:"siteName",key:"siteName",title:"网点",width:120,fixed:"left"})),e},subtypesList:function(){var e=this,t=[];if(this.policyModeList.length){var i=this.policyModeList.filter((function(t){return t.policyMode===e.selectData.policyMode}));i.length&&(t=i[0].subTypeResultList||[])}return t}}),watch:{tabActive:{immediate:!0,handler:function(e){3===e?this.placeholder="请输入中心名称":1===e?this.placeholder="请输入网点名称":2===e&&(this.placeholder="请输入管区名称")}}},created:function(){this.getBoardPolicyMode(),this.parseRouterParams()},mounted:function(){},methods:{onAreaClean:function(){0===this.userInfo.authType&&"0"===this.userInfo.authCode?(this.codes="",this.selectData.code=[]):(this.codes=this.$route.query.name,this.selectData.code=this.$route.query.code.split()),this.selectCode=[],this.cacheParams={districtCode:[],centerCode:[],siteCode:[]},this.onSearchRefresh()},onClear:function(e){1===e?(this.policyModeStr="",this.selectData.policyMode="",this.subtypesStr="",this.selectData.subtypes=null):2===e&&(this.subtypesStr="",this.selectData.subtypes=null),this.onSearchRefresh()},onSubtypesShow:function(){this.subtypesList.length&&(this.subtypesShow=!0)},getBoardPolicyMode:function(){var e;return w.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.awrap(Object(N["d"])());case 2:e=t.sent,this.policyModeList=e;case 4:case"end":return t.stop()}}),null,this,null,v.a)},onSelect:function(e){this.policyModeStr=e.policyModeStr,this.selectData.policyMode=e.policyMode,this.subtypesStr="",this.selectData.subtypes=null,this.policyModeShow=!1,this.onSearchRefresh()},onSubtypesSelect:function(e){this.subtypesStr=e.subTypeStr,this.selectData.subtypes=e.subtypes,this.subtypesShow=!1,this.onSearchRefresh()},toSitePop:function(e,t){var i="";switch(t){case 3:i="面单政策网点";break;case 4:i="政策编号规则";break}var s={};3===t?s={title:i,topType:"",type:this.tabActive,siteCode:2===this.tabActive?e.districtCode:e.centerId,sumDate:this.selectData.sumDate,policyMode:e.policyMode,subtypes:e.subtypes}:(s.type=this.tabActive,s.sumDate=this.selectData.sumDate,s.title=i,s.districtCode=e.districtCode.split(),s.districtAreaCode=e.districtAreaCode,s.centerCode=String(e.centerId).split(),s.policyMode=e.policyMode,s.subtypes=e.subtypes,s.pageSize=10,s.page=1),this.$refs.sitePopup.onOpen(s,t)},toRulePop:function(e){e.title="规则标准",this.$refs.rulePopup.onOpen(e)},toNextTab:function(e,t){e.sumDate=this.selectData.sumDate,this.$emit("onDownTab",t,e)},getParams:function(e){var t=Number(this.$route.query.selectTab),i=this.$route.query.code,s=M()(this.selectData),a=e||this.tabActive;if(1===t){var o=this.cacheParams.centerCode.length?this.cacheParams.centerCode:this.selectData.code;s.districtCode=this.cacheParams.districtCode,s.centerCode=this.selectCode.length||this.cacheParams.districtCode.length?[]:o,s.siteCode=this.selectCode}else if(0===t&&"0"!==i){var c=this.cacheParams.districtCode.length?this.cacheParams.districtCode:this.selectData.code;s.districtCode=this.selectCode.length||this.cacheParams.centerCode.length?[]:c,s.centerCode=3===a&&this.selectCode.length?this.selectCode:this.cacheParams.centerCode,this.downCenterCode.length&&1===a&&(s.districtCode=[],s.centerCode=this.downCenterCode),s.siteCode=1===a&&this.selectCode.length?this.selectCode:[]}else{var n=this.cacheParams.districtCode.length?this.cacheParams.districtCode:this.selectData.code,r=this.cacheParams.centerCode.length?this.cacheParams.centerCode:[];s.districtCode=2===a&&this.selectCode.length&&this.cacheParams.districtCode.length?this.selectCode:n,s.centerCode=2===a&&this.selectCode.length&&this.cacheParams.centerCode.length?this.selectCode:r,this.selectCode.length||(s.districtCode=n),2!==a&&this.selectCode.length&&(s.districtCode=[],s.centerCode=[]),s.centerCode=3===a&&this.selectCode.length?this.selectCode:this.cacheParams.centerCode,this.downCenterCode.length&&1===a&&(s.districtCode=[],s.centerCode=this.downCenterCode),this.downDistrictCode.length&&1===a&&(s.districtCode=this.downDistrictCode),s.siteCode=1===a&&this.selectCode.length?this.selectCode:[]}return this.downDistrictAreaCode&&(s.districtAreaCode=this.downDistrictAreaCode),delete s.code,s},parseRouterParams:function(){this.$route.query.month&&(this.selectData.sumDate=this.$route.query.month),this.selectData.type=this.tabActive,this.selectData.code="0"===this.$route.query.code?[]:this.$route.query.code.split(),this.defaultSite=[{code:this.$route.query.code,type:Number(this.$route.query.selectTab)}],"0"!==this.$route.query.code&&(this.codes=this.$route.query.name);var e=this.getParams();e.page=1,e.pageSize=this.pageSize,this.tableData=[],this.getBoardSiteDetails(e)},onParChangeTab:function(e){this.currentPage=1,this.selectData.type=e;var t=this.getParams(e);t.page=1,t.pageSize=this.pageSize,this.tableData=[],this.getBoardSiteDetails(t)},onRefresh:function(e,t){this.currentPage=1,this.selectData.type=e,this.downDistrictCode=String(t.districtCode).split(),this.downCenterCode=String(t.centerCode).split(),this.downDistrictAreaCode=t.districtAreaCode,this.selectData.sumDate=t.sumDate,this.selectData.policyMode=t.policyMode,this.selectData.subtypes=t.subtypes,this.policyModeStr=t.policyModeStr,this.subtypesStr=t.subTypeStr,this.codes=t.centerName,this.selectCode=[];var i=M()(this.selectData);i.districtCode=String(t.districtCode).split(),i.districtAreaCode=t.districtAreaCode,i.centerCode=String(t.centerCode).split(),i.siteCode=[],delete i.code,i.page=1,i.pageSize=this.pageSize,this.tableData=[],this.getBoardSiteDetails(i)},onChangeTime:function(){this.onSearchRefresh()},onSearchRefresh:function(){this.currentPage=1;var e=this.getParams();e.page=1,e.pageSize=this.pageSize,this.tableData=[],this.getBoardSiteDetails(e)},onFocus:function(){this.$refs.selectSite.onClickSiteSelect()},onChangeSite:function(e,t){this.currentPage=1;var i=M()(this.selectData);if(i.districtCode=[],i.centerCode=[],i.siteCode=[],this.downDistrictAreaCode="",this.downCenterCode=[],this.downDistrictCode=[],e.length)this.codes=e.map((function(e){return e.label})).join(","),this.selectCode=e.map((function(e){return e.value})),1===this.tabActive?i.siteCode=this.selectCode:2===this.tabActive&&0===e[0].type?i.districtCode=this.selectCode:2===this.tabActive&&1===e[0].type&&(i.centerCode=this.selectCode);else{this.selectCode=[],"0"!==t[t.length-1].code?this.codes=t[t.length-1].label:this.codes="";var s=t[t.length-1].type;0===s?i.districtCode="0"===t[t.length-1].code?[]:t[t.length-1].code.split():1===s?i.centerCode=t[t.length-1].code.split():3===s&&(i.siteCode=t[t.length-1].code.split())}this.cacheParams={districtCode:i.districtCode,centerCode:i.centerCode,siteCode:i.siteCode},delete i.code,i.page=1,i.pageSize=this.pageSize,this.tableData=[],this.getBoardSiteDetails(i)},getBoardSiteDetails:function(e){var t,i;return w.a.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,w.a.awrap(Object(N["i"])(e));case 2:i=s.sent,(t=this.tableData).push.apply(t,Object(g["a"])(i.list)),this.total=i.totalRow;case 5:case"end":return s.stop()}}),null,this,null,v.a)},updateData:function(e){if(this.currentPage++,this.tableData.length<this.total){var t=this.getParams();this.getBoardSiteDetails(O({pageSize:this.pageSize,page:this.currentPage},t))}},displayMore:function(e){this.currentPage=1,this.tableData=[];var t=this.getParams();this.getBoardSiteDetails(O({pageSize:this.pageSize,page:this.currentPage},t))}}},j=q,R=(i("9049"),i("2877")),L=Object(R["a"])(j,o,c,!1,null,"1dcdf339",null),I=L.exports,E={name:"facePolicyDetail",components:{DetailPanel:I},data:function(){return{active:2,codes:"",tabList:[{tabName:"管区",type:2},{tabName:"网点",type:1}]}},computed:{tabs:function(){var e=this.$route.query.selectTab,t=this.$route.query.code,i=this.tabList;return 0===Number(e)&&"0"!==t?i=this.tabList.filter((function(e){return 2!==e.type})):1===Number(e)&&(i=this.tabList.filter((function(e){return 2!==e.type&&3!==e.type}))),i}},created:function(){this.active=this.getQueryType()},mounted:function(){},methods:{getQueryType:function(){var e=this.$route.query.code,t=Number(this.$route.query.selectTab),i=2;return(0===t&&"0"!==e||1===t)&&(i=1),i},onDownTab:function(e,t){this.active=e;var i=this.$refs["detailPanel"+e];i&&i[0].onRefresh(e,t)},onBeforeChangeTab:function(e){return!0},onChangeTab:function(e){var t=this.$refs["detailPanel"+e];t&&t[0].onParChangeTab(e)}}},F=E,H=(i("06c7"),Object(R["a"])(F,s,a,!1,null,"3cacf6fc",null));t["default"]=H.exports},5170:function(e,t,i){},9049:function(e,t,i){"use strict";var s=i("5170"),a=i.n(s);a.a},c4db:function(e,t,i){},dcbf:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("van-popup",{attrs:{round:"",position:"bottom"},on:{close:e.onClose,closed:e.onClosed},model:{value:e.showBody,callback:function(t){e.showBody=t},expression:"showBody"}},[i("div",{staticClass:"popup-body"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[e._v(e._s(e.ruleObj.title))]),i("img",{staticClass:"close",attrs:{src:e.closeIcon,alt:""},on:{click:function(t){e.showBody=!1}}})]),e.showBody?i("div",{staticClass:"hint-info"},[i("div",[e._v(" "+e._s(e.ruleObj.reason)+" ")])]):e._e()])])],1)},a=[],o=i("71e1"),c=i.n(o),n={data:function(){return{closeIcon:c.a,showBody:!1,ruleObj:{tilte:"规则标准"}}},methods:{onOpen:function(e){this.ruleObj=e,this.showBody=!0},onClose:function(){},onClosed:function(){this.showBody=!1}}},r=n,l=(i("eaf4"),i("2877")),d=Object(l["a"])(r,s,a,!1,null,"cd2390be",null);t["a"]=d.exports},eaf4:function(e,t,i){"use strict";var s=i("0eb4"),a=i.n(s);a.a}}]);