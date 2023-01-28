import { b as _export_sfc } from "./index.691cbf00.js";
const _hoisted_1 = { "min-h-60": "" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "NewsList",
  props: {
    list: { default: () => [] },
    commentMap: { default: /* @__PURE__ */ new Map() }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_NewsItem = Vue.resolveComponent("NewsItem");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.createVNode(_component_NewsItem, {
          list: __props.list,
          commentMap: __props.commentMap
        }, null, 8, ["list", "commentMap"])
      ]);
    };
  }
});
const NewsList_vue_vue_type_style_index_0_scoped_6febe2f0_lang = "";
const NewsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6febe2f0"]]);
export {
  NewsList as default
};
