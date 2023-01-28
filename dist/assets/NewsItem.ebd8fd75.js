import { c as useRoute, u as useRouter, a as useUserStore, s as storeToRefs, b as _export_sfc } from "./index.691cbf00.js";
import { S as ScrollTrigger } from "./ScrollTrigger.5e0458ee.js";
import { x as mouse_default, j as star_filled_default, g as star_default, h as chat_line_square_default, t as timer_default } from "./index.34529f81.js";
import { u as useInvitationStore } from "./invitation.36cd443b.js";
const _withScopeId = (n) => (Vue.pushScopeId("data-v-100a9675"), n = n(), Vue.popScopeId(), n);
const _hoisted_1 = ["data-index"];
const _hoisted_2 = {
  flex: "",
  "items-center": "",
  "justify-between": ""
};
const _hoisted_3 = {
  "ml-2": "",
  "text-sm": ""
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  "font-normal": "",
  truncate: ""
};
const _hoisted_6 = { class: "article_content" };
const _hoisted_7 = {
  "w-full": "",
  "h-20": ""
};
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = {
  flex: "",
  "mt-3": ""
};
const _hoisted_10 = { flex: "" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("span", {
  "ml-1": "",
  "text-sm": "",
  "text-gray-4": ""
}, /* @__PURE__ */ Vue.toDisplayString(11), -1));
const _hoisted_12 = {
  flex: "",
  "mx-3": ""
};
const _hoisted_13 = {
  "ml-1": "",
  "text-sm": "",
  "text-gray-4": ""
};
const _hoisted_14 = { flex: "" };
const _hoisted_15 = {
  flex: "",
  "ml-3": ""
};
const _hoisted_16 = {
  "ml-1": "",
  "text-sm": "",
  "text-gray-4": ""
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "NewsItem",
  props: {
    list: null,
    commentMap: null,
    styleConfig: null
  },
  setup(__props) {
    Gsap.registerPlugin(ScrollTrigger);
    const serverUrl = "http://175.178.99.5:8000/";
    const route = useRoute();
    const router = useRouter();
    const userStore = useUserStore();
    const invitationStore = useInvitationStore();
    const { userInfo } = storeToRefs(userStore);
    const { starredList } = storeToRefs(invitationStore);
    if (userInfo.value.id) {
      invitationStore.findAllStarredInvitation(userInfo.value.id);
    }
    const isStarred = (userId, invitationId) => {
      return starredList.value.some(
        (item) => item.user_id === userId && item.invitation_id === invitationId
      );
    };
    const handleStar = async (invitationId) => {
      if (!userInfo.value.id) {
        ElementPlus.ElNotification({
          title: "\u8BF7\u5148\u767B\u5F55\u518D\u8FDB\u884Cstar",
          type: "info"
        });
      } else {
        const starred = isStarred(userInfo.value.id, invitationId);
        await invitationStore.starOrUnstarInvitationById(
          userInfo.value.id,
          invitationId,
          starred ? 0 : 1
        );
        if (route.path.startsWith("/news")) {
          await invitationStore.getInvitationList();
        } else {
          await invitationStore.getUserPostedInvitation(userInfo.value.id);
        }
        await invitationStore.findAllStarredInvitation(userInfo.value.id);
      }
    };
    const navToNewsDetail = (id) => {
      router.push(`/news_det/${id}`);
    };
    return (_ctx, _cache) => {
      const _component_ElAvatar = Vue.resolveComponent("ElAvatar");
      const _component_ElImage = Vue.resolveComponent("ElImage");
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElTooltip = Vue.resolveComponent("ElTooltip");
      return Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.list, (item, index) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          "my-10": "",
          "p-3": "",
          "border-1": "",
          "border-gray-2": "",
          "bg-white": "",
          "rounded-lg": "",
          style: Vue.normalizeStyle(__props.styleConfig),
          key: item.invitation_id
        }, [
          Vue.createElementVNode("div", { "data-index": index }, [
            Vue.createElementVNode("div", _hoisted_2, [
              Vue.createElementVNode("div", null, [
                Vue.createVNode(_component_ElAvatar, { size: "small" }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode(Vue.toDisplayString(item.userInfo.name.slice(0, 1)), 1)
                  ]),
                  _: 2
                }, 1024),
                Vue.createElementVNode("span", _hoisted_3, Vue.toDisplayString(item.userInfo.name), 1)
              ]),
              Vue.createElementVNode("div", null, [
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(item.tagList, (tag) => {
                  return Vue.openBlock(), Vue.createElementBlock("span", {
                    "text-sm": "",
                    "px-2": "",
                    "py-1": "",
                    "ml-2": "",
                    "first:ml-0": "",
                    "bg-gray-2": "",
                    "rounded-2xl": "",
                    key: tag.id
                  }, Vue.toDisplayString(tag.name), 1);
                }), 128))
              ])
            ]),
            Vue.createElementVNode("div", null, [
              Vue.createElementVNode("div", {
                "cursor-pointer": "",
                onClick: ($event) => navToNewsDetail(item.invitation_id)
              }, [
                Vue.createElementVNode("h3", _hoisted_5, Vue.toDisplayString(item.title), 1),
                Vue.createElementVNode("div", _hoisted_6, [
                  Vue.createElementVNode("div", _hoisted_7, [
                    Vue.createVNode(_component_ElImage, {
                      src: Vue.unref(serverUrl) + item.img,
                      class: "w-full h-full",
                      fit: "cover"
                    }, null, 8, ["src"])
                  ]),
                  Vue.createElementVNode("div", {
                    innerHTML: item.content
                  }, null, 8, _hoisted_8)
                ])
              ], 8, _hoisted_4),
              Vue.createElementVNode("div", _hoisted_9, [
                Vue.createElementVNode("div", _hoisted_10, [
                  Vue.createVNode(_component_ElTooltip, {
                    content: "\u9605\u8BFB\u91CF",
                    placement: "top"
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_component_ElIcon, {
                        size: 18,
                        color: "#9ca3af"
                      }, {
                        default: Vue.withCtx(() => [
                          Vue.createVNode(Vue.unref(mouse_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  _hoisted_11
                ]),
                Vue.createElementVNode("div", _hoisted_12, [
                  Vue.createVNode(_component_ElTooltip, {
                    content: isStarred(Vue.unref(userInfo).id, item.invitation_id) ? "\u53D6\u6D88\u70B9\u8D5E" : "\u70B9\u8D5E",
                    placement: "top"
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_component_ElIcon, {
                        size: 18,
                        onClick: ($event) => handleStar(item.invitation_id),
                        class: "cursor-pointer",
                        color: isStarred(Vue.unref(userInfo).id, item.invitation_id) ? "#f6bf48" : "#9ca3af"
                      }, {
                        default: Vue.withCtx(() => [
                          Vue.unref(userInfo).id && isStarred(Vue.unref(userInfo).id, item.invitation_id) ? (Vue.openBlock(), Vue.createBlock(Vue.unref(star_filled_default), { key: 0 })) : (Vue.openBlock(), Vue.createBlock(Vue.unref(star_default), { key: 1 }))
                        ]),
                        _: 2
                      }, 1032, ["onClick", "color"])
                    ]),
                    _: 2
                  }, 1032, ["content"]),
                  Vue.createElementVNode("span", _hoisted_13, Vue.toDisplayString(item.stars !== 0 ? item.stars : ""), 1)
                ]),
                Vue.createElementVNode("div", _hoisted_14, [
                  Vue.createVNode(_component_ElTooltip, {
                    content: "\u8BC4\u8BBA",
                    placement: "top"
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_component_ElIcon, {
                        size: 18,
                        class: "cursor-pointer",
                        color: "#9ca3af"
                      }, {
                        default: Vue.withCtx(() => [
                          Vue.createVNode(Vue.unref(chat_line_square_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.commentMap, (v, k) => {
                    return Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("span", {
                      key: k,
                      "ml-1": "",
                      "text-sm": "",
                      "text-gray-4": ""
                    }, Vue.toDisplayString(v[1] === 0 ? "" : v[1]), 513)), [
                      [Vue.vShow, v[0] === item.invitation_id]
                    ]);
                  }), 128))
                ]),
                Vue.createElementVNode("div", _hoisted_15, [
                  Vue.createVNode(_component_ElIcon, {
                    size: 18,
                    color: "#9ca3af"
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(Vue.unref(timer_default))
                    ]),
                    _: 1
                  }),
                  Vue.createElementVNode("span", _hoisted_16, Vue.toDisplayString(_ctx.$formatTime.format(item.createAt)), 1)
                ])
              ])
            ])
          ], 8, _hoisted_1)
        ], 4);
      }), 128);
    };
  }
});
const NewsItem_vue_vue_type_style_index_0_scoped_100a9675_lang = "";
const NewsItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-100a9675"]]);
export {
  NewsItem as default
};
