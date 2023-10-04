/* eslint-disable */
import type { Prisma, menu } from '@prisma/client';
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

export function useMutatemenu() {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  const prefixesToMutate = [
    `${endpoint}/menu/find`,
    `${endpoint}/menu/aggregate`,
    `${endpoint}/menu/count`,
    `${endpoint}/menu/groupBy`,
  ];
  const mutate = request.getMutate(prefixesToMutate);

  async function createmenu<T extends Prisma.menuCreateArgs>(args: Prisma.SelectSubset<T, Prisma.menuCreateArgs>) {
    return await request.post<CheckSelect<T, menu, Prisma.menuGetPayload<T>>, true>(
      `${endpoint}/menu/create`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function createManymenu<T extends Prisma.menuCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.menuCreateManyArgs>,
  ) {
    return await request.post<Prisma.BatchPayload, false>(`${endpoint}/menu/createMany`, args, mutate, fetch, false);
  }

  async function updatemenu<T extends Prisma.menuUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.menuUpdateArgs>) {
    return await request.put<Prisma.menuGetPayload<T>, true>(`${endpoint}/menu/update`, args, mutate, fetch, true);
  }

  async function updateManymenu<T extends Prisma.menuUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.menuUpdateManyArgs>,
  ) {
    return await request.put<Prisma.BatchPayload, false>(`${endpoint}/menu/updateMany`, args, mutate, fetch, false);
  }

  async function upsertmenu<T extends Prisma.menuUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.menuUpsertArgs>) {
    return await request.post<Prisma.menuGetPayload<T>, true>(`${endpoint}/menu/upsert`, args, mutate, fetch, true);
  }

  async function deletemenu<T extends Prisma.menuDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.menuDeleteArgs>) {
    return await request.del<Prisma.menuGetPayload<T>, true>(`${endpoint}/menu/delete`, args, mutate, fetch, true);
  }

  async function deleteManymenu<T extends Prisma.menuDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.menuDeleteManyArgs>,
  ) {
    return await request.del<Prisma.BatchPayload, false>(`${endpoint}/menu/deleteMany`, args, mutate, fetch, false);
  }
  return { createmenu, createManymenu, updatemenu, updateManymenu, upsertmenu, deletemenu, deleteManymenu };
}

export function useFindManymenu<T extends Prisma.menuFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.menuFindManyArgs>,
  options?: RequestOptions<Array<Prisma.menuGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Array<Prisma.menuGetPayload<T>>>(`${endpoint}/menu/findMany`, args, options, fetch);
}

export function useInfiniteFindManymenu<T extends Prisma.menuFindManyArgs, R extends Array<Prisma.menuGetPayload<T>>>(
  getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.menuFindManyArgs> | undefined, R>,
  options?: InfiniteRequestOptions<Array<Prisma.menuGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.infiniteGet<
    Prisma.SelectSubset<T, Prisma.menuFindManyArgs> | undefined,
    Array<Prisma.menuGetPayload<T>>
  >(`${endpoint}/menu/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquemenu<T extends Prisma.menuFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.menuFindUniqueArgs>,
  options?: RequestOptions<Prisma.menuGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.menuGetPayload<T>>(`${endpoint}/menu/findUnique`, args, options, fetch);
}

export function useFindFirstmenu<T extends Prisma.menuFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.menuFindFirstArgs>,
  options?: RequestOptions<Prisma.menuGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.menuGetPayload<T>>(`${endpoint}/menu/findFirst`, args, options, fetch);
}

export function useAggregatemenu<T extends Prisma.MenuAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.MenuAggregateArgs>,
  options?: RequestOptions<Prisma.GetMenuAggregateType<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.GetMenuAggregateType<T>>(`${endpoint}/menu/aggregate`, args, options, fetch);
}

export function useGroupBymenu<
  T extends Prisma.menuGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.menuGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.menuGroupByArgs['orderBy'] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.menuGroupByArgs, OrderByArg> & InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.MenuGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.MenuGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.MenuGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.MenuGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.MenuGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.MenuGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.MenuGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.MenuGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >(`${endpoint}/menu/groupBy`, args, options, fetch);
}

export function useCountmenu<T extends Prisma.menuCountArgs>(
  args?: Prisma.Subset<T, Prisma.menuCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.MenuCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.MenuCountAggregateOutputType>
      : number
  >(`${endpoint}/menu/count`, args, options, fetch);
}
