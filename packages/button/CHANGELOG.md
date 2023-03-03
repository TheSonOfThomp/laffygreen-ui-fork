# @leafygreen-ui/button

## 20.0.2

### Patch Changes

- Updated dependencies [5b036515]
- Updated dependencies [26e341a0]
  - @leafygreen-ui/palette@4.0.0
  - @leafygreen-ui/lib@10.2.2
  - @leafygreen-ui/tokens@2.0.1

## 20.0.1

### Patch Changes

- 82e320ed4: Add focus styles to to override any global button styles
- Updated dependencies [2e8a572db]
- Updated dependencies [4ccc353e7]
- Updated dependencies [4ccc353e7]
  - @leafygreen-ui/lib@10.2.1

## 20.0.0

### Major Changes

- 1cff328a3: No longer sets `pointer-events: "none"` when Button components are disabled.

### Patch Changes

- bf2fedf6d: Version bumps lib
- Updated dependencies [bf2fedf6d]
  - @leafygreen-ui/leafygreen-provider@3.1.1

## 19.0.4

### Patch Changes

- c82ed35d5: Removes `useUsingKeyboardContext` from component, in favor of `&:focus-visible`
- b24b21462: Storybook: Updates story files to be on par with existing mongodb.design examples
- Updated dependencies [741cdd408]
- Updated dependencies [b24b21462]
  - @leafygreen-ui/tokens@2.0.0
  - @leafygreen-ui/palette@3.4.7
  - @leafygreen-ui/ripple@1.1.8

## 19.0.3

### Patch Changes

- c7f7fff56: Refactors Button component internals
- Updated dependencies [703db871f]
  - @leafygreen-ui/palette@3.4.6

## 19.0.2

### Patch Changes

- b7f7a4c95: Updates package dependencies & devDependencies, and ensures each package is appropriately listed. Ensures `tsconfig` has no circular dependencies
- Updated dependencies [b7f7a4c95]
  - @leafygreen-ui/palette@3.4.5
  - @leafygreen-ui/ripple@1.1.7
  - @leafygreen-ui/tokens@1.4.1

## 19.0.1

### Patch Changes

- ed0e425e5: Adds `polished` as an explicit dependency
- ae5421cf6: Updates components to use internal transition tokens
- Updated dependencies [ae5421cf6]
- Updated dependencies [ae5421cf6]
  - @leafygreen-ui/tokens@1.4.0
  - @leafygreen-ui/ripple@1.1.6

## 19.0.0

### Patch Changes

- Updated dependencies [b9b09a86]
  - @leafygreen-ui/leafygreen-provider@3.1.0

## 18.0.0

### Major Changes

- f2d63a60: Removes leafygreen data attributes (prefixed with `data-leafygreen-ui-`), and replaces them with deterministic classNames (prefixed with `lg-ui-`)

### Patch Changes

- Updated dependencies [f2d63a60]
  - @leafygreen-ui/lib@10.0.0
  - @leafygreen-ui/leafygreen-provider@3.0.1

## 17.0.0

### Patch Changes

- 0b6435fa: Fixing bug where icon color was not changed when the Button was disabled
- Updated dependencies [e399f1b9]
- Updated dependencies [e399f1b9]
  - @leafygreen-ui/leafygreen-provider@3.0.0

## 16.1.1

### Patch Changes

- 24683433: - Remove an implicit dependency on `@emotion/react` fixing an issue where LG packages would not build if `@leafygreen/emotion@4.0.2` or greater was installed.
- Updated dependencies [24683433]
  - @leafygreen-ui/box@3.1.1
  - @leafygreen-ui/emotion@4.0.3
  - @leafygreen-ui/leafygreen-provider@2.3.5
  - @leafygreen-ui/lib@9.5.1
  - @leafygreen-ui/palette@3.4.4
  - @leafygreen-ui/ripple@1.1.5
  - @leafygreen-ui/tokens@1.3.4

## 16.1.0

### Minor Changes

- 3690df49: Updates TypeScript annotations, type structures and export format of some components

### Patch Changes

- 3690df49: Updates Storybook configs
- Updated dependencies [3690df49]
- Updated dependencies [3690df49]
- Updated dependencies [3690df49]
- Updated dependencies [3690df49]
- Updated dependencies [58a5a05e]
  - @leafygreen-ui/box@3.1.0
  - @leafygreen-ui/lib@9.5.0
  - @leafygreen-ui/emotion@4.0.2
  - @leafygreen-ui/leafygreen-provider@2.3.4
  - @leafygreen-ui/palette@3.4.3
  - @leafygreen-ui/ripple@1.1.4
  - @leafygreen-ui/tokens@1.3.3

