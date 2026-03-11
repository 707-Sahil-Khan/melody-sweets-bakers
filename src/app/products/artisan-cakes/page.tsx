import ProductCategoryPage from "@/components/ProductCategoryPage/ProductCategoryPage";

const PRODUCTS = [
    { name: "Plain Cake", tags: ["Classic"], image: "/products/plain-cake.png" },
    { name: "Fruit Cake", tags: ["Fruity"], image: "/products/fruit-cake.png" },
    { name: "Chocolate Pastry", tags: ["Chocolate"], image: "/products/chocolate-pastry.png" },
    { name: "Pineapple Pastry", tags: ["Fruity"], image: "/products/pineapple-pastry.png" },
    { name: "Black Forest", tags: ["Premium"], image: "/products/black-forest.png" },
    { name: "Brownie", tags: ["Chocolate"], image: "/products/brownie.png" },
    { name: "Half Pound Cake", tags: ["Small"], image: "/products/half-pound-cake.png" },
    { name: "1 Pound Cake", tags: ["Standard"], image: "/products/plain-cake.png" },
];

export default function ArtisanCakesPage() {
    return (
        <ProductCategoryPage
            title="Artisan Cakes"
            description="From everyday treats to celebration centrepieces — our cakes are baked fresh daily with the finest ingredients."
            products={PRODUCTS}
            backHref="/"
        />
    );
}