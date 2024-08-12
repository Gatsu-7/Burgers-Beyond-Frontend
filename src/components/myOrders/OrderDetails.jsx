import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping Details</h1>
          <p>
            <b>Address</b>
            {"srgw 12-32sfv sdrgf"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Satyam"}
          </p>
          <p>
            <b>Phone</b>
            {561516516}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"...Preparing your Delicious Burger..."}
          </p>
          <p>
            <b>Placed at</b>
            {"23-04-2024"}
          </p>
          <p>
            <b>Delivered at</b>
            {"34-5-2034"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"34tijsbviiwuebgrg"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-04-2343"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>
          </p>
          <p>
            <b>Shipping Charges </b>₹{200}
          </p>
          <p>
            <b>Tax</b>₹{243}
          </p>
          <p>
            <b>Tax</b>₹{234 + 2425 + 235}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{1322}</span>
            </div>
          </div>
          <div>
            <h4> Veg Cheese Burger</h4>
            <div>
              <span>{2}</span> x <span>{22}</span>
            </div>
          </div>
          <div>
            <h4>Cheese Burger with french fries</h4>
            <div>
              <span>{82}</span> x <span>{122}</span>
            </div>
          </div>
          <div style={{ fontWeight: "800" }}>
            <h4>Sub Total</h4>
            <div>₹{342}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
