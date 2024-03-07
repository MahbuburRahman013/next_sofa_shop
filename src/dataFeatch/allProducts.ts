export type Product = {
    _id: string;
    img: string;
    name: string;
    price: number;
    rating: number;
    type: string;
};


export default async function allProducts() {
    const res = await fetch("https://sofaserver.vercel.app/all-products");
    const posts: Product[] = await res.json();
    return posts;

}