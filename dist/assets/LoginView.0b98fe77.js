import { _ as _imports_0 } from "./logo.e6501a95.js";
import { u as useRouter, a as useUserStore, s as storeToRefs } from "./index.6e0e0576.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _withScopeId = (n) => (Vue.pushScopeId("data-v-4c3008d8"), n = n(), Vue.popScopeId(), n);
const _hoisted_1$1 = { class: "w-50 p-3 rounded border-1 border-gray-2 m-auto absolute left-1/2 top-1/2 translate-x--1/2 translate-y--1/2" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("div", {
  flex: "",
  "justify-center": "",
  "my-3": ""
}, [
  /* @__PURE__ */ Vue.createElementVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1));
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "Login",
  setup(__props) {
    const router = useRouter();
    const store = useUserStore();
    const { getToken } = storeToRefs(store);
    const form = Vue.reactive({
      name: "",
      password: ""
    });
    const loginFormRef = Vue.ref();
    const loginRules = Vue.reactive({
      name: [{ required: true, message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", trigger: "blur" }],
      password: [{ required: true, message: "\u8BF7\u8F93\u5165\u5BC6\u7801", trigger: "blur" }]
    });
    const handleSubmit = async (formEl, isLogin) => {
      await (formEl == null ? void 0 : formEl.validate(async (valid, fields) => {
        if (valid) {
          if (isLogin) {
            await store.login(form);
            getToken.value && router.push("/");
          } else {
            store.register(form);
          }
        }
      }));
    };
    return (_ctx, _cache) => {
      const _component_el_input = Vue.resolveComponent("el-input");
      const _component_el_form_item = Vue.resolveComponent("el-form-item");
      const _component_el_button = Vue.resolveComponent("el-button");
      const _component_el_form = Vue.resolveComponent("el-form");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
        _hoisted_2,
        Vue.createVNode(_component_el_form, {
          "label-position": "top",
          model: form,
          ref_key: "loginFormRef",
          ref: loginFormRef,
          rules: loginRules
        }, {
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_el_form_item, {
              label: "\u8D26\u53F7",
              prop: "name"
            }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_el_input, {
                  modelValue: form.name,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.name = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            Vue.createVNode(_component_el_form_item, {
              label: "\u5BC6\u7801",
              prop: "password"
            }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_el_input, {
                  modelValue: form.password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.password = $event),
                  type: "password"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            Vue.createVNode(_component_el_form_item, null, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_el_button, {
                  class: "w-4.8/10",
                  onClick: _cache[2] || (_cache[2] = ($event) => handleSubmit(loginFormRef.value, 0))
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u6CE8\u518C")
                  ]),
                  _: 1
                }),
                Vue.createVNode(_component_el_button, {
                  class: "w-4.8/10",
                  type: "primary",
                  onClick: _cache[3] || (_cache[3] = ($event) => handleSubmit(loginFormRef.value, 1))
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u767B\u5F55")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ]);
    };
  }
});
const Login_vue_vue_type_style_index_0_scoped_4c3008d8_lang = "";
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4c3008d8"]]);
const _hoisted_1 = {
  relative: "",
  style: { "height": "100vh" }
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "LoginView",
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.createVNode(Login)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
