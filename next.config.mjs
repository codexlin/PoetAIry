/** @type {import('next').NextConfig} */
import withNextIntl from "next-intl/plugin"
const nextConfig = {};
const withNextIntlI18nPath = withNextIntl(
  // 可自定义i18n文件的路径
)
export default withNextIntlI18nPath(nextConfig);
