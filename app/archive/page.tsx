import type { Metadata } from "next";
import ArchiveClient from "./archive-client";

export const metadata: Metadata = {
  title: "Archive | Yoseph Kedir",
};

export default function ArchivePage() {
  return <ArchiveClient />;
}
