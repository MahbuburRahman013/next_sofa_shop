export type Product = {
    _id: string;
    img: string;
    name: string;
    price: number;
    rating: number;
    type: string;
};


export default async function allProducts() {
    const res = await fetch("http://localhost:5000/all-products");
    const posts: Product[] = await res.json();
    return posts;

}