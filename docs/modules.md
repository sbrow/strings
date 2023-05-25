[@sbrow/strings](README.md) / Exports

# @sbrow/strings

## Table of contents

### Functions

- [afterFirst](modules.md#afterfirst)
- [afterLast](modules.md#afterlast)
- [endsWith](modules.md#endswith)
- [ltrim](modules.md#ltrim)
- [rtrim](modules.md#rtrim)
- [startsWith](modules.md#startswith)
- [trim](modules.md#trim)

## Functions

### afterFirst

▸ **afterFirst**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

Curry a [[Function]]

**`Example`**

```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [separator: string \| typeof \_, str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [separator: string, str: string]\> |
| `R` | extends `unknown` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [separator: string \| typeof \_, str: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77

___

### afterLast

▸ **afterLast**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

Curry a [[Function]]

**`Example`**

```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [separator: string \| typeof \_, str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [separator: string, str: string]\> |
| `R` | extends `unknown` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [separator: string \| typeof \_, str: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77

___

### endsWith

▸ **endsWith**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

Curry a [[Function]]

**`Example`**

```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [needle: string \| typeof \_, haystack: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [needle: string, haystack: string]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [needle: string \| typeof \_, haystack: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77

___

### ltrim

▸ **ltrim**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

Trims characters from the left side of a string.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [cutset: string \| typeof \_, str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [cutset: string, str: string]\> |
| `R` | extends `unknown` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [cutset: string \| typeof \_, str: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77

___

### rtrim

▸ **rtrim**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

Curry a [[Function]]

**`Example`**

```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [cutset: string \| typeof \_, str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [cutset: string, str: string]\> |
| `R` | extends `unknown` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [cutset: string \| typeof \_, str: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77

___

### startsWith

▸ **startsWith**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

Curry a [[Function]]

**`Example`**

```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [needle: string \| typeof \_, haystack: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [needle: string, haystack: string]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [needle: string \| typeof \_, haystack: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77

___

### trim

▸ **trim**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

Curry a [[Function]]

**`Example`**

```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [cutset: string \| typeof \_, str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [cutset: string, str: string]\> |
| `R` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [cutset: string \| typeof \_, str: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77
