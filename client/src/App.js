import { filecoinHyperspace } from "wagmi/chains";
import {
  ConnectKitProvider,
  getDefaultClient,
  ConnectKitButton,
} from "connectkit";
import { WagmiConfig, createClient } from "wagmi";
import { Link, Route } from "wouter";
import Home from "./pages/index";
import Navbar from "./components/Nav";
import Event from "./pages/Event";
import Dashboard from "./pages/dashboard";
import Host from "./pages/host";
import { useAccount } from "wagmi";
import { Toaster } from "react-hot-toast";
import Meet from "./pages/meet";

const chains = [filecoinHyperspace];
const client = createClient(
  getDefaultClient({
    appName: "zkMeetups",
    chains,
  })
);
function App() {
  const { address } = useAccount();
  return (
    <div className="dark">
      {" "}
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
          <div className="mt-[60px]">
            <Route path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/host">
              <Host />
            </Route>
            <Route path="/event/:id">
              <Event />
            </Route>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
      <div className="body-bg-shape"></div>
    </div>
  );
}

export default App;
