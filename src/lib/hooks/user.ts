/* eslint-disable */
import type { Prisma, user } from '@prisma/client';
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

export function useMutateuser() {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  const prefixesToMutate = [
    `${endpoint}/user/find`,
    `${endpoint}/user/aggregate`,
    `${endpoint}/user/count`,
    `${endpoint}/user/groupBy`,
  ];
  const mutate = request.getMutate(prefixesToMutate);

  async function createuser<T extends Prisma.userCreateArgs>(args: Prisma.SelectSubset<T, Prisma.userCreateArgs>) {
    return await request.post<CheckSelect<T, user, Prisma.userGetPayload<T>>, true>(
      `${endpoint}/user/create`,
      args,
      mutate,
      fetch,
      true,
    );
  }

  async function createManyuser<T extends Prisma.userCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
  ) {
    return await request.post<Prisma.BatchPayload, false>(`${endpoint}/user/createMany`, args, mutate, fetch, false);
  }

  async function updateuser<T extends Prisma.userUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.userUpdateArgs>) {
    return await request.put<Prisma.userGetPayload<T>, true>(`${endpoint}/user/update`, args, mutate, fetch, true);
  }

  async function updateManyuser<T extends Prisma.userUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
  ) {
    return await request.put<Prisma.BatchPayload, false>(`${endpoint}/user/updateMany`, args, mutate, fetch, false);
  }

  async function upsertuser<T extends Prisma.userUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.userUpsertArgs>) {
    return await request.post<Prisma.userGetPayload<T>, true>(`${endpoint}/user/upsert`, args, mutate, fetch, true);
  }

  async function deleteuser<T extends Prisma.userDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.userDeleteArgs>) {
    return await request.del<Prisma.userGetPayload<T>, true>(`${endpoint}/user/delete`, args, mutate, fetch, true);
  }

  async function deleteManyuser<T extends Prisma.userDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
  ) {
    return await request.del<Prisma.BatchPayload, false>(`${endpoint}/user/deleteMany`, args, mutate, fetch, false);
  }
  return { createuser, createManyuser, updateuser, updateManyuser, upsertuser, deleteuser, deleteManyuser };
}

export function useFindManyuser<T extends Prisma.userFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
  options?: RequestOptions<Array<Prisma.userGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Array<Prisma.userGetPayload<T>>>(`${endpoint}/user/findMany`, args, options, fetch);
}

export function useInfiniteFindManyuser<T extends Prisma.userFindManyArgs, R extends Array<Prisma.userGetPayload<T>>>(
  getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.userFindManyArgs> | undefined, R>,
  options?: InfiniteRequestOptions<Array<Prisma.userGetPayload<T>>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.infiniteGet<
    Prisma.SelectSubset<T, Prisma.userFindManyArgs> | undefined,
    Array<Prisma.userGetPayload<T>>
  >(`${endpoint}/user/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueuser<T extends Prisma.userFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.userFindUniqueArgs>,
  options?: RequestOptions<Prisma.userGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.userGetPayload<T>>(`${endpoint}/user/findUnique`, args, options, fetch);
}

export function useFindFirstuser<T extends Prisma.userFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions<Prisma.userGetPayload<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.userGetPayload<T>>(`${endpoint}/user/findFirst`, args, options, fetch);
}

export function useAggregateuser<T extends Prisma.UserAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.UserAggregateArgs>,
  options?: RequestOptions<Prisma.GetUserAggregateType<T>>,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<Prisma.GetUserAggregateType<T>>(`${endpoint}/user/aggregate`, args, options, fetch);
}

export function useGroupByuser<
  T extends Prisma.userGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.userGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.userGroupByArgs['orderBy'] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.userGroupByArgs, OrderByArg> & InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.UserGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.UserGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    {} extends InputErrors
      ? Array<
          PickEnumerable<Prisma.UserGroupByOutputType, T['by']> & {
            [P in keyof T & keyof Prisma.UserGroupByOutputType]: P extends '_count'
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>;
          }
        >
      : InputErrors
  >(`${endpoint}/user/groupBy`, args, options, fetch);
}

export function useCountuser<T extends Prisma.userCountArgs>(
  args?: Prisma.Subset<T, Prisma.userCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint, fetch } = useContext(RequestHandlerContext);
  return request.get<
    T extends { select: any }
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType>
      : number
  >(`${endpoint}/user/count`, args, options, fetch);
}
