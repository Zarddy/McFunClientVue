<template>
  <div class="article-image">

    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Article Image Page</b-navbar-brand>
    </b-navbar>

    <div class="view-wrapper">
      <div>
        <b-card-group columns>
          <template v-for="(img, index) in images">
            <b-card
              :key="index"
              :img-src="img"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-3"
              no-body
              @click="handleImgsClick(index)">
            </b-card>
          </template>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticleImage',
    data () {
      return {
        initialIndex: 0,
        images: [
          '/static/images/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
          '/static/images/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
          '/static/images/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'
        ],
        options: {
          scrollbar: {
            fade: true
          },
          pullUpLoad: {
          },
          click: false
        }
      }
    },
    mounted () {
      var data = this.$route.params.article
      if (data) {
        console.log('articleImage. . mounted . data  id: ' + data.id)
      }
    },
    methods: {
      handleImgsClick (index) {
        this.initialIndex = index
        const params = {
          $props: {
            imgs: this.images,
            initialIndex: 'initialIndex', // 响应式数据的key名
            loop: true
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .view-wrapper {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    padding: 0 15px;
    overflow: auto;
  }
</style>
