
// import Banner from "@/components/Home/banner";
import React from "react"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Banner from "@/components/Home/banner";


describe("Banner section test",()=>{
    it("heading check",()=>{
        render(<Banner />);
        const button = screen.getByRole('button');
        const buttonText=/Button/i;
        expect(button).toHaveTextContent(buttonText);
    })
})