"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

//User
export const alldData = async () => {
  try {
    const data = await prisma.user.findMany();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//Kunden
//alleKunden
export const allKunden = async () => {
  try {
    const allKunde = await prisma.kunde.findMany();

    return allKunde;
  } catch (error) {
    console.log(error);
  }
};

//singleKunde
export const singleKunde = async (id: number) => {
  try {
    const singleKunde = await prisma.kunde.findUnique({
      where: {
        id: id,
      },
    });

    return singleKunde;
  } catch (error) {
    console.log(error);
  }
};
