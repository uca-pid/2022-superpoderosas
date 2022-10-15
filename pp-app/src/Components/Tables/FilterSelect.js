import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/fontawesome-free-solid'
import { Popover } from '@headlessui/react'

const FilterSelect = ({headerGroups}) => {
  return (
    <>
    <Popover className={"grid relative"}>
    <Popover.Button className="justify-self-end lightgreyBgTranslucentHover rounded-3xl md:rounded-xl lg:basis-2/7 w-fit py-2 px-5 focus:ring-0" >
        <div className="justify-center flex z-50 space-x-4 overflow-hidden mx-auto lg:flex-row">
        <FontAwesomeIcon icon={faFilter} color="gray"/>
        </div>
    </Popover.Button>
    <Popover.Panel className={"p-10 absolute top-0 right-0 mt-16 p-3 rounded-lg almostWhiteBg grayBorder space-y-6 w-fit"} >
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
    </Popover.Panel>
    </Popover>
    </>
  );
};
export default FilterSelect;