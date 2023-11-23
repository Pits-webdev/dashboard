"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

//User
export const alldData = async () => {
  noStore();
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
  noStore();
  try {
    const allKunde = await prisma.kunde.findMany();

    return allKunde;
  } catch (error) {
    console.log(error);
  }
};

//singleKunde
export const singleKunde = async (id: number) => {
  noStore();
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

/* ***Rechnungen*** */
//alle Rechnungen for dashboard in string
export const allRechnungen = async () => {
  noStore();
  try {
    const data = await prisma.rechnung.findMany();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//find by Kunde Id rechnungen
export const kundeByIdRechnungen = async () => {
  try {
    const data = await prisma.rechnung.findMany({
      include: {
        author: true,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
