import React from "react";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";

const productData = {
  smartreport: {
    title: "SmartReport",
    description: "Ferramenta personalizável que transforma dados em informações visuais e estratégicas.",
    imageSrc: "/assets/images/smartreport-illustration.png",
    imageAlt: "Ilustração SmartReport",
    features: [
      { icon: "bi-check-circle", text: "Personalização conforme sua necessidade" },
      { icon: "bi-rocket", text: "Serviço ágil e confiável" },
      { icon: "bi-puzzle", text: "Integração fácil com seus sistemas" }
    ],
    buttonLabel: "Solicitar Demonstração"
  },
  // Adicione mais produtos aqui se quiser
};

function ProductPage() {
  const { productName } = useParams();
  const product = productData[productName.toLowerCase()];

  if (!product) {
    return <h2 style={{ textAlign: "center", padding: "3rem" }}>Produto não encontrado</h2>;
  }

  return <ProductView {...product} />;
}

export default ProductPage;
