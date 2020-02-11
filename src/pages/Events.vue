<template>
  <Layout>
    <div class="events">
      <div v-for="eventObj in events" :key="eventObj.uid">
        <div :key="i" v-for="(event, i) in eventObj.data">
          <!-- {{ event }} -->
          <h2 :key="j" v-for="(title, j) in event.title.value">
            {{ title.text }}
          </h2>
          <img
            :width="event.image.value.main.dimensions.width"
            :src="event.image.value.main.url"
            :alt="event.image.value.main.alt"
          />
          <p
            :key="description.value"
            v-for="description in event.description.value"
          >
            {{ description.text }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      events: null
    };
  },
  mounted() {
    this.$axios
      .get(
        "https://my-next-js-blog.prismic.io/api/v1/documents/search?ref=XkLcThEAACIAKT8a#format=json"
      )
      .then(({ data }) => {
        this.events = data.results.filter(e => e.type === "event");
        console.log(data);
      });
  }
};
</script>

<style></style>
