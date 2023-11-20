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

  revalidatePath("/dashboard");
  redirect("/dashboard");
};
