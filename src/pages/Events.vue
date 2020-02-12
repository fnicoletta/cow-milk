<template>
  <Layout>
    <div class="events">
      <h1 style="width: 100%;" class="text-center title-color">Events</h1>
      <div class="events__item" v-for="eventObj in events" :key="eventObj.uid" >
        <div class="events__item__content" :key="i" v-for="(event, i) in eventObj.data" :style="`background-image: url(${event.image.value.main.url})`">
          <!-- {{ event }} -->
          <div class="event__text">
          <h2>
            {{ event.title.value[0].text }}
            <span class="event__dates">{{dateFormat(event.start.value)}}<template v-if="event.end">-{{dateFormat(event.end.value)}}</template></span>
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
import moment from 'moment-js'
export default {
  data() {
    return {
      events: null
    };
  },
  methods: {
    dateFormat (date) {
     return moment(date).format('MM/DD/YYYY h:mm a').split("2020")[0]
    }
  },
  mounted() {
    this.$axios
      .get(
        "https://my-next-js-blog.prismic.io/api/v1/documents/search?ref=XkQJJhEAACUALoUa&orderings=%5Bmy.event.start%5D#format=json"
      )
      .then(({ data }) => {
        this.events = data.results.filter(e => e.type === "event");
        console.log(data);
      });
  }
};
</script>

<style></style>
