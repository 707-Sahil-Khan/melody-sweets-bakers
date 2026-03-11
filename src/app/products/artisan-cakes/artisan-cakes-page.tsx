import ProductCategoryPage from "@/components/ProductCategoryPage/ProductCategoryPage";

const PRODUCTS = [
    { name: "Plain Cake", tag: "Classic" },
    { name: "Fruit Cake", tag: "Fruity" },
    { name: "Chocolate Pastry", tag: "Chocolate" },
    { name: "Pineapple Pastry", tag: "Fruity" },
    { name: "Black Forest", tag: "Premium" },
    { name: "Brownie", tag: "Chocolate" },
    { name: "Half Pound Cake", tag: "Small" },
    { name: "1 Pound Cake", tag: "Standard" },
];

export default function ArtisanCakesPage() {
    return (
        <ProductCategoryPage
            title="Artisan Cakes"
            description="From everyday treats to celebration centrepieces — our cakes are baked fresh daily with the finest ingredients. Perfect for every occasion."
            products={PRODUCTS}
            backHref="/"
        />
    );
}