import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/router';
import '@/styles/theme.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: function render(h) {
    return ( 
      <App/>
    )
  }
});

