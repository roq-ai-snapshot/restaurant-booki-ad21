/* eslint-disable */
import type { Prisma, table } from '@prisma/client';
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

export function useMutatetable() {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  const prefixesToMutate = [
    `${endpoint}/table/find`,
    `${endpoint}/table/aggregate`,
    `${endpoint}/table/count`,
    `${endpoint}/table/groupBy`,
  ];
  const mutate = request.getMutate(prefixesToMutate);

  async function createtable<T extends Prisma.tableCreateArgs>(args: Prisma.SelectSubset<T, Prisma.tableCreateArgs>) {
    return await request.post<CheckSelect<T, table, Prisma.tableGetPayload<T>>, true>(
      `${endpoint}/table/create`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function createManytable<T extends Prisma.tableCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.tableCreateManyArgs>,
  ) {
    return await request.post<Prisma.BatchPayload, false>(`${endpoint}/table/createMany`, args, mutate, fetch, false);
  }

  async function updatetable<T extends Prisma.tableUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.tableUpdateArgs>) {
    return await request.put<Prisma.tableGetPayload<T>, true>(`${endpoint}/table/update`, args, mutate, fetch, true);
  }

  async function updateManytable<T extends Prisma.tableUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.tableUpdateManyArgs>,
  ) {
    return await request.put<Prisma.BatchPayload, false>(`${endpoint}/table/updateMany`, args, mutate, fetch, false);
  }

  async function upserttable<T extends Prisma.tableUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.tableUpsertArgs>) {
    return await request.post<Prisma.tableGetPayload<T>, true>(`${endpoint}/table/upsert`, args, mutate, fetch, true);
  }

  async function deletetable<T extends Prisma.tableDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.tableDeleteArgs>) {
    return await request.del<Prisma.tableGetPayload<T>, true>(`${endpoint}/table/delete`, args, mutate, fetch, true);
  }

  async function deleteManytable<T extends Prisma.tableDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.tableDeleteManyArgs>,
  ) {
    return await request.del<Prisma.BatchPayload, false>(`${endpoint}/table/deleteMany`, args, mutate, fetch, false);
  }
  return { createtable, createManytable, updatetable, updateManytable, upserttable, deletetable, deleteManytable };
}

export function useFindManytable<T extends Prisma.tableFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.tableFindManyArgs>,
  options?: RequestOptions<Array<Prisma.tableGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Array<Prisma.tableGetPayload<T>>>(`${endpoint}/table/findMany`, args, options, fetch);
}

export function useInfiniteFindManytable<
  T extends Prisma.tableFindManyArgs,
  R extends Array<Prisma.tableGetPayload<T>>,
>(
  getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.tableFindManyArgs> | undefined, R>,
  options?: InfiniteRequestOptions<Array<Prisma.tableGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.infiniteGet<
    Prisma.SelectSubset<T, Prisma.tableFindManyArgs> | undefined,
    Array<Prisma.tableGetPayload<T>>
  >(`${endpoint}/table/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquetable<T extends Prisma.tableFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.tableFindUniqueArgs>,
  options?: RequestOptions<Prisma.tableGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.tableGetPayload<T>>(`${endpoint}/table/findUnique`, args, options, fetch);
}

export function useFindFirsttable<T extends Prisma.tableFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.tableFindFirstArgs>,
  options?: RequestOptions<Prisma.tableGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.tableGetPayload<T>>(`${endpoint}/table/findFirst`, args, options, fetch);
}

export function useAggregatetable<T extends Prisma.TableAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.TableAggregateArgs>,
  options?: RequestOptions<Prisma.GetTableAggregateType<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.GetTableAggregateType<T>>(`${endpoint}/table/aggregate`, args, options, fetch);
}

export function useGroupBytable<
  T extends Prisma.tableGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.tableGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.tableGroupByArgs['orderBy'] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.tableGroupByArgs, OrderByArg> & InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.TableGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.TableGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.TableGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.TableGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.TableGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.TableGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.TableGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.TableGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >(`${endpoint}/table/groupBy`, args, options, fetch);
}

export function useCounttable<T extends Prisma.tableCountArgs>(
  args?: Prisma.Subset<T, Prisma.tableCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.TableCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.TableCountAggregateOutputType>
      : number
  >(`${endpoint}/table/count`, args, options, fetch);
}
