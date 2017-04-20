var editor = new Vue({
  el: '#editor',
  data: {
    input: '# 一行目はタイトルを入力'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})
