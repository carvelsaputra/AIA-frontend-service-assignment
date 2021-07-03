<template>
  <v-app>
    <v-card flat height="200px" tile>
      <v-toolbar color="#d31145">
        <v-toolbar-title
          ><h3 class="white--text">AIA Assignment</h3></v-toolbar-title
        >
      </v-toolbar>
    </v-card>
    <v-main>
      <v-container>
        <public-image-container />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PublicImageContainer from "./components/PublicImageContainer.vue";
export default {
  name: "App",
  components: {
    PublicImageContainer,
  },

  mounted() {
    console.log(process.env);
  },
};
</script>

