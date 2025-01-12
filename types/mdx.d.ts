declare module "*.mdx" {
  import { ReactNode } from "react";

  export const frontmatter: {
    title?: string;
    subtitle?: string;
    [key: string]: any;
  };

  const Component: (props: any) => ReactNode;
  export default Component;
}
