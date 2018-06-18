<template>
  <div>
    <ff-canvas
      id="chart"
      canvas-id="column"
      opts="opts"/>
  </div>
</template>

<script>
import F2 from "../../../static/f2-canvas/lib/f2";
let chart = null;

function initChart(canvas, width, height) {
  // 使用 F2 绘制图表
  const data = [
    { year: "1951 年", sales: 38 },
    { year: "1952 年", sales: 52 },
    { year: "1956 年", sales: 61 },
    { year: "1957 年", sales: 145 },
    { year: "1958 年", sales: 48 },
    { year: "1959 年", sales: 38 },
    { year: "1960 年", sales: 38 },
    { year: "1962 年", sales: 38 }
  ];
  chart = new F2.Chart({
    el: column,
    width,
    height
  });

  chart.source(data, {
    sales: {
      tickCount: 5
    }
  });
  chart.tooltip({
    showItemMarker: false,
    onShow(ev) {
      const { items } = ev;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = "¥ " + items[0].value;
    }
  });
  chart.interval().position("year*sales");
  chart.render();
  return chart;
}

export default {
  data() {
    return {
      motto: "Hello World",
      opts: {
        onInit: initChart
      }
    };
  },

  components: {},

  methods: {},

  created() {
    console.log('F2 obj=',F2);
  }
};
</script>

<style scoped>
.page {
  height: 100%;
}
</style>
