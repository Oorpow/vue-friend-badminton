<template>
  <Header />
  <div>
    <!-- 空间背景 -->
    <div
      w-full
      h-16
      relative
      bg-cover
      bg-no-repeat
      :style="{
        background: currentSpaceBg,
      }"
    >
      <template v-if="spaceUserInfo.id === userInfo.id">
        <div absolute right-5 bottom-1>
          <UploadCpn
            :uploadConfig="uploadConfig"
            :type="uploadType.bg"
            @updateBgOrAvatar="updateBgOrAvatar"
          />
        </div>
      </template>
    </div>

    <div w-full>
      <div class="w-8/10 mx-auto">
        <!-- 头像和用户信息 -->
        <div flex items-center relative>
          <Avatar
            :username="spaceUserInfo.name"
            :avatar="spaceUserInfo.avatar"
            :configStyle="defaultStyle"
            :size="80"
          />
          <div flex flex-col ml-3>
            <div flex items-center>
              <h3 my-0 mr-1>{{ spaceUserInfo.name && spaceUserInfo.name }}</h3>
              <template v-if="isMaster">
                <ElIcon
                  mt-1
                  cursor-pointer
                  hover:rotate-90
                  transition
                  @click="openUserInfoDialog"
                  ><Setting /></ElIcon
              ></template>
            </div>
            <span text-sm mt-2 text-gray>{{
              spaceUserInfo.description
                ? spaceUserInfo.description
                : '暂无个性签名'
            }}</span>
          </div>
          <template v-if="!isFriend && !isMyself">
            <ElButton color="#3b82f6" round ml-2 @click="handleAddFriend"
              >关注</ElButton
            ></template
          >
          <template v-else-if="isMyself"> </template>
          <template v-else>
            <ElButton color="#3b82f6" round ml-2>发消息</ElButton>
          </template>
        </div>
        <!-- 头像上传 -->
        <template v-if="spaceUserInfo.id === userInfo.id">
          <div flex mt--8 ml-12>
            <UploadCpn
              :uploadConfig="uploadConfig"
              :type="uploadType.avatar"
              @updateBgOrAvatar="updateBgOrAvatar"
            />
          </div>
        </template>
        <!-- 选项卡 -->
        <div my-2 p-2>
          <span
            class="text-gray cursor-pointer mr-5"
            v-for="tab in tabList"
            :key="tab.id"
            @click="changeTab(tab)"
            :class="currentTab === tab.comName ? 'tab_active' : ''"
            >{{ tab.name }}</span
          >
        </div>
      </div>
    </div>

    <div class="w-8/10 mx-auto mb-10">
      <KeepAlive>
        <component :is="currentTab" :friends="friendList"></component>
      </KeepAlive>
    </div>
  </div>

  <ElDialog
    v-model="userInfoDialogVisible"
    title="修改个人信息"
    width="40%"
    align-center
  >
    <ElForm
      label-position="right"
      label-width="80px"
      ref="userInfoFormRef"
      :model="userInfoForm"
      :rules="userInfoFormRules"
    >
      <ElFormItem label="用户名" prop="name">
        <ElInput placeholder="" v-model="userInfoForm.name" />
      </ElFormItem>
      <ElFormItem label="密码" prop="password">
        <ElInput
          type="password"
          placeholder=""
          show-password
          v-model="userInfoForm.password"
        />
      </ElFormItem>
      <ElFormItem label="个人介绍">
        <ElInput
          type="textarea"
          resize="none"
          v-model="userInfoForm.desc"
          :rows="2"
        />
      </ElFormItem>
      <ElFormItem>
        <ElButton @click="editUserInfo(userInfoFormRef)">修改</ElButton>
        <ElButton>取消</ElButton>
      </ElFormItem>
    </ElForm>
  </ElDialog>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import SpaceInvitation from '@/components/Space/SpaceInvitation/SpaceInvitation.vue'
import Avatar from '@/components/Header/components/Avatar.vue'
import UploadCpn from '@/components/Space/UploadCpn/UploadCpn.vue'
// import SpaceFriend from '@/components/Space/SpaceFriend/SpaceFriend.vue'

import { markRaw, shallowRef, watch, ref, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Setting } from '@element-plus/icons-vue'

