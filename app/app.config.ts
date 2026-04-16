export default defineAppConfig({
  theme: {
    // Désactivation du mode sombre
    dark: false
  },
  ui: {
     icons: {
      arrowDown: 'i-lucide-arrow-down',
      arrowLeft: 'i-lucide-arrow-left',
      arrowRight: 'i-lucide-arrow-right',
      arrowUp: 'i-lucide-arrow-up',
      caution: 'i-lucide-circle-alert',
      check: 'i-lucide-check',
      chevronDoubleLeft: 'i-lucide-chevrons-left',
      chevronDoubleRight: 'i-lucide-chevrons-right',
      chevronDown: 'i-lucide-chevron-down',
      chevronLeft: 'i-lucide-chevron-left',
      chevronRight: 'i-lucide-chevron-right',
      chevronUp: 'i-lucide-chevron-up',
      close: 'i-lucide-x',
      copy: 'i-lucide-copy',
      copyCheck: 'i-lucide-copy-check',
      dark: 'i-lucide-moon',
      drag: 'i-lucide-grip-vertical',
      ellipsis: 'i-lucide-ellipsis',
      error: 'i-lucide-circle-x',
      external: 'i-lucide-arrow-up-right',
      eye: 'i-lucide-eye',
      eyeOff: 'i-lucide-eye-off',
      file: 'i-lucide-file',
      folder: 'i-lucide-folder',
      folderOpen: 'i-lucide-folder-open',
      hash: 'i-lucide-hash',
      info: 'i-lucide-info',
      light: 'i-lucide-sun',
      loading: 'i-lucide-loader-circle',
      menu: 'i-lucide-menu',
      minus: 'i-lucide-minus',
      panelClose: 'i-lucide-panel-left-close',
      panelOpen: 'i-lucide-panel-left-open',
      plus: 'i-lucide-plus',
      reload: 'i-lucide-rotate-ccw',
      search: 'i-lucide-search',
      stop: 'i-lucide-square',
      success: 'i-lucide-circle-check',
      system: 'i-lucide-monitor',
      tip: 'i-lucide-lightbulb',
      upload: 'i-lucide-upload',
      warning: 'i-lucide-triangle-alert'
    },
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    banner: {
      slots: {
        root: [
          'banner-container relative z-50 w-full',
          'transition-colors'
        ],
      }
    },
 card: {
      slots: {
        root: 'rounded-lg overflow-hidden',
        header: 'p-4 sm:px-6',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-inverted text-inverted'
          },
          outline: {
            root: 'bg-transparent ring ring-default divide-y divide-default card-custom'
          },
          soft: {
            root: 'bg-elevated/50 divide-y divide-default'
          },
          subtle: {
            root: 'bg-elevated/50 ring ring-default divide-y divide-default'
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    },
    formField: {
      slots: {
        root: '',
        wrapper: '',
        labelWrapper: 'flex content-center items-center justify-center gap-1',
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
