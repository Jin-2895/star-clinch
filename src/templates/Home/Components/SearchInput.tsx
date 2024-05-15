"use client";
import React from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import Link from "next/link";

export default function SearchInput() {
  const list = useAsyncList({
    async load({ signal, filterText }) {
      const res = await fetch(
        `https://staging-api.starclinch.in/search/autocomplete?q=${filterText}`,
        { signal }
      );
      const json = await res.json();
      return {
        items: json,
      };
    },
  });

  return (
    
    <Autocomplete
      classNames={{
        base: "max-w-xl",
        listboxWrapper: "max-h-[320px]",
        selectorButton: "text-default-500",
      }}
      inputProps={{
        classNames: {
          input: "ml-1",
          inputWrapper: "h-[70px] w-[550px] border-gray-900 peer-focus-visible:ring-black",
        },
      }}
      listboxProps={{
        hideSelectedIcon: true,
        itemClasses: {
          base: [
            "rounded-small",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "dark:data-[hover=true]:bg-[#080811]/10",
            "data-[pressed=true]:opacity-10",
            "data-[hover=true]:bg-default-200",
            "data-[selectable=true]:focus:bg-[#080811]",
            "data-[focus-visible=true]:ring-[#080810]",
          ],
        },
      }}
      isLoading={list.isLoading}
      items={list ? list.items : []}
      placeholder="Search for celebrity ..."
      popoverProps={{
        offset: 10,
        classNames: {
          base: "rounded-large",
          content: "p-1 bg-[#080810]/60 backdrop-blur-xl z-40",
        },
      }}
      startContent={
        <div className="text-default-400">
          <svg
            width="30"
            height="28"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9431 31.4419L22.9596 22.4583M4.99243 14.972C4.99243 16.3484 5.26353 17.7113 5.79024 18.9829C6.31695 20.2545 7.08896 21.4099 8.06219 22.3831C9.03543 23.3563 10.1908 24.1283 11.4624 24.655C12.734 25.1818 14.0969 25.4529 15.4733 25.4529C16.8496 25.4529 18.2125 25.1818 19.4841 24.655C20.7557 24.1283 21.9111 23.3563 22.8843 22.3831C23.8575 21.4099 24.6296 20.2545 25.1563 18.9829C25.683 17.7113 25.9541 16.3484 25.9541 14.972C25.9541 13.5957 25.683 12.2328 25.1563 10.9612C24.6296 9.6896 23.8575 8.53421 22.8843 7.56097C21.9111 6.58774 20.7557 5.81573 19.4841 5.28902C18.2125 4.76231 16.8496 4.49121 15.4733 4.49121C14.0969 4.49121 12.734 4.76231 11.4624 5.28902C10.1908 5.81573 9.03543 6.58774 8.06219 7.56097C7.08896 8.53421 6.31695 9.6896 5.79024 10.9612C5.26353 12.2328 4.99243 13.5957 4.99243 14.972Z"
              stroke="white"
              strokeWidth="0.912393"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      }
      radius="full"
      variant="bordered"
      onInputChange={list.setFilterText}
    >
      {/* eslint-disable-next-line*/}
      {(item: any) => {
        return (
          <AutocompleteItem
            key={item?.professional_name}
            textValue={item?.professional_name}
          >
            <Link href={`book-${item.category_name.toLowerCase()}-online/${item.slug}`}>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={item?.professional_name}
                    className="flex-shrink-0"
                    size="md"
                    src={item?.profile_pic}
                  />
                  <div className="flex flex-col">
                    <span className="text-small text-white">
                      {item?.professional_name}
                    </span>
                    <span className="text-tiny text-default-300">
                      {item?.category_name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </AutocompleteItem>
        );
      }}
    </Autocomplete>
  );
}
