import { type AppType } from "next/app";

import { api } from "t3-poll/utils/api";

import "t3-poll/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
