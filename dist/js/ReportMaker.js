(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ReportMaker"],{"0420":function(t,e,a){},"0afc":function(t,e,a){},5538:function(t,e,a){t.exports=a.p+"img/report-avatar-type1.png"},"5fbe":function(t,e,a){"use strict";var i=a("7854"),s=a.n(i);s.a},"6ca7":function(t,e,a){},7854:function(t,e,a){},86544:function(t,e,a){"use strict";var i=a("0420"),s=a.n(i);s.a},"868d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"el-items-table"},[a("v-data-table",{staticClass:"item-table",attrs:{items:t.items,loading:t.itemsLoading,"server-items-length":t.itemsCount,"show-select":!!t.ActionSelect,headers:t.HDR[t.category],"footer-props":{"items-per-page-options":[30,100,500]},"hide-default-footer":t.hidefooter},on:{"update:page":t.ActionPage,"click:row":t.ItemPreview,input:t.ActionSelect},scopedSlots:t._u([{key:"item.category",fn:function(t){var e=t.item;return[a("el-marker",{attrs:{view:"icon",item:e}})]}},{key:"item.id",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-end pt-1 mr-n3"},[a("v-chip",{attrs:{small:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),t.OpenProfile(i)}}},[t._v(" "+t._s(i.id)+" "),a("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-open-in-app")])],1)],1)]}},{key:"item.title",fn:function(e){var i=e.item;return[a("div",{staticClass:"pt-2 pb-1"},[a("div",{staticClass:"body-1",staticStyle:{cursor:"default"}},[t._v(" "+t._s(i.title)+" ")])])]}},{key:"item.marking",fn:function(e){var i=e.item;return[a("div",{staticClass:"body-1 py-1"},[t._v(" "+t._s(i.marking)+" ")])]}},{key:"item.company_title",fn:function(e){var i=e.item;return[a("span",{staticClass:"caption",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.Interface.Goto("/Companies/"+t.ui2api.apid2id(i.company))}}},[t._v(" "+t._s(i.company_title)+" "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)]}},{key:"item.types_as_string",fn:function(e){var i=e.item;return[a("div",{staticClass:"clickable-chips py-1"},[i.types&&i.types.length?t._e():a("div",{staticClass:"caption pl-2 grey--text text--lighten-1"},[t._v(" — ")]),t._l(t.EF_SortTypes(i.types),(function(e,i){return a("v-chip",{key:i,staticClass:"ma-0",attrs:{small:"",color:t.EF_ColorType(e)?"":"transparent"},on:{click:function(a){return a.stopPropagation(),function(a){t.ActionTag&&t.ActionTag(e)}()}}},[a("v-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"8",color:"amber"}},[t._v("mdi-checkbox-blank-circle")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)]}},{key:"item.productionStatus",fn:function(e){var i=e.item;return[a("div",{staticClass:"clickable-chips py-1"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-chip",t._g({staticClass:"ma-0",attrs:{small:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),function(e){t.ActionTag&&t.ActionTag(i.productionStatus,"status")}()}}},s),[a("v-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"8",color:"grey lighten-2"}},[t._v("mdi-checkbox-blank-circle")]),t._v(" "+t._s(i.productionStatus&&i.productionStatus.name&&("pre-orders/mass production"==i.productionStatus.name?"po/mp":i.productionStatus.name))+" ")],1)]}}],null,!0)},[a("span",[t._v(" "+t._s(i.productionStatus&&i.productionStatus.name)+" ")])])],1)]}},{key:"item.image",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-center",staticStyle:{"min-height":"60px"}},[i.image_mini?a("div",[a("v-menu",{attrs:{"open-on-hover":"","offset-x":"","offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("div",t._g({},s),[a("v-img",{attrs:{"aspect-ratio":"products"==i.category?.74825:1,src:i.image_mini,width:"44",alt:""}})],1)]}}],null,!0),model:{value:i.hoverImage,callback:function(e){t.$set(i,"hoverImage",e)},expression:"item.hoverImage"}},[i.image_midi?a("v-list",{staticClass:"pa-0",attrs:{tile:""}},[a("v-img",{attrs:{"zzzaspect-ratio":"1.33645","aspect-ratio":"products"==i.category?.74825:1,src:i.image_midi,width:"200",alt:""}})],1):t._e()],1)],1):a("v-avatar",{attrs:{tile:"",size:"44"}},[a("v-icon",{staticStyle:{opacity:"0.32"},attrs:{large:""}},[t._v("mdi-image")])],1)],1)]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("div",{staticClass:"table-actions"},[a("v-icon",{staticClass:"open-icon",on:{click:function(e){return e.stopPropagation(),t.OpenProfile(i)}}},[t._v("mdi-open-in-app")])],1)]}},{key:"item.actions_report",fn:function(e){var i=e.item;return[a("div",{staticClass:"table-actions"},[a("v-btn",{attrs:{text:"",small:"",disabled:""},on:{click:function(t){return t.stopPropagation(),function(t){return!1}()}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-marked-outline")]),a("span",{staticClass:"ml-1"},[t._v("Features")])],1),a("v-btn",{attrs:{text:"",small:"",disabled:""},on:{click:function(t){return t.stopPropagation(),function(t){return!1}()}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-marked-outline")]),a("span",{staticClass:"ml-1"},[t._v("Images")])],1),a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.RemoveFromReport(i)}}},[t._v("mdi-delete")])],1)]}}]),model:{value:t.table_selection,callback:function(e){t.table_selection=e},expression:"table_selection"}}),a("block-preview",{ref:"Preview"})],1)},s=[],n=(a("99af"),a("4de4"),a("c975"),a("d81d"),a("2909")),o=a("5530"),r=a("1e35"),l=a("28d9"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{attrs:{dark:"",flat:"",scrollable:"","hide-overlay":"","content-class":"container py-0 grey darken-4"},model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[a("v-card",{attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"pa-0"},[a("v-sheet",{attrs:{tile:""}},["products"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-cube-outline")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("span",{staticClass:"overline as-link mr-4"},[t._v(" Components ("),a("b",{domProps:{textContent:t._s(t.ox.CountComponents())}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1),a("span",{staticClass:"overline as-link"},[t._v(" Features ("),a("b",{domProps:{textContent:t._s(t.ox.features.length||0)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)])]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("block-purchase",{attrs:{item:t.ox,type:"icon"}}),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({staticClass:"mx-4",attrs:{color:"secondary"},on:{click:function(e){return t.User.BookmarkToggle(t.ox)}}},i),[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"mdi-bookmark":"mdi-bookmark-outline")+" ")])]}}],null,!1,3051328716)},[a("span",[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"Clear Bookmark":"Save Bookmark")+" ")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},i),[t._v("mdi-open-in-app")])]}}],null,!1,3879691870)},[a("span",[t._v(" Detailed View ")])])],1)]),a("v-divider",{staticClass:"mb-2"}),a("v-row",{staticClass:"pb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.company&&t.ox.company.id?[a("v-list-item",{attrs:{dense:""},on:{click:function(e){return t.uiNavigateCompany(t.ox.company.id)}}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v("Company")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.company.name)+" "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)],1)],1)]:a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Company ")]),a("v-list-item-title",[t._v(" n/a ")])],1)],1),t.ox.types&&t.ox.types.length?[a("v-list-item",{staticClass:"mt-1",attrs:{dense:""}},[a("v-list-item-content",[a("div",t._l(t.ox.types,(function(e,i){return a("v-chip",{key:i,staticClass:"mr-1 mb-1",attrs:{small:""},domProps:{innerHTML:t._s(e.name)}})})),1)])],1)]:t._e()],2),a("v-col",{attrs:{cols:"12",md:"4"}},[t._l(t.ox.PreviewContent(),(function(e,i){return e?[a("v-list-item",{attrs:{dense:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption",domProps:{textContent:t._s(i)}}),a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)]:t._e()}))],2),a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.images&&t.ox.images.length?[a("img",{staticClass:"d-block mr-2 ml-auto",staticStyle:{height:"200px"},attrs:{src:t.ox.image_midi,alt:t.ox.title}})]:[a("v-card",{staticClass:"d-flex align-center justify-center mr-2 ml-auto",staticStyle:{"max-width":"266px"},attrs:{tile:"",flat:"",color:"blue-grey lighten-4",height:"200"}},[a("v-icon",{staticStyle:{opacity:"0.25"},attrs:{size:"120"}},[t._v("mdi-image")])],1)]],2)],1)]:t._e(),"components"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-cube")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("span",{staticClass:"overline as-link"},[t._v(" Used in Products ("),a("b",{domProps:{textContent:t._s(t.ox.productsAmount||0)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)])]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({staticClass:"mx-4",attrs:{color:"secondary"},on:{click:function(e){return t.User.BookmarkToggle(t.ox)}}},i),[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"mdi-bookmark":"mdi-bookmark-outline")+" ")])]}}],null,!1,3051328716)},[a("span",[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"Clear Bookmark":"Save Bookmark")+" ")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},i),[t._v("mdi-open-in-app")])]}}],null,!1,3879691870)},[a("span",[t._v(" Detailed View ")])])],1)]),a("v-divider",{staticClass:"mb-2"}),t.ox.marking?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Marking ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.marking)+" ")])],1)],1):t._e(),t.ox.description?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Description ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.description)+" ")])],1)],1):t._e()]:t._e(),"companies"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-factory")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("span",{staticClass:"overline as-link mr-4"},[t._v(" Brands ("),a("b",{domProps:{textContent:t._s(t.ox.brandsAmount)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1),a("span",{staticClass:"overline as-link"},[t._v(" Products ("),a("b",{domProps:{textContent:t._s(t.ox.productsAmount)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)])]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("v-icon",{staticClass:"mx-4",attrs:{color:"secondary"},on:{click:function(e){return t.User.BookmarkToggle(t.ox)}}},[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"mdi-bookmark":"mdi-bookmark-outline")+" ")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},i),[t._v("mdi-open-in-app")])]}}],null,!1,3879691870)},[a("span",[t._v(" Detailed View ")])])],1)]),a("v-divider",{staticClass:"mb-2"}),a("v-row",{staticClass:"pb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.description?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Description ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.description)+" ")])],1)],1):t._e()],1),a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.originalName?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Original Name ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.originalName)+" ")])],1)],1):t._e(),t.ox.registrationNumber?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Registration Number ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.registrationNumber)+" ")])],1)],1):t._e(),t.ox.foundationYear?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Foundation Year ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.foundationYear)+" ")])],1)],1):t._e(),t.ox.location_string?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Location ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.location_string)+" ")])],1)],1):t._e()],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"mr-2 ml-auto",staticStyle:{width:"200px",height:"240px"}},[t.ox.image_midi?[a("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.ox.image_midi,alt:t.ox.title}})]:t._e()],2)])],1)]:t._e(),"contacts"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-briefcase")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"})]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("v-btn",{staticClass:"mx-2",attrs:{text:"",color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-open-in-app")]),a("span",[t._v("Details")])],1),a("v-btn",{attrs:{text:"",color:"secondary"},on:{click:t.uiExit}},[t._v("Close")])],1)])]:t._e()],2)],1)],1)],1)},u=[],p=a("46bc"),d=a("b643"),m=[],v={},f={},h={},g={},b=function(){return this.$store.state.Interface};h=Object(o["a"])({Interface:b},h),v=Object(o["a"])(Object(o["a"])({},v),{},{BlockPurchase:p["a"]});var x=function(){return this.$store.state.user};h=Object(o["a"])({User:x},h),g=Object(o["a"])({display:!1,ox:!1,msg:""},g),f=Object(o["a"])(Object(o["a"])({},f),{},{uiExit:function(){this.hidePreview()},showPreview:function(t){var e=this;e.$data.ox=t,e.$data.display=!0,e.LoadItem(t)},hidePreview:function(){var t=this;t.$data.ox=!1,t.$data.display=!1},uiNavigate:function(t){var e=this;e.hidePreview(),e.Interface.Goto(t)},uiNavigateCompany:function(t){var e=this;e.hidePreview(),e.Interface.Goto("/Companies/"+t)}}),g=Object(o["a"])({item:{},itemLoading:!1},g),f=Object(o["a"])({LoadItem:function(t){var e=t.id,a=t.category,i=this;i.$data.itemLoading=!0,d["a"].getListItem({id:e,category:a}).then(i.ItemLoadingComplete).catch(i.ItemLoadingFailed)},ItemLoadingComplete:function(t){var e=this;e.$data.item=t,e.$data.itemLoading=!1,t.category.id&&(t.category="components"),e.$data.ox=t},ItemLoadingFailed:function(t){var e=this;e.$data.itemLoading=!1}},f);var _={name:"block-preview",components:v,props:m,methods:f,computed:h,data:function(){return g}},y=_,C=(a("b99a"),a("2877")),k=a("6544"),j=a.n(k),O=a("288c"),w=a("8336"),S=a("b0af"),I=a("99d9"),P=a("cc20"),V=a("62ad"),$=a("ce7e"),A=a("132d"),T=a("da13"),D=a("5d23"),B=a("0fd9"),L=a("8dd9"),F=a("3a2f"),R=Object(C["a"])(y,c,u,!1,null,"3dff7e4d",null),N=R.exports;j()(R,{VBottomSheet:O["a"],VBtn:w["a"],VCard:S["a"],VCardText:I["c"],VChip:P["a"],VCol:V["a"],VDivider:$["a"],VIcon:A["a"],VListItem:T["a"],VListItemContent:D["a"],VListItemSubtitle:D["b"],VListItemTitle:D["c"],VRow:B["a"],VSheet:L["a"],VTooltip:F["a"]});var E=a("6910"),U=[],M={},z={},G={},H={};H=Object(o["a"])({msg:""},H),G=Object(o["a"])({ui2api:function(){return r["a"]}},G);var X=function(){return this.$store.state.Interface};G=Object(o["a"])({Interface:X},G),M=Object(o["a"])({elHeadSome:l["a"]},M),M=Object(o["a"])({BlockPreview:N},M),U=["items","itemsCount","itemsLoading"].concat(Object(n["a"])(U)),U=["ActionPage","ActionSelect","ActionTag"].concat(Object(n["a"])(U)),U=["filter"].concat(Object(n["a"])(U)),U=["showPreview"].concat(Object(n["a"])(U)),U=["category"].concat(Object(n["a"])(U)),U=["hidefooter"].concat(Object(n["a"])(U)),M=Object(o["a"])({BlockSingleItem:E["a"]},M),z=Object(o["a"])({RemoveFromReport:function(t){t&&t.id&&this.$store.state.report.RemoveItem(t)}},z),H=Object(o["a"])({table_selection:[]},H),z=Object(o["a"])({ItemPreview:function(t){var e=this;if(!e.$props.showPreview)return!1;t.category.id&&(t.category="components"),e.$refs.Preview.showPreview(t)},ClearSelection:function(){var t=this;t.$data.table_selection=[],"function"!==typeof t.$props.ActionSelect&&t.$props.ActionSelect([])},OpenProfile:function(t){var e=this;if(!t||!t.href)return!1;e.$refs.Preview.hidePreview(),e.Interface.Goto(t.href),e.$vuetify.goTo(0,0,0)},EF_SortTypes:function(t){var e=this.$props.filter||{},a=e.types||[],i=[],s=[],n=function(t){a.indexOf(t.id)<0?s.push(t):i.push(t)};return t.length&&t.map(n),[].concat(i,s)},EF_ColorType:function(t){return this.$props.filter&&this.$props.filter.types&&this.$props.filter.types.indexOf(t.id)>-1}},z);var Y={default:{sortable:!1,filterable:!1,align:"start"},sortable:{sortable:!0,filterable:!0,align:"start"},minwidth:{width:"1%"},actions:{text:"",value:"actions",width:"1%",align:"end",sortable:!1,filterable:!1},image:{text:"Image",value:"image",width:"1%",align:"center",class:"img",sortable:!1,filterable:!1}},J={};J.products=[Object(o["a"])({},Y.image),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Product Title",value:"title",width:"30%"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Types",value:"types_as_string",width:"40%"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Status",value:"productionStatus",width:"12%"}),Object(o["a"])(Object(o["a"])(Object(o["a"])({},Y.default),Y.minwidth),{},{text:"ID/Card",value:"id",align:"center"})],J.components=[Object(o["a"])(Object(o["a"])(Object(o["a"])({},Y.default),Y.minwidth),{},{text:"ID",value:"id"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Model on chip / Type",value:"marking"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Name",value:"title"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Products",value:"productsAmount",align:"end",width:"1%"}),Object(o["a"])({},Y.actions)],J.companies=[Object(o["a"])(Object(o["a"])(Object(o["a"])({},Y.default),Y.minwidth),{},{text:"ID",value:"id"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Company",value:"title"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Brands",value:"brandsAmount",width:"1%"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Products",value:"productsAmount",width:"1%"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Location",value:"location_string"}),Object(o["a"])(Object(o["a"])({},Y.image),{},{text:"Logo"}),Object(o["a"])({},Y.actions)],J.contacts=[Object(o["a"])(Object(o["a"])(Object(o["a"])({},Y.default),Y.minwidth),{},{text:"ID",value:"id"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Contact name",value:"title"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Company",value:"company_title"}),Object(o["a"])(Object(o["a"])({},Y.default),{},{text:"Position",value:"position",width:"25%"}),Object(o["a"])({},Y.actions)],J.reports=[Object(o["a"])(Object(o["a"])(Object(o["a"])({},Y.sortable),Y.minwidth),{},{text:"",value:"category"}),Object(o["a"])(Object(o["a"])(Object(o["a"])({},Y.sortable),Y.minwidth),{},{text:"ID",value:"id"}),Object(o["a"])(Object(o["a"])({},Y.sortable),{},{text:"Title",value:"title"}),{text:"Report Settings",value:"actions_report",align:"right",sortable:!1,filterable:!1}],H=Object(o["a"])({HDR:J},H);var K={name:"el-items-table",components:M,props:U,methods:z,computed:G,data:function(){return H},mounted:function(){}},q=K,W=(a("86544"),a("8212")),Q=a("8fea"),Z=a("adda"),tt=a("8860"),et=a("e449"),at=Object(C["a"])(q,i,s,!1,null,null,null);e["a"]=at.exports;j()(at,{VAvatar:W["a"],VBtn:w["a"],VChip:P["a"],VDataTable:Q["a"],VIcon:A["a"],VImg:Z["a"],VList:tt["a"],VMenu:et["a"],VTooltip:F["a"]})},aa91:function(t,e,a){t.exports=a.p+"img/report-avatar-type2.png"},b99a:function(t,e,a){"use strict";var i=a("0afc"),s=a.n(i);s.a},d3fc:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("el-head-some",{attrs:{caption:"Report-Maker"}}),i("section",[i("header",{staticClass:"overline primary--text pa-4"},[t._v(" Products ("+t._s(t.Report.getItemsCount())+") ")]),i("el-table",{attrs:{category:"reports",items:t.Report.items,showPreview:!0,ActionPage:!1}})],1),i("section",[i("header",{staticClass:"overline primary--text pa-4"},[t._v(" Template ")]),i("v-item-group",{attrs:{mandatory:""},model:{value:t.template,callback:function(e){t.template=e},expression:"template"}},[i("div",[i("v-row",t._l(t.templates,(function(e){return i("v-col",{key:e.uid,staticClass:"d-flex flex-column",attrs:{cols:"12",sm:"4",lg:"2"}},[i("v-item",{scopedSlots:t._u([{key:"default",fn:function(s){var n=s.active,o=s.toggle;return[i("figure",{staticClass:"pa-2 mt-auto",staticStyle:{cursor:"pointer"},on:{click:o}},[0===e.uid?i("img",{staticStyle:{"max-width":"100%"},attrs:{src:a("5538"),alt:""}}):t._e(),1===e.uid?i("img",{staticStyle:{"max-width":"100%"},attrs:{src:a("aa91"),alt:""}}):t._e(),2===e.uid?i("img",{staticStyle:{"max-width":"100%"},attrs:{src:a("d7c0"),alt:""}}):t._e(),3===e.uid||4===e.uid?i("div",{staticClass:"display-1 grey--text py-2"},[t._v(" "+t._s(e.txt)+" ")]):t._e(),i("figcaption",[n?i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-checkbox-blank-circle")]):t._e(),n?t._e():i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-checkbox-blank-circle-outline")]),i("span",{staticClass:"caption ml-1"},[t._v(t._s(e.title))])],1)])]}}],null,!0)})],1)})),1)],1)])],1),i("v-expand-transition",[0===t.template||1===t.template?i("section",[i("header",{staticClass:"overline primary--text pa-4"},[t._v(" Settings ")]),i("div",{staticClass:"px-4"},[i("div",{staticClass:"caption"},[t._v("Image")]),i("div",{staticStyle:{"max-width":"24em"}},[i("v-select",{attrs:{solo:"",outlined:"",dense:"",items:t.settings_types},model:{value:t.settings.type,callback:function(e){t.$set(t.settings,"type",e)},expression:"settings.type"}})],1),i("v-checkbox",{staticClass:"mt-0",attrs:{dense:"",label:"Use Wingle logo"},model:{value:t.settings.logo,callback:function(e){t.$set(t.settings,"logo",e)},expression:"settings.logo"}})],1)]):t._e()]),i("section",[i("div",{staticClass:"pa-4"},[i("v-btn",{attrs:{large:"",color:"primary"},on:{click:t.DownloadReport}},[t._v(" Download ")])],1)]),i("div",{staticStyle:{display:"none"}},[i("div",[t._v(t._s(t.Report.post))]),i("div",[t._v(t._s(t.banner))])]),i("div",{staticStyle:{height:"50vh"}})],1)},s=[],n=a("5530"),o=a("28d9"),r=a("868d"),l=[],c={},u={},p={},d={};d=Object(n["a"])({msg:""},d),c=Object(n["a"])({elHeadSome:o["a"]},c),c=Object(n["a"])({elTable:r["a"]},c),d=Object(n["a"])({items:[]},d);var m=function(){return this.$store.state.user};p=Object(n["a"])({User:m},p);var v=function(){return this.$store.state.report};p=Object(n["a"])({Report:v},p),d=Object(n["a"])({settings:{type:1,logo:!0},settings_types:[{value:1,text:"Default Image"},{value:2,text:"USP"}],template:0,templates:[{title:"PDF Template #1",value:{template:1,format:"pdf"},uid:0,img:"../assets/ui/report-avatar-type1.png",txt:"",ico:"mdi-file-pdf"},{title:"PDF Template #2",value:{template:2,format:"pdf"},uid:1,img:"../assets/ui/report-avatar-type2.png",txt:"",ico:"mdi-file-pdf"},{title:"PPTX Presentation",value:{format:"presentation"},uid:2,img:"../assets/ui/report-avatar-ppt.png",txt:"",ico:"mdi-file-powerpoint"},{title:"XLS Spreadsheets",value:{format:"sheets-types"},uid:3,img:"",txt:"Types",ico:"mdi-file-excel"},{title:"XLS Spreadsheets",value:{format:"sheets-types"},uid:4,img:"",txt:"Features",ico:"mdi-file-excel"}]},d),d=Object(n["a"])({rs:{template:1,type:1,logo:!0},rsTemplateItems:[{value:1,text:"PDF #1"},{value:2,text:"PDF #2"},{value:3,text:"Presentation #1"}],rsTypeItems:[{value:1,text:"Default Image"},{value:2,text:"USP"}],banner:""},d),u=Object(n["a"])({DownloadReport:function(){var t=this,e=t.$data.templates[t.$data.template],a=t.$data.settings;t.$store.state.report.getFile(Object(n["a"])(Object(n["a"])({},e.value),a)).then((function(e){t.$data.banner=e}))},downloadButtonClick:function(t){var e=this;e.$store.state.report.getFile(Object(n["a"])({format:t},e.$data.rs)).then((function(t){e.$data.banner=t}))},RemoveFormList:function(t){}},u);var f={name:"ReportMaker",props:l,components:c,methods:u,computed:p,data:function(){return d},created:function(){}},h=f,g=(a("5fbe"),a("2877")),b=a("6544"),x=a.n(b),_=a("8336"),y=(a("d3b7"),a("25f0"),a("6ca7"),a("ec29"),a("9d26")),C=a("c37a"),k=(a("4de4"),a("45fc"),a("5607")),j=a("2b0e"),O=j["a"].extend({name:"rippleable",directives:{ripple:k["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),w=a("8547"),S=a("58df"),I=Object(S["a"])(C["a"],O,w["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=C["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),P=I.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(y["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),V=a("62ad"),$=a("a523"),A=a("0789"),T=a("132d"),D=a("ade3"),B=a("4e82"),L=a("d9bd"),F=j["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(D["a"])({},this.activeClass,this.isActive)}),t):(Object(L["c"])("v-item should only contain a single element",this),t)):(Object(L["c"])("v-item is missing a default scopedSlot",this),null);var t}}),R=Object(S["a"])(F,Object(B["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),N=a("604c"),E=a("0fd9"),U=a("b974"),M=Object(g["a"])(h,i,s,!1,null,null,null);e["default"]=M.exports;x()(M,{VBtn:_["a"],VCheckbox:P,VCol:V["a"],VContainer:$["a"],VExpandTransition:A["a"],VIcon:T["a"],VItem:R,VItemGroup:N["b"],VRow:E["a"],VSelect:U["a"]})},d7c0:function(t,e,a){t.exports=a.p+"img/report-avatar-ppt.png"},ec29:function(t,e,a){}}]);
//# sourceMappingURL=ReportMaker.js.map