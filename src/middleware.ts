// import createMiddleware from "next-intl/middleware"
//
// //定义一个中间件，它匹配语言环境，并根据用户的首选语言重定向用户
// const middleware = createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "ja", "zh"],
//   // Default locale if no match
//   defaultLocale: "en",
//   localeDetection: false,
// })
//
// export default middleware
//
// export const config = {
//   // Match only internationalized pathnames
//   // matcher: ["/", "/(zh|ja|en)/:page*"],
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// }
import { NextMiddleware, NextRequest, NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"

// 定义支持的语言和默认语言
const locales = ["en", "ja", "zh"]
const defaultLocale = "zh"

// 创建一个中间件，它匹配语言环境，并根据用户的首选语言重定向用户
const middleware: NextMiddleware = createMiddleware({
  locales,
  defaultLocale,
  // @ts-ignore
  async use(request: NextRequest) {
    const { pathname } = request.nextUrl
    const acceptLanguage = request.headers.get("accept-language")
    const browserLanguage = acceptLanguage
      ? acceptLanguage.split(",")[0].split("-")[0]
      : defaultLocale

    // 如果路径已经包含语言代码，则不进行重定向
    if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
      return NextResponse.next()
    }

    // 检查浏览器语言是否在支持的语言列表中，否则使用默认语言
    const targetLocale = locales.includes(browserLanguage)
      ? browserLanguage
      : defaultLocale

    // 重定向到浏览器语言或默认语言
    return NextResponse.redirect(
      new URL(`/${targetLocale}${pathname}`, request.url),
    )
  },
})

export default middleware

export const config = {
  // 仅匹配国际化路径名
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
