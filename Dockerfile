# 第一阶段：构建阶段
FROM node:20-alpine3.21 AS builder

WORKDIR /app

# 复制依赖文件
COPY package*.json ./
COPY yarn.lock ./

# 配置淘宝镜像源
RUN yarn config set registry https://registry.npmmirror.com

# 安装依赖（使用frozen-lockfile确保一致性）
RUN yarn install --frozen-lockfile

# 复制源代码
COPY . .

# 构建项目
RUN yarn build

# 第二阶段：生产阶段
FROM node:20-alpine3.21 AS runner

WORKDIR /app

# 创建非root用户并切换（增强安全性同时减少权限问题）
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 设置为生产环境
ENV NODE_ENV=production

# 只复制生产环境需要的package文件
COPY package.json package-lock.json* yarn.lock* ./

# 配置镜像源并安装生产依赖
RUN yarn config set registry https://registry.npmmirror.com && \
    yarn install --production --frozen-lockfile && \
    # 清理yarn缓存
    yarn cache clean && \
    # 深度清理node_modules
    rm -rf node_modules/**/*.md node_modules/**/*.ts node_modules/**/*.tsx \
           node_modules/**/test node_modules/**/tests node_modules/**/examples \
           node_modules/**/docs node_modules/**/dist/**/*.map \
           node_modules/**/node_modules

# 从构建阶段复制构建产物（并设置正确权限）
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# 切换到非root用户
USER nextjs

EXPOSE 3000

# 使用Next.js的独立模式启动（更轻量）
CMD ["node", "server.js"]
    