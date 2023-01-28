import { o as opRequest, d as defineStore } from "./index.5ac02f08.js";
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
export {
  useMessageStore as u
};
