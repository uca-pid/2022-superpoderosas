
const adminNavigation =[
  { name: 'Ajustes', path: "/profile"},
  { name: 'Reporte Transacciones', path:"/reporteTransacciones"},
  { name: 'Reporte Subscripciones', path:"/reporteSubscripciones"},
  { name: 'Dashboard', path:"/reportes"},
]

const userNavigation =[
  { name: 'Ajustes', path: "/profile"},
  { name: "Donar", path:"/donar"},
]

const navigationOptions = {
  adminNavigation,
  userNavigation,
}

export default navigationOptions