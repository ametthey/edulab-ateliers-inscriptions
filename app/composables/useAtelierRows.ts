export function useAtelierRows() {
  function atelierRows(atelierInscriptions: Record<string, string>[] | null | undefined, nbPlaces: number | string) {
    const filled = atelierInscriptions ?? []
    const emptyCount = Math.max(0, Number(nbPlaces) - filled.length)
    const empty = Array.from({ length: emptyCount }, () => ({ _empty: true, prenom: '', email: '', telephone: '', age: '' }))
    return [...filled, ...empty]
  }

  return { atelierRows }
}
