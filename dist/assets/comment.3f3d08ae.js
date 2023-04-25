import { o as opRequest, d as defineStore } from "./index.a1ce5fd2.js";
const getAllCommentById = (id) => opRequest.get({
  url: `/comment/${id}`
});
const postCommentWithForm = (commentForm) => opRequest.post({
  url: "/comment",
  data: commentForm
});
const useCommentStore = defineStore("commentStore", {
  state: () => {
    return {
      commentList: [],
      commentListWithControl: [],
      commentMap: /* @__PURE__ */ new Map()
    };
  },
  actions: {
    async getCommentListById(id) {
      const res = await getAllCommentById(id);
      this.commentList.length = 0;
      this.commentList.push(...res.data);
      const result = this.addNewField(res.data);
      this.commentListWithControl.length = 0;
      this.commentListWithControl.push(...result);
    },
    async createComment(commentForm) {
      const res = await postCommentWithForm(commentForm);
      if (res.code === 200) {
        this.getCommentListById(commentForm.inv_id);
        ElementPlus.ElMessage.success({
          message: res.message
        });
      } else {
        ElementPlus.ElMessage.error({
          message: "\u53D1\u8868\u8BC4\u8BBA\u5931\u8D25"
        });
      }
    },
    addNewField(arr) {
      arr.forEach((item) => {
        item.isShowInput = false;
        if (item.children) {
          this.addNewField(item.children);
        }
      });
      return arr;
    },
    async getAllCommentByOneSelf(list) {
      list.forEach(async (item) => {
        const res = await getAllCommentById(item.invitation_id);
        this.commentMap.set(item.invitation_id, res.data.length);
      });
    }
  }
});
export {
  useCommentStore as u
};
