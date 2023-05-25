import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  //await fetch('/',{cache:'force-cache'})

  return <div>hi</div>;
}
