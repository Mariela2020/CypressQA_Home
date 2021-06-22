describe('TC Catalogo Inmobiliaria', function() 
{

  it('Flujo Catalogo Inmobiliaria',function ()  
  {
    cy.visit('https://www.toctoc.com/')
    cy.get('#onesignal-slidedown-cancel-button').click()
    cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 

    cy.get(':nth-child(3) > .dropdown').click()
    
   // cy.xpath('//strong[contains(text(),"Catálogo de Inmobiliarias")]').click()
    cy.xpath('//*[@id="menuscroll"]/li[3]/div/div[1]/ul/li[11]/a/strong').click()
    cy.get('.tt').should('be.visible').and('contain','Inmobiliarias')
    
    cy.get('#searchBoxInput').type('Actual')
    cy.get('#btnBusca').click()

    var newUrl = 'https://www.toctoc.com/inmobiliarias/propiedadesInmobiliaria/192/Actual/';
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen').callsFake(url => {
        newUrl = url;
      });
    })

    cy.get('.sld-item').eq(-5).click({force:true})
    cy.get('@windowOpen').should('be.called');
    cy.visit(newUrl)

    cy.get('.tt').should('be.visible').and('contain','Actual')
  
    cy.get('.lnk-info').invoke('removeAttr', 'target').first().click()
       
      
  })

})