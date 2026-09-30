import postgres from "@prisma/orm-postgres/runtime";
import contract from "../src/prisma/contract.json";
import type { Contract } from "../src/prisma/contract";

export const db = postgres<Contract>({
  url: process.env.DATABASE_URL,
  contractJson: contract,
});