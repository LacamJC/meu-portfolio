import React from "react";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import ContatoWhatsapp from "../../utils/ContatoWhatsapp";
const productData = {
    smartreport: {
        title: "SmartReport",
        description: "Ferramenta personalizável que transforma dados operacionais e financeiros em relatórios visuais e estratégicos.",
        imageSrc: "https://placehold.co/600x400",
        imageAlt: "Ilustração SmartReport",
        features: [
            { icon: "bi-check-circle", text: "Personalização conforme sua necessidade" },
            { icon: "bi-rocket", text: "Serviço ágil e confiável" },
            { icon: "bi-puzzle", text: "Integração fácil com seus sistemas" }
        ],
        buttonLabel: "Quero saber mais",
        buttonLink: ContatoWhatsapp(`Olá, me interessei pelo SmartReport e gostaria de mais informações`),
        accordionItems: [
            {
                title: "O que você precisa ter?",
                content: "É necessário possuir algum tipo de controle de dados — como planilhas organizadas, banco de dados acessível ou sistema com API — para que o SmartReport possa se integrar e gerar os relatórios. Caso ainda não tenha esse controle estruturado, também ofereço o desenvolvimento de um sistema personalizado para organizar as informações do seu negócio."
            },
            {
                title: "Funcionalidades possíveis",
                content: "Envio automático de alertas por e-mail, dashboards com filtros dinâmicos, relatórios periódicos, indicadores com cores e gráficos, notificações por eventos e mais."
            }
        ]
    }
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
