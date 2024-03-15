import { withProviders } from "src/app/providers";
import { AppRouter } from "src/app/router/AppRouter";

const App = () => {
  return <AppRouter />;
};

export default withProviders(App);
