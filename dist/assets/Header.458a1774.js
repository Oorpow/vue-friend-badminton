import { u as useRouter, a as useUserStore, s as storeToRefs, b as _imports_0, _ as _export_sfc } from "./index.cdb67bbf.js";
import { u as useFriendStore } from "./friend.4ff8971b.js";
import { u as useMessageStore } from "./message.355a0bb1.js";
import { u as useInvitationStore } from "./invitation.9e113589.js";
const _withScopeId = (n) => (Vue.pushScopeId("data-v-1869181d"), n = n(), Vue.popScopeId(), n);
const _hoisted_1 = { class: "header" };
const _hoisted_2 = {
  flex: "",
  "justify-around": "",
  "items-center": "",
  "w-full": ""
};
const _hoisted_3 = { class: "flex w-1/5 items-center" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "w-1/3 relative" };
const _hoisted_8 = { class: "flex items-center" };
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
        name: "\u7FBD\u575B\u52A8\u6001"
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
      const _component_SearchBox = Vue.resolveComponent("SearchBox");
      const _component_Avatar = Vue.resolveComponent("Avatar");
      const _component_SettingOptions = Vue.resolveComponent("SettingOptions");
      const _component_NotifyMessage = Vue.resolveComponent("NotifyMessage");
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
              (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(navList, (item, i) => {
                return Vue.createElementVNode("span", {
                  "mx-1": "",
                  "cursor-pointer": "",
                  "font-bold": "",
                  "text-lg": "",
                  key: i,
                  onClick: ($event) => navToTargetRoute(item.path)
                }, Vue.toDisplayString(item.name), 9, _hoisted_6);
              }), 64))
            ])
          ]),
          Vue.createElementVNode("div", _hoisted_7, [
            Vue.createVNode(_component_SearchBox, {
              modelValue: Vue.unref(searchModelValue),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.isRef(searchModelValue) ? searchModelValue.value = $event : searchModelValue = $event),
              invitationList: Vue.unref(invitationSearchList),
              userList: Vue.unref(userList)
            }, null, 8, ["modelValue", "invitationList", "userList"])
          ]),
          Vue.createElementVNode("div", _hoisted_8, [
            Vue.unref(getToken) !== "" ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
              Vue.createVNode(_component_Avatar, {
                username: Vue.unref(userInfo).name,
                avatar: Vue.unref(userInfo).avatar
              }, null, 8, ["username", "avatar"]),
              Vue.createVNode(_component_SettingOptions),
              Vue.createVNode(_component_NotifyMessage, {
                unreadNums: Vue.unref(numOfUnRead),
                receiveList: Vue.unref(getFriendBellList)
              }, null, 8, ["unreadNums", "receiveList"])
            ], 64)) : (Vue.openBlock(), Vue.createBlock(_component_ElButton, {
              key: 1,
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$router.push("/login")),
              circle: "",
              type: "primary",
              style: { "padding": "3px" }
            }, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode("\u767B\u5F55")
              ]),
              _: 1
            }))
          ])
        ])
      ]);
    };
  }
});
const Header_vue_vue_type_style_index_0_scoped_1869181d_lang = "";
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1869181d"]]);
export {
  Header as H
};
