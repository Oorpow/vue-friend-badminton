import { a as useUserStore, s as storeToRefs, _ as _export_sfc } from "./index.cdb67bbf.js";
import { h as home_filled_default, c as chat_round_default, u as user_default } from "./index.c819bb21.js";
import { u as useFriendStore } from "./friend.4ff8971b.js";
import { u as useMessageStore } from "./message.355a0bb1.js";
const _hoisted_1$2 = {
  flex: "",
  "flex-col": "",
  "h-full": ""
};
const _hoisted_2$2 = {
  "text-center": "",
  "p-3": "",
  "border-b-1": "",
  "border-gray-2": "",
  flex: "",
  "justify-center": ""
};
const _hoisted_3$2 = { "text-sm": "" };
const _hoisted_4$2 = { class: "message_wrapper" };
const _hoisted_5$1 = {
  "p-3": "",
  relative: ""
};
const _hoisted_6$1 = { class: "h-3/10 flex flex-col justify-between px-3" };
const _hoisted_7$1 = {
  key: 1,
  "w-full": "",
  "h-full": "",
  relative: ""
};
const _hoisted_8$1 = { class: "absolute left-1/2 top-1/2 translate--1/2" };
const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
  __name: "MessageBox",
  props: {
    friend: null,
    msgList: null
  },
  setup(__props) {
    const props = __props;
    const store = useUserStore();
    const messageContentRef = Vue.ref();
    const { userInfo } = storeToRefs(store);
    Vue.watch(
      () => props.msgList,
      async () => {
        await Vue.nextTick(() => {
          var _a, _b, _c;
          (_c = (_b = (_a = messageContentRef.value) == null ? void 0 : _a.firstElementChild) == null ? void 0 : _b.lastElementChild) == null ? void 0 : _c.scrollIntoView();
        });
      },
      {
        immediate: true,
        deep: true
      }
    );
    return (_ctx, _cache) => {
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElTooltip = Vue.resolveComponent("ElTooltip");
      const _component_BubbleBox = Vue.resolveComponent("BubbleBox");
      const _component_MessageEditor = Vue.resolveComponent("MessageEditor");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$2, [
        __props.friend.friendInfo.name ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
          Vue.createElementVNode("div", _hoisted_2$2, [
            Vue.createElementVNode("span", _hoisted_3$2, Vue.toDisplayString(__props.friend.friendInfo.name), 1),
            Vue.createElementVNode("div", {
              style: { "margin": "1px 0 0 5px" },
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push(`/space/${__props.friend.friendInfo.id}`))
            }, [
              Vue.createVNode(_component_ElTooltip, { content: "\u8BBF\u95EE\u7A7A\u95F4" }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(_component_ElIcon, { "cursor-pointer": "" }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(Vue.unref(home_filled_default))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          Vue.createElementVNode("div", _hoisted_4$2, [
            Vue.createElementVNode("div", {
              class: "message_content",
              ref_key: "messageContentRef",
              ref: messageContentRef
            }, [
              Vue.createElementVNode("div", _hoisted_5$1, [
                Vue.createVNode(_component_BubbleBox, { msgList: __props.msgList }, null, 8, ["msgList"])
              ])
            ], 512),
            Vue.createElementVNode("div", _hoisted_6$1, [
              Vue.createVNode(_component_MessageEditor, { friend: __props.friend }, null, 8, ["friend"])
            ])
          ])
        ], 64)) : (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_7$1, [
          Vue.createElementVNode("div", _hoisted_8$1, [
            Vue.createElementVNode("h3", null, [
              Vue.createTextVNode(" Welcome The Chat "),
              Vue.createElementVNode("span", null, Vue.toDisplayString(Vue.unref(userInfo).name), 1)
            ])
          ])
        ]))
      ]);
    };
  }
});
const MessageBox_vue_vue_type_style_index_0_scoped_2bb83027_lang = "";
const MessageBox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2bb83027"]]);
const _hoisted_1$1 = /* @__PURE__ */ Vue.createElementVNode("div", {
  "p-3": "",
  "border-b-1": "",
  "border-gray-2": ""
}, [
  /* @__PURE__ */ Vue.createElementVNode("span", null, "\u65B0\u7684\u670B\u53CB")
], -1);
const _hoisted_2$1 = { "p-3": "" };
const _hoisted_3$1 = {
  flex: "",
  "items-center": ""
};
const _hoisted_4$1 = {
  "ml-2": "",
  "text-sm": ""
};
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "FriendRequest",
  props: {
    reqList: { default: () => [] },
    userInfo: null
  },
  setup(__props) {
    const props = __props;
    const socket = Vue.inject("socket");
    const friendStore = useFriendStore();
    const handleApplication = async (item, isAccept) => {
      socket.emit("handle_req", props.userInfo, item, isAccept);
    };
    socket.on("req_handle_done_self", () => {
      friendStore.getFriendReceiveList(props.userInfo.id);
    });
    return (_ctx, _cache) => {
      const _component_Avatar = Vue.resolveComponent("Avatar");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      const _component_ElTag = Vue.resolveComponent("ElTag");
      return Vue.openBlock(), Vue.createElementBlock("div", null, [
        _hoisted_1$1,
        Vue.createElementVNode("div", _hoisted_2$1, [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.reqList, (item) => {
            return Vue.openBlock(), Vue.createElementBlock("div", {
              "my-3": "",
              flex: "",
              "items-center": "",
              "justify-between": "",
              key: item.id
            }, [
              Vue.createElementVNode("div", _hoisted_3$1, [
                Vue.createVNode(_component_Avatar, {
                  username: item.name,
                  avatar: item.avatar
                }, null, 8, ["username", "avatar"]),
                Vue.createElementVNode("span", _hoisted_4$1, Vue.toDisplayString(item.name), 1)
              ]),
              Vue.createElementVNode("div", null, [
                item.status === 0 ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                  Vue.createVNode(_component_ElButton, {
                    type: "success",
                    size: "small",
                    onClick: ($event) => handleApplication(item, true)
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode("\u63A5\u53D7")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  Vue.createVNode(_component_ElButton, {
                    type: "danger",
                    size: "small",
                    onClick: ($event) => handleApplication(item, false)
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode("\u62D2\u7EDD")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ], 64)) : item.status === 1 ? (Vue.openBlock(), Vue.createBlock(_component_ElTag, {
                  key: 1,
                  type: "success"
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u5DF2\u63A5\u53D7")
                  ]),
                  _: 1
                })) : (Vue.openBlock(), Vue.createBlock(_component_ElTag, {
                  key: 2,
                  type: "warning"
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u5DF2\u62D2\u7EDD")
                  ]),
                  _: 1
                }))
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const _withScopeId = (n) => (Vue.pushScopeId("data-v-e47543ac"), n = n(), Vue.popScopeId(), n);
const _hoisted_1 = { class: "message_main" };
const _hoisted_2 = { class: "w-8/10 flex flex-col mx-auto" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("div", { "h-5": "" }, null, -1));
const _hoisted_4 = {
  "bg-white": "",
  rounded: "",
  flex: "",
  "h-75": ""
};
const _hoisted_5 = { class: "friend_list" };
const _hoisted_6 = {
  "w-6": "",
  "bg-gray": "",
  flex: "",
  "flex-col": "",
  "items-center": ""
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "friend_list_container" };
const _hoisted_9 = { "flex-1": "" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "MessageView",
  setup(__props) {
    const socket = Vue.inject("socket");
    const friendStore = useFriendStore();
    const userStore = useUserStore();
    const messageStore = useMessageStore();
    const { friendList, friendReceiveList, friendListBySearch, friendBellList } = storeToRefs(friendStore);
    const { userInfo, userList } = storeToRefs(userStore);
    const { msgList, lastMsgList, unreadMap, numOfUnRead } = storeToRefs(messageStore);
    const chatIconList = [
      { id: 1, comName: Vue.markRaw(MessageBox), size: 25 },
      { id: 2, comName: Vue.markRaw(_sfc_main$1), size: 25 }
    ];
    const currentPanel = Vue.shallowRef(MessageBox);
    const changePanel = (panel) => {
      currentPanel.value = panel.comName;
    };
    const currentChatTarget = Vue.reactive({
      friendInfo: {}
    });
    if (userInfo.value.id) {
      friendStore.getFriendListById(userInfo.value.id).then(() => {
        messageStore.getAllLastMsg(userInfo.value.id, friendList.value);
        messageStore.getNoReadMsgWithAllUser(userInfo.value.id, friendList.value);
      });
    }
    const chooseFriend = async (friendInfo) => {
      currentChatTarget.friendInfo = Object.assign({}, friendInfo);
      messageStore.getMsgRecordById(userInfo.value.id, friendInfo.id);
      await messageStore.updateUnreadMsgToRead(friendInfo.id, userInfo.value.id);
      messageStore.getNoReadMsgWithAllUser(userInfo.value.id, friendList.value);
      messageStore.getNumOfAllUnRead(userInfo.value.id);
    };
    Vue.onMounted(() => {
      socket.on("req_handle_done", async (name, isAccept) => {
        if (isAccept) {
          ElementPlus.ElNotification({
            title: `${name}\u5DF2\u540C\u610F\u4E86\u4F60\u7684\u597D\u53CB\u8BF7\u6C42`,
            type: "success"
          });
          await friendStore.getFriendListById(userInfo.value.id);
        }
      });
      socket.on("get_private_msg", () => {
        messageStore.getAllLastMsg(userInfo.value.id, friendList.value);
        messageStore.getNoReadMsgWithAllUser(userInfo.value.id, friendList.value);
      });
    });
    friendStore.getFriendReceiveList(userInfo.value.id);
    let searchUserByName = Vue.ref("");
    Vue.watch(
      () => searchUserByName.value,
      async (newVal) => {
        if (newVal !== "") {
          await friendStore.getFriendBySearch(userInfo.value.id, newVal);
          await userStore.getUserByName(newVal);
          friendList.value.forEach((item, i) => {
            userList.value.forEach((user, index) => {
              if (item.friendInfo.id === user.id) {
                userList.value.splice(index, 1);
              }
            });
          });
        } else {
          friendListBySearch.value.length = 0;
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_Header = Vue.resolveComponent("Header");
      const _component_ElBadge = Vue.resolveComponent("ElBadge");
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_SearchExistFriend = Vue.resolveComponent("SearchExistFriend");
      const _component_FriendItemSearched = Vue.resolveComponent("FriendItemSearched");
      const _component_FriendItem = Vue.resolveComponent("FriendItem");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_Header),
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createElementVNode("div", _hoisted_2, [
            _hoisted_3,
            Vue.createElementVNode("div", _hoisted_4, [
              Vue.createElementVNode("div", _hoisted_5, [
                Vue.createElementVNode("div", _hoisted_6, [
                  (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(chatIconList, (iconItem) => {
                    return Vue.createElementVNode("div", {
                      "py-3": "",
                      "cursor-pointer": "",
                      key: iconItem.id,
                      onClick: ($event) => changePanel(iconItem)
                    }, [
                      Vue.createVNode(_component_ElIcon, {
                        size: iconItem.size,
                        style: Vue.normalizeStyle({
                          color: Vue.unref(currentPanel) === iconItem.comName ? "green" : "white"
                        })
                      }, {
                        default: Vue.withCtx(() => [
                          iconItem.id === 1 ? (Vue.openBlock(), Vue.createBlock(_component_ElBadge, {
                            key: 0,
                            value: Vue.unref(numOfUnRead) === 0 ? "" : Vue.unref(numOfUnRead),
                            "ml-2": ""
                          }, {
                            default: Vue.withCtx(() => [
                              Vue.createVNode(Vue.unref(chat_round_default))
                            ]),
                            _: 1
                          }, 8, ["value"])) : (Vue.openBlock(), Vue.createBlock(_component_ElBadge, {
                            key: 1,
                            value: Vue.unref(friendBellList).length === 0 ? "" : Vue.unref(friendBellList).length,
                            "ml-2": ""
                          }, {
                            default: Vue.withCtx(() => [
                              Vue.createVNode(Vue.unref(user_default))
                            ]),
                            _: 1
                          }, 8, ["value"]))
                        ]),
                        _: 2
                      }, 1032, ["size", "style"])
                    ], 8, _hoisted_7);
                  }), 64))
                ]),
                Vue.createElementVNode("div", _hoisted_8, [
                  Vue.createVNode(_component_SearchExistFriend, {
                    modelValue: Vue.unref(searchUserByName),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.isRef(searchUserByName) ? searchUserByName.value = $event : searchUserByName = $event)
                  }, null, 8, ["modelValue"]),
                  Vue.unref(friendListBySearch).length ? (Vue.openBlock(), Vue.createBlock(_component_FriendItemSearched, {
                    key: 0,
                    list: Vue.unref(friendListBySearch),
                    strangers: Vue.unref(userList)
                  }, null, 8, ["list", "strangers"])) : (Vue.openBlock(), Vue.createBlock(_component_FriendItem, {
                    key: 1,
                    friendList: Vue.unref(friendList),
                    lastMsgList: Vue.unref(lastMsgList),
                    unreadMap: Vue.unref(unreadMap),
                    onChooseFriend: chooseFriend
                  }, null, 8, ["friendList", "lastMsgList", "unreadMap"]))
                ])
              ]),
              Vue.createElementVNode("div", _hoisted_9, [
                (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(Vue.unref(currentPanel)), {
                  friend: currentChatTarget,
                  msgList: Vue.unref(msgList),
                  reqList: Vue.unref(friendReceiveList),
                  userInfo: Vue.unref(userInfo)
                }, null, 8, ["friend", "msgList", "reqList", "userInfo"]))
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
const MessageView_vue_vue_type_style_index_0_scoped_e47543ac_lang = "";
const MessageView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e47543ac"]]);
export {
  MessageView as default
};
