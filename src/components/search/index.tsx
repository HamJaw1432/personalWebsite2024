"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

function debounce(callback: (search: string) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (search: string) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(search);
    }, delay);
  };
}

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = debounce((search: string) => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search" className={styles.searchLabel}>
        Search
      </label>
      <input
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
