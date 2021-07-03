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
        <v-dialog v-model="dialog"  max-width="1000">
          <v-card>
            <v-card-title class="text-h5 white--text pink darken-1">
              Dear Reviewer
            </v-card-title>

            <v-card-text>
              <div class="d-flex flex-row">
                <div class="grey--text title mx-auto mt-3" align="left">
                  Hello There <v-icon>mdi-emoticon-happy-outline</v-icon> how
                  are you? <br />hope all of you still healthy in this pandemic.
                  <br />Thanks for reviewing my assignment, hope you guys like
                  it. have a nice day.
                  <span> </span>
                </div>
                <div>
                  <lottie-player
                    :src="require('./assets/hello.json')"
                    :options="animationData"
                  ></lottie-player>
                </div>
              </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="error"
                    fab
                    @click="dialog = false"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </template>
                <span>Hit this Button to Spread the Love</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <public-image-container />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PublicImageContainer from "./components/PublicImageContainer.vue";
export default {
  name: "App",
  data() {
    return {
      dialog: true,
      show: false,
      animationData: {
        autoplay: true,
        loop: true,
      },
    };
  },
  components: {
    PublicImageContainer,
  },
};
</script>
