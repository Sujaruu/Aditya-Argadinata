import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Aditya Arga | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* content */}
      <div className="w-full bg-[#fbfcfd] pt-20">
        <div className="w-full max-w-[900px] text-gray-500 mx-auto px-8">
          <div className="flex flex-col items-center md:flex-row-reverse md:justify-between">
            <div className="w-[200px]">
              <Image
                src="/saya.jpeg"
                alt=""
                width="200px"
                height="200px"
                className="object-cover md:h-[150px] md:w-[150px] rounded-full"
              />
            </div>
            <div className="w-full">
              <h1 className="text-4xl font-semibold mt-8">Aditya Argadinata</h1>
              <p className="text-xl text-transparent bg-clip-text font-semibold mt-4 bg-gradient-to-l from-[#0c17a8] to-[#4fd8e2]">
                Student & Frontend Developer
              </p>
              <p className="mt-4">
                hello, I am Aditya Argadinata, A person who love to code and
                music. Talks about React, <br /> Tailwind css, an another web
                development related topic{" "}
              </p>
            </div>
          </div>

          {/* featured article */}
          <div className="mt-28">
            <p className="text-2xl font-semibold">Featured Portfolio</p>
            <div className="w-full mt-4 border-2 border-[#0c8c96] p-4">
              <h4 className="text-lg font-semibold">Poke-Dex</h4>
              <p className="pt-2">
                A simple pokemon index App build with Vite, React, TailwindCss
              </p>
              <div className="flex items-center mt-2 gap-2">
                <Image src="/react.png" alt="" width="20px" height="20px" />
                <Image src="/tailwind.png" alt="" width="20px" height="20px" />
                <Image src="/vite.png" alt="" width="20px" height="20px" />
              </div>
            </div>
            <div className="w-full mt-4 border-2 border-[#0c8c96] p-4">
              <h4 className="text-lg font-semibold">ChiChat</h4>
              <p className="pt-2">
                A simple RealTime chat App build with Vite, React, TailwindCss
              </p>
              <div className="flex items-center mt-2 gap-2">
                <Image src="/react.png" alt="" width="20px" height="20px" />
                <Image src="/tailwind.png" alt="" width="20px" height="20px" />
                <Image src="/vite.png" alt="" width="20px" height="20px" />
              </div>
            </div>
            <Link href="/">
              <a className="flex items-center gap-2 mt-2">
                <span>All Portofolios </span> <HiArrowNarrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