## 16.0.3

### Patch Changes

- 8d7534e9: Adds `tsdoc.json` to published package files
- Updated dependencies [8d7534e9]
  - @leafygreen-ui/box@3.0.8
  - @leafygreen-ui/emotion@4.0.1
  - @leafygreen-ui/leafygreen-provider@2.3.3
  - @leafygreen-ui/lib@9.4.2
  - @leafygreen-ui/palette@3.4.2
  - @leafygreen-ui/ripple@1.1.3
  - @leafygreen-ui/tokens@1.3.2

## 16.0.2

### Patch Changes

- 22128084: Updates typing of `as` prop. Adds documentation to clarify the use of NextJS `Link` wrapper

## 16.0.1

### Patch Changes

- e9177e94: Updating a few colors
- Updated dependencies [30e038a3]
  - @leafygreen-ui/palette@3.4.1

## 16.0.0

### Patch Changes

- Updated dependencies [85d46871]
- Updated dependencies [99e20bb9]
  - @leafygreen-ui/lib@9.4.0
  - @leafygreen-ui/leafygreen-provider@2.3.0

## 15.0.2

### Patch Changes

- fd2f6de0: Updates to TSDocs, PropTypes, and Storybook files
- 8d12b918: Explicitly sets font colors for all variant hover/active states
- 86a7f3c3: Changing icon color when disabled
- Updated dependencies [6a89bc29]
- Updated dependencies [fd2f6de0]
- Updated dependencies [96d1ff9c]
- Updated dependencies [422dbfcd]
- Updated dependencies [9ff90d4b]
  - @leafygreen-ui/palette@3.4.0
  - @leafygreen-ui/box@3.0.7
  - @leafygreen-ui/tokens@1.3.1
  - @leafygreen-ui/lib@9.3.0

## 15.0.1

### Patch Changes

- 646c00f7: Changing Button's HTML element prop definitions from Pick<> to explicit definitions

## 15.0.0

### Major Changes

- Updated dependencies [c48e943e]
  - @leafygreen-ui/leafygreen-provider@2.2.0

### Patch Changes

- 3a14d852: Restoring as prop to Button component
- Updated dependencies [5f28fce1]
- Updated dependencies [c48e943e]
  - @leafygreen-ui/tokens@1.3.0

## 14.0.0

### Major Changes

- f3aad7e2: Updates Dark Mode Button for visual brand refresh

### Patch Changes

- c1f9c4d4: Disabling focus styles and ripple on disabled Buttons
- Updated dependencies [233ac580]
- Updated dependencies [ba4aab15]
- Updated dependencies [2cf1bc4a]
  - @leafygreen-ui/tokens@1.2.0
  - @leafygreen-ui/lib@9.2.1

## 13.0.1

### Patch Changes

- 686ecae: Disables `onClick` events when `as="a"` and `disabled={true}`

## 13.0.0

### Major Changes

- 8457f92: Updateslight mode Button in line with visual brand refresh

### Patch Changes

- Updated dependencies [8457f92]
  - @leafygreen-ui/tokens@1.0.0
- Updated dependencies [cb54eef]
  - @leafygreen-ui/palette@3.3.1

## 12.0.5

### Patch Changes

- 539fab10: Fixes a React console error when providing an onChange handler to a Radio Group

## 12.0.4

### Patch Changes

- 24930836: Fixes a bug where a disabled button with an `href` would still start navigation.
- Updated dependencies [f6e5655a]
- Updated dependencies [f6e5655a]
- Updated dependencies [b8f03aa1]
  - @leafygreen-ui/emotion@4.0.0
  - @leafygreen-ui/palette@3.2.2
  - @leafygreen-ui/lib@9.0.0
  - @leafygreen-ui/box@3.0.6
  - @leafygreen-ui/leafygreen-provider@2.1.3
  - @leafygreen-ui/tokens@0.5.3

## 12.0.3

### Patch Changes

- Updated dependencies [047c1930]
  - @leafygreen-ui/lib@8.0.0
  - @leafygreen-ui/box@3.0.5
  - @leafygreen-ui/leafygreen-provider@2.1.2
  - @leafygreen-ui/tokens@0.5.2

## 12.0.2

### Patch Changes

