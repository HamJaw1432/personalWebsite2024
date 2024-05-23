"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

function debounce(
  callback: (filter: string, checked: boolean) => void,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;
  return function (filter: string, checked: boolean) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(filter, checked);
    }, delay);
  };
}

export default function Filter({
  type,
  values,
}: {
  type: string;
  values: string[];
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleFilter = debounce((filter: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (filter) {
      if (checked) {
        params.append(type, filter);
      } else {
        params.delete(type, filter);
      }
    } else {
      params.delete(type);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      {values.map((value, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={value}
              onChange={(e) => {
                handleFilter(value, e.target.checked);
              }}
              defaultChecked={
                searchParams.getAll(type)?.find((val) => val === value)
                  ? true
                  : false
              }
              className={styles.checkbox}
            />
            <label className={styles.checkboxLabel}>{value}</label>
          </div>
        );
      })}
    </div>
  );
}
