/* eslint-disable */
import type { Prisma, order } from '@prisma/client';
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

export function useMutateorder() {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  const prefixesToMutate = [
    `${endpoint}/order/find`,
    `${endpoint}/order/aggregate`,
    `${endpoint}/order/count`,
    `${endpoint}/order/groupBy`,
  ];
  const mutate = request.getMutate(prefixesToMutate);

  async function createorder<T extends Prisma.orderCreateArgs>(args: Prisma.SelectSubset<T, Prisma.orderCreateArgs>) {
    return await request.post<CheckSelect<T, order, Prisma.orderGetPayload<T>>, true>(
      `${endpoint}/order/create`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function createManyorder<T extends Prisma.orderCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.orderCreateManyArgs>,
  ) {
    return await request.post<Prisma.BatchPayload, false>(`${endpoint}/order/createMany`, args, mutate, fetch, false);
  }

  async function updateorder<T extends Prisma.orderUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.orderUpdateArgs>) {
    return await request.put<Prisma.orderGetPayload<T>, true>(`${endpoint}/order/update`, args, mutate, fetch, true);
  }

  async function updateManyorder<T extends Prisma.orderUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.orderUpdateManyArgs>,
  ) {
    return await request.put<Prisma.BatchPayload, false>(`${endpoint}/order/updateMany`, args, mutate, fetch, false);
  }

  async function upsertorder<T extends Prisma.orderUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.orderUpsertArgs>) {
    return await request.post<Prisma.orderGetPayload<T>, true>(`${endpoint}/order/upsert`, args, mutate, fetch, true);
  }

  async function deleteorder<T extends Prisma.orderDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.orderDeleteArgs>) {
    return await request.del<Prisma.orderGetPayload<T>, true>(`${endpoint}/order/delete`, args, mutate, fetch, true);
  }

  async function deleteManyorder<T extends Prisma.orderDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.orderDeleteManyArgs>,
  ) {
    return await request.del<Prisma.BatchPayload, false>(`${endpoint}/order/deleteMany`, args, mutate, fetch, false);
  }
  return { createorder, createManyorder, updateorder, updateManyorder, upsertorder, deleteorder, deleteManyorder };
}

export function useFindManyorder<T extends Prisma.orderFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.orderFindManyArgs>,
  options?: RequestOptions<Array<Prisma.orderGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Array<Prisma.orderGetPayload<T>>>(`${endpoint}/order/findMany`, args, options, fetch);
}

export function useInfiniteFindManyorder<
  T extends Prisma.orderFindManyArgs,
  R extends Array<Prisma.orderGetPayload<T>>,
>(
  getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.orderFindManyArgs> | undefined, R>,
  options?: InfiniteRequestOptions<Array<Prisma.orderGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.infiniteGet<
    Prisma.SelectSubset<T, Prisma.orderFindManyArgs> | undefined,
    Array<Prisma.orderGetPayload<T>>
  >(`${endpoint}/order/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueorder<T extends Prisma.orderFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.orderFindUniqueArgs>,
  options?: RequestOptions<Prisma.orderGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.orderGetPayload<T>>(`${endpoint}/order/findUnique`, args, options, fetch);
}

export function useFindFirstorder<T extends Prisma.orderFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.orderFindFirstArgs>,
  options?: RequestOptions<Prisma.orderGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.orderGetPayload<T>>(`${endpoint}/order/findFirst`, args, options, fetch);
}

export function useAggregateorder<T extends Prisma.OrderAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.OrderAggregateArgs>,
  options?: RequestOptions<Prisma.GetOrderAggregateType<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.GetOrderAggregateType<T>>(`${endpoint}/order/aggregate`, args, options, fetch);
}

export function useGroupByorder<
  T extends Prisma.orderGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.orderGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.orderGroupByArgs['orderBy'] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.orderGroupByArgs, OrderByArg> & InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.OrderGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.OrderGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.OrderGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.OrderGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.OrderGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.OrderGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.OrderGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.OrderGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >(`${endpoint}/order/groupBy`, args, options, fetch);
}

export function useCountorder<T extends Prisma.orderCountArgs>(
  args?: Prisma.Subset<T, Prisma.orderCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.OrderCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.OrderCountAggregateOutputType>
      : number
  >(`${endpoint}/order/count`, args, options, fetch);
}
