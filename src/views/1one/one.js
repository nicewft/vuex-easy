import { mapGetters } from "vuex";
import JAndroid from "@/common/components/android.vue";
export default {
  components: { JAndroid },
  data() {
    return {
      colorObj: {
        color: '',
        eyesColor:''
      }
    };
  },
  computed: {
    ...mapGetters(['getTheme'])
  },
  created() {
    this.colorObj.color = this.getTheme;
    this.colorObj.eyesColor = this.getRandomColor()
    setInterval(() => {
        this.colorObj.eyesColor = this.getRandomColor()
    },10)
  },
  methods: {
    // 给王建换肤
    handleChangeColor() {
      this.$store.dispatch('switch_theme', this.colorObj.color)
    },
    // 生成随机颜色
    getRandomColor: (function f(){
        return  '#' +
        (function f(color){
        return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
            && (color.length == 6) ?  color : f(color);
        })('');
    })
  }
};
