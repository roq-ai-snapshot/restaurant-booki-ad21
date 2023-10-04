/* eslint-disable */
import type { Prisma, restaurant } from '@prisma/client';
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

export function useMutaterestaurant() {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  const prefixesToMutate = [
    `${endpoint}/restaurant/find`,
    `${endpoint}/restaurant/aggregate`,
    `${endpoint}/restaurant/count`,
    `${endpoint}/restaurant/groupBy`,
  ];
  const mutate = request.getMutate(prefixesToMutate);

  async function createrestaurant<T extends Prisma.restaurantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.restaurantCreateArgs>,
  ) {
    return await request.post<CheckSelect<T, restaurant, Prisma.restaurantGetPayload<T>>, true>(
      `${endpoint}/restaurant/create`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function createManyrestaurant<T extends Prisma.restaurantCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.restaurantCreateManyArgs>,
  ) {
    return await request.post<Prisma.BatchPayload, false>(
      `${endpoint}/restaurant/createMany`,
      args,
      mutate,
      fetch,
      false,
    );
  }

  async function updaterestaurant<T extends Prisma.restaurantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.restaurantUpdateArgs>,
  ) {
    return await request.put<Prisma.restaurantGetPayload<T>, true>(
      `${endpoint}/restaurant/update`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function updateManyrestaurant<T extends Prisma.restaurantUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.restaurantUpdateManyArgs>,
  ) {
    return await request.put<Prisma.BatchPayload, false>(
      `${endpoint}/restaurant/updateMany`,
      args,
      mutate,
      fetch,
      false,
    );
  }

  async function upsertrestaurant<T extends Prisma.restaurantUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.restaurantUpsertArgs>,
  ) {
    return await request.post<Prisma.restaurantGetPayload<T>, true>(
      `${endpoint}/restaurant/upsert`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function deleterestaurant<T extends Prisma.restaurantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.restaurantDeleteArgs>,
  ) {
    return await request.del<Prisma.restaurantGetPayload<T>, true>(
      `${endpoint}/restaurant/delete`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function deleteManyrestaurant<T extends Prisma.restaurantDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.restaurantDeleteManyArgs>,
  ) {
    return await request.del<Prisma.BatchPayload, false>(
      `${endpoint}/restaurant/deleteMany`,
      args,
      mutate,
      fetch,
      false,
    );
  }
  return {
    createrestaurant,
    createManyrestaurant,
    updaterestaurant,
    updateManyrestaurant,
    upsertrestaurant,
    deleterestaurant,
    deleteManyrestaurant,
  };
}

export function useFindManyrestaurant<T extends Prisma.restaurantFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.restaurantFindManyArgs>,
  options?: RequestOptions<Array<Prisma.restaurantGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Array<Prisma.restaurantGetPayload<T>>>(`${endpoint}/restaurant/findMany`, args, options, fetch);
}

export function useInfiniteFindManyrestaurant<
  T extends Prisma.restaurantFindManyArgs,
  R extends Array<Prisma.restaurantGetPayload<T>>,
>(
  getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.restaurantFindManyArgs> | undefined, R>,
  options?: InfiniteRequestOptions<Array<Prisma.restaurantGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.infiniteGet<
    Prisma.SelectSubset<T, Prisma.restaurantFindManyArgs> | undefined,
    Array<Prisma.restaurantGetPayload<T>>
  >(`${endpoint}/restaurant/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquerestaurant<T extends Prisma.restaurantFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.restaurantFindUniqueArgs>,
  options?: RequestOptions<Prisma.restaurantGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.restaurantGetPayload<T>>(`${endpoint}/restaurant/findUnique`, args, options, fetch);
}

export function useFindFirstrestaurant<T extends Prisma.restaurantFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.restaurantFindFirstArgs>,
  options?: RequestOptions<Prisma.restaurantGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.restaurantGetPayload<T>>(`${endpoint}/restaurant/findFirst`, args, options, fetch);
}

export function useAggregaterestaurant<T extends Prisma.RestaurantAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.RestaurantAggregateArgs>,
  options?: RequestOptions<Prisma.GetRestaurantAggregateType<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.GetRestaurantAggregateType<T>>(`${endpoint}/restaurant/aggregate`, args, options, fetch);
}

export function useGroupByrestaurant<
  T extends Prisma.restaurantGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.restaurantGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.restaurantGroupByArgs['orderBy'] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.restaurantGroupByArgs, OrderByArg> & InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.RestaurantGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.RestaurantGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.RestaurantGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.RestaurantGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.RestaurantGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.RestaurantGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.RestaurantGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.RestaurantGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >(`${endpoint}/restaurant/groupBy`, args, options, fetch);
}

export function useCountrestaurant<T extends Prisma.restaurantCountArgs>(
  args?: Prisma.Subset<T, Prisma.restaurantCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.RestaurantCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.RestaurantCountAggregateOutputType>
      : number
  >(`${endpoint}/restaurant/count`, args, options, fetch);
}
