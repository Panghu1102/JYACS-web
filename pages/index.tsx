import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";
import client from "../.tina/__generated__/client";

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div>
      <h1>{data.page.title}</h1>
      {data.page.hero && (
        <section>
          <h2>{data.page.hero.heading}</h2>
          {data.page.hero.eyebrow && <p>{data.page.hero.eyebrow}</p>}
        </section>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "index.json",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