- dda5c8bb: Ensures that text is centered in buttons when no right glyph is present

## 12.0.1

### Patch Changes

- 54daf9a4: Add stronger overrides for color and text-decoration for hover and focus states in buttons

## 12.0.0

### Patch Changes

- Updated dependencies [857a680a]
  - @leafygreen-ui/leafygreen-provider@2.1.0

## 11.0.4

### Patch Changes

- 7c952eca: Fixes semantic HTML inside of Button to better support being a trigger for portaled components

## 11.0.3

### Patch Changes

- e2f7e6a4: Explicitly sets `color` property on focused buttons

## 11.0.2

### Patch Changes

- ab581f34: Re-released components that were erroneously released without `.d.ts` files
- Updated dependencies [ab581f34]
- Updated dependencies [90321b36]
  - @leafygreen-ui/palette@3.2.1
  - @leafygreen-ui/ripple@1.1.1
  - @leafygreen-ui/lib@7.0.0
  - @leafygreen-ui/box@3.0.4
  - @leafygreen-ui/leafygreen-provider@2.0.3
  - @leafygreen-ui/tokens@0.5.1

## 11.0.1

### Patch Changes

- e1b1293c: Adjusts padding for content alignment inside of Button

## 11.0.0

### Major Changes

- 65032024: - Redesign's the button component!
  - Improves accessibility of buttons for visually-impaired users.
  - Adds support for right-aligned glyphs.
  - Renames glyph prop to `leftGlyph`.

### Patch Changes

- Updated dependencies [65032024]
- Updated dependencies [65032024]
  - @leafygreen-ui/ripple@1.1.0
  - @leafygreen-ui/palette@3.2.0

## 10.0.2

### Patch Changes

- 1ed17f68: Updates lodash to 4.17.21, as there's a vulnerability in 4.17.20 that's been resolved in 4.17.21
- Updated dependencies [1ed17f68]
  - @leafygreen-ui/box@3.0.3

## 10.0.1

### Patch Changes

- 572ced14: Internal change that makes Button integrate better with components like Tooltip and Popover.
- 6e26200a: Small correction to border radius of the interaction ring for hover and focused states
- 78c60261: Fix regression where XSmall size button text was not all uppercased

## 10.0.0

### Major Changes

- 8b0ea602: Form-compatible components now display more visually consistent hover and focus states

### Minor Changes

- 8b0ea602: Added a `forceState` prop `Button` which can force enable or disable certain visual states

### Patch Changes

- Updated dependencies [8b0ea602]
  - @leafygreen-ui/interaction-ring@1.0.0

## 9.0.0

### Major Changes

- 10bdc295: Adjusts `large` Button height from 45px to 48px

### Patch Changes

- Updated dependencies [c9a0d89f]
- Updated dependencies [9ee1d5fc]
  - @leafygreen-ui/palette@3.1.0
  - @leafygreen-ui/lib@6.1.1
  - @leafygreen-ui/leafygreen-provider@2.0.2

## 8.0.1

### Patch Changes

- dac3f38b: Fixes a publishing error that prevented UMD modules from being distributed
- Updated dependencies [dac3f38b]
  - @leafygreen-ui/box@3.0.1
  - @leafygreen-ui/leafygreen-provider@2.0.1
  - @leafygreen-ui/lib@6.0.1
  - @leafygreen-ui/palette@3.0.1

## 8.0.0

### Major Changes

- 0267bfd2: The underlying structure of distributed module definition files have changed and now have official support for ES modules. Module definition files are now generated using Rollup instead of Webpack. This should not affect functionality, but some thorough testing and caution should be exercised when upgrading.

### Patch Changes

- Updated dependencies [0267bfd2]
  - @leafygreen-ui/box@3.0.0
  - @leafygreen-ui/icon@7.0.0
  - @leafygreen-ui/leafygreen-provider@2.0.0
  - @leafygreen-ui/lib@6.0.0
  - @leafygreen-ui/palette@3.0.0

## 7.0.1

### Patch Changes

- 47846c77: Fixes unintentional exclusion of `ref` from TypeScript typing of props for `Button`, `SubMenu`, and `MenuItem` components.

## 7.0.0

### Major Changes

- 6883ccd0: Moves `overflow` css rule to support the component's usage as a trigger for the Tooltip component

### Patch Changes

