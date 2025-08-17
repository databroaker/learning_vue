const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Manuel Lorenz",
          phone: "123-456-7890",
          email: "manual@manuel.com",
        },
        {
          id: "julie",
          name: "Julie Smith",
          phone: "153-516-9011",
          email: "julie@j.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide details' : 'Show details'}}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manual",
        name: "Manuel Lorenz",
        phone: "123-456-7890",
        email: "manual@manuel.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
