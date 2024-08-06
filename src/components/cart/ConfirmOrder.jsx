import React from "react";

const ConfirmOrder = () => {
  return (
    <section className="confirmorder">
      <main>
        <h1>Confirm Order</h1>
        <form action="">
          <div>
            <label htmlFor="" className="">
              Cash On Delivery
            </label>
            <input type="radio" name="payment" />
          </div>
          <div>
            <label htmlFor="" className="">
              Online
            </label>
            <input type="radio" name="payment" />
          </div>

          <button>Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
