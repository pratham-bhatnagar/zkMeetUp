import { polygon, polygonMumbai, goerli, sepolia } from "wagmi/chains";
import {
  ConnectKitProvider,
  getDefaultClient,
  ConnectKitButton,
} from "connectkit";
import { WagmiConfig, createClient } from "wagmi";
import { Link, Route } from "wouter";
import Home from "./pages/index";
import Events from "./pages/event";
import Navbar from "./components/Nav";
import Host from "./pages/host";
import { useAccount } from "wagmi";
import { Toaster } from "react-hot-toast";

const chains = [polygonMumbai, goerli, sepolia, polygon];
const client = createClient(
  getDefaultClient({
    appName: "zkMeetups",
    chains,
  })
);
function App() {
  const { address } = useAccount();
  return (
    <>
      <WagmiConfig client={client}>
        <ConnectKitProvider
          theme="nouns"
          customTheme={{
            "--ck-accent-color": "#58ADF7",
            "--ck-accent-text-color": "#ffffff",
            "--ck-border-radius": 42,
          }}
        >
          <Toaster />
          <Navbar connect={<ConnectKitButton />} />
          <Route path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/host">
            <Host />
          </Route>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
