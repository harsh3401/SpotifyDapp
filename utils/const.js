import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import spotify from "./spotify.json";

export const SOLANA_HOST = clusterApiUrl("testnet");

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  "H23HFE2ZzStCk3fPw7WRMsoCZJ5Sr4aeogU6CAVm7Qtm"
);

export const STABLE_POOL_IDL = spotify;
