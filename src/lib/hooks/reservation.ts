/* eslint-disable */
import type { Prisma, reservation } from '@prisma/client';
import { useContext } from 'react';
import {
  RequestHandlerContext,
  type GetNextArgs,
  type RequestOptions,
  type InfiniteRequestOptions,
  type PickEnumerable,
  type CheckSelect,
} from '@zenstackhq/swr/runtime';
import * as request from '@zenstackhq/swr/runtime';

export function useMutatereservation() {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  const prefixesToMutate = [
    `${endpoint}/reservation/find`,
    `${endpoint}/reservation/aggregate`,
    `${endpoint}/reservation/count`,
    `${endpoint}/reservation/groupBy`,
  ];
  const mutate = request.getMutate(prefixesToMutate);

  async function createreservation<T extends Prisma.reservationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.reservationCreateArgs>,
  ) {
    return await request.post<CheckSelect<T, reservation, Prisma.reservationGetPayload<T>>, true>(
      `${endpoint}/reservation/create`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function createManyreservation<T extends Prisma.reservationCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.reservationCreateManyArgs>,
  ) {
    return await request.post<Prisma.BatchPayload, false>(
      `${endpoint}/reservation/createMany`,
      args,
      mutate,
      fetch,
      false,
    );
  }

  async function updatereservation<T extends Prisma.reservationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.reservationUpdateArgs>,
  ) {
    return await request.put<Prisma.reservationGetPayload<T>, true>(
      `${endpoint}/reservation/update`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function updateManyreservation<T extends Prisma.reservationUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.reservationUpdateManyArgs>,
  ) {
    return await request.put<Prisma.BatchPayload, false>(
      `${endpoint}/reservation/updateMany`,
      args,
      mutate,
      fetch,
      false,
    );
  }

  async function upsertreservation<T extends Prisma.reservationUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.reservationUpsertArgs>,
  ) {
    return await request.post<Prisma.reservationGetPayload<T>, true>(
      `${endpoint}/reservation/upsert`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function deletereservation<T extends Prisma.reservationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.reservationDeleteArgs>,
  ) {
    return await request.del<Prisma.reservationGetPayload<T>, true>(
      `${endpoint}/reservation/delete`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function deleteManyreservation<T extends Prisma.reservationDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.reservationDeleteManyArgs>,
  ) {
    return await request.del<Prisma.BatchPayload, false>(
      `${endpoint}/reservation/deleteMany`,
      args,
      mutate,
      fetch,
      false,
    );
  }
  return {
    createreservation,
    createManyreservation,
    updatereservation,
    updateManyreservation,
    upsertreservation,
    deletereservation,
    deleteManyreservation,
  };
}

export function useFindManyreservation<T extends Prisma.reservationFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.reservationFindManyArgs>,
  options?: RequestOptions<Array<Prisma.reservationGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Array<Prisma.reservationGetPayload<T>>>(`${endpoint}/reservation/findMany`, args, options, fetch);
}

export function useInfiniteFindManyreservation<
  T extends Prisma.reservationFindManyArgs,
  R extends Array<Prisma.reservationGetPayload<T>>,
>(
  getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.reservationFindManyArgs> | undefined, R>,
  options?: InfiniteRequestOptions<Array<Prisma.reservationGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.infiniteGet<
    Prisma.SelectSubset<T, Prisma.reservationFindManyArgs> | undefined,
    Array<Prisma.reservationGetPayload<T>>
  >(`${endpoint}/reservation/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquereservation<T extends Prisma.reservationFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.reservationFindUniqueArgs>,
  options?: RequestOptions<Prisma.reservationGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.reservationGetPayload<T>>(`${endpoint}/reservation/findUnique`, args, options, fetch);
}

export function useFindFirstreservation<T extends Prisma.reservationFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.reservationFindFirstArgs>,
  options?: RequestOptions<Prisma.reservationGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.reservationGetPayload<T>>(`${endpoint}/reservation/findFirst`, args, options, fetch);
}

export function useAggregatereservation<T extends Prisma.ReservationAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.ReservationAggregateArgs>,
  options?: RequestOptions<Prisma.GetReservationAggregateType<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.GetReservationAggregateType<T>>(`${endpoint}/reservation/aggregate`, args, options, fetch);
}

export function useGroupByreservation<
  T extends Prisma.reservationGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.reservationGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.reservationGroupByArgs['orderBy'] },
  OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
  ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
  ByValid extends Prisma.Has<ByFields, OrderFields>,
  HavingFields extends Prisma.GetHavingFields<T['having']>,
  HavingValid extends Prisma.Has<ByFields, HavingFields>,
  ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
  InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
      }[OrderFields],
>(
  args?: Prisma.SubsetIntersection<T, Prisma.reservationGroupByArgs, OrderByArg> & InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.ReservationGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.ReservationGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ReservationGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.ReservationGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.ReservationGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.ReservationGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ReservationGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.ReservationGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >(`${endpoint}/reservation/groupBy`, args, options, fetch);
}

export function useCountreservation<T extends Prisma.reservationCountArgs>(
  args?: Prisma.Subset<T, Prisma.reservationCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.ReservationCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.ReservationCountAggregateOutputType>
      : number
  >(`${endpoint}/reservation/count`, args, options, fetch);
}
