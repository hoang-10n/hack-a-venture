'use client';

import { DataTableFilterBox } from '@/components/dashboard/products/table/data-table-filter-box';
import { DataTableResetFilter } from '@/components/dashboard/products/table/data-table-reset-filter';
import { DataTableSearch } from '@/components/dashboard/products/table/data-table-search';
import {
  CATEGORY_OPTIONS,
  useProductTableFilters
} from './use-product-table-filters';

export default function ProductTableAction() {
  const {
    categoriesFilter,
    setCategoriesFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery
  } = useProductTableFilters();
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <DataTableSearch
        searchKey='name'
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
      />
      <DataTableFilterBox
        filterKey='categories'
        title='Categories'
        options={CATEGORY_OPTIONS}
        setFilterValue={setCategoriesFilter}
        filterValue={categoriesFilter}
      />
      <DataTableResetFilter
        isFilterActive={isAnyFilterActive}
        onReset={resetFilters}
      />
    </div>
  );
}
