import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// 使用 createEnv 创建环境变量配置 通过 zod 验证
export const env = createEnv({
  // 定义客户端环境变量
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1), // NEXT_PUBLIC_APP_URL 必须是非空字符串
  },
  // 定义运行时环境变量
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL, // 从 process.env 中获取 NEXT_PUBLIC_APP_URL
  },
});
