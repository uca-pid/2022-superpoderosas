import { StatusPill } from './Table'
import { SelectModoFilter, SelectStateFilter, NumberSearchFilter, DateRangeColumnFilter, dateBetweenFilterFn, AmountRangeColumnFilter, amountBetweenFilterFn } from './Filters'

const columns =[
  {
    Header: "id",
    accessor: 'id',
    Filter: NumberSearchFilter,
    filter: "rankedMatchSorter",
  },
  {
    Header: "ID de Usuario",
    accessor: 'userId',
    Filter: NumberSearchFilter,
    filter: "rankedMatchSorter",
    Link: "openSideBarWithUser",
  },
  {
    Header: "Monto",
    accessor: 'amount',
    Filter: AmountRangeColumnFilter,
    filter: amountBetweenFilterFn,
  },
  {
    Header: "Modo",
    accessor: 'type',
    Filter: SelectModoFilter,
    filter: 'includes',
  },
  {
    Header: "Fecha de Pago",
    accessor: "paymentDate",
    Filter: DateRangeColumnFilter,
    filter: dateBetweenFilterFn
  },{
    Header: "Estado",
    accessor: "transactionState.state",
    Cell: StatusPill,
    Filter: SelectStateFilter,  // new
    filter: 'includes',
  }
]

const TransactionTableInformation = {
    columns
  }
  export default TransactionTableInformation;