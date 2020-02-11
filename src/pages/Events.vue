<template>
  <Layout>
    <div class="events">
      <div class="events__item" v-for="eventObj in events" :key="eventObj.uid" >
        <div class="events__item__content" :key="i" v-for="(event, i) in eventObj.data" :style="`background-image: url(${event.image.value.main.url})`">
          <!-- {{ event }} -->
          <div class="event__text">

          <h2 :key="j" v-for="(title, j) in event.title.value">
            {{ title.text }}
          </h2>
          <p
            :key="description.value"
            v-for="description in event.description.value"
          >
            {{ description.text }}
          </p>
          </div>
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
