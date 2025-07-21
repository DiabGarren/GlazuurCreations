"use client";
import Back from "@/components/back";
import Body from "@/components/body";
import ProductCard from "@/components/productCard";
import { Product } from "@/lib/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
    const params = useParams<{ id: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === "success") {
                        const productList: Product[] = [];
                        data.data.map((product: Product) => {
                            if (product.category.includes(params.id)) {
                                productList.push(product);
                            }
                        });
                        setProducts(productList);
                    }
                });
        };
        getProducts();
    }, []);
    return (
        <Body active={"products"}>
            <Back callback="../" />
            <h2 className="text-center text-[22px]">{params.id}</h2>
            <div className="mt-[15px]">
                {products.length > 0 ? (
                    <div className="flex gap-[5px_10px] flex-wrap mx-auto justify-center">
                        {products.map((product: Product, index: number) => {
                            return (
                                <ProductCard
                                    productId={product.productId}
                                    productName={product.name}
                                    productPrice={product.price}
                                    productColours={product.colours}
                                    productCategory={product.category}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <h2>No Products</h2>
                )}
            </div>
        </Body>
    );
}
