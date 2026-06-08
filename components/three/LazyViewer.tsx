"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-navy/20 border-t-navy" />
    </div>
  ),
});

export default ModelViewer;
