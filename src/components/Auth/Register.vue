<template>
  <WhiteModal title="Register" :closeModal="closeModal">
      Register
  </WhiteModal>
</template>

<script>
import WhiteModal from "@/components/Common/WhiteModal";
import cookiesMixin from "../../mixins/cookiesMixin";

export default {
    props: {
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
    mixins: [cookiesMixin],

    components: {
        WhiteModal
    }
}
</script>

<style>

</style>