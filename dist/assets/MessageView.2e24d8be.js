import { g as search_default, e as useFriendStore, h as useMessageStore, p as picture_default, i as home_filled_default, _ as _sfc_main$9, H as Header, j as chat_round_default, k as user_default } from "./Header.8f434169.js";
import { a as useUserStore, s as storeToRefs } from "./index.6e0e0576.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./logo.e6501a95.js";
const _hoisted_1$8 = {
  "pt-2": "",
  "px-2": "",
  "p-b-2": "",
  "border-b-1": "",
  "border-gray-2": ""
};
const _sfc_main$8 = /* @__PURE__ */ Vue.defineComponent({
  __name: "SearchExistFriend",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const handleSearch = (e) => {
      emits("update:modelValue", e.trim());
    };
    return (_ctx, _cache) => {
      const _component_ElInput = Vue.resolveComponent("ElInput");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$8, [
        Vue.createVNode(_component_ElInput, {
          size: "small",
          clearable: "",
          "prefix-icon": Vue.unref(search_default),
          placeholder: "\u641C\u7D22\u597D\u53CB",
          "model-value": __props.modelValue,
          onInput: handleSearch
        }, null, 8, ["prefix-icon", "model-value"])
      ]);
    };
  }
});
const _hoisted_1$7 = { "p-2": "" };
const _hoisted_2$6 = /* @__PURE__ */ Vue.createElementVNode("span", {
  "text-sm": "",
  "text-gray-4": ""
}, "\u8054\u7CFB\u4EBA", -1);
const _hoisted_3$5 = {
  "ml-2": "",
  "text-sm": ""
};
const _hoisted_4$4 = ["onClick"];
const _sfc_main$7 = /* @__PURE__ */ Vue.defineComponent({
  __name: "SearchedItem",
  props: {
    list: { default: () => [] }
  },
  setup(__props) {
    const socket = Vue.inject("socket");
    const friendStore = useFriendStore();
    const userStore = useUserStore();
    const { userInfo } = storeToRefs(userStore);
    const makeFriend = (user) => {
      if (user.status === 0) {
        friendStore.sendReqToFriend(userInfo.value.id, user.id);
      } else {
        socket.emit("send_req", user.name, userInfo.value.name, userInfo.value.id);
      }
    };
    return (_ctx, _cache) => {
      const _component_ElAvatar = Vue.resolveComponent("ElAvatar");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("div", _hoisted_1$7, [
          Vue.renderSlot(_ctx.$slots, "header", {}, () => [
            _hoisted_2$6
          ])
        ]),
        Vue.createElementVNode("div", null, [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.list, (item) => {
            return Vue.openBlock(), Vue.createElementBlock("div", {
              flex: "",
              "items-center": "",
              "justify-between": "",
              "p-2": "",
              "my-3": "",
              "first:mt-0": "",
              "bg-white": "",
              "hover:bg-gray-2": "",
              "cursor-pointer": "",
              key: item.id
            }, [
              Vue.createElementVNode("div", null, [
                Vue.createVNode(_component_ElAvatar, { shape: "square" }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode(Vue.toDisplayString(item.friendInfo && item.friendInfo.name || item.name && item.name), 1)
                  ]),
                  _: 2
                }, 1024),
                Vue.createElementVNode("span", _hoisted_3$5, Vue.toDisplayString(item.friendInfo && item.friendInfo.name || item.name && item.name), 1)
              ]),
              Vue.withDirectives(Vue.createElementVNode("div", {
                class: "i-ic-baseline-person-add text-xl cursor-pointer text-gray",
                onClick: ($event) => makeFriend(item)
              }, null, 8, _hoisted_4$4), [
                [Vue.vShow, !item.friendInfo]
              ])
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
});
const _hoisted_1$6 = /* @__PURE__ */ Vue.createElementVNode("span", {
  "text-sm": "",
  "text-gray-4": ""
}, "\u964C\u751F\u4EBA", -1);
const _sfc_main$6 = /* @__PURE__ */ Vue.defineComponent({
  __name: "FriendItemSearched",
  props: {
    list: { default: () => [] },
    strangers: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_sfc_main$7, { list: __props.strangers }, {
          header: Vue.withCtx(() => [
            _hoisted_1$6
          ]),
          _: 1
        }, 8, ["list"]),
        Vue.createVNode(_sfc_main$7, { list: __props.list }, null, 8, ["list"])
      ], 64);
    };
  }
});
const judgeUserStatus = (status) => status === 0 ? "\u79BB\u7EBF" : "\u5728\u7EBF";
const _hoisted_1$5 = ["onClick"];
const _hoisted_2$5 = { flex: "" };
const _hoisted_3$4 = {
  "ml-2": "",
  flex: "",
  "flex-col": "",
  "overflow-hidden": ""
};
const _hoisted_4$3 = { "m-0": "" };
const _hoisted_5$2 = { "text-sm": "" };
const _hoisted_6$2 = {
  key: 0,
  "text-sm": "",
  truncate: ""
};
const _sfc_main$5 = /* @__PURE__ */ Vue.defineComponent({
  __name: "FriendItem",
  props: {
    friendList: null,
    lastMsgList: null,
    unreadMap: null
  },
  emits: ["chooseFriend"],
  setup(__props, { emit: emits }) {
    const currentChatFriendId = Vue.ref(0);
    const chooseChatFriend = (friend) => {
      currentChatFriendId.value = friend.id;
      emits("chooseFriend", friend.friendInfo);
    };
    return (_ctx, _cache) => {
      const _component_ElAvatar = Vue.resolveComponent("ElAvatar");
      const _component_ElBadge = Vue.resolveComponent("ElBadge");
      return Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.friendList, (friend) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass([
            "friend_item",
            friend.id === currentChatFriendId.value ? "bg-gray-1" : ""
          ]),
          key: friend.id,
          onClick: ($event) => chooseChatFriend(friend)
        }, [
          Vue.createElementVNode("div", _hoisted_2$5, [
            Vue.createElementVNode("div", null, [
              Vue.createVNode(_component_ElAvatar, {
                size: "large",
                shape: "square"
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(Vue.toDisplayString(friend.friendInfo.name.slice(0, 1)), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            Vue.createElementVNode("div", _hoisted_3$4, [
              Vue.createElementVNode("div", null, [
                Vue.createElementVNode("h4", _hoisted_4$3, Vue.toDisplayString(friend.friendInfo.name), 1),
                Vue.createElementVNode("span", _hoisted_5$2, Vue.toDisplayString(Vue.unref(judgeUserStatus)(friend.friendInfo.status)), 1),
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.unreadMap, (v2, k2) => {
                  return Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_ElBadge, {
                    key: k2,
                    value: v2[1].length,
                    "ml-3": ""
                  }, null, 8, ["value"])), [
                    [Vue.vShow, v2[0] === friend.friendInfo.name && v2[1].length !== 0]
                  ]);
                }), 128))
              ]),
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.lastMsgList, (msg) => {
                return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, {
                  key: msg.friendId
                }, [
                  friend.friendInfo.id === msg.friendId ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_6$2, Vue.toDisplayString(msg.type === 0 ? msg.content : "[\u56FE\u7247]"), 1)) : Vue.createCommentVNode("", true)
                ], 64);
              }), 128))
            ])
          ])
        ], 10, _hoisted_1$5);
      }), 128);
    };
  }
});
const FriendItem_vue_vue_type_style_index_0_scoped_506fabc4_lang = "";
const FriendItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-506fabc4"]]);
const _hoisted_1$4 = {
  flex: "",
  "flex-col": "",
  "ml-3": ""
};
const _hoisted_2$4 = { key: 0 };
const _hoisted_3$3 = { class: "i-ic-twotone-check-circle-outline mr-2 bg-gray-3" };
const _sfc_main$4 = /* @__PURE__ */ Vue.defineComponent({
  __name: "BubbleBox",
  props: {
    msgList: null
  },
  setup(__props) {
    const props = __props;
    const store = useUserStore();
    const messageStore = useMessageStore();
    const { userInfo } = storeToRefs(store);
    const { imgPreviewList } = storeToRefs(messageStore);
    const serverUrl = "http://175.178.99.5:8000/";
    let initPreviewIndex = Vue.ref(0);
    const switchImg = (id) => {
      const result = props.msgList.filter((item) => item.id === id)[0];
      messageStore.getAllImgOfMsg(result.content);
    };
    const isUserSend = (id, leftStyle, rightStyle) => {
      if (leftStyle || rightStyle) {
        return id === userInfo.value.id ? rightStyle : leftStyle;
      } else {
        return id === userInfo.value.id;
      }
    };
    return (_ctx, _cache) => {
      const _component_ElAvatar = Vue.resolveComponent("ElAvatar");
      const _component_ElImage = Vue.resolveComponent("ElImage");
      return Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(__props.msgList, (item) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass(
            isUserSend(item.from_uid, "message_item_left", "message_item_right")
          ),
          key: item.id
        }, [
          Vue.createVNode(_component_ElAvatar, { shape: "square" }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode(Vue.toDisplayString(isUserSend(item.from_uid) ? Vue.unref(userInfo).name.slice(0, 1) : item.friendInfo.name.slice(0, 1)), 1)
            ]),
            _: 2
          }, 1024),
          Vue.createElementVNode("div", _hoisted_1$4, [
            Vue.createElementVNode("span", {
              "mt--1": "",
              "text-sm": "",
              "mr-5": "",
              class: Vue.normalizeClass(isUserSend(item.from_uid, "text-left", "text-right"))
            }, Vue.toDisplayString(isUserSend(item.from_uid) ? "" : item.friendInfo.name), 3),
            Vue.createElementVNode("div", {
              flex: "",
              "items-center": "",
              class: Vue.normalizeClass(isUserSend(item.from_uid, "", "flex-row-reverse"))
            }, [
              Vue.createElementVNode("div", {
                class: Vue.normalizeClass(isUserSend(item.from_uid, "bubble_left", "bubble_right"))
              }, [
                item.type === 0 ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_2$4, Vue.toDisplayString(item.content), 1)) : (Vue.openBlock(), Vue.createBlock(_component_ElImage, {
                  key: 1,
                  class: "w-15 h-10 overflow-hidden",
                  src: Vue.unref(serverUrl) + item.content,
                  "preview-src-list": Vue.unref(imgPreviewList),
                  "initial-index": Vue.unref(initPreviewIndex),
                  fit: "cover",
                  onClick: ($event) => switchImg(item.id)
                }, null, 8, ["src", "preview-src-list", "initial-index", "onClick"]))
              ], 2),
              Vue.withDirectives(Vue.createElementVNode("div", _hoisted_3$3, null, 512), [
                [Vue.vShow, isUserSend(item.from_uid) && item.is_read === 1]
              ])
            ], 2)
          ])
        ], 2);
      }), 128);
    };
  }
});
const BubbleBox_vue_vue_type_style_index_0_scoped_85f44fc5_lang = "";
const BubbleBox = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-85f44fc5"]]);
function assertNonEmptyString(str) {
  if (typeof str !== "string" || !str) {
    throw new Error("expected a non-empty string, got: " + str);
  }
}
function assertNumber(number) {
  if (typeof number !== "number") {
    throw new Error("expected a number, got: " + number);
  }
}
const DB_VERSION_CURRENT = 1;
const DB_VERSION_INITIAL = 1;
const STORE_EMOJI = "emoji";
const STORE_KEYVALUE = "keyvalue";
const STORE_FAVORITES = "favorites";
const FIELD_TOKENS = "tokens";
const INDEX_TOKENS = "tokens";
const FIELD_UNICODE = "unicode";
const INDEX_COUNT = "count";
const FIELD_GROUP = "group";
const FIELD_ORDER = "order";
const INDEX_GROUP_AND_ORDER = "group-order";
const KEY_ETAG = "eTag";
const KEY_URL = "url";
const KEY_PREFERRED_SKINTONE = "skinTone";
const MODE_READONLY = "readonly";
const MODE_READWRITE = "readwrite";
const INDEX_SKIN_UNICODE = "skinUnicodes";
const FIELD_SKIN_UNICODE = "skinUnicodes";
const DEFAULT_DATA_SOURCE$1 = "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json";
const DEFAULT_LOCALE$1 = "en";
function uniqBy$1(arr, func) {
  const set2 = /* @__PURE__ */ new Set();
  const res = [];
  for (const item of arr) {
    const key = func(item);
    if (!set2.has(key)) {
      set2.add(key);
      res.push(item);
    }
  }
  return res;
}
function uniqEmoji(emojis) {
  return uniqBy$1(emojis, (_) => _.unicode);
}
function initialMigration(db) {
  function createObjectStore(name, keyPath, indexes) {
    const store = keyPath ? db.createObjectStore(name, { keyPath }) : db.createObjectStore(name);
    if (indexes) {
      for (const [indexName, [keyPath2, multiEntry]] of Object.entries(indexes)) {
        store.createIndex(indexName, keyPath2, { multiEntry });
      }
    }
    return store;
  }
  createObjectStore(STORE_KEYVALUE);
  createObjectStore(STORE_EMOJI, FIELD_UNICODE, {
    [INDEX_TOKENS]: [FIELD_TOKENS, true],
    [INDEX_GROUP_AND_ORDER]: [[FIELD_GROUP, FIELD_ORDER]],
    [INDEX_SKIN_UNICODE]: [FIELD_SKIN_UNICODE, true]
  });
  createObjectStore(STORE_FAVORITES, void 0, {
    [INDEX_COUNT]: [""]
  });
}
const openReqs = {};
const databaseCache = {};
const onCloseListeners = {};
function handleOpenOrDeleteReq(resolve, reject, req) {
  req.onerror = () => reject(req.error);
  req.onblocked = () => reject(new Error("IDB blocked"));
  req.onsuccess = () => resolve(req.result);
}
async function createDatabase(dbName) {
  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, DB_VERSION_CURRENT);
    openReqs[dbName] = req;
    req.onupgradeneeded = (e) => {
      if (e.oldVersion < DB_VERSION_INITIAL) {
        initialMigration(req.result);
      }
    };
    handleOpenOrDeleteReq(resolve, reject, req);
  });
  db.onclose = () => closeDatabase(dbName);
  return db;
}
function openDatabase(dbName) {
  if (!databaseCache[dbName]) {
    databaseCache[dbName] = createDatabase(dbName);
  }
  return databaseCache[dbName];
}
function dbPromise(db, storeName, readOnlyOrReadWrite, cb) {
  return new Promise((resolve, reject) => {
    const txn = db.transaction(storeName, readOnlyOrReadWrite, { durability: "relaxed" });
    const store = typeof storeName === "string" ? txn.objectStore(storeName) : storeName.map((name) => txn.objectStore(name));
    let res;
    cb(store, txn, (result) => {
      res = result;
    });
    txn.oncomplete = () => resolve(res);
    txn.onerror = () => reject(txn.error);
  });
}
function closeDatabase(dbName) {
  const req = openReqs[dbName];
  const db = req && req.result;
  if (db) {
    db.close();
    const listeners = onCloseListeners[dbName];
    if (listeners) {
      for (const listener of listeners) {
        listener();
      }
    }
  }
  delete openReqs[dbName];
  delete databaseCache[dbName];
  delete onCloseListeners[dbName];
}
function deleteDatabase(dbName) {
  return new Promise((resolve, reject) => {
    closeDatabase(dbName);
    const req = indexedDB.deleteDatabase(dbName);
    handleOpenOrDeleteReq(resolve, reject, req);
  });
}
function addOnCloseListener(dbName, listener) {
  let listeners = onCloseListeners[dbName];
  if (!listeners) {
    listeners = onCloseListeners[dbName] = [];
  }
  listeners.push(listener);
}
const irregularEmoticons = /* @__PURE__ */ new Set([
  ":D",
  "XD",
  ":'D",
  "O:)",
  ":X",
  ":P",
  ";P",
  "XP",
  ":L",
  ":Z",
  ":j",
  "8D",
  "XO",
  "8)",
  ":B",
  ":O",
  ":S",
  ":'o",
  "Dx",
  "X(",
  "D:",
  ":C",
  ">0)",
  ":3",
  "</3",
  "<3",
  "\\M/",
  ":E",
  "8#"
]);
function extractTokens(str) {
  return str.split(/[\s_]+/).map((word) => {
    if (!word.match(/\w/) || irregularEmoticons.has(word)) {
      return word.toLowerCase();
    }
    return word.replace(/[)(:,]/g, "").replace(/’/g, "'").toLowerCase();
  }).filter(Boolean);
}
const MIN_SEARCH_TEXT_LENGTH$1 = 2;
function normalizeTokens(str) {
  return str.filter(Boolean).map((_) => _.toLowerCase()).filter((_) => _.length >= MIN_SEARCH_TEXT_LENGTH$1);
}
function transformEmojiData(emojiData) {
  const res = emojiData.map(({ annotation, emoticon, group, order, shortcodes, skins, tags, emoji, version }) => {
    const tokens = [...new Set(
      normalizeTokens([
        ...(shortcodes || []).map(extractTokens).flat(),
        ...tags.map(extractTokens).flat(),
        ...extractTokens(annotation),
        emoticon
      ])
    )].sort();
    const res2 = {
      annotation,
      group,
      order,
      tags,
      tokens,
      unicode: emoji,
      version
    };
    if (emoticon) {
      res2.emoticon = emoticon;
    }
    if (shortcodes) {
      res2.shortcodes = shortcodes;
    }
    if (skins) {
      res2.skinTones = [];
      res2.skinUnicodes = [];
      res2.skinVersions = [];
      for (const { tone, emoji: emoji2, version: version2 } of skins) {
        res2.skinTones.push(tone);
        res2.skinUnicodes.push(emoji2);
        res2.skinVersions.push(version2);
      }
    }
    return res2;
  });
  return res;
}
function callStore(store, method, key, cb) {
  store[method](key).onsuccess = (e) => cb && cb(e.target.result);
}
function getIDB(store, key, cb) {
  callStore(store, "get", key, cb);
}
function getAllIDB(store, key, cb) {
  callStore(store, "getAll", key, cb);
}
function commit(txn) {
  if (txn.commit) {
    txn.commit();
  }
}
function minBy(array, func) {
  let minItem = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (func(minItem) > func(item)) {
      minItem = item;
    }
  }
  return minItem;
}
function findCommonMembers(arrays, uniqByFunc) {
  const shortestArray = minBy(arrays, (_) => _.length);
  const results = [];
  for (const item of shortestArray) {
    if (!arrays.some((array) => array.findIndex((_) => uniqByFunc(_) === uniqByFunc(item)) === -1)) {
      results.push(item);
    }
  }
  return results;
}
async function isEmpty(db) {
  return !await get(db, STORE_KEYVALUE, KEY_URL);
}
async function hasData(db, url, eTag) {
  const [oldETag, oldUrl] = await Promise.all([KEY_ETAG, KEY_URL].map((key) => get(db, STORE_KEYVALUE, key)));
  return oldETag === eTag && oldUrl === url;
}
async function doFullDatabaseScanForSingleResult(db, predicate) {
  const BATCH_SIZE = 50;
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    let lastKey;
    const processNextBatch = () => {
      emojiStore.getAll(lastKey && IDBKeyRange.lowerBound(lastKey, true), BATCH_SIZE).onsuccess = (e) => {
        const results = e.target.result;
        for (const result of results) {
          lastKey = result.unicode;
          if (predicate(result)) {
            return cb(result);
          }
        }
        if (results.length < BATCH_SIZE) {
          return cb();
        }
        processNextBatch();
      };
    };
    processNextBatch();
  });
}
async function loadData(db, emojiData, url, eTag) {
  try {
    const transformedData = transformEmojiData(emojiData);
    await dbPromise(db, [STORE_EMOJI, STORE_KEYVALUE], MODE_READWRITE, ([emojiStore, metaStore], txn) => {
      let oldETag;
      let oldUrl;
      let todo = 0;
      function checkFetched() {
        if (++todo === 2) {
          onFetched();
        }
      }
      function onFetched() {
        if (oldETag === eTag && oldUrl === url) {
          return;
        }
        emojiStore.clear();
        for (const data of transformedData) {
          emojiStore.put(data);
        }
        metaStore.put(eTag, KEY_ETAG);
        metaStore.put(url, KEY_URL);
        commit(txn);
      }
      getIDB(metaStore, KEY_ETAG, (result) => {
        oldETag = result;
        checkFetched();
      });
      getIDB(metaStore, KEY_URL, (result) => {
        oldUrl = result;
        checkFetched();
      });
    });
  } finally {
  }
}
async function getEmojiByGroup(db, group) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    const range = IDBKeyRange.bound([group, 0], [group + 1, 0], false, true);
    getAllIDB(emojiStore.index(INDEX_GROUP_AND_ORDER), range, cb);
  });
}
async function getEmojiBySearchQuery(db, query) {
  const tokens = normalizeTokens(extractTokens(query));
  if (!tokens.length) {
    return [];
  }
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    const intermediateResults = [];
    const checkDone = () => {
      if (intermediateResults.length === tokens.length) {
        onDone();
      }
    };
    const onDone = () => {
      const results = findCommonMembers(intermediateResults, (_) => _.unicode);
      cb(results.sort((a, b2) => a.order < b2.order ? -1 : 1));
    };
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const range = i === tokens.length - 1 ? IDBKeyRange.bound(token, token + "\uFFFF", false, true) : IDBKeyRange.only(token);
      getAllIDB(emojiStore.index(INDEX_TOKENS), range, (result) => {
        intermediateResults.push(result);
        checkDone();
      });
    }
  });
}
async function getEmojiByShortcode(db, shortcode) {
  const emojis = await getEmojiBySearchQuery(db, shortcode);
  if (!emojis.length) {
    const predicate = (_) => (_.shortcodes || []).includes(shortcode.toLowerCase());
    return await doFullDatabaseScanForSingleResult(db, predicate) || null;
  }
  return emojis.filter((_) => {
    const lowerShortcodes = (_.shortcodes || []).map((_2) => _2.toLowerCase());
    return lowerShortcodes.includes(shortcode.toLowerCase());
  })[0] || null;
}
async function getEmojiByUnicode(db, unicode) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => getIDB(emojiStore, unicode, (result) => {
    if (result) {
      return cb(result);
    }
    getIDB(emojiStore.index(INDEX_SKIN_UNICODE), unicode, (result2) => cb(result2 || null));
  }));
}
function get(db, storeName, key) {
  return dbPromise(db, storeName, MODE_READONLY, (store, txn, cb) => getIDB(store, key, cb));
}
function set(db, storeName, key, value) {
  return dbPromise(db, storeName, MODE_READWRITE, (store, txn) => {
    store.put(value, key);
    commit(txn);
  });
}
function incrementFavoriteEmojiCount(db, unicode) {
  return dbPromise(db, STORE_FAVORITES, MODE_READWRITE, (store, txn) => getIDB(store, unicode, (result) => {
    store.put((result || 0) + 1, unicode);
    commit(txn);
  }));
}
function getTopFavoriteEmoji(db, customEmojiIndex2, limit) {
  if (limit === 0) {
    return [];
  }
  return dbPromise(db, [STORE_FAVORITES, STORE_EMOJI], MODE_READONLY, ([favoritesStore, emojiStore], txn, cb) => {
    const results = [];
    favoritesStore.index(INDEX_COUNT).openCursor(void 0, "prev").onsuccess = (e) => {
      const cursor = e.target.result;
      if (!cursor) {
        return cb(results);
      }
      function addResult(result) {
        results.push(result);
        if (results.length === limit) {
          return cb(results);
        }
        cursor.continue();
      }
      const unicodeOrName = cursor.primaryKey;
      const custom = customEmojiIndex2.byName(unicodeOrName);
      if (custom) {
        return addResult(custom);
      }
      getIDB(emojiStore, unicodeOrName, (emoji) => {
        if (emoji) {
          return addResult(emoji);
        }
        cursor.continue();
      });
    };
  });
}
const CODA_MARKER = "";
function trie(arr, itemToTokens) {
  const map = /* @__PURE__ */ new Map();
  for (const item of arr) {
    const tokens = itemToTokens(item);
    for (const token of tokens) {
      let currentMap = map;
      for (let i = 0; i < token.length; i++) {
        const char = token.charAt(i);
        let nextMap = currentMap.get(char);
        if (!nextMap) {
          nextMap = /* @__PURE__ */ new Map();
          currentMap.set(char, nextMap);
        }
        currentMap = nextMap;
      }
      let valuesAtCoda = currentMap.get(CODA_MARKER);
      if (!valuesAtCoda) {
        valuesAtCoda = [];
        currentMap.set(CODA_MARKER, valuesAtCoda);
      }
      valuesAtCoda.push(item);
    }
  }
  const search = (query, exact) => {
    let currentMap = map;
    for (let i = 0; i < query.length; i++) {
      const char = query.charAt(i);
      const nextMap = currentMap.get(char);
      if (nextMap) {
        currentMap = nextMap;
      } else {
        return [];
      }
    }
    if (exact) {
      const results2 = currentMap.get(CODA_MARKER);
      return results2 || [];
    }
    const results = [];
    const queue = [currentMap];
    while (queue.length) {
      const currentMap2 = queue.shift();
      const entriesSortedByKey = [...currentMap2.entries()].sort((a, b2) => a[0] < b2[0] ? -1 : 1);
      for (const [key, value] of entriesSortedByKey) {
        if (key === CODA_MARKER) {
          results.push(...value);
        } else {
          queue.push(value);
        }
      }
    }
    return results;
  };
  return search;
}
const requiredKeys$1 = [
  "name",
  "url"
];
function assertCustomEmojis(customEmojis) {
  const isArray = customEmojis && Array.isArray(customEmojis);
  const firstItemIsFaulty = isArray && customEmojis.length && (!customEmojis[0] || requiredKeys$1.some((key) => !(key in customEmojis[0])));
  if (!isArray || firstItemIsFaulty) {
    throw new Error("Custom emojis are in the wrong format");
  }
}
function customEmojiIndex(customEmojis) {
  assertCustomEmojis(customEmojis);
  const sortByName = (a, b2) => a.name.toLowerCase() < b2.name.toLowerCase() ? -1 : 1;
  const all = customEmojis.sort(sortByName);
  const emojiToTokens = (emoji) => [...new Set((emoji.shortcodes || []).map((shortcode) => extractTokens(shortcode)).flat())];
  const searchTrie = trie(customEmojis, emojiToTokens);
  const searchByExactMatch = (_) => searchTrie(_, true);
  const searchByPrefix = (_) => searchTrie(_, false);
  const search = (query) => {
    const tokens = extractTokens(query);
    const intermediateResults = tokens.map((token, i) => (i < tokens.length - 1 ? searchByExactMatch : searchByPrefix)(token));
    return findCommonMembers(intermediateResults, (_) => _.name).sort(sortByName);
  };
  const shortcodeToEmoji = /* @__PURE__ */ new Map();
  const nameToEmoji = /* @__PURE__ */ new Map();
  for (const customEmoji of customEmojis) {
    nameToEmoji.set(customEmoji.name.toLowerCase(), customEmoji);
    for (const shortcode of customEmoji.shortcodes || []) {
      shortcodeToEmoji.set(shortcode.toLowerCase(), customEmoji);
    }
  }
  const byShortcode = (shortcode) => shortcodeToEmoji.get(shortcode.toLowerCase());
  const byName = (name) => nameToEmoji.get(name.toLowerCase());
  return {
    all,
    search,
    byShortcode,
    byName
  };
}
function cleanEmoji(emoji) {
  if (!emoji) {
    return emoji;
  }
  delete emoji.tokens;
  if (emoji.skinTones) {
    const len = emoji.skinTones.length;
    emoji.skins = Array(len);
    for (let i = 0; i < len; i++) {
      emoji.skins[i] = {
        tone: emoji.skinTones[i],
        unicode: emoji.skinUnicodes[i],
        version: emoji.skinVersions[i]
      };
    }
    delete emoji.skinTones;
    delete emoji.skinUnicodes;
    delete emoji.skinVersions;
  }
  return emoji;
}
function warnETag(eTag) {
  if (!eTag) {
    console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.");
  }
}
const requiredKeys = [
  "annotation",
  "emoji",
  "group",
  "order",
  "tags",
  "version"
];
function assertEmojiData(emojiData) {
  if (!emojiData || !Array.isArray(emojiData) || !emojiData[0] || typeof emojiData[0] !== "object" || requiredKeys.some((key) => !(key in emojiData[0]))) {
    throw new Error("Emoji data is in the wrong format");
  }
}
function assertStatus(response, dataSource) {
  if (Math.floor(response.status / 100) !== 2) {
    throw new Error("Failed to fetch: " + dataSource + ":  " + response.status);
  }
}
async function getETag(dataSource) {
  const response = await fetch(dataSource, { method: "HEAD" });
  assertStatus(response, dataSource);
  const eTag = response.headers.get("etag");
  warnETag(eTag);
  return eTag;
}
async function getETagAndData(dataSource) {
  const response = await fetch(dataSource);
  assertStatus(response, dataSource);
  const eTag = response.headers.get("etag");
  warnETag(eTag);
  const emojiData = await response.json();
  assertEmojiData(emojiData);
  return [eTag, emojiData];
}
function arrayBufferToBinaryString(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;
  var i = -1;
  while (++i < length) {
    binary += String.fromCharCode(bytes[i]);
  }
  return binary;
}
function binaryStringToArrayBuffer(binary) {
  var length = binary.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);
  var i = -1;
  while (++i < length) {
    arr[i] = binary.charCodeAt(i);
  }
  return buf;
}
async function jsonChecksum(object) {
  const inString = JSON.stringify(object);
  const inBuffer = binaryStringToArrayBuffer(inString);
  const outBuffer = await crypto.subtle.digest("SHA-1", inBuffer);
  const outBinString = arrayBufferToBinaryString(outBuffer);
  const res = btoa(outBinString);
  return res;
}
async function checkForUpdates(db, dataSource) {
  let emojiData;
  let eTag = await getETag(dataSource);
  if (!eTag) {
    const eTagAndData = await getETagAndData(dataSource);
    eTag = eTagAndData[0];
    emojiData = eTagAndData[1];
    if (!eTag) {
      eTag = await jsonChecksum(emojiData);
    }
  }
  if (await hasData(db, dataSource, eTag))
    ;
  else {
    if (!emojiData) {
      const eTagAndData = await getETagAndData(dataSource);
      emojiData = eTagAndData[1];
    }
    await loadData(db, emojiData, dataSource, eTag);
  }
}
async function loadDataForFirstTime(db, dataSource) {
  let [eTag, emojiData] = await getETagAndData(dataSource);
  if (!eTag) {
    eTag = await jsonChecksum(emojiData);
  }
  await loadData(db, emojiData, dataSource, eTag);
}
class Database {
  constructor({ dataSource = DEFAULT_DATA_SOURCE$1, locale = DEFAULT_LOCALE$1, customEmoji = [] } = {}) {
    this.dataSource = dataSource;
    this.locale = locale;
    this._dbName = `emoji-picker-element-${this.locale}`;
    this._db = void 0;
    this._lazyUpdate = void 0;
    this._custom = customEmojiIndex(customEmoji);
    this._clear = this._clear.bind(this);
    this._ready = this._init();
  }
  async _init() {
    const db = this._db = await openDatabase(this._dbName);
    addOnCloseListener(this._dbName, this._clear);
    const dataSource = this.dataSource;
    const empty = await isEmpty(db);
    if (empty) {
      await loadDataForFirstTime(db, dataSource);
    } else {
      this._lazyUpdate = checkForUpdates(db, dataSource);
    }
  }
  async ready() {
    const checkReady = async () => {
      if (!this._ready) {
        this._ready = this._init();
      }
      return this._ready;
    };
    await checkReady();
    if (!this._db) {
      await checkReady();
    }
  }
  async getEmojiByGroup(group) {
    assertNumber(group);
    await this.ready();
    return uniqEmoji(await getEmojiByGroup(this._db, group)).map(cleanEmoji);
  }
  async getEmojiBySearchQuery(query) {
    assertNonEmptyString(query);
    await this.ready();
    const customs = this._custom.search(query);
    const natives = uniqEmoji(await getEmojiBySearchQuery(this._db, query)).map(cleanEmoji);
    return [
      ...customs,
      ...natives
    ];
  }
  async getEmojiByShortcode(shortcode) {
    assertNonEmptyString(shortcode);
    await this.ready();
    const custom = this._custom.byShortcode(shortcode);
    if (custom) {
      return custom;
    }
    return cleanEmoji(await getEmojiByShortcode(this._db, shortcode));
  }
  async getEmojiByUnicodeOrName(unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    const custom = this._custom.byName(unicodeOrName);
    if (custom) {
      return custom;
    }
    return cleanEmoji(await getEmojiByUnicode(this._db, unicodeOrName));
  }
  async getPreferredSkinTone() {
    await this.ready();
    return await get(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE) || 0;
  }
  async setPreferredSkinTone(skinTone) {
    assertNumber(skinTone);
    await this.ready();
    return set(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE, skinTone);
  }
  async incrementFavoriteEmojiCount(unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    return incrementFavoriteEmojiCount(this._db, unicodeOrName);
  }
  async getTopFavoriteEmoji(limit) {
    assertNumber(limit);
    await this.ready();
    return (await getTopFavoriteEmoji(this._db, this._custom, limit)).map(cleanEmoji);
  }
  set customEmoji(customEmojis) {
    this._custom = customEmojiIndex(customEmojis);
  }
  get customEmoji() {
    return this._custom.all;
  }
  async _shutdown() {
    await this.ready();
    try {
      await this._lazyUpdate;
    } catch (err) {
    }
  }
  _clear() {
    this._db = this._ready = this._lazyUpdate = void 0;
  }
  async close() {
    await this._shutdown();
    await closeDatabase(this._dbName);
  }
  async delete() {
    await this._shutdown();
    await deleteDatabase(this._dbName);
  }
}
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b2) {
  return a != a ? b2 == b2 : a !== b2 || (a && typeof a === "object" || typeof a === "function");
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const outroing = /* @__PURE__ */ new Set();
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block2, next, get_context) {
  let o2 = old_blocks.length;
  let n = list.length;
  let i = o2;
  const old_indexes = {};
  while (i--)
    old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = /* @__PURE__ */ new Map();
  const deltas = /* @__PURE__ */ new Map();
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block2(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }
    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes)
      deltas.set(key, Math.abs(i - old_indexes[key]));
  }
  const will_move = /* @__PURE__ */ new Set();
  const did_move = /* @__PURE__ */ new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o2 && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o2 - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o2--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o2--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o2--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o2--;
    }
  }
  while (o2--) {
    const old_block = old_blocks[o2];
    if (!new_lookup.has(old_block.key))
      destroy(old_block, lookup);
  }
  while (n)
    insert2(new_blocks[n - 1]);
  return new_blocks;
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    {
      $$.fragment && $$.fragment.c();
    }
    mount_component(component, options.target, void 0, void 0);
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}
const allGroups = [
  [-1, "\u2728", "custom"],
  [0, "\u{1F600}", "smileys-emotion"],
  [1, "\u{1F44B}", "people-body"],
  [3, "\u{1F431}", "animals-nature"],
  [4, "\u{1F34E}", "food-drink"],
  [5, "\u{1F3E0}\uFE0F", "travel-places"],
  [6, "\u26BD", "activities"],
  [7, "\u{1F4DD}", "objects"],
  [8, "\u26D4\uFE0F", "symbols"],
  [9, "\u{1F3C1}", "flags"]
].map(([id, emoji, name]) => ({ id, emoji, name }));
const groups = allGroups.slice(1);
const customGroup = allGroups[0];
const MIN_SEARCH_TEXT_LENGTH = 2;
const NUM_SKIN_TONES = 6;
const rIC = typeof requestIdleCallback === "function" ? requestIdleCallback : setTimeout;
function hasZwj(emoji) {
  return emoji.unicode.includes("\u200D");
}
const versionsAndTestEmoji = {
  "\u{1FAE0}": 14,
  "\u{1F972}": 13.1,
  "\u{1F97B}": 12.1,
  "\u{1F970}": 11,
  "\u{1F929}": 5,
  "\u{1F471}\u200D\u2640\uFE0F": 4,
  "\u{1F923}": 3,
  "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F": 2,
  "\u{1F600}": 1,
  "\u{1F610}\uFE0F": 0.7,
  "\u{1F603}": 0.6
};
const TIMEOUT_BEFORE_LOADING_MESSAGE = 1e3;
const DEFAULT_SKIN_TONE_EMOJI = "\u{1F590}\uFE0F";
const DEFAULT_NUM_COLUMNS = 8;
const MOST_COMMONLY_USED_EMOJI = [
  "\u{1F60A}",
  "\u{1F612}",
  "\u2665\uFE0F",
  "\u{1F44D}\uFE0F",
  "\u{1F60D}",
  "\u{1F602}",
  "\u{1F62D}",
  "\u263A\uFE0F",
  "\u{1F614}",
  "\u{1F629}",
  "\u{1F60F}",
  "\u{1F495}",
  "\u{1F64C}",
  "\u{1F618}"
];
const FONT_FAMILY = '"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif';
const DEFAULT_CATEGORY_SORTING = (a, b2) => a < b2 ? -1 : a > b2 ? 1 : 0;
const getTextFeature = (text2, color) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";
  ctx.font = `100px ${FONT_FAMILY}`;
  ctx.fillStyle = color;
  ctx.scale(0.01, 0.01);
  ctx.fillText(text2, 0, 0);
  return ctx.getImageData(0, 0, 1, 1).data;
};
const compareFeatures = (feature1, feature2) => {
  const feature1Str = [...feature1].join(",");
  const feature2Str = [...feature2].join(",");
  return feature1Str === feature2Str && !feature1Str.startsWith("0,0,0,");
};
function testColorEmojiSupported(text2) {
  const feature1 = getTextFeature(text2, "#000");
  const feature2 = getTextFeature(text2, "#fff");
  return feature1 && feature2 && compareFeatures(feature1, feature2);
}
function determineEmojiSupportLevel() {
  const entries = Object.entries(versionsAndTestEmoji);
  try {
    for (const [emoji, version] of entries) {
      if (testColorEmojiSupported(emoji)) {
        return version;
      }
    }
  } catch (e) {
  } finally {
  }
  return entries[0][1];
}
const emojiSupportLevelPromise = new Promise((resolve) => rIC(() => resolve(determineEmojiSupportLevel())));
const supportedZwjEmojis = /* @__PURE__ */ new Map();
const VARIATION_SELECTOR = "\uFE0F";
const SKINTONE_MODIFIER = "\uD83C";
const ZWJ = "\u200D";
const LIGHT_SKIN_TONE = 127995;
const LIGHT_SKIN_TONE_MODIFIER = 57339;
function applySkinTone(str, skinTone) {
  if (skinTone === 0) {
    return str;
  }
  const zwjIndex = str.indexOf(ZWJ);
  if (zwjIndex !== -1) {
    return str.substring(0, zwjIndex) + String.fromCodePoint(LIGHT_SKIN_TONE + skinTone - 1) + str.substring(zwjIndex);
  }
  if (str.endsWith(VARIATION_SELECTOR)) {
    str = str.substring(0, str.length - 1);
  }
  return str + SKINTONE_MODIFIER + String.fromCodePoint(LIGHT_SKIN_TONE_MODIFIER + skinTone - 1);
}
function halt(event) {
  event.preventDefault();
  event.stopPropagation();
}
function incrementOrDecrement(decrement, val, arr) {
  val += decrement ? -1 : 1;
  if (val < 0) {
    val = arr.length - 1;
  } else if (val >= arr.length) {
    val = 0;
  }
  return val;
}
function uniqBy(arr, func) {
  const set2 = /* @__PURE__ */ new Set();
  const res = [];
  for (const item of arr) {
    const key = func(item);
    if (!set2.has(key)) {
      set2.add(key);
      res.push(item);
    }
  }
  return res;
}
function summarizeEmojisForUI(emojis, emojiSupportLevel) {
  const toSimpleSkinsMap = (skins) => {
    const res = {};
    for (const skin of skins) {
      if (typeof skin.tone === "number" && skin.version <= emojiSupportLevel) {
        res[skin.tone] = skin.unicode;
      }
    }
    return res;
  };
  return emojis.map(({ unicode, skins, shortcodes, url, name, category }) => ({
    unicode,
    name,
    shortcodes,
    url,
    category,
    id: unicode || name,
    skins: skins && toSimpleSkinsMap(skins),
    title: (shortcodes || []).join(", ")
  }));
}
const rAF = requestAnimationFrame;
let resizeObserverSupported = typeof ResizeObserver === "function";
function calculateWidth(node, onUpdate) {
  let resizeObserver;
  if (resizeObserverSupported) {
    resizeObserver = new ResizeObserver((entries) => onUpdate(entries[0].contentRect.width));
    resizeObserver.observe(node);
  } else {
    rAF(() => onUpdate(node.getBoundingClientRect().width));
  }
  return {
    destroy() {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    }
  };
}
function calculateTextWidth(node) {
  {
    const range = document.createRange();
    range.selectNode(node.firstChild);
    return range.getBoundingClientRect().width;
  }
}
let baselineEmojiWidth;
function checkZwjSupport(zwjEmojisToCheck, baselineEmoji, emojiToDomNode) {
  for (const emoji of zwjEmojisToCheck) {
    const domNode = emojiToDomNode(emoji);
    const emojiWidth = calculateTextWidth(domNode);
    if (typeof baselineEmojiWidth === "undefined") {
      baselineEmojiWidth = calculateTextWidth(baselineEmoji);
    }
    const supported = emojiWidth / 1.8 < baselineEmojiWidth;
    supportedZwjEmojis.set(emoji.unicode, supported);
  }
}
function uniq(arr) {
  return uniqBy(arr, (_) => _);
}
const { Map: Map_1 } = globals;
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[63] = list[i];
  child_ctx[65] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[66] = list[i];
  child_ctx[65] = i;
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[63] = list[i];
  child_ctx[65] = i;
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[69] = list[i];
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[72] = list[i];
  child_ctx[65] = i;
  return child_ctx;
}
function create_each_block_4(key_1, ctx) {
  let div;
  let t_value = ctx[72] + "";
  let t;
  let div_id_value;
  let div_class_value;
  let div_aria_selected_value;
  let div_title_value;
  let div_aria_label_value;
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      t = text(t_value);
      attr(div, "id", div_id_value = "skintone-" + ctx[65]);
      attr(div, "class", div_class_value = "emoji hide-focus " + (ctx[65] === ctx[20] ? "active" : ""));
      attr(div, "aria-selected", div_aria_selected_value = ctx[65] === ctx[20]);
      attr(div, "role", "option");
      attr(div, "title", div_title_value = ctx[0].skinTones[ctx[65]]);
      attr(div, "tabindex", "-1");
      attr(div, "aria-label", div_aria_label_value = ctx[0].skinTones[ctx[65]]);
      this.first = div;
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 512 && t_value !== (t_value = ctx[72] + ""))
        set_data(t, t_value);
      if (dirty[0] & 512 && div_id_value !== (div_id_value = "skintone-" + ctx[65])) {
        attr(div, "id", div_id_value);
      }
      if (dirty[0] & 1049088 && div_class_value !== (div_class_value = "emoji hide-focus " + (ctx[65] === ctx[20] ? "active" : ""))) {
        attr(div, "class", div_class_value);
      }
      if (dirty[0] & 1049088 && div_aria_selected_value !== (div_aria_selected_value = ctx[65] === ctx[20])) {
        attr(div, "aria-selected", div_aria_selected_value);
      }
      if (dirty[0] & 513 && div_title_value !== (div_title_value = ctx[0].skinTones[ctx[65]])) {
        attr(div, "title", div_title_value);
      }
      if (dirty[0] & 513 && div_aria_label_value !== (div_aria_label_value = ctx[0].skinTones[ctx[65]])) {
        attr(div, "aria-label", div_aria_label_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block_3(key_1, ctx) {
  let button;
  let div;
  let t_value = ctx[69].emoji + "";
  let t;
  let button_aria_controls_value;
  let button_aria_label_value;
  let button_aria_selected_value;
  let button_title_value;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[49](ctx[69]);
  }
  return {
    key: key_1,
    first: null,
    c() {
      button = element("button");
      div = element("div");
      t = text(t_value);
      attr(div, "class", "nav-emoji emoji");
      attr(button, "role", "tab");
      attr(button, "class", "nav-button");
      attr(button, "aria-controls", button_aria_controls_value = "tab-" + ctx[69].id);
      attr(button, "aria-label", button_aria_label_value = ctx[0].categories[ctx[69].name]);
      attr(button, "aria-selected", button_aria_selected_value = !ctx[4] && ctx[13].id === ctx[69].id);
      attr(button, "title", button_title_value = ctx[0].categories[ctx[69].name]);
      this.first = button;
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, div);
      append(div, t);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 4096 && t_value !== (t_value = ctx[69].emoji + ""))
        set_data(t, t_value);
      if (dirty[0] & 4096 && button_aria_controls_value !== (button_aria_controls_value = "tab-" + ctx[69].id)) {
        attr(button, "aria-controls", button_aria_controls_value);
      }
      if (dirty[0] & 4097 && button_aria_label_value !== (button_aria_label_value = ctx[0].categories[ctx[69].name])) {
        attr(button, "aria-label", button_aria_label_value);
      }
      if (dirty[0] & 12304 && button_aria_selected_value !== (button_aria_selected_value = !ctx[4] && ctx[13].id === ctx[69].id)) {
        attr(button, "aria-selected", button_aria_selected_value);
      }
      if (dirty[0] & 4097 && button_title_value !== (button_title_value = ctx[0].categories[ctx[69].name])) {
        attr(button, "title", button_title_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block_1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      attr(img, "class", "custom-emoji");
      if (!src_url_equal(img.src, img_src_value = ctx[63].url))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(img, "loading", "lazy");
    },
    m(target, anchor) {
      insert(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 32768 && !src_url_equal(img.src, img_src_value = ctx2[63].url)) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block_1(ctx) {
  let t_value = ctx[27](ctx[63], ctx[8]) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 33024 && t_value !== (t_value = ctx2[27](ctx2[63], ctx2[8]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_2(key_1, ctx) {
  let button;
  let button_role_value;
  let button_aria_selected_value;
  let button_aria_label_value;
  let button_title_value;
  let button_class_value;
  let button_id_value;
  function select_block_type(ctx2, dirty) {
    if (ctx2[63].unicode)
      return create_if_block_1;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      button = element("button");
      if_block.c();
      attr(button, "role", button_role_value = ctx[4] ? "option" : "menuitem");
      attr(button, "aria-selected", button_aria_selected_value = ctx[4] ? ctx[65] == ctx[5] : "");
      attr(button, "aria-label", button_aria_label_value = ctx[28](ctx[63], ctx[8]));
      attr(button, "title", button_title_value = ctx[63].title);
      attr(button, "class", button_class_value = "emoji " + (ctx[4] && ctx[65] === ctx[5] ? "active" : ""));
      attr(button, "id", button_id_value = "emo-" + ctx[63].id);
      this.first = button;
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if_block.m(button, null);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(button, null);
        }
      }
      if (dirty[0] & 16 && button_role_value !== (button_role_value = ctx[4] ? "option" : "menuitem")) {
        attr(button, "role", button_role_value);
      }
      if (dirty[0] & 32816 && button_aria_selected_value !== (button_aria_selected_value = ctx[4] ? ctx[65] == ctx[5] : "")) {
        attr(button, "aria-selected", button_aria_selected_value);
      }
      if (dirty[0] & 33024 && button_aria_label_value !== (button_aria_label_value = ctx[28](ctx[63], ctx[8]))) {
        attr(button, "aria-label", button_aria_label_value);
      }
      if (dirty[0] & 32768 && button_title_value !== (button_title_value = ctx[63].title)) {
        attr(button, "title", button_title_value);
      }
      if (dirty[0] & 32816 && button_class_value !== (button_class_value = "emoji " + (ctx[4] && ctx[65] === ctx[5] ? "active" : ""))) {
        attr(button, "class", button_class_value);
      }
      if (dirty[0] & 32768 && button_id_value !== (button_id_value = "emo-" + ctx[63].id)) {
        attr(button, "id", button_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if_block.d();
    }
  };
}
function create_each_block_1(key_1, ctx) {
  let div0;
  let t_value = (ctx[4] ? ctx[0].searchResultsLabel : ctx[66].category ? ctx[66].category : ctx[15].length > 1 ? ctx[0].categories.custom : ctx[0].categories[ctx[13].name]) + "";
  let t;
  let div0_id_value;
  let div0_class_value;
  let div1;
  let each_blocks = [];
  let each_1_lookup = new Map_1();
  let div1_role_value;
  let div1_aria_labelledby_value;
  let div1_id_value;
  let each_value_2 = ctx[66].emojis;
  const get_key = (ctx2) => ctx2[63].id;
  for (let i = 0; i < each_value_2.length; i += 1) {
    let child_ctx = get_each_context_2(ctx, each_value_2, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
  }
  return {
    key: key_1,
    first: null,
    c() {
      div0 = element("div");
      t = text(t_value);
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div0, "id", div0_id_value = "menu-label-" + ctx[65]);
      attr(div0, "class", div0_class_value = "category " + (ctx[15].length === 1 && ctx[15][0].category === "" ? "gone" : ""));
      attr(div0, "aria-hidden", "true");
      attr(div1, "class", "emoji-menu");
      attr(div1, "role", div1_role_value = ctx[4] ? "listbox" : "menu");
      attr(div1, "aria-labelledby", div1_aria_labelledby_value = "menu-label-" + ctx[65]);
      attr(div1, "id", div1_id_value = ctx[4] ? "search-results" : "");
      this.first = div0;
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      append(div0, t);
      insert(target, div1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 40977 && t_value !== (t_value = (ctx[4] ? ctx[0].searchResultsLabel : ctx[66].category ? ctx[66].category : ctx[15].length > 1 ? ctx[0].categories.custom : ctx[0].categories[ctx[13].name]) + ""))
        set_data(t, t_value);
      if (dirty[0] & 32768 && div0_id_value !== (div0_id_value = "menu-label-" + ctx[65])) {
        attr(div0, "id", div0_id_value);
      }
      if (dirty[0] & 32768 && div0_class_value !== (div0_class_value = "category " + (ctx[15].length === 1 && ctx[15][0].category === "" ? "gone" : ""))) {
        attr(div0, "class", div0_class_value);
      }
      if (dirty[0] & 402686256) {
        each_value_2 = ctx[66].emojis;
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_2, each_1_lookup, div1, destroy_block, create_each_block_2, null, get_each_context_2);
      }
      if (dirty[0] & 16 && div1_role_value !== (div1_role_value = ctx[4] ? "listbox" : "menu")) {
        attr(div1, "role", div1_role_value);
      }
      if (dirty[0] & 32768 && div1_aria_labelledby_value !== (div1_aria_labelledby_value = "menu-label-" + ctx[65])) {
        attr(div1, "aria-labelledby", div1_aria_labelledby_value);
      }
      if (dirty[0] & 16 && div1_id_value !== (div1_id_value = ctx[4] ? "search-results" : "")) {
        attr(div1, "id", div1_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}
function create_else_block(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      attr(img, "class", "custom-emoji");
      if (!src_url_equal(img.src, img_src_value = ctx[63].url))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(img, "loading", "lazy");
    },
    m(target, anchor) {
      insert(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1024 && !src_url_equal(img.src, img_src_value = ctx2[63].url)) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block(ctx) {
  let t_value = ctx[27](ctx[63], ctx[8]) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1280 && t_value !== (t_value = ctx2[27](ctx2[63], ctx2[8]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(key_1, ctx) {
  let button;
  let button_aria_label_value;
  let button_title_value;
  let button_id_value;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[63].unicode)
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      button = element("button");
      if_block.c();
      attr(button, "role", "menuitem");
      attr(button, "aria-label", button_aria_label_value = ctx[28](ctx[63], ctx[8]));
      attr(button, "title", button_title_value = ctx[63].title);
      attr(button, "class", "emoji");
      attr(button, "id", button_id_value = "fav-" + ctx[63].id);
      this.first = button;
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if_block.m(button, null);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(button, null);
        }
      }
      if (dirty[0] & 1280 && button_aria_label_value !== (button_aria_label_value = ctx[28](ctx[63], ctx[8]))) {
        attr(button, "aria-label", button_aria_label_value);
      }
      if (dirty[0] & 1024 && button_title_value !== (button_title_value = ctx[63].title)) {
        attr(button, "title", button_title_value);
      }
      if (dirty[0] & 1024 && button_id_value !== (button_id_value = "fav-" + ctx[63].id)) {
        attr(button, "id", button_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if_block.d();
    }
  };
}
function create_fragment(ctx) {
  let section;
  let div0;
  let div4;
  let div1;
  let input;
  let input_placeholder_value;
  let input_aria_expanded_value;
  let input_aria_activedescendant_value;
  let label;
  let t0_value = ctx[0].searchLabel + "";
  let t0;
  let span0;
  let t1_value = ctx[0].searchDescription + "";
  let t1;
  let div2;
  let button0;
  let t2;
  let button0_class_value;
  let div2_class_value;
  let span1;
  let t3_value = ctx[0].skinToneDescription + "";
  let t3;
  let div3;
  let each_blocks_3 = [];
  let each0_lookup = new Map_1();
  let div3_class_value;
  let div3_aria_label_value;
  let div3_aria_activedescendant_value;
  let div3_aria_hidden_value;
  let div5;
  let each_blocks_2 = [];
  let each1_lookup = new Map_1();
  let div5_aria_label_value;
  let div7;
  let div6;
  let div8;
  let t4;
  let div8_class_value;
  let div10;
  let div9;
  let each_blocks_1 = [];
  let each2_lookup = new Map_1();
  let div10_class_value;
  let div10_role_value;
  let div10_aria_label_value;
  let div10_id_value;
  let div11;
  let each_blocks = [];
  let each3_lookup = new Map_1();
  let div11_class_value;
  let div11_aria_label_value;
  let button1;
  let section_aria_label_value;
  let mounted;
  let dispose;
  let each_value_4 = ctx[9];
  const get_key = (ctx2) => ctx2[72];
  for (let i = 0; i < each_value_4.length; i += 1) {
    let child_ctx = get_each_context_4(ctx, each_value_4, i);
    let key = get_key(child_ctx);
    each0_lookup.set(key, each_blocks_3[i] = create_each_block_4(key, child_ctx));
  }
  let each_value_3 = ctx[12];
  const get_key_1 = (ctx2) => ctx2[69].id;
  for (let i = 0; i < each_value_3.length; i += 1) {
    let child_ctx = get_each_context_3(ctx, each_value_3, i);
    let key = get_key_1(child_ctx);
    each1_lookup.set(key, each_blocks_2[i] = create_each_block_3(key, child_ctx));
  }
  let each_value_1 = ctx[15];
  const get_key_2 = (ctx2) => ctx2[66].category;
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1(ctx, each_value_1, i);
    let key = get_key_2(child_ctx);
    each2_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
  }
  let each_value = ctx[10];
  const get_key_3 = (ctx2) => ctx2[63].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key_3(child_ctx);
    each3_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      section = element("section");
      div0 = element("div");
      div4 = element("div");
      div1 = element("div");
      input = element("input");
      label = element("label");
      t0 = text(t0_value);
      span0 = element("span");
      t1 = text(t1_value);
      div2 = element("div");
      button0 = element("button");
      t2 = text(ctx[21]);
      span1 = element("span");
      t3 = text(t3_value);
      div3 = element("div");
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      div5 = element("div");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      div7 = element("div");
      div6 = element("div");
      div8 = element("div");
      t4 = text(ctx[18]);
      div10 = element("div");
      div9 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      div11 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      button1 = element("button");
      button1.textContent = "\u{1F600}";
      attr(div0, "class", "pad-top");
      attr(input, "id", "search");
      attr(input, "class", "search");
      attr(input, "type", "search");
      attr(input, "role", "combobox");
      attr(input, "enterkeyhint", "search");
      attr(input, "placeholder", input_placeholder_value = ctx[0].searchLabel);
      attr(input, "autocapitalize", "none");
      attr(input, "autocomplete", "off");
      attr(input, "spellcheck", "true");
      attr(input, "aria-expanded", input_aria_expanded_value = !!(ctx[4] && ctx[1].length));
      attr(input, "aria-controls", "search-results");
      attr(input, "aria-describedby", "search-description");
      attr(input, "aria-autocomplete", "list");
      attr(input, "aria-activedescendant", input_aria_activedescendant_value = ctx[26] ? `emo-${ctx[26]}` : "");
      attr(label, "class", "sr-only");
      attr(label, "for", "search");
      attr(span0, "id", "search-description");
      attr(span0, "class", "sr-only");
      attr(div1, "class", "search-wrapper");
      attr(button0, "id", "skintone-button");
      attr(button0, "class", button0_class_value = "emoji " + (ctx[6] ? "hide-focus" : ""));
      attr(button0, "aria-label", ctx[23]);
      attr(button0, "title", ctx[23]);
      attr(button0, "aria-describedby", "skintone-description");
      attr(button0, "aria-haspopup", "listbox");
      attr(button0, "aria-expanded", ctx[6]);
      attr(button0, "aria-controls", "skintone-list");
      attr(div2, "class", div2_class_value = "skintone-button-wrapper " + (ctx[19] ? "expanded" : ""));
      attr(span1, "id", "skintone-description");
      attr(span1, "class", "sr-only");
      attr(div3, "id", "skintone-list");
      attr(div3, "class", div3_class_value = "skintone-list " + (ctx[6] ? "" : "hidden no-animate"));
      set_style(div3, "transform", "translateY(" + (ctx[6] ? 0 : "calc(-1 * var(--num-skintones) * var(--total-emoji-size))") + ")");
      attr(div3, "role", "listbox");
      attr(div3, "aria-label", div3_aria_label_value = ctx[0].skinTonesLabel);
      attr(div3, "aria-activedescendant", div3_aria_activedescendant_value = "skintone-" + ctx[20]);
      attr(div3, "aria-hidden", div3_aria_hidden_value = !ctx[6]);
      attr(div4, "class", "search-row");
      attr(div5, "class", "nav");
      attr(div5, "role", "tablist");
      set_style(div5, "grid-template-columns", "repeat(" + ctx[12].length + ", 1fr)");
      attr(div5, "aria-label", div5_aria_label_value = ctx[0].categoriesLabel);
      attr(div6, "class", "indicator");
      set_style(div6, "transform", "translateX(" + (ctx[24] ? -1 : 1) * ctx[11] * 100 + "%)");
      attr(div7, "class", "indicator-wrapper");
      attr(div8, "class", div8_class_value = "message " + (ctx[18] ? "" : "gone"));
      attr(div8, "role", "alert");
      attr(div8, "aria-live", "polite");
      attr(div10, "class", div10_class_value = "tabpanel " + (!ctx[14] || ctx[18] ? "gone" : ""));
      attr(div10, "role", div10_role_value = ctx[4] ? "region" : "tabpanel");
      attr(div10, "aria-label", div10_aria_label_value = ctx[4] ? ctx[0].searchResultsLabel : ctx[0].categories[ctx[13].name]);
      attr(div10, "id", div10_id_value = ctx[4] ? "" : `tab-${ctx[13].id}`);
      attr(div10, "tabindex", "0");
      attr(div11, "class", div11_class_value = "favorites emoji-menu " + (ctx[18] ? "gone" : ""));
      attr(div11, "role", "menu");
      attr(div11, "aria-label", div11_aria_label_value = ctx[0].favoritesLabel);
      set_style(div11, "padding-inline-end", ctx[25] + "px");
      attr(button1, "aria-hidden", "true");
      attr(button1, "tabindex", "-1");
      attr(button1, "class", "abs-pos hidden emoji");
      attr(section, "class", "picker");
      attr(section, "aria-label", section_aria_label_value = ctx[0].regionLabel);
      attr(section, "style", ctx[22]);
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, div0);
      append(section, div4);
      append(div4, div1);
      append(div1, input);
      set_input_value(input, ctx[2]);
      append(div1, label);
      append(label, t0);
      append(div1, span0);
      append(span0, t1);
      append(div4, div2);
      append(div2, button0);
      append(button0, t2);
      append(div4, span1);
      append(span1, t3);
      append(div4, div3);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].m(div3, null);
      }
      ctx[48](div3);
      append(section, div5);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(div5, null);
      }
      append(section, div7);
      append(div7, div6);
      append(section, div8);
      append(div8, t4);
      append(section, div10);
      append(div10, div9);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div9, null);
      }
      ctx[50](div10);
      append(section, div11);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div11, null);
      }
      append(section, button1);
      ctx[51](button1);
      ctx[52](section);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[47]),
          listen(input, "keydown", ctx[30]),
          listen(button0, "click", ctx[35]),
          listen(div3, "focusout", ctx[38]),
          listen(div3, "click", ctx[34]),
          listen(div3, "keydown", ctx[36]),
          listen(div3, "keyup", ctx[37]),
          listen(div5, "keydown", ctx[32]),
          action_destroyer(ctx[29].call(null, div9)),
          listen(div10, "click", ctx[33]),
          listen(div11, "click", ctx[33])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1 && input_placeholder_value !== (input_placeholder_value = ctx2[0].searchLabel)) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (dirty[0] & 18 && input_aria_expanded_value !== (input_aria_expanded_value = !!(ctx2[4] && ctx2[1].length))) {
        attr(input, "aria-expanded", input_aria_expanded_value);
      }
      if (dirty[0] & 67108864 && input_aria_activedescendant_value !== (input_aria_activedescendant_value = ctx2[26] ? `emo-${ctx2[26]}` : "")) {
        attr(input, "aria-activedescendant", input_aria_activedescendant_value);
      }
      if (dirty[0] & 4) {
        set_input_value(input, ctx2[2]);
      }
      if (dirty[0] & 1 && t0_value !== (t0_value = ctx2[0].searchLabel + ""))
        set_data(t0, t0_value);
      if (dirty[0] & 1 && t1_value !== (t1_value = ctx2[0].searchDescription + ""))
        set_data(t1, t1_value);
      if (dirty[0] & 2097152)
        set_data(t2, ctx2[21]);
      if (dirty[0] & 64 && button0_class_value !== (button0_class_value = "emoji " + (ctx2[6] ? "hide-focus" : ""))) {
        attr(button0, "class", button0_class_value);
      }
      if (dirty[0] & 8388608) {
        attr(button0, "aria-label", ctx2[23]);
      }
      if (dirty[0] & 8388608) {
        attr(button0, "title", ctx2[23]);
      }
      if (dirty[0] & 64) {
        attr(button0, "aria-expanded", ctx2[6]);
      }
      if (dirty[0] & 524288 && div2_class_value !== (div2_class_value = "skintone-button-wrapper " + (ctx2[19] ? "expanded" : ""))) {
        attr(div2, "class", div2_class_value);
      }
      if (dirty[0] & 1 && t3_value !== (t3_value = ctx2[0].skinToneDescription + ""))
        set_data(t3, t3_value);
      if (dirty[0] & 1049089) {
        each_value_4 = ctx2[9];
        each_blocks_3 = update_keyed_each(each_blocks_3, dirty, get_key, 1, ctx2, each_value_4, each0_lookup, div3, destroy_block, create_each_block_4, null, get_each_context_4);
      }
      if (dirty[0] & 64 && div3_class_value !== (div3_class_value = "skintone-list " + (ctx2[6] ? "" : "hidden no-animate"))) {
        attr(div3, "class", div3_class_value);
      }
      if (dirty[0] & 64) {
        set_style(div3, "transform", "translateY(" + (ctx2[6] ? 0 : "calc(-1 * var(--num-skintones) * var(--total-emoji-size))") + ")");
      }
      if (dirty[0] & 1 && div3_aria_label_value !== (div3_aria_label_value = ctx2[0].skinTonesLabel)) {
        attr(div3, "aria-label", div3_aria_label_value);
      }
      if (dirty[0] & 1048576 && div3_aria_activedescendant_value !== (div3_aria_activedescendant_value = "skintone-" + ctx2[20])) {
        attr(div3, "aria-activedescendant", div3_aria_activedescendant_value);
      }
      if (dirty[0] & 64 && div3_aria_hidden_value !== (div3_aria_hidden_value = !ctx2[6])) {
        attr(div3, "aria-hidden", div3_aria_hidden_value);
      }
      if (dirty[0] & 12305 | dirty[1] & 1) {
        each_value_3 = ctx2[12];
        each_blocks_2 = update_keyed_each(each_blocks_2, dirty, get_key_1, 1, ctx2, each_value_3, each1_lookup, div5, destroy_block, create_each_block_3, null, get_each_context_3);
      }
      if (dirty[0] & 4096) {
        set_style(div5, "grid-template-columns", "repeat(" + ctx2[12].length + ", 1fr)");
      }
      if (dirty[0] & 1 && div5_aria_label_value !== (div5_aria_label_value = ctx2[0].categoriesLabel)) {
        attr(div5, "aria-label", div5_aria_label_value);
      }
      if (dirty[0] & 16779264) {
        set_style(div6, "transform", "translateX(" + (ctx2[24] ? -1 : 1) * ctx2[11] * 100 + "%)");
      }
      if (dirty[0] & 262144)
        set_data(t4, ctx2[18]);
      if (dirty[0] & 262144 && div8_class_value !== (div8_class_value = "message " + (ctx2[18] ? "" : "gone"))) {
        attr(div8, "class", div8_class_value);
      }
      if (dirty[0] & 402694449) {
        each_value_1 = ctx2[15];
        each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key_2, 1, ctx2, each_value_1, each2_lookup, div9, destroy_block, create_each_block_1, null, get_each_context_1);
      }
      if (dirty[0] & 278528 && div10_class_value !== (div10_class_value = "tabpanel " + (!ctx2[14] || ctx2[18] ? "gone" : ""))) {
        attr(div10, "class", div10_class_value);
      }
      if (dirty[0] & 16 && div10_role_value !== (div10_role_value = ctx2[4] ? "region" : "tabpanel")) {
        attr(div10, "role", div10_role_value);
      }
      if (dirty[0] & 8209 && div10_aria_label_value !== (div10_aria_label_value = ctx2[4] ? ctx2[0].searchResultsLabel : ctx2[0].categories[ctx2[13].name])) {
        attr(div10, "aria-label", div10_aria_label_value);
      }
      if (dirty[0] & 8208 && div10_id_value !== (div10_id_value = ctx2[4] ? "" : `tab-${ctx2[13].id}`)) {
        attr(div10, "id", div10_id_value);
      }
      if (dirty[0] & 402654464) {
        each_value = ctx2[10];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key_3, 1, ctx2, each_value, each3_lookup, div11, destroy_block, create_each_block, null, get_each_context);
      }
      if (dirty[0] & 262144 && div11_class_value !== (div11_class_value = "favorites emoji-menu " + (ctx2[18] ? "gone" : ""))) {
        attr(div11, "class", div11_class_value);
      }
      if (dirty[0] & 1 && div11_aria_label_value !== (div11_aria_label_value = ctx2[0].favoritesLabel)) {
        attr(div11, "aria-label", div11_aria_label_value);
      }
      if (dirty[0] & 33554432) {
        set_style(div11, "padding-inline-end", ctx2[25] + "px");
      }
      if (dirty[0] & 1 && section_aria_label_value !== (section_aria_label_value = ctx2[0].regionLabel)) {
        attr(section, "aria-label", section_aria_label_value);
      }
      if (dirty[0] & 4194304) {
        attr(section, "style", ctx2[22]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(section);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].d();
      }
      ctx[48](null);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].d();
      }
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].d();
      }
      ctx[50](null);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      ctx[51](null);
      ctx[52](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { skinToneEmoji } = $$props;
  let { i18n } = $$props;
  let { database } = $$props;
  let { customEmoji } = $$props;
  let { customCategorySorting } = $$props;
  let initialLoad = true;
  let currentEmojis = [];
  let currentEmojisWithCategories = [];
  let rawSearchText = "";
  let searchText = "";
  let rootElement;
  let baselineEmoji;
  let tabpanelElement;
  let searchMode = false;
  let activeSearchItem = -1;
  let message;
  let skinTonePickerExpanded = false;
  let skinTonePickerExpandedAfterAnimation = false;
  let skinToneDropdown;
  let currentSkinTone = 0;
  let activeSkinTone = 0;
  let skinToneButtonText;
  let pickerStyle;
  let skinToneButtonLabel = "";
  let skinTones = [];
  let currentFavorites = [];
  let defaultFavoriteEmojis;
  let numColumns = DEFAULT_NUM_COLUMNS;
  let isRtl = false;
  let scrollbarWidth = 0;
  let currentGroupIndex = 0;
  let groups$1 = groups;
  let currentGroup;
  let databaseLoaded = false;
  let activeSearchItemId;
  const focus = (id) => {
    rootElement.getRootNode().getElementById(id).focus();
  };
  const fireEvent = (name, detail) => {
    rootElement.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  };
  const unicodeWithSkin = (emoji, currentSkinTone2) => currentSkinTone2 && emoji.skins && emoji.skins[currentSkinTone2] || emoji.unicode;
  const labelWithSkin = (emoji, currentSkinTone2) => uniq([
    emoji.name || unicodeWithSkin(emoji, currentSkinTone2),
    ...emoji.shortcodes || []
  ]).join(", ");
  const isSkinToneOption = (element2) => /^skintone-/.test(element2.id);
  emojiSupportLevelPromise.then((level) => {
    if (!level) {
      $$invalidate(18, message = i18n.emojiUnsupportedMessage);
    }
  });
  function calculateEmojiGridStyle(node) {
    return calculateWidth(node, (width) => {
      {
        const style = getComputedStyle(rootElement);
        const newNumColumns = parseInt(style.getPropertyValue("--num-columns"), 10);
        const newIsRtl = style.getPropertyValue("direction") === "rtl";
        const parentWidth = node.parentElement.getBoundingClientRect().width;
        const newScrollbarWidth = parentWidth - width;
        $$invalidate(46, numColumns = newNumColumns);
        $$invalidate(25, scrollbarWidth = newScrollbarWidth);
        $$invalidate(24, isRtl = newIsRtl);
      }
    });
  }
  function checkZwjSupportAndUpdate(zwjEmojisToCheck) {
    const rootNode = rootElement.getRootNode();
    const emojiToDomNode = (emoji) => rootNode.getElementById(`emo-${emoji.id}`);
    checkZwjSupport(zwjEmojisToCheck, baselineEmoji, emojiToDomNode);
    $$invalidate(1, currentEmojis = currentEmojis);
  }
  function isZwjSupported(emoji) {
    return !emoji.unicode || !hasZwj(emoji) || supportedZwjEmojis.get(emoji.unicode);
  }
  async function filterEmojisByVersion(emojis) {
    const emojiSupportLevel = await emojiSupportLevelPromise;
    return emojis.filter(({ version }) => !version || version <= emojiSupportLevel);
  }
  async function summarizeEmojis(emojis) {
    return summarizeEmojisForUI(emojis, await emojiSupportLevelPromise);
  }
  async function getEmojisByGroup(group) {
    if (typeof group === "undefined") {
      return [];
    }
    const emoji = group === -1 ? customEmoji : await database.getEmojiByGroup(group);
    return summarizeEmojis(await filterEmojisByVersion(emoji));
  }
  async function getEmojisBySearchQuery(query) {
    return summarizeEmojis(await filterEmojisByVersion(await database.getEmojiBySearchQuery(query)));
  }
  function onSearchKeydown(event) {
    if (!searchMode || !currentEmojis.length) {
      return;
    }
    const goToNextOrPrevious = (previous) => {
      halt(event);
      $$invalidate(5, activeSearchItem = incrementOrDecrement(previous, activeSearchItem, currentEmojis));
    };
    switch (event.key) {
      case "ArrowDown":
        return goToNextOrPrevious(false);
      case "ArrowUp":
        return goToNextOrPrevious(true);
      case "Enter":
        if (activeSearchItem !== -1) {
          halt(event);
          return clickEmoji(currentEmojis[activeSearchItem].id);
        } else if (currentEmojis.length) {
          $$invalidate(5, activeSearchItem = 0);
        }
    }
  }
  function onNavClick(group) {
    $$invalidate(2, rawSearchText = "");
    $$invalidate(44, searchText = "");
    $$invalidate(5, activeSearchItem = -1);
    $$invalidate(11, currentGroupIndex = groups$1.findIndex((_) => _.id === group.id));
  }
  function onNavKeydown(event) {
    const { target, key } = event;
    const doFocus = (el) => {
      if (el) {
        halt(event);
        el.focus();
      }
    };
    switch (key) {
      case "ArrowLeft":
        return doFocus(target.previousSibling);
      case "ArrowRight":
        return doFocus(target.nextSibling);
      case "Home":
        return doFocus(target.parentElement.firstChild);
      case "End":
        return doFocus(target.parentElement.lastChild);
    }
  }
  async function clickEmoji(unicodeOrName) {
    const emoji = await database.getEmojiByUnicodeOrName(unicodeOrName);
    const emojiSummary = [...currentEmojis, ...currentFavorites].find((_) => _.id === unicodeOrName);
    const skinTonedUnicode = emojiSummary.unicode && unicodeWithSkin(emojiSummary, currentSkinTone);
    await database.incrementFavoriteEmojiCount(unicodeOrName);
    fireEvent("emoji-click", {
      emoji,
      skinTone: currentSkinTone,
      ...skinTonedUnicode && { unicode: skinTonedUnicode },
      ...emojiSummary.name && { name: emojiSummary.name }
    });
  }
  async function onEmojiClick(event) {
    const { target } = event;
    if (!target.classList.contains("emoji")) {
      return;
    }
    halt(event);
    const id = target.id.substring(4);
    clickEmoji(id);
  }
  async function onSkinToneOptionsClick(event) {
    const { target } = event;
    if (!isSkinToneOption(target)) {
      return;
    }
    halt(event);
    const skinTone = parseInt(target.id.slice(9), 10);
    $$invalidate(8, currentSkinTone = skinTone);
    $$invalidate(6, skinTonePickerExpanded = false);
    focus("skintone-button");
    fireEvent("skin-tone-change", { skinTone });
    database.setPreferredSkinTone(skinTone);
  }
  async function onClickSkinToneButton(event) {
    $$invalidate(6, skinTonePickerExpanded = !skinTonePickerExpanded);
    $$invalidate(20, activeSkinTone = currentSkinTone);
    if (skinTonePickerExpanded) {
      halt(event);
      rAF(() => focus(`skintone-${activeSkinTone}`));
    }
  }
  function onSkinToneOptionsKeydown(event) {
    if (!skinTonePickerExpanded) {
      return;
    }
    const changeActiveSkinTone = async (nextSkinTone) => {
      halt(event);
      $$invalidate(20, activeSkinTone = nextSkinTone);
      await tick();
      focus(`skintone-${activeSkinTone}`);
    };
    switch (event.key) {
      case "ArrowUp":
        return changeActiveSkinTone(incrementOrDecrement(true, activeSkinTone, skinTones));
      case "ArrowDown":
        return changeActiveSkinTone(incrementOrDecrement(false, activeSkinTone, skinTones));
      case "Home":
        return changeActiveSkinTone(0);
      case "End":
        return changeActiveSkinTone(skinTones.length - 1);
      case "Enter":
        return onSkinToneOptionsClick(event);
      case "Escape":
        halt(event);
        $$invalidate(6, skinTonePickerExpanded = false);
        return focus("skintone-button");
    }
  }
  function onSkinToneOptionsKeyup(event) {
    if (!skinTonePickerExpanded) {
      return;
    }
    switch (event.key) {
      case " ":
        return onSkinToneOptionsClick(event);
    }
  }
  async function onSkinToneOptionsFocusOut(event) {
    const { relatedTarget } = event;
    if (!relatedTarget || !isSkinToneOption(relatedTarget)) {
      $$invalidate(6, skinTonePickerExpanded = false);
    }
  }
  function input_input_handler() {
    rawSearchText = this.value;
    $$invalidate(2, rawSearchText);
  }
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      skinToneDropdown = $$value;
      $$invalidate(7, skinToneDropdown);
    });
  }
  const click_handler = (group) => onNavClick(group);
  function div10_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      tabpanelElement = $$value;
      $$invalidate(3, tabpanelElement);
    });
  }
  function button1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      baselineEmoji = $$value;
      $$invalidate(17, baselineEmoji);
    });
  }
  function section_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      rootElement = $$value;
      $$invalidate(16, rootElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("skinToneEmoji" in $$props2)
      $$invalidate(40, skinToneEmoji = $$props2.skinToneEmoji);
    if ("i18n" in $$props2)
      $$invalidate(0, i18n = $$props2.i18n);
    if ("database" in $$props2)
      $$invalidate(39, database = $$props2.database);
    if ("customEmoji" in $$props2)
      $$invalidate(41, customEmoji = $$props2.customEmoji);
    if ("customCategorySorting" in $$props2)
      $$invalidate(42, customCategorySorting = $$props2.customCategorySorting);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[1] & 1280) {
      {
        if (customEmoji && database) {
          $$invalidate(39, database.customEmoji = customEmoji, database);
        }
      }
    }
    if ($$self.$$.dirty[0] & 1 | $$self.$$.dirty[1] & 256) {
      {
        async function handleDatabaseLoading() {
          let showingLoadingMessage = false;
          const timeoutHandle = setTimeout(
            () => {
              showingLoadingMessage = true;
              $$invalidate(18, message = i18n.loadingMessage);
            },
            TIMEOUT_BEFORE_LOADING_MESSAGE
          );
          try {
            await database.ready();
            $$invalidate(14, databaseLoaded = true);
          } catch (err) {
            console.error(err);
            $$invalidate(18, message = i18n.networkErrorMessage);
          } finally {
            clearTimeout(timeoutHandle);
            if (showingLoadingMessage) {
              showingLoadingMessage = false;
              $$invalidate(18, message = "");
            }
          }
        }
        if (database) {
          handleDatabaseLoading();
        }
      }
    }
    if ($$self.$$.dirty[0] & 6144 | $$self.$$.dirty[1] & 1024) {
      {
        if (customEmoji && customEmoji.length) {
          $$invalidate(12, groups$1 = [customGroup, ...groups]);
        } else if (groups$1 !== groups) {
          if (currentGroupIndex) {
            $$invalidate(11, currentGroupIndex--, currentGroupIndex);
          }
          $$invalidate(12, groups$1 = groups);
        }
      }
    }
    if ($$self.$$.dirty[0] & 4) {
      {
        rIC(() => {
          $$invalidate(44, searchText = (rawSearchText || "").trim());
          $$invalidate(5, activeSearchItem = -1);
        });
      }
    }
    if ($$self.$$.dirty[0] & 6144) {
      $$invalidate(13, currentGroup = groups$1[currentGroupIndex]);
    }
    if ($$self.$$.dirty[0] & 24576 | $$self.$$.dirty[1] & 8192) {
      {
        async function updateEmojis() {
          if (!databaseLoaded) {
            $$invalidate(1, currentEmojis = []);
            $$invalidate(4, searchMode = false);
          } else if (searchText.length >= MIN_SEARCH_TEXT_LENGTH) {
            const currentSearchText = searchText;
            const newEmojis = await getEmojisBySearchQuery(currentSearchText);
            if (currentSearchText === searchText) {
              $$invalidate(1, currentEmojis = newEmojis);
              $$invalidate(4, searchMode = true);
            }
          } else if (currentGroup) {
            const currentGroupId = currentGroup.id;
            const newEmojis = await getEmojisByGroup(currentGroupId);
            if (currentGroupId === currentGroup.id) {
              $$invalidate(1, currentEmojis = newEmojis);
              $$invalidate(4, searchMode = false);
            }
          }
        }
        updateEmojis();
      }
    }
    if ($$self.$$.dirty[0] & 4112) {
      $$invalidate(22, pickerStyle = `
  --font-family: ${FONT_FAMILY};
  --num-groups: ${groups$1.length}; 
  --indicator-opacity: ${searchMode ? 0 : 1}; 
  --num-skintones: ${NUM_SKIN_TONES};`);
    }
    if ($$self.$$.dirty[0] & 16384 | $$self.$$.dirty[1] & 256) {
      {
        async function updatePreferredSkinTone() {
          if (databaseLoaded) {
            $$invalidate(8, currentSkinTone = await database.getPreferredSkinTone());
          }
        }
        updatePreferredSkinTone();
      }
    }
    if ($$self.$$.dirty[1] & 512) {
      $$invalidate(9, skinTones = Array(NUM_SKIN_TONES).fill().map((_, i) => applySkinTone(skinToneEmoji, i)));
    }
    if ($$self.$$.dirty[0] & 768) {
      $$invalidate(21, skinToneButtonText = skinTones[currentSkinTone]);
    }
    if ($$self.$$.dirty[0] & 257) {
      $$invalidate(23, skinToneButtonLabel = i18n.skinToneLabel.replace("{skinTone}", i18n.skinTones[currentSkinTone]));
    }
    if ($$self.$$.dirty[0] & 16384 | $$self.$$.dirty[1] & 256) {
      {
        async function updateDefaultFavoriteEmojis() {
          $$invalidate(45, defaultFavoriteEmojis = (await Promise.all(MOST_COMMONLY_USED_EMOJI.map((unicode) => database.getEmojiByUnicodeOrName(unicode)))).filter(Boolean));
        }
        if (databaseLoaded) {
          updateDefaultFavoriteEmojis();
        }
      }
    }
    if ($$self.$$.dirty[0] & 16384 | $$self.$$.dirty[1] & 49408) {
      {
        async function updateFavorites() {
          const dbFavorites = await database.getTopFavoriteEmoji(numColumns);
          const favorites = await summarizeEmojis(uniqBy([...dbFavorites, ...defaultFavoriteEmojis], (_) => _.unicode || _.name).slice(0, numColumns));
          $$invalidate(10, currentFavorites = favorites);
        }
        if (databaseLoaded && defaultFavoriteEmojis) {
          updateFavorites();
        }
      }
    }
    if ($$self.$$.dirty[0] & 10) {
      {
        const zwjEmojisToCheck = currentEmojis.filter((emoji) => emoji.unicode).filter((emoji) => hasZwj(emoji) && !supportedZwjEmojis.has(emoji.unicode));
        if (zwjEmojisToCheck.length) {
          rAF(() => checkZwjSupportAndUpdate(zwjEmojisToCheck));
        } else {
          $$invalidate(1, currentEmojis = currentEmojis.filter(isZwjSupported));
          rAF(() => {
            (tabpanelElement || {}).scrollTop = 0;
          });
        }
      }
    }
    if ($$self.$$.dirty[0] & 1026 | $$self.$$.dirty[1] & 4096)
      ;
    if ($$self.$$.dirty[0] & 18 | $$self.$$.dirty[1] & 2048) {
      {
        let calculateCurrentEmojisWithCategories = function() {
          if (searchMode) {
            return [{ category: "", emojis: currentEmojis }];
          }
          const categoriesToEmoji = /* @__PURE__ */ new Map();
          for (const emoji of currentEmojis) {
            const category = emoji.category || "";
            let emojis = categoriesToEmoji.get(category);
            if (!emojis) {
              emojis = [];
              categoriesToEmoji.set(category, emojis);
            }
            emojis.push(emoji);
          }
          return [...categoriesToEmoji.entries()].map(([category, emojis]) => ({ category, emojis })).sort((a, b2) => customCategorySorting(a.category, b2.category));
        };
        $$invalidate(15, currentEmojisWithCategories = calculateCurrentEmojisWithCategories());
      }
    }
    if ($$self.$$.dirty[0] & 34) {
      $$invalidate(26, activeSearchItemId = activeSearchItem !== -1 && currentEmojis[activeSearchItem].id);
    }
    if ($$self.$$.dirty[0] & 192) {
      {
        if (skinTonePickerExpanded) {
          skinToneDropdown.addEventListener(
            "transitionend",
            () => {
              $$invalidate(19, skinTonePickerExpandedAfterAnimation = true);
            },
            { once: true }
          );
        } else {
          $$invalidate(19, skinTonePickerExpandedAfterAnimation = false);
        }
      }
    }
  };
  return [
    i18n,
    currentEmojis,
    rawSearchText,
    tabpanelElement,
    searchMode,
    activeSearchItem,
    skinTonePickerExpanded,
    skinToneDropdown,
    currentSkinTone,
    skinTones,
    currentFavorites,
    currentGroupIndex,
    groups$1,
    currentGroup,
    databaseLoaded,
    currentEmojisWithCategories,
    rootElement,
    baselineEmoji,
    message,
    skinTonePickerExpandedAfterAnimation,
    activeSkinTone,
    skinToneButtonText,
    pickerStyle,
    skinToneButtonLabel,
    isRtl,
    scrollbarWidth,
    activeSearchItemId,
    unicodeWithSkin,
    labelWithSkin,
    calculateEmojiGridStyle,
    onSearchKeydown,
    onNavClick,
    onNavKeydown,
    onEmojiClick,
    onSkinToneOptionsClick,
    onClickSkinToneButton,
    onSkinToneOptionsKeydown,
    onSkinToneOptionsKeyup,
    onSkinToneOptionsFocusOut,
    database,
    skinToneEmoji,
    customEmoji,
    customCategorySorting,
    initialLoad,
    searchText,
    defaultFavoriteEmojis,
    numColumns,
    input_input_handler,
    div3_binding,
    click_handler,
    div10_binding,
    button1_binding,
    section_binding
  ];
}
class Picker extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance,
      create_fragment,
      safe_not_equal,
      {
        skinToneEmoji: 40,
        i18n: 0,
        database: 39,
        customEmoji: 41,
        customCategorySorting: 42
      },
      null,
      [-1, -1, -1]
    );
  }
}
const DEFAULT_DATA_SOURCE = "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json";
const DEFAULT_LOCALE = "en";
var enI18n = {
  categoriesLabel: "Categories",
  emojiUnsupportedMessage: "Your browser does not support color emoji.",
  favoritesLabel: "Favorites",
  loadingMessage: "Loading\u2026",
  networkErrorMessage: "Could not load emoji.",
  regionLabel: "Emoji picker",
  searchDescription: "When search results are available, press up or down to select and enter to choose.",
  searchLabel: "Search",
  searchResultsLabel: "Search results",
  skinToneDescription: "When expanded, press up or down to select and enter to choose.",
  skinToneLabel: "Choose a skin tone (currently {skinTone})",
  skinTonesLabel: "Skin tones",
  skinTones: [
    "Default",
    "Light",
    "Medium-Light",
    "Medium",
    "Medium-Dark",
    "Dark"
  ],
  categories: {
    custom: "Custom",
    "smileys-emotion": "Smileys and emoticons",
    "people-body": "People and body",
    "animals-nature": "Animals and nature",
    "food-drink": "Food and drink",
    "travel-places": "Travel and places",
    activities: "Activities",
    objects: "Objects",
    symbols: "Symbols",
    flags: "Flags"
  }
};
const PROPS = [
  "customEmoji",
  "customCategorySorting",
  "database",
  "dataSource",
  "i18n",
  "locale",
  "skinToneEmoji"
];
class PickerElement extends HTMLElement {
  constructor(props) {
    super();
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = ":host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.custom-emoji,.emoji,button.emoji{height:var(--total-emoji-size);width:var(--total-emoji-size)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;line-height:1;overflow:hidden;font-family:var(--font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.custom-emoji{padding:var(--emoji-padding);object-fit:contain;pointer-events:none;background-repeat:no-repeat;background-position:center center;background-size:var(--emoji-size) var(--emoji-size)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}";
    this.shadowRoot.appendChild(style);
    this._ctx = {
      locale: DEFAULT_LOCALE,
      dataSource: DEFAULT_DATA_SOURCE,
      skinToneEmoji: DEFAULT_SKIN_TONE_EMOJI,
      customCategorySorting: DEFAULT_CATEGORY_SORTING,
      customEmoji: null,
      i18n: enI18n,
      ...props
    };
    for (const prop of PROPS) {
      if (prop !== "database" && Object.prototype.hasOwnProperty.call(this, prop)) {
        this._ctx[prop] = this[prop];
        delete this[prop];
      }
    }
    this._dbFlush();
  }
  connectedCallback() {
    this._cmp = new Picker({
      target: this.shadowRoot,
      props: this._ctx
    });
  }
  disconnectedCallback() {
    this._cmp.$destroy();
    this._cmp = void 0;
    const { database } = this._ctx;
    if (database) {
      database.close().catch((err) => console.error(err));
    }
  }
  static get observedAttributes() {
    return ["locale", "data-source", "skin-tone-emoji"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    this._set(
      attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase()),
      newValue
    );
  }
  _set(prop, newValue) {
    this._ctx[prop] = newValue;
    if (this._cmp) {
      this._cmp.$set({ [prop]: newValue });
    }
    if (["locale", "dataSource"].includes(prop)) {
      this._dbFlush();
    }
  }
  _dbCreate() {
    const { locale, dataSource, database } = this._ctx;
    if (!database || database.locale !== locale || database.dataSource !== dataSource) {
      this._set("database", new Database({ locale, dataSource }));
    }
  }
  _dbFlush() {
    Promise.resolve().then(() => this._dbCreate());
  }
}
const definitions = {};
for (const prop of PROPS) {
  definitions[prop] = {
    get() {
      if (prop === "database") {
        this._dbCreate();
      }
      return this._ctx[prop];
    },
    set(val) {
      if (prop === "database") {
        throw new Error("database is read-only");
      }
      this._set(prop, val);
    }
  };
}
Object.defineProperties(PickerElement.prototype, definitions);
if (!customElements.get("emoji-picker")) {
  customElements.define("emoji-picker", PickerElement);
}
var b = Object.defineProperty, v = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var u = (e, i, t) => i in e ? b(e, i, { enumerable: true, configurable: true, writable: true, value: t }) : e[i] = t, o = (e, i) => {
  for (var t in i || (i = {}))
    g.call(i, t) && u(e, t, i[t]);
  if (h)
    for (var t of h(i))
      k.call(i, t) && u(e, t, i[t]);
  return e;
}, f = (e, i) => v(e, O(i));
var j = (e, i) => {
  var t = {};
  for (var r in e)
    g.call(e, r) && i.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && h)
    for (var r of h(e))
      i.indexOf(r) < 0 && k.call(e, r) && (t[r] = e[r]);
  return t;
};
var D = (e) => e ? Object.entries(e).reduce((i, [t, r]) => (t = t.charAt(0).toUpperCase() + t.slice(1), t = `on${t}`, f(o({}, i), { [t]: r })), {}) : null, w = (e, i = {}, t) => {
  if (VueDemi.isVue2)
    return VueDemi.h(e, i, t);
  let d = i, { props: r, domProps: c, on: a } = d, p = j(d, ["props", "domProps", "on"]), P = D(a), E = o(o(o(o({}, p), r), c), P);
  return VueDemi.h(e, E, t);
}, S = w;
function m() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function l(e) {
  return e.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
}
VueDemi.isVue2 && VueDemi.Vue2.config.ignoredElements.push("emoji-picker");
var z = VueDemi.defineComponent({ props: { isDark: { type: Boolean, required: false, default: m() }, skinToneEmoji: String, customEmoji: Array, dataSource: String, locale: String, customCategorySorting: Function, i18n: Object, pickerStyle: Object }, emits: ["emojiClick", "skinToneChange"], data: () => ({ picker: new PickerElement() }), watch: { $props: { handler() {
  this.updatePickerProps();
}, deep: true } }, mounted() {
  let e = this.$refs.root;
  this.updatePickerProps(), e.appendChild(this.picker), this.picker.addEventListener("emoji-click", this.handleClick), this.picker.addEventListener("skin-tone-change", this.handleSkinToneChange);
}, beforeUnmount() {
  this.picker.removeEventListener("emoji-click", this.handleClick), this.picker.removeEventListener("skin-tone-change", this.handleSkinToneChange);
}, methods: { handleClick(e) {
  this.$emit("emojiClick", e.detail);
}, handleSkinToneChange(e) {
  this.$emit("skinToneChange", e.detail);
}, updatePickerProps() {
  let { skinToneEmoji: e, dataSource: i, locale: t, customEmoji: r, i18n: c, customCategorySorting: a, isDark: p } = this.$props;
  e && (this.picker.skinToneEmoji = e), i && (this.picker.dataSource = i), t && (this.picker.locale = t), r && (this.picker.customEmoji = r), c && (this.picker.i18n = c), a && (this.picker.customCategorySorting = a), this.picker.classList.toggle("dark", p), this.picker.classList.toggle("light", !p), this.updatePickerStyle();
}, updatePickerStyle() {
  this.pickerStyle && typeof this.pickerStyle == "object" && Object.keys(this.pickerStyle).forEach((e) => {
    var i, t;
    e === "height" && ((i = this.pickerStyle) == null ? void 0 : i.height) ? this.picker.style.setProperty("height", this.pickerStyle.height) : e === "width" && ((t = this.pickerStyle) == null ? void 0 : t.width) ? this.picker.style.setProperty("width", this.pickerStyle.width) : this.picker.style.setProperty(`--${l(e)}`, this.pickerStyle[e]);
  });
} }, render() {
  return S("div", { ref: "root" });
} });
const _hoisted_1$3 = {
  "mt-2": "",
  flex: ""
};
const _hoisted_2$3 = {
  flex: "",
  "justify-end": "",
  "mb-2": ""
};
const _sfc_main$3 = /* @__PURE__ */ Vue.defineComponent({
  __name: "MessageEditor",
  props: {
    friend: null
  },
  setup(__props) {
    const props = __props;
    const socket = Vue.inject("socket");
    const userStore = useUserStore();
    const messageStore = useMessageStore();
    const friendStore = useFriendStore();
    const { userInfo } = storeToRefs(userStore);
    const { friendList } = storeToRefs(friendStore);
    let msgContent = Vue.ref("");
    const showEmoji = Vue.ref(false);
    const serverUrl = "http://175.178.99.5:8000/upload/img";
    const inputConfig = {
      maxLength: 300,
      placeholder: "",
      type: "textarea",
      rows: 2
    };
    const sendMsg = async (event, type) => {
      if (props.friend.friendInfo.status === 0) {
        await messageStore.sendMsgToFriend(
          userInfo.value.id,
          props.friend.friendInfo.id,
          msgContent.value,
          type
        );
        msgContent.value = "";
        await messageStore.getMsgRecordById(
          userInfo.value.id,
          props.friend.friendInfo.id
        );
        messageStore.getAllLastMsg(userInfo.value.id, friendList.value);
      } else {
        await messageStore.sendMsgToFriend(
          userInfo.value.id,
          props.friend.friendInfo.id,
          msgContent.value,
          type
        );
        socket.emit(
          "private_msg",
          userInfo.value,
          props.friend.friendInfo,
          msgContent.value
        );
        msgContent.value = "";
        await messageStore.getMsgRecordById(
          userInfo.value.id,
          props.friend.friendInfo.id
        );
        messageStore.getAllLastMsg(userInfo.value.id, friendList.value);
      }
    };
    socket.on("get_private_msg", async (targetId) => {
      await messageStore.getMsgRecordById(
        userInfo.value.id,
        props.friend.friendInfo.id
      );
      if (props.friend.friendInfo.id === targetId) {
        await messageStore.updateUnreadMsgToRead(
          props.friend.friendInfo.id,
          userInfo.value.id
        );
        await messageStore.getMsgRecordById(
          userInfo.value.id,
          props.friend.friendInfo.id
        );
      }
    });
    const handleEmojiClick = (detail) => {
      msgContent.value += detail.unicode;
      showEmoji.value = false;
    };
    const imgUploadSuccess = async (res, file) => {
      msgContent.value = file.response.data.url;
      sendMsg(void 0, 1);
    };
    return (_ctx, _cache) => {
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      const _component_ElUpload = Vue.resolveComponent("ElUpload");
      const _component_el_input = Vue.resolveComponent("el-input");
      const _component_el_button = Vue.resolveComponent("el-button");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("div", null, [
          Vue.createElementVNode("div", _hoisted_1$3, [
            Vue.createVNode(_component_ElUpload, {
              action: serverUrl,
              name: "img",
              "show-file-list": false,
              "on-success": imgUploadSuccess
            }, {
              trigger: Vue.withCtx(() => [
                Vue.createVNode(_component_ElIcon, {
                  size: 20,
                  "cursor-pointer": ""
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(Vue.unref(picture_default))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Vue.createElementVNode("div", {
              class: "i-ic-outline-insert-emoticon text-xl ml-2 cursor-pointer",
              onClick: _cache[0] || (_cache[0] = ($event) => showEmoji.value = !showEmoji.value)
            }),
            Vue.withDirectives(Vue.createVNode(Vue.unref(z), {
              onEmojiClick: handleEmojiClick,
              style: { "position": "absolute", "bottom": "25%" }
            }, null, 512), [
              [Vue.vShow, showEmoji.value]
            ])
          ]),
          Vue.createElementVNode("div", null, [
            Vue.createVNode(_component_el_input, Vue.mergeProps({
              modelValue: Vue.unref(msgContent),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.isRef(msgContent) ? msgContent.value = $event : msgContent = $event)
            }, inputConfig, {
              onKeydown: _cache[2] || (_cache[2] = Vue.withKeys(($event) => sendMsg(), ["enter"])),
              resize: "none"
            }), null, 16, ["modelValue"])
          ])
        ]),
        Vue.createElementVNode("div", _hoisted_2$3, [
          Vue.createElementVNode("div", null, [
            Vue.createVNode(_component_el_button, {
              "ml-2": "",
              onClick: sendMsg
            }, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode("\u53D1\u9001")
              ]),
              _: 1
            })
          ])
        ])
      ], 64);
    };
  }
});
const MessageEditor_vue_vue_type_style_index_0_scoped_d8843f6a_lang = "";
const MessageEditor = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d8843f6a"]]);
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
                Vue.createVNode(BubbleBox, { msgList: __props.msgList }, null, 8, ["msgList"])
              ])
            ], 512),
            Vue.createElementVNode("div", _hoisted_6$1, [
              Vue.createVNode(MessageEditor, { friend: __props.friend }, null, 8, ["friend"])
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
const MessageBox_vue_vue_type_style_index_0_scoped_ae25a4cb_lang = "";
const MessageBox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ae25a4cb"]]);
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
                Vue.createVNode(_sfc_main$9, {
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
const _withScopeId = (n) => (Vue.pushScopeId("data-v-cf4e4b30"), n = n(), Vue.popScopeId(), n);
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
      const _component_ElBadge = Vue.resolveComponent("ElBadge");
      const _component_ElIcon = Vue.resolveComponent("ElIcon");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(Header),
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
                  Vue.createVNode(_sfc_main$8, {
                    modelValue: Vue.unref(searchUserByName),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.isRef(searchUserByName) ? searchUserByName.value = $event : searchUserByName = $event)
                  }, null, 8, ["modelValue"]),
                  Vue.unref(friendListBySearch).length ? (Vue.openBlock(), Vue.createBlock(_sfc_main$6, {
                    key: 0,
                    list: Vue.unref(friendListBySearch),
                    strangers: Vue.unref(userList)
                  }, null, 8, ["list", "strangers"])) : (Vue.openBlock(), Vue.createBlock(FriendItem, {
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
const MessageView_vue_vue_type_style_index_0_scoped_cf4e4b30_lang = "";
const MessageView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf4e4b30"]]);
export {
  MessageView as default
};
