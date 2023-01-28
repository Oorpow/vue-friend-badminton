import { c as useRoute, a as useUserStore, s as storeToRefs, u as useRouter, _ as _export_sfc } from "./index.cdb67bbf.js";
import { u as useInvitationStore } from "./invitation.9e113589.js";
import { u as useCommentStore } from "./comment.0a76e6ba.js";
import { s as setting_default } from "./index.c819bb21.js";
import { u as useFriendStore } from "./friend.4ff8971b.js";
const _hoisted_1$2 = {
  flex: "",
  "flex-wrap": "",
  "items-start": ""
};
const _hoisted_2$2 = {
  key: 1,
  "mx-auto": "",
  "mt-30": ""
};
const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
  __name: "SpaceInvitation",
  setup(__props) {
    const route = useRoute();
    const userStore = useUserStore();
    const invitationStore = useInvitationStore();
    const commentStore = useCommentStore();
    const { userInfo } = storeToRefs(userStore);
    const { postedInvitationList, invitationList, totalNum } = storeToRefs(invitationStore);
    const { commentMap } = storeToRefs(commentStore);
    const styleConfig = {
      width: "28%",
      height: "380px",
      marginRight: "2%"
    };
    let currentPage = Vue.ref(1);
    Vue.watch(
      () => route.params,
      (newVal) => {
        if (userInfo.value.id) {
          invitationStore.getUserPostedInvitationByPage(
            userInfo.value.id,
            currentPage.value
          );
        } else {
          invitationStore.getInvitationList();
        }
      },
      {
        deep: true,
        immediate: true
      }
    );
    const handleCurrentChange = (val) => {
      if (userInfo.value.id) {
        invitationStore.getUserPostedInvitationByPage(userInfo.value.id, val);
      } else {
        invitationStore.getInvitationList(currentPage.value);
      }
    };
    return (_ctx, _cache) => {
      const _component_NewsItem = Vue.resolveComponent("NewsItem");
      const _component_ElEmpty = Vue.resolveComponent("ElEmpty");
      const _component_ElPagination = Vue.resolveComponent("ElPagination");
      return Vue.openBlock(), Vue.createElementBlock("div", null, [
        Vue.createElementVNode("div", _hoisted_1$2, [
          Vue.unref(postedInvitationList).length || Vue.unref(invitationList).length ? (Vue.openBlock(), Vue.createBlock(_component_NewsItem, {
            key: 0,
            list: Vue.unref(userInfo).id ? Vue.unref(postedInvitationList) : Vue.unref(invitationList),
            commentMap: Vue.unref(commentMap),
            styleConfig
          }, null, 8, ["list", "commentMap"])) : (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$2, [
            Vue.createVNode(_component_ElEmpty, { description: "\u8BE5\u7528\u6237\u8FD8\u6CA1\u6709\u5F00\u59CB\u521B\u4F5C" })
          ]))
        ]),
        Vue.createVNode(_component_ElPagination, {
          background: "",
          layout: "prev, pager, next",
          "hide-on-single-page": "",
          flex: "",
          "justify-center": "",
          "page-size": 6,
          "current-page": Vue.unref(currentPage),
          "onUpdate:current-page": _cache[0] || (_cache[0] = ($event) => Vue.isRef(currentPage) ? currentPage.value = $event : currentPage = $event),
          total: Vue.unref(totalNum),
          onCurrentChange: handleCurrentChange
        }, null, 8, ["current-page", "total"])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "bg-white p-3 rounded mt-10" };
const _hoisted_2$1 = /* @__PURE__ */ Vue.createElementVNode("div", {
  "border-b-1": "",
  "border-gray-2": "",
  "p-b-3": ""
}, [
  /* @__PURE__ */ Vue.createElementVNode("span", null, "\u5168\u90E8\u5173\u6CE8")
], -1);
const _hoisted_3$1 = { "mt-5": "" };
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = {
  flex: "",
  "flex-col": "",
  "ml-3": ""
};
const _hoisted_6$1 = /* @__PURE__ */ Vue.createElementVNode("span", {
  "text-sm": "",
  "text-gray": ""
}, "\u8FD9\u4E2A\u4EBA\u6CA1\u6709\u586B\u7B80\u4ECB\u554A~~~", -1);
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "SpaceFriend",
  props: {
    friends: null
  },
  setup(__props) {
    const router = useRouter();
    const navToSpace = (id) => {
      router.push(`/space/${id}`);
    };
    return (_ctx, _cache) => {
      const _component_ElAvatar = Vue.resolveComponent("ElAvatar");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      const _component_ElEmpty = Vue.resolveComponent("ElEmpty");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
        Vue.createElementVNode("div", null, [
          _hoisted_2$1,
          Vue.createElementVNode("div", _hoisted_3$1, [
            __props.friends.length ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(__props.friends, (item) => {
              return Vue.openBlock(), Vue.createElementBlock("div", {
                flex: "",
                "justify-between": "",
                "border-b-1": "",
                "border-gray-2": "",
                "p-b-4": "",
                "mt-5": "",
                key: item.id
              }, [
                Vue.createElementVNode("div", {
                  flex: "",
                  "items-center": "",
                  "cursor-pointer": "",
                  onClick: ($event) => navToSpace(item.friendInfo.id)
                }, [
                  Vue.createVNode(_component_ElAvatar, null, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode(Vue.toDisplayString(item.friendInfo.name.slice(0, 1)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  Vue.createElementVNode("div", _hoisted_5$1, [
                    Vue.createElementVNode("span", null, Vue.toDisplayString(item.friendInfo.name), 1),
                    _hoisted_6$1
                  ])
                ], 8, _hoisted_4$1),
                Vue.createElementVNode("div", null, [
                  Vue.createVNode(_component_ElButton, { color: "#f5f5f5" }, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode("\u5DF2\u5173\u6CE8")
                    ]),
                    _: 1
                  })
                ])
              ]);
            }), 128)) : (Vue.openBlock(), Vue.createBlock(_component_ElEmpty, {
              key: 1,
              description: "\u8BE5\u7528\u6237\u8FD8\u672A\u66FE\u5173\u6CE8\u8FC7\u5176\u4ED6\u7528\u6237"
            }))
          ])
        ])
      ]);
    };
  }
});
const uploadConfig = {
  action: "http://localhost:8000/upload/spaceBg",
  uploadStyle: {
    padding: "7px",
    borderRadius: "50%",
    border: "1px solid #3b82f6",
    backgroundColor: "white"
  }
};
var uploadType = /* @__PURE__ */ ((uploadType2) => {
  uploadType2["bg"] = "spaceBg";
  uploadType2["avatar"] = "avatar";
  return uploadType2;
})(uploadType || {});
const _hoisted_1 = {
  key: 0,
  absolute: "",
  "right-5": "",
  "bottom-1": ""
};
const _hoisted_2 = {
  "w-full": "",
  "bg-white": ""
};
const _hoisted_3 = { class: "w-8/10 mx-auto" };
const _hoisted_4 = {
  flex: "",
  "items-center": "",
  relative: ""
};
const _hoisted_5 = {
  flex: "",
  "flex-col": "",
  "ml-3": ""
};
const _hoisted_6 = {
  flex: "",
  "items-center": ""
};
const _hoisted_7 = {
  "my-0": "",
  "mr-1": ""
};
const _hoisted_8 = {
  "text-sm": "",
  "mt-2": "",
  "text-gray": ""
};
const _hoisted_9 = {
  key: 0,
  flex: "",
  "mt--8": "",
  "ml-12": ""
};
const _hoisted_10 = {
  "my-2": "",
  "p-2": ""
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "w-8/10 mx-auto mb-10" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "SpaceView",
  setup(__props) {
    const route = useRoute();
    const userStore = useUserStore();
    const friendStore = useFriendStore();
    const { spaceUserInfo, userInfo } = storeToRefs(userStore);
    const { friendList } = storeToRefs(friendStore);
    const tabList = Vue.reactive([
      { id: 1, name: "\u6295\u7A3F", comName: Vue.markRaw(_sfc_main$2) }
    ]);
    const defaultStyle = {
      marginTop: "-15px",
      border: "4px solid #fff"
    };
    const currentTab = Vue.shallowRef(_sfc_main$2);
    const isFriend = Vue.ref(false);
    const isMyself = Vue.ref(false);
    const currentUserFriends = Vue.reactive([]);
    let isMaster = Vue.computed(() => spaceUserInfo.value.id === userInfo.value.id);
    if (userInfo.value.id) {
      friendStore.getFriendListById(userInfo.value.id).then(() => {
        currentUserFriends.length = 0;
        currentUserFriends.push(...friendList.value);
      });
    }
    Vue.watch(
      () => route.params,
      (newVal) => {
        userStore.getUserInfoById(Number(newVal.id)).then(() => {
          isMyself.value = spaceUserInfo.value.id === userInfo.value.id;
          computeSpaceBg.value = spaceUserInfo.value.space_bg;
        });
        if (userInfo.value.id) {
          tabList.push({ id: 2, name: "\u5173\u6CE8\u5217\u8868", comName: Vue.markRaw(_sfc_main$1) });
          friendStore.getFriendListById(Number(newVal.id)).then(() => {
            isFriend.value = currentUserFriends.some(
              (item) => item.friendInfo.id === spaceUserInfo.value.id
            );
          });
        }
      },
      {
        deep: true,
        immediate: true
      }
    );
    const changeTab = (tab) => {
      currentTab.value = tab.comName;
    };
    const serverUrl = "http://localhost:8000/";
    const currentSpaceBg = Vue.ref("#3b82f6");
    const computeSpaceBg = Vue.computed({
      get: () => "#3b82f6",
      set: (val) => {
        if (val) {
          currentSpaceBg.value = `url(${serverUrl}${val})`;
        }
      }
    });
    const updateBgOrAvatar = async (type, url) => {
      if (type === uploadType.bg) {
        await userStore.updateUserSpaceBg(userInfo.value.id, url);
      } else {
        await userStore.updateUserAvatar(userInfo.value.id, url);
      }
      await userStore.getUserInfoById(spaceUserInfo.value.id);
      computeSpaceBg.value = spaceUserInfo.value.space_bg;
    };
    let userInfoDialogVisible = Vue.ref(false);
    const userInfoFormRef = Vue.ref();
    const userInfoFormRules = Vue.reactive({
      name: [{ required: true, message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", trigger: "blur" }],
      password: [{ required: true, message: "\u8BF7\u8F93\u5165\u5BC6\u7801", trigger: "blur" }]
    });
    const userInfoForm = Vue.reactive({
      id: 0,
      name: "",
      password: "",
      desc: ""
    });
    const openUserInfoDialog = () => {
      userInfoDialogVisible.value = true;
      userInfoForm.id = userInfo.value.id;
      userInfoForm.name = userInfo.value.name;
      userInfoForm.password = userInfo.value.password;
      userInfoForm.desc = userInfo.value.description;
    };
    const editUserInfo = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate(async (valid, fields) => {
        if (valid) {
          await userStore.updatePersonalInfo(userInfoForm);
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const handleAddFriend = () => {
      if (userInfo.value.id) {
        console.log();
      } else {
        ElementPlus.ElMessage({
          type: "warning",
          message: "\u8BF7\u5148\u767B\u5F55\u518D\u8FDB\u884C\u8BE5\u64CD\u4F5C"
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_Header = Vue.resolveComponent("Header");
      const _component_UploadCpn = Vue.resolveComponent("UploadCpn");
      const _component_Avatar = Vue.resolveComponent("Avatar");
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      const _component_ElInput = Vue.resolveComponent("ElInput");
      const _component_ElFormItem = Vue.resolveComponent("ElFormItem");
      const _component_ElForm = Vue.resolveComponent("ElForm");
      const _component_ElDialog = Vue.resolveComponent("ElDialog");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_Header),
        Vue.createElementVNode("div", null, [
          Vue.createElementVNode("div", {
            "w-full": "",
            "h-16": "",
            relative: "",
            "bg-cover": "",
            "bg-no-repeat": "",
            style: Vue.normalizeStyle({
              background: currentSpaceBg.value
            })
          }, [
            Vue.unref(spaceUserInfo).id === Vue.unref(userInfo).id ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
              Vue.createVNode(_component_UploadCpn, {
                uploadConfig: Vue.unref(uploadConfig),
                type: Vue.unref(uploadType).bg,
                onUpdateBgOrAvatar: updateBgOrAvatar
              }, null, 8, ["uploadConfig", "type"])
            ])) : Vue.createCommentVNode("", true)
          ], 4),
          Vue.createElementVNode("div", _hoisted_2, [
            Vue.createElementVNode("div", _hoisted_3, [
              Vue.createElementVNode("div", _hoisted_4, [
                Vue.createVNode(_component_Avatar, {
                  username: Vue.unref(spaceUserInfo).name,
                  avatar: Vue.unref(spaceUserInfo).avatar,
                  configStyle: defaultStyle,
                  size: 80
                }, null, 8, ["username", "avatar"]),
                Vue.createElementVNode("div", _hoisted_5, [
                  Vue.createElementVNode("div", _hoisted_6, [
                    Vue.createElementVNode("h3", _hoisted_7, Vue.toDisplayString(Vue.unref(spaceUserInfo).name && Vue.unref(spaceUserInfo).name), 1),
                    Vue.unref(isMaster) ? (Vue.openBlock(), Vue.createBlock(_component_ElIcon, {
                      key: 0,
                      "mt-1": "",
                      "cursor-pointer": "",
                      "hover:rotate-90": "",
                      transition: "",
                      onClick: openUserInfoDialog
                    }, {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(Vue.unref(setting_default))
                      ]),
                      _: 1
                    })) : Vue.createCommentVNode("", true)
                  ]),
                  Vue.createElementVNode("span", _hoisted_8, Vue.toDisplayString(Vue.unref(spaceUserInfo).description ? Vue.unref(spaceUserInfo).description : "\u6682\u65E0\u4E2A\u6027\u7B7E\u540D"), 1)
                ]),
                !isFriend.value && !isMyself.value ? (Vue.openBlock(), Vue.createBlock(_component_ElButton, {
                  key: 0,
                  color: "#3b82f6",
                  round: "",
                  "ml-2": "",
                  onClick: handleAddFriend
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u5173\u6CE8")
                  ]),
                  _: 1
                })) : isMyself.value ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [], 64)) : (Vue.openBlock(), Vue.createBlock(_component_ElButton, {
                  key: 2,
                  color: "#3b82f6",
                  round: "",
                  "ml-2": ""
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode("\u53D1\u6D88\u606F")
                  ]),
                  _: 1
                }))
              ]),
              Vue.unref(spaceUserInfo).id === Vue.unref(userInfo).id ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_9, [
                Vue.createVNode(_component_UploadCpn, {
                  uploadConfig: Vue.unref(uploadConfig),
                  type: Vue.unref(uploadType).avatar,
                  onUpdateBgOrAvatar: updateBgOrAvatar
                }, null, 8, ["uploadConfig", "type"])
              ])) : Vue.createCommentVNode("", true),
              Vue.createElementVNode("div", _hoisted_10, [
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(tabList, (tab) => {
                  return Vue.openBlock(), Vue.createElementBlock("span", {
                    "text-gray": "",
                    "cursor-pointer": "",
                    "mr-5": "",
                    key: tab.id,
                    onClick: ($event) => changeTab(tab),
                    class: Vue.normalizeClass(Vue.unref(currentTab) === tab.comName ? "tab_active" : "")
                  }, Vue.toDisplayString(tab.name), 11, _hoisted_11);
                }), 128))
              ])
            ])
          ]),
          Vue.createElementVNode("div", _hoisted_12, [
            (Vue.openBlock(), Vue.createBlock(Vue.KeepAlive, null, [
              (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(Vue.unref(currentTab)), { friends: Vue.unref(friendList) }, null, 8, ["friends"]))
            ], 1024))
          ])
        ]),
        Vue.createVNode(_component_ElDialog, {
          modelValue: Vue.unref(userInfoDialogVisible),
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => Vue.isRef(userInfoDialogVisible) ? userInfoDialogVisible.value = $event : userInfoDialogVisible = $event),
          title: "\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F",
          width: "40%",
          "align-center": ""
        }, {
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_ElForm, {
              "label-position": "right",
              "label-width": "80px",
              ref_key: "userInfoFormRef",
              ref: userInfoFormRef,
              model: userInfoForm,
              rules: userInfoFormRules
            }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_ElFormItem, {
                  label: "\u7528\u6237\u540D",
                  prop: "name"
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_component_ElInput, {
                      placeholder: "",
                      modelValue: userInfoForm.name,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => userInfoForm.name = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                Vue.createVNode(_component_ElFormItem, {
                  label: "\u5BC6\u7801",
                  prop: "password"
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_component_ElInput, {
                      type: "password",
                      placeholder: "",
                      "show-password": "",
                      modelValue: userInfoForm.password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => userInfoForm.password = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                Vue.createVNode(_component_ElFormItem, { label: "\u4E2A\u4EBA\u4ECB\u7ECD" }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_component_ElInput, {
                      type: "textarea",
                      resize: "none",
                      modelValue: userInfoForm.desc,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => userInfoForm.desc = $event),
                      rows: 2
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                Vue.createVNode(_component_ElFormItem, null, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_component_ElButton, {
                      onClick: _cache[3] || (_cache[3] = ($event) => editUserInfo(userInfoFormRef.value))
                    }, {
                      default: Vue.withCtx(() => [
                        Vue.createTextVNode("\u4FEE\u6539")
                      ]),
                      _: 1
                    }),
                    Vue.createVNode(_component_ElButton, null, {
                      default: Vue.withCtx(() => [
                        Vue.createTextVNode("\u53D6\u6D88")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const SpaceView_vue_vue_type_style_index_0_scoped_4b72c443_lang = "";
const SpaceView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b72c443"]]);
export {
  SpaceView as default
};
