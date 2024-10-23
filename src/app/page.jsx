import "./Page.css";
import Button from "@/Components/Button/Button";
export default function Content() {
  return (
    <div className="main-container">
      <h1 className="hello-text">welcome to Geo Market</h1>
      <h2 className="losung-text">
        Here you can discover a wide variety of products.
      </h2>

      <Button content={"Log In / Registration"} backgroundColor={"brown"} />
    </div>
  );
}
