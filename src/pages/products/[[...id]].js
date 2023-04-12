import { useRouter } from "next/router";

const Products = () => {

    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="flex min-h-screen">
            <h1>Product id: {id}</h1>
        </div>
    )

}

export default Products;