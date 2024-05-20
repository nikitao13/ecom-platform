import RootLayout from "../layout";
import Header from "@/components/Header";
import CartDetails from "@/components/CartDetails";

export default function Cart() {
    return (
        <RootLayout>
            <div className="scroll-smooth flex flex-col bg-gray-100 dark:bg-zinc-800 min-h-screen font-sans font-light">
                <Header />
                <main className="max-w-[1378px] mx-auto mb-8">
                    <CartDetails />
                </main>
            </div>
        </RootLayout>
    );
}
