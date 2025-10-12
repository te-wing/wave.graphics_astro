<template>
  <button v-show="showButton" @click="returnTop" class="back-to-top">
    Topへ戻る
  </button>
</template>

<script>
  export default {
    data() {
      return {
        showButton: false,
        scrollPosition: 0,
        showAtPixel: 100,
      };
    },
    methods: {
      returnTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      handleScroll() {
        this.scrollPosition = window.scrollY;
        this.showButton = this.scrollPosition > this.showAtPixel;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style scoped>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
</style>