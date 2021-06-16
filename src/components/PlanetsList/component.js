// @vue/component
import axios from 'axios'
import { generateUrl } from '../../api/api'
import Table from './Table'
import Pagination from './Pagination'
import Loading from '../Loading'
import parseDate from '../../helpers/parseDate'

export default {
  name: 'PlanetsList',
  components: {
    Table,
    Pagination,
    Loading
  },
  data () {
    return {
      transitionEnd: false,
      loading: false,
      total: 0,
      planets: [],
      search: ''
    }
  },
  methods: {
    fetchData (page) {
      const url = generateUrl(page)
      this.loading = true
      axios.get(url)
        .then(response => response.data)
        .then(data => {
          data.results.forEach(obj => {
            obj.created = parseDate(obj.created)
          })
          this.planets = data.results
          this.total = data.count
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    filterData (table, query) {
      if (!query) return table
      const filteredTable = table.filter(elem => {
        // filter is checking each key's value and looking for query:
        return elem.name.toLowerCase().includes(query.toLowerCase()) ||
                elem.created.toLowerCase().includes(query.toLowerCase()) ||
                elem.climate.toLowerCase().includes(query.toLowerCase()) ||
                elem.gravity.toLowerCase().includes(query.toLowerCase()) ||
                elem.rotation_period.toLowerCase().includes(query.toLowerCase())
      })
      return filteredTable
    }
  },
  mounted () {
    const image = document.querySelector('.main_background')
    image.addEventListener('transitionend', () => {
      setTimeout(() => {
        this.transitionEnd = true
        this.fetchData(1)
      }, 600)
    })
  }
}
