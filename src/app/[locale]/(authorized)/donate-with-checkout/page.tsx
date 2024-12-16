import CheckoutForm from "@/Components/CheckoutForm";

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container mt-28 min-h-[90vh]">
      <h1>Donate with hosted Checkout</h1>
      <p>Donate to my project ❤️</p>
      <CheckoutForm uiMode="hosted" />
    </div>
  );
}
