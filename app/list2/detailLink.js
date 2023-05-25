"use client";

import { usePathname, useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      수정
    </button>
  );
}
