import { describe, expect, it } from "vitest";
import "./Collapse.jsx";
import { fireEvent, render, screen } from "@testing-library/react";
import Collapse from "./Collapse.jsx";

const setup = (title, content) => {
  const { container } = render(<Collapse title={title} content={content} />);
  const summary = screen.getByTestId("summary");
  const details = screen.getByTestId("collapse");
  return { summary, details, container };
};

describe("Composant Collapse", () => {
  it("Devrait s'ouvrir au clic", () => {
    const { summary, details } = setup("Titre test", "Contenu test");
    expect(details.open).toBe(false);
    fireEvent.click(summary);
    expect(details.open).toBe(true);
  });

  it("Doit afficher un paragraphe si content est une string", () => {
    const { container, summary } = setup("Titre test", "Texte simple");
    fireEvent.click(summary);

    const paragraph = container.querySelector("p");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.textContent).toBe("Texte simple");
  });

  it("Doit afficher une liste si content est un tableau", () => {
    const items = ["Item A", "Item B", "Item C"];
    const { container, summary } = setup("Titre liste", items);
    fireEvent.click(summary);

    const ul = container.querySelector("ul");
    expect(ul).toBeInTheDocument();

    const lis = ul.querySelectorAll("li");
    expect(lis.length).toBe(items.length);

    lis.forEach((li, index) => expect(li).toHaveTextContent(items[index]));
  });
});
