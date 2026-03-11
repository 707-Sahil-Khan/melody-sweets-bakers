import ProductCategoryPage from "@/components/ProductCategoryPage/ProductCategoryPage";

const PRODUCTS = [
    { name: "Sada barfi", tags: ["Classic", "Mithai"], image: "/products/saada barfi.png" },
    { name: "Badam barfi", tags: ["Chocolate"], image: "/products/badam barfi.png" },
    { name: "Rus gulla", tags: ["Traditional"], image: "/products/ras gulla.png" },
    { name: "Multani Sohan Halwa", tags: ["Halwa", "Heritage"], image: "/products/sohan halwa.png" },
    { name: "Mix Mithai", tags: ["Assorted"], image: "/products/fruit-cake.png" },
    { name: "Gulab Jamun", tags: ["Syrup Sweet"], image: "/products/gulab jamun.png" },
    { name: "Shakar Parray", tags: ["Crispy"], image: "/products/shakr paray.png" },
    { name: "Baisan Patisa", tags: ["Traditional"], image: "/products/baisan patisa.png" },
    { name: "Malai jamun", tags: ["Classic"], image: "/products/malai jamun1.png" },
    { name: "Motichur laddu", tags: ["Fusion"], image: "/products/Motichur laddu.png" },
    { name: "Malai chamcham", tags: ["Sliced"], image: "/products/malai chamcham.png" },
    { name: "Gajr Halwa", tags: ["Fresh sweet"], image: "/products/gajr halwa.png" },
];

export default function TraditionalSweetsPage() {
    return (
        <ProductCategoryPage
            title="Traditional Sweets"
            description="Handcrafted mithai, halwa and desi favourites made with authentic recipes passed down through generations."
            products={PRODUCTS}
            backHref="/"
        />
    );
}