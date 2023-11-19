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
export const alldData = async () => {
  try {
    const data = await prisma.user.findMany();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
