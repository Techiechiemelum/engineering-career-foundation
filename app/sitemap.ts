import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://engineering-career-foundation-1xdo.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/resources`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/join`, lastModified: new Date() },
    { url: `${baseUrl}/programs/mentorship`, lastModified: new Date() },
    { url: `${baseUrl}/programs/career-accelerator`, lastModified: new Date() },
    { url: `${baseUrl}/programs/skills-bootcamp`, lastModified: new Date() },
  ];
}