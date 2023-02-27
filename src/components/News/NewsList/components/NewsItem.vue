<template>
  <div
    my-10
    p-3
    border-1
    border-gray-2
    bg-white
    rounded-lg
    :style="styleConfig"
    v-for="(item, index) in list"
    :key="item.invitation_id"
  >
    <div :data-index="index">
      <div flex items-center justify-between>
        <div>
          <ElAvatar size="small">{{ item.userInfo.name.slice(0, 1) }}</ElAvatar>
          <span ml-2 text-sm>{{ item.userInfo.name }}</span>
        </div>
        <div>
          <span
            text-sm
            px-2
            py-1
            ml-2
            first:ml-0
            bg-gray-2
            rounded-2xl
            v-for="tag in item.tagList"
            :key="tag.id"
            >{{ tag.name }}</span
          >
        </div>
      </div>
      <div>
        <div cursor-pointer @click="navToNewsDetail(item.invitation_id)">
          <h3 font-normal truncate>
            {{ item.title }}
          </h3>
          <div class="article_content">
            <div w-full h-20>
              <ElImage
                :src="serverUrl + item.img"
                class="w-full h-full"
                fit="cover"
              />
            </div>
            <div v-html="item.content"></div>
          </div>
        </div>

        <!-- 帖子数据 -->
        <div flex mt-3>
          <div flex mx-3>
            <ElTooltip
              :content="
                isStarred(userInfo.id, item.invitation_id) ? '取消点赞' : '点赞'
              "
              placement="top"
            >
              <ElIcon
                :size="18"
                @click="handleStar(item.invitation_id)"
                class="cursor-pointer"
                :color="
                  isStarred(userInfo.id, item.invitation_id)
                    ? '#f6bf48'
                    : '#9ca3af'
                "
              >
                <StarFilled
                  v-if="
                    userInfo.id && isStarred(userInfo.id, item.invitation_id)
                  "
                />
                <Star v-else />
              </ElIcon>
            </ElTooltip>
            <span ml-1 text-sm text-gray-4>{{
              item.stars !== 0 ? item.stars : ''
            }}</span>
          </div>
          <div flex>
            <ElTooltip content="评论" placement="top">
              <ElIcon :size="18" class="cursor-pointer" color="#9ca3af">
                <ChatLineSquare />
              </ElIcon>
            </ElTooltip>
            <template v-for="(v, k) in commentMap" :key="k">
              <span
                ml-1
                text-sm
                text-gray-4
                v-show="v[0] === item.invitation_id"
                >{{ v[1] === 0 ? '' : v[1] }}</span
              ></template
            >
          </div>
          <div flex ml-3>
            <ElIcon :size="18" color="#9ca3af">
              <Timer />
            </ElIcon>
            <span ml-1 text-sm text-gray-4>{{
              $formatTime.format(item.createAt)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'
import { storeToRefs } from 'pinia'
import { ElNotification } from 'element-plus'
import {
  Star,
  StarFilled,
  ChatLineSquare,
  Mouse,
  Timer,
} from '@element-plus/icons-vue'
import { useInvitationStore } from '@/stores/invitation'
import type { InvitationInfo } from '@/request/api/invitation/types'
import { useUserStore } from '@/stores/user'
import { useRoute, useRouter } from 'vue-router'

type Props = {
  list: InvitationInfo[]
  commentMap: Map<number, number>
  styleConfig?: StyleValue
}
const props = defineProps<Props>()

const serverUrl = import.meta.env.VITE_LOCAL_SERVER

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const invitationStore = useInvitationStore()
const { userInfo } = storeToRefs(userStore)
const { starredList } = storeToRefs(invitationStore)

if (userInfo.value.id) {
  invitationStore.findAllStarredInvitation(userInfo.value.id)
}

const isStarred = (userId: number, invitationId: number) => {
  return starredList.value.some(
    (item) => item.user_id === userId && item.invitation_id === invitationId
  )
}

// 点赞/取消点赞
const handleStar = async (invitationId: number) => {
  if (!userInfo.value.id) {
    ElNotification({
      title: '请先登录再进行star',
      type: 'info',
    })
  } else {
    const starred = isStarred(userInfo.value.id, invitationId)
    await invitationStore.starOrUnstarInvitationById(
      userInfo.value.id,
      invitationId,
      starred ? 0 : 1
    )
    if (route.path.startsWith('/news')) {
      await invitationStore.getInvitationList()
    } else {
      await invitationStore.getUserPostedInvitation(userInfo.value.id)
    }
    await invitationStore.findAllStarredInvitation(userInfo.value.id)
  }
}

// 导航至详情页
const navToNewsDetail = (id: number) => {
  router.push(`/news_det/${id}`)
}
</script>

<style scoped>
.news_img {
  @apply w-full h-full hover:scale-105 transition cursor-pointer;
}
.desc p {
  @apply w-8/10 h-4 leading-5 line-clamp-2 text-ellipsis break-words;
}
.article_content {
  max-height: 230px;
  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
  mask-image: linear-gradient(180deg, #000 60%, transparent);
  overflow: hidden;
  padding: 5px 8px 10px;
}
</style>
