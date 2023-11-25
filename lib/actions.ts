//@ts-nocheck //TODO - show typescript error

"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

//****User*****
//create User
export const createUser = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  //console.log(name, email, password);

  await prisma.user.create({
    data: {
      name: name as string,
      email: email as string,
      password: password as string,
    },
  });

  revalidatePath("/login");
  redirect("/login");
};

//delete User

//Kunde
//create Kunde
export const createKunde = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  await prisma.kunde.create({
    data: {
      name: name as string,
      email: email as string,
    },
  });

  revalidatePath("/dashboard/allKunde");
  redirect("/dashboard/allKunde");
};

//Rechnungen
// add Rechnung

export const addRechnung = async (formData: FormData) => {
  const idForm = formData.get("id");
  const preisForm = formData.get("preis");
  const bezahlt = formData.get("bezahlt");

  /* parse number */
  const kundenId = parseInt(idForm);
  const preis = parseInt(preisForm);
  //checkbox to boolean
  const status = (value) => {
    if (value === "on") {
      return true;
    }
    return false;
  };

  try {
    const addRechnung = await prisma.rechnung.create({
      data: {
        preis: preis,
        bezahlt: status(bezahlt),
        authorId: kundenId,
      },
    });

    revalidatePath(`dashboard/allKunde/${kundenId}`);
  } catch (error) {
    console.log(error);
  }
};
