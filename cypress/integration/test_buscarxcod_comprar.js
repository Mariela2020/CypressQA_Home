describe('TC Buscar por código de la propiedad -Comprar', function() 
{
  const d = new Date
  const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 
 
  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

  it('Flujo Buscar por codigo en Comprar',function ()  
  {
    cy.visit('https://www.toctoc.com/')
    cy.get('#onesignal-slidedown-cancel-button').click()
    cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 

    cy.get('#btnLogin').click()
    cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
    cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('mariela.hurtado@toctoc.com')
    cy.get('[id="IngresoUsuario.Contrasena"]').type('prueba',{sensitive: true})
    cy.get(':nth-child(5) > .btn').click()
    cy.wait(2000)
    cy.get('.nom-user').should('be.visible').and('contain','Mariela')
 
    cy.get('#btnBuscaxcod').click()
    cy.get('#cBuscaXcod > .c-buscadatos > .form-row > .col-sm-9 > .form-control').type('TT-1248100')
    cy.get('#cBuscaXcod > .c-buscadatos > .form-row > .col-sm-3 > #btnBusca').click()
    cy.wait(1000)
    
    cy.get('.cf-cta > .btn').click()
    cy.get('.c-btns > .btn-success').click()
    cy.get('.modal-header').should('be.visible')
          
    
  })

})