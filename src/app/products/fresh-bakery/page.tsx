import ProductCategoryPage from "@/components/ProductCategoryPage/ProductCategoryPage";

const PRODUCTS = [
    { name: "Simple Small Bread", tags: ["Daily", "Bread"], image: "/products/plain-small-slice.webp" },
    { name: "Large Plain Bread", tags: ["Family Size", "Bread"], image: "/products/brown-small-slice.webp" },
    { name: "Small Milky Bread", tags: ["Premium", "Bread"], image: "/products/milky-small-slice.webp" },
    { name: "Large Milky Bread", tags: ["Family Size", "Bread"], image: "/products/milky-small-slice.webp" },
    { name: "Sandwich Bread (Small)", tags: ["Sandwich"], image: "/products/plain-small-pkg.webp" },
    { name: "Sweet Bun", tags: ["Soft", "Bun"], image: "/products/brown-small-pkg.webp" },
    { name: "Butter Ties", tags: ["Buttery"], image: "/products/plain-small-slice-pkg.webp" },
    { name: "Big Pizza", tags: ["Savory"], image: "/products/plain-small-slice.webp" },
    { name: "Fudge", tags: ["Sweet"], image: "/products/brownie.png" },
    { name: "Eggs", tags: ["Fresh"], image: "/products/plain-small-slice.webp" },
];

export default function FreshBakeryPage() {
    return (
        <ProductCategoryPage
            title="Fresh Bakery"
            description="Soft, pillowy breads and daily bakes made fresh every morning. From your everyday loaf to premium milky breads."
            products={PRODUCTS}
            backHref="/"
        />
    );
}