"use server";

import { UTApi } from "uploadthing/server";
const utapi = new UTApi();

export default async function Ondelete(key: string) {
    const res = await utapi.deleteFiles(key);
    return res;
}
