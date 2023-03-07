"use client";

import { usePreview } from "../lib/sanity.preview";
import OtherWork from "./OtherWork";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  console.log("LOADING posts...", posts);
  return <OtherWork posts={posts} />;
}
