const app = Vue.createApp({
  data() {
    return {
      counter: 3,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter += num;
    },
    minus(num) {
      this.counter -= num;
    },
    nameChange(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert("hi!");
    },
  },
});

app.mount("#events");
