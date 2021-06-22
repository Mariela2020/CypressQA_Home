describe('TC Buscador-Arrendar', function() 
{

  it('Flujo Buscador Arrendar',function ()  
  {
    cy.visit('https://www.toctoc.com/')
    cy.get('#onesignal-slidedown-cancel-button').click()
    cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 

    cy.get('#tipoBusca > :nth-child(2)').click()
    cy.get('#boxBuscador > .form-control').type('Santiago, Santiago')
    cy.xpath('/html/body/div[3]/section[1]/div/div/div[1]/div[2]/div/div[2]/form/div/div/div[1]/span').click()

    cy.wait(3000)
    cy.get(':nth-child(2) > .lnk-info > .c-infores > .info-body > .region').should('be.visible').and('contain','Santiago')
    cy.get('.lnk-info').invoke('removeAttr', 'target').first().click()
    
  
    
 
  })

})