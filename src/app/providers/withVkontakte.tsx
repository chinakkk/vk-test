import { ReactNode } from "react";

import { AdaptivityProvider } from "@vkontakte/vkui/dist/components/AdaptivityProvider/AdaptivityProvider";
import { AppRoot } from "@vkontakte/vkui/dist/components/AppRoot/AppRoot";
import { ConfigProvider } from "@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider";

export const withVkontakte = (component: () => ReactNode) => () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>{component()}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
