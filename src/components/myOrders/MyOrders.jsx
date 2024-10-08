import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
const MyOrders = () => {
  const arr = [1, 2, 3, 4];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Quantity</th>
              <th>Payment Method</th>
              <th>Action</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i, index) => (
              <tr key={index}>
                <td>#odnmrgokn</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹{2352}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${"asdas"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
