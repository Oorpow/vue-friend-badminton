import { o as opRequest, d as defineStore, s as storeToRefs } from "./index.cdb67bbf.js";
import { f as filter_default } from "./index.c819bb21.js";
import { u as useInvitationStore } from "./invitation.9e113589.js";
import { u as useCommentStore } from "./comment.0a76e6ba.js";
import { u as usePlayerStore } from "./player.4f8ca736.js";
const getAllBrand = () => opRequest.get({
  url: "/brand"
});
const useBrandStore = defineStore("brandStore", {
  state: () => ({
    brandList: []
  }),
  actions: {
    async getBrandList() {
      const res = await getAllBrand();
      this.brandList.length = 0;
      this.brandList.push(...res.data);
    }
  }
});
const _hoisted_1 = { class: "news_page relative" };
const _hoisted_2 = { class: "w-7/10 mx-auto my-10 flex justify-around relative" };
const _hoisted_3 = { class: "w-2/3 flex flex-col overflow-hidden" };
const _hoisted_4 = { class: "w-1/4" };
const _hoisted_5 = {
  sticky: "",
  "top-5": ""
};
const _hoisted_6 = /* @__PURE__ */ Vue.createElementVNode("span", {
  "text-sm": "",
  "text-gray-4": ""
}, "\u54C1\u724C\u63A8\u8350", -1);
const _hoisted_7 = /* @__PURE__ */ Vue.createElementVNode("span", {
  "text-sm": "",
  "text-gray-4": ""
}, "\u4EBA\u6C14\u7403\u5458", -1);
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "NewsView",
  setup(__props) {
    const brandStore = useBrandStore();
    const playerStore = usePlayerStore();
    const invitationStore = useInvitationStore();
    const commentStore = useCommentStore();
    const { invitationList, totalNum } = storeToRefs(invitationStore);
    const { commentMap } = storeToRefs(commentStore);
    const { brandList } = storeToRefs(brandStore);
    const { playerList } = storeToRefs(playerStore);
    brandStore.getBrandList();
    playerStore.getPlayerList();
    invitationStore.getInvitationList().then(() => {
      commentStore.getAllCommentByOneSelf(invitationList.value);
    });
    let currentTag = Vue.ref(0);
    let currentPage = Vue.ref(1);
    const handleCurrentChange = (pagenum, tagId) => {
      if (currentTag.value === 0) {
        invitationStore.getInvitationList(pagenum);
      } else {
        invitationStore.getInvitationByTagId(tagId, pagenum);
      }
    };
    const checkedList = Vue.ref(0);
    const filterList = [
      {
        id: 0,
        name: "\u5168\u90E8"
      },
      {
        id: 1,
        name: "\u8D5B\u4E8B"
      },
      {
        id: 2,
        name: "\u88C5\u5907"
      }
    ];
    const handleCheckedChange = (val) => {
      currentTag.value = val;
      handleCurrentChange(currentPage.value, val);
    };
    return (_ctx, _cache) => {
      const _component_Header = Vue.resolveComponent("Header");
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElRadio = Vue.resolveComponent("ElRadio");
      const _component_ElRadioGroup = Vue.resolveComponent("ElRadioGroup");
      const _component_ElPopover = Vue.resolveComponent("ElPopover");
      const _component_NewsList = Vue.resolveComponent("NewsList");
      const _component_ElPagination = Vue.resolveComponent("ElPagination");
      const _component_RecommendBox = Vue.resolveComponent("RecommendBox");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_Header),
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createElementVNode("div", _hoisted_2, [
            Vue.createElementVNode("div", _hoisted_3, [
              Vue.createElementVNode("div", null, [
                Vue.createVNode(_component_ElPopover, {
                  placement: "bottom",
                  trigger: "click",
                  width: 120
                }, {
                  reference: Vue.withCtx(() => [
                    Vue.createVNode(_component_ElIcon, {
                      size: 20,
                      "cursor-pointer": ""
                    }, {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(Vue.unref(filter_default))
                      ]),
                      _: 1
                    })
                  ]),
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_component_ElRadioGroup, {
                      modelValue: checkedList.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkedList.value = $event),
                      onChange: handleCheckedChange
                    }, {
                      default: Vue.withCtx(() => [
                        (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(filterList, (item) => {
                          return Vue.createVNode(_component_ElRadio, {
                            key: item.id,
                            label: item.id
                          }, {
                            default: Vue.withCtx(() => [
                              Vue.createTextVNode(Vue.toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"]);
                        }), 64))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              Vue.createVNode(_component_NewsList, {
                list: Vue.unref(invitationList),
                commentMap: Vue.unref(commentMap)
              }, null, 8, ["list", "commentMap"]),
              Vue.createVNode(_component_ElPagination, {
                background: "",
                layout: "prev, pager, next",
                "hide-on-single-page": "",
                flex: "",
                "justify-center": "",
                "page-size": 6,
                "current-page": Vue.unref(currentPage),
                "onUpdate:current-page": _cache[1] || (_cache[1] = ($event) => Vue.isRef(currentPage) ? currentPage.value = $event : currentPage = $event),
                total: Vue.unref(totalNum),
                onCurrentChange: handleCurrentChange
              }, null, 8, ["current-page", "total"])
            ]),
            Vue.createElementVNode("div", _hoisted_4, [
              Vue.createElementVNode("div", _hoisted_5, [
                Vue.createVNode(_component_RecommendBox, {
                  list: Vue.unref(brandList),
                  isTag: false
                }, {
                  title: Vue.withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }, 8, ["list"]),
                Vue.createVNode(_component_RecommendBox, {
                  list: Vue.unref(playerList),
                  isTag: false
                }, {
                  title: Vue.withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["list"])
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
