"use client"

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { BsShieldX } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuTag } from "react-icons/lu";

const navPaths = {
  spam: "/inbox/spam",
  promotions: "/inbox/promotions",
  inbox: "/inbox",
};

const Nav = () => {
  const router = usePathname();

  return (
    <nav className="flex flex-col justify-between h-full items-center p-2">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col items-center w-20 h-20 justify-center gap-y-2 rounded-md">
          <AiFillMessage size={48} color="#0087ff" />
        </div>
        <Link
          href={navPaths.inbox}
          className={`flex flex-col items-center w-20 h-20 justify-center gap-y-2 rounded-md ${
            router === navPaths.inbox
              ? "bg-brand-blue !bg-opacity-5 text-[#0087ff]"
              : "text-ink-secondary"
          }`}
        >
          <FiInbox width={24} height={24} size={24} />
          <div className="font-bold text-xs">Inbox</div>
        </Link>
        <Link
          href={navPaths.promotions}
          className={`flex flex-col items-center w-20 h-20 justify-center gap-y-2 rounded-md ${
            router === navPaths.promotions
              ? "bg-brand-blue !bg-opacity-5 text-[#0087ff]"
              : "text-ink-secondary"
          }`}
        >
          <LuTag width={24} height={24} size={24} />
          <div className="font-bold text-xs">Promotions</div>
        </Link>
        <Link
          href={navPaths.spam}
          className={`flex flex-col items-center w-20 h-20 justify-center gap-y-2 rounded-md ${
            router === navPaths.spam
              ? "bg-brand-blue !bg-opacity-5 text-[#0087ff]"
              : "text-ink-secondary"
          }`}
        >
          <BsShieldX width={24} height={24} size={24} />
          <div className="font-bold text-xs">Spam</div>
        </Link>
      </div>
      <Link
        href="/profile"
        type="button"
        className="flex flex-col items-center w-20 h-20 justify-center gap-y-2 rounded-md"
      >
        <IoPersonCircleOutline size={48} color="#0087ff" />
      </Link>
    </nav>
  );
};

export default Nav;
