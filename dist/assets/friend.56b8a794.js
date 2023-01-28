import { o as opRequest, d as defineStore } from "./index.5ac02f08.js";
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
export {
  _sfc_main as _,
  useFriendStore as u
};
