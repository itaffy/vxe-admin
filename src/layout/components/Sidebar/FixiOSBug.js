/*
 * @Author: itaffy
 * @Date: 2022-07-08 22:27:39
 * @LastEditors: itaffy
 * @LastEditTime: 2022-07-09 01:37:45
 */
export default {
  computed: {
    device() {
      return this.$store.state.app.device
    },
  },
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    this.fixBugIniOS()
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = this.$refs.subMenu
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = e => {
          if (this.device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    },
  },
}
