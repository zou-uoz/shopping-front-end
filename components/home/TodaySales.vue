<template>
  <div class="todaySales">
    <h3>{{ title }}</h3>
    <ul>
      <li
        v-for="goodsDetail in todaySalesData"
        :key="goodsDetail._id"
        @click="$router.push('/detail/' + goodsDetail._id)"
      >
        <img
          :src="$imagesDir + goodsDetail.goodsImages[0]"
          alt="goodsDetail.goodsName"
        />
        <p class="goodsName">{{ goodsDetail.goodsName }}</p>
        <p class="footer">
          <span class="nowPrice">￥{{ goodsDetail.nowPrice }}</span
          ><span class="similar">看相似</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
//今日特卖做成一个组件
export default {
  name: "TodaySales",
  props: {
    todaySalesData: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.todaySales {
  padding: 6px;
  // text-align: center;
  // h3 {
  //   text-align: center;
  // }
  ul {
    display: inline-block;
    // text-align: left;
    width: auto;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    li {
      display: inline-block;
      margin: 5px;
      width: 160px;
      height: 250px;
      background-color: #fff;
      font-size: 14px;
      img {
        width: 100%;
        height: 170px;
      }
      .goodsName {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding: 0 5px;
        text-align: left;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        .nowPrice {
          margin: 5px 0 0 5px;
          color: red;
        }
        .similar {
          margin: 5px 5px 0 0;
          border-radius: 10px;
          padding: 0 10px;
          color: #ff1546;
          background-color: #ffe6eb;
        }
      }
    }
  }
}
</style>
