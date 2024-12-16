import Link from "next/link";

export default function IndexPage(): JSX.Element {
  return (
    <ul className="card-list ">
      <li>
        <Link
          href="/donate-with-embedded-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom text-2xl">Donate with embedded Checkout</h2>
        </Link>
      </li>
      <li>
        <Link
          href="/donate-with-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom text-2xl">Donate with hosted Checkout</h2>
        </Link>
      </li>
      <li>
        <Link
          href="/donate-with-elements"
          className="card elements-style-background"
        >
          <h2 className="bottom text-2xl">Donate with Elements</h2>
        </Link>
      </li>
    </ul>
  );
}
