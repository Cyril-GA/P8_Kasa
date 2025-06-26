import { render, screen } from "@testing-library/react";

import Tag from "./Tag";

describe("Test du composant Tag", () => {
  it("doit faire afficher le texte passé en props", () => {
    render(<Tag tagName={"Coco"} />);
    expect(screen.getByText("Coco")).toBeInTheDocument();
  });
});
