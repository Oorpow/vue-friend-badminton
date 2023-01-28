import { c as useRoute, s as storeToRefs, _ as _export_sfc } from "./index.cdb67bbf.js";
import { u as usePlayerStore } from "./player.4f8ca736.js";
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
const _hoisted_8 = { "mt-30": "" };
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
    const serverUrl = "http://localhost:8000/";
    const { getCurrentPlayer, currentPlayer } = storeToRefs(store);
    store.getTargetPlayer(Number(route.params.id));
    return (_ctx, _cache) => {
      const _component_PlayerInfo = Vue.resolveComponent("PlayerInfo");
      const _component_EquipmentItem = Vue.resolveComponent("EquipmentItem");
      const _component_HonorItem = Vue.resolveComponent("HonorItem");
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
          Vue.createVNode(_component_PlayerInfo, { title: "\u7B80\u4ECB" }, {
            content: Vue.withCtx(() => [
              Vue.createElementVNode("p", _hoisted_5, Vue.toDisplayString(Vue.unref(getCurrentPlayer).description), 1)
            ]),
            _: 1
          }),
          Vue.createElementVNode("div", _hoisted_6, [
            Vue.createVNode(_component_PlayerInfo, { title: "\u4F7F\u7528\u88C5\u5907" }, {
              content: Vue.withCtx(() => [
                Vue.createElementVNode("div", _hoisted_7, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(getCurrentPlayer).equipmentList, (item) => {
                    return Vue.openBlock(), Vue.createBlock(_component_EquipmentItem, {
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
            Vue.createVNode(_component_PlayerInfo, { title: "\u6210\u5C31" }, {
              content: Vue.withCtx(() => [
                Vue.createElementVNode("div", _hoisted_9, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(getCurrentPlayer).honorList, (item) => {
                    return Vue.openBlock(), Vue.createBlock(_component_HonorItem, {
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
const PlayerCareerView_vue_vue_type_style_index_0_scoped_8cc80c14_lang = "";
const PlayerCareerView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8cc80c14"]]);
export {
  PlayerCareerView as default
};
