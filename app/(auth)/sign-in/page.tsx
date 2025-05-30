"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={50}
            height={30}
          />
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  alt="star"
                  src="/assets/icons/star.svg"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Oreon makes screen recording easy. From quick walkthrough to full
              presentation, it's fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                alt="dummy"
                src="/assets/images/dummy.jpg"
                height={64}
                width={64}
                className="rounded-full"
              />
              <div>
                <h2>John Doe</h2>
                <p>Product Designer at Kampy</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Oreon {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={90}
              height={30}
            />
          </Link>
          <p>Create your very first story with Oren</p>
          <button onClick={handleSignIn}>
            <Image
              alt="google"
              src="/assets/icons/google.svg"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default page;
