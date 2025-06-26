import { render, screen, fireEvent } from "@testing-library/react";

import Slideshow from "./Slideshow";
import { expect } from "vitest";

const pictures = ["ergetgth", "dtgtghrth"];

describe("Test du composant Slideshow", () => {
  it("Doit faire le render du nombre d images", () => {
    render(<Slideshow pictures={pictures} />);
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  it("Doit pouvoir changer d image si on appuie sur la fleche droite", () => {
    render(<Slideshow pictures={pictures} />);
    const rightArrow = screen.getByTestId("right-arrow");
    fireEvent.click(rightArrow);
    expect(screen.getByText("2/2")).toBeInTheDocument();
  });

  it("Doit pouvoir changer d'image si on appuie sur la fleche gauche", () => {
    render(<Slideshow pictures={pictures} />);
    const leftArrow = screen.getByTestId("left-arrow");
    fireEvent.click(leftArrow);
    expect(screen.getByText("2/2")).toBeInTheDocument();
  });
});
