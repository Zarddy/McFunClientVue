<template>
  <div class="article-video">

    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#" @click="back">Article Video Page</b-navbar-brand>
    </b-navbar>

    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions">
    </video-player>

    <div class="button-tools">
      <label class="title">标题内容标题内容标题内容标题内容标题内容标题内容标题内容</label>

      <div>
        <b-button variant="success" @click="copyToClipboard" class="mb-2">Http下载链接</b-button>
        <b-button variant="success" @click="copyToClipboard" class="mb-2">迅雷下载链接</b-button>
      </div>
    </div>

  </div>
</template>

<script>
  import {handleClipboard} from '../common/Utils'
  export default {
    name: 'ArticleVideo',
    data () {
      return {
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: true, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm' // url地址
          }],
          poster: '/static/images/logo.png', // 你的封面地址
          // width: document.documentElement.clientWidth, // 播放器宽度
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true // 全屏按钮
          }
        }
      }
    },
    mounted () {

    },
    methods: {
      copyToClipboard () {
        handleClipboard('handleClipboard . . . text', event,
          () => {
            this.$bvToast.toast(' ', {
              title: '已经复制在剪贴版',
              variant: 'primary',
              autoHideDelay: 800
            })
          },
          () => {
            this.$bvToast.toast(' ', {
              title: '复制失败！',
              autoHideDelay: 800
            })
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .article-video {
    text-align: left;
  }

  .video-js .vjs-icon-placeholder {
    width: 100%;
    height: 100%;
    display: block;
  }

  .title {
    margin: 0 0 10px 0;
    line-height: 1.4rem;
  }

  .button-tools {
    margin: 15px;
  }
</style>
