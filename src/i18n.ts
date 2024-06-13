//i18n.ts
import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

const locales: string[] = ["en", "zh", "ja"]
// 动态导入与区域设置对应的JSON文件
export default getRequestConfig(async ({ locale }) => {
  console.log(locale)
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
