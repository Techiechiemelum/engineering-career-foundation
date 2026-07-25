import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID!;

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  date: string;
};

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Name?.title?.[0]?.plain_text ?? "Untitled",
    slug: page.properties.Slug?.rich_text?.[0]?.plain_text ?? "",
    summary: page.properties.Summary?.rich_text?.[0]?.plain_text ?? "",
    date: page.properties.Date?.date?.start ?? "",
  }));
}

export async function getPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });

  const page: any = response.results[0];
  if (!page) return null;

  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  return {
    title: page.properties.Name?.title?.[0]?.plain_text ?? "Untitled",
    date: page.properties.Date?.date?.start ?? "",
    blocks: blocks.results,
  };
}