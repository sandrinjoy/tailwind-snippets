import NavLink1 from "./templates/NavLink1";
export type Snippet = {
  id: string;
  title: string;
  tags: string[];
  codePath: string;
  jsx: Function;
};

export const snippets: Snippet[] = [
  {
    id: "navigation-link-1",
    title: "Navigation Link",
    tags: ["navigation", "link"],
    codePath:
      process.env.NODE_ENV === "development"
        ? "./data/templates/NavLink1.tsx"
        : "./templates/NavLink1.tsx",
    jsx: NavLink1,
  },
];
