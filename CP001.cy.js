describe('Moto E14 64GB', () => {
  it('Comprobar si puede ser pagado en 3 cuotas con tarjeta American Express', () => {
    // Seteamos las dimensiones de pantalla estilo iphone-x//
    cy.viewport('iphone-x');

    // Navegamos hasta la url de tienda Movistar//
    cy.visit('https://tiendaonline.movistar.com.ar/');



    
    cy.screenshot('Screen 1', {capture: 'viewport'});
    //Buscamos el  equipo en la lista y le damos click// 
    cy.get('[data-id="19048"] > a > .product-image > img').click({force: true}); 
    cy.screenshot('Screen 2', {capture: 'viewport'});
    // Abrimos la calculadora de cuotas//
    cy.get('#open-installments-modal').click({force: true}); 
    cy.screenshot('Screen 3', {capture: 'viewport'});
    // Seleccionamos la calculadora de cuotas//
    cy.get('#ui-id-2 > :nth-child(1)').click({force: true});
    cy.screenshot('Screen 4', {capture: 'viewport'});
    cy.get('#inputCard').click({force: true});
    // Seleccionamos el banco American Express
    cy.get('#selectCardByBank > ul > li').click({force: true}); 
    cy.screenshot('Screen 5', {capture: 'viewport'});
    // Seleccionamos la tarjeta Americam Express//
    cy.get('#calculate_btn > .btn-primary').click({force: true});
    cy.get(':nth-child(2) > td').click({force: true});
    cy.screenshot('Screen 6', {capture: 'viewport'});
    // Buscamos el 3er equipo de la lista y le damos click//
    cy.get(':nth-child(2) > td').contains('3 cuotas sin interés de').should('be.visible');
   
  });
});
