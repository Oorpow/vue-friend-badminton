import { H as Header } from "./Header.58a9dbd0.js";
import { O as OpRequest, d as defineStore, s as storeToRefs, b as _export_sfc } from "./index.5ac02f08.js";
import { S as ScrollTrigger } from "./ScrollTrigger.5e0458ee.js";
import "./index.34529f81.js";
import "./friend.56b8a794.js";
import "./message.3bd76c1c.js";
import "./invitation.e3cd3dac.js";
const _hoisted_1$1 = {
  flex: "",
  "h-20": "",
  "shadow-xl": ""
};
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = {
  "bg-black": "",
  relative: "",
  flex: "",
  "flex-1": "",
  "items-center": ""
};
const _hoisted_4 = {
  absolute: "",
  "inset-0": "",
  "overflow-hidden": "",
  "z-1": ""
};
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "w-9/10 px-3 absolute z-2" };
const _hoisted_7 = {
  block: "",
  "text-white": "",
  "font-bold": "",
  "text-lg": ""
};
const _hoisted_8 = {
  block: "",
  "mt-5": "",
  "text-white": ""
};
const _hoisted_9 = {
  absolute: "",
  "top-0": "",
  "right-0": "",
  uppercase: "",
  "bg-red-6": "",
  "text-white": "",
  "font-bold": "",
  "p-3": "",
  "z-2": ""
};
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "TimeCard",
  props: {
    matchInfo: null
  },
  setup(__props) {
    const props = __props;
    const computeMatchBg = Vue.computed(() => {
      let url = "https://extranet.bwfbadminton.com/images/player-hero-01.jpg";
      if (props.matchInfo.header_url) {
        url = props.matchInfo.header_url;
      }
      return url;
    });
    console.log(props.matchInfo);
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
        Vue.createElementVNode("div", null, [
          Vue.createElementVNode("img", {
            src: __props.matchInfo.logo,
            "w-20": "",
            "h-20": ""
          }, null, 8, _hoisted_2$1)
        ]),
        Vue.createElementVNode("div", _hoisted_3$1, [
          Vue.createElementVNode("div", _hoisted_4, [
            Vue.createElementVNode("img", {
              src: Vue.unref(computeMatchBg),
              alt: "bwf",
              "w-full": "",
              "h-full": ""
            }, null, 8, _hoisted_5)
          ]),
          Vue.createElementVNode("div", _hoisted_6, [
            Vue.createElementVNode("span", _hoisted_7, Vue.toDisplayString(__props.matchInfo.name), 1),
            Vue.createElementVNode("span", _hoisted_8, Vue.toDisplayString(__props.matchInfo.location), 1)
          ]),
          Vue.createElementVNode("div", _hoisted_9, Vue.toDisplayString(__props.matchInfo.date), 1)
        ])
      ]);
    };
  }
});
const opReq = new OpRequest({
  baseURL: "http://175.178.99.5:8000/"
});
const getMatchInfo = () => opReq.post({
  url: "https://extranet-lv.bwfbadminton.com/api/vue-cal-event-tournaments",
  method: "post",
  data: {
    yearKey: "2023"
  },
  headers: {
    Authorization: `Bearer 2|NaXRu9JnMpSdb8l86BkJxj6gzKJofnhmExwr8EWkQtHoattDAGimsSYhpM22a61e1crjTjfIGTKfhzxA`
  }
});
const useMatchStore = defineStore("matchStore", {
  state: () => ({
    matchList: []
  }),
  actions: {
    async getMatchThisYear() {
      const res = await getMatchInfo();
      const result = [];
      Object.entries(res.results).forEach((item, i) => {
        result[i] = {
          month: "",
          matchList: []
        };
        result[i].month = item[0];
        Object.values(item[1]).forEach((a) => {
          result[i].matchList.push(a);
        });
      });
      this.matchList.length = 0;
      this.matchList.push(...result);
    }
  }
});
const _withScopeId = (n) => (Vue.pushScopeId("data-v-58190390"), n = n(), Vue.popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("div", { relative: "" }, [
  /* @__PURE__ */ Vue.createElementVNode("div", { class: "view_bg" }),
  /* @__PURE__ */ Vue.createElementVNode("div", { class: "absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2" }, [
    /* @__PURE__ */ Vue.createElementVNode("h2", { "text-white": "" }, "\u5373\u5C06\u5230\u6765\u7684\u8D5B\u4E8B")
  ])
], -1));
const _hoisted_2 = { class: "w-8/10 mx-auto my-10" };
const _hoisted_3 = { uppercase: "" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "MatchView",
  setup(__props) {
    Gsap.registerPlugin(ScrollTrigger);
    const matchStore = useMatchStore();
    const { matchList } = storeToRefs(matchStore);
    matchStore.getMatchThisYear();
    const beforeEnter = (el) => {
      el.style.transform = "translateX(100px)";
      el.style.opacity = "0";
    };
    const enter = (el) => {
      Gsap.to(el, {
        scrollTrigger: el,
        x: 0,
        opacity: 1,
        duration: 0.5
      });
    };
    return (_ctx, _cache) => {
      const _component_ElTimelineItem = Vue.resolveComponent("ElTimelineItem");
      const _component_ElTimeline = Vue.resolveComponent("ElTimeline");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(Header),
        _hoisted_1,
        Vue.createElementVNode("div", _hoisted_2, [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(matchList), (item) => {
            return Vue.openBlock(), Vue.createElementBlock("div", {
              class: "w-2/3 mx-auto",
              key: item.month
            }, [
              Vue.createElementVNode("h3", _hoisted_3, Vue.toDisplayString(item.month), 1),
              Vue.createVNode(_component_ElTimeline, null, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(Vue.TransitionGroup, {
                    appear: "",
                    onBeforeEnter: beforeEnter,
                    onEnter: enter
                  }, {
                    default: Vue.withCtx(() => [
                      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(item.matchList, (m) => {
                        return Vue.openBlock(), Vue.createBlock(_component_ElTimelineItem, {
                          key: m.url,
                          placement: "top",
                          color: "#409EFF"
                        }, {
                          default: Vue.withCtx(() => [
                            Vue.createVNode(_sfc_main$1, { matchInfo: m }, null, 8, ["matchInfo"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
});
const MatchView_vue_vue_type_style_index_0_scoped_58190390_lang = "";
const MatchView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58190390"]]);
export {
  MatchView as default
};
