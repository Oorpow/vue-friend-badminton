import { b as _export_sfc, u as useRouter, a as useUserStore, s as storeToRefs, o as opRequest, d as defineStore, _ as _imports_0 } from "./index.a1ce5fd2.js";
const _sfc_main$5 = /* @__PURE__ */ Vue.defineComponent({
  __name: "Avatar",
  props: {
    username: null,
    avatar: null,
    configStyle: null,
    size: { default: 35 },
    shape: { default: "circle" }
  },
  setup(__props) {
    const serverUrl = "http://175.178.99.5:8000/";
    return (_ctx, _cache) => {
      const _component_ElAvatar = Vue.resolveComponent("ElAvatar");
      return Vue.openBlock(), Vue.createElementBlock("div", null, [
        !__props.avatar ? (Vue.openBlock(), Vue.createBlock(_component_ElAvatar, {
          key: 0,
          style: Vue.normalizeStyle(__props.configStyle),
          size: __props.size,
          shape: __props.shape
        }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode(Vue.toDisplayString(__props.username && __props.username.slice(0, 1)), 1)
          ]),
          _: 1
        }, 8, ["style", "size", "shape"])) : (Vue.openBlock(), Vue.createBlock(_component_ElAvatar, {
          key: 1,
          style: Vue.normalizeStyle(__props.configStyle),
          size: __props.size,
          src: Vue.unref(serverUrl) + __props.avatar
        }, null, 8, ["style", "size", "src"]))
      ]);
    };
  }
});
const _sfc_main$4 = {};
const _hoisted_1$4 = { class: "" };
const _hoisted_2$2 = /* @__PURE__ */ Vue.createElementVNode("h5", {
  "m-0": "",
  "p-3": "",
  "border-b-1": "",
  "border-gray-3": "",
  "text-gray-5": "",
  "dark:border-zinc-700": ""
}, " \u7528\u6237 ", -1);
function _sfc_render(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$4, [
    Vue.renderSlot(_ctx.$slots, "title", {}, () => [
      _hoisted_2$2
    ]),
    Vue.renderSlot(_ctx.$slots, "content")
  ]);
}
const SearchResultItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
/*! Element Plus Icons Vue v2.0.10 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var arrow_down_vue_vue_type_script_lang_default = {
  name: "ArrowDown"
};
var _hoisted_16$1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_26 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), _hoisted_36 = [
  _hoisted_26
];
function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_16$1, _hoisted_36);
}
var arrow_down_default = /* @__PURE__ */ export_helper_default(arrow_down_vue_vue_type_script_lang_default, [["render", _sfc_render6], ["__file", "arrow-down.vue"]]);
var bell_vue_vue_type_script_lang_default = {
  name: "Bell"
};
var _hoisted_118 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_218 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), _hoisted_318 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), _hoisted_46 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1), _hoisted_52 = [
  _hoisted_218,
  _hoisted_318,
  _hoisted_46
];
function _sfc_render18(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_118, _hoisted_52);
}
var bell_default = /* @__PURE__ */ export_helper_default(bell_vue_vue_type_script_lang_default, [["render", _sfc_render18], ["__file", "bell.vue"]]);
var calendar_vue_vue_type_script_lang_default = {
  name: "Calendar"
};
var _hoisted_129 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_229 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), _hoisted_328 = [
  _hoisted_229
];
function _sfc_render29(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_129, _hoisted_328);
}
var calendar_default = /* @__PURE__ */ export_helper_default(calendar_vue_vue_type_script_lang_default, [["render", _sfc_render29], ["__file", "calendar.vue"]]);
var camera_vue_vue_type_script_lang_default = {
  name: "Camera"
};
var _hoisted_131 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_231 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1), _hoisted_330 = [
  _hoisted_231
];
function _sfc_render31(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_131, _hoisted_330);
}
var camera_default = /* @__PURE__ */ export_helper_default(camera_vue_vue_type_script_lang_default, [["render", _sfc_render31], ["__file", "camera.vue"]]);
var chat_line_square_vue_vue_type_script_lang_default = {
  name: "ChatLineSquare"
};
var _hoisted_140 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_240 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), _hoisted_339 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), _hoisted_413 = [
  _hoisted_240,
  _hoisted_339
];
function _sfc_render40(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_140, _hoisted_413);
}
var chat_line_square_default = /* @__PURE__ */ export_helper_default(chat_line_square_vue_vue_type_script_lang_default, [["render", _sfc_render40], ["__file", "chat-line-square.vue"]]);
var chat_round_vue_vue_type_script_lang_default = {
  name: "ChatRound"
};
var _hoisted_141 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_241 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1), _hoisted_340 = [
  _hoisted_241
];
function _sfc_render41(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_141, _hoisted_340);
}
var chat_round_default = /* @__PURE__ */ export_helper_default(chat_round_vue_vue_type_script_lang_default, [["render", _sfc_render41], ["__file", "chat-round.vue"]]);
var circle_plus_vue_vue_type_script_lang_default = {
  name: "CirclePlus"
};
var _hoisted_153 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_253 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), _hoisted_352 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1), _hoisted_417 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_55 = [
  _hoisted_253,
  _hoisted_352,
  _hoisted_417
];
function _sfc_render53(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_153, _hoisted_55);
}
var circle_plus_default = /* @__PURE__ */ export_helper_default(circle_plus_vue_vue_type_script_lang_default, [["render", _sfc_render53], ["__file", "circle-plus.vue"]]);
var document_vue_vue_type_script_lang_default = {
  name: "Document"
};
var _hoisted_190 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_290 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), _hoisted_389 = [
  _hoisted_290
];
function _sfc_render90(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_190, _hoisted_389);
}
var document_default = /* @__PURE__ */ export_helper_default(document_vue_vue_type_script_lang_default, [["render", _sfc_render90], ["__file", "document.vue"]]);
var edit_pen_vue_vue_type_script_lang_default = {
  name: "EditPen"
};
var _hoisted_193 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_293 = /* @__PURE__ */ Vue.createElementVNode("path", {
  d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
  fill: "currentColor"
}, null, -1), _hoisted_392 = [
  _hoisted_293
];
function _sfc_render93(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_193, _hoisted_392);
}
var edit_pen_default = /* @__PURE__ */ export_helper_default(edit_pen_vue_vue_type_script_lang_default, [["render", _sfc_render93], ["__file", "edit-pen.vue"]]);
var edit_vue_vue_type_script_lang_default = {
  name: "Edit"
};
var _hoisted_194 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_294 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), _hoisted_393 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1), _hoisted_431 = [
  _hoisted_294,
  _hoisted_393
];
function _sfc_render94(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_194, _hoisted_431);
}
var edit_default = /* @__PURE__ */ export_helper_default(edit_vue_vue_type_script_lang_default, [["render", _sfc_render94], ["__file", "edit.vue"]]);
var filter_vue_vue_type_script_lang_default = {
  name: "Filter"
};
var _hoisted_1103 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2103 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1), _hoisted_3102 = [
  _hoisted_2103
];
function _sfc_render103(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1103, _hoisted_3102);
}
var filter_default = /* @__PURE__ */ export_helper_default(filter_vue_vue_type_script_lang_default, [["render", _sfc_render103], ["__file", "filter.vue"]]);
var home_filled_vue_vue_type_script_lang_default = {
  name: "HomeFilled"
};
var _hoisted_1135 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2135 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1), _hoisted_3134 = [
  _hoisted_2135
];
function _sfc_render135(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1135, _hoisted_3134);
}
var home_filled_default = /* @__PURE__ */ export_helper_default(home_filled_vue_vue_type_script_lang_default, [["render", _sfc_render135], ["__file", "home-filled.vue"]]);
var message_vue_vue_type_script_lang_default = {
  name: "Message"
};
var _hoisted_1165 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2165 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1), _hoisted_3164 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1), _hoisted_447 = [
  _hoisted_2165,
  _hoisted_3164
];
function _sfc_render165(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1165, _hoisted_447);
}
var message_default = /* @__PURE__ */ export_helper_default(message_vue_vue_type_script_lang_default, [["render", _sfc_render165], ["__file", "message.vue"]]);
var moon_vue_vue_type_script_lang_default = {
  name: "Moon"
};
var _hoisted_1173 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2173 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1), _hoisted_3172 = [
  _hoisted_2173
];
function _sfc_render173(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1173, _hoisted_3172);
}
var moon_default = /* @__PURE__ */ export_helper_default(moon_vue_vue_type_script_lang_default, [["render", _sfc_render173], ["__file", "moon.vue"]]);
var operation_vue_vue_type_script_lang_default = {
  name: "Operation"
};
var _hoisted_1187 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2187 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1), _hoisted_3186 = [
  _hoisted_2187
];
function _sfc_render187(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1187, _hoisted_3186);
}
var operation_default = /* @__PURE__ */ export_helper_default(operation_vue_vue_type_script_lang_default, [["render", _sfc_render187], ["__file", "operation.vue"]]);
var picture_vue_vue_type_script_lang_default = {
  name: "Picture"
};
var _hoisted_1197 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2197 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3196 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1), _hoisted_460 = [
  _hoisted_2197,
  _hoisted_3196
];
function _sfc_render197(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1197, _hoisted_460);
}
var picture_default = /* @__PURE__ */ export_helper_default(picture_vue_vue_type_script_lang_default, [["render", _sfc_render197], ["__file", "picture.vue"]]);
var plus_vue_vue_type_script_lang_default = {
  name: "Plus"
};
var _hoisted_1201 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2201 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), _hoisted_3200 = [
  _hoisted_2201
];
function _sfc_render201(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1201, _hoisted_3200);
}
var plus_default = /* @__PURE__ */ export_helper_default(plus_vue_vue_type_script_lang_default, [["render", _sfc_render201], ["__file", "plus.vue"]]);
var search_vue_vue_type_script_lang_default = {
  name: "Search"
};
var _hoisted_1225 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2225 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), _hoisted_3224 = [
  _hoisted_2225
];
function _sfc_render225(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1225, _hoisted_3224);
}
var search_default = /* @__PURE__ */ export_helper_default(search_vue_vue_type_script_lang_default, [["render", _sfc_render225], ["__file", "search.vue"]]);
var setting_vue_vue_type_script_lang_default = {
  name: "Setting"
};
var _hoisted_1231 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2231 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1), _hoisted_3230 = [
  _hoisted_2231
];
function _sfc_render231(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1231, _hoisted_3230);
}
var setting_default = /* @__PURE__ */ export_helper_default(setting_vue_vue_type_script_lang_default, [["render", _sfc_render231], ["__file", "setting.vue"]]);
var star_filled_vue_vue_type_script_lang_default = {
  name: "StarFilled"
};
var _hoisted_1246 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2246 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1), _hoisted_3245 = [
  _hoisted_2246
];
function _sfc_render246(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1246, _hoisted_3245);
}
var star_filled_default = /* @__PURE__ */ export_helper_default(star_filled_vue_vue_type_script_lang_default, [["render", _sfc_render246], ["__file", "star-filled.vue"]]);
var star_vue_vue_type_script_lang_default = {
  name: "Star"
};
var _hoisted_1247 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2247 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1), _hoisted_3246 = [
  _hoisted_2247
];
function _sfc_render247(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1247, _hoisted_3246);
}
var star_default = /* @__PURE__ */ export_helper_default(star_vue_vue_type_script_lang_default, [["render", _sfc_render247], ["__file", "star.vue"]]);
var sunny_vue_vue_type_script_lang_default = {
  name: "Sunny"
};
var _hoisted_1253 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2253 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1), _hoisted_3252 = [
  _hoisted_2253
];
function _sfc_render253(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1253, _hoisted_3252);
}
var sunny_default = /* @__PURE__ */ export_helper_default(sunny_vue_vue_type_script_lang_default, [["render", _sfc_render253], ["__file", "sunny.vue"]]);
var switch_vue_vue_type_script_lang_default = {
  name: "Switch"
};
var _hoisted_1258 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2258 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1), _hoisted_3257 = [
  _hoisted_2258
];
function _sfc_render258(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1258, _hoisted_3257);
}
var switch_default = /* @__PURE__ */ export_helper_default(switch_vue_vue_type_script_lang_default, [["render", _sfc_render258], ["__file", "switch.vue"]]);
var timer_vue_vue_type_script_lang_default = {
  name: "Timer"
};
var _hoisted_1262 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2262 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), _hoisted_3261 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_479 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1), _hoisted_522 = [
  _hoisted_2262,
  _hoisted_3261,
  _hoisted_479
];
function _sfc_render262(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1262, _hoisted_522);
}
var timer_default = /* @__PURE__ */ export_helper_default(timer_vue_vue_type_script_lang_default, [["render", _sfc_render262], ["__file", "timer.vue"]]);
var user_vue_vue_type_script_lang_default = {
  name: "User"
};
var _hoisted_1277 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2277 = /* @__PURE__ */ Vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1), _hoisted_3276 = [
  _hoisted_2277
];
function _sfc_render277(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1277, _hoisted_3276);
}
var user_default = /* @__PURE__ */ export_helper_default(user_vue_vue_type_script_lang_default, [["render", _sfc_render277], ["__file", "user.vue"]]);
const _withScopeId$1 = (n) => (Vue.pushScopeId("data-v-03aa56d8"), n = n(), Vue.popScopeId(), n);
const _hoisted_1$3 = { class: "result_box w-full absolute z-9 bg-white dark:bg-zinc-900 rounded shadow-2xl rounded-t-none h-51 overflow-y-scroll" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = {
  "ml-2": "",
  "text-sm": ""
};
const _hoisted_4$1 = {
  key: 1,
  block: "",
  "mt-2": "",
  "p-3": "",
  "text-sm": "",
  "text-gray-5": ""
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ Vue.createElementVNode("h5", {
  "m-0": "",
  "p-3": "",
  "border-b-1": "",
  "border-gray-3": "",
  "dark:border-zinc-700": "",
  "text-gray-5": ""
}, " \u5E16\u5B50 ", -1));
const _hoisted_6$1 = ["onClick"];
const _hoisted_7$1 = {
  "ml-2": "",
  "text-sm": "",
  truncate: "",
  class: "w-2/3"
};
const _hoisted_8$1 = {
  key: 1,
  block: "",
  "mt-2": "",
  "p-3": "",
  "text-sm": "",
  "text-gray-5": ""
};
const _sfc_main$3 = /* @__PURE__ */ Vue.defineComponent({
  __name: "SearchBox",
  props: {
    modelValue: { default: "" },
    invitationList: { default: () => [] },
    userList: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const router = useRouter();
    const serverUrl = "http://175.178.99.5:8000/";
    let showSearchResult = Vue.ref(false);
    const handleSearch = (e) => {
      emits("update:modelValue", e);
      showSearchResult.value = e.trim() !== "";
    };
    const navToTargetRoute = (id, type) => {
      router.push({
        path: `/${type}/${id}`
      });
      showSearchResult.value = false;
      emits("update:modelValue", "");
    };
    return (_ctx, _cache) => {
      const _component_ElInput = Vue.resolveComponent("ElInput");
      const _component_ElImage = Vue.resolveComponent("ElImage");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_ElInput, {
          class: "search_input",
          "suffix-icon": Vue.unref(search_default),
          "model-value": __props.modelValue,
          onInput: handleSearch
        }, null, 8, ["suffix-icon", "model-value"]),
        Vue.withDirectives(Vue.createElementVNode("div", _hoisted_1$3, [
          Vue.createVNode(SearchResultItem, null, {
            content: Vue.withCtx(() => [
              __props.userList.length ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(__props.userList, (user) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  "p-3": "",
                  "my-3": "",
                  flex: "",
                  "items-center": "",
                  "cursor-pointer": "",
                  "hover:bg-gray-2": "",
                  "hover:dark:bg-zinc-800": "",
                  key: user.id,
                  onClick: ($event) => navToTargetRoute(user.id, "space")
                }, [
                  Vue.createVNode(_sfc_main$5, {
                    username: user.name,
                    avatar: user.avatar
                  }, null, 8, ["username", "avatar"]),
                  Vue.createElementVNode("span", _hoisted_3$1, Vue.toDisplayString(user.name), 1)
                ], 8, _hoisted_2$1);
              }), 128)) : (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_4$1, "\u6CA1\u6709\u5339\u914D\u7684\u7ED3\u679C"))
            ]),
            _: 1
          }),
          Vue.createVNode(SearchResultItem, null, {
            title: Vue.withCtx(() => [
              _hoisted_5$1
            ]),
            content: Vue.withCtx(() => [
              __props.invitationList.length ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(__props.invitationList, (item) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  class: "my-3 flex items-center justify-between cursor-pointer hover:bg-gray-2 hover:dark:bg-zinc-800",
                  key: item.id,
                  onClick: ($event) => navToTargetRoute(item.id, "news_det")
                }, [
                  Vue.createElementVNode("span", _hoisted_7$1, Vue.toDisplayString(item.title), 1),
                  Vue.createVNode(_component_ElImage, {
                    src: Vue.unref(serverUrl) + item.img,
                    style: { "width": "90px", "height": "70px" }
                  }, null, 8, ["src"])
                ], 8, _hoisted_6$1);
              }), 128)) : (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_8$1, "\u6CA1\u6709\u5339\u914D\u7684\u7ED3\u679C"))
            ]),
            _: 1
          })
        ], 512), [
          [Vue.vShow, Vue.unref(showSearchResult)]
        ])
      ], 64);
    };
  }
});
const SearchBox_vue_vue_type_style_index_0_scoped_03aa56d8_lang = "";
const SearchBox = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-03aa56d8"]]);
const _hoisted_1$2 = { "mx-4": "" };
const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
  __name: "SettingOptions",
  props: {
    username: null,
    avatar: null
  },
  setup(__props) {
    const socket = Vue.inject("socket");
    const router = useRouter();
    const userStore = useUserStore();
    const { userInfo } = storeToRefs(userStore);
    const dropdownList = [
      {
        id: 1,
        iconName: edit_pen_default,
        path: "/produce",
        title: "\u6295\u7A3F"
      },
      {
        id: 2,
        iconName: chat_round_default,
        path: "/message",
        title: "\u804A\u5929\u5BA4"
      },
      {
        id: 3,
        iconName: user_default,
        path: `/space/${userInfo.value.id}`,
        title: "\u4E2A\u4EBA\u4E2D\u5FC3"
      }
    ];
    const navToTargetRoute = (path) => {
      router.push(path);
    };
    const userLogout = async () => {
      let name = userInfo.value.name;
      await userStore.logout(userInfo.value.id);
      socket.emit("offline", name);
      router.replace("/");
    };
    return (_ctx, _cache) => {
      const _component_ElDropdownItem = Vue.resolveComponent("ElDropdownItem");
      const _component_ElDropdownMenu = Vue.resolveComponent("ElDropdownMenu");
      const _component_ElDropdown = Vue.resolveComponent("ElDropdown");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$2, [
        Vue.createVNode(_component_ElDropdown, null, {
          dropdown: Vue.withCtx(() => [
            Vue.createVNode(_component_ElDropdownMenu, null, {
              default: Vue.withCtx(() => [
                (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(dropdownList, (item) => {
                  return Vue.createVNode(_component_ElDropdownItem, {
                    key: item.id,
                    icon: item.iconName,
                    onClick: ($event) => navToTargetRoute(item.path)
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode(Vue.toDisplayString(item.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["icon", "onClick"]);
                }), 64)),
                Vue.createVNode(_component_ElDropdownItem, {
                  icon: Vue.unref(switch_default),
                  divided: "",
                  onClick: userLogout
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u5207\u6362\u8D26\u53F7")
                  ]),
                  _: 1
                }, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          default: Vue.withCtx(() => [
            Vue.createVNode(_sfc_main$5, {
              username: __props.username,
              avatar: __props.avatar
            }, null, 8, ["username", "avatar"])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$1 = {
  "cursor-pointer": "",
  "ml-3": ""
};
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "NotifyMessage",
  props: {
    receiveList: null,
    unreadNums: null
  },
  setup(__props) {
    const router = useRouter();
    const navToMessage = () => {
      router.push("/message");
    };
    return (_ctx, _cache) => {
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElBadge = Vue.resolveComponent("ElBadge");
      const _component_ElDropdownItem = Vue.resolveComponent("ElDropdownItem");
      const _component_ElDropdownMenu = Vue.resolveComponent("ElDropdownMenu");
      const _component_ElDropdown = Vue.resolveComponent("ElDropdown");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
        Vue.createVNode(_component_ElDropdown, null, {
          dropdown: Vue.withCtx(() => [
            Vue.createVNode(_component_ElDropdownMenu, null, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_ElDropdownItem, {
                  onClick: navToMessage,
                  icon: Vue.unref(circle_plus_default)
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode(Vue.toDisplayString(__props.receiveList.length === 0 ? "\u6682\u65E0" : `${__props.receiveList.length}\u4E2A`) + "\u597D\u53CB\u8BF7\u6C42 ", 1)
                  ]),
                  _: 1
                }, 8, ["icon"]),
                Vue.createVNode(_component_ElDropdownItem, {
                  onClick: navToMessage,
                  icon: Vue.unref(message_default)
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode(Vue.toDisplayString(__props.unreadNums === 0 ? "\u6682\u65E0\u672A\u8BFB\u4FE1\u606F" : `\u4F60\u6709${__props.unreadNums}\u6761\u65B0\u7684\u4FE1\u606F`), 1)
                  ]),
                  _: 1
                }, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_ElBadge, {
              "is-dot": __props.receiveList.length !== 0 || __props.unreadNums !== 0
            }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_ElIcon, { size: 24 }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(Vue.unref(bell_default))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["is-dot"])
          ]),
          _: 1
        })
      ]);
    };
  }
});
var _a;
const isClient = typeof window !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : VueDemi.unref(r);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = VueDemi.ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: VueDemi.readonly(isActive), pause, resume, eventFilter };
}
({
  mounted: VueDemi.isVue3 ? "mounted" : "inserted",
  updated: VueDemi.isVue3 ? "updated" : "componentUpdated",
  unmounted: VueDemi.isVue3 ? "unmounted" : "unbind"
});
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (VueDemi.getCurrentScope()) {
    VueDemi.onScopeDispose(fn);
    return true;
  }
  return false;
}
function resolveRef(r) {
  return typeof r === "function" ? VueDemi.computed(r) : VueDemi.ref(r);
}
function tryOnMounted(fn, sync = true) {
  if (VueDemi.getCurrentInstance())
    VueDemi.onMounted(fn);
  else if (sync)
    fn();
  else
    VueDemi.nextTick(fn);
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return VueDemi.watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = VueDemi.watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = VueDemi.ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = VueDemi.ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  VueDemi.watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$m.call(b, prop))
      __defNormalProp$k(a, prop, b[prop]);
  if (__getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(b)) {
      if (__propIsEnum$m.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? VueDemi.shallowRef : VueDemi.ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (isFunction(mergeDefaults))
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return __spreadValues$k(__spreadValues$k({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        VueDemi.nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto
  } = options;
  const modes = __spreadValues$j({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window: window2 });
  const preferredMode = VueDemi.computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? VueDemi.ref(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state = VueDemi.computed({
    get() {
      return store.value === "auto" && !emitAuto ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window2 == null ? void 0 : window2.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a2;
    const resolvedMode = mode === "auto" ? preferredMode.value : mode;
    updateHTMLAttrs(selector, attribute, (_a2 = modes[resolvedMode]) != null ? _a2 : resolvedMode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  VueDemi.watch(state, onChanged, { flush: "post", immediate: true });
  if (emitAuto)
    VueDemi.watch(preferredMode, () => onChanged(state.value), { flush: "post" });
  tryOnMounted(() => onChanged(state.value));
  return state;
}
var __defProp$i = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$i({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a2;
      if (options.onChanged)
        (_a2 = options.onChanged) == null ? void 0 : _a2.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window: window2 });
  const isDark = VueDemi.computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const getAllFriendById = (id) => opRequest.get({
  url: `/friend/${id}`
});
const getAllFriendReqById = (id) => opRequest.get({
  url: `/friend/${id}/req`
});
const getAllFriendReceiveById = (id) => opRequest.get({
  url: `/friend/${id}/receive`
});
const sendFriendReq = (fromUid, toUid) => opRequest.post({
  url: "/friend/send-req",
  data: {
    fromUid,
    toUid
  }
});
const useFriendStore = defineStore("friendStore", {
  state: () => ({
    friendList: [],
    friendReqList: [],
    friendReceiveList: [],
    friendBellList: [],
    friendListBySearch: []
  }),
  actions: {
    async getFriendListById(id) {
      const res = await getAllFriendById(id);
      this.friendList.length = 0;
      this.friendList.push(...res.data);
    },
    async sendReqToFriend(fromUid, toUid) {
      const res = await sendFriendReq(fromUid, toUid);
      if (res.code === 200) {
        ElementPlus.ElNotification({
          title: "\u597D\u53CB\u7533\u8BF7\u53D1\u9001\u6210\u529F",
          type: "success"
        });
      }
    },
    async getFriendReqList(id) {
      const res = await getAllFriendReqById(id);
      this.friendReqList.length = 0;
      this.friendReqList.push(...res.data);
    },
    async getFriendReceiveList(id) {
      const res = await getAllFriendReceiveById(id);
      this.friendReceiveList.length = 0;
      this.friendReceiveList.push(...res.data);
    },
    async getFriendReceiveUnHandle(id) {
      await this.getFriendReceiveList(id);
      const result = this.friendReceiveList.filter((item) => item.status === 0);
      this.friendBellList = result;
    },
    async getFriendBySearch(id, name) {
      await this.getFriendListById(id);
      const result = this.friendList.filter(
        (item) => item.friendInfo.name.includes(name)
      );
      this.friendListBySearch.length = 0;
      this.friendListBySearch.push(...result);
    }
  },
  getters: {
    getFirstOfFriend: (state) => state.friendList[0],
    getFriendBellList: (state) => state.friendBellList
  }
});
const getAllMsgRecordById = (userId, friendId) => opRequest.get({
  url: `/message/${userId}/${friendId}`
});
const getAllNoReadMsg = (userId, friendId) => opRequest.get({
  url: `/message/unread/${userId}/${friendId}`
});
const getAmountOfNoReadMsg = (userId) => opRequest.get({
  url: `/message/unread/num/${userId}`
});
const updateNoReaadMsgToRead = (userId, friendId) => opRequest.put({
  url: `/message/unread/${userId}/${friendId}`
});
const sendMsgToOneById = (fromId, toId, content, type = 0) => opRequest.post({
  url: "/message",
  data: {
    fromId,
    toId,
    content,
    type
  }
});
const useMessageStore = defineStore("messageStore", {
  state: () => ({
    msgList: [],
    lastMsgList: [],
    unreadMap: /* @__PURE__ */ new Map(),
    numOfUnRead: 0,
    imgPreviewList: []
  }),
  actions: {
    async getMsgRecordById(userId, friendId) {
      const res = await getAllMsgRecordById(userId, friendId);
      this.msgList.length = 0;
      this.msgList.push(...res.data);
    },
    async getUnreadWithFriend(userId, friendId) {
      await getAllNoReadMsg(userId, friendId);
    },
    async updateUnreadMsgToRead(userId, friendId) {
      await updateNoReaadMsgToRead(userId, friendId);
    },
    async sendMsgToFriend(fromId, toId, content, type = 0) {
      await sendMsgToOneById(fromId, toId, content, type);
    },
    getAllLastMsg(userId, friendList) {
      this.lastMsgList.length = 0;
      friendList.forEach(async (item) => {
        const res = await getAllMsgRecordById(userId, item.friendInfo.id);
        if (res.data.length !== 0) {
          this.lastMsgList.push({
            userId,
            friendId: item.friendInfo.id,
            content: res.data[res.data.length - 1].content,
            type: res.data[res.data.length - 1].type
          });
        }
      });
    },
    getNoReadMsgWithAllUser(userId, friendList) {
      this.unreadMap.clear();
      friendList.forEach(async (item) => {
        const res = await getAllNoReadMsg(userId, item.friendInfo.id);
        this.unreadMap.set(item.friendInfo.name, res.data);
      });
    },
    async getNumOfAllUnRead(userId) {
      const res = await getAmountOfNoReadMsg(userId);
      this.numOfUnRead = res.data.length;
    },
    async getAllImgOfMsg(previewImg) {
      this.imgPreviewList.length = 0;
      this.imgPreviewList.push("http://175.178.99.5:8000/" + previewImg);
    }
  }
});
const createInvitation = (invitationForm) => opRequest.post({
  url: "/invitation",
  data: invitationForm
});
const getAllInvitation = (pagenum = 1) => opRequest.get({
  url: `/invitation/pagenum/${pagenum}`
});
const getAllInvitationByUserPosted = (id) => opRequest.get({
  url: `/invitation/user/${id}`
});
const getAllInvitationByUserIdAndPagenum = (id, pagenum) => opRequest.get({
  url: `/invitation/user/${id}/pagenum/${pagenum}`
});
const getAllInvitationByKeywords = (val) => opRequest.post({
  url: "/invitation/search",
  data: {
    val
  }
});
const getOneInvitation = (id) => opRequest.get({
  url: `/invitation/${id}`
});
const getInvitationByTag = (id, pagenum = 1) => opRequest.get({
  url: `/invitation/tag/${id}/pagenum/${pagenum}`
});
const starredInvitation = (userId, invitationId) => opRequest.get({
  url: `/invitation/starred/${userId}/${invitationId}`
});
const getAllStarredInvitation = (userId) => opRequest.get({
  url: `/invitation/starred/list/${userId}`
});
const starOrUnstarInvitation = (userId, invitationId, type) => opRequest.patch({
  url: type !== 0 ? "/invitation/star" : "/invitation/unstar",
  data: {
    userId,
    invitationId
  }
});
const updateInvitationById = (info) => opRequest.patch({
  url: "/invitation/update",
  data: info
});
const useInvitationStore = defineStore("invitationStore", {
  state: () => {
    return {
      invitationList: [],
      postedInvitationList: [],
      totalNum: 0,
      invitationInfo: {},
      otherInvitation: [],
      invitationListByTag: [],
      starredList: [],
      invitationSearchList: []
    };
  },
  actions: {
    async postInvitation(form) {
      const res = await createInvitation(form);
      if (res.code === 200) {
        ElementPlus.ElMessage.success({
          message: res.message,
          type: "success"
        });
      } else {
        ElementPlus.ElMessage.error({
          message: res.message,
          type: "warning"
        });
      }
    },
    async getInvitationList(pagenum = 1) {
      const res = await getAllInvitation(pagenum);
      this.invitationList.length = 0;
      this.totalNum = res.data.total;
      this.invitationList.push(...res.data.result);
    },
    async getInvitationById(id) {
      const res = await getOneInvitation(id);
      this.invitationInfo = res.data[0];
    },
    async getOtherInvitation(id) {
      const res = await getAllInvitation();
      const copyRes = [...res.data.result];
      const result = copyRes.filter(
        (item) => item.invitation_id !== id
      );
      this.otherInvitation = result;
    },
    async getInvitationByTagId(id, pagenum) {
      const res = await getInvitationByTag(id, pagenum);
      this.invitationList.length = 0;
      this.invitationList.push(...res.data.result);
      this.totalNum = res.data.total;
    },
    async judgeStarredInvitation(userId, invitationId) {
      const res = await starredInvitation(userId, invitationId);
      return res.message === "T";
    },
    async findAllStarredInvitation(userId) {
      const res = await getAllStarredInvitation(userId);
      this.starredList.length = 0;
      this.starredList.push(...res.data);
    },
    async starOrUnstarInvitationById(userId, invitationId, type) {
      await starOrUnstarInvitation(userId, invitationId, type);
    },
    async getUserPostedInvitation(id) {
      const res = await getAllInvitationByUserPosted(id);
      this.postedInvitationList.length = 0;
      this.postedInvitationList.push(...res.data);
    },
    async getUserPostedInvitationByPage(id, pagenum) {
      const res = await getAllInvitationByUserIdAndPagenum(id, pagenum);
      this.postedInvitationList.length = 0;
      this.postedInvitationList.push(...res.data.result);
      this.totalNum = res.data.total;
    },
    async getInvitationBySearchVal(val) {
      const res = await getAllInvitationByKeywords(val);
      this.invitationSearchList.length = 0;
      this.invitationSearchList.push(...res.data);
    },
    async editInvitation(info) {
      const res = await updateInvitationById(info);
      ElementPlus.ElMessage({
        type: res.code === 200 ? "success" : "warning",
        message: res.message
      });
    }
  },
  getters: {
    getFirstInvitation: (state) => state.invitationList[0],
    getTargetInvitation: (state) => state.invitationInfo
  }
});
const _withScopeId = (n) => (Vue.pushScopeId("data-v-dfe0b0ce"), n = n(), Vue.popScopeId(), n);
const _hoisted_1 = { class: "header" };
const _hoisted_2 = { class: "flex items-center h-full w-9.5/10 md:justify-between lg:w-full lg:justify-around" };
const _hoisted_3 = { class: "flex w-1/3 items-center lg:ml-10" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("img", {
  src: _imports_0,
  alt: "badminton logo"
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { class: "hidden lg:block" };
const _hoisted_7 = { flex: "" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("img", {
  src: _imports_0,
  alt: "badminton logo"
}, null, -1));
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "w-1/3 relative hidden lg:block" };
const _hoisted_12 = { class: "flex flex-1 items-center justify-end lg:mr-10" };
const _hoisted_13 = { class: "w-full absolute top-15 z-10 bg-white" };
const _hoisted_14 = { class: "flex flex-col items-center" };
const _hoisted_15 = { class: "w-9.5/10 relative my-5" };
const _hoisted_16 = ["onClick"];
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "Header",
  setup(__props) {
    const socket = Vue.inject("socket");
    const isDark = useDark();
    const router = useRouter();
    const store = useUserStore();
    const friendStore = useFriendStore();
    const messageStore = useMessageStore();
    const invitationStore = useInvitationStore();
    const { userInfo, getToken, userList } = storeToRefs(store);
    const { getFriendBellList } = storeToRefs(friendStore);
    const { numOfUnRead } = storeToRefs(messageStore);
    const { invitationSearchList } = storeToRefs(invitationStore);
    let isShowInMd = Vue.ref(false);
    const navList = [
      {
        path: "/news/0",
        name: "\u793E\u533A\u52A8\u6001"
      },
      {
        path: "/match",
        name: "\u8FD1\u671F\u8D5B\u4E8B"
      }
    ];
    let searchModelValue = Vue.ref("");
    Vue.watch(
      () => searchModelValue.value,
      async (newVal) => {
        if (newVal !== "") {
          await store.getUserByName(searchModelValue.value);
          await invitationStore.getInvitationBySearchVal(searchModelValue.value);
        }
      }
    );
    const navToTargetRoute = (path) => {
      router.push(path);
    };
    Vue.watchEffect(() => {
      if (getToken.value !== "") {
        friendStore.getFriendReceiveList(userInfo.value.id);
        friendStore.getFriendReceiveUnHandle(userInfo.value.id);
        messageStore.getNumOfAllUnRead(userInfo.value.id);
        socket.connect();
        socket.emit("online", userInfo.value);
        socket.on("line_status_change", (friendName, isOnline) => {
          friendStore.getFriendListById(userInfo.value.id);
          if (isOnline) {
            ElementPlus.ElNotification({
              title: `\u7528\u6237${friendName}\u4E0A\u7EBF\u4E86`,
              type: "info"
            });
          }
        });
        socket.on("send_req_result", (flag, msg) => {
          ElementPlus.ElNotification({
            title: msg,
            type: `${flag}` ? "success" : "warning"
          });
        });
        socket.on("send_req_repeat", (msg) => {
          ElementPlus.ElNotification({
            title: msg,
            type: "success"
          });
        });
        socket.on("receive_req", async (opposite) => {
          friendStore.getFriendReceiveUnHandle(userInfo.value.id);
          ElementPlus.ElNotification({
            title: "\u4F60\u6709\u4E00\u6761\u65B0\u7684\u597D\u53CB\u8BF7\u6C42",
            message: `\u7528\u6237\u540D: ${opposite.name}`,
            type: "info"
          });
        });
        socket.on("req_handle_done_self", () => {
          friendStore.getFriendReceiveUnHandle(userInfo.value.id);
        });
        socket.on("get_private_msg", () => {
          messageStore.getNumOfAllUnRead(userInfo.value.id);
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElSwitch = Vue.resolveComponent("ElSwitch");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createElementVNode("div", _hoisted_2, [
            Vue.createElementVNode("div", _hoisted_3, [
              Vue.createElementVNode("div", {
                class: "cursor-pointer sm:block lg:hidden",
                onClick: _cache[0] || (_cache[0] = ($event) => Vue.isRef(isShowInMd) ? isShowInMd.value = !Vue.unref(isShowInMd) : isShowInMd = !Vue.unref(isShowInMd))
              }, [
                Vue.createVNode(_component_ElIcon, { size: "25" }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(Vue.unref(operation_default))
                  ]),
                  _: 1
                })
              ]),
              Vue.createElementVNode("div", {
                class: "mr-4 cursor-pointer hidden lg:block",
                onClick: _cache[1] || (_cache[1] = ($event) => navToTargetRoute("/"))
              }, _hoisted_5),
              Vue.createElementVNode("div", _hoisted_6, [
                Vue.createElementVNode("ul", _hoisted_7, [
                  (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(navList, (item, i) => {
                    return Vue.createElementVNode("li", {
                      class: "menu_item relative",
                      key: i
                    }, [
                      Vue.createElementVNode("span", {
                        class: "mx-3 cursor-pointer font-bold text-lg dark:text-gray-100",
                        onClick: ($event) => navToTargetRoute(item.path)
                      }, Vue.toDisplayString(item.name), 9, _hoisted_8)
                    ]);
                  }), 64))
                ])
              ])
            ]),
            Vue.createElementVNode("div", {
              class: "mr-4 cursor-pointer flex flex-1 justify-center lg:hidden",
              onClick: _cache[2] || (_cache[2] = ($event) => navToTargetRoute("/"))
            }, _hoisted_10),
            Vue.createElementVNode("div", _hoisted_11, [
              Vue.createVNode(SearchBox, {
                modelValue: Vue.unref(searchModelValue),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => Vue.isRef(searchModelValue) ? searchModelValue.value = $event : searchModelValue = $event),
                invitationList: Vue.unref(invitationSearchList),
                userList: Vue.unref(userList)
              }, null, 8, ["modelValue", "invitationList", "userList"])
            ]),
            Vue.createElementVNode("div", _hoisted_12, [
              Vue.createVNode(_component_ElSwitch, {
                class: "mr-3",
                style: { "--el-switch-on-color": "#2c2c2c" },
                "inline-prompt": "",
                size: "large",
                "active-icon": Vue.unref(moon_default),
                "inactive-icon": Vue.unref(sunny_default),
                modelValue: Vue.unref(isDark),
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => Vue.isRef(isDark) ? isDark.value = $event : null)
              }, null, 8, ["active-icon", "inactive-icon", "modelValue"]),
              Vue.unref(getToken) !== "" ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                Vue.createVNode(_sfc_main$2, {
                  username: Vue.unref(userInfo).name,
                  avatar: Vue.unref(userInfo).avatar
                }, null, 8, ["username", "avatar"]),
                Vue.createVNode(_sfc_main$1, {
                  unreadNums: Vue.unref(numOfUnRead),
                  receiveList: Vue.unref(getFriendBellList)
                }, null, 8, ["unreadNums", "receiveList"])
              ], 64)) : (Vue.openBlock(), Vue.createBlock(_component_ElButton, {
                key: 1,
                type: "primary",
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$router.push("/login"))
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode("\u767B\u5F55\u8D26\u6237")
                ]),
                _: 1
              }))
            ])
          ])
        ]),
        Vue.withDirectives(Vue.createElementVNode("div", _hoisted_13, [
          Vue.createElementVNode("div", _hoisted_14, [
            Vue.createElementVNode("div", _hoisted_15, [
              Vue.createVNode(SearchBox, {
                modelValue: Vue.unref(searchModelValue),
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => Vue.isRef(searchModelValue) ? searchModelValue.value = $event : searchModelValue = $event),
                invitationList: Vue.unref(invitationSearchList),
                userList: Vue.unref(userList)
              }, null, 8, ["modelValue", "invitationList", "userList"])
            ]),
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(navList, (nav, i) => {
              return Vue.createElementVNode("div", {
                class: "w-9.5/10 py-2 border-t-1 border-gray-200",
                key: i
              }, [
                Vue.createElementVNode("span", {
                  "mx-3": "",
                  "cursor-pointer": "",
                  "font-bold": "",
                  "text-lg": "",
                  "hover:text-blue-300": "",
                  onClick: ($event) => navToTargetRoute(nav.path)
                }, Vue.toDisplayString(nav.name), 9, _hoisted_16)
              ]);
            }), 64))
          ])
        ], 512), [
          [Vue.vShow, Vue.unref(isShowInMd)]
        ])
      ], 64);
    };
  }
});
const Header_vue_vue_type_style_index_0_scoped_dfe0b0ce_lang = "";
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfe0b0ce"]]);
export {
  Header as H,
  _sfc_main$5 as _,
  arrow_down_default as a,
  calendar_default as b,
  chat_line_square_default as c,
  star_filled_default as d,
  useFriendStore as e,
  filter_default as f,
  search_default as g,
  useMessageStore as h,
  home_filled_default as i,
  chat_round_default as j,
  user_default as k,
  plus_default as l,
  edit_default as m,
  document_default as n,
  camera_default as o,
  picture_default as p,
  setting_default as q,
  star_default as s,
  timer_default as t,
  useInvitationStore as u
};
