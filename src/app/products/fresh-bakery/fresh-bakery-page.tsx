import ProductCategoryPage from "@/components/ProductCategoryPage/ProductCategoryPage";

const PRODUCTS = [
    { name: "Bakarkhani", tags: ["Crispy", "Traditional"], emoji: "🫓" },
    { name: "Bakarkhaani (Big)", tags: ["Large", "Traditional"], emoji: "🫓" },
    { name: "Simple Biscuits", tags: ["Crunchy", "Daily"], emoji: "🍪" },
    { name: "Fruit Cake", tags: ["Sweet"], emoji: "🍰" },
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