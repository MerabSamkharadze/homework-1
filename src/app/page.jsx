import ProductList from "../Components/productList/page";

import "./Page.css";

export default function Content() {
  const products = [
    {
      id: 1,
      title: "ხინკალი ქალაქური",
      description:
        "ქართული კლასიკური კერძი, დამზადებული თხელი ცომისგან, რომელიც შიგნით შეიცავს ხორცის წვნიან ფარშს. მთიულური ხინკალი გამოირჩევა სიმსუბუქით და ხორცის მრავალფეროვანი არომატით.",
      image: "https://kulinaria.ge/media/recipe-images/2017/04/xinkali.jpg",
    },
    {
      id: 2,
      title: "აჭარული ხაჭაპური",
      description:
        "ტრადიციული ქართული კერძი, რომელიც წარმოშობილია აჭარიდან. ხაჭაპური მზადდება ღია ფორმით, რომელშიც ჩადებულია მდნარი ყველი და ცოცხალი კვერცხი. მის გემოს გამორჩეულად რბილი და ცხიმიანი ნაზავი ქმნის.",
      image: "https://img.marketer.ge/2019/02/17-1.jpg",
    },
    {
      id: 3,
      title: "შქმერული",
      description:
        "ქართული სოფლის კერძი, რომელიც დამზადებულია ქათმის ნაჭრებისგან, ნიორისა და რძის კრემოვან სოუსში. მისი განსაკუთრებული გემო ნიორის არომატითა და რბილი ტექსტურითაა გამორჩეული.",
      image: "https://gemrielia.ge/media/images/32.png",
    },
  ];

  return (
    <div className="main-container">
      <ProductList products={products} />
    </div>
  );
}
