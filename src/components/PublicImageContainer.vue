<template>
  <v-container fluid data-testid="container">
    <v-data-iterator
      :loading="fetching"
      :items="list"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="#d31145" class="mb-1" style="border-radius:10px">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Find Amazing Inspiration Here"
          ></v-text-field>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-3"
                color="warning"
                v-on="on"
                @click="find"
                v-bind="attrs"
                fab
                ><v-icon>mdi-magnify</v-icon></v-btn
              >
            </template>
            <span>Click this button to find</span>
          </v-tooltip>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.author_id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                height="100%"
                :elevation="hover ? 6 : 3"
                style="border-radius:10px"
              >
                <v-img
                  height="250px"
                  v-bind:src="'data:image/jpeg;base64,' + item.media.photo"
                />
                <v-card-title class="subheading font-weight-bold">
                  {{ item.title || "No Title" }}
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text>
                  <div class="my-4 text-subtitle-1">
                    {{ item.link }}
                  </div>

                  <div v-html="item.description"></div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="#d31145"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn fab dark color="#d31145" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="#d31145" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
    };
  },
  mounted() {
    this.fetch();
  },
  computed: {
    ...mapGetters({
      fetching: "publicImage/fetching",
      list: "publicImage/list",
    }),
    numberOfPages() {
      return Math.ceil(this.list.length / this.itemsPerPage);
    },
  },
  methods: {
    find() {
      this.fetch({ params: { tags: this.search } });
    },
    ...mapActions({
      fetch: "publicImage/fetch",
    }),
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
