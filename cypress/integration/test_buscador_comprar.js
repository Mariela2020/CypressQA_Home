describe('TC Buscador-Comprar', function() 
{
  const d = new Date
  const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 
 
  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

  it('Flujo Buscador Comprar',function ()  
  {
    cy.visit('https://www.toctoc.com/')
    cy.get('#onesignal-slidedown-cancel-button').click()
    cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 

    //cy.get('#btnLogin').click()
    //cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
    //cy.intercept("${ssoGatewayUrl}/**").as('sso')
    //cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('hurtadomariela2@gmail.com')
    //cy.get('[id="IngresoUsuario.Contrasena"]').type('prueba',{sensitive: true})
    //cy.get(':nth-child(5) > .btn').click()
    //cy.wait(2000)
    //cy.get('.nom-user').should('be.visible').and('contain','Mariela')

    cy.get('#boxBuscador > .form-control').type('Ñuble, Chile')
    cy.get(':nth-child(2) > .form-row > .col-sm-3 > #btnBusca').click()
   // cy.get('.on > span').click()      cy.get(':nth-child(2) > .form-row > .col-sm-3 > #btnBusca')
    // cy.xpath('/html/body/div[3]/section[1]/div/div/div[1]/div[2]/div/div[2]/form/div/div/div[1]/span').click()
    //cy.get('[style="left: 0px; top: 38px; min-width: 280px; position: absolute;"] > :nth-child(2) > span').click()
    cy.wait(1000)
    
    
   
     
    //cy.get('.tp2 > .lnk-info > .c-infores > .info-body > .dir')
    //cy.get(':nth-child(1) > .lnk-info > .c-infores > .info-body > .region')
    cy.get(':nth-child(1) > .lnk-info > .c-infores > .info-body > .region').then(function($valorelem){
      const comunatxt= $valorelem.text()
      cy.log(comunatxt)       
      cy.writeFile('comuna.txt', '\n\nComuna: ' +comunatxt + ';  '  + date + '  ' + hora, {flag: 'a+'} )            
    
    })

   // cy.get(':nth-child(2) > .lnk-info > .c-infores > .info-body > .region').should('be.visible').and('contain','Tomé')
   
   cy.get('.lnk-info').invoke('removeAttr', 'target').first().click()
        //  cy.get('.cf-cta > .btn').click() 
        //  cy.get('.c-btns > .btn-outline-primary').click()
        //  cy.get('.c-cotiza-planta > .btn').click()
        //  cy.get('.int-h-planta > div > .tt').should('be.visible')
        //  cy.get('.modal-header > .btn-x > .ic-close').click()    
       
    
    //      cy.get(':nth-child(4) > :nth-child(3) > .btn-cotiza-nuevo').click()
    //      cy.get('.logo-cotizacion').should('be.visible')
    //      cy.get('#modal_cotizacion > .modal-dialog > .modal-content > .modal-header > .close > span').click()
      
    
  })

})