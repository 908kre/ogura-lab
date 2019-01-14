import TraceCard from '@/components/TraceCard'
import { mapState, mapActions, mapGetters } from 'vuex';
import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper';

export default {
  name: 'Swiper',
  methods:{
    handleNext(){
      this.swiper.slideNext();
    },
    handlePrev(){
      this.swiper.slidePrev();
    }
  },
  mounted() {
    this.swiper = new Swiper ('.swiper-container', {
      centeredSlides:true,
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      paginationType:'bullets',
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    }); 
    console.log(this);
  },
  render: function render(h) {
    return (
      <div class="swiper-container" ref='swiper'>
        <div class="swiper-wrapper">
          {this.$slots.default.map(elm => (<div class="swiper-slide">{elm}</div>))}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev" vOn:click={this.handlePrev}></div>
        <div class="swiper-button-next" vOn:click={this.handleNext}></div>
      </div>
    )
  }
}
