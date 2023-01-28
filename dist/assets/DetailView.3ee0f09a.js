import { u as useRouter, a as useUserStore, s as storeToRefs } from "./index.cdb67bbf.js";
import { u as useInvitationStore } from "./invitation.9e113589.js";
import { u as useCommentStore } from "./comment.0a76e6ba.js";
import { u as useFriendStore } from "./friend.4ff8971b.js";
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
      const _component_Header = Vue.resolveComponent("Header");
      const _component_ArticleItem = Vue.resolveComponent("ArticleItem");
      const _component_Comment = Vue.resolveComponent("Comment");
      const _component_AuthorInfo = Vue.resolveComponent("AuthorInfo");
      const _component_OtherArticleItem = Vue.resolveComponent("OtherArticleItem");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_Header),
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createElementVNode("div", _hoisted_2, [
            Vue.createElementVNode("div", _hoisted_3, [
              flag.value ? (Vue.openBlock(), Vue.createBlock(_component_ArticleItem, {
                key: 0,
                invitationInfo: Vue.unref(getTargetInvitation)
              }, null, 8, ["invitationInfo"])) : Vue.createCommentVNode("", true),
              Vue.createVNode(_component_Comment, {
                commentList: Vue.unref(commentListWithControl),
                currentInvitationId: Vue.unref(currentInvitationId)
              }, null, 8, ["commentList", "currentInvitationId"])
            ]),
            Vue.createElementVNode("div", _hoisted_4, [
              Vue.createElementVNode("div", null, [
                flag.value ? (Vue.openBlock(), Vue.createBlock(_component_AuthorInfo, {
                  key: 0,
                  invitationInfo: Vue.unref(getTargetInvitation),
                  isFriend: Vue.unref(isFriend),
                  isMySelf: Vue.unref(isMySelf)
                }, null, 8, ["invitationInfo", "isFriend", "isMySelf"])) : Vue.createCommentVNode("", true),
                Vue.createElementVNode("div", _hoisted_5, [
                  _hoisted_6,
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(otherInvitation), (item) => {
                    return Vue.openBlock(), Vue.createBlock(_component_OtherArticleItem, {
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
