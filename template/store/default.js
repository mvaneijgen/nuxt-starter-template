export const state = () => ({
  title: "",
  tagline: "",
  url: "",
  api: "",
  description: "",
});

export const getters = {
  getDefaults: state => key => {
    return state[key];
  },
};
