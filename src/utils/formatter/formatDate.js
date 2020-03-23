import moment from 'moment'

const formatDate = ({ period }) => moment(new Date(period)).format('DD/MM/YYYY')

export default formatDate
