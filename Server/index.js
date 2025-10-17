import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Webhook } from "svix";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.raw({ type: "application/json" }));

app.post("/api/sync-landlord", async (req, res) => {
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  const headers = {
    "svix-id": req.headers["svix-id"],
    "svix-timestamp": req.headers["svix-timestamp"],
    "svix-signature": req.headers["svix-signature"],
  };

  const payload = req.body.toString();

  try {
    const event = wh.verify(payload, headers);

    if (event.type === "user.created") {
      const { id, email_addresses, username, first_name, last_name } = event.data;

      await prisma.landlord.create({
        data: {
          clerkId: id,
          email: email_addresses[0]?.email_address,
          username: username || "",
          firstName: first_name || "",
          lastName: last_name || "",
        },
      });

      console.log(`✅ Landlord synced: ${username || email_addresses[0]?.email_address}`);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Webhook verification failed:", err);
    res.status(400).json({ error: "Invalid webhook signature" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Server running on port ${process.env.PORT || 5000}`);
});
