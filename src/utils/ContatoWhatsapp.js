
function ContatoWhatsapp(mensagem) {
    const whatsappNumber = "5511946289761";
    const whatsappMessage = encodeURIComponent(mensagem);

    const link = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    return link
}

export default ContatoWhatsapp