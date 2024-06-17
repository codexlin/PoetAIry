import { useTranslations } from "next-intl"

export default function About() {
  const t = useTranslations()
  return <span>{t("General.add")}</span>
}
