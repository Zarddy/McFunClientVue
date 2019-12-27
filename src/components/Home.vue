<template>
  <div class="home">
    <div class="view-wrapper">

      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">McFun</b-navbar-brand>
      </b-navbar>

      <cube-scroll
        ref="scroll"
        :data="items"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp">
        <div>
          <b-card-group columns>
            <template v-for="(data, index) in items">
              <b-card
                :key="index"
                :title="data.title"
                :img-src="data.avatar"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-3">
                <b-button block variant="primary" @click="handleClick(data, index)">点击查看</b-button>
              </b-card>
            </template>
          </b-card-group>
        </div>
      </cube-scroll>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        size: 50,
        offset: 100,
        items: [],
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
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .view-wrapper {
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .item {
    width: 40%;
  }
</style>