- d5d40791: Pin lodash version to latest to include fix for [prototype pollution attack vulnerability.](https://hackerone.com/reports/712065)
- Updated dependencies [6883ccd0]
- Updated dependencies [d5d40791]
  - @leafygreen-ui/icon@6.6.0
  - @leafygreen-ui/box@2.1.5

## 6.0.2

### Patch Changes

- 691eb05: Better support for UMD
- Updated dependencies [691eb05]
  - @leafygreen-ui/box@2.1.3
  - @leafygreen-ui/icon@6.3.2
  - @leafygreen-ui/leafygreen-provider@1.1.4
  - @leafygreen-ui/lib@5.1.1
  - @leafygreen-ui/palette@2.0.2

## 6.0.1

### Patch Changes

- f6e84ec: Fix type signature to not have `children` be a required prop

## 6.0.0

### Major Changes

- a571361: Updates Button CSS padding and flex properties for the span that wraps children.

### Patch Changes

- Updated dependencies [2eba736]
- Updated dependencies [1aa26ee]
- Updated dependencies [d2136a0]
- Updated dependencies [a571361]
  - @leafygreen-ui/lib@5.0.0
  - @leafygreen-ui/icon@6.3.0
  - @leafygreen-ui/box@2.1.2
  - @leafygreen-ui/leafygreen-provider@1.1.2

## 5.0.2

### Patch Changes

- e8f5376: Ensures that only props that are of type `string` are recognized as being passed to the `href` prop.
- Updated dependencies [e8f5376]
- Updated dependencies [4873650]
  - @leafygreen-ui/box@2.1.1
  - @leafygreen-ui/icon@6.2.0

## 5.0.1

### Patch Changes

- 0593116: Uses enhanced `ExtendableBox` type to set smarter default `as` component in `MenuItem` and `SubMenu`
- Updated dependencies [0593116]
  - @leafygreen-ui/box@2.1.0

## 5.0.0

### Major Changes

- 1d24966: Makes `@leafygreen-ui/leafygreen-provider` a peer dependency to ensure that components use hooks from the same version of the provider as what's installed.

## 4.2.5

### Patch Changes

- eba8391: Component now extends `Box` in order to enforce stronger typings
- Updated dependencies [eba8391]
- Updated dependencies [eba8391]
  - @leafygreen-ui/box@2.0.0
  - @leafygreen-ui/icon@6.1.1

## 4.2.4

### Patch Changes

- Updated dependencies [6fc022e]
  - @leafygreen-ui/icon@6.0.0

## 4.2.3

### Patch Changes

- 2a03117: Upgrades @testing-library/react to v10 and revises test suites to conform with new standards
- Updated dependencies [2a03117]
- Updated dependencies [c812eb3]
  - @leafygreen-ui/leafygreen-provider@1.1.1
  - @leafygreen-ui/icon@5.1.0

## 4.2.2

### Patch Changes

- 7d7e589: Sets text-align property to center

## 4.2.1

### Patch Changes

- 75c0693: Upgrades workspace dependencies
- Updated dependencies [75c0693]
  - @leafygreen-ui/icon@5.0.3
  - @leafygreen-ui/palette@2.0.1

## 4.2.0

### Minor Changes

- ebbac0e: Adds leafygreen-provider to Button component

### Patch Changes

- Updated dependencies [5aafd72]
- Updated dependencies [5aafd72]
  - @leafygreen-ui/icon@5.0.2
  - @leafygreen-ui/lib@4.4.1

## 4.1.1

### Patch Changes

- Updated dependencies [4c268a5]
  - @leafygreen-ui/icon@5.0.0

## 4.1.0

### Minor Changes

- b342448: Adds glyph prop to Button component

### Patch Changes

- ac5c473: Adds lodash as dependency

## 4.0.0

### Major Changes

- 464c09d: Introduces SSR compatibility though a change to our build process and files

### Patch Changes

- Updated dependencies [464c09d]
  - @leafygreen-ui/lib@4.0.0
  - @leafygreen-ui/palette@2.0.0

## 3.0.2

### Patch Changes

- f42801b: Fixes bug such that on hover, color is explicitly set rather than inherited

## 3.0.1

### Patch Changes

- ff55bb5: Adds fallback CSS for focus and hover states

## 3.0.0

### Major Changes

- 9c45cb4: Wraps component with `React.forwardRef` to provide direct access to the underlying element

### Patch Changes

- Updated dependencies [9c45cb4]
  - @leafygreen-ui/lib@3.1.0

## 2.3.7

### Patch Changes

- eb49b56: Fixes an issue where the children of Button had a `z-index` that was being applied in a global stacking context
