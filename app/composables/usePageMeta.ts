export function usePageMeta(title: MaybeRefOrGetter<string>, description?: MaybeRefOrGetter<string>) {
  useHead({
    title,
  })
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
  })
}
