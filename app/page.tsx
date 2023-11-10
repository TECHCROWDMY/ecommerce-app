"use client"

import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { useShoppingCart } from "use-shopping-cart"

interface Props {}

export default function Page() {

  const { addItem, cartDetails, cartCount } = useShoppingCart()
  console.log(cartCount);

  const addToCart = () =>{

    const item = {
      name: 'Bananas',
      description: 'Yummy yellow fruit',
      id: 'id_banana001',
      price: 400,
      currency: 'USD',
      image: 'https://my-image.com/banana.jpg'
    }
    addItem(item);
  };

  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Name</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">Description</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              0 products
            </h1>
            <button onClick={addToCart}>ADD</button>
            {/* Product Sort */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">{/* Product filters */}</div>
              {/* Product grid */}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
