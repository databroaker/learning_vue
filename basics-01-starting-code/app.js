const app = Vue.createApp({
  data: function () {
    return {
      courseGoalA: "Finish the course and learn vue!",
      courseGoalB: "master vue and build amazing apps",
      vueLink: "https://github.com/databroaker/learning_vue",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
