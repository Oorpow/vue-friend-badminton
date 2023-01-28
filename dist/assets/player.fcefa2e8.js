import { o as opRequest, d as defineStore } from "./index.5ac02f08.js";
const getAllPlayer = () => opRequest.get({
  url: "/player"
});
const getOnePlayer = (id) => opRequest.get({
  url: `/player/${id}`
});
const usePlayerStore = defineStore("playerStore", {
  state: () => {
    return {
      playerList: [],
      currentPlayer: {}
    };
  },
  actions: {
    async getPlayerList() {
      const res = await getAllPlayer();
      this.playerList.length = 0;
      this.playerList.push(...res.data);
    },
    async getTargetPlayer(id) {
      const res = await getOnePlayer(id);
      this.currentPlayer = res.data;
    }
  },
  getters: {
    getCurrentPlayer: (state) => state.currentPlayer
  }
});
export {
  usePlayerStore as u
};
