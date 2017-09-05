<template>
      <div class="subhead">
        <!-- swiper -->
        <swiper :options="swiperOption">
        <swiper-slide data-hash="story/1" >
         <div class="story">
             <h1>Story 1 headline</h1>
             <h3>Some kind of summary text...</h3>
             <button class="view-story" type="button" name="button">View Story 1</button>
         </div>
        <img src="https://lorempixel.com/375/667/nature/1" alt="">
       </swiper-slide>
       <swiper-slide class="swiper-slide" data-hash="story/2" >
         <div class="story">
             <h1>Story 2 headline</h1>
             <button class="view-story" type="button" name="button">View Story 2</button>
         </div>
         <img src="https://lorempixel.com/375/667/nature/2" alt="">
       </swiper-slide>
       <swiper-slide class="swiper-slide" data-hash="story/3" >
         <div class="story">
             <h1>Story 3 headline</h1>
             <button class="view-story" type="button" name="button">View Story 3</button>
         </div>
         <img src="https://lorempixel.com/375/667/nature/3" alt="">
       </swiper-slide>
       <swiper-slide class="swiper-slide" data-hash="story4" >
         <div class="story">
             <h1>Story 4 headline</h1>
             <button class="view-story" type="button" name="button">View Story 4</button>
         </div>
         <img src="https://lorempixel.com/375/667/nature/4" alt="">
       </swiper-slide>
       <swiper-slide class="swiper-slide" data-hash="story5" >
         <div class="story">
             <h1>Story 5 headline</h1>
             <input type="text" name="" value="">
             <button type="button" name="button">subscribe</button>
         </div>
         <img src="https://lorempixel.com/375/667/nature/5" alt="">
       </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        swiperOption: {
          paginationType: 'progress',
          paginationClickable: false,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 30,
          // hashnav: true,
          hashnavWatchState: true,
          keyboardControl: true
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-slide {
    width: 80%;
  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  }
</style>
