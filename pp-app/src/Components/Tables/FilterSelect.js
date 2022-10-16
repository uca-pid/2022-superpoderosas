import React from "react";
const FilterSelect = ({headerGroups, clearFilters}) => {
  return (
    <>
    <div className="rounded-xl border darkGrayBorder bg-white flex flex-col space-y-10 p-16 ">
      <div className="font-Pop-M text-xl text-gray-500">Filtros</div>
      <div className="grid grid-cols-3 gap-y-2">
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div className="px-2 m-5" key={column.id}>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
      </div>
      <button className="font-Pop-M text-lg greenText uppercase w-full text-end" onClick={clearFilters}>Borrar filtros</button>
    </div>
    </>
  );
};
export default FilterSelect;