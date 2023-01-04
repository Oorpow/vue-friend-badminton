<template>
  <Header />
  <div class="news_page relative">
    <div class="w-7/10 mx-auto my-10 flex justify-around relative">
      <div flex flex-col overflow-hidden class="w-2/3">
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
        <NewsList :list="invitationList" :commentMap="commentMap" />
        <ElPagination
          background
          layout="prev, pager, next"
          hide-on-single-page
          flex
          justify-center
          :page-size="6"
          v-model:current-page="currentPage"
          :total="totalNum"
          @current-change="handleCurrentChange"
        />
      </div>
      <!-- 右侧推荐栏 -->
      <div class="w-1/4">
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
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Filter } from '@element-plus/icons-vue'
import { useInvitationStore } from '@/stores/invitation'
import { useCommentStore } from '@/stores/comment'
import { useBrandStore } from '@/stores/brand'
import { usePlayerStore } from '@/stores/player'
import type { CheckboxValueType } from 'element-plus'

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
