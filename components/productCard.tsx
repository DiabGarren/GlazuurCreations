import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
    productId,
    productName,
    productPrice,
    productColours,
    productCategory,
}: {
    productId: string;
    productName: string;
    productPrice: number;
    productColours: [{ name: string; id: string }];
    productCategory: [string];
}) {
    return (
        <Link href={"/product/" + productId} className="product-card">
            <div className="product-card-image relative w-[100px] h-[85px] ">
                <Image
                    src={
                        "/Products/" +
                        productCategory[0] +
                        "/" +
                        productId.replace("_", productColours[0].id) +
                        ".jpg"
                    }
                    alt={"Thumbnail for " + productName}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="product-card-title">
                <h2>{productName}</h2>
                <div>
                    {productColours.map(
                        (
                            { name, id }: { name: string; id: string },
                            index: number
                        ) => {
                            return (
                                <div
                                    className={"product-card-colour-" + id}
                                    key={index}
                                ></div>
                            );
                        }
                    )}
                </div>
            </div>
        </Link>
    );
}
