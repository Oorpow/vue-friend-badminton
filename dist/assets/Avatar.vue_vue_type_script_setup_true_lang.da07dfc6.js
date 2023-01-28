const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "Avatar",
  props: {
    username: null,
    avatar: null,
    configStyle: null,
    size: { default: 35 }
  },
  setup(__props) {
    const serverUrl = "http://175.178.99.5:8000/";
    return (_ctx, _cache) => {
      const _component_ElAvatar = Vue.resolveComponent("ElAvatar");
      return Vue.openBlock(), Vue.createElementBlock("div", null, [
        !__props.avatar ? (Vue.openBlock(), Vue.createBlock(_component_ElAvatar, {
          key: 0,
          style: Vue.normalizeStyle(__props.configStyle),
          size: __props.size
        }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode(Vue.toDisplayString(__props.username && __props.username.slice(0, 1)), 1)
          ]),
          _: 1
        }, 8, ["style", "size"])) : (Vue.openBlock(), Vue.createBlock(_component_ElAvatar, {
          key: 1,
          style: Vue.normalizeStyle(__props.configStyle),
          size: __props.size,
          src: Vue.unref(serverUrl) + __props.avatar
        }, null, 8, ["style", "size", "src"]))
      ]);
    };
  }
});
export {
  _sfc_main as _
};
