import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clapperboard } from "lucide-react";
import ProfileSection from "./components/Profile";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
      "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch<simpleBlogCard[]>(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <ProfileSection
        username="zaayddev"
        bio="Passionate about web development."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 mb-5 gap-5 drop-shadow-2xl">
        {data.map((post: simpleBlogCard, idx: number) => (
          <Card key={idx}>
            <Image
              priority
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>

              <Button
                asChild
                className="w-full mt-7 flex items-center justify-center"
              >
                <Link
                  href={`/blog/${post.currentSlug}`}
                  className="flex items-center"
                >
                  <Clapperboard className="mr-2" /> Read More
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
