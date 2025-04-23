import { useEffect } from "react";

export function GlobalErrorHandler() {
  useEffect(() => {
    // 定义一个适配器函数，用于处理不同类型的错误
    const handleError = (error: Error | undefined) => {
      console.error('Global error:', error);
    };

    const handlePromiseRejection = (event: PromiseRejectionEvent) => {
      handleError(event.reason as Error | undefined); // 将 event.reason 转换为 Error 类型
    };

    // 监听未捕获的错误
    window.onerror = (message, source, lineno, colno, error) => {
      handleError(error);
      return true; // 阻止默认错误处理
    };

    // 监听未处理的 Promise 拒绝
    window.addEventListener('unhandledrejection', handlePromiseRejection);

    // 清理监听器
    return () => {
      window.onerror = null;
      window.removeEventListener('unhandledrejection', handlePromiseRejection); // 移除监听器时使用相同的回调函数
    };
  }, []);
}