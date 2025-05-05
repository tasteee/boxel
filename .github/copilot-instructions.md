Here is documentation about ark ui library for react:

# OVERVIEW

---

# Introduction

## Motivation

Most popular UI component libraries are designed to work with a specific JavaScript framework. Building UI components
that work across different JavaScript frameworks presents significant challenges for organizations working with diverse
technology stacks.

## Solution

Ark UI provides components for building complex, interactive, and accessible user interfaces across multiple JavaScript
frameworks. To achieve this, Ark UI is built on top of [Zag.js](https://zagjs.com), a UI component library powered by
Finite State Machines. Check out the architecture diagram below for a high-level overview.

<ThemeImage
  srcLight="https://ark-ui.com/images/architecture_light.svg"
  srcDark="https://ark-ui.com/images/architecture_dark.svg"
  alt="Shows the highlevel architecture"
  width="720"
  height="588"
/>

# Getting Started

## Quickstart

Running tight on schedule? No worries! Check out our quickstart examples to get started with Ark UI in seconds.

- [Next.js Template](https://stackblitz.com/edit/github-qcm2dskf)
- [Solid Start Template](https://stackblitz.com/edit/github-1hgkbbln)
- [Nuxt Template](https://stackblitz.com/edit/github-s3sg6syq)

## Setup Guide

<Steps>
<Step title="Prerequisite" number="1">

Before you start, ensure you have a proper project setup. If not, follow your preferred application framework setup
guide and then return to this guide.

</Step>
<Step title="Install Ark UI" number="2">

Install the Ark UI dependency using your preferred package manager.

```bash
npm install @ark-ui/react
// or
pnpm install @ark-ui/react
// or
yarn add @ark-ui/react
// or
bun add @ark-ui/react
```

</Step>
<Step number="3" title="Add a component">

In this guide, we will be adding a Slider component. Copy the following code to your project.

```tsx
import { Slider } from '@ark-ui/react/slider'

export const Basic = () => {
  return (
    <Slider.Root>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

</Step>

<Step number="4" title="Style a component">
Ark UI is a headless component library that doesn't include default styles.
You can leverage the `data-scope` and `data-part` attributes to style your components with custom CSS.

For example, to style a slider component, you can target its parts using these attributes:

```css
/* Targets the <Slider.Root /> */
[data-scope='slider'][data-part='root'] {
  display: flex;
  flex-direction: column;
}
```

Check out the [Styling Components guide](/react/docs/guides/styling) to learn more about styling components in Ark UI.

</Step>

<Step number="5" title="That's it">

Congratulations! You've successfully set up and styled your components using Ark UI. If you run into any issues or have
questions, open an issue on our [GitHub](https://github.com/chakra-ui/ark/issues/new/choose) or reach out on
[Discord](https://discord.gg/ww6HE5xaZ2).

Happy hacking! ✌️

</Step>
</Steps>

# Changelog

## [Unreleased]

## [5.8.0] - 2025-05-01

### Added

- **Date Picker**: Added support for `outsideDaySelectable` prop to allow selecting days outside the current month (on
  the same visible date range)

### Fixed

- **Collapsible**: Fixed issue in React.js <= v18.x where collapse animation might not work as expected

## [5.7.0] - 2025-04-25

### Added

- **[NEW] Listbox**: Introduced the `Listbox` component for selecting a single or multiple items from a list. See the
  [documentation](https://ark-ui.com/docs/components/listbox) for details.
- Improved support for grouping collection items. Check the `Listbox`, `Select` or `Combobox` documentation for more
  details.

### Changed

- Added `package.json` to `exports` for improved compatibility with tools like Vite.

## [5.6.0] - 2025-04-15

### Added

- **[NEW] AngleSlider**: Introduced the `AngleSlider` component for selecting an angle. See the
  [documentation](https://ark-ui.com/docs/components/angle-slider) for details.
- **[NEW] FloatingPanel**: Introduced the `FloatingPanel` component for creating floating windows. See the
  [documentation](https://ark-ui.com/docs/components/floating-panel) for details.
- **Toast**: Added toast queuing when the max limit is reached:
  - New toasts were queued instead of dropped
  - Queued toasts were shown when space became available
  - Queue cleared when all toasts were removed
- **Combobox**:
  - Fallbacked to the trigger element as the positioning anchor
  - Added `data-empty` attribute to indicate an empty listbox or content

## [5.5.0] - 2025-04-05

### Added

- **Presence**: Added support for skipping the initial animation when the component is mounted. This can be used in all
  disclosure components (e.g., `Dialog`, `DatePicker`, `Menu` etc).

### Fixed

- **Tabs**: Fixed issue where tabs indicator animation behaves inconsistently.

- **Date Picker**

  - Fixed issue where datepicker throws error when navigating month view.
  - Fixed issue where range selection doesn't reset correctly when clicking the same start date.

- **Disclosure Components**

  - Fixed issue where pointerdown outside doesn't work consistently on mobile devices.
  - Improved pointerdown outside click detection in shadow DOM environments.

## [5.4.0] - 2025-03-28

### Added

- **Slider**

  - Add support for `origin: end` to align the thumb to the end of the track.
  - Expose `thumbSize` as CSS variables in the root element. Can be useful for styling the slider.

- **Menu**

  - Added `onSelect` event to the `Menu.Item` component.

### Fixed

- Ensured each component's state machine starts before processing events.
- **HoverCard, ColorPicker**: Added missing `tabIndex` for better dialog support.
- **Menu**: Assigned unique IDs to menu items to improve accessibility and HTML validation.

## [5.3.1] - 2025-03-24

### Fixed

- Fixed an issue where a function was imported from a package that wasn't declared as a dependency.

## [5.3.0] - 2025-03-24

### Added

- **Collapsible**: Added an `Indicator` part to display whether the collapsible was open or closed.
- **ColorPicker**: Added support for formatting the `ValueText` component.

```tsx
<ColorPicker.ValueText format="hex" /> // #ff0000
```

### Fixed

- **Combobox**: Fixed an issue where `onOpenChange` was called with the same `open` value.
- **DownloadTrigger**: Added the missing `use client` directive.
- **Splitter**: Fixed an issue where `onResizeStart` and `onResizeEnd` callbacks weren't triggered during keyboard
  interactions.

## [5.2.0] - 2025-03-22

### Added

- **[NEW] DownloadTrigger**: Added Component for downloading a blob or file, whether retrieved synchronously or
  asynchronously.

```tsx
import { DownloadTrigger } from '@ark-ui/react/download-trigger'

export const DownloadImage = () => {
  async function fetchImage() {
    const response = await fetch('https://picsum.photos/200/300')
    return response.blob()
  }

  return (
    <DownloadTrigger data={fetchImage} fileName="avatar.jpeg" mimeType="image/jpeg">
      Download Image
    </DownloadTrigger>
  )
}
```

### Changed

- **NumberInput**: Set the default step to `0.01` when `formatOptions.style` was set to `percent`.
- **[Breaking] Splitter**: Redesigned splitter machine to support more use cases and improve DX. Check out the
  [Splitter](https://ark-ui.com/docs/components/splitter) documentation for more details.

### Fixed

- **Toast**: Fixed issue where setting `offsets` to `undefined` caused the machine to throw.
- **Select**: Fixed issue where select `valueAsString` lost reactivity.

## [5.1.0] - 2025-03-17

### Added

- Added support for a cleanup function in `ref`.

### Fixed

- **Field**: Exported the missing `useField` hook.
- **NumberInput**: `onValueChange` correctly received `valueAsNumber`.
- **Slider**: Thumbs initialized correctly when `min` was set to a non-zero value.

## [5.0.1] - 2025-03-11

### Fixed

- Effects now flush synchronously instead of using a microtask.
- **Checkbox**: `data-invalid` is no longer set when `invalid` is `false`.
- **Combobox**: Fixed unexpected cursor movement when editing input.
- **PinInput**: OTP SMS autofill now works as expected.
- **RatingGroup**: Fixed incorrect focus placement on the label.
- **TagsInput**: Improved caret detection to prevent unintended tag removal.
- **Timer**
  - Fixed slowdown when switching tabs/windows.
  - Changed default `interval` from `250` to `1000`.

## [5.0.0] - 2025-03-06

Ark UI just got a major performance boost! 🚀

### What’s new in v5?

- **Blazing-fast performance** – Every component runs smoother and renders faster.
- **Smaller bundle size** – Leaner components and adapters for a more efficient build.

We made this happen by using React’s native reactive primitives instead of external stores.

In our stress tests with **10,000 components**, Ark v5 delivered **1.5x–4x** better performance across the board.

![Performance comparison showing Ark v5 is 1.5x-4x faster than other libraries](./v5.svg)

### A quick note on tests

Most component updates are non-breaking, but due to this change, some tests may need adjustments. For example:

```jsx
// Before
it('should open by default', () => {
  render(<ComponentUnderTest defaultOpen />)
  expect(screen.getByRole('dialog')).toBeInTheDocument()
})

// After
it('should open by default', async () => {
  render(<ComponentUnderTest defaultOpen />)
  expect(await screen.findByRole('dialog')).toBeInTheDocument()
})
```

#### Added

- **Carousel**: ⚠️ Breaking change: Added required prop `slideCount` to `Carousel.Root` component.
- **Clipboard**: Added `onValueChange` and `defaultValue` props.
- **ColorPicker**: Added `defaultFormat` prop.
- **Combobox**: Added `defaultHighlightedValue` and `defaultInputValue` props.
- **DatePicker**: Added `defaultFocusedValue` prop, `getViewProps`, and `visibleRangeText`.
- **HoverCard**: Expanded interaction handlers.
- **Menu**: Added `defaultHighlightedValue` prop.
- **Pagination**: Added `defaultPageSize` prop.
- **PinInput**: Added `count` prop for better SSR aria-label.
- **Progress**: Added `locale` and `formatOptions` props.
- **QrCode**: Added `pixelSize` prop.
- **Select**: Added `defaultHighlightedValue` prop.
- **TagsInput**: Added `defaultInputValue` prop.
- **Toggle**: Reintroduced toggle machine.

#### Fixed

- **Accordion**: Fixed issue in Safari where clicking triggers didn't show content.
- **Avatar**: Fixed `api.setSrc` not working.
- **Carousel**: Fixed pagination sync and initial page issues.
- **File Upload**: Fixed drag-and-drop when `directory: true`.
- **Menu**: Fixed context menu positioning not updating on right-click.
- **Number Input**: Fixed `value` prop not being consumed.
- **Pin Input**: Fixed focus warnings and editing issues.
- **Progress**: Allowed more precise (decimal) values.
- **Radio Group, Switch**: Improved focus behavior in Safari.
- **Select**: Fixed regression where `multiple: true` didn't work.
- **Steps**: Ensured ARIA attributes use valid values and wrapped `<li>` elements correctly within `<ul>` or `<ol>`.
- **Textarea**: Fixed `ResizeObserver` warning.
- **Timer**: Fixed stopping issue when switching tabs; resolved issue where `action` prop was passed to `ActionTrigger`.
- **Toast**: Fixed keyboard navigation skipping close button.
- **Toggle Group**: Fixed `data-focus` not being removed on blur.

# Changelog

## [Unreleased]

## [5.8.0] - 2025-05-01

### Added

- **Date Picker**: Added support for `outsideDaySelectable` prop to allow selecting days outside the current month (on
  the same visible date range)

## [5.7.0] - 2025-04-25

### Added

- **[NEW] Listbox**: Introduced the `Listbox` component for selecting a single or multiple items from a list. See the
  [documentation](https://ark-ui.com/docs/components/listbox) for details.
- Improved support for grouping collection items. Check the `Listbox`, `Select` or `Combobox` documentation for more
  details.

### Changed

- Added `package.json` to `exports` for improved compatibility with tools like Vite.

## [5.6.0] - 2025-04-15

### Added

- **[NEW] AngleSlider**: Introduced the `AngleSlider` component for selecting an angle. See the
  [documentation](https://ark-ui.com/docs/components/angle-slider) for details.
- **[NEW] FloatingPanel**: Introduced the `FloatingPanel` component for creating floating windows. See the
  [documentation](https://ark-ui.com/docs/components/floating-panel) for details.
- **Toast**: Added toast queuing when the max limit is reached:
  - New toasts were queued instead of dropped
  - Queued toasts were shown when space became available
  - Queue cleared when all toasts were removed
- **Combobox**:
  - Fallbacked to the trigger element as the positioning anchor
  - Added `data-empty` attribute to indicate an empty listbox or content

## [5.5.0] - 2025-04-05

### Added

- **Presence**: Added support for skipping the initial animation when the component is mounted. This can be used in all
  disclosure components (e.g., `Dialog`, `DatePicker`, `Menu` etc).

### Fixed

- **Tabs**: Fixed issue where tabs indicator animation behaves inconsistently.

- **Date Picker**

  - Fixed issue where datepicker throws error when navigating month view.
  - Fixed issue where range selection doesn't reset correctly when clicking the same start date.

- **Disclosure Components**

  - Fixed issue where pointerdown outside doesn't work consistently on mobile devices.
  - Improved pointerdown outside click detection in shadow DOM environments.

## [5.4.0] - 2025-03-28

### Added

- **Slider**

  - Add support for `origin: end` to align the thumb to the end of the track.
  - Expose `thumbSize` as CSS variables in the root element. Can be useful for styling the slider.

- **Menu**

  - Added `onSelect` event to the `Menu.Item` component.

### Fixed

- Ensured each component's state machine starts before processing events.
- **HoverCard, ColorPicker**: Added missing `tabIndex` for better dialog support.
- **Menu**: Assigned unique IDs to menu items to improve accessibility and HTML validation.
- **DatePicker**: Improved reactivity of the `columns` prop in `DatePicker.Table`.
- **Field**: Improved reactivity of the `value` prop in `Field.Textarea`.
- **Toggle**: Improved reactivity of the `children` and `fallback` props in `Toggle.Indicator`.

## [5.3.1] - 2025-03-24

### Fixed

- Fixed an issue where a function was imported from a package that wasn't declared as a dependency.

## [5.3.0] - 2025-03-24

### Added

- **Collapsible**: Added an `Indicator` part to display whether the collapsible was open or closed.
- **ColorPicker**: Added support for formatting the `ValueText` component.

```tsx
<ColorPicker.ValueText format="hex" /> // #ff0000
```

### Fixed

- **Combobox**: Fixed an issue where `onOpenChange` was called with the same `open` value.
- **Splitter**: Fixed an issue where `onResizeStart` and `onResizeEnd` callbacks weren't triggered during keyboard
  interactions.

## [5.2.0] - 2025-03-22

### Added

- **[NEW] DownloadTrigger**: Added Component for downloading a blob or file, whether retrieved synchronously or
  asynchronously.

```tsx
import { DownloadTrigger } from '@ark-ui/solid/download-trigger'

export const DownloadImage = () => {
  async function fetchImage() {
    const response = await fetch('https://picsum.photos/200/300')
    return response.blob()
  }

  return (
    <DownloadTrigger data={fetchImage} fileName="avatar.jpeg" mimeType="image/jpeg">
      Download Image
    </DownloadTrigger>
  )
}
```

### Changed

- **NumberInput**: Set the default step to `0.01` when `formatOptions.style` was set to `percent`.
- **[Breaking] Splitter**: Redesigned splitter machine to support more use cases and improve DX. Check out the
  [Splitter](https://ark-ui.com/docs/components/splitter) documentation for more details.

### Fixed

- **Presence**: Fixed issue where `onExitComplete` was not being called.
- **Select**: Fixed issue where select `valueAsString` lost reactivity.
- **Toast**:
  - Fixed issue where setting `offsets` to `undefined` caused the machine to throw.
  - Fixed issue where `onExitComplete` was not being called.

## [5.1.1] - 2025-03-17

### Fixed

- **Field**: Exported the missing `useField` hook.
- **NumberInput**: `onValueChange` correctly received `valueAsNumber`.
- **Slider**: Thumbs initialized correctly when `min` was set to a non-zero value.

## [5.1.0] - 2025-03-11

### Added

- Implemented support for reactive props in `use-*.ts` functions.

  ```tsx
  const accordionProps = createMemo<UseAccordionProps>(() => ({
    multiple: true,
    value: value(),
    onValueChange: (e) => setValue(e.value)
  }))

  const accordion = useAccordion(accordionProps)
  ```

### Fixed

- **Checkbox**: `data-invalid` is no longer set when `invalid` is `false`.
- **Combobox**: Fixed unexpected cursor movement when editing input.
- **PinInput**: OTP SMS autofill now works as expected.
- **RatingGroup**: Fixed incorrect focus placement on the label.
- **TagsInput**: Improved caret detection to prevent unintended tag removal.
- **Timer**
  - Fixed slowdown when switching tabs/windows.
  - Changed default `interval` from `250` to `1000`.

## [5.0.0] - 2025-03-06

Ark UI just got a major performance boost! 🚀

### What’s new in v5?

- **Blazing-fast performance** – Every component runs smoother and renders faster.
- **Smaller bundle size** – Leaner components and adapters for a more efficient build.

We made this happen by using Solid's native reactive primitives instead of external stores.

In our stress tests with **10,000 components**, Ark v5 delivered **1.5x–4x** better performance across the board.

### A quick note on tests

Most component updates are non-breaking, but due to this change, some tests may need adjustments. For example:

```jsx
// Before
it('should open by default', () => {
  render(() => <ComponentUnderTest defaultOpen />)
  expect(screen.getByRole('dialog')).toBeInTheDocument()
})

// After
it('should open by default', async () => {
  render(() => <ComponentUnderTest defaultOpen />)
  expect(await screen.findByRole('dialog')).toBeInTheDocument()
})
```

#### Added

- **Carousel**: ⚠️ Breaking change: Added required prop `slideCount` to `Carousel.Root` component.
- **Clipboard**: Added `onValueChange` and `defaultValue` props.
- **ColorPicker**: Added `defaultFormat` prop.
- **Combobox**: Added `defaultHighlightedValue` and `defaultInputValue` props.
- **DatePicker**: Added `defaultFocusedValue` prop, `getViewProps`, and `visibleRangeText`.
- **HoverCard**: Expanded interaction handlers.
- **Menu**: Added `defaultHighlightedValue` prop.
- **Pagination**: Added `defaultPageSize` prop.
- **PinInput**: Added `count` prop for better SSR aria-label.
- **Progress**: Added `locale` and `formatOptions` props.
- **QrCode**: Added `pixelSize` prop.
- **Select**: Added `defaultHighlightedValue` prop.
- **TagsInput**: Added `defaultInputValue` prop.
- **Toggle**: Reintroduced toggle machine.

#### Fixed

- **Accordion**: Fixed issue in Safari where clicking triggers didn't show content.
- **Avatar**: Fixed `api.setSrc` not working.
- **Carousel**: Fixed pagination sync and initial page issues.
- **File Upload**: Fixed drag-and-drop when `directory: true`.
- **Menu**: Fixed context menu positioning not updating on right-click.
- **Number Input**: Fixed `value` prop not being consumed.
- **Pin Input**: Fixed focus warnings and editing issues.
- **Progress**: Allowed more precise (decimal) values.
- **Radio Group, Switch**: Improved focus behavior in Safari.
- **Select**: Fixed regression where `multiple: true` didn't work.
- **Steps**: Ensured ARIA attributes use valid values and wrapped `<li>` elements correctly within `<ul>` or `<ol>`.
- **Textarea**: Fixed `ResizeObserver` warning.
- **Timer**: Fixed stopping issue when switching tabs; resolved issue where `action` prop was passed to `ActionTrigger`.
- **Toast**: Fixed keyboard navigation skipping close button.
- **Toggle Group**: Fixed `data-focus` not being removed on blur.

# Changelog

## [Unreleased]

### Changed

- Replaced custom ID generator with `$props.id()` rune.

## [0.3.0] - 2025-01-08

- Added `Format` component.
- Added `Progress` component.

## [0.2.0] - 2024-12-12

## Added

- Added `Ark` factory component for `asChild` prop.
- Added `Environment` component.
- Added `Collection` helpers.
- Added `Timer` component.
- Added `Highlight` component.
- Added `QrCode` component.

## [0.1.0] - 2024-11-27

### Added

- Added `Avatar` component.

## [0.0.0] - 2024-11-27

# Changelog

## [Unreleased]

## [5.8.0] - 2025-05-01

### Added

- **Date Picker**: Added support for `outsideDaySelectable` prop to allow selecting days outside the current month (on
  the same visible date range)

## [5.7.0] - 2025-04-25

### Added

- **[NEW] Listbox**: Introduced the `Listbox` component for selecting a single or multiple items from a list. See the
  [documentation](https://ark-ui.com/docs/components/listbox) for details.
- Improved support for grouping collection items. Check the `Listbox`, `Select` or `Combobox` documentation for more
  details.

### Changed

- Added `package.json` to `exports` for improved compatibility with tools like Vite.

## [5.6.0] - 2025-04-15

### Added

- **[NEW] AngleSlider**: Introduced the `AngleSlider` component for selecting an angle. See the
  [documentation](https://ark-ui.com/docs/components/angle-slider) for details.
- **[NEW] FloatingPanel**: Introduced the `FloatingPanel` component for creating floating windows. See the
  [documentation](https://ark-ui.com/docs/components/floating-panel) for details.
- **Toast**: Added toast queuing when the max limit is reached:
  - New toasts were queued instead of dropped
  - Queued toasts were shown when space became available
  - Queue cleared when all toasts were removed
- **Combobox**:
  - Fallbacked to the trigger element as the positioning anchor
  - Added `data-empty` attribute to indicate an empty listbox or content

### Fixed

- **CheckboxGroup**: Fixed issue where `v-model` doesn't work as expected.

## [5.5.0] - 2025-04-05

### Added

- **Presence**: Added support for skipping the initial animation when the component is mounted. This can be used in all
  disclosure components (e.g., `Dialog`, `DatePicker`, `Menu` etc).

### Fixed

- **Tabs**: Fixed issue where tabs indicator animation behaves inconsistently.

- **Date Picker**

  - Fixed issue where datepicker throws error when navigating month view.
  - Fixed issue where range selection doesn't reset correctly when clicking the same start date.

- **Disclosure Components**

  - Fixed issue where pointerdown outside doesn't work consistently on mobile devices.
  - Improved pointerdown outside click detection in shadow DOM environments.

## [5.4.0] - 2025-03-28

### Added

- **Slider**

  - Add support for `origin: end` to align the thumb to the end of the track.
  - Expose `thumbSize` as CSS variables in the root element. Can be useful for styling the slider.

- **Menu**

  - Added `select` emit event to the `Menu.Item` component.

### Fixed

- Ensured each component's state machine starts before processing events.
- **HoverCard, ColorPicker**: Added missing `tabIndex` for better dialog support.
- **Menu**: Assigned unique IDs to menu items to improve accessibility and HTML validation.
- **Field**: Fixed `Textarea` to use `ark.textarea`, ensuring support for the `asChild` prop.

## [5.3.0] - 2025-03-24

### Added

- **Collapsible**: Added an `Indicator` part to display whether the collapsible was open or closed.
- **ColorPicker**: Added support for formatting the `ValueText` component.

```tsx
<ColorPicker.ValueText format="hex" /> // #ff0000
```

### Fixed

- **Combobox**: Fixed an issue where `onOpenChange` was called with the same `open` value.
- **Splitter**: Fixed an issue where `onResizeStart` and `onResizeEnd` callbacks weren't triggered during keyboard
  interactions.

## [5.2.0] - 2025-03-22

### Added

- **[NEW] DownloadTrigger**: Added Component for downloading a blob or file, whether retrieved synchronously or
  asynchronously.

```tsx
import { DownloadTrigger } from '@ark-ui/react/download-trigger'

export const DownloadImage = () => {
  async function fetchImage() {
    const response = await fetch('https://picsum.photos/200/300')
    return response.blob()
  }

  return (
    <DownloadTrigger data={fetchImage} fileName="avatar.jpeg" mimeType="image/jpeg">
      Download Image
    </DownloadTrigger>
  )
}
```

### Changed

- **NumberInput**: Set the default step to `0.01` when `formatOptions.style` was set to `percent`.
- **[Breaking] Splitter**: Redesigned splitter machine to support more use cases and improve DX. Check out the
  [Splitter](https://ark-ui.com/docs/components/splitter) documentation for more details.

### Fixed

- **Toast**: Fixed issue where setting `offsets` to `undefined` caused the machine to throw.
- **Select**: Fixed issue where select `valueAsString` lost reactivity.

## [5.1.1] - 2025-03-17

### Fixed

- **Field**: Exported the missing `useField` hook.
- **NumberInput**: `onValueChange` correctly received `valueAsNumber`.
- **Slider**: Thumbs initialized correctly when `min` was set to a non-zero value.

## [5.1.0] - 2025-03-11

### Added

- Implemented support for reactive props in `use-*.ts` functions.

```tsx
const value = ref(['React'])

const accordionProps = computed<UseAccordionProps>(() => ({
  multiple: true,
  value: value.value,
  onValueChange: (e) => (value.value = e.value)
}))

const accordion = useAccordion(accordionProps)
```

### Fixed

- **Checkbox**: `data-invalid` is no longer set when `invalid` is `false`.
- **Combobox**: Fixed unexpected cursor movement when editing input.
- **PinInput**: OTP SMS autofill now works as expected.
- **RatingGroup**: Fixed incorrect focus placement on the label.
- **TagsInput**: Improved caret detection to prevent unintended tag removal.
- **Timer**
  - Fixed slowdown when switching tabs/windows.
  - Changed default `interval` from `250` to `1000`.

## [5.0.2] - 2025-03-06

### Fixed

- **Steps**: Fixed issue where `Steps.X` namespace was not exported.

## [5.0.1] - 2025-03-06

Ark UI just got a major performance boost! 🚀

### What’s new in v5?

- **Blazing-fast performance** – Every component runs smoother and renders faster.
- **Smaller bundle size** – Leaner components and adapters for a more efficient build.

We made this happen by using Vue's native reactive primitives instead of external stores.

In our stress tests with **10,000 components**, Ark v5 delivered **1.5x–4x** better performance across the board.

### A quick note on tests

Most component updates are non-breaking, but due to this change, some tests may need adjustments. For example:

```jsx
// Before
it('should open by default', () => {
  render(ComponentUnderTest, {
    props: {
      defaultOpen: true
    }
  })
  expect(screen.getByRole('dialog')).toBeInTheDocument()
})

// After
it('should open by default', async () => {
  render(ComponentUnderTest, {
    props: {
      defaultOpen: true
    }
  })
  expect(await screen.findByRole('dialog')).toBeInTheDocument()
})
```

#### Added

- **Carousel**: ⚠️ Breaking change: Added required prop `slideCount` to `Carousel.Root` component.
- **Clipboard**: Added `onValueChange` and `defaultValue` props.
- **ColorPicker**: Added `defaultFormat` prop.
- **Combobox**: Added `defaultHighlightedValue` and `defaultInputValue` props.
- **DatePicker**: Added `defaultFocusedValue` prop, `getViewProps`, and `visibleRangeText`.
- **HoverCard**: Expanded interaction handlers.
- **Menu**: Added `defaultHighlightedValue` prop.
- **Pagination**: Added `defaultPageSize` prop.
- **PinInput**: Added `count` prop for better SSR aria-label.
- **Progress**: Added `locale` and `formatOptions` props.
- **QrCode**: Added `pixelSize` prop.
- **Select**: Added `defaultHighlightedValue` prop.
- **TagsInput**: Added `defaultInputValue` prop.
- **Toggle**: Reintroduced toggle machine.

#### Fixed

- **Accordion**: Fixed issue in Safari where clicking triggers didn't show content.
- **Avatar**: Fixed `api.setSrc` not working.
- **Carousel**: Fixed pagination sync and initial page issues.
- **File Upload**: Fixed drag-and-drop when `directory: true`.
- **Menu**: Fixed context menu positioning not updating on right-click.
- **Number Input**: Fixed `value` prop not being consumed.
- **Pin Input**: Fixed focus warnings and editing issues.
- **Progress**: Allowed more precise (decimal) values.
- **Radio Group, Switch**: Improved focus behavior in Safari.
- **Select**: Fixed regression where `multiple: true` didn't work.
- **Steps**: Ensured ARIA attributes use valid values and wrapped `<li>` elements correctly within `<ul>` or `<ol>`.
- **Textarea**: Fixed `ResizeObserver` warning.
- **Timer**: Fixed stopping issue when switching tabs; resolved issue where `action` prop was passed to `ActionTrigger`.
- **Toast**: Fixed keyboard navigation skipping close button.
- **Toggle Group**: Fixed `data-focus` not being removed on blur.

# About

## Acknowledgments

We are committed to open source and the power of collaboration. Our work has been inspired by numerous projects and
individuals who continually drive us to innovate and improve.

- [Zag.js](https://zagjs.com/) - The foundation of this project
- [Park UI](https://park-ui.com) - For providing the styled component demos featured in this project
- [Radix Vue](https://www.radix-vue.com/) - For `useForwardPropsEmits`, which we re-export to build closed Vue
  components

## License

This project is licensed under the terms of the [MIT license](https://github.com/chakra-ui/ark/blob/main/LICENSE).

# LLMs.txt

## What is LLMs.txt?

We support [LLMs.txt](https://llmstxt.org/) files for making the Ark UI documentation available to large language models
(LLMs). This feature helps AI tools better understand our component library, its APIs, and usage patterns.

## Available Routes

We provide several LLMs.txt routes to help AI tools access our documentation:

- [llms.txt](https://ark-ui.com/llms.txt) - Contains a structured overview of all components and their documentation
  links
- [llms-full.txt](https://ark-ui.com/llms-full.txt) - Provides comprehensive documentation including implementation
  details and examples
- [llms-react.txt](https://ark-ui.com/llms-react.txt) - React-specific documentation and implementation details
- [llms-solid.txt](https://ark-ui.com/llms-solid.txt) - SolidJS-specific documentation and implementation details
- [llms-vue.txt](https://ark-ui.com/llms-vue.txt) - Vue-specific documentation and implementation details
- [llms-svelte.txt](https://ark-ui.com/llms-svelte.txt) - Svelte-specific documentation and implementation details

## Usage with AI Tools

### Cursor

Use the `@Docs` feature in Cursor to include the LLMs.txt files in your project. This helps Cursor provide more accurate
code suggestions and documentation for Ark UI components.

[Read more about @Docs in Cursor](https://docs.cursor.com/context/@-symbols/@-docs)

### Windstatic

Reference the LLMs.txt files using `@` or in your `.windsurfrules` files to enhance Windstatic's understanding of Ark UI
components.

[Read more about Windstatic Memories](https://docs.codeium.com/windsurf/memories#memories-and-rules)

### Other AI Tools

Any AI tool that supports LLMs.txt can use these routes to better understand Ark UI. Simply point your tool to any of
the routes above based on your framework of choice.

# GUIDES

---

# Animation

Adding animation to Ark UI Components is as straightforward as with any other component, but keep in mind some
considerations when working with exit animations with JavaScript animation libraries.

## Animating with CSS

The most straightforward method to animate your elements is using CSS. You can animate both the mounting and unmounting
phases with CSS. The latter is achievable because Ark UI Components postpones the unmounting while your animation runs.

Below is a simple example of creating a fade-in and fade-out animation using CSS keyframes:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

You can use these keyframes to animate any element during its lifecycle. For instance, to apply the `fadeIn` animation
when your `Tooltip` enters the 'open' state, and `fadeOut` when it enters the 'closed' state, you could use the
following styles:

```css
[data-scope='tooltip'][data-part='content'][data-state='open'] {
  animation: fadeIn 300ms ease-out;
}

[data-scope='tooltip'][data-part='content'][data-state='closed'] {
  animation: fadeOut 300ms ease-in;
}
```

## Animating with JS Libraries

There's plenty of versatility when it comes to animating your Ark UI Elements with JavaScript libraries. Various
libraries such as GreenSock, anime.js, Framer Motion, and more can add a new level of interaction and feedback to your
UI components.

One significant advantage of using Ark UI Elements is the control you have over the unmounting phase of your components.
This is primarily facilitated through the `present` prop. The `present` prop allows the component to stay mounted even
after its enclosing condition has been falsified, allowing for exit animations to complete before the component is
removed from the DOM.

# Closed Components

## Motivation

Writing a few lines of code every time you need a simple `Avatar` is tedious. Creating a dedicated component
encapsulates logic, simplifies the API, ensures consistent usage, and maintains clean code. This approach enhances
reusability, making the component easier to maintain and test.

Here's an example of an `Avatar` component that can be used consistently across your application:

```tsx
import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
import { UserIcon } from 'lucide-react'
import { forwardRef } from 'react'

export interface AvatarProps extends ArkAvatar.RootProps {
  name?: string
  src?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { name, src, ...rootProps } = props
  return (
    <ArkAvatar.Root ref={ref} {...rootProps}>
      <ArkAvatar.Fallback>{getInitials(name) || <UserIcon />}</ArkAvatar.Fallback>
      <ArkAvatar.Image src={src} alt={name} />
    </ArkAvatar.Root>
  )
})

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
```

## Usage

To use the `Avatar` component, pass the `name` and `src` props as shown below:

```jsx
<Avatar name="Christian" src="https://avatars.githubusercontent.com/u/1846056?v=4" />
```

# Collection

Collections are used to manage a collection of some kind, like menus, select, combobox, etc. They provide
functionalities such as sorting, searching, getting next or previous items, converting items to values or strings,
checking if an item is disabled, and more.

## List Collection

A list collection is a collection that is based on an array of items. It is created by passing an array of items to the
constructor.

```ts
import { createListCollection } from '@ark-ui/react/collection'

const collection = createListCollection({
  items: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]
})

console.log(collection.items) // [{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }]
```

### Converting value to item

Use the `find` or `findMany` method to convert a value to an item.

```ts
const item = collection.find('banana')

console.log(item) // { label: "Banana", value: "banana" }

const items = collection.findMany(['apple', 'banana'])

console.log(items) // [{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }]
```

### Value Traversal

Use the `getNextValue` or `getPreviousValue` method to get the next or previous item based on a value.

```ts
const nextValue = collection.getNextValue('apple')

console.log(nextValue) // banana

const previousItem = collection.getPreviousValue('banana')

console.log(previousItem) // apple
```

Likewise, use the `firstValue` or `lastValue` computed properties to get the first or last item.

```ts
console.log(collection.firstValue) // apple

console.log(collection.lastValue) // banana
```

### Check for value existence

Use the `has` method to check if a value exists in the collection.

```ts
const hasValue = collection.has('apple')

console.log(hasValue) // true
```

### Working with custom objects

If you are working with custom objects, you can pass a function to the `itemToString` and `itemToValue` options to
specify how to convert an item to a string and a value, respectively.

> By default, we look for the `label` and `value` properties in the item.

```ts
import { createListCollection } from '@ark-ui/react/collection'

const collection = createListCollection({
  items: [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' }
  ],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id
})
```

To mark an item as disabled, pass a function to the `isItemDisabled` option.

> By default, we look for the `disabled` property in the item.

```ts
import { createListCollection } from '@ark-ui/react/collection'

const collection = createListCollection({
  items: [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' }
  ],
  isItemDisabled: (item) => item.id === 2
})
```

### Reorder items

Use the `reorder` method to reorder items by passing the starting index and the ending index of the item to be moved.

```ts
const fromIndex = 1 // Banana
const toIndex = 0 // Apple
collection.reorder(fromIndex, toIndex)

console.log(collection.items) // [{ label: "Banana", value: "banana" }, { label: "Apple", value: "apple" }]
```

# Component State

## Context Components

Context components expose state and functions to child components. In this example, `Avatar.Fallback` renders based on
`loaded` state.

```tsx
import { Avatar } from '@ark-ui/react/avatar'

export const Context = () => (
  <Avatar.Root>
    <Avatar.Context>{(avatar) => <Avatar.Fallback>{avatar.loaded ? 'PA' : 'Loading'}</Avatar.Fallback>}</Avatar.Context>
    <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
  </Avatar.Root>
)
```

> **Good to know (RSC)**: Due to the usage of render prop, you might need to add the `'use client'` directive at the top
> of your file when using React Server Components.

## Provider Components

Provider components can help coordinate state and behavior between multiple components, enabling interactions that
aren't possible with `Context` components alone.

```tsx
import { Accordion, useAccordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

export const RootProvider = () => {
  const [value, setValue] = useState(['React'])
  const accordion = useAccordion({
    multiple: true,
    value,
    onValueChange: (e) => setValue(e.value)
  })

  return (
    <>
      <button onClick={() => accordion.setValue(['Vue'])}>Set to Vue</button>

      <Accordion.RootProvider value={accordion}>
        {['React', 'Solid', 'Vue'].map((item) => (
          <Accordion.Item key={item} value={item}>
            <Accordion.ItemTrigger>
              What is {item}?
              <Accordion.ItemIndicator>
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.RootProvider>
    </>
  )
}
```

See more in [Examples](/react/examples/popover-selection).

# Composition

## The asChild Prop

In Ark UI, the `asChild` prop lets you integrate custom components, ensuring consistent styling and behavior while
promoting flexibility and reusability. All Ark components that render a DOM element accept the `asChild` prop.

Here's an example using `asChild` to integrate a custom `Button` component within a `Popover`:

```tsx
import { Button } from '@acme/ui-lib'
import { Popover } from '@ark-ui/react/popover'

export const AsChild = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button>Open</Button>
    </Popover.Trigger>
  </Popover.Root>
)
```

In this example, the `asChild` prop allows the `Button` to be used as the trigger for the `Popover`, inheriting its
behaviors from Popover.Trigger.

## The Ark Factory

You can use the `ark` factory to create your own elements that work just like Ark UI components.

```tsx
import { ark } from '@ark-ui/react/factory'

export const ArkFactory = () => (
  <ark.div id="parent" className="parent" style={{ background: 'red' }} asChild>
    <ark.span id="child" className="child" style={{ color: 'blue' }}>
      Ark UI
    </ark.span>
  </ark.div>
)
```

This will produce the following HTML:

```html
<span id="child" class="parent child" style="background: red; color: blue;">Ark UI</span>
```

## Limitations

When using the `asChild` prop, ensure you pass only a single child element. Passing multiple children may cause
rendering issues.

Certain components, such as `Checkbox.Root` or `RadioGroup.Item`, have specific requirements for their child elements.
For instance, they may require a label element as a child. If you change the underlying element type, ensure it remains
accessible and functional.

# Styling

## Overview

Ark UI is a headless component library that works with any styling solution. It provides functional styles for elements
like popovers for positioning, while leaving presentation styles up to you. Some components also expose CSS variables
that can be used for styling or animations.

> **Tip:** Looking for a ready-to-use solution? Checkout [Park UI](https://park-ui.com) for a collection of pre-designed
> styles based on Ark UI components.

### Data Attributes

Ark UI components use `data-scope` and `data-part` attributes to target specific elements within a component.
Interactive components often include `data-*` attributes to indicate their state. For example, here's what an open
accordion item looks like:

```html
<div data-scope="accordion" data-part="item" data-state="open"></div>
```

For more details on each component's data attributes, refer to their respective documentation.

## Styling with CSS

When styling components with CSS, you can target the data attributes assigned to each component part for easy
customization.

### Styling a Part

To style a specific component part, target its `data-scope` and `data-part` attributes:

```css
[data-scope='accordion'][data-part='item'] {
  border-bottom: 1px solid #e5e5e5;
}
```

### Styling a State

To style a component based on its state, use the `data-state` attribute:

```css
[data-scope='accordion'][data-part='item'][data-state='open'] {
  background-color: #f5f5f5;
}
```

> **Tip:** If you prefer using classes instead of data attributes, utilize the `class` or `className` prop to add custom
> classes to Ark UI components.

## Styling with Panda CSS

[Panda CSS](https://panda-css.com) is a build-time CSS-in-JS framework that integrates seamlessly with Ark UI, providing
an efficient styling solution.

### Styling a part

Panda offers various ways to write styles, but in the context of Ark UI, we recommend using the `defineSlotRecipe`
function to style a component with its different parts and variants.

```ts
import { accordionAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const accordionStyles = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.keys(),
  base: {
    item: {
      borderBottom: '1px solid #e5e5e5'
    }
  },
  defaultVariants: {},
  variants: {}
})
```

### Styling a state

To style a component based on its state, you can use built in
[conditions](https://panda-css.com/docs/customization/conditions) in Panda CSS.

```ts
import { accordionAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const accordionStyles = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.keys(),
  base: {
    item: {
      borderBottom: '1px solid {colors.gray.300}',
      _open: {
        // [!code highlight]
        backgroundColor: 'gray.100'
      }
    }
  },
  defaultVariants: {},
  variants: {}
})
```

## Styling with Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework providing a flexible way to style your
components.

### Styling a Part

To style a part, apply classes directly to the parts using either `class` or `className`, depending on the JavaScript
framework.

```jsx
<Accordion.Root>
  <Accordion.Item className="border-b border-gray-300">{/* … */}</Accordion.Item>
</Accordion.Root>
```

### Styling a State

Leverage Tailwind CSS's variant selector to style a component based on its data-state attribute.

```jsx
<Accordion.Root>
  <Accordion.Item className="border-b border-gray-300 data-[state=open]:bg-gray-100">{/* … */}</Accordion.Item>
</Accordion.Root>
```

# COMPONENTS

---

# Accordion

## Features

- Full keyboard navigation
- Supports horizontal and vertical orientation
- Right-to-Left (RTL) support
- Single or multiple item expansion
- Controlled and uncontrolled modes
- Collapse each accordion item

## Anatomy

To set up the accordion correctly, it's essential to understand its anatomy and the naming of its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

### Default Expanded State

Set the `defaultValue` prop to specify which item should be expanded by default.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const Basic = () => {
  return (
    <Accordion.Root defaultValue={['React']}>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

### Collapsible

Use the `collapsible` prop to allow the user to collapse all panels.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const Collapsible = () => {
  return (
    <Accordion.Root defaultValue={['React']} collapsible>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

### Multiple Panels

Use the `multiple` prop to allow multiple panels to be expanded simultaneously.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const Multiple = () => {
  return (
    <Accordion.Root defaultValue={['React']} multiple>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

### Horizontal Orientation

By default, the Accordion is oriented vertically. Use the `orientation` prop to switch to a horizontal layout.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const Horizontal = () => {
  return (
    <Accordion.Root defaultValue={['React']} orientation="horizontal">
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

### Animate Content Size

Use the `--height` and/or `--width` CSS variables to animate the size of the content when it expands or closes:

```css
@keyframes slideDown {
  from {
    opacity: 0.01;
    height: 0;
  }
  to {
    opacity: 1;
    height: var(--height);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    height: var(--height);
  }
  to {
    opacity: 0.01;
    height: 0;
  }
}

[data-scope='accordion'][data-part='item-content'][data-state='open'] {
  animation: slideDown 250ms ease-in-out;
}

[data-scope='accordion'][data-part='item-content'][data-state='closed'] {
  animation: slideUp 200ms ease-in-out;
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the accordion. It accepts the value of the `useAccordion` hook. You
can leverage it to access the component state and methods from outside the accordion.

```tsx
import { Accordion, useAccordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

export const RootProvider = () => {
  const [value, setValue] = useState(['React'])
  const accordion = useAccordion({
    multiple: true,
    value,
    onValueChange: (e) => setValue(e.value)
  })

  return (
    <>
      <button onClick={() => accordion.setValue(['Vue'])}>Set to Vue</button>

      <Accordion.RootProvider value={accordion}>
        {['React', 'Solid', 'Vue'].map((item) => (
          <Accordion.Item key={item} value={item}>
            <Accordion.ItemTrigger>
              What is {item}?
              <Accordion.ItemIndicator>
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

### Accessing the focused item

Use the `focusedValue` property to get the value of the focused accordion item.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const ContextFocusedValue = () => {
  return (
    <Accordion.Root defaultValue={['React']}>
      <Accordion.Context>{(context) => <span>Focused item: {context.focusedValue}</span>}</Accordion.Context>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

### Accessing the selected items

Use the `value` property to get the selected accordion items.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const ContextValue = () => {
  return (
    <Accordion.Root defaultValue={['React']}>
      <Accordion.Context>{(context) => <span>Selected items: {context.value.join(', ')}</span>}</Accordion.Context>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

### Setting the selected items

Use the `setValue` method to set the selected accordion items.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const ContextSetValue = () => {
  return (
    <Accordion.Root defaultValue={['React']}>
      <Accordion.Context>
        {(context) => <button onClick={() => context.setValue(['Vue'])}>Select Vue</button>}
      </Accordion.Context>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

### Accessing an item's state

Use the `getItemState` method to get the state of an accordion item.

```tsx
import { Accordion } from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const ContextGetItemState = () => {
  const items = [{ value: 'React' }, { value: 'Solid', disabled: true }, { value: 'Vue' }]
  return (
    <Accordion.Root defaultValue={['React']}>
      <Accordion.Context>
        {(context) => {
          const itemState = context.getItemState(items[2])
          return (
            <>
              <b>Vue State: </b>
              <span>Disabled: {itemState.disabled ? 'Y' : 'N'} </span>
              <span>Expanded: {itemState.expanded ? 'Y' : 'N'} </span>
              <span>Focused: {itemState.focused ? 'Y' : 'N'} </span>
            </>
          )
        }}
      </Accordion.Context>
      {items.map((item) => (
        <Accordion.Item key={item.value} {...item}>
          <Accordion.ItemTrigger>
            What is {item.value}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item.value} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`collapsible`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether an accordion item can be closed after it has been expanded.

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial value of the expanded accordion items.
Use when you don't need to control the value of the accordion.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the accordion items are disabled

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  item(value: string): string
  itemContent(value: string): string
  itemTrigger(value: string): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the accordion. Useful for composition.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`multiple`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether multiple accordion items can be expanded at the same time.

**`onFocusChange`**
Type: `(details: FocusChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: The callback fired when the focused accordion item changes.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: The callback fired when the state of expanded/collapsed accordion items changes.

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"vertical"`
Description: The orientation of the accordion items.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled value of the expanded accordion items.

#### Data Attributes

**`data-scope`**: accordion
**`data-part`**: root
**`data-orientation`**: The orientation of the accordion

### ItemContent

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: accordion
**`data-part`**: item-content
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled
**`data-focus`**: Present when focused
**`data-orientation`**: The orientation of the item

### ItemIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: accordion
**`data-part`**: item-indicator
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled
**`data-focus`**: Present when focused
**`data-orientation`**: The orientation of the item

### Item

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The value of the accordion item.

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the accordion item is disabled.

#### Data Attributes

**`data-scope`**: accordion
**`data-part`**: item
**`data-state`**: "open" | "closed"
**`data-focus`**: Present when focused
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the item

### ItemTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: accordion
**`data-part`**: item-trigger
**`data-orientation`**: The orientation of the item
**`data-state`**: "open" | "closed"

### RootProvider

#### Props

**`value`**
Type: `UseAccordionReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

## Accessibility

This component complies with the
[Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

### Keyboard Support

**`Space`**
Description: When focus is on an trigger of a collapsed item, the item is expanded

**`Enter`**
Description: When focus is on an trigger of a collapsed section, expands the section.

**`Tab`**
Description: Moves focus to the next focusable element

**`Shift + Tab`**
Description: Moves focus to the previous focusable element

**`ArrowDown`**
Description: Moves focus to the next trigger

**`ArrowUp`**
Description: Moves focus to the previous trigger.

**`Home`**
Description: When focus is on an trigger, moves focus to the first trigger.

**`End`**
Description: When focus is on an trigger, moves focus to the last trigger.

# Angle Slider

## Examples

### Basic

Here's a basic example of the Angle Slider component.

```tsx
import { AngleSlider } from '@ark-ui/react/angle-slider'

export const Basic = () => {
  return (
    <AngleSlider.Root>
      <AngleSlider.Label>Wind direction</AngleSlider.Label>
      <AngleSlider.Control>
        <AngleSlider.Thumb />
        <AngleSlider.MarkerGroup>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((value, i) => (
            <AngleSlider.Marker key={i} value={value} />
          ))}
        </AngleSlider.MarkerGroup>
      </AngleSlider.Control>
      <AngleSlider.ValueText />
      <AngleSlider.HiddenInput />
    </AngleSlider.Root>
  )
}
```

### Controlled

Use the `value` and `onValueChange` props to control the value of the Angle Slider.

```tsx
import { AngleSlider } from '@ark-ui/react/angle-slider'
import { useState } from 'react'

export const Controlled = () => {
  const [angle, setAngle] = useState(180)

  return (
    <AngleSlider.Root value={angle} onValueChange={({ value }) => setAngle(value)}>
      <AngleSlider.Label>Temperature</AngleSlider.Label>
      <AngleSlider.Control>
        <AngleSlider.Thumb />
        <AngleSlider.MarkerGroup>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((value, i) => (
            <AngleSlider.Marker key={i} value={value} />
          ))}
        </AngleSlider.MarkerGroup>
      </AngleSlider.Control>
      <AngleSlider.ValueText>{angle} ºC </AngleSlider.ValueText>
      <AngleSlider.HiddenInput />
    </AngleSlider.Root>
  )
}
```

### Steps

Use the `step` prop to set the discrete steps of the Angle Slider.

```tsx
import { AngleSlider } from '@ark-ui/react/angle-slider'

export const Step = () => {
  return (
    <AngleSlider.Root step={15}>
      <AngleSlider.Label>Wind direction (15 step)</AngleSlider.Label>
      <AngleSlider.Control>
        <AngleSlider.Thumb />
        <AngleSlider.MarkerGroup>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((value, i) => (
            <AngleSlider.Marker key={i} value={value} />
          ))}
        </AngleSlider.MarkerGroup>
      </AngleSlider.Control>
      <AngleSlider.ValueText />
      <AngleSlider.HiddenInput />
    </AngleSlider.Root>
  )
}
```

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `number`
Required: false
Default Value: `0`
Description: The initial value of the slider.
Use when you don't need to control the value of the slider.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the slider is disabled.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; thumb: string; hiddenInput: string; control: string; valueText: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the machine.
Useful for composition.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the slider is invalid.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the slider. Useful for form submission.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: The callback function for when the value changes.

**`onValueChangeEnd`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: The callback function for when the value changes ends.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the slider is read-only.

**`step`**
Type: `number`
Required: false
Default Value: `1`
Description: The step value for the slider.

**`value`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The value of the slider.

#### Data Attributes

**`data-scope`**: angle-slider
**`data-part`**: root
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: angle-slider
**`data-part`**: control
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: angle-slider
**`data-part`**: label
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### MarkerGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Marker

#### Props

**`value`**
Type: `number`
Required: true
Default Value: `undefined`
Description: The value of the marker

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: angle-slider
**`data-part`**: marker
**`data-value`**: The value of the item
**`data-state`**:
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseAngleSliderReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Thumb

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: angle-slider
**`data-part`**: thumb
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

# Avatar

## Anatomy

To set up the avatar correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Avatar` component in your project. Let's take a look at the most basic example:

```tsx
import { Avatar } from '@ark-ui/react/avatar'

export const Basic = () => (
  <Avatar.Root>
    <Avatar.Fallback>PA</Avatar.Fallback>
    <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
  </Avatar.Root>
)
```

### Handling Events

`Avatar` allows you to listen for loading state changes.

```tsx
import { Avatar } from '@ark-ui/react/avatar'

export const Events = () => {
  const handleStatusChange = (details: Avatar.StatusChangeDetails) => {
    console.log(details.status)
  }
  return (
    <Avatar.Root onStatusChange={handleStatusChange}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/3000" alt="avatar" />
    </Avatar.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the avatar. It accepts the value of the `useAvatar` hook. You can
leverage it to access the component state and methods from outside the avatar.

```tsx
import { Avatar, useAvatar } from '@ark-ui/react/avatar'

export const RootProvider = () => {
  const avatar = useAvatar()

  return (
    <>
      <button onClick={() => avatar.setSrc('https://avatars.githubusercontent.com/u/6916170?v=4')}>Change Source</button>

      <Avatar.RootProvider value={avatar}>
        <Avatar.Fallback>PA</Avatar.Fallback>
        <Avatar.Image src="https://avatars.githubusercontent.com/u/1846056?v=4" alt="avatar" />
      </Avatar.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

### Next.js Image

Here's an example of how to use the `Image` component from `next/image`.

```tsx
import { Avatar, useAvatarContext } from '@ark-ui/react/avatar'
import { getImageProps, type ImageProps } from 'next/image'

const AvatarNextImage = (props: ImageProps) => {
  const avatar = useAvatarContext()

  const { hidden, ...arkImageProps } = avatar.getImageProps()
  const nextImage = getImageProps(props)

  return (
    <img
      {...arkImageProps}
      {...nextImage.props}
      style={{
        ...props.style,
        // use visibility instead
        visibility: hidden ? 'hidden' : 'visible'
      }}
    />
  )
}

const Demo = () => {
  return (
    <Avatar.Root>
      <Avatar.Fallback>JD</Avatar.Fallback>
      <AvatarNextImage src="..." alt="" width={80} height={80} />
    </Avatar.Root>
  )
}
```

> Refer to this [Github Discussion](https://github.com/chakra-ui/ark/discussions/3147) for more information.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`ids`**
Type: `Partial<{ root: string; image: string; fallback: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the avatar. Useful for composition.

**`onStatusChange`**
Type: `(details: StatusChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Functional called when the image loading status changes.

### Fallback

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: avatar
**`data-part`**: fallback
**`data-state`**: "hidden" | "visible"

### Image

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: avatar
**`data-part`**: image
**`data-state`**: "visible" | "hidden"

### RootProvider

#### Props

**`value`**
Type: `UseAvatarReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

# Carousel

## Features

- Native CSS Scroll Snap integration for smooth, performant animations
- Flexible orientation support (horizontal and vertical layouts)
- Customizable slide alignment (start, center, or end positions)
- Multi-slide display capabilities for complex layouts
- Automatic playback with configurable looping behavior
- Adjustable slide spacing and gap controls

## Anatomy

To set up the carousel correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Carousel` component in your project. Let's take a look at the most basic example:

```tsx
import { Carousel } from '@ark-ui/react/carousel'

export const Basic = () => {
  const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`)

  return (
    <Carousel.Root defaultPage={0} slideCount={images.length}>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        {images.map((_, index) => (
          <Carousel.Indicator key={index} index={index} />
        ))}
      </Carousel.IndicatorGroup>
      <Carousel.ItemGroup>
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}
```

### Controlled Carousel

To create a controlled Carousel component, you can manage the state of the carousel using the `index` prop and update it
when the `onIndexChange` event handler is called:

```tsx
import { Carousel } from '@ark-ui/react/carousel'
import { useState } from 'react'

const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`)

export const Controlled = () => {
  const [page, setPage] = useState(0)

  return (
    <Carousel.Root slideCount={images.length} page={page} onPageChange={(e) => setPage(e.page)}>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        {images.map((_, index) => (
          <Carousel.Indicator key={index} index={index} />
        ))}
      </Carousel.IndicatorGroup>
      <Carousel.ItemGroup>
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}
```

### Autoplay

The Carousel can play automatically. Just add the `autoplay` prop. You'll probably want to add `loop` too, so it keeps
going after the last slide.

```tsx
import { Carousel } from '@ark-ui/react/carousel'

const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`)

export const Autoplay = () => {
  return (
    <Carousel.Root slideCount={images.length} autoplay loop>
      <Carousel.Control>
        <Carousel.AutoplayTrigger>
          <Carousel.Context>{({ isPlaying }) => (isPlaying ? 'Pause' : 'Play')}</Carousel.Context>
        </Carousel.AutoplayTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        {images.map((_, index) => (
          <Carousel.Indicator key={index} index={index} />
        ))}
      </Carousel.IndicatorGroup>
      <Carousel.ItemGroup>
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` sets up carousel context using the `useCarousel` hook, enabling external access to its state and
methods.

```tsx
import { Carousel, useCarousel } from '@ark-ui/react/carousel'

const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`)

export const RootProvider = () => {
  const carousel = useCarousel({ slideCount: images.length })
  return (
    <>
      <button onClick={() => carousel.scrollToIndex(2)}>Scroll to #3</button>
      <Carousel.RootProvider value={carousel}>
        <Carousel.Control>
          <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
          <Carousel.NextTrigger>Next</Carousel.NextTrigger>
        </Carousel.Control>
        <Carousel.IndicatorGroup>
          {images.map((_, index) => (
            <Carousel.Indicator key={index} index={index} />
          ))}
        </Carousel.IndicatorGroup>
        <Carousel.ItemGroup>
          {images.map((image, index) => (
            <Carousel.Item key={index} index={index}>
              <img src={image} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`slideCount`**
Type: `number`
Required: true
Default Value: `undefined`
Description: The total number of slides.
Useful for SSR to render the initial ating the snap points.

**`allowMouseDrag`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow scrolling via dragging with mouse

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoplay`**
Type: `boolean | { delay: number }`
Required: false
Default Value: `false`
Description: Whether to scroll automatically. The default delay is 4000ms.

**`defaultPage`**
Type: `number`
Required: false
Default Value: `0`
Description: The initial page to scroll to when rendered.
Use when you don't need to control the page of the carousel.

**`ids`**
Type: `Partial<{
  root: string
  item(index: number): string
  itemGroup: string
  nextTrigger: string
  prevTrigger: string
  indicatorGroup: string
  indicator(index: number): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the carousel. Useful for composition.

**`inViewThreshold`**
Type: `number | number[]`
Required: false
Default Value: `0.6`
Description: The threshold for determining if an item is in view.

**`loop`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether the carousel should loop around.

**`onAutoplayStatusChange`**
Type: `(details: AutoplayStatusDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the autoplay status changes.

**`onDragStatusChange`**
Type: `(details: DragStatusDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the drag status changes.

**`onPageChange`**
Type: `(details: PageChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the page changes.

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the element.

**`padding`**
Type: `string`
Required: false
Default Value: `undefined`
Description: Defines the extra space added around the scrollable area,
enabling nearby items to remain partially in view.

**`page`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The controlled page of the carousel.

**`slidesPerMove`**
Type: `number | 'auto'`
Required: false
Default Value: `"auto"`
Description: The number of slides to scroll at a time.

When set to `auto`, the number of slides to scroll is determined by the
`slidesPerPage` property.

**`slidesPerPage`**
Type: `number`
Required: false
Default Value: `1`
Description: The number of slides to show at a time.

**`snapType`**
Type: `'proximity' | 'mandatory'`
Required: false
Default Value: `"mandatory"`
Description: The snap type of the item.

**`spacing`**
Type: `string`
Required: false
Default Value: `"0px"`
Description: The amount of space between items.

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The localized messages to use.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: root
**`data-orientation`**: The orientation of the carousel

### AutoplayTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: autoplay-trigger
**`data-orientation`**: The orientation of the autoplaytrigger
**`data-pressed`**: Present when pressed

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: control
**`data-orientation`**: The orientation of the control

### IndicatorGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: indicator-group
**`data-orientation`**: The orientation of the indicatorgroup

### Indicator

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: The index of the indicator.

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether the indicator is read only.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: indicator
**`data-orientation`**: The orientation of the indicator
**`data-index`**: The index of the item
**`data-readonly`**: Present when read-only
**`data-current`**: Present when current

### ItemGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: item-group
**`data-orientation`**: The orientation of the item
**`data-dragging`**: Present when in the dragging state

### Item

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: The index of the item.

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`snapAlign`**
Type: `'center' | 'end' | 'start'`
Required: false
Default Value: `"start"`
Description: The snap alignment of the item.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: item
**`data-index`**: The index of the item
**`data-inview`**: Present when in viewport
**`data-orientation`**: The orientation of the item

### NextTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: next-trigger
**`data-orientation`**: The orientation of the nexttrigger

### PrevTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: carousel
**`data-part`**: prev-trigger
**`data-orientation`**: The orientation of the prevtrigger

### RootProvider

#### Props

**`value`**
Type: `UseCarouselReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

Complies with the [Carousel WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).

# Checkbox

## Anatomy

To set up the checkbox correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

### Design impact on the asChild property

The `Checkbox.Root` element of the checkbox is a `label` element. This is because the checkbox is a form control and
should be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility
structure will be invalid.

> If you need to use the `asChild` property, make sure that the `label` element is the direct child of the
> `Checkbox.Root` component.

## Examples

Learn how to use the `Checkbox` component in your project. Let's take a look at the most basic example:

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { CheckIcon } from 'lucide-react'

export const Basic = () => (
  <Checkbox.Root>
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
)
```

### Controlled Checkbox

To create a controlled Checkbox component, manage the state of the checked status using the `checked` prop and update it
when the `onCheckedChange` event handler is called:

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

export const Controlled = () => {
  const [checked, setChecked] = useState<Checkbox.CheckedState>(true)

  return (
    <Checkbox.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
      <Checkbox.Label>Checkbox</Checkbox.Label>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  )
}
```

### Indeterminate Checkbox

In some cases, you may need a checkbox to represent a state that is neither checked nor unchecked, known as the
indeterminate state. This can be achieved by setting the `checked` prop to `indeterminate`:

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { CheckIcon, MinusIcon } from 'lucide-react'

export const Indeterminate = () => (
  <Checkbox.Root checked="indeterminate">
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
      <Checkbox.Indicator indeterminate>
        <MinusIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
)
```

### Checkbox Group

Ark provides a `Checkbox.Group` component to manage a group of checkboxes. The `Checkbox.Group` component manages the
state of the checkboxes and provides a way to access the checked values:

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { CheckIcon } from 'lucide-react'

const items = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' }
]

export const Group = () => (
  <Checkbox.Group defaultValue={['react']} name="framework" onValueChange={console.log}>
    {items.map((item) => (
      <Checkbox.Root value={item.value} key={item.value}>
        <Checkbox.Label>{item.label}</Checkbox.Label>
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    ))}
  </Checkbox.Group>
)
```

### Render Prop Usage

For cases where you need more flexibility in rendering, the Checkbox component offers the use of a render prop. The
render prop function gives you access to the checkbox's API, allowing you to customize the checkbox control's rendering:

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { CheckIcon } from 'lucide-react'

export const RenderProp = () => (
  <Checkbox.Root>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Context>
      {(checkbox) => <Checkbox.Label>Checkbox {checkbox.checked.toString()}</Checkbox.Label>}
    </Checkbox.Context>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
)
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a checkbox. It includes handling
ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { Field } from '@ark-ui/react/field'
import { CheckIcon, MinusIcon } from 'lucide-react'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <Checkbox.Root>
      <Checkbox.Label>Label</Checkbox.Label>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
        <Checkbox.Indicator indeterminate>
          <MinusIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the checkbox. It accepts the value of the `useCheckbox` hook. You
can leverage it to access the component state and methods from outside the checkbox.

```tsx
import { Checkbox, useCheckbox } from '@ark-ui/react/checkbox'
import { CheckIcon } from 'lucide-react'

export const RootProvider = () => {
  const checkbox = useCheckbox()

  return (
    <>
      <span>{checkbox.checked ? 'Checked' : 'UnChecked'}</span>

      <Checkbox.RootProvider value={checkbox}>
        <Checkbox.Label>Checkbox</Checkbox.Label>
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`checked`**
Type: `CheckedState`
Required: false
Default Value: `undefined`
Description: The controlled checked state of the checkbox

**`defaultChecked`**
Type: `CheckedState`
Required: false
Default Value: `undefined`
Description: The initial checked state of the checkbox when rendered.
Use when you don't need to control the checked state of the checkbox.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the checkbox is disabled

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The id of the form that the checkbox belongs to.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; hiddenInput: string; control: string; label: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the checkbox. Useful for composition.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the checkbox is invalid

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the input field in a checkbox.
Useful for form submission.

**`onCheckedChange`**
Type: `(details: CheckedChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: The callback invoked when the checked state changes.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the checkbox is read-only

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the checkbox is required

**`value`**
Type: `string`
Required: false
Default Value: `"on"`
Description: The value of checkbox input. Useful for form submission.

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "indeterminate" | "checked" | "unchecked"
**`data-invalid`**: Present when invalid

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "indeterminate" | "checked" | "unchecked"
**`data-invalid`**: Present when invalid

### Group

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial value of `value` when uncontrolled

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the checkbox group is disabled

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the checkbox group is invalid

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the input fields in the checkbox group
(Useful for form submission).

**`onValueChange`**
Type: `(value: string[]) => void`
Required: false
Default Value: `undefined`
Description: The callback to call when the value changes

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the checkbox group is read-only

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled value of the checkbox group

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`indeterminate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "indeterminate" | "checked" | "unchecked"
**`data-invalid`**: Present when invalid

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "indeterminate" | "checked" | "unchecked"
**`data-invalid`**: Present when invalid

### RootProvider

#### Props

**`value`**
Type: `UseCheckboxReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

Complies with the [Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).

### Keyboard Support

**`Space`**
Description: Toggle the checkbox

# Clipboard

## Anatomy

To set up the Clipboard correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Clipboard` component in your project. Let's take a look at the most basic example:

```tsx
import { Clipboard } from '@ark-ui/react/clipboard'
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react'

export const Basic = () => {
  return (
    <Clipboard.Root value="https://ark-ui.com">
      <Clipboard.Label>Copy this link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input />
        <Clipboard.Trigger>
          <Clipboard.Indicator copied={<CheckIcon />}>
            <ClipboardCopyIcon />
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the clipboard. It accepts the value of the `useClipboard` hook. You
can leverage it to access the component state and methods from outside the clipboard.

```tsx
import { Clipboard, useClipboard } from '@ark-ui/react/clipboard'
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react'

export const RootProvider = () => {
  const clipboard = useClipboard({ value: 'https://ark-ui.com' })

  return (
    <>
      <button onClick={() => clipboard.copy()}>Copy</button>

      <Clipboard.RootProvider value={clipboard}>
        <Clipboard.Label>Copy this link</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input />
          <Clipboard.Trigger>
            <Clipboard.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </Clipboard.Indicator>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial value to be copied to the clipboard when rendered.
Use when you don't need to control the value of the clipboard.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; input: string; label: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the clipboard. Useful for composition.

**`onStatusChange`**
Type: `(details: CopyStatusDetails) => void`
Required: false
Default Value: `undefined`
Description: The function to be called when the value is copied to the clipboard

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: The function to be called when the value changes

**`timeout`**
Type: `number`
Required: false
Default Value: `3000`
Description: The timeout for the copy operation

**`value`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled value of the clipboard

#### Data Attributes

**`data-scope`**: clipboard
**`data-part`**: root
**`data-copied`**: Present when copied state is true

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: clipboard
**`data-part`**: control
**`data-copied`**: Present when copied state is true

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`copied`**
Type: `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>`
Required: false
Default Value: `undefined`
Description: undefined

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: clipboard
**`data-part`**: input
**`data-copied`**: Present when copied state is true
**`data-readonly`**: Present when read-only

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: clipboard
**`data-part`**: label
**`data-copied`**: Present when copied state is true

### RootProvider

#### Props

**`value`**
Type: `UseClipboardReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: clipboard
**`data-part`**: trigger
**`data-copied`**: Present when copied state is true

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

# Collapsible

## Animation

You can use CSS animations to create smooth transitions for opening and closing the Collapsible content. Utilize the
`data-state` attribute in combination with the `--height` CSS variable to animate the open and closed states.

```css
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--height);
  }
}

@keyframes slideUp {
  from {
    height: var(--height);
  }
  to {
    height: 0;
  }
}

[data-scope='collapsible'][data-part='content'][data-state='open'] {
  animation: slideDown 250ms;
}

[data-scope='collapsible'][data-part='content'][data-state='closed'] {
  animation: slideUp 200ms;
}
```

## Examples

Learn how to use the `Collapsible` component in your project. Let's examine the most basic example:

```tsx
import { Collapsible } from '@ark-ui/react/collapsible'
import { ChevronDownIcon } from 'lucide-react'

export const Basic = () => (
  <Collapsible.Root>
    <Collapsible.Trigger>
      Toggle
      <Collapsible.Indicator>
        <ChevronDownIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>Content</Collapsible.Content>
  </Collapsible.Root>
)
```

### Events

You can listen for the `onExitComplete` event to know when the `Collapsible.Content` is no longer visible:

```tsx
import { Collapsible } from '@ark-ui/react/collapsible'
import { ChevronDownIcon } from 'lucide-react'

export const OnExitComplete = () => (
  <Collapsible.Root onExitComplete={() => alert('on exit')}>
    <Collapsible.Trigger>
      Toggle
      <Collapsible.Indicator>
        <ChevronDownIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>Content</Collapsible.Content>
  </Collapsible.Root>
)
```

### Lazy Mount

To delay the mounting of the `Collapsible.Content`, use the `lazyMount` prop:

```tsx
import { Collapsible } from '@ark-ui/react/collapsible'
import { ChevronDownIcon } from 'lucide-react'

export const LazyMount = () => (
  <Collapsible.Root lazyMount>
    <Collapsible.Trigger>
      Toggle
      <Collapsible.Indicator>
        <ChevronDownIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>Content</Collapsible.Content>
  </Collapsible.Root>
)
```

### Unmount on Exit

To remove the `Collapsible.Content` from the DOM when it is not visible, use the `unmountOnExit` prop:

```tsx
import { Collapsible } from '@ark-ui/react/collapsible'
import { ChevronDownIcon } from 'lucide-react'

export const UnmountOnExit = () => (
  <Collapsible.Root unmountOnExit>
    <Collapsible.Trigger>
      Toggle
      <Collapsible.Indicator>
        <ChevronDownIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>Content</Collapsible.Content>
  </Collapsible.Root>
)
```

### Combining Lazy Mount and Unmount on Exit

Both `lazyMount` and `unmountOnExit` can be combined to ensure that the component is mounted only when the `Collapsible`
is expanded and unmounted when it is collapsed:

```tsx
import { Collapsible } from '@ark-ui/react/collapsible'
import { ChevronDownIcon } from 'lucide-react'

export const LazyMountAndUnmountOnExit = () => (
  <Collapsible.Root lazyMount unmountOnExit>
    <Collapsible.Trigger>
      Toggle
      <Collapsible.Indicator>
        <ChevronDownIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>Content</Collapsible.Content>
  </Collapsible.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the collapsible. It accepts the value of the `useCollapsible` hook.
You can leverage it to access the component state and methods from outside the collapsible.

```tsx
import { Collapsible, useCollapsible } from '@ark-ui/react/collapsible'
import { ChevronDownIcon } from 'lucide-react'

export const RootProvider = () => {
  const collapsible = useCollapsible()

  return (
    <>
      <span>{collapsible.visible ? 'Visible' : 'Hidden'}</span>

      <Collapsible.RootProvider value={collapsible}>
        <Collapsible.Trigger>
          Toggle
          <Collapsible.Indicator>
            <ChevronDownIcon />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </Collapsible.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the collapsible when rendered.
Use when you don't need to control the open state of the collapsible.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the collapsible is disabled.

**`ids`**
Type: `Partial<{ root: string; content: string; trigger: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the collapsible. Useful for composition.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: The callback invoked when the exit animation completes.

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: The callback invoked when the open state changes.

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the collapsible.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

#### Data Attributes

**`data-scope`**: collapsible
**`data-part`**: root
**`data-state`**: "open" | "closed"

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: collapsible
**`data-part`**: content
**`data-collapsible`**:
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: collapsible
**`data-part`**: indicator
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseCollapsibleReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: collapsible
**`data-part`**: trigger
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled

## Accessibility

### Keyboard Support

**`Space`**
Description: Opens/closes the collapsible.

**`Enter`**
Description: Opens/closes the collapsible.

# Color Picker

## Anatomy

To set up the color picker correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `ColorPicker` component in your project. Let's take a look at the most basic example

```tsx
import { ColorPicker, parseColor } from '@ark-ui/react/color-picker'

export const Basic = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor('#eb5e41')}>
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.ChannelInput channel="alpha" />
        <ColorPicker.ValueText />
        <ColorPicker.Trigger>
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ValueSwatch />
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.FormatTrigger>Toggle ColorFormat</ColorPicker.FormatTrigger>
          <ColorPicker.FormatSelect />
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.ChannelSlider channel="hue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="alpha">
            <ColorPicker.TransparencyGrid />
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.SwatchGroup>
            <ColorPicker.SwatchTrigger value="red">
              <ColorPicker.Swatch value="red">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="blue">
              <ColorPicker.Swatch value="blue">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="green">
              <ColorPicker.Swatch value="green">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
          <ColorPicker.View format="rgba">
            <ColorPicker.ChannelInput channel="hex" />
            <ColorPicker.ChannelInput channel="alpha" />
          </ColorPicker.View>
          <ColorPicker.View format="hsla">
            <ColorPicker.ChannelInput channel="hue" />
            <ColorPicker.ChannelInput channel="saturation" />
            <ColorPicker.ChannelInput channel="lightness" />
          </ColorPicker.View>
          <ColorPicker.EyeDropperTrigger>Pick color</ColorPicker.EyeDropperTrigger>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  )
}
```

### Controlled Color Picker

To create a controlled Color Picker component, manage the state of the current color using the `value` prop and update
it when the `onValueChange` or `onValueChangeEnd` event handler is called:

```tsx
import { ColorPicker, parseColor } from '@ark-ui/react/color-picker'
import { useState } from 'react'

export const Controlled = () => {
  const [color, setColor] = useState(() => parseColor('hsl(20, 100%, 50%)'))

  return (
    <ColorPicker.Root format="hsla" value={color} onValueChange={(e) => setColor(e.value)}>
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.ChannelInput channel="alpha" />
        <ColorPicker.ValueText />
        <ColorPicker.Trigger>
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ValueSwatch />
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>

          <ColorPicker.ChannelSlider channel="hue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="alpha">
            <ColorPicker.TransparencyGrid />
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>

          <ColorPicker.SwatchGroup>
            <ColorPicker.SwatchTrigger value="red">
              <ColorPicker.Swatch value="red">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="blue">
              <ColorPicker.Swatch value="blue">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="green">
              <ColorPicker.Swatch value="green">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>

          <ColorPicker.View format="rgba">
            <ColorPicker.ChannelInput channel="hex" />
            <ColorPicker.ChannelInput channel="alpha" />
          </ColorPicker.View>

          <ColorPicker.View format="hsla">
            <ColorPicker.ChannelInput channel="hue" />
            <ColorPicker.ChannelInput channel="saturation" />
            <ColorPicker.ChannelInput channel="lightness" />
          </ColorPicker.View>

          <ColorPicker.EyeDropperTrigger>Pick color</ColorPicker.EyeDropperTrigger>
        </ColorPicker.Content>
      </ColorPicker.Positioner>

      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  )
}
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a color picker. It includes
handling ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { ColorPicker, parseColor } from '@ark-ui/react/color-picker'
import { Field } from '@ark-ui/react/field'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <ColorPicker.Root defaultValue={parseColor('#eb5e41')}>
      <ColorPicker.Label>Label</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.ChannelInput channel="alpha" />
        <ColorPicker.ValueText />
        <ColorPicker.Trigger>
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ValueSwatch />
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Positioner>
        <ColorPicker.Content />
      </ColorPicker.Positioner>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the color-picker. It accepts the value of the `useColor-picker`
hook. You can leverage it to access the component state and methods from outside the color-picker.

```tsx
import { ColorPicker, parseColor, useColorPicker } from '@ark-ui/react/color-picker'

export const RootProvider = () => {
  const colorPicker = useColorPicker({ defaultValue: parseColor('#eb5e41') })

  return (
    <>
      <span>Color: {colorPicker.valueAsString}</span>

      <ColorPicker.RootProvider value={colorPicker}>
        <ColorPicker.Label>Color</ColorPicker.Label>
        <ColorPicker.Control>
          <ColorPicker.ChannelInput channel="hex" />
          <ColorPicker.ChannelInput channel="alpha" />
          <ColorPicker.ValueText />
          <ColorPicker.Trigger>
            <ColorPicker.TransparencyGrid />
            <ColorPicker.ValueSwatch />
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.FormatTrigger>Toggle ColorFormat</ColorPicker.FormatTrigger>
            <ColorPicker.FormatSelect />
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.ChannelSlider channel="hue">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider channel="alpha">
              <ColorPicker.TransparencyGrid />
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.SwatchGroup>
              <ColorPicker.SwatchTrigger value="red">
                <ColorPicker.Swatch value="red">
                  <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
                </ColorPicker.Swatch>
              </ColorPicker.SwatchTrigger>
              <ColorPicker.SwatchTrigger value="blue">
                <ColorPicker.Swatch value="blue">
                  <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
                </ColorPicker.Swatch>
              </ColorPicker.SwatchTrigger>
              <ColorPicker.SwatchTrigger value="green">
                <ColorPicker.Swatch value="green">
                  <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
                </ColorPicker.Swatch>
              </ColorPicker.SwatchTrigger>
            </ColorPicker.SwatchGroup>
            <ColorPicker.View format="rgba">
              <ColorPicker.ChannelInput channel="hex" />
              <ColorPicker.ChannelInput channel="alpha" />
            </ColorPicker.View>
            <ColorPicker.View format="hsla">
              <ColorPicker.ChannelInput channel="hue" />
              <ColorPicker.ChannelInput channel="saturation" />
              <ColorPicker.ChannelInput channel="lightness" />
            </ColorPicker.View>
            <ColorPicker.EyeDropperTrigger>Pick color</ColorPicker.EyeDropperTrigger>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
        <ColorPicker.HiddenInput />
      </ColorPicker.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to close the color picker when a swatch is selected

**`defaultFormat`**
Type: `ColorFormat`
Required: false
Default Value: `"rgba"`
Description: The initial color format when rendered.
Use when you don't need to control the color format of the color picker.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the color picker when rendered.
Use when you don't need to control the open state of the color picker.

**`defaultValue`**
Type: `Color`
Required: false
Default Value: `#000000`
Description: The initial color value when rendered.
Use when you don't need to control the color value of the color picker.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the color picker is disabled

**`format`**
Type: `ColorFormat`
Required: false
Default Value: `undefined`
Description: The controlled color format to use

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; control: string; trigger: string; label: string; input: string; hiddenInput: string; content: string; area: string; areaGradient: string; positioner: string; formatSelect: string; areaThumb: string; channelInput(id: string): string; channelSliderTrack(id: ColorChannel): string; channelSliderT...`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the color picker. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`initialFocusEl`**
Type: `() => HTMLElement | null`
Required: false
Default Value: `undefined`
Description: The initial focus element when the color picker is opened.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the color picker is invalid

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name for the form input

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onFormatChange`**
Type: `(details: FormatChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the color format changes

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Handler that is called when the user opens or closes the color picker.

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Handler that is called when the value changes, as the user drags.

**`onValueChangeEnd`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Handler that is called when the user stops dragging.

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the color picker

**`openAutoFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to auto focus the color picker when it is opened

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `undefined`
Description: The positioning options for the color picker

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the color picker is read-only

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the color picker is required

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

**`value`**
Type: `Color`
Required: false
Default Value: `undefined`
Description: The controlled color value of the color picker

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: root
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only
**`data-invalid`**: Present when invalid

### AreaBackground

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: area-background
**`data-invalid`**: Present when invalid
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only

### Area

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`xChannel`**
Type: `ColorChannel`
Required: false
Default Value: `undefined`
Description: undefined

**`yChannel`**
Type: `ColorChannel`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: area
**`data-invalid`**: Present when invalid
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only

### AreaThumb

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: area-thumb
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### ChannelInput

#### Props

**`channel`**
Type: `ExtendedColorChannel`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`orientation`**
Type: `Orientation`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: channel-input
**`data-channel`**: The color channel of the channelinput
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### ChannelSliderLabel

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: channel-slider-label
**`data-channel`**: The color channel of the channelsliderlabel

### ChannelSlider

#### Props

**`channel`**
Type: `ColorChannel`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`orientation`**
Type: `Orientation`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: channel-slider
**`data-channel`**: The color channel of the channelslider
**`data-orientation`**: The orientation of the channelslider

### ChannelSliderThumb

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: channel-slider-thumb
**`data-channel`**: The color channel of the channelsliderthumb
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the channelsliderthumb

### ChannelSliderTrack

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: channel-slider-track
**`data-channel`**: The color channel of the channelslidertrack
**`data-orientation`**: The orientation of the channelslidertrack

### ChannelSliderValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: channel-slider-value-text
**`data-channel`**: The color channel of the channelslidervaluetext

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: content
**`data-placement`**: The placement of the content
**`data-state`**: "open" | "closed"

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: control
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only
**`data-invalid`**: Present when invalid
**`data-state`**: "open" | "closed"
**`data-focus`**: Present when focused

### EyeDropperTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: eye-dropper-trigger
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### FormatSelect

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### FormatTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: label
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseColorPickerReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### SwatchGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### SwatchIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Swatch

#### Props

**`value`**
Type: `string | Color`
Required: true
Default Value: `undefined`
Description: The color value

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`respectAlpha`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to include the alpha channel in the color

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: swatch
**`data-state`**: "checked" | "unchecked"
**`data-value`**: The value of the item

### SwatchTrigger

#### Props

**`value`**
Type: `string | Color`
Required: true
Default Value: `undefined`
Description: The color value

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the swatch trigger is disabled

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: swatch-trigger
**`data-state`**: "checked" | "unchecked"
**`data-value`**: The value of the item
**`data-disabled`**: Present when disabled

### TransparencyGrid

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`size`**
Type: `string`
Required: false
Default Value: `undefined`
Description: undefined

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: trigger
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only
**`data-invalid`**: Present when invalid
**`data-placement`**: The placement of the trigger
**`data-state`**: "open" | "closed"
**`data-focus`**: Present when focused

### ValueSwatch

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`respectAlpha`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to include the alpha channel in the color

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`format`**
Type: `ColorStringFormat`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: color-picker
**`data-part`**: value-text
**`data-disabled`**: Present when disabled
**`data-focus`**: Present when focused

### View

#### Props

**`format`**
Type: `ColorFormat`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

### Keyboard Support

**`Enter`**
Description: <span>When focus is on the trigger, opens the color picker<br />When focus is on a trigger of a swatch, selects the color (and closes the color picker)<br />When focus is on the input or channel inputs, selects the color</span>

**`ArrowLeft`**
Description: <span>When focus is on the color area, decreases the hue value of the color<br />When focus is on the channel sliders, decreases the value of the channel</span>

**`ArrowRight`**
Description: <span>When focus is on the color area, increases the hue value of the color<br />When focus is on the channel sliders, increases the value of the channel</span>

**`ArrowUp`**
Description: <span>When focus is on the color area, increases the saturation value of the color<br />When focus is on the channel sliders, increases the value of the channel</span>

**`ArrowDown`**
Description: <span>When focus is on the color area, decreases the saturation value of the color<br />When focus is on the channel sliders, decreases the value of the channel</span>

**`Esc`**
Description: Closes the color picker and moves focus to the trigger

# Combobox

## Anatomy

To set up the combobox correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Combobox` component in your project. Let's take a look at the most basic example

```tsx
import { Combobox, createListCollection } from '@ark-ui/react/combobox'
import { Portal } from '@ark-ui/react/portal'
import { useMemo, useState } from 'react'

const initialItems = ['React', 'Solid', 'Vue']

export const Basic = () => {
  const [items, setItems] = useState(initialItems)

  const collection = useMemo(() => createListCollection({ items }), [items])

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    setItems(initialItems.filter((item) => item.toLowerCase().includes(details.inputValue.toLowerCase())))
  }

  return (
    <Combobox.Root collection={collection} onInputValueChange={handleInputChange}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.Trigger>Open</Combobox.Trigger>
        <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
              {collection.items.map((item) => (
                <Combobox.Item key={item} item={item}>
                  <Combobox.ItemText>{item}</Combobox.ItemText>
                  <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
```

### Advanced Customization

Extended example that shows usage with complex item objects, including disabled state for certain options.

```tsx
import { Combobox, createListCollection } from '@ark-ui/react/combobox'
import { Portal } from '@ark-ui/react/portal'

export const Advanced = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react', type: 'JS' },
      { label: 'Solid', value: 'solid', type: 'JS' },
      { label: 'Vue', value: 'vue', type: 'JS' },
      { label: 'Panda', value: 'panda', type: 'CSS' },
      { label: 'Tailwind', value: 'tailwind', type: 'CSS' }
    ],
    groupBy: (item) => item.type
  })

  return (
    <Combobox.Root collection={collection} multiple>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.Trigger>Open</Combobox.Trigger>
        <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            {collection.group().map(([type, group]) => (
              <Combobox.ItemGroup key={type}>
                <Combobox.ItemGroupLabel>{type}</Combobox.ItemGroupLabel>
                {group.map((item) => (
                  <Combobox.Item key={item.value} item={item}>
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                    <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a combobox. It includes handling
ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Combobox, createListCollection } from '@ark-ui/react/combobox'
import { Field } from '@ark-ui/react/field'

export const WithField = (props: Field.RootProps) => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })

  return (
    <Field.Root {...props}>
      <Combobox.Root collection={collection}>
        <Combobox.Label>Label</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.Trigger>Open</Combobox.Trigger>
          <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
        </Combobox.Control>
        <Combobox.Positioner>
          <Combobox.Content>
            {collection.items.map((item) => (
              <Combobox.Item key={item} item={item}>
                <Combobox.ItemText>{item}</Combobox.ItemText>
                <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the combobox. It accepts the value of the `useCombobox` hook. You
can leverage it to access the component state and methods from outside the combobox.

```tsx
import { Combobox, createListCollection, useCombobox } from '@ark-ui/react/combobox'
import { Portal } from '@ark-ui/react/portal'
import { useMemo, useState } from 'react'

const initialItems = ['React', 'Solid', 'Vue']

export const RootProvider = () => {
  const [items, setItems] = useState(initialItems)

  const collection = useMemo(() => createListCollection({ items }), [items])

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    setItems(initialItems.filter((item) => item.toLowerCase().includes(details.inputValue.toLowerCase())))
  }

  const combobox = useCombobox({ collection: collection, onInputValueChange: handleInputChange })

  return (
    <>
      <button onClick={() => combobox.focus()}>Focus</button>

      <Combobox.RootProvider value={combobox}>
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.Trigger>Open</Combobox.Trigger>
          <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.ItemGroup>
                <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Combobox.Item key={item} item={item}>
                    <Combobox.ItemText>{item}</Combobox.ItemText>
                    <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`collection`**
Type: `ListCollection<T>`
Required: true
Default Value: `undefined`
Description: The collection of items

**`allowCustomValue`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to allow typing custom values in the input

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to autofocus the input on mount

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to close the combobox when an item is selected.

**`composite`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the combobox is a composed with other composite widgets like tabs

**`defaultHighlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial highlighted value of the combobox when rendered.
Use when you don't need to control the highlighted value of the combobox.

**`defaultInputValue`**
Type: `string`
Required: false
Default Value: `""`
Description: The initial value of the combobox's input when rendered.
Use when you don't need to control the value of the combobox's input.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the combobox when rendered.
Use when you don't need to control the open state of the combobox.

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `[]`
Description: The initial value of the combobox's selected items when rendered.
Use when you don't need to control the value of the combobox's selected items.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the combobox is disabled

**`disableLayer`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to disable registering this a dismissable layer

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the combobox.

**`highlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled highlighted value of the combobox

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  label: string
  control: string
  input: string
  content: string
  trigger: string
  clearTrigger: string
  item(id: string, index?: number | undefined): string
  positioner: string
  itemGroup(id: string | number): string
  itemGroupLabel(id: string | number): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the combobox. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`inputBehavior`**
Type: `'none' | 'autohighlight' | 'autocomplete'`
Required: false
Default Value: `"none"`
Description: Defines the auto-completion behavior of the combobox.

- `autohighlight`: The first focused item is highlighted as the user types
- `autocomplete`: Navigating the listbox with the arrow keys selects the item and the input is updated

**`inputValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled value of the combobox's input

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the combobox is invalid

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`loopFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to loop the keyboard navigation through the items

**`multiple`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to allow multiple selection.

**Good to know:** When `multiple` is `true`, the `selectionBehavior` is automatically set to `clear`.
It is recommended to render the selected items in a separate container.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The `name` attribute of the combobox's input. Useful for form submission

**`navigate`**
Type: `(details: NavigateDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to navigate to the selected item

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onHighlightChange`**
Type: `(details: HighlightChangeDetails<T>) => void`
Required: false
Default Value: `undefined`
Description: Function called when an item is highlighted using the pointer
or keyboard navigation.

**`onInputValueChange`**
Type: `(details: InputValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the input's value changes

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the popup is opened

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`onSelect`**
Type: `(details: SelectionDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when an item is selected

**`onValueChange`**
Type: `(details: ValueChangeDetails<T>) => void`
Required: false
Default Value: `undefined`
Description: Function called when a new item is selected

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the combobox

**`openOnChange`**
Type: `boolean | ((details: InputValueChangeDetails) => boolean)`
Required: false
Default Value: `true`
Description: Whether to show the combobox when the input value changes

**`openOnClick`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to open the combobox popup on initial click on the input

**`openOnKeyPress`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to open the combobox on arrow key press

**`placeholder`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The placeholder text of the combobox's input

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `{ placement: "bottom-start" }`
Description: The positioning options to dynamically position the menu

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the combobox is readonly. This puts the combobox in a "non-editable" mode
but the user can still interact with it

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the combobox is required

**`scrollToIndexFn`**
Type: `(details: ScrollToIndexDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to scroll to a specific index

**`selectionBehavior`**
Type: `'replace' | 'clear' | 'preserve'`
Required: false
Default Value: `"replace"`
Description: The behavior of the combobox input when an item is selected

- `replace`: The selected item string is set as the input value
- `clear`: The input value is cleared
- `preserve`: The input value is preserved

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled value of the combobox's selected items

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: root
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### ClearTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: clear-trigger
**`data-invalid`**: Present when invalid

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-placement`**: The placement of the content
**`data-empty`**:

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: control
**`data-state`**: "open" | "closed"
**`data-focus`**: Present when focused
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: input
**`data-invalid`**: Present when invalid
**`data-state`**: "open" | "closed"

### ItemGroupLabel

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: item-group
**`data-empty`**:

### ItemIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: item-indicator
**`data-state`**: "checked" | "unchecked"

### Item

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`item`**
Type: `any`
Required: false
Default Value: `undefined`
Description: The item to render

**`persistFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether hovering outside should clear the highlighted state

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: item
**`data-highlighted`**: Present when highlighted
**`data-state`**: "checked" | "unchecked"
**`data-disabled`**: Present when disabled
**`data-value`**: The value of the item

### ItemText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: item-text
**`data-state`**: "checked" | "unchecked"
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: label
**`data-readonly`**: Present when read-only
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

### List

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: list
**`data-empty`**:

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseComboboxReturn<T>`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`focusable`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the trigger is focusable

#### Data Attributes

**`data-scope`**: combobox
**`data-part`**: trigger
**`data-state`**: "open" | "closed"
**`data-invalid`**: Present when invalid
**`data-focusable`**:
**`data-readonly`**: Present when read-only
**`data-disabled`**: Present when disabled

## Accessibility

Complies with the [Combobox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

### Keyboard Support

**`ArrowDown`**
Description: When the combobox is closed, opens the listbox and highlights to the first option.
When the combobox is open, moves focus to the next option.

**`ArrowUp`**
Description: When the combobox is closed, opens the listbox and highlights to the last option.
When the combobox is open, moves focus to the previous option.

**`Home`**
Description: When the combobox is open, moves focus to the first option.

**`End`**
Description: When the combobox is open, moves focus to the last option.

**`Escape`**
Description: Closes the listbox.

**`Enter`**
Description: Selects the highlighted option and closes the combobox.

**`Esc`**
Description: Closes the combobox

# Date Picker

## Anatomy

To set up the date picker correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `DatePicker` component in your project. Let's take a look at the most basic example

```tsx
import { DatePicker } from '@ark-ui/react/date-picker'
import { Portal } from '@ark-ui/react/portal'

export const Basic = () => {
  return (
    <DatePicker.Root>
      <DatePicker.Label>Label</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger>📅</DatePicker.Trigger>
        <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.YearSelect />
            <DatePicker.MonthSelect />
            <DatePicker.View view="day">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                          <DatePicker.TableRow key={id}>
                            {months.map((month, id) => (
                              <DatePicker.TableCell key={id} value={month.value}>
                                <DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                          <DatePicker.TableRow key={id}>
                            {years.map((year, id) => (
                              <DatePicker.TableCell key={id} value={year.value}>
                                <DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}
```

### Range Selection

To create a Date Picker that allows a range selection, set the `selectionMode` prop to `range`.

```tsx
import { DatePicker } from '@ark-ui/react/date-picker'

export const Range = () => {
  return (
    <DatePicker.Root selectionMode="range">
      <DatePicker.Label>Label</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input index={0} />
        <DatePicker.Input index={1} />
        <DatePicker.Trigger>📅</DatePicker.Trigger>
        <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
      </DatePicker.Control>
      <DatePicker.PresetTrigger value="last7Days">Last 7 days</DatePicker.PresetTrigger>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.YearSelect />
          <DatePicker.MonthSelect />
          <DatePicker.View view="day">
            <DatePicker.Context>
              {(datePicker) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableHead>
                      <DatePicker.TableRow>
                        {datePicker.weekDays.map((weekDay, id) => (
                          <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                        ))}
                      </DatePicker.TableRow>
                    </DatePicker.TableHead>
                    <DatePicker.TableBody>
                      {datePicker.weeks.map((week, id) => (
                        <DatePicker.TableRow key={id}>
                          {week.map((day, id) => (
                            <DatePicker.TableCell key={id} value={day}>
                              <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.Context>
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Context>
              {(datePicker) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      {datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.Context>
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Context>
              {(datePicker) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <DatePicker.TableRow key={id}>
                          {years.map((year, id) => (
                            <DatePicker.TableCell key={id} value={year.value}>
                              <DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.Context>
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </DatePicker.Root>
  )
}
```

### Standalone Date Picker

In some cases, you might want to display a non-dismissible date picker. This can be achieved by setting the `open` prop
to `true` and `closeOnSelect` prop to `false`.

> Important to note that standalone date picker doesn't use the `Portal`, `Positioner` and `Content` components.

```tsx
import { DatePicker } from '@ark-ui/react/date-picker'

export const Standalone = () => {
  return (
    <DatePicker.Root open>
      <DatePicker.Input />
      <DatePicker.View view="day">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl>
                <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger>
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableHead>
                  <DatePicker.TableRow>
                    {datePicker.weekDays.map((weekDay, id) => (
                      <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                    ))}
                  </DatePicker.TableRow>
                </DatePicker.TableHead>
                <DatePicker.TableBody>
                  {datePicker.weeks.map((week, id) => (
                    <DatePicker.TableRow key={id}>
                      {week.map((day, id) => (
                        <DatePicker.TableCell key={id} value={day}>
                          <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View view="month">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl>
                <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger>
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableBody>
                  {datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                    <DatePicker.TableRow key={id}>
                      {months.map((month, id) => (
                        <DatePicker.TableCell key={id} value={month.value}>
                          <DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View view="year">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl>
                <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger>
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableBody>
                  {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                    <DatePicker.TableRow key={id}>
                      {years.map((year, id) => (
                        <DatePicker.TableCell key={id} value={year.value}>
                          <DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
    </DatePicker.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the date-picker. It accepts the value of the `useDate-picker` hook.
You can leverage it to access the component state and methods from outside the date-picker.

```tsx
import { DatePicker, useDatePicker } from '@ark-ui/react/date-picker'
import { Portal } from '@ark-ui/react/portal'

export const RootProvider = () => {
  const datePicker = useDatePicker()

  return (
    <>
      <button onClick={() => datePicker.clearValue()}>Clear</button>

      <DatePicker.RootProvider value={datePicker}>
        <DatePicker.Label>Label</DatePicker.Label>
        <DatePicker.Control>
          <DatePicker.Input />
          <DatePicker.Trigger>📅</DatePicker.Trigger>
          <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
        </DatePicker.Control>
        <Portal>
          <DatePicker.Positioner>
            <DatePicker.Content>
              <DatePicker.YearSelect />
              <DatePicker.MonthSelect />
              <DatePicker.View view="day">
                <DatePicker.Context>
                  {(datePicker) => (
                    <>
                      <DatePicker.ViewControl>
                        <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                        <DatePicker.ViewTrigger>
                          <DatePicker.RangeText />
                        </DatePicker.ViewTrigger>
                        <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                      </DatePicker.ViewControl>
                      <DatePicker.Table>
                        <DatePicker.TableHead>
                          <DatePicker.TableRow>
                            {datePicker.weekDays.map((weekDay, id) => (
                              <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                            ))}
                          </DatePicker.TableRow>
                        </DatePicker.TableHead>
                        <DatePicker.TableBody>
                          {datePicker.weeks.map((week, id) => (
                            <DatePicker.TableRow key={id}>
                              {week.map((day, id) => (
                                <DatePicker.TableCell key={id} value={day}>
                                  <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                        </DatePicker.TableBody>
                      </DatePicker.Table>
                    </>
                  )}
                </DatePicker.Context>
              </DatePicker.View>
              <DatePicker.View view="month">
                <DatePicker.Context>
                  {(datePicker) => (
                    <>
                      <DatePicker.ViewControl>
                        <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                        <DatePicker.ViewTrigger>
                          <DatePicker.RangeText />
                        </DatePicker.ViewTrigger>
                        <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                      </DatePicker.ViewControl>
                      <DatePicker.Table>
                        <DatePicker.TableBody>
                          {datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                            <DatePicker.TableRow key={id}>
                              {months.map((month, id) => (
                                <DatePicker.TableCell key={id} value={month.value}>
                                  <DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                        </DatePicker.TableBody>
                      </DatePicker.Table>
                    </>
                  )}
                </DatePicker.Context>
              </DatePicker.View>
              <DatePicker.View view="year">
                <DatePicker.Context>
                  {(datePicker) => (
                    <>
                      <DatePicker.ViewControl>
                        <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                        <DatePicker.ViewTrigger>
                          <DatePicker.RangeText />
                        </DatePicker.ViewTrigger>
                        <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                      </DatePicker.ViewControl>
                      <DatePicker.Table>
                        <DatePicker.TableBody>
                          {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                            <DatePicker.TableRow key={id}>
                              {years.map((year, id) => (
                                <DatePicker.TableCell key={id} value={year.value}>
                                  <DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                        </DatePicker.TableBody>
                      </DatePicker.Table>
                    </>
                  )}
                </DatePicker.Context>
              </DatePicker.View>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </Portal>
      </DatePicker.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the calendar should close after the date selection is complete.
This is ignored when the selection mode is `multiple`.

**`defaultFocusedValue`**
Type: `DateValue`
Required: false
Default Value: `undefined`
Description: The initial focused date when rendered.
Use when you don't need to control the focused date of the date picker.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the date picker when rendered.
Use when you don't need to control the open state of the date picker.

**`defaultValue`**
Type: `DateValue[]`
Required: false
Default Value: `undefined`
Description: The initial selected date(s) when rendered.
Use when you don't need to control the selected date(s) of the date picker.

**`defaultView`**
Type: `DateView`
Required: false
Default Value: `"day"`
Description: The default view of the calendar

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the calendar is disabled.

**`fixedWeeks`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the calendar should have a fixed number of weeks.
This renders the calendar with 6 weeks instead of 5 or 6.

**`focusedValue`**
Type: `DateValue`
Required: false
Default Value: `undefined`
Description: The controlled focused date.

**`format`**
Type: `(date: DateValue, details: LocaleDetails) => string`
Required: false
Default Value: `undefined`
Description: The format of the date to display in the input.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; label(index: number): string; table(id: string): string; tableHeader(id: string): string; tableBody(id: string): string; tableRow(id: string): string; content: string; ... 10 more ...; positioner: string; }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the date picker. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`isDateUnavailable`**
Type: `(date: DateValue, locale: string) => boolean`
Required: false
Default Value: `undefined`
Description: Returns whether a date of the calendar is available.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`locale`**
Type: `string`
Required: false
Default Value: `"en-US"`
Description: The locale (BCP 47 language tag) to use when formatting the date.

**`max`**
Type: `DateValue`
Required: false
Default Value: `undefined`
Description: The maximum date that can be selected.

**`maxView`**
Type: `DateView`
Required: false
Default Value: `"year"`
Description: The maximum view of the calendar

**`min`**
Type: `DateValue`
Required: false
Default Value: `undefined`
Description: The minimum date that can be selected.

**`minView`**
Type: `DateView`
Required: false
Default Value: `"day"`
Description: The minimum view of the calendar

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The `name` attribute of the input element.

**`numOfMonths`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The number of months to display.

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusChange`**
Type: `(details: FocusChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focused date changes.

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the calendar opens or closes.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the value changes.

**`onViewChange`**
Type: `(details: ViewChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the view changes.

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the date picker

**`parse`**
Type: `(value: string, details: LocaleDetails) => DateValue | undefined`
Required: false
Default Value: `undefined`
Description: Function to parse the date from the input back to a DateValue.

**`placeholder`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The placeholder text to display in the input.

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `undefined`
Description: The user provided options used to position the date picker content

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the calendar is read-only.

**`selectionMode`**
Type: `SelectionMode`
Required: false
Default Value: `"single"`
Description: The selection mode of the calendar.

- `single` - only one date can be selected
- `multiple` - multiple dates can be selected
- `range` - a range of dates can be selected

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`startOfWeek`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The first day of the week.
`0` - Sunday
`1` - Monday
`2` - Tuesday
`3` - Wednesday
`4` - Thursday
`5` - Friday
`6` - Saturday

**`timeZone`**
Type: `string`
Required: false
Default Value: `"UTC"`
Description: The time zone to use

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The localized messages to use.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

**`value`**
Type: `DateValue[]`
Required: false
Default Value: `undefined`
Description: The controlled selected date(s).

**`view`**
Type: `DateView`
Required: false
Default Value: `undefined`
Description: The view of the calendar

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: root
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only

### ClearTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-placement`**: The placement of the content

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: control
**`data-disabled`**: Present when disabled

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`fixOnBlur`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to fix the input value on blur.

**`index`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The index of the input to focus.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: input
**`data-index`**: The index of the item
**`data-state`**: "open" | "closed"

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: label
**`data-state`**: "open" | "closed"
**`data-index`**: The index of the item
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only

### MonthSelect

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### NextTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: next-trigger
**`data-disabled`**: Present when disabled

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### PresetTrigger

#### Props

**`value`**
Type: `PresetTriggerValue`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### PrevTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: prev-trigger
**`data-disabled`**: Present when disabled

### RangeText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseDatePickerReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### TableBody

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: table-body
**`data-view`**: The view of the tablebody
**`data-disabled`**: Present when disabled

### TableCell

#### Props

**`value`**
Type: `number | DateValue`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`columns`**
Type: `number`
Required: false
Default Value: `undefined`
Description: undefined

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: undefined

**`visibleRange`**
Type: `VisibleRange`
Required: false
Default Value: `undefined`
Description: undefined

### TableCellTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### TableHead

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: table-head
**`data-view`**: The view of the tablehead
**`data-disabled`**: Present when disabled

### TableHeader

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: table-header
**`data-view`**: The view of the tableheader
**`data-disabled`**: Present when disabled

### Table

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`columns`**
Type: `number`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: table
**`data-columns`**:
**`data-view`**: The view of the table

### TableRow

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: table-row
**`data-disabled`**: Present when disabled
**`data-view`**: The view of the tablerow

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: trigger
**`data-placement`**: The placement of the trigger
**`data-state`**: "open" | "closed"

### ViewControl

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: view-control
**`data-view`**: The view of the viewcontrol

### View

#### Props

**`view`**
Type: `DateView`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: view
**`data-view`**: The view of the view

### ViewTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: date-picker
**`data-part`**: view-trigger
**`data-view`**: The view of the viewtrigger

### YearSelect

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

### Keyboard Support

**`ArrowLeft`**
Description: Moves focus to the previous day within the current week.

**`ArrowRight`**
Description: Moves focus to the next day within the current week.

**`ArrowUp`**
Description: Moves focus to the same day of the week in the previous week.

**`ArrowDown`**
Description: Moves focus to the same day of the week in the next week.

**`Home`**
Description: Moves focus to the first day of the current month.

**`End`**
Description: Moves focus to the last day of the current month.

**`PageUp`**
Description: Moves focus to the same day of the month in the previous month.

**`PageDown`**
Description: Moves focus to the same day of the month in the next month.

**`Enter`**
Description: Selects the focused date and closes the date picker.

**`Esc`**
Description: Closes the date picker without selecting any date.

# Dialog

## Anatomy

To use the dialog component correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Dialog` component in your project. Let's take a look at the most basic example

```tsx
import { Dialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'

export const Basic = () => (
  <Dialog.Root>
    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
)
```

### Controlled Dialog

To create a controlled Dialog component, manage the state of the dialog using the `open` and `onOpenChange` props:

```tsx
import { Dialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { useState } from 'react'

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>
      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
              <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}
```

### Lazy Mounting

Lazy mounting is a feature that allows the content of a dialog to be rendered only when the dialog is first opened. This
is useful for performance optimization, especially when dialog content is large or complex. To enable lazy mounting, use
the `lazyMount` prop on the `Dialog.Root` component.

In addition, the `unmountOnExit` prop can be used in conjunction with `lazyMount` to unmount the dialog content when the
Dialog is closed, freeing up resources. The next time the dialog is activated, its content will be re-rendered.

```tsx
import { Dialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'

export const LazyMount = () => (
  <Dialog.Root lazyMount unmountOnExit onExitComplete={() => console.log('onExitComplete invoked')}>
    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
)
```

### Using Render Function

The Dialog component supports the use of a render function as a child for more control. This allows access to dialog
states like `isOpen`:

```tsx
import { Dialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'

export const RenderFn = () => (
  <Dialog.Root>
    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
    <Dialog.Context>{(dialog) => <p>Dialog is {dialog.open ? 'open' : 'closed'}</p>}</Dialog.Context>
  </Dialog.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the dialog. It accepts the value of the `useDialog` hook. You can
leverage it to access the component state and methods from outside the dialog.

```tsx
import { Dialog, useDialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'

export const RootProvider = () => {
  const dialog = useDialog()

  return (
    <>
      <button onClick={() => dialog.setOpen(true)}>Open</button>

      <Dialog.RootProvider value={dialog}>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
              <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`aria-label`**
Type: `string`
Required: false
Default Value: `undefined`
Description: Human readable label for the dialog, in event the dialog title is not rendered

**`closeOnEscape`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to close the dialog when the escape key is pressed

**`closeOnInteractOutside`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to close the dialog when the outside is clicked

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `false`
Description: The initial open state of the dialog when rendered.
Use when you don't need to control the open state of the dialog.

**`finalFocusEl`**
Type: `() => MaybeElement`
Required: false
Default Value: `undefined`
Description: Element to receive focus when the dialog is closed

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  trigger: string
  positioner: string
  backdrop: string
  content: string
  closeTrigger: string
  title: string
  description: string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the dialog. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`initialFocusEl`**
Type: `() => MaybeElement`
Required: false
Default Value: `undefined`
Description: Element to receive focus when the dialog is opened

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`modal`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to prevent pointer interaction outside the element and hide all content below it

**`onEscapeKeyDown`**
Type: `(event: KeyboardEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the escape key is pressed

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to call when the dialog's open state changes

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the dialog

**`persistentElements`**
Type: `(() => Element | null)[]`
Required: false
Default Value: `undefined`
Description: Returns the persistent elements that:

- should not have pointer-events disabled
- should not trigger the dismiss event

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`preventScroll`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to prevent scrolling behind the dialog when it's opened

**`restoreFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to restore focus to the element that had focus before the dialog was opened

**`role`**
Type: `'dialog' | 'alertdialog'`
Required: false
Default Value: `"dialog"`
Description: The dialog's role

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`trapFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to trap focus inside the dialog when it's opened

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Backdrop

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: dialog
**`data-part`**: backdrop
**`data-state`**: "open" | "closed"

### CloseTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: dialog
**`data-part`**: content
**`data-state`**: "open" | "closed"

### Description

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseDialogReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Title

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: dialog
**`data-part`**: trigger
**`data-state`**: "open" | "closed"

## Accessibility

Complies with the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### Keyboard Support

**`Enter`**
Description: When focus is on the trigger, opens the dialog.

**`Tab`**
Description: Moves focus to the next focusable element within the content. Focus is trapped within the dialog.

**`Shift + Tab`**
Description: Moves focus to the previous focusable element. Focus is trapped within the dialog.

**`Esc`**
Description: Closes the dialog and moves focus to trigger or the defined final focus element

# Editable

## Anatomy

To set up the editable correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Editable` component in your project. Let's take a look at the most basic example:

```tsx
import { Editable } from '@ark-ui/react/editable'

export const Basic = () => (
  <Editable.Root placeholder="Placeholder">
    <Editable.Label>Label</Editable.Label>
    <Editable.Area>
      <Editable.Input />
      <Editable.Preview />
    </Editable.Area>
  </Editable.Root>
)
```

### Using custom controls

In some cases, you might need to use custom controls to toggle the edit and read mode. We use the render prop pattern to
provide access to the internal state of the component.

```tsx
import { Editable } from '@ark-ui/react/editable'

export const CustomControls = () => (
  <Editable.Root placeholder="enter a value" defaultValue="Chakra">
    <Editable.Label>Label</Editable.Label>
    <Editable.Area>
      <Editable.Input />
      <Editable.Preview />
    </Editable.Area>
    <Editable.Context>
      {(editable) => (
        <Editable.Control>
          {editable.editing ? (
            <>
              <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
              <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
            </>
          ) : (
            <Editable.EditTrigger>Edit</Editable.EditTrigger>
          )}
        </Editable.Control>
      )}
    </Editable.Context>
  </Editable.Root>
)
```

### Auto-resizing the editable

To auto-grow the editable as the content changes, set the `autoResize` prop to `true`.

```tsx
<Editable.Root placeholder="Placeholder" autoResize>
  {/*...*/}
</Editable.Root>
```

### Setting a maxWidth

It is a common pattern to set a maximum of the editable as it auto-grows. To achieve this, set the `maxWidth` prop to
the desired value.

```tsx
<Editable.Root placeholder="Placeholder" autoResize maxWidth="320px">
  {/*...*/}
</Editable.Root>
```

### Editing with double click

The editable supports two modes of activating the "edit" state:

- when the preview part is focused (with pointer or keyboard).
- when the preview part is double-clicked.

To change the mode to double-click, pass the prop `activationMode="dblclick"`.

```tsx
<Editable.Root placeholder="Placeholder" activationMode="dblclick">
  {/*...*/}
</Editable.Root>
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of an editable. It includes handling
ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Editable } from '@ark-ui/react/editable'
import { Field } from '@ark-ui/react/field'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <Editable.Root placeholder="Placeholder" activationMode="dblclick">
      <Editable.Label>Label</Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
    </Editable.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the editable. It accepts the value of the `useEditable` hook. You
can leverage it to access the component state and methods from outside the editable.

```tsx
import { Editable, useEditable } from '@ark-ui/react/editable'

export const RootProvider = () => {
  const editable = useEditable({ placeholder: 'Placeholder' })

  return (
    <>
      <button onClick={() => editable.edit()}>Edit</button>

      <Editable.RootProvider value={editable}>
        <Editable.Label>Label</Editable.Label>
        <Editable.Area>
          <Editable.Input />
          <Editable.Preview />
        </Editable.Area>
      </Editable.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`activationMode`**
Type: `ActivationMode`
Required: false
Default Value: `"focus"`
Description: The activation mode for the preview element.

- "focus" - Enter edit mode when the preview is focused
- "dblclick" - Enter edit mode when the preview is double-clicked
- "click" - Enter edit mode when the preview is clicked

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoResize`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the editable should auto-resize to fit the content.

**`defaultEdit`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the editable is in edit mode by default.

**`defaultValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial value of the editable when rendered.
Use when you don't need to control the value of the editable.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the editable is disabled.

**`edit`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the editable is in edit mode.

**`finalFocusEl`**
Type: `() => HTMLElement | null`
Required: false
Default Value: `undefined`
Description: The element to receive focus when the editable is closed.

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the underlying input.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  area: string
  label: string
  preview: string
  input: string
  control: string
  submitTrigger: string
  cancelTrigger: string
  editTrigger: string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the editable. Useful for composition.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the input's value is invalid.

**`maxLength`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The maximum number of characters allowed in the editable

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name attribute of the editable component. Used for form submission.

**`onEditChange`**
Type: `(details: EditChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to call when the edit mode changes.

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to call when the value changes.

**`onValueCommit`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to call when the value is committed.

**`onValueRevert`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to call when the value is reverted.

**`placeholder`**
Type: `string | { edit: string; preview: string }`
Required: false
Default Value: `undefined`
Description: The placeholder text for the editable.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the editable is read-only.

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the editable is required.

**`selectOnFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to select the text in the input when it is focused.

**`submitMode`**
Type: `SubmitMode`
Required: false
Default Value: `"both"`
Description: The action that triggers submit in the edit mode:

- "enter" - Trigger submit when the enter key is pressed
- "blur" - Trigger submit when the editable is blurred
- "none" - No action will trigger submit. You need to use the submit button
- "both" - Pressing `Enter` and blurring the input will trigger submit

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The translations for the editable.

**`value`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled value of the editable.

### Area

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: editable
**`data-part`**: area
**`data-focus`**: Present when focused
**`data-disabled`**: Present when disabled
**`data-placeholder-shown`**: Present when placeholder is shown

### CancelTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### EditTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: editable
**`data-part`**: input
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only
**`data-invalid`**: Present when invalid
**`data-autoresize`**:

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: editable
**`data-part`**: label
**`data-focus`**: Present when focused
**`data-invalid`**: Present when invalid

### Preview

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: editable
**`data-part`**: preview
**`data-placeholder-shown`**: Present when placeholder is shown
**`data-readonly`**: Present when read-only
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-autoresize`**:

### RootProvider

#### Props

**`value`**
Type: `UseEditableReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### SubmitTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

### Keyboard Support

**`Enter`**
Description: Saves the edited content and exits edit mode.

**`Escape`**
Description: Discards the changes and exits edit mode.

# Field

## Examples

The `Field` component provides contexts such as `invalid`, `disabled`, `required`, and `readOnly` for form elements.
While most Ark UI components natively support these contexts, you can also use the `Field` component with standard HTML
form elements.

### Input

This example shows how to use the `Field` component with a standard input field.

```tsx
import { Field } from '@ark-ui/react/field'

export const Input = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Textarea

This example illustrates how to use the `Field` component with a textarea element.

```tsx
import { Field } from '@ark-ui/react/field'

export const Textarea = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Textarea />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Textarea Autoresize

Pass the `autoresize` prop to the `Textarea` component to enable automatic resizing as the user types.

```tsx
import { Field } from '@ark-ui/react/field'

export const TextareaAutoresize = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Textarea autoresize />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Select

This example demonstrates how to integrate the `Field` component with a select dropdown.

```tsx
import { Field } from '@ark-ui/react/field'

export const Select = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Field.Select>
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Using Ark Components

This example demonstrates how to integrate the `Field` and `Checkbox` components. For more examples of using the `Field`
component with various Ark UI elements, refer to their respective documentation.

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { Field } from '@ark-ui/react/field'
import { CheckIcon, MinusIcon } from 'lucide-react'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <Checkbox.Root>
      <Checkbox.Label>Label</Checkbox.Label>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
        <Checkbox.Indicator indeterminate>
          <MinusIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the field. It accepts the value of the `useField` hook. You can
leverage it to access the component state and methods from outside the field.

```tsx
import { Field, useField } from '@ark-ui/react/field'
import { useState } from 'react'

export const RootProvider = () => {
  const [invalid, setInvalid] = useState(false)
  const value = useField({
    invalid
  })

  return (
    <>
      <button onClick={() => setInvalid((prev) => !prev)}>Toggle Invalid</button>
      <Field.RootProvider value={value}>
        <Field.Label>Label</Field.Label>
        <Field.Input />
        <Field.HelperText>Some additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
      </Field.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Indicates whether the field is disabled.

**`ids`**
Type: `ElementIds`
Required: false
Default Value: `undefined`
Description: The ids of the field parts.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Indicates whether the field is invalid.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Indicates whether the field is read-only.

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Indicates whether the field is required.

### ErrorText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### HelperText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RequiredIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`fallback`**
Type: `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>`
Required: false
Default Value: `undefined`
Description: undefined

### RootProvider

#### Props

**`value`**
Type: `{ ariaDescribedby: string | undefined; ids: { root: string; control: string; label: string; errorText: string; helperText: string; }; refs: { rootRef: RefObject<HTMLDivElement | null>; }; ... 11 more ...; getRequiredIndicatorProps: () => Omit<...>; }`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Select

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Textarea

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoresize`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether the textarea should autoresize

# Fieldset

## Examples

The `Fieldset` component provides contexts such as `invalid` and `disabled` for form elements. While most Ark UI
components natively support these contexts, you can also use the `Field` component with standard HTML form elements.

### Basic Usage

Learn how to use the `Fieldset` component in your project. Let's take a look at the most basic example:

```tsx
import { Fieldset } from '@ark-ui/react/fieldset'

export const Basic = (props: Fieldset.RootProps) => {
  return (
    <Fieldset.Root {...props}>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Fieldset.HelperText>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText>Error text</Fieldset.ErrorText>
    </Fieldset.Root>
  )
}
```

### Fieldset with Fields

This example demonstrates how to use the `Field` component with a standard input field within a `Fieldset`.

```tsx
import { Field } from '@ark-ui/react/field'
import { Fieldset } from '@ark-ui/react/fieldset'

export const WithField = (props: Fieldset.RootProps) => {
  return (
    <Fieldset.Root {...props}>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Fieldset.HelperText>Fieldset Helper Text</Fieldset.HelperText>
      <Fieldset.ErrorText>Fieldset Error Text</Fieldset.ErrorText>
      <Field.Root>
        <Field.Label>Label</Field.Label>
        <Field.Input />
        <Field.HelperText>Field Helper Text</Field.HelperText>
        <Field.ErrorText>Field Error Text</Field.ErrorText>
      </Field.Root>
    </Fieldset.Root>
  )
}
```

### Fieldset with other Form Elements

This example shows how to use the `Fieldset` component with other Ark UI form elements like `Checkbox`.

```tsx
import { Checkbox } from '@ark-ui/react/checkbox'
import { Field } from '@ark-ui/react/field'
import { Fieldset } from '@ark-ui/react/fieldset'

export const WithCheckbox = (props: Fieldset.RootProps) => {
  return (
    <Fieldset.Root {...props}>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Fieldset.HelperText>Fieldset Helper Text</Fieldset.HelperText>
      <Fieldset.ErrorText>Fieldset Error Text</Fieldset.ErrorText>
      <Field.Root>
        <Checkbox.Root>
          <Checkbox.Label>Label</Checkbox.Label>
          <Checkbox.Control>
            <Checkbox.Indicator>✔️</Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
        <Field.HelperText>Field Heler Text</Field.HelperText>
        <Field.ErrorText>Field Error Text</Field.ErrorText>
      </Field.Root>
    </Fieldset.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the fieldset. It accepts the value of the `useFieldset` hook. You
can leverage it to access the component state and methods from outside the fieldset.

````tsx
Example not found```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Indicates whether the fieldset is invalid.

### ErrorText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### HelperText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Legend

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `{ refs: { rootRef: RefObject<HTMLFieldSetElement | null>; }; disabled: boolean; invalid: boolean; getRootProps: () => Omit<DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref">; getLegendProps: () => Omit<...>; getHelperTextProps: () => Omit<...>; getErrorTextProps: () => Omit<....`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.


# File Upload



## Anatomy

To set up the file upload component correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.



## Examples

Learn how to use the `FileUpload` component in your project. Let's take a look at the most basic example:

```tsx
import { FileUpload } from '@ark-ui/react/file-upload'
import { FileIcon } from 'lucide-react'

export const Basic = () => {
  return (
    <FileUpload.Root maxFiles={5}>
      <FileUpload.Label>File Upload</FileUpload.Label>
      <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
      <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUpload.Item key={file.name} file={file}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemPreview type=".*">
                  <FileIcon />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  )
}
````

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of an file upload. It includes
handling ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { FileUpload } from '@ark-ui/react/file-upload'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <FileUpload.Root maxFiles={5}>
      <FileUpload.Label>Label</FileUpload.Label>
      <FileUpload.Trigger>Select</FileUpload.Trigger>
      <FileUpload.ItemGroup />
      <FileUpload.HiddenInput data-testid="input" />
    </FileUpload.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the file-upload. It accepts the value of the `useFile-upload` hook.
You can leverage it to access the component state and methods from outside the file-upload.

```tsx
import { FileUpload, useFileUpload } from '@ark-ui/react/file-upload'
import { FileIcon } from 'lucide-react'

export const RootProvider = () => {
  const fileUpload = useFileUpload({ maxFiles: 5 })

  return (
    <>
      <button onClick={() => fileUpload.clearFiles()}>Clear</button>

      <FileUpload.RootProvider value={fileUpload}>
        <FileUpload.Label>File Upload</FileUpload.Label>
        <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
        <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
        <FileUpload.ItemGroup>
          <FileUpload.Context>
            {({ acceptedFiles }) =>
              acceptedFiles.map((file) => (
                <FileUpload.Item key={file.name} file={file}>
                  <FileUpload.ItemPreview type="image/*">
                    <FileUpload.ItemPreviewImage />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemPreview type=".*">
                    <FileIcon />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                  <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              ))
            }
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput />
      </FileUpload.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`accept`**
Type: `Record<string, string[]> | FileMimeType | FileMimeType[]`
Required: false
Default Value: `undefined`
Description: The accept file types

**`allowDrop`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to allow drag and drop in the dropzone element

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`capture`**
Type: `'user' | 'environment'`
Required: false
Default Value: `undefined`
Description: The default camera to use when capturing media

**`directory`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to accept directories, only works in webkit browsers

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the file input is disabled

**`ids`**
Type: `Partial<{
  root: string
  dropzone: string
  hiddenInput: string
  trigger: string
  label: string
  item(id: string): string
  itemName(id: string): string
  itemSizeText(id: string): string
  itemPreview(id: string): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements. Useful for composition.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the file input is invalid

**`locale`**
Type: `string`
Required: false
Default Value: `"en-US"`
Description: The current locale. Based on the BCP 47 definition.

**`maxFiles`**
Type: `number`
Required: false
Default Value: `1`
Description: The maximum number of files

**`maxFileSize`**
Type: `number`
Required: false
Default Value: `Infinity`
Description: The maximum file size in bytes

**`minFileSize`**
Type: `number`
Required: false
Default Value: `0`
Description: The minimum file size in bytes

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the underlying file input

**`onFileAccept`**
Type: `(details: FileAcceptDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the file is accepted

**`onFileChange`**
Type: `(details: FileChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the value changes, whether accepted or rejected

**`onFileReject`**
Type: `(details: FileRejectDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the file is rejected

**`preventDocumentDrop`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to prevent the drop event on the document

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the file input is required

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The localized messages to use.

**`validate`**
Type: `(file: File, details: FileValidateDetails) => FileError[] | null`
Required: false
Default Value: `undefined`
Description: Function to validate a file

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: root
**`data-disabled`**: Present when disabled
**`data-dragging`**: Present when in the dragging state

### ClearTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: clear-trigger
**`data-disabled`**: Present when disabled

### Dropzone

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disableClick`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to disable the click event on the dropzone

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: dropzone
**`data-invalid`**: Present when invalid
**`data-disabled`**: Present when disabled
**`data-dragging`**: Present when in the dragging state

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemDeleteTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: item-delete-trigger
**`data-disabled`**: Present when disabled

### ItemGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: item-group
**`data-disabled`**: Present when disabled

### ItemName

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: item-name
**`data-disabled`**: Present when disabled

### ItemPreviewImage

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: item-preview-image
**`data-disabled`**: Present when disabled

### ItemPreview

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`type`**
Type: `string`
Required: false
Default Value: `'.*'`
Description: The file type to match against. Matches all file types by default.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: item-preview
**`data-disabled`**: Present when disabled

### Item

#### Props

**`file`**
Type: `File`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: item
**`data-disabled`**: Present when disabled

### ItemSizeText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: item-size-text
**`data-disabled`**: Present when disabled

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: label
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseFileUploadReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: file-upload
**`data-part`**: trigger
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid

# Floating Panel

## Anatomy

To set up the editable correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `FloatingPanel` component in your project. Let's take a look at the most basic example:

```tsx
import { FloatingPanel } from '@ark-ui/react/floating-panel'
import { Portal } from '@ark-ui/react/portal'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react'

export const Basic = () => (
  <FloatingPanel.Root>
    <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
    <Portal>
      <FloatingPanel.Positioner>
        <FloatingPanel.Content>
          <FloatingPanel.DragTrigger>
            <FloatingPanel.Header>
              <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.StageTrigger stage="minimized">
                  <Minus />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="maximized">
                  <Maximize2 />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="default">
                  <ArrowDownLeft />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.CloseTrigger>
                  <XIcon />
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>
            <p>Some content</p>
          </FloatingPanel.Body>

          <FloatingPanel.ResizeTrigger axis="n" />
          <FloatingPanel.ResizeTrigger axis="e" />
          <FloatingPanel.ResizeTrigger axis="w" />
          <FloatingPanel.ResizeTrigger axis="s" />
          <FloatingPanel.ResizeTrigger axis="ne" />
          <FloatingPanel.ResizeTrigger axis="se" />
          <FloatingPanel.ResizeTrigger axis="sw" />
          <FloatingPanel.ResizeTrigger axis="nw" />
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </Portal>
  </FloatingPanel.Root>
)
```

### Controlling the size

To control the size of the floating panel programmatically, you can pass the `size` `onResize` prop to the machine.

```tsx
import { FloatingPanel } from '@ark-ui/react/floating-panel'
import { Portal } from '@ark-ui/react/portal'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react'
import { useState } from 'react'

export const ControlledSize = () => {
  const [size, setSize] = useState({ width: 400, height: 300 })

  return (
    <FloatingPanel.Root size={size} onSizeChange={(e) => setSize(e.size)}>
      <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage="minimized">
                    <Minus />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="maximized">
                    <Maximize2 />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="default">
                    <ArrowDownLeft />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger>
                    <XIcon />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>
              <p>Some content</p>
            </FloatingPanel.Body>

            <FloatingPanel.ResizeTrigger axis="n" />
            <FloatingPanel.ResizeTrigger axis="e" />
            <FloatingPanel.ResizeTrigger axis="w" />
            <FloatingPanel.ResizeTrigger axis="s" />
            <FloatingPanel.ResizeTrigger axis="ne" />
            <FloatingPanel.ResizeTrigger axis="se" />
            <FloatingPanel.ResizeTrigger axis="sw" />
            <FloatingPanel.ResizeTrigger axis="nw" />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
```

### Controlling the position

To control the position of the floating panel programmatically, you can pass the `position` and `onPositionChange` prop
to the machine.

```tsx
import { FloatingPanel } from '@ark-ui/react/floating-panel'
import { Portal } from '@ark-ui/react/portal'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react'
import { useState } from 'react'

export const ControlledPosition = () => {
  const [position, setPosition] = useState({ x: 200, y: 200 })

  return (
    <FloatingPanel.Root position={position} onPositionChange={(e) => setPosition(e.position)}>
      <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage="minimized">
                    <Minus />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="maximized">
                    <Maximize2 />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="default">
                    <ArrowDownLeft />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger>
                    <XIcon />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>
              <p>Some content</p>
            </FloatingPanel.Body>

            <FloatingPanel.ResizeTrigger axis="n" />
            <FloatingPanel.ResizeTrigger axis="e" />
            <FloatingPanel.ResizeTrigger axis="w" />
            <FloatingPanel.ResizeTrigger axis="s" />
            <FloatingPanel.ResizeTrigger axis="ne" />
            <FloatingPanel.ResizeTrigger axis="se" />
            <FloatingPanel.ResizeTrigger axis="sw" />
            <FloatingPanel.ResizeTrigger axis="nw" />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
```

### Anchor position

Use the `getAnchorPosition` function to compute the initial position of the floating panel. This function is called when
the panel is opened and receives the `triggerRect` and `boundaryRect`.

```tsx
import { FloatingPanel } from '@ark-ui/react/floating-panel'
import { Portal } from '@ark-ui/react/portal'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react'

export const AnchorPosition = () => (
  <FloatingPanel.Root
    getAnchorPosition={({ triggerRect }) => {
      if (!triggerRect) return { x: 0, y: 0 }
      return {
        x: triggerRect.x + triggerRect.width / 2,
        y: triggerRect.y + triggerRect.height / 2
      }
    }}
  >
    <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
    <Portal>
      <FloatingPanel.Positioner>
        <FloatingPanel.Content>
          <FloatingPanel.DragTrigger>
            <FloatingPanel.Header>
              <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.StageTrigger stage="minimized">
                  <Minus />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="maximized">
                  <Maximize2 />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="default">
                  <ArrowDownLeft />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.CloseTrigger>
                  <XIcon />
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>
            <p>Some content</p>
          </FloatingPanel.Body>

          <FloatingPanel.ResizeTrigger axis="n" />
          <FloatingPanel.ResizeTrigger axis="e" />
          <FloatingPanel.ResizeTrigger axis="w" />
          <FloatingPanel.ResizeTrigger axis="s" />
          <FloatingPanel.ResizeTrigger axis="ne" />
          <FloatingPanel.ResizeTrigger axis="se" />
          <FloatingPanel.ResizeTrigger axis="sw" />
          <FloatingPanel.ResizeTrigger axis="nw" />
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </Portal>
  </FloatingPanel.Root>
)
```

### Controlling the open state

To control the open state of the floating panel programmatically, you can pass the `open` and `onOpenChange` prop to the
machine.

```tsx
import { FloatingPanel } from '@ark-ui/react/floating-panel'
import { Portal } from '@ark-ui/react/portal'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react'
import { useState } from 'react'

export const ControlledOpen = () => {
  const [open, setOpen] = useState(false)

  return (
    <FloatingPanel.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage="minimized">
                    <Minus />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="maximized">
                    <Maximize2 />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="default">
                    <ArrowDownLeft />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger>
                    <XIcon />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>
              <p>Some content</p>
            </FloatingPanel.Body>

            <FloatingPanel.ResizeTrigger axis="n" />
            <FloatingPanel.ResizeTrigger axis="e" />
            <FloatingPanel.ResizeTrigger axis="w" />
            <FloatingPanel.ResizeTrigger axis="s" />
            <FloatingPanel.ResizeTrigger axis="ne" />
            <FloatingPanel.ResizeTrigger axis="se" />
            <FloatingPanel.ResizeTrigger axis="sw" />
            <FloatingPanel.ResizeTrigger axis="nw" />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
```

### Lazy mounting

To lazy mount the floating panel, you can pass the `lazyMount` prop to the machine.

```tsx
import { FloatingPanel } from '@ark-ui/react/floating-panel'
import { Portal } from '@ark-ui/react/portal'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react'

export const LazyMount = () => (
  <FloatingPanel.Root lazyMount onExitComplete={() => console.log('onExitComplete invoked')}>
    <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
    <Portal>
      <FloatingPanel.Positioner>
        <FloatingPanel.Content>
          <FloatingPanel.DragTrigger>
            <FloatingPanel.Header>
              <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.StageTrigger stage="minimized">
                  <Minus />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="maximized">
                  <Maximize2 />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="default">
                  <ArrowDownLeft />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.CloseTrigger>
                  <XIcon />
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>
            <p>Some content</p>
          </FloatingPanel.Body>

          <FloatingPanel.ResizeTrigger axis="n" />
          <FloatingPanel.ResizeTrigger axis="e" />
          <FloatingPanel.ResizeTrigger axis="w" />
          <FloatingPanel.ResizeTrigger axis="s" />
          <FloatingPanel.ResizeTrigger axis="ne" />
          <FloatingPanel.ResizeTrigger axis="se" />
          <FloatingPanel.ResizeTrigger axis="sw" />
          <FloatingPanel.ResizeTrigger axis="nw" />
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </Portal>
  </FloatingPanel.Root>
)
```

### Context

To access the context of the floating panel, you can use the `useFloatingPanelContext` hook or the
`FloatingPanel.Context` component.

```tsx
import { FloatingPanel } from '@ark-ui/react/floating-panel'
import { Portal } from '@ark-ui/react/portal'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react'

export const RenderFn = () => (
  <FloatingPanel.Root>
    <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
    <FloatingPanel.Context>
      {(floatingPanel) => <p>floatingPanel. is {floatingPanel.open ? 'open' : 'closed'}</p>}
    </FloatingPanel.Context>
    <Portal>
      <FloatingPanel.Positioner>
        <FloatingPanel.Content>
          <FloatingPanel.DragTrigger>
            <FloatingPanel.Header>
              <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.StageTrigger stage="minimized">
                  <Minus />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="maximized">
                  <Maximize2 />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="default">
                  <ArrowDownLeft />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.CloseTrigger>
                  <XIcon />
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>
            <p>Some content</p>
          </FloatingPanel.Body>

          <FloatingPanel.ResizeTrigger axis="n" />
          <FloatingPanel.ResizeTrigger axis="e" />
          <FloatingPanel.ResizeTrigger axis="w" />
          <FloatingPanel.ResizeTrigger axis="s" />
          <FloatingPanel.ResizeTrigger axis="ne" />
          <FloatingPanel.ResizeTrigger axis="se" />
          <FloatingPanel.ResizeTrigger axis="sw" />
          <FloatingPanel.ResizeTrigger axis="nw" />
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </Portal>
  </FloatingPanel.Root>
)
```

## API Reference

### Root

#### Props

**`allowOverflow`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the panel should be strictly contained within the boundary when dragging

**`closeOnEscape`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the panel should close when the escape key is pressed

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `false`
Description: The initial open state of the panel when rendered.
Use when you don't need to control the open state of the panel.

**`defaultPosition`**
Type: `Point`
Required: false
Default Value: `undefined`
Description: The initial position of the panel when rendered.
Use when you don't need to control the position of the panel.

**`defaultSize`**
Type: `Size`
Required: false
Default Value: `undefined`
Description: The default size of the panel

**`dir`**
Type: `'ltr' | 'rtl'`
Required: false
Default Value: `"ltr"`
Description: The document's text/writing direction.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the panel is disabled

**`draggable`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the panel is draggable

**`getAnchorPosition`**
Type: `(details: AnchorPositionDetails) => Point`
Required: false
Default Value: `undefined`
Description: Function that returns the initial position of the panel when it is opened.
If provided, will be used instead of the default position.

**`getBoundaryEl`**
Type: `() => HTMLElement | null`
Required: false
Default Value: `undefined`
Description: The boundary of the panel. Useful for recalculating the boundary rect when
the it is resized.

**`gridSize`**
Type: `number`
Required: false
Default Value: `1`
Description: The snap grid for the panel

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ trigger: string; positioner: string; content: string; title: string; header: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the floating panel. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`lockAspectRatio`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the panel is locked to its aspect ratio

**`maxSize`**
Type: `Size`
Required: false
Default Value: `undefined`
Description: The maximum size of the panel

**`minSize`**
Type: `Size`
Required: false
Default Value: `undefined`
Description: The minimum size of the panel

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the panel is opened or closed

**`onPositionChange`**
Type: `(details: PositionChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the position of the panel changes via dragging

**`onPositionChangeEnd`**
Type: `(details: PositionChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the position of the panel changes via dragging ends

**`onSizeChange`**
Type: `(details: SizeChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the size of the panel changes via resizing

**`onSizeChangeEnd`**
Type: `(details: SizeChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the size of the panel changes via resizing ends

**`onStageChange`**
Type: `(details: StageChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the stage of the panel changes

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the panel

**`persistRect`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the panel size and position should be preserved when it is closed

**`position`**
Type: `Point`
Required: false
Default Value: `undefined`
Description: The controlled position of the panel

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`resizable`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the panel is resizable

**`size`**
Type: `Size`
Required: false
Default Value: `undefined`
Description: The size of the panel

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`strategy`**
Type: `'absolute' | 'fixed'`
Required: false
Default Value: `"fixed"`
Description: The strategy to use for positioning

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The translations for the floating panel.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Body

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: floating-panel
**`data-part`**: body
**`data-dragging`**: Present when in the dragging state

### CloseTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: floating-panel
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-dragging`**: Present when in the dragging state
**`data-topmost`**:
**`data-behind`**:

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### DragTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: floating-panel
**`data-part`**: drag-trigger
**`data-disabled`**: Present when disabled

### Header

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: floating-panel
**`data-part`**: header
**`data-dragging`**: Present when in the dragging state
**`data-topmost`**:
**`data-behind`**:

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ResizeTrigger

#### Props

**`axis`**
Type: `ResizeTriggerAxis`
Required: true
Default Value: `undefined`
Description: The axis of the resize handle

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: floating-panel
**`data-part`**: resize-trigger
**`data-disabled`**: Present when disabled
**`data-axis`**: The axis to resize

### RootProvider

#### Props

**`value`**
Type: `UseFloatingPanelReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### StageTrigger

#### Props

**`stage`**
Type: `Stage`
Required: true
Default Value: `undefined`
Description: The stage of the panel

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Title

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: floating-panel
**`data-part`**: trigger
**`data-state`**: "open" | "closed"
**`data-dragging`**: Present when in the dragging state

# Hover Card

## Anatomy

To set up the hover card correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `HoverCard` component in your project. Let's take a look at the most basic example:

```tsx
import { HoverCard } from '@ark-ui/react/hover-card'
import { Portal } from '@ark-ui/react/portal'

export const Basic = () => (
  <HoverCard.Root>
    <HoverCard.Trigger>Hover me</HoverCard.Trigger>
    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
)
```

### Controlled HoverCard

The controlled `HoverCard` component provides an interface for managing the state of the hover card using the `open` and
`onOpenChange` props:

```tsx
import { HoverCard } from '@ark-ui/react/hover-card'
import { Portal } from '@ark-ui/react/portal'
import { useState } from 'react'

export const Controlled = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setOpen(!isOpen)}>
        click me
      </button>
      <HoverCard.Root open={isOpen} onOpenChange={() => setOpen(false)}>
        <HoverCard.Trigger>Hover me</HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              Content
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </>
  )
}
```

### Custom Positioning

The `HoverCard` component can be customized in its placement and distance from the trigger element through the
`positioning` prop:

```tsx
import { HoverCard } from '@ark-ui/react/hover-card'
import { Portal } from '@ark-ui/react/portal'

export const Positioning = () => (
  <HoverCard.Root positioning={{ placement: 'right', gutter: 12 }}>
    <HoverCard.Trigger>Hover me</HoverCard.Trigger>
    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
)
```

### Render Prop Usage

The `HoverCard` component can also accept a render prop, giving the user more control over rendering behavior. This is
useful for dynamically updating the trigger based on the state of the `HoverCard`:

```tsx
import { HoverCard } from '@ark-ui/react/hover-card'
import { Portal } from '@ark-ui/react/portal'

export const RenderProp = () => (
  <HoverCard.Root>
    <HoverCard.Context>
      {(hoverCard) => <HoverCard.Trigger>Hover me {hoverCard.open ? '▲' : '▼'} </HoverCard.Trigger>}
    </HoverCard.Context>
    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the hover-card. It accepts the value of the `useHover-card` hook.
You can leverage it to access the component state and methods from outside the hover-card.

```tsx
import { HoverCard, useHoverCard } from '@ark-ui/react/hover-card'
import { Portal } from '@ark-ui/react/portal'

export const RootProvider = () => {
  const hoverCard = useHoverCard()

  return (
    <>
      <button onClick={() => hoverCard.setOpen(true)}>Open</button>

      <HoverCard.RootProvider value={hoverCard}>
        <HoverCard.Trigger>Hover me</HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              Content
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`closeDelay`**
Type: `number`
Required: false
Default Value: `300`
Description: The duration from when the mouse leaves the trigger or content until the hover card closes.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the hover card when rendered.
Use when you don't need to control the open state of the hover card.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ trigger: string; content: string; positioner: string; arrow: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the popover. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the hover card opens or closes.

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the hover card

**`openDelay`**
Type: `number`
Required: false
Default Value: `700`
Description: The duration from when the mouse enters the trigger until the hover card opens.

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `undefined`
Description: The user provided options used to position the popover content

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Arrow

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ArrowTip

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: hover-card
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-placement`**: The placement of the content

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseHoverCardReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: hover-card
**`data-part`**: trigger
**`data-placement`**: The placement of the trigger
**`data-state`**: "open" | "closed"

# Listbox

## Anatomy

To set up the Listbox correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

{/\* \*/}

## Examples

### Basic

Here's a basic example of the Listbox component.

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox'

export const Basic = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })

  return (
    <Listbox.Root collection={collection}>
      <Listbox.Label>Select your Framework</Listbox.Label>
      <Listbox.Content>
        {collection.items.map((item) => (
          <Listbox.Item key={item} item={item}>
            <Listbox.ItemText>{item}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}
```

### Controlled

The Listbox component can be controlled by using the `value` and `onValueChange` props. This allows you to manage the
selected value externally.

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox'
import { useState } from 'react'

export const Controlled = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })
  const [value, setValue] = useState(['React'])

  return (
    <Listbox.Root value={value} onValueChange={(e) => setValue(e.value)} collection={collection}>
      <Listbox.Label>Select your Framework</Listbox.Label>
      <Listbox.Content>
        {collection.items.map((item) => (
          <Listbox.Item key={item} item={item}>
            <Listbox.ItemText>{item}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}
```

### Disabled Item

Listbox items can be disabled using the `disabled` prop on the collection item.

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox'

export const Disabled = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Svelte', value: 'svelte', disabled: true },
      { label: 'Vue', value: 'vue' }
    ]
  })

  return (
    <Listbox.Root collection={collection}>
      <Listbox.Label>Select your Framework</Listbox.Label>
      <Listbox.Content>
        {collection.items.map((item) => (
          <Listbox.Item key={item.value} item={item}>
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}
```

> You can also use the `isItemDisabled` within the `createListCollection` to disable items based on a condition.

### Multiple Selection

You can set the `selectionMode` property as `multiple` to allow the user to select multiple items at a time.

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox'

export const Multiple = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })

  return (
    <Listbox.Root collection={collection} selectionMode="multiple">
      <Listbox.Label>Select your Framework</Listbox.Label>
      <Listbox.Content>
        {collection.items.map((item) => (
          <Listbox.Item key={item} item={item}>
            <Listbox.ItemText>{item}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}
```

### Grouping

The Listbox component supports grouping items. You can use the `groupBy` function to group items based on a specific
property.

```tsx
import { Listbox, createListCollection } from '@ark-ui/react/listbox'

export const Group = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react', type: 'JS' },
      { label: 'Solid', value: 'solid', type: 'JS' },
      { label: 'Vue', value: 'vue', type: 'JS' },
      { label: 'Panda', value: 'panda', type: 'CSS' },
      { label: 'Tailwind', value: 'tailwind', type: 'CSS' }
    ],
    groupBy: (item) => item.type
  })

  return (
    <Listbox.Root collection={collection}>
      <Listbox.Label>Select your Frameworks</Listbox.Label>
      <Listbox.Content>
        {collection.group().map(([type, group]) => (
          <Listbox.ItemGroup key={type}>
            <Listbox.ItemGroupLabel>{type}</Listbox.ItemGroupLabel>
            {group.map((item) => (
              <Listbox.Item key={item.value} item={item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.ItemGroup>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}
```

## API Reference

### Root

#### Props

**`collection`**
Type: `ListCollection<T>`
Required: true
Default Value: `undefined`
Description: The collection of items

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultHighlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial value of the highlighted item when opened.
Use when you don't need to control the highlighted value of the listbox.

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `[]`
Description: The initial default value of the listbox when rendered.
Use when you don't need to control the value of the listbox.

**`deselectable`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to disallow empty selection

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the listbox is disabled

**`disallowSelectAll`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to disallow selecting all items when `meta+a` is pressed

**`highlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled key of the highlighted item

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  content: string
  label: string
  item(id: string | number): string
  itemGroup(id: string | number): string
  itemGroupLabel(id: string | number): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the listbox. Useful for composition.

**`loopFocus`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to loop the keyboard navigation through the options

**`onHighlightChange`**
Type: `(details: HighlightChangeDetails<T>) => void`
Required: false
Default Value: `undefined`
Description: The callback fired when the highlighted item changes.

**`onSelect`**
Type: `(details: SelectionDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when an item is selected

**`onValueChange`**
Type: `(details: ValueChangeDetails<T>) => void`
Required: false
Default Value: `undefined`
Description: The callback fired when the selected item changes.

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the element.

**`scrollToIndexFn`**
Type: `(details: ScrollToIndexDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to scroll to a specific index

**`selectionMode`**
Type: `SelectionMode`
Required: false
Default Value: `"single"`
Description: How multiple selection should behave in the listbox.

- `single`: The user can select a single item.
- `multiple`: The user can select multiple items without using modifier keys.
- `extended`: The user can select multiple items by using modifier keys.

**`selectOnHighlight`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to select the item when it is highlighted

**`typeahead`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to enable typeahead on the listbox

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled keys of the selected items

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: root
**`data-orientation`**: The orientation of the listbox
**`data-disabled`**: Present when disabled

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: content
**`data-activedescendant`**:
**`data-orientation`**: The orientation of the content
**`data-layout`**:
**`data-empty`**:

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoHighlight`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to automatically highlight the item when typing

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: input
**`data-disabled`**: Present when disabled

### ItemGroupLabel

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: item-group
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the item
**`data-empty`**:

### ItemIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: item-indicator
**`data-state`**: "checked" | "unchecked"

### Item

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`highlightOnHover`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to highlight the item on hover

**`item`**
Type: `any`
Required: false
Default Value: `undefined`
Description: The item to render

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: item
**`data-value`**: The value of the item
**`data-selected`**: Present when selected
**`data-layout`**:
**`data-state`**: "checked" | "unchecked"
**`data-orientation`**: The orientation of the item
**`data-highlighted`**: Present when highlighted
**`data-disabled`**: Present when disabled

### ItemText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: item-text
**`data-state`**: "checked" | "unchecked"
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: label
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseListboxReturn<T>`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`placeholder`**
Type: `string`
Required: false
Default Value: `undefined`
Description: Text to display when no value is listboxed.

#### Data Attributes

**`data-scope`**: listbox
**`data-part`**: value-text
**`data-disabled`**: Present when disabled

# Menu

## Anatomy

To set up the menu correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Menu` component in your project. Let's take a look at the most basic example:

```tsx
import { Menu } from '@ark-ui/react/menu'

export const Basic = () => (
  <Menu.Root>
    <Menu.Trigger>
      Open menu <Menu.Indicator>➡️</Menu.Indicator>
    </Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="react">React</Menu.Item>
        <Menu.Item value="solid">Solid</Menu.Item>
        <Menu.Item value="vue">Vue</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
)
```

### Listening to item selection

Pass the `onSelect` prop to the Menu component to perform some custom logic when an item is selected. The callback is
invoked with the `id` of the item.

```tsx
import { Menu } from '@ark-ui/react/menu'
import { useState } from 'react'

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Trigger from the outside
      </button>
      <Menu.Root open={isOpen}>
        <Menu.Trigger>
          Open menu <Menu.Indicator>➡️</Menu.Indicator>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="react">React</Menu.Item>
            <Menu.Item value="solid">Solid</Menu.Item>
            <Menu.Item value="vue">Vue</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  )
}
```

### Grouping menu items

When the number of menu items gets much, it might be useful to group related menu items. To achieve this, render the
`Menu.ItemGroup` component around the `Menu.Item` components. The `Menu.ItemGroupLabel` component can be used to add a
label to the group.

```tsx
import { Menu } from '@ark-ui/react/menu'

export const Group = () => (
  <Menu.Root>
    <Menu.Trigger>Open menu</Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>JS Frameworks</Menu.ItemGroupLabel>
          <Menu.Item value="react">React</Menu.Item>
          <Menu.Item value="solid">Solid</Menu.Item>
          <Menu.Item value="vue">Vue</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>CSS Frameworks</Menu.ItemGroupLabel>
          <Menu.Item value="panda">Panda</Menu.Item>
          <Menu.Item value="tailwind">Tailwind</Menu.Item>
        </Menu.ItemGroup>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
)
```

### Separating menu items

To separate menu items, render the `Menu.Separator` component.

```tsx
import { Menu } from '@ark-ui/react/menu'

export const Separator = () => (
  <Menu.Root>
    <Menu.Trigger>Open menu</Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="react">React</Menu.Item>
        <Menu.Item value="solid">Solid</Menu.Item>
        <Menu.Separator />
        <Menu.Item value="vue">Vue</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
)
```

### Context menu

To show the menu when a trigger element is right-clicked, use the `Menu.ContextTrigger` component.

Context menus are also opened during a long-press of roughly `700ms` when the pointer is pen or touch.

```tsx
import { Menu } from '@ark-ui/react/menu'

export const Context = () => (
  <Menu.Root>
    <Menu.ContextTrigger>Right click me</Menu.ContextTrigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="react">React</Menu.Item>
        <Menu.Item value="solid">Solid</Menu.Item>
        <Menu.Item value="vue">Vue</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
)
```

### Nested menu

To show a nested menu, render another `Menu` component and use the `Menu.TriggerItem` component to open the submenu.

```tsx
import { Menu } from '@ark-ui/react/menu'
import { Portal } from '@ark-ui/react/portal'

export const Nested = () => (
  <Menu.Root>
    <Menu.Trigger>Open menu</Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Root>
          <Menu.TriggerItem>JS Frameworks</Menu.TriggerItem>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="react">React</Menu.Item>
                <Menu.Item value="solid">Solid</Menu.Item>
                <Menu.Item value="vue">Vue</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        <Menu.Root>
          <Menu.TriggerItem>CSS Frameworks</Menu.TriggerItem>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="panda">Panda</Menu.Item>
                <Menu.Item value="tailwind">Tailwind</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
)
```

### Checkbox

To add a checkbox to a menu item, use the `Menu.Checkbox` component.

```tsx
import { Menu } from '@ark-ui/react/menu'
import { useState } from 'react'

export const Checkbox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Menu.Root>
      <Menu.Trigger>Open menu</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.CheckboxItem checked={checked} onCheckedChange={setChecked} value="checked">
            <Menu.ItemIndicator>✅</Menu.ItemIndicator>
            <Menu.ItemText>Check me</Menu.ItemText>
          </Menu.CheckboxItem>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
```

### Radio Group

To group radio option items, use the `Menu.RadioGroup` component.

```tsx
import { Menu } from '@ark-ui/react/menu'
import { useState } from 'react'

export const RadioGroup = () => {
  const [value, setValue] = useState('React')

  return (
    <Menu.Root>
      <Menu.Trigger>Open menu</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.RadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            <Menu.ItemGroupLabel>JS Frameworks</Menu.ItemGroupLabel>
            {['React', 'Solid', 'Vue'].map((framework) => (
              <Menu.RadioItem key={framework} value={framework}>
                <Menu.ItemIndicator>✅</Menu.ItemIndicator>
                <Menu.ItemText>{framework}</Menu.ItemText>
              </Menu.RadioItem>
            ))}
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the menu. It accepts the value of the `useMenu` hook. You can
leverage it to access the component state and methods from outside the menu.

```tsx
import { Menu, useMenu } from '@ark-ui/react/menu'

export const RootProvider = () => {
  const menu = useMenu()

  return (
    <>
      <button onClick={() => menu.api.setHighlightedValue('solid')}>Highlight Solid</button>

      <Menu.RootProvider value={menu}>
        <Menu.Trigger>
          Open menu <Menu.Indicator>➡️</Menu.Indicator>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="react">React</Menu.Item>
            <Menu.Item value="solid">Solid</Menu.Item>
            <Menu.Item value="vue">Vue</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`anchorPoint`**
Type: `Point`
Required: false
Default Value: `undefined`
Description: The positioning point for the menu. Can be set by the context menu trigger or the button trigger.

**`aria-label`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The accessibility label for the menu

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to close the menu when an option is selected

**`composite`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the menu is a composed with other composite widgets like a combobox or tabs

**`defaultHighlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial highlighted value of the menu item when rendered.
Use when you don't need to control the highlighted value of the menu item.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the menu when rendered.
Use when you don't need to control the open state of the menu.

**`highlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled highlighted value of the menu item.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  trigger: string
  contextTrigger: string
  content: string
  groupLabel(id: string): string
  group(id: string): string
  positioner: string
  arrow: string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the menu. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`loopFocus`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to loop the keyboard navigation.

**`navigate`**
Type: `(details: NavigateDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to navigate to the selected item if it's an anchor element

**`onEscapeKeyDown`**
Type: `(event: KeyboardEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the escape key is pressed

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onHighlightChange`**
Type: `(details: HighlightChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the highlighted menu item changes.

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the menu opens or closes

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`onSelect`**
Type: `(details: SelectionDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when a menu item is selected.

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the menu

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `undefined`
Description: The options used to dynamically position the menu

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`typeahead`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the pressing printable characters should trigger typeahead navigation

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Arrow

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ArrowTip

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### CheckboxItem

#### Props

**`checked`**
Type: `boolean`
Required: true
Default Value: `undefined`
Description: Whether the option is checked

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The value of the option

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the menu should be closed when the option is selected.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the menu item is disabled

**`onCheckedChange`**
Type: `(checked: boolean) => void`
Required: false
Default Value: `undefined`
Description: Function called when the option state is changed

**`valueText`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The textual value of the option. Used in typeahead navigation of the menu.
If not provided, the text content of the menu item will be used.

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: menu
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-placement`**: The placement of the content

### ContextTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: menu
**`data-part`**: indicator
**`data-state`**: "open" | "closed"

### ItemGroupLabel

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: menu
**`data-part`**: item-indicator
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted
**`data-state`**: "checked" | "unchecked"

### Item

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The unique value of the menu item option.

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the menu should be closed when the option is selected.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the menu item is disabled

**`onSelect`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: The function to call when the item is selected

**`valueText`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The textual value of the option. Used in typeahead navigation of the menu.
If not provided, the text content of the menu item will be used.

#### Data Attributes

**`data-scope`**: menu
**`data-part`**: item
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted
**`data-value`**: The value of the item
**`data-valuetext`**: The human-readable value

### ItemText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: menu
**`data-part`**: item-text
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted
**`data-state`**: "checked" | "unchecked"

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RadioItemGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`onValueChange`**
Type: `(e: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: undefined

**`value`**
Type: `string`
Required: false
Default Value: `undefined`
Description: undefined

### RadioItem

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The value of the option

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the menu should be closed when the option is selected.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the menu item is disabled

**`valueText`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The textual value of the option. Used in typeahead navigation of the menu.
If not provided, the text content of the menu item will be used.

### RootProvider

#### Props

**`value`**
Type: `UseMenuReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Separator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### TriggerItem

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: menu
**`data-part`**: trigger
**`data-placement`**: The placement of the trigger
**`data-state`**: "open" | "closed"

## Accessibility

Complies with the [Menu WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

### Keyboard Support

**`Space`**
Description: Activates/Selects the highlighted item

**`Enter`**
Description: Activates/Selects the highlighted item

**`ArrowDown`**
Description: Highlights the next item in the menu

**`ArrowUp`**
Description: Highlights the previous item in the menu

**`ArrowRight + ArrowLeft`**
Description: <span>When focus is on trigger, opens or closes the submenu depending on reading direction.</span>

**`Esc`**
Description: Closes the menu and moves focus to the trigger

# Number Input

## Anatomy

To set up the number input correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `NumberInput` component in your project. Let's take a look at the most basic example:

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const Basic = () => (
  <NumberInput.Root>
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Setting a minimum and maximum value

Pass the `min` prop or `max` prop to set an upper and lower limit for the input. By default, the input will restrict the
value to stay within the specified range.

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const MinMax = () => (
  <NumberInput.Root min={0} max={10}>
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Adjusting the precision of the value

In some cases, you might need the value to be rounded to specific decimal points. Set the `formatOptions` and provide
`Intl.NumberFormatOptions` such as `maximumFractionDigits` or `minimumFractionDigits`.

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const FractionDigits = () => (
  <NumberInput.Root formatOptions={{ minimumFractionDigits: 2, maximumFractionDigits: 3 }} defaultValue="1.00">
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Scrubbing the input value

The NumberInput supports the scrubber interaction pattern. To use this pattern, render the `NumberInput.Scrubber`
component. It uses the Pointer lock API and tracks the pointer movement. It also renders a virtual cursor which mimics
the real cursor's pointer.

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const Scrubber = () => (
  <NumberInput.Root>
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Using the mouse wheel to change value

The NumberInput exposes a way to increment/decrement the value using the mouse wheel event. To activate this, set the
`allowMouseWheel` prop to `true`.

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const MouseWheel = () => (
  <NumberInput.Root allowMouseWheel>
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Clamp value when user blurs the input

In most cases, users can type custom values in the input field. If the typed value is greater than the max, the value is
reset to max when the user blur out of the input.

To disable this behavior, pass `clampValueOnBlur` and set to `false`.

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const NoClamp = () => (
  <NumberInput.Root clampValueOnBlur={false}>
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Usage within forms

To use the number input within forms, set the `name` prop.

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const FormUsage = () => (
  <NumberInput.Root name="quantity">
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Format and parse value

To apply custom formatting to the input's value, set the `formatOptions` and provide `Intl.NumberFormatOptions` such as
`style` and `currency`.

```tsx
import { NumberInput } from '@ark-ui/react/number-input'

export const Formatted = () => (
  <NumberInput.Root
    formatOptions={{
      style: 'currency',
      currency: 'USD'
    }}
  >
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a number input. It includes
handling ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { NumberInput } from '@ark-ui/react/number-input'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <NumberInput.Root>
      <NumberInput.Label>Label</NumberInput.Label>
      <NumberInput.Input />
      <NumberInput.Control>
        <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
        <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the number-input. It accepts the value of the `useNumber-input`
hook. You can leverage it to access the component state and methods from outside the number-input.

```tsx
import { NumberInput, useNumberInput } from '@ark-ui/react/number-input'

export const RootProvider = () => {
  const numberInput = useNumberInput()

  return (
    <>
      <button onClick={() => numberInput.focus()}>Focus</button>

      <NumberInput.RootProvider value={numberInput}>
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
          <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </NumberInput.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`allowMouseWheel`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to allow mouse wheel to change the value

**`allowOverflow`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to allow the value overflow the min/max range

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`clampValueOnBlur`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to clamp the value when the input loses focus (blur)

**`defaultValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial value of the input when rendered.
Use when you don't need to control the value of the input.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the number input is disabled.

**`focusInputOnChange`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to focus input when the value changes

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the input element.

**`formatOptions`**
Type: `NumberFormatOptions`
Required: false
Default Value: `undefined`
Description: The options to pass to the `Intl.NumberFormat` constructor

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  label: string
  input: string
  incrementTrigger: string
  decrementTrigger: string
  scrubber: string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the number input. Useful for composition.

**`inputMode`**
Type: `InputMode`
Required: false
Default Value: `"decimal"`
Description: Hints at the type of data that might be entered by the user. It also determines
the type of keyboard shown to the user on mobile devices

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the number input value is invalid.

**`locale`**
Type: `string`
Required: false
Default Value: `"en-US"`
Description: The current locale. Based on the BCP 47 definition.

**`max`**
Type: `number`
Required: false
Default Value: `Number.MAX_SAFE_INTEGER`
Description: The maximum value of the number input

**`min`**
Type: `number`
Required: false
Default Value: `Number.MIN_SAFE_INTEGER`
Description: The minimum value of the number input

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name attribute of the number input. Useful for form submission.

**`onFocusChange`**
Type: `(details: FocusChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the number input is focused

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the value changes

**`onValueInvalid`**
Type: `(details: ValueInvalidDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the value overflows or underflows the min/max range

**`pattern`**
Type: `string`
Required: false
Default Value: `"[0-9]*(.[0-9]+)?"`
Description: The pattern used to check the <input> element's value against

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the number input is readonly

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the number input is required

**`spinOnPress`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to spin the value when the increment/decrement button is pressed

**`step`**
Type: `number`
Required: false
Default Value: `1`
Description: The amount to increment or decrement the value by

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`value`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled value of the input

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: root
**`data-disabled`**: Present when disabled
**`data-focus`**: Present when focused
**`data-invalid`**: Present when invalid

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: control
**`data-focus`**: Present when focused
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid

### DecrementTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: decrement-trigger
**`data-disabled`**: Present when disabled

### IncrementTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: increment-trigger
**`data-disabled`**: Present when disabled

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: input
**`data-invalid`**: Present when invalid
**`data-disabled`**: Present when disabled

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: label
**`data-disabled`**: Present when disabled
**`data-focus`**: Present when focused
**`data-invalid`**: Present when invalid

### RootProvider

#### Props

**`value`**
Type: `UseNumberInputReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Scrubber

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: scrubber
**`data-disabled`**: Present when disabled

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: number-input
**`data-part`**: value-text
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

## Accessibility

Complies with the [Spinbutton WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/).

### Keyboard Support

**`ArrowUp`**
Description: Increments the value of the number input by a predefined step.

**`ArrowDown`**
Description: Decrements the value of the number input by a predefined step.

**`PageUp`**
Description: Increments the value of the number input by a larger predefined step.

**`PageDown`**
Description: Decrements the value of the number input by a larger predefined step.

**`Home`**
Description: Sets the value of the number input to its minimum allowed value.

**`End`**
Description: Sets the value of the number input to its maximum allowed value.

**`Enter`**
Description: Submits the value entered in the number input.

# Pagination

## Anatomy

To set up the pagination correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Pagination` component in your project. Let's take a look at the most basic example:

```tsx
import { Pagination } from '@ark-ui/react/pagination'

export const Basic = () => (
  <Pagination.Root count={5000} pageSize={10} siblingCount={2}>
    <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
    <Pagination.Context>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === 'page' ? (
            <Pagination.Item key={index} {...page}>
              {page.value}
            </Pagination.Item>
          ) : (
            <Pagination.Ellipsis key={index} index={index}>
              &#8230;
            </Pagination.Ellipsis>
          )
        )
      }
    </Pagination.Context>
    <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
  </Pagination.Root>
)
```

### Controlled Pagination

To create a controlled Pagination component, manage the state of the current page using the `page` prop and update it
when the `onPageChange` event handler is called:

```tsx
import { Pagination } from '@ark-ui/react/pagination'
import { useState } from 'react'

export const Controlled = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination.Root
      count={5000}
      pageSize={10}
      siblingCount={2}
      page={currentPage}
      onPageChange={(details) => setCurrentPage(details.page)}
    >
      <Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
      <Pagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <Pagination.Item key={index} {...page}>
                {page.value}
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis key={index} index={index}>
                &#8230;
              </Pagination.Ellipsis>
            )
          )
        }
      </Pagination.Context>
      <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
    </Pagination.Root>
  )
}
```

### Customizing Pagination

You can customize the Pagination component by setting various props such as `dir`, `pageSize`, `siblingCount`, and
`translations`. Here's an example of a customized Pagination:

```tsx
import { Pagination } from '@ark-ui/react/pagination'

export const Customized = () => (
  <Pagination.Root
    count={5000}
    pageSize={20}
    siblingCount={3}
    translations={{
      nextTriggerLabel: 'Next',
      prevTriggerLabel: 'Prev',
      itemLabel: (details) => `Page ${details.page}`
    }}
  >
    <Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
    <Pagination.Context>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === 'page' ? (
            <Pagination.Item key={index} {...page}>
              {page.value}
            </Pagination.Item>
          ) : (
            <Pagination.Ellipsis key={index} index={index}>
              &#8230;
            </Pagination.Ellipsis>
          )
        )
      }
    </Pagination.Context>
    <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
  </Pagination.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the pagination. It accepts the value of the `usePagination` hook.
You can leverage it to access the component state and methods from outside the pagination.

```tsx
import { Pagination, usePagination } from '@ark-ui/react/pagination'

export const RootProvider = () => {
  const pagination = usePagination({ count: 5000, pageSize: 10, siblingCount: 2 })

  return (
    <>
      <button onClick={() => pagination.goToNextPage()}>Next Page</button>

      <Pagination.RootProvider value={pagination}>
        <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item key={index} {...page}>
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={index} index={index}>
                  &#8230;
                </Pagination.Ellipsis>
              )
            )
          }
        </Pagination.Context>
        <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
      </Pagination.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`count`**
Type: `number`
Required: false
Default Value: `undefined`
Description: Total number of data items

**`defaultPage`**
Type: `number`
Required: false
Default Value: `1`
Description: The initial active page when rendered.
Use when you don't need to control the active page of the pagination.

**`defaultPageSize`**
Type: `number`
Required: false
Default Value: `10`
Description: The initial number of data items per page when rendered.
Use when you don't need to control the page size of the pagination.

**`ids`**
Type: `Partial<{
  root: string
  ellipsis(index: number): string
  prevTrigger: string
  nextTrigger: string
  item(page: number): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the accordion. Useful for composition.

**`onPageChange`**
Type: `(details: PageChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Called when the page number is changed

**`onPageSizeChange`**
Type: `(details: PageSizeChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Called when the page size is changed

**`page`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The controlled active page

**`pageSize`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The controlled number of data items per page

**`siblingCount`**
Type: `number`
Required: false
Default Value: `1`
Description: Number of pages to show beside active page

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`type`**
Type: `'button' | 'link'`
Required: false
Default Value: `"button"`
Description: The type of the trigger element

### Ellipsis

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Item

#### Props

**`type`**
Type: `'page'`
Required: true
Default Value: `undefined`
Description: undefined

**`value`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: pagination
**`data-part`**: item
**`data-index`**: The index of the item
**`data-selected`**: Present when selected

### NextTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: pagination
**`data-part`**: next-trigger
**`data-disabled`**: Present when disabled

### PrevTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: pagination
**`data-part`**: prev-trigger
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UsePaginationReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

# Pin Input

## Anatomy

To set up the pin input correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `PinInput` component in your project. Let's take a look at the most basic example:

```tsx
import { PinInput } from '@ark-ui/react/pin-input'

export const Basic = () => (
  <PinInput.Root onValueComplete={(e) => alert(e.valueAsString)}>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2].map((id, index) => (
        <PinInput.Input key={id} index={index} />
      ))}
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
)
```

### Setting a default value

To set the initial value of the pin input, set the `defaultValue` prop.

```tsx
import { PinInput } from '@ark-ui/react/pin-input'

export const InitialValue = () => (
  <PinInput.Root defaultValue={['1', '2', '3']}>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2].map((id, index) => (
        <PinInput.Input key={id} index={index} />
      ))}
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
)
```

### Changing the placeholder

To customize the default pin input placeholder `○` for each input, pass the placeholder prop and set it to your desired
value.

```tsx
import { PinInput } from '@ark-ui/react/pin-input'

export const Customized = () => (
  <PinInput.Root placeholder="*">
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2].map((id, index) => (
        <PinInput.Input key={id} index={index} />
      ))}
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
)
```

### Blur on complete

By default, the last input maintains focus when filled, and we invoke the `onValueComplete` callback. To blur the last
input when the user completes the input, set the prop `blurOnComplete` to `true`.

```tsx
import { PinInput } from '@ark-ui/react/pin-input'

export const Blurred = () => (
  <PinInput.Root blurOnComplete>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2].map((id, index) => (
        <PinInput.Input key={id} index={index} />
      ))}
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
)
```

### Using OTP mode

To trigger smartphone OTP auto-suggestion, it is recommended to set the `autocomplete` attribute to "one-time-code". The
pin input component provides support for this automatically when you set the `otp` prop to true.

```tsx
import { PinInput } from '@ark-ui/react/pin-input'

export const OTPMode = () => (
  <PinInput.Root otp>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2].map((id, index) => (
        <PinInput.Input key={id} index={index} />
      ))}
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
)
```

### Securing the text input

When collecting private or sensitive information using the pin input, you might need to mask the value entered, similar
to `<input type="password"/>`. Pass the `mask` prop to `true`.

```tsx
import { PinInput } from '@ark-ui/react/pin-input'

export const WithMask = () => (
  <PinInput.Root mask>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2].map((id, index) => (
        <PinInput.Input key={id} index={index} />
      ))}
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
)
```

### Listening for changes

The pin input component invokes several callback functions when the user enters:

- `onValueChange` — Callback invoked when the value is changed.
- `onValueComplete` — Callback invoked when all fields have been completed (by typing or pasting).
- `onValueInvalid` — Callback invoked when an invalid value is entered into the input. An invalid value is any value
  that doesn't match the specified "type".

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a pin input. It includes handling
ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { PinInput } from '@ark-ui/react/pin-input'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <PinInput.Root>
      <PinInput.Label>Label</PinInput.Label>
      <PinInput.Control>
        {[0, 1, 2].map((id, index) => (
          <PinInput.Input key={id} index={index} />
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the pin-input. It accepts the value of the `usePin-input` hook. You
can leverage it to access the component state and methods from outside the pin-input.

```tsx
import { PinInput, usePinInput } from '@ark-ui/react/pin-input'

export const RootProvider = () => {
  const pinInput = usePinInput({ onValueComplete: (e) => alert(e.valueAsString) })

  return (
    <>
      <button onClick={() => pinInput.focus()}>Focus</button>

      <PinInput.RootProvider value={pinInput}>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
          {[0, 1, 2].map((id, index) => (
            <PinInput.Input key={id} index={index} />
          ))}
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to auto-focus the first input.

**`blurOnComplete`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to blur the input when the value is complete

**`count`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The number of inputs to render to improve SSR aria attributes.
This will be required in next major version.

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial value of the the pin input when rendered.
Use when you don't need to control the value of the pin input.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the inputs are disabled

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the underlying input element.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  hiddenInput: string
  label: string
  control: string
  input(id: string): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the pin input. Useful for composition.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the pin input is in the invalid state

**`mask`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the input's value will be masked just like `type=password`

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the input element. Useful for form submission.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called on input change

**`onValueComplete`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when all inputs have valid values

**`onValueInvalid`**
Type: `(details: ValueInvalidDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when an invalid value is entered

**`otp`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the pin input component signals to its fields that they should
use `autocomplete="one-time-code"`.

**`pattern`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The regular expression that the user-entered input value is checked against.

**`placeholder`**
Type: `string`
Required: false
Default Value: `"○"`
Description: The placeholder text for the input

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the pin input is in the valid state

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the pin input is required

**`selectOnFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to select input value when input is focused

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`type`**
Type: `'numeric' | 'alphabetic' | 'alphanumeric'`
Required: false
Default Value: `"numeric"`
Description: The type of value the pin-input should allow

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled value of the the pin input.

#### Data Attributes

**`data-scope`**: pin-input
**`data-part`**: root
**`data-invalid`**: Present when invalid
**`data-disabled`**: Present when disabled
**`data-complete`**: Present when the pin-input value is complete
**`data-readonly`**: Present when read-only

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Input

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: pin-input
**`data-part`**: input
**`data-disabled`**: Present when disabled
**`data-complete`**: Present when the input value is complete
**`data-index`**: The index of the item
**`data-invalid`**: Present when invalid

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: pin-input
**`data-part`**: label
**`data-invalid`**: Present when invalid
**`data-disabled`**: Present when disabled
**`data-complete`**: Present when the label value is complete
**`data-readonly`**: Present when read-only

### RootProvider

#### Props

**`value`**
Type: `UsePinInputReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

### Keyboard Support

**`ArrowLeft`**
Description: Moves focus to the previous input

**`ArrowRight`**
Description: Moves focus to the next input

**`Backspace`**
Description: Deletes the value in the current input and moves focus to the previous input

**`Delete`**
Description: Deletes the value in the current input

**`Control + V`**
Description: Pastes the value into the input fields

# Popover

## Anatomy

To set up the popover correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Popover` component in your project. Let's take a look at the most basic example:

```tsx
import { Popover } from '@ark-ui/react/popover'
import { ChevronRightIcon } from 'lucide-react'

export const Basic = () => (
  <Popover.Root>
    <Popover.Trigger>
      Click Me
      <Popover.Indicator>
        <ChevronRightIcon />
      </Popover.Indicator>
    </Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description</Popover.Description>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

### Using a Portal

By default, the popover is rendered in the same DOM hierarchy as the trigger. To render the popover within a portal, set
the `portalled` prop to `true`.

> Note: This requires that you render the component within a `Portal` based on the framework you use.

```tsx
import { Popover } from '@ark-ui/react/popover'
import { Portal } from '@ark-ui/react/portal'
import { ChevronRightIcon } from 'lucide-react'

export const Portalled = () => (
  <Popover.Root portalled>
    <Popover.Trigger>
      Click Me
      <Popover.Indicator>
        <ChevronRightIcon />
      </Popover.Indicator>
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title>Title</Popover.Title>
          <Popover.Description>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
)
```

### Adding an arrow

To render an arrow within the popover, render the component `Popover.Arrow` and `Popover.ArrowTip` as children of
`Popover.Positioner`.

```tsx
import { Popover } from '@ark-ui/react/popover'

export const Arrow = () => (
  <Popover.Root>
    <Popover.Trigger>Click Me</Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description</Popover.Description>
        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

### Listening for open and close events

When the popover is opened or closed, we invoke the `onOpenChange` callback.

```tsx
import { Popover } from '@ark-ui/react/popover'
import { ChevronRightIcon } from 'lucide-react'

export const OnOpenChange = () => {
  return (
    <Popover.Root onOpenChange={(open) => alert(open ? 'opened' : 'closed')}>
      <Popover.Trigger>
        Click Me
        <Popover.Indicator>
          <ChevronRightIcon />
        </Popover.Indicator>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title>Title</Popover.Title>
          <Popover.Description>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
```

### Control the open state

Use the `isOpen` prop to control the open state of the popover.

```tsx
import { Popover } from '@ark-ui/react/popover'
import { useState } from 'react'

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      <Popover.Root open={isOpen}>
        <Popover.Anchor>Anchor</Popover.Anchor>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Title</Popover.Title>
            <Popover.Description>Description</Popover.Description>
            <Popover.CloseTrigger>Close</Popover.CloseTrigger>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </>
  )
}
```

### Modifying the close behavior

The popover is designed to close on blur and when the <kbd>esc</kbd> key is pressed.

To prevent it from closing on blur (clicking or focusing outside), pass the `closeOnInteractOutside` prop and set it to
`false`.

To prevent it from closing when the <kbd>esc</kbd> key is pressed, pass the `closeOnEsc` prop and set it to `false`.

```tsx
import { Popover } from '@ark-ui/react/popover'

export const CloseBehavior = () => (
  <Popover.Root closeOnEscape closeOnInteractOutside>
    <Popover.Trigger>Click Me</Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description</Popover.Description>
        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

### Changing the placement

To change the placement of the popover, set the `positioning` prop.

```tsx
import { Popover } from '@ark-ui/react/popover'

export const Positioning = () => (
  <Popover.Root
    positioning={{
      placement: 'left-start',
      offset: { mainAxis: 12, crossAxis: 12 }
    }}
  >
    <Popover.Trigger>Click Me</Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description</Popover.Description>
        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

### Changing the modality

In some cases, you might want the popover to be modal. This means that it'll:

- trap focus within its content
- block scrolling on the body
- disable pointer interactions outside the popover
- hide content behind the popover from screen readers

To make the popover modal, set the `modal` prop to `true`. When `modal={true}`, we set the `portalled` attribute to
`true` as well.

```tsx
import { Popover } from '@ark-ui/react/popover'

export const Modal = () => (
  <Popover.Root modal>
    <Popover.Trigger>Click Me</Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description</Popover.Description>
        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the popover. It accepts the value of the `usePopover` hook. You can
leverage it to access the component state and methods from outside the popover.

```tsx
import { Popover, usePopover } from '@ark-ui/react/popover'

export const RootProvider = () => {
  const popover = usePopover({
    positioning: {
      placement: 'bottom-start'
    }
  })

  return (
    <>
      <button onClick={() => popover.setOpen(true)}>Popover is {popover.open ? 'open' : 'closed'}</button>
      <Popover.RootProvider value={popover}>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Title</Popover.Title>
            <Popover.Description>Description</Popover.Description>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`autoFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to automatically set focus on the first focusable
content within the popover when opened.

**`closeOnEscape`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to close the popover when the escape key is pressed.

**`closeOnInteractOutside`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to close the popover when the user clicks outside of the popover.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the popover when rendered.
Use when you don't need to control the open state of the popover.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  anchor: string
  trigger: string
  content: string
  title: string
  description: string
  closeTrigger: string
  positioner: string
  arrow: string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the popover. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`initialFocusEl`**
Type: `() => HTMLElement | null`
Required: false
Default Value: `undefined`
Description: The element to focus on when the popover is opened.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`modal`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether the popover should be modal. When set to `true`:

- interaction with outside elements will be disabled
- only popover content will be visible to screen readers
- scrolling is blocked
- focus is trapped within the popover

**`onEscapeKeyDown`**
Type: `(event: KeyboardEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the escape key is pressed

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the popover opens or closes

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the popover

**`persistentElements`**
Type: `(() => Element | null)[]`
Required: false
Default Value: `undefined`
Description: Returns the persistent elements that:

- should not have pointer-events disabled
- should not trigger the dismiss event

**`portalled`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the popover is portalled. This will proxy the tabbing behavior regardless of the DOM position
of the popover content.

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `undefined`
Description: The user provided options used to position the popover content

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Anchor

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Arrow

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ArrowTip

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### CloseTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: popover
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-expanded`**: Present when expanded
**`data-placement`**: The placement of the content

### Description

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: popover
**`data-part`**: indicator
**`data-state`**: "open" | "closed"

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UsePopoverReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Title

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: popover
**`data-part`**: trigger
**`data-placement`**: The placement of the trigger
**`data-state`**: "open" | "closed"

## Accessibility

### Keyboard Support

**`Space`**
Description: Opens/closes the popover.

**`Enter`**
Description: Opens/closes the popover.

**`Tab`**
Description: <span>Moves focus to the next focusable element within the content.<br /><strong>Note:</strong> If there are no focusable elements, focus is moved to the next focusable element after the trigger.</span>

**`Shift + Tab`**
Description: <span>Moves focus to the previous focusable element within the content<br /><strong>Note:</strong> If there are no focusable elements, focus is moved to the trigger.</span>

**`Esc`**
Description: <span>Closes the popover and moves focus to the trigger.</span>

# Progress - Circular

## Anatomy

To set up the progress correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Progress` component in your project. Let's take a look at the most basic example:

```tsx
import { Progress } from '@ark-ui/react/progress'

export const Basic = () => (
  <Progress.Root defaultValue={42}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)
```

### Set a min and max value

By default, the maximum is `100`. If that's not what you want, you can easily specify a different bound by changing the
value of the `max` prop. You can do the same with the minimum value by setting the `min` prop.

For example, to show the user a progress from `10` to `30`, you can use:

```tsx
import { Progress } from '@ark-ui/react/progress'

export const MinMax = () => (
  <Progress.Root defaultValue={20} min={10} max={30}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)
```

### Indeterminate value

The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an
indeterminate progress, you will have to set the `value` to `null`.

```tsx
import { Progress } from '@ark-ui/react/progress'

export const Indeterminate = () => (
  <Progress.Root defaultValue={null}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)
```

### Showing a value text

Progress bars can only be interpreted by sighted users. To include a text description to support assistive technologies
like screen readers, use the `value` part in `translations`.

```tsx
import { Progress } from '@ark-ui/react/progress'

export const ValueText = () => (
  <Progress.Root
    translations={{
      value({ value, max }) {
        if (value === null) return 'Loading...'
        return `${value} of ${max} items loaded`
      }
    }}
  >
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the progress. It accepts the value of the `useProgress` hook. You
can leverage it to access the component state and methods from outside the progress.

```tsx
import { Progress, useProgress } from '@ark-ui/react/progress'

export const RootProvider = () => {
  const progress = useProgress()

  return (
    <>
      <button onClick={() => progress.setToMax()}>Set to MAX</button>

      <Progress.RootProvider value={progress}>
        <Progress.Label>Label</Progress.Label>
        <Progress.ValueText />
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
      </Progress.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `number`
Required: false
Default Value: `50`
Description: The initial value of the progress bar when rendered.
Use when you don't need to control the value of the progress bar.

**`formatOptions`**
Type: `NumberFormatOptions`
Required: false
Default Value: `{ style: "percent" }`
Description: The options to use for formatting the value.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; track: string; label: string; circle: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the progress bar. Useful for composition.

**`locale`**
Type: `string`
Required: false
Default Value: `"en-US"`
Description: The locale to use for formatting the value.

**`max`**
Type: `number`
Required: false
Default Value: `100`
Description: The maximum allowed value of the progress bar.

**`min`**
Type: `number`
Required: false
Default Value: `0`
Description: The minimum allowed value of the progress bar.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback fired when the value changes.

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the element.

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The localized messages to use.

**`value`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The controlled value of the progress bar.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: root
**`data-max`**:
**`data-value`**: The value of the item
**`data-state`**:
**`data-orientation`**: The orientation of the progress

### Circle

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### CircleRange

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: circle-range
**`data-state`**:

### CircleTrack

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: circle-track
**`data-orientation`**: The orientation of the circletrack

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: label
**`data-orientation`**: The orientation of the label

### Range

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: range
**`data-orientation`**: The orientation of the range
**`data-state`**:

### RootProvider

#### Props

**`value`**
Type: `UseProgressReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Track

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### View

#### Props

**`state`**
Type: `ProgressState`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: view
**`data-state`**:

## Accessibility

Complies with the [the progressbar role requirements.](https://w3c.github.io/aria/#progressbar).

# Progress - Linear

## Anatomy

To set up the progress correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Progress` component in your project. Let's take a look at the most basic example:

```tsx
import { Progress } from '@ark-ui/react/progress'

export const Basic = () => (
  <Progress.Root defaultValue={42}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
```

### Set a min and max value

By default, the maximum is `100`. If that's not what you want, you can easily specify a different bound by changing the
value of the `max` prop. You can do the same with the minimum value by setting the `min` prop.

For example, to show the user a progress from `10` to `30`, you can use:

```tsx
import { Progress } from '@ark-ui/react/progress'

export const MinMax = () => (
  <Progress.Root defaultValue={20} min={10} max={30}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
```

### Indeterminate progress

The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an
indeterminate progress, you will have to set the `value` to `null`.

```tsx
import { Progress } from '@ark-ui/react/progress'

export const Indeterminate = () => (
  <Progress.Root defaultValue={null}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
```

### Showing a value text

Progress bars can only be interpreted by sighted users. To include a text description to support assistive technologies
like screen readers, use the `value` part in `translations`.

```tsx
import { Progress } from '@ark-ui/react/progress'

export const ValueText = () => (
  <Progress.Root
    translations={{
      value({ value, max }) {
        if (value === null) return 'Loading...'
        return `${value} of ${max} items loaded`
      }
    }}
  >
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
```

### Changing the orientation

By default, the progress is assumed to be horizontal. To change the orientation to vertical, set the orientation
property in the machine's context to vertical.

> Don't forget to change the styles of the vertical progress by specifying its height

```tsx
import { Progress } from '@ark-ui/react/progress'

export const Vertical = () => (
  <Progress.Root orientation="vertical">
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the progress. It accepts the value of the `useProgress` hook. You
can leverage it to access the component state and methods from outside the progress.

```tsx
import { Progress, useProgress } from '@ark-ui/react/progress'

export const RootProvider = () => {
  const progress = useProgress()

  return (
    <>
      <button onClick={() => progress.setToMax()}>Set to MAX</button>
      <Progress.RootProvider value={progress}>
        <Progress.Label>Label</Progress.Label>
        <Progress.ValueText />
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `number`
Required: false
Default Value: `50`
Description: The initial value of the progress bar when rendered.
Use when you don't need to control the value of the progress bar.

**`formatOptions`**
Type: `NumberFormatOptions`
Required: false
Default Value: `{ style: "percent" }`
Description: The options to use for formatting the value.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; track: string; label: string; circle: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the progress bar. Useful for composition.

**`locale`**
Type: `string`
Required: false
Default Value: `"en-US"`
Description: The locale to use for formatting the value.

**`max`**
Type: `number`
Required: false
Default Value: `100`
Description: The maximum allowed value of the progress bar.

**`min`**
Type: `number`
Required: false
Default Value: `0`
Description: The minimum allowed value of the progress bar.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback fired when the value changes.

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the element.

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The localized messages to use.

**`value`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The controlled value of the progress bar.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: root
**`data-max`**:
**`data-value`**: The value of the item
**`data-state`**:
**`data-orientation`**: The orientation of the progress

### Circle

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### CircleRange

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: circle-range
**`data-state`**:

### CircleTrack

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: circle-track
**`data-orientation`**: The orientation of the circletrack

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: label
**`data-orientation`**: The orientation of the label

### Range

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: range
**`data-orientation`**: The orientation of the range
**`data-state`**:

### RootProvider

#### Props

**`value`**
Type: `UseProgressReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Track

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### View

#### Props

**`state`**
Type: `ProgressState`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: progress
**`data-part`**: view
**`data-state`**:

## Accessibility

Complies with the [the progressbar role requirements.](https://w3c.github.io/aria/#progressbar).

# QR Code

## Anatomy

To set up the QR code correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `QR Code` component in your project. Let's take a look at the most basic example:

```tsx
import { QrCode } from '@ark-ui/react/qr-code'

export const Basic = () => {
  return (
    <QrCode.Root defaultValue="http://ark-ui.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
      <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
        Download
      </QrCode.DownloadTrigger>
    </QrCode.Root>
  )
}
```

### Download a QR Code

You can download the QR code by using the `QrCode.DownloadTrigger`. You will have to provide the `fileName` and the
`mimeType` of the image.

```tsx
<QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
  Download
</QrCode.DownloadTrigger>
```

### With Overlay

You can also add a logo or overlay to the QR code. This is useful when you want to brand the QR code.

```tsx
import { QrCode } from '@ark-ui/react/qr-code'

export const WithOverlay = () => {
  return (
    <QrCode.Root defaultValue="http://ark-ui.com" encoding={{ ecc: 'H' }}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
      <QrCode.Overlay>
        <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
      </QrCode.Overlay>
    </QrCode.Root>
  )
}
```

### Error Correction

In cases where the link is too long or the logo overlay covers a significant area, the error correction level can be
increased.

Use the `encoding.ecc` or `encoding.boostEcc` property to set the error correction level:

- `L`: Allows recovery of up to 7% data loss (default)
- `M`: Allows recovery of up to 15% data loss
- `Q`: Allows recovery of up to 25% data loss
- `H`: Allows recovery of up to 30% data loss

```tsx
import { QrCode } from '@ark-ui/react/qr-code'

export const ErrorCorrection = () => {
  return (
    <QrCode.Root defaultValue="http://ark-ui.com" encoding={{ ecc: 'H' }}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the QR code. It accepts the value of the `useQrCode` hook. You can
leverage it to access the component state and methods from outside the QR code.

```tsx
import { QrCode, useQrCode } from '@ark-ui/react/qr-code'
import { useState } from 'react'

export const RootProvider = () => {
  const [value, setValue] = useState('http://ark-ui.com')
  const qrCode = useQrCode({ value })

  return (
    <>
      <button
        onClick={() => {
          setValue('https://chakra-ui.com')
        }}
      >
        Set Value
      </button>
      <QrCode.RootProvider value={qrCode}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial value to encode when rendered.
Use when you don't need to control the value of the qr code.

**`encoding`**
Type: `QrCodeGenerateOptions`
Required: false
Default Value: `undefined`
Description: The qr code encoding options.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; frame: string }>`
Required: false
Default Value: `undefined`
Description: The element ids.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback fired when the value changes.

**`pixelSize`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The pixel size of the qr code.

**`value`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled value to encode.

### DownloadTrigger

#### Props

**`fileName`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The name of the file.

**`mimeType`**
Type: `DataUrlType`
Required: true
Default Value: `undefined`
Description: The mime type of the image.

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`quality`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The quality of the image.

### Frame

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Overlay

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Pattern

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseQrCodeReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

# Radio Group

## Anatomy

To set up the radio group correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

### Design impact on the asChild property

The `RadioGroup.Item` element of the radio group is a `label` element. This is because the radio group is a form control
and should be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility
structure will be invalid.

> If you need to use the `asChild` property, make sure that the `label` element is the direct child of the
> `RadioGroup.Item` component.

## Examples

Learn how to use the `RadioGroup` component in your project. Let's take a look at the most basic example:

```tsx
import { RadioGroup } from '@ark-ui/react/radio-group'

export const Basic = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      <RadioGroup.Indicator />
      {frameworks.map((framework) => (
        <RadioGroup.Item key={framework} value={framework}>
          <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
```

### Disabling the radio group

To make a radio group disabled, set the `disabled` prop to `true`.

```tsx
import { RadioGroup } from '@ark-ui/react/radio-group'

export const Disabled = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root disabled>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      {frameworks.map((framework) => (
        <RadioGroup.Item key={framework} value={framework}>
          <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
```

### Setting the initial value

To set the radio group's initial value, set the `defaultValue` prop to the value of the radio item to be selected by
default.

```tsx
import { RadioGroup } from '@ark-ui/react/radio-group'

export const InitialValue = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root defaultValue="Solid">
      <RadioGroup.Label>Framework</RadioGroup.Label>
      {frameworks.map((framework) => (
        <RadioGroup.Item key={framework} value={framework}>
          <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
```

### Listening for changes

When the radio group value changes, the `onValueChange` callback is invoked.

```tsx
import { RadioGroup } from '@ark-ui/react/radio-group'

export const OnEvent = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root onValueChange={(details) => console.log(details.value)}>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      {frameworks.map((framework) => (
        <RadioGroup.Item key={framework} value={framework}>
          <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the radio-group. It accepts the value of the `useRadio-group` hook.
You can leverage it to access the component state and methods from outside the radio-group.

```tsx
import { RadioGroup, useRadioGroup } from '@ark-ui/react/radio-group'

export const RootProvider = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  const radioGroup = useRadioGroup()

  return (
    <>
      <button onClick={() => radioGroup.focus()}>Focus</button>

      <RadioGroup.RootProvider value={radioGroup}>
        <RadioGroup.Label>Framework</RadioGroup.Label>
        <RadioGroup.Indicator />
        {frameworks.map((framework) => (
          <RadioGroup.Item key={framework} value={framework}>
            <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial value of the checked radio when rendered.
Use when you don't need to control the value of the radio group.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the radio group will be disabled

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the underlying input.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  label: string
  indicator: string
  item(value: string): string
  itemLabel(value: string): string
  itemControl(value: string): string
  itemHiddenInput(value: string): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the radio. Useful for composition.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the input fields in the radio
(Useful for form submission).

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called once a radio is checked

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `undefined`
Description: Orientation of the radio group

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the checkbox is read-only

**`value`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled value of the radio group

#### Data Attributes

**`data-scope`**: radio-group
**`data-part`**: root
**`data-orientation`**: The orientation of the radio-group
**`data-disabled`**: Present when disabled

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: radio-group
**`data-part`**: indicator
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the indicator

### ItemControl

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: radio-group
**`data-part`**: item-control
**`data-active`**: Present when active or pressed

### ItemHiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Item

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: undefined

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: undefined

### ItemText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: radio-group
**`data-part`**: label
**`data-orientation`**: The orientation of the label
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseRadioGroupReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

Complies with the [Radio WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

### Keyboard Support

**`Tab`**
Description: Moves focus to either the checked radio item or the first radio item in the group.

**`Space`**
Description: When focus is on an unchecked radio item, checks it.

**`ArrowDown`**
Description: Moves focus and checks the next radio item in the group.

**`ArrowRight`**
Description: Moves focus and checks the next radio item in the group.

**`ArrowUp`**
Description: Moves focus to the previous radio item in the group.

**`ArrowLeft`**
Description: Moves focus to the previous radio item in the group.

# Rating Group

## Anatomy

To set up the rating correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `RatingGroup` component in your project. Let's take a look at the most basic example:

```tsx
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'

export const Basic = () => (
  <RatingGroup.Root count={5} defaultValue={3}>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingGroup.Item key={item} index={item}>
              <RatingGroup.ItemContext>
                {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
              </RatingGroup.ItemContext>
            </RatingGroup.Item>
          ))
        }
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
)
```

### Using half ratings

Allow `0.5` value steps by setting the `allowHalf` prop to `true`. Ensure to render the correct icon if the `isHalf`
value is set in the Rating components render callback.

```tsx
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarHalfIcon, StarIcon } from 'lucide-react'

export const HalfRatings = () => (
  <RatingGroup.Root count={5} defaultValue={3} allowHalf>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingGroup.Item key={item} index={item}>
              <RatingGroup.ItemContext>
                {({ half, highlighted }) => {
                  if (half) return <StarHalfIcon fill="current" />
                  if (highlighted) return <StarIcon fill="current" />
                  return <StarIcon />
                }}
              </RatingGroup.ItemContext>
            </RatingGroup.Item>
          ))
        }
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
)
```

### Using a default value

```tsx
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'

export const InitialValue = () => (
  <RatingGroup.Root count={5} defaultValue={2} readOnly>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingGroup.Item key={item} index={item}>
              <RatingGroup.ItemContext>
                {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
              </RatingGroup.ItemContext>
            </RatingGroup.Item>
          ))
        }
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
)
```

### Controlled

When using the `RatingGroup` component, you can use the `value` and `onValueChange` props to control the state.

```tsx
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'
import { useState } from 'react'

export const Controlled = () => {
  const [value, setValue] = useState(0)

  return (
    <RatingGroup.Root count={5} value={value} onValueChange={(details) => setValue(details.value)} allowHalf>
      <RatingGroup.Label>Label</RatingGroup.Label>
      <RatingGroup.Control>
        <RatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingGroup.Item key={item} index={item}>
                <RatingGroup.ItemContext>
                  {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            ))
          }
        </RatingGroup.Context>
        <RatingGroup.HiddenInput />
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
```

### Disabling the rating group

To make the rating group disabled, set the `disabled` prop to `true`.

```tsx
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'

export const Disabled = () => (
  <RatingGroup.Root count={5} defaultValue={3} disabled>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingGroup.Item key={item} index={item}>
              <RatingGroup.ItemContext>
                {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
              </RatingGroup.ItemContext>
            </RatingGroup.Item>
          ))
        }
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
)
```

### Readonly rating group

To make the rating group readonly, set the `readOnly` prop to `true`.

```tsx
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'

export const ReadOnly = () => (
  <RatingGroup.Root count={5} defaultValue={3} readOnly>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingGroup.Item key={item} index={item}>
              <RatingGroup.ItemContext>
                {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
              </RatingGroup.ItemContext>
            </RatingGroup.Item>
          ))
        }
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
)
```

### Usage within forms

To use the rating group within forms, pass the prop `name`. It will render a hidden input and ensure the value changes
get propagated to the form correctly.

```tsx
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'

export const FormUsage = () => (
  <RatingGroup.Root name="my-rating" count={5} defaultValue={3}>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingGroup.Item key={item} index={item}>
              <RatingGroup.ItemContext>
                {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
              </RatingGroup.ItemContext>
            </RatingGroup.Item>
          ))
        }
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
)
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a rating group. It includes
handling ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { RatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'

export const WithField = (props: Field.RootProps) => {
  return (
    <Field.Root {...props}>
      <RatingGroup.Root count={5} defaultValue={3}>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
          <RatingGroup.Context>
            {({ items }) =>
              items.map((item) => (
                <RatingGroup.Item key={item} index={item}>
                  <RatingGroup.ItemContext>
                    {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
                  </RatingGroup.ItemContext>
                </RatingGroup.Item>
              ))
            }
          </RatingGroup.Context>
          <RatingGroup.HiddenInput />
        </RatingGroup.Control>
      </RatingGroup.Root>

      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the rating-group. It accepts the value of the `useRating-group`
hook. You can leverage it to access the component state and methods from outside the rating-group.

```tsx
import { RatingGroup, useRatingGroup } from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'

export const RootProvider = () => {
  const ratingGroup = useRatingGroup({ count: 5, defaultValue: 3 })

  return (
    <>
      <button onClick={() => ratingGroup.clearValue()}>Clear</button>

      <RatingGroup.RootProvider value={ratingGroup}>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
          <RatingGroup.Context>
            {({ items }) =>
              items.map((item) => (
                <RatingGroup.Item key={item} index={item}>
                  <RatingGroup.ItemContext>
                    {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
                  </RatingGroup.ItemContext>
                </RatingGroup.Item>
              ))
            }
          </RatingGroup.Context>
          <RatingGroup.HiddenInput />
        </RatingGroup.Control>
      </RatingGroup.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`allowHalf`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to allow half stars.

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to autofocus the rating.

**`count`**
Type: `number`
Required: false
Default Value: `5`
Description: The total number of ratings.

**`defaultValue`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The initial value of the rating when rendered.
Use when you don't need to control the value of the rating.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the rating is disabled.

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the underlying input element.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  label: string
  hiddenInput: string
  control: string
  item(id: string): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the rating. Useful for composition.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name attribute of the rating element (used in forms).

**`onHoverChange`**
Type: `(details: HoverChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to be called when the rating value is hovered.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to be called when the rating value changes.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the rating is readonly.

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the rating is required.

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`value`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The controlled value of the rating

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: rating-group
**`data-part`**: control
**`data-readonly`**: Present when read-only
**`data-disabled`**: Present when disabled

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Item

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: rating-group
**`data-part`**: item
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only
**`data-checked`**: Present when checked
**`data-highlighted`**: Present when highlighted
**`data-half`**:

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: rating-group
**`data-part`**: label
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseRatingGroupReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

### Keyboard Support

**`ArrowRight`**
Description: Moves focus to the next star, increasing the rating value based on the `allowHalf` property.

**`ArrowLeft`**
Description: Moves focus to the previous star, decreasing the rating value based on the `allowHalf` property.

**`Enter`**
Description: Selects the focused star in the rating group.

# Segment Group

## Anatomy

To set up the segmented control correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `SegmentGroup` component in your project. Let's take a look at the most basic example:

```tsx
import { SegmentGroup } from '@ark-ui/react/segment-group'

export const Basic = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <SegmentGroup.Root>
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item key={framework} value={framework}>
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  )
}
```

### Initial Value

To set a default segment on initial render, use the `defaultValue` prop:

```tsx
import { SegmentGroup } from '@ark-ui/react/segment-group'

export const InitialValue = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item key={framework} value={framework}>
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  )
}
```

### Controlled Segment Group

To create a controlled SegmentGroup component, manage the current selected segment using the `value` prop and update it
when the `onValueChange` event handler is called:

```tsx
import { SegmentGroup } from '@ark-ui/react/segment-group'
import { useState } from 'react'

export const Controlled = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  const [value, setValue] = useState<string | null>('React')
  return (
    <SegmentGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item key={framework} value={framework}>
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  )
}
```

### Disabled Segment

To disable a segment, simply pass the `disabled` prop to the `SegmentGroup.Item` component:

```tsx
import { SegmentGroup } from '@ark-ui/react/segment-group'

export const Disabled = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item key={framework} value={framework} disabled={framework === 'Svelte'}>
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the radio-group. It accepts the value of the `useRadio-group` hook.
You can leverage it to access the component state and methods from outside the radio-group.

```tsx
import { SegmentGroup, useSegmentGroup } from '@ark-ui/react/segment-group'

export const RootProvider = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  const segmentGroup = useSegmentGroup()

  return (
    <>
      <button onClick={() => segmentGroup.focus()}>Focus</button>

      <SegmentGroup.RootProvider value={segmentGroup}>
        <SegmentGroup.Indicator />
        {frameworks.map((framework) => (
          <SegmentGroup.Item key={framework} value={framework}>
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

<ComponentTypes id="radio-group" replace={{ 'radio-group': 'segment-group', 'radio group': 'segment group' }} />

## Accessibility

Complies with the [Radio WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

### Keyboard Support

**`Tab`**
Description: Moves focus to either the checked radio item or the first radio item in the group.

**`Space`**
Description: When focus is on an unchecked radio item, checks it.

**`ArrowDown`**
Description: Moves focus and checks the next radio item in the group.

**`ArrowRight`**
Description: Moves focus and checks the next radio item in the group.

**`ArrowUp`**
Description: Moves focus to the previous radio item in the group.

**`ArrowLeft`**
Description: Moves focus to the previous radio item in the group.

# Select

## Anatomy

To set up the select correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Select` component in your project. Let's take a look at the most basic example:

```tsx
import { Portal } from '@ark-ui/react/portal'
import { Select, createListCollection } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'

export const Basic = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })

  return (
    <Select.Root collection={collection}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item key={item} item={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  )
}
```

### Advanced Customization

For advanced customizations and item properties like `disabled`:

```tsx
import { Portal } from '@ark-ui/react/portal'
import { Select, createListCollection } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'

export const Advanced = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react', type: 'JS' },
      { label: 'Solid', value: 'solid', type: 'JS' },
      { label: 'Vue', value: 'vue', type: 'JS' },
      { label: 'Panda', value: 'panda', type: 'CSS' },
      { label: 'Tailwind', value: 'tailwind', type: 'CSS' }
    ],
    groupBy: (item) => item.type
  })

  return (
    <Select.Root collection={collection}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.group().map(([type, group]) => (
              <Select.ItemGroup key={type}>
                <Select.ItemGroupLabel>{type}</Select.ItemGroupLabel>
                {group.map((item) => (
                  <Select.Item key={item.value} item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  )
}
```

### Multiple Selection

To enable `multiple` item selection:

```tsx
import { Portal } from '@ark-ui/react/portal'
import { Select, createListCollection } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'

export const Multiple = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte', disabled: true }
    ]
  })
  return (
    <Select.Root collection={collection} multiple>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  )
}
```

### Controlled Component

For scenarios where you want to control the Select component's state:

```tsx
import { Portal } from '@ark-ui/react/portal'
import { Select, createListCollection } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

interface Item {
  label: string
  value: string
  disabled?: boolean
}

export const Controlled = () => {
  const [_, setSelectedItems] = useState<Item[]>([])

  const collection = createListCollection<Item>({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte', disabled: true }
    ]
  })

  return (
    <Select.Root collection={collection} onValueChange={(e) => setSelectedItems(e.items)}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  )
}
```

### Usage with a Form Library

See how to use the Select component with popular form libraries:

```tsx
import { Select, createListCollection } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'
import { type SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  framework: string
}

export const FormLibrary = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => window.alert(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select.Root collection={collection}>
        <Select.Label>Framework</Select.Label>
        <Select.HiddenSelect {...register('framework')} />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item key={item} item={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
      <button type="submit">Submit</button>
    </form>
  )
}
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a select. It includes handling
ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { Select, createListCollection } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'

export const WithField = (props: Field.RootProps) => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })

  return (
    <Field.Root {...props}>
      <Select.Root collection={collection}>
        <Select.Label>Label</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item key={item} item={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
        <Select.HiddenSelect />
      </Select.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the select. It accepts the value of the `useSelect` hook. You can
leverage it to access the component state and methods from outside the select.

```tsx
import { Portal } from '@ark-ui/react/portal'
import { Select, createListCollection, useSelect } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'

export const RootProvider = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })

  const select = useSelect({ collection: collection })

  return (
    <>
      <button onClick={() => select.focus()}>Focus</button>

      <Select.RootProvider value={select}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Select.Item key={item} item={item}>
                    <Select.ItemText>{item}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`collection`**
Type: `ListCollection<T>`
Required: true
Default Value: `undefined`
Description: The collection of items

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`closeOnSelect`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the select should close after an item is selected

**`composite`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the select is a composed with other composite widgets like tabs or combobox

**`defaultHighlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial value of the highlighted item when opened.
Use when you don't need to control the highlighted value of the select.

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the select's open state is controlled by the user

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial default value of the select when rendered.
Use when you don't need to control the value of the select.

**`deselectable`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the value can be cleared by clicking the selected item.

**Note:** this is only applicable for single selection

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the select is disabled

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the underlying select.

**`highlightedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled key of the highlighted item

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  content: string
  control: string
  trigger: string
  clearTrigger: string
  label: string
  hiddenSelect: string
  positioner: string
  item(id: string | number): string
  itemGroup(id: string | number): string
  itemGroupLabel(id: string | number): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the select. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the select is invalid

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`loopFocus`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to loop the keyboard navigation through the options

**`multiple`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to allow multiple selection

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The `name` attribute of the underlying select.

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onHighlightChange`**
Type: `(details: HighlightChangeDetails<T>) => void`
Required: false
Default Value: `undefined`
Description: The callback fired when the highlighted item changes.

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the popup is opened

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`onValueChange`**
Type: `(details: ValueChangeDetails<T>) => void`
Required: false
Default Value: `undefined`
Description: The callback fired when the selected item changes.

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the select menu is open

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `undefined`
Description: The positioning options of the menu.

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the select is read-only

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the select is required

**`scrollToIndexFn`**
Type: `(details: ScrollToIndexDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to scroll to a specific index

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled keys of the selected items

#### Data Attributes

**`data-scope`**: select
**`data-part`**: root
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### ClearTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: clear-trigger
**`data-invalid`**: Present when invalid

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-placement`**: The placement of the content
**`data-activedescendant`**:

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: control
**`data-state`**: "open" | "closed"
**`data-focus`**: Present when focused
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid

### HiddenSelect

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: indicator
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### ItemGroupLabel

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: item-group
**`data-disabled`**: Present when disabled

### ItemIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: item-indicator
**`data-state`**: "checked" | "unchecked"

### Item

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`item`**
Type: `any`
Required: false
Default Value: `undefined`
Description: The item to render

**`persistFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether hovering outside should clear the highlighted state

#### Data Attributes

**`data-scope`**: select
**`data-part`**: item
**`data-value`**: The value of the item
**`data-state`**: "checked" | "unchecked"
**`data-highlighted`**: Present when highlighted
**`data-disabled`**: Present when disabled

### ItemText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: item-text
**`data-state`**: "checked" | "unchecked"
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: label
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### List

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseSelectReturn<T>`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: trigger
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only
**`data-placement`**: The placement of the trigger
**`data-placeholder-shown`**: Present when placeholder is shown

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`placeholder`**
Type: `string`
Required: false
Default Value: `undefined`
Description: Text to display when no value is selected.

#### Data Attributes

**`data-scope`**: select
**`data-part`**: value-text
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

## Accessibility

Complies with the [Listbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/).

### Keyboard Support

**`Space`**
Description: <span>When focus is on trigger, opens the select and focuses the first selected item.<br />When focus is on the content, selects the highlighted item.</span>

**`Enter`**
Description: <span>When focus is on trigger, opens the select and focuses the first selected item.<br />When focus is on content, selects the focused item.</span>

**`ArrowDown`**
Description: <span>When focus is on trigger, opens the select.<br />When focus is on content, moves focus to the next item.</span>

**`ArrowUp`**
Description: <span>When focus is on trigger, opens the select.<br />When focus is on content, moves focus to the previous item.</span>

**`Esc`**
Description: <span>Closes the select and moves focus to trigger.</span>

**`A-Z + a-z`**
Description: <span>When focus is on trigger, selects the item whose label starts with the typed character.<br />When focus is on the listbox, moves focus to the next item with a label that starts with the typed character.</span>

# Signature Pad

## Anatomy

To set up the signature pad correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Signature Pad` component in your project. Let's take a look at the most basic example:

```tsx
import { SignaturePad } from '@ark-ui/react/signature-pad'

export const Basic = () => (
  <SignaturePad.Root>
    <SignaturePad.Label>Sign below</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
)
```

### Image Preview

After the user draws a signature, you can display a preview of the signature as an image. This is useful when you want
to show the user a preview of the signature before saving it.

```tsx
import { SignaturePad } from '@ark-ui/react/signature-pad'
import { useState } from 'react'

export const ImagePreview = () => {
  const [imageUrl, setImageUrl] = useState('')

  return (
    <>
      <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl('image/png').then((url) => setImageUrl(url))}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment fill="orange" />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.Root>

      {imageUrl && <img src={imageUrl} alt="Signature" />}
    </>
  )
}
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a signature pad. It includes
handling ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { SignaturePad } from '@ark-ui/react/signature-pad'
import { useState } from 'react'

export const WithField = (props: Field.RootProps) => {
  const [value, setValue] = useState('')

  return (
    <Field.Root {...props}>
      <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl('image/png').then((url) => setValue(url))}>
        <SignaturePad.Label>Label</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
        <SignaturePad.HiddenInput value={value} />
      </SignaturePad.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the signature-pad. It accepts the value of the `useSignature-pad`
hook. You can leverage it to access the component state and methods from outside the signature-pad.

```tsx
import { SignaturePad, useSignaturePad } from '@ark-ui/react/signature-pad'

export const RootProvider = () => {
  const signaturePad = useSignaturePad()

  return (
    <>
      <button onClick={() => signaturePad.clear()}>Clear</button>

      <SignaturePad.RootProvider value={signaturePad}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the signature pad is disabled.

**`drawing`**
Type: `DrawingOptions`
Required: false
Default Value: `'{ size: 2, simulatePressure: true }'`
Description: The drawing options.

**`ids`**
Type: `Partial<{ root: string; control: string; hiddenInput: string; label: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the signature pad elements. Useful for composition.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the signature pad. Useful for form submission.

**`onDraw`**
Type: `(details: DrawDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback when the signature pad is drawing.

**`onDrawEnd`**
Type: `(details: DrawEndDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback when the signature pad is done drawing.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the signature pad is read-only.

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the signature pad is required.

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: The translations of the signature pad. Useful for internationalization.

#### Data Attributes

**`data-scope`**: signature-pad
**`data-part`**: root
**`data-disabled`**: Present when disabled

### ClearTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: signature-pad
**`data-part`**: control
**`data-disabled`**: Present when disabled

### Guide

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: signature-pad
**`data-part`**: guide
**`data-disabled`**: Present when disabled

### HiddenInput

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: signature-pad
**`data-part`**: label
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseSignaturePadReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Segment

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

# Slider

## Anatomy

To set up the slider correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Slider` component in your project. Let's take a look at the most basic example:

```tsx
import { Slider } from '@ark-ui/react/slider'

export const Basic = () => {
  return (
    <Slider.Root>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

### Range Slider

You can add multiple thumbs to the slider by adding multiple `Slider.Thumb`

```tsx
import { Slider } from '@ark-ui/react/slider'

export const Range = () => {
  return (
    <Slider.Root defaultValue={[5, 10]}>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
        <Slider.Thumb index={1}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

### Adding marks

You can add marks to the slider track by using the `Slider.MarkerGroup` and `Slider.Marker` components.

Position the `Slider.Marker` components relative to the track by providing the `value` prop.

```tsx
import { Slider } from '@ark-ui/react/slider'

export const WithMarks = () => {
  return (
    <Slider.Root>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
      <Slider.MarkerGroup>
        <Slider.Marker value={0}>0</Slider.Marker>
        <Slider.Marker value={25}>*</Slider.Marker>
        <Slider.Marker value={50}>50</Slider.Marker>
        <Slider.Marker value={75}>*</Slider.Marker>
      </Slider.MarkerGroup>
    </Slider.Root>
  )
}
```

### Setting the initial value

To set the slider's initial value, set the `defaultValue` prop to the array of numbers.

```tsx
import { Slider } from '@ark-ui/react/slider'

export const InitialValue = () => (
  <Slider.Root defaultValue={[42]}>
    <Slider.Label>Label</Slider.Label>
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb index={0}>
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
    <Slider.MarkerGroup>
      <Slider.Marker value={0}>*</Slider.Marker>
      <Slider.Marker value={30}>*</Slider.Marker>
      <Slider.Marker value={60}>*</Slider.Marker>
    </Slider.MarkerGroup>
  </Slider.Root>
)
```

### Specifying the minimum and maximum

By default, the minimum is `0` and the maximum is `100`. If that's not what you want, you can easily specify different
bounds by changing the values of the `min` and/or `max` props.

For example, to ask the user for a value between `-10` and `10`, you can use:

```tsx
import { Slider } from '@ark-ui/react/slider'

export const MinMax = () => {
  return (
    <Slider.Root min={-10} max={10}>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

### Setting the value's granularity

By default, the granularity, is `1`, meaning that the value is always an integer. You can change the step attribute to
control the granularity.

For example, If you need a value between `5` and `10`, accurate to two decimal places, you should set the value of step
to `0.01`:

```tsx
import { Slider } from '@ark-ui/react/slider'

export const Step = () => {
  return (
    <Slider.Root step={0.01} min={5} max={10}>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

### Listening for changes

When the slider value changes, the `onValueChange` and `onValueChangeEnd` callbacks are invoked. You can use this to set
up custom behaviors in your app.

```tsx
import { Slider } from '@ark-ui/react/slider'

export const OnEvent = () => {
  return (
    <Slider.Root
      onValueChange={(details) => console.log(details.value)}
      onValueChangeEnd={(details) => console.log(details.value)}
    >
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

### Changing the orientation

By default, the slider is assumed to be horizontal. To change the orientation to vertical, set the orientation property
in the machine's context to vertical.

In this mode, the slider will use the arrow up and down keys to increment/decrement its value.

> Don't forget to change the styles of the vertical slider by specifying its height

```tsx
import { Slider } from '@ark-ui/react/slider'

export const Vertical = () => {
  return (
    <Slider.Root orientation="vertical">
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

### Changing the origin

By default, the slider's origin is at the start of the track. To change the origin to the center of the track, set the
`origin` prop to `center`.

```tsx
import { Slider } from '@ark-ui/react/slider'

export const CenterOrigin = () => {
  return (
    <Slider.Root origin="center">
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the slider. It accepts the value of the `useSlider` hook. You can
leverage it to access the component state and methods from outside the slider.

```tsx
import { Slider, useSlider } from '@ark-ui/react/slider'

export const RootProvider = () => {
  const slider = useSlider()

  return (
    <>
      <button onClick={() => slider.focus()}>Focus</button>

      <Slider.RootProvider value={slider}>
        <Slider.Label>Label</Slider.Label>
        <Slider.ValueText />
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`aria-label`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The aria-label of each slider thumb. Useful for providing an accessible name to the slider

**`aria-labelledby`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The `id` of the elements that labels each slider thumb. Useful for providing an accessible name to the slider

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `number[]`
Required: false
Default Value: `undefined`
Description: The initial value of the slider when rendered.
Use when you don't need to control the value of the slider.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the slider is disabled

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the underlying input element.

**`getAriaValueText`**
Type: `(details: ValueTextDetails) => string`
Required: false
Default Value: `undefined`
Description: Function that returns a human readable value for the slider thumb

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  thumb(index: number): string
  hiddenInput(index: number): string
  control: string
  track: string
  range: string
  label: string
  valueText: string
  marker(index: number): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the slider. Useful for composition.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the slider is invalid

**`max`**
Type: `number`
Required: false
Default Value: `100`
Description: The maximum value of the slider

**`min`**
Type: `number`
Required: false
Default Value: `0`
Description: The minimum value of the slider

**`minStepsBetweenThumbs`**
Type: `number`
Required: false
Default Value: `0`
Description: The minimum permitted steps between multiple thumbs.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name associated with each slider thumb (when used in a form)

**`onFocusChange`**
Type: `(details: FocusChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the slider's focused index changes

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the value of the slider changes

**`onValueChangeEnd`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the slider value change is done

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the slider

**`origin`**
Type: `'center' | 'end' | 'start'`
Required: false
Default Value: `"start"`
Description: The origin of the slider range. The track is filled from the origin
to the thumb for single values.

- "start": Useful when the value represents an absolute value
- "center": Useful when the value represents an offset (relative)
- "end": Useful when the value represents an offset from the end

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the slider is read-only

**`step`**
Type: `number`
Required: false
Default Value: `1`
Description: The step value of the slider

**`thumbAlignment`**
Type: `'center' | 'contain'`
Required: false
Default Value: `"contain"`
Description: The alignment of the slider thumb relative to the track

- `center`: the thumb will extend beyond the bounds of the slider track.
- `contain`: the thumb will be contained within the bounds of the track.

**`thumbSize`**
Type: `{ width: number; height: number }`
Required: false
Default Value: `undefined`
Description: The slider thumbs dimensions

**`value`**
Type: `number[]`
Required: false
Default Value: `undefined`
Description: The controlled value of the slider

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: root
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the slider
**`data-dragging`**: Present when in the dragging state
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: control
**`data-dragging`**: Present when in the dragging state
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the control
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

### DraggingIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: dragging-indicator
**`data-orientation`**: The orientation of the draggingindicator
**`data-state`**: "open" | "closed"

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: label
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the label
**`data-invalid`**: Present when invalid
**`data-dragging`**: Present when in the dragging state
**`data-focus`**: Present when focused

### MarkerGroup

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: marker-group
**`data-orientation`**: The orientation of the markergroup

### Marker

#### Props

**`value`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: marker
**`data-orientation`**: The orientation of the marker
**`data-value`**: The value of the item
**`data-disabled`**: Present when disabled
**`data-state`**:

### Range

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: range
**`data-dragging`**: Present when in the dragging state
**`data-focus`**: Present when focused
**`data-invalid`**: Present when invalid
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the range

### RootProvider

#### Props

**`value`**
Type: `UseSliderReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Thumb

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: thumb
**`data-index`**: The index of the item
**`data-name`**:
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the thumb
**`data-focus`**: Present when focused
**`data-dragging`**: Present when in the dragging state

### Track

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: track
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-dragging`**: Present when in the dragging state
**`data-orientation`**: The orientation of the track
**`data-focus`**: Present when focused

### ValueText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: slider
**`data-part`**: value-text
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the valuetext
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

## Accessibility

Complies with the [Slider WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/).

### Keyboard Support

**`ArrowRight`**
Description: <span>Increments the slider based on defined step</span>

**`ArrowLeft`**
Description: <span>Decrements the slider based on defined step</span>

**`ArrowUp`**
Description: <span>Increases the value by the step amount.</span>

**`ArrowDown`**
Description: <span>Decreases the value by the step amount.</span>

**`PageUp`**
Description: <span>Increases the value by a larger step</span>

**`PageDown`**
Description: <span>Decreases the value by a larger step</span>

**`Shift + ArrowUp`**
Description: <span>Increases the value by a larger step</span>

**`Shift + ArrowDown`**
Description: <span>Decreases the value by a larger step</span>

**`Home`**
Description: Sets the value to its minimum.

**`End`**
Description: Sets the value to its maximum.

# Splitter

## Anatomy

To set up the splitter correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Splitter` component in your project. Let's take a look at the most basic example:

```tsx
import { Splitter } from '@ark-ui/react/splitter'

export const Basic = () => (
  <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }]}>
    <Splitter.Panel id="a">A</Splitter.Panel>
    <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
    <Splitter.Panel id="b">B</Splitter.Panel>
  </Splitter.Root>
)
```

### Using Render Props

The Splitter component allows you to pass a function as a child to gain direct access to its API. This provides more
control and allows you to modify the size of the panels programmatically:

```tsx
import { Splitter } from '@ark-ui/react/splitter'

export const RenderProp = () => (
  <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }]}>
    <Splitter.Context>
      {(splitter) => (
        <>
          <Splitter.Panel id="a">
            <button type="button" onClick={() => splitter.resizePanel('a', 10)}>
              Set to 10%
            </button>
          </Splitter.Panel>
          <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
          <Splitter.Panel id="b">
            <button type="button" onClick={() => splitter.resizePanel('b', 10)}>
              Set to 10%
            </button>
          </Splitter.Panel>
        </>
      )}
    </Splitter.Context>
  </Splitter.Root>
)
```

### Handling Events

Splitter also provides `onResizeStart`, `onResize`, and `onResizeEnd` events which can be useful to perform some actions
during the start and end of the resizing process:

```tsx
import { Splitter } from '@ark-ui/react/splitter'

export const Events = () => (
  <Splitter.Root
    panels={[{ id: 'a' }, { id: 'b' }]}
    onResize={(details) => console.log('onResize', details)}
    onResizeStart={() => console.log('onResizeStart')}
    onResizeEnd={(details) => console.log('onResizeEnd', details)}
    onExpand={(details) => console.log('onExpand', details)}
    onCollapse={(details) => console.log('onCollapse', details)}
  >
    <Splitter.Panel id="a">A</Splitter.Panel>
    <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
    <Splitter.Panel id="b">B</Splitter.Panel>
  </Splitter.Root>
)
```

### Vertical Splitter

By default, the Splitter component is horizontal. If you need a vertical splitter, use the `orientation` prop:

```tsx
import { Splitter } from '@ark-ui/react/splitter'

export const Vertical = () => (
  <Splitter.Root orientation="vertical" panels={[{ id: 'a' }, { id: 'b' }]}>
    <Splitter.Panel id="a">A</Splitter.Panel>
    <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
    <Splitter.Panel id="b">B</Splitter.Panel>
  </Splitter.Root>
)
```

### Collapsible Panels

To make a panel collapsible, set the `collapsible` prop to `true` on the panel you want to make collapsible.
Additionally, you can use the `collapsedSize` prop to set the size of the panel when it's collapsed.

> This can be useful for building sidebar layouts.

```tsx
import { Splitter } from '@ark-ui/react/splitter'

export const Collapsible = () => (
  <Splitter.Root
    defaultSize={[15, 20]}
    panels={[
      { id: 'a', collapsible: true, collapsedSize: 5, minSize: 10, maxSize: 20 },
      { id: 'b', minSize: 50 }
    ]}
  >
    <Splitter.Panel id="a">A</Splitter.Panel>
    <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
    <Splitter.Panel id="b">B</Splitter.Panel>
  </Splitter.Root>
)
```

### Multiple Panels

Here's an example of how to use the `Splitter` component with multiple panels.

```tsx
import { Splitter } from '@ark-ui/react/splitter'

export const MultiplePanels = () => (
  <Splitter.Root
    panels={[
      { id: 'a', minSize: 20 },
      { id: 'b', minSize: 40 },
      { id: 'c', minSize: 20 }
    ]}
    defaultSize={[20, 60, 20]}
  >
    <Splitter.Panel id="a">A</Splitter.Panel>
    <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
    <Splitter.Panel id="b">B</Splitter.Panel>
    <Splitter.ResizeTrigger id="b:c" aria-label="Resize" />
    <Splitter.Panel id="c">C</Splitter.Panel>
  </Splitter.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the splitter. It accepts the value of the `useSplitter` hook. You
can leverage it to access the component state and methods from outside the splitter.

```tsx
import { Splitter, useSplitter } from '@ark-ui/react/splitter'

export const RootProvider = () => {
  const splitter = useSplitter({ defaultSize: [50, 50], panels: [{ id: 'a' }, { id: 'b' }] })

  return (
    <>
      <button onClick={() => splitter.setSizes([100, 0])}>Maximize a</button>

      <Splitter.RootProvider value={splitter}>
        <Splitter.Panel id="a">A</Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
        <Splitter.Panel id="b">B</Splitter.Panel>
      </Splitter.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`panels`**
Type: `PanelData[]`
Required: true
Default Value: `undefined`
Description: The size constraints of the panels.

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultSize`**
Type: `number[]`
Required: false
Default Value: `undefined`
Description: The initial size of the panels when rendered.
Use when you don't need to control the size of the panels.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  resizeTrigger(id: string): string
  label(id: string): string
  panel(id: string | number): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the splitter. Useful for composition.

**`keyboardResizeBy`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The number of pixels to resize the panel by when the keyboard is used.

**`nonce`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The nonce for the injected splitter cursor stylesheet.

**`onCollapse`**
Type: `(details: ExpandCollapseDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when a panel is collapsed.

**`onExpand`**
Type: `(details: ExpandCollapseDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when a panel is expanded.

**`onResize`**
Type: `(details: ResizeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the splitter is resized.

**`onResizeEnd`**
Type: `(details: ResizeEndDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the splitter resize ends.

**`onResizeStart`**
Type: `() => void`
Required: false
Default Value: `undefined`
Description: Function called when the splitter resize starts.

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the splitter. Can be `horizontal` or `vertical`

**`size`**
Type: `number[]`
Required: false
Default Value: `undefined`
Description: The controlled size data of the panels

#### Data Attributes

**`data-scope`**: splitter
**`data-part`**: root
**`data-orientation`**: The orientation of the splitter

### Panel

#### Props

**`id`**
Type: `string`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: splitter
**`data-part`**: panel
**`data-orientation`**: The orientation of the panel
**`data-id`**:
**`data-index`**: The index of the item

### ResizeTrigger

#### Props

**`id`**
Type: `${string}:${string}`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: splitter
**`data-part`**: resize-trigger
**`data-id`**:
**`data-orientation`**: The orientation of the resizetrigger
**`data-focus`**: Present when focused
**`data-disabled`**: Present when disabled

### RootProvider

#### Props

**`value`**
Type: `UseSplitterReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

Complies with the [Window Splitter WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/).

# Steps

## Usage

The `Steps` component is used to guide users through a series of steps in a process.

- Supports horizontal and vertical orientations.
- Support for changing the active step with the keyboard and pointer.
- Support for linear and non-linear steps.

```jsx
import { Steps } from '@ark-ui/react/steps'
```

## Examples

### Basic

Here's a basic example of the `Steps` component.

```tsx
import { Steps } from '@ark-ui/react/steps'

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' }
]

export const Basic = () => {
  return (
    <Steps.Root count={items.length}>
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item key={index} index={index}>
            <Steps.Trigger>
              <Steps.Indicator>{index + 1}</Steps.Indicator>
              <span>{item.title}</span>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {items.map((item, index) => (
        <Steps.Content key={index} index={index}>
          {item.title} - {item.description}
        </Steps.Content>
      ))}

      <Steps.CompletedContent>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>

      <div>
        <Steps.PrevTrigger>Back</Steps.PrevTrigger>
        <Steps.NextTrigger>Next</Steps.NextTrigger>
      </div>
    </Steps.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the steps. It accepts the value of the `useSteps` hook. You can
leverage it to access the component state and methods from outside the steps.

```tsx
import { Steps, useSteps } from '@ark-ui/react/steps'

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' }
]

export const RootProvider = () => {
  const steps = useSteps({ count: items.length })

  return (
    <>
      <button onClick={() => steps.resetStep()}>Reset</button>

      <Steps.RootProvider value={steps}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger>
                <Steps.Indicator>{index + 1}</Steps.Indicator>
                <span>{item.title}</span>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
        {items.map((item, index) => (
          <Steps.Content key={index} index={index}>
            {item.title} - {item.description}
          </Steps.Content>
        ))}
        <Steps.CompletedContent>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>
        <div>
          <Steps.PrevTrigger>Back</Steps.PrevTrigger>
          <Steps.NextTrigger>Next</Steps.NextTrigger>
        </div>
      </Steps.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`count`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The total number of steps

**`defaultStep`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The initial value of the stepper when rendered.
Use when you don't need to control the value of the stepper.

**`ids`**
Type: `ElementIds`
Required: false
Default Value: `undefined`
Description: The custom ids for the stepper elements

**`linear`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the stepper requires the user to complete the steps in order

**`onStepChange`**
Type: `(details: StepChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback to be called when the value changes

**`onStepComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Callback to be called when a step is completed

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the stepper

**`step`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The controlled value of the stepper

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: root
**`data-orientation`**: The orientation of the steps

### CompletedContent

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Content

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-orientation`**: The orientation of the content

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: indicator
**`data-complete`**: Present when the indicator value is complete
**`data-current`**: Present when current
**`data-incomplete`**:

### Item

#### Props

**`index`**
Type: `number`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: item
**`data-orientation`**: The orientation of the item

### List

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: list
**`data-orientation`**: The orientation of the list

### NextTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### PrevTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Progress

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: progress
**`data-complete`**: Present when the progress value is complete

### RootProvider

#### Props

**`value`**
Type: `UseStepsReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Separator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: separator
**`data-orientation`**: The orientation of the separator
**`data-complete`**: Present when the separator value is complete
**`data-current`**: Present when current
**`data-incomplete`**:

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: steps
**`data-part`**: trigger
**`data-state`**: "open" | "closed"
**`data-orientation`**: The orientation of the trigger
**`data-complete`**: Present when the trigger value is complete
**`data-current`**: Present when current
**`data-incomplete`**:

# Switch

## Anatomy

To set up the switch correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

### Design impact on the asChild property

The `Switch.Root` element of the switch is a `label` element. This is because the switch is a form control and should be
associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility structure will
be invalid.

> If you need to use the `asChild` property, make sure that the `label` element is the direct child of the `Switch.Root`
> component.

## Examples

Learn how to use the `Switch` component in your project. Let's take a look at the most basic example:

```tsx
import { Switch } from '@ark-ui/react/switch'

export const Basic = () => (
  <Switch.Root>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>Label</Switch.Label>
    <Switch.HiddenInput />
  </Switch.Root>
)
```

### Controlled Switch

For a controlled Switch component, the state of the toggle is managed using the checked prop, and updates when the
`onCheckedChange` event handler is called:

```tsx
import { Switch } from '@ark-ui/react/switch'
import { useState } from 'react'

export const Controlled = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Switch.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}
```

### Render Prop Usage

The Switch component also allows for a render prop, granting direct access to its internal state. This enables you to
dynamically adjust and customize aspects of the component based on its current state:

```tsx
import { Switch } from '@ark-ui/react/switch'

export const RenderProp = () => (
  <Switch.Root>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Context>
      {(context) => <Switch.Label>Feature is {context.checked ? 'enabled' : 'disabled'}</Switch.Label>}
    </Switch.Context>
    <Switch.HiddenInput />
  </Switch.Root>
)
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a switch. It includes handling
ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { Switch } from '@ark-ui/react/switch'

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <Switch.Root>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the switch. It accepts the value of the `useSwitch` hook. You can
leverage it to access the component state and methods from outside the switch.

```tsx
import { Switch, useSwitch } from '@ark-ui/react/switch'

export const RootProvider = () => {
  const switchApi = useSwitch()

  return (
    <>
      <button onClick={() => switchApi.toggleChecked()}>Toggle</button>

      <Switch.RootProvider value={switchApi}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Label</Switch.Label>
        <Switch.HiddenInput />
      </Switch.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`checked`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled checked state of the switch

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the switch is disabled.

**`ids`**
Type: `Partial<{ root: string; hiddenInput: string; control: string; label: string; thumb: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the switch. Useful for composition.

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the switch is marked as invalid.

**`label`**
Type: `string`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name of the input field in a switch
(Useful for form submission).

**`onCheckedChange`**
Type: `(details: CheckedChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to call when the switch is clicked.

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the switch is read-only

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: If `true`, the switch input is marked as required,

**`value`**
Type: `string | number`
Required: false
Default Value: `"on"`
Description: The value of switch input. Useful for form submission.

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "checked" | "unchecked"
**`data-invalid`**: Present when invalid

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "checked" | "unchecked"
**`data-invalid`**: Present when invalid

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "checked" | "unchecked"
**`data-invalid`**: Present when invalid

### RootProvider

#### Props

**`value`**
Type: `UseSwitchReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Thumb

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-active`**: Present when active or pressed
**`data-focus`**: Present when focused
**`data-focus-visible`**: Present when focused with keyboard
**`data-readonly`**: Present when read-only
**`data-hover`**: Present when hovered
**`data-disabled`**: Present when disabled
**`data-state`**: "checked" | "unchecked"
**`data-invalid`**: Present when invalid

## Accessibility

Complies with the [Switch WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).

### Keyboard Support

**`Space + Enter`**
Description: Toggle the switch

# Tabs

## Anatomy

To set up the tabs correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Tabs` component in your project. Let's take a look at the most basic example:

```tsx
import { Tabs } from '@ark-ui/react/tabs'

export const Basic = () => (
  <Tabs.Root>
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
)
```

### Initial Tab

To set a default tab on initial render, use the `defaultValue` prop:

```tsx
import { Tabs } from '@ark-ui/react/tabs'

export const InitialTab = () => (
  <Tabs.Root defaultValue="react">
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
)
```

### Tab Indicator

To provide a visual cue for the selected tab, use the `Tabs.Indicator` component:

```tsx
import { Tabs } from '@ark-ui/react/tabs'

export const Indicator = () => (
  <Tabs.Root>
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
)
```

### Lazy Mounting

Lazy mounting is a feature that allows the content of a tab to be rendered only when the tab is first activated. This is
useful for performance optimization, especially when tab content is large or complex. To enable lazy mounting, use the
`lazyMount` prop on the `Tabs.Content` component.

In addition, the `unmountOnExit` prop can be used in conjunction with `lazyMount` to unmount the tab content when the
tab is deactivated, freeing up resources. The next time the tab is activated, its content will be re-rendered.

```tsx
import { Tabs } from '@ark-ui/react/tabs'

export const LazyMount = () => (
  <Tabs.Root lazyMount unmountOnExit>
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
)
```

### Disabled Tab

To disable a tab, simply pass the `disabled` prop to the `Tabs.Trigger` component:

```tsx
import { Tabs } from '@ark-ui/react/tabs'

export const DisabledTab = () => (
  <Tabs.Root defaultValue="react">
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue" disabled>
        Vue
      </Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
)
```

### Controlled Tabs

To create a controlled Tabs component, manage the current selected tab using the `value` prop and update it when the
`onValueChange` event handler is called:

```tsx
import { Tabs } from '@ark-ui/react/tabs'
import { useState } from 'react'

export const Controlled = () => {
  const [value, setValue] = useState<string | null>('react')
  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <Tabs.List>
        <Tabs.Trigger value="react">React</Tabs.Trigger>
        <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
        <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="react">React Content</Tabs.Content>
      <Tabs.Content value="vue">Vue Content</Tabs.Content>
      <Tabs.Content value="solid">Solid Content</Tabs.Content>
    </Tabs.Root>
  )
}
```

### Router Controlled Tabs

When using frameworks like Next.js, Remix, or React Router, controlling the active tabs based on the URL can be useful.

To achieve this, you need to do two things:

- Set the `value` prop to the current URL path.
- Listen to the `onValueChange` event and update the URL path.

Here's an example using Remix Router

```tsx
import { Tabs } from '@ark-ui/react/tabs'
import { useLocation, useNavigate, Link } from '@remix-run/react'

export default function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const lastPathFragment = pathname.substring(pathname.lastIndexOf('/') + 1)
  const activeTab = lastPathFragment.length > 0 ? lastPathFragment : 'homepage'

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={({ value }) => {
        navigate(`/${value === 'home' ? '' : value}`)
      }}
    >
      <Tabs.List>
        <Tabs.Trigger asChild value="home">
          <Link to="">Home</Link>
        </Tabs.Trigger>
        <Tabs.Trigger asChild value="page-1">
          <Link to="page-1">Page 1</Link>
        </Tabs.Trigger>
        <Tabs.Trigger asChild value="page-2">
          <Link to="page-2">Page 2</Link>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
```

### Vertical Tabs

The default orientation of the tabs is `horizontal`. To change the orientation, set the `orientation` prop to
`vertical`.

```tsx
import { Tabs } from '@ark-ui/react/tabs'

export const Vertical = () => (
  <Tabs.Root orientation="vertical" defaultValue="react">
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
)
```

### Manual Activation

By default, the tab can be selected when it receives focus from either the keyboard or pointer interaction. This is
called automatic tab activation.

In contrast, manual tab activation means the tab is selected with the

<kbd>Enter</kbd> key or by clicking on the tab.

```tsx
import { Tabs } from '@ark-ui/react/tabs'

export const Manual = () => (
  <Tabs.Root activationMode="manual" defaultValue="react">
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the tabs. It accepts the value of the `useTabs` hook. You can
leverage it to access the component state and methods from outside the tabs.

```tsx
import { Tabs, useTabs } from '@ark-ui/react/tabs'

export const RootProvider = () => {
  const tabs = useTabs()

  return (
    <>
      <button onClick={() => tabs.focus()}>Focus</button>

      <Tabs.RootProvider value={tabs}>
        <Tabs.List>
          <Tabs.Trigger value="react">React</Tabs.Trigger>
          <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
          <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="react">React Content</Tabs.Content>
        <Tabs.Content value="vue">Vue Content</Tabs.Content>
        <Tabs.Content value="solid">Solid Content</Tabs.Content>
      </Tabs.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`activationMode`**
Type: `'manual' | 'automatic'`
Required: false
Default Value: `"automatic"`
Description: The activation mode of the tabs. Can be `manual` or `automatic`

- `manual`: Tabs are activated when clicked or press `enter` key.
- `automatic`: Tabs are activated when receiving focus

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`composite`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the tab is composite

**`defaultValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial selected tab value when rendered.
Use when you don't need to control the selected tab value.

**`deselectable`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the active tab can be deselected when clicking on it.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; trigger: string; list: string; content: string; indicator: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the tabs. Useful for composition.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`loopFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the keyboard navigation will loop from last tab to first, and vice versa.

**`navigate`**
Type: `(details: NavigateDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to navigate to the selected tab when clicking on it.
Useful if tab triggers are anchor elements.

**`onFocusChange`**
Type: `(details: FocusChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback to be called when the focused tab changes

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback to be called when the selected/active tab changes

**`orientation`**
Type: `'horizontal' | 'vertical'`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the tabs. Can be `horizontal` or `vertical`

- `horizontal`: only left and right arrow key navigation will work.
- `vertical`: only up and down arrow key navigation will work.

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

**`value`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled selected tab value

#### Data Attributes

**`data-scope`**: tabs
**`data-part`**: root
**`data-orientation`**: The orientation of the tabs
**`data-focus`**: Present when focused

### TabContent

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The value of the tab

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### TabIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### TabList

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### TabTrigger

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The value of the tab

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the tab is disabled

### RootProvider

#### Props

**`value`**
Type: `UseTabsReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

## Accessibility

Complies with the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

### Keyboard Support

**`Tab`**
Description: When focus moves onto the tabs, focuses the active trigger. When a trigger is focused, moves focus to the active content.

**`ArrowDown`**
Description: Moves focus to the next trigger in vertical orientation and activates its associated content.

**`ArrowRight`**
Description: Moves focus to the next trigger in horizontal orientation and activates its associated content.

**`ArrowUp`**
Description: Moves focus to the previous trigger in vertical orientation and activates its associated content.

**`ArrowLeft`**
Description: Moves focus to the previous trigger in horizontal orientation and activates its associated content.

**`Home`**
Description: Moves focus to the first trigger and activates its associated content.

**`End`**
Description: Moves focus to the last trigger and activates its associated content.

**`Enter + Space`**
Description: In manual mode, when a trigger is focused, moves focus to its associated content.

# Tags Input

## Anatomy

To set up the tags input correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `TagsInput` component in your project. Let's take a look at the most basic example:

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const Basic = () => {
  return (
    <TagsInput.Root>
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Navigating and Editing tags

When the input has an empty value or the caret is at the start position, the tags can be selected by using the arrow
left and arrow right keys. When "visual" focus in on any tag:

- Pressing <kbd>Enter</kbd> or double-clicking on the tag will put it in edit mode, allowing the user change its value
  and press <kbd>Enter</kbd> to commit the changes.
- Pressing <kbd>Delete</kbd> or <kbd>Backspace</kbd> will delete the tag that has _visual_ focus.

### Setting the initial tags

To set the initial tag values, set the `defaultValue` prop.

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const InitialValue = () => {
  return (
    <TagsInput.Root defaultValue={['React', 'Solid', 'Vue']}>
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add tag" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Limiting the number of tags

To limit the number of tags within the component, you can set the `max` property to the limit you want. The default
value is `Infinity`.

When the tag reaches the limit, new tags cannot be added except the `allowOverflow` prop is set to `true`.

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const MaxWithOverflow = () => {
  return (
    <TagsInput.Root max={3} allowOverflow>
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Validating Tags

Before a tag is added, the `validate` function is called to determine whether to accept or reject a tag.

A common use-case for validating tags is preventing duplicates or validating the data type.

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const Validated = () => {
  return (
    <TagsInput.Root
      validate={(details) => {
        return !details.value.includes(details.inputValue)
      }}
    >
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Blur behavior

When the tags input is blurred, you can configure the action the component should take by passing the `blurBehavior`
prop.

- `add` — Adds the tag to the list of tags.
- `clear` — Clears the tags input value.

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const BlurBehavior = () => {
  return (
    <TagsInput.Root blurBehavior="add">
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Paste behavior

To add a tag when a arbitrary value is pasted in the input element, pass the `addOnPaste` prop.

When a value is pasted, the component will:

- check if the value is a valid tag based on the `validate` option
- split the value by the `delimiter` option passed

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const PasteBehavior = () => {
  return (
    <TagsInput.Root addOnPaste delimiter=",">
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Disable tag editing

by default the tags can be edited by double-clicking on the tag or focusing on them and pressing

<kbd>Enter</kbd>. To disable this behavior, pass `editable={false}`

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const DisabledEditing = () => {
  return (
    <TagsInput.Root editable={false}>
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Events

During the lifetime of the tags input interaction, here's a list of events we emit:

- `onValueChange` — invoked when the tag value changes.
- `onHighlightChange` — invoked when a tag has visual focus.
- `onValueInvalid` — invoked when the max tag count is reached or the `validate` function returns `false`.

```tsx
import { TagsInput } from '@ark-ui/react/tags-input'

export const OnEvent = () => {
  return (
    <TagsInput.Root
      onValueChange={(details) => {
        console.log('tags changed to:', details.value)
      }}
      onHighlightChange={(details) => {
        console.log('highlighted tag:', details.highlightedValue)
      }}
      onValueInvalid={(details) => {
        console.log('Invalid!', details.reason)
      }}
      max={3}
      allowOverflow
      validate={(details) => {
        return !details.value.includes(details.inputValue)
      }}
    >
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
```

### Using the Field Component

The `Field` component helps manage form-related state and accessibility attributes of a tags input. It includes handling
ARIA labels, helper text, and error text to ensure proper accessibility.

```tsx
import { Field } from '@ark-ui/react/field'
import { TagsInput } from '@ark-ui/react/tags-input'

export const WithField = (props: Field.RootProps) => {
  return (
    <Field.Root {...props}>
      <TagsInput.Root>
        <TagsInput.Context>
          {(tagsInput) => (
            <>
              <TagsInput.Label>Label</TagsInput.Label>
              <TagsInput.Control>
                {tagsInput.value.map((value, index) => (
                  <TagsInput.Item key={index} index={index} value={value}>
                    <TagsInput.ItemPreview>
                      <TagsInput.ItemText>{value}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput />
                  </TagsInput.Item>
                ))}
              </TagsInput.Control>
              <TagsInput.Input placeholder="Add Framework" />
              <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
            </>
          )}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
      </TagsInput.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the tags-input. It accepts the value of the `useTags-input` hook.
You can leverage it to access the component state and methods from outside the tags-input.

```tsx
import { TagsInput, useTagsInput } from '@ark-ui/react/tags-input'

export const RootProvider = () => {
  const tagsInput = useTagsInput()

  return (
    <>
      <button onClick={() => tagsInput.focus()}>Focus</button>

      <TagsInput.RootProvider value={tagsInput}>
        <TagsInput.Context>
          {(tagsInput) => (
            <>
              <TagsInput.Label>Frameworks</TagsInput.Label>
              <TagsInput.Control>
                {tagsInput.value.map((value, index) => (
                  <TagsInput.Item key={index} index={index} value={value}>
                    <TagsInput.ItemPreview>
                      <TagsInput.ItemText>{value}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput />
                  </TagsInput.Item>
                ))}
              </TagsInput.Control>
              <TagsInput.Input placeholder="Add Framework" />
              <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
            </>
          )}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
      </TagsInput.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`addOnPaste`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to add a tag when you paste values into the tag input

**`allowOverflow`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to allow tags to exceed max. In this case,
we'll attach `data-invalid` to the root

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoFocus`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the input should be auto-focused

**`blurBehavior`**
Type: `'clear' | 'add'`
Required: false
Default Value: `undefined`
Description: The behavior of the tags input when the input is blurred

- `"add"`: add the input value as a new tag
- `"clear"`: clear the input value

**`defaultInputValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The initial tag input value when rendered.
Use when you don't need to control the tag input value.

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial tag value when rendered.
Use when you don't need to control the tag value.

**`delimiter`**
Type: `string | RegExp`
Required: false
Default Value: `","`
Description: The character that serves has:

- event key to trigger the addition of a new tag
- character used to split tags when pasting into the input

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the tags input should be disabled

**`editable`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether a tag can be edited after creation, by pressing `Enter` or double clicking.

**`form`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The associate form of the underlying input element.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{
  root: string
  input: string
  hiddenInput: string
  clearBtn: string
  label: string
  control: string
  item(opts: ItemProps): string
  itemDeleteTrigger(opts: ItemProps): string
  itemInput(opts: ItemProps): string
}>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the tags input. Useful for composition.

**`inputValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The controlled tag input's value

**`invalid`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the tags input is invalid

**`max`**
Type: `number`
Required: false
Default Value: `Infinity`
Description: The max number of tags

**`maxLength`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The max length of the input.

**`name`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The name attribute for the input. Useful for form submissions

**`onFocusOutside`**
Type: `(event: FocusOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the focus is moved outside the component

**`onHighlightChange`**
Type: `(details: HighlightChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback fired when a tag is highlighted by pointer or keyboard navigation

**`onInputValueChange`**
Type: `(details: InputValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback fired when the input value is updated

**`onInteractOutside`**
Type: `(event: InteractOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when an interaction happens outside the component

**`onPointerDownOutside`**
Type: `(event: PointerDownOutsideEvent) => void`
Required: false
Default Value: `undefined`
Description: Function called when the pointer is pressed down outside the component

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback fired when the tag values is updated

**`onValueInvalid`**
Type: `(details: ValidityChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Callback fired when the max tag count is reached or the `validateTag` function returns `false`

**`readOnly`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the tags input should be read-only

**`required`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the tags input is required

**`translations`**
Type: `IntlTranslations`
Required: false
Default Value: `undefined`
Description: Specifies the localized strings that identifies the accessibility elements and their states

**`validate`**
Type: `(details: ValidateArgs) => boolean`
Required: false
Default Value: `undefined`
Description: Returns a boolean that determines whether a tag can be added.
Useful for preventing duplicates or invalid tag values.

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled tag value

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: root
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only
**`data-disabled`**: Present when disabled
**`data-focus`**: Present when focused
**`data-empty`**:

### ClearTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: clear-trigger
**`data-readonly`**: Present when read-only

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: control
**`data-disabled`**: Present when disabled
**`data-readonly`**: Present when read-only
**`data-invalid`**: Present when invalid
**`data-focus`**: Present when focused

### HiddenInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Input

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: input
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### ItemDeleteTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemInput

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ItemPreview

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: item-preview
**`data-value`**: The value of the item
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted

### Item

#### Props

**`index`**
Type: `string | number`
Required: true
Default Value: `undefined`
Description: undefined

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: item
**`data-value`**: The value of the item
**`data-disabled`**: Present when disabled

### ItemText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: item-text
**`data-disabled`**: Present when disabled
**`data-highlighted`**: Present when highlighted

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tags-input
**`data-part`**: label
**`data-disabled`**: Present when disabled
**`data-invalid`**: Present when invalid
**`data-readonly`**: Present when read-only

### RootProvider

#### Props

**`value`**
Type: `UseTagsInputReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

### Keyboard Support

**`ArrowLeft`**
Description: Moves focus to the previous tag item

**`ArrowRight`**
Description: Moves focus to the next tag item

**`Backspace`**
Description: Deletes the tag item that has visual focus or the last tag item

**`Enter`**
Description: <span>When a tag item has visual focus, it puts the tag in edit mode.<br />When the input has focus, it adds the value to the list of tags</span>

**`Delete`**
Description: Deletes the tag item that has visual focus

**`Control + V`**
Description: When `addOnPaste` is set. Adds the pasted value as a tags

# Timer

## Examples

Learn how to use the `Timer` component in your project. Let's take a look at the most basic example:

```tsx
import { Timer } from '@ark-ui/react/timer'

export const Basic = () => (
  <Timer.Root targetMs={60 * 60 * 1000}>
    <Timer.Area>
      <Timer.Item type="days" />
      <Timer.Separator>:</Timer.Separator>
      <Timer.Item type="hours" />
      <Timer.Separator>:</Timer.Separator>
      <Timer.Item type="minutes" />
      <Timer.Separator>:</Timer.Separator>
      <Timer.Item type="seconds" />
    </Timer.Area>
    <Timer.Control>
      <Timer.ActionTrigger action="start">Play</Timer.ActionTrigger>
      <Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
      <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
    </Timer.Control>
  </Timer.Root>
)
```

### Countdown Timer

You can create a countdown timer by setting the `targetMs` prop to a future timestamp:

```tsx
import { Timer } from '@ark-ui/react/timer'

export const Countdown = () => (
  <Timer.Root autoStart countdown startMs={60 * 60 * 500}>
    <Timer.Area>
      <Timer.Item type="days" />
      <Timer.Separator>:</Timer.Separator>
      <Timer.Item type="hours" />
      <Timer.Separator>:</Timer.Separator>
      <Timer.Item type="minutes" />
      <Timer.Separator>:</Timer.Separator>
      <Timer.Item type="seconds" />
    </Timer.Area>
  </Timer.Root>
)
```

### Timer Events

The Timer component provides events that you can listen to for various timer-related actions.

- The `onComplete` event is triggered when the timer reaches its target time.
- The `onTick` event is called on each timer update, providing details about the current timer state.

```tsx
import { Timer } from '@ark-ui/react/timer'

export const Events = () => (
  <Timer.Root
    targetMs={5 * 1000}
    onComplete={() => console.log('Timer completed')}
    onTick={(details) => console.log('Tick:', details.formattedTime)}
  >
    <Timer.Item type="seconds" />
  </Timer.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the timer. It accepts the value of the `useTimer` hook. You can
leverage it to access the component state and methods from outside the timer.

```tsx
import { Timer, useTimer } from '@ark-ui/react/timer'

export const RootProvider = () => {
  const timer = useTimer({ targetMs: 60 * 60 * 1000 })

  return (
    <>
      <button onClick={() => timer.pause()}>Pause</button>

      <Timer.RootProvider value={timer}>
        <Timer.Area>
          <Timer.Item type="days" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="hours" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="minutes" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="seconds" />
        </Timer.Area>
        <Timer.Control>
          <Timer.ActionTrigger action="start">Play</Timer.ActionTrigger>
          <Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
          <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
        </Timer.Control>
      </Timer.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`autoStart`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the timer should start automatically

**`countdown`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the timer should countdown, decrementing the timer on each tick.

**`ids`**
Type: `Partial<{ root: string; area: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the timer parts

**`interval`**
Type: `number`
Required: false
Default Value: `1000`
Description: The interval in milliseconds to update the timer count.

**`onComplete`**
Type: `() => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the timer is completed

**`onTick`**
Type: `(details: TickDetails) => void`
Required: false
Default Value: `undefined`
Description: Function invoked when the timer ticks

**`startMs`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The total duration of the timer in milliseconds.

**`targetMs`**
Type: `number`
Required: false
Default Value: `undefined`
Description: The minimum count of the timer in milliseconds.

### ActionTrigger

#### Props

**`action`**
Type: `TimerAction`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Area

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Item

#### Props

**`type`**
Type: `keyof Time<number>`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: timer
**`data-part`**: item
**`data-type`**: The type of the item

### RootProvider

#### Props

**`value`**
Type: `UseTimerReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Separator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

# Toast

## Anatomy

To set up the toast correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Setup

To use the Toast component, create the toast engine using the `createToaster` function.

This function manages the placement and grouping of toasts, and provides a `toast` object needed to create toast
notification.

```ts
const toaster = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 24
})
```

## Examples

Here's an example of creating a toast using the `toast.create` method.

```tsx
import { Toast, Toaster, createToaster } from '@ark-ui/react/toast'
import { XIcon } from 'lucide-react'

const toaster = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 24
})

export const Basic = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: 'Toast Title',
            description: 'Toast Description',
            type: 'info'
          })
        }
      >
        Add Toast
      </button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger>
              <XIcon />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toaster>
    </div>
  )
}
```

### Update Toast

To update a toast, use the `toast.update` method.

```tsx
import { Toast, Toaster, createToaster } from '@ark-ui/react/toast'
import { useRef } from 'react'

const toaster = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 24
})

export const Update = () => {
  const id = useRef<string>(undefined)

  const createToast = () => {
    id.current = toaster.create({
      title: 'Loading',
      description: 'Loading ...',
      type: 'info'
    })
  }

  const updateToast = () => {
    if (!id.current) {
      return
    }
    toaster.update(id.current, {
      title: 'Success',
      description: 'Success!'
    })
  }

  return (
    <div>
      <button type="button" onClick={createToast}>
        Create Toast
      </button>
      <button type="button" onClick={updateToast}>
        Update Toast
      </button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
          </Toast.Root>
        )}
      </Toaster>
    </div>
  )
}
```

### Action

To add an action to a toast, use the `toast.action` property.

```tsx
import { Toast, Toaster, createToaster } from '@ark-ui/react/toast'

const toaster = createToaster({
  placement: 'bottom-end',
  gap: 24
})

export const Action = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: 'Toast Title',
            description: 'Toast Description',
            type: 'info',
            action: {
              label: 'Subscribe',
              onClick: () => {
                console.log('Subscribe')
              }
            }
          })
        }
      >
        Add Toast
      </button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            {toast.action && <Toast.ActionTrigger>{toast.action?.label}</Toast.ActionTrigger>}
          </Toast.Root>
        )}
      </Toaster>
    </div>
  )
}
```

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: toast
**`data-part`**: root
**`data-state`**: "open" | "closed"
**`data-type`**: The type of the item
**`data-placement`**: The placement of the toast
**`data-align`**:
**`data-side`**:
**`data-mounted`**: Present when mounted
**`data-paused`**: Present when paused
**`data-first`**:
**`data-sibling`**:
**`data-stack`**:
**`data-overlap`**: Present when overlapping

### ActionTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### CloseTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Description

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Title

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Toaster

#### Props

**`toaster`**
Type: `CreateToasterReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`dir`**
Type: `'ltr' | 'rtl'`
Required: false
Default Value: `"ltr"`
Description: The document's text/writing direction.

**`getRootNode`**
Type: `() => Node | ShadowRoot | Document`
Required: false
Default Value: `undefined`
Description: A root node to correctly resolve document in custom environments. E.x.: Iframes, Electron.

# Toggle Group

## Anatomy

To set up the toggle group correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `ToggleGroup` component in your project. Let's take a look at the most basic example:

```tsx
import { ToggleGroup } from '@ark-ui/react/toggle-group'

export const Basic = () => {
  return (
    <ToggleGroup.Root>
      <ToggleGroup.Item value="a">A</ToggleGroup.Item>
      <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      <ToggleGroup.Item value="c">C</ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
```

### Multiple Selection

Demonstrates how to enable `multiple` selection within the group.

```tsx
import { ToggleGroup } from '@ark-ui/react/toggle-group'

export const Multiple = () => {
  return (
    <ToggleGroup.Root multiple>
      <ToggleGroup.Item value="a">A</ToggleGroup.Item>
      <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      <ToggleGroup.Item value="c">C</ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
```

### Initial Value

Shows how to set an initial value in the toggle group.

```tsx
import { ToggleGroup } from '@ark-ui/react/toggle-group'

export const InitialValue = () => {
  return (
    <ToggleGroup.Root defaultValue={['b']}>
      <ToggleGroup.Item value="a">A</ToggleGroup.Item>
      <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      <ToggleGroup.Item value="c">C</ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the toggle-group. It accepts the value of the `useToggle-group`
hook. You can leverage it to access the component state and methods from outside the toggle-group.

```tsx
import { ToggleGroup, useToggleGroup } from '@ark-ui/react/toggle-group'

export const RootProvider = () => {
  const toggleGroup = useToggleGroup()

  return (
    <>
      <button onClick={() => toggleGroup.setValue(['b'])}>Set to B</button>

      <ToggleGroup.RootProvider value={toggleGroup}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
        <ToggleGroup.Item value="c">C</ToggleGroup.Item>
      </ToggleGroup.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial selected value of the toggle group when rendered.
Use when you don't need to control the selected value of the toggle group.

**`deselectable`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the toggle group allows empty selection.
**Note:** This is ignored if `multiple` is `true`.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the toggle is disabled.

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ root: string; item(value: string): string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the toggle. Useful for composition.

**`loopFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to loop focus inside the toggle group.

**`multiple`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to allow multiple toggles to be selected.

**`onValueChange`**
Type: `(details: ValueChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function to call when the toggle is clicked.

**`orientation`**
Type: `Orientation`
Required: false
Default Value: `"horizontal"`
Description: The orientation of the toggle group.

**`rovingFocus`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to use roving tab index to manage focus.

**`value`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled selected value of the toggle group.

#### Data Attributes

**`data-scope`**: toggle-group
**`data-part`**: root
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the toggle-group
**`data-focus`**: Present when focused

### Item

#### Props

**`value`**
Type: `string`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: undefined

#### Data Attributes

**`data-scope`**: toggle-group
**`data-part`**: item
**`data-focus`**: Present when focused
**`data-disabled`**: Present when disabled
**`data-orientation`**: The orientation of the item
**`data-state`**: "on" | "off"

### RootProvider

#### Props

**`value`**
Type: `UseToggleGroupReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

### Keyboard Support

**`Tab`**
Description: Moves focus to either the pressed item or the first item in the group.

**`Space`**
Description: Activates/deactivates the item.

**`Enter`**
Description: Activates/deactivates the item.

**`ArrowDown`**
Description: Moves focus to the next item in the group.

**`ArrowRight`**
Description: Moves focus to the next item in the group.

**`ArrowUp`**
Description: Moves focus to the previous item in the group.

**`ArrowLeft`**
Description: Moves focus to the previous item in the group.

**`Home`**
Description: Moves focus to the first item.

**`End`**
Description: Moves focus to the last item.

# Toggle

## Examples

Here's a basic example of how to use the `Toggle` component:

```tsx
import { Toggle } from '@ark-ui/react/toggle'
import { BoldIcon } from 'lucide-react'

export const Basic = () => {
  return (
    <Toggle.Root>
      <BoldIcon />
    </Toggle.Root>
  )
}
```

### Controlled

Use the `pressed` and `onPressedChange` props to control the toggle's state.

```tsx
import { Toggle } from '@ark-ui/react/toggle'
import { Volume, VolumeOff } from 'lucide-react'
import { useState } from 'react'

export const Controlled = () => {
  const [pressed, setPressed] = useState(false)
  return (
    <div>
      <Toggle.Root pressed={pressed} onPressedChange={setPressed}>
        {pressed ? <Volume /> : <VolumeOff />}
      </Toggle.Root>
      <p>Volume is {pressed ? 'unmuted' : 'muted'}</p>
    </div>
  )
}
```

### Disabled

Use the `disabled` prop to disable the toggle.

```tsx
import { Toggle } from '@ark-ui/react/toggle'
import { BoldIcon } from 'lucide-react'

export const Disabled = () => {
  return (
    <Toggle.Root disabled>
      <BoldIcon />
    </Toggle.Root>
  )
}
```

### Indicator

Use the `Toggle.Indicator` component to render different indicators based on the state of the toggle.

```tsx
import { Toggle } from '@ark-ui/react/toggle'
import { Volume, VolumeOff } from 'lucide-react'

export const Indicator = () => {
  return (
    <Toggle.Root>
      <Toggle.Indicator fallback={<Volume />}>
        <VolumeOff />
      </Toggle.Indicator>
    </Toggle.Root>
  )
}
```

## API Reference

### Root

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultPressed`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The default pressed state of the toggle.

**`onPressedChange`**
Type: `(pressed: boolean) => void`
Required: false
Default Value: `undefined`
Description: Event handler called when the pressed state of the toggle changes.

**`pressed`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The pressed state of the toggle.

#### Data Attributes

**`data-scope`**: toggle
**`data-part`**: root
**`data-state`**: "on" | "off"
**`data-pressed`**: Present when pressed
**`data-disabled`**: Present when disabled

### Indicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`fallback`**
Type: `string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>`
Required: false
Default Value: `undefined`
Description: The fallback content to render when the toggle is not pressed.

#### Data Attributes

**`data-scope`**: toggle
**`data-part`**: indicator
**`data-disabled`**: Present when disabled
**`data-pressed`**: Present when pressed
**`data-state`**: "on" | "off"

# Tooltip

## Anatomy

To set up the tooltip correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `Tooltip` component in your project. Let's take a look at the most basic example:

```tsx
import { Tooltip } from '@ark-ui/react/tooltip'

export const Basic = () => (
  <Tooltip.Root>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Content>I am a tooltip!</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
)
```

### Controlled Tooltip

To create a controlled Tooltip component, manage the state of whether the tooltip is open using the `open` prop:

```tsx
import { Tooltip } from '@ark-ui/react/tooltip'
import { useState } from 'react'

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      <Tooltip.Root open={isOpen}>
        <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>I am a tooltip!</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </>
  )
}
```

### Using a Render Function

For more control over the Tooltip's functionality, you can use a function as a child, which provides access to the
Tooltip API:

```tsx
import { Tooltip } from '@ark-ui/react/tooltip'

export const RenderFn = () => (
  <Tooltip.Root>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Context>
        {(tooltip) => <Tooltip.Content>This tooltip is open: {tooltip.open.toString()}</Tooltip.Content>}
      </Tooltip.Context>
    </Tooltip.Positioner>
  </Tooltip.Root>
)
```

### Adding an Arrow

To display an arrow pointing to the trigger from the tooltip, use the `Tooltip.Arrow` and `Tooltip.ArrowTip` components:

```tsx
import { Tooltip } from '@ark-ui/react/tooltip'

export const Arrow = () => (
  <Tooltip.Root>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Content>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        I am a tooltip!
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
)
```

### Configuring Delay Timings

To configure the delay timings for the Tooltip, use the `closeDelay` and `openDelay` props:

```tsx
import { Tooltip } from '@ark-ui/react/tooltip'

export const Timings = () => (
  <Tooltip.Root closeDelay={0} openDelay={0}>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Content>I am a tooltip!</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
)
```

### Custom Positioning

To customize the position of the Tooltip relative to the trigger, use the `positioning` prop:

```tsx
import { Tooltip } from '@ark-ui/react/tooltip'

export const Positioning = () => (
  <Tooltip.Root
    positioning={{
      placement: 'left-start',
      offset: { mainAxis: 12, crossAxis: 12 }
    }}
  >
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Content>I am a tooltip!</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
)
```

### Using the Root Provider

The `RootProvider` component provides a context for the tooltip. It accepts the value of the `useTooltip` hook. You can
leverage it to access the component state and methods from outside the tooltip.

```tsx
import { Tooltip, useTooltip } from '@ark-ui/react/tooltip'

export const RootProvider = () => {
  const tooltip = useTooltip()

  return (
    <>
      <button onClick={() => tooltip.setOpen(true)}>Open</button>

      <Tooltip.RootProvider value={tooltip}>
        <Tooltip.Trigger disabled>Hover Me</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>I am a tooltip!</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.RootProvider>
    </>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`aria-label`**
Type: `string`
Required: false
Default Value: `undefined`
Description: Custom label for the tooltip.

**`closeDelay`**
Type: `number`
Required: false
Default Value: `500`
Description: The close delay of the tooltip.

**`closeOnClick`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the tooltip should close on click

**`closeOnEscape`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to close the tooltip when the Escape key is pressed.

**`closeOnPointerDown`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether to close the tooltip on pointerdown.

**`closeOnScroll`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the tooltip should close on scroll

**`defaultOpen`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The initial open state of the tooltip when rendered.
Use when you don't need to control the open state of the tooltip.

**`disabled`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the tooltip is disabled

**`id`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The unique identifier of the machine.

**`ids`**
Type: `Partial<{ trigger: string; content: string; arrow: string; positioner: string }>`
Required: false
Default Value: `undefined`
Description: The ids of the elements in the tooltip. Useful for composition.

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`interactive`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether the tooltip's content is interactive.
In this mode, the tooltip will remain open when user hovers over the content.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`onOpenChange`**
Type: `(details: OpenChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Function called when the tooltip is opened.

**`open`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: The controlled open state of the tooltip

**`openDelay`**
Type: `number`
Required: false
Default Value: `1000`
Description: The open delay of the tooltip.

**`positioning`**
Type: `PositioningOptions`
Required: false
Default Value: `undefined`
Description: The user provided options used to position the popover content

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Arrow

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ArrowTip

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tooltip
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-placement`**: The placement of the content

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### RootProvider

#### Props

**`value`**
Type: `UseTooltipReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Trigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tooltip
**`data-part`**: trigger
**`data-expanded`**: Present when expanded
**`data-state`**: "open" | "closed"

## Accessibility

Complies with the [Tooltip WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).

### Keyboard Support

**`Tab`**
Description: Opens/closes the tooltip without delay.

**`Escape`**
Description: If open, closes the tooltip without delay.

# Tour

## Features

- Support for different step types such as "dialog", "floating", "tooltip" or "wait"
- Support for customizable content per step
- Wait steps for waiting for a specific selector to appear on the page before showing the next step
- Flexible positioning of the tour dialog per step
- Progress tracking shows users their progress through the tour

## Anatomy

To set up the tour correctly, it's essential to understand its anatomy and the naming of its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Steps

### Using step types

The tour machine supports different types of steps, allowing you to create a diverse and interactive tour experience.
The available step types are defined in the `StepType` type:

- `tooltip`: Displays the step content as a tooltip, typically positioned near the target element.

- `dialog`: Shows the step content in a modal dialog centered on screen, useful for starting or ending the tour. This
  usually don't have a `target` defined.

- `floating`: Presents the step content as a floating element, which can be positioned flexibly on the screen. This
  usually don't have a `target` defined.

- `wait`: A special type that waits for a specific condition before proceeding to the next step.

```tsx
const steps: TourStepDetails[] = [
  {
    id: 'step-1',
    type: 'tooltip',
    placement: 'top-start',
    target: () => document.querySelector('#target-1'),
    title: 'Tooltip Step',
    description: 'This is a tooltip step'
  },
  {
    id: 'step-2',
    type: 'dialog',
    title: 'Dialog Step',
    description: 'This is a dialog step'
  },
  {
    id: 'step-3',
    type: 'floating',
    placement: 'top-start',
    title: 'Floating Step',
    description: 'This is a floating step'
  },
  {
    id: 'step-4',
    type: 'wait',
    title: 'Wait Step',
    description: 'This is a wait step',
    effect({ next }) {
      // do something and go next
      // you can also return a cleanup
    }
  }
]
```

### Configuring actions

Every step supports a list of actions that are rendered in the step footer.Use the `actions` property to define each
action.

```tsx
const steps: TourStepDetails[] = [
  {
    id: 'step-1',
    type: 'dialog',
    title: 'Dialog Step',
    description: 'This is a dialog step',
    actions: [{ label: 'Show me a tour!', action: 'next' }]
  }
]
```

### Changing tooltip placement

Use the `placement` property to define the placement of the tooltip.

```tsx {5}
const steps: TourStepDetails[] = [
  {
    id: 'step-1',
    type: 'tooltip',
    placement: 'top-start'
    // ...
  }
]
```

### Hiding the arrow

Set `arrow: false` in the step property to hide the tooltip arrow. This is only useful for tooltip steps.

```tsx {5}
const steps: TourStepDetails[] = [
  {
    id: 'step-1',
    type: 'tooltip',
    arrow: false
  }
]
```

### Hiding the backdrop

Set `backdrop: false` in the step property to hide the backdrop. This applies to all step types except the `wait` step.

```tsx {5}
const steps: TourStepDetails[] = [
  {
    id: 'step-1',
    type: 'dialog',
    backdrop: false
  }
]
```

### Step Effects

Step effects are functions that are called before a step is opened. They are useful for adding custom logic to a step.

This function provides the following methods:

- `next()`: Call this method to move to the next step.
- `show()`: Call this method to show the current step.
- `update(details: StepDetails)`: Call this method to update the details of the current step (say, after data has been
  fetched).

```tsx
const steps: TourStepDetails[] = [
  {
    id: 'step-1',
    type: 'tooltip',
    effect({ next, show, update }) {
      fetchData().then((res) => {
        // update the step details
        update({ title: res.title })
        // then show show the step
        show()
      })

      return () => {
        // cleanup fetch data
      }
    }
  }
]
```

### Wait Steps

Wait steps are useful when you need to wait for a specific condition before proceeding to the next step.

Use the step `effect` function to perform an action and then call `next()` to move to the next step.

> **Note:** You cannot call `show()` in a wait step.

```tsx
const steps: TourStepDetails[] = [
  {
    id: 'step-1',
    type: 'wait',
    effect({ next }) {
      const button = document.querySelector('#button')
      const listener = () => next()
      button.addEventListener('click', listener)
      return () => button.removeEventListener('click', listener)
    }
  }
]
```

## Styling guide

Ensure the `box-sizing` is set to `border-box` for the means of measuring the tour target.

```css
* {
  box-sizing: border-box;
}
```

Ensure the `body` has a `position` of `relative`.

```css
body {
  position: relative;
}
```

## API Reference

### Root

#### Props

**`tour`**
Type: `UseTourReturn`
Required: true
Default Value: `undefined`
Description: undefined

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

**`skipAnimationOnMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to allow the initial presence animation.

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### ActionTrigger

#### Props

**`action`**
Type: `StepAction`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tour
**`data-part`**: action-trigger
**`data-type`**: The type of the item
**`data-disabled`**: Present when disabled

### Arrow

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### ArrowTip

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Backdrop

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tour
**`data-part`**: backdrop
**`data-state`**: "open" | "closed"
**`data-type`**: The type of the item

### CloseTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tour
**`data-part`**: close-trigger
**`data-type`**: The type of the item

### Content

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tour
**`data-part`**: content
**`data-state`**: "open" | "closed"
**`data-type`**: The type of the item
**`data-placement`**: The placement of the content
**`data-step`**:

### Control

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Description

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tour
**`data-part`**: description
**`data-placement`**: The placement of the description

### Positioner

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tour
**`data-part`**: positioner
**`data-type`**: The type of the item
**`data-placement`**: The placement of the positioner

### ProgressText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Spotlight

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### Title

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tour
**`data-part`**: title
**`data-placement`**: The placement of the title

# Tree View

## Anatomy

To set up the tree view component correctly, you'll need to understand its anatomy and how we name its parts.

> Each part includes a `data-part` attribute to help identify them in the DOM.

## Examples

Learn how to use the `TreeView` component in your project. Let's take a look at the most basic example:

```tsx
import { TreeView, createTreeCollection } from '@ark-ui/react/tree-view'
import { CheckSquareIcon, ChevronRightIcon, FileIcon, FolderIcon } from 'lucide-react'

interface Node {
  id: string
  name: string
  children?: Node[]
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: 'node_modules',
        name: 'node_modules',
        children: [
          { id: 'node_modules/zag-js', name: 'zag-js' },
          { id: 'node_modules/pandacss', name: 'panda' },
          {
            id: 'node_modules/@types',
            name: '@types',
            children: [
              { id: 'node_modules/@types/react', name: 'react' },
              { id: 'node_modules/@types/react-dom', name: 'react-dom' }
            ]
          }
        ]
      },
      {
        id: 'src',
        name: 'src',
        children: [
          { id: 'src/app.tsx', name: 'app.tsx' },
          { id: 'src/index.ts', name: 'index.ts' }
        ]
      },
      { id: 'panda.config', name: 'panda.config.ts' },
      { id: 'package.json', name: 'package.json' },
      { id: 'renovate.json', name: 'renovate.json' },
      { id: 'readme.md', name: 'README.md' }
    ]
  }
})

export const Basic = () => {
  return (
    <TreeView.Root collection={collection}>
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        {collection.rootNode.children?.map((node, index) => <TreeNode key={node.id} node={node} indexPath={[index]} />)}
      </TreeView.Tree>
    </TreeView.Root>
  )
}

const TreeNode = (props: TreeView.NodeProviderProps<Node>) => {
  const { node, indexPath } = props
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchText>
              <FolderIcon /> {node.name}
            </TreeView.BranchText>
            <TreeView.BranchIndicator>
              <ChevronRightIcon />
            </TreeView.BranchIndicator>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item>
          <TreeView.ItemIndicator>
            <CheckSquareIcon />
          </TreeView.ItemIndicator>
          <TreeView.ItemText>
            <FileIcon />
            {node.name}
          </TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  )
}
```

### Using the Root Provider

The `RootProvider` component provides a context for the tree-view. It accepts the value of the `useTree-view` hook. You
can leverage it to access the component state and methods from outside the tree-view.

```tsx
import { TreeView, createTreeCollection, useTreeView } from '@ark-ui/react/tree-view'
import { CheckSquareIcon, ChevronRightIcon, FileIcon, FolderIcon } from 'lucide-react'

interface Node {
  id: string
  name: string
  children?: Node[]
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: 'node_modules',
        name: 'node_modules',
        children: [
          { id: 'node_modules/zag-js', name: 'zag-js' },
          { id: 'node_modules/pandacss', name: 'panda' },
          {
            id: 'node_modules/@types',
            name: '@types',
            children: [
              { id: 'node_modules/@types/react', name: 'react' },
              { id: 'node_modules/@types/react-dom', name: 'react-dom' }
            ]
          }
        ]
      },
      {
        id: 'src',
        name: 'src',
        children: [
          { id: 'src/app.tsx', name: 'app.tsx' },
          { id: 'src/index.ts', name: 'index.ts' }
        ]
      },
      { id: 'panda.config', name: 'panda.config.ts' },
      { id: 'package.json', name: 'package.json' },
      { id: 'renovate.json', name: 'renovate.json' },
      { id: 'readme.md', name: 'README.md' }
    ]
  }
})

export const RootProvider = () => {
  const treeView = useTreeView({ collection })

  return (
    <TreeView.RootProvider value={treeView}>
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        {collection.rootNode.children?.map((node, index) => <TreeNode key={node.id} node={node} indexPath={[index]} />)}
      </TreeView.Tree>
    </TreeView.RootProvider>
  )
}

const TreeNode = (props: TreeView.NodeProviderProps<Node>) => {
  const { node, indexPath } = props
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchText>
              <FolderIcon /> {node.name}
            </TreeView.BranchText>
            <TreeView.BranchIndicator>
              <ChevronRightIcon />
            </TreeView.BranchIndicator>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item>
          <TreeView.ItemIndicator>
            <CheckSquareIcon />
          </TreeView.ItemIndicator>
          <TreeView.ItemText>
            <FileIcon />
            {node.name}
          </TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  )
}
```

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API Reference

### Root

#### Props

**`collection`**
Type: `TreeCollection<T>`
Required: true
Default Value: `undefined`
Description: The collection of tree nodes

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`defaultExpandedValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial expanded node ids when rendered.
Use when you don't need to control the expanded node ids.

**`defaultSelectedValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The initial selected node ids when rendered.
Use when you don't need to control the selected node ids.

**`expandedValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled expanded node ids

**`expandOnClick`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether clicking on a branch should open it or not

**`focusedValue`**
Type: `string`
Required: false
Default Value: `undefined`
Description: The id of the focused node

**`ids`**
Type: `Partial<{ root: string; tree: string; label: string; node(value: string): string }>`
Required: false
Default Value: `undefined`
Description: The ids of the tree elements. Useful for composition.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`onExpandedChange`**
Type: `(details: ExpandedChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Called when the tree is opened or closed

**`onFocusChange`**
Type: `(details: FocusChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Called when the focused node changes

**`onSelectionChange`**
Type: `(details: SelectionChangeDetails) => void`
Required: false
Default Value: `undefined`
Description: Called when the selection changes

**`selectedValue`**
Type: `string[]`
Required: false
Default Value: `undefined`
Description: The controlled selected node ids

**`selectionMode`**
Type: `'multiple' | 'single'`
Required: false
Default Value: `"single"`
Description: Whether the tree supports multiple selection

- "single": only one node can be selected
- "multiple": multiple nodes can be selected

**`typeahead`**
Type: `boolean`
Required: false
Default Value: `true`
Description: Whether the tree supports typeahead search

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### BranchContent

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: branch-content
**`data-state`**: "open" | "closed"
**`data-depth`**: The depth of the item
**`data-path`**: The path of the item
**`data-value`**: The value of the item

### BranchControl

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: branch-control
**`data-path`**: The path of the item
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled
**`data-selected`**: Present when selected
**`data-focus`**: Present when focused
**`data-value`**: The value of the item
**`data-depth`**: The depth of the item

### BranchIndentGuide

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: branch-indent-guide
**`data-depth`**: The depth of the item

### BranchIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: branch-indicator
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled
**`data-selected`**: Present when selected
**`data-focus`**: Present when focused

### Branch

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: branch
**`data-depth`**: The depth of the item
**`data-branch`**:
**`data-value`**: The value of the item
**`data-path`**: The path of the item
**`data-selected`**: Present when selected
**`data-state`**: "open" | "closed"
**`data-disabled`**: Present when disabled

### BranchText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: branch-text
**`data-disabled`**: Present when disabled
**`data-state`**: "open" | "closed"

### BranchTrigger

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: branch-trigger
**`data-disabled`**: Present when disabled
**`data-state`**: "open" | "closed"
**`data-value`**: The value of the item

### ItemIndicator

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: item-indicator
**`data-disabled`**: Present when disabled
**`data-selected`**: Present when selected
**`data-focus`**: Present when focused

### Item

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: item
**`data-path`**: The path of the item
**`data-value`**: The value of the item
**`data-focus`**: Present when focused
**`data-selected`**: Present when selected
**`data-disabled`**: Present when disabled
**`data-depth`**: The depth of the item

### ItemText

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

#### Data Attributes

**`data-scope`**: tree-view
**`data-part`**: item-text
**`data-disabled`**: Present when disabled
**`data-selected`**: Present when selected
**`data-focus`**: Present when focused

### Label

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

### NodeProvider

#### Props

**`indexPath`**
Type: `number[]`
Required: true
Default Value: `undefined`
Description: The index path of the tree node

**`node`**
Type: `NonNullable<T>`
Required: false
Default Value: `undefined`
Description: The tree node

### RootProvider

#### Props

**`value`**
Type: `UseTreeViewReturn<T>`
Required: true
Default Value: `undefined`
Description: undefined

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

**`lazyMount`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to enable lazy mounting

**`unmountOnExit`**
Type: `boolean`
Required: false
Default Value: `false`
Description: Whether to unmount on exit.

### Tree

#### Props

**`asChild`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Use the provided child element as the default rendered element, combining their props and behavior.

## Accessibility

Complies with the [Tree View WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/).

### Keyboard Support

**`Tab`**
Description: Moves focus to the tree view, placing the first tree view item in focus.

**`Enter + Space`**
Description: Selects the item or branch node

**`ArrowDown`**
Description: Moves focus to the next node

**`ArrowUp`**
Description: Moves focus to the previous node

**`ArrowRight`**
Description: When focus is on a closed branch node, opens the branch.<br> When focus is on an open branch node, moves focus to the first item node.

**`ArrowLeft`**
Description: When focus is on an open branch node, closes the node.<br> When focus is on an item or branch node, moves focus to its parent branch node.

**`Home`**
Description: Moves focus to first node without opening or closing a node.

**`End`**
Description: Moves focus to the last node that can be focused without expanding any nodes that are closed.

**`a-z + A-Z`**
Description: Focus moves to the next node with a name that starts with the typed character. The search logic ignores nodes that are descendants of closed branch.

**`*`**
Description: Expands all sibling nodes that are at the same depth as the focused node.

**`Shift + ArrowDown`**
Description: Moves focus to and toggles the selection state of the next node.

**`Shift + ArrowUp`**
Description: Moves focus to and toggles the selection state of the previous node.

**`Ctrl + A`**
Description: Selects all nodes in the tree. If all nodes are selected, unselects all nodes.

# UTILITIES

---

# Download Trigger

## Motivation

The `DownloadTrigger` component provides a convenient way to programmatically trigger file downloads in web
applications. It handles the complexities of downloading files, whether they are URLs, Blobs, or other data types.

## Examples

### Basic

Pass the data you want to download to the `data` prop, and specify the `fileName` and `mimeType` of the file.

```tsx
import { DownloadTrigger } from '@ark-ui/react/download-trigger'

export const Basic = () => {
  return (
    <DownloadTrigger data="Hello world" fileName="hello.txt" mimeType="text/plain">
      Download txt
    </DownloadTrigger>
  )
}
```

### Download SVG

Here's an example of how to download an SVG file.

```tsx
import { DownloadTrigger } from '@ark-ui/react/download-trigger'

export const Svg = () => {
  return (
    <DownloadTrigger
      data='<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"/></svg>'
      fileName="circle.svg"
      mimeType="image/svg+xml"
    >
      Download SVG
    </DownloadTrigger>
  )
}
```

### Promise

You can also trigger downloads from a promise that returns a `Blob`, `File`, or `string`.

```tsx
import { DownloadTrigger } from '@ark-ui/react/download-trigger'

export const WithPromise = () => {
  const fetchImage = async () => {
    const response = await fetch('https://picsum.photos/200/300')
    return response.blob()
  }

  return (
    <DownloadTrigger data={fetchImage} fileName="random-image.jpg" mimeType="image/jpeg">
      Download Image
    </DownloadTrigger>
  )
}
```

## API Reference

# Environment

## Motivation

We use [Zag.js](https://zagjs.com/overview/composition#custom-window-environment) internally, which relies on DOM query
methods like `document.querySelectorAll` and `document.getElementById`. In custom environments like iframes, Shadow DOM,
or Electron, these methods might not work as expected.

To handle this, Ark UI includes the `EnvironmentProvider`, allowing you to set the appropriate root node or document,
ensuring correct DOM queries.

## Setup

To support custom environments like an iframe, Shadow DOM or Electron, render the `EnvironmentProvider` component to
provide the environment context to all Ark UI components.

```tsx
import { EnvironmentProvider } from '@ark-ui/react/environment'
import Frame from 'react-frame-component'

export const App = () => {
  return (
    <Frame title="IFrame Context">
      <EnvironmentProvider>{/* Your App */}</EnvironmentProvider>
    </Frame>
  )
}
```

### Usage in iframe

The `EnvironmentProvider` component will automatically detect the current environment and set the correct environment
context. However, you can also manually set the `Document` like shown in this React example below:

```jsx
import Frame, { FrameContextConsumer } from 'react-frame-component'
import { EnvironmentProvider } from '@ark-ui/react'

export const App = () => (
  <Frame title="IFrame Context">
    <FrameContextConsumer>
      {({ document }) => <EnvironmentProvider value={document}>{/* Your App */}</EnvironmentProvider>}
    </FrameContextConsumer>
  </Frame>
)
```

### Usage in Shadow DOM

Here's an example of how to set the `EnvironmentProvider`'s value with Shadow DOM in Solid.js `Portal` component.

```jsx
import { EnvironmentProvider } from '@ark-ui/react'
import { Index, Portal } from 'solid-js/web'

export const App = () => {
  let portalNode
  return (
    <Portal ref={portalNode} useShadow={true}>
      <EnvironmentProvider value={() => portalNode?.shadowRoot ?? document}>{/* Your App */}</EnvironmentProvider>
    </Portal>
  )
}
```

## Context

Use the `useEnvironmentContext` hook to access the `RootNode`, `Document`, and `Window`.

```tsx
import { useEnvironmentContext } from '@ark-ui/react/environment'

export const Usage = () => {
  const { getRootNode } = useEnvironmentContext()

  return <pre>{JSON.stringify(getRootNode(), null, 2)}</pre>
}
```

## API Reference

### EnvironmentProvider

#### Props

**`value`**
Type: `RootNode | (() => RootNode)`
Required: false
Default Value: `undefined`
Description: undefined

# Focus Trap

## Motivation

Focus trapping is essential for modal interfaces and other interactive elements that require user attention.

The `FocusTrap` component helps maintain accessibility by ensuring keyboard focus remains within a designated container
until explicitly released.

## Examples

```tsx
import { FocusTrap } from '@ark-ui/react/focus-trap'
import { useState } from 'react'

export const Basic = () => {
  const [trapped, setTrapped] = useState(false)
  return (
    <>
      <button onClick={() => setTrapped(true)}>Start Trap</button>
      <FocusTrap returnFocusOnDeactivate={false} disabled={!trapped}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingBlock: '1rem'
          }}
        >
          <input type="text" placeholder="input" />
          <textarea placeholder="textarea" />
          <button onClick={() => setTrapped(false)}>End Trap</button>
        </div>
      </FocusTrap>
    </>
  )
}
```

### Autofocus

The focus trap respects elements with the `autofocus` attribute.

```tsx
import { FocusTrap } from '@ark-ui/react/focus-trap'
import { useRef, useState } from 'react'

export const Autofocus = () => {
  const [trapped, setTrapped] = useState(false)
  const toggle = () => setTrapped((c) => !c)

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const getButtonNode = () => {
    const node = buttonRef.current
    if (!node) throw new Error('Button not found')
    return node
  }

  return (
    <div>
      <button ref={buttonRef} onClick={toggle}>
        {trapped ? 'End Trap' : 'Start Trap'}
      </button>
      {trapped && (
        <FocusTrap disabled={!trapped} setReturnFocus={getButtonNode}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingBlock: '1rem'
            }}
          >
            <input type="text" placeholder="Regular input" />
            {/* biome-ignore lint/a11y/noAutofocus: <explanation> */}
            <input type="text" placeholder="Autofocused input" autoFocus />
            <button onClick={() => setTrapped(false)}>End Trap</button>
          </div>
        </FocusTrap>
      )}
    </div>
  )
}
```

### Initial Focus

Use the `initialFocus` prop to set the element that should receive initial focus when the trap is activated.

```tsx
import { FocusTrap } from '@ark-ui/react/focus-trap'
import { useRef, useState } from 'react'

export const InitialFocus = () => {
  const [trapped, setTrapped] = useState(false)
  const toggle = () => setTrapped((c) => !c)

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <button onClick={toggle}>{trapped ? 'End Trap' : 'Start Trap'}</button>
      <FocusTrap disabled={!trapped} initialFocus={() => inputRef.current}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingBlock: '1rem'
          }}
        >
          <input type="text" placeholder="First input" />
          <input ref={inputRef} type="text" placeholder="Second input (initial focus)" />
          <textarea placeholder="textarea" />
          <button onClick={() => setTrapped(false)}>End Trap</button>
        </div>
      </FocusTrap>
    </div>
  )
}
```

## API Reference

# Format Byte

## Usage

The byte formatting component extends the number formatting capabilities to handle byte-specific formatting, including
automatic unit conversion and display options.

```jsx
import { Format } from '@ark-ui/react'
```

## Examples

### Basic

Use the `Format.Byte` component to format a byte value with default options.

```tsx
import { Format } from '@ark-ui/react'

export const ByteBasic = () => {
  return (
    <div>
      File size: <Format.Byte value={1450.45} />
    </div>
  )
}
```

### Sizes

Use the `sizes` prop to specify custom byte sizes for formatting.

```tsx
import { Format } from '@ark-ui/react'

export const ByteSizes = () => {
  const byteSizes = [50, 5000, 5000000, 5000000000]

  return (
    <div>
      {byteSizes.map((size, index) => (
        <div key={index}>
          <Format.Byte value={size} />
        </div>
      ))}
    </div>
  )
}
```

### Locale

Use the `locale` prop to format the byte value according to a specific locale.

```tsx
import { Format, LocaleProvider } from '@ark-ui/react'

export const ByteWithLocale = () => {
  const locales = ['de-DE', 'zh-CN']
  const value = 1450.45

  return (
    <div>
      {locales.map((locale) => (
        <LocaleProvider key={locale} locale={locale}>
          <Format.Byte value={value} />
        </LocaleProvider>
      ))}
    </div>
  )
}
```

### Unit

Use the `unit` prop to specify the unit of the byte value.

```tsx
import { Format } from '@ark-ui/react'

export const ByteWithUnit = () => {
  const value = 1450.45
  const unit = 'bit'

  return (
    <div>
      File size: <Format.Byte value={value} unit={unit} />
    </div>
  )
}
```

### Unit Display

Use the `unitDisplay` prop to specify the display of the unit.

```tsx
import { Format } from '@ark-ui/react'

export const ByteWithUnitDisplay = () => {
  const value = 50345.53
  const unitDisplays = ['narrow', 'short', 'long'] as const

  return (
    <div>
      {unitDisplays.map((unitDisplay) => (
        <Format.Byte key={unitDisplay} value={value} unitDisplay={unitDisplay} />
      ))}
    </div>
  )
}
```

# Format Number

## Usage

The number formatting logic is handled by the native `Intl.NumberFormat` API and smartly cached to avoid performance
issues when using the same locale and options.

```jsx
import { Format } from '@ark-ui/react'
```

## Examples

### Basic

Use the `Format.Number` component to format a number with default options.

```tsx
import { Format } from '@ark-ui/react/format'

export const NumberBasic = () => {
  return <Format.Number value={1450.45} />
}
```

### Percentage

Use the `style="percent"` prop to format the number as a percentage.

```tsx
import { Format } from '@ark-ui/react/format'

export const NumberWithPercentage = () => {
  return <Format.Number value={0.145} style="percent" maximumFractionDigits={2} minimumFractionDigits={2} />
}
```

### Currency

Use the `style="currency"` prop along with the `currency` prop to format the number as a currency.

```tsx
import { Format } from '@ark-ui/react/format'

export const NumberWithCurrency = () => {
  return <Format.Number value={1234.45} style="currency" currency="USD" />
}
```

### Locale

Use the `locale` prop to format the number according to a specific locale.

```tsx
import { Format } from '@ark-ui/react/format'
import { LocaleProvider } from '@ark-ui/react/locale'

export const NumberWithLocale = () => {
  return (
    <LocaleProvider locale="de-DE">
      <Format.Number value={1450.45} />
    </LocaleProvider>
  )
}
```

### Unit

Use the `style="unit"` prop along with the `unit` prop to format the number with a specific unit.

```tsx
import { Format } from '@ark-ui/react/format'

export const NumberWithUnit = () => {
  return <Format.Number value={384.4} style="unit" unit="kilometer" />
}
```

### Compact Notation

Use the `notation="compact"` prop to format the number in compact notation.

```tsx
import { Format } from '@ark-ui/react/format'

export const NumberWithCompact = () => {
  return <Format.Number value={1500000} notation="compact" compactDisplay="short" />
}
```

# Frame

## Usage

The `Frame` component is used to render a component in an iframe.

- Tracks the size of the content and exposes them via css variables.
- Support for `head` prop to inject scripts and styles.
- Support for mount and unmount callbacks.

```jsx
import { Frame } from '@ark-ui/react'
```

## Examples

### Basic

Wrap your component in the `Frame` component to render it in an iframe.

```tsx
import { Frame } from '@ark-ui/react/frame'

export const Basic = () => {
  return (
    <Frame
      title="Custom Frame"
      style={{ border: '1px solid #ccc', width: '100%', height: 'var(--height)' }}
      head={<style>{'body { background-color: #f0f0f0; }'}</style>}
    >
      <div style={{ padding: '40px' }}>
        <h1>Hello from inside the frame!</h1>
        <p>This content is rendered within our custom frame component using a Portal.</p>
      </div>
    </Frame>
  )
}
```

### Injecting Script

Using the `onMount` prop, you can inject a script into the iframe.

```tsx
import { Frame } from '@ark-ui/react/frame'
import { useRef } from 'react'

export const Script = () => {
  const ref = useRef<HTMLIFrameElement>(null)
  return (
    <Frame
      ref={ref}
      title="Custom Frame"
      onMount={() => {
        const doc = ref.current?.contentDocument
        if (!doc) return
        const script = doc.createElement('script')
        script.innerHTML = 'console.log("Hello from inside the frame!")'
        doc.body.appendChild(script)
      }}
      style={{ border: '1px solid #ccc', width: '100%', height: 'var(--height)' }}
    >
      <div style={{ padding: '40px' }}>
        <h1>Hello from inside the frame!</h1>
        <p>This content is rendered within our custom frame component using a Portal.</p>
      </div>
    </Frame>
  )
}
```

### Custom src doc

Use the `srcDoc` prop to specify the HTML content of the page to use in the iframe.

```tsx
import { Frame } from '@ark-ui/react/frame'

const srcDoc = `<html><head>
<link href="//use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
<link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />
<base target=_blank>
</head><body style='overflow: hidden'><div></div></body></html>`

export const SrcDoc = () => {
  return (
    <Frame title="Custom Frame" style={{ border: '1px solid #ccc', maxWidth: '800px', width: '100%' }} srcDoc={srcDoc}>
      <h1 style={{ fontFamily: 'Open Sans, sans-serif' }}>Hello from inside the frame!</h1>
      <p>This content is rendered within our custom frame component using a Portal.</p>
      <p>The frame has custom initial content, including Font Awesome and Open Sans font.</p>
    </Frame>
  )
}
```

# Highlight

## Usage

The Highlight component takes a `text` prop containing the full text and a `query` prop specifying the text to
highlight. It then renders the text with highlighted portions wrapped in `<mark>` tags.

```tsx
import { Highlight } from '@ark-ui/react/highlight'

export const Basic = () => {
  return (
    <Highlight
      query="ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    />
  )
}
```

### Multiple Queries

You can highlight multiple terms by passing an array of strings to the `query` prop.

```tsx
import { Highlight } from '@ark-ui/react/highlight'

export const Multiple = () => {
  return (
    <Highlight
      query={['ipsum', 'amet']}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    />
  )
}
```

### Case Sensitivity

By default, the highlighting is case-sensitive. Use the `ignoreCase` prop to make it case-insensitive.

```tsx
import { Highlight } from '@ark-ui/react/highlight'

export const IgnoreCase = () => (
  <Highlight text="The quick brown Fox jumps over the lazy Dog." query={['fox', 'dog']} ignoreCase />
)
```

### Match All

By default, the Highlight component matches the first occurrence of the query. To highlight all occurrences of the
query, set the `matchAll` prop to `true`.

```tsx
import { Highlight } from '@ark-ui/react/highlight'

export const MatchAll = () => (
  <div>
    <h3>Match All</h3>
    <Highlight text="The quick brown fox jumps over the lazy fox." query="fox" matchAll={true} />

    <h3>Match First Occurrence Only</h3>
    <Highlight text="The quick brown fox jumps over the lazy fox." query="fox" matchAll={false} />
  </div>
)
```

## API Reference

### Highlight

#### Props

**`query`**
Type: `string | string[]`
Required: true
Default Value: `undefined`
Description: The query to highlight in the text

**`text`**
Type: `string`
Required: true
Default Value: `undefined`
Description: The text to highlight

**`ignoreCase`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to ignore case while matching

**`matchAll`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to match multiple instances of the query

## Customization

The Highlight component wraps matched text in `<mark>` tags.

```tsx
<Highlight text="The quick brown fox jumps over the lazy fox." query="fox" className="highlighted-text" />
```

Style the `mark` tags using CSS to customize the appearance of highlighted text.

```css
.highlighted-text {
  background-color: yellow;
}
```

# Locale

## Setup

The `LocaleProvider` component sets the locale for your app, formatting dates, numbers, and other locale-specific data.

> **Note:** If no `LocaleProvider` is setup, the default locale for the app will be `en-US` and therefore the direction
> will be `ltr`.

```tsx
import { LocaleProvider } from '@ark-ui/react/locale'

export const App = () => {
  return <LocaleProvider locale="de-DE">{/* Your App */}</LocaleProvider>
}
```

## Usage

To access the current locale and direction settings, use the `useLocaleContext` hook.

```tsx
import { useLocaleContext } from '@ark-ui/react/locale'

export const Usage = () => {
  const { locale, dir } = useLocaleContext()

  return <pre>{JSON.stringify({ locale, dir }, null, 2)}</pre>
}
```

## API Reference

### LocaleProvider

#### Props

**`locale`**
Type: `string`
Required: true
Default Value: `'en-US'`
Description: The locale to use for the application.

# Presence

## Examples

By default the child component starts out as hidden and remains hidden after the `present` state is toggled off. This is
useful for situations where the element needs to be hidden initially and continue to stay hidden after its presence is
no longer required.

```tsx
import { Presence } from '@ark-ui/react/presence'
import { useState } from 'react'

export const Basic = () => {
  const [present, setPresent] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setPresent(!present)}>
        Toggle
      </button>
      <Presence present={present}>Hidden and Hidden</Presence>
    </>
  )
}
```

### Lazy Mount

To delay the mounting of a child component until the `present` prop is set to true, use the `lazyMount` prop:

```tsx
import { Presence } from '@ark-ui/react/presence'
import { useState } from 'react'

export const LazyMount = () => {
  const [present, setPresent] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setPresent(!present)}>
        Toggle
      </button>
      <Presence present={present} lazyMount>
        Unmounted and Hidden
      </Presence>
    </>
  )
}
```

### Unmount on Exit

To remove the child component from the DOM when it's not present, use the `unmountOnExit` prop:

```tsx
import { Presence } from '@ark-ui/react/presence'
import { useState } from 'react'

export const UnmountOnExit = () => {
  const [present, setPresent] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setPresent(!present)}>
        Toggle
      </button>
      <Presence present={present} unmountOnExit>
        Hidden and Unmounted on Exit
      </Presence>
    </>
  )
}
```

### Combining Lazy Mount and Unmount on Exit

Both `lazyMount` and `unmountOnExit` can be combined for a component to be mounted only when it's present and to be
unmounted when it's no longer present:

```tsx
import { Presence } from '@ark-ui/react/presence'
import { useState } from 'react'

export const LazyMountAndUnmountOnExit = () => {
  const [present, setPresent] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setPresent(!present)}>
        Toggle
      </button>
      <Presence present={present} lazyMount unmountOnExit>
        Lazy Mount and Unmounted on Exit
      </Presence>
    </>
  )
}
```

## API Reference

### Presence

#### Props

**`immediate`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether to synchronize the present change immediately or defer it to the next frame

**`onExitComplete`**
Type: `VoidFunction`
Required: false
Default Value: `undefined`
Description: Function called when the animation ends in the closed state

**`present`**
Type: `boolean`
Required: false
Default Value: `undefined`
Description: Whether the node is present (controlled by the user)

My code should be clean, modular, functional, readable, composable.
Never destructure from objects.
Never use default exports.
Never abbreviate variable names.
Always create props and types like

type SomeComponentPropst = { ... }

export const SomeComponent = (props: SomeComponentPropsT) => {
...
}
