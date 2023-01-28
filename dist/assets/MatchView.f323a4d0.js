import { O as OpRequest, d as defineStore, s as storeToRefs, _ as _export_sfc } from "./index.cdb67bbf.js";
import { g as gsapWithCSS, S as ScrollTrigger } from "./ScrollTrigger.97eaa463.js";
const opReq = new OpRequest({
  baseURL: "http://localhost:8000/"
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
const _withScopeId = (n) => (Vue.pushScopeId("data-v-ad69a2ac"), n = n(), Vue.popScopeId(), n);
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
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const matchStore = useMatchStore();
    const { matchList } = storeToRefs(matchStore);
    matchStore.getMatchThisYear();
    const beforeEnter = (el) => {
      el.style.transform = "translateX(100px)";
      el.style.opacity = "0";
    };
    const enter = (el) => {
      gsapWithCSS.to(el, {
        scrollTrigger: el,
        x: 0,
        opacity: 1,
        duration: 0.5
      });
    };
    return (_ctx, _cache) => {
      const _component_Header = Vue.resolveComponent("Header");
      const _component_TimeCard = Vue.resolveComponent("TimeCard");
      const _component_ElTimelineItem = Vue.resolveComponent("ElTimelineItem");
      const _component_ElTimeline = Vue.resolveComponent("ElTimeline");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_Header),
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
                            Vue.createVNode(_component_TimeCard, { matchInfo: m }, null, 8, ["matchInfo"])
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
const MatchView_vue_vue_type_style_index_0_scoped_ad69a2ac_lang = "";
const MatchView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad69a2ac"]]);
export {
  MatchView as default
};
