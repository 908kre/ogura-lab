import { mapState, mapActions, mapGetters } from 'vuex';
import HeaderNav from '@/components/HeaderNav'
import Loading from '@/components/Loading'


export default {
  name: 'app',
  mounted: function () {
  },
  render: function render(h) {
    return (
      <div class="app">
        <div class="header">
          <HeaderNav />
        </div>
        <div class="main card">
          <router-view></router-view>
        </div>
        <div class="footer">
          footer here
        </div>
      </div>
    )
  }
};


