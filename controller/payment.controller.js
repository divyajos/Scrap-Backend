import Stripe from "stripe";
const stripe = Stripe(
  "sk_test_51Q5hS1P0GyV7kCfV8U3vWDe8yhAheI4lKPMjSOv3325y356Ptxy9kcO1rhOfR3sSxbk154qtOKvS4dHinm3TUPjF00EjPEj1uQ"
);

async function Gateway(req,res) {
  try {
    const product = await stripe.products.create({
      name: "funds",
      description: "payment for charity",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: req.body.amount * 100, // 100 INR
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
      success_url: "http://localhost:3000/payment/user@gmail.com/800",
      cancel_url: "http://localhost:3000/cancel",
      customer_email: "check@gmail.com",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default Gateway;

