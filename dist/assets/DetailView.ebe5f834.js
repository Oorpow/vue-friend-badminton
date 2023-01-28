import { H as Header } from "./Header.77a3f866.js";
import { b as _export_sfc, u as useRouter, a as useUserStore, s as storeToRefs } from "./index.691cbf00.js";
import { _ as _sfc_main$6 } from "./Avatar.vue_vue_type_script_setup_true_lang.da07dfc6.js";
import { g as star_default, h as chat_line_square_default, t as timer_default, b as arrow_down_default, i as calendar_default, v as view_default, j as star_filled_default } from "./index.34529f81.js";
import { u as useCommentStore } from "./comment.50dc25a4.js";
import { u as useInvitationStore } from "./invitation.36cd443b.js";
import { u as useFriendStore } from "./friend.496a7e4a.js";
import "./message.4da7ab4b.js";
const _hoisted_1$5 = {
  "border-b-1": "",
  "border-b-gray-3": ""
};
const _hoisted_2$5 = { "m-0": "" };
const _hoisted_3$5 = ["innerHTML"];
const _sfc_main$5 = /* @__PURE__ */ Vue.defineComponent({
  __name: "ArticleItem",
  props: {
    invitationInfo: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$5, [
        Vue.createElementVNode("h2", _hoisted_2$5, Vue.toDisplayString(__props.invitationInfo.title), 1),
        Vue.createElementVNode("div", {
          class: "article_main",
          innerHTML: __props.invitationInfo.content
        }, null, 8, _hoisted_3$5)
      ]);
    };
  }
});
const ArticleItem_vue_vue_type_style_index_0_scoped_12a35daf_lang = "";
const ArticleItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-12a35daf"]]);
const _hoisted_1$4 = {
  flex: "",
  "items-center": ""
};
const _hoisted_2$4 = {
  "ml-2": "",
  "text-sm": ""
};
const _hoisted_3$4 = { "m-auto": "" };
const _hoisted_4$4 = {
  "text-sm": "",
  "text-gray-5": ""
};
const _hoisted_5$4 = {
  flex: "",
  "mt-2": ""
};
const _hoisted_6$4 = {
  flex: "",
  "items-center": ""
};
const _hoisted_7$2 = {
  "ml-1": "",
  "text-sm": "",
  "text-gray-4": ""
};
const _hoisted_8$2 = {
  flex: "",
  "items-center": "",
  "mx-3": ""
};
const _hoisted_9$2 = {
  flex: "",
  "items-center": ""
};
const _hoisted_10$2 = {
  "ml-1": "",
  "text-sm": "",
  "text-gray-4": ""
};
const _sfc_main$4 = /* @__PURE__ */ Vue.defineComponent({
  __name: "OtherArticleItem",
  props: {
    invitationInfo: null,
    commentMap: null
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const serverUrl = "http://175.178.99.5:8000/";
    const navToArticle = () => {
      router.push({
        name: `detail`,
        params: {
          id: props.invitationInfo.invitation_id
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_ElImage = Vue.resolveComponent("ElImage");
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      return Vue.openBlock(), Vue.createElementBlock("div", {
        flex: "",
        "flex-col": "",
        "cursor-pointer": "",
        "p-3": "",
        "border-b-1": "",
        "border-gray-2": "",
        onClick: navToArticle
      }, [
        Vue.createElementVNode("div", _hoisted_1$4, [
          Vue.createVNode(_sfc_main$6, {
            username: __props.invitationInfo.userInfo.name,
            avatar: __props.invitationInfo.userInfo.avatar
          }, null, 8, ["username", "avatar"]),
          Vue.createElementVNode("span", _hoisted_2$4, Vue.toDisplayString(__props.invitationInfo.userInfo.name), 1)
        ]),
        Vue.createElementVNode("div", _hoisted_3$4, [
          Vue.createVNode(_component_ElImage, {
            src: Vue.unref(serverUrl) + __props.invitationInfo.img,
            fit: "cover",
            style: { "width": "140px", "height": "140px" }
          }, null, 8, ["src"])
        ]),
        Vue.createElementVNode("div", null, [
          Vue.createElementVNode("span", _hoisted_4$4, Vue.toDisplayString(__props.invitationInfo.title), 1)
        ]),
        Vue.createElementVNode("div", _hoisted_5$4, [
          Vue.createElementVNode("div", _hoisted_6$4, [
            Vue.createVNode(_component_ElIcon, { color: "#9ca3af" }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(Vue.unref(star_default))
              ]),
              _: 1
            }),
            Vue.createElementVNode("span", _hoisted_7$2, Vue.toDisplayString(__props.invitationInfo.stars === 0 ? "" : __props.invitationInfo.stars), 1)
          ]),
          Vue.createElementVNode("div", _hoisted_8$2, [
            Vue.createVNode(_component_ElIcon, { color: "#9ca3af" }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(Vue.unref(chat_line_square_default))
              ]),
              _: 1
            }),
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.commentMap, (v, k) => {
              return Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("span", {
                key: k,
                "ml-1": "",
                "text-sm": "",
                "text-gray-4": ""
              }, Vue.toDisplayString(v[1] === 0 ? "" : v[1]), 513)), [
                [Vue.vShow, v[0] === __props.invitationInfo.invitation_id]
              ]);
            }), 128))
          ]),
          Vue.createElementVNode("div", _hoisted_9$2, [
            Vue.createVNode(_component_ElIcon, { color: "#9ca3af" }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(Vue.unref(timer_default))
              ]),
              _: 1
            }),
            Vue.createElementVNode("span", _hoisted_10$2, Vue.toDisplayString(_ctx.$formatTime.format(__props.invitationInfo.createAt)), 1)
          ])
        ])
      ]);
    };
  }
});
const OtherArticleItem_vue_vue_type_style_index_0_scoped_b4afa835_lang = "";
const OtherArticleItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b4afa835"]]);
const _hoisted_1$3 = {
  "w-full": "",
  flex: "",
  "flex-col": "",
  "ml-2": ""
};
const _hoisted_2$3 = {
  "text-gray-6": "",
  "text-sm": ""
};
const _hoisted_3$3 = { "m-0": "" };
const _hoisted_4$3 = { "mt-2": "" };
const _hoisted_5$3 = {
  "text-sm": "",
  "text-gray-4": ""
};
const _hoisted_6$3 = ["onClick"];
const _sfc_main$3 = /* @__PURE__ */ Vue.defineComponent({
  __name: "CommentItem",
  props: {
    commentList: null,
    currentInvitationId: null
  },
  emits: ["showReplyInput"],
  setup(__props, { emit: emits }) {
    const emitShowReplyInput = (item) => {
      emits("showReplyInput", item);
    };
    return (_ctx, _cache) => {
      const _component_Avatar = Vue.resolveComponent("Avatar");
      const _component_CommentItem = Vue.resolveComponent("CommentItem", true);
      return Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.commentList, (item) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          flex: "",
          "w-full": "",
          "mt-5": "",
          key: item.id
        }, [
          Vue.createElementVNode("div", null, [
            Vue.createVNode(_component_Avatar, {
              username: item.userInfo.name,
              avatar: item.userInfo.avatar
            }, null, 8, ["username", "avatar"])
          ]),
          Vue.createElementVNode("div", _hoisted_1$3, [
            Vue.createElementVNode("span", _hoisted_2$3, Vue.toDisplayString(item.userInfo.name), 1),
            Vue.createElementVNode("p", _hoisted_3$3, Vue.toDisplayString(item.content), 1),
            Vue.createElementVNode("div", _hoisted_4$3, [
              Vue.createElementVNode("span", _hoisted_5$3, Vue.toDisplayString(_ctx.$formatTime.format(item.createAt)), 1),
              Vue.createElementVNode("span", {
                class: "reply_button",
                onClick: ($event) => emitShowReplyInput(item)
              }, "\u56DE\u590D", 8, _hoisted_6$3)
            ]),
            "children" in item ? (Vue.openBlock(), Vue.createBlock(_component_CommentItem, {
              key: 0,
              commentList: item.children,
              currentInvitationId: __props.currentInvitationId,
              onShowReplyInput: emitShowReplyInput
            }, null, 8, ["commentList", "currentInvitationId"])) : Vue.createCommentVNode("", true)
          ])
        ]);
      }), 128);
    };
  }
});
const CommentItem_vue_vue_type_style_index_0_scoped_a74182eb_lang = "";
const CommentItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a74182eb"]]);
const _withScopeId = (n) => (Vue.pushScopeId("data-v-1e46699d"), n = n(), Vue.popScopeId(), n);
const _hoisted_1$2 = { "my-5": "" };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("span", {
  "text-2xl": "",
  "font-bold": ""
}, "\u8BC4\u8BBA", -1));
const _hoisted_4$2 = { "ml-1": "" };
const _hoisted_5$2 = { "mt-7": "" };
const _hoisted_6$2 = {
  "w-full": "",
  flex: "",
  "flex-col": ""
};
const _hoisted_7$1 = {
  flex: "",
  "w-full": "",
  "h-6": ""
};
const _hoisted_8$1 = { "w-5": "" };
const _hoisted_9$1 = {
  flex: "",
  "w-full": "",
  "h-full": "",
  "border-b-1": "",
  "border-b-gray-3": "",
  "p-b-5": ""
};
const _hoisted_10$1 = { "mt-10": "" };
const _hoisted_11$1 = { class: "w-5.5/10 fixed bottom-0" };
const _hoisted_12$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("i", { class: "reply_box absolute w-full h-3 z--1 top--3" }, null, -1));
const _hoisted_13 = { class: "relative flex flex-col p-5 bg-white ml--3 border-t-0.5 border-gray-3" };
const _hoisted_14 = {
  flex: "",
  "items-center": "",
  "mt-2": ""
};
const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
  __name: "Comment",
  props: {
    commentList: null,
    currentInvitationId: null
  },
  setup(__props) {
    const props = __props;
    const userStore = useUserStore();
    const commentStore = useCommentStore();
    const { userInfo } = storeToRefs(userStore);
    const inputConfig = {
      rows: 2,
      type: "textarea"
    };
    const commentForm = Vue.reactive({
      content: "",
      inv_id: props.currentInvitationId,
      parent_id: null,
      user_id: userInfo.value.id
    });
    const ableToComment = Vue.computed(() => userInfo.value.id ? true : false);
    const commentPlaceHolder = Vue.computed(
      () => ableToComment.value ? "\u8BF7\u53D1\u8868\u53CB\u5584\u7684\u8BC4\u8BBA" : "\u8BF7\u5148\u767B\u5F55\u540E\u518D\u8FDB\u884C\u8BC4\u8BBA"
    );
    const postComment = () => {
      if (userInfo.value.id) {
        commentStore.createComment(commentForm);
        commentForm.content = "";
      }
    };
    const replyForm = Vue.reactive({
      content: "",
      inv_id: props.currentInvitationId,
      parent_id: null,
      user_id: userInfo.value.id
    });
    let isShowReplyInput = Vue.ref(false);
    const showReplyInput = (comment) => {
      isShowReplyInput.value = true;
      replyForm.parent_id = comment.id;
    };
    const replyComment = () => {
      if (userInfo.value.id) {
        commentStore.createComment(replyForm);
        replyForm.content = "";
        isShowReplyInput.value = false;
      }
    };
    const beforeEnter = (el) => {
      el.style.transform = "translateY(50px)";
      el.style.opacity = "0";
    };
    const enter = (el) => {
      Gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.5
      });
    };
    return (_ctx, _cache) => {
      const _component_ElInput = Vue.resolveComponent("ElInput");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      const _component_ElEmpty = Vue.resolveComponent("ElEmpty");
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("div", _hoisted_1$2, [
          Vue.createElementVNode("div", null, [
            __props.commentList.length !== 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$2, [
              _hoisted_3$2,
              Vue.createElementVNode("span", _hoisted_4$2, Vue.toDisplayString(__props.commentList.length), 1)
            ])) : Vue.createCommentVNode("", true)
          ]),
          Vue.createElementVNode("div", _hoisted_5$2, [
            Vue.createElementVNode("div", _hoisted_6$2, [
              Vue.createElementVNode("div", _hoisted_7$1, [
                Vue.createElementVNode("div", _hoisted_8$1, [
                  Vue.createVNode(_sfc_main$6, {
                    username: Vue.unref(userInfo).name,
                    avatar: Vue.unref(userInfo).avatar
                  }, null, 8, ["username", "avatar"])
                ]),
                Vue.createElementVNode("div", _hoisted_9$1, [
                  Vue.createVNode(_component_ElInput, Vue.mergeProps(inputConfig, {
                    modelValue: commentForm.content,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => commentForm.content = $event),
                    resize: "none",
                    disabled: !Vue.unref(ableToComment),
                    placeholder: Vue.unref(commentPlaceHolder)
                  }), null, 16, ["modelValue", "disabled", "placeholder"]),
                  Vue.createVNode(_component_ElButton, {
                    type: "primary",
                    style: { "height": "100%", "margin-left": "10px" },
                    disabled: !Vue.unref(ableToComment) || commentForm.content === "",
                    onClick: postComment
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode("\u53D1\u8868\u8BC4\u8BBA")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ]),
            Vue.createElementVNode("div", _hoisted_10$1, [
              !__props.commentList.length ? (Vue.openBlock(), Vue.createBlock(_component_ElEmpty, {
                key: 0,
                description: "\u6682\u65E0\u8BC4\u8BBA"
              })) : Vue.createCommentVNode("", true),
              Vue.createVNode(CommentItem, {
                commentList: __props.commentList,
                currentInvitationId: __props.currentInvitationId,
                onShowReplyInput: showReplyInput
              }, null, 8, ["commentList", "currentInvitationId"])
            ])
          ])
        ]),
        Vue.createVNode(Vue.Transition, {
          appear: "",
          onBeforeEnter: beforeEnter,
          onEnter: enter
        }, {
          default: Vue.withCtx(() => [
            Vue.withDirectives(Vue.createElementVNode("div", _hoisted_11$1, [
              _hoisted_12$1,
              Vue.createElementVNode("div", _hoisted_13, [
                Vue.createElementVNode("div", {
                  flex: "",
                  "justify-end": "",
                  "cursor-pointer": "",
                  onClick: _cache[1] || (_cache[1] = ($event) => Vue.isRef(isShowReplyInput) ? isShowReplyInput.value = false : isShowReplyInput = false)
                }, [
                  Vue.createVNode(_component_ElIcon, null, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(Vue.unref(arrow_down_default))
                    ]),
                    _: 1
                  })
                ]),
                Vue.createElementVNode("div", _hoisted_14, [
                  Vue.createVNode(_sfc_main$6, {
                    username: Vue.unref(userInfo).name,
                    avatar: Vue.unref(userInfo).avatar,
                    "mr-2": ""
                  }, null, 8, ["username", "avatar"]),
                  Vue.createVNode(_component_ElInput, {
                    modelValue: replyForm.content,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => replyForm.content = $event),
                    resize: "none"
                  }, null, 8, ["modelValue"]),
                  Vue.createVNode(_component_ElButton, {
                    type: "primary",
                    onClick: replyComment,
                    "ml-2": "",
                    disabled: replyForm.content === ""
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode("\u56DE\u590D")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ], 512), [
              [Vue.vShow, Vue.unref(isShowReplyInput)]
            ])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const Comment_vue_vue_type_style_index_0_scoped_1e46699d_lang = "";
const Comment = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1e46699d"]]);
const _hoisted_1$1 = {
  "bg-white": "",
  "rounded-lg": "",
  "border-1": "",
  "border-gray-2": ""
};
const _hoisted_2$1 = { "p-3": "" };
const _hoisted_3$1 = {
  flex: "",
  "items-center": ""
};
const _hoisted_4$1 = {
  flex: "",
  "flex-col": "",
  "ml-2": ""
};
const _hoisted_5$1 = {
  "text-sm": "",
  "text-gray": ""
};
const _hoisted_6$1 = {
  flex: "",
  "mt-2": "",
  "p-b-4": "",
  "border-b-1": "",
  "border-gray-2": ""
};
const _hoisted_7 = {
  "text-sm": "",
  "ml-2": ""
};
const _hoisted_8 = {
  flex: "",
  "items-center": ""
};
const _hoisted_9 = /* @__PURE__ */ Vue.createElementVNode("span", { "ml-2": "" }, "\u6587\u7AE0\u88AB\u9605\u8BFB 1200", -1);
const _hoisted_10 = {
  flex: "",
  "items-center": ""
};
const _hoisted_11 = { "ml-2": "" };
const _hoisted_12 = { "mt-3": "" };
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "AuthorInfo",
  props: {
    invitationInfo: null,
    isFriend: { type: Boolean },
    isMySelf: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const userStore = useUserStore();
    const invitationStore = useInvitationStore();
    const { userInfo } = storeToRefs(userStore);
    const { starredList } = storeToRefs(invitationStore);
    const serverUrl = "http://175.178.99.5:8000/";
    const isFriendWith = Vue.ref(false);
    const isMe = Vue.ref(false);
    Vue.watch(
      () => [props.isFriend, props.isMySelf],
      (newVal) => {
        isFriendWith.value = newVal[0];
        isMe.value = newVal[1];
      }
    );
    const computeSpaceBg = Vue.computed(() => {
      return props.invitationInfo.userInfo.space_bg ? `url(${serverUrl + props.invitationInfo.userInfo.space_bg})` : "#3b82f6";
    });
    const computeButtonText = Vue.computed(() => {
      let val = "";
      if (!isFriendWith.value && !isMe.value) {
        val = "\u5173\u6CE8";
      } else if (isMe.value) {
        val = "\u6211\u7684\u7A7A\u95F4";
      } else {
        val = "\u53D1\u6D88\u606F";
      }
      return val;
    });
    const navToRoute = (path) => {
      router.push(path);
    };
    if (userInfo.value.id) {
      invitationStore.findAllStarredInvitation(userInfo.value.id);
    }
    const isStarred = (userId, invitationId) => {
      return starredList.value.some(
        (item) => item.user_id === userId && item.invitation_id === invitationId
      );
    };
    const handleStar = async (invitationId) => {
      if (!userInfo.value.id) {
        ElementPlus.ElNotification({
          title: "\u8BF7\u5148\u767B\u5F55\u518D\u8FDB\u884Cstar",
          type: "info"
        });
      } else {
        const starred = isStarred(userInfo.value.id, invitationId);
        await invitationStore.starOrUnstarInvitationById(
          userInfo.value.id,
          invitationId,
          starred ? 0 : 1
        );
        await invitationStore.getInvitationById(invitationId);
        await invitationStore.findAllStarredInvitation(userInfo.value.id);
      }
    };
    return (_ctx, _cache) => {
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElButton = Vue.resolveComponent("ElButton");
      const _directive_has_auth = Vue.resolveDirective("has-auth");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
        Vue.createElementVNode("div", null, [
          Vue.createElementVNode("div", {
            "w-full": "",
            "h-6": "",
            "rounded-t-lg": "",
            style: Vue.normalizeStyle({
              background: Vue.unref(computeSpaceBg)
            })
          }, null, 4),
          Vue.createElementVNode("div", _hoisted_2$1, [
            Vue.createElementVNode("div", _hoisted_3$1, [
              Vue.createVNode(_sfc_main$6, {
                username: __props.invitationInfo.userInfo.name,
                avatar: __props.invitationInfo.userInfo.avatar
              }, null, 8, ["username", "avatar"]),
              Vue.createElementVNode("div", _hoisted_4$1, [
                Vue.createElementVNode("span", null, Vue.toDisplayString(__props.invitationInfo.userInfo.name), 1),
                Vue.createElementVNode("span", _hoisted_5$1, Vue.toDisplayString(__props.invitationInfo.userInfo.description), 1)
              ])
            ]),
            Vue.createElementVNode("div", _hoisted_6$1, [
              Vue.createVNode(_component_ElIcon, { size: 20 }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(Vue.unref(calendar_default))
                ]),
                _: 1
              }),
              Vue.createElementVNode("span", _hoisted_7, "\u53D1\u5E03\u81EA: " + Vue.toDisplayString(_ctx.$formatTime.format(__props.invitationInfo.createAt)), 1)
            ]),
            Vue.createElementVNode("div", {
              flex: "",
              "flex-col": "",
              "my-2": "",
              class: Vue.normalizeClass(isMe.value ? "" : "p-b-2 border-b-1 border-gray-2")
            }, [
              Vue.createElementVNode("div", _hoisted_8, [
                Vue.createVNode(_component_ElIcon, { size: 22 }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(Vue.unref(view_default))
                  ]),
                  _: 1
                }),
                _hoisted_9
              ]),
              Vue.createElementVNode("div", _hoisted_10, [
                Vue.createVNode(_component_ElIcon, {
                  size: 22,
                  onClick: _cache[0] || (_cache[0] = ($event) => handleStar(__props.invitationInfo.invitation_id)),
                  class: "cursor-pointer",
                  color: isStarred(Vue.unref(userInfo).id, __props.invitationInfo.invitation_id) ? "#f6bf48" : "#000"
                }, {
                  default: Vue.withCtx(() => [
                    Vue.unref(userInfo).id && isStarred(Vue.unref(userInfo).id, __props.invitationInfo.invitation_id) ? (Vue.openBlock(), Vue.createBlock(Vue.unref(star_filled_default), { key: 0 })) : (Vue.openBlock(), Vue.createBlock(Vue.unref(star_default), { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["color"]),
                Vue.createElementVNode("span", _hoisted_11, "\u83B7\u5F97Star " + Vue.toDisplayString(__props.invitationInfo.stars), 1)
              ])
            ], 2),
            Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", _hoisted_12, [
              Vue.createVNode(_component_ElButton, {
                "w-full": "",
                round: "",
                color: "#3b82f6",
                onClick: _cache[1] || (_cache[1] = ($event) => navToRoute(
                  Vue.unref(computeButtonText) === "\u53D1\u6D88\u606F" ? "/message" : `/space/${Vue.unref(userInfo).id}`
                ))
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(Vue.toDisplayString(Vue.unref(computeButtonText)), 1)
                ]),
                _: 1
              })
            ])), [
              [_directive_has_auth, Vue.unref(userInfo).id]
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "w-9/10 mx-auto mt-3" };
const _hoisted_2 = { class: "flex my-10 justify-around items-start" };
const _hoisted_3 = { class: "w-6/10 flex flex-col bg-white p-3 rounded-lg" };
const _hoisted_4 = { class: "w-35 flex flex-col" };
const _hoisted_5 = {
  "bg-white": "",
  "rounded-lg": "",
  "border-1": "",
  "border-gray-2": "",
  "mt-5": ""
};
const _hoisted_6 = /* @__PURE__ */ Vue.createElementVNode("div", {
  "h-4": "",
  "rounded-t-lg": "",
  "bg-gray-4": "",
  flex: "",
  "items-center": ""
}, [
  /* @__PURE__ */ Vue.createElementVNode("span", {
    "ml-2": "",
    "text-white": "",
    "text-sm": ""
  }, "\u76F8\u5173\u63A8\u8350")
], -1);
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "DetailView",
  setup(__props) {
    const router = useRouter();
    const invitationStore = useInvitationStore();
    const commentStore = useCommentStore();
    const friendStore = useFriendStore();
    const userStore = useUserStore();
    const { getTargetInvitation, otherInvitation } = storeToRefs(invitationStore);
    const { commentListWithControl, commentMap } = storeToRefs(commentStore);
    const { friendList } = storeToRefs(friendStore);
    const { userInfo } = storeToRefs(userStore);
    let currentInvitationId = Vue.ref(0);
    let isFriend = Vue.ref(false);
    let isMySelf = Vue.ref(false);
    Vue.watch(
      router.currentRoute,
      async (newVal) => {
        currentInvitationId.value = Number(newVal.params.id);
        await invitationStore.getInvitationById(currentInvitationId.value);
        await commentStore.getCommentListById(currentInvitationId.value);
        invitationStore.getOtherInvitation(currentInvitationId.value).then(() => {
          commentStore.getAllCommentByOneSelf(otherInvitation.value);
        });
        if (userInfo.value.id) {
          friendStore.getFriendListById(userInfo.value.id).then(() => {
            const result = friendList.value.some(
              (item) => item.friendInfo.id === getTargetInvitation.value.invitation_id
            );
            isMySelf.value = getTargetInvitation.value.userInfo.id === userInfo.value.id;
            isFriend.value = result;
          });
        }
      },
      {
        immediate: true,
        deep: true
      }
    );
    const flag = Vue.ref(false);
    Vue.watchEffect(() => {
      if (getTargetInvitation.value.title != null) {
        flag.value = true;
      }
    });
    commentStore.getCommentListById(currentInvitationId.value);
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(Header),
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createElementVNode("div", _hoisted_2, [
            Vue.createElementVNode("div", _hoisted_3, [
              flag.value ? (Vue.openBlock(), Vue.createBlock(ArticleItem, {
                key: 0,
                invitationInfo: Vue.unref(getTargetInvitation)
              }, null, 8, ["invitationInfo"])) : Vue.createCommentVNode("", true),
              Vue.createVNode(Comment, {
                commentList: Vue.unref(commentListWithControl),
                currentInvitationId: Vue.unref(currentInvitationId)
              }, null, 8, ["commentList", "currentInvitationId"])
            ]),
            Vue.createElementVNode("div", _hoisted_4, [
              Vue.createElementVNode("div", null, [
                flag.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1, {
                  key: 0,
                  invitationInfo: Vue.unref(getTargetInvitation),
                  isFriend: Vue.unref(isFriend),
                  isMySelf: Vue.unref(isMySelf)
                }, null, 8, ["invitationInfo", "isFriend", "isMySelf"])) : Vue.createCommentVNode("", true),
                Vue.createElementVNode("div", _hoisted_5, [
                  _hoisted_6,
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(otherInvitation), (item) => {
                    return Vue.openBlock(), Vue.createBlock(OtherArticleItem, {
                      key: item.invitation_id,
                      invitationInfo: item,
                      commentMap: Vue.unref(commentMap)
                    }, null, 8, ["invitationInfo", "commentMap"]);
                  }), 128))
                ])
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
