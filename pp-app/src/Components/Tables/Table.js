import React from 'react'
import { useEffect } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { Button, PageButton } from './Buttons'
import { classNames } from './Utils'
import { SortIcon, SortUpIcon, SortDownIcon } from './Icons'
import FilterSelect from './FilterSelect'
import "../../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import AdminServices from '../../services/transactions.service'

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <label className="px-6 flex flex-row gap-x-2 w-fit items-baseline border rounded-xl border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      <FontAwesomeIcon icon={faSearch} color="gray" className='pt-2' />
      <input
        type="text"
        className="rounded-md font-Pop-R text-base border-transparent focus:border-transparent focus:ring-0"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Buscar transacción . . . ."
      />
    </label>
  )
}

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700 font-Pop-R">{render("Header")}: </span>
      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";
  return (
    <div
      className={
        classNames(
          "px-3 py-1 uppercase w-fit font-Pop-M text-base rounded-full",
          status.startsWith("A") ? "bg-[#0f693849] text-gray-800" : null,
          status.startsWith("P") ? "bg-gray-100 text-gray-800" : null,
          status.startsWith("R") ? "bg-[#eb820144] text-gray-800" : null,
        )
      }
    >
      {(status==="A") 
      ? "Aceptada" 
      : ((status==="P") 
      ? "Pendiente"
      : ((status==="R") 
      ? "Rechazada"
      : "")
      )}
    </div>
  );
};

function Table({ startData, columns }) {
  const [data, setData] = React.useState(startData)
  const [offset] = React.useState(0)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    
  } = useTable({
    columns,
    data,
  },
    useFilters, 
    useGlobalFilter,
    useSortBy,
    usePagination, 
  )
  useEffect(() => {
    AdminServices.getTransactions(offset).then(res=>{
      res? setData(res.data) : setData(startData)
      console.log(res.data)
    });
  }, [offset, startData])

  return (
    <div className='space-y-6'>
      <div className="flex justify-between sm:gap-x-2">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <FilterSelect headerGroups={headerGroups}/>
      </div>
      {/* table */}
      <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          scope="col"
                          className="group px-6 py-3 text-left text-base font-Pop-R text-gray-500 uppercase"
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                          <div className="flex items-center justify-between">
                            {column.render('Header')}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? <SortDownIcon className="w-4 h-4 text-gray-400" />
                                  : <SortUpIcon className="w-4 h-4 text-gray-400" />
                                : (
                                  <SortIcon className="w-4 h-4 text-gray-400" />
                                )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {page.map((row, i) => {  // new
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {cell.column.Cell.name === "defaultRenderer"
                                ? <div className="text-base text-gray-500 font-Pop-L">{cell.render('Cell')}</div>
                                : cell.render('Cell')
                              }
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-baseline space-x-4">
            <span className="text-base font-Pop-R text-gray-700">
              Page <span className="font-Pop-R text-base">{state.pageIndex + 1}</span> of <span className="font-Pop-R text-base">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="mt-1 block w-full font-Pop-L text-base rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring-0"
                value={state.pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map(pageSize => (
                  <option key={pageSize} value={pageSize} className="">
                    Mostrar {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => nextPage()}
                disabled={!canNextPage
                }>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;