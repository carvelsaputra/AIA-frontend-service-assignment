import { createLocalVue, mount, shallowMount } from "@vue/test-utils";

import PublicImageContainer from "../components/PublicImageContainer";
import vuex from "../plugins/vuex"

import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
describe("PublicImageContainer.vue", () => {
  let store;
  beforeEach(() => {
    store = vuex
  });
  it("should render Vue Instance", () => {
    const wrapper = shallowMount(PublicImageContainer, { store, localVue });
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("should render Vue Instance", () => {
      const wrapper = shallowMount(PublicImageContainer, { store, localVue });
      let data = store.getters.list
      expect(wrapper.isVueInstance()).toBe(true);
      console.log(data);
    });
});
