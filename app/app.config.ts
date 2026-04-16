export default defineAppConfig({
  theme: {
    // Désactivation du mode sombre
    dark: false
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    formField: {
      slots: {
        root: '',
        wrapper: '',
        labelWrapper: 'flex content-center items-center justify-start gap-1',
        label: 'block font-bold text-sm',
        container: 'relative',
        description: 'text-muted',
        error: 'mt-2 text-error',
        hint: 'text-muted',
        help: 'mt-2 text-muted'
      },
      variants: {
        size: {
          xs: {
            root: 'text-xs'
          },
          sm: {
            root: 'text-xs'
          },
          md: {
            root: 'text-sm'
          },
          lg: {
            root: 'text-sm'
          },
          xl: {
            root: 'text-base'
          }
        },
        required: {
          true: {
            label: "after:content-['*'] after:ms-0.5 after:text-error"
          }
        },
        orientation: {
          vertical: {
            container: 'mt-1'
          },
          horizontal: {
            root: 'flex justify-between place-items-baseline gap-2'
          }
        }
      },
      defaultVariants: {
        size: 'md',
        orientation: 'vertical'
      }
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-0 sm:px-0 lg:px-0'
    }
  }
})
