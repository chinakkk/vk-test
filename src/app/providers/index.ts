import compose from "compose-function";
import { withQueryClient } from "src/app/providers/withQueryClient";
import { withRouter } from "src/app/providers/withRouter";
import { withStore } from "src/app/providers/withStore";
import { withVkontakte } from "src/app/providers/withVkontakte";

export const withProviders = compose(
  withRouter,
  withQueryClient,
  withVkontakte,
  withStore,
);
