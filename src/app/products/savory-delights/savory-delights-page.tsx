import ProductCategoryPage from "@/components/ProductCategoryPage/ProductCategoryPage";

const PRODUCTS = [
    { name: "Bakarkhani", tags: ["Crispy", "Traditional"], image: "/products/brown-small-slice.webp" },
    { name: "Bakarkhaani (Big)", tags: ["Large", "Traditional"], image: "/products/brown-small-pkg.webp" },
    { name: "Simple Biscuits", tags: ["Crunchy", "Daily"], image: "/products/plain-small-slice-pkg.webp" },
    { name: "Fruit Cake", tags: ["Sweet"], image: "/products/fruit-cake.png" },
];

export default function SavoryDelightsPage() {
    return (
        <ProductCategoryPage
            title="Savory Delights"
            description="Crunchy bakarkhani, crispy biscuits and baked goods that pair perfectly with chai. Traditional recipes, baked to perfection."
            products={PRODUCTS}
            backHref="/"
        />
    );
}