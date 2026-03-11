import ProductCategoryPage from "@/components/ProductCategoryPage/ProductCategoryPage";

const PRODUCTS = [
    { name: "Sada Barfi", tag: "Classic" },
    { name: "Chocolate Bowl", tag: "Chocolate" },
    { name: "Russ Khoya", tag: "Traditional" },
    { name: "Multani Sohan Halwa", tag: "Halwa" },
    { name: "Mix Mithai", tag: "Assorted" },
    { name: "Gulab Jamun", tag: "Syrup Sweet" },
    { name: "Shakar Parray", tag: "Crispy" },
    { name: "Patisa", tag: "Traditional" },
    { name: "Russ", tag: "Classic" },
    { name: "Cake Russ", tag: "Fusion" },
    { name: "Slice Russ", tag: "Sliced" },
    { name: "Sweet Bun", tag: "Baked Sweet" },
];

export default function TraditionalSweetsPage() {
    return (
        <ProductCategoryPage
            title="Traditional Sweets"
            description="Handcrafted mithai, halwa and desi favourites made with authentic recipes passed down through generations. Every bite carries the warmth of Wah Cantt's heritage."
            products={PRODUCTS}
            backHref="/"
        />
    );
}