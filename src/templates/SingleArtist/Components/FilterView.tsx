import React, { useState, useRef, useEffect } from "react";
import { Checkbox, cn } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

interface FilterViewProps {
  buttonLabel?: string | null | undefined;
  items?: any | null | undefined;
  value?: string | null | undefined;
  slug?: string | null | undefined;
  key?: string | null | undefined;
  label?: string | null | undefined;
}

const FilterView: React.FC<FilterViewProps> = ({
  buttonLabel,
  items,
  key,
  slug,
  value,
}) => {
  const router = useRouter();
  const params = useParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<{ [key: string]: string }>({});
  const filterViewRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterViewRef.current &&
      !filterViewRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const { city, gender, language, event } = router.query;

    const filters = {
      ...(city && { city_slug: city as string }),
      ...(gender && { g_slug: gender as string }),
      ...(language && { l_slug: language as string }),
      ...(event && { e_slug: event as string }),
    };

    setFilterValue(filters);
  }, [router.query]);

  const handleCheckedBoxChange = (item: any) => {
    const queryParams: any = { ...router.query };

    delete queryParams.slug;

    if (item.city_slug) {
      if (queryParams.city === item.city_slug) {
        delete queryParams.city;
      } else {
        queryParams.city = item.city_slug;
      }
    }
    if (item.l_slug) {
      if (queryParams.language === item.l_slug) {
        delete queryParams.language;
      } else {
        queryParams.language = item.l_slug;
      }
    }
    if (item.e_slug) {
      if (queryParams.event === item.e_slug) {
        delete queryParams.event;
      } else {
        queryParams.event = item.e_slug;
      }
    }
    if (item.g_slug) {
      if (queryParams.gender === item.g_slug) {
        delete queryParams.gender;
      } else {
        queryParams.gender = item.g_slug;
      }
    }

    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join("&");

    const newUrl = queryString ? `/${params.slug}/?${queryString}` : `/${params.slug}`;
    router.push(newUrl);
  };

  return (
    <div className="relative inline-block text-left" ref={filterViewRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex justify-center w-full rounded-full border border-gray-900 shadow-sm px-8 py-3 bg-gradient-to-tr from-black via-gray-900 to-black text-sm font-medium text-white focus:ring-2 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {buttonLabel}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute z-20 right-0 mt-2 w-72 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            className="py-2 px-2 overflow-y-scroll overflow-x-hidden max-h-[20rem] scrollbar-hide bg-[#080810] rounded-xl border-[1px] border-gray-900"
            role="none"
          >
            {items?.map((item: any) => (
              <Checkbox
                key={item[key ? key : "id"]}
                classNames={{
                  base: cn(
                    "inline-flex w-full max-w-md bg-content1 bg-transparent",
                    " items-center justify-start",
                    "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                    "data-[selected=true]:border-primary"
                  ),
                  label: "w-full text-white capitalize",
                }}
                isSelected={
                  filterValue[slug ? slug : ""] === item[slug ? slug : ""]
                }
                value={item[slug ? slug : ""]}
                onChange={() => handleCheckedBoxChange(item)}
              >
                {item[value ? value : "name"]}
              </Checkbox>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterView;
