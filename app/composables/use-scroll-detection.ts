export const useScrollDetection = () => {
  const onScrollStart = (
    selector: string,
    callback: () => void,
    options?: {
      threshold?: number;
      once?: boolean;
    }
  ) => {
    if (!import.meta.client) return () => {};

    const { threshold = 1, once = false } = options || {};

    let cleanup = () => {};

    onMounted(() => {
      const element = document.querySelector(selector);

      if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
        return;
      }

      let isScrolling = false;
      let hasTriggered = false;
      let scrollTimeout: ReturnType<typeof setTimeout>;
      let lastScrollTop = 0;

      const handleScroll = () => {
        const currentScroll = element.scrollTop;
        const scrolled = Math.abs(currentScroll - lastScrollTop);

        if (scrolled < threshold) return;

        if (!isScrolling) {
          isScrolling = true;

          if (!hasTriggered) {
            callback();
            if (once) {
              hasTriggered = true;
            }
          }
        }

        lastScrollTop = currentScroll;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 150);
      };

      element.addEventListener('scroll', handleScroll);

      cleanup = () => {
        element.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    });

    onUnmounted(() => cleanup());

    return () => cleanup();
  };

  const onScrollDirection = (
    selector: string,
    callback: (direction: 'up' | 'down') => void
  ) => {
    if (!import.meta.client) return () => {};

    let cleanup = () => {};

    onMounted(() => {
      const element = document.querySelector(selector);

      if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
        return;
      }

      let lastScrollTop = 0;

      const handleScroll = () => {
        const currentScroll = element.scrollTop;

        if (currentScroll > lastScrollTop) {
          callback('down');
        } else if (currentScroll < lastScrollTop) {
          callback('up');
        }

        lastScrollTop = currentScroll;
      };

      element.addEventListener('scroll', handleScroll);
      cleanup = () => element.removeEventListener('scroll', handleScroll);
    });

    onUnmounted(() => cleanup());

    return () => cleanup();
  };

  const onScrollStop = (
    selector: string,
    callback: () => void,
    delay: number = 150
  ) => {
    if (!import.meta.client) return () => {};

    let cleanup = () => {};

    onMounted(() => {
      const element = document.querySelector(selector);

      if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
        return;
      }

      let scrollTimeout: ReturnType<typeof setTimeout>;

      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          callback();
        }, delay);
      };

      element.addEventListener('scroll', handleScroll);

      cleanup = () => {
        element.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    });

    onUnmounted(() => cleanup());

    return () => cleanup();
  };

  const onScrollBottom = (
    selector: string,
    callback: () => void,
    threshold: number = 0
  ) => {
    if (!import.meta.client) return () => {};

    let cleanup = () => {};

    onMounted(() => {
      const element = document.querySelector(selector);

      if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
        return;
      }

      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = element;
        if (scrollTop + clientHeight >= scrollHeight - threshold) {
          callback();
        }
      };

      element.addEventListener('scroll', handleScroll);
      cleanup = () => element.removeEventListener('scroll', handleScroll);
    });

    onUnmounted(() => cleanup());

    return () => cleanup();
  };

  const onScrollTop = (
    selector: string,
    callback: () => void,
    threshold: number = 0
  ) => {
    if (!import.meta.client) return () => {};

    let cleanup = () => {};

    onMounted(() => {
      const element = document.querySelector(selector);

      if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
        return;
      }

      const handleScroll = () => {
        if (element.scrollTop <= threshold) {
          callback();
        }
      };

      element.addEventListener('scroll', handleScroll);
      cleanup = () => element.removeEventListener('scroll', handleScroll);
    });

    onUnmounted(() => cleanup());

    return () => cleanup();
  };

  return {
    onScrollStart,
    onScrollDirection,
    onScrollStop,
    onScrollBottom,
    onScrollTop,
  };
};
