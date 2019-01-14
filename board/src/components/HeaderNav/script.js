import Banner from '@/components/Banner'

export default {
  name: 'HeaderNav',
  data(){
    return {
      tabStyle: {
        'navbar-item': true,
        'is-tab':true,
      },
    }
  },
  render: function render(h) {
    return (
      <div>
        <Banner/>
        <nav class="navbar">
          <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <hr/>
          <div class="navbar-menu is-active">
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  研究室について
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    コンセプト
                  </a>
                  <a class="navbar-item">
                    研究室を希望される方へ 
                  </a>
                  <a class="navbar-item">
                    研究設備
                  </a>
                </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  スタッフ 
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    指導教員
                  </a>
                  <a class="navbar-item">
                    生徒
                  </a>
                </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  研究 
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    研究テーマ
                  </a>
                  <a class="navbar-item">
                    共同研究
                  </a>
                </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  業績
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    国際発表
                  </a>
                  <a class="navbar-item">
                    国内発表
                  </a>
                  <a class="navbar-item">
                    学術論文
                  </a>
                  <a class="navbar-item">
                    著作
                  </a>
                </div>
              </div>
              <a class="navbar-item">
                アクセス
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
};
