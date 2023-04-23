Vue.component('my-component', {
    template: `
      <div>
        <h1>Daftar Film</h1>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <div v-for="result in results" :key="result.show.id">
            <h2>{{ result.show.name }}</h2>
            <img :src="result.show.image.medium" :alt="result.show.name" />
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        results: [],
        isLoading: true
      };
    },
    mounted() {
      axios.get('http://api.tvmaze.com/search/shows?q=girls')
        .then(response => {
          this.results = response.data;
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
        });
    }
  });
  
  new Vue({
    el: '#app'
  });
  