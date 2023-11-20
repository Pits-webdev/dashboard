"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

//User
export const alldData = async () => {
  try {
    const data = await prisma.user.findMany();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

//Kunde
export const allKunden = async () => {
  try {
    const allKunde = await prisma.kunde.findMany();

    return allKunde;
  } catch (error) {
    console.log(error);
  }
};
