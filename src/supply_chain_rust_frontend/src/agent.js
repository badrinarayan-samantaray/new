import { HttpAgent, Actor } from "@dfinity/agent";

const canisterId = import.meta.env.VITE_BACKEND_CANISTER_ID;

const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });

if (import.meta.env.DEV) {
  agent.fetchRootKey(); // IMPORTANT for local development
}

const idlFactory = ({ IDL }) =>
  IDL.Service({
    register_product: IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Nat64], [], []),
    get_products: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text, IDL.Text, IDL.Nat64))], ["query"]),
    register_supplier: IDL.Func([IDL.Text, IDL.Text], [], []),
    get_suppliers: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))], ["query"]),
  });

export const backend = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});
