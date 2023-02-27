import NewsItem from "./NewsItem.c188736a.js";
import { b as _export_sfc } from "./index.f69fc1f9.js";
import "./Header.a777a42f.js";
const _hoisted_1 = { "min-h-60": "" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "NewsList",
  props: {
    list: { default: () => [] },
    commentMap: { default: /* @__PURE__ */ new Map() }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.createVNode(NewsItem, {
          list: __props.list,
          commentMap: __props.commentMap
        }, null, 8, ["list", "commentMap"])
      ]);
    };
  }
});
const NewsList_vue_vue_type_style_index_0_scoped_5a0d9787_lang = "";
const NewsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a0d9787"]]);
export {
  NewsList as default
};
