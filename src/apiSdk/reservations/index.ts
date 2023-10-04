import queryString from 'query-string';
import { ReservationInterface, ReservationGetQueryInterface } from 'interfaces/reservation';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getReservations = async (
  query?: ReservationGetQueryInterface,
): Promise<PaginatedInterface<ReservationInterface>> => {
  return fetcher('/api/reservations', {}, query);
};

export const createReservation = async (reservation: ReservationInterface) => {
  return fetcher('/api/reservations', { method: 'POST', body: JSON.stringify(reservation) });
};

export const updateReservationById = async (id: string, reservation: ReservationInterface) => {
  return fetcher(`/api/reservations/${id}`, { method: 'PUT', body: JSON.stringify(reservation) });
};

export const getReservationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/reservations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteReservationById = async (id: string) => {
  return fetcher(`/api/reservations/${id}`, { method: 'DELETE' });
};
