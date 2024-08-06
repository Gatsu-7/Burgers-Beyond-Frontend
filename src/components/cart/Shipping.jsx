import React from "react";
import { Country, State } from "country-state-city";
import { Link } from "react-router-dom";
const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select name="" id="">
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="">State</label>
            <select name="" id="">
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="text" placeholder="Enter pin code" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter Phone Number" />
          </div>
          <Link to="/confirmorder">
            <button type="submit"> Confirm Order </button>
          </Link>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
