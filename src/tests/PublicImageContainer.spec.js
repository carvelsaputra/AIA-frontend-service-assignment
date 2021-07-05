// Libraries

// Components
import PublicImageContainer from "../components/PublicImageContainer";

//vuex
// import publicImageModule from "../store/publicImage";

import 'jest-canvas-mock';
import plugins from "../plugins/index";

// Utilities
const { createLocalVue, mount } = require("@vue/test-utils");

describe("PublicImageContainer.vue", () => {
  let localVue;
  let wrapper;
  beforeEach(() => {
    localVue = createLocalVue(); // because of vuetify, we should use a localVue instance

    wrapper = mount(PublicImageContainer, {
      localVue,
      ...plugins,
    });
  });


  it("should render the Container", () => {
    // to make sure we are free from vuetify components in our tests, use data-testid attributes to search for elements
    expect(true);
  });
});
