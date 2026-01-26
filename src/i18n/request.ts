import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "ar";

  const messages = await import(`../../messages/${locale}.json`);
  
  return {
    locale,
    messages: messages.default,
  };
});
