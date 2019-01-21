import Swiper from '@/components/Swiper'
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'TopPage',
  computed: {
    ...mapGetters('trace', [
      'charts',
    ]),
  },
  components: { Swiper }
}