import { useUserStore } from '@/stores/user'
import { useFriendStore } from '@/stores/friend'
import type { IFriend } from '@/request/api/friend/types'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import type { IUserForm } from '@/request/api/user/types'
import { uploadConfig, uploadType } from '@/components/Space/UploadCpn/config'

const route = useRoute()
const userStore = useUserStore()
const friendStore = useFriendStore()

const { spaceUserInfo, userInfo } = storeToRefs(userStore)
const { friendList } = storeToRefs(friendStore)

const tabList = reactive<any[]>([
  { id: 1, name: '投稿', comName: markRaw(SpaceInvitation) },
])

const defaultStyle = {
  marginTop: '-15px',
  border: '4px solid #fff',
}

const currentTab = shallowRef(SpaceInvitation)
const isFriend = ref(false)
const isMyself = ref(false)
const currentUserFriends = reactive<IFriend[]>([])
// 是否是空间的主人
let isMaster = computed(() => spaceUserInfo.value.id === userInfo.value.id)

if (userInfo.value.id) {
  // 已登录的情况下, 保存一份当前用户的好友列表
  friendStore.getFriendListById(userInfo.value.id).then(() => {
    currentUserFriends.length = 0
    currentUserFriends.push(...friendList.value)
  })
}

watch(
  () => route.params,
  (newVal) => {
    const { id } = route.params
    // 获取空间的主人信息
    userStore.getUserInfoById(Number(newVal.id)).then(() => {
      // 判断用户是否是空间的主人
      isMyself.value = spaceUserInfo.value.id === userInfo.value.id
      computeSpaceBg.value = spaceUserInfo.value.space_bg
      const isBeenFriend = currentUserFriends.find(
        (item) => item.friendInfo.id === +id
      )
      if (isBeenFriend) {
        isFriend.value = true
      }
    })

    // if (userInfo.value.id) {
    //   tabList.push({ id: 2, name: '关注列表', comName: markRaw(SpaceFriend) })
    //   // 获取该用户关注的好友
    //   friendStore.getFriendListById(Number(newVal.id)).then(() => {
    //     // 判断该空间的主人跟用户是否是好友关系
    //     isFriend.value = currentUserFriends.some(
    //       (item) => item.friendInfo.id === spaceUserInfo.value.id
    //     )
    //   })
    // }
  },
  {
    deep: true,
    immediate: true,
  }
)

const changeTab = (tab: any) => {
  currentTab.value = tab.comName
}

const serverUrl = import.meta.env.VITE_LOCAL_SERVER
// 空间背景的控制
const currentSpaceBg = ref('#3b82f6')
const computeSpaceBg = computed({
  get: () => '#3b82f6',
  set: (val) => {
    if (val) {
      currentSpaceBg.value = `url(${serverUrl}${val})`
    }
  },
})

const updateBgOrAvatar = async (type: string, url: string) => {
  if (type === uploadType.bg) {
    await userStore.updateUserSpaceBg(userInfo.value.id, url)
  } else {
    // 头像更新
    await userStore.updateUserAvatar(userInfo.value.id, url)
  }
  await userStore.getUserInfoById(spaceUserInfo.value.id)
  computeSpaceBg.value = spaceUserInfo.value.space_bg
}

let userInfoDialogVisible = ref(false)
const userInfoFormRef = ref<FormInstance>()
const userInfoFormRules = reactive<FormRules>({
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const userInfoForm = reactive<IUserForm>({
  id: 0,
  name: '',
  password: '',
  desc: '',
})

const openUserInfoDialog = () => {
  userInfoDialogVisible.value = true
  userInfoForm.id = userInfo.value.id
  userInfoForm.name = userInfo.value.name
  userInfoForm.password = userInfo.value.password
  userInfoForm.desc = userInfo.value.description
}
// 编辑个人信息
const editUserInfo = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      await userStore.updatePersonalInfo(userInfoForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

// 添加好友
const handleAddFriend = () => {
  if (userInfo.value.id) {
    console.log()
  } else {
    ElMessage({
      type: 'warning',
      message: '请先登录再进行该操作',
    })
  }
}
</script>

<style scoped>
.tab_active {
  @apply p-b-1 border-b-3 border-blue text-black dark:text-white;
}
</style>
