import { o as opRequest, d as defineStore } from "./index.cdb67bbf.js";
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
export {
  useInvitationStore as u
};
