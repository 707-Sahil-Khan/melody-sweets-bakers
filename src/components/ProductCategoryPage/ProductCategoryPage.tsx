import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCategoryPage.module.css";

interface Product {
    name: string;
    tags?: string[];
    image?: string;
}

interface ProductCategoryPageProps {
    title: string;
    description: string;
    products: Product[];
    backHref?: string;
}

export default function ProductCategoryPage({
    title,
    description,
    products,
    backHref = "/"
}: ProductCategoryPageProps) {
    return (
        <main className={styles.page}>
            {/* Top nav bar */}
            <div className={styles.topBar}>
                <Link href={backHref} className={styles.back}>
                    ← Back
                </Link>
                <span className={styles.brand}>Melody Sweets & Bakers</span>
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.count}>{products.length} products</span>
                    </div>
                </div>

                {/* Products Grid */}
                <div className={styles.grid}>
                    {products.map((product, i) => (
                        <div key={i} className={styles.card}>
                            {/* Image area */}
                            <div className={styles.imageArea}>
                                {product.image ? (
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={styles.productImg}
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                ) : (
                                    <span className={styles.placeholder}>🍞</span>
                                )}
                            </div>

                            {/* Card info */}
                            <div className={styles.cardInfo}>
                                <div className={styles.tags}>
                                    {product.tags?.map((tag, t) => (
                                        <span key={t} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className={styles.productName}>{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}