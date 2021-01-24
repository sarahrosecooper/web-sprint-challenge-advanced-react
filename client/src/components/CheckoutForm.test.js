import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    expect(screen.getByText(/checkout form/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
 render(<CheckoutForm />) ;  

// elements in field //

const first = screen.getByLabelText(/first name/i);
const last = screen.getByLabelText(/last name/i);
const address = screen.getByLabelText(/address/i);
const city = screen.getByLabelText(/city/i);
const state = screen.getByLabelText(/state/i);
const zipCode = screen.getByLabelText(/zip/i);
const checkout = screen.getByRole(/button/i);

// simulate event 
userEvent.type(first, "Alice");
userEvent.type(last, "Cooper");
userEvent.type(address, "333 Dream Drive");
userEvent.type(city, "Chicago");
userEvent.type(state, "Illinois");
userEvent.type(zipCode, "60618");

expect(first).toHaveValue("Alice");
expect(last).toHaveValue("Cooper");
expect(address).toHaveValue("333 Dream Drive");
expect(city).toHaveValue("Chicago");
expect(state).toHaveValue("Illinois");
expect(zipCode).toHaveValue("60618");

userEvent.click(checkout)

const success = await screen.queryByText(/Your new green friends will be shipped to:/i);
expect(success).toBeInTheDocument();

});


