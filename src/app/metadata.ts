// src/app/metadata.ts
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import "./globals.css";
import 'zenn-content-css';

export const metadata: Metadata = {
    title: `NextTechへようこそ！`,
    description: `NextTechへようこそ！
    本ブログでは一般大学生がプログラミング，旅行，留学，雑談記事を暇なときに投稿します．不定期です！ プログラミングに関する解説や留学体験記，おすすめの旅行先や実用的な雑談記事を投稿予定です！`,
    openGraph: {
      images: [HOME_OG_IMAGE_URL],
    },
  };