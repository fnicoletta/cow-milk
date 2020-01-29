<template>
  <div class="home container">
    <h2 class="text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus
      velit animi, quo vel, voluptatum quis dolore in eum unde soluta sed
      similique voluptas tempore voluptates accusamus magni fugiat ab vero non
      expedita. Voluptates vel iusto mollitia ullam id temporibus blanditiis
      modi fuga, doloremque itaque voluptate incidunt quasi facilis omnis
      dolorem quos nostrum, hic dolor ea quia similique fugiat eos.
    </h2>

    <div v-if="featuredProducts" class="home__featured-products text-center">
        <div :key="index" v-for="(product, index) in featuredProducts" class="home__featured-products-item">
            <img :src="product.image" :alt="product.name">
            <span class="text-gray">{{ product.name }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            featuredProducts: []
        }
    },
    mounted () {
       const res = this.$edgewood.get('/products').then(({data}) => {
           this.featuredProducts = data.data
       console.log(this.featuredProducts)
       })
    }
};
</script>

<style lang="scss">

</style>
