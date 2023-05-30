[@sbrow/strings](README.md) / Exports

# @sbrow/strings

## Table of contents

### Functions

- [afterFirst](modules.md#afterfirst)
- [afterFirstWord](modules.md#afterfirstword)
- [afterLast](modules.md#afterlast)
- [beforeFirst](modules.md#beforefirst)
- [beforeFirstWord](modules.md#beforefirstword)
- [endsWith](modules.md#endswith)
- [ltrim](modules.md#ltrim)
- [removeFirstWord](modules.md#removefirstword)
- [removeWordsFromBeginning](modules.md#removewordsfrombeginning)
- [rtrim](modules.md#rtrim)
- [shorten](modules.md#shorten)
- [shorterThan](modules.md#shorterthan)
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

### afterFirstWord

▸ **afterFirstWord**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/index.ts:34](https://github.com/sbrow/strings/blob/7b676b7/src/index.ts#L34)

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

### beforeFirst

▸ **beforeFirst**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

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

### beforeFirstWord

▸ **beforeFirstWord**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

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
| `P` | extends [str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [str: string]\> |
| `R` | extends `unknown` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [str: string \| typeof \_] |

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

### removeFirstWord

▸ **removeFirstWord**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/index.ts:35](https://github.com/sbrow/strings/blob/7b676b7/src/index.ts#L35)

___

### removeWordsFromBeginning

▸ **removeWordsFromBeginning**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

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
| `P` | extends [maxChars: number \| typeof \_, str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [maxChars: number, str: string]\> |
| `R` | extends `unknown` = `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [maxChars: number \| typeof \_, str: string \| typeof \_] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

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

### shorten

▸ **shorten**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

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
| `P` | extends [maxChars: number \| typeof \_, strategy: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [maxChars: number, strategy: any]\> |
| `R` | extends `unknown` = (`init`: `unknown`) => `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [maxChars: number \| typeof \_, strategy: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

[[Function]]

#### Defined in

node_modules/ts-toolbelt/out/Function/Curry.d.ts:77

___

### shorterThan

▸ **shorterThan**<`P`, `G`, `R`\>(`...p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

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
| `P` | extends [maxChars: number \| typeof \_, str: string \| typeof \_] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [maxChars: number, str: string]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [maxChars: number \| typeof \_, str: string \| typeof \_] |

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
