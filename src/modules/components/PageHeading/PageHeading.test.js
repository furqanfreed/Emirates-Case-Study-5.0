import PageHeading from "."
import { render, screen } from "@testing-library/react"

test("page header component render same title  as passed", () => {
    render(<PageHeading heading="page heading"/>);
    expect(screen.getByText(/page heading/i)).toBeInTheDocument();
});