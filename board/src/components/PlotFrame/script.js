export default {
  name: 'PlotFrame',
  props:{
    title: String,
  },
  render: function render(h) {
    return (
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {this.title}
          </p>
          <div href="#" class="card-header-icon" vOn:click={() => this.$emit('close')}>
            <span class="icon">
              <i class="fas fa-times"></i>
            </span>
          </div>
        </header>
        <div class="card-content">
          {this.$slots.default}
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }
};