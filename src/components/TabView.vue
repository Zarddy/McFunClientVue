<template>
  <div class="tab-view">

    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">McFun</b-navbar-brand>
    </b-navbar>

    <cube-tab-bar v-model="selectedLabel" show-slider inline>
      <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
      </cube-tab>
    </cube-tab-bar>

    <div class="view-wrapper">

      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">

          <div class="view-wrapper">
            <cube-scroll
              ref="scroll"
              :data="item.heroes"
              :options="options"
              @pulling-down="onPullingDown"
              @pulling-up="onPullingUp">
              <b-card-group columns>
                <template v-for="(data, index) in item.heroes">
                  <b-card
                    :key="index"
                    :title="data"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-3">
                    <b-button block variant="primary" @click="handleClick(data, index)">点击查看</b-button>
                  </b-card>
                </template>
              </b-card-group>
            </cube-scroll>
          </div>

        </cube-tab-panel>
      </cube-tab-panels>

    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectedLabel: '天辉',
        tabs: [{
          label: '天辉',
          icon: 'cubeic-picture',
          heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士',
            '敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
        }, {
          label: '夜魇',
          icon: 'cubeic-camera',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波',
            '血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }],

        options: {
          scrollbar: {
            fade: true
          },
          pullDownRefresh: {
            threshold: 90,
            stop: 50,
            txt: '刷新成功'
          },
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: '加载更多',
              noMore: '没有更多的比赛啦'
            }
          },
          click: false
        }
      }
    },
    created () {
      this.onPullingDown()
    },
    methods: {
      onFetch (refresh) {
        // let api_url = 'http://mcapi.zarddy.club/article/mongo_list'
        // let type = 3
        // let page = 2
        return new Promise((resolve) => {
          // 模拟请求 50 条数据，因为 size 设置为 50
          setTimeout(() => {
            if (refresh) {
              this.items = []
            }
            for (let i = 0; i < 5; i++) {
              this.items.push({
                id: i,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
                title: '标题行',
                time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
              })
            }
            resolve(this.items)
          }, 1000)
        })
      },

      handleClick (data, index) {
        if (index % 2 === 0) {
          this.$router.push({name: 'ArticleVideo', params: {article: data}})
        } else {
          this.$router.push({name: 'ArticleImage', params: {article: data}})
        }
      },
      // 下拉刷新
      onPullingDown () {
        this.onFetch(true)
      },
      // 上拉加载更多
      onPullingUp () {
        this.onFetch(false)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .view-wrapper {
    position: fixed;
    top: 100px;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: auto;
  }
</style>
