export interface FaqItem {
  question: string
  answer: string
}

export const useFaqData = (): FaqItem[] => {
  const { tr } = useLang()
  return tr.value.faq.items
}
