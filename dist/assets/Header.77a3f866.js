import { u as useRouter, b as _export_sfc, a as useUserStore, s as storeToRefs, _ as _imports_0 } from "./index.691cbf00.js";
import { s as search_default, e as edit_pen_default, u as user_default, a as switch_default, b as arrow_down_default, c as circle_plus_default, m as message_default, d as bell_default } from "./index.34529f81.js";
import { u as useFriendStore } from "./friend.496a7e4a.js";
import { u as useMessageStore } from "./message.4da7ab4b.js";
import { u as useInvitationStore } from "./invitation.36cd443b.js";
const _withScopeId$1 = (n) => (Vue.pushScopeId("data-v-207dc780"), n = n(), Vue.popScopeId(), n);
const _hoisted_1$3 = { class: "result_box w-full absolute z-9 bg-white rounded shadow-2xl rounded-t-none h-51 overflow-y-scroll" };
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
  "text-gray-5": ""
}, "\u5E16\u5B50", -1));
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
      const _component_Avatar = Vue.resolveComponent("Avatar");
      const _component_SearchResultItem = Vue.resolveComponent("SearchResultItem");
      const _component_ElImage = Vue.resolveComponent("ElImage");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_ElInput, {
          class: "search_input",
          "suffix-icon": Vue.unref(search_default),
          "model-value": __props.modelValue,
          onInput: handleSearch
        }, null, 8, ["suffix-icon", "model-value"]),
        Vue.withDirectives(Vue.createElementVNode("div", _hoisted_1$3, [
          Vue.createVNode(_component_SearchResultItem, null, {
            content: Vue.withCtx(() => [
              __props.userList.length ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(__props.userList, (user) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  "p-3": "",
                  "my-3": "",
                  flex: "",
                  "items-center": "",
                  "cursor-pointer": "",
                  "hover:bg-gray-2": "",
                  key: user.id,
                  onClick: ($event) => navToTargetRoute(user.id, "space")
                }, [
                  Vue.createVNode(_component_Avatar, {
                    username: user.name,
                    avatar: user.avatar
                  }, null, 8, ["username", "avatar"]),
                  Vue.createElementVNode("span", _hoisted_3$1, Vue.toDisplayString(user.name), 1)
                ], 8, _hoisted_2$1);
              }), 128)) : (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_4$1, "\u6CA1\u6709\u5339\u914D\u7684\u7ED3\u679C"))
            ]),
            _: 1
          }),
          Vue.createVNode(_component_SearchResultItem, null, {
            title: Vue.withCtx(() => [
              _hoisted_5$1
            ]),
            content: Vue.withCtx(() => [
              __props.invitationList.length ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(__props.invitationList, (item) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  "my-3": "",
                  flex: "",
                  "items-center": "",
                  "justify-between": "",
                  "cursor-pointer": "",
                  "hover:bg-gray-2": "",
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
const SearchBox_vue_vue_type_style_index_0_scoped_207dc780_lang = "";
const SearchBox = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-207dc780"]]);
const _hoisted_1$2 = { "mx-4": "" };
const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
  __name: "SettingOptions",
  setup(__props) {
    const socket = Vue.inject("socket");
    const router = useRouter();
    const userStore = useUserStore();
    const { userInfo } = storeToRefs(userStore);
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
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      const _component_ElDropdownItem = Vue.resolveComponent("ElDropdownItem");
      const _component_ElDropdownMenu = Vue.resolveComponent("ElDropdownMenu");
      const _component_ElDropdown = Vue.resolveComponent("ElDropdown");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$2, [
        Vue.createVNode(_component_ElDropdown, null, {
          dropdown: Vue.withCtx(() => [
            Vue.createVNode(_component_ElDropdownMenu, null, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_ElDropdownItem, {
                  icon: Vue.unref(edit_pen_default),
                  onClick: _cache[0] || (_cache[0] = ($event) => navToTargetRoute("/produce"))
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u6295\u7A3F")
                  ]),
                  _: 1
                }, 8, ["icon"]),
                Vue.createVNode(_component_ElDropdownItem, {
                  icon: Vue.unref(user_default),
                  onClick: _cache[1] || (_cache[1] = ($event) => navToTargetRoute(`/space/${Vue.unref(userInfo).id}`))
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                  ]),
                  _: 1
                }, 8, ["icon"]),
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
            Vue.createVNode(_component_ElButton, null, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode(Vue.toDisplayString(Vue.unref(userInfo).name), 1),
                Vue.createVNode(_component_ElIcon, { class: "el-icon--right" }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(Vue.unref(arrow_down_default))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
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
const _withScopeId = (n) => (Vue.pushScopeId("data-v-af6def0e"), n = n(), Vue.popScopeId(), n);
const _hoisted_1 = { class: "header" };
const _hoisted_2 = {
  flex: "",
  "justify-around": "",
  "items-center": "",
  "w-full": ""
};
const _hoisted_3 = { class: "flex flex-1 items-center ml-10" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { flex: "" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "w-1/3 relative" };
const _hoisted_9 = { class: "flex flex-1 items-center justify-end mr-10" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "Header",
  setup(__props) {
    const socket = Vue.inject("socket");
    const router = useRouter();
    const store = useUserStore();
    const friendStore = useFriendStore();
    const messageStore = useMessageStore();
    const invitationStore = useInvitationStore();
    const { userInfo, getToken, userList } = storeToRefs(store);
    const { getFriendBellList } = storeToRefs(friendStore);
    const { numOfUnRead } = storeToRefs(messageStore);
    const { invitationSearchList } = storeToRefs(invitationStore);
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
      const _component_Avatar = Vue.resolveComponent("Avatar");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.createElementVNode("div", _hoisted_2, [
          Vue.createElementVNode("div", _hoisted_3, [
            Vue.createElementVNode("div", {
              "mr-4": "",
              "cursor-pointer": "",
              onClick: _cache[0] || (_cache[0] = ($event) => navToTargetRoute("/"))
            }, _hoisted_5),
            Vue.createElementVNode("div", null, [
              Vue.createElementVNode("ul", _hoisted_6, [
                (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(navList, (item, i) => {
                  return Vue.createElementVNode("li", {
                    class: "menu_item relative",
                    key: i
                  }, [
                    Vue.createElementVNode("span", {
                      "mx-3": "",
                      "cursor-pointer": "",
                      "font-bold": "",
                      "text-lg": "",
                      onClick: ($event) => navToTargetRoute(item.path)
                    }, Vue.toDisplayString(item.name), 9, _hoisted_7)
                  ]);
                }), 64))
              ])
            ])
          ]),
          Vue.createElementVNode("div", _hoisted_8, [
            Vue.createVNode(SearchBox, {
              modelValue: Vue.unref(searchModelValue),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.isRef(searchModelValue) ? searchModelValue.value = $event : searchModelValue = $event),
              invitationList: Vue.unref(invitationSearchList),
              userList: Vue.unref(userList)
            }, null, 8, ["modelValue", "invitationList", "userList"])
          ]),
          Vue.createElementVNode("div", _hoisted_9, [
            Vue.unref(getToken) !== "" ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
              Vue.createVNode(_component_Avatar, {
                username: Vue.unref(userInfo).name,
                avatar: Vue.unref(userInfo).avatar
              }, null, 8, ["username", "avatar"]),
              Vue.createVNode(_sfc_main$2),
              Vue.createVNode(_sfc_main$1, {
                unreadNums: Vue.unref(numOfUnRead),
                receiveList: Vue.unref(getFriendBellList)
              }, null, 8, ["unreadNums", "receiveList"])
            ], 64)) : (Vue.openBlock(), Vue.createBlock(_component_ElButton, {
              key: 1,
              type: "primary",
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$router.push("/login"))
            }, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode("\u767B\u5F55\u8D26\u6237")
              ]),
              _: 1
            }))
          ])
        ])
      ]);
    };
  }
});
const Header_vue_vue_type_style_index_0_scoped_af6def0e_lang = "";
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af6def0e"]]);
export {
  Header as H
};
