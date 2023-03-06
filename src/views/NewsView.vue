<template>
  <Header />
  <div class="min-h-60 relative">
    <div class="sm:w-full lg:w-7/10 mx-auto my-10 flex justify-around relative">
      <div class="w-9/10 lg:w-2/3 flex flex-col overflow-hidden">
        <div>
          <ElPopover placement="bottom" trigger="click" :width="120">
            <template #reference>
              <ElIcon :size="20" cursor-pointer>
                <Filter />
              </ElIcon>
            </template>
            <ElRadioGroup v-model="checkedList" @change="handleCheckedChange">
              <ElRadio
                v-for="item in filterList"
                :key="item.id"
                :label="item.id"
              >
                {{ item.name }}
              </ElRadio>
            </ElRadioGroup>
          </ElPopover>
        </div>
        <!-- tabs -->
        <Suspense>
          <NewsList :list="invitationList" :commentMap="commentMap" />
          <template #fallback>
            <ElSkeleton :rows="4" animated style="margin: 50px 0"></ElSkeleton>
          </template>
        </Suspense>
        <ElPagination
          background
          layout="prev, pager, next"
          hide-on-single-page
          flex
          justify-center
          :page-size="6"
          :total="totalNum"
          v-model:current-page="currentPage"
          @current-change="handleCurrentChange"
        />
      </div>
      <!-- 右侧推荐栏 -->
      <div class="hidden lg:block w-1/4">
        <div sticky top-5>
          <RecommendBox :list="brandList" :isTag="false">
            <template #title>
              <span text-sm text-gray-4>品牌推荐</span>
            </template>
          </RecommendBox>
          <RecommendBox :list="playerList" :isTag="false">
            <template #title>
              <span text-sm text-gray-4>人气球员</span>
            </template>
          </RecommendBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import RecommendBox from '@/components/News/RecommendBox/RecommendBox.vue'

import { defineAsyncComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Filter } from '@element-plus/icons-vue'
import { useInvitationStore } from '@/stores/invitation'
import { useCommentStore } from '@/stores/comment'
import { useBrandStore } from '@/stores/brand'
import { usePlayerStore } from '@/stores/player'

const NewsList = defineAsyncComponent(
  () => import('@/components/News/NewsList/NewsList.vue')
)

enum Tag {
  'All',
  'Match',
  'Equipment',
}

const brandStore = useBrandStore()
const playerStore = usePlayerStore()
const invitationStore = useInvitationStore()
const commentStore = useCommentStore()

const { invitationList, totalNum } = storeToRefs(invitationStore)
const { commentMap } = storeToRefs(commentStore)
const { brandList } = storeToRefs(brandStore)
const { playerList } = storeToRefs(playerStore)

brandStore.getBrandList()
playerStore.getPlayerList()
invitationStore.getInvitationList().then(() => {
  commentStore.getAllCommentByOneSelf(invitationList.value)
})

let currentTag = ref<number>(Tag.All)
let currentPage = ref(1)

// 改变页码
const handleCurrentChange = (pagenum: number, tagId?: number) => {
  if (currentTag.value === Tag.All) {
    invitationStore.getInvitationList(pagenum)
  } else {
    invitationStore.getInvitationByTagId(tagId as number, pagenum)
  }
}

// 选中的筛选条件
const checkedList = ref(0)
const filterList = [
  {
    id: 0,
    name: '全部',
  },
  {
    id: 1,
    name: '赛事',
  },
  {
    id: 2,
    name: '装备',
  },
]

// 处理条件筛选
const handleCheckedChange = (val: string | number | boolean) => {
  currentTag.value = val as number
  handleCurrentChange(currentPage.value, val as number)
}
</script>

<style scoped></style>
