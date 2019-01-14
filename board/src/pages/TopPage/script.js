import Swiper from '@/components/Swiper'
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'TracePage',
  computed: {
    ...mapGetters('trace', [
      'charts',
    ]),
  },
  render: function render(h) {
    return (
      <div>
        <Swiper>
          {
            [
              <div slot='default'>abc</div>,
              <div slot='default'>bbc</div>,
              <div slot='default'>bbc</div>,
              <div slot='default'>bbc</div>,
            ]
          }
        </Swiper>
      </div>
    )
  }
};
