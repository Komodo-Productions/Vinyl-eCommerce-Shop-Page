"use client";

import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<p>Loading your order...</p>}>
      <ThankYouContent />
    </Suspense>
  );
}
