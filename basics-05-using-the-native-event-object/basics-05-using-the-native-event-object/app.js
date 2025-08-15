const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
    name(value) {
      this.fullName = value + " " + "Smith";
    },
  },
  computed: {
    // fullName() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Smith";
    // },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {},
  },
});

app.mount("#events");
