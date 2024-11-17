"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaTelegram
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import {socialLinks } from "@/config";

const YEAR = new Date().getFullYear();

type SocialLinkProps = {
  href: string;
  icon: React.ElementType;
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.telegram} icon={FaTelegram} />
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>
      <SocialLinks />
    </small>
  );
}
