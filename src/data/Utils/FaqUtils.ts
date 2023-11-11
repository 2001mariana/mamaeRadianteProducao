interface QuestionAndAnswer {
    question: string
    answer: string
}

export const allQuestionAndAnswerPT: QuestionAndAnswer[] = [
    { 
      question: 'Após adquirir meu guia, como terei acesso ao conteúdo?',
      answer: 'Assim que o pagamento for confirmado, você terá acesso instantâneo em PDF que será enviado para o seu email. Em caso de boleto, o tempo médio para a aprovação do pagamento é 3 dias.'
    }, 
    { 
      question: 'Por quanto tempo terei acesso ao meu guia?',
      answer: 'O acesso ao conteúdo é vitalício.'
    }, 
    { 
      question: 'Por quanto tempo conseguirei adquirir meu guia por este preço?',
      answer: 'Os valores dos nossos guias neste momento estão em promoção e podem voltar ao preço original a qualquer momento sem aviso prévio.'
    }, 
    { 
      question: 'Em caso de dúvida, consigo conversar com alguém e obter respostas?',
      answer: 'Sim, um dos nossos valores é a excelência e por este motivo nosso whatsapp está sempre disponível para você tirar todas as suas dúvidas.'
    }
  ]

export const allQuestionAndAnswerES: QuestionAndAnswer[] = [
      { 
        question: 'Después de adquirir mi guía, ¿cómo tendré acceso al contenido?',
        answer: 'Una vez que el pago sea confirmado, tendrás acceso instantáneo al PDF que se enviará a tu correo electrónico. En el caso de un boleto, el tiempo promedio para la aprobación del pago es de 3 días.'
      }, 
      { 
        question: '¿Por cuánto tiempo tendré acceso a mi guía?',
        answer: 'El acceso al contenido es de por vida.'
      }, 
      { 
        question: '¿Por cuánto tiempo podré adquirir mi guía a este precio?',
        answer: 'Los precios de nuestras guías en este momento están en promoción y pueden volver al precio original en cualquier momento sin previo aviso.'
      }, 
      { 
        question: '¿En caso de duda, puedo hablar con alguien y obtener respuestas?',
        answer: 'Sí, uno de nuestros valores es la excelencia y por esta razón, nuestro WhatsApp siempre está disponible para que puedas resolver todas tus dudas.'
      }
  ]

export const allQuestionAndAnswerENG: QuestionAndAnswer[] = [
      { 
        question: 'After purchasing my guide, how will I access the content?',
        answer: 'As soon as the payment is confirmed, you will have instant access to a PDF that will be sent to your email. In the case of a bank slip, the average approval time for the payment is 3 days.'
      }, 
      { 
        question: 'How long will I have access to my guide?',
        answer: 'Access to the content is lifelong.'
      }, 
      { 
        question: 'For how long will I be able to purchase my guide at this price?',
        answer: 'The prices of our guides are currently on sale and may return to the original price at any time without prior notice.'
      }, 
      { 
        question: 'If I have any questions, can I talk to someone and get answers?',
        answer: 'Yes, one of our values is excellence, and for this reason, our WhatsApp is always available for you to ask any questions you may have.'
      }
  ]

  
export function getAllQuestionAndAnswerByLanguage(language: 'PT' | 'ES' | 'ENG') {
      if (language === 'ES') {
          return allQuestionAndAnswerES
      } else if (language === 'PT') {
          return allQuestionAndAnswerPT
      } else {
          return allQuestionAndAnswerENG
      }
}
  
export function getFaqTittleByLanguage(language: 'PT' | 'ES' | 'ENG') {
      if (language === 'ES') {
          return 'Preguntas frecuentes'
      } else if (language === 'PT') {
          return 'Perguntas frequentes'
      } else {
          return 'Frequently asked questions'
      }
  }