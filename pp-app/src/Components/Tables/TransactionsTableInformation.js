import { SelectColumnFilter} from './Table'  // new
const data = [
    {
      id: "1",
      userId: "4",
      monto: "3455",
      modo: "oneTimeOnly",
      fechaPago: '2/11/2022',
    },
    {
      id: "2",
      userId: "5",
      monto: "10982",
      modo: "recurrent",
      fechaPago: '12/8/2022',
    },
    {
      id: "3",
      userId: "6",
      monto: "9897",
      modo: "oneTimeOnly",
      fechaPago: '23/10/2022',
    },{
      id: "4",
      userId: "7",
      monto: "4554",
      modo: "oneTimeOnly",
      fechaPago: '14/10/2022',
    },{
      id: "5",
      userId: "67",
      monto: "9866",
      modo: "recurrent",
      fechaPago: '2/12/2022',
    },
    {
      id: "6",
      userId: "8",
      monto: "432",
      modo: "oneTimeOnly",
      fechaPago: '10/10/2022',
    },
]

const columns =[
  {
    Header: "id",
    accessor: 'id',
    Filter: SelectColumnFilter,  // new
    filter: 'includes',
  },
  {
    Header: "ID de Usuario",
    accessor: 'userId',
    Filter: SelectColumnFilter,  // new
    filter: 'includes',
  },
  {
    Header: "Monto",
    accessor: 'monto',
    Filter: SelectColumnFilter,  // new
    filter: 'includes',
  },
  {
    Header: "Modo",
    accessor: 'modo',
    Filter: SelectColumnFilter,  // new
    filter: 'includes',
  },
  {
    Header: "Fecha de Pago",
    accessor: "fechaPago",
    Filter: SelectColumnFilter,  // new
    filter: 'includes',
  },
]

const TransactionTableInformation = {
    data,
    columns
  }
  export default TransactionTableInformation;