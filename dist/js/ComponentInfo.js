(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ComponentInfo"],{"0fb3":function(t,e,a){},86544:function(t,e,a){"use strict";var i=a("0fb3"),o=a.n(i);o.a},"868d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"el-items-table"},[a("v-data-table",{staticClass:"item-table",attrs:{items:t.items,loading:t.itemsLoading,"server-items-length":t.itemsCount,"show-select":!!t.ActionSelect,headers:t.HDR[t.category],"footer-props":{"items-per-page-options":[30,100,500]},"hide-default-footer":t.hidefooter},on:{"update:page":t.ActionPage,"click:row":t.ItemPreview,input:t.ActionSelect},scopedSlots:t._u([{key:"item.category",fn:function(t){var e=t.item;return[a("el-marker",{attrs:{view:"icon",item:e}})]}},{key:"item.id",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-end pt-1 mr-n3"},[a("v-chip",{attrs:{small:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),t.OpenProfile(i)}}},[t._v(" "+t._s(i.id)+" "),a("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-open-in-app")])],1)],1)]}},{key:"item.title",fn:function(e){var i=e.item;return[a("div",{staticClass:"pt-2 pb-1"},[a("div",{staticClass:"body-1",staticStyle:{cursor:"default"}},[t._v(" "+t._s(i.title)+" ")])])]}},{key:"item.marking",fn:function(e){var i=e.item;return[a("div",{staticClass:"body-1 py-1"},[t._v(" "+t._s(i.marking)+" ")])]}},{key:"item.company_title",fn:function(e){var i=e.item;return[a("span",{staticClass:"caption",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.Interface.Goto("/Companies/"+t.ui2api.apid2id(i.company))}}},[t._v(" "+t._s(i.company_title)+" "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)]}},{key:"item.types_as_string",fn:function(e){var i=e.item;return[a("div",{staticClass:"clickable-chips py-1"},[i.types&&i.types.length?t._e():a("div",{staticClass:"caption pl-2 grey--text text--lighten-1"},[t._v(" — ")]),t._l(t.EF_SortTypes(i.types),(function(e,i){return a("v-chip",{key:i,staticClass:"ma-0",attrs:{small:"",color:t.EF_ColorType(e)?"":"transparent"},on:{click:function(a){return a.stopPropagation(),function(a){t.ActionTag&&t.ActionTag(e)}()}}},[a("v-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"8",color:"amber"}},[t._v("mdi-checkbox-blank-circle")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)]}},{key:"item.productionStatus",fn:function(e){var i=e.item;return[a("div",{staticClass:"clickable-chips py-1"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-chip",t._g({staticClass:"ma-0",attrs:{small:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),function(e){t.ActionTag&&t.ActionTag(i.productionStatus,"status")}()}}},o),[a("v-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"8",color:"grey lighten-2"}},[t._v("mdi-checkbox-blank-circle")]),t._v(" "+t._s(i.productionStatus&&i.productionStatus.name&&("pre-orders/mass production"==i.productionStatus.name?"po/mp":i.productionStatus.name))+" ")],1)]}}],null,!0)},[a("span",[t._v(" "+t._s(i.productionStatus&&i.productionStatus.name)+" ")])])],1)]}},{key:"item.image",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-center",staticStyle:{"min-height":"60px"}},[i.image_mini?a("div",[a("v-menu",{attrs:{"open-on-hover":"","offset-x":"","offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("div",t._g({},o),[a("v-img",{attrs:{"aspect-ratio":"products"==i.category?.74825:1,src:i.image_mini,width:"44",alt:""}})],1)]}}],null,!0),model:{value:i.hoverImage,callback:function(e){t.$set(i,"hoverImage",e)},expression:"item.hoverImage"}},[i.image_midi?a("v-list",{staticClass:"pa-0",attrs:{tile:""}},[a("v-img",{attrs:{"zzzaspect-ratio":"1.33645","aspect-ratio":"products"==i.category?.74825:1,src:i.image_midi,width:"200",alt:""}})],1):t._e()],1)],1):a("v-avatar",{attrs:{tile:"",size:"44"}},[a("v-icon",{staticStyle:{opacity:"0.32"},attrs:{large:""}},[t._v("mdi-image")])],1)],1)]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("div",{staticClass:"table-actions"},[a("v-icon",{staticClass:"open-icon",on:{click:function(e){return e.stopPropagation(),t.OpenProfile(i)}}},[t._v("mdi-open-in-app")])],1)]}},{key:"item.actions_report",fn:function(e){var i=e.item;return[a("div",{staticClass:"table-actions"},[a("v-btn",{attrs:{text:"",small:"",disabled:""},on:{click:function(t){return t.stopPropagation(),function(t){return!1}()}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-marked-outline")]),a("span",{staticClass:"ml-1"},[t._v("Features")])],1),a("v-btn",{attrs:{text:"",small:"",disabled:""},on:{click:function(t){return t.stopPropagation(),function(t){return!1}()}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-marked-outline")]),a("span",{staticClass:"ml-1"},[t._v("Images")])],1),a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.RemoveFromReport(i)}}},[t._v("mdi-delete")])],1)]}}]),model:{value:t.table_selection,callback:function(e){t.table_selection=e},expression:"table_selection"}}),a("block-preview",{ref:"Preview"})],1)},o=[],s=(a("99af"),a("4de4"),a("c975"),a("d81d"),a("2909")),n=a("5530"),r=a("1e35"),c=a("28d9"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{attrs:{dark:"",flat:"",scrollable:"","hide-overlay":"","content-class":"container py-0 grey darken-4"},model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[a("v-card",{attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"pa-0"},[a("v-sheet",{attrs:{tile:""}},["products"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-cube-outline")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("span",{staticClass:"overline as-link mr-4"},[t._v(" Components ("),a("b",{domProps:{textContent:t._s(t.ox.CountComponents())}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1),a("span",{staticClass:"overline as-link"},[t._v(" Features ("),a("b",{domProps:{textContent:t._s(t.ox.features.length||0)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)])]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("block-purchase",{attrs:{item:t.ox,type:"icon"}}),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({staticClass:"mx-4",attrs:{color:"secondary"},on:{click:function(e){return t.User.BookmarkToggle(t.ox)}}},i),[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"mdi-bookmark":"mdi-bookmark-outline")+" ")])]}}],null,!1,3051328716)},[a("span",[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"Clear Bookmark":"Save Bookmark")+" ")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},i),[t._v("mdi-open-in-app")])]}}],null,!1,3879691870)},[a("span",[t._v(" Detailed View ")])])],1)]),a("v-divider",{staticClass:"mb-2"}),a("v-row",{staticClass:"pb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.company&&t.ox.company.id?[a("v-list-item",{attrs:{dense:""},on:{click:function(e){return t.uiNavigateCompany(t.ox.company.id)}}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v("Company")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.company.name)+" "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)],1)],1)]:a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Company ")]),a("v-list-item-title",[t._v(" n/a ")])],1)],1),t.ox.types&&t.ox.types.length?[a("v-list-item",{staticClass:"mt-1",attrs:{dense:""}},[a("v-list-item-content",[a("div",t._l(t.ox.types,(function(e,i){return a("v-chip",{key:i,staticClass:"mr-1 mb-1",attrs:{small:""},domProps:{innerHTML:t._s(e.name)}})})),1)])],1)]:t._e()],2),a("v-col",{attrs:{cols:"12",md:"4"}},[t._l(t.ox.PreviewContent(),(function(e,i){return e?[a("v-list-item",{attrs:{dense:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption",domProps:{textContent:t._s(i)}}),a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)]:t._e()}))],2),a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.images&&t.ox.images.length?[a("img",{staticClass:"d-block mr-2 ml-auto",staticStyle:{height:"200px"},attrs:{src:t.ox.image_midi,alt:t.ox.title}})]:[a("v-card",{staticClass:"d-flex align-center justify-center mr-2 ml-auto",staticStyle:{"max-width":"266px"},attrs:{tile:"",flat:"",color:"blue-grey lighten-4",height:"200"}},[a("v-icon",{staticStyle:{opacity:"0.25"},attrs:{size:"120"}},[t._v("mdi-image")])],1)]],2)],1)]:t._e(),"components"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-cube")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("span",{staticClass:"overline as-link"},[t._v(" Used in Products ("),a("b",{domProps:{textContent:t._s(t.ox.productsAmount||0)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)])]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({staticClass:"mx-4",attrs:{color:"secondary"},on:{click:function(e){return t.User.BookmarkToggle(t.ox)}}},i),[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"mdi-bookmark":"mdi-bookmark-outline")+" ")])]}}],null,!1,3051328716)},[a("span",[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"Clear Bookmark":"Save Bookmark")+" ")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},i),[t._v("mdi-open-in-app")])]}}],null,!1,3879691870)},[a("span",[t._v(" Detailed View ")])])],1)]),a("v-divider",{staticClass:"mb-2"}),t.ox.marking?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Marking ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.marking)+" ")])],1)],1):t._e(),t.ox.description?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Description ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.description)+" ")])],1)],1):t._e()]:t._e(),"companies"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-factory")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("span",{staticClass:"overline as-link mr-4"},[t._v(" Brands ("),a("b",{domProps:{textContent:t._s(t.ox.brandsAmount)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1),a("span",{staticClass:"overline as-link"},[t._v(" Products ("),a("b",{domProps:{textContent:t._s(t.ox.productsAmount)}}),t._v(") "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)])]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("v-icon",{staticClass:"mx-4",attrs:{color:"secondary"},on:{click:function(e){return t.User.BookmarkToggle(t.ox)}}},[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"mdi-bookmark":"mdi-bookmark-outline")+" ")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},i),[t._v("mdi-open-in-app")])]}}],null,!1,3879691870)},[a("span",[t._v(" Detailed View ")])])],1)]),a("v-divider",{staticClass:"mb-2"}),a("v-row",{staticClass:"pb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.description?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Description ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.description)+" ")])],1)],1):t._e()],1),a("v-col",{attrs:{cols:"12",md:"4"}},[t.ox.originalName?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Original Name ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.originalName)+" ")])],1)],1):t._e(),t.ox.registrationNumber?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Registration Number ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.registrationNumber)+" ")])],1)],1):t._e(),t.ox.foundationYear?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Foundation Year ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.foundationYear)+" ")])],1)],1):t._e(),t.ox.location_string?a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Location ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.location_string)+" ")])],1)],1):t._e()],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"mr-2 ml-auto",staticStyle:{width:"200px",height:"240px"}},[t.ox.image_midi?[a("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.ox.image_midi,alt:t.ox.title}})]:t._e()],2)])],1)]:t._e(),"contacts"===t.ox.category?[a("header",{staticClass:"d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2"},[a("div",{staticClass:"d-flex align-center align-md-start justify-start flex-column pa-2",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("div",{staticClass:"title text-center text-md-left"},[a("span",{staticClass:"preview-title-text mr-2",domProps:{textContent:t._s(t.ox.title)}}),a("v-chip",{attrs:{small:""},on:{click:function(t){}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-briefcase")]),t._v(" "+t._s(t.ox.id)+" ")],1)],1),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"})]),a("div",{staticClass:"d-flex align-center justify-center flex-wrap-reverse pa-2"},[a("v-btn",{staticClass:"mx-2",attrs:{text:"",color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-open-in-app")]),a("span",[t._v("Details")])],1),a("v-btn",{attrs:{text:"",color:"secondary"},on:{click:t.uiExit}},[t._v("Close")])],1)])]:t._e()],2)],1)],1)],1)},d=[],m=a("46bc"),u=a("b643"),p=[],v={},f={},b={},g={},x=function(){return this.$store.state.Interface};b=Object(n["a"])({Interface:x},b),v=Object(n["a"])(Object(n["a"])({},v),{},{BlockPurchase:m["a"]});var _=function(){return this.$store.state.user};b=Object(n["a"])({User:_},b),g=Object(n["a"])({display:!1,ox:!1,msg:""},g),f=Object(n["a"])(Object(n["a"])({},f),{},{uiExit:function(){this.hidePreview()},showPreview:function(t){var e=this;e.$data.ox=t,e.$data.display=!0,e.LoadItem(t)},hidePreview:function(){var t=this;t.$data.ox=!1,t.$data.display=!1},uiNavigate:function(t){var e=this;e.hidePreview(),e.Interface.Goto(t)},uiNavigateCompany:function(t){var e=this;e.hidePreview(),e.Interface.Goto("/Companies/"+t)}}),g=Object(n["a"])({item:{},itemLoading:!1},g),f=Object(n["a"])({LoadItem:function(t){var e=t.id,a=t.category,i=this;i.$data.itemLoading=!0,u["a"].getListItem({id:e,category:a}).then(i.ItemLoadingComplete).catch(i.ItemLoadingFailed)},ItemLoadingComplete:function(t){var e=this;e.$data.item=t,e.$data.itemLoading=!1,t.category.id&&(t.category="components"),e.$data.ox=t},ItemLoadingFailed:function(t){var e=this;e.$data.itemLoading=!1}},f);var h={name:"block-preview",components:v,props:p,methods:f,computed:b,data:function(){return g}},y=h,C=(a("c155"),a("2877")),k=a("6544"),j=a.n(k),O=a("288c"),w=a("8336"),P=a("b0af"),I=a("99d9"),L=a("cc20"),$=a("62ad"),S=a("ce7e"),V=a("132d"),T=a("da13"),A=a("5d23"),B=a("0fd9"),N=a("8dd9"),D=a("3a2f"),R=Object(C["a"])(y,l,d,!1,null,"1d381ba8",null),F=R.exports;j()(R,{VBottomSheet:O["a"],VBtn:w["a"],VCard:P["a"],VCardText:I["c"],VChip:L["a"],VCol:$["a"],VDivider:S["a"],VIcon:V["a"],VListItem:T["a"],VListItemContent:A["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VRow:B["a"],VSheet:N["a"],VTooltip:D["a"]});var U=a("6910"),E=[],z={},H={},G={},M={};M=Object(n["a"])({msg:""},M),G=Object(n["a"])({ui2api:function(){return r["a"]}},G);var Y=function(){return this.$store.state.Interface};G=Object(n["a"])({Interface:Y},G),z=Object(n["a"])({elHeadSome:c["a"]},z),z=Object(n["a"])({BlockPreview:F},z),E=["items","itemsCount","itemsLoading"].concat(Object(s["a"])(E)),E=["ActionPage","ActionSelect","ActionTag"].concat(Object(s["a"])(E)),E=["filter"].concat(Object(s["a"])(E)),E=["showPreview"].concat(Object(s["a"])(E)),E=["category"].concat(Object(s["a"])(E)),E=["hidefooter"].concat(Object(s["a"])(E)),z=Object(n["a"])({BlockSingleItem:U["a"]},z),H=Object(n["a"])({RemoveFromReport:function(t){t&&t.id&&this.$store.state.report.RemoveItem(t)}},H),M=Object(n["a"])({table_selection:[]},M),H=Object(n["a"])({ItemPreview:function(t){var e=this;if(!e.$props.showPreview)return!1;t.category.id&&(t.category="components"),e.$refs.Preview.showPreview(t)},ClearSelection:function(){var t=this;t.$data.table_selection=[],"function"!==typeof t.$props.ActionSelect&&t.$props.ActionSelect([])},OpenProfile:function(t){var e=this;if(!t||!t.href)return!1;e.$refs.Preview.hidePreview(),e.Interface.Goto(t.href),e.$vuetify.goTo(0,0,0)},EF_SortTypes:function(t){var e=this.$props.filter||{},a=e.types||[],i=[],o=[],s=function(t){a.indexOf(t.id)<0?o.push(t):i.push(t)};return t.length&&t.map(s),[].concat(i,o)},EF_ColorType:function(t){return this.$props.filter&&this.$props.filter.types&&this.$props.filter.types.indexOf(t.id)>-1}},H);var J={default:{sortable:!1,filterable:!1,align:"start"},sortable:{sortable:!0,filterable:!0,align:"start"},minwidth:{width:"1%"},actions:{text:"",value:"actions",width:"1%",align:"end",sortable:!1,filterable:!1},image:{text:"Image",value:"image",width:"1%",align:"center",class:"img",sortable:!1,filterable:!1}},q={};q.products=[Object(n["a"])({},J.image),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Product Title",value:"title",width:"30%"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Types",value:"types_as_string",width:"40%"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Status",value:"productionStatus",width:"12%"}),Object(n["a"])(Object(n["a"])(Object(n["a"])({},J.default),J.minwidth),{},{text:"ID/Card",value:"id",align:"center"})],q.components=[Object(n["a"])(Object(n["a"])(Object(n["a"])({},J.default),J.minwidth),{},{text:"ID",value:"id"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Model on chip / Type",value:"marking"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Name",value:"title"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Products",value:"productsAmount",align:"end",width:"1%"}),Object(n["a"])({},J.actions)],q.companies=[Object(n["a"])(Object(n["a"])(Object(n["a"])({},J.default),J.minwidth),{},{text:"ID",value:"id"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Company",value:"title"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Brands",value:"brandsAmount",width:"1%"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Products",value:"productsAmount",width:"1%"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Location",value:"location_string"}),Object(n["a"])(Object(n["a"])({},J.image),{},{text:"Logo"}),Object(n["a"])({},J.actions)],q.contacts=[Object(n["a"])(Object(n["a"])(Object(n["a"])({},J.default),J.minwidth),{},{text:"ID",value:"id"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Contact name",value:"title"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Company",value:"company_title"}),Object(n["a"])(Object(n["a"])({},J.default),{},{text:"Position",value:"position",width:"25%"}),Object(n["a"])({},J.actions)],q.reports=[Object(n["a"])(Object(n["a"])(Object(n["a"])({},J.sortable),J.minwidth),{},{text:"",value:"category"}),Object(n["a"])(Object(n["a"])(Object(n["a"])({},J.sortable),J.minwidth),{},{text:"ID",value:"id"}),Object(n["a"])(Object(n["a"])({},J.sortable),{},{text:"Title",value:"title"}),{text:"Report Settings",value:"actions_report",align:"right",sortable:!1,filterable:!1}],M=Object(n["a"])({HDR:q},M);var K={name:"el-items-table",components:z,props:E,methods:H,computed:G,data:function(){return M},mounted:function(){}},Q=K,W=(a("86544"),a("8212")),X=a("8fea"),Z=a("adda"),tt=a("8860"),et=a("e449"),at=Object(C["a"])(Q,i,o,!1,null,null,null);e["a"]=at.exports;j()(at,{VAvatar:W["a"],VBtn:w["a"],VChip:L["a"],VDataTable:X["a"],VIcon:V["a"],VImg:Z["a"],VList:tt["a"],VMenu:et["a"],VTooltip:D["a"]})},"8d47":function(t,e,a){},ae67:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("el-head-some",{attrs:{caption:"Components"}}),a("el-item-card",{attrs:{item_category:"components",item_id:t.oxid}}),t._e()],1)},o=[],s=(a("d81d"),a("5530")),n=a("28d9"),r=a("3e3f"),c=a("b643"),l=a("868d"),d=a("236e"),m=[],u={},p={},v={},f={},b={};b=Object(s["a"])({msg:"",log:[]},b);var g=function(){return this.$store.state.Interface};v=Object(s["a"])({Interface:g},v);var x=function(){return this.$store.state.user};v=Object(s["a"])({User:x},v),u=Object(s["a"])({elHeadSome:n["a"]},u),u=Object(s["a"])({elItemCard:r["a"]},u),p=Object(s["a"])({DownloadItem:function(){var t=this;t.$data.ox;return!1}},p),b=Object(s["a"])({ox:{},item:{},itemLoading:!1},b),v=Object(s["a"])({oxid:function(){return this.$route.params.id}},v),f=Object(s["a"])({oxid:function(t){this.LoadItem(t)}},f),p=Object(s["a"])({LoadItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"components",a=this;a.$data.ox={},a.$data.item={},a.$data.itemLoading=!0,c["a"].getListItem({id:t,category:e}).then(a.LoadingComplete).catch(a.LoadingFailed)},LoadingComplete:function(t){var e=this;if(e.$data.ox=t,e.$data.item=t,e.$data.itemLoading=!1,t.products&&t.products.length){var a=[];t.products.map((function(t){return a.push(t.id)})),e.LoadProducts({id:a})}},LoadingFailed:function(t){RNA.$data.itemLoading=!1}},p),u=Object(s["a"])({elTable:l["a"]},u),b=Object(s["a"])({items:[],itemsCount:0,itemsLoading:!1},b),p=Object(s["a"])({LoadProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;e.$data.itemsLoading=!0,c["a"].getList({filter:t,category:"products"}).then(e.Products_LoadingComplete).catch(e.Products_LoadingFailed)},Products_LoadingComplete:function(t){var e=this;e.$data.items=t,e.$data.itemsCount=e.$data.ox.productsAmount,e.$data.itemsLoading=!1},Products_LoadingFailed:function(t){var e=this;e.$data.itemsLoading=!1},Products_LoadPage:function(t){var e=this;e.LoadProducts({page:t,companyId:e.$data.ox.id})}},p),u=Object(s["a"])({elReporter:d["a"]},u),p=Object(s["a"])({Reportage:function(t){this.$refs.Reporter&&this.$refs.Reporter.Select(t)}},p);var _={name:"CompanyInfo",props:m,components:u,methods:p,computed:v,watch:f,data:function(){return b},created:function(){var t=this,e=this.$route.params.id;t.LoadItem(e)}},h=_,y=a("2877"),C=a("6544"),k=a.n(C),j=a("8336"),O=a("99d9"),w=a("cc20"),P=a("62ad"),I=a("a523"),L=a("ce7e"),$=a("132d"),S=a("da13"),V=a("5d23"),T=a("0fd9"),A=Object(y["a"])(h,i,o,!1,null,null,null);e["default"]=A.exports;k()(A,{VBtn:j["a"],VCardTitle:O["d"],VChip:w["a"],VCol:P["a"],VContainer:I["a"],VDivider:L["a"],VIcon:$["a"],VListItem:S["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VRow:T["a"]})},c155:function(t,e,a){"use strict";var i=a("8d47"),o=a.n(i);o.a}}]);
//# sourceMappingURL=ComponentInfo.js.map