import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function Gateway(req, res) {
  try {
    const amount = Number(req.body.amount);
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const product = await stripe.products.create({
      name: "Funds",
      description: "Payment for charity",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: amount * 100, // amount in paisa
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://scrap-frontend.vercel.app/success",
      cancel_url: "https://scrap-frontend.vercel.app/cancel",
      customer_email: "check@gmail.com",
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default Gateway;
