import CartDetails from "@/components/CartDetails";
import RootLayout from "../layout";
import Header from "@/components/Header";

export default function Cart() {
    return (
        <RootLayout>
            <div className="scroll-smooth flex flex-col bg-gray-100 dark:bg-zinc-800 min-h-screen font-sans font-light">
                <Header />
                <CartDetails />
            </div>
        </RootLayout>
    );
}

