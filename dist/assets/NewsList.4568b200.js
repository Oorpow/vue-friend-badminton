import NewsItem from "./NewsItem.6ac0d974.js";
import { b as _export_sfc } from "./index.a1ce5fd2.js";
import "./Header.9e0cb1ea.js";
const _hoisted_1 = { "min-h-60": "" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "NewsList",
  props: {
    list: { default: () => [] },
    commentMap: { default: /* @__PURE__ */ new Map() }
  },
  setup(__props) {
    const styleConfig = {
      width: "90%",
      height: "380px",
      marginRight: "2%"
    };
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.createVNode(NewsItem, {
          list: __props.list,
          commentMap: __props.commentMap,
          "style-config": styleConfig
        }, null, 8, ["list", "commentMap"])
      ]);
    };
  }
});
const NewsList_vue_vue_type_style_index_0_scoped_3982c556_lang = "";
const NewsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3982c556"]]);
export {
  NewsList as default
};
