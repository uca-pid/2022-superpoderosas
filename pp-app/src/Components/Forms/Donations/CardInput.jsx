const getBorder = (left, right) => {
  if (left) {
    return 'border-2 border-r focus:border-r-2 rounded rounded-r-none'
  } else if (right) {
    return 'border-2 border-l focus:border-l-2 rounded-l-none'
  }
  return 'border-2 rounded'
}

const CardInput = ({ type, placeholder, id, required, left, right}) => {
  return (
    <input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      className={`p-2.5 w-full text-md text-gray-600 bg-transparent border-gray-300 focus:outline-none
      focus:border-orange-500 peer ${getBorder(left, right)}`}
      required={required} />
  )
}

export default CardInput