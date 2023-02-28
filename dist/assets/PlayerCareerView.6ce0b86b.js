import { c as useRoute, s as storeToRefs, b as _export_sfc } from "./index.ef5f85cc.js";
import { u as usePlayerStore } from "./player.75088d5b.js";
const _hoisted_1$3 = {
  "text-xl": "",
  "border-b-1": "",
  "border-blue": ""
};
const _sfc_main$3 = /* @__PURE__ */ Vue.defineComponent({
  __name: "PlayerInfo",
  props: {
    title: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", null, [
        Vue.createElementVNode("span", _hoisted_1$3, Vue.toDisplayString(__props.title), 1),
        Vue.renderSlot(_ctx.$slots, "content")
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "flex flex-col items-center w-1/4 mx-2 first:ml-0" };
const _hoisted_2$2 = { "mt-2": "" };
const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
  __name: "EquipmentItem",
  props: {
    equipment: null
  },
  setup(__props) {
    const serverUrl = "http://175.178.99.5:8000/";
    return (_ctx, _cache) => {
      const _component_ElImage = Vue.resolveComponent("ElImage");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$2, [
        Vue.createVNode(_component_ElImage, {
          src: Vue.unref(serverUrl) + __props.equipment.img,
          alt: __props.equipment.name,
          "w-full": ""
        }, null, 8, ["src", "alt"]),
        Vue.createElementVNode("span", _hoisted_2$2, Vue.toDisplayString(__props.equipment.name), 1)
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "w-1/2 flex items-center mt-7" };
const _hoisted_2$1 = { class: "w-5 h-5 rounded-full bg-blue-5 flex items-center justify-center" };
const _hoisted_3$1 = {
  "text-sm": "",
  "text-white": ""
};
const _hoisted_4$1 = {
  "text-sm": "",
  "ml-1": ""
};
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "HonorItem",
  props: {
    honor: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
        Vue.createElementVNode("div", _hoisted_2$1, [
          Vue.createElementVNode("span", _hoisted_3$1, Vue.toDisplayString(__props.honor.year), 1)
        ]),
        Vue.createElementVNode("span", _hoisted_4$1, Vue.toDisplayString(__props.honor.name), 1)
      ]);
    };
  }
});
const _hoisted_1 = { class: "career_page" };
const _hoisted_2 = { class: "player_name" };
const _hoisted_3 = { uppercase: "" };
const _hoisted_4 = { class: "career_page_main" };
const _hoisted_5 = { "text-sm": "" };
const _hoisted_6 = { "mt-30": "" };
const _hoisted_7 = {
  "mt-5": "",
  flex: ""
};
const _hoisted_8 = { "my-30": "" };
const _hoisted_9 = {
  flex: "",
  "justify-between": "",
  "flex-wrap": ""
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "PlayerCareerView",
  setup(__props) {
    const route = useRoute();
    const store = usePlayerStore();
    const serverUrl = "http://175.178.99.5:8000/";
    const { getCurrentPlayer, currentPlayer } = storeToRefs(store);
    store.getTargetPlayer(Number(route.params.id));
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.withDirectives(Vue.createElementVNode("div", {
          class: "w-full h-40",
          style: Vue.normalizeStyle({
            backgroundImage: `url(${Vue.unref(serverUrl) + Vue.unref(getCurrentPlayer).bannerImg})`
          })
        }, null, 4), [
          [Vue.vShow, Vue.unref(currentPlayer).bannerImg]
        ]),
        Vue.createElementVNode("div", _hoisted_2, [
          Vue.createElementVNode("h2", _hoisted_3, Vue.toDisplayString(Vue.unref(getCurrentPlayer).name), 1)
        ]),
        Vue.createElementVNode("div", _hoisted_4, [
          Vue.createVNode(_sfc_main$3, { title: "\u7B80\u4ECB" }, {
            content: Vue.withCtx(() => [
              Vue.createElementVNode("p", _hoisted_5, Vue.toDisplayString(Vue.unref(getCurrentPlayer).description), 1)
            ]),
            _: 1
          }),
          Vue.createElementVNode("div", _hoisted_6, [
            Vue.createVNode(_sfc_main$3, { title: "\u4F7F\u7528\u88C5\u5907" }, {
              content: Vue.withCtx(() => [
                Vue.createElementVNode("div", _hoisted_7, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(getCurrentPlayer).equipmentList, (item) => {
                    return Vue.openBlock(), Vue.createBlock(_sfc_main$2, {
                      key: item.id,
                      equipment: item
                    }, null, 8, ["equipment"]);
                  }), 128))
                ])
              ]),
              _: 1
            })
          ]),
          Vue.createElementVNode("div", _hoisted_8, [
            Vue.createVNode(_sfc_main$3, { title: "\u6210\u5C31" }, {
              content: Vue.withCtx(() => [
                Vue.createElementVNode("div", _hoisted_9, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(getCurrentPlayer).honorList, (item) => {
                    return Vue.openBlock(), Vue.createBlock(_sfc_main$1, {
                      key: item.id,
                      honor: item
                    }, null, 8, ["honor"]);
                  }), 128))
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const PlayerCareerView_vue_vue_type_style_index_0_scoped_b6fc6fab_lang = "";
const PlayerCareerView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6fc6fab"]]);
export {
  PlayerCareerView as default
};
