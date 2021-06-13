// @vue/component
import axios from 'axios'
import { generateUrl } from '../../api/api'

export default {
  name: 'PlanetsList',
  data () {
    return {
      loading: false,
      total: 60,
      planets: []
    }
  },
  methods: {
    fetchData (page) {
      console.log(page)
      const url = generateUrl(page)
      this.loading = true
      axios.get(url)
        .then(response => response.data)
        .then(data => {
          this.planets = data.results
          this.total = data.count
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  created () {
    this.fetchData(1)
  }
}
