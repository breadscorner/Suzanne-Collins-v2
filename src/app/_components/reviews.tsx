"use client";

import { useState, useEffect } from "react";
import BookReviews from "../reviews.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_components/ui/carousel";

type Review = {
  id: number;
  title: string;
  genre: string;
  reviewer: string;
  quote: string;
  rating?: string;
};

export function Reviews() {
  const [reviews] = useState<Review[]>(BookReviews);

  // Logging the reviews after the render occurs
  useEffect(() => {
    console.log("Reviews:", reviews);
  }, [reviews]);

  return (
    <div className="dark:border-t-white text-center w-[100%]">
      <Carousel>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <div className="p-1">
                <div className="flex border border-gray-200 rounded-md md:h-[200px] p-4 mb-8 md:mb-24">
                  <div className="mr-4">
                    <img
                      src="/images/book-cover.jpg"
                      alt="Book"
                      className="w-24 h-auto"
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <p className="text-lg font-semibold">{review.title}</p>
                    <p className="text-md mt-2">{review.quote}</p>
                    <p className="text-sm mt-4">- {review.reviewer}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
