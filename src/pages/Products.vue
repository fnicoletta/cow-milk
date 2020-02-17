<template>
  <Layout>
     <transition name="fade">
        <ProductForm v-if="$store.state.products.formProduct" />
      </transition>
       <transition name="fade">
        <DeleteProduct v-if="$store.state.products.deleting" />
      </transition>
     
    <div class="products main-wrapper">
      <h1 class="text-center title-color">Products</h1>
      <template v-if="products && !loading">
        <form @submit.prevent="getResults">
          <input placeholder="Search Products..." v-model="term" type="text" class="default-input" />
          <div class="text-center" v-if="searched">
            Term: {{ tempTerm }}<br>
            <button
              @click="searched = false, term = '', $store.commit('products/setProducts', $store.state.products.original)"
              type="button"
              class="button button--secondary"
            >
              Reset
            </button>
          </div>
        </form>
        <div class="text-center" v-if="searched && !products.data.length">
        No results found.
      </div>
        <ProductsList ref="prods" :products="products" />
        <pagination
          :data="products"
          @pagination-change-page="getResults"
        ></pagination>
      </template>
      
      <div v-if="loading" class="skeleton"></div>
      <Loading v-if="loading" />
    </div>
  </Layout>
</template>

<script>
import ProductsList from "../components/Products/ProductsList";
import Loading from "../components/Misc/Loading";
import ProductForm from '@/components/Products/ProductForm'
import DeleteProduct from '@/components/Products/DeleteProduct'

export default {
  components: {
    ProductsList,
    Loading,
    ProductForm,
    DeleteProduct
  },
  data() {
    return {
      loading: false,
      term: "",
      searched: false,
      tempTerm: ''
    };
  },
  methods: {
    getProducts() {
      if (!this.products) {
        this.$store.dispatch("products/getAllProducts", this.term);
      }
    },
    getResults(page = 1) {
      if (this.term) {
        this.searched = true;
        this.tempTerm = this.term
      } else {
        this.searched = false;
        this.$store.commit('products/setProducts', this.$store.state.products.original)
      }
      this.loading = true;

      this.$edgewood
        .get(`/products?term=${this.term}&page=` + page)
        .then(response => {
          this.$store.commit("products/setProducts", response.data);
          this.loading = false;
          // this.$router.push("/products#products-list")
          this.$nextTick(() => {
            window.scroll({
              top: 400,
              left: 0,
              behavior: "smooth"
            });
          });
        });
    }
  },
  computed: {
    products() {
      return this.$store.state.products.all;
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style lang="scss">
.skeleton {
  background-color: rgb(219, 219, 219);
  height: 600px;
}
</style>
