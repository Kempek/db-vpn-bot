
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Server
 * 
 */
export type Server = $Result.DefaultSelection<Prisma.$ServerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model VpnKey
 * 
 */
export type VpnKey = $Result.DefaultSelection<Prisma.$VpnKeyPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PromoCode
 * 
 */
export type PromoCode = $Result.DefaultSelection<Prisma.$PromoCodePayload>
/**
 * Model RedemptionPromo
 * 
 */
export type RedemptionPromo = $Result.DefaultSelection<Prisma.$RedemptionPromoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  PAYMENT: 'PAYMENT',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const KeyStatus: {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  USED: 'USED',
  REVOKED: 'REVOKED',
  EXPIRED: 'EXPIRED'
};

export type KeyStatus = (typeof KeyStatus)[keyof typeof KeyStatus]


export const UserRole: {
  ADMIN: 'ADMIN',
  GUEST: 'GUEST',
  USER: 'USER',
  FREE: 'FREE',
  SUBSCRIBER: 'SUBSCRIBER',
  INACTIVE: 'INACTIVE'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type KeyStatus = $Enums.KeyStatus

export const KeyStatus: typeof $Enums.KeyStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Servers
 * const servers = await prisma.server.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Servers
   * const servers = await prisma.server.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): Prisma.ServerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vpnKey`: Exposes CRUD operations for the **VpnKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VpnKeys
    * const vpnKeys = await prisma.vpnKey.findMany()
    * ```
    */
  get vpnKey(): Prisma.VpnKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promoCode`: Exposes CRUD operations for the **PromoCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromoCodes
    * const promoCodes = await prisma.promoCode.findMany()
    * ```
    */
  get promoCode(): Prisma.PromoCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.redemptionPromo`: Exposes CRUD operations for the **RedemptionPromo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RedemptionPromos
    * const redemptionPromos = await prisma.redemptionPromo.findMany()
    * ```
    */
  get redemptionPromo(): Prisma.RedemptionPromoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Server: 'Server',
    User: 'User',
    Subscription: 'Subscription',
    VpnKey: 'VpnKey',
    Plan: 'Plan',
    Transaction: 'Transaction',
    PromoCode: 'PromoCode',
    RedemptionPromo: 'RedemptionPromo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "server" | "user" | "subscription" | "vpnKey" | "plan" | "transaction" | "promoCode" | "redemptionPromo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Server: {
        payload: Prisma.$ServerPayload<ExtArgs>
        fields: Prisma.ServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findFirst: {
            args: Prisma.ServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findMany: {
            args: Prisma.ServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          create: {
            args: Prisma.ServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          createMany: {
            args: Prisma.ServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          delete: {
            args: Prisma.ServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          update: {
            args: Prisma.ServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          deleteMany: {
            args: Prisma.ServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          upsert: {
            args: Prisma.ServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          aggregate: {
            args: Prisma.ServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServer>
          }
          groupBy: {
            args: Prisma.ServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerCountArgs<ExtArgs>
            result: $Utils.Optional<ServerCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      VpnKey: {
        payload: Prisma.$VpnKeyPayload<ExtArgs>
        fields: Prisma.VpnKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VpnKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VpnKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>
          }
          findFirst: {
            args: Prisma.VpnKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VpnKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>
          }
          findMany: {
            args: Prisma.VpnKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>[]
          }
          create: {
            args: Prisma.VpnKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>
          }
          createMany: {
            args: Prisma.VpnKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VpnKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>[]
          }
          delete: {
            args: Prisma.VpnKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>
          }
          update: {
            args: Prisma.VpnKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>
          }
          deleteMany: {
            args: Prisma.VpnKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VpnKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VpnKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>[]
          }
          upsert: {
            args: Prisma.VpnKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VpnKeyPayload>
          }
          aggregate: {
            args: Prisma.VpnKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVpnKey>
          }
          groupBy: {
            args: Prisma.VpnKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VpnKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VpnKeyCountArgs<ExtArgs>
            result: $Utils.Optional<VpnKeyCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PromoCode: {
        payload: Prisma.$PromoCodePayload<ExtArgs>
        fields: Prisma.PromoCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findFirst: {
            args: Prisma.PromoCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findMany: {
            args: Prisma.PromoCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          create: {
            args: Prisma.PromoCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          createMany: {
            args: Prisma.PromoCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromoCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          delete: {
            args: Prisma.PromoCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          update: {
            args: Prisma.PromoCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          deleteMany: {
            args: Prisma.PromoCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromoCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          upsert: {
            args: Prisma.PromoCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          aggregate: {
            args: Prisma.PromoCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromoCode>
          }
          groupBy: {
            args: Prisma.PromoCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCodeCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeCountAggregateOutputType> | number
          }
        }
      }
      RedemptionPromo: {
        payload: Prisma.$RedemptionPromoPayload<ExtArgs>
        fields: Prisma.RedemptionPromoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedemptionPromoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedemptionPromoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>
          }
          findFirst: {
            args: Prisma.RedemptionPromoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedemptionPromoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>
          }
          findMany: {
            args: Prisma.RedemptionPromoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>[]
          }
          create: {
            args: Prisma.RedemptionPromoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>
          }
          createMany: {
            args: Prisma.RedemptionPromoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedemptionPromoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>[]
          }
          delete: {
            args: Prisma.RedemptionPromoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>
          }
          update: {
            args: Prisma.RedemptionPromoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>
          }
          deleteMany: {
            args: Prisma.RedemptionPromoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedemptionPromoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RedemptionPromoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>[]
          }
          upsert: {
            args: Prisma.RedemptionPromoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPromoPayload>
          }
          aggregate: {
            args: Prisma.RedemptionPromoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedemptionPromo>
          }
          groupBy: {
            args: Prisma.RedemptionPromoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedemptionPromoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedemptionPromoCountArgs<ExtArgs>
            result: $Utils.Optional<RedemptionPromoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    server?: ServerOmit
    user?: UserOmit
    subscription?: SubscriptionOmit
    vpnKey?: VpnKeyOmit
    plan?: PlanOmit
    transaction?: TransactionOmit
    promoCode?: PromoCodeOmit
    redemptionPromo?: RedemptionPromoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ServerCountOutputType
   */

  export type ServerCountOutputType = {
    vpnKey: number
  }

  export type ServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vpnKey?: boolean | ServerCountOutputTypeCountVpnKeyArgs
  }

  // Custom InputTypes
  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerCountOutputType
     */
    select?: ServerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeCountVpnKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VpnKeyWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subscription: number
    transactions: number
    redemptionsPromo: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | UserCountOutputTypeCountSubscriptionArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    redemptionsPromo?: boolean | UserCountOutputTypeCountRedemptionsPromoArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRedemptionsPromoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionPromoWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    vpnKey: number
    transaction: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vpnKey?: boolean | SubscriptionCountOutputTypeCountVpnKeyArgs
    transaction?: boolean | SubscriptionCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountVpnKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VpnKeyWhereInput
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscription: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | PlanCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type PromoCodeCountOutputType
   */

  export type PromoCodeCountOutputType = {
    redemptionsPromo: number
  }

  export type PromoCodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptionsPromo?: boolean | PromoCodeCountOutputTypeCountRedemptionsPromoArgs
  }

  // Custom InputTypes
  /**
   * PromoCodeCountOutputType without action
   */
  export type PromoCodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCodeCountOutputType
     */
    select?: PromoCodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromoCodeCountOutputType without action
   */
  export type PromoCodeCountOutputTypeCountRedemptionsPromoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionPromoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Server
   */

  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  export type ServerAvgAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type ServerSumAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type ServerMinAggregateOutputType = {
    id: number | null
    name: string | null
    isOnline: boolean | null
    ip: string | null
    port: number | null
    password: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isOnline: boolean | null
    ip: string | null
    port: number | null
    password: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerCountAggregateOutputType = {
    id: number
    name: number
    isOnline: number
    ip: number
    port: number
    password: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServerAvgAggregateInputType = {
    id?: true
    port?: true
  }

  export type ServerSumAggregateInputType = {
    id?: true
    port?: true
  }

  export type ServerMinAggregateInputType = {
    id?: true
    name?: true
    isOnline?: true
    ip?: true
    port?: true
    password?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerMaxAggregateInputType = {
    id?: true
    name?: true
    isOnline?: true
    ip?: true
    port?: true
    password?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerCountAggregateInputType = {
    id?: true
    name?: true
    isOnline?: true
    ip?: true
    port?: true
    password?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Server to aggregate.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMaxAggregateInputType
  }

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
        [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>
  }




  export type ServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerWhereInput
    orderBy?: ServerOrderByWithAggregationInput | ServerOrderByWithAggregationInput[]
    by: ServerScalarFieldEnum[] | ServerScalarFieldEnum
    having?: ServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerCountAggregateInputType | true
    _avg?: ServerAvgAggregateInputType
    _sum?: ServerSumAggregateInputType
    _min?: ServerMinAggregateInputType
    _max?: ServerMaxAggregateInputType
  }

  export type ServerGroupByOutputType = {
    id: number
    name: string
    isOnline: boolean
    ip: string | null
    port: number | null
    password: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  type GetServerGroupByPayload<T extends ServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerGroupByOutputType[P]>
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
        }
      >
    >


  export type ServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isOnline?: boolean
    ip?: boolean
    port?: boolean
    password?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vpnKey?: boolean | Server$vpnKeyArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["server"]>

  export type ServerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isOnline?: boolean
    ip?: boolean
    port?: boolean
    password?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["server"]>

  export type ServerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isOnline?: boolean
    ip?: boolean
    port?: boolean
    password?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["server"]>

  export type ServerSelectScalar = {
    id?: boolean
    name?: boolean
    isOnline?: boolean
    ip?: boolean
    port?: boolean
    password?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isOnline" | "ip" | "port" | "password" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["server"]>
  export type ServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vpnKey?: boolean | Server$vpnKeyArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Server"
    objects: {
      vpnKey: Prisma.$VpnKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isOnline: boolean
      ip: string | null
      port: number | null
      password: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["server"]>
    composites: {}
  }

  type ServerGetPayload<S extends boolean | null | undefined | ServerDefaultArgs> = $Result.GetResult<Prisma.$ServerPayload, S>

  type ServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerCountAggregateInputType | true
    }

  export interface ServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Server'], meta: { name: 'Server' } }
    /**
     * Find zero or one Server that matches the filter.
     * @param {ServerFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerFindUniqueArgs>(args: SelectSubset<T, ServerFindUniqueArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Server that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerFindFirstArgs>(args?: SelectSubset<T, ServerFindFirstArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerFindManyArgs>(args?: SelectSubset<T, ServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Server.
     * @param {ServerCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     * 
     */
    create<T extends ServerCreateArgs>(args: SelectSubset<T, ServerCreateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {ServerCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const server = await prisma.server.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerCreateManyArgs>(args?: SelectSubset<T, ServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servers and returns the data saved in the database.
     * @param {ServerCreateManyAndReturnArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const server = await prisma.server.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servers and only return the `id`
     * const serverWithIdOnly = await prisma.server.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServerCreateManyAndReturnArgs>(args?: SelectSubset<T, ServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Server.
     * @param {ServerDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     * 
     */
    delete<T extends ServerDeleteArgs>(args: SelectSubset<T, ServerDeleteArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Server.
     * @param {ServerUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerUpdateArgs>(args: SelectSubset<T, ServerUpdateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerDeleteManyArgs>(args?: SelectSubset<T, ServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerUpdateManyArgs>(args: SelectSubset<T, ServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers and returns the data updated in the database.
     * @param {ServerUpdateManyAndReturnArgs} args - Arguments to update many Servers.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servers and only return the `id`
     * const serverWithIdOnly = await prisma.server.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServerUpdateManyAndReturnArgs>(args: SelectSubset<T, ServerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Server.
     * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
     */
    upsert<T extends ServerUpsertArgs>(args: SelectSubset<T, ServerUpsertArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServerCountArgs>(
      args?: Subset<T, ServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServerAggregateArgs>(args: Subset<T, ServerAggregateArgs>): Prisma.PrismaPromise<GetServerAggregateType<T>>

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerGroupByArgs['orderBy'] }
        : { orderBy?: ServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Server model
   */
  readonly fields: ServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vpnKey<T extends Server$vpnKeyArgs<ExtArgs> = {}>(args?: Subset<T, Server$vpnKeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Server model
   */
  interface ServerFieldRefs {
    readonly id: FieldRef<"Server", 'Int'>
    readonly name: FieldRef<"Server", 'String'>
    readonly isOnline: FieldRef<"Server", 'Boolean'>
    readonly ip: FieldRef<"Server", 'String'>
    readonly port: FieldRef<"Server", 'Int'>
    readonly password: FieldRef<"Server", 'String'>
    readonly country: FieldRef<"Server", 'String'>
    readonly createdAt: FieldRef<"Server", 'DateTime'>
    readonly updatedAt: FieldRef<"Server", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Server findUnique
   */
  export type ServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findUniqueOrThrow
   */
  export type ServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findFirst
   */
  export type ServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findFirstOrThrow
   */
  export type ServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findMany
   */
  export type ServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server create
   */
  export type ServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to create a Server.
     */
    data: XOR<ServerCreateInput, ServerUncheckedCreateInput>
  }

  /**
   * Server createMany
   */
  export type ServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Server createManyAndReturn
   */
  export type ServerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Server update
   */
  export type ServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to update a Server.
     */
    data: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
    /**
     * Choose, which Server to update.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server updateMany
   */
  export type ServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
  }

  /**
   * Server updateManyAndReturn
   */
  export type ServerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
  }

  /**
   * Server upsert
   */
  export type ServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The filter to search for the Server to update in case it exists.
     */
    where: ServerWhereUniqueInput
    /**
     * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
     */
    create: XOR<ServerCreateInput, ServerUncheckedCreateInput>
    /**
     * In case the Server was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
  }

  /**
   * Server delete
   */
  export type ServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter which Server to delete.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server deleteMany
   */
  export type ServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to delete
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to delete.
     */
    limit?: number
  }

  /**
   * Server.vpnKey
   */
  export type Server$vpnKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    where?: VpnKeyWhereInput
    orderBy?: VpnKeyOrderByWithRelationInput | VpnKeyOrderByWithRelationInput[]
    cursor?: VpnKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VpnKeyScalarFieldEnum | VpnKeyScalarFieldEnum[]
  }

  /**
   * Server without action
   */
  export type ServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: number | null
  }

  export type UserSumAggregateOutputType = {
    balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    balance: number | null
    username: string | null
    role: $Enums.UserRole | null
    agreedToTerms: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    bannedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    username: string | null
    role: $Enums.UserRole | null
    agreedToTerms: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    bannedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    balance: number
    username: number
    role: number
    agreedToTerms: number
    createdAt: number
    updatedAt: number
    bannedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    balance?: true
    username?: true
    role?: true
    agreedToTerms?: true
    createdAt?: true
    updatedAt?: true
    bannedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    balance?: true
    username?: true
    role?: true
    agreedToTerms?: true
    createdAt?: true
    updatedAt?: true
    bannedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    balance?: true
    username?: true
    role?: true
    agreedToTerms?: true
    createdAt?: true
    updatedAt?: true
    bannedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    balance: number
    username: string | null
    role: $Enums.UserRole
    agreedToTerms: boolean
    createdAt: Date
    updatedAt: Date
    bannedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    username?: boolean
    role?: boolean
    agreedToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bannedAt?: boolean
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    redemptionsPromo?: boolean | User$redemptionsPromoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    username?: boolean
    role?: boolean
    agreedToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bannedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    username?: boolean
    role?: boolean
    agreedToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bannedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    balance?: boolean
    username?: boolean
    role?: boolean
    agreedToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bannedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "username" | "role" | "agreedToTerms" | "createdAt" | "updatedAt" | "bannedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    redemptionsPromo?: boolean | User$redemptionsPromoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      redemptionsPromo: Prisma.$RedemptionPromoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      username: string | null
      role: $Enums.UserRole
      agreedToTerms: boolean
      createdAt: Date
      updatedAt: Date
      bannedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    redemptionsPromo<T extends User$redemptionsPromoArgs<ExtArgs> = {}>(args?: Subset<T, User$redemptionsPromoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly agreedToTerms: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly bannedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.redemptionsPromo
   */
  export type User$redemptionsPromoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    where?: RedemptionPromoWhereInput
    orderBy?: RedemptionPromoOrderByWithRelationInput | RedemptionPromoOrderByWithRelationInput[]
    cursor?: RedemptionPromoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedemptionPromoScalarFieldEnum | RedemptionPromoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    planId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    planId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    planId: number | null
    isActive: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    planId: number | null
    isActive: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    isActive: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    planId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    planId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    userId: string
    planId: number
    isActive: boolean
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vpnKey?: boolean | Subscription$vpnKeyArgs<ExtArgs>
    transaction?: boolean | Subscription$transactionArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "isActive" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vpnKey?: boolean | Subscription$vpnKeyArgs<ExtArgs>
    transaction?: boolean | Subscription$transactionArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      vpnKey: Prisma.$VpnKeyPayload<ExtArgs>[]
      transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      planId: number
      isActive: boolean
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vpnKey<T extends Subscription$vpnKeyArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$vpnKeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends Subscription$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'Int'>
    readonly isActive: FieldRef<"Subscription", 'Boolean'>
    readonly expiresAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.vpnKey
   */
  export type Subscription$vpnKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    where?: VpnKeyWhereInput
    orderBy?: VpnKeyOrderByWithRelationInput | VpnKeyOrderByWithRelationInput[]
    cursor?: VpnKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VpnKeyScalarFieldEnum | VpnKeyScalarFieldEnum[]
  }

  /**
   * Subscription.transaction
   */
  export type Subscription$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model VpnKey
   */

  export type AggregateVpnKey = {
    _count: VpnKeyCountAggregateOutputType | null
    _avg: VpnKeyAvgAggregateOutputType | null
    _sum: VpnKeySumAggregateOutputType | null
    _min: VpnKeyMinAggregateOutputType | null
    _max: VpnKeyMaxAggregateOutputType | null
  }

  export type VpnKeyAvgAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    serverId: number | null
    trafficLimit: number | null
    usedTraffic: number | null
  }

  export type VpnKeySumAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    serverId: number | null
    trafficLimit: number | null
    usedTraffic: number | null
  }

  export type VpnKeyMinAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    serverId: number | null
    key: string | null
    status: $Enums.KeyStatus | null
    serverName: string | null
    trafficLimit: number | null
    usedTraffic: number | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VpnKeyMaxAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    serverId: number | null
    key: string | null
    status: $Enums.KeyStatus | null
    serverName: string | null
    trafficLimit: number | null
    usedTraffic: number | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VpnKeyCountAggregateOutputType = {
    id: number
    subscriptionId: number
    serverId: number
    key: number
    status: number
    serverName: number
    trafficLimit: number
    usedTraffic: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VpnKeyAvgAggregateInputType = {
    id?: true
    subscriptionId?: true
    serverId?: true
    trafficLimit?: true
    usedTraffic?: true
  }

  export type VpnKeySumAggregateInputType = {
    id?: true
    subscriptionId?: true
    serverId?: true
    trafficLimit?: true
    usedTraffic?: true
  }

  export type VpnKeyMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    serverId?: true
    key?: true
    status?: true
    serverName?: true
    trafficLimit?: true
    usedTraffic?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VpnKeyMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    serverId?: true
    key?: true
    status?: true
    serverName?: true
    trafficLimit?: true
    usedTraffic?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VpnKeyCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    serverId?: true
    key?: true
    status?: true
    serverName?: true
    trafficLimit?: true
    usedTraffic?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VpnKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VpnKey to aggregate.
     */
    where?: VpnKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VpnKeys to fetch.
     */
    orderBy?: VpnKeyOrderByWithRelationInput | VpnKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VpnKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VpnKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VpnKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VpnKeys
    **/
    _count?: true | VpnKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VpnKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VpnKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VpnKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VpnKeyMaxAggregateInputType
  }

  export type GetVpnKeyAggregateType<T extends VpnKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateVpnKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVpnKey[P]>
      : GetScalarType<T[P], AggregateVpnKey[P]>
  }




  export type VpnKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VpnKeyWhereInput
    orderBy?: VpnKeyOrderByWithAggregationInput | VpnKeyOrderByWithAggregationInput[]
    by: VpnKeyScalarFieldEnum[] | VpnKeyScalarFieldEnum
    having?: VpnKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VpnKeyCountAggregateInputType | true
    _avg?: VpnKeyAvgAggregateInputType
    _sum?: VpnKeySumAggregateInputType
    _min?: VpnKeyMinAggregateInputType
    _max?: VpnKeyMaxAggregateInputType
  }

  export type VpnKeyGroupByOutputType = {
    id: number
    subscriptionId: number
    serverId: number
    key: string
    status: $Enums.KeyStatus
    serverName: string | null
    trafficLimit: number | null
    usedTraffic: number | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    _count: VpnKeyCountAggregateOutputType | null
    _avg: VpnKeyAvgAggregateOutputType | null
    _sum: VpnKeySumAggregateOutputType | null
    _min: VpnKeyMinAggregateOutputType | null
    _max: VpnKeyMaxAggregateOutputType | null
  }

  type GetVpnKeyGroupByPayload<T extends VpnKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VpnKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VpnKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VpnKeyGroupByOutputType[P]>
            : GetScalarType<T[P], VpnKeyGroupByOutputType[P]>
        }
      >
    >


  export type VpnKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    serverId?: boolean
    key?: boolean
    status?: boolean
    serverName?: boolean
    trafficLimit?: boolean
    usedTraffic?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vpnKey"]>

  export type VpnKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    serverId?: boolean
    key?: boolean
    status?: boolean
    serverName?: boolean
    trafficLimit?: boolean
    usedTraffic?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vpnKey"]>

  export type VpnKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    serverId?: boolean
    key?: boolean
    status?: boolean
    serverName?: boolean
    trafficLimit?: boolean
    usedTraffic?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vpnKey"]>

  export type VpnKeySelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    serverId?: boolean
    key?: boolean
    status?: boolean
    serverName?: boolean
    trafficLimit?: boolean
    usedTraffic?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VpnKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "serverId" | "key" | "status" | "serverName" | "trafficLimit" | "usedTraffic" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["vpnKey"]>
  export type VpnKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }
  export type VpnKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }
  export type VpnKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }

  export type $VpnKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VpnKey"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
      server: Prisma.$ServerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subscriptionId: number
      serverId: number
      key: string
      status: $Enums.KeyStatus
      serverName: string | null
      trafficLimit: number | null
      usedTraffic: number | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["vpnKey"]>
    composites: {}
  }

  type VpnKeyGetPayload<S extends boolean | null | undefined | VpnKeyDefaultArgs> = $Result.GetResult<Prisma.$VpnKeyPayload, S>

  type VpnKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VpnKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VpnKeyCountAggregateInputType | true
    }

  export interface VpnKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VpnKey'], meta: { name: 'VpnKey' } }
    /**
     * Find zero or one VpnKey that matches the filter.
     * @param {VpnKeyFindUniqueArgs} args - Arguments to find a VpnKey
     * @example
     * // Get one VpnKey
     * const vpnKey = await prisma.vpnKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VpnKeyFindUniqueArgs>(args: SelectSubset<T, VpnKeyFindUniqueArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VpnKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VpnKeyFindUniqueOrThrowArgs} args - Arguments to find a VpnKey
     * @example
     * // Get one VpnKey
     * const vpnKey = await prisma.vpnKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VpnKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, VpnKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VpnKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VpnKeyFindFirstArgs} args - Arguments to find a VpnKey
     * @example
     * // Get one VpnKey
     * const vpnKey = await prisma.vpnKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VpnKeyFindFirstArgs>(args?: SelectSubset<T, VpnKeyFindFirstArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VpnKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VpnKeyFindFirstOrThrowArgs} args - Arguments to find a VpnKey
     * @example
     * // Get one VpnKey
     * const vpnKey = await prisma.vpnKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VpnKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, VpnKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VpnKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VpnKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VpnKeys
     * const vpnKeys = await prisma.vpnKey.findMany()
     * 
     * // Get first 10 VpnKeys
     * const vpnKeys = await prisma.vpnKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vpnKeyWithIdOnly = await prisma.vpnKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VpnKeyFindManyArgs>(args?: SelectSubset<T, VpnKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VpnKey.
     * @param {VpnKeyCreateArgs} args - Arguments to create a VpnKey.
     * @example
     * // Create one VpnKey
     * const VpnKey = await prisma.vpnKey.create({
     *   data: {
     *     // ... data to create a VpnKey
     *   }
     * })
     * 
     */
    create<T extends VpnKeyCreateArgs>(args: SelectSubset<T, VpnKeyCreateArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VpnKeys.
     * @param {VpnKeyCreateManyArgs} args - Arguments to create many VpnKeys.
     * @example
     * // Create many VpnKeys
     * const vpnKey = await prisma.vpnKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VpnKeyCreateManyArgs>(args?: SelectSubset<T, VpnKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VpnKeys and returns the data saved in the database.
     * @param {VpnKeyCreateManyAndReturnArgs} args - Arguments to create many VpnKeys.
     * @example
     * // Create many VpnKeys
     * const vpnKey = await prisma.vpnKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VpnKeys and only return the `id`
     * const vpnKeyWithIdOnly = await prisma.vpnKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VpnKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, VpnKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VpnKey.
     * @param {VpnKeyDeleteArgs} args - Arguments to delete one VpnKey.
     * @example
     * // Delete one VpnKey
     * const VpnKey = await prisma.vpnKey.delete({
     *   where: {
     *     // ... filter to delete one VpnKey
     *   }
     * })
     * 
     */
    delete<T extends VpnKeyDeleteArgs>(args: SelectSubset<T, VpnKeyDeleteArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VpnKey.
     * @param {VpnKeyUpdateArgs} args - Arguments to update one VpnKey.
     * @example
     * // Update one VpnKey
     * const vpnKey = await prisma.vpnKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VpnKeyUpdateArgs>(args: SelectSubset<T, VpnKeyUpdateArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VpnKeys.
     * @param {VpnKeyDeleteManyArgs} args - Arguments to filter VpnKeys to delete.
     * @example
     * // Delete a few VpnKeys
     * const { count } = await prisma.vpnKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VpnKeyDeleteManyArgs>(args?: SelectSubset<T, VpnKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VpnKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VpnKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VpnKeys
     * const vpnKey = await prisma.vpnKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VpnKeyUpdateManyArgs>(args: SelectSubset<T, VpnKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VpnKeys and returns the data updated in the database.
     * @param {VpnKeyUpdateManyAndReturnArgs} args - Arguments to update many VpnKeys.
     * @example
     * // Update many VpnKeys
     * const vpnKey = await prisma.vpnKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VpnKeys and only return the `id`
     * const vpnKeyWithIdOnly = await prisma.vpnKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VpnKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, VpnKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VpnKey.
     * @param {VpnKeyUpsertArgs} args - Arguments to update or create a VpnKey.
     * @example
     * // Update or create a VpnKey
     * const vpnKey = await prisma.vpnKey.upsert({
     *   create: {
     *     // ... data to create a VpnKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VpnKey we want to update
     *   }
     * })
     */
    upsert<T extends VpnKeyUpsertArgs>(args: SelectSubset<T, VpnKeyUpsertArgs<ExtArgs>>): Prisma__VpnKeyClient<$Result.GetResult<Prisma.$VpnKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VpnKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VpnKeyCountArgs} args - Arguments to filter VpnKeys to count.
     * @example
     * // Count the number of VpnKeys
     * const count = await prisma.vpnKey.count({
     *   where: {
     *     // ... the filter for the VpnKeys we want to count
     *   }
     * })
    **/
    count<T extends VpnKeyCountArgs>(
      args?: Subset<T, VpnKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VpnKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VpnKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VpnKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VpnKeyAggregateArgs>(args: Subset<T, VpnKeyAggregateArgs>): Prisma.PrismaPromise<GetVpnKeyAggregateType<T>>

    /**
     * Group by VpnKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VpnKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VpnKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VpnKeyGroupByArgs['orderBy'] }
        : { orderBy?: VpnKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VpnKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVpnKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VpnKey model
   */
  readonly fields: VpnKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VpnKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VpnKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    server<T extends ServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServerDefaultArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VpnKey model
   */
  interface VpnKeyFieldRefs {
    readonly id: FieldRef<"VpnKey", 'Int'>
    readonly subscriptionId: FieldRef<"VpnKey", 'Int'>
    readonly serverId: FieldRef<"VpnKey", 'Int'>
    readonly key: FieldRef<"VpnKey", 'String'>
    readonly status: FieldRef<"VpnKey", 'KeyStatus'>
    readonly serverName: FieldRef<"VpnKey", 'String'>
    readonly trafficLimit: FieldRef<"VpnKey", 'Int'>
    readonly usedTraffic: FieldRef<"VpnKey", 'Int'>
    readonly expiresAt: FieldRef<"VpnKey", 'DateTime'>
    readonly createdAt: FieldRef<"VpnKey", 'DateTime'>
    readonly updatedAt: FieldRef<"VpnKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VpnKey findUnique
   */
  export type VpnKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * Filter, which VpnKey to fetch.
     */
    where: VpnKeyWhereUniqueInput
  }

  /**
   * VpnKey findUniqueOrThrow
   */
  export type VpnKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * Filter, which VpnKey to fetch.
     */
    where: VpnKeyWhereUniqueInput
  }

  /**
   * VpnKey findFirst
   */
  export type VpnKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * Filter, which VpnKey to fetch.
     */
    where?: VpnKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VpnKeys to fetch.
     */
    orderBy?: VpnKeyOrderByWithRelationInput | VpnKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VpnKeys.
     */
    cursor?: VpnKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VpnKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VpnKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VpnKeys.
     */
    distinct?: VpnKeyScalarFieldEnum | VpnKeyScalarFieldEnum[]
  }

  /**
   * VpnKey findFirstOrThrow
   */
  export type VpnKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * Filter, which VpnKey to fetch.
     */
    where?: VpnKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VpnKeys to fetch.
     */
    orderBy?: VpnKeyOrderByWithRelationInput | VpnKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VpnKeys.
     */
    cursor?: VpnKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VpnKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VpnKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VpnKeys.
     */
    distinct?: VpnKeyScalarFieldEnum | VpnKeyScalarFieldEnum[]
  }

  /**
   * VpnKey findMany
   */
  export type VpnKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * Filter, which VpnKeys to fetch.
     */
    where?: VpnKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VpnKeys to fetch.
     */
    orderBy?: VpnKeyOrderByWithRelationInput | VpnKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VpnKeys.
     */
    cursor?: VpnKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VpnKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VpnKeys.
     */
    skip?: number
    distinct?: VpnKeyScalarFieldEnum | VpnKeyScalarFieldEnum[]
  }

  /**
   * VpnKey create
   */
  export type VpnKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a VpnKey.
     */
    data: XOR<VpnKeyCreateInput, VpnKeyUncheckedCreateInput>
  }

  /**
   * VpnKey createMany
   */
  export type VpnKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VpnKeys.
     */
    data: VpnKeyCreateManyInput | VpnKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VpnKey createManyAndReturn
   */
  export type VpnKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * The data used to create many VpnKeys.
     */
    data: VpnKeyCreateManyInput | VpnKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VpnKey update
   */
  export type VpnKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a VpnKey.
     */
    data: XOR<VpnKeyUpdateInput, VpnKeyUncheckedUpdateInput>
    /**
     * Choose, which VpnKey to update.
     */
    where: VpnKeyWhereUniqueInput
  }

  /**
   * VpnKey updateMany
   */
  export type VpnKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VpnKeys.
     */
    data: XOR<VpnKeyUpdateManyMutationInput, VpnKeyUncheckedUpdateManyInput>
    /**
     * Filter which VpnKeys to update
     */
    where?: VpnKeyWhereInput
    /**
     * Limit how many VpnKeys to update.
     */
    limit?: number
  }

  /**
   * VpnKey updateManyAndReturn
   */
  export type VpnKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * The data used to update VpnKeys.
     */
    data: XOR<VpnKeyUpdateManyMutationInput, VpnKeyUncheckedUpdateManyInput>
    /**
     * Filter which VpnKeys to update
     */
    where?: VpnKeyWhereInput
    /**
     * Limit how many VpnKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VpnKey upsert
   */
  export type VpnKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the VpnKey to update in case it exists.
     */
    where: VpnKeyWhereUniqueInput
    /**
     * In case the VpnKey found by the `where` argument doesn't exist, create a new VpnKey with this data.
     */
    create: XOR<VpnKeyCreateInput, VpnKeyUncheckedCreateInput>
    /**
     * In case the VpnKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VpnKeyUpdateInput, VpnKeyUncheckedUpdateInput>
  }

  /**
   * VpnKey delete
   */
  export type VpnKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
    /**
     * Filter which VpnKey to delete.
     */
    where: VpnKeyWhereUniqueInput
  }

  /**
   * VpnKey deleteMany
   */
  export type VpnKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VpnKeys to delete
     */
    where?: VpnKeyWhereInput
    /**
     * Limit how many VpnKeys to delete.
     */
    limit?: number
  }

  /**
   * VpnKey without action
   */
  export type VpnKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VpnKey
     */
    select?: VpnKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VpnKey
     */
    omit?: VpnKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VpnKeyInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    id: number | null
    price: number | null
    durationDays: number | null
    discountPrice: number | null
    discountValue: number | null
    discountPercentage: number | null
  }

  export type PlanSumAggregateOutputType = {
    id: number | null
    price: number | null
    durationDays: number | null
    discountPrice: number | null
    discountValue: number | null
    discountPercentage: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    durationDays: number | null
    discountPrice: number | null
    discountValue: number | null
    discountPercentage: number | null
    image: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    durationDays: number | null
    discountPrice: number | null
    discountValue: number | null
    discountPercentage: number | null
    image: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    durationDays: number
    discountPrice: number
    discountValue: number
    discountPercentage: number
    image: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    id?: true
    price?: true
    durationDays?: true
    discountPrice?: true
    discountValue?: true
    discountPercentage?: true
  }

  export type PlanSumAggregateInputType = {
    id?: true
    price?: true
    durationDays?: true
    discountPrice?: true
    discountValue?: true
    discountPercentage?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationDays?: true
    discountPrice?: true
    discountValue?: true
    discountPercentage?: true
    image?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationDays?: true
    discountPrice?: true
    discountValue?: true
    discountPercentage?: true
    image?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationDays?: true
    discountPrice?: true
    discountValue?: true
    discountPercentage?: true
    image?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: number
    name: string
    price: number
    durationDays: number
    discountPrice: number | null
    discountValue: number | null
    discountPercentage: number | null
    image: string | null
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    discountPrice?: boolean
    discountValue?: boolean
    discountPercentage?: boolean
    image?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | Plan$subscriptionArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    discountPrice?: boolean
    discountValue?: boolean
    discountPercentage?: boolean
    image?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    discountPrice?: boolean
    discountValue?: boolean
    discountPercentage?: boolean
    image?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    discountPrice?: boolean
    discountValue?: boolean
    discountPercentage?: boolean
    image?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "durationDays" | "discountPrice" | "discountValue" | "discountPercentage" | "image" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | Plan$subscriptionArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      durationDays: number
      discountPrice: number | null
      discountValue: number | null
      discountPercentage: number | null
      image: string | null
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends Plan$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'Int'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Int'>
    readonly durationDays: FieldRef<"Plan", 'Int'>
    readonly discountPrice: FieldRef<"Plan", 'Int'>
    readonly discountValue: FieldRef<"Plan", 'Int'>
    readonly discountPercentage: FieldRef<"Plan", 'Int'>
    readonly image: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly isActive: FieldRef<"Plan", 'Boolean'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.subscription
   */
  export type Plan$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    subcriptionId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    subcriptionId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    amount: number | null
    description: string | null
    subcriptionId: number | null
    status: $Enums.TransactionStatus | null
    type: $Enums.TransactionType | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    amount: number | null
    description: string | null
    subcriptionId: number | null
    status: $Enums.TransactionStatus | null
    type: $Enums.TransactionType | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    description: number
    subcriptionId: number
    status: number
    type: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    subcriptionId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    subcriptionId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    description?: true
    subcriptionId?: true
    status?: true
    type?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    description?: true
    subcriptionId?: true
    status?: true
    type?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    description?: true
    subcriptionId?: true
    status?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    userId: string
    amount: number
    description: string | null
    subcriptionId: number
    status: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    subcriptionId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    subcriptionId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    subcriptionId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    subcriptionId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "description" | "subcriptionId" | "status" | "type" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      amount: number
      description: string | null
      subcriptionId: number
      status: $Enums.TransactionStatus
      type: $Enums.TransactionType
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Int'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly subcriptionId: FieldRef<"Transaction", 'Int'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PromoCode
   */

  export type AggregatePromoCode = {
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  export type PromoCodeAvgAggregateOutputType = {
    id: number | null
    value: number | null
    maxUses: number | null
    usedCount: number | null
  }

  export type PromoCodeSumAggregateOutputType = {
    id: number | null
    value: number | null
    maxUses: number | null
    usedCount: number | null
  }

  export type PromoCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    value: number | null
    maxUses: number | null
    usedCount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromoCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    value: number | null
    maxUses: number | null
    usedCount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromoCodeCountAggregateOutputType = {
    id: number
    code: number
    value: number
    maxUses: number
    usedCount: number
    expiresAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromoCodeAvgAggregateInputType = {
    id?: true
    value?: true
    maxUses?: true
    usedCount?: true
  }

  export type PromoCodeSumAggregateInputType = {
    id?: true
    value?: true
    maxUses?: true
    usedCount?: true
  }

  export type PromoCodeMinAggregateInputType = {
    id?: true
    code?: true
    value?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromoCodeMaxAggregateInputType = {
    id?: true
    code?: true
    value?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromoCodeCountAggregateInputType = {
    id?: true
    code?: true
    value?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromoCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCode to aggregate.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromoCodes
    **/
    _count?: true | PromoCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoCodeMaxAggregateInputType
  }

  export type GetPromoCodeAggregateType<T extends PromoCodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePromoCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromoCode[P]>
      : GetScalarType<T[P], AggregatePromoCode[P]>
  }




  export type PromoCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoCodeWhereInput
    orderBy?: PromoCodeOrderByWithAggregationInput | PromoCodeOrderByWithAggregationInput[]
    by: PromoCodeScalarFieldEnum[] | PromoCodeScalarFieldEnum
    having?: PromoCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCodeCountAggregateInputType | true
    _avg?: PromoCodeAvgAggregateInputType
    _sum?: PromoCodeSumAggregateInputType
    _min?: PromoCodeMinAggregateInputType
    _max?: PromoCodeMaxAggregateInputType
  }

  export type PromoCodeGroupByOutputType = {
    id: number
    code: string
    value: number
    maxUses: number | null
    usedCount: number
    expiresAt: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  type GetPromoCodeGroupByPayload<T extends PromoCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
            : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
        }
      >
    >


  export type PromoCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redemptionsPromo?: boolean | PromoCode$redemptionsPromoArgs<ExtArgs>
    _count?: boolean | PromoCodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectScalar = {
    id?: boolean
    code?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromoCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "value" | "maxUses" | "usedCount" | "expiresAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["promoCode"]>
  export type PromoCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptionsPromo?: boolean | PromoCode$redemptionsPromoArgs<ExtArgs>
    _count?: boolean | PromoCodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromoCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromoCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromoCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromoCode"
    objects: {
      redemptionsPromo: Prisma.$RedemptionPromoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      value: number
      maxUses: number | null
      usedCount: number
      expiresAt: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promoCode"]>
    composites: {}
  }

  type PromoCodeGetPayload<S extends boolean | null | undefined | PromoCodeDefaultArgs> = $Result.GetResult<Prisma.$PromoCodePayload, S>

  type PromoCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCodeCountAggregateInputType | true
    }

  export interface PromoCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromoCode'], meta: { name: 'PromoCode' } }
    /**
     * Find zero or one PromoCode that matches the filter.
     * @param {PromoCodeFindUniqueArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoCodeFindUniqueArgs>(args: SelectSubset<T, PromoCodeFindUniqueArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromoCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoCodeFindUniqueOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoCodeFindFirstArgs>(args?: SelectSubset<T, PromoCodeFindFirstArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromoCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromoCodes
     * const promoCodes = await prisma.promoCode.findMany()
     * 
     * // Get first 10 PromoCodes
     * const promoCodes = await prisma.promoCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromoCodeFindManyArgs>(args?: SelectSubset<T, PromoCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromoCode.
     * @param {PromoCodeCreateArgs} args - Arguments to create a PromoCode.
     * @example
     * // Create one PromoCode
     * const PromoCode = await prisma.promoCode.create({
     *   data: {
     *     // ... data to create a PromoCode
     *   }
     * })
     * 
     */
    create<T extends PromoCodeCreateArgs>(args: SelectSubset<T, PromoCodeCreateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromoCodes.
     * @param {PromoCodeCreateManyArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCodeCreateManyArgs>(args?: SelectSubset<T, PromoCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromoCodes and returns the data saved in the database.
     * @param {PromoCodeCreateManyAndReturnArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromoCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, PromoCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromoCode.
     * @param {PromoCodeDeleteArgs} args - Arguments to delete one PromoCode.
     * @example
     * // Delete one PromoCode
     * const PromoCode = await prisma.promoCode.delete({
     *   where: {
     *     // ... filter to delete one PromoCode
     *   }
     * })
     * 
     */
    delete<T extends PromoCodeDeleteArgs>(args: SelectSubset<T, PromoCodeDeleteArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromoCode.
     * @param {PromoCodeUpdateArgs} args - Arguments to update one PromoCode.
     * @example
     * // Update one PromoCode
     * const promoCode = await prisma.promoCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoCodeUpdateArgs>(args: SelectSubset<T, PromoCodeUpdateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromoCodes.
     * @param {PromoCodeDeleteManyArgs} args - Arguments to filter PromoCodes to delete.
     * @example
     * // Delete a few PromoCodes
     * const { count } = await prisma.promoCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoCodeDeleteManyArgs>(args?: SelectSubset<T, PromoCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoCodeUpdateManyArgs>(args: SelectSubset<T, PromoCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes and returns the data updated in the database.
     * @param {PromoCodeUpdateManyAndReturnArgs} args - Arguments to update many PromoCodes.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromoCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, PromoCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromoCode.
     * @param {PromoCodeUpsertArgs} args - Arguments to update or create a PromoCode.
     * @example
     * // Update or create a PromoCode
     * const promoCode = await prisma.promoCode.upsert({
     *   create: {
     *     // ... data to create a PromoCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromoCode we want to update
     *   }
     * })
     */
    upsert<T extends PromoCodeUpsertArgs>(args: SelectSubset<T, PromoCodeUpsertArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeCountArgs} args - Arguments to filter PromoCodes to count.
     * @example
     * // Count the number of PromoCodes
     * const count = await prisma.promoCode.count({
     *   where: {
     *     // ... the filter for the PromoCodes we want to count
     *   }
     * })
    **/
    count<T extends PromoCodeCountArgs>(
      args?: Subset<T, PromoCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromoCodeAggregateArgs>(args: Subset<T, PromoCodeAggregateArgs>): Prisma.PrismaPromise<GetPromoCodeAggregateType<T>>

    /**
     * Group by PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromoCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoCodeGroupByArgs['orderBy'] }
        : { orderBy?: PromoCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromoCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromoCode model
   */
  readonly fields: PromoCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromoCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redemptionsPromo<T extends PromoCode$redemptionsPromoArgs<ExtArgs> = {}>(args?: Subset<T, PromoCode$redemptionsPromoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromoCode model
   */
  interface PromoCodeFieldRefs {
    readonly id: FieldRef<"PromoCode", 'Int'>
    readonly code: FieldRef<"PromoCode", 'String'>
    readonly value: FieldRef<"PromoCode", 'Int'>
    readonly maxUses: FieldRef<"PromoCode", 'Int'>
    readonly usedCount: FieldRef<"PromoCode", 'Int'>
    readonly expiresAt: FieldRef<"PromoCode", 'DateTime'>
    readonly isActive: FieldRef<"PromoCode", 'Boolean'>
    readonly createdAt: FieldRef<"PromoCode", 'DateTime'>
    readonly updatedAt: FieldRef<"PromoCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromoCode findUnique
   */
  export type PromoCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findUniqueOrThrow
   */
  export type PromoCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findFirst
   */
  export type PromoCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findFirstOrThrow
   */
  export type PromoCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findMany
   */
  export type PromoCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCodes to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode create
   */
  export type PromoCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a PromoCode.
     */
    data: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
  }

  /**
   * PromoCode createMany
   */
  export type PromoCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromoCode createManyAndReturn
   */
  export type PromoCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromoCode update
   */
  export type PromoCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a PromoCode.
     */
    data: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
    /**
     * Choose, which PromoCode to update.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode updateMany
   */
  export type PromoCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
  }

  /**
   * PromoCode updateManyAndReturn
   */
  export type PromoCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
  }

  /**
   * PromoCode upsert
   */
  export type PromoCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the PromoCode to update in case it exists.
     */
    where: PromoCodeWhereUniqueInput
    /**
     * In case the PromoCode found by the `where` argument doesn't exist, create a new PromoCode with this data.
     */
    create: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
    /**
     * In case the PromoCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
  }

  /**
   * PromoCode delete
   */
  export type PromoCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter which PromoCode to delete.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode deleteMany
   */
  export type PromoCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCodes to delete
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to delete.
     */
    limit?: number
  }

  /**
   * PromoCode.redemptionsPromo
   */
  export type PromoCode$redemptionsPromoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    where?: RedemptionPromoWhereInput
    orderBy?: RedemptionPromoOrderByWithRelationInput | RedemptionPromoOrderByWithRelationInput[]
    cursor?: RedemptionPromoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedemptionPromoScalarFieldEnum | RedemptionPromoScalarFieldEnum[]
  }

  /**
   * PromoCode without action
   */
  export type PromoCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
  }


  /**
   * Model RedemptionPromo
   */

  export type AggregateRedemptionPromo = {
    _count: RedemptionPromoCountAggregateOutputType | null
    _avg: RedemptionPromoAvgAggregateOutputType | null
    _sum: RedemptionPromoSumAggregateOutputType | null
    _min: RedemptionPromoMinAggregateOutputType | null
    _max: RedemptionPromoMaxAggregateOutputType | null
  }

  export type RedemptionPromoAvgAggregateOutputType = {
    id: number | null
    promoCodeId: number | null
  }

  export type RedemptionPromoSumAggregateOutputType = {
    id: number | null
    promoCodeId: number | null
  }

  export type RedemptionPromoMinAggregateOutputType = {
    id: number | null
    userId: string | null
    promoCodeId: number | null
    usedAt: Date | null
  }

  export type RedemptionPromoMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    promoCodeId: number | null
    usedAt: Date | null
  }

  export type RedemptionPromoCountAggregateOutputType = {
    id: number
    userId: number
    promoCodeId: number
    usedAt: number
    _all: number
  }


  export type RedemptionPromoAvgAggregateInputType = {
    id?: true
    promoCodeId?: true
  }

  export type RedemptionPromoSumAggregateInputType = {
    id?: true
    promoCodeId?: true
  }

  export type RedemptionPromoMinAggregateInputType = {
    id?: true
    userId?: true
    promoCodeId?: true
    usedAt?: true
  }

  export type RedemptionPromoMaxAggregateInputType = {
    id?: true
    userId?: true
    promoCodeId?: true
    usedAt?: true
  }

  export type RedemptionPromoCountAggregateInputType = {
    id?: true
    userId?: true
    promoCodeId?: true
    usedAt?: true
    _all?: true
  }

  export type RedemptionPromoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedemptionPromo to aggregate.
     */
    where?: RedemptionPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPromos to fetch.
     */
    orderBy?: RedemptionPromoOrderByWithRelationInput | RedemptionPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedemptionPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPromos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RedemptionPromos
    **/
    _count?: true | RedemptionPromoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedemptionPromoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedemptionPromoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedemptionPromoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedemptionPromoMaxAggregateInputType
  }

  export type GetRedemptionPromoAggregateType<T extends RedemptionPromoAggregateArgs> = {
        [P in keyof T & keyof AggregateRedemptionPromo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedemptionPromo[P]>
      : GetScalarType<T[P], AggregateRedemptionPromo[P]>
  }




  export type RedemptionPromoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionPromoWhereInput
    orderBy?: RedemptionPromoOrderByWithAggregationInput | RedemptionPromoOrderByWithAggregationInput[]
    by: RedemptionPromoScalarFieldEnum[] | RedemptionPromoScalarFieldEnum
    having?: RedemptionPromoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedemptionPromoCountAggregateInputType | true
    _avg?: RedemptionPromoAvgAggregateInputType
    _sum?: RedemptionPromoSumAggregateInputType
    _min?: RedemptionPromoMinAggregateInputType
    _max?: RedemptionPromoMaxAggregateInputType
  }

  export type RedemptionPromoGroupByOutputType = {
    id: number
    userId: string
    promoCodeId: number
    usedAt: Date
    _count: RedemptionPromoCountAggregateOutputType | null
    _avg: RedemptionPromoAvgAggregateOutputType | null
    _sum: RedemptionPromoSumAggregateOutputType | null
    _min: RedemptionPromoMinAggregateOutputType | null
    _max: RedemptionPromoMaxAggregateOutputType | null
  }

  type GetRedemptionPromoGroupByPayload<T extends RedemptionPromoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedemptionPromoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedemptionPromoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedemptionPromoGroupByOutputType[P]>
            : GetScalarType<T[P], RedemptionPromoGroupByOutputType[P]>
        }
      >
    >


  export type RedemptionPromoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    promoCodeId?: boolean
    usedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    promoCode?: boolean | PromoCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemptionPromo"]>

  export type RedemptionPromoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    promoCodeId?: boolean
    usedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    promoCode?: boolean | PromoCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemptionPromo"]>

  export type RedemptionPromoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    promoCodeId?: boolean
    usedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    promoCode?: boolean | PromoCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemptionPromo"]>

  export type RedemptionPromoSelectScalar = {
    id?: boolean
    userId?: boolean
    promoCodeId?: boolean
    usedAt?: boolean
  }

  export type RedemptionPromoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "promoCodeId" | "usedAt", ExtArgs["result"]["redemptionPromo"]>
  export type RedemptionPromoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    promoCode?: boolean | PromoCodeDefaultArgs<ExtArgs>
  }
  export type RedemptionPromoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    promoCode?: boolean | PromoCodeDefaultArgs<ExtArgs>
  }
  export type RedemptionPromoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    promoCode?: boolean | PromoCodeDefaultArgs<ExtArgs>
  }

  export type $RedemptionPromoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RedemptionPromo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      promoCode: Prisma.$PromoCodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      promoCodeId: number
      usedAt: Date
    }, ExtArgs["result"]["redemptionPromo"]>
    composites: {}
  }

  type RedemptionPromoGetPayload<S extends boolean | null | undefined | RedemptionPromoDefaultArgs> = $Result.GetResult<Prisma.$RedemptionPromoPayload, S>

  type RedemptionPromoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RedemptionPromoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RedemptionPromoCountAggregateInputType | true
    }

  export interface RedemptionPromoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RedemptionPromo'], meta: { name: 'RedemptionPromo' } }
    /**
     * Find zero or one RedemptionPromo that matches the filter.
     * @param {RedemptionPromoFindUniqueArgs} args - Arguments to find a RedemptionPromo
     * @example
     * // Get one RedemptionPromo
     * const redemptionPromo = await prisma.redemptionPromo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedemptionPromoFindUniqueArgs>(args: SelectSubset<T, RedemptionPromoFindUniqueArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RedemptionPromo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RedemptionPromoFindUniqueOrThrowArgs} args - Arguments to find a RedemptionPromo
     * @example
     * // Get one RedemptionPromo
     * const redemptionPromo = await prisma.redemptionPromo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedemptionPromoFindUniqueOrThrowArgs>(args: SelectSubset<T, RedemptionPromoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedemptionPromo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPromoFindFirstArgs} args - Arguments to find a RedemptionPromo
     * @example
     * // Get one RedemptionPromo
     * const redemptionPromo = await prisma.redemptionPromo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedemptionPromoFindFirstArgs>(args?: SelectSubset<T, RedemptionPromoFindFirstArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedemptionPromo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPromoFindFirstOrThrowArgs} args - Arguments to find a RedemptionPromo
     * @example
     * // Get one RedemptionPromo
     * const redemptionPromo = await prisma.redemptionPromo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedemptionPromoFindFirstOrThrowArgs>(args?: SelectSubset<T, RedemptionPromoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RedemptionPromos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPromoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RedemptionPromos
     * const redemptionPromos = await prisma.redemptionPromo.findMany()
     * 
     * // Get first 10 RedemptionPromos
     * const redemptionPromos = await prisma.redemptionPromo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redemptionPromoWithIdOnly = await prisma.redemptionPromo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RedemptionPromoFindManyArgs>(args?: SelectSubset<T, RedemptionPromoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RedemptionPromo.
     * @param {RedemptionPromoCreateArgs} args - Arguments to create a RedemptionPromo.
     * @example
     * // Create one RedemptionPromo
     * const RedemptionPromo = await prisma.redemptionPromo.create({
     *   data: {
     *     // ... data to create a RedemptionPromo
     *   }
     * })
     * 
     */
    create<T extends RedemptionPromoCreateArgs>(args: SelectSubset<T, RedemptionPromoCreateArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RedemptionPromos.
     * @param {RedemptionPromoCreateManyArgs} args - Arguments to create many RedemptionPromos.
     * @example
     * // Create many RedemptionPromos
     * const redemptionPromo = await prisma.redemptionPromo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedemptionPromoCreateManyArgs>(args?: SelectSubset<T, RedemptionPromoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RedemptionPromos and returns the data saved in the database.
     * @param {RedemptionPromoCreateManyAndReturnArgs} args - Arguments to create many RedemptionPromos.
     * @example
     * // Create many RedemptionPromos
     * const redemptionPromo = await prisma.redemptionPromo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RedemptionPromos and only return the `id`
     * const redemptionPromoWithIdOnly = await prisma.redemptionPromo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedemptionPromoCreateManyAndReturnArgs>(args?: SelectSubset<T, RedemptionPromoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RedemptionPromo.
     * @param {RedemptionPromoDeleteArgs} args - Arguments to delete one RedemptionPromo.
     * @example
     * // Delete one RedemptionPromo
     * const RedemptionPromo = await prisma.redemptionPromo.delete({
     *   where: {
     *     // ... filter to delete one RedemptionPromo
     *   }
     * })
     * 
     */
    delete<T extends RedemptionPromoDeleteArgs>(args: SelectSubset<T, RedemptionPromoDeleteArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RedemptionPromo.
     * @param {RedemptionPromoUpdateArgs} args - Arguments to update one RedemptionPromo.
     * @example
     * // Update one RedemptionPromo
     * const redemptionPromo = await prisma.redemptionPromo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedemptionPromoUpdateArgs>(args: SelectSubset<T, RedemptionPromoUpdateArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RedemptionPromos.
     * @param {RedemptionPromoDeleteManyArgs} args - Arguments to filter RedemptionPromos to delete.
     * @example
     * // Delete a few RedemptionPromos
     * const { count } = await prisma.redemptionPromo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedemptionPromoDeleteManyArgs>(args?: SelectSubset<T, RedemptionPromoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedemptionPromos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPromoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RedemptionPromos
     * const redemptionPromo = await prisma.redemptionPromo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedemptionPromoUpdateManyArgs>(args: SelectSubset<T, RedemptionPromoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedemptionPromos and returns the data updated in the database.
     * @param {RedemptionPromoUpdateManyAndReturnArgs} args - Arguments to update many RedemptionPromos.
     * @example
     * // Update many RedemptionPromos
     * const redemptionPromo = await prisma.redemptionPromo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RedemptionPromos and only return the `id`
     * const redemptionPromoWithIdOnly = await prisma.redemptionPromo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RedemptionPromoUpdateManyAndReturnArgs>(args: SelectSubset<T, RedemptionPromoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RedemptionPromo.
     * @param {RedemptionPromoUpsertArgs} args - Arguments to update or create a RedemptionPromo.
     * @example
     * // Update or create a RedemptionPromo
     * const redemptionPromo = await prisma.redemptionPromo.upsert({
     *   create: {
     *     // ... data to create a RedemptionPromo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RedemptionPromo we want to update
     *   }
     * })
     */
    upsert<T extends RedemptionPromoUpsertArgs>(args: SelectSubset<T, RedemptionPromoUpsertArgs<ExtArgs>>): Prisma__RedemptionPromoClient<$Result.GetResult<Prisma.$RedemptionPromoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RedemptionPromos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPromoCountArgs} args - Arguments to filter RedemptionPromos to count.
     * @example
     * // Count the number of RedemptionPromos
     * const count = await prisma.redemptionPromo.count({
     *   where: {
     *     // ... the filter for the RedemptionPromos we want to count
     *   }
     * })
    **/
    count<T extends RedemptionPromoCountArgs>(
      args?: Subset<T, RedemptionPromoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedemptionPromoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RedemptionPromo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPromoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RedemptionPromoAggregateArgs>(args: Subset<T, RedemptionPromoAggregateArgs>): Prisma.PrismaPromise<GetRedemptionPromoAggregateType<T>>

    /**
     * Group by RedemptionPromo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPromoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RedemptionPromoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedemptionPromoGroupByArgs['orderBy'] }
        : { orderBy?: RedemptionPromoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RedemptionPromoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemptionPromoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RedemptionPromo model
   */
  readonly fields: RedemptionPromoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RedemptionPromo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedemptionPromoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promoCode<T extends PromoCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromoCodeDefaultArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RedemptionPromo model
   */
  interface RedemptionPromoFieldRefs {
    readonly id: FieldRef<"RedemptionPromo", 'Int'>
    readonly userId: FieldRef<"RedemptionPromo", 'String'>
    readonly promoCodeId: FieldRef<"RedemptionPromo", 'Int'>
    readonly usedAt: FieldRef<"RedemptionPromo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RedemptionPromo findUnique
   */
  export type RedemptionPromoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPromo to fetch.
     */
    where: RedemptionPromoWhereUniqueInput
  }

  /**
   * RedemptionPromo findUniqueOrThrow
   */
  export type RedemptionPromoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPromo to fetch.
     */
    where: RedemptionPromoWhereUniqueInput
  }

  /**
   * RedemptionPromo findFirst
   */
  export type RedemptionPromoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPromo to fetch.
     */
    where?: RedemptionPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPromos to fetch.
     */
    orderBy?: RedemptionPromoOrderByWithRelationInput | RedemptionPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedemptionPromos.
     */
    cursor?: RedemptionPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPromos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedemptionPromos.
     */
    distinct?: RedemptionPromoScalarFieldEnum | RedemptionPromoScalarFieldEnum[]
  }

  /**
   * RedemptionPromo findFirstOrThrow
   */
  export type RedemptionPromoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPromo to fetch.
     */
    where?: RedemptionPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPromos to fetch.
     */
    orderBy?: RedemptionPromoOrderByWithRelationInput | RedemptionPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedemptionPromos.
     */
    cursor?: RedemptionPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPromos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedemptionPromos.
     */
    distinct?: RedemptionPromoScalarFieldEnum | RedemptionPromoScalarFieldEnum[]
  }

  /**
   * RedemptionPromo findMany
   */
  export type RedemptionPromoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPromos to fetch.
     */
    where?: RedemptionPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPromos to fetch.
     */
    orderBy?: RedemptionPromoOrderByWithRelationInput | RedemptionPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RedemptionPromos.
     */
    cursor?: RedemptionPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPromos.
     */
    skip?: number
    distinct?: RedemptionPromoScalarFieldEnum | RedemptionPromoScalarFieldEnum[]
  }

  /**
   * RedemptionPromo create
   */
  export type RedemptionPromoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * The data needed to create a RedemptionPromo.
     */
    data: XOR<RedemptionPromoCreateInput, RedemptionPromoUncheckedCreateInput>
  }

  /**
   * RedemptionPromo createMany
   */
  export type RedemptionPromoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RedemptionPromos.
     */
    data: RedemptionPromoCreateManyInput | RedemptionPromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedemptionPromo createManyAndReturn
   */
  export type RedemptionPromoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * The data used to create many RedemptionPromos.
     */
    data: RedemptionPromoCreateManyInput | RedemptionPromoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RedemptionPromo update
   */
  export type RedemptionPromoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * The data needed to update a RedemptionPromo.
     */
    data: XOR<RedemptionPromoUpdateInput, RedemptionPromoUncheckedUpdateInput>
    /**
     * Choose, which RedemptionPromo to update.
     */
    where: RedemptionPromoWhereUniqueInput
  }

  /**
   * RedemptionPromo updateMany
   */
  export type RedemptionPromoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RedemptionPromos.
     */
    data: XOR<RedemptionPromoUpdateManyMutationInput, RedemptionPromoUncheckedUpdateManyInput>
    /**
     * Filter which RedemptionPromos to update
     */
    where?: RedemptionPromoWhereInput
    /**
     * Limit how many RedemptionPromos to update.
     */
    limit?: number
  }

  /**
   * RedemptionPromo updateManyAndReturn
   */
  export type RedemptionPromoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * The data used to update RedemptionPromos.
     */
    data: XOR<RedemptionPromoUpdateManyMutationInput, RedemptionPromoUncheckedUpdateManyInput>
    /**
     * Filter which RedemptionPromos to update
     */
    where?: RedemptionPromoWhereInput
    /**
     * Limit how many RedemptionPromos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RedemptionPromo upsert
   */
  export type RedemptionPromoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * The filter to search for the RedemptionPromo to update in case it exists.
     */
    where: RedemptionPromoWhereUniqueInput
    /**
     * In case the RedemptionPromo found by the `where` argument doesn't exist, create a new RedemptionPromo with this data.
     */
    create: XOR<RedemptionPromoCreateInput, RedemptionPromoUncheckedCreateInput>
    /**
     * In case the RedemptionPromo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedemptionPromoUpdateInput, RedemptionPromoUncheckedUpdateInput>
  }

  /**
   * RedemptionPromo delete
   */
  export type RedemptionPromoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
    /**
     * Filter which RedemptionPromo to delete.
     */
    where: RedemptionPromoWhereUniqueInput
  }

  /**
   * RedemptionPromo deleteMany
   */
  export type RedemptionPromoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedemptionPromos to delete
     */
    where?: RedemptionPromoWhereInput
    /**
     * Limit how many RedemptionPromos to delete.
     */
    limit?: number
  }

  /**
   * RedemptionPromo without action
   */
  export type RedemptionPromoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPromo
     */
    select?: RedemptionPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPromo
     */
    omit?: RedemptionPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPromoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isOnline: 'isOnline',
    ip: 'ip',
    port: 'port',
    password: 'password',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    username: 'username',
    role: 'role',
    agreedToTerms: 'agreedToTerms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bannedAt: 'bannedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const VpnKeyScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    serverId: 'serverId',
    key: 'key',
    status: 'status',
    serverName: 'serverName',
    trafficLimit: 'trafficLimit',
    usedTraffic: 'usedTraffic',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VpnKeyScalarFieldEnum = (typeof VpnKeyScalarFieldEnum)[keyof typeof VpnKeyScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    durationDays: 'durationDays',
    discountPrice: 'discountPrice',
    discountValue: 'discountValue',
    discountPercentage: 'discountPercentage',
    image: 'image',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    description: 'description',
    subcriptionId: 'subcriptionId',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PromoCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    value: 'value',
    maxUses: 'maxUses',
    usedCount: 'usedCount',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromoCodeScalarFieldEnum = (typeof PromoCodeScalarFieldEnum)[keyof typeof PromoCodeScalarFieldEnum]


  export const RedemptionPromoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    promoCodeId: 'promoCodeId',
    usedAt: 'usedAt'
  };

  export type RedemptionPromoScalarFieldEnum = (typeof RedemptionPromoScalarFieldEnum)[keyof typeof RedemptionPromoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'KeyStatus'
   */
  export type EnumKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KeyStatus'>
    


  /**
   * Reference to a field of type 'KeyStatus[]'
   */
  export type ListEnumKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KeyStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ServerWhereInput = {
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    id?: IntFilter<"Server"> | number
    name?: StringFilter<"Server"> | string
    isOnline?: BoolFilter<"Server"> | boolean
    ip?: StringNullableFilter<"Server"> | string | null
    port?: IntNullableFilter<"Server"> | number | null
    password?: StringNullableFilter<"Server"> | string | null
    country?: StringNullableFilter<"Server"> | string | null
    createdAt?: DateTimeFilter<"Server"> | Date | string
    updatedAt?: DateTimeFilter<"Server"> | Date | string
    vpnKey?: VpnKeyListRelationFilter
  }

  export type ServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isOnline?: SortOrder
    ip?: SortOrderInput | SortOrder
    port?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vpnKey?: VpnKeyOrderByRelationAggregateInput
  }

  export type ServerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    name?: StringFilter<"Server"> | string
    isOnline?: BoolFilter<"Server"> | boolean
    ip?: StringNullableFilter<"Server"> | string | null
    port?: IntNullableFilter<"Server"> | number | null
    password?: StringNullableFilter<"Server"> | string | null
    country?: StringNullableFilter<"Server"> | string | null
    createdAt?: DateTimeFilter<"Server"> | Date | string
    updatedAt?: DateTimeFilter<"Server"> | Date | string
    vpnKey?: VpnKeyListRelationFilter
  }, "id">

  export type ServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isOnline?: SortOrder
    ip?: SortOrderInput | SortOrder
    port?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServerCountOrderByAggregateInput
    _avg?: ServerAvgOrderByAggregateInput
    _max?: ServerMaxOrderByAggregateInput
    _min?: ServerMinOrderByAggregateInput
    _sum?: ServerSumOrderByAggregateInput
  }

  export type ServerScalarWhereWithAggregatesInput = {
    AND?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    OR?: ServerScalarWhereWithAggregatesInput[]
    NOT?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Server"> | number
    name?: StringWithAggregatesFilter<"Server"> | string
    isOnline?: BoolWithAggregatesFilter<"Server"> | boolean
    ip?: StringNullableWithAggregatesFilter<"Server"> | string | null
    port?: IntNullableWithAggregatesFilter<"Server"> | number | null
    password?: StringNullableWithAggregatesFilter<"Server"> | string | null
    country?: StringNullableWithAggregatesFilter<"Server"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Server"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Server"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    balance?: IntFilter<"User"> | number
    username?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    agreedToTerms?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bannedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: SubscriptionListRelationFilter
    transactions?: TransactionListRelationFilter
    redemptionsPromo?: RedemptionPromoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrderInput | SortOrder
    role?: SortOrder
    agreedToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bannedAt?: SortOrderInput | SortOrder
    subscription?: SubscriptionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    redemptionsPromo?: RedemptionPromoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    balance?: IntFilter<"User"> | number
    username?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    agreedToTerms?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bannedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: SubscriptionListRelationFilter
    transactions?: TransactionListRelationFilter
    redemptionsPromo?: RedemptionPromoListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrderInput | SortOrder
    role?: SortOrder
    agreedToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bannedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    balance?: IntWithAggregatesFilter<"User"> | number
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    agreedToTerms?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    bannedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    planId?: IntFilter<"Subscription"> | number
    isActive?: BoolFilter<"Subscription"> | boolean
    expiresAt?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vpnKey?: VpnKeyListRelationFilter
    transaction?: TransactionListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    vpnKey?: VpnKeyOrderByRelationAggregateInput
    transaction?: TransactionOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    planId?: IntFilter<"Subscription"> | number
    isActive?: BoolFilter<"Subscription"> | boolean
    expiresAt?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vpnKey?: VpnKeyListRelationFilter
    transaction?: TransactionListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: IntWithAggregatesFilter<"Subscription"> | number
    isActive?: BoolWithAggregatesFilter<"Subscription"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type VpnKeyWhereInput = {
    AND?: VpnKeyWhereInput | VpnKeyWhereInput[]
    OR?: VpnKeyWhereInput[]
    NOT?: VpnKeyWhereInput | VpnKeyWhereInput[]
    id?: IntFilter<"VpnKey"> | number
    subscriptionId?: IntFilter<"VpnKey"> | number
    serverId?: IntFilter<"VpnKey"> | number
    key?: StringFilter<"VpnKey"> | string
    status?: EnumKeyStatusFilter<"VpnKey"> | $Enums.KeyStatus
    serverName?: StringNullableFilter<"VpnKey"> | string | null
    trafficLimit?: IntNullableFilter<"VpnKey"> | number | null
    usedTraffic?: IntNullableFilter<"VpnKey"> | number | null
    expiresAt?: DateTimeNullableFilter<"VpnKey"> | Date | string | null
    createdAt?: DateTimeFilter<"VpnKey"> | Date | string
    updatedAt?: DateTimeNullableFilter<"VpnKey"> | Date | string | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    server?: XOR<ServerScalarRelationFilter, ServerWhereInput>
  }

  export type VpnKeyOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    serverId?: SortOrder
    key?: SortOrder
    status?: SortOrder
    serverName?: SortOrderInput | SortOrder
    trafficLimit?: SortOrderInput | SortOrder
    usedTraffic?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    server?: ServerOrderByWithRelationInput
  }

  export type VpnKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: VpnKeyWhereInput | VpnKeyWhereInput[]
    OR?: VpnKeyWhereInput[]
    NOT?: VpnKeyWhereInput | VpnKeyWhereInput[]
    subscriptionId?: IntFilter<"VpnKey"> | number
    serverId?: IntFilter<"VpnKey"> | number
    status?: EnumKeyStatusFilter<"VpnKey"> | $Enums.KeyStatus
    serverName?: StringNullableFilter<"VpnKey"> | string | null
    trafficLimit?: IntNullableFilter<"VpnKey"> | number | null
    usedTraffic?: IntNullableFilter<"VpnKey"> | number | null
    expiresAt?: DateTimeNullableFilter<"VpnKey"> | Date | string | null
    createdAt?: DateTimeFilter<"VpnKey"> | Date | string
    updatedAt?: DateTimeNullableFilter<"VpnKey"> | Date | string | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    server?: XOR<ServerScalarRelationFilter, ServerWhereInput>
  }, "id" | "key">

  export type VpnKeyOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    serverId?: SortOrder
    key?: SortOrder
    status?: SortOrder
    serverName?: SortOrderInput | SortOrder
    trafficLimit?: SortOrderInput | SortOrder
    usedTraffic?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VpnKeyCountOrderByAggregateInput
    _avg?: VpnKeyAvgOrderByAggregateInput
    _max?: VpnKeyMaxOrderByAggregateInput
    _min?: VpnKeyMinOrderByAggregateInput
    _sum?: VpnKeySumOrderByAggregateInput
  }

  export type VpnKeyScalarWhereWithAggregatesInput = {
    AND?: VpnKeyScalarWhereWithAggregatesInput | VpnKeyScalarWhereWithAggregatesInput[]
    OR?: VpnKeyScalarWhereWithAggregatesInput[]
    NOT?: VpnKeyScalarWhereWithAggregatesInput | VpnKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VpnKey"> | number
    subscriptionId?: IntWithAggregatesFilter<"VpnKey"> | number
    serverId?: IntWithAggregatesFilter<"VpnKey"> | number
    key?: StringWithAggregatesFilter<"VpnKey"> | string
    status?: EnumKeyStatusWithAggregatesFilter<"VpnKey"> | $Enums.KeyStatus
    serverName?: StringNullableWithAggregatesFilter<"VpnKey"> | string | null
    trafficLimit?: IntNullableWithAggregatesFilter<"VpnKey"> | number | null
    usedTraffic?: IntNullableWithAggregatesFilter<"VpnKey"> | number | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"VpnKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VpnKey"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"VpnKey"> | Date | string | null
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: IntFilter<"Plan"> | number
    name?: StringFilter<"Plan"> | string
    price?: IntFilter<"Plan"> | number
    durationDays?: IntFilter<"Plan"> | number
    discountPrice?: IntNullableFilter<"Plan"> | number | null
    discountValue?: IntNullableFilter<"Plan"> | number | null
    discountPercentage?: IntNullableFilter<"Plan"> | number | null
    image?: StringNullableFilter<"Plan"> | string | null
    description?: StringNullableFilter<"Plan"> | string | null
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    subscription?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    discountValue?: SortOrderInput | SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    subscription?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    price?: IntFilter<"Plan"> | number
    durationDays?: IntFilter<"Plan"> | number
    discountPrice?: IntNullableFilter<"Plan"> | number | null
    discountValue?: IntNullableFilter<"Plan"> | number | null
    discountPercentage?: IntNullableFilter<"Plan"> | number | null
    image?: StringNullableFilter<"Plan"> | string | null
    description?: StringNullableFilter<"Plan"> | string | null
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    subscription?: SubscriptionListRelationFilter
  }, "id" | "name">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    discountValue?: SortOrderInput | SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plan"> | number
    name?: StringWithAggregatesFilter<"Plan"> | string
    price?: IntWithAggregatesFilter<"Plan"> | number
    durationDays?: IntWithAggregatesFilter<"Plan"> | number
    discountPrice?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    discountValue?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    discountPercentage?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    image?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    isActive?: BoolWithAggregatesFilter<"Plan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Plan"> | Date | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    subcriptionId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    subcriptionId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    subcriptionId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    subcriptionId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: IntWithAggregatesFilter<"Transaction"> | number
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    subcriptionId?: IntWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PromoCodeWhereInput = {
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    id?: IntFilter<"PromoCode"> | number
    code?: StringFilter<"PromoCode"> | string
    value?: IntFilter<"PromoCode"> | number
    maxUses?: IntNullableFilter<"PromoCode"> | number | null
    usedCount?: IntFilter<"PromoCode"> | number
    expiresAt?: DateTimeNullableFilter<"PromoCode"> | Date | string | null
    isActive?: BoolFilter<"PromoCode"> | boolean
    createdAt?: DateTimeFilter<"PromoCode"> | Date | string
    updatedAt?: DateTimeFilter<"PromoCode"> | Date | string
    redemptionsPromo?: RedemptionPromoListRelationFilter
  }

  export type PromoCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redemptionsPromo?: RedemptionPromoOrderByRelationAggregateInput
  }

  export type PromoCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    value?: IntFilter<"PromoCode"> | number
    maxUses?: IntNullableFilter<"PromoCode"> | number | null
    usedCount?: IntFilter<"PromoCode"> | number
    expiresAt?: DateTimeNullableFilter<"PromoCode"> | Date | string | null
    isActive?: BoolFilter<"PromoCode"> | boolean
    createdAt?: DateTimeFilter<"PromoCode"> | Date | string
    updatedAt?: DateTimeFilter<"PromoCode"> | Date | string
    redemptionsPromo?: RedemptionPromoListRelationFilter
  }, "id" | "code">

  export type PromoCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromoCodeCountOrderByAggregateInput
    _avg?: PromoCodeAvgOrderByAggregateInput
    _max?: PromoCodeMaxOrderByAggregateInput
    _min?: PromoCodeMinOrderByAggregateInput
    _sum?: PromoCodeSumOrderByAggregateInput
  }

  export type PromoCodeScalarWhereWithAggregatesInput = {
    AND?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    OR?: PromoCodeScalarWhereWithAggregatesInput[]
    NOT?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PromoCode"> | number
    code?: StringWithAggregatesFilter<"PromoCode"> | string
    value?: IntWithAggregatesFilter<"PromoCode"> | number
    maxUses?: IntNullableWithAggregatesFilter<"PromoCode"> | number | null
    usedCount?: IntWithAggregatesFilter<"PromoCode"> | number
    expiresAt?: DateTimeNullableWithAggregatesFilter<"PromoCode"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"PromoCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PromoCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromoCode"> | Date | string
  }

  export type RedemptionPromoWhereInput = {
    AND?: RedemptionPromoWhereInput | RedemptionPromoWhereInput[]
    OR?: RedemptionPromoWhereInput[]
    NOT?: RedemptionPromoWhereInput | RedemptionPromoWhereInput[]
    id?: IntFilter<"RedemptionPromo"> | number
    userId?: StringFilter<"RedemptionPromo"> | string
    promoCodeId?: IntFilter<"RedemptionPromo"> | number
    usedAt?: DateTimeFilter<"RedemptionPromo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    promoCode?: XOR<PromoCodeScalarRelationFilter, PromoCodeWhereInput>
  }

  export type RedemptionPromoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    promoCodeId?: SortOrder
    usedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    promoCode?: PromoCodeOrderByWithRelationInput
  }

  export type RedemptionPromoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_promoCodeId?: RedemptionPromoUserIdPromoCodeIdCompoundUniqueInput
    AND?: RedemptionPromoWhereInput | RedemptionPromoWhereInput[]
    OR?: RedemptionPromoWhereInput[]
    NOT?: RedemptionPromoWhereInput | RedemptionPromoWhereInput[]
    userId?: StringFilter<"RedemptionPromo"> | string
    promoCodeId?: IntFilter<"RedemptionPromo"> | number
    usedAt?: DateTimeFilter<"RedemptionPromo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    promoCode?: XOR<PromoCodeScalarRelationFilter, PromoCodeWhereInput>
  }, "id" | "userId_promoCodeId">

  export type RedemptionPromoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    promoCodeId?: SortOrder
    usedAt?: SortOrder
    _count?: RedemptionPromoCountOrderByAggregateInput
    _avg?: RedemptionPromoAvgOrderByAggregateInput
    _max?: RedemptionPromoMaxOrderByAggregateInput
    _min?: RedemptionPromoMinOrderByAggregateInput
    _sum?: RedemptionPromoSumOrderByAggregateInput
  }

  export type RedemptionPromoScalarWhereWithAggregatesInput = {
    AND?: RedemptionPromoScalarWhereWithAggregatesInput | RedemptionPromoScalarWhereWithAggregatesInput[]
    OR?: RedemptionPromoScalarWhereWithAggregatesInput[]
    NOT?: RedemptionPromoScalarWhereWithAggregatesInput | RedemptionPromoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RedemptionPromo"> | number
    userId?: StringWithAggregatesFilter<"RedemptionPromo"> | string
    promoCodeId?: IntWithAggregatesFilter<"RedemptionPromo"> | number
    usedAt?: DateTimeWithAggregatesFilter<"RedemptionPromo"> | Date | string
  }

  export type ServerCreateInput = {
    name: string
    isOnline?: boolean
    ip?: string | null
    port?: number | null
    password?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vpnKey?: VpnKeyCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateInput = {
    id?: number
    name: string
    isOnline?: boolean
    ip?: string | null
    port?: number | null
    password?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vpnKey?: VpnKeyUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpnKey?: VpnKeyUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpnKey?: VpnKeyUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerCreateManyInput = {
    id?: number
    name: string
    isOnline?: boolean
    ip?: string | null
    port?: number | null
    password?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    redemptionsPromo?: RedemptionPromoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    redemptionsPromo?: RedemptionPromoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    redemptionsPromo?: RedemptionPromoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    redemptionsPromo?: RedemptionPromoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateInput = {
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionInput
    user: UserCreateNestedOneWithoutSubscriptionInput
    vpnKey?: VpnKeyCreateNestedManyWithoutSubscriptionInput
    transaction?: TransactionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    userId: string
    planId: number
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vpnKey?: VpnKeyUncheckedCreateNestedManyWithoutSubscriptionInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    vpnKey?: VpnKeyUpdateManyWithoutSubscriptionNestedInput
    transaction?: TransactionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpnKey?: VpnKeyUncheckedUpdateManyWithoutSubscriptionNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    userId: string
    planId: number
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VpnKeyCreateInput = {
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    subscription: SubscriptionCreateNestedOneWithoutVpnKeyInput
    server: ServerCreateNestedOneWithoutVpnKeyInput
  }

  export type VpnKeyUncheckedCreateInput = {
    id?: number
    subscriptionId: number
    serverId: number
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VpnKeyUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateOneRequiredWithoutVpnKeyNestedInput
    server?: ServerUpdateOneRequiredWithoutVpnKeyNestedInput
  }

  export type VpnKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VpnKeyCreateManyInput = {
    id?: number
    subscriptionId: number
    serverId: number
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VpnKeyUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VpnKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanCreateInput = {
    name: string
    price: number
    durationDays?: number
    discountPrice?: number | null
    discountValue?: number | null
    discountPercentage?: number | null
    image?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    durationDays?: number
    discountPrice?: number | null
    discountValue?: number | null
    discountPercentage?: number | null
    image?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    discountValue?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    discountValue?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: number
    name: string
    price: number
    durationDays?: number
    discountPrice?: number | null
    discountValue?: number | null
    discountPercentage?: number | null
    image?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    discountValue?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    discountValue?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateInput = {
    amount: number
    description?: string | null
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    subscription: SubscriptionCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    userId: string
    amount: number
    description?: string | null
    subcriptionId: number
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcriptionId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    userId: string
    amount: number
    description?: string | null
    subcriptionId: number
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcriptionId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeCreateInput = {
    code: string
    value: number
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    redemptionsPromo?: RedemptionPromoCreateNestedManyWithoutPromoCodeInput
  }

  export type PromoCodeUncheckedCreateInput = {
    id?: number
    code: string
    value: number
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    redemptionsPromo?: RedemptionPromoUncheckedCreateNestedManyWithoutPromoCodeInput
  }

  export type PromoCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redemptionsPromo?: RedemptionPromoUpdateManyWithoutPromoCodeNestedInput
  }

  export type PromoCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redemptionsPromo?: RedemptionPromoUncheckedUpdateManyWithoutPromoCodeNestedInput
  }

  export type PromoCodeCreateManyInput = {
    id?: number
    code: string
    value: number
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromoCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPromoCreateInput = {
    usedAt?: Date | string
    user: UserCreateNestedOneWithoutRedemptionsPromoInput
    promoCode: PromoCodeCreateNestedOneWithoutRedemptionsPromoInput
  }

  export type RedemptionPromoUncheckedCreateInput = {
    id?: number
    userId: string
    promoCodeId: number
    usedAt?: Date | string
  }

  export type RedemptionPromoUpdateInput = {
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRedemptionsPromoNestedInput
    promoCode?: PromoCodeUpdateOneRequiredWithoutRedemptionsPromoNestedInput
  }

  export type RedemptionPromoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    promoCodeId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPromoCreateManyInput = {
    id?: number
    userId: string
    promoCodeId: number
    usedAt?: Date | string
  }

  export type RedemptionPromoUpdateManyMutationInput = {
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPromoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    promoCodeId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VpnKeyListRelationFilter = {
    every?: VpnKeyWhereInput
    some?: VpnKeyWhereInput
    none?: VpnKeyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VpnKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isOnline?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    password?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type ServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isOnline?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    password?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isOnline?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    password?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type RedemptionPromoListRelationFilter = {
    every?: RedemptionPromoWhereInput
    some?: RedemptionPromoWhereInput
    none?: RedemptionPromoWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RedemptionPromoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    role?: SortOrder
    agreedToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bannedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    role?: SortOrder
    agreedToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bannedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    role?: SortOrder
    agreedToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bannedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
  }

  export type EnumKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusFilter<$PrismaModel> | $Enums.KeyStatus
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type ServerScalarRelationFilter = {
    is?: ServerWhereInput
    isNot?: ServerWhereInput
  }

  export type VpnKeyCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    serverId?: SortOrder
    key?: SortOrder
    status?: SortOrder
    serverName?: SortOrder
    trafficLimit?: SortOrder
    usedTraffic?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VpnKeyAvgOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    serverId?: SortOrder
    trafficLimit?: SortOrder
    usedTraffic?: SortOrder
  }

  export type VpnKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    serverId?: SortOrder
    key?: SortOrder
    status?: SortOrder
    serverName?: SortOrder
    trafficLimit?: SortOrder
    usedTraffic?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VpnKeyMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    serverId?: SortOrder
    key?: SortOrder
    status?: SortOrder
    serverName?: SortOrder
    trafficLimit?: SortOrder
    usedTraffic?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VpnKeySumOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    serverId?: SortOrder
    trafficLimit?: SortOrder
    usedTraffic?: SortOrder
  }

  export type EnumKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.KeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumKeyStatusFilter<$PrismaModel>
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    discountPrice?: SortOrder
    discountValue?: SortOrder
    discountPercentage?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    discountPrice?: SortOrder
    discountValue?: SortOrder
    discountPercentage?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    discountPrice?: SortOrder
    discountValue?: SortOrder
    discountPercentage?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    discountPrice?: SortOrder
    discountValue?: SortOrder
    discountPercentage?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    discountPrice?: SortOrder
    discountValue?: SortOrder
    discountPercentage?: SortOrder
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    subcriptionId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    subcriptionId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    subcriptionId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    subcriptionId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    subcriptionId?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type PromoCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type PromoCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoCodeSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type PromoCodeScalarRelationFilter = {
    is?: PromoCodeWhereInput
    isNot?: PromoCodeWhereInput
  }

  export type RedemptionPromoUserIdPromoCodeIdCompoundUniqueInput = {
    userId: string
    promoCodeId: number
  }

  export type RedemptionPromoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    promoCodeId?: SortOrder
    usedAt?: SortOrder
  }

  export type RedemptionPromoAvgOrderByAggregateInput = {
    id?: SortOrder
    promoCodeId?: SortOrder
  }

  export type RedemptionPromoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    promoCodeId?: SortOrder
    usedAt?: SortOrder
  }

  export type RedemptionPromoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    promoCodeId?: SortOrder
    usedAt?: SortOrder
  }

  export type RedemptionPromoSumOrderByAggregateInput = {
    id?: SortOrder
    promoCodeId?: SortOrder
  }

  export type VpnKeyCreateNestedManyWithoutServerInput = {
    create?: XOR<VpnKeyCreateWithoutServerInput, VpnKeyUncheckedCreateWithoutServerInput> | VpnKeyCreateWithoutServerInput[] | VpnKeyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutServerInput | VpnKeyCreateOrConnectWithoutServerInput[]
    createMany?: VpnKeyCreateManyServerInputEnvelope
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
  }

  export type VpnKeyUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<VpnKeyCreateWithoutServerInput, VpnKeyUncheckedCreateWithoutServerInput> | VpnKeyCreateWithoutServerInput[] | VpnKeyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutServerInput | VpnKeyCreateOrConnectWithoutServerInput[]
    createMany?: VpnKeyCreateManyServerInputEnvelope
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VpnKeyUpdateManyWithoutServerNestedInput = {
    create?: XOR<VpnKeyCreateWithoutServerInput, VpnKeyUncheckedCreateWithoutServerInput> | VpnKeyCreateWithoutServerInput[] | VpnKeyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutServerInput | VpnKeyCreateOrConnectWithoutServerInput[]
    upsert?: VpnKeyUpsertWithWhereUniqueWithoutServerInput | VpnKeyUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: VpnKeyCreateManyServerInputEnvelope
    set?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    disconnect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    delete?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    update?: VpnKeyUpdateWithWhereUniqueWithoutServerInput | VpnKeyUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: VpnKeyUpdateManyWithWhereWithoutServerInput | VpnKeyUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: VpnKeyScalarWhereInput | VpnKeyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VpnKeyUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<VpnKeyCreateWithoutServerInput, VpnKeyUncheckedCreateWithoutServerInput> | VpnKeyCreateWithoutServerInput[] | VpnKeyUncheckedCreateWithoutServerInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutServerInput | VpnKeyCreateOrConnectWithoutServerInput[]
    upsert?: VpnKeyUpsertWithWhereUniqueWithoutServerInput | VpnKeyUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: VpnKeyCreateManyServerInputEnvelope
    set?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    disconnect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    delete?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    update?: VpnKeyUpdateWithWhereUniqueWithoutServerInput | VpnKeyUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: VpnKeyUpdateManyWithWhereWithoutServerInput | VpnKeyUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: VpnKeyScalarWhereInput | VpnKeyScalarWhereInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RedemptionPromoCreateNestedManyWithoutUserInput = {
    create?: XOR<RedemptionPromoCreateWithoutUserInput, RedemptionPromoUncheckedCreateWithoutUserInput> | RedemptionPromoCreateWithoutUserInput[] | RedemptionPromoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutUserInput | RedemptionPromoCreateOrConnectWithoutUserInput[]
    createMany?: RedemptionPromoCreateManyUserInputEnvelope
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RedemptionPromoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RedemptionPromoCreateWithoutUserInput, RedemptionPromoUncheckedCreateWithoutUserInput> | RedemptionPromoCreateWithoutUserInput[] | RedemptionPromoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutUserInput | RedemptionPromoCreateOrConnectWithoutUserInput[]
    createMany?: RedemptionPromoCreateManyUserInputEnvelope
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RedemptionPromoUpdateManyWithoutUserNestedInput = {
    create?: XOR<RedemptionPromoCreateWithoutUserInput, RedemptionPromoUncheckedCreateWithoutUserInput> | RedemptionPromoCreateWithoutUserInput[] | RedemptionPromoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutUserInput | RedemptionPromoCreateOrConnectWithoutUserInput[]
    upsert?: RedemptionPromoUpsertWithWhereUniqueWithoutUserInput | RedemptionPromoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RedemptionPromoCreateManyUserInputEnvelope
    set?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    disconnect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    delete?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    update?: RedemptionPromoUpdateWithWhereUniqueWithoutUserInput | RedemptionPromoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RedemptionPromoUpdateManyWithWhereWithoutUserInput | RedemptionPromoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RedemptionPromoScalarWhereInput | RedemptionPromoScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RedemptionPromoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RedemptionPromoCreateWithoutUserInput, RedemptionPromoUncheckedCreateWithoutUserInput> | RedemptionPromoCreateWithoutUserInput[] | RedemptionPromoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutUserInput | RedemptionPromoCreateOrConnectWithoutUserInput[]
    upsert?: RedemptionPromoUpsertWithWhereUniqueWithoutUserInput | RedemptionPromoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RedemptionPromoCreateManyUserInputEnvelope
    set?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    disconnect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    delete?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    update?: RedemptionPromoUpdateWithWhereUniqueWithoutUserInput | RedemptionPromoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RedemptionPromoUpdateManyWithWhereWithoutUserInput | RedemptionPromoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RedemptionPromoScalarWhereInput | RedemptionPromoScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<PlanCreateWithoutSubscriptionInput, PlanUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionInput
    connect?: PlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type VpnKeyCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<VpnKeyCreateWithoutSubscriptionInput, VpnKeyUncheckedCreateWithoutSubscriptionInput> | VpnKeyCreateWithoutSubscriptionInput[] | VpnKeyUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutSubscriptionInput | VpnKeyCreateOrConnectWithoutSubscriptionInput[]
    createMany?: VpnKeyCreateManySubscriptionInputEnvelope
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<TransactionCreateWithoutSubscriptionInput, TransactionUncheckedCreateWithoutSubscriptionInput> | TransactionCreateWithoutSubscriptionInput[] | TransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubscriptionInput | TransactionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: TransactionCreateManySubscriptionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VpnKeyUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<VpnKeyCreateWithoutSubscriptionInput, VpnKeyUncheckedCreateWithoutSubscriptionInput> | VpnKeyCreateWithoutSubscriptionInput[] | VpnKeyUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutSubscriptionInput | VpnKeyCreateOrConnectWithoutSubscriptionInput[]
    createMany?: VpnKeyCreateManySubscriptionInputEnvelope
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<TransactionCreateWithoutSubscriptionInput, TransactionUncheckedCreateWithoutSubscriptionInput> | TransactionCreateWithoutSubscriptionInput[] | TransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubscriptionInput | TransactionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: TransactionCreateManySubscriptionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionInput, PlanUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionInput
    upsert?: PlanUpsertWithoutSubscriptionInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionInput, PlanUpdateWithoutSubscriptionInput>, PlanUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type VpnKeyUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<VpnKeyCreateWithoutSubscriptionInput, VpnKeyUncheckedCreateWithoutSubscriptionInput> | VpnKeyCreateWithoutSubscriptionInput[] | VpnKeyUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutSubscriptionInput | VpnKeyCreateOrConnectWithoutSubscriptionInput[]
    upsert?: VpnKeyUpsertWithWhereUniqueWithoutSubscriptionInput | VpnKeyUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: VpnKeyCreateManySubscriptionInputEnvelope
    set?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    disconnect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    delete?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    update?: VpnKeyUpdateWithWhereUniqueWithoutSubscriptionInput | VpnKeyUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: VpnKeyUpdateManyWithWhereWithoutSubscriptionInput | VpnKeyUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: VpnKeyScalarWhereInput | VpnKeyScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<TransactionCreateWithoutSubscriptionInput, TransactionUncheckedCreateWithoutSubscriptionInput> | TransactionCreateWithoutSubscriptionInput[] | TransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubscriptionInput | TransactionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSubscriptionInput | TransactionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: TransactionCreateManySubscriptionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSubscriptionInput | TransactionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSubscriptionInput | TransactionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VpnKeyUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<VpnKeyCreateWithoutSubscriptionInput, VpnKeyUncheckedCreateWithoutSubscriptionInput> | VpnKeyCreateWithoutSubscriptionInput[] | VpnKeyUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: VpnKeyCreateOrConnectWithoutSubscriptionInput | VpnKeyCreateOrConnectWithoutSubscriptionInput[]
    upsert?: VpnKeyUpsertWithWhereUniqueWithoutSubscriptionInput | VpnKeyUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: VpnKeyCreateManySubscriptionInputEnvelope
    set?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    disconnect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    delete?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    connect?: VpnKeyWhereUniqueInput | VpnKeyWhereUniqueInput[]
    update?: VpnKeyUpdateWithWhereUniqueWithoutSubscriptionInput | VpnKeyUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: VpnKeyUpdateManyWithWhereWithoutSubscriptionInput | VpnKeyUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: VpnKeyScalarWhereInput | VpnKeyScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<TransactionCreateWithoutSubscriptionInput, TransactionUncheckedCreateWithoutSubscriptionInput> | TransactionCreateWithoutSubscriptionInput[] | TransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubscriptionInput | TransactionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSubscriptionInput | TransactionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: TransactionCreateManySubscriptionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSubscriptionInput | TransactionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSubscriptionInput | TransactionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutVpnKeyInput = {
    create?: XOR<SubscriptionCreateWithoutVpnKeyInput, SubscriptionUncheckedCreateWithoutVpnKeyInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutVpnKeyInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ServerCreateNestedOneWithoutVpnKeyInput = {
    create?: XOR<ServerCreateWithoutVpnKeyInput, ServerUncheckedCreateWithoutVpnKeyInput>
    connectOrCreate?: ServerCreateOrConnectWithoutVpnKeyInput
    connect?: ServerWhereUniqueInput
  }

  export type EnumKeyStatusFieldUpdateOperationsInput = {
    set?: $Enums.KeyStatus
  }

  export type SubscriptionUpdateOneRequiredWithoutVpnKeyNestedInput = {
    create?: XOR<SubscriptionCreateWithoutVpnKeyInput, SubscriptionUncheckedCreateWithoutVpnKeyInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutVpnKeyInput
    upsert?: SubscriptionUpsertWithoutVpnKeyInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutVpnKeyInput, SubscriptionUpdateWithoutVpnKeyInput>, SubscriptionUncheckedUpdateWithoutVpnKeyInput>
  }

  export type ServerUpdateOneRequiredWithoutVpnKeyNestedInput = {
    create?: XOR<ServerCreateWithoutVpnKeyInput, ServerUncheckedCreateWithoutVpnKeyInput>
    connectOrCreate?: ServerCreateOrConnectWithoutVpnKeyInput
    upsert?: ServerUpsertWithoutVpnKeyInput
    connect?: ServerWhereUniqueInput
    update?: XOR<XOR<ServerUpdateToOneWithWhereWithoutVpnKeyInput, ServerUpdateWithoutVpnKeyInput>, ServerUncheckedUpdateWithoutVpnKeyInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<SubscriptionCreateWithoutTransactionInput, SubscriptionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTransactionInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type SubscriptionUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTransactionInput, SubscriptionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTransactionInput
    upsert?: SubscriptionUpsertWithoutTransactionInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutTransactionInput, SubscriptionUpdateWithoutTransactionInput>, SubscriptionUncheckedUpdateWithoutTransactionInput>
  }

  export type RedemptionPromoCreateNestedManyWithoutPromoCodeInput = {
    create?: XOR<RedemptionPromoCreateWithoutPromoCodeInput, RedemptionPromoUncheckedCreateWithoutPromoCodeInput> | RedemptionPromoCreateWithoutPromoCodeInput[] | RedemptionPromoUncheckedCreateWithoutPromoCodeInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutPromoCodeInput | RedemptionPromoCreateOrConnectWithoutPromoCodeInput[]
    createMany?: RedemptionPromoCreateManyPromoCodeInputEnvelope
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
  }

  export type RedemptionPromoUncheckedCreateNestedManyWithoutPromoCodeInput = {
    create?: XOR<RedemptionPromoCreateWithoutPromoCodeInput, RedemptionPromoUncheckedCreateWithoutPromoCodeInput> | RedemptionPromoCreateWithoutPromoCodeInput[] | RedemptionPromoUncheckedCreateWithoutPromoCodeInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutPromoCodeInput | RedemptionPromoCreateOrConnectWithoutPromoCodeInput[]
    createMany?: RedemptionPromoCreateManyPromoCodeInputEnvelope
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
  }

  export type RedemptionPromoUpdateManyWithoutPromoCodeNestedInput = {
    create?: XOR<RedemptionPromoCreateWithoutPromoCodeInput, RedemptionPromoUncheckedCreateWithoutPromoCodeInput> | RedemptionPromoCreateWithoutPromoCodeInput[] | RedemptionPromoUncheckedCreateWithoutPromoCodeInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutPromoCodeInput | RedemptionPromoCreateOrConnectWithoutPromoCodeInput[]
    upsert?: RedemptionPromoUpsertWithWhereUniqueWithoutPromoCodeInput | RedemptionPromoUpsertWithWhereUniqueWithoutPromoCodeInput[]
    createMany?: RedemptionPromoCreateManyPromoCodeInputEnvelope
    set?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    disconnect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    delete?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    update?: RedemptionPromoUpdateWithWhereUniqueWithoutPromoCodeInput | RedemptionPromoUpdateWithWhereUniqueWithoutPromoCodeInput[]
    updateMany?: RedemptionPromoUpdateManyWithWhereWithoutPromoCodeInput | RedemptionPromoUpdateManyWithWhereWithoutPromoCodeInput[]
    deleteMany?: RedemptionPromoScalarWhereInput | RedemptionPromoScalarWhereInput[]
  }

  export type RedemptionPromoUncheckedUpdateManyWithoutPromoCodeNestedInput = {
    create?: XOR<RedemptionPromoCreateWithoutPromoCodeInput, RedemptionPromoUncheckedCreateWithoutPromoCodeInput> | RedemptionPromoCreateWithoutPromoCodeInput[] | RedemptionPromoUncheckedCreateWithoutPromoCodeInput[]
    connectOrCreate?: RedemptionPromoCreateOrConnectWithoutPromoCodeInput | RedemptionPromoCreateOrConnectWithoutPromoCodeInput[]
    upsert?: RedemptionPromoUpsertWithWhereUniqueWithoutPromoCodeInput | RedemptionPromoUpsertWithWhereUniqueWithoutPromoCodeInput[]
    createMany?: RedemptionPromoCreateManyPromoCodeInputEnvelope
    set?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    disconnect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    delete?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    connect?: RedemptionPromoWhereUniqueInput | RedemptionPromoWhereUniqueInput[]
    update?: RedemptionPromoUpdateWithWhereUniqueWithoutPromoCodeInput | RedemptionPromoUpdateWithWhereUniqueWithoutPromoCodeInput[]
    updateMany?: RedemptionPromoUpdateManyWithWhereWithoutPromoCodeInput | RedemptionPromoUpdateManyWithWhereWithoutPromoCodeInput[]
    deleteMany?: RedemptionPromoScalarWhereInput | RedemptionPromoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRedemptionsPromoInput = {
    create?: XOR<UserCreateWithoutRedemptionsPromoInput, UserUncheckedCreateWithoutRedemptionsPromoInput>
    connectOrCreate?: UserCreateOrConnectWithoutRedemptionsPromoInput
    connect?: UserWhereUniqueInput
  }

  export type PromoCodeCreateNestedOneWithoutRedemptionsPromoInput = {
    create?: XOR<PromoCodeCreateWithoutRedemptionsPromoInput, PromoCodeUncheckedCreateWithoutRedemptionsPromoInput>
    connectOrCreate?: PromoCodeCreateOrConnectWithoutRedemptionsPromoInput
    connect?: PromoCodeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRedemptionsPromoNestedInput = {
    create?: XOR<UserCreateWithoutRedemptionsPromoInput, UserUncheckedCreateWithoutRedemptionsPromoInput>
    connectOrCreate?: UserCreateOrConnectWithoutRedemptionsPromoInput
    upsert?: UserUpsertWithoutRedemptionsPromoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRedemptionsPromoInput, UserUpdateWithoutRedemptionsPromoInput>, UserUncheckedUpdateWithoutRedemptionsPromoInput>
  }

  export type PromoCodeUpdateOneRequiredWithoutRedemptionsPromoNestedInput = {
    create?: XOR<PromoCodeCreateWithoutRedemptionsPromoInput, PromoCodeUncheckedCreateWithoutRedemptionsPromoInput>
    connectOrCreate?: PromoCodeCreateOrConnectWithoutRedemptionsPromoInput
    upsert?: PromoCodeUpsertWithoutRedemptionsPromoInput
    connect?: PromoCodeWhereUniqueInput
    update?: XOR<XOR<PromoCodeUpdateToOneWithWhereWithoutRedemptionsPromoInput, PromoCodeUpdateWithoutRedemptionsPromoInput>, PromoCodeUncheckedUpdateWithoutRedemptionsPromoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusFilter<$PrismaModel> | $Enums.KeyStatus
  }

  export type NestedEnumKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.KeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumKeyStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type VpnKeyCreateWithoutServerInput = {
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    subscription: SubscriptionCreateNestedOneWithoutVpnKeyInput
  }

  export type VpnKeyUncheckedCreateWithoutServerInput = {
    id?: number
    subscriptionId: number
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VpnKeyCreateOrConnectWithoutServerInput = {
    where: VpnKeyWhereUniqueInput
    create: XOR<VpnKeyCreateWithoutServerInput, VpnKeyUncheckedCreateWithoutServerInput>
  }

  export type VpnKeyCreateManyServerInputEnvelope = {
    data: VpnKeyCreateManyServerInput | VpnKeyCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type VpnKeyUpsertWithWhereUniqueWithoutServerInput = {
    where: VpnKeyWhereUniqueInput
    update: XOR<VpnKeyUpdateWithoutServerInput, VpnKeyUncheckedUpdateWithoutServerInput>
    create: XOR<VpnKeyCreateWithoutServerInput, VpnKeyUncheckedCreateWithoutServerInput>
  }

  export type VpnKeyUpdateWithWhereUniqueWithoutServerInput = {
    where: VpnKeyWhereUniqueInput
    data: XOR<VpnKeyUpdateWithoutServerInput, VpnKeyUncheckedUpdateWithoutServerInput>
  }

  export type VpnKeyUpdateManyWithWhereWithoutServerInput = {
    where: VpnKeyScalarWhereInput
    data: XOR<VpnKeyUpdateManyMutationInput, VpnKeyUncheckedUpdateManyWithoutServerInput>
  }

  export type VpnKeyScalarWhereInput = {
    AND?: VpnKeyScalarWhereInput | VpnKeyScalarWhereInput[]
    OR?: VpnKeyScalarWhereInput[]
    NOT?: VpnKeyScalarWhereInput | VpnKeyScalarWhereInput[]
    id?: IntFilter<"VpnKey"> | number
    subscriptionId?: IntFilter<"VpnKey"> | number
    serverId?: IntFilter<"VpnKey"> | number
    key?: StringFilter<"VpnKey"> | string
    status?: EnumKeyStatusFilter<"VpnKey"> | $Enums.KeyStatus
    serverName?: StringNullableFilter<"VpnKey"> | string | null
    trafficLimit?: IntNullableFilter<"VpnKey"> | number | null
    usedTraffic?: IntNullableFilter<"VpnKey"> | number | null
    expiresAt?: DateTimeNullableFilter<"VpnKey"> | Date | string | null
    createdAt?: DateTimeFilter<"VpnKey"> | Date | string
    updatedAt?: DateTimeNullableFilter<"VpnKey"> | Date | string | null
  }

  export type SubscriptionCreateWithoutUserInput = {
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionInput
    vpnKey?: VpnKeyCreateNestedManyWithoutSubscriptionInput
    transaction?: TransactionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    planId: number
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vpnKey?: VpnKeyUncheckedCreateNestedManyWithoutSubscriptionInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    amount: number
    description?: string | null
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    description?: string | null
    subcriptionId: number
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RedemptionPromoCreateWithoutUserInput = {
    usedAt?: Date | string
    promoCode: PromoCodeCreateNestedOneWithoutRedemptionsPromoInput
  }

  export type RedemptionPromoUncheckedCreateWithoutUserInput = {
    id?: number
    promoCodeId: number
    usedAt?: Date | string
  }

  export type RedemptionPromoCreateOrConnectWithoutUserInput = {
    where: RedemptionPromoWhereUniqueInput
    create: XOR<RedemptionPromoCreateWithoutUserInput, RedemptionPromoUncheckedCreateWithoutUserInput>
  }

  export type RedemptionPromoCreateManyUserInputEnvelope = {
    data: RedemptionPromoCreateManyUserInput | RedemptionPromoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    planId?: IntFilter<"Subscription"> | number
    isActive?: BoolFilter<"Subscription"> | boolean
    expiresAt?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    subcriptionId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type RedemptionPromoUpsertWithWhereUniqueWithoutUserInput = {
    where: RedemptionPromoWhereUniqueInput
    update: XOR<RedemptionPromoUpdateWithoutUserInput, RedemptionPromoUncheckedUpdateWithoutUserInput>
    create: XOR<RedemptionPromoCreateWithoutUserInput, RedemptionPromoUncheckedCreateWithoutUserInput>
  }

  export type RedemptionPromoUpdateWithWhereUniqueWithoutUserInput = {
    where: RedemptionPromoWhereUniqueInput
    data: XOR<RedemptionPromoUpdateWithoutUserInput, RedemptionPromoUncheckedUpdateWithoutUserInput>
  }

  export type RedemptionPromoUpdateManyWithWhereWithoutUserInput = {
    where: RedemptionPromoScalarWhereInput
    data: XOR<RedemptionPromoUpdateManyMutationInput, RedemptionPromoUncheckedUpdateManyWithoutUserInput>
  }

  export type RedemptionPromoScalarWhereInput = {
    AND?: RedemptionPromoScalarWhereInput | RedemptionPromoScalarWhereInput[]
    OR?: RedemptionPromoScalarWhereInput[]
    NOT?: RedemptionPromoScalarWhereInput | RedemptionPromoScalarWhereInput[]
    id?: IntFilter<"RedemptionPromo"> | number
    userId?: StringFilter<"RedemptionPromo"> | string
    promoCodeId?: IntFilter<"RedemptionPromo"> | number
    usedAt?: DateTimeFilter<"RedemptionPromo"> | Date | string
  }

  export type PlanCreateWithoutSubscriptionInput = {
    name: string
    price: number
    durationDays?: number
    discountPrice?: number | null
    discountValue?: number | null
    discountPercentage?: number | null
    image?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlanUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    name: string
    price: number
    durationDays?: number
    discountPrice?: number | null
    discountValue?: number | null
    discountPercentage?: number | null
    image?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlanCreateOrConnectWithoutSubscriptionInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionInput, PlanUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserCreateWithoutSubscriptionInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    redemptionsPromo?: RedemptionPromoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    redemptionsPromo?: RedemptionPromoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type VpnKeyCreateWithoutSubscriptionInput = {
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    server: ServerCreateNestedOneWithoutVpnKeyInput
  }

  export type VpnKeyUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    serverId: number
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VpnKeyCreateOrConnectWithoutSubscriptionInput = {
    where: VpnKeyWhereUniqueInput
    create: XOR<VpnKeyCreateWithoutSubscriptionInput, VpnKeyUncheckedCreateWithoutSubscriptionInput>
  }

  export type VpnKeyCreateManySubscriptionInputEnvelope = {
    data: VpnKeyCreateManySubscriptionInput | VpnKeyCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutSubscriptionInput = {
    amount: number
    description?: string | null
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    userId: string
    amount: number
    description?: string | null
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutSubscriptionInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSubscriptionInput, TransactionUncheckedCreateWithoutSubscriptionInput>
  }

  export type TransactionCreateManySubscriptionInputEnvelope = {
    data: TransactionCreateManySubscriptionInput | TransactionCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutSubscriptionInput = {
    update: XOR<PlanUpdateWithoutSubscriptionInput, PlanUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PlanCreateWithoutSubscriptionInput, PlanUncheckedCreateWithoutSubscriptionInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionInput, PlanUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PlanUpdateWithoutSubscriptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    discountValue?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    discountValue?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    redemptionsPromo?: RedemptionPromoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    redemptionsPromo?: RedemptionPromoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VpnKeyUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: VpnKeyWhereUniqueInput
    update: XOR<VpnKeyUpdateWithoutSubscriptionInput, VpnKeyUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<VpnKeyCreateWithoutSubscriptionInput, VpnKeyUncheckedCreateWithoutSubscriptionInput>
  }

  export type VpnKeyUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: VpnKeyWhereUniqueInput
    data: XOR<VpnKeyUpdateWithoutSubscriptionInput, VpnKeyUncheckedUpdateWithoutSubscriptionInput>
  }

  export type VpnKeyUpdateManyWithWhereWithoutSubscriptionInput = {
    where: VpnKeyScalarWhereInput
    data: XOR<VpnKeyUpdateManyMutationInput, VpnKeyUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSubscriptionInput, TransactionUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<TransactionCreateWithoutSubscriptionInput, TransactionUncheckedCreateWithoutSubscriptionInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSubscriptionInput, TransactionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSubscriptionInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionCreateWithoutVpnKeyInput = {
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionInput
    user: UserCreateNestedOneWithoutSubscriptionInput
    transaction?: TransactionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutVpnKeyInput = {
    id?: number
    userId: string
    planId: number
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutVpnKeyInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutVpnKeyInput, SubscriptionUncheckedCreateWithoutVpnKeyInput>
  }

  export type ServerCreateWithoutVpnKeyInput = {
    name: string
    isOnline?: boolean
    ip?: string | null
    port?: number | null
    password?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerUncheckedCreateWithoutVpnKeyInput = {
    id?: number
    name: string
    isOnline?: boolean
    ip?: string | null
    port?: number | null
    password?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerCreateOrConnectWithoutVpnKeyInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutVpnKeyInput, ServerUncheckedCreateWithoutVpnKeyInput>
  }

  export type SubscriptionUpsertWithoutVpnKeyInput = {
    update: XOR<SubscriptionUpdateWithoutVpnKeyInput, SubscriptionUncheckedUpdateWithoutVpnKeyInput>
    create: XOR<SubscriptionCreateWithoutVpnKeyInput, SubscriptionUncheckedCreateWithoutVpnKeyInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutVpnKeyInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutVpnKeyInput, SubscriptionUncheckedUpdateWithoutVpnKeyInput>
  }

  export type SubscriptionUpdateWithoutVpnKeyInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    transaction?: TransactionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutVpnKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type ServerUpsertWithoutVpnKeyInput = {
    update: XOR<ServerUpdateWithoutVpnKeyInput, ServerUncheckedUpdateWithoutVpnKeyInput>
    create: XOR<ServerCreateWithoutVpnKeyInput, ServerUncheckedCreateWithoutVpnKeyInput>
    where?: ServerWhereInput
  }

  export type ServerUpdateToOneWithWhereWithoutVpnKeyInput = {
    where?: ServerWhereInput
    data: XOR<ServerUpdateWithoutVpnKeyInput, ServerUncheckedUpdateWithoutVpnKeyInput>
  }

  export type ServerUpdateWithoutVpnKeyInput = {
    name?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUncheckedUpdateWithoutVpnKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateWithoutPlanInput = {
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    vpnKey?: VpnKeyCreateNestedManyWithoutSubscriptionInput
    transaction?: TransactionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: number
    userId: string
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vpnKey?: VpnKeyUncheckedCreateNestedManyWithoutSubscriptionInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    redemptionsPromo?: RedemptionPromoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    redemptionsPromo?: RedemptionPromoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type SubscriptionCreateWithoutTransactionInput = {
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionInput
    user: UserCreateNestedOneWithoutSubscriptionInput
    vpnKey?: VpnKeyCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutTransactionInput = {
    id?: number
    userId: string
    planId: number
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vpnKey?: VpnKeyUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutTransactionInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutTransactionInput, SubscriptionUncheckedCreateWithoutTransactionInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    redemptionsPromo?: RedemptionPromoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    redemptionsPromo?: RedemptionPromoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionUpsertWithoutTransactionInput = {
    update: XOR<SubscriptionUpdateWithoutTransactionInput, SubscriptionUncheckedUpdateWithoutTransactionInput>
    create: XOR<SubscriptionCreateWithoutTransactionInput, SubscriptionUncheckedCreateWithoutTransactionInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutTransactionInput, SubscriptionUncheckedUpdateWithoutTransactionInput>
  }

  export type SubscriptionUpdateWithoutTransactionInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    vpnKey?: VpnKeyUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpnKey?: VpnKeyUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type RedemptionPromoCreateWithoutPromoCodeInput = {
    usedAt?: Date | string
    user: UserCreateNestedOneWithoutRedemptionsPromoInput
  }

  export type RedemptionPromoUncheckedCreateWithoutPromoCodeInput = {
    id?: number
    userId: string
    usedAt?: Date | string
  }

  export type RedemptionPromoCreateOrConnectWithoutPromoCodeInput = {
    where: RedemptionPromoWhereUniqueInput
    create: XOR<RedemptionPromoCreateWithoutPromoCodeInput, RedemptionPromoUncheckedCreateWithoutPromoCodeInput>
  }

  export type RedemptionPromoCreateManyPromoCodeInputEnvelope = {
    data: RedemptionPromoCreateManyPromoCodeInput | RedemptionPromoCreateManyPromoCodeInput[]
    skipDuplicates?: boolean
  }

  export type RedemptionPromoUpsertWithWhereUniqueWithoutPromoCodeInput = {
    where: RedemptionPromoWhereUniqueInput
    update: XOR<RedemptionPromoUpdateWithoutPromoCodeInput, RedemptionPromoUncheckedUpdateWithoutPromoCodeInput>
    create: XOR<RedemptionPromoCreateWithoutPromoCodeInput, RedemptionPromoUncheckedCreateWithoutPromoCodeInput>
  }

  export type RedemptionPromoUpdateWithWhereUniqueWithoutPromoCodeInput = {
    where: RedemptionPromoWhereUniqueInput
    data: XOR<RedemptionPromoUpdateWithoutPromoCodeInput, RedemptionPromoUncheckedUpdateWithoutPromoCodeInput>
  }

  export type RedemptionPromoUpdateManyWithWhereWithoutPromoCodeInput = {
    where: RedemptionPromoScalarWhereInput
    data: XOR<RedemptionPromoUpdateManyMutationInput, RedemptionPromoUncheckedUpdateManyWithoutPromoCodeInput>
  }

  export type UserCreateWithoutRedemptionsPromoInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRedemptionsPromoInput = {
    id: string
    balance?: number
    username?: string | null
    role?: $Enums.UserRole
    agreedToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bannedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRedemptionsPromoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRedemptionsPromoInput, UserUncheckedCreateWithoutRedemptionsPromoInput>
  }

  export type PromoCodeCreateWithoutRedemptionsPromoInput = {
    code: string
    value: number
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromoCodeUncheckedCreateWithoutRedemptionsPromoInput = {
    id?: number
    code: string
    value: number
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromoCodeCreateOrConnectWithoutRedemptionsPromoInput = {
    where: PromoCodeWhereUniqueInput
    create: XOR<PromoCodeCreateWithoutRedemptionsPromoInput, PromoCodeUncheckedCreateWithoutRedemptionsPromoInput>
  }

  export type UserUpsertWithoutRedemptionsPromoInput = {
    update: XOR<UserUpdateWithoutRedemptionsPromoInput, UserUncheckedUpdateWithoutRedemptionsPromoInput>
    create: XOR<UserCreateWithoutRedemptionsPromoInput, UserUncheckedCreateWithoutRedemptionsPromoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRedemptionsPromoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRedemptionsPromoInput, UserUncheckedUpdateWithoutRedemptionsPromoInput>
  }

  export type UserUpdateWithoutRedemptionsPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRedemptionsPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PromoCodeUpsertWithoutRedemptionsPromoInput = {
    update: XOR<PromoCodeUpdateWithoutRedemptionsPromoInput, PromoCodeUncheckedUpdateWithoutRedemptionsPromoInput>
    create: XOR<PromoCodeCreateWithoutRedemptionsPromoInput, PromoCodeUncheckedCreateWithoutRedemptionsPromoInput>
    where?: PromoCodeWhereInput
  }

  export type PromoCodeUpdateToOneWithWhereWithoutRedemptionsPromoInput = {
    where?: PromoCodeWhereInput
    data: XOR<PromoCodeUpdateWithoutRedemptionsPromoInput, PromoCodeUncheckedUpdateWithoutRedemptionsPromoInput>
  }

  export type PromoCodeUpdateWithoutRedemptionsPromoInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUncheckedUpdateWithoutRedemptionsPromoInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VpnKeyCreateManyServerInput = {
    id?: number
    subscriptionId: number
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VpnKeyUpdateWithoutServerInput = {
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateOneRequiredWithoutVpnKeyNestedInput
  }

  export type VpnKeyUncheckedUpdateWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VpnKeyUncheckedUpdateManyWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateManyUserInput = {
    id?: number
    planId: number
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    amount: number
    description?: string | null
    subcriptionId: number
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type RedemptionPromoCreateManyUserInput = {
    id?: number
    promoCodeId: number
    usedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionNestedInput
    vpnKey?: VpnKeyUpdateManyWithoutSubscriptionNestedInput
    transaction?: TransactionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpnKey?: VpnKeyUncheckedUpdateManyWithoutSubscriptionNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcriptionId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcriptionId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPromoUpdateWithoutUserInput = {
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promoCode?: PromoCodeUpdateOneRequiredWithoutRedemptionsPromoNestedInput
  }

  export type RedemptionPromoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    promoCodeId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPromoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    promoCodeId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VpnKeyCreateManySubscriptionInput = {
    id?: number
    serverId: number
    key: string
    status?: $Enums.KeyStatus
    serverName?: string | null
    trafficLimit?: number | null
    usedTraffic?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TransactionCreateManySubscriptionInput = {
    id?: number
    userId: string
    amount: number
    description?: string | null
    status?: $Enums.TransactionStatus
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type VpnKeyUpdateWithoutSubscriptionInput = {
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    server?: ServerUpdateOneRequiredWithoutVpnKeyNestedInput
  }

  export type VpnKeyUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VpnKeyUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    serverName?: NullableStringFieldUpdateOperationsInput | string | null
    trafficLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedTraffic?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutSubscriptionInput = {
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: number
    userId: string
    isActive?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    vpnKey?: VpnKeyUpdateManyWithoutSubscriptionNestedInput
    transaction?: TransactionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpnKey?: VpnKeyUncheckedUpdateManyWithoutSubscriptionNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPromoCreateManyPromoCodeInput = {
    id?: number
    userId: string
    usedAt?: Date | string
  }

  export type RedemptionPromoUpdateWithoutPromoCodeInput = {
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRedemptionsPromoNestedInput
  }

  export type RedemptionPromoUncheckedUpdateWithoutPromoCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPromoUncheckedUpdateManyWithoutPromoCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}