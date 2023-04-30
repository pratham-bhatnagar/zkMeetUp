import { polygon, polygonMumbai, goerli, sepolia } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient ,ConnectKitButton} from "connectkit";
import { WagmiConfig, createClient } from "wagmi";


const chains = [polygonMumbai, goerli, sepolia, polygon];
const client = createClient(
  getDefaultClient({
    appName: "zkMeetups",
    chains,
  })
);
function App() {
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
          <ConnectKitButton/>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
