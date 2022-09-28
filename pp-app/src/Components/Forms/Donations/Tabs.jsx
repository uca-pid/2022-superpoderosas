import { useState } from 'react'

const getButtonStyle = (selected) => {
  return selected ? 'text-orange-400 border-b-2 border-orange-400 active'
    : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
}

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const changeTab = (event) => {
    setSelectedTab(Number(event.target.value))
  }
  const TabButton = ({ text, value }) => {
    return (
      <button
        className={`font-bold uppercase w-full p-4 rounded-t-lg border-b-2 ${getButtonStyle(value === selectedTab)}`}
        onClick={changeTab}
        value={value}>
        {text}
      </button>
    )
  }
  return (
    <div className='text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700'>
      <ul className='flex flex-wrap -mb-px w-full'>
        <li className='w-1/2'>
          <TabButton text='Tarjeta' value={0}/>
        </li>
        <li className='w-1/2'>
          <TabButton text='Mercado Pago' value={1}/>
        </li>
      </ul>
      <div>
        {
          children.map((tab, index) => {
            return (
              index === selectedTab ?
                tab : null
            )
          })
        }
      </div>
    </div>
  )
}

export default Tabs