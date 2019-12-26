<template>
  <div class="article-image">

    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Article Image Page</b-navbar-brand>
    </b-navbar>

    <div class="view-wrapper">

      <cube-scroll
        ref="scroll"
        :data="imgs">
        <div>
          <b-card-group columns>
            <template v-for="(img, index) in imgs">
              <b-card
                :img-src="img"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-3"
                no-body="true"
                @click="handleImgsClick(index)">
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
    name: 'ArticleImage',
    data () {
      return {
        initialIndex: 0,
        imgs: [
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'
        ]
      }
    },
    mounted() {

    },
    methods: {
      handleImgsClick(index) {
        this.initialIndex = index
        const params = {
          $props: {
            imgs: this.imgs,
            initialIndex: 'initialIndex', // 响应式数据的key名
            loop: false
          },
          $events: {
            change: (i) => {
              // 必须更新 initialIndex
              this.initialIndex = i
            }
          }
        }
        this.$createImagePreview({ ...params }).show()
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .view-wrapper {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    margin: 0 15px;
  }
</style>
