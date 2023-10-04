import queryString from 'query-string';
import { TableInterface, TableGetQueryInterface } from 'interfaces/table';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTables = async (query?: TableGetQueryInterface): Promise<PaginatedInterface<TableInterface>> => {
  return fetcher('/api/tables', {}, query);
};

export const createTable = async (table: TableInterface) => {
  return fetcher('/api/tables', { method: 'POST', body: JSON.stringify(table) });
};

export const updateTableById = async (id: string, table: TableInterface) => {
  return fetcher(`/api/tables/${id}`, { method: 'PUT', body: JSON.stringify(table) });
};

export const getTableById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tables/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTableById = async (id: string) => {
  return fetcher(`/api/tables/${id}`, { method: 'DELETE' });
};
