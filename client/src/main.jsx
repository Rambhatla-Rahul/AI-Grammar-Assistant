import React from "react";
import ReactDOM from "react-dom/client";
import img from "/ai.png";
import "./index.css";

import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cma0wq06f01k5l20nzjjkxbe2"
      config={{
        
        loginMethods: ["email", "wallet", "google", "sms"],
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: img,
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);