// In a file named global.d.ts
import { ethers } from "ethers";
import { BrowserProvider, Eip1193Provider } from "ethers/types/providers";

declare global {
  interface Window {
    ethereum: any;
    // ethereum: Eip1193Provider & BrowserProvider;
  }
  
  interface HamburgerState {
    hamburgerState: boolean
  }

  interface ConnectedAddress {
    connectedAddress: string
  }
}
